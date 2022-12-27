import { getAccessToken } from './accessToken';
import type { ChartConfiguration } from 'chart.js/auto';

const exportData = async (id: string) => {
  const tokens: any[] = [];
  const events = new Object();

  if (!id) {
    throw Error('No event id provided');
  }

  try {
    const access_token = await getAccessToken();

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${access_token}`,
        'X-API-Key': import.meta.env.VITE_API_KEY
      }
    };

    const response = await fetch(
      `https://api.poap.tech/event/${id}/poaps`,
      options
    );

    const data = await response.json();

    while (tokens.length < data.total) {
      const response = await fetch(
        `https://api.poap.tech/event/${id}/poaps?offset=${tokens.length}`,
        options
      );
      const data = await response.json();

      tokens.push(...(data.tokens as []));
    }
  } catch (error) {
    console.log(error);
    throw Error('Error fetching tokens');
  }

  try {
    await Promise.allSettled(
      tokens.map(async (token) => {
        const res = await fetch(
          `https://api.poap.tech/actions/scan/${token.owner.id}`,
          {
            headers: {
              'X-API-Key': import.meta.env.VITE_API_KEY
            }
          }
        );
        const poaps = await res.json();

        await Promise.all(
          poaps.map((poap: any) => {
            if (!events[poap.event.id]) {
              events[poap.event.id] = {
                firstTimeMinted: [poap],
                name: poap.event.name,
                description: poap.event.description,
                totalAddresses: 1
              };
            } else {
              events[poap.event.id].firstTimeMinted.push(
                poap
              );
              events[poap.event.id].totalAddresses++;
            }
          })
        );
      })
    );
  } catch (error) {
    console.log(error);
    throw Error('Error fetching events');
  }

  try {
    const eventsData = await Promise.all(
      Object.keys(events).map(async (id) => {
        const res = await fetch(
          `https://api.poap.tech/events/id/${id}`,
          {
            headers: {
              'X-API-Key': import.meta.env.VITE_API_KEY
            }
          }
        );
        const data = await res.json();
        return data;
      })
    );

    const chart1: ChartConfiguration = {
      type: 'pie',
      data: {
        labels: ['Online', 'Presencial'],
        datasets: [
          {
            label: 'Eventos',
            data: eventsData.reduce(
              (acc, cur) => {
                if (cur.virtual_event) {
                  acc[0]++;
                } else {
                  acc[1]++;
                }
                return acc;
              },
              [0, 0]
            )
          }
        ]
      }
    };

    const maxAddresses = [
      ...new Set(
        Object.keys(events)
          .map((id) => events[id].totalAddresses)
          .sort((a, b) => b - a)
      )
    ];

    const chart2: ChartConfiguration = {
      type: 'pie',
      data: {
        labels: maxAddresses,
        datasets: [
          {
            label: '',
            data: Object.keys(events).reduce((acc, cur) => {
              const count = maxAddresses.find(
                (a) => a === events[cur].totalAddresses
              );
              count && acc[maxAddresses.indexOf(count)]++;
              return acc;
            }, new Array(maxAddresses.length).fill(0))
          }
        ]
      }
    };

    return { chart1: chart1.data, chart2: chart2.data };
  } catch (err) {
    console.log(err);
    throw Error('Error building chart data');
  }
};

export default exportData;

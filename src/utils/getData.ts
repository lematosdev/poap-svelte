import { getAccessToken } from './accessToken';
import type { ChartConfiguration } from 'chart.js/auto';
import { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';
			

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
     
      if(!data){
        console.log("Esta hacio", data)
      }else{
        console.log("con algo dentro", data)
      }
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

    const onlineVSPhisycal = eventsData.reduce(
      (acc, cur) => {
        if (cur.virtual_event) {
          acc[0]++;
        } else {
          acc[1]++;
        }
        return acc;
      },
      [0, 0]
    );
    const mostMintedVirtual = eventsData
      .filter((e) => e.virtual_event)
      .map((e) => events[e.id])
      .sort((a, b) => b.totalAddresses - a.totalAddresses)
      .slice(0, 5);

    const mostMintedPhisycal = eventsData
      .filter((e) => !e.virtual_event)
      .map((e) => events[e.id])
      .sort((a, b) => b.totalAddresses - a.totalAddresses)
      .slice(0, 5);

    const eventsCountries = eventsData.reduce(
      (acc, cur) => {
        if (!cur.virtual_event || !cur.country) return acc;
        const country = cur.country.trim();

        if (!acc[country]) {
          acc[country] = 1;
        } else {
          acc[country]++;
        }
        return acc;
      },
      new Object()
    );
    const chart1: ChartConfiguration = {
      type: 'pie',
      data: {
        labels: ['Online', 'Presencial'],
        datasets: [
          {
            label: 'Eventos',
            data: onlineVSPhisycal
          }
        ]
      }
    };

    const chart2: ChartConfiguration = {
      type: 'pie',
      data: {
        labels: Object.keys(mostMintedVirtual).map(
          (id) => mostMintedVirtual[id].name.split('-')[0]
        ),
        datasets: [
          {
            data: Object.keys(mostMintedVirtual).map(
              (id) => mostMintedVirtual[id].totalAddresses
            )
          }
        ]
      }
    };

    const chart3: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: Object.keys(mostMintedPhisycal).map(
          (id) => mostMintedPhisycal[id].name.split('-')[0]
        ),
        datasets: [
          {
            data: Object.keys(mostMintedPhisycal).map(
              (id) => mostMintedPhisycal[id].totalAddresses
            )
          }
        ]
      }
    };

    const chart4: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: Object.keys(eventsCountries),
        datasets: [
          {
            data: Object.values(eventsCountries)
          }
        ]
      }
    };

    function triggerToast(): void {
      const t: ToastSettings = {
        message: '👋 Hello and welcome to Skeleton.',
        // Optional: Presets for primary | secondary | tertiary | warning
        preset: 'primary',
        // Optional: The auto-hide settings
        autohide: true,
        timeout: 5000,
        // Optional: Adds a custom action button
        action: {
          label: 'Greeting',
          response: () => alert('Hello, Skeleton')
        }
      };
      toastStore.trigger(t);
    }
          
    triggerToast()
if(chart1.data){
  return console.log("agua agua")
}else{  return  {
      
    chart1: chart1.data,
    chart2: chart2.data,
    chart3: chart3.data,
    chart4: chart4.data
  };
}
    
  } catch (err) {
    console.log(err);
    throw Error('Error building chart data');
  }
};

export default exportData;

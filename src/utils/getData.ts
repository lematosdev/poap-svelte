import type { ChartConfiguration } from 'chart.js/auto';
import {
  toastStore,
  type ToastSettings
} from '@skeletonlabs/skeleton';

function triggerToast(): void {
  const t: ToastSettings = {
    message: 'Error al obtener los datos',
    // Optional: Presets for primary | secondary | tertiary | warning
    preset: 'warning',
    // Optional: The auto-hide settings
    autohide: true
  };
  toastStore.trigger(t);
}

const exportData = async (id: string) => {
  let response = null;

  try {
    response = await fetch(
      `${import.meta.env.VITE_URL}/${id}`
    );
  } catch (error) {
    triggerToast();
    return;
  }

  if (!response.ok) {
    triggerToast();
    return;
  }

  const {
    onlineVSPhisycal,
    mostMintedVirtual,
    mostMintedPhisycal,
    eventsCountries,
    excel
  } = await response.json();

  const chart1: ChartConfiguration = {
    type: 'pie',
    data: {
      labels: ['Online', 'Presencial'],
      datasets: [
        {
          label: 'Eventos',
          data: onlineVSPhisycal,
          backgroundColor: ['#704F91', '#7BB4DD']
        }
      ]
    }
  };

  const chart2: ChartConfiguration = {
    type: 'pie',
    data: {
      labels: mostMintedVirtual.map(
        (item) => item.name.split('-')[0]
      ),
      datasets: [
        {
          data: mostMintedVirtual.map(
            (item) => item.totalAddresses
          ),
          backgroundColor: [
            '#7BB4DD',
            '#3578A8',
            '#D8508F',
            '#A61356',
            '#704F91',
            '#341356',
            '#4A30D3',
            '#2E11CD'
          ]
        }
      ]
    }
  };

  const chart3: ChartConfiguration = {
    type: 'pie',
    data: {
      labels: mostMintedPhisycal.map(
        (item) => item.name.split('-')[0]
      ),
      datasets: [
        {
          data: mostMintedPhisycal.map(
            (item) => item.totalAddresses
          ),
          backgroundColor: [
            '#7BB4DD',
            '#3578A8',
            '#D8508F',
            '#A61356',
            '#704F91',
            '#341356',
            '#4A30D3',
            '#2E11CD'
          ]
        }
      ]
    }
  };

  const sortedEventsCountries = Object.entries(
    Object.entries(eventsCountries).sort(
      ([, a]: any, [, b]: any) => b - a
    )
  )
    .slice(0, 5)
    // map the array to return key value pairs
    .map((item) => [item[1][0], item[1][1]]);

  const chart4: ChartConfiguration = {
    type: 'pie',
    data: {
      labels: sortedEventsCountries.map(([key]) => key),
      datasets: [
        {
          data: sortedEventsCountries.map(([, value]) =>
            Number(value)
          ),
          backgroundColor: [
            '#7BB4DD',
            '#3578A8',
            '#D8508F',
            '#A61356',
            '#704F91',
            '#341356',
            '#4A30D3',
            '#2E11CD',
            '#a18cd1',
            '#7CB0DA',
            '#BD426D',
            '#D1D1FA',
            '#90D0F0',
            '#00f2fe',
            '#918DB7'
          ]
        }
      ]
    }
  };

  return {
    chart1: chart1.data,
    chart2: chart2.data,
    chart3: chart3.data,
    chart4: chart4.data,
    excel
  };
};

export default exportData;

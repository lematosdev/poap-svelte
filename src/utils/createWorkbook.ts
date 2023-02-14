import * as XLSX from 'xlsx';

export default function createWorkBook(events: any) {
  /* flatten objects */  
  try {
    const rows = Object.entries(events)
      .map(([id, event]: any) => ({
        id,
        name: event.name,
        description: event.description,
        totalAddresses: event.totalAddresses,
        firstTimeMinted: event.firstTimeMinted.reduce(
          (acc: string, curr) => {
            if (acc === '') {
              return curr.created;
            }
            if (
              new Date(acc).getTime() <
              new Date(curr.created).getTime()
            ) {
              return acc;
            } else {
              return curr.created;
            }
          },
          ''
        )
      }))
      .sort((a, b) => b.totalAddresses - a.totalAddresses);

    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      'Eventos'
    );

    worksheet['!cols'] = [
      { wch: 7 },
      { wch: 40 },
      { wch: 60 },
      { wch: 5 },
      { wch: 18 }
    ];

    XLSX.utils.sheet_add_aoa(
      worksheet,
      [
        [
          'Event ID',
          'NOMBRE',
          'DESCRIPCIÓN',
          'TOTAL DE DIRECCIONES',
          'PRIMER MINTEO'
        ]
      ],
      { origin: 'A1' }
    );

    let blob = new Blob(
      [
        XLSX.write(workbook, {
          bookType: 'xlsx',
          type: 'array'
        })
      ],
      { type: 'application/octet-stream' }
    );
    let link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'data.xlsx';
    link.click();
  } catch (error) {
    console.log('Error en createWorkBook', error);
    throw error;
  }
}

function myFunction1_1() {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("シート1");
  const [header, ...records] = sheet.getDataRange().getValues();

  const dictsRecords = records.map(record => {
    const obj = {};
    header.forEach((element, index) => obj[element] = record[index]);
    return obj;
  });

  console.log(dictsRecords);
  // [ { id: 'tg001', name: 'Tsujike', address: 'Hokkaido' },
  // { id: 'tg002', name: 'Takahashi', address: 'Fukuoka' },
  // { id: 'tg003', name: 'Etau', address: 'Tokyo' } ]

}

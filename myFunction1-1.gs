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

  //今まで
  console.log(records[0][0]); //tg001
  console.log(records[2][2]); //Tokyo

  //オブジェクト化
  console.log(dictsRecords[0]["id"]); //tg001
  console.log(dictsRecords[2]["address"]); //Tokyo

  const undoDictsRecords = dictsRecords.map(record => Object.values(record));
  console.log(undoDictsRecords);
  // [ [ 'tg001', 'Tsujike', 'Hokkaido' ],
  // [ 'tg002', 'Takahashi', 'Fukuoka' ],
  // [ 'tg003', 'Etau', 'Tokyo' ] ]

}

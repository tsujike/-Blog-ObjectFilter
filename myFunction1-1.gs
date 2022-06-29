function myFunction1_1() {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("シート1");
  const [header, ...records] = sheet.getDataRange().getValues();

  const objectRecords = records.map(record => {
    const obj = {};
    header.forEach((element, index) => obj[element] = record[index]);
    return obj;
  });

  console.log(objectRecords);
  // [ { id: 'tg001', name: 'Tsujike', address: 'Hokkaido' },
  // { id: 'tg002', name: 'Takahashi', address: 'Fukuoka' },
  // { id: 'tg003', name: 'Etau', address: 'Tokyo' } ]

  //今まで
  console.log(records[0][0]); //tg001
  console.log(records[2][2]); //Tokyo

  //オブジェクト化
  console.log(objectRecords[0]["id"]); //tg001
  console.log(objectRecords[2]["address"]); //Tokyo

  const undoObjectRecords = objectRecords.map(record => Object.values(record));
  console.log(undoObjectRecords);
  // [ [ 'tg001', 'Tsujike', 'Hokkaido' ],
  // [ 'tg002', 'Takahashi', 'Fukuoka' ],
  // [ 'tg003', 'Etau', 'Tokyo' ] ]

}

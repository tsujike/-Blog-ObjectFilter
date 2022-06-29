function myFunction2_3() {

  const tag = ["A", "B", "C"];
  const numbers = [1, 2, 3];
  const mappedNumbers = numbers.map((number, index) => {
    return [`${tag[index]} - ${number}`];
  });

  console.log(mappedNumbers); //[ [ 'A - 1' ], [ 'B - 2' ], [ 'C - 3' ] ]

  //オブジェクト化レコーズ
  const members = [
    { id: "tg001", name: "Tsujike", address: "Hokkaido" },
    { id: "tg002", name: "Takahashi", address: "Fukuoka" },
    { id: "tg003", name: "Etau", address: "Tokyo" },
  ];

  //必要なプロパティのみ抽出
  const filteredProperties = members.map(member => {

    const keys = Object.keys(member);
    const values = Object.values(member);
    const newObj = {};
    keys.forEach((key, index) => {
      if (key === "name" || key === "id") newObj[key] = values[index];
    });

    return newObj;
  });

  console.log(filteredProperties);
  // 	[ { id: 'tg001', name: 'Tsujike' },
  // { id: 'tg002', name: 'Takahashi' },
  // { id: 'tg003', name: 'Etau' } ]

}

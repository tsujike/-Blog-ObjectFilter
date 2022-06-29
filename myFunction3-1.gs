function myFunction3_1() {

  const tag = ["A", "B", "C"];
  const numbers = ["A", "B", "B"];
  const filteredNumbers = numbers.filter((number, index) => {
    return number === tag[index];
  });

  console.log(filteredNumbers); //[ 'A', 'B' ]



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

  const filteredMembers = filteredProperties.filter(property => {
    return property["id"] === "tg001" || property["id"] === "tg002";
  });

  console.log(filteredMembers);
  // [ { id: 'tg001', name: 'Tsujike' },  { id: 'tg002', name: 'Takahashi' } ]


}

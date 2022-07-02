function myFunction3_1() {

  const lists = [{ id: "A", number: 0 }, { id: "B", number: 1 }, { id: "C", number: 2 }, { id: "D", number: 3 }];
  const primaryKeys = ["D", "B"];
  const mainKey = "id";

  const filteredNumbers = primaryKeys.map(pk => {
    return lists.filter(list => list[mainKey] === pk)[0]; //見つかるのは1件なので[0]
  });

  console.log(filteredNumbers); //[{id:"D",number:3},{id:"B",number:1}]


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

  //「idが"tg002"」のメンバーと、「idが"tg001"」のメンバーのみを順番に抽出したい
  const filteredMembers = filteredProperties.filter(property => {
    return property["id"] === "tg002" || property["id"] === "tg001";
  });

  console.log(filteredMembers);
  // 結果は、オブジェクトレコーズの順番になってしまう。
  // [ { id: 'tg001', name: 'Tsujike' },  { id: 'tg002', name: 'Takahashi' } ]


}

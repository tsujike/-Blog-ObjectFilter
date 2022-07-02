function myFunction3_2() {

  //元データ
  const members = [
    { id: "tg001", name: "Tsujike", address: "Hokkaido" },
    { id: "tg002", name: "Takahashi", address: "Fukuoka" },
    { id: "tg003", name: "Etau", address: "Tokyo" },
  ];

  //プロパティのフィルターに必要な条件要素の配列
  const propertiesFilter = ["name", "id"];

  //membersを必要なプロパティのみでmapする
  const filteredProperties = members.map(member => {

    //空のオブジェクト生成とレコードのプロパティを都度配列に格納
    const keys = Object.keys(member);
    const newObj = {};

    //条件要素の配列に対してループ処理
    propertiesFilter.forEach(property => {
      if (keys.includes(property)) newObj[property] = member[property];
    });

    // できあがったオブジェクトをmapにreturn
    return newObj;
  });
  console.log(filteredProperties);
  // [ { name: 'Tsujike', id: 'tg001' },
  //   { name: 'Takahashi', id: 'tg002' },
  //   { name: 'Etau', id: 'tg003' } ]

}

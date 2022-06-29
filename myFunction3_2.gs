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

    //空のオブジェクト生成とレコードのプロパティと値を都度配列に格納
    const newObj = {};
    const keys = Object.keys(member);
    const values = Object.values(member);

    //全プロパティに対してループ処理
    keys.forEach((key, index) => {

      //条件要素の配列を照合しながらオブジェクトを生成
      propertiesFilter.forEach(property => {
        if (key === property) newObj[key] = values[index];
      });

    });

    //できあがったオブジェクトをmapにreturn
    return newObj;
  });
  console.log(filteredProperties);
  // [ { id: 'tg001', name: 'Tsujike' },
  //   { id: 'tg002', name: 'Takahashi' },
  //   { id: 'tg003', name: 'Etau' } ]

}
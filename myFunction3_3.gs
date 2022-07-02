function myFunction3_3() {

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

  //メンバーのフィルターに必要な配列を定義
  const membersFilter = ["tg002", "tg001"];

  //フィルターがけの対象となるプロパティを指定
  const mainKey = "id";

  //filteredPropertiesから必要なメンバー順で抽出する
  const filteredMembers = membersFilter.map(memberId => {
    return filteredProperties.filter(member => memberId === member[mainKey])[0];//見つかるのは1件なので[0];
  });

  console.log(filteredMembers);
  //	[ { name: 'Takahashi', id: 'tg002' },  { name: 'Tsujike', id: 'tg001' } ]

  const undoObjectRecords = filteredMembers.map(record => Object.values(record));
  console.log(undoObjectRecords);
  //[ [ 'Takahashi', 'tg002' ], [ 'Tsujike', 'tg001' ] ]

}

function myFunction1_2() {

  const member = { id: 1, name: "Tsujike", address: "Hokkaido" };
  member.__proto__.property = "";

  console.log(member); //{ id: 1, name: 'Tsujike', address: 'Hokkaido' }

  for (const value in member) {
    console.log(value);　//id, name, address, property
  }

  console.log();

  const keys = Object.keys(member);
  console.log(keys); //[ 'id', 'name', 'address' ]

  const values = Object.values(member);
  console.log(values); //[ 1, 'Tsujike', 'Hokkaido' ]

  const element = Object.entries(member);
  console.log(element); //	[ [ 'id', 1 ], [ 'name', 'Tsujike' ], [ 'address', 'Hokkaido' ] ]

  for (const [key, value] of Object.entries(member)) {
    console.log(`key:${key} と value:${value}`);
  }
  //key:id と value:1
  //key:name と value:Tsujike
  //key:address と value:Hokkaido

}


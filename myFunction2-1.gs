function myFunction2_1() {

  const tag = ["A", "B", "C"];
  const numbers = [1, 2, 3];
  numbers.forEach((number, index) => {
    console.log(`${tag[index]} - ${number}`);
    console.log();
  });

  //A - 1
  //
  //B - 2
  //
  //C - 3

  const member = { id: 1, name: "Tsujike", address: "Hokkaido" };
  const keys = Object.keys(member);
  const values = Object.values(member);

  const newObj = {};
  keys.forEach((key, index) => {
    if (values[index] === "Tsujike") newObj[key] = values[index];
  });
  console.log(newObj);//{ name: 'Tsujike' }


  const newObj2 = {};
  keys.forEach((key, index) => {
    if (values[index] !== "Tsujike") newObj2[key] = values[index];
  });
  console.log(newObj2); //{ id: 1, address: 'Hokkaido' }
}

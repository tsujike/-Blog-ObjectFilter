function myFunction2_2() {

  const member = { id: 1, name: "Tsujike", address: "Hokkaido" };
  const keys = Object.keys(member);
  const values = Object.values(member);

  const newObj = {};
  keys.forEach((key, index) => {
    if (key === "name" || key === "id") newObj[key] = values[index];
  });
  console.log(newObj); //{ id: 1, name: 'Tsujike' }

  //   keys.forEach((key, index) => {
  //   if (key === "name") newObj[key] = values[index];
  //   if (key === "id") newObj[key] = values[index];
  // });


  const newObj2 = {};
  keys.forEach((key, index) => {
    if (key !== "name") newObj2[key] = values[index];
  });
  console.log(newObj2); //{ id: 1, address: 'Hokkaido' }


  const newObj3 = {};
  keys.forEach((key, index) => {
    if (key === "name") return;
    if (key === "id") return;
    newObj3[key] = values[index];
  });
  console.log(newObj3); //{ address: 'Hokkaido' }


  const newObj4 = {};
  keys.forEach((key, index) => {
    if (key === "name" || key === "id") return;
    newObj4[key] = values[index];
  });
  console.log(newObj4); //{ address: 'Hokkaido' }

}

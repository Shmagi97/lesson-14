const numberArrays = [2, 4, 6, 8, 10, 12];
console.log(numberArrays);
numberArrays.pop();
numberArrays.unshift(12);
console.log(numberArrays);

const produqt = [
  {
    productTitle: "skami",
    productPrice: 120,
  },

  {
    productTitle: "magida",
    productPrice: 280,
  },
  {
    productTitle: "mdivani",
    productPrice: 560,
  },
];

console.log(produqt);

const calc = [10, 20, 30, 40, 50];
console.log(calc);
const jami = calc[0] + calc[1] + calc[2] + calc[3] + calc[4];
console.log("jami =", jami);
const sashAritmetikuli = jami / calc.length;
console.log("sashvalo aritmetikuli = ", sashAritmetikuli);

const object = [
  {
    phoneName: "iphone 8",
    phoneDescription: "es aris aifon 8",
    phonePrice: 1470,
    shopAddresses: "Gorgiladze Street 34, 6 Melikishvili Street, Batumi 6000",
    phoneMemoryinGb: 128,
  },
];
console.log("phone name is -", object[0].phoneName);
console.log("phone price is -", object[0].phonePrice, "gel");
console.log("and you can buy it at -", object[0].shopAddresses);

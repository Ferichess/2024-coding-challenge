const arrayWithNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayWithString = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const arrayWithObject = [
  { id: 1, name: "Eko" },
  { id: 2, name: "Budi" },
  { id: 3, name: "Joko" },
];

const arrNumString = [
  1,
  "dua",
  3,
  "empat",
  5,
  "enam",
  7,
  "delapan",
  9,
  "sepuluh",
];

const arrDefined = [null, undefined, "", 0];

const arrUndefined = [];

const arrTrutyFalsy = [true, 1, false, 0];

const arrSpreedOprator = [
  ...arrayWithNum,
  ...arrayWithString,
  ...arrayWithObject,
  ...arrNumString,
  ...arrDefined,
  ...arrUndefined,
  ...arrTrutyFalsy,
];

const arrRandom = [
  "",
  0,
  false,
  1,
  true,
  null,
  undefined,
  NaN,
  "abc",
  "123",
  {},
  { key: 1, value: "abc" },
  [],
];

const arr2dimensi = [
  ["Rook", "Knight", "Bishop", "Queen", "King", "Bishop", "Knight", "Rook"],
  ["Pawn", "Pawn", "Pawn", "Pawn", "Pawn", "Pawn", "Pawn", "Pawn"],
  ["Pawn", "Pawn", "Pawn", "Pawn", "Pawn", "Pawn", "Pawn", "Pawn"],
];

const arr3dimensi = [
  [
    // Layer 1 (ground level)
    [0, 0, 1, 2, 3, 4],
    [5, 0, 1, 2, 0, 4],
    // ... (other rows representing the layer)
  ],
  [
    // Layer 2
    [5, 5, 5, 5, 5, 5],
    [6, 6, 6, 6, 6, 6],
  ],
  [
    // Layer 3
    [7, 7, 7, 7, 7, 7, 7],
    [8, 8, 8, 8, 8, 8, 8],
  ],
];

//   const arr = Array(Array(Array(4).concat(arrTrutyFalsy)))

// const arr = Array(2).fill(null).map(() => {
//     return Array().concat(arrTrutyFalsy)
// })

// const arr = Array.from({ length: 2 }).reduce((acc, _) => {
//     return [...acc, Object.fromEntries(arrayWithObject.map((el) => [el.id, el.name]))];
//   }, []);



console.log(Array(1,2,3).map(() => Object.freeze({length : Array(1,2,3), num : Array(4,5,6)})));

console.log(String('abc').split('').map(() => Object.is('abc', 'abc')));

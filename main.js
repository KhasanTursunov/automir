// 1-masala
// function vaporcode(string) {
//   return string
//     .split("")
//     .filter((e) => e.trim() !== "")
//     .join("  ")
//     .toUpperCase();
// }



// 2-masala
// function points(games) {
//   let score = 0;
//   for (const i of games) {
//     if (i[0] > i[2]) score += 3;
//     if (i[0] === i[2]) score += 1;
//   }
//   return score;
// }


// 3-masala
// const sumAverage = (arr) => {
//   let allAverage = 0;
//   for (const subArr of arr) {
//     let sum = 0;
//     for (let item of subArr) {
//       sum += item;
//     }
//     allAverage += sum / subArr.length;
//   }
//   return Math.round(allAverage);
// };



// 4-masala
// function oddOne(arr) {
//   for (const i of arr) {
//     if (Math.abs(i) % 2 === 1) return arr.indexOf(i);
//   }
//   return -1;
// }

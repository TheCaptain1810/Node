// const fs = require("fs");
const fs = require("fs").promises;

// **Using Asynchronous method**
// fs.stat("./asynchronous.txt", (err, stats) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(stats.isFile());
//   console.log(stats.isDirectory());
//   console.log(stats.isSymbolicLink());
//   console.log(stats.size);
//   console.log(stats);
// });

// **Using Synchronous method**
// try {
//   const stats = fs.statSync("./asynchronous.txt");
//   console.log(stats.isFile());
//   console.log(stats.isDirectory());
//   console.log(stats.isSymbolicLink());
//   console.log(stats.size);
//   console.log(stats);
// } catch (error) {
//   console.error(error);
// }

// Promise-based approach
async function example() {
  try {
    const stats = await fs.stat("./asynchronous.txt");
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink());
    console.log(stats.size);
    console.log(stats);
  } catch (error) {
    console.error(error);
  }
}
example();

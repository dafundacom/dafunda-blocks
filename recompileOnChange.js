const chokidar = require("chokidar");
const {
  promises: { readdir, writeFile, readFile },
} = require("fs");
const { transformFileAsync } = require("@babel/core");
const { resolve } = require("path");

function convertToEs5(file) {
  transformFileAsync(file)
    .then((result) => {
      const target = `${file.replace(/front\.js$/, "front.build.js")}`;

      readFile(target, "utf-8")
        .then((data) => {
          if (data !== result.code) {
            writeFile(target, result.code).catch((err) => {
              throw err;
            });
          }
        })
        .catch((err) => {
          if (err.code === "ENOENT") {
            writeFile(target, result.code).catch((err) => {
              throw err;
            });
          } else throw err;
        });
    })
    .catch((err) => console.log(err));
}

chokidar
  .watch("./src/blocks/*/front.js")
  .on("add", (file) => convertToEs5(file))
  .on("change", (file) => convertToEs5(file));

//taken from qwtel at https://stackoverflow.com/a/45130990
async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

const fs = require("fs");
const path = require("path");

const blockPath = path.join(process.cwd(), "src", "blocks");

const blocks = fs
  .readdirSync(blockPath, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

console.log("🚀 ~ file: get-class-safelist.js:10 ~ blocks:", blocks);

let classNames = [];

blocks.forEach((blockName) => {
  console.log(
    "🚀 ~ file: get-class-safelist.js:16 ~ blocks.forEach ~ blockName:",
    blockName
  );
  let filePath = "";
  if (fs.existsSync(path.join(blockPath, blockName, "save/template.php"))) {
    filePath = path.join(blockPath, blockName, "save/template.php");
  } else {
    filePath = path.join(blockPath, blockName, "save/index.php");
  }
  const htmlCode = fs.readFileSync(filePath, "utf8");

  const classPattern = /class="([^"]+)"/g;
  let classes = [];
  let match;

  while ((match = classPattern.exec(htmlCode))) {
    const classNames = match[1].split(" ");
    classes = classes.concat(classNames);
  }

  classes = classes.filter(
    (c) =>
      c &&
      !c.includes("?") &&
      !c.includes("$") &&
      !c.includes("in_array") &&
      c !== "!" &&
      !c.includes(blockName) &&
      !c.includes(blockName.replace("-", ""))
  );

  let uniqueClasses = [...new Set(classes)];
  uniqueClasses = uniqueClasses.map((c) => {
    c = c.replace("\n", "");
    return c;
  });
  classNames = [...classNames, ...uniqueClasses];
});

let uniqueClasses = removeDuplicates(classNames);

uniqueClasses.sort();

uniqueClasses = filterArray(uniqueClasses, [
  "!",
  "svg-thumbdown",
  "svg-thumbup",
  "wp-block",
  "dbe-block",
  "pros",
  "pros-cons",
  "progress",
  "wrapper-how-to-review",
  "title",
  "==",
  "advanced-mode-svg",
  "cons",
  "bar",
  "cost-display-text",
  "description",
  "percentage",
  "score",
  "marker",
]);

fs.writeFileSync(
  path.join(process.cwd(), "config/scripts/.safelist.json"),
  JSON.stringify(uniqueClasses, null, 2)
);

fs.writeFileSync(
  path.join(process.cwd(), "config/scripts/.safelist.txt"),
  uniqueClasses.join(" ")
);

function filterArray(array, except) {
  const exceptSet = new Set(except);
  const filteredArray = array.filter(element => !startsWithAny(element, exceptSet));
  return filteredArray;
}

function startsWithAny(str, prefixSet) {
  for (const prefix of prefixSet) {
    if (str.startsWith(prefix)) {
      return true;
    }
  }
  return false;
}



function removeDuplicates(arr) {
  const uniqueArray = [];
  const seen = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!seen[item]) {
      uniqueArray.push(item);
      seen[item] = true;
    }
  }

  return uniqueArray;
}

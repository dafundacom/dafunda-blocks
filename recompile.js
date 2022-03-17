const { writeFileSync } = require("fs");
const { transformFileSync } = require("@babel/core");
const { resolve } = require("path");
const { readdir } = require("fs").promises;

(async () => {
	for await (const f of getFiles(__dirname + "/src")) {
		if (f.endsWith("front.js")) {
			try {
				writeFileSync(
					`${f.replace(/front\.js$/, "front.build.js")}`,
					transformFileSync(f).code
				);
			} catch (err) {
				console.log(err);
			}
		}
	}
})();

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

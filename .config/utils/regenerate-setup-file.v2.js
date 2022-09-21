const fs = require('fs')
const path = require('path')

module.exports = function () {
  let file_path = path.resolve(process.cwd(), 'setup.php')
  let pkg = JSON.parse(
    fs.readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf8'),
  )
  let { title, homepage, description, version, author, name, license } = pkg
  let data = fs.readFileSync(file_path, 'utf8')
  data = data.split(/\r?\n/)

  let mustedit = {
    'Plugin Name': title,
    'Plugin URI': homepage,
    Description: description,
    Version: version,
    Author: author,
    'Author URI': homepage,
    'Text Domain': name,
    License: license,
  }

  for (let index = 0; index < data.length; index++) {
    let line = data[index]
    Object.keys(mustedit).forEach((key) => {
      if (line.match(new RegExp(key, 'i'))) {
        let str = line.split(':')[1]
        str = `${mustedit[key]}`
        data[index] = `${line.split(':')[0]}: ${str}`
        return
      }
    })
    if (line.match(new RegExp(/\*\//, 'i'))) break
  }

  data = data.map((d) => `${d}\n`)
  data = data.join('')
  fs.writeFileSync(file_path, data, 'utf8')
  console.log(`REGENERATE SETUP.PHP FILE SUCCESS`)
}

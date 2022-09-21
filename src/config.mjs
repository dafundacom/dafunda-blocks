import pkg from '../package.json' assert {type: "json"}

let config = {
    title: pkg.title ?? "",
    name: pkg.name ?? "",
    prefix: pkg.prefix ?? "",
    category: "widgets",
}

config.keywords = [config.prefix, config.title, config.name]

export default config

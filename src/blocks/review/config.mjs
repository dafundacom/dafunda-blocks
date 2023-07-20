import { __ } from "@wordpress/i18n";
import slug from "slug";
import base_config from "../../config.mjs";
import style_attributes from "./attributes/style.mjs"
import scheme_attributes from "./attributes/scheme.mjs"

const NAME = "Review";

const config = {
    $schema: "https://schemas.wp.org/trunk/block.json",
    apiVersion: 2,
    title: __(`${NAME} (${base_config.title})`),
    name: `${base_config.prefix}/${slug(NAME)}`,
    version: "0.0.1",
    keywords: [...base_config.keywords.map((v) => __(v)), __(NAME)],
    category: base_config.category,
    attributes: {
        blockID: {
            type: "string",
            default: "",
        },
        title: {
            type: "string",
            default: "",
        },
        description: {
            type: "string",
            default: "",
        },
        pros: {
            type: "array",
            default: []
        },
        cons: {
            type: "array",
            default: []
        },
        breakdowns: {
            type: "array",
            default: []
        },
        ...style_attributes,
        ...scheme_attributes,
    },
    supports: {
        html: false,
        multiple: false,
    },
    editorScript: "file:./block.jsx",
    viewScript: "file:./scripts/index.js",
};

export default config;

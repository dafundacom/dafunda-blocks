import { __ } from '@wordpress/i18n'
import base_config from '../../config.mjs'
import slug from "slug"


let NAME = "Download Button"

let config = {
    "$schema": "https://schemas.wp.org/trunk/block.json",
    apiVersion: 2,
    title: __(`${NAME} (${base_config.title})`),
    name: `${base_config.prefix}/${slug(NAME)}`,
    version: "0.0.1",
    keywords: [...base_config.keywords.map(v => __(v)), __(NAME)],
    category: base_config.category,
    attributes: {
        blockID: {
            type: "string",
            default: ""
        },
        imageurl: {
            type: "string",
            default: ""
        },
        imageid: {
            type: "string",
            default: ""
        },
        imagealt: {
            type: "string",
            default: ""
        },
        title: {
            type: "string",
            default: "Title"
        },
        description: {
            type: "string",
            default: "Little description"
        },
        url: {
            type: "string",
            default: ""
        },
        version: {
            type: "string",
            default: ""
        },
        system: {
            type: "string",
            default: ""
        },
        fileSize: {
            type: "string",
            default: ""
        },
        license: {
            type: "string",
            default: ""
        },
        developer: {
            type: "string",
            default: ""
        },
        currency: {
            type: "string",
            default: ""
        },
        price: {
            type: "string",
            default: ""
        },
        buttonText: {
            type: "string",
            default: "Download"
        },
        buttonColor: {
            type: "string",
            default: "#313131"
        },
        buttonHoverColor: {
            type: "string",
            default: "#313131"
        },
        buttonTextColor: {
            type: "string",
            default: "#ffffff"
        },
        buttonTextHoverColor: {
            type: "string",
            default: "#ffffff"
        },
        buttonRounded: {
            type: "boolean",
            default: false
        },
        addNofollow: {
            type: "boolean",
            default: true
        },
        openInNewTab: {
            type: "boolean",
            default: true
        },
        addSponsored: {
            type: "boolean",
            default: true
        },
        schemaApplicationCategory: {
            type: "string",
            default: "GameApplication"
        },
        buttonAlign: {
            type: "string",
            default: "center"
        }
    },
    supports: {
        html: false,
        multiple: false
    },
    editorScript: "file:./block.jsx",
    viewScript: "file:./scripts/index.js"
}

export default config

import { __ } from "@wordpress/i18n";
import slug from "slug";
import base_config from "../../config.mjs";

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
        ID: {
            type: "string",
            default: "",
        },
        authorName: {
            type: "string",
            default: "",
        },
        itemName: {
            type: "string",
            default: "",
        }, 
        itemType: {
            type: "string",
            default: "Product",
        },
        // for book, movie, and local business link
        itemPage: {
            type: "string",
            default: "",
        },
        itemSubtype: {
            type: "string",
            default: "",
        },
        itemSubsubtype: {
            type: "string",
            default: "",
        },
        valueType: {
            type: "string",
            default: "star", // also support percent
        },
        description: {
            type: "string",
            default: "",
        },
        descriptionAlign: {
            type: "string",
            default: "left",
        },
        imgPosition: {
            type: "string",
            default: "right",
        },
        imgURL: {
            type: "string",
            default: "",
        },
        imgID: {
            type: "number",
        },
        imgAlt: {
            type: "string",
            default: "",
        },
        parts: {
            type: "array",
            default: [{ label: "", value: 0 }],
            //   default: [],
        },
        items: {
            type: "string",
            //   default: '[]',
            default: '[{"label":"","value":0}]',
            // default: [{
            //     label: "",
            //     value: 0
            // }]
        },
        starCount: {
            type: "number",
            default: 5,
        },
        useSummary: {
            type: "boolean",
            default: true,
        },
        summaryTitle: {
            type: "string",
            default: "Summary",
        },
        summaryDescription: {
            type: "string",
            default: "",
        },
        callToActionText: {
            type: "string",
            default: "",
        },
        callToActionFontSize: {
            type: "number",
            default: 0,
        },
        callToActionURL: {
            type: "string",
            default: "",
        },
        callToActionBackColor: {
            type: "string",
            default: "#34495E",
        },
        callToActionBorderColor: {
            type: "string",
            default: "#ffffff",
        },
        callToActionForeColor: {
            type: "string",
            default: "#ffffff",
        },
        inactiveStarColor: {
            type: "string",
            default: "#888888",
        },
        activeStarColor: {
            type: "string",
            default: "",
        },
        activePercentBarColor: {
            type: "string",
            default: "",
        },
        percentBarColor: {
            type: "string",
            default: "",
        },
        titleAlign: {
            type: "string",
            default: "left",
        },
        authorAlign: {
            type: "string",
            default: "left",
        },
        enableCTA: {
            type: "boolean",
            default: true,
        },
        ctaNoFollow: {
            type: "boolean",
            default: true,
        },
        ctaOpenInNewTab: {
            type: "boolean",
            default: true,
        },
        ctaIsSponsored: {
            type: "boolean",
            default: false,
        },
        ctaAlignment: {
            type: "string",
            default: "left",
        },
        enableReviewSchema: {
            type: "boolean",
            default: true,
        },
        enableImage: {
            type: "boolean",
            default: false,
        },
        enableDescription: {
            type: "boolean",
            default: false,
        },
        starOutlineColor: {
            type: "string",
            default: "",
        },
        imageSize: {
            type: "number",
            default: 100, // range: 0-200
        },
        brand: {
            type: "string",
            default: "",
        },
        sku: {
            type: "string",
            default: "",
        },
        identifier: {
            type: "string",
            default: "",
        },
        identifierType: {
            type: "string",
            default: "gtin", // nsn, mpn, gtin8, gtin12, gtin13, gtin14, gtin
        },
        offerType: {
            type: "string",
            default: "Offer", // can also be set to aggregate offer (which prevevnts calltoactionurl from being  used as offer url)
        },
        offerStatus: {
            type: "string",
            default: "InStock", // available values: Discontinued, InStock, InStoreOnly, LimitedAvailability, OnlineOnly, OutOfStock, PreOrder, PreSale, SoldOut
        },
        // begin aggregate offer-only attributes
        offerHighPrice: {
            type: "number",
            default: 0,
        },
        offerLowPrice: {
            type: "number",
            default: 0,
        },
        offerCount: {
            type: "number",
            default: 0,
        },
        // end aggregate offer-only attributes
        offerPrice: {
            // only for offer
            type: "number",
            default: 0,
        },
        offerCurrency: {
            type: "string",
            default: "USD",
        },
        offerExpiry: {
            type: "number",
            // default: 60 * (10080 + Math.ceil(Date.now() / 60000)),
            default: 0,
        },
        usePhysicalAddress: {
            type: "boolean",
            default: true, // can be set to false when using event itemType
        },
        address: {
            // for localbusiness location, organiztion location, and event location
            type: "string",
            default: "",
        },
        addressName: {
            // for event location
            type: "string",
            default: "",
        },
        url: {
            // for event and organization virtual location
            type: "string",
            default: "",
        },
        reviewPublisher: {
            type: "string",
            default: "",
        },
        reviewPublicationDate: {
            type: "number",
            default: Math.ceil(Date.now() / 1000),
        },
        // beginning of book-only attributes
        bookAuthorName: {
            type: "string",
            default: "",
        },
        isbn: {
            type: "string",
            default: "",
        },

        // end of book-only attributes
        cuisines: {
            // for restaurant
            type: "array",
            default: [], // should be an array of strings
        },
        phoneNumber: {
            type: "string",
            default: "",
        },
        priceRange: {
            type: "string",
            default: "",
        },
        appCategory: {
            // softwareapplication only
            type: "string",
            default: "",
        },
        operatingSystem: {
            // softwareapplication only
            type: "string",
            default: "",
        },
        provider: {
            // for course
            type: "string",
            default: "",
        },
        // beginning of event-only attributes
        eventStartDate: {
            type: "number",
            default: 60 * (1440 + Math.ceil(Date.now() / 60000)), // 24 hours from Date.now
        },
        eventEndDate: {
            type: "number",
            default: 0, // toggling an option should set this to 48 hours from Date.now
        },
        eventPage: {
            type: "string",
            default: "",
        },
        organizer: {
            type: "string",
            default: "",
        },
        performer: {
            type: "string",
            default: "",
        },
        // end event only attributes
        // begin video object attributes
        videoUploadDate: {
            type: "number",
            default: Math.ceil(Date.now() / 1000),
        },
        videoURL: {
            type: "string",
            default: "",
        },
    },
    supports: {
        html: false,
        multiple: false,
    },
    editorScript: "file:./block.jsx",
    viewScript: "file:./scripts/index.js",
};

export default config;

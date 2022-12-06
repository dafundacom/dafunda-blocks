export default {
    enableReviewSchema: {
        type: "boolean",
        default: true,
    },
    itemType: {
        type: "string",
        default: "Product",
    },
    itemSubtype: {
        type: "string",
        default: "",
    },
    itemSubsubtype: {
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
    eventStartDate: {
        type: "number",
        default: 60 * (1440 + Math.ceil(Date.now() / 60000)), // 24 hours from Date.now
    },
    eventEndDate: {
        type: "number",
        default: 0, // toggling an option should set this to 48 hours from Date.now
    },


    // beginning of book-only attributes
    authorName: {
        type: 'string',
        default: '',
      },
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
    organizer: {
        type: "string",
        default: "",
    },
    performer: {
        type: "string",
        default: "",
    },
    eventPage: {
        type: "string",
        default: "",
    },
}

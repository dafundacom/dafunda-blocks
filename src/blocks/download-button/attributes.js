const { __ } = wp.i18n; // Import __() from wp.i18n

export default {
  blockID: {
    type: "string",
    default: "",
  },
  imageurl: {
    type: "string",
    default: "",
  },
  imageid: {
    type: "string",
    default: "",
  },
  imagealt: {
    type: "string",
    default: "",
  },
  title: {
    type: "string",
    default: "Title",
  },
  titleTag: {
    type: "string",
    default: "h4",
  },
  description: {
    type: "string",
    default: "Little description",
  },
  url: {
    type: "string",
    default: "",
  },

  buttonText: {
    type: "string",
    default: "Download",
  },
  buttonColor: {
    type: "string",
    default: "#313131",
  },
  buttonHoverColor: {
    type: "string",
    default: "#313131",
  },
  buttonTextColor: {
    type: "string",
    default: "#ffffff",
  },
  buttonTextHoverColor: {
    type: "string",
    default: "#ffffff",
  },
  buttonRounded: {
    type: "boolean",
    default: false,
  },
  addNofollow: {
    type: "boolean",
    default: true,
  },
  openInNewTab: {
    type: "boolean",
    default: true,
  },
  addSponsored: {
    type: "boolean",
    default: true,
  },
  buttonAlign: {
    type: "string",
    default: "center",
  },
};

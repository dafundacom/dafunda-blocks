const { __ } = wp.i18n; // Import __() from wp.i18n

export default {
  blockID: {
    type: "string",
    default: "",
  },
  lists: {
    type: "array",
    default: [], //format: {title, imageid, imagealt, imageurl, }
  },
  openNewTab: {
    type: "boolean",
    default: false,
  },
};

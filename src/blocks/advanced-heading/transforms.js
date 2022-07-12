const { createBlock } = wp.blocks;

const transforms = {
  from: [
    {
      type: "prefix",
      prefix: "#h1",
      transform: () => createBlock("dbe/advanced-heading", { level: "h1" }),
    },
    {
      type: "prefix",
      prefix: "#h2",
      transform: () => createBlock("dbe/advanced-heading", { level: "h2" }),
    },
    {
      type: "prefix",
      prefix: "#h3",
      transform: () => createBlock("dbe/advanced-heading", { level: "h3" }),
    },
    {
      type: "prefix",
      prefix: "#h4",
      transform: () => createBlock("dbe/advanced-heading", { level: "h4" }),
    },
    {
      type: "prefix",
      prefix: "#h5",
      transform: () => createBlock("dbe/advanced-heading", { level: "h5" }),
    },
    {
      type: "prefix",
      prefix: "#h6",
      transform: () => createBlock("dbe/advanced-heading", { level: "h6" }),
    },
    {
      type: "block",
      blocks: ["core/heading"],
      transform: (attributes) =>
        createBlock("dbe/advanced-heading", {
          content: attributes.content,
          level: `h${attributes.level}`,
          alignment: attributes.textAlign,
          ...(attributes.hasOwnProperty("style") && {
            fontWeight: attributes.style.typography.fontWeight,
          }),
        }),
    },
  ],
};

export default transforms;

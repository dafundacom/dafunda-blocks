export default {
    post_type: {
        type: "string",
        default: "post",
    },
    offset: {
        type: "number",
        default: 0,
    },
    page: {
        type: "number",
        default: 1,
    },
    posts_per_page: {
        type: "number",
        default: 5,
    },
    orderby: {
        type: "string",
        default: "ID",
    },
    order: {
        type: "string",
        default: "DESC",
    },
}

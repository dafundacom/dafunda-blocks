/* eslint-disable no-unused-vars */
class Wpapi {
  static url = {
    ancestorOrigins: {},
    href: "https://wordpress.github.io/gutenberg/?path=/story/docs-introduction--page",
    origin: "https://wordpress.github.io",
    protocol: "https:",
    host: "wordpress.github.io",
    hostname: "wordpress.github.io",
    port: "",
    pathname: "/gutenberg/",
    search: "?path=/story/docs-introduction--page",
    hash: "",
  };
  constructor() {
    self.url = location;
  }
}
function WpapiFun() {
  let url = {
    ancestorOrigins: {},
    href: "https://wordpress.github.io/gutenberg/?path=/story/docs-introduction--page",
    origin: "https://wordpress.github.io",
    protocol: "https:",
    host: "wordpress.github.io",
    hostname: "wordpress.github.io",
    port: "",
    pathname: "/gutenberg/",
    search: "?path=/story/docs-introduction--page",
    hash: "",
  };
  url = location;

  return {
    getPost() {
      const pathname = `/wp/v2/posts`;
    },
    get() {
      return url;
    },
  };
}
// export default Wpapi
export default WpapiFun;

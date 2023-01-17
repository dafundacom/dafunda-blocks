/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */

if (typeof window.dbe_posts != "function") {
  window.dbe_posts = async function (attributes) {
    let { blockID, post_type, offset, page, posts_per_page, orderby, order } =
      attributes;

    let total_page = page + 1,
      total_post = 0,
      total = 0;
    let on_fetch = false;

    let el = {
      wrapper: document.querySelector(`#dbe-posts-${blockID}`),
      posts: document.querySelector(`#dbe-posts-${blockID} .dbe-posts-list`),
    };
    function throttle(fn, delay) {
      let time = Date.now();
      return () => {
        if (time + delay - Date.now() <= 0) {
          fn();
          time = Date.now();
        }
      };
    }

    function get_posts() {
      on_fetch = true;
      const path = "/wp-json/dbe/v1/posts";
      const url = location.origin + path;
      return new Promise((resolve, reject) => {
        const request = {
          post_type,
          offset,
          page: page + 1,
          posts_per_page,
          orderby,
          order,
        };
        console.log("request", request.page);
        fetch(url, {
          method: "POST",
          body: JSON.stringify(request),
          headers: {
            Accept: "application/json, text-plain, */*",
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json",
            url: url,
          },
        })
          .then((response) => response.json())
          .then((response) => {
            console.log("response", response);
            total_page = response.total_page;
            total_post = response.total_post;
            total = response.total;
            page = response.page;
            add_cards(response);
            resolve(response);
          })
          .catch((err) => {
            console.warn("Something went wrong.", err);
            reject(err);
          })
          .finally(() => {
            on_fetch = false;
          });
      });
    }

    function handleInfiniteScroll() {
      const endOfPage =
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
      if (endOfPage && !on_fetch && page < total_page) {
        get_posts();
      }
    }

    function add_cards(response) {
      let html = "";
      response.posts.forEach((post, index) => {
        html += card_horizontal(post);
      });
      el.posts.insertAdjacentHTML("beforeend", html);
    }

    function card_horizontal(post) {
      let html = `<div>
            <a
              href="${post.url}"
              class="flex flex-wrap overflow-hidden rounded-md border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div class="basis-2/12">
                <img
                  class="h-full w-full object-cover object-center"
                  src="${post.thumbnails.medium_large}"
                  alt="${post.post_title}"
                />
              </div>
              <div class="flex basis-10/12 flex-col justify-between p-2 leading-normal">
                <h5 class="m-0 mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                  ${post.post_title}
                </h5>
                <div class="mb-2 flex flex-wrap gap-2">
                  <div class="flex flex-wrap items-center gap-1">
                    <img
                      src="${post.author.image}"
                      class="h-3.5 w-3.5 rounded-full"
                    />
                    <p class="m-0 text-xs">${post.author.name}</p>
                  </div>
      
                  <div class="flex flex-wrap items-center gap-1">
                    <div class="h-3.5 w-3.5">
                      <img src="${dbe.build_url}/icons/calendar-days.svg" />
                    </div>
                    <p class="m-0 text-xs">
                      ${post.post_date}
                    </p>
                  </div>
      
                  <div class="flex flex-wrap items-center gap-1">
                    <div class="h-3.5 w-3.5">
                      <img src="${dbe.build_url}/icons/chat-bubble-bottom-center-text.svg" />
                      </div>
                    <p class="m-0 text-xs">${post.comment_count}</p>
                  </div>
                </div>
      
                <p class="m-0 mb-2 text-xs font-normal text-gray-700 dark:text-gray-400">
                  ${post.post_excerpt}
                </p>
      
                <div class="anchor mb-2 flex flex-wrap items-center gap-2 text-xs">
                  Read more
                  <div class="h-3.5 w-3.5">
                      <img src="${dbe.build_url}/icons/arrow-right.svg" />
                   </div>
                </div>
              </div>
            </a>
          </div>`;

      return html;
    }

    window.addEventListener("scroll", throttle(handleInfiniteScroll, 1000));
  };
}

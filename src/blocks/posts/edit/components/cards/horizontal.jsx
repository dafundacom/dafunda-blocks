/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import Icon from "@/components/icon";

export default function HorizontalCard(props) {
  const { setAttributes, post } = props;

  function dateToObject(request) {
    if (request) {
      let changeDate = request.split(" ");
      let changeHours = changeDate[1].split(":");
      changeDate = changeDate[0].split("-");
      return {
        date: changeDate[2],
        month: changeDate[1],
        year: changeDate[0],
        hour: changeHours[0],
        minute: changeHours[1],
        second: changeHours[2],
      };
    }
  }

  const date = dateToObject(post.date);

  return (
    <div>
      <a
        // href={post.url}
        className="flex flex-wrap overflow-hidden rounded-md border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="basis-2/12">
          <img
            className="h-full w-full object-cover object-center"
            src={post.image}
            alt={post.title}
          />
        </div>
        <div className="flex basis-10/12 flex-col justify-between p-2 leading-normal">
          <h5 className="m-0 mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title}
          </h5>
          {/* Details */}
          <div className="mb-2 flex flex-wrap gap-2">
            {/* Author */}
            <div className="flex flex-wrap items-center gap-1">
              {/* <div className="h-3.5 w-3.5">
                <Icon name="user" />
              </div> */}
              <img
                src={post.author.image}
                className="h-3.5 w-3.5 rounded-full"
              />
              <p className="m-0 text-xs">{post.author.name}</p>
            </div>

            {/* Date */}
            <div className="flex flex-wrap items-center gap-1">
              <div className="h-3.5 w-3.5">
                <Icon name="calendar-days" />
              </div>
              <p className="m-0 text-xs">
                {date.date} {date.month} {date.year}
              </p>
            </div>

            {/* Comment Count */}
            <div className="flex flex-wrap items-center gap-1">
              <div className="h-3.5 w-3.5">
                <Icon name="chat-bubble-bottom-center-text" />
              </div>
              <p className="m-0 text-xs">{post.comment_count}</p>
            </div>
          </div>

          <p className="m-0 mb-2 text-xs font-normal text-gray-700 dark:text-gray-400">
            {post.excerpt}
          </p>

          <div className="anchor mb-2 flex flex-wrap items-center gap-2 text-xs">
            Read more
            <div className="h-3.5 w-3.5">
              <Icon name="arrow-right" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

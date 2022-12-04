/* eslint-disable no-unused-vars */
import {
  RichText,
  MediaUpload,
  URLInput,
  useBlockProps,
} from "@wordpress/block-editor";

import {
  Button,
  Dashicon,
  DropdownMenu,
  MenuGroup,
  MenuItem,
  MenuItemsChoice,
  RangeControl,
  ResizableBox,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import {
  more,
  arrowUp,
  arrowDown,
  arrowRight,
  arrowLeft,
  trash,
} from "@wordpress/icons";
import { Component, createRef, useState, useRef, useEffect } from "react";

import Check from "../../../icons/check";
import X_Mark from "../../../icons/x-mark";
import PlusCircle from "../../../icons/plus-circle";
import Trash from "../../../icons/trash";
import EllipsisVertical from "../../../icons/ellipsis-vertical";

import { ButtonAddStep2 } from "../../../components/button_add_step_2";
import { InspectorPanel } from "./components/inspector_panel";

const moveElement = (array, from, to) => {
  const copy = [...array];
  const valueToMove = copy.splice(from, 1)[0];
  copy.splice(to, 0, valueToMove);
  return copy;
};

export default function Edit(props) {
  const {
    attributes: {
      blockID,
      title,
      description,
      pros,
      cons,
      reviews,
      background_used,
      background_color,
      background_gradient,
      background_image,
    },
    setAttributes,
    block,
    getBlock,
    getClientIdsWithDescendants,
  } = props;
  const pros_static = [
    "Struktur plot yang rapi",
    "Element action",
    "Konsep anti hero",
  ];
  const cons_static = [
    "Polt mahkota sabbacx",
    "Inergang sebagai villian utama",
  ];

  const [reviews_local, setReviewsLocal] = useState(reviews);
  const reviews_static = [
    { label: "Story", value: 0 },
    { label: "Performance", value: 0 },
    { label: "Direction", value: 0 },
    { label: "Cinematography", value: 0 },
    { label: "Scoring", value: 0 },
  ];

  const reviews_default = {
    label: "",
    value: 0,
  };

  const [total_review_percentage, set_total_review_percentage] = useState(0);

  function lockHandle(status) {
    if (status) {
      wp.data
        .dispatch("core/editor")
        .disablePublishSidebar("requiredValueLock");
      wp.data.dispatch("core/editor").lockPostSaving("requiredValueLock");
    } else {
      wp.data.dispatch("core/editor").enablePublishSidebar("requiredValueLock");
      wp.data.dispatch("core/editor").unlockPostSaving("requiredValueLock");
    }
  }

  useEffect(() => {
    if (pros.length == 0) {
      setAttributes({ pros: pros_static });
    }
    if (cons.length == 0) {
      setAttributes({ cons: cons_static });
    }
    if (reviews_local.length == 0) {
      setReviewsLocal(reviews_static);
    }
    if (description == "") {
      setAttributes({
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dicta cum magni quidem aperiam. Voluptas, ratione velit optio, expedita explicabo iste tempore temporibus consectetur repudiandae autem ut aut quisquam pariatur aperiam non, praesentium dolore quod! Optio laboriosam officiis vero dolorum incidunt autem reprehenderit qui explicabo ipsa, esse similique excepturi aliquid?",
      });
    }

    return () => {
      lockHandle(false);
    };
  }, []);

  useEffect(() => {
    let acumulate_review_percentage = 0;
    reviews_local.forEach((value) => {
      acumulate_review_percentage += parseInt(value.value);
    });
    set_total_review_percentage(
      acumulate_review_percentage / reviews_local.length
    );
    setAttributes({ reviews: reviews_local });
    console.log("reviews", reviews);
  }, [reviews_local]);

  function rangeTrackWidth(width) {
    if (width >= 84) {
      width -= 1.5;
    } else if (width >= 43) {
      width -= 1;
    } else if (width >= 6) {
      width -= 0.5;
    }

    return width;
  }

  useEffect(() => {
    if (
      title == "" ||
      pros.length == 0 ||
      pros.includes("") ||
      cons.length == 0 ||
      cons.includes("") ||
      reviews.length == 0 ||
      reviews.map((review) => review.label).includes("")
    ) {
      lockHandle(true);
    } else {
      lockHandle(false);
    }
  }, [reviews, pros, cons, title]);

  return (
    <div {...useBlockProps()}>
      <InspectorPanel {...props} />
      <div
        className="review_block wp-block relative min-h-[500px] w-full overflow-hidden rounded-md !p-4"
        style={{
          background:
            background_used == "color" ? background_color : background_gradient,
          backgroundColor:
            background_used == "color" ? background_color : background_gradient,
        }}
      >
        {background_used == "image" && background_image != "" ? (
          <div className="absolute inset-0 z-0">
            <img src={background_image} className="w-full" />
            <div
              style={{
                height: "100%",
                width: "100%",
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6477941518404237) 7%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 100%)",
                transform: "scaleY(1.5)",
              }}
            ></div>
          </div>
        ) : (
          ""
        )}
        <div className="relative z-10 mb-4 flex w-full flex-row flex-wrap">
          <div className="flex-1">
            {/* <p className="mt-0 mb-2 text-base text-white/60">REVIEW</p> */}
            <RichText
              tagName="p"
              multiline={false}
              keepPlaceholderOnFocus
              placeholder={__("Title")}
              className="mt-0 mb-3 text-3xl font-bold text-white"
              value={title}
              onChange={(title) => setAttributes({ title })}
            />

            <RichText
              tagName="p"
              keepPlaceholderOnFocus
              placeholder={__("Description")}
              className="mt-0 mb-3 text-base text-white"
              value={description}
              onChange={(description) => setAttributes({ description })}
            />
          </div>
          <div className="flex max-h-[162px] w-28 flex-col flex-wrap items-center overflow-hidden rounded-md bg-lime-600">
            <p className="flex grow items-center text-3xl font-bold text-white">
              {parseInt(total_review_percentage)}%
            </p>
            <div className="flex w-full justify-center bg-lime-500 py-2 text-xs text-white">
              SCORE
            </div>
          </div>
        </div>

        <div className="relative z-10 flex w-full flex-wrap overflow-hidden rounded-md bg-white">
          <div className="flex w-full flex-wrap border-b-2 border-slate-100">
            <div className="basis-6/12 border-r-2 border-slate-100 p-3">
              <p className="mt-0 mb-3 text-sm font-bold">PROS</p>
              <ul className="list-none pl-0">
                {pros.map((pro, index) => (
                  <li className="flex flex-wrap" key={index}>
                    <Check className="h-5 w-5 text-lime-500" />
                    <RichText
                      tagName="p"
                      placeholder="Pros title"
                      multiline={false}
                      keepPlaceholderOnFocus
                      className="mt-0 mb-3 flex-1 text-base focus:outline-none focus:ring focus:ring-slate-300"
                      value={pro}
                      onChange={(pro) => {
                        let newData = [...pros];
                        newData[index] = pro;
                        setAttributes({ pros: newData });
                      }}
                    />

                    <DropdownMenu
                      icon={<EllipsisVertical className={"h-4 w-4"} />}
                      label="Select a direction"
                    >
                      {({ onClose }) => (
                        <Fragment>
                          <MenuGroup>
                            <MenuItem
                              icon={arrowUp}
                              onClick={() => {
                                if (index > 0) {
                                  setAttributes({
                                    pros: [
                                      ...moveElement(pros, index, index - 1),
                                    ],
                                  });
                                  onClose();
                                }
                              }}
                            >
                              Move Up
                            </MenuItem>
                            <MenuItem
                              icon={arrowDown}
                              onClick={() => {
                                if (index < pros.length - 1) {
                                  setAttributes({
                                    pros: [
                                      ...moveElement(pros, index, index + 1),
                                    ],
                                  });
                                  onClose();
                                }
                              }}
                            >
                              Move Down
                            </MenuItem>
                          </MenuGroup>
                          <MenuGroup>
                            <MenuItem
                              icon={trash}
                              onClick={() => {
                                let newData = [...pros];
                                newData = newData.filter(
                                  (v, index_new) => index_new != index
                                );
                                setAttributes({ pros: newData });
                                onClose();
                              }}
                            >
                              Remove
                            </MenuItem>
                          </MenuGroup>
                        </Fragment>
                      )}
                    </DropdownMenu>
                  </li>
                ))}
              </ul>

              {pros.length == 0 || pros.includes("") ? (
                <div className="mb-4 flex h-14 w-full flex-wrap items-center justify-center rounded-md border border-dashed border-red-700 px-4">
                  <p className="m-0 text-base font-semibold text-red-700">
                    Anda tidak bisa save jika PROS belum diisi
                  </p>
                </div>
              ) : (
                ""
              )}
              <ButtonAddStep2
                onClick={() => {
                  setAttributes({ pros: [...pros, ""] });
                }}
              />
            </div>
            <div className="basis-6/12 p-3">
              <p className="mt-0 mb-3 text-sm font-bold">CONS</p>
              <ul className="list-none pl-0">
                {cons.map((con, index) => (
                  <li className="flex flex-wrap" key={index}>
                    <X_Mark className="h-5 w-5 text-red-500" />
                    <RichText
                      tagName="p"
                      placeholder="Cons title"
                      multiline={false}
                      keepPlaceholderOnFocus
                      className="mt-0 mb-3 flex-1 text-base focus:outline-none focus:ring focus:ring-slate-300"
                      value={con}
                      onChange={(con) => {
                        let newData = [...cons];
                        newData[index] = con;
                        setAttributes({ cons: newData });
                      }}
                    />
                    <DropdownMenu
                      icon={<EllipsisVertical className={"h-4 w-4"} />}
                      label="Select a direction"
                    >
                      {({ onClose }) => (
                        <Fragment>
                          <MenuGroup>
                            <MenuItem
                              icon={arrowUp}
                              onClick={() => {
                                if (index > 0) {
                                  setAttributes({
                                    cons: [
                                      ...moveElement(cons, index, index - 1),
                                    ],
                                  });
                                  onClose();
                                }
                              }}
                            >
                              Move Up
                            </MenuItem>
                            <MenuItem
                              icon={arrowDown}
                              onClick={() => {
                                if (index < cons.length - 1) {
                                  setAttributes({
                                    cons: [
                                      ...moveElement(cons, index, index + 1),
                                    ],
                                  });
                                  onClose();
                                }
                              }}
                            >
                              Move Down
                            </MenuItem>
                          </MenuGroup>
                          <MenuGroup>
                            <MenuItem
                              icon={trash}
                              onClick={() => {
                                let newData = [...cons];
                                newData = newData.filter(
                                  (v, index_new) => index_new != index
                                );
                                setAttributes({ cons: newData });
                                onClose();
                              }}
                            >
                              Remove
                            </MenuItem>
                          </MenuGroup>
                        </Fragment>
                      )}
                    </DropdownMenu>
                  </li>
                ))}
              </ul>

              {cons.length == 0 || cons.includes("") ? (
                <div className="mb-4 flex h-14 w-full flex-wrap items-center justify-center rounded-md border border-dashed border-red-700 px-4">
                  <p className="m-0 text-base font-semibold text-red-700">
                    Anda tidak bisa save jika CONS belum diisi
                  </p>
                </div>
              ) : (
                ""
              )}
              <ButtonAddStep2
                onClick={() => {
                  setAttributes({ cons: [...cons, ""] });
                }}
              />
            </div>
          </div>
          <div className="flex w-full flex-wrap p-5">
            <p className="mt-0 mb-3 text-sm font-bold">REVIEW BREAKDOWN</p>
            <div className="w-full">
              {reviews_local.map((review, index) => (
                <div key={index}>
                  <div className="mb-6 flex flex-col flex-wrap">
                    <div className="mb-2 flex flex-wrap items-center justify-between">
                      <RichText
                        tagName="p"
                        multiline={false}
                        keepPlaceholderOnFocus
                        placeholder="Review title"
                        className="m-0 flex flex-1 flex-wrap items-center text-sm font-bold focus:outline-none focus:ring focus:ring-slate-300"
                        value={review.label}
                        onChange={(value) => {
                          let newReviews = [...reviews_local];
                          newReviews[index] = {
                            label: value,
                            value: parseInt(review.value),
                          };
                          setReviewsLocal(newReviews);
                        }}
                      />
                      <p className="m-0 flex flex-wrap items-center text-sm font-bold">
                        {review.value}%
                      </p>
                      <DropdownMenu
                        icon={<EllipsisVertical className={"h-4 w-4"} />}
                        label="Select a direction"
                      >
                        {({ onClose }) => (
                          <Fragment>
                            <MenuGroup>
                              <MenuItem
                                icon={arrowUp}
                                onClick={() => {
                                  if (index > 0) {
                                    setReviewsLocal([
                                      ...moveElement(
                                        reviews_local,
                                        index,
                                        index - 1
                                      ),
                                    ]);
                                    onClose();
                                  }
                                }}
                              >
                                Move Up
                              </MenuItem>
                              <MenuItem
                                icon={arrowDown}
                                onClick={() => {
                                  if (index < reviews_local.length - 1) {
                                    setReviewsLocal([
                                      ...moveElement(
                                        reviews_local,
                                        index,
                                        index + 1
                                      ),
                                    ]);
                                    onClose();
                                  }
                                }}
                              >
                                Move Down
                              </MenuItem>
                            </MenuGroup>
                            <MenuGroup>
                              <MenuItem
                                icon={trash}
                                onClick={() => {
                                  let newData = [...reviews_local];
                                  newData = newData.filter(
                                    (v, index_new) => index_new != index
                                  );
                                  setReviewsLocal(newData);
                                  onClose();
                                }}
                              >
                                Remove
                              </MenuItem>
                            </MenuGroup>
                          </Fragment>
                        )}
                      </DropdownMenu>
                    </div>
                    <div className="relative flex flex-wrap">
                      <div
                        className="track"
                        style={{
                          width: `${rangeTrackWidth(parseInt(review.value))}%`,
                        }}
                      ></div>
                      <input
                        id="range_id"
                        className="range"
                        type="range"
                        name=""
                        min="0"
                        max="100"
                        step="1"
                        onChange={(event) => {
                          let newReviews = [...reviews_local];
                          newReviews[index] = {
                            label: review.label,
                            value: parseInt(event.target.value),
                          };
                          setReviewsLocal(newReviews);
                        }}
                        value={review.value}
                      />
                    </div>
                  </div>
                </div>
              ))}

              {reviews_local.length == 0 ||
              reviews_local.map((review) => review.label).includes("") ? (
                <div className="mb-4 flex h-14 w-full flex-wrap items-center justify-center rounded-md border border-dashed border-red-700 px-4">
                  <p className="m-0 text-base font-semibold text-red-700">
                    Anda tidak bisa save jika REVIEWS belum diisi
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>

            <ButtonAddStep2
              onClick={() => {
                // setAttributes({ reviews_local: [...reviews_local, reviews_default] });
                setReviewsLocal([...reviews_local, reviews_default]);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

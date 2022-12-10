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
      breakdowns,
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

  const pros_static = [""];
  const cons_static = [""];

  const [breakdowns_local, setBreakdownsLocal] = useState(breakdowns);
  const breakdowns_static = [{ label: "", value: 0 }];

  const breakdowns_default = {
    label: "",
    value: 0,
  };

  const [total_breakdown_percentage, set_total_breakdown_percentage] =
    useState(0);

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
    if (breakdowns_local.length == 0) {
      setBreakdownsLocal(breakdowns_static);
    }

    return () => {
      lockHandle(false);
    };
  }, []);

  useEffect(() => {
    let acumulate_breakdown_percentage = 0;
    breakdowns_local.forEach((value) => {
      acumulate_breakdown_percentage += parseFloat(value.value);
    });

    console.log(
      `pembagian: ${acumulate_breakdown_percentage} / ${breakdowns_local.length}`
    );
    set_total_breakdown_percentage(
      acumulate_breakdown_percentage / breakdowns_local.length
    );
    setAttributes({ breakdowns: breakdowns_local });
  }, [breakdowns_local]);

  function rangeTrackWidth(width) {
    if (width >= 84) {
      width -= 1.5;
    } else if (width >= 70) {
      width -= 1.5;
    } else if (width >= 33) {
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
      breakdowns.length == 0 ||
      breakdowns.map((breakdown) => breakdown.label).includes("")
    ) {
      lockHandle(true);
    } else {
      lockHandle(false);
    }
  }, [breakdowns, pros, cons, title]);

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
            <p className="m-0 flex grow items-center py-10 text-3xl font-bold text-white">
              {parseInt(total_breakdown_percentage)}%
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
              {breakdowns_local.map((breakdown, index) => (
                <div key={index}>
                  <div className="mb-6 flex flex-col flex-wrap">
                    <div className="mb-2 flex flex-wrap items-center justify-between">
                      <RichText
                        tagName="p"
                        multiline={false}
                        keepPlaceholderOnFocus
                        placeholder="Breakdown title"
                        className="m-0 flex flex-1 flex-wrap items-center text-sm font-bold focus:outline-none focus:ring focus:ring-slate-300"
                        value={breakdown.label}
                        onChange={(value) => {
                          let newBreakdowns = [...breakdowns_local];
                          newBreakdowns[index] = {
                            label: value,
                            value: parseInt(breakdown.value),
                          };
                          setBreakdownsLocal(newBreakdowns);
                        }}
                      />
                      <p className="m-0 flex flex-wrap items-center text-sm font-bold">
                        {breakdown.value}%
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
                                    setBreakdownsLocal([
                                      ...moveElement(
                                        breakdowns_local,
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
                                  if (index < breakdowns_local.length - 1) {
                                    setBreakdownsLocal([
                                      ...moveElement(
                                        breakdowns_local,
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
                                  let newData = [...breakdowns_local];
                                  newData = newData.filter(
                                    (v, index_new) => index_new != index
                                  );
                                  setBreakdownsLocal(newData);
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
                    <div className="costum-slider relative flex flex-wrap">
                      <div
                        className="track"
                        style={{
                          width: `${rangeTrackWidth(
                            parseInt(breakdown.value)
                          )}%`,
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
                          let newBreakdowns = [...breakdowns_local];
                          newBreakdowns[index] = {
                            label: breakdown.label,
                            value: parseInt(event.target.value),
                          };
                          setBreakdownsLocal(newBreakdowns);
                        }}
                        value={breakdown.value}
                      />
                    </div>
                  </div>
                </div>
              ))}

              {breakdowns_local.length == 0 ||
              breakdowns_local
                .map((breakdown) => breakdown.label)
                .includes("") ? (
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
                // setAttributes({ breakdowns_local: [...breakdowns_local, breakdowns_default] });
                setBreakdownsLocal([...breakdowns_local, breakdowns_default]);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

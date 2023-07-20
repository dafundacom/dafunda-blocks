/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/how-to/edit/components/how_to.jsx":
/*!******************************************************!*\
  !*** ./src/blocks/how-to/edit/components/how_to.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HowTo: () => (/* binding */ HowTo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/blocks/how-to/edit/components/index.js");
/* harmony import */ var _components_button_delete_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/button_delete_image */ "./src/components/button_delete_image.jsx");
/* harmony import */ var _components_button_add_step__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/button_add_step */ "./src/components/button_add_step.jsx");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




var __ = wp.i18n.__; // Import __() from wp.i18n
var _ref = wp.blockEditor || wp.editor,
  RichText = _ref.RichText,
  MediaUpload = _ref.MediaUpload;
var TextControl = wp.components.TextControl;
var units = ["Tahun", "Bulan", "Minggu", "Hari", "Jam", "Menit", "Detik"];
var moveElement = function moveElement(array, from, to) {
  var copy = _toConsumableArray(array);
  var valueToMove = copy.splice(from, 1)[0];
  copy.splice(to, 0, valueToMove);
  return copy;
};
function HowTo(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    block = props.block,
    getBlock = props.getBlock,
    getClientIdsWithDescendants = props.getClientIdsWithDescendants,
    isSelected = props.isSelected,
    states = props.states,
    setStates = props.setStates;
  var blockID = attributes.blockID,
    title = attributes.title,
    introduction = attributes.introduction,
    advancedMode = attributes.advancedMode,
    section = attributes.section,
    sectionListStyle = attributes.sectionListStyle,
    suppliesIntro = attributes.suppliesIntro,
    supplies = attributes.supplies,
    suppliesListStyle = attributes.suppliesListStyle,
    toolsIntro = attributes.toolsIntro,
    tools = attributes.tools,
    toolsListStyle = attributes.toolsListStyle,
    howToYield = attributes.howToYield,
    howToLikeCount = attributes.howToLikeCount,
    howToDisikeCount = attributes.howToDisikeCount,
    howToVoteCount = attributes.howToVoteCount,
    cost = attributes.cost,
    costCurrency = attributes.costCurrency,
    costDisplayText = attributes.costDisplayText,
    showUnitFirst = attributes.showUnitFirst,
    timeIntro = attributes.timeIntro,
    totalTime = attributes.totalTime,
    totalTimeText = attributes.totalTimeText,
    useSections = attributes.useSections,
    includeToolsList = attributes.includeToolsList,
    addToolImages = attributes.addToolImages,
    includeSuppliesList = attributes.includeSuppliesList,
    addSupplyImages = attributes.addSupplyImages,
    resultIntro = attributes.resultIntro,
    finalImageID = attributes.finalImageID,
    finalImageURL = attributes.finalImageURL,
    finalImageCaption = attributes.finalImageCaption,
    finalImageWidth = attributes.finalImageWidth,
    finalImageFloat = attributes.finalImageFloat,
    videoURL = attributes.videoURL,
    videoEmbedCode = attributes.videoEmbedCode,
    videoDuration = attributes.videoDuration,
    firstLevelTag = attributes.firstLevelTag,
    secondLevelTag = attributes.secondLevelTag,
    thirdLevelTag = attributes.thirdLevelTag;
  var currentStep = states.currentStep,
    videoURLInput = states.videoURLInput;
  var checkVideoURLInput = function checkVideoURLInput() {
    if (/^http(s)?:\/\//g.test(videoURLInput)) {
      var youtubeMatch = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/g.exec(videoURLInput);
      var vimeoMatch = /^(?:https?:\/\/)?(?:www\.|player\.)?(?:vimeo\.com\/)([0-9]+)/g.exec(videoURLInput);
      var dailyMotionMatch = /^(?:https?:\/\/)?(?:www\.)?(?:dailymotion\.com\/video|dai\.ly)\/([0-9a-z]+)(?:[-_0-9a-zA-Z]+#video=([a-z0-9]+))?/g.exec(videoURLInput);
      var videoPressMatch = /^https?:\/\/(?:www\.)?videopress\.com\/(?:embed|v)\/([a-zA-Z0-9]{8,})/g.exec(videoURLInput);
      if (youtubeMatch) {
        fetch("https://www.googleapis.com/youtube/v3/videos?id=".concat(youtubeMatch[1], "&part=snippet,contentDetails,player&key=AIzaSyDgItjYofyXkIZ4OxF6gN92PIQkuvU319c")).then(function (response) {
          response.json().then(function (data) {
            if (data.items.length) {
              var timePeriods = data.items[0].contentDetails.duration.match(/(\d{1,2}(?:W|D|H|M|S))/g);
              setAttributes({
                videoURL: "https://www.youtube.com/watch?v=".concat(youtubeMatch[1]),
                videoName: data.items[0].snippet.title,
                videoDescription: data.items[0].snippet.description,
                videoUploadDate: Date.parse(data.items[0].snippet.publishedAt) / 1000,
                videoThumbnailURL: "https://i.ytimg.com/vi/".concat(youtubeMatch[1], "/default.jpg"),
                videoEmbedCode: decodeURIComponent(data.items[0].player.embedHtml),
                videoDuration: timePeriods.reduce(function (sum, part) {
                  var multiplier = {
                    W: 604800,
                    D: 86400,
                    H: 3600,
                    M: 60,
                    S: 1
                  };
                  return sum + Number(part.slice(0, -1)) * multiplier[part.slice(-1)];
                }, 0)
              });
            } else {
              resetVideoAttributes();
              setAttributes({
                videoEmbedCode: "<p className=\"text-xs\">".concat(__("No video found at URL"), "</p>")
              });
            }
          });
        }).catch(function (err) {
          console.log("youtube fetch error");
          console.log(err);
        });
      } else if (vimeoMatch) {
        fetch("https://vimeo.com/api/v2/video/".concat(vimeoMatch[1], ".json")).then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
              setAttributes({
                videoURL: data[0].url,
                videoName: data[0].title,
                videoDescription: data[0].description,
                videoUploadDate: Date.parse(data[0].upload_date) / 1000,
                videoThumbnailURL: data[0].thumbnail_large,
                videoDuration: data[0].duration
              });
              fetch("https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(data[0].url))).then(function (response) {
                response.json().then(function (data) {
                  setAttributes({
                    videoEmbedCode: data.html
                  });
                });
              }).catch(function (err) {
                console.log("vimeo oembed error");
                console.log(err);
              });
            }).catch(function (err) {
              console.log(err);
            });
          } else {
            resetVideoAttributes();
            setAttributes({
              videoEmbedCode: "<p>".concat(__("No video found at URL"), "</p>")
            });
          }
        }).catch(function (err) {
          console.log("vimeo fetch error");
          console.log(err);
        });
      } else if (dailyMotionMatch) {
        fetch("https://api.dailymotion.com/video/".concat(dailyMotionMatch[1], "?fields=created_time%2Cthumbnail_1080_url%2Ctitle%2Cdescription%2Curl%2Cembed_html%2Cduration")).then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
              setAttributes({
                videoURL: data.url,
                videoName: data.title,
                videoDescription: data.description,
                videoUploadDate: data.created_time,
                videoThumbnailURL: data.thumbnail_1080_url,
                videoEmbedCode: decodeURIComponent(data.embed_html),
                videoDuration: data.duration
              });
            });
          } else {
            resetVideoAttributes();
            setAttributes({
              videoEmbedCode: "<p>".concat(__("No video found at URL"), "</p>")
            });
          }
        }).catch(function (err) {
          console.log("dailymotion input error");
          console.log(err);
        });
      } else if (videoPressMatch) {
        fetch("https://public-api.wordpress.com/rest/v1.1/videos/".concat(videoPressMatch[1])).then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
              setAttributes({
                videoURL: "https://videopress.com/v/".concat(data.guid),
                videoName: data.title,
                videoDescription: data.description,
                videoUploadDate: Date.parse(data.upload_date) / 1000,
                videoThumbnailURL: data.poster,
                videoEmbedCode: "<iframe width=\"560\" height=\"315\" src=\"https://videopress.com/embed/".concat(data.guid, "\" frameborder=\"0\" allowfullscreen></iframe>\n                  <script src=\"https://videopress.com/videopress-iframe.js\"></script>"),
                videoDuration: Math.floor(data.duration / 1000)
              });
            });
          } else {
            resetVideoAttributes();
            setAttributes({
              videoEmbedCode: "<p>".concat(__("No video found at URL"), "</p>")
            });
          }
        }).catch(function (err) {
          console.log("videopress input error");
          console.log(err);
        });
      } else {
        resetVideoAttributes();
        setAttributes({
          videoEmbedCode: "<p>Video site not supported</p>"
        });
      }
    } else {
      resetVideoAttributes();
      console.log("input is not a url");
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var need_block = {
      status: false,
      msg: ""
    };
    if (title === "") {
      need_block.status = true;
      need_block.msg = __("Please fill How To title");
    }
    section.forEach(function (section_) {
      if (section_.steps.length === 0) {
        need_block.status = true;
        need_block.msg = __("Please add step before update");
      }
      if (section_.steps.map(function (step) {
        return step.title;
      }).includes("")) {
        need_block.status = true;
        need_block.msg = __("Please fill step title");
      }
    });
    if (!need_block.status) {
      wp.data.dispatch("core/editor").enablePublishSidebar("requiredValueLock");
      wp.data.dispatch("core/editor").unlockPostSaving("requiredValueLock");
    } else {
      wp.data.dispatch("core/editor").disablePublishSidebar("requiredValueLock");
      wp.data.dispatch("core/editor").lockPostSaving("requiredValueLock");
    }
  }, [attributes]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (blockID === "" || getClientIdsWithDescendants().some(function (ID) {
      return "blockID" in getBlock(ID).attributes && getBlock(ID).attributes.blockID === blockID;
    })) {
      setAttributes({
        blockID: block.clientId
      });
    }
    var sectionClone = JSON.parse(JSON.stringify(section));
    var hasMissingProperties = false;
    sectionClone.forEach(function (s, si) {
      s.steps.forEach(function (st, sti) {
        // eslint-disable-next-line no-prototype-builtins
        if (!st.stepPic.hasOwnProperty("width")) {
          hasMissingProperties = true;
          sectionClone[si].steps[sti].stepPic.width = 200;
          sectionClone[si].steps[sti].stepPic.float = "none";
          //   st.stepPic.width = 200;
          //   st.stepPic.float = 'none';
        }
      });
    });

    if (hasMissingProperties) {
      setAttributes({
        section: sectionClone
      });
    }
    if (section.length === 1 && section[0].steps.length === 0) {
      setAttributes({
        section: [{
          sectionName: "",
          steps: [{
            anchor: "section-0-step-0",
            stepPic: {
              img: -1,
              alt: "",
              url: "",
              width: 0,
              float: "none"
            },
            direction: "",
            tip: "",
            title: "",
            hasVideoClip: false,
            videoClipStart: 0,
            videoClipEnd: 0
          }]
        }]
      });
    }
    // setAttributes(setMissingAttr(attributes));
    // isNeedLocked(section);

    return function () {
      wp.data.dispatch("core/editor").enablePublishSidebar("requiredValueLock");
      wp.data.dispatch("core/editor").unlockPostSaving("requiredValueLock");
    };
  }, []);
  var clips = section.reduce(function (stepList, section) {
    return [].concat(_toConsumableArray(stepList), _toConsumableArray(section.steps));
  }, []).filter(function (s) {
    return s.hasVideoClip;
  }).map(function (s) {
    return {
      anchor: s.anchor,
      clipStart: s.videoClipStart,
      clipEnd: s.videoClipEnd
    };
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "howto",
    id: "howto-".concat(blockID)
  }, /*#__PURE__*/React.createElement(RichText, {
    tagName: firstLevelTag,
    placeholder: __("How to title"),
    keepPlaceholderOnFocus: true,
    value: title,
    className: "howto__title font-semibold",
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    }
  }), /*#__PURE__*/React.createElement(RichText, {
    placeholder: __("How to introduction"),
    keepPlaceholderOnFocus: true,
    className: "mb-3",
    value: introduction,
    onChange: function onChange(introduction) {
      return setAttributes({
        introduction: introduction
      });
    }
  }), advancedMode && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "howto-video-input relative mb-2 w-full"
  }, /*#__PURE__*/React.createElement("input", {
    type: "url",
    placeholder: __("Insert video URL"),
    className: "w-full border border-solid border-slate-200",
    value: videoURLInput,
    onChange: function onChange(e) {
      return setStates({
        videoURLInput: e.target.value
      });
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter") {
        checkVideoURLInput();
      }
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 flex h-full flex-wrap items-center"
  }, /*#__PURE__*/React.createElement("button", {
    icon: "editor-break",
    label: __("Apply"),
    type: "submit",
    className: "dashicons dashicons-yes-alt mr-2 h-auto text-2xl",
    onClick: checkVideoURLInput
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    icon: "trash",
    label: __("Delete"),
    className: "dashicons dashicons-dismiss mr-3 h-auto text-2xl",
    onClick: function onClick() {
      resetVideoAttributes();
      setStates({
        videoURLInput: ""
      });
    }
  }))), /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: videoEmbedCode || "<p>Input error</p>"
    },
    className: "text-xs"
  }), includeSuppliesList && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RichText, {
    tagName: secondLevelTag,
    placeholder: __("Required supplies"),
    keepPlaceholderOnFocus: true,
    value: suppliesIntro,
    onChange: function onChange(suppliesIntro) {
      return setAttributes({
        suppliesIntro: suppliesIntro
      });
    }
  }), /*#__PURE__*/React.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.ListWrapper, {
    className: "howto-supplies-list",
    listStyle: suppliesListStyle
  }, supplies.map(function (supply, i) {
    return /*#__PURE__*/React.createElement("li", {
      className: "relative mb-8",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "howto-step__control-button absolute top-0 right-[10px] grid translate-y-[-50%] grid-cols-3 gap-2 rounded-lg bg-gray-400 px-2 py-1"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "howto-arrow",
      icon: "arrow-up-alt",
      onClick: function onClick() {
        if (i > 0) {
          var newSupplies = moveElement(supplies, i, i - 1);
          setAttributes({
            supplies: newSupplies
          });
        }
      },
      label: __("Move step up")
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-4 w-4",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      strokeWidth: "1.5",
      stroke: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",
      clipRule: "evenodd"
    }))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "howto-arrow",
      icon: "arrow-down-alt",
      onClick: function onClick() {
        if (i < supplies.length - 1) {
          var newSupplies = moveElement(supplies, i, i + 1);
          setAttributes({
            supplies: newSupplies
          });
        }
      },
      label: __("Move step down")
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-4 w-4",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      strokeWidth: "1.5",
      stroke: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",
      clipRule: "evenodd"
    }))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "howto-delete",
      icon: "trash",
      label: __("Delete step"),
      onClick: function onClick() {
        setAttributes({
          supplies: [].concat(_toConsumableArray(supplies.slice(0, i)), _toConsumableArray(supplies.slice(i + 1)))
        });
      }
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-4 w-4",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: "5"
    }, /*#__PURE__*/React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M6 18L18 6M6 6l12 12"
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RichText, {
      className: "mb-3",
      keepPlaceholderOnFocus: true,
      value: supply.name,
      placeholder: __("Enter supply name"),
      onChange: function onChange(newName) {
        return setAttributes({
          supplies: [].concat(_toConsumableArray(supplies.slice(0, i)), [Object.assign(supplies[i], {
            name: newName
          })], _toConsumableArray(supplies.slice(i + 1)))
        });
      }
    })), addSupplyImages && (supply.imageURL !== "" ? /*#__PURE__*/React.createElement("figure", {
      className: "relative mx-auto w-fit"
    }, /*#__PURE__*/React.createElement("img", {
      className: "howto-supply-image",
      src: supply.imageURL,
      alt: ""
    }), isSelected && /*#__PURE__*/React.createElement(_components_button_delete_image__WEBPACK_IMPORTED_MODULE_2__.ButtonDeleteImage, {
      onClick: function onClick() {
        setAttributes({
          supplies: [].concat(_toConsumableArray(supplies.slice(0, i)), [Object.assign(supply, {
            imageID: 0,
            imageURL: "",
            imageAlt: ""
          })], _toConsumableArray(supplies.slice(i + 1)))
        });
      }
    })) : /*#__PURE__*/React.createElement(MediaUpload, {
      onSelect: function onSelect(img) {
        return setAttributes({
          supplies: [].concat(_toConsumableArray(supplies.slice(0, i)), [Object.assign(supply, {
            imageID: img.id,
            imageURL: img.url,
            imageAlt: img.alt
          })], _toConsumableArray(supplies.slice(i + 1)))
        });
      },
      allowedTypes: ["image"],
      value: supply.imageID,
      render: function render(_ref2) {
        var open = _ref2.open;
        return /*#__PURE__*/React.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.InputUpload, {
          open: open
        });
      }
    })));
  })), /*#__PURE__*/React.createElement(_components_button_add_step__WEBPACK_IMPORTED_MODULE_3__.ButtonAddStep, {
    label: "Tambah supplies",
    onClick: function onClick() {
      setAttributes({
        supplies: [].concat(_toConsumableArray(supplies), [{
          name: "",
          imageID: 0,
          imageAlt: "",
          imageURL: ""
        }])
      });
    }
  })), includeToolsList && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RichText, {
    tagName: secondLevelTag,
    placeholder: __("Required tools"),
    keepPlaceholderOnFocus: true,
    value: toolsIntro,
    onChange: function onChange(toolsIntro) {
      return setAttributes({
        toolsIntro: toolsIntro
      });
    }
  }), /*#__PURE__*/React.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.ListWrapper, {
    className: "howto-tools-list",
    listStyle: toolsListStyle
  }, tools.map(function (tool, i) {
    return /*#__PURE__*/React.createElement("li", {
      className: "relative mb-8",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "howto-step__control-button absolute top-0 right-[10px] grid translate-y-[-50%] grid-cols-3 gap-2 rounded-lg bg-gray-400 px-2 py-1"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "howto-arrow",
      icon: "arrow-up-alt",
      onClick: function onClick() {
        if (i > 0) {
          var newSupplies = moveElement(tools, i, i - 1);
          setAttributes({
            tools: newSupplies
          });
        }
      },
      label: __("Move step up")
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-4 w-4",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      strokeWidth: "1.5",
      stroke: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",
      clipRule: "evenodd"
    }))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "howto-arrow",
      icon: "arrow-down-alt",
      onClick: function onClick() {
        if (i < tools.length - 1) {
          var newSupplies = moveElement(tools, i, i + 1);
          setAttributes({
            tools: newSupplies
          });
        }
      },
      label: __("Move step down")
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-4 w-4",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      strokeWidth: "1.5",
      stroke: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",
      clipRule: "evenodd"
    }))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "howto-delete",
      icon: "trash",
      label: __("Delete step"),
      onClick: function onClick() {
        setAttributes({
          tools: [].concat(_toConsumableArray(tools.slice(0, i)), _toConsumableArray(tools.slice(i + 1)))
        });
      }
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-4 w-4",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: "5"
    }, /*#__PURE__*/React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M6 18L18 6M6 6l12 12"
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RichText, {
      className: "mb-3",
      keepPlaceholderOnFocus: true,
      value: tool.name,
      placeholder: __("Enter tool name"),
      onChange: function onChange(newTool) {
        return setAttributes({
          tools: [].concat(_toConsumableArray(tools.slice(0, i)), [Object.assign(tools[i], {
            name: newTool
          })], _toConsumableArray(tools.slice(i + 1)))
        });
      }
    })), addToolImages && (tool.imageURL !== "" ? /*#__PURE__*/React.createElement("figure", {
      className: "relative mx-auto w-fit"
    }, /*#__PURE__*/React.createElement("img", {
      src: tool.imageURL,
      alt: ""
    }), isSelected && /*#__PURE__*/React.createElement(_components_button_delete_image__WEBPACK_IMPORTED_MODULE_2__.ButtonDeleteImage, {
      onClick: function onClick() {
        setAttributes({
          tools: [].concat(_toConsumableArray(tools.slice(0, i)), [Object.assign(tool, {
            imageID: 0,
            imageURL: "",
            imageAlt: ""
          })], _toConsumableArray(tools.slice(i + 1)))
        });
      }
    })) : /*#__PURE__*/React.createElement(MediaUpload, {
      onSelect: function onSelect(img) {
        return setAttributes({
          tools: [].concat(_toConsumableArray(tools.slice(0, i)), [Object.assign(tool, {
            imageID: img.id,
            imageURL: img.url,
            imageAlt: img.alt
          })], _toConsumableArray(tools.slice(i + 1)))
        });
      },
      allowedTypes: ["image"],
      value: tool.imageID,
      render: function render(_ref3) {
        var open = _ref3.open;
        return /*#__PURE__*/React.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.InputUpload, {
          open: open
        });
      }
    })));
  })), /*#__PURE__*/React.createElement(_components_button_add_step__WEBPACK_IMPORTED_MODULE_3__.ButtonAddStep, {
    label: "Tambah tools",
    onClick: function onClick() {
      setAttributes({
        tools: [].concat(_toConsumableArray(tools), [{
          name: "",
          imageID: 0,
          imageAlt: "",
          imageURL: ""
        }])
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "howto_cost_container mb-3 mt-0 flex flex-wrap justify-between"
  }, /*#__PURE__*/React.createElement(RichText, {
    value: costDisplayText,
    className: "font-medium",
    onChange: function onChange(costDisplayText) {
      return setAttributes({
        costDisplayText: costDisplayText
      });
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "howto_cost_display flex",
    style: {
      flexDirection: showUnitFirst ? "row" : "row-reverse"
    }
  }, /*#__PURE__*/React.createElement(RichText, {
    style: showUnitFirst ? {
      paddingRight: "10px"
    } : {
      paddingLeft: "10px"
    },
    keepPlaceholderOnFocus: true,
    placeholder: __("Units"),
    value: costCurrency,
    onChange: function onChange(costCurrency) {
      setAttributes({
        costCurrency: costCurrency.replace(/<br>/g, "")
      });
    }
  }), /*#__PURE__*/React.createElement(RichText, {
    keepPlaceholderOnFocus: true,
    placeholder: __("0"),
    value: String(cost),
    onChange: function onChange(cost) {
      if (!Number.isNaN(Number(cost))) {
        setAttributes({
          cost: Number(cost)
        });
      }
    }
  })))), /*#__PURE__*/React.createElement(RichText, {
    tagName: secondLevelTag,
    className: "mt-0 mb-1",
    placeholder: __("Duration"),
    keepPlaceholderOnFocus: true,
    value: timeIntro,
    onChange: function onChange(timeIntro) {
      return setAttributes({
        timeIntro: timeIntro
      });
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "howto-duration-input"
  }, /*#__PURE__*/React.createElement("p", {
    className: "m-0"
  }, /*#__PURE__*/React.createElement(RichText, {
    keepPlaceholderOnFocus: true,
    value: totalTimeText,
    onChange: function onChange(totalTimeText) {
      return setAttributes({
        totalTimeText: totalTimeText
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 gap-4 md:grid-cols-7"
  }, units.map(function (u, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i
    }, u === "Tahun" || u === "Bulan" || u === "Minggu" || u === "Hari" ? /*#__PURE__*/React.createElement("p", {
      className: "hidden"
    }, __(u), /*#__PURE__*/React.createElement(RichText, {
      className: "hidden",
      keepPlaceholderOnFocus: true,
      placeholder: __("0"),
      value: String(totalTime[i]),
      onChange: function onChange(newInput) {
        if (!Number.isNaN(Number(newInput))) {
          setAttributes({
            totalTime: [].concat(_toConsumableArray(totalTime.slice(0, i)), [Number(newInput)], _toConsumableArray(totalTime.slice(i + 1)))
          });
        }
      }
    })) : /*#__PURE__*/React.createElement("p", {
      className: "m-0"
    }, __(u), " :", " ", /*#__PURE__*/React.createElement(RichText, {
      className: "howto-time-value inline-block",
      keepPlaceholderOnFocus: true,
      placeholder: __("0"),
      value: String(totalTime[i]),
      onChange: function onChange(newInput) {
        if (!Number.isNaN(Number(newInput))) {
          setAttributes({
            totalTime: [].concat(_toConsumableArray(totalTime.slice(0, i)), [Number(newInput)], _toConsumableArray(totalTime.slice(i + 1)))
          });
        }
      }
    })));
  }))), useSections ? /*#__PURE__*/React.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.ListWrapper, {
    listStyle: sectionListStyle
  }, section.map(function (s, i) {
    return /*#__PURE__*/React.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.HowToSection, _extends({
      key: i
    }, s, {
      advancedMode: advancedMode,
      clips: clips,
      videoURL: videoURL,
      videoDuration: videoDuration,
      sectionListStyle: sectionListStyle,
      sectionNum: i,
      sectionTag: secondLevelTag,
      stepTag: thirdLevelTag,
      selectStepInSection: function selectStepInSection(step) {
        return setStates({
          currentStep: "section-".concat(i, "-step-").concat(step)
        });
      },
      editSection: function editSection(newSection) {
        return setAttributes({
          section: [].concat(_toConsumableArray(section.slice(0, i)), [newSection], _toConsumableArray(section.slice(i + 1)))
        });
      },
      moveUp: function moveUp() {
        if (i > 0) {
          var newSection = moveElement(section, i, i - 1);
          setAttributes({
            section: newSection
          });
        }
      },
      moveDown: function moveDown() {
        if (i < section.length - 1) {
          var newSection = moveElement(section, i, i + 1);
          setAttributes({
            section: newSection
          });
        }
      },
      deleteSection: function deleteSection() {
        return setAttributes({
          section: [].concat(_toConsumableArray(section.slice(0, i)), _toConsumableArray(section.slice(i + 1)))
        });
      },
      blockIsSelected: isSelected,
      currentStep: currentStep,
      updateState: function updateState(newState) {
        return setStates(newState);
      }
    }));
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.ListWrapper, {
    className: "howto-steps-list pl-0",
    listStyle: sectionListStyle
  }, section[0].steps.map(function (step, i) {
    return /*#__PURE__*/React.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.HowToStep, _extends({
      key: i,
      advancedMode: advancedMode,
      sectionNum: -1,
      stepNum: i,
      stepTag: thirdLevelTag
    }, step, {
      clips: clips,
      videoURL: videoURL,
      videoDuration: videoDuration,
      selectStep: function selectStep() {
        return setStates({
          currentStep: "step-".concat(i)
        });
      },
      editStep: function editStep(newStep) {
        setAttributes({
          section: [Object.assign(section[0], {
            steps: [].concat(_toConsumableArray(section[0].steps.slice(0, i)), [Object.assign(section[0].steps[i], newStep)], _toConsumableArray(section[0].steps.slice(i + 1)))
          })]
        });
      },
      deleteStep: function deleteStep() {
        var newSection = [Object.assign(section[0], {
          steps: [].concat(_toConsumableArray(section[0].steps.slice(0, i)), _toConsumableArray(section[0].steps.slice(i + 1)))
        })];
        section[0].steps.forEach(function (step, j) {
          //   step.anchor = `step${j}`
          newSection[0].steps[j].anchor = "step".concat(j);
        });
        setAttributes({
          section: newSection
        });
        if (currentStep === "step-".concat(i)) {
          setStates({
            currentStep: ""
          });
        }
      },
      moveUp: function moveUp() {
        if (i > 0) {
          var newSection = [Object.assign(section[0], {
            steps: [].concat(_toConsumableArray(section[0].steps.slice(0, i - 1)), [section[0].steps[i], section[0].steps[i - 1]], _toConsumableArray(section[0].steps.slice(i + 1)))
          })];
          section[0].steps.forEach(function (step, j) {
            // step.anchor = `step${j}`
            newSection[0].steps[j].anchor = "step".concat(j);
          });
          setAttributes({
            section: newSection
          });
          setStates({
            currentStep: "step-".concat(i - 1)
          });
        }
      },
      moveDown: function moveDown() {
        if (i < section[0].steps.length - 1) {
          var newSection = [Object.assign(section[0], {
            steps: [].concat(_toConsumableArray(section[0].steps.slice(0, i)), [section[0].steps[i + 1], section[0].steps[i]], _toConsumableArray(section[0].steps.slice(i + 2)))
          })];
          section[0].steps.forEach(function (step, j) {
            // step.anchor = `step${j}`
            newSection[0].steps[j].anchor = "step".concat(j);
          });
          setAttributes({
            section: newSection
          });
          setStates({
            currentStep: "step-".concat(i + 1)
          });
        }
      },
      blockIsSelected: isSelected,
      updateState: function updateState(newState) {
        return setStates(newState);
      }
    }));
  })), /*#__PURE__*/React.createElement(_components_button_add_step__WEBPACK_IMPORTED_MODULE_3__.ButtonAddStep, {
    onClick: function onClick() {
      setAttributes({
        section: [Object.assign(section[0], {
          steps: [].concat(_toConsumableArray(section[0].steps), [{
            anchor: "step".concat(section[0].steps.length),
            stepPic: {
              img: -1,
              alt: "",
              url: "",
              width: 0,
              float: "none"
            },
            direction: "",
            tip: "",
            title: "",
            hasVideoClip: false,
            videoClipStart: 0,
            videoClipEnd: 0
          }])
        })]
      });
    }
  })), useSections && /*#__PURE__*/React.createElement(_components_button_add_step__WEBPACK_IMPORTED_MODULE_3__.ButtonAddStep, {
    label: "Tambah section",
    onClick: function onClick() {
      setAttributes({
        section: [].concat(_toConsumableArray(section), [{
          sectionName: "",
          steps: [{
            anchor: "section".concat(section.length, "step0"),
            stepPic: {
              img: -1,
              alt: "",
              url: "",
              width: 0,
              float: "none"
            },
            direction: "",
            tip: "",
            title: "",
            hasVideoClip: false,
            videoClipStart: 0,
            videoClipEnd: 0
          }]
        }])
      });
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "howto-yield mb-4 rounded-xl bg-[#16A085] p-5 text-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-100 mb-3 flex flex-wrap justify-center"
  }, /*#__PURE__*/React.createElement(RichText, {
    tagName: secondLevelTag,
    className: "m-0 font-bold text-white",
    placeholder: __("Result"),
    keepPlaceholderOnFocus: true,
    value: resultIntro,
    onChange: function onChange(resultIntro) {
      return setAttributes({
        resultIntro: resultIntro
      });
    },
    onFocus: function onFocus() {
      return setStates({
        currentStep: "final"
      });
    }
  })), finalImageURL !== "" ? /*#__PURE__*/React.createElement("figure", {
    className: "howto-yield-image-container relative mx-auto w-fit"
  }, /*#__PURE__*/React.createElement("img", {
    alt: "",
    className: "howto-step-image overflow-hidden rounded-xl",
    src: finalImageURL,
    onClick: function onClick() {
      return setStates({
        currentStep: "final"
      });
    },
    "aria-hidden": "true"
  }), isSelected && /*#__PURE__*/React.createElement(_components_button_delete_image__WEBPACK_IMPORTED_MODULE_2__.ButtonDeleteImage, {
    onClick: function onClick() {
      setAttributes({
        finalImageID: -1,
        finalImageAlt: "",
        finalImageURL: "",
        finalImageCaption: "",
        finalImageWidth: 0,
        finalImageFloat: "none"
      });
    }
  }), /*#__PURE__*/React.createElement(RichText, {
    tagName: "figcaption",
    keepPlaceholderOnFocus: true,
    placeholder: __("Final image caption"),
    value: finalImageCaption,
    onChange: function onChange(finalImageCaption) {
      return setAttributes({
        finalImageCaption: finalImageCaption
      });
    },
    onFocus: function onFocus() {
      return setStates({
        currentStep: "final"
      });
    }
  })) : /*#__PURE__*/React.createElement("div", {
    className: "align-center flex flex-wrap justify-center py-5"
  }, /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(img) {
      setStates({
        currentStep: "final"
      });
      setAttributes({
        finalImageID: img.id,
        finalImageAlt: img.alt,
        finalImageURL: img.url,
        finalImageCaption: img.caption,
        finalImageWidth: Math.min(Math.max(img.width, 200), 800),
        finalImageFloat: "none"
      });
    },
    allowedTypes: ["image"],
    value: finalImageID,
    render: function render(_ref4) {
      var open = _ref4.open;
      return /*#__PURE__*/React.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.InputUpload, {
        open: open
      });
    }
  })), /*#__PURE__*/React.createElement(RichText, {
    keepPlaceholderOnFocus: true,
    placeholder: __("Result text"),
    value: howToYield,
    onChange: function onChange(howToYield) {
      return setAttributes({
        howToYield: howToYield
      });
    },
    onFocus: function onFocus() {
      return setStates({
        currentStep: "final"
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-4 grid  grid-cols-1 gap-4 md:grid-cols-3 md:gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg border border-solid border-slate-200 px-4 py-2"
  }, /*#__PURE__*/React.createElement("h6", {
    className: "m-0 font-normal normal-case"
  }, "Like Count"), /*#__PURE__*/React.createElement(TextControl, {
    value: howToLikeCount,
    onChange: function onChange(howToLikeCount) {
      return setAttributes({
        howToLikeCount: howToLikeCount
      });
    },
    type: "number"
  })), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg border border-solid border-slate-200 px-4 py-2"
  }, /*#__PURE__*/React.createElement("h6", {
    className: "m-0 font-normal normal-case"
  }, "Disike Count"), /*#__PURE__*/React.createElement(TextControl, {
    value: howToDisikeCount,
    onChange: function onChange(howToDisikeCount) {
      return setAttributes({
        howToDisikeCount: howToDisikeCount
      });
    },
    type: "number"
  })), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg border border-solid border-slate-200 px-4 py-2"
  }, /*#__PURE__*/React.createElement("h6", {
    className: "m-0 font-normal normal-case"
  }, "Vote Total Count"), /*#__PURE__*/React.createElement("p", {
    className: "m-0"
  }, howToVoteCount)))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "@media (min-width:768px) {".concat(useSections ? section.map(function (s, i) {
        return s.steps.map(function (st) {
          return function (_ref5) {
            var width = _ref5.width,
              float = _ref5.float;
            return {
              width: width,
              float: float
            };
          }(st.stepPic);
        }).map(function (img, j) {
          return img.width > 0 ? "#howto-".concat(blockID, " .howto-section:nth-child(").concat(i + 1, ") .howto-step:nth-child(").concat(j + 1, ") figure { width: ").concat(img.width, "px; float: ").concat(img.float, ";}") : "";
        }).join("");
      }).join("") : section[0].steps.map(function (s) {
        return function (_ref6) {
          var width = _ref6.width,
            float = _ref6.float;
          return {
            width: width,
            float: float
          };
        }(s.stepPic);
      }).map(function (img, i) {
        return img.width > 0 ? "#howto-".concat(blockID, " .howto-step:nth-child(").concat(i + 1, ") figure { width: ").concat(img.width, "px; float: ").concat(img.float, ";}") : "";
      }).join("")).concat(finalImageWidth > 0 ? "#howto-".concat(blockID, " .howto-yield-image-container{width: ").concat(finalImageWidth, "px;float: ").concat(finalImageFloat, ";}") : "", "\n}")
    }
  }));
}

/***/ }),

/***/ "./src/blocks/how-to/edit/components/how_to_section.jsx":
/*!**************************************************************!*\
  !*** ./src/blocks/how-to/edit/components/how_to_section.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HowToSection: () => (/* binding */ HowToSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_button_add_step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/button_add_step */ "./src/components/button_add_step.jsx");
/* harmony import */ var _components_button_up_down_delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/button_up_down_delete */ "./src/components/button_up_down_delete.jsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/blocks/how-to/edit/components/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var __ = wp.i18n.__; // Import __() from wp.i18n

var _ref = wp.blockEditor || wp.editor,
  RichText = _ref.RichText;
var HowToSection = /*#__PURE__*/function (_Component) {
  _inherits(HowToSection, _Component);
  var _super = _createSuper(HowToSection);
  function HowToSection() {
    _classCallCheck(this, HowToSection);
    return _super.apply(this, arguments);
  }
  _createClass(HowToSection, [{
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props,
        sectionListStyle = _this$props.sectionListStyle,
        sectionNum = _this$props.sectionNum,
        sectionName = _this$props.sectionName,
        sectionTag = _this$props.sectionTag,
        steps = _this$props.steps,
        stepTag = _this$props.stepTag,
        editSection = _this$props.editSection,
        moveUp = _this$props.moveUp,
        moveDown = _this$props.moveDown,
        deleteSection = _this$props.deleteSection,
        videoDuration = _this$props.videoDuration,
        clips = _this$props.clips,
        videoURL = _this$props.videoURL,
        advancedMode = _this$props.advancedMode,
        blockIsSelected = _this$props.blockIsSelected,
        updateState = _this$props.updateState,
        currentStep = _this$props.currentStep;
      return /*#__PURE__*/React.createElement("li", {
        className: "howto-section"
      }, /*#__PURE__*/React.createElement("div", {
        className: "relative"
      }, /*#__PURE__*/React.createElement(RichText, {
        keepPlaceholderOnFocus: true,
        tagName: sectionTag,
        placeholder: __("Section name goes here"),
        value: sectionName,
        onChange: function onChange(sectionName) {
          return editSection({
            sectionName: sectionName,
            steps: steps
          });
        }
      }), /*#__PURE__*/React.createElement(_components_button_up_down_delete__WEBPACK_IMPORTED_MODULE_2__.ButtonUpDownDelete, {
        deleteStep: deleteSection,
        moveUp: moveUp,
        moveDown: moveDown
      })), /*#__PURE__*/React.createElement(_index__WEBPACK_IMPORTED_MODULE_3__.ListWrapper, {
        className: "howto-steps-list pl-0",
        listStyle: sectionListStyle
      }, steps.map(function (step, i) {
        return /*#__PURE__*/React.createElement(_index__WEBPACK_IMPORTED_MODULE_3__.HowToStep, _extends({}, step, {
          key: i,
          advancedMode: advancedMode,
          clips: clips,
          sectionNum: sectionNum,
          stepNum: i,
          stepTag: stepTag,
          videoURL: videoURL,
          videoDuration: videoDuration,
          selectStep: function selectStep() {
            return _this.props.selectStepInSection(i);
          },
          editStep: function editStep(newStep) {
            editSection({
              sectionName: sectionName,
              steps: [].concat(_toConsumableArray(steps.slice(0, i)), [Object.assign(steps[i], newStep)], _toConsumableArray(steps.slice(i + 1)))
            });
          },
          deleteStep: function deleteStep() {
            var newSteps = [].concat(_toConsumableArray(steps.slice(0, i)), _toConsumableArray(steps.slice(i + 1)));
            newSteps.forEach(function (_step, j) {
              // step.anchor = `section${sectionNum}step${j}`
              newSteps[j].anchor = "section".concat(sectionNum, "step").concat(j);
            });
            editSection({
              sectionName: sectionName,
              steps: [].concat(_toConsumableArray(steps.slice(0, i)), _toConsumableArray(steps.slice(i + 1)))
            });
            if (currentStep === "section-".concat(sectionNum, "-step-").concat(i)) {
              updateState({
                currentStep: ""
              });
            }
          },
          moveUp: function moveUp() {
            if (i > 0) {
              var newSteps = [].concat(_toConsumableArray(steps.slice(0, i - 1)), [steps[i], steps[i - 1]], _toConsumableArray(steps.slice(i + 1)));
              newSteps.forEach(function (step, j) {
                //   step.anchor = `section${sectionNum}step${j}`
                newSteps[j].anchor = "section".concat(sectionNum, "step").concat(j);
              });
              editSection({
                sectionName: sectionName,
                steps: newSteps
              });
              // set value of currentStep to recently-moved step
              updateState({
                currentStep: "section-".concat(sectionNum, "-step-").concat(i - 1)
              });
            }
          },
          moveDown: function moveDown() {
            if (i < steps.length - 1) {
              var newSteps = [].concat(_toConsumableArray(steps.slice(0, i)), [steps[i + 1], steps[i]], _toConsumableArray(steps.slice(i + 2)));
              newSteps.forEach(function (step, j) {
                //   step.anchor = `section${sectionNum}step${j}`
                newSteps[j].anchor = "section".concat(sectionNum, "step").concat(j);
              });
              editSection({
                sectionName: sectionName,
                steps: newSteps
              });
              updateState({
                currentStep: "section-".concat(sectionNum, "-step-").concat(i + 1)
              });
            }
          },
          blockIsSelected: blockIsSelected,
          currentStep: currentStep,
          updateState: updateState
        }));
      })), /*#__PURE__*/React.createElement(_components_button_add_step__WEBPACK_IMPORTED_MODULE_1__.ButtonAddStep, {
        onClick: function onClick() {
          editSection({
            sectionName: sectionName,
            steps: [].concat(_toConsumableArray(steps), [{
              anchor: "section".concat(sectionNum, "step").concat(steps.length),
              stepPic: {
                img: -1,
                alt: "",
                url: "",
                width: 0,
                float: "none"
              },
              direction: "",
              tip: "",
              title: "",
              hasVideoClip: false,
              videoClipStart: 0,
              videoClipEnd: 0
            }])
          });
        }
      }));
    }
  }]);
  return HowToSection;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./src/blocks/how-to/edit/components/how_to_step.jsx":
/*!***********************************************************!*\
  !*** ./src/blocks/how-to/edit/components/how_to_step.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HowToStep: () => (/* binding */ HowToStep)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_button_delete_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/button_delete_image */ "./src/components/button_delete_image.jsx");
/* harmony import */ var _components_button_up_down_delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/button_up_down_delete */ "./src/components/button_up_down_delete.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var __ = wp.i18n.__;
var _ref = wp.blockEditor || wp.editor,
  RichText = _ref.RichText,
  MediaUpload = _ref.MediaUpload;
var ToggleControl = wp.components.ToggleControl;
var defaultTimeDisplay = {
  w: 0,
  d: 0,
  h: 0,
  m: 0,
  s: 0
};
var HowToStep = /*#__PURE__*/function (_Component) {
  _inherits(HowToStep, _Component);
  var _super = _createSuper(HowToStep);
  function HowToStep(props) {
    var _this;
    _classCallCheck(this, HowToStep);
    _this = _super.call(this, props);
    _this.state = {
      startTime: _objectSpread({}, defaultTimeDisplay),
      endTime: _objectSpread({}, defaultTimeDisplay),
      validTimeInput: true
    };
    return _this;
  }
  _createClass(HowToStep, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        clips = _this$props.clips,
        hasVideoClip = _this$props.hasVideoClip,
        videoClipEnd = _this$props.videoClipEnd,
        videoClipStart = _this$props.videoClipStart,
        sectionNum = _this$props.sectionNum,
        stepNum = _this$props.stepNum;
      if (hasVideoClip) {
        var start = convertFromSeconds(videoClipStart);
        var end = convertFromSeconds(videoClipEnd);
        var clipId = sectionNum > -1 ? "section".concat(sectionNum, "step").concat(stepNum) : "step".concat(stepNum);
        this.setState({
          startTime: {
            w: 0,
            d: start.d,
            h: start.h,
            m: start.m,
            s: start.s
          },
          endTime: {
            w: 0,
            d: end.d,
            h: end.h,
            m: end.m,
            s: end.s
          },
          validTimeInput: clips.filter(function (c) {
            return c.anchor !== clipId && (videoClipStart > c.clipStart && videoClipStart < c.clipEnd || videoClipEnd > c.clipStart && videoClipEnd < c.clipEnd);
          }).length === 0
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
        videoClipStart = _this$props2.videoClipStart,
        videoClipEnd = _this$props2.videoClipEnd,
        sectionNum = _this$props2.sectionNum,
        stepNum = _this$props2.stepNum,
        clips = _this$props2.clips,
        videoURL = _this$props2.videoURL;
      var clipId = sectionNum > -1 ? "section".concat(sectionNum, "step").concat(stepNum) : "step".concat(stepNum);
      if (prevProps.videoClipStart !== videoClipStart || prevProps.videoClipEnd !== videoClipEnd) {
        this.setState({
          validTimeInput: videoClipStart <= videoClipEnd && clips.filter(function (c) {
            return c.anchor !== clipId && (videoClipStart > c.clipStart && videoClipStart < c.clipEnd || videoClipEnd > c.clipStart && videoClipEnd < c.clipEnd);
          }).length === 0
        });
      }
      if (prevProps.videoURL !== videoURL) {
        this.setState({
          startTime: _objectSpread({}, defaultTimeDisplay),
          endTime: _objectSpread({}, defaultTimeDisplay)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props,
        direction = _this$props3.direction,
        tip = _this$props3.tip,
        title = _this$props3.title,
        editStep = _this$props3.editStep,
        deleteStep = _this$props3.deleteStep,
        moveUp = _this$props3.moveUp,
        moveDown = _this$props3.moveDown,
        stepPic = _this$props3.stepPic,
        stepTag = _this$props3.stepTag,
        videoDuration = _this$props3.videoDuration,
        hasVideoClip = _this$props3.hasVideoClip,
        advancedMode = _this$props3.advancedMode,
        blockIsSelected = _this$props3.blockIsSelected,
        selectStep = _this$props3.selectStep,
        stepNum = _this$props3.stepNum;
      var _this$state = this.state,
        startTime = _this$state.startTime,
        endTime = _this$state.endTime,
        validTimeInput = _this$state.validTimeInput;
      return /*#__PURE__*/React.createElement("li", {
        className: "howto-step relative mt-12 overflow-visible p-3"
      }, /*#__PURE__*/React.createElement(_components_button_up_down_delete__WEBPACK_IMPORTED_MODULE_2__.ButtonUpDownDelete, {
        deleteStep: deleteStep,
        moveUp: moveUp,
        moveDown: moveDown
      }), /*#__PURE__*/React.createElement("div", {
        className: "flex flex-wrap"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex w-full flex-wrap"
      }, /*#__PURE__*/React.createElement("div", {
        className: "my-2 flex aspect-square h-[fit-content] w-[2.2rem] flex-none flex-wrap  items-center justify-center rounded-full bg-slate-200 text-2xl font-semibold md:col-span-1 md:w-[2.2rem] md:text-2xl"
      }, stepNum + 1), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 px-2"
      }, /*#__PURE__*/React.createElement(RichText, {
        tagName: stepTag,
        keepPlaceholderOnFocus: true,
        placeholder: __("Title goes here"),
        className: "howto-step__title my-2 text-[1.3rem] font-normal normal-case md:text-2xl",
        value: title,
        onChange: function onChange(newVal) {
          return editStep({
            title: newVal
          });
        },
        onFocus: selectStep
      }))), /*#__PURE__*/React.createElement("div", {
        className: "w-full"
      }, /*#__PURE__*/React.createElement(RichText, {
        keepPlaceholderOnFocus: true,
        placeholder: __("Direction goes here"),
        value: direction,
        onFocus: selectStep,
        onChange: function onChange(newVal) {
          return editStep({
            direction: newVal
          });
        }
      }), /*#__PURE__*/React.createElement(RichText, {
        keepPlaceholderOnFocus: true,
        className: "hidden",
        placeholder: __("Add a tip (optional)"),
        value: tip,
        onFocus: selectStep,
        onChange: function onChange(newVal) {
          return editStep({
            tip: newVal
          });
        }
      }), advancedMode && /*#__PURE__*/React.createElement(React.Fragment, null, videoDuration > 0 && /*#__PURE__*/React.createElement(ToggleControl, {
        checked: hasVideoClip,
        label: __("Use part of the video in this step"),
        onChange: function onChange(hasVideoClip) {
          editStep({
            hasVideoClip: hasVideoClip
          });
          if (!hasVideoClip) {
            editStep({
              videoClipEnd: 0,
              videoClipStart: 0
            });
            _this2.setState({
              startTime: _objectSpread({}, defaultTimeDisplay),
              endTime: _objectSpread({}, defaultTimeDisplay)
            });
          }
        }
      }), videoDuration > 0 && hasVideoClip && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        style: {
          color: validTimeInput ? "black" : "red"
        }
      }, __("Start time")), videoDuration >= 86400 && /*#__PURE__*/React.createElement("input", {
        type: "number",
        value: startTime.d,
        min: 0,
        step: 1,
        title: __("Days"),
        onChange: function onChange(e) {
          var _this2$state$startTim = _this2.state.startTime,
            h = _this2$state$startTim.h,
            m = _this2$state$startTim.m,
            s = _this2$state$startTim.s;
          var d = Number(e.target.value);
          var startPoint = d * 86400 + h * 3600 + m * 60 + s;
          if (startPoint < videoDuration && d % 1 === 0 && d > -1) {
            _this2.setState({
              startTime: Object.assign(startTime, {
                d: d
              })
            });
            editStep({
              videoClipStart: startPoint
            });
          }
        }
      }), videoDuration >= 3600 && /*#__PURE__*/React.createElement("input", {
        type: "number",
        value: startTime.h,
        min: 0,
        max: 23,
        step: 1,
        title: __("Hours"),
        onChange: function onChange(e) {
          var _this2$state$startTim2 = _this2.state.startTime,
            d = _this2$state$startTim2.d,
            m = _this2$state$startTim2.m,
            s = _this2$state$startTim2.s;
          var h = Number(e.target.value);
          var startPoint = d * 86400 + h * 3600 + m * 60 + s;
          if (startPoint < videoDuration && h % 1 === 0 && h > -1 && h < 24) {
            _this2.setState({
              startTime: Object.assign(startTime, {
                h: h
              })
            });
            editStep({
              videoClipStart: startPoint
            });
          }
        }
      }), videoDuration >= 60 && /*#__PURE__*/React.createElement("input", {
        type: "number",
        value: startTime.m,
        min: 0,
        max: 59,
        step: 1,
        title: __("Minutes"),
        onChange: function onChange(e) {
          var _this2$state$startTim3 = _this2.state.startTime,
            d = _this2$state$startTim3.d,
            h = _this2$state$startTim3.h,
            s = _this2$state$startTim3.s;
          var m = Number(e.target.value);
          var startPoint = d * 86400 + h * 3600 + m * 60 + s;
          if (startPoint < videoDuration && m % 1 === 0 && m > -1 && m < 60) {
            _this2.setState({
              startTime: Object.assign(startTime, {
                m: m
              })
            });
            editStep({
              videoClipStart: startPoint
            });
          }
        }
      }), /*#__PURE__*/React.createElement("input", {
        type: "number",
        value: startTime.s,
        min: 0,
        max: 59,
        step: 1,
        title: __("Seconds"),
        onChange: function onChange(e) {
          var _this2$state$startTim4 = _this2.state.startTime,
            d = _this2$state$startTim4.d,
            h = _this2$state$startTim4.h,
            m = _this2$state$startTim4.m;
          var s = Number(e.target.value);
          var startPoint = d * 86400 + h * 3600 + m * 60 + s;
          if (startPoint < videoDuration && s % 1 === 0 && s > -1 && s < 60) {
            _this2.setState({
              startTime: Object.assign(startTime, {
                s: s
              })
            });
            editStep({
              videoClipStart: startPoint
            });
          }
        }
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
        style: {
          color: validTimeInput ? "black" : "red"
        }
      }, __("End time")), videoDuration >= 86400 && /*#__PURE__*/React.createElement("input", {
        type: "number",
        value: endTime.d,
        min: 0,
        step: 1,
        title: __("Days"),
        onChange: function onChange(e) {
          var _this2$state$endTime = _this2.state.endTime,
            h = _this2$state$endTime.h,
            m = _this2$state$endTime.m,
            s = _this2$state$endTime.s;
          var d = Number(e.target.value);
          var endPoint = d * 86400 + h * 3600 + m * 60 + s;
          if (endPoint <= videoDuration && d % 1 === 0 && d > -1) {
            _this2.setState({
              endTime: Object.assign(endTime, {
                d: d
              })
            });
            editStep({
              videoClipEnd: endPoint
            });
          }
        }
      }), videoDuration >= 3600 && /*#__PURE__*/React.createElement("input", {
        type: "number",
        value: endTime.h,
        min: 0,
        max: 23,
        step: 1,
        title: __("Hours"),
        onChange: function onChange(e) {
          var _this2$state$endTime2 = _this2.state.endTime,
            d = _this2$state$endTime2.d,
            m = _this2$state$endTime2.m,
            s = _this2$state$endTime2.s;
          var h = Number(e.target.value);
          var endPoint = d * 86400 + h * 3600 + m * 60 + s;
          if (endPoint <= videoDuration && h % 1 === 0 && h > -1 && h < 24) {
            _this2.setState({
              endTime: Object.assign(endTime, {
                h: h
              })
            });
            editStep({
              videoClipEnd: endPoint
            });
          }
        }
      }), videoDuration >= 60 && /*#__PURE__*/React.createElement("input", {
        type: "number",
        value: endTime.m,
        min: 0,
        max: 59,
        step: 1,
        title: __("Minutes"),
        onChange: function onChange(e) {
          var _this2$state$endTime3 = _this2.state.endTime,
            d = _this2$state$endTime3.d,
            h = _this2$state$endTime3.h,
            s = _this2$state$endTime3.s;
          var m = Number(e.target.value);
          var endPoint = d * 86400 + h * 3600 + m * 60 + s;
          if (endPoint <= videoDuration && m % 1 === 0 && m > -1 && m < 60) {
            _this2.setState({
              endTime: Object.assign(endTime, {
                m: m
              })
            });
            editStep({
              videoClipEnd: endPoint
            });
          }
        }
      }), /*#__PURE__*/React.createElement("input", {
        type: "number",
        value: endTime.s,
        min: 0,
        max: 59,
        step: 1,
        title: __("Seconds"),
        onChange: function onChange(e) {
          var _this2$state$endTime4 = _this2.state.endTime,
            d = _this2$state$endTime4.d,
            h = _this2$state$endTime4.h,
            m = _this2$state$endTime4.m;
          var s = Number(e.target.value);
          var endPoint = d * 86400 + h * 3600 + m * 60 + s;
          if (endPoint <= videoDuration && s % 1 === 0 && s > -1 && s < 60) {
            _this2.setState({
              endTime: Object.assign(endTime, {
                s: s
              })
            });
            editStep({
              videoClipEnd: endPoint
            });
          }
        }
      })))), /*#__PURE__*/React.createElement("div", {
        className: "howto-step__image mx-auto mt-3 max-h-[1000px] w-full md:max-h-[1600px]"
      }, stepPic.url !== "" ? /*#__PURE__*/React.createElement("figure", {
        className: "relative mx-auto w-fit"
      }, /*#__PURE__*/React.createElement("img", {
        className: "howto-step-image overflow-hidden rounded-xl",
        src: stepPic.url,
        onClick: selectStep,
        "aria-hidden": "true",
        alt: ""
      }), blockIsSelected && /*#__PURE__*/React.createElement(_components_button_delete_image__WEBPACK_IMPORTED_MODULE_1__.ButtonDeleteImage, {
        onClick: function onClick() {
          editStep({
            stepPic: {
              id: -1,
              alt: "",
              url: "",
              caption: "",
              width: 0,
              float: "none"
            }
          });
        }
      }), /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("em", null, /*#__PURE__*/React.createElement(RichText, {
        tagName: "figcaption",
        keepPlaceholderOnFocus: true
        //   className="text-base"
        ,
        placeholder: __("Step image caption"),
        value: stepPic.caption,
        onFocus: selectStep,
        onChange: function onChange(newCaption) {
          return editStep({
            stepPic: Object.assign(stepPic, {
              caption: newCaption
            })
          });
        }
      })))) : /*#__PURE__*/React.createElement("div", {
        className: "align-center flex flex-wrap justify-center py-5"
      }, /*#__PURE__*/React.createElement(MediaUpload, {
        onSelect: function onSelect(img) {
          editStep({
            stepPic: {
              id: img.id,
              alt: img.alt,
              url: img.url,
              caption: img.caption,
              width: Math.min(Math.max(img.width, 200), 800),
              float: "none"
            }
          });
          selectStep();
        },
        allowedTypes: ["image"],
        value: stepPic.id,
        render: function render(_ref2) {
          var open = _ref2.open;
          return /*#__PURE__*/React.createElement("div", {
            className: "flex aspect-[16/9] w-full flex-wrap items-center justify-center rounded-lg bg-[#EEEEEE] md:aspect-[16/6]",
            onClick: open,
            "aria-hidden": "true"
          }, /*#__PURE__*/React.createElement("div", {
            className: "flex flex-col flex-wrap items-center justify-center text-[#999999]"
          }, /*#__PURE__*/React.createElement("i", {
            className: "fa fa-picture-o text-8xl",
            "aria-hidden": "true"
          }), /*#__PURE__*/React.createElement("p", {
            className: "m-0 text-[#999999]"
          }, "Tambahkan Media")));
        }
      })))));
    }
  }]);
  return HowToStep;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./src/blocks/how-to/edit/components/index.js":
/*!****************************************************!*\
  !*** ./src/blocks/how-to/edit/components/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HowTo: () => (/* reexport safe */ _how_to__WEBPACK_IMPORTED_MODULE_0__.HowTo),
/* harmony export */   HowToSection: () => (/* reexport safe */ _how_to_section__WEBPACK_IMPORTED_MODULE_3__.HowToSection),
/* harmony export */   HowToStep: () => (/* reexport safe */ _how_to_step__WEBPACK_IMPORTED_MODULE_4__.HowToStep),
/* harmony export */   InputUpload: () => (/* reexport safe */ _input_upload__WEBPACK_IMPORTED_MODULE_5__.InputUpload),
/* harmony export */   InspectorPanel: () => (/* reexport safe */ _inspector_panel__WEBPACK_IMPORTED_MODULE_1__.InspectorPanel),
/* harmony export */   ListWrapper: () => (/* reexport safe */ _list_wrapper__WEBPACK_IMPORTED_MODULE_2__.ListWrapper)
/* harmony export */ });
/* harmony import */ var _how_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./how_to */ "./src/blocks/how-to/edit/components/how_to.jsx");
/* harmony import */ var _inspector_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector_panel */ "./src/blocks/how-to/edit/components/inspector_panel.jsx");
/* harmony import */ var _list_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list_wrapper */ "./src/blocks/how-to/edit/components/list_wrapper.jsx");
/* harmony import */ var _how_to_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./how_to_section */ "./src/blocks/how-to/edit/components/how_to_section.jsx");
/* harmony import */ var _how_to_step__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./how_to_step */ "./src/blocks/how-to/edit/components/how_to_step.jsx");
/* harmony import */ var _input_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input_upload */ "./src/blocks/how-to/edit/components/input_upload.jsx");







/***/ }),

/***/ "./src/blocks/how-to/edit/components/input_upload.jsx":
/*!************************************************************!*\
  !*** ./src/blocks/how-to/edit/components/input_upload.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputUpload: () => (/* binding */ InputUpload)
/* harmony export */ });
function InputUpload(_ref) {
  var open = _ref.open;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex aspect-[16/9] w-full flex-wrap items-center justify-center rounded-lg bg-[#EEEEEE] md:aspect-[16/6]",
    onClick: open,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col flex-wrap items-center justify-center text-[#999999]"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-picture-o text-8xl",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("p", {
    className: "m-0 text-[#999999]"
  }, "Tambahkan Media")));
}

/***/ }),

/***/ "./src/blocks/how-to/edit/components/inspector_panel.jsx":
/*!***************************************************************!*\
  !*** ./src/blocks/how-to/edit/components/inspector_panel.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InspectorPanel: () => (/* binding */ InspectorPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __ = wp.i18n.__; // Import __() from wp.i18n
var _ref = wp.blockEditor || wp.editor,
  InspectorControls = _ref.InspectorControls;
var _wp$components = wp.components,
  ToggleControl = _wp$components.ToggleControl,
  PanelBody = _wp$components.PanelBody,
  SelectControl = _wp$components.SelectControl,
  RadioControl = _wp$components.RadioControl,
  RangeControl = _wp$components.RangeControl;
var InspectorPanel = /*#__PURE__*/function (_Component) {
  _inherits(InspectorPanel, _Component);
  var _super = _createSuper(InspectorPanel);
  function InspectorPanel(props) {
    _classCallCheck(this, InspectorPanel);
    return _super.call(this, props);
  }
  _createClass(InspectorPanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        _this$props$attribute = _this$props.attributes,
        advancedMode = _this$props$attribute.advancedMode,
        section = _this$props$attribute.section,
        sectionListStyle = _this$props$attribute.sectionListStyle,
        suppliesListStyle = _this$props$attribute.suppliesListStyle,
        toolsListStyle = _this$props$attribute.toolsListStyle,
        showUnitFirst = _this$props$attribute.showUnitFirst,
        useSections = _this$props$attribute.useSections,
        includeToolsList = _this$props$attribute.includeToolsList,
        addToolImages = _this$props$attribute.addToolImages,
        includeSuppliesList = _this$props$attribute.includeSuppliesList,
        addSupplyImages = _this$props$attribute.addSupplyImages,
        finalImageID = _this$props$attribute.finalImageID,
        finalImageWidth = _this$props$attribute.finalImageWidth,
        finalImageFloat = _this$props$attribute.finalImageFloat,
        firstLevelTag = _this$props$attribute.firstLevelTag,
        secondLevelTag = _this$props$attribute.secondLevelTag,
        thirdLevelTag = _this$props$attribute.thirdLevelTag,
        setAttributes = _this$props.setAttributes,
        currentStep = _this$props.currentStep,
        updateState = _this$props.updateState;
      var activeImage = {
        width: 0,
        float: "none"
      };
      var sectionNum = -1;
      var stepNum = -1;
      var tagList = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "strong"];
      if (currentStep && currentStep !== "") {
        if (currentStep === "final") {
          if (finalImageID > -1) {
            activeImage = {
              width: finalImageWidth,
              float: finalImageFloat
            };
          }
        } else {
          var parsed = currentStep.split("-");
          if (useSections) {
            sectionNum = parseInt(parsed[1]);
            stepNum = parseInt(parsed[3]);
            if (!Number.isNaN(stepNum)) {
              // exclude review image
              var _section$sectionNum$s = section[sectionNum].steps[stepNum].stepPic,
                width = _section$sectionNum$s.width,
                float = _section$sectionNum$s.float,
                id = _section$sectionNum$s.id;
              if (id > -1) {
                activeImage = {
                  width: width,
                  float: float
                };
              }
            }
          } else {
            stepNum = parseInt(parsed[1]);
            if (!Number.isNaN(stepNum)) {
              // exclude review image
              var _section$0$steps$step = section[0].steps[stepNum].stepPic,
                _width = _section$0$steps$step.width,
                _float = _section$0$steps$step.float,
                _id = _section$0$steps$step.id;
              if (_id > -1) {
                activeImage = {
                  width: _width,
                  float: _float
                };
              }
            }
          }
        }
      }
      return /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
        title: __("How To Settings")
      }, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __("Use sections"),
        checked: useSections,
        onChange: function onChange(useSections) {
          setAttributes({
            useSections: useSections
          });
          if (useSections) {
            var newSection = JSON.parse(JSON.stringify(section));
            newSection.forEach(function (ns, i) {
              return ns.steps.forEach(function (s, j) {
                s.anchor = "section".concat(i, "step").concat(j);
              });
            });
            if (currentStep !== "") {
              updateState({
                currentStep: "section-0-".concat(currentStep)
              });
            }
          } else {
            updateState({
              currentStep: currentStep.slice(currentStep.indexOf("step"))
            });
            if (section.length < 1) {
              setAttributes({
                section: [{
                  sectionName: "",
                  steps: []
                }]
              });
            } else {
              var _newSection = JSON.parse(JSON.stringify(section));
              _newSection[0].steps.forEach(function (s, i) {
                s.anchor = "step".concat(i);
              });
              setAttributes({
                section: _newSection
              });
            }
          }
        }
      }), /*#__PURE__*/React.createElement(ToggleControl, {
        label: __("Use additional recommended attributes"),
        checked: advancedMode,
        onChange: function onChange(advancedMode) {
          return setAttributes({
            advancedMode: advancedMode
          });
        }
      }), advancedMode && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __("Include list of supplies"),
        checked: includeSuppliesList,
        onChange: function onChange(includeSuppliesList) {
          return setAttributes({
            includeSuppliesList: includeSuppliesList
          });
        }
      }), /*#__PURE__*/React.createElement(ToggleControl, {
        label: __("Include list of tools"),
        checked: includeToolsList,
        onChange: function onChange(includeToolsList) {
          return setAttributes({
            includeToolsList: includeToolsList
          });
        }
      }), /*#__PURE__*/React.createElement(ToggleControl, {
        label: __("Display the unit first in cost"),
        checked: showUnitFirst,
        onChange: function onChange(showUnitFirst) {
          return setAttributes({
            showUnitFirst: showUnitFirst
          });
        }
      })), useSections && /*#__PURE__*/React.createElement(RadioControl, {
        label: __("Section list style"),
        selected: sectionListStyle,
        options: ["none", "ordered", "unordered"].map(function (a) {
          return {
            label: __(a),
            value: a
          };
        }),
        onChange: function onChange(sectionListStyle) {
          return setAttributes({
            sectionListStyle: sectionListStyle
          });
        }
      })), activeImage.width > 0 && /*#__PURE__*/React.createElement(PanelBody, {
        title: __("Desktop image display settings")
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Image width"),
        value: activeImage.width,
        onChange: function onChange(imageWidth) {
          if (currentStep === "final") {
            setAttributes({
              finalImageWidth: imageWidth
            });
          } else {
            var _parsed = currentStep.split("-");
            var sectionClone = JSON.parse(JSON.stringify(section));
            if (useSections) {
              sectionNum = parseInt(_parsed[1]);
              stepNum = parseInt(_parsed[3]);
            } else {
              stepNum = parseInt(_parsed[1]);
            }
            sectionClone[Math.max(sectionNum, 0)].steps[stepNum].stepPic.width = imageWidth;
            setAttributes({
              section: sectionClone
            });
          }
        },
        min: 200,
        max: 800
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Image float"),
        value: activeImage.float,
        onChange: function onChange(newFloatValue) {
          if (currentStep === "final") {
            setAttributes({
              finalImageFloat: newFloatValue
            });
          } else {
            var _parsed2 = currentStep.split("-");
            var sectionClone = JSON.parse(JSON.stringify(section));
            if (useSections) {
              sectionNum = parseInt(_parsed2[1]);
              stepNum = parseInt(_parsed2[3]);
            } else {
              stepNum = parseInt(_parsed2[1]);
            }
            sectionClone[Math.max(sectionNum, 0)].steps[stepNum].stepPic.float = newFloatValue;
            setAttributes({
              section: sectionClone
            });
          }
        },
        options: ["none", "left", "right"].map(function (a) {
          return {
            label: a,
            value: a
          };
        })
      })), advancedMode && includeSuppliesList && /*#__PURE__*/React.createElement(PanelBody, {
        title: __("Supplies list settings")
      }, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __("Enable adding image for each supply"),
        checked: addSupplyImages,
        onChange: function onChange(addSupplyImages) {
          return setAttributes({
            addSupplyImages: addSupplyImages
          });
        }
      }), /*#__PURE__*/React.createElement(RadioControl, {
        label: __("Supplies list style"),
        selected: suppliesListStyle,
        options: ["none", "ordered", "unordered"].map(function (a) {
          return {
            label: __(a),
            value: a
          };
        }),
        onChange: function onChange(suppliesListStyle) {
          return setAttributes({
            suppliesListStyle: suppliesListStyle
          });
        }
      })), advancedMode && includeToolsList && /*#__PURE__*/React.createElement(PanelBody, {
        title: __("Tools list settings")
      }, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __("Enable adding image for each tool"),
        checked: addToolImages,
        onChange: function onChange(addToolImages) {
          return setAttributes({
            addToolImages: addToolImages
          });
        }
      }), /*#__PURE__*/React.createElement(RadioControl, {
        label: __("Tools list style"),
        selected: toolsListStyle,
        options: ["none", "ordered", "unordered"].map(function (a) {
          return {
            label: __(a),
            value: a
          };
        }),
        onChange: function onChange(toolsListStyle) {
          return setAttributes({
            toolsListStyle: toolsListStyle
          });
        }
      })), /*#__PURE__*/React.createElement(PanelBody, {
        title: __("Tag Settings")
      }, /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Howto title tag"),
        value: firstLevelTag,
        options: tagList.map(function (tag) {
          return {
            label: __(tag),
            value: tag
          };
        }),
        onChange: function onChange(firstLevelTag) {
          return setAttributes({
            firstLevelTag: firstLevelTag
          });
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Section title tag"),
        value: secondLevelTag,
        options: tagList.map(function (tag) {
          return {
            label: __(tag),
            value: tag
          };
        }),
        onChange: function onChange(secondLevelTag) {
          return setAttributes({
            secondLevelTag: secondLevelTag
          });
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Step title tag"),
        value: thirdLevelTag,
        options: tagList.map(function (tag) {
          return {
            label: __(tag),
            value: tag
          };
        }),
        onChange: function onChange(thirdLevelTag) {
          return setAttributes({
            thirdLevelTag: thirdLevelTag
          });
        }
      })));
    }
  }]);
  return InspectorPanel;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./src/blocks/how-to/edit/components/list_wrapper.jsx":
/*!************************************************************!*\
  !*** ./src/blocks/how-to/edit/components/list_wrapper.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListWrapper: () => (/* binding */ ListWrapper)
/* harmony export */ });
function ListWrapper(props) {
  var className = props.className,
    children = props.children,
    listStyle = props.listStyle;
  return listStyle === "ordered" ? /*#__PURE__*/React.createElement("ol", {
    className: className || null
  }, children) : /*#__PURE__*/React.createElement("ul", {
    className: className || null,
    style: {
      listStyleType: listStyle === "none" ? "none" : null
    }
  }, children);
}

/***/ }),

/***/ "./src/blocks/how-to/edit/edit.jsx":
/*!*****************************************!*\
  !*** ./src/blocks/how-to/edit/edit.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/blocks/how-to/edit/components/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Edit(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      videoURLInput: "",
      currentStep: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    states = _useState2[0],
    _setStates = _useState2[1];
  return /*#__PURE__*/React.createElement("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(), /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.InspectorPanel, _extends({}, props, {
    states: states,
    setStates: function setStates(newState) {
      return _setStates(_objectSpread(_objectSpread({}, states), newState));
    },
    updateState: function updateState(newState) {
      return _setStates(newState);
    },
    currentStep: states.currentStep
  })), /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.HowTo, _extends({}, props, {
    states: states,
    setStates: function setStates(newState) {
      return _setStates(_objectSpread(_objectSpread({}, states), newState));
    }
  })));
}

/***/ }),

/***/ "./src/blocks/how-to/icon.js":
/*!***********************************!*\
  !*** ./src/blocks/how-to/icon.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var icon = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "300",
  height: "300",
  viewBox: "0 0 100 100"
}, /*#__PURE__*/React.createElement("path", {
  d: "M73.157 31.836a24.296 24.296 0 00-8.841 5.535V8.841H8.841v82.318h54.665V100H0V0h73.157v31.836zM55.698 20.653H18.651v8.84h37.047v-8.84zm0 19.186H18.651v8.841h37.047v-8.841zM18.651 67.865h37.047v-8.841H18.651v8.841zm59.095 15.37A8.383 8.383 0 1077.747 100a8.383 8.383 0 00-.001-16.765zm5.489-4v-5.902C92.621 72.483 100 64.57 100 54.966c0-10.169-8.273-18.442-18.442-18.442s-18.442 8.273-18.442 18.442h11.36c0-3.904 3.177-7.081 7.082-7.081s7.082 3.177 7.082 7.081a7.09 7.09 0 01-7.082 7.082h-9.684v17.187h11.361z",
  fill: "#34495E"
}));
// await wp.data.dispatch('core/editor').autosave()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icon);

/***/ }),

/***/ "./src/components/button_add_step.jsx":
/*!********************************************!*\
  !*** ./src/components/button_add_step.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonAddStep: () => (/* binding */ ButtonAddStep)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__; // Import __() from wp.i18n

function ButtonAddStep(_ref) {
  var onClick = _ref.onClick,
    label = _ref.label;
  // eslint-disable-next-line no-param-reassign
  if (!label) label = "Tambah Langkah";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "my-12 flex w-full flex-wrap justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "rounded-full border bg-transparent px-2 py-1 text-sm  font-thin text-gray-800 ring-gray-500 transition duration-200 ease-in-out hover:bg-slate-400 hover:text-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-500",
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "2",
    stroke: "currentColor",
    className: "ml-[1px] mb-[3px] inline-block h-4 w-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 4.5v15m7.5-7.5h-15"
  })), __(label)));
}

/***/ }),

/***/ "./src/components/button_delete_image.jsx":
/*!************************************************!*\
  !*** ./src/components/button_delete_image.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonDeleteImage: () => (/* binding */ ButtonDeleteImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
function ButtonDeleteImage(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    title: __("Delete image"),
    className: "dashicons dashicons-trash absolute top-5 right-5 z-10 flex aspect-square h-12 w-12 cursor-pointer flex-wrap items-center justify-center rounded-lg bg-gray-800 p-2 text-2xl text-white hover:bg-gray-900",
    onClick: onClick,
    "aria-hidden": "true"
  });
}

/***/ }),

/***/ "./src/components/button_up_down_delete.jsx":
/*!**************************************************!*\
  !*** ./src/components/button_up_down_delete.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonUpDownDelete: () => (/* binding */ ButtonUpDownDelete)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
function ButtonUpDownDelete(_ref) {
  var moveUp = _ref.moveUp,
    moveDown = _ref.moveDown,
    deleteStep = _ref.deleteStep;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute top-0 right-[10px] grid translate-y-[-50%] grid-cols-3 overflow-hidden rounded-lg bg-gray-400"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "bg-gray-400 px-2 py-2 hover:bg-gray-600 hover:text-white",
    icon: "arrow-up-alt",
    onClick: function onClick() {
      return moveUp();
    },
    label: __("Move step up")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    strokeWidth: "1.5",
    stroke: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fillRule: "evenodd",
    d: "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "bg-gray-400 px-2 py-2 hover:bg-gray-600 hover:text-white",
    icon: "arrow-down-alt",
    onClick: function onClick() {
      return moveDown();
    },
    label: __("Move step down")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    strokeWidth: "1.5",
    stroke: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "bg-gray-400 px-2 py-2 hover:bg-red-700 hover:text-white",
    icon: "trash",
    label: __("Delete"),
    onClick: function onClick() {
      return deleteStep();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }))));
}

/***/ }),

/***/ "./node_modules/slug/slug.js":
/*!***********************************!*\
  !*** ./node_modules/slug/slug.js ***!
  \***********************************/
/***/ (function(module) {

/* global btoa */
(function (root) {
  let base64

  // This function's sole purpose is to help us ignore lone surrogates so that
  // malformed strings don't throw in the browser while being processed
  // permissively in Node.js. If we didn't care about parity, we could get rid
  // of it.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
  function getWholeCharAndI (str, i) {
    const code = str.charCodeAt(i)

    // This is a coherence check. `code` should never be `NaN`.
    /* istanbul ignore if */
    if (isNaN(code)) {
      throw new RangeError('Index ' + i + ' out of range for string "' + str + '"; please open an issue at https://github.com/Trott/slug/issues/new')
    }
    if (code < 0xD800 || code > 0xDFFF) {
      return [str.charAt(i), i] // Non-surrogate character, keeping 'i' the same
    }

    // High surrogate
    if (code >= 0xD800 && code <= 0xDBFF) {
      if (str.length <= (i + 1)) {
        // High surrogate without following low surrogate
        return [' ', i]
      }
      const next = str.charCodeAt(i + 1)
      if (next < 0xDC00 || next > 0xDFFF) {
        // High surrogate without following low surrogate
        return [' ', i]
      }
      return [str.charAt(i) + str.charAt(i + 1), i + 1]
    }

    // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
    if (i === 0) {
      // Low surrogate without preceding high surrogate
      return [' ', i]
    }

    const prev = str.charCodeAt(i - 1)

    /* istanbul ignore else */
    if (prev < 0xD800 || prev > 0xDBFF) {
      // Low surrogate without preceding high surrogate
      return [' ', i]
    }

    /* istanbul ignore next */
    throw new Error('String "' + str + '" reaches code believed to be unreachable; please open an issue at https://github.com/Trott/slug/issues/new')
  }

  if (typeof window !== 'undefined') {
    if (window.btoa) {
      base64 = function (input) {
        return btoa(unescape(encodeURIComponent(input)))
      }
    } else {
      // Polyfill for environments that don't have btoa or Buffer class (notably, React Native).
      // Based on https://github.com/davidchambers/Base64.js/blob/a121f75bb10c8dd5d557886c4b1069b31258d230/base64.js
      base64 = function (input) {
        const str = unescape(encodeURIComponent(input + ''))
        let output = ''
        for (
          let block, charCode, idx = 0, map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
          str.charAt(idx | 0) || (map = '=', idx % 1);
          output += map.charAt(63 & block >> 8 - idx % 1 * 8)
        ) {
          charCode = str.charCodeAt(idx += 3 / 4)
          // This is a coherence check. The result of unescape(encodeURIComponent()) should always be
          // characters with code points that fit into two bytes.
          /* istanbul ignore next */
          if (charCode > 0xFF) {
            throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.")
          }
          block = block << 8 | charCode
        }
        return output
      }
    }
  } else {
    base64 = function (input) {
      return Buffer.from(input).toString('base64')
    }
  }

  function slug (string, opts) {
    let result = slugify(string, opts)
    const fallback = opts && opts.fallback !== undefined ? opts.fallback : slug.defaults.fallback
    // If output is an empty string, try slug for base64 of string.
    if (fallback === true && result === '') {
      // Get rid of lone surrogates.
      let input = ''
      for (let i = 0; i < string.length; i++) {
        const charAndI = getWholeCharAndI(string, i)
        i = charAndI[1]
        input += charAndI[0]
      }
      result = slugify(base64(input), opts)
    }
    return result
  }

  const locales = {
    // http://www.eki.ee/wgrs/rom1_bg.pdf
    bg: { Й: 'Y', й: 'y', X: 'H', x: 'h', Ц: 'Ts', ц: 'ts', Щ: 'Sht', щ: 'sht', Ъ: 'A', ъ: 'a', Ь: 'Y', ь: 'y' },
    // Need a reference URL for German, although this is pretty well-known.
    de: { Ä: 'AE', ä: 'ae', Ö: 'OE', ö: 'oe', Ü: 'UE', ü: 'ue' },
    // Need a reference URL for Serbian.
    sr: { đ: 'dj', Đ: 'DJ' },
    // https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/864314/ROMANIZATION_OF_UKRAINIAN.pdf
    uk: { И: 'Y', и: 'y', Й: 'Y', й: 'y', Ц: 'Ts', ц: 'ts', Х: 'Kh', х: 'kh', Щ: 'Shch', щ: 'shch', Г: 'H', г: 'h' }
  }

  let defaultLocale = {}

  function slugify (string, opts) {
    if (typeof string !== 'string') {
      throw new Error('slug() requires a string argument, received ' + typeof string)
    }
    if (typeof opts === 'string') { opts = { replacement: opts } }
    opts = opts ? Object.assign({}, opts) : {}
    opts.mode = opts.mode || slug.defaults.mode
    const defaults = slug.defaults.modes[opts.mode]
    const keys = ['replacement', 'multicharmap', 'charmap', 'remove', 'lower', 'trim']
    for (let key, i = 0, l = keys.length; i < l; i++) {
      key = keys[i]
      opts[key] = (key in opts) ? opts[key] : defaults[key]
    }
    const localeMap = locales[opts.locale] || defaultLocale

    let lengths = []
    for (const key in opts.multicharmap) {
      if (!Object.prototype.hasOwnProperty.call(opts.multicharmap, key)) { continue }

      const len = key.length
      if (lengths.indexOf(len) === -1) { lengths.push(len) }
    }

    // We want to match the longest string if there are multiple matches, so
    // sort lengths in descending order.
    lengths = lengths.sort(function (a, b) { return b - a })

    const disallowedChars = opts.mode === 'rfc3986' ? /[^\w\s\-.~]/ : /[^A-Za-z0-9\s]/

    let result = ''
    for (let char, i = 0, l = string.length; i < l; i++) {
      char = string[i]
      let matchedMultichar = false
      for (let j = 0; j < lengths.length; j++) {
        const len = lengths[j]
        const str = string.substr(i, len)
        if (opts.multicharmap[str]) {
          i += len - 1
          char = opts.multicharmap[str]
          matchedMultichar = true
          break
        }
      }
      if (!matchedMultichar) {
        if (localeMap[char]) {
          char = localeMap[char]
        } else if (opts.charmap[char]) {
          char = opts.charmap[char].replace(opts.replacement, ' ')
        } else if (char.includes(opts.replacement)) {
          // preserve the replacement character in case it is excluded by disallowedChars
          char = char.replace(opts.replacement, ' ')
        } else {
          char = char.replace(disallowedChars, '')
        }
      }
      result += char
    }

    if (opts.remove) {
      result = result.replace(opts.remove, '')
    }
    if (opts.trim) {
      result = result.trim()
    }
    result = result.replace(/\s+/g, opts.replacement) // convert spaces
    if (opts.lower) {
      result = result.toLowerCase()
    }
    return result
  }

  const initialMulticharmap = {
    // multibyte devanagari characters (hindi, sanskrit, etc.)
    फ़: 'Fi',
    ग़: 'Ghi',
    ख़: 'Khi',
    क़: 'Qi',
    ड़: 'ugDha',
    ढ़: 'ugDhha',
    य़: 'Yi',
    ज़: 'Za',
    // hebrew
    // Refs: http://www.eki.ee/wgrs/rom1_he.pdf
    // Refs: https://en.wikipedia.org/wiki/Niqqud
    בִי: 'i',
    בֵ: 'e',
    בֵי: 'e',
    בֶ: 'e',
    בַ: 'a',
    בָ: 'a',
    בֹ: 'o',
    וֹ: 'o',
    בֻ: 'u',
    וּ: 'u',
    בּ: 'b',
    כּ: 'k',
    ךּ: 'k',
    פּ: 'p',
    שׁ: 'sh',
    שׂ: 's',
    בְ: 'e',
    חֱ: 'e',
    חֲ: 'a',
    חֳ: 'o',
    בִ: 'i'
  }

  // https://github.com/django/django/blob/master/django/contrib/admin/static/admin/js/urlify.js
  const initialCharmap = {
    // latin
    À: 'A',
    Á: 'A',
    Â: 'A',
    Ã: 'A',
    Ä: 'A',
    Å: 'A',
    Æ: 'AE',
    Ç: 'C',
    È: 'E',
    É: 'E',
    Ê: 'E',
    Ë: 'E',
    Ì: 'I',
    Í: 'I',
    Î: 'I',
    Ï: 'I',
    Ð: 'D',
    Ñ: 'N',
    Ò: 'O',
    Ó: 'O',
    Ô: 'O',
    Õ: 'O',
    Ö: 'O',
    Ő: 'O',
    Ø: 'O',
    Ō: 'O',
    Ù: 'U',
    Ú: 'U',
    Û: 'U',
    Ü: 'U',
    Ű: 'U',
    Ý: 'Y',
    Þ: 'TH',
    ß: 'ss',
    à: 'a',
    á: 'a',
    â: 'a',
    ã: 'a',
    ä: 'a',
    å: 'a',
    æ: 'ae',
    ç: 'c',
    è: 'e',
    é: 'e',
    ê: 'e',
    ë: 'e',
    ì: 'i',
    í: 'i',
    î: 'i',
    ï: 'i',
    ð: 'd',
    ñ: 'n',
    ò: 'o',
    ó: 'o',
    ô: 'o',
    õ: 'o',
    ö: 'o',
    ő: 'o',
    ø: 'o',
    ō: 'o',
    Œ: 'OE',
    œ: 'oe',
    ù: 'u',
    ú: 'u',
    û: 'u',
    ü: 'u',
    ű: 'u',
    ý: 'y',
    þ: 'th',
    ÿ: 'y',
    ẞ: 'SS',
    // greek
    α: 'a',
    β: 'b',
    γ: 'g',
    δ: 'd',
    ε: 'e',
    ζ: 'z',
    η: 'h',
    θ: 'th',
    ι: 'i',
    κ: 'k',
    λ: 'l',
    μ: 'm',
    ν: 'n',
    ξ: '3',
    ο: 'o',
    π: 'p',
    ρ: 'r',
    σ: 's',
    τ: 't',
    υ: 'y',
    φ: 'f',
    χ: 'x',
    ψ: 'ps',
    ω: 'w',
    ά: 'a',
    έ: 'e',
    ί: 'i',
    ό: 'o',
    ύ: 'y',
    ή: 'h',
    ώ: 'w',
    ς: 's',
    ϊ: 'i',
    ΰ: 'y',
    ϋ: 'y',
    ΐ: 'i',
    Α: 'A',
    Β: 'B',
    Γ: 'G',
    Δ: 'D',
    Ε: 'E',
    Ζ: 'Z',
    Η: 'H',
    Θ: 'Th',
    Ι: 'I',
    Κ: 'K',
    Λ: 'L',
    Μ: 'M',
    Ν: 'N',
    Ξ: '3',
    Ο: 'O',
    Π: 'P',
    Ρ: 'R',
    Σ: 'S',
    Τ: 'T',
    Υ: 'Y',
    Φ: 'F',
    Χ: 'X',
    Ψ: 'PS',
    Ω: 'W',
    Ά: 'A',
    Έ: 'E',
    Ί: 'I',
    Ό: 'O',
    Ύ: 'Y',
    Ή: 'H',
    Ώ: 'W',
    Ϊ: 'I',
    Ϋ: 'Y',
    // turkish
    ş: 's',
    Ş: 'S',
    ı: 'i',
    İ: 'I',
    ğ: 'g',
    Ğ: 'G',
    // russian
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'yo',
    ж: 'zh',
    з: 'z',
    и: 'i',
    й: 'j',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'h',
    ц: 'c',
    ч: 'ch',
    ш: 'sh',
    щ: 'sh',
    ъ: 'u',
    ы: 'y',
    ь: '',
    э: 'e',
    ю: 'yu',
    я: 'ya',
    А: 'A',
    Б: 'B',
    В: 'V',
    Г: 'G',
    Д: 'D',
    Е: 'E',
    Ё: 'Yo',
    Ж: 'Zh',
    З: 'Z',
    И: 'I',
    Й: 'J',
    К: 'K',
    Л: 'L',
    М: 'M',
    Н: 'N',
    О: 'O',
    П: 'P',
    Р: 'R',
    С: 'S',
    Т: 'T',
    У: 'U',
    Ф: 'F',
    Х: 'H',
    Ц: 'C',
    Ч: 'Ch',
    Ш: 'Sh',
    Щ: 'Sh',
    Ъ: 'U',
    Ы: 'Y',
    Ь: '',
    Э: 'E',
    Ю: 'Yu',
    Я: 'Ya',
    // ukranian
    Є: 'Ye',
    І: 'I',
    Ї: 'Yi',
    Ґ: 'G',
    є: 'ye',
    і: 'i',
    ї: 'yi',
    ґ: 'g',
    // czech
    č: 'c',
    ď: 'd',
    ě: 'e',
    ň: 'n',
    ř: 'r',
    š: 's',
    ť: 't',
    ů: 'u',
    ž: 'z',
    Č: 'C',
    Ď: 'D',
    Ě: 'E',
    Ň: 'N',
    Ř: 'R',
    Š: 'S',
    Ť: 'T',
    Ů: 'U',
    Ž: 'Z',
    // slovak
    ľ: 'l',
    ĺ: 'l',
    ŕ: 'r',
    Ľ: 'L',
    Ĺ: 'L',
    Ŕ: 'R',
    // polish
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ś: 's',
    ź: 'z',
    ż: 'z',
    Ą: 'A',
    Ć: 'C',
    Ę: 'E',
    Ł: 'L',
    Ń: 'N',
    Ś: 'S',
    Ź: 'Z',
    Ż: 'Z',
    // latvian
    ā: 'a',
    ē: 'e',
    ģ: 'g',
    ī: 'i',
    ķ: 'k',
    ļ: 'l',
    ņ: 'n',
    ū: 'u',
    Ā: 'A',
    Ē: 'E',
    Ģ: 'G',
    Ī: 'I',
    Ķ: 'K',
    Ļ: 'L',
    Ņ: 'N',
    Ū: 'U',
    // arabic
    أ: 'a',
    إ: 'i',
    ب: 'b',
    ت: 't',
    ث: 'th',
    ج: 'g',
    ح: 'h',
    خ: 'kh',
    د: 'd',
    ذ: 'th',
    ر: 'r',
    ز: 'z',
    س: 's',
    ش: 'sh',
    ص: 's',
    ض: 'd',
    ط: 't',
    ظ: 'th',
    ع: 'aa',
    غ: 'gh',
    ف: 'f',
    ق: 'k',
    ك: 'k',
    ل: 'l',
    م: 'm',
    ن: 'n',
    ه: 'h',
    و: 'o',
    ي: 'y',
    ء: 'aa',
    ة: 'a',
    // farsi
    آ: 'a',
    ا: 'a',
    پ: 'p',
    ژ: 'zh',
    گ: 'g',
    چ: 'ch',
    ک: 'k',
    ی: 'i',
    // lithuanian
    ė: 'e',
    į: 'i',
    ų: 'u',
    Ė: 'E',
    Į: 'I',
    Ų: 'U',
    // romanian
    ț: 't',
    Ț: 'T',
    ţ: 't',
    Ţ: 'T',
    ș: 's',
    Ș: 'S',
    ă: 'a',
    Ă: 'A',
    // vietnamese
    Ạ: 'A',
    Ả: 'A',
    Ầ: 'A',
    Ấ: 'A',
    Ậ: 'A',
    Ẩ: 'A',
    Ẫ: 'A',
    Ằ: 'A',
    Ắ: 'A',
    Ặ: 'A',
    Ẳ: 'A',
    Ẵ: 'A',
    Ẹ: 'E',
    Ẻ: 'E',
    Ẽ: 'E',
    Ề: 'E',
    Ế: 'E',
    Ệ: 'E',
    Ể: 'E',
    Ễ: 'E',
    Ị: 'I',
    Ỉ: 'I',
    Ĩ: 'I',
    Ọ: 'O',
    Ỏ: 'O',
    Ồ: 'O',
    Ố: 'O',
    Ộ: 'O',
    Ổ: 'O',
    Ỗ: 'O',
    Ơ: 'O',
    Ờ: 'O',
    Ớ: 'O',
    Ợ: 'O',
    Ở: 'O',
    Ỡ: 'O',
    Ụ: 'U',
    Ủ: 'U',
    Ũ: 'U',
    Ư: 'U',
    Ừ: 'U',
    Ứ: 'U',
    Ự: 'U',
    Ử: 'U',
    Ữ: 'U',
    Ỳ: 'Y',
    Ỵ: 'Y',
    Ỷ: 'Y',
    Ỹ: 'Y',
    Đ: 'D',
    ạ: 'a',
    ả: 'a',
    ầ: 'a',
    ấ: 'a',
    ậ: 'a',
    ẩ: 'a',
    ẫ: 'a',
    ằ: 'a',
    ắ: 'a',
    ặ: 'a',
    ẳ: 'a',
    ẵ: 'a',
    ẹ: 'e',
    ẻ: 'e',
    ẽ: 'e',
    ề: 'e',
    ế: 'e',
    ệ: 'e',
    ể: 'e',
    ễ: 'e',
    ị: 'i',
    ỉ: 'i',
    ĩ: 'i',
    ọ: 'o',
    ỏ: 'o',
    ồ: 'o',
    ố: 'o',
    ộ: 'o',
    ổ: 'o',
    ỗ: 'o',
    ơ: 'o',
    ờ: 'o',
    ớ: 'o',
    ợ: 'o',
    ở: 'o',
    ỡ: 'o',
    ụ: 'u',
    ủ: 'u',
    ũ: 'u',
    ư: 'u',
    ừ: 'u',
    ứ: 'u',
    ự: 'u',
    ử: 'u',
    ữ: 'u',
    ỳ: 'y',
    ỵ: 'y',
    ỷ: 'y',
    ỹ: 'y',
    đ: 'd',
    // kazakh
    Ә: 'AE',
    ә: 'ae',
    Ғ: 'GH',
    ғ: 'gh',
    Қ: 'KH',
    қ: 'kh',
    Ң: 'NG',
    ң: 'ng',
    Ү: 'UE',
    ү: 'ue',
    Ұ: 'U',
    ұ: 'u',
    Һ: 'H',
    һ: 'h',
    Ө: 'OE',
    ө: 'oe',
    // serbian
    ђ: 'dj',
    ј: 'j',
    љ: 'lj',
    њ: 'nj',
    ћ: 'c',
    џ: 'dz',
    Ђ: 'Dj',
    Ј: 'j',
    Љ: 'Lj',
    Њ: 'Nj',
    Ћ: 'C',
    Џ: 'Dz',
    ǌ: 'nj',
    ǉ: 'lj',
    ǋ: 'NJ',
    ǈ: 'LJ',
    // hindi
    अ: 'a',
    आ: 'aa',
    ए: 'e',
    ई: 'ii',
    ऍ: 'ei',
    ऎ: 'ae',
    ऐ: 'ai',
    इ: 'i',
    ओ: 'o',
    ऑ: 'oi',
    ऒ: 'oii',
    ऊ: 'uu',
    औ: 'ou',
    उ: 'u',
    ब: 'B',
    भ: 'Bha',
    च: 'Ca',
    छ: 'Chha',
    ड: 'Da',
    ढ: 'Dha',
    फ: 'Fa',
    ग: 'Ga',
    घ: 'Gha',
    ग़: 'Ghi',
    ह: 'Ha',
    ज: 'Ja',
    झ: 'Jha',
    क: 'Ka',
    ख: 'Kha',
    ख़: 'Khi',
    ल: 'L',
    ळ: 'Li',
    ऌ: 'Li',
    ऴ: 'Lii',
    ॡ: 'Lii',
    म: 'Ma',
    न: 'Na',
    ङ: 'Na',
    ञ: 'Nia',
    ण: 'Nae',
    ऩ: 'Ni',
    ॐ: 'oms',
    प: 'Pa',
    क़: 'Qi',
    र: 'Ra',
    ऋ: 'Ri',
    ॠ: 'Ri',
    ऱ: 'Ri',
    स: 'Sa',
    श: 'Sha',
    ष: 'Shha',
    ट: 'Ta',
    त: 'Ta',
    ठ: 'Tha',
    द: 'Tha',
    थ: 'Tha',
    ध: 'Thha',
    ड़: 'ugDha',
    ढ़: 'ugDhha',
    व: 'Va',
    य: 'Ya',
    य़: 'Yi',
    ज़: 'Za',
    // azerbaijani
    ə: 'e',
    Ə: 'E',
    // georgian
    ა: 'a',
    ბ: 'b',
    გ: 'g',
    დ: 'd',
    ე: 'e',
    ვ: 'v',
    ზ: 'z',
    თ: 't',
    ი: 'i',
    კ: 'k',
    ლ: 'l',
    მ: 'm',
    ნ: 'n',
    ო: 'o',
    პ: 'p',
    ჟ: 'zh',
    რ: 'r',
    ს: 's',
    ტ: 't',
    უ: 'u',
    ფ: 'p',
    ქ: 'k',
    ღ: 'gh',
    ყ: 'q',
    შ: 'sh',
    ჩ: 'ch',
    ც: 'ts',
    ძ: 'dz',
    წ: 'ts',
    ჭ: 'ch',
    ხ: 'kh',
    ჯ: 'j',
    ჰ: 'h',
    // hebrew
    ב: 'v',
    גּ: 'g',
    ג: 'g',
    ד: 'd',
    דּ: 'd',
    ה: 'h',
    ו: 'v',
    ז: 'z',
    ח: 'h',
    ט: 't',
    י: 'y',
    כ: 'kh',
    ך: 'kh',
    ל: 'l',
    מ: 'm',
    ם: 'm',
    נ: 'n',
    ן: 'n',
    ס: 's',
    פ: 'f',
    ף: 'f',
    ץ: 'ts',
    צ: 'ts',
    ק: 'k',
    ר: 'r',
    תּ: 't',
    ת: 't'
  }

  slug.charmap = Object.assign({}, initialCharmap)
  slug.multicharmap = Object.assign({}, initialMulticharmap)
  slug.defaults = {
    charmap: slug.charmap,
    mode: 'pretty',
    modes: {
      rfc3986: {
        replacement: '-',
        remove: null,
        lower: true,
        charmap: slug.charmap,
        multicharmap: slug.multicharmap,
        trim: true
      },
      pretty: {
        replacement: '-',
        remove: null,
        lower: true,
        charmap: slug.charmap,
        multicharmap: slug.multicharmap,
        trim: true
      }
    },
    multicharmap: slug.multicharmap,
    fallback: true
  }

  slug.reset = function () {
    slug.defaults.modes.rfc3986.charmap = slug.defaults.modes.pretty.charmap = slug.charmap = slug.defaults.charmap = Object.assign({}, initialCharmap)
    slug.defaults.modes.rfc3986.multicharmap = slug.defaults.modes.pretty.multicharmap = slug.multicharmap = slug.defaults.multicharmap = Object.assign({}, initialMulticharmap)
    defaultLocale = ''
  }

  slug.extend = function (customMap) {
    const keys = Object.keys(customMap)
    const multi = {}
    const single = {}
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].length > 1) {
        multi[keys[i]] = customMap[keys[i]]
      } else {
        single[keys[i]] = customMap[keys[i]]
      }
    }
    Object.assign(slug.charmap, single)
    Object.assign(slug.multicharmap, multi)
  }

  slug.setLocale = function (locale) {
    defaultLocale = locales[locale] || {}
  }

  if ( true && module.exports) { // CommonJS
    module.exports = slug
  } else { // Script tag
    root.slug = slug
  }
}(this))


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/how-to/config.mjs":
/*!**************************************!*\
  !*** ./src/blocks/how-to/config.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _config_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.mjs */ "./src/config.mjs");
/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slug */ "./node_modules/slug/slug.js");




let NAME = "How To";

let config = {
  $schema: "https://schemas.wp.org/trunk/block.json",
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`${NAME} (${_config_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].title})`),
  name: `${_config_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].prefix}/${slug__WEBPACK_IMPORTED_MODULE_2__(NAME)}`,
  version: "0.0.1",
  keywords: [..._config_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].keywords.map((v) => (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(v)), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(NAME)],
  category: _config_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].category,
  attributes: {
    blockID: {
      type: "string",
      default: "",
    },
    title: {
      type: "string",
      default: "",
    },
    introduction: {
      type: "string",
      default: "",
    },
    advancedMode: {
      type: "boolean",
      default: false,
    },
    toolsIntro: {
      type: "string",
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Required tools"),
    },
    tools: {
      type: "array",
      default: [], //format: {name, imageid, imagealt, imageurl}
    },
    toolsListStyle: {
      type: "string",
      default: "none",
    },
    addToolImages: {
      type: "boolean",
      default: false,
    },
    suppliesIntro: {
      type: "string",
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Required supplies"),
    },
    supplies: {
      type: "array",
      default: [], //format: {name, imageid, imagealt, imageurl}
    },
    suppliesListStyle: {
      type: "string",
      default: "none",
    },
    addSupplyImages: {
      type: "boolean",
      default: false,
    },
    section: {
      type: "array",
      default: [{ sectionName: "", steps: [] }], //contains steps, if useSections is set to false, then only use contents of the first section. minimum of two steps.
    },
    sectionListStyle: {
      type: "string",
      default: "none",
    },
    timeIntro: {
      type: "string",
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Duration"),
    },
    totalTime: {
      type: "array",
      default: Array(7).fill(0),
    },
    totalTimeText: {
      type: "string",
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sekitar "),
    },
    cost: {
      type: "number",
      default: 0,
    },
    costCurrency: {
      type: "string",
      default: "USD",
    },
    costDisplayText: {
      type: "string",
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Total cost: "),
    },
    showUnitFirst: {
      type: "boolean",
      default: true,
    },
    howToYield: {
      //avoid using yield as variable name
      type: "string",
      default: "",
    },
    howToRatingValue: {
      //avoid using yield as variable name
      type: "string",
      default: "5",
    },
    howToRatingCount: {
      //avoid using yield as variable name
      type: "string",
      default: "1",
    },
    howToLikeCount: {
      type: "number",
      default: 0,
    },
    howToDisikeCount: {
      type: "number",
      default: 0,
    },
    howToVoteCount: {
      type: "number",
      default: 0,
    },
    videoURL: {
      type: "string", //videoobject
      default: "", //needed: video url, thumbnail url, video description, upload date
    },
    videoThumbnailURL: {
      type: "string",
      default: "",
    },
    videoName: {
      type: "string",
      default: "",
    },
    videoDescription: {
      type: "string",
      default: "",
    },
    videoUploadDate: {
      type: "number", //UNIX Date
      default: 0,
    },
    videoEmbedCode: {
      type: "string",
      default: "<p>When insertion is successful, video should appear here</p>",
    },
    videoDuration: {
      type: "number",
      default: 0,
    },
    useSections: {
      type: "boolean",
      default: false,
    },
    includeSuppliesList: {
      type: "boolean",
      default: false,
    },
    includeToolsList: {
      type: "boolean",
      default: false,
    },
    resultIntro: {
      type: "string",
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Result"),
    },
    finalImageID: {
      type: "number",
      default: -1,
    },
    finalImageAlt: {
      type: "string",
      default: "",
    },
    finalImageURL: {
      type: "string",
      default: "",
    },
    finalImageCaption: {
      type: "string",
      default: "",
    },
    finalImageWidth: {
      type: "number",
      default: 0,
    },
    finalImageFloat: {
      type: "string",
      default: "none",
    },
    firstLevelTag: {
      type: "string",
      default: "h2",
    },
    secondLevelTag: {
      type: "string",
      default: "h3",
    },
    thirdLevelTag: {
      type: "string",
      default: "h5",
    },
  },
  supports: {
    html: false,
    multiple: false,
  },
  editorScript: "file:./block.jsx",
  viewScript: "file:./scripts/index.js",
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),

/***/ "./src/config.mjs":
/*!************************!*\
  !*** ./src/config.mjs ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package.json */ "./package.json");


let config = {
  title: _package_json__WEBPACK_IMPORTED_MODULE_0__.title ?? "",
  name: _package_json__WEBPACK_IMPORTED_MODULE_0__.name ?? "",
  prefix: _package_json__WEBPACK_IMPORTED_MODULE_0__.prefix ?? "",
  category: "widgets",
};

config.keywords = [config.prefix, config.title, config.name];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"dafunda-blocks","title":"Dafunda Blocks","prefix":"dbe","version":"0.1.0-alpha","description":"Dafunda WordPress Block Editor","homepage":"https://github.com/dafundacom/dafunda-blocks","author":{"name":"Dafunda Dev Team","email":"dev@dafunda.io","url":"https://dafunda.io"},"repository":{"type":"git","url":"https://github.com:dafundacom/dafunda-blocks"},"license":"MIT","scripts":{"start":"node ./config/scripts/start","start:sample":"wp-scripts start --webpack-copy-php --webpack-src-dir=src/sample-blocks --output-path=build/sample-blocks --config webpack.config.js  & pnpm gulp","build":"node ./config/scripts/build","build:sample":"wp-scripts build --webpack-copy-php --webpack-src-dir=src/sample-blocks --output-path=build/sample-blocks","clean":"rimraf {node_modules, build}","clean:build":"rimraf build","lint:js":"wp-scripts lint-js","lint:style":"wp-scripts lint-style","format:wp":"wp-scripts format","lint:js:fix":"npm run lint:js -- --fix","lint:pkg-json":"wp-scripts lint-pkg-json","test":"wp-scripts test-unit-js","env:start":"wp-env start","env:start:debug":"wp-env start --xdebug","env:stop":"wp-env stop","packages-update":"wp-scripts packages-update","prepare":"husky install","commit":"git-cz","format":"prettier -w .","check":"prettier -c .","prettier":"prettier"},"dependencies":{"react":"^18.2.0","react-dom":"^18.2.0"},"devDependencies":{"@babel/core":"^7.22.9","@babel/eslint-parser":"^7.22.9","@babel/preset-env":"^7.22.9","@babel/preset-react":"^7.22.5","@babel/runtime":"^7.22.6","@commitlint/cli":"^17.6.6","@commitlint/config-conventional":"^17.6.6","@commitlint/cz-commitlint":"^17.5.0","@heroicons/react":"^2.0.18","@prettier/plugin-php":"^0.19.6","@svgr/core":"^6.5.1","@svgr/webpack":"^6.5.1","@tailwindcss/typography":"^0.5.9","@wordpress/block-editor":"^11.8.0","@wordpress/blocks":"^12.14.0","@wordpress/browserslist-config":"^5.20.0","@wordpress/components":"^23.9.0","@wordpress/compose":"^6.14.0","@wordpress/data":"^8.6.0","@wordpress/e2e-test-utils":"^9.5.0","@wordpress/element":"^5.14.0","@wordpress/i18n":"^4.37.0","@wordpress/icons":"^9.28.0","@wordpress/prettier-config":"^2.20.0","@wordpress/rich-text":"^6.14.0","@wordpress/scripts":"^25.5.1","autoprefixer":"^10.4.14","babel-loader":"^9.1.3","babel-plugin-module-resolver":"^4.1.0","browser-sync":"^2.29.3","browser-sync-webpack-plugin":"^2.3.0","commitizen":"^4.3.0","concurrently":"^7.6.0","copy-webpack-plugin":"^11.0.0","css-loader":"^6.8.1","cssnano":"^5.1.15","esbuild":"^0.16.17","eslint":"^8.45.0","eslint-config-prettier":"^8.8.0","eslint-plugin-import":"^2.27.5","eslint-plugin-jsx-a11y":"^6.7.1","eslint-plugin-prettier":"^4.2.1","eslint-plugin-react":"^7.32.2","file-loader":"^6.2.0","husky":"^8.0.3","inquirer":"^9.2.8","jest":"^29.6.1","lint-staged":"^13.2.3","mini-css-extract-plugin":"^2.7.6","nanoid":"^4.0.2","picocolors":"^1.0.0","postcss":"^8.4.26","postcss-import":"^15.1.0","postcss-loader":"^7.3.3","postcss-scss":"^4.0.6","prettier":"^2.8.8","prettier-plugin-tailwindcss":"^0.2.8","process":"^0.11.10","puppeteer-core":"^19.11.1","react-icons":"^4.10.1","rimraf":"^3.0.2","sass":"^1.63.6","sass-loader":"^13.3.2","slug":"^8.2.2","style-loader":"^3.3.3","svgo-loader":"^3.0.3","tailwindcss":"^3.3.3","tailwindcss-animate":"^1.0.6","terser":"^5.19.1","terser-webpack-plugin":"^5.3.9","typescript":"^4.9.5","url-loader":"^4.1.1","webpack":"^5.88.2","webpack-cli":"^5.1.4"},"pnpm":{"overrides":{"glob-parent@<5.1.2":">=5.1.2","scss-tokenizer@<=0.4.2":">=0.4.3","inquirer@<=8.0.1":">=8.0.2"}},"lint-staged":{"src/**/*.{js,jsx,css}":["pnpm prettier --write"]},"config":{"commitizen":{"path":"@commitlint/cz-commitlint"}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************!*\
  !*** ./src/blocks/how-to/block.jsx ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.mjs */ "./src/blocks/how-to/config.mjs");
/* harmony import */ var _edit_edit_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.jsx */ "./src/blocks/how-to/edit/edit.jsx");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/blocks/how-to/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_config_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].name, _objectSpread(_objectSpread({}, _config_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]), {}, {
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)(function (select, ownProps) {
    var _ref = select("core/block-editor") || select("core/editor"),
      getBlock = _ref.getBlock,
      getClientIdsWithDescendants = _ref.getClientIdsWithDescendants;
    return {
      block: getBlock(ownProps.clientId),
      getBlock: getBlock,
      getClientIdsWithDescendants: getClientIdsWithDescendants
    };
  })(_edit_edit_jsx__WEBPACK_IMPORTED_MODULE_3__["default"])
}));
})();

/******/ })()
;
//# sourceMappingURL=block.js.map
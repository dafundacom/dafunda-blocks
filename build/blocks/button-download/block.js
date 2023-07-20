/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/button-download/edit/components/button_download_image.jsx":
/*!******************************************************************************!*\
  !*** ./src/blocks/button-download/edit/components/button_download_image.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonDeleteImage: () => (/* binding */ ButtonDeleteImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__; // Import __() from wp.i18n

function ButtonDeleteImage(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    title: __("Delete image"),
    className: "dashicons dashicons-trash absolute right-[10px] top-[10px] h-auto w-auto cursor-pointer rounded-lg bg-gray-900 p-1 text-base leading-none text-white transition duration-200 ease-in-out hover:bg-gray-800",
    onClick: onClick
  });
}

/***/ }),

/***/ "./src/blocks/button-download/edit/components/card.jsx":
/*!*************************************************************!*\
  !*** ./src/blocks/button-download/edit/components/card.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/blocks/button-download/edit/components/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var __ = wp.i18n.__; // Import __() from wp.i18n

var _ref = wp.blockEditor || wp.editor,
  RichText = _ref.RichText,
  MediaUpload = _ref.MediaUpload,
  BlockControls = _ref.BlockControls,
  URLInput = _ref.URLInput;
var _wp$components = wp.components,
  Button = _wp$components.Button,
  CheckboxControl = _wp$components.CheckboxControl,
  Popover = _wp$components.Popover,
  ToolbarGroup = _wp$components.ToolbarGroup,
  ToolbarButton = _wp$components.ToolbarButton;
var defaultFormats = ["core/annotation", "core/bold", "core/code", "core/italic", "core/strikethrough", "core/underline", "core/text-color", "core/subscript", "core/superscript", "core/keyboard", "dafunda-blocks/highlight"];
function Card(props) {
  var _props$attributes = props.attributes,
    title = _props$attributes.title,
    description = _props$attributes.description,
    imageurl = _props$attributes.imageurl,
    buttonText = _props$attributes.buttonText,
    buttonColor = _props$attributes.buttonColor,
    buttonHoverColor = _props$attributes.buttonHoverColor,
    buttonTextColor = _props$attributes.buttonTextColor,
    buttonTextHoverColor = _props$attributes.buttonTextHoverColor,
    buttonRounded = _props$attributes.buttonRounded,
    buttonAlign = _props$attributes.buttonAlign,
    setAttributes = props.setAttributes;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    buttonOnHover = _useState2[0],
    setButtonOnHover = _useState2[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "button-download !important flex flex-wrap overflow-hidden rounded-lg border border-slate-200 p-3"
  }, /*#__PURE__*/React.createElement(ToolbarCard, props), /*#__PURE__*/React.createElement("div", {
    className: "basis-2/12"
  }, imageurl && imageurl != "" ? /*#__PURE__*/React.createElement("figure", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("img", {
    className: "aspect-square w-full rounded-lg object-cover object-center",
    src: imageurl
  }), /*#__PURE__*/React.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.ButtonDeleteImage, {
    onClick: function onClick() {
      setAttributes({
        imagealt: "",
        imageid: "",
        imageurl: ""
      });
    }
  })) : /*#__PURE__*/React.createElement("div", {
    className: "aspect-square w-full cursor-pointer"
  }, /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(newImage) {
      var _newImage$alt, _newImage$id, _newImage$url;
      setAttributes({
        imagealt: (_newImage$alt = newImage === null || newImage === void 0 ? void 0 : newImage.alt) !== null && _newImage$alt !== void 0 ? _newImage$alt : "",
        imageid: (_newImage$id = newImage === null || newImage === void 0 ? void 0 : newImage.id) !== null && _newImage$id !== void 0 ? _newImage$id : "",
        imageurl: (_newImage$url = newImage === null || newImage === void 0 ? void 0 : newImage.url) !== null && _newImage$url !== void 0 ? _newImage$url : ""
      });
    },
    allowedTypes: ["image"],
    render: function render(_ref2) {
      var open = _ref2.open;
      return /*#__PURE__*/React.createElement("div", {
        className: "flex h-full w-full flex-wrap items-center justify-center bg-[#EEEEEE]",
        onClick: open
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col flex-wrap items-center justify-center text-[#999999]"
      }, /*#__PURE__*/React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-5 w-5",
        viewBox: "0 0 20 20",
        fill: "currentColor"
      }, /*#__PURE__*/React.createElement("path", {
        fillRule: "evenodd",
        d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",
        clipRule: "evenodd"
      })), /*#__PURE__*/React.createElement("p", {
        className: "m-0 text-xs text-[#999999]"
      }, "Tambahkan Media")));
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ml-3 basis-auto md:basis-7/12"
  }, /*#__PURE__*/React.createElement(RichText, {
    tagName: "p",
    multiline: false,
    keepPlaceholderOnFocus: true,
    placeholder: __("Title"),
    className: "m-0 text-lg font-semibold",
    value: title,
    allowedFormats: defaultFormats,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    }
  }), /*#__PURE__*/React.createElement(RichText, {
    tagName: "p",
    allowedFormats: defaultFormats,
    multiline: false,
    keepPlaceholderOnFocus: true,
    placeholder: __("Descriptions"),
    className: "m-0 text-sm",
    value: description,
    onChange: function onChange(description) {
      return setAttributes({
        description: description
      });
    }
  })), /*#__PURE__*/React.createElement(Button, {
    "aria-expanded": true,
    "aria-haspopup": "true",
    onMouseEnter: function onMouseEnter() {
      return setButtonOnHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setButtonOnHover(false);
    },
    className: "mx-auto mt-3 h-fit w-fit py-2 px-5 text-base font-bold text-white md:mt-0 md:ml-auto\n\t\t\t\t".concat(buttonAlign == "top" ? "self-start" : buttonAlign == "bottom" ? "self-end" : "self-center", "\n\t\t\t\t").concat(buttonRounded ? "rounded-lg" : "", "\n\t\t\t\t"),
    style: {
      backgroundColor: buttonOnHover ? buttonHoverColor : buttonColor
    }
  }, /*#__PURE__*/React.createElement(RichText, {
    tagName: "span",
    multiline: false,
    keepPlaceholderOnFocus: true,
    placeholder: __("Download"),
    className: "m-0",
    allowedFormats: defaultFormats
    // withoutInteractiveFormatting={true}
    ,
    style: {
      color: buttonOnHover ? buttonTextHoverColor : buttonTextColor
    },
    value: buttonText
  })));
}
function ToolbarCard(props) {
  var _props$attributes2 = props.attributes,
    url = _props$attributes2.url,
    addNofollow = _props$attributes2.addNofollow,
    openInNewTab = _props$attributes2.openInNewTab,
    addSponsored = _props$attributes2.addSponsored,
    setAttributes = props.setAttributes,
    isSelected = props.isSelected;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    URLPopoverisVisible = _useState4[0],
    setURLPopoverisVisible = _useState4[1];
  if (!isSelected && URLPopoverisVisible) {
    setURLPopoverisVisible(false);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BlockControls, null, /*#__PURE__*/React.createElement(ToolbarGroup, null, /*#__PURE__*/React.createElement(ToolbarButton, {
    icon: "admin-links",
    label: __("Add button link"),
    onClick: function onClick() {
      return setURLPopoverisVisible(true);
    }
  }))), URLPopoverisVisible && /*#__PURE__*/React.createElement(Popover, {
    className: "popover",
    position: "bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "button_popover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "button_url_input"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: function onSubmit(event) {
      return event.preventDefault();
    },
    className: "editor-format-toolbar__link-modal-line button_input_box flex-container"
  }, /*#__PURE__*/React.createElement(URLInput, {
    autoFocus: false,
    multiline: false,
    className: "button-url",
    value: url,
    onChange: function onChange(url) {
      return setAttributes({
        url: url
      });
    }
  }))), /*#__PURE__*/React.createElement(CheckboxControl, {
    label: __("Open Link in New Tab", "dafunda-blocks"),
    checked: openInNewTab,
    onChange: function onChange(openInNewTab) {
      return setAttributes({
        openInNewTab: openInNewTab
      });
    }
  }), /*#__PURE__*/React.createElement(CheckboxControl, {
    label: __("Add Nofollow to Link", "dafunda-blocks"),
    checked: addNofollow,
    onChange: function onChange(addNofollow) {
      return setAttributes({
        addNofollow: addNofollow
      });
    }
  }), /*#__PURE__*/React.createElement(CheckboxControl, {
    label: __("Mark link as sponsored", "dafunda-blocks"),
    checked: addSponsored,
    onChange: function onChange(addSponsored) {
      return setAttributes({
        addSponsored: addSponsored
      });
    }
  }))));
}

/***/ }),

/***/ "./src/blocks/button-download/edit/components/index.js":
/*!*************************************************************!*\
  !*** ./src/blocks/button-download/edit/components/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonDeleteImage: () => (/* reexport safe */ _button_download_image__WEBPACK_IMPORTED_MODULE_1__.ButtonDeleteImage),
/* harmony export */   Card: () => (/* reexport safe */ _card__WEBPACK_IMPORTED_MODULE_0__.Card),
/* harmony export */   InspectorPanel: () => (/* reexport safe */ _inspector_panel__WEBPACK_IMPORTED_MODULE_2__.InspectorPanel)
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/blocks/button-download/edit/components/card.jsx");
/* harmony import */ var _button_download_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button_download_image */ "./src/blocks/button-download/edit/components/button_download_image.jsx");
/* harmony import */ var _inspector_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector_panel */ "./src/blocks/button-download/edit/components/inspector_panel.jsx");




/***/ }),

/***/ "./src/blocks/button-download/edit/components/inspector_panel.jsx":
/*!************************************************************************!*\
  !*** ./src/blocks/button-download/edit/components/inspector_panel.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InspectorPanel: () => (/* binding */ InspectorPanel)
/* harmony export */ });
/* harmony import */ var _schemaApplicationCategories_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schemaApplicationCategories.json */ "./src/blocks/button-download/edit/components/schemaApplicationCategories.json");

var __ = wp.i18n.__;
var _ref = wp.blockEditor || wp.editor,
  InspectorControls = _ref.InspectorControls,
  PanelColorSettings = _ref.PanelColorSettings,
  useBlockProps = _ref.useBlockProps,
  BlockVerticalAlignmentToolbar = _ref.BlockVerticalAlignmentToolbar;
var _wp$components = wp.components,
  ToggleControl = _wp$components.ToggleControl,
  PanelBody = _wp$components.PanelBody,
  SelectControl = _wp$components.SelectControl,
  TabPanel = _wp$components.TabPanel,
  TextControl = _wp$components.TextControl;
function InspectorPanel(props) {
  var _props$attributes = props.attributes,
    buttonColor = _props$attributes.buttonColor,
    buttonHoverColor = _props$attributes.buttonHoverColor,
    buttonTextColor = _props$attributes.buttonTextColor,
    buttonTextHoverColor = _props$attributes.buttonTextHoverColor,
    buttonRounded = _props$attributes.buttonRounded,
    buttonAlign = _props$attributes.buttonAlign,
    schemaApplicationCategory = _props$attributes.schemaApplicationCategory,
    version = _props$attributes.version,
    system = _props$attributes.system,
    fileSize = _props$attributes.fileSize,
    license = _props$attributes.license,
    developer = _props$attributes.developer,
    currency = _props$attributes.currency,
    price = _props$attributes.price,
    setAttributes = props.setAttributes;
  var makeNormalColorPanels = function makeNormalColorPanels() {
    return [{
      value: buttonColor,
      onChange: function onChange(buttonColor) {
        return setAttributes({
          buttonColor: buttonColor
        });
      },
      label: __("Button Color")
    }].concat([{
      value: buttonTextColor,
      onChange: function onChange(buttonTextColor) {
        return setAttributes({
          buttonTextColor: buttonTextColor
        });
      },
      label: __("Button Text Color")
    }]);
  };
  var makeHoverColorPanels = function makeHoverColorPanels() {
    return [{
      value: buttonHoverColor,
      onChange: function onChange(buttonHoverColor) {
        return setAttributes({
          buttonHoverColor: buttonHoverColor
        });
      },
      label: __("Button Color")
    }].concat([{
      value: buttonTextHoverColor,
      onChange: function onChange(buttonTextHoverColor) {
        return setAttributes({
          buttonTextHoverColor: buttonTextHoverColor
        });
      },
      label: __("Button Text Color")
    }]);
  };
  return /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Download Button Setting")
  }, /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Select a scheme type"),
    value: schemaApplicationCategory,
    onChange: function onChange(schemaApplicationCategory) {
      return setAttributes({
        schemaApplicationCategory: schemaApplicationCategory
      });
    },
    options: _schemaApplicationCategories_json__WEBPACK_IMPORTED_MODULE_0__
  }), /*#__PURE__*/React.createElement(TextControl, {
    label: "version",
    labelPosition: "top"
    // placeholder="0.0.1"
    ,
    value: version,
    type: "text",
    className: "mb-4 capitalize",
    onChange: function onChange(version) {
      setAttributes({
        version: version
      });
    }
  }), /*#__PURE__*/React.createElement(TextControl, {
    label: "system",
    labelPosition: "top",
    placeholder: "Android",
    value: system,
    type: "text",
    className: "mb-4 capitalize",
    onChange: function onChange(system) {
      return setAttributes({
        system: system
      });
    }
  }), /*#__PURE__*/React.createElement(TextControl, {
    label: "file size",
    labelPosition: "top",
    placeholder: "7 MB",
    value: fileSize,
    type: "text",
    className: "mb-4 capitalize",
    onChange: function onChange(fileSize) {
      return setAttributes({
        fileSize: fileSize
      });
    }
  }), /*#__PURE__*/React.createElement(TextControl, {
    label: "license",
    labelPosition: "top",
    placeholder: "Freeware",
    value: license,
    type: "text",
    className: "mb-4 capitalize",
    onChange: function onChange(license) {
      return setAttributes({
        license: license
      });
    }
  }), /*#__PURE__*/React.createElement(TextControl, {
    label: "developer",
    labelPosition: "top",
    placeholder: "Moon & Sun",
    value: developer,
    type: "text",
    className: "mb-4 capitalize",
    onChange: function onChange(developer) {
      return setAttributes({
        developer: developer
      });
    }
  }), /*#__PURE__*/React.createElement(TextControl, {
    label: "currency",
    labelPosition: "top",
    placeholder: "USD",
    value: currency,
    type: "text",
    className: "mb-4 capitalize",
    onChange: function onChange(currency) {
      return setAttributes({
        currency: currency
      });
    }
  }), /*#__PURE__*/React.createElement(TextControl, {
    label: "price",
    labelPosition: "top",
    placeholder: "5.12 or 6",
    value: price,
    type: "text",
    className: "mb-4 capitalize",
    onChange: function onChange(price) {
      return setAttributes({
        price: price
      });
    }
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Button Style", "dafunda-blocks")
  }, /*#__PURE__*/React.createElement("div", useBlockProps({
    style: {
      backgroundPosition: "center ".concat(buttonAlign)
    },
    className: "m-0 mb-4"
  }), /*#__PURE__*/React.createElement("label", {
    className: "mb-2 block"
  }, "Button Align"), /*#__PURE__*/React.createElement(BlockVerticalAlignmentToolbar, {
    value: buttonAlign,
    onChange: function onChange(buttonAlign) {
      setAttributes({
        buttonAlign: buttonAlign
      });
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "mb-2 block"
  }, "Button Rounded"), /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Button Rounded", "dafunda-blocks"),
    checked: buttonRounded,
    onChange: function onChange(buttonRounded) {
      return setAttributes({
        buttonRounded: buttonRounded
      });
    }
  }))), /*#__PURE__*/React.createElement(TabPanel, {
    tabs: [{
      name: "buttoncolor",
      title: __("Normal")
    }, {
      name: "buttonhovercolor",
      title: __("Hover")
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement(PanelColorSettings, {
      title: __("Button Colors", "dafunda-blocks"),
      initialOpen: true,
      colorSettings: tab.name === "buttoncolor" ? makeNormalColorPanels() : makeHoverColorPanels()
    });
  }));
}

/***/ }),

/***/ "./src/blocks/button-download/edit/edit.jsx":
/*!**************************************************!*\
  !*** ./src/blocks/button-download/edit/edit.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/blocks/button-download/edit/components/index.js");




function Edit(props) {
  var blockID = props.attributes.blockID,
    setAttributes = props.setAttributes,
    block = props.block,
    getBlock = props.getBlock,
    getClientIdsWithDescendants = props.getClientIdsWithDescendants;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (blockID === "" || getClientIdsWithDescendants().some(function (ID) {
      return "blockID" in getBlock(ID).attributes && getBlock(ID).attributes.blockID === blockID;
    })) {
      setAttributes({
        blockID: block.clientId
      });
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(), /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_3__.InspectorPanel, props), /*#__PURE__*/React.createElement("div", {
    className: "wp-block"
  }, /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_3__.Card, props)));
}

/***/ }),

/***/ "./src/blocks/button-download/icon.js":
/*!********************************************!*\
  !*** ./src/blocks/button-download/icon.js ***!
  \********************************************/
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

/***/ "./src/blocks/button-download/config.mjs":
/*!***********************************************!*\
  !*** ./src/blocks/button-download/config.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slug */ "./node_modules/slug/slug.js");
/* harmony import */ var _config_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.mjs */ "./src/config.mjs");




const NAME = "Download Button";

const config = {
  $schema: "https://schemas.wp.org/trunk/block.json",
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`${NAME} (${_config_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].title})`),
  name: `${_config_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].prefix}/${slug__WEBPACK_IMPORTED_MODULE_1__(NAME)}`,
  version: "0.0.1",
  keywords: [..._config_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].keywords.map((v) => (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(v)), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(NAME)],
  category: _config_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].category,
  attributes: {
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
    description: {
      type: "string",
      default: "Little description",
    },
    url: {
      type: "string",
      default: "",
    },
    version: {
      type: "string",
      default: "",
    },
    system: {
      type: "string",
      default: "",
    },
    fileSize: {
      type: "string",
      default: "",
    },
    license: {
      type: "string",
      default: "",
    },
    developer: {
      type: "string",
      default: "",
    },
    currency: {
      type: "string",
      default: "",
    },
    price: {
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
    schemaApplicationCategory: {
      type: "string",
      default: "GameApplication",
    },
    buttonAlign: {
      type: "string",
      default: "center",
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

/***/ }),

/***/ "./src/blocks/button-download/edit/components/schemaApplicationCategories.json":
/*!*************************************************************************************!*\
  !*** ./src/blocks/button-download/edit/components/schemaApplicationCategories.json ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"label":"Game App","value":"GameApplication"},{"label":"Business App","value":"BusinessApplication "},{"label":"Multimedia App","value":"MultimediaApplication"},{"label":"Mobile App","value":"MobileApplication"},{"label":"Web App","value":"WebApplication"},{"label":"Social Networking App","value":"SocialNetworkingApplication"},{"label":"Travel App","value":"TravelApplication"},{"label":"Shopping App","value":"ShoppingApplication"},{"label":"Sports App","value":"SportsApplication"},{"label":"Lifestyle App","value":"LifestyleApplication"},{"label":"Design App","value":"DesignApplication "},{"label":"Developer App","value":"DeveloperApplication"},{"label":"Driver App","value":"DriverApplication"},{"label":"Educational App","value":"EducationalApplication"},{"label":"Health App","value":"HealthApplication"},{"label":"Finance App","value":"FinanceApplication "},{"label":"Security App","value":"SecurityApplication"},{"label":"Browser App","value":"BrowserApplication"},{"label":"Communication App","value":"CommunicationApplication"},{"label":"Business App","value":"EntertainmentApplication "},{"label":"Home App","value":"HomeApplication"},{"label":"Utilities App","value":"UtilitiesApplication"},{"label":"Reference App","value":"ReferenceApplication"}]');

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
/*!**********************************************!*\
  !*** ./src/blocks/button-download/block.jsx ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.mjs */ "./src/blocks/button-download/config.mjs");
/* harmony import */ var _edit_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit */ "./src/blocks/button-download/edit/edit.jsx");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/blocks/button-download/icon.js");
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
  })(_edit_edit__WEBPACK_IMPORTED_MODULE_3__["default"])
}));
})();

/******/ })()
;
//# sourceMappingURL=block.js.map
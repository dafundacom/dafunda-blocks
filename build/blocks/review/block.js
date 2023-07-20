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

/***/ "./src/blocks/review/edit/components/inspector_panel.jsx":
/*!***************************************************************!*\
  !*** ./src/blocks/review/edit/components/inspector_panel.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InspectorPanel: () => (/* binding */ InspectorPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_download_edit_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../button-download/edit/components */ "./src/blocks/button-download/edit/components/index.js");
/* harmony import */ var _panel_scheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel/scheme */ "./src/blocks/review/edit/components/panel/scheme.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable no-unused-vars */


var __ = wp.i18n.__; // Import __() from wp.i18n
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
var InspectorPanel = function InspectorPanel(props) {
  var _props$attributes = props.attributes,
    background_used = _props$attributes.background_used,
    background_color = _props$attributes.background_color,
    background_gradient = _props$attributes.background_gradient,
    background_image = _props$attributes.background_image,
    setAttributes = props.setAttributes;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("#f00"),
    _useState2 = _slicedToArray(_useState, 2),
    colorValue = _useState2[0],
    setColorValue = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)"),
    _useState4 = _slicedToArray(_useState3, 2),
    gradientValue = _useState4[0],
    setGradientValue = _useState4[1];
  return /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Background")
  }, /*#__PURE__*/React.createElement("div", {
    className: "review-inspector-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControl, {
    label: "Choice background",
    value: background_used,
    isBlock: true,
    onChange: function onChange(newValue) {
      // console.log({ newValue });
      setAttributes({
        background_used: newValue
      });
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
    value: "color",
    label: "Color"
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
    value: "gradient",
    label: "Gradient"
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
    value: "image",
    label: "Image"
  })), background_used == "color" ? /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalColorGradientControl, {
    colorValue: background_color,
    colors: [{
      name: "red",
      color: "#f00"
    }, {
      name: "white",
      color: "#fff"
    }, {
      name: "blue",
      color: "#00f"
    }],
    onColorChange: function onColorChange(newValue) {
      // setColorValue(newValue);
      setAttributes({
        background_color: newValue
      });
    }
  }) : "", background_used == "gradient" ? /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalColorGradientControl, {
    gradientValue: background_gradient,
    gradients: [{
      name: "Witching hour",
      gradient: "linear-gradient(to right, #c31432, #240b36)",
      slug: "red-to-black"
    }, {
      name: "Vivid cyan blue to vivid purple",
      gradient: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
      slug: "vivid-cyan-blue-to-vivid-purple"
    }, {
      name: "Light green cyan to vivid green cyan",
      gradient: "linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)",
      slug: "light-green-cyan-to-vivid-green-cyan"
    }, {
      name: "Luminous vivid amber to luminous vivid orange",
      gradient: "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",
      slug: "luminous-vivid-amber-to-luminous-vivid-orange"
    }, {
      name: "Luminous vivid orange to vivid red",
      gradient: "linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)",
      slug: "luminous-vivid-orange-to-vivid-red"
    }, {
      name: "Very light gray to cyan bluish gray",
      gradient: "linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)",
      slug: "very-light-gray-to-cyan-bluish-gray"
    }, {
      name: "Cool to warm spectrum",
      gradient: "linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)",
      slug: "cool-to-warm-spectrum"
    }],
    onGradientChange: function onGradientChange(newValue) {
      // setGradientValue(newValue);
      setAttributes({
        background_gradient: newValue
      });
    }
  }) : "", background_used == "image" ? /*#__PURE__*/React.createElement("div", null, background_image && background_image != "" ? /*#__PURE__*/React.createElement("figure", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("img", {
    className: "aspect-square w-full rounded-lg object-cover object-center",
    src: background_image
  }), /*#__PURE__*/React.createElement(_button_download_edit_components__WEBPACK_IMPORTED_MODULE_3__.ButtonDeleteImage, {
    onClick: function onClick() {
      setAttributes({
        // imagealt: "",
        // imageid: "",
        // imageurl: "",
        background_image: ""
      });
    }
  })) : /*#__PURE__*/React.createElement("div", {
    className: "aspect-square w-full cursor-pointer"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: function onSelect(newImage) {
      setAttributes({
        // imagealt: newImage?.alt ?? "",
        // imageid: newImage?.id ?? "",
        // imageurl: newImage?.url ?? "",
        background_image: newImage.url
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
  }))) : "")), /*#__PURE__*/React.createElement(_panel_scheme__WEBPACK_IMPORTED_MODULE_4__["default"], props));
};

/***/ }),

/***/ "./src/blocks/review/edit/components/panel/scheme.jsx":
/*!************************************************************!*\
  !*** ./src/blocks/review/edit/components/panel/scheme.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */


var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$components = wp.components,
  ToolbarGroup = _wp$components.ToolbarGroup,
  ToolbarButton = _wp$components.ToolbarButton,
  Button = _wp$components.Button,
  ButtonGroup = _wp$components.ButtonGroup,
  FormToggle = _wp$components.FormToggle,
  PanelBody = _wp$components.PanelBody,
  PanelRow = _wp$components.PanelRow,
  RangeControl = _wp$components.RangeControl,
  RadioControl = _wp$components.RadioControl,
  SelectControl = _wp$components.SelectControl,
  TextControl = _wp$components.TextControl,
  DatePicker = _wp$components.DatePicker,
  ToggleControl = _wp$components.ToggleControl;
var _ref = wp.blockEditor || wp.editor,
  BlockControls = _ref.BlockControls,
  InspectorControls = _ref.InspectorControls,
  PanelColorSettings = _ref.PanelColorSettings,
  URLInput = _ref.URLInput;
var removeFromArray = function removeFromArray(arr, removedElems) {
  return arr.filter(function (a) {
    return Array.isArray(removedElems) ? !removedElems.includes(a) : a !== removedElems;
  });
};
function Scheme(props) {
  var _props$attributes = props.attributes,
    authorName = _props$attributes.authorName,
    itemType = _props$attributes.itemType,
    itemSubtype = _props$attributes.itemSubtype,
    itemSubsubtype = _props$attributes.itemSubsubtype,
    enableReviewSchema = _props$attributes.enableReviewSchema,
    brand = _props$attributes.brand,
    sku = _props$attributes.sku,
    identifier = _props$attributes.identifier,
    identifierType = _props$attributes.identifierType,
    offerType = _props$attributes.offerType,
    offerCurrency = _props$attributes.offerCurrency,
    offerStatus = _props$attributes.offerStatus,
    offerCount = _props$attributes.offerCount,
    offerExpiry = _props$attributes.offerExpiry,
    offerPrice = _props$attributes.offerPrice,
    offerHighPrice = _props$attributes.offerHighPrice,
    offerLowPrice = _props$attributes.offerLowPrice,
    cuisines = _props$attributes.cuisines,
    appCategory = _props$attributes.appCategory,
    operatingSystem = _props$attributes.operatingSystem,
    provider = _props$attributes.provider,
    isbn = _props$attributes.isbn,
    bookAuthorName = _props$attributes.bookAuthorName,
    reviewPublisher = _props$attributes.reviewPublisher,
    reviewPublicationDate = _props$attributes.reviewPublicationDate,
    usePhysicalAddress = _props$attributes.usePhysicalAddress,
    address = _props$attributes.address,
    addressName = _props$attributes.addressName,
    priceRange = _props$attributes.priceRange,
    phoneNumber = _props$attributes.phoneNumber,
    eventStartDate = _props$attributes.eventStartDate,
    eventEndDate = _props$attributes.eventEndDate,
    eventPage = _props$attributes.eventPage,
    organizer = _props$attributes.organizer,
    performer = _props$attributes.performer,
    videoUploadDate = _props$attributes.videoUploadDate,
    videoURL = _props$attributes.videoURL,
    setAttributes = props.setAttributes;
  var subtype = ["Book", "Course", "CreativeWorkSeason", "CreativeWorkSeries", "Episode", "Event", "Game", "LocalBusiness",
  // "MediaObject",
  "Movie", "MusicPlaylist", "MusicRecording", "Organization", "Product", "SoftwareApplication"];
  var subtypeCategories = {
    Book: ["Audiobook"],
    Event: ["BusinessEvent", "ChildrensEvent", "ComedyEvent", "CourseInstance", "DanceEvent", "DeliveryEvent", "EducationEvent", "EventSeries",
    //pending
    "Festival", "FoodEvent", "Hackathon",
    //pending
    "LiteraryEvent", "MusicEvent", "PublicationEvent", "SaleEvent", "ScreeningEvent", "SocialEvent", "SportsEvent", "TheaterEvent", "VisualArtsEvent"],
    Game: ["VideoGame"],
    LocalBusiness: ["AnimalShelter", "ArchiveOrganization",
    //pending
    "AutomotiveBusiness", "ChildCare", "Dentist", "DryCleaningOrLaundry", "EmergencyService", "EmploymentAgency", "EntertainmentBusiness", "FinancialService", "FoodEstablishment", "GovernmentOffice", "HealthAndBeautyBusiness", "HomeAndConstructionBusiness", "InternetCafe", "LegalService", "Library", "LodgingBusiness", "MedicalBusiness", "ProfessionalService", "RadioStation", "RealEstateAgent", "RecyclingCenter", "SelfStorage", "ShoppingCenter", "SportsActivityLocation", "TelevisionStation", "TouristInformationCenter", "TravelAgency"],
    MediaObject: ["3DModel",
    //pending
    "AudioObject", "DataDownload", "ImageObject", "LegislationObject",
    //pending
    "MusicVideoObject"
    //   "VideoObject",
    ],

    MusicPlaylist: ["MusicAlbum", "MusicRelease"],
    Organization: ["Airline", "Consortium",
    //pending
    "Corporation", "EducationalOrganization", "FundingScheme",
    //pending
    "GovernmentOrganization", "LibrarySystem",
    //pending
    "MedicalOrganization", "NewsMediaOrganization",
    //pending
    "NGO", "PerformingGroup", "Project",
    //pending
    "SportsOrganization", "WorkersUnion"],
    Product: ["IndividualProduct", "ProductCollection", "ProductGroup", "ProductModel", "SomeProducts", "Vehicle"],
    SoftwareApplication: ["MobileApplication", "VideoGame", "WebApplication"]
  };
  var subsubtypes = {
    PublicationEvent: ["BroadcastEvent", "OnDemandEvent"],
    EducationalOrganization: ["CollegeOrUniversity", "ElementarySchool", "HighSchool", "MiddleSchool", "Preschool", "School"],
    MedicalOrganization: ["Dentist", "DiagnosticLab", "Hospital", "MedicalClinic", "Pharmacy", "Physician", "VeterinaryCare"],
    PerformingGroup: ["DanceGroup", "MusicGroup", "TheaterGroup"],
    Project: ["FundingAgency", "ResearchProject"],
    SportsOrganization: ["SportsTeam"],
    AutomotiveBusiness: ["AutoBodyShop", "AutoDealer", "AutoPartsStore", "AutoRental", "AutoRepair", "AutoWash", "GasStation", "MotorcycleDealer", "MotorcycleRepair"],
    EmergencyService: ["FireStation", "Hospital", "PoliceStation"],
    EntertainmentBusiness: ["AdultEntertainment", "AmusementPark", "ArtGallery", "Casino", "ComedyClub", "MovieTheater", "NightClub"],
    FinancialService: ["AccountingService", "AutomatedTeller", "BankOrCreditUnion", "InsuranceAgency"],
    FoodEstablishment: ["Bakery", "BarOrPub", "Brewery", "CafeOrCoffeeShop", "Distillery", "FastFoodRestaurant", "IceCreamShop", "Restaurant", "Winery"],
    GovernmentOffice: ["PostOffice"],
    HealthAndBeautyBusiness: ["BeautySalon", "DaySpa", "HairSalon", "HealthClub", "NailSalon", "TattooParlor"],
    HomeAndConstructionBusiness: ["Electrician", "GeneralContractor", "HVACBusiness", "HousePainter", "Locksmith", "MovingCompany", "Plumber", "RoofingContractor"],
    LegalService: ["Attorney", "Notary"],
    LodgingBusiness: ["BedAndBreakfast", "Campground", "Hostel", "Hotel", "Motel", "Resort"],
    MedicalBusiness: [
    //only subtypes that support reviews are included
    "Dentist", "MedicalClinic", "Optician", "Pharmacy", "Physician"],
    SportsActivityLocation: ["BowlingAlley", "ExerciseGym", "GolfCourse", "HealthClub", "PublicSwimmingPool", "SkiResort", "SportsClub", "StadiumOrArena", "TennisComplex"],
    Store: ["AutoPartsStore", "BikeStore", "BookStore", "ClothingStore", "ComputerStore", "ConvenienceStore", "DepartmentStore", "ElectronicsStore", "Florist", "FurnitureStore", "GardenStore", "GroceryStore", "HardwareStore", "HobbyShop", "HomeGoodsStore", "JewelryStore", "LiquorStore", "MensClothingStore", "MobilePhoneStore", "MovieRentalStore", "MusicStore", "OfficeEquipmentStore", "OutletStore", "PawnShop", "PetStore", "ShoeStore", "SportingGoodsStore", "TireShop", "ToyStore", "WholesaleStore"]
  };
  var offerAttributes = ["offerType", "offerStatus", "offerHighPrice", "offerLowPrice", "offerCount", "offerPrice", "offerCurrency", "offerExpiry"];
  var unusedDefaults = ["bookAuthorName", "isbn", "provider"].concat(offerAttributes, ["startDate", "endDate", "usePhysicalAddress", "addressName", "address", "eventPage", "itemPage", "organizer", "performer", "brand", "sku", "identifierType", "identifier", "cuisines", "phoneNumber", "priceRange", "appCategory", "operatingSystem", "videoUploadDate", "videoURL"]);
  var addressInput = /*#__PURE__*/React.createElement(TextControl, {
    label: __("Address"),
    value: address,
    onChange: function onChange(address) {
      return setAttributes({
        address: address
      });
    }
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    last_cuisine = _useState2[0],
    set_last_cuisine = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    event_date = _useState4[0],
    set_event_date = _useState4[1];
  var cuisineInput = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, __("Serves cuisine")), /*#__PURE__*/React.createElement("ul", {
    className: "review_cuisine_list"
  }, cuisines.length > 0 ? cuisines.map(function (c, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, c, /*#__PURE__*/React.createElement("span", {
      className: "dashicons dashicons-dismiss",
      onClick: function onClick() {
        return setAttributes({
          cuisines: [].concat(_toConsumableArray(cuisines.slice(0, i)), _toConsumableArray(cuisines.slice(i + 1)))
        });
      }
    }));
  }) : /*#__PURE__*/React.createElement("span", null, __("Cuisine list empty"))), /*#__PURE__*/React.createElement("label", null, __("Add a cuisine to the list")), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: last_cuisine,
    onKeyUp: function onKeyUp(e) {
      if (e.key === "Enter" && e.target.value !== "") {
        setAttributes({
          cuisines: [].concat(_toConsumableArray(cuisines), [e.target.value])
        });
        set_last_cuisine("");
      }
    },
    onChange: function onChange(e) {
      if (e.target.value.includes(",")) {
        var latestItemArray = e.target.value.split(",");
        if (latestItemArray[0] !== "") {
          setAttributes({
            cuisines: [].concat(_toConsumableArray(cuisines.length > 1 || cuisines[0] !== "" ? cuisines : []), _toConsumableArray(latestItemArray.slice(0, latestItemArray.length - 1)))
          });
          set_last_cuisine(latestItemArray[latestItemArray.length - 1]);
        }
      } else {
        set_last_cuisine(e.target.value);
      }
    },
    onBlur: function onBlur() {
      if (last_cuisine !== "") {
        setAttributes({
          cuisines: [].concat(_toConsumableArray(cuisines.length > 1 || cuisines[0] !== "" ? cuisines : []), [last_cuisine])
        });
        set_last_cuisine("");
      }
    }
  }));
  var itemTypeExtras;
  switch (itemType) {
    default:
      //there's nothing to add
      break;
    case "Book":
      itemTypeExtras = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextControl, {
        label: __("ISBN"),
        value: isbn,
        onChange: function onChange(isbn) {
          return setAttributes({
            isbn: isbn
          });
        }
      }), /*#__PURE__*/React.createElement(TextControl, {
        label: __("Book author name"),
        value: bookAuthorName,
        onChange: function onChange(bookAuthorName) {
          return setAttributes({
            bookAuthorName: bookAuthorName
          });
        }
      }));
      unusedDefaults = removeFromArray(unusedDefaults, ["isbn", "bookAuthorName", "itemPage"]);
      break;
    case "Course":
      itemTypeExtras = /*#__PURE__*/React.createElement(TextControl, {
        label: __("Provider"),
        value: provider,
        onChange: function onChange(provider) {
          return setAttributes({
            provider: provider
          });
        }
      });
      unusedDefaults = removeFromArray(unusedDefaults, "provider");
      break;
    case "Event":
      itemTypeExtras = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, __("Event start date")), /*#__PURE__*/React.createElement(DatePicker, {
        currentDate: eventStartDate * 1000,
        onChange: function onChange(newDate) {
          var newDateVal = Math.floor(Date.parse(newDate) / 1000);
          setAttributes({
            eventStartDate: newDateVal
          });
          if (event_date && eventEndDate <= newDateVal) {
            setAttributes({
              eventEndDate: 86400 + newDateVal
            });
          }
        }
      }), /*#__PURE__*/React.createElement("label", {
        htmlFor: "review-event-date-toggle"
      }, __("Use event end date")), /*#__PURE__*/React.createElement(FormToggle, {
        id: "review-event-date-toggle",
        label: __("Set event end date"),
        checked: event_date,
        onChange: function onChange() {
          set_event_date(!event_date);
          setAttributes({
            eventEndDate: event_date ? 0 : 86400 + eventStartDate
          });
        }
      }), event_date && ( /*#__PURE__*/React.createElement("h3", null, __("Event end date")), /*#__PURE__*/React.createElement(DatePicker, {
        currentDate: eventEndDate * 1000,
        onChange: function onChange(newDate) {
          return setAttributes({
            eventEndDate: Math.floor(Date.parse(newDate) / 1000)
          });
        }
      })), /*#__PURE__*/React.createElement(PanelBody, {
        title: __("Event venue"),
        initialOpen: true
      }, /*#__PURE__*/React.createElement(Button, {
        icon: "admin-home",
        isPrimary: usePhysicalAddress,
        onClick: function onClick() {
          return setAttributes({
            usePhysicalAddress: true
          });
        },
        showTooltip: true,
        label: "Use physical location"
      }), /*#__PURE__*/React.createElement(Button, {
        icon: "admin-site-alt3",
        isPrimary: !usePhysicalAddress,
        onClick: function onClick() {
          return setAttributes({
            usePhysicalAddress: false
          });
        },
        showTooltip: true,
        label: "Use virtual location"
      }), usePhysicalAddress ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextControl, {
        label: __("Address Name"),
        value: addressName,
        onChange: function onChange(addressName) {
          return setAttributes({
            addressName: addressName
          });
        }
      }), addressInput) : /*#__PURE__*/React.createElement("div", {
        id: "review_event_page_input"
      }, /*#__PURE__*/React.createElement(URLInput, {
        label: __("Event Page"),
        autoFocus: false,
        value: eventPage,
        onChange: function onChange(eventPage) {
          return setAttributes({
            eventPage: eventPage
          });
        }
      }))), /*#__PURE__*/React.createElement(TextControl, {
        label: __("Performer"),
        value: performer,
        onChange: function onChange(performer) {
          return setAttributes({
            performer: performer
          });
        }
      }), /*#__PURE__*/React.createElement(TextControl, {
        label: __("Organizer"),
        value: organizer,
        onChange: function onChange(organizer) {
          return setAttributes({
            organizer: organizer
          });
        }
      }));
      unusedDefaults = removeFromArray(unusedDefaults, [].concat(offerAttributes, ["startDate", "endDate", "usePhysicalAddress", "addressName", "address", "eventPage", "organizer", "performer"]));
      break;
    case "Product":
      itemTypeExtras = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextControl, {
        label: __("Brand"),
        value: brand,
        onChange: function onChange(brand) {
          return setAttributes({
            brand: brand
          });
        }
      }), /*#__PURE__*/React.createElement(TextControl, {
        label: __("SKU"),
        value: sku,
        onChange: function onChange(sku) {
          return setAttributes({
            sku: sku
          });
        }
      }), /*#__PURE__*/React.createElement(TextControl, {
        label: __("Identifier"),
        value: identifier,
        onChange: function onChange(identifier) {
          return setAttributes({
            identifier: identifier
          });
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Identifier type"),
        value: identifierType,
        options: ["nsn", "mpn", "gtin8", "gtin12", "gtin13", "gtin14", "gtin"].map(function (a) {
          return {
            label: __(a.toUpperCase()),
            value: a
          };
        }),
        onChange: function onChange(identifierType) {
          return setAttributes({
            identifierType: identifierType
          });
        }
      }));
      unusedDefaults = removeFromArray(unusedDefaults, ["brand", "sku", "identifiertype", "identifier"].concat(offerAttributes));
      break;
    case "LocalBusiness":
      itemTypeExtras = /*#__PURE__*/React.createElement(React.Fragment, null, itemSubtype === "FoodEstablishment" && itemSubsubtype !== "Distillery" && cuisineInput, !(["AnimalShelter", "ArchiveOrganization"].includes(itemSubtype) || ["FireStation", "PoliceStation"].includes(itemSubsubtype)) && /*#__PURE__*/React.createElement(TextControl, {
        label: __("Price Range"),
        value: priceRange,
        onChange: function onChange(priceRange) {
          return setAttributes({
            priceRange: priceRange
          });
        }
      }), addressInput, /*#__PURE__*/React.createElement(TextControl, {
        label: __("Telephone Number"),
        type: "tel",
        value: phoneNumber,
        onChange: function onChange(phoneNumber) {
          return setAttributes({
            phoneNumber: phoneNumber
          });
        }
      }));
      if (itemSubtype === "FoodEstablishment" && itemSubsubtype !== "Distillery") {
        unusedDefaults = removeFromArray(unusedDefaults, "cuisines");
      }
      unusedDefaults = removeFromArray(unusedDefaults, ["address", "itemPage", "phoneNumber", "priceRange"]);
      break;
    case "Movie":
      //   itemTypeExtras = itemURLInput;
      unusedDefaults = removeFromArray(unusedDefaults, ["itemPage"]);
      break;
    case "Organization":
      itemTypeExtras = /*#__PURE__*/React.createElement(React.Fragment, null, (itemSubsubtype === "Hospital" || subsubtypes.MedicalBusiness.includes(itemSubsubtype)) && /*#__PURE__*/React.createElement(TextControl, {
        label: __("Price Range"),
        value: priceRange,
        onChange: function onChange(priceRange) {
          return setAttributes({
            priceRange: priceRange
          });
        }
      }), addressInput, /*#__PURE__*/React.createElement(TextControl, {
        label: __("Telephone Number"),
        type: "tel",
        value: phoneNumber,
        onChange: function onChange(phoneNumber) {
          return setAttributes({
            phoneNumber: phoneNumber
          });
        }
      }));
      unusedDefaults = removeFromArray(unusedDefaults, ["address", "phoneNumber", "priceRange"]);
      break;
    case "SoftwareApplication":
      itemTypeExtras = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextControl, {
        label: __("Application Category"),
        value: appCategory,
        onChange: function onChange(appCategory) {
          return setAttributes({
            appCategory: appCategory
          });
        }
      }), /*#__PURE__*/React.createElement(TextControl, {
        label: __("Operating System"),
        value: operatingSystem,
        onChange: function onChange(operatingSystem) {
          return setAttributes({
            operatingSystem: operatingSystem
          });
        }
      }));
      unusedDefaults = removeFromArray(unusedDefaults, [].concat(offerAttributes, ["appCategory", "operatingSystem"]));
      break;
    case "MediaObject":
      if (itemSubtype === "VideoObject") {
        itemTypeExtras = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, __("Video upload date")), ",", /*#__PURE__*/React.createElement(DatePicker, {
          currentDate: videoUploadDate * 1000,
          onChange: function onChange(newDate) {
            return setAttributes({
              videoUploadDate: Math.floor(Date.parse(newDate) / 1000)
            });
          }
        }), /*#__PURE__*/React.createElement("div", {
          id: "review_video_url_input"
        }, /*#__PURE__*/React.createElement(URLInput, {
          label: __("Video URL"),
          autoFocus: false,
          value: videoURL,
          onChange: function onChange(videoURL) {
            return setAttributes({
              videoURL: videoURL
            });
          }
        })));
        unusedDefaults = removeFromArray(unusedDefaults, ["videoUploadDate", "videoURL"]);
      }
      break;
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Review schema"),
    initialOpen: true
  }, /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "review-schema-toggle"
  }, __("Enable review schema")), /*#__PURE__*/React.createElement(FormToggle, {
    id: "review-schema-toggle",
    label: __("Enable review schema"),
    checked: enableReviewSchema,
    onChange: function onChange() {
      var newAttributes = {
        enableReviewSchema: !enableReviewSchema
      };
      //   if (enableReviewSchema) {
      //     newAttributes = Object.assign(newAttributes, {
      //       enableImage: false,
      //       enableDescription: false,
      //     });
      //   }
      setAttributes(newAttributes);
    }
  })), enableReviewSchema && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Item type"),
    value: itemType,
    onChange: function onChange(itemType) {
      setAttributes({
        itemType: itemType
      });
      // if (itemType === "Movie") {
      //   setAttributes({ enableImage: true });
      // }
      // if (itemType === "Course") {
      //   setAttributes({ enableDescription: true });
      // }
      if (!subtypeCategories.hasOwnProperty(itemType) || !subtypeCategories[itemType].includes(itemSubtype)) {
        setAttributes({
          itemSubtype: "",
          itemSubsubtype: ""
        });
      }
    },
    options: subtype.map(function (a) {
      return {
        label: a,
        value: a
      };
    })
  }), subtypeCategories.hasOwnProperty(itemType) && /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Item subtype"),
    value: itemSubtype,
    onChange: function onChange(itemSubtype) {
      setAttributes({
        itemSubtype: itemSubtype
      });
      //   if (itemSubtype === "VideoObject") {
      //     setAttributes({ enableImage: true });
      //   }
      if (!subsubtypes.hasOwnProperty(itemSubtype) || !subsubtypes[itemSubtype].includes(itemSubsubtype)) {
        setAttributes({
          itemSubsubtype: ""
        });
      }
    },
    options: [""].concat(_toConsumableArray(subtypeCategories[itemType])).map(function (a) {
      return {
        label: a,
        value: a
      };
    })
  }), subsubtypes.hasOwnProperty(itemSubtype) && /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Item subsubtype"),
    value: itemSubsubtype,
    onChange: function onChange(itemSubsubtype) {
      return setAttributes({
        itemSubsubtype: itemSubsubtype
      });
    },
    options: [""].concat(_toConsumableArray(subsubtypes[itemSubtype])).map(function (a) {
      return {
        label: a,
        value: a
      };
    })
  })), /*#__PURE__*/React.createElement(React.Fragment, null), enableReviewSchema && /*#__PURE__*/React.createElement(React.Fragment, null, itemTypeExtras, /*#__PURE__*/React.createElement(TextControl, {
    label: __("Review publisher"),
    value: reviewPublisher,
    onChange: function onChange(reviewPublisher) {
      return setAttributes({
        reviewPublisher: reviewPublisher
      });
    }
  }), /*#__PURE__*/React.createElement("p", null, __("Review publication date")), /*#__PURE__*/React.createElement(DatePicker, {
    currentDate: reviewPublicationDate * 1000,
    onChange: function onChange(newDate) {
      return setAttributes({
        reviewPublicationDate: Math.floor(Date.parse(newDate) / 1000)
      });
    }
  }), ["Event", "Product", "SoftwareApplication"].includes(itemType) && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Offer")
  }, /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Offer Type"),
    value: offerType,
    options: ["Offer", "Aggregate Offer"].map(function (a) {
      return {
        label: __(a),
        value: a.replace(" ", "")
      };
    }),
    onChange: function onChange(offerType) {
      return setAttributes({
        offerType: offerType
      });
    }
  }), /*#__PURE__*/React.createElement(TextControl, {
    label: __("Offer Currency"),
    value: offerCurrency,
    onChange: function onChange(offerCurrency) {
      return setAttributes({
        offerCurrency: offerCurrency
      });
    }
  }), offerType === "Offer" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextControl, {
    label: __("Offer Price"),
    value: offerPrice,
    type: "number",
    onChange: function onChange(val) {
      if (!isNaN(Number(val))) {
        setAttributes({
          offerPrice: Number(val)
        });
      }
    }
  }), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Offer Status"),
    value: offerStatus,
    options: ["Discontinued", "In Stock", "In Store Only", "Limited Availability", "Online Only", "Out Of Stock", "Pre Order", "Pre Sale", "Sold Out"].map(function (a) {
      return {
        label: __(a),
        value: a.replace(" ", "")
      };
    }),
    onChange: function onChange(offerStatus) {
      return setAttributes({
        offerStatus: offerStatus
      });
    }
  }), /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Offer expiration"),
    checked: offerExpiry > 0,
    onChange: function onChange() {
      return setAttributes({
        offerExpiry: offerExpiry ? 0 : 60 * (10080 + Math.ceil(Date.now() / 60000)) //default to one week from Date.now() when enabled
      });
    }
  }), offerExpiry > 0 && /*#__PURE__*/React.createElement(DatePicker, {
    currentDate: offerExpiry * 1000,
    onChange: function onChange(newDate) {
      return setAttributes({
        offerExpiry: Math.floor(Date.parse(newDate) / 1000)
      });
    }
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextControl, {
    label: __("Offer Count"),
    value: offerCount,
    onChange: function onChange(val) {
      return setAttributes({
        offerCount: Number(val)
      });
    }
  }), /*#__PURE__*/React.createElement(TextControl, {
    label: __("Lowest Available Price (".concat(offerCurrency, ")")),
    value: offerLowPrice,
    onChange: function onChange(val) {
      if (!isNaN(val)) {
        setAttributes({
          offerLowPrice: Number(val)
        });
      }
    }
  }), /*#__PURE__*/React.createElement(TextControl, {
    label: __("Highest Available Price (".concat(offerCurrency, ")")),
    value: offerHighPrice,
    onChange: function onChange(val) {
      if (!isNaN(val)) {
        setAttributes({
          offerHighPrice: Number(val)
        });
      }
    }
  }))))));
}

/***/ }),

/***/ "./src/blocks/review/edit/edit.jsx":
/*!*****************************************!*\
  !*** ./src/blocks/review/edit/edit.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/arrow-up.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/arrow-down.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/trash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../icons/check */ "./src/icons/check.jsx");
/* harmony import */ var _icons_x_mark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../icons/x-mark */ "./src/icons/x-mark.jsx");
/* harmony import */ var _icons_plus_circle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../icons/plus-circle */ "./src/icons/plus-circle.jsx");
/* harmony import */ var _icons_trash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../icons/trash */ "./src/icons/trash.jsx");
/* harmony import */ var _icons_ellipsis_vertical__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../icons/ellipsis-vertical */ "./src/icons/ellipsis-vertical.jsx");
/* harmony import */ var _components_button_add_step_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/button_add_step_2 */ "./src/components/button_add_step_2.jsx");
/* harmony import */ var _components_inspector_panel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/inspector_panel */ "./src/blocks/review/edit/components/inspector_panel.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/* eslint-disable no-unused-vars */













var moveElement = function moveElement(array, from, to) {
  var copy = _toConsumableArray(array);
  var valueToMove = copy.splice(from, 1)[0];
  copy.splice(to, 0, valueToMove);
  return copy;
};
function Edit(props) {
  var _props$attributes = props.attributes,
    blockID = _props$attributes.blockID,
    title = _props$attributes.title,
    description = _props$attributes.description,
    pros = _props$attributes.pros,
    cons = _props$attributes.cons,
    breakdowns = _props$attributes.breakdowns,
    background_used = _props$attributes.background_used,
    background_color = _props$attributes.background_color,
    background_gradient = _props$attributes.background_gradient,
    background_image = _props$attributes.background_image,
    setAttributes = props.setAttributes,
    block = props.block,
    getBlock = props.getBlock,
    getClientIdsWithDescendants = props.getClientIdsWithDescendants;
  var pros_static = [""];
  var cons_static = [""];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(breakdowns),
    _useState2 = _slicedToArray(_useState, 2),
    breakdowns_local = _useState2[0],
    setBreakdownsLocal = _useState2[1];
  var breakdowns_static = [{
    label: "",
    value: 0
  }];
  var breakdowns_default = {
    label: "",
    value: 0
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    total_breakdown_percentage = _useState4[0],
    set_total_breakdown_percentage = _useState4[1];
  function lockHandle(status) {
    if (status) {
      wp.data.dispatch("core/editor").disablePublishSidebar("requiredValueLock");
      wp.data.dispatch("core/editor").lockPostSaving("requiredValueLock");
    } else {
      wp.data.dispatch("core/editor").enablePublishSidebar("requiredValueLock");
      wp.data.dispatch("core/editor").unlockPostSaving("requiredValueLock");
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (pros.length == 0) {
      setAttributes({
        pros: pros_static
      });
    }
    if (cons.length == 0) {
      setAttributes({
        cons: cons_static
      });
    }
    if (breakdowns_local.length == 0) {
      setBreakdownsLocal(breakdowns_static);
    }
    return function () {
      lockHandle(false);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var acumulate_breakdown_percentage = 0;
    breakdowns_local.forEach(function (value) {
      acumulate_breakdown_percentage += parseFloat(value.value);
    });
    console.log("pembagian: ".concat(acumulate_breakdown_percentage, " / ").concat(breakdowns_local.length));
    set_total_breakdown_percentage(acumulate_breakdown_percentage / breakdowns_local.length);
    setAttributes({
      breakdowns: breakdowns_local
    });
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
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (title == "" || pros.length == 0 || pros.includes("") || cons.length == 0 || cons.includes("") || breakdowns.length == 0 || breakdowns.map(function (breakdown) {
      return breakdown.label;
    }).includes("")) {
      lockHandle(true);
    } else {
      lockHandle(false);
    }
  }, [breakdowns, pros, cons, title]);
  return /*#__PURE__*/React.createElement("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(), /*#__PURE__*/React.createElement(_components_inspector_panel__WEBPACK_IMPORTED_MODULE_11__.InspectorPanel, props), /*#__PURE__*/React.createElement("div", {
    className: "review_block wp-block relative min-h-[500px] w-full overflow-hidden rounded-md !p-4",
    style: {
      background: background_used == "color" ? background_color : background_gradient,
      backgroundColor: background_used == "color" ? background_color : background_gradient
    }
  }, background_used == "image" && background_image != "" ? /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-0"
  }, /*#__PURE__*/React.createElement("img", {
    src: background_image,
    className: "w-full"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "100%",
      background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6477941518404237) 7%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 100%)",
      transform: "scaleY(1.5)"
    }
  })) : "", /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 mb-4 flex w-full flex-row flex-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
    tagName: "p",
    multiline: false,
    keepPlaceholderOnFocus: true,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Title"),
    className: "mt-0 mb-3 text-3xl font-bold text-white",
    value: title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
    tagName: "p",
    keepPlaceholderOnFocus: true,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Description"),
    className: "mt-0 mb-3 text-base text-white",
    value: description,
    onChange: function onChange(description) {
      return setAttributes({
        description: description
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex max-h-[162px] w-28 flex-col flex-wrap items-center overflow-hidden rounded-md bg-lime-600"
  }, /*#__PURE__*/React.createElement("p", {
    className: "m-0 flex grow items-center py-10 text-3xl font-bold text-white"
  }, parseInt(total_breakdown_percentage), "%"), /*#__PURE__*/React.createElement("div", {
    className: "flex w-full justify-center bg-lime-500 py-2 text-xs text-white"
  }, "SCORE"))), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 flex w-full flex-wrap overflow-hidden rounded-md bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex w-full flex-wrap border-b-2 border-slate-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "basis-6/12 border-r-2 border-slate-100 p-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-0 mb-3 text-sm font-bold"
  }, "PROS"), /*#__PURE__*/React.createElement("ul", {
    className: "list-none pl-0"
  }, pros.map(function (pro, index) {
    return /*#__PURE__*/React.createElement("li", {
      className: "flex flex-wrap",
      key: index
    }, /*#__PURE__*/React.createElement(_icons_check__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "h-5 w-5 text-lime-500"
    }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
      tagName: "p",
      placeholder: "Pros title",
      multiline: false,
      keepPlaceholderOnFocus: true,
      className: "mt-0 mb-3 flex-1 text-base focus:outline-none focus:ring focus:ring-slate-300",
      value: pro,
      onChange: function onChange(pro) {
        var newData = _toConsumableArray(pros);
        newData[index] = pro;
        setAttributes({
          pros: newData
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, {
      icon: /*#__PURE__*/React.createElement(_icons_ellipsis_vertical__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "h-4 w-4"
      }),
      label: "Select a direction"
    }, function (_ref) {
      var onClose = _ref.onClose;
      return /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"],
        onClick: function onClick() {
          if (index > 0) {
            setAttributes({
              pros: _toConsumableArray(moveElement(pros, index, index - 1))
            });
            onClose();
          }
        }
      }, "Move Up"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__["default"],
        onClick: function onClick() {
          if (index < pros.length - 1) {
            setAttributes({
              pros: _toConsumableArray(moveElement(pros, index, index + 1))
            });
            onClose();
          }
        }
      }, "Move Down")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__["default"],
        onClick: function onClick() {
          var newData = _toConsumableArray(pros);
          newData = newData.filter(function (v, index_new) {
            return index_new != index;
          });
          setAttributes({
            pros: newData
          });
          onClose();
        }
      }, "Remove")));
    }));
  })), pros.length == 0 || pros.includes("") ? /*#__PURE__*/React.createElement("div", {
    className: "mb-4 flex h-14 w-full flex-wrap items-center justify-center rounded-md border border-dashed border-red-700 px-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "m-0 text-base font-semibold text-red-700"
  }, "Anda tidak bisa save jika PROS belum diisi")) : "", /*#__PURE__*/React.createElement(_components_button_add_step_2__WEBPACK_IMPORTED_MODULE_10__.ButtonAddStep2, {
    onClick: function onClick() {
      setAttributes({
        pros: [].concat(_toConsumableArray(pros), [""])
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "basis-6/12 p-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-0 mb-3 text-sm font-bold"
  }, "CONS"), /*#__PURE__*/React.createElement("ul", {
    className: "list-none pl-0"
  }, cons.map(function (con, index) {
    return /*#__PURE__*/React.createElement("li", {
      className: "flex flex-wrap",
      key: index
    }, /*#__PURE__*/React.createElement(_icons_x_mark__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "h-5 w-5 text-red-500"
    }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
      tagName: "p",
      placeholder: "Cons title",
      multiline: false,
      keepPlaceholderOnFocus: true,
      className: "mt-0 mb-3 flex-1 text-base focus:outline-none focus:ring focus:ring-slate-300",
      value: con,
      onChange: function onChange(con) {
        var newData = _toConsumableArray(cons);
        newData[index] = con;
        setAttributes({
          cons: newData
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, {
      icon: /*#__PURE__*/React.createElement(_icons_ellipsis_vertical__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "h-4 w-4"
      }),
      label: "Select a direction"
    }, function (_ref2) {
      var onClose = _ref2.onClose;
      return /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"],
        onClick: function onClick() {
          if (index > 0) {
            setAttributes({
              cons: _toConsumableArray(moveElement(cons, index, index - 1))
            });
            onClose();
          }
        }
      }, "Move Up"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__["default"],
        onClick: function onClick() {
          if (index < cons.length - 1) {
            setAttributes({
              cons: _toConsumableArray(moveElement(cons, index, index + 1))
            });
            onClose();
          }
        }
      }, "Move Down")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__["default"],
        onClick: function onClick() {
          var newData = _toConsumableArray(cons);
          newData = newData.filter(function (v, index_new) {
            return index_new != index;
          });
          setAttributes({
            cons: newData
          });
          onClose();
        }
      }, "Remove")));
    }));
  })), cons.length == 0 || cons.includes("") ? /*#__PURE__*/React.createElement("div", {
    className: "mb-4 flex h-14 w-full flex-wrap items-center justify-center rounded-md border border-dashed border-red-700 px-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "m-0 text-base font-semibold text-red-700"
  }, "Anda tidak bisa save jika CONS belum diisi")) : "", /*#__PURE__*/React.createElement(_components_button_add_step_2__WEBPACK_IMPORTED_MODULE_10__.ButtonAddStep2, {
    onClick: function onClick() {
      setAttributes({
        cons: [].concat(_toConsumableArray(cons), [""])
      });
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex w-full flex-wrap p-5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-0 mb-3 text-sm font-bold"
  }, "REVIEW BREAKDOWN"), /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, breakdowns_local.map(function (breakdown, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-6 flex flex-col flex-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-2 flex flex-wrap items-center justify-between"
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
      tagName: "p",
      multiline: false,
      keepPlaceholderOnFocus: true,
      placeholder: "Breakdown title",
      className: "m-0 flex flex-1 flex-wrap items-center text-sm font-bold focus:outline-none focus:ring focus:ring-slate-300",
      value: breakdown.label,
      onChange: function onChange(value) {
        var newBreakdowns = _toConsumableArray(breakdowns_local);
        newBreakdowns[index] = {
          label: value,
          value: parseInt(breakdown.value)
        };
        setBreakdownsLocal(newBreakdowns);
      }
    }), /*#__PURE__*/React.createElement("p", {
      className: "m-0 flex flex-wrap items-center text-sm font-bold"
    }, breakdown.value, "%"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, {
      icon: /*#__PURE__*/React.createElement(_icons_ellipsis_vertical__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "h-4 w-4"
      }),
      label: "Select a direction"
    }, function (_ref3) {
      var onClose = _ref3.onClose;
      return /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"],
        onClick: function onClick() {
          if (index > 0) {
            setBreakdownsLocal(_toConsumableArray(moveElement(breakdowns_local, index, index - 1)));
            onClose();
          }
        }
      }, "Move Up"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__["default"],
        onClick: function onClick() {
          if (index < breakdowns_local.length - 1) {
            setBreakdownsLocal(_toConsumableArray(moveElement(breakdowns_local, index, index + 1)));
            onClose();
          }
        }
      }, "Move Down")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__["default"],
        onClick: function onClick() {
          var newData = _toConsumableArray(breakdowns_local);
          newData = newData.filter(function (v, index_new) {
            return index_new != index;
          });
          setBreakdownsLocal(newData);
          onClose();
        }
      }, "Remove")));
    })), /*#__PURE__*/React.createElement("div", {
      className: "costum-slider relative flex flex-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "track",
      style: {
        width: "".concat(rangeTrackWidth(parseInt(breakdown.value)), "%")
      }
    }), /*#__PURE__*/React.createElement("input", {
      id: "range_id",
      className: "range",
      type: "range",
      name: "",
      min: "0",
      max: "100",
      step: "1",
      onChange: function onChange(event) {
        var newBreakdowns = _toConsumableArray(breakdowns_local);
        newBreakdowns[index] = {
          label: breakdown.label,
          value: parseInt(event.target.value)
        };
        setBreakdownsLocal(newBreakdowns);
      },
      value: breakdown.value
    }))));
  }), breakdowns_local.length == 0 || breakdowns_local.map(function (breakdown) {
    return breakdown.label;
  }).includes("") ? /*#__PURE__*/React.createElement("div", {
    className: "mb-4 flex h-14 w-full flex-wrap items-center justify-center rounded-md border border-dashed border-red-700 px-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "m-0 text-base font-semibold text-red-700"
  }, "Anda tidak bisa save jika REVIEWS belum diisi")) : ""), /*#__PURE__*/React.createElement(_components_button_add_step_2__WEBPACK_IMPORTED_MODULE_10__.ButtonAddStep2, {
    onClick: function onClick() {
      // setAttributes({ breakdowns_local: [...breakdowns_local, breakdowns_default] });
      setBreakdownsLocal([].concat(_toConsumableArray(breakdowns_local), [breakdowns_default]));
    }
  })))));
}

/***/ }),

/***/ "./src/blocks/review/icon.jsx":
/*!************************************!*\
  !*** ./src/blocks/review/icon.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   removeIcon: () => (/* binding */ removeIcon)
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
var removeIcon = /*#__PURE__*/React.createElement("svg", {
  width: "20px",
  height: "20px",
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "m50 2.5c-26.199 0-47.5 21.301-47.5 47.5s21.301 47.5 47.5 47.5 47.5-21.301 47.5-47.5-21.301-47.5-47.5-47.5zm24.898 62.301l-10.199 10.199-14.801-14.801-14.801 14.801-10.199-10.199 14.801-14.801-14.801-14.801 10.199-10.199 14.801 14.801 14.801-14.801 10.199 10.199-14.801 14.801z"
}));

// await wp.data.dispatch('core/editor').autosave()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icon);

/***/ }),

/***/ "./src/components/button_add_step_2.jsx":
/*!**********************************************!*\
  !*** ./src/components/button_add_step_2.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonAddStep2: () => (/* binding */ ButtonAddStep2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_plus_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/plus-circle */ "./src/icons/plus-circle.jsx");

var __ = wp.i18n.__; // Import __() from wp.i18n

function ButtonAddStep2(_ref) {
  var onClick = _ref.onClick,
    label = _ref.label;
  // eslint-disable-next-line no-param-reassign
  if (!label) label = "Tambah Langkah";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex h-10 w-full cursor-pointer flex-wrap items-center justify-center rounded-md border border-dashed border-slate-400 duration-200 hover:scale-[1.03] hover:border-solid hover:border-slate-900",
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_plus_circle__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./src/icons/check.jsx":
/*!*****************************!*\
  !*** ./src/icons/check.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
function Icon(_ref) {
  var className = _ref.className;
  if (!className) className = "h-6 w-6";
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4.5 12.75l6 6 9-13.5"
  }));
}

/***/ }),

/***/ "./src/icons/ellipsis-vertical.jsx":
/*!*****************************************!*\
  !*** ./src/icons/ellipsis-vertical.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
function Icon(_ref) {
  var className = _ref.className;
  if (!className) className = "h-6 w-6";
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
  }));
}

/***/ }),

/***/ "./src/icons/plus-circle.jsx":
/*!***********************************!*\
  !*** ./src/icons/plus-circle.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
function Icon(_ref) {
  var className = _ref.className;
  if (!className) className = "h-6 w-6";
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/***/ }),

/***/ "./src/icons/trash.jsx":
/*!*****************************!*\
  !*** ./src/icons/trash.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
function Icon(_ref) {
  var className = _ref.className;
  if (!className) className = "h-6 w-6";
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
  }));
}

/***/ }),

/***/ "./src/icons/x-mark.jsx":
/*!******************************!*\
  !*** ./src/icons/x-mark.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
function Icon(_ref) {
  var className = _ref.className;
  if (!className) className = "h-6 w-6";
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/arrow-down.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/arrow-down.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const arrowDown = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m16.5 13.5-3.7 3.7V4h-1.5v13.2l-3.8-3.7-1 1 5.5 5.6 5.5-5.6z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrowDown);
//# sourceMappingURL=arrow-down.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/arrow-up.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/arrow-up.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const arrowUp = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrowUp);
//# sourceMappingURL=arrow-up.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/trash.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/trash.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const trash = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20 5h-5.7c0-1.3-1-2.3-2.3-2.3S9.7 3.7 9.7 5H4v2h1.5v.3l1.7 11.1c.1 1 1 1.7 2 1.7h5.7c1 0 1.8-.7 2-1.7l1.7-11.1V7H20V5zm-3.2 2l-1.7 11.1c0 .1-.1.2-.3.2H9.1c-.1 0-.3-.1-.3-.2L7.2 7h9.6z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trash);
//# sourceMappingURL=trash.js.map

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

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./src/blocks/review/attributes/scheme.mjs":
/*!*************************************************!*\
  !*** ./src/blocks/review/attributes/scheme.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    enableReviewSchema: {
        type: "boolean",
        default: true,
    },
    itemType: {
        type: "string",
        default: "Product",
    },
    itemSubtype: {
        type: "string",
        default: "",
    },
    itemSubsubtype: {
        type: "string",
        default: "",
    },
    reviewPublisher: {
        type: "string",
        default: "",
    },
    reviewPublicationDate: {
        type: "number",
        default: Math.ceil(Date.now() / 1000),
    },
    offerType: {
        type: "string",
        default: "Offer", // can also be set to aggregate offer (which prevevnts calltoactionurl from being  used as offer url)
    },
    offerStatus: {
        type: "string",
        default: "InStock", // available values: Discontinued, InStock, InStoreOnly, LimitedAvailability, OnlineOnly, OutOfStock, PreOrder, PreSale, SoldOut
    },
    // begin aggregate offer-only attributes
    offerHighPrice: {
        type: "number",
        default: 0,
    },
    offerLowPrice: {
        type: "number",
        default: 0,
    },
    offerCount: {
        type: "number",
        default: 0,
    },
    // end aggregate offer-only attributes
    offerPrice: {
        // only for offer
        type: "number",
        default: 0,
    },
    offerCurrency: {
        type: "string",
        default: "USD",
    },
    offerExpiry: {
        type: "number",
        // default: 60 * (10080 + Math.ceil(Date.now() / 60000)),
        default: 0,
    },
    brand: {
        type: "string",
        default: "",
    },
    sku: {
        type: "string",
        default: "",
    },
    identifier: {
        type: "string",
        default: "",
    },
    identifierType: {
        type: "string",
        default: "gtin", // nsn, mpn, gtin8, gtin12, gtin13, gtin14, gtin
    },
    usePhysicalAddress: {
        type: "boolean",
        default: true, // can be set to false when using event itemType
    },
    address: {
        // for localbusiness location, organiztion location, and event location
        type: "string",
        default: "",
    },
    addressName: {
        // for event location
        type: "string",
        default: "",
    },
    eventStartDate: {
        type: "number",
        default: 60 * (1440 + Math.ceil(Date.now() / 60000)), // 24 hours from Date.now
    },
    eventEndDate: {
        type: "number",
        default: 0, // toggling an option should set this to 48 hours from Date.now
    },


    // beginning of book-only attributes
    authorName: {
        type: 'string',
        default: '',
      },
    bookAuthorName: {
        type: "string",
        default: "",
    },
    isbn: {
        type: "string",
        default: "",
    },

    // end of book-only attributes
    cuisines: {
        // for restaurant
        type: "array",
        default: [], // should be an array of strings
    },
    phoneNumber: {
        type: "string",
        default: "",
    },
    priceRange: {
        type: "string",
        default: "",
    },
    appCategory: {
        // softwareapplication only
        type: "string",
        default: "",
    },
    operatingSystem: {
        // softwareapplication only
        type: "string",
        default: "",
    },
    provider: {
        // for course
        type: "string",
        default: "",
    },
    organizer: {
        type: "string",
        default: "",
    },
    performer: {
        type: "string",
        default: "",
    },
    eventPage: {
        type: "string",
        default: "",
    },
});


/***/ }),

/***/ "./src/blocks/review/attributes/style.mjs":
/*!************************************************!*\
  !*** ./src/blocks/review/attributes/style.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    background_used: {
        type: "string",
        default: "gradient"
    },
    background_color: {
        type: "string",
        default: ""
    },
    background_gradient: {
        type: "string",
        default: "linear-gradient(135deg, #c31432, #240b36)"
    },
    background_image: {
        type: "string",
        default: ""
    },
});


/***/ }),

/***/ "./src/blocks/review/config.mjs":
/*!**************************************!*\
  !*** ./src/blocks/review/config.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slug */ "./node_modules/slug/slug.js");
/* harmony import */ var _config_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.mjs */ "./src/config.mjs");
/* harmony import */ var _attributes_style_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes/style.mjs */ "./src/blocks/review/attributes/style.mjs");
/* harmony import */ var _attributes_scheme_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes/scheme.mjs */ "./src/blocks/review/attributes/scheme.mjs");






const NAME = "Review";

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
        title: {
            type: "string",
            default: "",
        },
        description: {
            type: "string",
            default: "",
        },
        pros: {
            type: "array",
            default: []
        },
        cons: {
            type: "array",
            default: []
        },
        breakdowns: {
            type: "array",
            default: []
        },
        ..._attributes_style_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
        ..._attributes_scheme_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
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
/*!*************************************!*\
  !*** ./src/blocks/review/block.jsx ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.mjs */ "./src/blocks/review/config.mjs");
/* harmony import */ var _edit_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit */ "./src/blocks/review/edit/edit.jsx");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/blocks/review/icon.jsx");
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
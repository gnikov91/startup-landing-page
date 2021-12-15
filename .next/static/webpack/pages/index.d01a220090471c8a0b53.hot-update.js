webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ \"./src/components/link.js\");\n/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.data */ \"./src/components/footer/footer.data.js\");\n/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/logo.svg */ \"./src/assets/logo.svg\");\n/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/gnikov/Documents/Code/React JS/bussiness_landing_page/src/components/footer/footer.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\nfunction Footer() {\n  var _this = this;\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"footer\", {\n    sx: styles.footer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 3\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 4\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.footer.footerBottomArea,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_link__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    path: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 6\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n    src: assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,\n    alt: \"Logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.footer.menus,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 6\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"nav\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, _footer_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"].menuItem.map(function (item, i) {\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_link__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      path: item.path,\n      key: i,\n      label: item.label,\n      sx: styles.footer.link,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }\n    });\n  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    sx: styles.footer.copyright,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 6\n    }\n  }, \"Copyright by \", new Date().getFullYear(), \" StartupLanding\"))));\n}\n_c = Footer;\nvar styles = {\n  footer: {\n    footerBottomArea: {\n      borderTop: '1px solid',\n      borderTopColor: 'border_color',\n      display: 'flex',\n      pt: [7, null, 8],\n      pb: ['40px', null, '100px'],\n      textAlign: 'center',\n      flexDirection: 'column'\n    },\n    menus: {\n      mt: [3, 4],\n      mb: 2,\n      nav: {\n        display: 'flex',\n        alignItems: 'center',\n        justifyContent: 'center',\n        flexWrap: 'wrap'\n      }\n    },\n    link: {\n      fontSize: [1, '15px'],\n      color: 'text',\n      fontWeight: '400',\n      mb: 2,\n      cursor: 'pointer',\n      transition: 'all 0.35s',\n      display: 'block',\n      textDecoration: 'none',\n      lineHeight: [1.5, null, 1.8],\n      px: [2, null, 4],\n      ':hover': {\n        color: 'primary'\n      }\n    },\n    copyright: {\n      fontSize: [1, '15px'],\n      width: '100%'\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcz83YzhiIl0sIm5hbWVzIjpbIkZvb3RlciIsInN0eWxlcyIsImZvb3RlciIsImZvb3RlckJvdHRvbUFyZWEiLCJGb290ZXJMb2dvIiwibWVudXMiLCJkYXRhIiwibWVudUl0ZW0iLCJtYXAiLCJpdGVtIiwiaSIsInBhdGgiLCJsYWJlbCIsImxpbmsiLCJjb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJib3JkZXJUb3AiLCJib3JkZXJUb3BDb2xvciIsImRpc3BsYXkiLCJwdCIsInBiIiwidGV4dEFsaWduIiwiZmxleERpcmVjdGlvbiIsIm10IiwibWIiLCJuYXYiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsImZvbnRTaXplIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsInRleHREZWNvcmF0aW9uIiwibGluZUhlaWdodCIsInB4Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUNoQyxTQUNDO0FBQVEsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxxREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxnQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLHFEQUFDLG9EQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLHFEQUFDLDhDQUFEO0FBQU8sT0FBRyxFQUFFQyxzREFBWjtBQUF3QixPQUFHLEVBQUMsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsRUFJQyxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUgsTUFBTSxDQUFDQyxNQUFQLENBQWNHLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VDLG9EQUFJLENBQUNDLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxXQUNsQixxREFBQyxvREFBRDtBQUNDLFVBQUksRUFBRUQsSUFBSSxDQUFDRSxJQURaO0FBRUMsU0FBRyxFQUFFRCxDQUZOO0FBR0MsV0FBSyxFQUFFRCxJQUFJLENBQUNHLEtBSGI7QUFJQyxRQUFFLEVBQUVYLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjVyxJQUpuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGtCO0FBQUEsR0FBbEIsQ0FERixDQURELENBSkQsRUFnQkMscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUVaLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWSxTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNlLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQURmLG9CQWhCRCxDQURELENBREQsQ0FERDtBQTBCQTtLQTNCdUJoQixNO0FBNkJ4QixJQUFNQyxNQUFNLEdBQUc7QUFDZEMsUUFBTSxFQUFFO0FBQ1BDLG9CQUFnQixFQUFFO0FBQ2pCYyxlQUFTLEVBQUUsV0FETTtBQUVqQkMsb0JBQWMsRUFBRSxjQUZDO0FBR2pCQyxhQUFPLEVBQUUsTUFIUTtBQUlqQkMsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLENBSmE7QUFLakJDLFFBQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsT0FBZixDQUxhO0FBTWpCQyxlQUFTLEVBQUUsUUFOTTtBQU9qQkMsbUJBQWEsRUFBRTtBQVBFLEtBRFg7QUFVUGxCLFNBQUssRUFBRTtBQUNObUIsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FERTtBQUVOQyxRQUFFLEVBQUUsQ0FGRTtBQUdOQyxTQUFHLEVBQUU7QUFDSlAsZUFBTyxFQUFFLE1BREw7QUFFSlEsa0JBQVUsRUFBRSxRQUZSO0FBR0pDLHNCQUFjLEVBQUUsUUFIWjtBQUlKQyxnQkFBUSxFQUFFO0FBSk47QUFIQyxLQVZBO0FBcUJQaEIsUUFBSSxFQUFFO0FBQ0xpQixjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksTUFBSixDQURMO0FBRUxDLFdBQUssRUFBRSxNQUZGO0FBR0xDLGdCQUFVLEVBQUUsS0FIUDtBQUlMUCxRQUFFLEVBQUUsQ0FKQztBQUtMUSxZQUFNLEVBQUUsU0FMSDtBQU1MQyxnQkFBVSxFQUFFLFdBTlA7QUFPTGYsYUFBTyxFQUFFLE9BUEo7QUFRTGdCLG9CQUFjLEVBQUUsTUFSWDtBQVNMQyxnQkFBVSxFQUFFLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxHQUFaLENBVFA7QUFVTEMsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLENBVkM7QUFXTCxnQkFBVTtBQUNUTixhQUFLLEVBQUU7QUFERTtBQVhMLEtBckJDO0FBb0NQakIsYUFBUyxFQUFFO0FBQ1ZnQixjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksTUFBSixDQURBO0FBRVZRLFdBQUssRUFBRTtBQUZHO0FBcENKO0FBRE0sQ0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIEltYWdlLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9mb290ZXIuZGF0YSdcbmltcG9ydCBGb290ZXJMb2dvIGZyb20gJ2Fzc2V0cy9sb2dvLnN2ZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxmb290ZXIgc3g9e3N0eWxlcy5mb290ZXJ9PlxuXHRcdFx0PENvbnRhaW5lcj5cblx0XHRcdFx0PEJveCBzeD17c3R5bGVzLmZvb3Rlci5mb290ZXJCb3R0b21BcmVhfT5cblx0XHRcdFx0XHQ8TGluayBwYXRoPScvJz5cblx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9e0Zvb3RlckxvZ299IGFsdD0nTG9nbycgLz5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PEJveCBzeD17c3R5bGVzLmZvb3Rlci5tZW51c30+XG5cdFx0XHRcdFx0XHQ8bmF2PlxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5tZW51SXRlbS5tYXAoKGl0ZW0sIGkpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0XHRcdFx0cGF0aD17aXRlbS5wYXRofVxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpfVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e2l0ZW0ubGFiZWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRzeD17c3R5bGVzLmZvb3Rlci5saW5rfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9uYXY+XG5cdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdFx0PFRleHQgc3g9e3N0eWxlcy5mb290ZXIuY29weXJpZ2h0fT5cblx0XHRcdFx0XHRcdENvcHlyaWdodCBieSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBTdGFydHVwTGFuZGluZ1xuXHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0PC9Cb3g+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHQ8L2Zvb3Rlcj5cblx0KVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGZvb3Rlcjoge1xuXHRcdGZvb3RlckJvdHRvbUFyZWE6IHtcblx0XHRcdGJvcmRlclRvcDogJzFweCBzb2xpZCcsXG5cdFx0XHRib3JkZXJUb3BDb2xvcjogJ2JvcmRlcl9jb2xvcicsXG5cdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRwdDogWzcsIG51bGwsIDhdLFxuXHRcdFx0cGI6IFsnNDBweCcsIG51bGwsICcxMDBweCddLFxuXHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0XHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuXHRcdH0sXG5cdFx0bWVudXM6IHtcblx0XHRcdG10OiBbMywgNF0sXG5cdFx0XHRtYjogMixcblx0XHRcdG5hdjoge1xuXHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdFx0XHRcdGZsZXhXcmFwOiAnd3JhcCcsXG5cdFx0XHR9LFxuXHRcdH0sXG5cblx0XHRsaW5rOiB7XG5cdFx0XHRmb250U2l6ZTogWzEsICcxNXB4J10sXG5cdFx0XHRjb2xvcjogJ3RleHQnLFxuXHRcdFx0Zm9udFdlaWdodDogJzQwMCcsXG5cdFx0XHRtYjogMixcblx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxuXHRcdFx0dHJhbnNpdGlvbjogJ2FsbCAwLjM1cycsXG5cdFx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdFx0dGV4dERlY29yYXRpb246ICdub25lJyxcblx0XHRcdGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIDEuOF0sXG5cdFx0XHRweDogWzIsIG51bGwsIDRdLFxuXHRcdFx0Jzpob3Zlcic6IHtcblx0XHRcdFx0Y29sb3I6ICdwcmltYXJ5Jyxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRjb3B5cmlnaHQ6IHtcblx0XHRcdGZvbnRTaXplOiBbMSwgJzE1cHgnXSxcblx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0fSxcblx0fSxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/footer/footer.js\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/drawer.js":
/*!**********************************!*\
  !*** ./src/components/drawer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Drawer; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-drawer */ \"./node_modules/rc-drawer/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/gnikov/Documents/Code/React JS/bussiness_landing_page/src/components/drawer.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nfunction Drawer(_ref) {\n  var className = _ref.className,\n      children = _ref.children,\n      closeButton = _ref.closeButton,\n      closeButtonStyle = _ref.closeButtonStyle,\n      drawerHandler = _ref.drawerHandler,\n      toggleHandler = _ref.toggleHandler,\n      open = _ref.open,\n      width = _ref.width,\n      placement = _ref.placement,\n      drawerStyle = _ref.drawerStyle,\n      closeBtnStyle = _ref.closeBtnStyle,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"className\", \"children\", \"closeButton\", \"closeButtonStyle\", \"drawerHandler\", \"toggleHandler\", \"open\", \"width\", \"placement\", \"drawerStyle\", \"closeBtnStyle\"]);\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(rc_drawer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    opne: open,\n    onClose: toggleHandler,\n    className: \"drawer \".concat(className || '').trim(),\n    width: width,\n    placement: placement,\n    handler: false,\n    level: null,\n    duration: '0.4s'\n  }, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 4\n    }\n  }), closeButton && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    as: \"div\",\n    onClick: toggleHandler,\n    sx: closeBtnStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 6\n    }\n  }, closeButton), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    sx: drawerStyle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, children)), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    className: \"drawer__handler\",\n    style: {\n      display: 'inline-block'\n    },\n    onClick: toggleHandler,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 4\n    }\n  }, drawerHandler));\n}\n_c = Drawer;\nDrawer.defaultProps = {\n  width: '320px',\n  placement: 'left'\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Drawer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZHJhd2VyLmpzPzI4NzAiXSwibmFtZXMiOlsiRHJhd2VyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJjbG9zZUJ1dHRvbiIsImNsb3NlQnV0dG9uU3R5bGUiLCJkcmF3ZXJIYW5kbGVyIiwidG9nZ2xlSGFuZGxlciIsIm9wZW4iLCJ3aWR0aCIsInBsYWNlbWVudCIsImRyYXdlclN0eWxlIiwiY2xvc2VCdG5TdHlsZSIsInByb3BzIiwidHJpbSIsImRpc3BsYXkiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsT0FhWjtBQUFBLE1BWkZDLFNBWUUsUUFaRkEsU0FZRTtBQUFBLE1BWEZDLFFBV0UsUUFYRkEsUUFXRTtBQUFBLE1BVkZDLFdBVUUsUUFWRkEsV0FVRTtBQUFBLE1BVEZDLGdCQVNFLFFBVEZBLGdCQVNFO0FBQUEsTUFSRkMsYUFRRSxRQVJGQSxhQVFFO0FBQUEsTUFQRkMsYUFPRSxRQVBGQSxhQU9FO0FBQUEsTUFORkMsSUFNRSxRQU5GQSxJQU1FO0FBQUEsTUFMRkMsS0FLRSxRQUxGQSxLQUtFO0FBQUEsTUFKRkMsU0FJRSxRQUpGQSxTQUlFO0FBQUEsTUFIRkMsV0FHRSxRQUhGQSxXQUdFO0FBQUEsTUFGRkMsYUFFRSxRQUZGQSxhQUVFO0FBQUEsTUFEQ0MsS0FDRDs7QUFDRixTQUNDLG1FQUNDLE1BQUMsaURBQUQ7QUFDQyxRQUFJLEVBQUVMLElBRFA7QUFFQyxXQUFPLEVBQUVELGFBRlY7QUFHQyxhQUFTLEVBQUUsaUJBQVVMLFNBQVMsSUFBSSxFQUF2QixFQUE0QlksSUFBNUIsRUFIWjtBQUlDLFNBQUssRUFBRUwsS0FKUjtBQUtDLGFBQVMsRUFBRUMsU0FMWjtBQU1DLFdBQU8sRUFBRSxLQU5WO0FBT0MsU0FBSyxFQUFFLElBUFI7QUFRQyxZQUFRLEVBQUU7QUFSWCxLQVNLRyxLQVRMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFXRVQsV0FBVyxJQUNYLE1BQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUMsS0FBUjtBQUFjLFdBQU8sRUFBRUcsYUFBdkI7QUFBc0MsTUFBRSxFQUFFSyxhQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VSLFdBREYsQ0FaRixFQWdCQyxNQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFTyxXQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUJSLFFBQXZCLENBaEJELENBREQsRUFtQkMsTUFBQyw0Q0FBRDtBQUNDLGFBQVMsRUFBQyxpQkFEWDtBQUVDLFNBQUssRUFBRTtBQUFFWSxhQUFPLEVBQUU7QUFBWCxLQUZSO0FBR0MsV0FBTyxFQUFFUixhQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRUQsYUFMRixDQW5CRCxDQUREO0FBNkJBO0tBM0N1QkwsTTtBQTZDeEJBLE1BQU0sQ0FBQ2UsWUFBUCxHQUFzQjtBQUNyQlAsT0FBSyxFQUFFLE9BRGM7QUFFckJDLFdBQVMsRUFBRTtBQUZVLENBQXRCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvZHJhd2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCBSY0RyYXdlciBmcm9tICdyYy1kcmF3ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyYXdlcih7XG5cdGNsYXNzTmFtZSxcblx0Y2hpbGRyZW4sXG5cdGNsb3NlQnV0dG9uLFxuXHRjbG9zZUJ1dHRvblN0eWxlLFxuXHRkcmF3ZXJIYW5kbGVyLFxuXHR0b2dnbGVIYW5kbGVyLFxuXHRvcGVuLFxuXHR3aWR0aCxcblx0cGxhY2VtZW50LFxuXHRkcmF3ZXJTdHlsZSxcblx0Y2xvc2VCdG5TdHlsZSxcblx0Li4ucHJvcHNcbn0pIHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PFJjRHJhd2VyXG5cdFx0XHRcdG9wbmU9e29wZW59XG5cdFx0XHRcdG9uQ2xvc2U9e3RvZ2dsZUhhbmRsZXJ9XG5cdFx0XHRcdGNsYXNzTmFtZT17YGRyYXdlciAke2NsYXNzTmFtZSB8fCAnJ31gLnRyaW0oKX1cblx0XHRcdFx0d2lkdGg9e3dpZHRofVxuXHRcdFx0XHRwbGFjZW1lbnQ9e3BsYWNlbWVudH1cblx0XHRcdFx0aGFuZGxlcj17ZmFsc2V9XG5cdFx0XHRcdGxldmVsPXtudWxsfVxuXHRcdFx0XHRkdXJhdGlvbj17JzAuNHMnfVxuXHRcdFx0XHR7Li4ucHJvcHN9XG5cdFx0XHQ+XG5cdFx0XHRcdHtjbG9zZUJ1dHRvbiAmJiAoXG5cdFx0XHRcdFx0PEJveCBhcz0nZGl2JyBvbkNsaWNrPXt0b2dnbGVIYW5kbGVyfSBzeD17Y2xvc2VCdG5TdHlsZX0+XG5cdFx0XHRcdFx0XHR7Y2xvc2VCdXR0b259XG5cdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdDxCb3ggc3g9e2RyYXdlclN0eWxlfT57Y2hpbGRyZW59PC9Cb3g+XG5cdFx0XHQ8L1JjRHJhd2VyPlxuXHRcdFx0PEJveFxuXHRcdFx0XHRjbGFzc05hbWU9J2RyYXdlcl9faGFuZGxlcidcblx0XHRcdFx0c3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX1cblx0XHRcdFx0b25DbGljaz17dG9nZ2xlSGFuZGxlcn1cblx0XHRcdD5cblx0XHRcdFx0e2RyYXdlckhhbmRsZXJ9XG5cdFx0XHQ8L0JveD5cblx0XHQ8Lz5cblx0KVxufVxuXG5EcmF3ZXIuZGVmYXVsdFByb3BzID0ge1xuXHR3aWR0aDogJzMyMHB4Jyxcblx0cGxhY2VtZW50OiAnbGVmdCcsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/drawer.js\n");

/***/ })

})
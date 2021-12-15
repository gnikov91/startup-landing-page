webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/team-card.js":
/*!*************************************!*\
  !*** ./src/components/team-card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TeamCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\nvar _jsxFileName = \"/Users/gnikov/Documents/Code/React JS/bussiness_landing_page/src/components/team-card.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\nfunction TeamCard(_ref) {\n  var _this = this;\n\n  var src = _ref.src,\n      altText = _ref.altText,\n      title = _ref.title,\n      designation = _ref.designation,\n      social = _ref.social;\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 3\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n    src: src,\n    alt: altText,\n    sx: styles.memberThumb,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 4\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    xs: styles.infoWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 4\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n    className: \"info__name\",\n    sx: styles.infoWrapper.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    className: \"info__designation\",\n    sx: styles.infoWrapper.designation,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, designation)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.socialShare,\n    className: \"social__share\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 4\n    }\n  }, social.map(function (item) {\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      key: item.id,\n      href: item.paht,\n      className: item.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 6\n      }\n    }, item.icon);\n  })));\n}\n_c = TeamCard;\nvar styles = {\n  card: {\n    display: 'flex',\n    alignItems: 'center',\n    flexDirection: 'column',\n    py: [0, null, 4, 5, 6],\n    px: [2, null, 6, 7],\n    transition: 'ease-in-out 0.4s',\n    borderRadius: '8px',\n    position: 'relative',\n    '&:hover': {\n      boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],\n      '.info__name': {\n        color: 'primary'\n      },\n      '.info__designation': {\n        color: 'primary'\n      },\n      '.social__share': {\n        opacity: 1,\n        a: {\n          my: 0,\n          py: [0, null, 1]\n        }\n      }\n    }\n  },\n  memberThumb: {\n    width: ['70px', '80px', '100px', null, null, '130px'],\n    height: ['70px', '80px', '100px', null, null, '130px'],\n    flexShrink: 0,\n    border: '2px solid',\n    borderColor: 'primary',\n    borderRadius: '50%'\n  },\n  infoWrapper: {\n    width: '100%',\n    textAlign: 'center',\n    mt: [3, null, 4],\n    name: {\n      fontSize: [1, 2, 3, null, null, 4],\n      fontWeight: 'bold',\n      lineHeight: [1.25, 1.35],\n      transition: 'color 0.25s',\n      mb: 1\n    },\n    designation: {\n      fontSize: ['14px', null, null, 2],\n      fontWeight: 'body',\n      lineHeight: 'heading',\n      color: 'text',\n      transition: 'color 0.25s'\n    }\n  },\n  socialShare: {\n    position: ['relative', null, 'absolute'],\n    right: [0, null, 6, null, 4, 6],\n    bottom: [0, null, '18px', 5],\n    width: ['100%', null, 'auto'],\n    display: 'flex',\n    flexDirection: ['row', null, 'column'],\n    alignItems: 'center',\n    justifyContent: 'center',\n    transition: 'all 0.25s',\n    opacity: [1, null, 0],\n    pt: 2,\n    a: {\n      fontSize: [0, 1, null, 2],\n      color: ['text', null, 'primary'],\n      lineHeight: '1em',\n      my: [0, null, '-2px'],\n      px: 1,\n      transition: 'all 0.25s',\n      '&:hover': {\n        color: ['primary', null, 'text']\n      }\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"TeamCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzPzNiMzkiXSwibmFtZXMiOlsiVGVhbUNhcmQiLCJzcmMiLCJhbHRUZXh0IiwidGl0bGUiLCJkZXNpZ25hdGlvbiIsInNvY2lhbCIsInN0eWxlcyIsImNhcmQiLCJtZW1iZXJUaHVtYiIsImluZm9XcmFwcGVyIiwibmFtZSIsInNvY2lhbFNoYXJlIiwibWFwIiwiaXRlbSIsImlkIiwicGFodCIsImljb24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJweSIsInB4IiwidHJhbnNpdGlvbiIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiYm94U2hhZG93IiwiY29sb3IiLCJvcGFjaXR5IiwiYSIsIm15Iiwid2lkdGgiLCJoZWlnaHQiLCJmbGV4U2hyaW5rIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJ0ZXh0QWxpZ24iLCJtdCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJtYiIsInJpZ2h0IiwiYm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJwdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxPQUFnRTtBQUFBOztBQUFBLE1BQTVDQyxHQUE0QyxRQUE1Q0EsR0FBNEM7QUFBQSxNQUF2Q0MsT0FBdUMsUUFBdkNBLE9BQXVDO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLE1BQXZCQyxXQUF1QixRQUF2QkEsV0FBdUI7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDOUUsU0FDQyxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MscURBQUMsOENBQUQ7QUFBTyxPQUFHLEVBQUVOLEdBQVo7QUFBaUIsT0FBRyxFQUFFQyxPQUF0QjtBQUErQixNQUFFLEVBQUVJLE1BQU0sQ0FBQ0UsV0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUMscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVGLE1BQU0sQ0FBQ0csV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLHFEQUFDLGdEQUFEO0FBQVMsYUFBUyxFQUFDLFlBQW5CO0FBQWdDLE1BQUUsRUFBRUgsTUFBTSxDQUFDRyxXQUFQLENBQW1CQyxJQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VQLEtBREYsQ0FERCxFQUlDLHFEQUFDLDZDQUFEO0FBQU0sYUFBUyxFQUFDLG1CQUFoQjtBQUFvQyxNQUFFLEVBQUVHLE1BQU0sQ0FBQ0csV0FBUCxDQUFtQkwsV0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFQSxXQURGLENBSkQsQ0FGRCxFQVVDLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFRSxNQUFNLENBQUNLLFdBQWhCO0FBQTZCLGFBQVMsRUFBQyxlQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VOLE1BQU0sQ0FBQ08sR0FBUCxDQUFXLFVBQUNDLElBQUQ7QUFBQSxXQUNYLHFEQUFDLDZDQUFEO0FBQU0sU0FBRyxFQUFFQSxJQUFJLENBQUNDLEVBQWhCO0FBQW9CLFVBQUksRUFBRUQsSUFBSSxDQUFDRSxJQUEvQjtBQUFxQyxlQUFTLEVBQUVGLElBQUksQ0FBQ0gsSUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFRyxJQUFJLENBQUNHLElBRFAsQ0FEVztBQUFBLEdBQVgsQ0FERixDQVZELENBREQ7QUFvQkE7S0FyQnVCaEIsUTtBQXVCeEIsSUFBTU0sTUFBTSxHQUFHO0FBQ2RDLE1BQUksRUFBRTtBQUNMVSxXQUFPLEVBQUUsTUFESjtBQUVMQyxjQUFVLEVBQUUsUUFGUDtBQUdMQyxpQkFBYSxFQUFFLFFBSFY7QUFJTEMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixDQUpDO0FBS0xDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FMQztBQU1MQyxjQUFVLEVBQUUsa0JBTlA7QUFPTEMsZ0JBQVksRUFBRSxLQVBUO0FBUUxDLFlBQVEsRUFBRSxVQVJMO0FBU0wsZUFBVztBQUNWQyxlQUFTLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLG9DQUFmLENBREQ7QUFFVixxQkFBZTtBQUNkQyxhQUFLLEVBQUU7QUFETyxPQUZMO0FBS1YsNEJBQXNCO0FBQ3JCQSxhQUFLLEVBQUU7QUFEYyxPQUxaO0FBUVYsd0JBQWtCO0FBQ2pCQyxlQUFPLEVBQUUsQ0FEUTtBQUVqQkMsU0FBQyxFQUFFO0FBQ0ZDLFlBQUUsRUFBRSxDQURGO0FBRUZULFlBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVjtBQUZGO0FBRmM7QUFSUjtBQVROLEdBRFE7QUE0QmRaLGFBQVcsRUFBRTtBQUNac0IsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsT0FBakIsRUFBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsRUFBc0MsT0FBdEMsQ0FESztBQUVaQyxVQUFNLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixPQUFqQixFQUEwQixJQUExQixFQUFnQyxJQUFoQyxFQUFzQyxPQUF0QyxDQUZJO0FBR1pDLGNBQVUsRUFBRSxDQUhBO0FBSVpDLFVBQU0sRUFBRSxXQUpJO0FBS1pDLGVBQVcsRUFBRSxTQUxEO0FBTVpYLGdCQUFZLEVBQUU7QUFORixHQTVCQztBQW9DZGQsYUFBVyxFQUFFO0FBQ1pxQixTQUFLLEVBQUUsTUFESztBQUVaSyxhQUFTLEVBQUUsUUFGQztBQUdaQyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsQ0FIUTtBQUlaMUIsUUFBSSxFQUFFO0FBQ0wyQixjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLENBQXRCLENBREw7QUFFTEMsZ0JBQVUsRUFBRSxNQUZQO0FBR0xDLGdCQUFVLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUhQO0FBSUxqQixnQkFBVSxFQUFFLGFBSlA7QUFLTGtCLFFBQUUsRUFBRTtBQUxDLEtBSk07QUFXWnBDLGVBQVcsRUFBRTtBQUNaaUMsY0FBUSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLENBQXJCLENBREU7QUFFWkMsZ0JBQVUsRUFBRSxNQUZBO0FBR1pDLGdCQUFVLEVBQUUsU0FIQTtBQUlaYixXQUFLLEVBQUUsTUFKSztBQUtaSixnQkFBVSxFQUFFO0FBTEE7QUFYRCxHQXBDQztBQXVEZFgsYUFBVyxFQUFFO0FBQ1phLFlBQVEsRUFBRSxDQUFDLFVBQUQsRUFBYSxJQUFiLEVBQW1CLFVBQW5CLENBREU7QUFFWmlCLFNBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLElBQWIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FGSztBQUdaQyxVQUFNLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLE1BQVYsRUFBa0IsQ0FBbEIsQ0FISTtBQUlaWixTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLE1BQWYsQ0FKSztBQUtaYixXQUFPLEVBQUUsTUFMRztBQU1aRSxpQkFBYSxFQUFFLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxRQUFkLENBTkg7QUFPWkQsY0FBVSxFQUFFLFFBUEE7QUFRWnlCLGtCQUFjLEVBQUUsUUFSSjtBQVNackIsY0FBVSxFQUFFLFdBVEE7QUFVWkssV0FBTyxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLENBVkc7QUFXWmlCLE1BQUUsRUFBRSxDQVhRO0FBWVpoQixLQUFDLEVBQUU7QUFDRlMsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxJQUFQLEVBQWEsQ0FBYixDQURSO0FBRUZYLFdBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsU0FBZixDQUZMO0FBR0ZhLGdCQUFVLEVBQUUsS0FIVjtBQUlGVixRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLE1BQVYsQ0FKRjtBQUtGUixRQUFFLEVBQUUsQ0FMRjtBQU1GQyxnQkFBVSxFQUFFLFdBTlY7QUFPRixpQkFBVztBQUNWSSxhQUFLLEVBQUUsQ0FBQyxTQUFELEVBQVksSUFBWixFQUFrQixNQUFsQjtBQURHO0FBUFQ7QUFaUztBQXZEQyxDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IFRleHQsIEhlYWRpbmcsIEltYWdlLCBCb3gsIExpbmsgfSBmcm9tICd0aGVtZS11aSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVhbUNhcmQoeyBzcmMsIGFsdFRleHQsIHRpdGxlLCBkZXNpZ25hdGlvbiwgc29jaWFsIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8Qm94IHN4PXtzdHlsZXMuY2FyZH0+XG5cdFx0XHQ8SW1hZ2Ugc3JjPXtzcmN9IGFsdD17YWx0VGV4dH0gc3g9e3N0eWxlcy5tZW1iZXJUaHVtYn0gLz5cblx0XHRcdDxCb3ggeHM9e3N0eWxlcy5pbmZvV3JhcHBlcn0+XG5cdFx0XHRcdDxIZWFkaW5nIGNsYXNzTmFtZT0naW5mb19fbmFtZScgc3g9e3N0eWxlcy5pbmZvV3JhcHBlci5uYW1lfT5cblx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdDwvSGVhZGluZz5cblx0XHRcdFx0PFRleHQgY2xhc3NOYW1lPSdpbmZvX19kZXNpZ25hdGlvbicgc3g9e3N0eWxlcy5pbmZvV3JhcHBlci5kZXNpZ25hdGlvbn0+XG5cdFx0XHRcdFx0e2Rlc2lnbmF0aW9ufVxuXHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHQ8L0JveD5cblx0XHRcdDxCb3ggc3g9e3N0eWxlcy5zb2NpYWxTaGFyZX0gY2xhc3NOYW1lPSdzb2NpYWxfX3NoYXJlJz5cblx0XHRcdFx0e3NvY2lhbC5tYXAoKGl0ZW0pID0+IChcblx0XHRcdFx0XHQ8TGluayBrZXk9e2l0ZW0uaWR9IGhyZWY9e2l0ZW0ucGFodH0gY2xhc3NOYW1lPXtpdGVtLm5hbWV9PlxuXHRcdFx0XHRcdFx0e2l0ZW0uaWNvbn1cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9Cb3g+XG5cdFx0PC9Cb3g+XG5cdClcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuXHRjYXJkOiB7XG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuXHRcdHB5OiBbMCwgbnVsbCwgNCwgNSwgNl0sXG5cdFx0cHg6IFsyLCBudWxsLCA2LCA3XSxcblx0XHR0cmFuc2l0aW9uOiAnZWFzZS1pbi1vdXQgMC40cycsXG5cdFx0Ym9yZGVyUmFkaXVzOiAnOHB4Jyxcblx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0XHQnJjpob3Zlcic6IHtcblx0XHRcdGJveFNoYWRvdzogWydub25lJywgbnVsbCwgJzAgNHB4IDEwcHggcmdiYSgzOSwgODMsIDEyMywgMC4xMiknXSxcblx0XHRcdCcuaW5mb19fbmFtZSc6IHtcblx0XHRcdFx0Y29sb3I6ICdwcmltYXJ5Jyxcblx0XHRcdH0sXG5cdFx0XHQnLmluZm9fX2Rlc2lnbmF0aW9uJzoge1xuXHRcdFx0XHRjb2xvcjogJ3ByaW1hcnknLFxuXHRcdFx0fSxcblx0XHRcdCcuc29jaWFsX19zaGFyZSc6IHtcblx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0YToge1xuXHRcdFx0XHRcdG15OiAwLFxuXHRcdFx0XHRcdHB5OiBbMCwgbnVsbCwgMV0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cblx0bWVtYmVyVGh1bWI6IHtcblx0XHR3aWR0aDogWyc3MHB4JywgJzgwcHgnLCAnMTAwcHgnLCBudWxsLCBudWxsLCAnMTMwcHgnXSxcblx0XHRoZWlnaHQ6IFsnNzBweCcsICc4MHB4JywgJzEwMHB4JywgbnVsbCwgbnVsbCwgJzEzMHB4J10sXG5cdFx0ZmxleFNocmluazogMCxcblx0XHRib3JkZXI6ICcycHggc29saWQnLFxuXHRcdGJvcmRlckNvbG9yOiAncHJpbWFyeScsXG5cdFx0Ym9yZGVyUmFkaXVzOiAnNTAlJyxcblx0fSxcblx0aW5mb1dyYXBwZXI6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdFx0bXQ6IFszLCBudWxsLCA0XSxcblx0XHRuYW1lOiB7XG5cdFx0XHRmb250U2l6ZTogWzEsIDIsIDMsIG51bGwsIG51bGwsIDRdLFxuXHRcdFx0Zm9udFdlaWdodDogJ2JvbGQnLFxuXHRcdFx0bGluZUhlaWdodDogWzEuMjUsIDEuMzVdLFxuXHRcdFx0dHJhbnNpdGlvbjogJ2NvbG9yIDAuMjVzJyxcblx0XHRcdG1iOiAxLFxuXHRcdH0sXG5cdFx0ZGVzaWduYXRpb246IHtcblx0XHRcdGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCBudWxsLCAyXSxcblx0XHRcdGZvbnRXZWlnaHQ6ICdib2R5Jyxcblx0XHRcdGxpbmVIZWlnaHQ6ICdoZWFkaW5nJyxcblx0XHRcdGNvbG9yOiAndGV4dCcsXG5cdFx0XHR0cmFuc2l0aW9uOiAnY29sb3IgMC4yNXMnLFxuXHRcdH0sXG5cdH0sXG5cdHNvY2lhbFNoYXJlOiB7XG5cdFx0cG9zaXRpb246IFsncmVsYXRpdmUnLCBudWxsLCAnYWJzb2x1dGUnXSxcblx0XHRyaWdodDogWzAsIG51bGwsIDYsIG51bGwsIDQsIDZdLFxuXHRcdGJvdHRvbTogWzAsIG51bGwsICcxOHB4JywgNV0sXG5cdFx0d2lkdGg6IFsnMTAwJScsIG51bGwsICdhdXRvJ10sXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdGZsZXhEaXJlY3Rpb246IFsncm93JywgbnVsbCwgJ2NvbHVtbiddLFxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblx0XHR0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcblx0XHRvcGFjaXR5OiBbMSwgbnVsbCwgMF0sXG5cdFx0cHQ6IDIsXG5cdFx0YToge1xuXHRcdFx0Zm9udFNpemU6IFswLCAxLCBudWxsLCAyXSxcblx0XHRcdGNvbG9yOiBbJ3RleHQnLCBudWxsLCAncHJpbWFyeSddLFxuXHRcdFx0bGluZUhlaWdodDogJzFlbScsXG5cdFx0XHRteTogWzAsIG51bGwsICctMnB4J10sXG5cdFx0XHRweDogMSxcblx0XHRcdHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxuXHRcdFx0JyY6aG92ZXInOiB7XG5cdFx0XHRcdGNvbG9yOiBbJ3ByaW1hcnknLCBudWxsLCAndGV4dCddLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/team-card.js\n");

/***/ })

})
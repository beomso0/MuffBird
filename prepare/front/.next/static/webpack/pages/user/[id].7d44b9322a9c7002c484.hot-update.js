webpackHotUpdate_N_E("pages/user/[id]",{

/***/ "./pages/user/[id].js":
/*!****************************!*\
  !*** ./pages/user/[id].js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/PostCard */ \"./components/PostCard.js\");\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/AppLayout */ \"./components/AppLayout.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/beomso0/Desktop/godev/birdSns/prepare/front/pages/user/[id].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar User = function User() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var id = router.query.id;\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      mainPosts = _useSelector.mainPosts,\n      hasMorePosts = _useSelector.hasMorePosts,\n      loadPostLoading = _useSelector.loadPostLoading;\n\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      userInfo = _useSelector2.userInfo;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var onScroll = function onScroll() {\n      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {\n        if (hasMorePosts && !loadPostLoading) {\n          dispatch({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[\"LOAD_USER_POSTS_REQUEST\"],\n            lastId: mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,\n            data: id\n          });\n        }\n      }\n    };\n\n    window.addEventListener('scroll', onScroll);\n    return function () {\n      window.removeEventListener('scroll', onScroll);\n    };\n  }, [mainPosts.length, hasMorePosts, id]);\n  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, userInfo && __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, userInfo.nickname, \"\\uB2D8\\uC758 \\uAE00\"), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"\".concat(userInfo.nickname, \"\\uB2D8\\uC758 \\uAC8C\\uC2DC\\uAE00\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: \"\".concat(userInfo.nickname, \"\\uB2D8\\uC758 \\uAC8C\\uC2DC\\uAE00\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: \"\".concat(userInfo.nickname, \"\\uB2D8\\uC758 \\uAC8C\\uC2DC\\uAE00\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:image\",\n    content: \"https://nodebird.com/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:url\",\n    content: \"https://nodebird.com/user/\".concat(id),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  })), userInfo ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n    actions: [__jsx(\"div\", {\n      key: \"twit\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 15\n      }\n    }, \"\\uC9F9\\uC9F9\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 17\n      }\n    }), userInfo.Posts), __jsx(\"div\", {\n      key: \"following\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 15\n      }\n    }, \"\\uD314\\uB85C\\uC789\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }\n    })), __jsx(\"div\", {\n      key: \"follower\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 15\n      }\n    }, \"\\uD314\\uB85C\\uC6CC\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 17\n      }\n    }))],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Meta, {\n    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 23\n      }\n    }, userInfo.nickname[0]),\n    title: userInfo.nickname,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  })) : null, mainPosts.map(function (post) {\n    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      key: post.id,\n      post: post,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 32\n      }\n    });\n  }));\n};\n\n_s(User, \"gpecXxb+UG4UqgtC0Z2gXbh9V6Y=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = User;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\nvar _c;\n\n$RefreshReg$(_c, \"User\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci8uanM/NDJiYiJdLCJuYW1lcyI6WyJVc2VyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0TG9hZGluZyIsInVzZXIiLCJ1c2VySW5mbyIsInVzZUVmZmVjdCIsIm9uU2Nyb2xsIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsInR5cGUiLCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCIsImxhc3RJZCIsImxlbmd0aCIsImRhdGEiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5pY2tuYW1lIiwiUG9zdHMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQVFDLEVBQVIsR0FBZUYsTUFBTSxDQUFDRyxLQUF0QixDQUFRRCxFQUFSOztBQUNBLHFCQUFxREUsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBaEU7QUFBQSxNQUFRQyxTQUFSLGdCQUFRQSxTQUFSO0FBQUEsTUFBbUJDLFlBQW5CLGdCQUFtQkEsWUFBbkI7QUFBQSxNQUFpQ0MsZUFBakMsZ0JBQWlDQSxlQUFqQzs7QUFDQSxzQkFBcUJMLCtEQUFXLENBQUMsVUFBQ0MsS0FB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QTtBQUFBLE1BRkYsQ0FYTyxDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FtQkUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxVQUFNLEVBQUUsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVNqQixRQUFRLENBQUNnQixRQUFULENBQWtCLENBQWxCLENBQVQsQ0FEVjtBQUVFLFNBQUssRUFBRWhCLFFBQVEsQ0FBQ2dCLFFBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkYsQ0FGSyxHQTJCTCxJQXpDTixFQTBDR3BCLFNBQVMsQ0FBQ3NCLEdBQVYsQ0FBYyxVQUFDdkIsSUFBRDtBQUFBLFdBQVUsTUFBQyw0REFBRDtBQUFVLFNBQUcsRUFBRUEsSUFBSSxDQUFDSixFQUFwQjtBQUF3QixVQUFJLEVBQUVJLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBVjtBQUFBLEdBQWQsQ0ExQ0gsQ0FERjtBQThDRCxDQXZFRDs7R0FBTVQsSTtVQUNhRSx1RCxFQUNGRSxxRCxFQUVzQ0csdUQsRUFDaENBLHVEOzs7S0FMakJQLEk7O0FBZ0dTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3VzZXIvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBBdmF0YXIsIENhcmQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IExPQURfVVNFUl9QT1NUU19SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcG9zdCc7XG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCwgTE9BRF9VU0VSX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy91c2VyJztcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uLy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xuXG5jb25zdCBVc2VyID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdHMsIGxvYWRQb3N0TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcbiAgY29uc3QgeyB1c2VySW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwKSB7XG4gICAgICAgIGlmIChoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0TG9hZGluZykge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19SRVFVRVNULFxuICAgICAgICAgICAgbGFzdElkOiBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aCAtIDFdICYmIG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0uaWQsXG4gICAgICAgICAgICBkYXRhOiBpZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbbWFpblBvc3RzLmxlbmd0aCwgaGFzTW9yZVBvc3RzLCBpZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPEFwcExheW91dD5cbiAgICAgIHt1c2VySW5mbyAmJiAoXG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgIHt1c2VySW5mby5uaWNrbmFtZX1cbiAgICAgICAgICAgIOuLmOydmCDquIBcbiAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Ake3VzZXJJbmZvLm5pY2tuYW1lfeuLmOydmCDqsozsi5zquIBgfSAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgJHt1c2VySW5mby5uaWNrbmFtZX3ri5jsnZgg6rKM7Iuc6riAYH0gLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17YCR7dXNlckluZm8ubmlja25hbWV964uY7J2YIOqyjOyLnOq4gGB9IC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL25vZGViaXJkLmNvbS9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgaHR0cHM6Ly9ub2RlYmlyZC5jb20vdXNlci8ke2lkfWB9IC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICl9XG4gICAgICB7dXNlckluZm9cbiAgICAgICAgPyAoXG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGFjdGlvbnM9e1tcbiAgICAgICAgICAgICAgPGRpdiBrZXk9XCJ0d2l0XCI+XG4gICAgICAgICAgICAgICAg7Ke57Ke5XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAge3VzZXJJbmZvLlBvc3RzfVxuICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgIDxkaXYga2V5PVwiZm9sbG93aW5nXCI+XG4gICAgICAgICAgICAgICAg7YyU66Gc7J6JXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgey8qIHt1c2VySW5mby5Gb2xsb3dpbmdzfSAqL31cbiAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2VyXCI+XG4gICAgICAgICAgICAgICAg7YyU66Gc7JuMXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgey8qIHt1c2VySW5mby5Gb2xsb3dlcnN9ICovfVxuICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkLk1ldGFcbiAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPnt1c2VySW5mby5uaWNrbmFtZVswXX08L0F2YXRhcj59XG4gICAgICAgICAgICAgIHRpdGxlPXt1c2VySW5mby5uaWNrbmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICApXG4gICAgICAgIDogbnVsbH1cbiAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPil9XG4gICAgPC9BcHBMYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xuICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xuICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XG4gIH1cbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XG4gICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXG4gICAgZGF0YTogY29udGV4dC5wYXJhbXMuaWQsXG4gIH0pO1xuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcbiAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcbiAgfSk7XG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xuICAgIHR5cGU6IExPQURfVVNFUl9SRVFVRVNULFxuICAgIGRhdGE6IGNvbnRleHQucGFyYW1zLmlkLFxuICB9KTtcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xuICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xuICBjb25zb2xlLmxvZygnZ2V0U3RhdGUnLCBjb250ZXh0LnN0b3JlLmdldFN0YXRlKCkucG9zdC5tYWluUG9zdHMpO1xuICByZXR1cm4geyBwcm9wczoge30gfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/[id].js\n");

/***/ })

})
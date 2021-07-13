webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequestAction\", function() { return loginRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutRequestAction\", function() { return logoutRequestAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar initialState = {\n  isLoggedIn: false,\n  isLoggingIn: false,\n  //로그인 시도 중.\n  isLoggingOut: false,\n  //로그아웃 시도 중.\n  me: null,\n  signUpData: {},\n  loginData: {}\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n  switch (action.type) {\n    case 'LOG_IN_REQUEST':\n      //saga에서 action type name에 맞게 지정.\n      return _objectSpread(_objectSpread({}, state), {}, {\n        //참조관계 유지\n        isLoggingIn: true //내가 바꾸고 싶은 부분만 수정\n\n      });\n\n    case 'LOG_IN_SUCCESS':\n      //saga에서 action type name에 맞게 지정.\n      return _objectSpread(_objectSpread({}, state), {}, {\n        //참조관계 유지\n        isLoggingIn: false,\n        isLoggedIn: true,\n        //내가 바꾸고 싶은 부분만 수정\n        me: _objectSpread(_objectSpread({}, action.data), {}, {\n          nickname: 'beomso0'\n        })\n      });\n\n    case 'LOG_IN_FAILURE':\n      //saga에서 action type name에 맞게 지정.\n      return _objectSpread(_objectSpread({}, state), {}, {\n        //참조관계 유지\n        isLoggingIn: false\n      });\n\n    case 'LOG_OUT_REQUEST':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        //참조관계 유지\n        isLoggingOut: true //내가 바꾸고 싶은 부분만 수정\n\n      });\n\n    case 'LOG_OUT_SUCCESS':\n      //saga에서 action type name에 맞게 지정.\n      return _objectSpread(_objectSpread({}, state), {}, {\n        //참조관계 유지\n        isLoggingOut: false,\n        //내가 바꾸고 싶은 부분만 수정\n        isLoggedIn: false,\n        me: null\n      });\n\n    case 'LOG_OUT_FAILURE':\n      //saga에서 action type name에 맞게 지정.\n      return _objectSpread(_objectSpread({}, state), {}, {\n        //참조관계 유지\n        isLoggingOut: false //내가 바꾸고 싶은 부분만 수정\n\n      });\n\n    default:\n      return state;\n  }\n}; //login action creator\n\n\nvar loginRequestAction = function loginRequestAction(data) {\n  return {\n    type: 'LOG_IN_REQUEST',\n    data: data\n  };\n}; //logout action\n\nvar logoutRequestAction = function logoutRequestAction() {\n  return {\n    type: 'LOG_OUT_REQUEST'\n  };\n}; //action creator //action은 객체임!!\n\nvar changeNickname = function changeNickname(data) {\n  return {\n    type: 'CHANE_NICKNAME',\n    data: data\n  };\n}; // --> store.dispatch(changeNickname('mama muffin'))\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcz8yYzA1Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlzTG9nZ2VkSW4iLCJpc0xvZ2dpbmdJbiIsImlzTG9nZ2luZ091dCIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJkYXRhIiwibmlja25hbWUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiY2hhbmdlTmlja25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxZQUFVLEVBQUUsS0FEWTtBQUV4QkMsYUFBVyxFQUFFLEtBRlc7QUFFSjtBQUNwQkMsY0FBWSxFQUFFLEtBSFU7QUFHSDtBQUNyQkMsSUFBRSxFQUFFLElBSm9CO0FBS3hCQyxZQUFVLEVBQUUsRUFMWTtBQU14QkMsV0FBUyxFQUFFO0FBTmEsQ0FBckI7O0FBU1AsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBbUM7QUFBQSxNQUFsQ0MsS0FBa0MsdUVBQTVCUixZQUE0QjtBQUFBLE1BQWRTLE1BQWMsdUVBQVAsRUFBTzs7QUFDL0MsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBSyxnQkFBTDtBQUF1QjtBQUNuQiw2Q0FDT0YsS0FEUDtBQUNjO0FBQ1ZOLG1CQUFXLEVBQUUsSUFGakIsQ0FFdUI7O0FBRnZCOztBQUlKLFNBQUssZ0JBQUw7QUFBdUI7QUFDbkIsNkNBQ09NLEtBRFA7QUFDYztBQUNWTixtQkFBVyxFQUFFLEtBRmpCO0FBR0lELGtCQUFVLEVBQUUsSUFIaEI7QUFHc0I7QUFDbEJHLFVBQUUsa0NBQU9LLE1BQU0sQ0FBQ0UsSUFBZDtBQUFvQkMsa0JBQVEsRUFBRTtBQUE5QjtBQUpOOztBQU1KLFNBQUssZ0JBQUw7QUFBdUI7QUFDbkIsNkNBQ09KLEtBRFA7QUFDYztBQUNWTixtQkFBVyxFQUFFO0FBRmpCOztBQUlKLFNBQUssaUJBQUw7QUFDSSw2Q0FDT00sS0FEUDtBQUNjO0FBQ1ZMLG9CQUFZLEVBQUUsSUFGbEIsQ0FFd0I7O0FBRnhCOztBQUlKLFNBQUssaUJBQUw7QUFBd0I7QUFDcEIsNkNBQ09LLEtBRFA7QUFDYztBQUNWTCxvQkFBWSxFQUFFLEtBRmxCO0FBRXlCO0FBQ3JCRixrQkFBVSxFQUFFLEtBSGhCO0FBSUlHLFVBQUUsRUFBRTtBQUpSOztBQU1KLFNBQUssaUJBQUw7QUFBd0I7QUFDcEIsNkNBQ09JLEtBRFA7QUFDYztBQUNWTCxvQkFBWSxFQUFFLEtBRmxCLENBRXlCOztBQUZ6Qjs7QUFJSjtBQUNJLGFBQU9LLEtBQVA7QUFwQ1I7QUFzQ0gsQ0F2Q0QsQyxDQXlDQTs7O0FBQ08sSUFBTUssa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDRixJQUFELEVBQVU7QUFDeEMsU0FBTztBQUNIRCxRQUFJLEVBQUUsZ0JBREg7QUFFSEMsUUFBSSxFQUFKQTtBQUZHLEdBQVA7QUFJSCxDQUxNLEMsQ0FPUDs7QUFDTyxJQUFNRyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDckMsU0FBTztBQUNISixRQUFJLEVBQUU7QUFESCxHQUFQO0FBR0gsQ0FKTSxDLENBTVA7O0FBQ0EsSUFBTUssY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDSixJQUFELEVBQVU7QUFDN0IsU0FBTztBQUNIRCxRQUFJLEVBQUUsZ0JBREg7QUFFSEMsUUFBSSxFQUFKQTtBQUZHLEdBQVA7QUFJSCxDQUxELEMsQ0FLRzs7O0FBRVlKLHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgIGlzTG9nZ2luZ0luOiBmYWxzZSwgLy/roZzqt7jsnbgg7Iuc64+EIOykkS5cclxuICAgIGlzTG9nZ2luZ091dDogZmFsc2UsIC8v66Gc6re47JWE7JuDIOyLnOuPhCDspJEuXHJcbiAgICBtZTogbnVsbCxcclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb249JycpID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkgeyAgICAgICAgXHJcbiAgICAgICAgY2FzZSAnTE9HX0lOX1JFUVVFU1QnOiAvL3NhZ2Hsl5DshJwgYWN0aW9uIHR5cGUgbmFtZeyXkCDrp57qsowg7KeA7KCVLlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIC8v7LC47KGw6rSA6rOEIOycoOyngFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnaW5nSW46IHRydWUsIC8v64K06rCAIOuwlOq+uOqzoCDsi7bsnYAg67aA67aE66eMIOyImOyglVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0xPR19JTl9TVUNDRVNTJzogLy9zYWdh7JeQ7IScIGFjdGlvbiB0eXBlIG5hbWXsl5Ag66ee6rKMIOyngOyglS5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCAvL+ywuOyhsOq0gOqzhCDsnKDsp4BcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ0luOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsIC8v64K06rCAIOuwlOq+uOqzoCDsi7bsnYAg67aA67aE66eMIOyImOyglVxyXG4gICAgICAgICAgICAgICAgbWU6IHsgLi4uYWN0aW9uLmRhdGEsIG5pY2tuYW1lOiAnYmVvbXNvMCcgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdMT0dfSU5fRkFJTFVSRSc6IC8vc2FnYeyXkOyEnCBhY3Rpb24gdHlwZSBuYW1l7JeQIOunnuqyjCDsp4DsoJUuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgLy/ssLjsobDqtIDqs4Qg7Jyg7KeAXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnTE9HX09VVF9SRVFVRVNUJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCAvL+ywuOyhsOq0gOqzhCDsnKDsp4BcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ091dDogdHJ1ZSwgLy/rgrTqsIAg67CU6r646rOgIOyLtuydgCDrtoDrtoTrp4wg7IiY7KCVXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnTE9HX09VVF9TVUNDRVNTJzogLy9zYWdh7JeQ7IScIGFjdGlvbiB0eXBlIG5hbWXsl5Ag66ee6rKMIOyngOyglS5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCAvL+ywuOyhsOq0gOqzhCDsnKDsp4BcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ091dDogZmFsc2UsIC8v64K06rCAIOuwlOq+uOqzoCDsi7bsnYAg67aA67aE66eMIOyImOyglVxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtZTogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdMT0dfT1VUX0ZBSUxVUkUnOiAvL3NhZ2Hsl5DshJwgYWN0aW9uIHR5cGUgbmFtZeyXkCDrp57qsowg7KeA7KCVLlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIC8v7LC47KGw6rSA6rOEIOycoOyngFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnaW5nT3V0OiBmYWxzZSwgLy/rgrTqsIAg67CU6r646rOgIOyLtuydgCDrtoDrtoTrp4wg7IiY7KCVXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbi8vbG9naW4gYWN0aW9uIGNyZWF0b3JcclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6ICdMT0dfSU5fUkVRVUVTVCcsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuLy9sb2dvdXQgYWN0aW9uXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAnTE9HX09VVF9SRVFVRVNUJyxcclxuICAgIH1cclxufVxyXG5cclxuLy9hY3Rpb24gY3JlYXRvciAvL2FjdGlvbuydgCDqsJ3ssrTsnoQhIVxyXG5jb25zdCBjaGFuZ2VOaWNrbmFtZSA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6ICdDSEFORV9OSUNLTkFNRScsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59OyAvLyAtLT4gc3RvcmUuZGlzcGF0Y2goY2hhbmdlTmlja25hbWUoJ21hbWEgbXVmZmluJykpXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ })

})
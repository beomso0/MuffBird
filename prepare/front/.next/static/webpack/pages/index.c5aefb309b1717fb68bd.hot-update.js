webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 //hydrate는 액션 중 하나 

var initialState = {
  //data구조 미리 잡아놓기
  post: {
    mainPosts: []
  }
}; //login action creator

var loginAction = function loginAction(data) {
  return {
    type: 'LOG_IN',
    data: data
  };
}; //logout action

var logoutAction = function logoutAction() {
  return {
    type: 'LOG_OUT'
  };
}; //action creator //action은 객체임!!

var changeNickname = function changeNickname(data) {
  return {
    type: 'CHANE_NICKNAME',
    data: data
  };
}; // --> store.dispatch(changeNickname('mama muffin'))


var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      console.log('HYDRATE', action);
      return _objectSpread(_objectSpread({}, state), action.payload);

    case 'LOG_IN':
      return _objectSpread(_objectSpread({}, state), {}, {
        //처음 객체 펴주기
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          //참조관계 유지
          isLoggedIn: true,
          //내가 바꾸고 싶은 부분만 수정
          user: action.data
        })
      });

    case 'LOG_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        //처음 객체 펴주기
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          //참조관계 유지
          isLoggedIn: false,
          //내가 바꾸고 싶은 부분만 수정
          user: null
        })
      });

    default:
      return state;
    // reducer 초기화 때도 rootReducer가 실행되기 때문에 default 동작도 지정해주어야 함.
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwicG9zdCIsIm1haW5Qb3N0cyIsImxvZ2luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRBY3Rpb24iLCJjaGFuZ2VOaWNrbmFtZSIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwiaXNMb2dnZWRJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQThDOztBQUU5QyxJQUFNQSxZQUFZLEdBQUc7QUFBRTtBQUVuQkMsTUFBSSxFQUFFO0FBQ0ZDLGFBQVMsRUFBRTtBQURUO0FBRlcsQ0FBckIsQyxDQU9BOztBQUNPLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBVTtBQUNqQyxTQUFPO0FBQ0hDLFFBQUksRUFBRSxRQURIO0FBRUhELFFBQUksRUFBSkE7QUFGRyxHQUFQO0FBSUgsQ0FMTSxDLENBT1A7O0FBQ08sSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUM5QixTQUFPO0FBQ0hELFFBQUksRUFBRTtBQURILEdBQVA7QUFHSCxDQUpNLEMsQ0FNUDs7QUFDQSxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNILElBQUQsRUFBVTtBQUM3QixTQUFPO0FBQ0hDLFFBQUksRUFBRSxnQkFESDtBQUVIRCxRQUFJLEVBQUpBO0FBRkcsR0FBUDtBQUlILENBTEQsQyxDQUtHOzs7QUFFSCxJQUFNSSxXQUFXLEdBQUksU0FBZkEsV0FBZSxHQUFnQztBQUFBLE1BQS9CQyxLQUErQix1RUFBekJULFlBQXlCO0FBQUEsTUFBWFUsTUFBVzs7QUFDakQsVUFBT0EsTUFBTSxDQUFDTCxJQUFkO0FBQ0ksU0FBS00sMERBQUw7QUFDSUMsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkgsTUFBdkI7QUFDQSw2Q0FBWUQsS0FBWixHQUFzQkMsTUFBTSxDQUFDSSxPQUE3Qjs7QUFFSixTQUFLLFFBQUw7QUFDSSw2Q0FDT0wsS0FEUDtBQUNjO0FBQ1ZNLFlBQUksa0NBQ0dOLEtBQUssQ0FBQ00sSUFEVDtBQUNlO0FBQ2ZDLG9CQUFVLEVBQUUsSUFGWjtBQUVrQjtBQUNsQkQsY0FBSSxFQUFFTCxNQUFNLENBQUNOO0FBSGI7QUFGUjs7QUFRSixTQUFLLFNBQUw7QUFDSSw2Q0FDT0ssS0FEUDtBQUNjO0FBQ1ZNLFlBQUksa0NBQ0dOLEtBQUssQ0FBQ00sSUFEVDtBQUNlO0FBQ2ZDLG9CQUFVLEVBQUUsS0FGWjtBQUVtQjtBQUNuQkQsY0FBSSxFQUFFO0FBSE47QUFGUjs7QUFRSjtBQUNJLGFBQU9OLEtBQVA7QUFBYztBQXhCdEI7QUEwQkgsQ0EzQkQ7O0FBNkJlRCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNWFlZmIzMDliMTcxN2ZiNjhiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjsgLy9oeWRyYXRl64qUIOyVoeyFmCDspJEg7ZWY64KYIFxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0geyAvL2RhdGHqtazsobAg66+466asIOyeoeyVhOuGk+q4sFxyXG4gICAgXHJcbiAgICBwb3N0OiB7XHJcbiAgICAgICAgbWFpblBvc3RzOiBbXSxcclxuICAgIH0sXHJcbn07XHJcblxyXG4vL2xvZ2luIGFjdGlvbiBjcmVhdG9yXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6ICdMT0dfSU4nLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vbG9nb3V0IGFjdGlvblxyXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAnTE9HX09VVCcsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vYWN0aW9uIGNyZWF0b3IgLy9hY3Rpb27snYAg6rCd7LK07J6EISFcclxuY29uc3QgY2hhbmdlTmlja25hbWUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAnQ0hBTkVfTklDS05BTUUnLFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufTsgLy8gLS0+IHN0b3JlLmRpc3BhdGNoKGNoYW5nZU5pY2tuYW1lKCdtYW1hIG11ZmZpbicpKVxyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcblxyXG4gICAgICAgIGNhc2UgJ0xPR19JTic6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgLy/sspjsnYwg6rCd7LK0IO2OtOyjvOq4sFxyXG4gICAgICAgICAgICAgICAgdXNlcjogeyAvL+y0iOq4sCDqsJ3ssrQg7JWI7JeQIOycoOyggCDqsJ3ssrQg7Y607KO86riwXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlciwgLy/ssLjsobDqtIDqs4Qg7Jyg7KeAXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSwgLy/rgrTqsIAg67CU6r646rOgIOyLtuydgCDrtoDrtoTrp4wg7IiY7KCVXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0xPR19PVVQnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIC8v7LKY7J2MIOqwneyytCDtjrTso7zquLBcclxuICAgICAgICAgICAgICAgIHVzZXI6IHsgLy/stIjquLAg6rCd7LK0IOyViOyXkCDsnKDsoIAg6rCd7LK0IO2OtOyjvOq4sFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXIsIC8v7LC47KGw6rSA6rOEIOycoOyngFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLCAvL+uCtOqwgCDrsJTqvrjqs6Ag7Iu27J2AIOu2gOu2hOunjCDsiJjsoJVcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlOyAvLyByZWR1Y2VyIOy0iOq4sO2ZlCDrlYzrj4Qgcm9vdFJlZHVjZXLqsIAg7Iuk7ZaJ65CY6riwIOuVjOusuOyXkCBkZWZhdWx0IOuPmeyekeuPhCDsp4DsoJXtlbTso7zslrTslbwg7ZWoLlxyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=
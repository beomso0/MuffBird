webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwicG9zdCIsIm1haW5Qb3N0cyIsImxvZ2luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRBY3Rpb24iLCJjaGFuZ2VOaWNrbmFtZSIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwiaXNMb2dnZWRJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQThDOztBQUU5QyxJQUFNQSxZQUFZLEdBQUc7QUFBRTtBQUVuQkMsTUFBSSxFQUFFO0FBQ0ZDLGFBQVMsRUFBRTtBQURUO0FBRlcsQ0FBckIsQyxDQU9BOztBQUNPLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBVTtBQUNqQyxTQUFPO0FBQ0hDLFFBQUksRUFBRSxRQURIO0FBRUhELFFBQUksRUFBSkE7QUFGRyxHQUFQO0FBSUgsQ0FMTSxDLENBT1A7O0FBQ08sSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUM5QixTQUFPO0FBQ0hELFFBQUksRUFBRTtBQURILEdBQVA7QUFHSCxDQUpNLEMsQ0FNUDs7QUFDQSxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNILElBQUQsRUFBVTtBQUM3QixTQUFPO0FBQ0hDLFFBQUksRUFBRSxnQkFESDtBQUVIRCxRQUFJLEVBQUpBO0FBRkcsR0FBUDtBQUlILENBTEQsQyxDQUtHOzs7QUFFSCxJQUFNSSxXQUFXLEdBQUksU0FBZkEsV0FBZSxHQUFnQztBQUFBLE1BQS9CQyxLQUErQix1RUFBekJULFlBQXlCO0FBQUEsTUFBWFUsTUFBVzs7QUFDakQsVUFBT0EsTUFBTSxDQUFDTCxJQUFkO0FBQ0ksU0FBS00sMERBQUw7QUFDSUMsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkgsTUFBdkI7QUFDQSw2Q0FBWUQsS0FBWixHQUFzQkMsTUFBTSxDQUFDSSxPQUE3Qjs7QUFFSixTQUFLLFFBQUw7QUFDSSw2Q0FDT0wsS0FEUDtBQUNjO0FBQ1ZNLFlBQUksa0NBQ0dOLEtBQUssQ0FBQ00sSUFEVDtBQUNlO0FBQ2ZDLG9CQUFVLEVBQUUsSUFGWjtBQUVrQjtBQUNsQkQsY0FBSSxFQUFFTCxNQUFNLENBQUNOO0FBSGI7QUFGUjs7QUFRSixTQUFLLFNBQUw7QUFDSSw2Q0FDT0ssS0FEUDtBQUNjO0FBQ1ZNLFlBQUksa0NBQ0dOLEtBQUssQ0FBQ00sSUFEVDtBQUNlO0FBQ2ZDLG9CQUFVLEVBQUUsS0FGWjtBQUVtQjtBQUNuQkQsY0FBSSxFQUFFO0FBSE47QUFGUjs7QUFRSjtBQUNJLGFBQU9OLEtBQVA7QUFBYztBQXhCdEI7QUEwQkgsQ0EzQkQ7O0FBNkJlRCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmM1YWVmYjMwOWIxNzE3ZmI2OGJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiOyAvL2h5ZHJhdGXripQg7JWh7IWYIOykkSDtlZjrgpggXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IC8vZGF0Yeq1rOyhsCDrr7jrpqwg7J6h7JWE64aT6riwXHJcbiAgICBcclxuICAgIHBvc3Q6IHtcclxuICAgICAgICBtYWluUG9zdHM6IFtdLFxyXG4gICAgfSxcclxufTtcclxuXHJcbi8vbG9naW4gYWN0aW9uIGNyZWF0b3JcclxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogJ0xPR19JTicsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuLy9sb2dvdXQgYWN0aW9uXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6ICdMT0dfT1VUJyxcclxuICAgIH1cclxufVxyXG5cclxuLy9hY3Rpb24gY3JlYXRvciAvL2FjdGlvbuydgCDqsJ3ssrTsnoQhIVxyXG5jb25zdCBjaGFuZ2VOaWNrbmFtZSA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6ICdDSEFORV9OSUNLTkFNRScsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59OyAvLyAtLT4gc3RvcmUuZGlzcGF0Y2goY2hhbmdlTmlja25hbWUoJ21hbWEgbXVmZmluJykpXHJcblxyXG5jb25zdCByb290UmVkdWNlciA9ICgoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuXHJcbiAgICAgICAgY2FzZSAnTE9HX0lOJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCAvL+yymOydjCDqsJ3ssrQg7Y607KO86riwXHJcbiAgICAgICAgICAgICAgICB1c2VyOiB7IC8v7LSI6riwIOqwneyytCDslYjsl5Ag7Jyg7KCAIOqwneyytCDtjrTso7zquLBcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyLCAvL+ywuOyhsOq0gOqzhCDsnKDsp4BcclxuICAgICAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLCAvL+uCtOqwgCDrsJTqvrjqs6Ag7Iu27J2AIOu2gOu2hOunjCDsiJjsoJVcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnTE9HX09VVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgLy/sspjsnYwg6rCd7LK0IO2OtOyjvOq4sFxyXG4gICAgICAgICAgICAgICAgdXNlcjogeyAvL+y0iOq4sCDqsJ3ssrQg7JWI7JeQIOycoOyggCDqsJ3ssrQg7Y607KO86riwXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlciwgLy/ssLjsobDqtIDqs4Qg7Jyg7KeAXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsIC8v64K06rCAIOuwlOq+uOqzoCDsi7bsnYAg67aA67aE66eMIOyImOyglVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7IC8vIHJlZHVjZXIg7LSI6riw7ZmUIOuVjOuPhCByb290UmVkdWNlcuqwgCDsi6TtlonrkJjquLAg65WM66y47JeQIGRlZmF1bHQg64+Z7J6R64+EIOyngOygle2VtOyjvOyWtOyVvCDtlaguXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==
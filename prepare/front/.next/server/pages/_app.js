module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\nvar _jsxFileName = \"/Users/beomso0/Desktop/godev/birdSns/prepare/front/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst NodeBird = ({\n  Component\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, __jsx(\"meta\", {\n    charSet: \"utf-8\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }), __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, \"NodeBird\")), __jsx(Component, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }));\n};\n\nNodeBird.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__[\"default\"].withRedux(NodeBird));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wdHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFtQjtBQUNoQyxTQUNJLG1FQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sV0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixDQURKLEVBS0ksTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQURKO0FBU0gsQ0FWRDs7QUFZQUQsUUFBUSxDQUFDRSxTQUFULEdBQXFCO0FBQ2pCRCxXQUFTLEVBQUVFLGlEQUFTLENBQUNDLFdBQVYsQ0FBc0JDO0FBRGhCLENBQXJCO0FBSWVDLDRIQUFPLENBQUNDLFNBQVIsQ0FBa0JQLFFBQWxCLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnXHJcbmltcG9ydCBQcm9wdHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5jb25zdCBOb2RlQmlyZCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCI+PC9tZXRhPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgPC8+ICAgICAgICBcclxuICAgIClcclxufTtcclxuXHJcbk5vZGVCaXJkLnByb3BUeXBlcyA9IHtcclxuICAgIENvbXBvbmVudDogUHJvcHR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChOb2RlQmlyZCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n //hydrate는 액션 중 하나 \n\n\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  index: (state = {}, action) => {\n    //이건 hydrate(서버사이드렌더링)을 위해 index 리듀서를 추가한 것.\n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n        console.log('HYDRATE', action);\n        return _objectSpread(_objectSpread({}, state), action.payload);\n\n      default:\n        return state;\n      // reducer 초기화 때도 rootReducer가 실행되기 때문에 default 동작도 지정해주어야 함.\n    }\n  },\n  user: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  post: _post__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztDQUE4Qzs7QUFDOUM7QUFFQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2hDQyxPQUFLLEVBQUUsQ0FBQ0MsS0FBSyxHQUFHLEVBQVQsRUFBYUMsTUFBYixLQUF3QjtBQUFFO0FBQzdCLFlBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFdBQUtDLDBEQUFMO0FBQ0lDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJKLE1BQXZCO0FBQ0EsK0NBQVlELEtBQVosR0FBc0JDLE1BQU0sQ0FBQ0ssT0FBN0I7O0FBQ0o7QUFDSSxlQUFPTixLQUFQO0FBQWM7QUFMdEI7QUFPSCxHQVQrQjtBQVVoQ08scURBVmdDO0FBV2hDQyxxREFBSUE7QUFYNEIsQ0FBRCxDQUFuQztBQWNlWCwwRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjsgLy9oeWRyYXRl64qUIOyVoeyFmCDspJEg7ZWY64KYIFxyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4geyAvL+ydtOqxtCBoeWRyYXRlKOyEnOuyhOyCrOydtOuTnOugjOuNlOungSnsnYQg7JyE7ZW0IGluZGV4IOumrOuTgOyEnOulvCDstpTqsIDtlZwg6rKDLlxyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTsgICAgXHJcbiAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlOyAvLyByZWR1Y2VyIOy0iOq4sO2ZlCDrlYzrj4Qgcm9vdFJlZHVjZXLqsIAg7Iuk7ZaJ65CY6riwIOuVjOusuOyXkCBkZWZhdWx0IOuPmeyekeuPhCDsp4DsoJXtlbTso7zslrTslbwg7ZWoLlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG4gICAgcG9zdCwgICAgXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: 'beomso0'\n    },\n    content: '첫번째 게시글 #해시태그 #하이하이',\n    Images: [{\n      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'\n    }, {\n      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'\n    }, {\n      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'\n    }],\n    Comments: [{\n      User: {\n        nickname: 'beomso0'\n      },\n      content: 'Great!'\n    }, {\n      User: {\n        nickname: 'muffin'\n      },\n      content: 'hihi'\n    }]\n  }],\n  imagePaths: [],\n  postAdded: false //게시 완료되면 true\n\n};\nconst ADD_POST = 'ADD_POST';\nconst addPost = {\n  type: ADD_POST // 이렇게 빼주면 reducer에서 재활용 가능\n\n};\nconst dummyPost = {\n  id: 2,\n  content: 'dummdumm',\n  User: {\n    id: 1,\n    nickname: '뭉수'\n  },\n  Images: [],\n  Comments: []\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost, ...state.mainPosts],\n        //앞에다 추가를 해야 위에 올라감.\n        postAdded: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzP2E3ZTMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiQUREX1BPU1QiLCJhZGRQb3N0IiwidHlwZSIsImR1bW15UG9zdCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQU8sTUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUUsQ0FBQztBQUNSQyxNQUFFLEVBQUUsQ0FESTtBQUVSQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFDLENBREQ7QUFFRkUsY0FBUSxFQUFFO0FBRlIsS0FGRTtBQU1SQyxXQUFPLEVBQUUscUJBTkQ7QUFPUkMsVUFBTSxFQUFFLENBQUM7QUFDTEMsU0FBRyxFQUFFO0FBREEsS0FBRCxFQUVMO0FBQ0NBLFNBQUcsRUFBRTtBQUROLEtBRkssRUFJTDtBQUNDQSxTQUFHLEVBQUU7QUFETixLQUpLLENBUEE7QUFjUkMsWUFBUSxFQUFFLENBQUM7QUFDUEwsVUFBSSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUU7QUFEUixPQURDO0FBSVBDLGFBQU8sRUFBRTtBQUpGLEtBQUQsRUFLUDtBQUNDRixVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRTtBQURSLE9BRFA7QUFJQ0MsYUFBTyxFQUFFO0FBSlYsS0FMTztBQWRGLEdBQUQsQ0FEYTtBQTJCeEJJLFlBQVUsRUFBRSxFQTNCWTtBQTRCeEJDLFdBQVMsRUFBRSxLQTVCYSxDQTRCTjs7QUE1Qk0sQ0FBckI7QUErQlAsTUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBRU8sTUFBTUMsT0FBTyxHQUFHO0FBQ25CQyxNQUFJLEVBQUVGLFFBRGEsQ0FDSDs7QUFERyxDQUFoQjtBQUlQLE1BQU1HLFNBQVMsR0FBRztBQUNkWixJQUFFLEVBQUUsQ0FEVTtBQUVkRyxTQUFPLEVBQUUsVUFGSztBQUdkRixNQUFJLEVBQUU7QUFDRkQsTUFBRSxFQUFFLENBREY7QUFFRkUsWUFBUSxFQUFFO0FBRlIsR0FIUTtBQU9kRSxRQUFNLEVBQUUsRUFQTTtBQVFkRSxVQUFRLEVBQUU7QUFSSSxDQUFsQjs7QUFXQSxNQUFNTyxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFDaEIsWUFBUCxFQUFxQmlCLE1BQXJCLEtBQWdDO0FBQzVDLFVBQU9BLE1BQU0sQ0FBQ0osSUFBZDtBQUNJLFNBQUtGLFFBQUw7QUFDSSw2Q0FDT0ssS0FEUDtBQUVJZixpQkFBUyxFQUFFLENBQUNhLFNBQUQsRUFBWSxHQUFHRSxLQUFLLENBQUNmLFNBQXJCLENBRmY7QUFFZ0Q7QUFDNUNTLGlCQUFTLEVBQUU7QUFIZjs7QUFLSjtBQUNJLGFBQU9NLEtBQVA7QUFSUjtBQVVILENBWEQ7O0FBYWVELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFt7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ2Jlb21zbzAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogJ+yyq+uyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7ZWY7J207ZWY7J20JyxcclxuICAgICAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VkYXRlPTIwMTgwNzI2JyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZycsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5OTgvcm5fdmlld19CTjAwMTk5OC5qcGcnLFxyXG4gICAgICAgIH0sXSxcclxuICAgICAgICBDb21tZW50czogW3tcclxuICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICdiZW9tc28wJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ0dyZWF0ISdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnbXVmZmluJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ2hpaGknLFxyXG4gICAgICAgIH1dLFxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIHBvc3RBZGRlZDogZmFsc2UsIC8v6rKM7IucIOyZhOujjOuQmOuptCB0cnVlXHJcbn07XHJcblxyXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcclxuICAgIHR5cGU6IEFERF9QT1NULCAvLyDsnbTroIfqsowg67m87KO866m0IHJlZHVjZXLsl5DshJwg7J6s7Zmc7JqpIOqwgOuKpVxyXG59XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSB7XHJcbiAgICBpZDogMixcclxuICAgIGNvbnRlbnQ6ICdkdW1tZHVtbScsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICfrrYnsiJgnXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOiBbXSxcclxuICAgIENvbW1lbnRzOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1Q6IFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sIC8v7JWe7JeQ64ukIOy2lOqwgOulvCDtlbTslbwg7JyE7JeQIOyYrOudvOqwkC5cclxuICAgICAgICAgICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAction\", function() { return loginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutAction\", function() { return logoutAction; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  isLoggedIn: false,\n  me: null,\n  signUpData: {},\n  loginData: {}\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'LOG_IN':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        //참조관계 유지\n        isLoggedIn: true,\n        //내가 바꾸고 싶은 부분만 수정\n        me: action.data\n      });\n\n    case 'LOG_OUT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        //참조관계 유지\n        isLoggedIn: false,\n        //내가 바꾸고 싶은 부분만 수정\n        me: null\n      });\n\n    default:\n      return state;\n  }\n}; //login action creator\n\n\nconst loginAction = data => {\n  return {\n    type: 'LOG_IN',\n    data\n  };\n}; //logout action\n\nconst logoutAction = () => {\n  return {\n    type: 'LOG_OUT'\n  };\n}; //action creator //action은 객체임!!\n\nconst changeNickname = data => {\n  return {\n    type: 'CHANE_NICKNAME',\n    data\n  };\n}; // --> store.dispatch(changeNickname('mama muffin'))\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzPzJjMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJkYXRhIiwibG9naW5BY3Rpb24iLCJsb2dvdXRBY3Rpb24iLCJjaGFuZ2VOaWNrbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFPLE1BQU1BLFlBQVksR0FBRztBQUN4QkMsWUFBVSxFQUFFLEtBRFk7QUFFeEJDLElBQUUsRUFBRSxJQUZvQjtBQUd4QkMsWUFBVSxFQUFFLEVBSFk7QUFJeEJDLFdBQVMsRUFBRTtBQUphLENBQXJCOztBQU9QLE1BQU1DLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEdBQUNOLFlBQVAsRUFBcUJPLE1BQXJCLEtBQWdDO0FBQzVDLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFNBQUssUUFBTDtBQUNJLDZDQUNPRixLQURQO0FBQ2M7QUFDVkwsa0JBQVUsRUFBRSxJQUZoQjtBQUVzQjtBQUNsQkMsVUFBRSxFQUFFSyxNQUFNLENBQUNFO0FBSGY7O0FBS0osU0FBSyxTQUFMO0FBQ0ksNkNBQ09ILEtBRFA7QUFDYztBQUNWTCxrQkFBVSxFQUFFLEtBRmhCO0FBRXVCO0FBQ25CQyxVQUFFLEVBQUU7QUFIUjs7QUFLSjtBQUNJLGFBQU9JLEtBQVA7QUFkUjtBQWdCSCxDQWpCRCxDLENBbUJBOzs7QUFDTyxNQUFNSSxXQUFXLEdBQUlELElBQUQsSUFBVTtBQUNqQyxTQUFPO0FBQ0hELFFBQUksRUFBRSxRQURIO0FBRUhDO0FBRkcsR0FBUDtBQUlILENBTE0sQyxDQU9QOztBQUNPLE1BQU1FLFlBQVksR0FBRyxNQUFNO0FBQzlCLFNBQU87QUFDSEgsUUFBSSxFQUFFO0FBREgsR0FBUDtBQUdILENBSk0sQyxDQU1QOztBQUNBLE1BQU1JLGNBQWMsR0FBSUgsSUFBRCxJQUFVO0FBQzdCLFNBQU87QUFDSEQsUUFBSSxFQUFFLGdCQURIO0FBRUhDO0FBRkcsR0FBUDtBQUlILENBTEQsQyxDQUtHOzs7QUFFWUosc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgbWU6IG51bGwsXHJcbiAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHsgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ0xPR19JTic6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgLy/ssLjsobDqtIDqs4Qg7Jyg7KeAXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLCAvL+uCtOqwgCDrsJTqvrjqs6Ag7Iu27J2AIOu2gOu2hOunjCDsiJjsoJVcclxuICAgICAgICAgICAgICAgIG1lOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdMT0dfT1VUJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCAvL+ywuOyhsOq0gOqzhCDsnKDsp4BcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLCAvL+uCtOqwgCDrsJTqvrjqs6Ag7Iu27J2AIOu2gOu2hOunjCDsiJjsoJVcclxuICAgICAgICAgICAgICAgIG1lOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vL2xvZ2luIGFjdGlvbiBjcmVhdG9yXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6ICdMT0dfSU4nLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vbG9nb3V0IGFjdGlvblxyXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAnTE9HX09VVCcsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vYWN0aW9uIGNyZWF0b3IgLy9hY3Rpb27snYAg6rCd7LK07J6EISFcclxuY29uc3QgY2hhbmdlTmlja25hbWUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAnQ0hBTkVfTklDS05BTUUnLFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufTsgLy8gLS0+IHN0b3JlLmRpc3BhdGNoKGNoYW5nZU5pY2tuYW1lKCdtYW1hIG11ZmZpbicpKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n// *가 붙은 genrator 함수는 yield; 까지 실행하고, 그 다음에 .next() 해주면 그 다음 yield까지를 실행함.\n// 중단점이 있는 함수! 원래 js 는 중단점이 없는데, gen 함수는 있음\n// 이 성질을 활용한 것이 saga임.\n// eventListener처럼 활용 가능\n\n\n\nfunction logInAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', data);\n}\n\nfunction* logIn(action) {\n  try {\n    // const result = yield call(logInAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(1000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: 'LOG_IN_SUCCESS' // data: result.data,\n\n    });\n  } catch (err) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      // put은 dispatch와 거의 같음.\n      type: 'LOG_IN_FAILURE' // data: err.response.data,\n\n    });\n  }\n}\n\nfunction logOutAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/logout');\n}\n\nfunction* logOut() {\n  try {\n    // const result = yield call(logOutAPI);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(1000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: 'LOG_OUT_SUCCESS' // data: result.data,\n\n    });\n  } catch (err) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      // put은 dispatch와 거의 같음.\n      type: 'LOG_OUT_FAILURE' // data: err.response.data,\n\n    });\n  }\n}\n\nfunction addPostAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/post', data);\n}\n\nfunction* addPost(action) {\n  try {\n    // const result = yield call(addPostAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(1000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: 'ADD_POST_SUCCESS' // data: result.data,\n\n    });\n  } catch (err) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      // put은 dispatch와 거의 같음.\n      type: 'ADD_POST_FAILURE' // data: err.response.data,\n\n    });\n  }\n} //call은 동기 함수라서 결과 올떄까지 기다림 <-> fork는 비동기 함수 요청이라서, 결과 기다리지 않고 바로 다음줄 실행.\n// yield는 await이랑 비슷한 역할이라고 생각해도 됨.\n\n\nfunction* watchLogIn() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])('LOG_IN_REQUEST', logIn); //LOG_IN이 들어오면 logIn을 실행하는 일종의 이벤트리스너?\n} //take의 치명적 단점은 한 번 밖에 listend을 안한다는 것. --> 그래서 while true로 감쌈. or takeEvery 사용\n\n\nfunction* watchLogOut() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])('LOG_OUT_REQUEST', logOut); //takeLeading은 첫번째꺼\n}\n\nfunction* watchAddPost() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])('ADD_POST_REQUEST', addPost);\n}\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLogIn), //fork는 함수를 실행하는 것. \n  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLogOut), //근데 call이랑은 다름. then, how different?\n  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchAddPost)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcz83N2UzIl0sIm5hbWVzIjpbImxvZ0luQVBJIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsImxvZ0luIiwiYWN0aW9uIiwiZGVsYXkiLCJwdXQiLCJ0eXBlIiwiZXJyIiwibG9nT3V0QVBJIiwibG9nT3V0IiwiYWRkUG9zdEFQSSIsImFkZFBvc3QiLCJ3YXRjaExvZ0luIiwidGFrZUxhdGVzdCIsIndhdGNoTG9nT3V0Iiwid2F0Y2hBZGRQb3N0Iiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDcEIsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsRUFBeUJGLElBQXpCLENBQVA7QUFDSDs7QUFFRCxVQUFVRyxLQUFWLENBQWdCQyxNQUFoQixFQUF3QjtBQUNwQixNQUFHO0FBQ0M7QUFDQSxVQUFNQyxnRUFBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFVBQU1DLDhEQUFHLENBQUM7QUFDTkMsVUFBSSxFQUFFLGdCQURBLENBRU47O0FBRk0sS0FBRCxDQUFUO0FBSUgsR0FQRCxDQU9FLE9BQU9DLEdBQVAsRUFBWTtBQUNWLFVBQU1GLDhEQUFHLENBQUM7QUFBRTtBQUNSQyxVQUFJLEVBQUUsZ0JBREEsQ0FFTjs7QUFGTSxLQUFELENBQVQ7QUFJSDtBQUNKOztBQUVELFNBQVNFLFNBQVQsR0FBcUI7QUFDakIsU0FBT1IsNENBQUssQ0FBQ0MsSUFBTixDQUFXLGFBQVgsQ0FBUDtBQUNIOztBQUVELFVBQVVRLE1BQVYsR0FBbUI7QUFDZixNQUFHO0FBQ0M7QUFDQSxVQUFNTCxnRUFBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFVBQU1DLDhEQUFHLENBQUM7QUFDTkMsVUFBSSxFQUFFLGlCQURBLENBRU47O0FBRk0sS0FBRCxDQUFUO0FBSUgsR0FQRCxDQU9FLE9BQU9DLEdBQVAsRUFBWTtBQUNWLFVBQU1GLDhEQUFHLENBQUM7QUFBRTtBQUNSQyxVQUFJLEVBQUUsaUJBREEsQ0FFTjs7QUFGTSxLQUFELENBQVQ7QUFJSDtBQUNKOztBQUVELFNBQVNJLFVBQVQsQ0FBb0JYLElBQXBCLEVBQTBCO0FBQ3RCLFNBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxXQUFYLEVBQXdCRixJQUF4QixDQUFQO0FBQ0g7O0FBRUQsVUFBVVksT0FBVixDQUFrQlIsTUFBbEIsRUFBMEI7QUFDdEIsTUFBRztBQUNDO0FBQ0EsVUFBTUMsZ0VBQUssQ0FBQyxJQUFELENBQVg7QUFDQSxVQUFNQyw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRSxrQkFEQSxDQUVOOztBQUZNLEtBQUQsQ0FBVDtBQUlILEdBUEQsQ0FPRSxPQUFPQyxHQUFQLEVBQVk7QUFDVixVQUFNRiw4REFBRyxDQUFDO0FBQUU7QUFDUkMsVUFBSSxFQUFFLGtCQURBLENBRU47O0FBRk0sS0FBRCxDQUFUO0FBSUg7QUFDSixDLENBRUQ7QUFDQTs7O0FBRUEsVUFBVU0sVUFBVixHQUF1QjtBQUNuQixRQUFNQyxxRUFBVSxDQUFDLGdCQUFELEVBQW1CWCxLQUFuQixDQUFoQixDQURtQixDQUN3QjtBQUM5QyxDLENBQUM7OztBQUVGLFVBQVVZLFdBQVYsR0FBd0I7QUFDcEIsUUFBTUQscUVBQVUsQ0FBQyxpQkFBRCxFQUFvQkosTUFBcEIsQ0FBaEIsQ0FEb0IsQ0FDeUI7QUFDaEQ7O0FBRUQsVUFBVU0sWUFBVixHQUF5QjtBQUNyQixRQUFNRixxRUFBVSxDQUFDLGtCQUFELEVBQXFCRixPQUFyQixDQUFoQjtBQUNIOztBQUVjLFVBQVVLLFFBQVYsR0FBcUI7QUFDaEMsUUFBTUMsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDTixVQUFELENBREUsRUFDWTtBQUNsQk0saUVBQUksQ0FBQ0osV0FBRCxDQUZFLEVBRWE7QUFDbkJJLGlFQUFJLENBQUNILFlBQUQsQ0FIRSxDQUFELENBQVQ7QUFLSCIsImZpbGUiOiIuL3NhZ2FzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKuqwgCDrtpnsnYAgZ2VucmF0b3Ig7ZWo7IiY64qUIHlpZWxkOyDquYzsp4Ag7Iuk7ZaJ7ZWY6rOgLCDqt7gg64uk7J2M7JeQIC5uZXh0KCkg7ZW07KO866m0IOq3uCDri6TsnYwgeWllbGTquYzsp4Drpbwg7Iuk7ZaJ7ZWoLlxuLy8g7KSR64uo7KCQ7J20IOyeiOuKlCDtlajsiJghIOybkOuemCBqcyDripQg7KSR64uo7KCQ7J20IOyXhuuKlOuNsCwgZ2VuIO2VqOyImOuKlCDsnojsnYxcbi8vIOydtCDshLHsp4jsnYQg7Zmc7Jqp7ZWcIOqyg+ydtCBzYWdh7J6ELlxuLy8gZXZlbnRMaXN0ZW5lcuyymOufvCDtmZzsmqkg6rCA64qlXG5cbmltcG9ydCB7IGFsbCwgZm9yaywgY2FsbCwgdGFrZSwgcHV0LCB0YWtlRXZlcnksIHRha2VMYXRlc3QsIHRocm90dGxlLCBkZWxheSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xuICAgIHRyeXtcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcbiAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgIHR5cGU6ICdMT0dfSU5fU1VDQ0VTUycsXG4gICAgICAgICAgICAvLyBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydgCBkaXNwYXRjaOyZgCDqsbDsnZgg6rCZ7J2MLlxuICAgICAgICAgICAgdHlwZTogJ0xPR19JTl9GQUlMVVJFJyxcbiAgICAgICAgICAgIC8vIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgICAgICB9KTtcbiAgICB9ICAgIFxufVxuXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0Jyk7XG59XG5cbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XG4gICAgdHJ5e1xuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xuICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgdHlwZTogJ0xPR19PVVRfU1VDQ0VTUycsXG4gICAgICAgICAgICAvLyBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydgCBkaXNwYXRjaOyZgCDqsbDsnZgg6rCZ7J2MLlxuICAgICAgICAgICAgdHlwZTogJ0xPR19PVVRfRkFJTFVSRScsXG4gICAgICAgICAgICAvLyBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgfSk7XG4gICAgfSAgICBcbn1cblxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcbiAgICB0cnl7XG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcbiAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgIHR5cGU6ICdBRERfUE9TVF9TVUNDRVNTJyxcbiAgICAgICAgICAgIC8vIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgeWllbGQgcHV0KHsgLy8gcHV07J2AIGRpc3BhdGNo7JmAIOqxsOydmCDqsJnsnYwuXG4gICAgICAgICAgICB0eXBlOiAnQUREX1BPU1RfRkFJTFVSRScsXG4gICAgICAgICAgICAvLyBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgfSk7XG4gICAgfSAgICBcbn1cblxuLy9jYWxs7J2AIOuPmeq4sCDtlajsiJjrnbzshJwg6rKw6rO8IOyYrOuWhOq5jOyngCDquLDri6TrprwgPC0+IGZvcmvripQg67mE64+Z6riwIO2VqOyImCDsmpTssq3snbTrnbzshJwsIOqysOqzvCDquLDri6Trpqzsp4Ag7JWK6rOgIOuwlOuhnCDri6TsnYzspIQg7Iuk7ZaJLlxuLy8geWllbGTripQgYXdhaXTsnbTrnpEg67mE7Iq37ZWcIOyXre2VoOydtOudvOqzoCDsg53qsIHtlbTrj4Qg65CoLlxuXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KCdMT0dfSU5fUkVRVUVTVCcsIGxvZ0luKTsgLy9MT0dfSU7snbQg65Ok7Ja07Jik66m0IGxvZ0lu7J2EIOyLpO2Wie2VmOuKlCDsnbzsooXsnZgg7J2067Kk7Yq466as7Iqk64SIP1xufSAvL3Rha2XsnZgg7LmY66qF7KCBIOuLqOygkOydgCDtlZwg67KIIOuwluyXkCBsaXN0ZW5k7J2EIOyViO2VnOuLpOuKlCDqsoMuIC0tPiDqt7jrnpjshJwgd2hpbGUgdHJ1ZeuhnCDqsJDsjIguIG9yIHRha2VFdmVyeSDsgqzsmqlcblxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xuICAgIHlpZWxkIHRha2VMYXRlc3QoJ0xPR19PVVRfUkVRVUVTVCcsIGxvZ091dCk7IC8vdGFrZUxlYWRpbmfsnYAg7LKr67KI7Ke46rq8XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XG4gICAgeWllbGQgdGFrZUxhdGVzdCgnQUREX1BPU1RfUkVRVUVTVCcsIGFkZFBvc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gICAgeWllbGQgYWxsKFtcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSwgLy9mb3Jr64qUIO2VqOyImOulvCDsi6TtlontlZjripQg6rKDLiBcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksIC8v6re8642wIGNhbGzsnbTrnpHsnYAg64uk66aELiB0aGVuLCBob3cgZGlmZmVyZW50P1xuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXG4gICAgXSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sagas/index.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.js\");\n\n\n\n\n\n //reducer 만들어 준거랑 비슷하게 rootSaga도 만들어줌.\n\nconst loggerMiddleware = ({\n  dispatch,\n  getState\n}) => next => action => {\n  console.log(action);\n  retrun(next(action));\n};\n\nconst configureStore = () => {\n  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();\n  const middlewares = [sagaMiddleware, loggerMiddleware];\n  const enhancer = false // 이 조건문이 true면 ? 값으로 변수 지정, false면 : 값으로 지정.\n  ? undefined //배포용일 때는 devtool에 연결 x\n  : Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"compose\"])(Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(...middlewares)); //개발모드에서는 devtool에 연결.\n\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], enhancer); // store는 state랑 reducer를 포함\n\n  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper); // ==> 이제 _app.js 가서 Nodebirde를 wrapper로 감싸줌//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXRydW4iLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsInNhZ2FUYXNrIiwicnVuIiwicm9vdFNhZ2EiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtDQUNpQzs7QUFFakMsTUFBTUEsZ0JBQWdCLEdBQUksQ0FBQztBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBRCxLQUE2QkMsSUFBRCxJQUFXQyxNQUFELElBQVk7QUFDeEVDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0FHLFFBQU0sQ0FBRUosSUFBSSxDQUFDQyxNQUFELENBQU4sQ0FBTjtBQUNILENBSEQ7O0FBS0EsTUFBTUksY0FBYyxHQUFHLE1BQU07QUFDekIsUUFBTUMsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7QUFDQSxRQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsY0FBRCxFQUFpQlQsZ0JBQWpCLENBQXBCO0FBQ0EsUUFBTVksUUFBUSxHQUFHLE1BQXNDO0FBQXRDLElBQ1hDLFNBRFcsQ0FDOEI7QUFEOUIsSUFFWEEscURBQU8sQ0FBQ0Msb0ZBQW1CLENBQUMsR0FBR0gsV0FBSixDQUFwQixDQUZiLENBSHlCLENBSzBCOztBQUNuRCxRQUFNSSxLQUFLLEdBQUdDLHlEQUFXLENBQUNDLGlEQUFELEVBQVVMLFFBQVYsQ0FBekIsQ0FOeUIsQ0FNcUI7O0FBQzlDRyxPQUFLLENBQUNHLFFBQU4sR0FBaUJULGNBQWMsQ0FBQ1UsR0FBZixDQUFtQkMsOENBQW5CLENBQWpCO0FBQ0EsU0FBT0wsS0FBUDtBQUNILENBVEQ7O0FBV0EsTUFBTU0sT0FBTyxHQUFHQyx3RUFBYSxDQUFDZCxjQUFELEVBQWlCO0FBQUVlLE9BQUs7QUFBUCxDQUFqQixDQUE3QjtBQUVlRixzRUFBZixFLENBQXdCIiwiZmlsZSI6Ii4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJzsgLy9yZWR1Y2VyIOunjOuTpOyWtCDspIDqsbDrnpEg67mE7Iq37ZWY6rKMIHJvb3RTYWdh64+EIOunjOuTpOyWtOykjC5cclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgcmV0cnVuIChuZXh0KGFjdGlvbikpO1xyXG59KTtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdO1xyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nIC8vIOydtCDsobDqsbTrrLjsnbQgdHJ1ZeuptCA/IOqwkuycvOuhnCDrs4DsiJgg7KeA7KCVLCBmYWxzZeuptCA6IOqwkuycvOuhnCDsp4DsoJUuXHJcbiAgICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpIC8v67Cw7Y+s7Jqp7J28IOuVjOuKlCBkZXZ0b29s7JeQIOyXsOqysCB4XHJcbiAgICAgICAgOiBjb21wb3NlKGNvbXBvc2VXaXRoRGV2VG9vbHMoLi4ubWlkZGxld2FyZXMpKSAvL+qwnOuwnOuqqOuTnOyXkOyEnOuKlCBkZXZ0b29s7JeQIOyXsOqysC5cclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpOyAvLyBzdG9yZeuKlCBzdGF0ZeuekSByZWR1Y2Vy66W8IO2PrO2VqFxyXG4gICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHsgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnfSk7IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsgLy8gPT0+IOydtOygnCBfYXBwLmpzIOqwgOyEnCBOb2RlYmlyZGXrpbwgd3JhcHBlcuuhnCDqsJDsi7jspIxcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

/***/ })

/******/ });
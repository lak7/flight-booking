"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/layout/PreLoader.js":
/*!*********************************!*\
  !*** ./src/layout/PreLoader.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _s = $RefreshSig$();\nconst PreLoader = ()=>{\n    _s();\n    useEffect(()=>{\n        const script = document.createElement(\"script\");\n        script.type = \"text/javascript\";\n        script.async = true;\n        script.src = \"https://tenor.com/embed.js\";\n        // Append the script to the document body\n        document.body.appendChild(script);\n        // Clean up the script when the component unmounts\n        return ()=>{\n            document.body.removeChild(script);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"preloader preBody\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                paddingTop: \"75.000%\",\n                position: \"relative\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                    title: \"GIF\",\n                    src: \"https://gifer.com/embed/7fWj\",\n                    width: \"100%\",\n                    height: \"100%\",\n                    style: {\n                        position: \"absolute\",\n                        top: 0,\n                        left: 0\n                    },\n                    frameBorder: \"0\",\n                    allowFullScreen: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\laksh\\\\Downloads\\\\gowildsreact-10\\\\gowildsreact-10\\\\Gowilds\\\\React Template\\\\src\\\\layout\\\\PreLoader.js\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://gifer.com\",\n                        children: \"via GIFER\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\laksh\\\\Downloads\\\\gowildsreact-10\\\\gowildsreact-10\\\\Gowilds\\\\React Template\\\\src\\\\layout\\\\PreLoader.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\laksh\\\\Downloads\\\\gowildsreact-10\\\\gowildsreact-10\\\\Gowilds\\\\React Template\\\\src\\\\layout\\\\PreLoader.js\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\laksh\\\\Downloads\\\\gowildsreact-10\\\\gowildsreact-10\\\\Gowilds\\\\React Template\\\\src\\\\layout\\\\PreLoader.js\",\n            lineNumber: 23,\n            columnNumber: 1\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\laksh\\\\Downloads\\\\gowildsreact-10\\\\gowildsreact-10\\\\Gowilds\\\\React Template\\\\src\\\\layout\\\\PreLoader.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PreLoader, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = PreLoader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PreLoader);\nvar _c;\n$RefreshReg$(_c, \"PreLoader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0L1ByZUxvYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU1BLFlBQVksSUFBTTs7SUFFdEJDLFVBQVUsSUFBTTtRQUNkLE1BQU1DLFNBQVNDLFNBQVNDLGFBQWEsQ0FBQztRQUN0Q0YsT0FBT0csSUFBSSxHQUFHO1FBQ2RILE9BQU9JLEtBQUssR0FBRyxJQUFJO1FBQ25CSixPQUFPSyxHQUFHLEdBQUc7UUFFYix5Q0FBeUM7UUFDekNKLFNBQVNLLElBQUksQ0FBQ0MsV0FBVyxDQUFDUDtRQUUxQixrREFBa0Q7UUFDbEQsT0FBTyxJQUFNO1lBQ1hDLFNBQVNLLElBQUksQ0FBQ0UsV0FBVyxDQUFDUjtRQUM1QjtJQUNGLEdBQUcsRUFBRTtJQUlMLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFVO2tCQUVuQiw0RUFBQ0Q7WUFBSUUsT0FBTztnQkFBRUMsWUFBWTtnQkFBV0MsVUFBVTtZQUFXOzs4QkFDcEQsOERBQUNDO29CQUNDQyxPQUFNO29CQUNOVixLQUFJO29CQUNKVyxPQUFNO29CQUNOQyxRQUFPO29CQUNQTixPQUFPO3dCQUFFRSxVQUFVO3dCQUFZSyxLQUFLO3dCQUFHQyxNQUFNO29CQUFFO29CQUMvQ0MsYUFBWTtvQkFDWkMsZUFBZTs7Ozs7OzhCQUVqQiw4REFBQ0M7OEJBQ0MsNEVBQUNDO3dCQUFFQyxNQUFLO2tDQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNwQztHQS9DTTFCO0tBQUFBO0FBZ0ROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXQvUHJlTG9hZGVyLmpzPzM2ODUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUHJlTG9hZGVyID0gKCkgPT4ge1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly90ZW5vci5jb20vZW1iZWQuanMnO1xyXG5cclxuICAgIC8vIEFwcGVuZCB0aGUgc2NyaXB0IHRvIHRoZSBkb2N1bWVudCBib2R5XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcblxyXG4gICAgLy8gQ2xlYW4gdXAgdGhlIHNjcmlwdCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcclxuICAgIH07XHJcbiAgfSwgW10pOyBcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcmVsb2FkZXIgcHJlQm9keVwiPlxyXG5cclxuPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiAnNzUuMDAwJScsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICA8aWZyYW1lXHJcbiAgICAgICAgdGl0bGU9XCJHSUZcIlxyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vZ2lmZXIuY29tL2VtYmVkLzdmV2pcIlxyXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgbGVmdDogMCB9fVxyXG4gICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXHJcbiAgICAgICAgYWxsb3dGdWxsU2NyZWVuXHJcbiAgICAgID48L2lmcmFtZT5cclxuICAgICAgPHA+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2lmZXIuY29tXCI+dmlhIEdJRkVSPC9hPlxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICB7LyogICAgICAgXHJcbjxkaXYgY2xhc3M9XCJjbG91ZCBjbG91ZDFcIj5cclxuICA8ZGl2IGNsYXNzPVwibGlnaHRcIj48L2Rpdj5cclxuPGltZyAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudmV4ZWxzLmNvbS9tZWRpYS91c2Vycy8zLzE0NTc5NS9pc29sYXRlZC9wcmV2aWV3LzA1Y2QzMzA1OWEwMDZiZjQ5MDA2MDk3YWY0Y2NiYTk4LXBsYW5lLWluLWZsaWdodC1ieS12ZXhlbHMucG5nXCIgLz48L2Rpdj4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQcmVMb2FkZXI7XHJcbiJdLCJuYW1lcyI6WyJQcmVMb2FkZXIiLCJ1c2VFZmZlY3QiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiYXN5bmMiLCJzcmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwicGFkZGluZ1RvcCIsInBvc2l0aW9uIiwiaWZyYW1lIiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJmcmFtZUJvcmRlciIsImFsbG93RnVsbFNjcmVlbiIsInAiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layout/PreLoader.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/tb */ \"./node_modules/react-icons/tb/index.esm.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Navbar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), nav = ref[0], setNav = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"white\"), color = ref1[0], setColor = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"black\"), textColor = ref2[0], setTextColor = ref2[1];\n    var handleNav = function() {\n        setNav(!nav);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var changeColor = function() {\n            if (window.scrollY >= 90) {\n                setColor(\"#ffffff\");\n                setTextColor(\"#000000\");\n            } else {\n                setColor(\"#ffffff\");\n                setTextColor(\"#000000\");\n            }\n        };\n        window.addEventListener(\"scroll\", changeColor);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-between items-center p-6 w-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between text-black w-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col h-screen text-black\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    style: {\n                                        color: \"\".concat(textColor)\n                                    },\n                                    className: \"font-bold text-4xl z-20 cursor-pointer\",\n                                    children: \"BLEND\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 11\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                                lineNumber: 34,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                style: {\n                                    color: \"\".concat(textColor)\n                                },\n                                className: \"hidden sm:flex flex-col mt-5 cursor-pointer z-20\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"mt-3 flex flex-row items-center gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/cycleOne\",\n                                                children: \"CYCLE 1\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 13\n                                            }, _this),\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_tb__WEBPACK_IMPORTED_MODULE_3__.TbRecycle, {}, void 0, false, {\n                                                fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 51\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 11\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"mt-3 flex flex-row items-center gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/#\",\n                                                children: \"CYCLE 2\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 13\n                                            }, _this),\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_tb__WEBPACK_IMPORTED_MODULE_3__.TbRecycle, {}, void 0, false, {\n                                                fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 44\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 11\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                                lineNumber: 39,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: handleNav,\n                        className: \"md:hidden z-30 pt-3 pr-3\",\n                        children: nav ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineClose, {\n                            size: 20,\n                            style: {\n                                color: \"\".concat(textColor)\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineMenu, {\n                            size: 20,\n                            style: {\n                                color: \"\".concat(textColor)\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: nav ? \"sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 z-20\" : \"sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 z-20\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: handleNav,\n                                    className: \"p-4 text-4xl hover:text-gray-500\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/cycleOne\",\n                                        children: \"CYCLE 1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: handleNav,\n                                    className: \"p-4 text-4xl hover:text-gray-500\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/#\",\n                                        children: \"CYCLE 2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-col h-screen text-right hidden md:flex z-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineSearch, {\n                        className: \"self-end text-2xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex flex-col mt-8 text-sm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"LOG IN\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 11\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"CLIENT SERVICES\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 11\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"SUSTAINABILITY\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 11\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pc/Documents/GitHub/blend/components/Navbar.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_s(Navbar, \"P9ws/yHbC6O6FrN0CrKh2bsJQ1M=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7Z0NBQUNzQixJQUFJLEVBQUMsSUFBSTswQ0FDZiw0RUFBQ0ksSUFBRTs4Q0FBQyxnQkFBYzs7Ozs7eUNBQUs7Ozs7O3FDQUNoQjs7Ozs7OzZCQUNKOzs7Ozs7cUJBQ0Q7Ozs7OzthQUVGLENBQ047QUFDSixDQUFDO0dBNUZLbEIsTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBOEZaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanM/ZmJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBaU91dGxpbmVNZW51LCBBaU91dGxpbmVDbG9zZSwgQWlPdXRsaW5lU2VhcmNoIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuaW1wb3J0IHtUYlJlY3ljbGV9IGZyb20gJ3JlYWN0LWljb25zL3RiJztcblxuXG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgW25hdiwgc2V0TmF2XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSgnd2hpdGUnKTtcbiAgY29uc3QgW3RleHRDb2xvciwgc2V0VGV4dENvbG9yXSA9IHVzZVN0YXRlKCdibGFjaycpO1xuXG4gIGNvbnN0IGhhbmRsZU5hdiA9ICgpID0+IHtcbiAgICBzZXROYXYoIW5hdik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGFuZ2VDb2xvciA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSA5MCkge1xuICAgICAgICBzZXRDb2xvcignI2ZmZmZmZicpO1xuICAgICAgICBzZXRUZXh0Q29sb3IoJyMwMDAwMDAnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldENvbG9yKCcjZmZmZmZmJyk7XG4gICAgICAgIHNldFRleHRDb2xvcignIzAwMDAwMCcpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoYW5nZUNvbG9yKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTYgdy1zY3JlZW4nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHRleHQtYmxhY2sgdy1zY3JlZW4nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBoLXNjcmVlbiB0ZXh0LWJsYWNrJz5cbiAgICAgICAgPExpbmsgaHJlZj0nLyMnPlxuICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogYCR7dGV4dENvbG9yfWAgfX0gY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC00eGwgei0yMCBjdXJzb3ItcG9pbnRlcic+XG4gICAgICAgICAgICBCTEVORFxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHVsIHN0eWxlPXt7IGNvbG9yOiBgJHt0ZXh0Q29sb3J9YCB9fSBjbGFzc05hbWU9J2hpZGRlbiBzbTpmbGV4IGZsZXgtY29sIG10LTUgY3Vyc29yLXBvaW50ZXIgei0yMCc+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbXQtMyBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtMic+XG4gICAgICAgICAgICA8TGluayBocmVmPScvY3ljbGVPbmUnPkNZQ0xFIDE8L0xpbms+IDxUYlJlY3ljbGUgLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J210LTMgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTInPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyMnPkNZQ0xFIDI8L0xpbms+IDxUYlJlY3ljbGUgLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICBcblxuICAgICAgICB7LyogTW9iaWxlIEJ1dHRvbiAqL31cbiAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVOYXZ9IGNsYXNzTmFtZT0nbWQ6aGlkZGVuIHotMzAgcHQtMyBwci0zJz5cbiAgICAgICAgICB7bmF2ID8gKFxuICAgICAgICAgICAgPEFpT3V0bGluZUNsb3NlIHNpemU9ezIwfSBzdHlsZT17eyBjb2xvcjogYCR7dGV4dENvbG9yfWAgfX0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEFpT3V0bGluZU1lbnUgc2l6ZT17MjB9IHN0eWxlPXt7IGNvbG9yOiBgJHt0ZXh0Q29sb3J9YCB9fSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogTW9iaWxlIE1lbnUgKi99XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgbmF2XG4gICAgICAgICAgICAgID8gJ3NtOmhpZGRlbiBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgcmlnaHQtMCBib3R0b20tMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgaC1zY3JlZW4gYmctd2hpdGUgdGV4dC1jZW50ZXIgZWFzZS1pbiBkdXJhdGlvbi0zMDAgei0yMCdcbiAgICAgICAgICAgICAgOiAnc206aGlkZGVuIGFic29sdXRlIHRvcC0wIGxlZnQtWy0xMDAlXSByaWdodC0wIGJvdHRvbS0wIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBoLXNjcmVlbiBiZy13aGl0ZSB0ZXh0LWNlbnRlciBlYXNlLWluIGR1cmF0aW9uLTMwMCB6LTIwJ1xuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXtoYW5kbGVOYXZ9IGNsYXNzTmFtZT0ncC00IHRleHQtNHhsIGhvdmVyOnRleHQtZ3JheS01MDAnPlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvY3ljbGVPbmUnPkNZQ0xFIDE8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e2hhbmRsZU5hdn0gY2xhc3NOYW1lPSdwLTQgdGV4dC00eGwgaG92ZXI6dGV4dC1ncmF5LTUwMCc+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8jJz5DWUNMRSAyPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1jb2wgaC1zY3JlZW4gdGV4dC1yaWdodCBoaWRkZW4gbWQ6ZmxleCB6LTIwJz5cblxuICAgICAgICA8QWlPdXRsaW5lU2VhcmNoIGNsYXNzTmFtZT0nc2VsZi1lbmQgdGV4dC0yeGwnIC8+XG5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBtdC04IHRleHQtc20nPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8jJz5cbiAgICAgICAgICA8bGk+TE9HIElOPC9saT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nLyMnPlxuICAgICAgICAgIDxsaT5DTElFTlQgU0VSVklDRVM8L2xpPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvIyc+XG4gICAgICAgICAgPGxpPlNVU1RBSU5BQklMSVRZPC9saT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFpT3V0bGluZU1lbnUiLCJBaU91dGxpbmVDbG9zZSIsIkFpT3V0bGluZVNlYXJjaCIsIlRiUmVjeWNsZSIsIk5hdmJhciIsIm5hdiIsInNldE5hdiIsImNvbG9yIiwic2V0Q29sb3IiLCJ0ZXh0Q29sb3IiLCJzZXRUZXh0Q29sb3IiLCJoYW5kbGVOYXYiLCJjaGFuZ2VDb2xvciIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImgxIiwic3R5bGUiLCJ1bCIsImxpIiwib25DbGljayIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.js\n"));

/***/ })

});
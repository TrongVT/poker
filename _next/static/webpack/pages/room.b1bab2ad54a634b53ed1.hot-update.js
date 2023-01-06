webpackHotUpdate_N_E("pages/room",{

/***/ "./components/guest-view/guest-view-component.js":
/*!*******************************************************!*\
  !*** ./components/guest-view/guest-view-component.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _card_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card-list */ "./components/card-list/index.js");
/* harmony import */ var _constants_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/cards */ "./constants/cards.js");
var _this = undefined,
  _jsxFileName = "D:\\FEAV\\SourceCode\\react\\planning.poker\\scrum-poker\\components\\guest-view\\guest-view-component.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var GuestView = function GuestView(_ref) {
  var className = _ref.className,
    room = _ref.room,
    vote = _ref.vote,
    votedValue = _ref.votedValue,
    sessionStarted = _ref.sessionStarted;
  return __jsx("div", {
    className: "component-guest-view ".concat(className),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, sessionStarted ? __jsx(_card_list__WEBPACK_IMPORTED_MODULE_2__["StyledCardList"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, _constants_cards__WEBPACK_IMPORTED_MODULE_3__["default"][room.cardsMode].map(function (value) {
    return __jsx("div", {
      className: "component-guest-view__card-wrap",
      key: value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, __jsx(_card_list__WEBPACK_IMPORTED_MODULE_2__["StyledCardListItem"], {
      selected: votedValue && value && votedValue === value,
      onClick: function onClick() {
        return vote(value);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 15
      }
    }, value)));
  })) : __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "Ch\u1EDD m\xE1y ch\u1EE7 b\u1EAFt \u0111\u1EA7u phi\xEAn."));
};
_c = GuestView;
GuestView.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  room: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    cardsMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }),
  vote: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  votedValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  sessionStarted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
GuestView.defaultProps = {
  room: {},
  votedValue: null
};
/* harmony default export */ __webpack_exports__["default"] = (GuestView);
var _c;
$RefreshReg$(_c, "GuestView");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ndWVzdC12aWV3L2d1ZXN0LXZpZXctY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkd1ZXN0VmlldyIsImNsYXNzTmFtZSIsInJvb20iLCJ2b3RlIiwidm90ZWRWYWx1ZSIsInNlc3Npb25TdGFydGVkIiwiY2FyZHMiLCJjYXJkc01vZGUiLCJtYXAiLCJ2YWx1ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJzaGFwZSIsIm5hbWUiLCJmdW5jIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDUztBQUUrQjtBQUN4QjtBQUUxQyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBUztFQUFBLElBQ2JDLFNBQVMsUUFBVEEsU0FBUztJQUNUQyxJQUFJLFFBQUpBLElBQUk7SUFBRUMsSUFBSSxRQUFKQSxJQUFJO0lBQ1ZDLFVBQVUsUUFBVkEsVUFBVTtJQUNWQyxjQUFjLFFBQWRBLGNBQWM7RUFBQSxPQUVkO0lBQUssU0FBUyxpQ0FBMEJKLFNBQVMsQ0FBRztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ2pESSxjQUFjLEdBQ2IsTUFBQyx5REFBYztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ1pDLHdEQUFLLENBQUNKLElBQUksQ0FBQ0ssU0FBUyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxVQUFDQyxLQUFLO0lBQUEsT0FDL0I7TUFBSyxTQUFTLEVBQUMsaUNBQWlDO01BQUMsR0FBRyxFQUFFQSxLQUFNO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FDMUQsTUFBQyw2REFBa0I7TUFDakIsUUFBUSxFQUFHTCxVQUFVLElBQUlLLEtBQUssSUFBS0wsVUFBVSxLQUFLSyxLQUFNO01BQ3hELE9BQU8sRUFBRTtRQUFBLE9BQU1OLElBQUksQ0FBQ00sS0FBSyxDQUFDO01BQUEsQ0FBQztNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBRTNCO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FBT0EsS0FBSyxDQUFRLENBQ0QsQ0FDakI7RUFBQSxDQUNQLENBQUMsQ0FDYSxHQUVqQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQUcsMkRBQTBCLENBQzlCLENBQ0c7QUFBQSxDQUNQO0FBQUMsS0F4QklULFNBQVM7QUEwQmZBLFNBQVMsQ0FBQ1UsU0FBUyxHQUFHO0VBQ3BCVCxTQUFTLEVBQUVVLGlEQUFTLENBQUNDLE1BQU0sQ0FBQ0MsVUFBVTtFQUN0Q1gsSUFBSSxFQUFFUyxpREFBUyxDQUFDRyxLQUFLLENBQUM7SUFDcEJDLElBQUksRUFBRUosaURBQVMsQ0FBQ0MsTUFBTTtJQUN0QkwsU0FBUyxFQUFFSSxpREFBUyxDQUFDQztFQUN2QixDQUFDLENBQUM7RUFDRlQsSUFBSSxFQUFFUSxpREFBUyxDQUFDSyxJQUFJLENBQUNILFVBQVU7RUFDL0JULFVBQVUsRUFBRU8saURBQVMsQ0FBQ00sU0FBUyxDQUFDLENBQUNOLGlEQUFTLENBQUNDLE1BQU0sRUFBRUQsaURBQVMsQ0FBQ08sTUFBTSxDQUFDLENBQUM7RUFDckViLGNBQWMsRUFBRU0saURBQVMsQ0FBQ1EsSUFBSSxDQUFDTjtBQUNqQyxDQUFDO0FBRURiLFNBQVMsQ0FBQ29CLFlBQVksR0FBRztFQUN2QmxCLElBQUksRUFBRSxDQUFDLENBQUM7RUFDUkUsVUFBVSxFQUFFO0FBQ2QsQ0FBQztBQUVjSix3RUFBUyxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tLmIxYmFiMmFkNTRhNjM0YjUzZWQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgU3R5bGVkQ2FyZExpc3QsIFN0eWxlZENhcmRMaXN0SXRlbSB9IGZyb20gJy4uL2NhcmQtbGlzdCc7XHJcbmltcG9ydCBjYXJkcyBmcm9tICcuLi8uLi9jb25zdGFudHMvY2FyZHMnO1xyXG5cclxuY29uc3QgR3Vlc3RWaWV3ID0gKHtcclxuICBjbGFzc05hbWUsXHJcbiAgcm9vbSwgdm90ZSxcclxuICB2b3RlZFZhbHVlLFxyXG4gIHNlc3Npb25TdGFydGVkLFxyXG59KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9e2Bjb21wb25lbnQtZ3Vlc3QtdmlldyAke2NsYXNzTmFtZX1gfT5cclxuICAgIHtzZXNzaW9uU3RhcnRlZCA/IChcclxuICAgICAgPFN0eWxlZENhcmRMaXN0PlxyXG4gICAgICAgIHtjYXJkc1tyb29tLmNhcmRzTW9kZV0ubWFwKCh2YWx1ZSkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtZ3Vlc3Qtdmlld19fY2FyZC13cmFwXCIga2V5PXt2YWx1ZX0+XHJcbiAgICAgICAgICAgIDxTdHlsZWRDYXJkTGlzdEl0ZW1cclxuICAgICAgICAgICAgICBzZWxlY3RlZD17KHZvdGVkVmFsdWUgJiYgdmFsdWUpICYmIHZvdGVkVmFsdWUgPT09IHZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvdGUodmFsdWUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9TdHlsZWRDYXJkTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9TdHlsZWRDYXJkTGlzdD5cclxuICAgICkgOiAoXHJcbiAgICAgIDxwPkNo4budIG3DoXkgY2jhu6cgYuG6r3QgxJHhuqd1IHBoacOqbi48L3A+XHJcbiAgICApfVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuR3Vlc3RWaWV3LnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICByb29tOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNhcmRzTW9kZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9KSxcclxuICB2b3RlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHZvdGVkVmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcclxuICBzZXNzaW9uU3RhcnRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbkd1ZXN0Vmlldy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgcm9vbToge30sXHJcbiAgdm90ZWRWYWx1ZTogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEd1ZXN0VmlldztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
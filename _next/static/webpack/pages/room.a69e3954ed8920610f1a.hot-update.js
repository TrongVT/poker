webpackHotUpdate_N_E("pages/room",{

/***/ "./components/host-view/host-view-component.js":
/*!*****************************************************!*\
  !*** ./components/host-view/host-view-component.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/socket */ "./context/socket/index.js");
/* harmony import */ var _card_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card-list */ "./components/card-list/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button */ "./components/button/index.js");
var _this = undefined,
  _jsxFileName = "D:\\FEAV\\SourceCode\\react\\planning.poker\\scrum-poker\\components\\host-view\\host-view-component.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var HostView = function HostView(_ref) {
  _s();
  var className = _ref.className,
    room = _ref.room,
    guestsVoted = _ref.guestsVoted,
    hostVoted = _ref.hostVoted,
    clearVotes = _ref.clearVotes,
    isHost = _ref.isHost,
    startSession = _ref.startSession,
    sessionStarted = _ref.sessionStarted;
  var socket = Object(_context_socket__WEBPACK_IMPORTED_MODULE_2__["useSocket"])();
  var inviteLink = "".concat("http://localhost:3000", "/join?id=").concat(room.id);
  var guestVoted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (guestId) {
    var _room$guests$find = room.guests.find(function (_ref2) {
        var id = _ref2.id;
        return id === guestId;
      }),
      _room$guests$find$vot = _room$guests$find.vote,
      vote = _room$guests$find$vot === void 0 ? null : _room$guests$find$vot;
    return vote;
  }, [room.guests]);
  var onKickGuestOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_ref3) {
    var id = _ref3.id,
      name = _ref3.name;
    if (window.confirm("Do you really want to kick \"".concat(name, "\" out?"))) {
      socket.emit('kickGuestOut', {
        roomId: room.id,
        guestId: id
      });
    }
  }, [socket, room.id]);
  var allVoted = guestsVoted && hostVoted;
  var calVotes = function calVotes() {
    console.log('calVotes');
    var result = room.guests.map(function (x) {
      return x.vote;
    });
    console.log(result);
  };
  return __jsx("div", {
    className: "".concat(className, " component-host-view"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, isHost && __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "Hi", ' ', room.host.name, ", b\u1EA1n l\xE0 ch\u1EE7. S\u1EED d\u1EE5ng li\xEAn k\u1EBFt n\xE0y \u0111\u1EC3 m\u1EDDi nh\u1EEFng ng\u01B0\u1EDDi kh\xE1c:", __jsx("a", {
    href: inviteLink,
    target: "_blank",
    rel: "noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, inviteLink)), __jsx("div", {
    className: "component-host-view__cards",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(_card_list__WEBPACK_IMPORTED_MODULE_3__["StyledCardList"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "component-host-view__card-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx(_card_list__WEBPACK_IMPORTED_MODULE_3__["StyledCardListItem"], {
    disabled: !guestsVoted,
    revealed: allVoted,
    readOnly: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, room.host.vote ? room.host.vote : '?'), !hostVoted && __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 30
    }
  }, "Wait until all guests voted")), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, room.host.name)), room.guests.map(function (_ref4) {
    var id = _ref4.id,
      name = _ref4.name,
      _ref4$vote = _ref4.vote,
      vote = _ref4$vote === void 0 ? '?' : _ref4$vote;
    return __jsx("div", {
      className: "component-host-view__card-wrap",
      key: id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx(_card_list__WEBPACK_IMPORTED_MODULE_3__["StyledCardListItem"], {
      disabled: !sessionStarted || !guestVoted(id),
      revealed: allVoted,
      readOnly: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }, allVoted ? vote : '?')), isHost ? __jsx("button", {
      className: "kick-guest-button",
      onClick: function onClick() {
        return onKickGuestOut({
          id: id,
          name: name
        });
      },
      type: "button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }
    }, "+") : null, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 15
      }
    }, name));
  }))), isHost && !sessionStarted && !!room.guests.length && __jsx(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: startSession,
    className: "component-host-view__button component-host-view__button--start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, "Start session"), allVoted && isHost && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: clearVotes,
    className: "component-host-view__button component-host-view__button-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, "X\xF3a phi\u1EBFu b\u1EA7u"), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, " "), __jsx(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: calVotes,
    className: "component-host-view__button component-host-view__button-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, "T\u1ED5ng k\u1EBFt")));
};
_s(HostView, "AA+xOzom6BU7/u8LNicifyDNT0s=", false, function () {
  return [_context_socket__WEBPACK_IMPORTED_MODULE_2__["useSocket"]];
});
_c = HostView;
HostView.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  room: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    guests: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({})),
    host: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      vote: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })
  }),
  isHost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  guestsVoted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  hostVoted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  clearVotes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  startSession: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  sessionStarted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
HostView.defaultProps = {
  room: {}
};
/* harmony default export */ __webpack_exports__["default"] = (HostView);
var _c;
$RefreshReg$(_c, "HostView");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob3N0LXZpZXcvaG9zdC12aWV3LWNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJIb3N0VmlldyIsImNsYXNzTmFtZSIsInJvb20iLCJndWVzdHNWb3RlZCIsImhvc3RWb3RlZCIsImNsZWFyVm90ZXMiLCJpc0hvc3QiLCJzdGFydFNlc3Npb24iLCJzZXNzaW9uU3RhcnRlZCIsInNvY2tldCIsInVzZVNvY2tldCIsImludml0ZUxpbmsiLCJwcm9jZXNzIiwiaWQiLCJndWVzdFZvdGVkIiwidXNlQ2FsbGJhY2siLCJndWVzdElkIiwiZ3Vlc3RzIiwiZmluZCIsInZvdGUiLCJvbktpY2tHdWVzdE91dCIsIm5hbWUiLCJ3aW5kb3ciLCJjb25maXJtIiwiZW1pdCIsInJvb21JZCIsImFsbFZvdGVkIiwiY2FsVm90ZXMiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwibWFwIiwieCIsImhvc3QiLCJsZW5ndGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJhcnJheU9mIiwiYm9vbCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDUjtBQUVjO0FBQ2lCO0FBQ25DO0FBRS9CLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFRLE9BU1I7RUFBQTtFQUFBLElBUkpDLFNBQVMsUUFBVEEsU0FBUztJQUNUQyxJQUFJLFFBQUpBLElBQUk7SUFDSkMsV0FBVyxRQUFYQSxXQUFXO0lBQ1hDLFNBQVMsUUFBVEEsU0FBUztJQUNUQyxVQUFVLFFBQVZBLFVBQVU7SUFDVkMsTUFBTSxRQUFOQSxNQUFNO0lBQ05DLFlBQVksUUFBWkEsWUFBWTtJQUNaQyxjQUFjLFFBQWRBLGNBQWM7RUFFZCxJQUFNQyxNQUFNLEdBQUdDLGlFQUFTLEVBQUU7RUFDMUIsSUFBTUMsVUFBVSxhQUFNQyx1QkFBNEIsc0JBQVlWLElB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QUNILFVBQVU7RUFDdENsQyxTQUFTLEVBQUVnQyxpREFBUyxDQUFDSyxJQUFJLENBQUNILFVBQVU7RUFDcENqQyxVQUFVLEVBQUUrQixpREFBUyxDQUFDTSxJQUFJLENBQUNKLFVBQVU7RUFDckMvQixZQUFZLEVBQUU2QixpREFBUyxDQUFDTSxJQUFJLENBQUNKLFVBQVU7RUFDdkM5QixjQUFjLEVBQUU0QixpREFBUyxDQUFDSyxJQUFJLENBQUNIO0FBQ2pDLENBQUM7QUFFRHRDLFFBQVEsQ0FBQzJDLFlBQVksR0FBRztFQUN0QnpDLElBQUksRUFBRSxDQUFDO0FBQ1QsQ0FBQztBQUVjRix1RUFBUSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tLmE2OWUzOTU0ZWQ4OTIwNjEwZjFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VTb2NrZXQgfSBmcm9tICcuLi8uLi9jb250ZXh0L3NvY2tldCc7XHJcbmltcG9ydCB7IFN0eWxlZENhcmRMaXN0LCBTdHlsZWRDYXJkTGlzdEl0ZW0gfSBmcm9tICcuLi9jYXJkLWxpc3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbic7XHJcblxyXG5jb25zdCBIb3N0VmlldyA9ICh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIHJvb20sXHJcbiAgZ3Vlc3RzVm90ZWQsXHJcbiAgaG9zdFZvdGVkLFxyXG4gIGNsZWFyVm90ZXMsXHJcbiAgaXNIb3N0LFxyXG4gIHN0YXJ0U2Vzc2lvbixcclxuICBzZXNzaW9uU3RhcnRlZCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHNvY2tldCA9IHVzZVNvY2tldCgpO1xyXG4gIGNvbnN0IGludml0ZUxpbmsgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9qb2luP2lkPSR7cm9vbS5pZH1gO1xyXG5cclxuICBjb25zdCBndWVzdFZvdGVkID0gdXNlQ2FsbGJhY2soKGd1ZXN0SWQpID0+IHtcclxuICAgIGNvbnN0IHsgdm90ZSA9IG51bGwgfSA9IHJvb20uZ3Vlc3RzLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IGd1ZXN0SWQpO1xyXG4gICAgcmV0dXJuIHZvdGU7XHJcbiAgfSwgW3Jvb20uZ3Vlc3RzXSk7XHJcblxyXG4gIGNvbnN0IG9uS2lja0d1ZXN0T3V0ID0gdXNlQ2FsbGJhY2soKHsgaWQsIG5hbWUgfSkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5jb25maXJtKGBEbyB5b3UgcmVhbGx5IHdhbnQgdG8ga2ljayBcIiR7bmFtZX1cIiBvdXQ/YCkpIHtcclxuICAgICAgc29ja2V0LmVtaXQoJ2tpY2tHdWVzdE91dCcsIHsgcm9vbUlkOiByb29tLmlkLCBndWVzdElkOiBpZCB9KTtcclxuICAgIH1cclxuICB9LCBbc29ja2V0LCByb29tLmlkXSk7XHJcblxyXG4gIGNvbnN0IGFsbFZvdGVkID0gZ3Vlc3RzVm90ZWQgJiYgaG9zdFZvdGVkO1xyXG4gIGNvbnN0IGNhbFZvdGVzID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2NhbFZvdGVzJyk7XHJcbiAgICBcclxuICAgIHZhciByZXN1bHQgPSByb29tLmd1ZXN0cy5tYXAoeD0+eC52b3RlKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBjb21wb25lbnQtaG9zdC12aWV3YH0+XHJcbiAgICAgIHtpc0hvc3QgJiYgKFxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgSGlcclxuICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICB7cm9vbS5ob3N0Lm5hbWV9XHJcbiAgICAgICAgICAsIGLhuqFuIGzDoCBjaOG7py4gU+G7rSBk4bulbmcgbGnDqm4ga+G6v3QgbsOgeSDEkeG7gyBt4budaSBuaOG7r25nIG5nxrDhu51pIGtow6FjOlxyXG4gICAgICAgICAgPGEgaHJlZj17aW52aXRlTGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPntpbnZpdGVMaW5rfTwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWhvc3Qtdmlld19fY2FyZHNcIj5cclxuICAgICAgICA8U3R5bGVkQ2FyZExpc3Q+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1ob3N0LXZpZXdfX2NhcmQtd3JhcFwiPlxyXG4gICAgICAgICAgICA8U3R5bGVkQ2FyZExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFndWVzdHNWb3RlZH1cclxuICAgICAgICAgICAgICByZXZlYWxlZD17YWxsVm90ZWR9XHJcbiAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntyb29tLmhvc3Qudm90ZSA/IHJvb20uaG9zdC52b3RlIDogJz8nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7IWhvc3RWb3RlZCAmJiA8c21hbGw+V2FpdCB1bnRpbCBhbGwgZ3Vlc3RzIHZvdGVkPC9zbWFsbD59XHJcbiAgICAgICAgICAgIDwvU3R5bGVkQ2FyZExpc3RJdGVtPlxyXG4gICAgICAgICAgICA8c3Bhbj57cm9vbS5ob3N0Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7cm9vbS5ndWVzdHMubWFwKCh7IGlkLCBuYW1lLCB2b3RlID0gJz8nIH0pID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtaG9zdC12aWV3X19jYXJkLXdyYXBcIiBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICA8U3R5bGVkQ2FyZExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXNlc3Npb25TdGFydGVkIHx8ICFndWVzdFZvdGVkKGlkKX1cclxuICAgICAgICAgICAgICAgIHJldmVhbGVkPXthbGxWb3RlZH1cclxuICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2FsbFZvdGVkID8gdm90ZSA6ICc/J308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRDYXJkTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAge2lzSG9zdCA/IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia2ljay1ndWVzdC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbktpY2tHdWVzdE91dCh7IGlkLCBuYW1lIH0pfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgK1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPHNwYW4+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU3R5bGVkQ2FyZExpc3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7KGlzSG9zdCAmJiAhc2Vzc2lvblN0YXJ0ZWQgJiYgISFyb29tLmd1ZXN0cy5sZW5ndGgpICYmIChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtzdGFydFNlc3Npb259XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb21wb25lbnQtaG9zdC12aWV3X19idXR0b24gY29tcG9uZW50LWhvc3Qtdmlld19fYnV0dG9uLS1zdGFydFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU3RhcnQgc2Vzc2lvblxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICB7KGFsbFZvdGVkICYmIGlzSG9zdCkgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NsZWFyVm90ZXN9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbXBvbmVudC1ob3N0LXZpZXdfX2J1dHRvbiBjb21wb25lbnQtaG9zdC12aWV3X19idXR0b24tcmVzZXRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBYw7NhIHBoaeG6v3UgYuG6p3VcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPD4gPC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NhbFZvdGVzfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb21wb25lbnQtaG9zdC12aWV3X19idXR0b24gY29tcG9uZW50LWhvc3Qtdmlld19fYnV0dG9uLXJlc2V0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVOG7lW5nIGvhur90XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Ib3N0Vmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgcm9vbTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGd1ZXN0czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSksXHJcbiAgICBob3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICB2b3RlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbiAgaXNIb3N0OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGd1ZXN0c1ZvdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGhvc3RWb3RlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBjbGVhclZvdGVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHN0YXJ0U2Vzc2lvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBzZXNzaW9uU3RhcnRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbkhvc3RWaWV3LmRlZmF1bHRQcm9wcyA9IHtcclxuICByb29tOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvc3RWaWV3O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
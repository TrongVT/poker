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
  return __jsx("div", {
    className: "".concat(className, " component-host-view"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, isHost && __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "Hi", ' ', room.host.name, ", b\u1EA1n l\xE0 ch\u1EE7. S\u1EED d\u1EE5ng li\xEAn k\u1EBFt n\xE0y \u0111\u1EC3 m\u1EDDi nh\u1EEFng ng\u01B0\u1EDDi kh\xE1c:", __jsx("a", {
    href: inviteLink,
    target: "_blank",
    rel: "noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, inviteLink)), __jsx("div", {
    className: "component-host-view__cards",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(_card_list__WEBPACK_IMPORTED_MODULE_3__["StyledCardList"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "component-host-view__card-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(_card_list__WEBPACK_IMPORTED_MODULE_3__["StyledCardListItem"], {
    disabled: !guestsVoted,
    revealed: allVoted,
    readOnly: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, room.host.vote ? room.host.vote : '?'), !hostVoted && __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 30
    }
  }, "Wait until all guests voted")), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
        lineNumber: 59,
        columnNumber: 13
      }
    }, __jsx(_card_list__WEBPACK_IMPORTED_MODULE_3__["StyledCardListItem"], {
      disabled: !sessionStarted || !guestVoted(id),
      revealed: allVoted,
      readOnly: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
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
        lineNumber: 68,
        columnNumber: 17
      }
    }, "+") : null, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 15
      }
    }, name));
  }))), isHost && !sessionStarted && !!room.guests.length && __jsx(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: startSession,
    className: "component-host-view__button component-host-view__button--start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, "Start session"), allVoted && isHost && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: clearVotes,
    className: "component-host-view__button component-host-view__button-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, "X\xF3a phi\u1EBFu b\u1EA7u"), __jsx(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: clearVotes,
    className: "component-host-view__button component-host-view__button-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob3N0LXZpZXcvaG9zdC12aWV3LWNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJIb3N0VmlldyIsImNsYXNzTmFtZSIsInJvb20iLCJndWVzdHNWb3RlZCIsImhvc3RWb3RlZCIsImNsZWFyVm90ZXMiLCJpc0hvc3QiLCJzdGFydFNlc3Npb24iLCJzZXNzaW9uU3RhcnRlZCIsInNvY2tldCIsInVzZVNvY2tldCIsImludml0ZUxpbmsiLCJwcm9jZXNzIiwiaWQiLCJndWVzdFZvdGVkIiwidXNlQ2FsbGJhY2siLCJndWVzdElkIiwiZ3Vlc3RzIiwiZmluZCIsInZvdGUiLCJvbktpY2tHdWVzdE91dCIsIm5hbWUiLCJ3aW5kb3ciLCJjb25maXJtIiwiZW1pdCIsInJvb21JZCIsImFsbFZvdGVkIiwiaG9zdCIsIm1hcCIsImxlbmd0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJzaGFwZSIsImFycmF5T2YiLCJib29sIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNSO0FBRWM7QUFDaUI7QUFDbkM7QUFFL0IsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVEsT0FTUjtFQUFBO0VBQUEsSUFSSkMsU0FBUyxRQUFUQSxTQUFTO0lBQ1RDLElBQUksUUFBSkEsSUFBSTtJQUNKQyxXQUFXLFFBQVhBLFdBQVc7SUFDWEMsU0FBUyxRQUFUQSxTQUFTO0lBQ1RDLFVBQVUsUUFBVkEsVUFBVTtJQUNWQyxNQUFNLFFBQU5BLE1BQU07SUFDTkMsWUFBWSxRQUFaQSxZQUFZO0lBQ1pDLGNBQWMsUUFBZEEsY0FBYztFQUVkLElBQU1DLE1BQU0sR0FBR0MsaUVBQVMsRUFBRTtFQUMxQixJQUFNQyxVQUFVLGFBQU1DLHVCQUE0QixzQkFBWVYsSUFBSSxDQUFDVyxFQUFFLENBQUU7RUFFdkUsSUFBTUMsVUFBVSxHQUFH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MGJiZWNmZDUwNGNmMDFhZjg2MmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCB7IHVzZVNvY2tldCB9IGZyb20gJy4uLy4uL2NvbnRleHQvc29ja2V0JztcclxuaW1wb3J0IHsgU3R5bGVkQ2FyZExpc3QsIFN0eWxlZENhcmRMaXN0SXRlbSB9IGZyb20gJy4uL2NhcmQtbGlzdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJztcclxuXHJcbmNvbnN0IEhvc3RWaWV3ID0gKHtcclxuICBjbGFzc05hbWUsXHJcbiAgcm9vbSxcclxuICBndWVzdHNWb3RlZCxcclxuICBob3N0Vm90ZWQsXHJcbiAgY2xlYXJWb3RlcyxcclxuICBpc0hvc3QsXHJcbiAgc3RhcnRTZXNzaW9uLFxyXG4gIHNlc3Npb25TdGFydGVkLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgc29ja2V0ID0gdXNlU29ja2V0KCk7XHJcbiAgY29uc3QgaW52aXRlTGluayA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2pvaW4/aWQ9JHtyb29tLmlkfWA7XHJcblxyXG4gIGNvbnN0IGd1ZXN0Vm90ZWQgPSB1c2VDYWxsYmFjaygoZ3Vlc3RJZCkgPT4ge1xyXG4gICAgY29uc3QgeyB2b3RlID0gbnVsbCB9ID0gcm9vbS5ndWVzdHMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gZ3Vlc3RJZCk7XHJcbiAgICByZXR1cm4gdm90ZTtcclxuICB9LCBbcm9vbS5ndWVzdHNdKTtcclxuXHJcbiAgY29uc3Qgb25LaWNrR3Vlc3RPdXQgPSB1c2VDYWxsYmFjaygoeyBpZCwgbmFtZSB9KSA9PiB7XHJcbiAgICBpZiAod2luZG93LmNvbmZpcm0oYERvIHlvdSByZWFsbHkgd2FudCB0byBraWNrIFwiJHtuYW1lfVwiIG91dD9gKSkge1xyXG4gICAgICBzb2NrZXQuZW1pdCgna2lja0d1ZXN0T3V0JywgeyByb29tSWQ6IHJvb20uaWQsIGd1ZXN0SWQ6IGlkIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtzb2NrZXQsIHJvb20uaWRdKTtcclxuXHJcbiAgY29uc3QgYWxsVm90ZWQgPSBndWVzdHNWb3RlZCAmJiBob3N0Vm90ZWQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBjb21wb25lbnQtaG9zdC12aWV3YH0+XHJcbiAgICAgIHtpc0hvc3QgJiYgKFxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgSGlcclxuICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICB7cm9vbS5ob3N0Lm5hbWV9XHJcbiAgICAgICAgICAsIGLhuqFuIGzDoCBjaOG7py4gU+G7rSBk4bulbmcgbGnDqm4ga+G6v3QgbsOgeSDEkeG7gyBt4budaSBuaOG7r25nIG5nxrDhu51pIGtow6FjOlxyXG4gICAgICAgICAgPGEgaHJlZj17aW52aXRlTGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPntpbnZpdGVMaW5rfTwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWhvc3Qtdmlld19fY2FyZHNcIj5cclxuICAgICAgICA8U3R5bGVkQ2FyZExpc3Q+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1ob3N0LXZpZXdfX2NhcmQtd3JhcFwiPlxyXG4gICAgICAgICAgICA8U3R5bGVkQ2FyZExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFndWVzdHNWb3RlZH1cclxuICAgICAgICAgICAgICByZXZlYWxlZD17YWxsVm90ZWR9XHJcbiAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntyb29tLmhvc3Qudm90ZSA/IHJvb20uaG9zdC52b3RlIDogJz8nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7IWhvc3RWb3RlZCAmJiA8c21hbGw+V2FpdCB1bnRpbCBhbGwgZ3Vlc3RzIHZvdGVkPC9zbWFsbD59XHJcbiAgICAgICAgICAgIDwvU3R5bGVkQ2FyZExpc3RJdGVtPlxyXG4gICAgICAgICAgICA8c3Bhbj57cm9vbS5ob3N0Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7cm9vbS5ndWVzdHMubWFwKCh7IGlkLCBuYW1lLCB2b3RlID0gJz8nIH0pID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtaG9zdC12aWV3X19jYXJkLXdyYXBcIiBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICA8U3R5bGVkQ2FyZExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXNlc3Npb25TdGFydGVkIHx8ICFndWVzdFZvdGVkKGlkKX1cclxuICAgICAgICAgICAgICAgIHJldmVhbGVkPXthbGxWb3RlZH1cclxuICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2FsbFZvdGVkID8gdm90ZSA6ICc/J308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRDYXJkTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAge2lzSG9zdCA/IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia2ljay1ndWVzdC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbktpY2tHdWVzdE91dCh7IGlkLCBuYW1lIH0pfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgK1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPHNwYW4+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU3R5bGVkQ2FyZExpc3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7KGlzSG9zdCAmJiAhc2Vzc2lvblN0YXJ0ZWQgJiYgISFyb29tLmd1ZXN0cy5sZW5ndGgpICYmIChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtzdGFydFNlc3Npb259XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb21wb25lbnQtaG9zdC12aWV3X19idXR0b24gY29tcG9uZW50LWhvc3Qtdmlld19fYnV0dG9uLS1zdGFydFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU3RhcnQgc2Vzc2lvblxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICB7KGFsbFZvdGVkICYmIGlzSG9zdCkgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NsZWFyVm90ZXN9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbXBvbmVudC1ob3N0LXZpZXdfX2J1dHRvbiBjb21wb25lbnQtaG9zdC12aWV3X19idXR0b24tcmVzZXRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBYw7NhIHBoaeG6v3UgYuG6p3VcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjbGVhclZvdGVzfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb21wb25lbnQtaG9zdC12aWV3X19idXR0b24gY29tcG9uZW50LWhvc3Qtdmlld19fYnV0dG9uLXJlc2V0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVOG7lW5nIGvhur90XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Ib3N0Vmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgcm9vbTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGd1ZXN0czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSksXHJcbiAgICBob3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICB2b3RlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbiAgaXNIb3N0OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGd1ZXN0c1ZvdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGhvc3RWb3RlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBjbGVhclZvdGVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHN0YXJ0U2Vzc2lvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBzZXNzaW9uU3RhcnRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbkhvc3RWaWV3LmRlZmF1bHRQcm9wcyA9IHtcclxuICByb29tOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvc3RWaWV3O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
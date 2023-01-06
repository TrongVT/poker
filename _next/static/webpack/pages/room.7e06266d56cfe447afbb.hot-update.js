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
    var count = {};
    result.forEach(function (element) {
      count[element] = (count[element] || 0) + 1;
    });
    console.log(result);
  };
  return __jsx("div", {
    className: "".concat(className, " component-host-view"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, isHost && __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Hi", ' ', room.host.name, ", b\u1EA1n l\xE0 ch\u1EE7. S\u1EED d\u1EE5ng li\xEAn k\u1EBFt n\xE0y \u0111\u1EC3 m\u1EDDi nh\u1EEFng ng\u01B0\u1EDDi kh\xE1c:", __jsx("a", {
    href: inviteLink,
    target: "_blank",
    rel: "noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, inviteLink)), __jsx("div", {
    className: "component-host-view__cards",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(_card_list__WEBPACK_IMPORTED_MODULE_3__["StyledCardList"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "component-host-view__card-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(_card_list__WEBPACK_IMPORTED_MODULE_3__["StyledCardListItem"], {
    disabled: !guestsVoted,
    revealed: allVoted,
    readOnly: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, room.host.vote ? room.host.vote : '?'), !hostVoted && __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 30
    }
  }, "Wait until all guests voted")), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
        lineNumber: 67,
        columnNumber: 13
      }
    }, __jsx(_card_list__WEBPACK_IMPORTED_MODULE_3__["StyledCardListItem"], {
      disabled: !sessionStarted || !guestVoted(id),
      revealed: allVoted,
      readOnly: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
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
        lineNumber: 76,
        columnNumber: 17
      }
    }, "+") : null, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 15
      }
    }, name));
  }))), isHost && !sessionStarted && !!room.guests.length && __jsx(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: startSession,
    className: "component-host-view__button component-host-view__button--start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, "Start session"), allVoted && isHost && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: clearVotes,
    className: "component-host-view__button component-host-view__button-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, "X\xF3a phi\u1EBFu b\u1EA7u"), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, " "), __jsx(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: calVotes,
    className: "component-host-view__button component-host-view__button-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob3N0LXZpZXcvaG9zdC12aWV3LWNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJIb3N0VmlldyIsImNsYXNzTmFtZSIsInJvb20iLCJndWVzdHNWb3RlZCIsImhvc3RWb3RlZCIsImNsZWFyVm90ZXMiLCJpc0hvc3QiLCJzdGFydFNlc3Npb24iLCJzZXNzaW9uU3RhcnRlZCIsInNvY2tldCIsInVzZVNvY2tldCIsImludml0ZUxpbmsiLCJwcm9jZXNzIiwiaWQiLCJndWVzdFZvdGVkIiwidXNlQ2FsbGJhY2siLCJndWVzdElkIiwiZ3Vlc3RzIiwiZmluZCIsInZvdGUiLCJvbktpY2tHdWVzdE91dCIsIm5hbWUiLCJ3aW5kb3ciLCJjb25maXJtIiwiZW1pdCIsInJvb21JZCIsImFsbFZvdGVkIiwiY2FsVm90ZXMiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwibWFwIiwieCIsImNvdW50IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJob3N0IiwibGVuZ3RoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwiYXJyYXlPZiIsImJvb2wiLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1I7QUFFYztBQUNpQjtBQUNuQztBQUUvQixJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUSxPQVNSO0VBQUE7RUFBQSxJQVJKQyxTQUFTLFFBQVRBLFNBQVM7SUFDVEMsSUFBSSxRQUFKQSxJQUFJO0lBQ0pDLFdBQVcsUUFBWEEsV0FBVztJQUNYQyxTQUFTLFFBQVRBLFNBQVM7SUFDVEMsVUFBVSxRQUFWQSxVQUFVO0lBQ1ZDLE1BQU0sUUFBTkEsTUFBTTtJQUNOQyxZQUFZLFFBQVpBLFlBQVk7SUFDWkMsY0FBYyxRQUFkQSxjQUFjO0VBRWQsSUFBTUMsTUFBTSxHQUFHQyxpRUFBUyxFQUFFO0VBQzFCLElBQU1D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aURBQVMsQ0FBQ0csS0FBSyxDQUFDO01BQ3BCckIsSUFBSSxFQUFFa0IsaURBQVMsQ0FBQ0MsTUFBTTtNQUN0QnJCLElBQUksRUFBRW9CLGlEQUFTLENBQUNDO0lBQ2xCLENBQUM7RUFDSCxDQUFDLENBQUM7RUFDRmxDLE1BQU0sRUFBRWlDLGlEQUFTLENBQUNLLElBQUksQ0FBQ0gsVUFBVTtFQUNqQ3RDLFdBQVcsRUFBRW9DLGlEQUFTLENBQUNLLElBQUksQ0FBQ0gsVUFBVTtFQUN0Q3JDLFNBQVMsRUFBRW1DLGlEQUFTLENBQUNLLElBQUksQ0FBQ0gsVUFBVTtFQUNwQ3BDLFVBQVUsRUFBRWtDLGlEQUFTLENBQUNNLElBQUksQ0FBQ0osVUFBVTtFQUNyQ2xDLFlBQVksRUFBRWdDLGlEQUFTLENBQUNNLElBQUksQ0FBQ0osVUFBVTtFQUN2Q2pDLGNBQWMsRUFBRStCLGlEQUFTLENBQUNLLElBQUksQ0FBQ0g7QUFDakMsQ0FBQztBQUVEekMsUUFBUSxDQUFDOEMsWUFBWSxHQUFHO0VBQ3RCNUMsSUFBSSxFQUFFLENBQUM7QUFDVCxDQUFDO0FBRWNGLHVFQUFRLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20uN2UwNjI2NmQ1NmNmZTQ0N2FmYmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCB7IHVzZVNvY2tldCB9IGZyb20gJy4uLy4uL2NvbnRleHQvc29ja2V0JztcclxuaW1wb3J0IHsgU3R5bGVkQ2FyZExpc3QsIFN0eWxlZENhcmRMaXN0SXRlbSB9IGZyb20gJy4uL2NhcmQtbGlzdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJztcclxuXHJcbmNvbnN0IEhvc3RWaWV3ID0gKHtcclxuICBjbGFzc05hbWUsXHJcbiAgcm9vbSxcclxuICBndWVzdHNWb3RlZCxcclxuICBob3N0Vm90ZWQsXHJcbiAgY2xlYXJWb3RlcyxcclxuICBpc0hvc3QsXHJcbiAgc3RhcnRTZXNzaW9uLFxyXG4gIHNlc3Npb25TdGFydGVkLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgc29ja2V0ID0gdXNlU29ja2V0KCk7XHJcbiAgY29uc3QgaW52aXRlTGluayA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9L2pvaW4/aWQ9JHtyb29tLmlkfWA7XHJcblxyXG4gIGNvbnN0IGd1ZXN0Vm90ZWQgPSB1c2VDYWxsYmFjaygoZ3Vlc3RJZCkgPT4ge1xyXG4gICAgY29uc3QgeyB2b3RlID0gbnVsbCB9ID0gcm9vbS5ndWVzdHMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gZ3Vlc3RJZCk7XHJcbiAgICByZXR1cm4gdm90ZTtcclxuICB9LCBbcm9vbS5ndWVzdHNdKTtcclxuXHJcbiAgY29uc3Qgb25LaWNrR3Vlc3RPdXQgPSB1c2VDYWxsYmFjaygoeyBpZCwgbmFtZSB9KSA9PiB7XHJcbiAgICBpZiAod2luZG93LmNvbmZpcm0oYERvIHlvdSByZWFsbHkgd2FudCB0byBraWNrIFwiJHtuYW1lfVwiIG91dD9gKSkge1xyXG4gICAgICBzb2NrZXQuZW1pdCgna2lja0d1ZXN0T3V0JywgeyByb29tSWQ6IHJvb20uaWQsIGd1ZXN0SWQ6IGlkIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtzb2NrZXQsIHJvb20uaWRdKTtcclxuXHJcbiAgY29uc3QgYWxsVm90ZWQgPSBndWVzdHNWb3RlZCAmJiBob3N0Vm90ZWQ7XHJcbiAgY29uc3QgY2FsVm90ZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnY2FsVm90ZXMnKTtcclxuICAgIHZhciByZXN1bHQgPSByb29tLmd1ZXN0cy5tYXAoeD0+eC52b3RlKTtcclxuICAgIGNvbnN0IGNvdW50ID0ge307XHJcbiAgICByZXN1bHQuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgY291bnRbZWxlbWVudF0gPSAoY291bnRbZWxlbWVudF0gfHwgMCkgKyAxO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gY29tcG9uZW50LWhvc3Qtdmlld2B9PlxyXG4gICAgICB7aXNIb3N0ICYmIChcclxuICAgICAgICA8cD5cclxuICAgICAgICAgIEhpXHJcbiAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAge3Jvb20uaG9zdC5uYW1lfVxyXG4gICAgICAgICAgLCBi4bqhbiBsw6AgY2jhu6cuIFPhu60gZOG7pW5nIGxpw6puIGvhur90IG7DoHkgxJHhu4MgbeG7nWkgbmjhu69uZyBuZ8aw4budaSBraMOhYzpcclxuICAgICAgICAgIDxhIGhyZWY9e2ludml0ZUxpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj57aW52aXRlTGlua308L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1ob3N0LXZpZXdfX2NhcmRzXCI+XHJcbiAgICAgICAgPFN0eWxlZENhcmRMaXN0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtaG9zdC12aWV3X19jYXJkLXdyYXBcIj5cclxuICAgICAgICAgICAgPFN0eWxlZENhcmRMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshZ3Vlc3RzVm90ZWR9XHJcbiAgICAgICAgICAgICAgcmV2ZWFsZWQ9e2FsbFZvdGVkfVxyXG4gICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3Bhbj57cm9vbS5ob3N0LnZvdGUgPyByb29tLmhvc3Qudm90ZSA6ICc/J308L3NwYW4+XHJcbiAgICAgICAgICAgICAgeyFob3N0Vm90ZWQgJiYgPHNtYWxsPldhaXQgdW50aWwgYWxsIGd1ZXN0cyB2b3RlZDwvc21hbGw+fVxyXG4gICAgICAgICAgICA8L1N0eWxlZENhcmRMaXN0SXRlbT5cclxuICAgICAgICAgICAgPHNwYW4+e3Jvb20uaG9zdC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3Jvb20uZ3Vlc3RzLm1hcCgoeyBpZCwgbmFtZSwgdm90ZSA9ICc/JyB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWhvc3Qtdmlld19fY2FyZC13cmFwXCIga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZENhcmRMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFzZXNzaW9uU3RhcnRlZCB8fCAhZ3Vlc3RWb3RlZChpZCl9XHJcbiAgICAgICAgICAgICAgICByZXZlYWxlZD17YWxsVm90ZWR9XHJcbiAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnthbGxWb3RlZCA/IHZvdGUgOiAnPyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvU3R5bGVkQ2FyZExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIHtpc0hvc3QgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImtpY2stZ3Vlc3QtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25LaWNrR3Vlc3RPdXQoeyBpZCwgbmFtZSB9KX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICtcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDxzcGFuPntuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1N0eWxlZENhcmRMaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgeyhpc0hvc3QgJiYgIXNlc3Npb25TdGFydGVkICYmICEhcm9vbS5ndWVzdHMubGVuZ3RoKSAmJiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17c3RhcnRTZXNzaW9ufVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29tcG9uZW50LWhvc3Qtdmlld19fYnV0dG9uIGNvbXBvbmVudC1ob3N0LXZpZXdfX2J1dHRvbi0tc3RhcnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFN0YXJ0IHNlc3Npb25cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKX1cclxuICAgICAgeyhhbGxWb3RlZCAmJiBpc0hvc3QpICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjbGVhclZvdGVzfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb21wb25lbnQtaG9zdC12aWV3X19idXR0b24gY29tcG9uZW50LWhvc3Qtdmlld19fYnV0dG9uLXJlc2V0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgWMOzYSBwaGnhur91IGLhuqd1XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDw+IDwvPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjYWxWb3Rlc31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tcG9uZW50LWhvc3Qtdmlld19fYnV0dG9uIGNvbXBvbmVudC1ob3N0LXZpZXdfX2J1dHRvbi1yZXNldFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFThu5VuZyBr4bq/dFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSG9zdFZpZXcucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHJvb206IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBndWVzdHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLFxyXG4gICAgaG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgdm90ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLFxyXG4gIH0pLFxyXG4gIGlzSG9zdDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBndWVzdHNWb3RlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBob3N0Vm90ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgY2xlYXJWb3RlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBzdGFydFNlc3Npb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgc2Vzc2lvblN0YXJ0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5Ib3N0Vmlldy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgcm9vbToge30sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3N0VmlldztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
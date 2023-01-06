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
  }, "X\xF3a phi\u1EBFu b\u1EA7u"), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, " "), __jsx(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: clearVotes,
    className: "component-host-view__button component-host-view__button-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob3N0LXZpZXcvaG9zdC12aWV3LWNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJIb3N0VmlldyIsImNsYXNzTmFtZSIsInJvb20iLCJndWVzdHNWb3RlZCIsImhvc3RWb3RlZCIsImNsZWFyVm90ZXMiLCJpc0hvc3QiLCJzdGFydFNlc3Npb24iLCJzZXNzaW9uU3RhcnRlZCIsInNvY2tldCIsInVzZVNvY2tldCIsImludml0ZUxpbmsiLCJwcm9jZXNzIiwiaWQiLCJndWVzdFZvdGVkIiwidXNlQ2FsbGJhY2siLCJndWVzdElkIiwiZ3Vlc3RzIiwiZmluZCIsInZvdGUiLCJvbktpY2tHdWVzdE91dCIsIm5hbWUiLCJ3aW5kb3ciLCJjb25maXJtIiwiZW1pdCIsInJvb21JZCIsImFsbFZvdGVkIiwiaG9zdCIsIm1hcCIsImxlbmd0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJzaGFwZSIsImFycmF5T2YiLCJib29sIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNSO0FBRWM7QUFDaUI7QUFDbkM7QUFFL0IsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVEsT0FTUjtFQUFBO0VBQUEsSUFSSkMsU0FBUyxRQUFUQSxTQUFTO0lBQ1RDLElBQUksUUFBSkEsSUFBSTtJQUNKQyxXQUFXLFFBQVhBLFdBQVc7SUFDWEMsU0FBUyxRQUFUQSxTQUFTO0lBQ1RDLFVBQVUsUUFBVkEsVUFBVTtJQUNWQyxNQUFNLFFBQU5BLE1BQU07SUFDTkMsWUFBWSxRQUFaQSxZQUFZO0lBQ1pDLGNBQWMsUUFBZEEsY0FBYztFQUVkLElBQU1DLE1BQU0sR0FBR0MsaUVBQVMsRUFBRTtFQUMxQixJQUFNQyxVQUFVLGFBQU1DLHVCQUE0QixzQkFBWVYsSUFBSSxDQUFDVyxFQUFFLENBQUU7RUFFdkUsSUFBTUMsVUFBVSxHQUFH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RUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS4yY2Q5MDY5MTc4ODRmNjk5NGVkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgdXNlU29ja2V0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9zb2NrZXQnO1xyXG5pbXBvcnQgeyBTdHlsZWRDYXJkTGlzdCwgU3R5bGVkQ2FyZExpc3RJdGVtIH0gZnJvbSAnLi4vY2FyZC1saXN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nO1xyXG5cclxuY29uc3QgSG9zdFZpZXcgPSAoe1xyXG4gIGNsYXNzTmFtZSxcclxuICByb29tLFxyXG4gIGd1ZXN0c1ZvdGVkLFxyXG4gIGhvc3RWb3RlZCxcclxuICBjbGVhclZvdGVzLFxyXG4gIGlzSG9zdCxcclxuICBzdGFydFNlc3Npb24sXHJcbiAgc2Vzc2lvblN0YXJ0ZWQsXHJcbn0pID0+IHtcclxuICBjb25zdCBzb2NrZXQgPSB1c2VTb2NrZXQoKTtcclxuICBjb25zdCBpbnZpdGVMaW5rID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH0vam9pbj9pZD0ke3Jvb20uaWR9YDtcclxuXHJcbiAgY29uc3QgZ3Vlc3RWb3RlZCA9IHVzZUNhbGxiYWNrKChndWVzdElkKSA9PiB7XHJcbiAgICBjb25zdCB7IHZvdGUgPSBudWxsIH0gPSByb29tLmd1ZXN0cy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBndWVzdElkKTtcclxuICAgIHJldHVybiB2b3RlO1xyXG4gIH0sIFtyb29tLmd1ZXN0c10pO1xyXG5cclxuICBjb25zdCBvbktpY2tHdWVzdE91dCA9IHVzZUNhbGxiYWNrKCh7IGlkLCBuYW1lIH0pID0+IHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybShgRG8geW91IHJlYWxseSB3YW50IHRvIGtpY2sgXCIke25hbWV9XCIgb3V0P2ApKSB7XHJcbiAgICAgIHNvY2tldC5lbWl0KCdraWNrR3Vlc3RPdXQnLCB7IHJvb21JZDogcm9vbS5pZCwgZ3Vlc3RJZDogaWQgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3NvY2tldCwgcm9vbS5pZF0pO1xyXG5cclxuICBjb25zdCBhbGxWb3RlZCA9IGd1ZXN0c1ZvdGVkICYmIGhvc3RWb3RlZDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGNvbXBvbmVudC1ob3N0LXZpZXdgfT5cclxuICAgICAge2lzSG9zdCAmJiAoXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBIaVxyXG4gICAgICAgICAgeycgJ31cclxuICAgICAgICAgIHtyb29tLmhvc3QubmFtZX1cclxuICAgICAgICAgICwgYuG6oW4gbMOgIGNo4bunLiBT4butIGThu6VuZyBsacOqbiBr4bq/dCBuw6B5IMSR4buDIG3hu51pIG5o4buvbmcgbmfGsOG7nWkga2jDoWM6XHJcbiAgICAgICAgICA8YSBocmVmPXtpbnZpdGVMaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+e2ludml0ZUxpbmt9PC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtaG9zdC12aWV3X19jYXJkc1wiPlxyXG4gICAgICAgIDxTdHlsZWRDYXJkTGlzdD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWhvc3Qtdmlld19fY2FyZC13cmFwXCI+XHJcbiAgICAgICAgICAgIDxTdHlsZWRDYXJkTGlzdEl0ZW1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWd1ZXN0c1ZvdGVkfVxyXG4gICAgICAgICAgICAgIHJldmVhbGVkPXthbGxWb3RlZH1cclxuICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3Jvb20uaG9zdC52b3RlID8gcm9vbS5ob3N0LnZvdGUgOiAnPyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIHshaG9zdFZvdGVkICYmIDxzbWFsbD5XYWl0IHVudGlsIGFsbCBndWVzdHMgdm90ZWQ8L3NtYWxsPn1cclxuICAgICAgICAgICAgPC9TdHlsZWRDYXJkTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxzcGFuPntyb29tLmhvc3QubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtyb29tLmd1ZXN0cy5tYXAoKHsgaWQsIG5hbWUsIHZvdGUgPSAnPycgfSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1ob3N0LXZpZXdfX2NhcmQtd3JhcFwiIGtleT17aWR9PlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRDYXJkTGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshc2Vzc2lvblN0YXJ0ZWQgfHwgIWd1ZXN0Vm90ZWQoaWQpfVxyXG4gICAgICAgICAgICAgICAgcmV2ZWFsZWQ9e2FsbFZvdGVkfVxyXG4gICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57YWxsVm90ZWQgPyB2b3RlIDogJz8nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1N0eWxlZENhcmRMaXN0SXRlbT5cclxuICAgICAgICAgICAgICB7aXNIb3N0ID8gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJraWNrLWd1ZXN0LWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uS2lja0d1ZXN0T3V0KHsgaWQsIG5hbWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICArXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICA8c3Bhbj57bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TdHlsZWRDYXJkTGlzdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsoaXNIb3N0ICYmICFzZXNzaW9uU3RhcnRlZCAmJiAhIXJvb20uZ3Vlc3RzLmxlbmd0aCkgJiYgKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0U2Vzc2lvbn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbXBvbmVudC1ob3N0LXZpZXdfX2J1dHRvbiBjb21wb25lbnQtaG9zdC12aWV3X19idXR0b24tLXN0YXJ0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBTdGFydCBzZXNzaW9uXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICl9XHJcbiAgICAgIHsoYWxsVm90ZWQgJiYgaXNIb3N0KSAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17Y2xlYXJWb3Rlc31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tcG9uZW50LWhvc3Qtdmlld19fYnV0dG9uIGNvbXBvbmVudC1ob3N0LXZpZXdfX2J1dHRvbi1yZXNldFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFjDs2EgcGhp4bq/dSBi4bqndVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8PiA8Lz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17Y2xlYXJWb3Rlc31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tcG9uZW50LWhvc3Qtdmlld19fYnV0dG9uIGNvbXBvbmVudC1ob3N0LXZpZXdfX2J1dHRvbi1yZXNldFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFThu5VuZyBr4bq/dFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSG9zdFZpZXcucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHJvb206IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBndWVzdHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLFxyXG4gICAgaG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgdm90ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLFxyXG4gIH0pLFxyXG4gIGlzSG9zdDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBndWVzdHNWb3RlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBob3N0Vm90ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgY2xlYXJWb3RlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBzdGFydFNlc3Npb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgc2Vzc2lvblN0YXJ0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5Ib3N0Vmlldy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgcm9vbToge30sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3N0VmlldztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
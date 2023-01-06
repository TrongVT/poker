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
  }, "Start session"), allVoted && isHost && __jsx(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: clearVotes,
    className: "component-host-view__button component-host-view__button-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, "X\xF3a phi\u1EBFu b\u1EA7u"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob3N0LXZpZXcvaG9zdC12aWV3LWNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJIb3N0VmlldyIsImNsYXNzTmFtZSIsInJvb20iLCJndWVzdHNWb3RlZCIsImhvc3RWb3RlZCIsImNsZWFyVm90ZXMiLCJpc0hvc3QiLCJzdGFydFNlc3Npb24iLCJzZXNzaW9uU3RhcnRlZCIsInNvY2tldCIsInVzZVNvY2tldCIsImludml0ZUxpbmsiLCJwcm9jZXNzIiwiaWQiLCJndWVzdFZvdGVkIiwidXNlQ2FsbGJhY2siLCJndWVzdElkIiwiZ3Vlc3RzIiwiZmluZCIsInZvdGUiLCJvbktpY2tHdWVzdE91dCIsIm5hbWUiLCJ3aW5kb3ciLCJjb25maXJtIiwiZW1pdCIsInJvb21JZCIsImFsbFZvdGVkIiwiaG9zdCIsIm1hcCIsImxlbmd0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJzaGFwZSIsImFycmF5T2YiLCJib29sIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNSO0FBRWM7QUFDaUI7QUFDbkM7QUFFL0IsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVEsT0FTUjtFQUFBO0VBQUEsSUFSSkMsU0FBUyxRQUFUQSxTQUFTO0lBQ1RDLElBQUksUUFBSkEsSUFBSTtJQUNKQyxXQUFXLFFBQVhBLFdBQVc7SUFDWEMsU0FBUyxRQUFUQSxTQUFTO0lBQ1RDLFVBQVUsUUFBVkEsVUFBVTtJQUNWQyxNQUFNLFFBQU5BLE1BQU07SUFDTkMsWUFBWSxRQUFaQSxZQUFZO0lBQ1pDLGNBQWMsUUFBZEEsY0FBYztFQUVkLElBQU1DLE1BQU0sR0FBR0MsaUVBQVMsRUFBRTtFQUMxQixJQUFNQyxVQUFVLGFBQU1DLHVCQUE0QixzQkFBWVYsSUFBSSxDQUFDVyxFQUFFLENBQUU7RUFFdkUsSUFBTUMsVUFBVSxHQUFH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QVU7RUFDdEMvQixJQUFJLEVBQUU2QixpREFBUyxDQUFDRyxLQUFLLENBQUM7SUFDcEJyQixFQUFFLEVBQUVrQixpREFBUyxDQUFDQyxNQUFNO0lBQ3BCWCxJQUFJLEVBQUVVLGlEQUFTLENBQUNDLE1BQU07SUFDdEJmLE1BQU0sRUFBRWMsaURBQVMsQ0FBQ0ksT0FBTyxDQUFDSixpREFBUyxDQUFDRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5Q1AsSUFBSSxFQUFFSSxpREFBUyxDQUFDRyxLQUFLLENBQUM7TUFDcEJiLElBQUksRUFBRVUsaURBQVMsQ0FBQ0MsTUFBTTtNQUN0QmIsSUFBSSxFQUFFWSxpREFBUyxDQUFDQztJQUNsQixDQUFDO0VBQ0gsQ0FBQyxDQUFDO0VBQ0YxQixNQUFNLEVBQUV5QixpREFBUyxDQUFDSyxJQUFJLENBQUNILFVBQVU7RUFDakM5QixXQUFXLEVBQUU0QixpREFBUyxDQUFDSyxJQUFJLENBQUNILFVBQVU7RUFDdEM3QixTQUFTLEVBQUUyQixpREFBUyxDQUFDSyxJQUFJLENBQUNILFVBQVU7RUFDcEM1QixVQUFVLEVBQUUwQixpREFBUyxDQUFDTSxJQUFJLENBQUNKLFVBQVU7RUFDckMxQixZQUFZLEVBQUV3QixpREFBUyxDQUFDTSxJQUFJLENBQUNKLFVBQVU7RUFDdkN6QixjQUFjLEVBQUV1QixpREFBUyxDQUFDSyxJQUFJLENBQUNIO0FBQ2pDLENBQUM7QUFFRGpDLFFBQVEsQ0FBQ3NDLFlBQVksR0FBRztFQUN0QnBDLElBQUksRUFBRSxDQUFDO0FBQ1QsQ0FBQztBQUVjRix1RUFBUSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tLmUwNTM4ZWFlZjc1MDEzNzUyNWI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VTb2NrZXQgfSBmcm9tICcuLi8uLi9jb250ZXh0L3NvY2tldCc7XHJcbmltcG9ydCB7IFN0eWxlZENhcmRMaXN0LCBTdHlsZWRDYXJkTGlzdEl0ZW0gfSBmcm9tICcuLi9jYXJkLWxpc3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbic7XHJcblxyXG5jb25zdCBIb3N0VmlldyA9ICh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIHJvb20sXHJcbiAgZ3Vlc3RzVm90ZWQsXHJcbiAgaG9zdFZvdGVkLFxyXG4gIGNsZWFyVm90ZXMsXHJcbiAgaXNIb3N0LFxyXG4gIHN0YXJ0U2Vzc2lvbixcclxuICBzZXNzaW9uU3RhcnRlZCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHNvY2tldCA9IHVzZVNvY2tldCgpO1xyXG4gIGNvbnN0IGludml0ZUxpbmsgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9qb2luP2lkPSR7cm9vbS5pZH1gO1xyXG5cclxuICBjb25zdCBndWVzdFZvdGVkID0gdXNlQ2FsbGJhY2soKGd1ZXN0SWQpID0+IHtcclxuICAgIGNvbnN0IHsgdm90ZSA9IG51bGwgfSA9IHJvb20uZ3Vlc3RzLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IGd1ZXN0SWQpO1xyXG4gICAgcmV0dXJuIHZvdGU7XHJcbiAgfSwgW3Jvb20uZ3Vlc3RzXSk7XHJcblxyXG4gIGNvbnN0IG9uS2lja0d1ZXN0T3V0ID0gdXNlQ2FsbGJhY2soKHsgaWQsIG5hbWUgfSkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5jb25maXJtKGBEbyB5b3UgcmVhbGx5IHdhbnQgdG8ga2ljayBcIiR7bmFtZX1cIiBvdXQ/YCkpIHtcclxuICAgICAgc29ja2V0LmVtaXQoJ2tpY2tHdWVzdE91dCcsIHsgcm9vbUlkOiByb29tLmlkLCBndWVzdElkOiBpZCB9KTtcclxuICAgIH1cclxuICB9LCBbc29ja2V0LCByb29tLmlkXSk7XHJcblxyXG4gIGNvbnN0IGFsbFZvdGVkID0gZ3Vlc3RzVm90ZWQgJiYgaG9zdFZvdGVkO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gY29tcG9uZW50LWhvc3Qtdmlld2B9PlxyXG4gICAgICB7aXNIb3N0ICYmIChcclxuICAgICAgICA8cD5cclxuICAgICAgICAgIEhpXHJcbiAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAge3Jvb20uaG9zdC5uYW1lfVxyXG4gICAgICAgICAgLCBi4bqhbiBsw6AgY2jhu6cuIFPhu60gZOG7pW5nIGxpw6puIGvhur90IG7DoHkgxJHhu4MgbeG7nWkgbmjhu69uZyBuZ8aw4budaSBraMOhYzpcclxuICAgICAgICAgIDxhIGhyZWY9e2ludml0ZUxpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj57aW52aXRlTGlua308L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1ob3N0LXZpZXdfX2NhcmRzXCI+XHJcbiAgICAgICAgPFN0eWxlZENhcmRMaXN0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtaG9zdC12aWV3X19jYXJkLXdyYXBcIj5cclxuICAgICAgICAgICAgPFN0eWxlZENhcmRMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshZ3Vlc3RzVm90ZWR9XHJcbiAgICAgICAgICAgICAgcmV2ZWFsZWQ9e2FsbFZvdGVkfVxyXG4gICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3Bhbj57cm9vbS5ob3N0LnZvdGUgPyByb29tLmhvc3Qudm90ZSA6ICc/J308L3NwYW4+XHJcbiAgICAgICAgICAgICAgeyFob3N0Vm90ZWQgJiYgPHNtYWxsPldhaXQgdW50aWwgYWxsIGd1ZXN0cyB2b3RlZDwvc21hbGw+fVxyXG4gICAgICAgICAgICA8L1N0eWxlZENhcmRMaXN0SXRlbT5cclxuICAgICAgICAgICAgPHNwYW4+e3Jvb20uaG9zdC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3Jvb20uZ3Vlc3RzLm1hcCgoeyBpZCwgbmFtZSwgdm90ZSA9ICc/JyB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWhvc3Qtdmlld19fY2FyZC13cmFwXCIga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZENhcmRMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFzZXNzaW9uU3RhcnRlZCB8fCAhZ3Vlc3RWb3RlZChpZCl9XHJcbiAgICAgICAgICAgICAgICByZXZlYWxlZD17YWxsVm90ZWR9XHJcbiAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnthbGxWb3RlZCA/IHZvdGUgOiAnPyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvU3R5bGVkQ2FyZExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIHtpc0hvc3QgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImtpY2stZ3Vlc3QtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25LaWNrR3Vlc3RPdXQoeyBpZCwgbmFtZSB9KX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICtcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDxzcGFuPntuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1N0eWxlZENhcmRMaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgeyhpc0hvc3QgJiYgIXNlc3Npb25TdGFydGVkICYmICEhcm9vbS5ndWVzdHMubGVuZ3RoKSAmJiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17c3RhcnRTZXNzaW9ufVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29tcG9uZW50LWhvc3Qtdmlld19fYnV0dG9uIGNvbXBvbmVudC1ob3N0LXZpZXdfX2J1dHRvbi0tc3RhcnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFN0YXJ0IHNlc3Npb25cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKX1cclxuICAgICAgeyhhbGxWb3RlZCAmJiBpc0hvc3QpICYmIChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtjbGVhclZvdGVzfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29tcG9uZW50LWhvc3Qtdmlld19fYnV0dG9uIGNvbXBvbmVudC1ob3N0LXZpZXdfX2J1dHRvbi1yZXNldFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgWMOzYSBwaGnhur91IGLhuqd1XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSG9zdFZpZXcucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHJvb206IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBndWVzdHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLFxyXG4gICAgaG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgdm90ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLFxyXG4gIH0pLFxyXG4gIGlzSG9zdDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBndWVzdHNWb3RlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBob3N0Vm90ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgY2xlYXJWb3RlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBzdGFydFNlc3Npb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgc2Vzc2lvblN0YXJ0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5Ib3N0Vmlldy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgcm9vbToge30sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3N0VmlldztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
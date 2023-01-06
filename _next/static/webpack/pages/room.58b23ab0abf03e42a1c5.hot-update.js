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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
    resultVoted = _useState[0],
    setResultVoted = _useState[1];
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
    var result = room.guests.map(function (x) {
      return x.vote;
    });
    var count = {};
    result.forEach(function (element) {
      count[element] = (count[element] || 0) + 1;
    });
    setResultVoted(JSON.stringify(count));
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
  }, "T\u1ED5ng k\u1EBFt"), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, "K\u1EBFt qu\u1EA3: ", resultVoted)));
};
_s(HostView, "4BeEvTBp95+bymuifOwLsF73Yg4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob3N0LXZpZXcvaG9zdC12aWV3LWNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJIb3N0VmlldyIsImNsYXNzTmFtZSIsInJvb20iLCJndWVzdHNWb3RlZCIsImhvc3RWb3RlZCIsImNsZWFyVm90ZXMiLCJpc0hvc3QiLCJzdGFydFNlc3Npb24iLCJzZXNzaW9uU3RhcnRlZCIsInVzZVN0YXRlIiwicmVzdWx0Vm90ZWQiLCJzZXRSZXN1bHRWb3RlZCIsInNvY2tldCIsInVzZVNvY2tldCIsImludml0ZUxpbmsiLCJwcm9jZXNzIiwiaWQiLCJndWVzdFZvdGVkIiwidXNlQ2FsbGJhY2siLCJndWVzdElkIiwiZ3Vlc3RzIiwiZmluZCIsInZvdGUiLCJvbktpY2tHdWVzdE91dCIsIm5hbWUiLCJ3aW5kb3ciLCJjb25maXJtIiwiZW1pdCIsInJvb21JZCIsImFsbFZvdGVkIiwiY2FsVm90ZXMiLCJyZXN1bHQiLCJtYXAiLCJ4IiwiY291bnQiLCJmb3JFYWNoIiwiZWxlbWVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJob3N0IiwibGVuZ3RoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwiYXJyYXlPZiIsImJvb2wiLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ2xCO0FBRWM7QUFDaUI7QUFDbkM7QUFFL0IsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVEsT0FTUjtFQUFBO0VBQUEsSUFSSkMsU0FBUyxRQUFUQSxTQUFTO0lBQ1RDLElBQUksUUFBSkEsSUFBSTtJQUNKQyxXQUFXLFFBQVhBLFdBQVc7SUFDWEMsU0FBUyxRQUFUQSxTQUFTO0lBQ1RDLFVBQVUsUUFBVkEsVUFBVTtJQUNWQyxNQUFNLFFBQU5BLE1BQU07SUFDTkMsWUFBWSxRQUFaQSxZQUFZO0lBQ1pDLGNBQWMsUUFBZEEsY0FB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LEVBQUV3QyxpREFBUyxDQUFDRyxLQUFLLENBQUM7SUFDcEI3QixFQUFFLEVBQUUwQixpREFBUyxDQUFDQyxNQUFNO0lBQ3BCbkIsSUFBSSxFQUFFa0IsaURBQVMsQ0FBQ0MsTUFBTTtJQUN0QnZCLE1BQU0sRUFBRXNCLGlEQUFTLENBQUNJLE9BQU8sQ0FBQ0osaURBQVMsQ0FBQ0csS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUNOLElBQUksRUFBRUcsaURBQVMsQ0FBQ0csS0FBSyxDQUFDO01BQ3BCckIsSUFBSSxFQUFFa0IsaURBQVMsQ0FBQ0MsTUFBTTtNQUN0QnJCLElBQUksRUFBRW9CLGlEQUFTLENBQUNDO0lBQ2xCLENBQUM7RUFDSCxDQUFDLENBQUM7RUFDRnJDLE1BQU0sRUFBRW9DLGlEQUFTLENBQUNLLElBQUksQ0FBQ0gsVUFBVTtFQUNqQ3pDLFdBQVcsRUFBRXVDLGlEQUFTLENBQUNLLElBQUksQ0FBQ0gsVUFBVTtFQUN0Q3hDLFNBQVMsRUFBRXNDLGlEQUFTLENBQUNLLElBQUksQ0FBQ0gsVUFBVTtFQUNwQ3ZDLFVBQVUsRUFBRXFDLGlEQUFTLENBQUNNLElBQUksQ0FBQ0osVUFBVTtFQUNyQ3JDLFlBQVksRUFBRW1DLGlEQUFTLENBQUNNLElBQUksQ0FBQ0osVUFBVTtFQUN2Q3BDLGNBQWMsRUFBRWtDLGlEQUFTLENBQUNLLElBQUksQ0FBQ0g7QUFDakMsQ0FBQztBQUVENUMsUUFBUSxDQUFDaUQsWUFBWSxHQUFHO0VBQ3RCL0MsSUFBSSxFQUFFLENBQUM7QUFDVCxDQUFDO0FBRWNGLHVFQUFRLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20uNThiMjNhYjBhYmYwM2U0MmExYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VTb2NrZXQgfSBmcm9tICcuLi8uLi9jb250ZXh0L3NvY2tldCc7XHJcbmltcG9ydCB7IFN0eWxlZENhcmRMaXN0LCBTdHlsZWRDYXJkTGlzdEl0ZW0gfSBmcm9tICcuLi9jYXJkLWxpc3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbic7XHJcblxyXG5jb25zdCBIb3N0VmlldyA9ICh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIHJvb20sXHJcbiAgZ3Vlc3RzVm90ZWQsXHJcbiAgaG9zdFZvdGVkLFxyXG4gIGNsZWFyVm90ZXMsXHJcbiAgaXNIb3N0LFxyXG4gIHN0YXJ0U2Vzc2lvbixcclxuICBzZXNzaW9uU3RhcnRlZCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtyZXN1bHRWb3RlZCwgc2V0UmVzdWx0Vm90ZWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHNvY2tldCA9IHVzZVNvY2tldCgpO1xyXG4gIGNvbnN0IGludml0ZUxpbmsgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9qb2luP2lkPSR7cm9vbS5pZH1gO1xyXG5cclxuICBjb25zdCBndWVzdFZvdGVkID0gdXNlQ2FsbGJhY2soKGd1ZXN0SWQpID0+IHtcclxuICAgIGNvbnN0IHsgdm90ZSA9IG51bGwgfSA9IHJvb20uZ3Vlc3RzLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IGd1ZXN0SWQpO1xyXG4gICAgcmV0dXJuIHZvdGU7XHJcbiAgfSwgW3Jvb20uZ3Vlc3RzXSk7XHJcblxyXG4gIGNvbnN0IG9uS2lja0d1ZXN0T3V0ID0gdXNlQ2FsbGJhY2soKHsgaWQsIG5hbWUgfSkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5jb25maXJtKGBEbyB5b3UgcmVhbGx5IHdhbnQgdG8ga2ljayBcIiR7bmFtZX1cIiBvdXQ/YCkpIHtcclxuICAgICAgc29ja2V0LmVtaXQoJ2tpY2tHdWVzdE91dCcsIHsgcm9vbUlkOiByb29tLmlkLCBndWVzdElkOiBpZCB9KTtcclxuICAgIH1cclxuICB9LCBbc29ja2V0LCByb29tLmlkXSk7XHJcblxyXG4gIGNvbnN0IGFsbFZvdGVkID0gZ3Vlc3RzVm90ZWQgJiYgaG9zdFZvdGVkO1xyXG4gIGNvbnN0IGNhbFZvdGVzID0gKCkgPT4ge1xyXG4gICAgdmFyIHJlc3VsdCA9IHJvb20uZ3Vlc3RzLm1hcCh4PT54LnZvdGUpO1xyXG4gICAgY29uc3QgY291bnQgPSB7fTtcclxuICAgIHJlc3VsdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBjb3VudFtlbGVtZW50XSA9IChjb3VudFtlbGVtZW50XSB8fCAwKSArIDE7XHJcbiAgICB9KTtcclxuICAgIHNldFJlc3VsdFZvdGVkKEpTT04uc3RyaW5naWZ5KGNvdW50KSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBjb21wb25lbnQtaG9zdC12aWV3YH0+XHJcbiAgICAgIHtpc0hvc3QgJiYgKFxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgSGlcclxuICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICB7cm9vbS5ob3N0Lm5hbWV9XHJcbiAgICAgICAgICAsIGLhuqFuIGzDoCBjaOG7py4gU+G7rSBk4bulbmcgbGnDqm4ga+G6v3QgbsOgeSDEkeG7gyBt4budaSBuaOG7r25nIG5nxrDhu51pIGtow6FjOlxyXG4gICAgICAgICAgPGEgaHJlZj17aW52aXRlTGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPntpbnZpdGVMaW5rfTwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWhvc3Qtdmlld19fY2FyZHNcIj5cclxuICAgICAgICA8U3R5bGVkQ2FyZExpc3Q+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1ob3N0LXZpZXdfX2NhcmQtd3JhcFwiPlxyXG4gICAgICAgICAgICA8U3R5bGVkQ2FyZExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFndWVzdHNWb3RlZH1cclxuICAgICAgICAgICAgICByZXZlYWxlZD17YWxsVm90ZWR9XHJcbiAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntyb29tLmhvc3Qudm90ZSA/IHJvb20uaG9zdC52b3RlIDogJz8nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7IWhvc3RWb3RlZCAmJiA8c21hbGw+V2FpdCB1bnRpbCBhbGwgZ3Vlc3RzIHZvdGVkPC9zbWFsbD59XHJcbiAgICAgICAgICAgIDwvU3R5bGVkQ2FyZExpc3RJdGVtPlxyXG4gICAgICAgICAgICA8c3Bhbj57cm9vbS5ob3N0Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7cm9vbS5ndWVzdHMubWFwKCh7IGlkLCBuYW1lLCB2b3RlID0gJz8nIH0pID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtaG9zdC12aWV3X19jYXJkLXdyYXBcIiBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICA8U3R5bGVkQ2FyZExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXNlc3Npb25TdGFydGVkIHx8ICFndWVzdFZvdGVkKGlkKX1cclxuICAgICAgICAgICAgICAgIHJldmVhbGVkPXthbGxWb3RlZH1cclxuICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2FsbFZvdGVkID8gdm90ZSA6ICc/J308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRDYXJkTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAge2lzSG9zdCA/IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia2ljay1ndWVzdC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbktpY2tHdWVzdE91dCh7IGlkLCBuYW1lIH0pfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgK1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPHNwYW4+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU3R5bGVkQ2FyZExpc3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7KGlzSG9zdCAmJiAhc2Vzc2lvblN0YXJ0ZWQgJiYgISFyb29tLmd1ZXN0cy5sZW5ndGgpICYmIChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtzdGFydFNlc3Npb259XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb21wb25lbnQtaG9zdC12aWV3X19idXR0b24gY29tcG9uZW50LWhvc3Qtdmlld19fYnV0dG9uLS1zdGFydFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU3RhcnQgc2Vzc2lvblxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICB7KGFsbFZvdGVkICYmIGlzSG9zdCkgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NsZWFyVm90ZXN9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbXBvbmVudC1ob3N0LXZpZXdfX2J1dHRvbiBjb21wb25lbnQtaG9zdC12aWV3X19idXR0b24tcmVzZXRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBYw7NhIHBoaeG6v3UgYuG6p3VcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPD4gPC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NhbFZvdGVzfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb21wb25lbnQtaG9zdC12aWV3X19idXR0b24gY29tcG9uZW50LWhvc3Qtdmlld19fYnV0dG9uLXJlc2V0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVOG7lW5nIGvhur90XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICA8cD5L4bq/dCBxdeG6ozoge3Jlc3VsdFZvdGVkfTwvcD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Ib3N0Vmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgcm9vbTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGd1ZXN0czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSksXHJcbiAgICBob3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICB2b3RlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbiAgaXNIb3N0OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGd1ZXN0c1ZvdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGhvc3RWb3RlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBjbGVhclZvdGVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHN0YXJ0U2Vzc2lvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBzZXNzaW9uU3RhcnRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbkhvc3RWaWV3LmRlZmF1bHRQcm9wcyA9IHtcclxuICByb29tOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvc3RWaWV3O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
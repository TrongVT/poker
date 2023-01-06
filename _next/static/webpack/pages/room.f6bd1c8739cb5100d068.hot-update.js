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
    alert("Kết quả: " + JSON.stringify(count));
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
  }, "K\u1EBFt qu\u1EA3: ")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob3N0LXZpZXcvaG9zdC12aWV3LWNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJIb3N0VmlldyIsImNsYXNzTmFtZSIsInJvb20iLCJndWVzdHNWb3RlZCIsImhvc3RWb3RlZCIsImNsZWFyVm90ZXMiLCJpc0hvc3QiLCJzdGFydFNlc3Npb24iLCJzZXNzaW9uU3RhcnRlZCIsInNvY2tldCIsInVzZVNvY2tldCIsImludml0ZUxpbmsiLCJwcm9jZXNzIiwiaWQiLCJndWVzdFZvdGVkIiwidXNlQ2FsbGJhY2siLCJndWVzdElkIiwiZ3Vlc3RzIiwiZmluZCIsInZvdGUiLCJvbktpY2tHdWVzdE91dCIsIm5hbWUiLCJ3aW5kb3ciLCJjb25maXJtIiwiZW1pdCIsInJvb21JZCIsImFsbFZvdGVkIiwiY2FsVm90ZXMiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwibWFwIiwieCIsImNvdW50IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJob3N0IiwibGVuZ3RoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwiYXJyYXlPZiIsImJvb2wiLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1I7QUFFYztBQUNpQjtBQUNuQztBQUUvQixJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUSxPQVNSO0VBQUE7RUFBQSxJQVJKQyxTQUFTLFFBQVRBLFNBQVM7SUFDVEMsSUFBSSxRQUFKQSxJQUFJO0lBQ0pDLFdBQVcsUUFBWEEsV0FBVztJQUNYQyxTQUFTLFFBQVRBLFNBQVM7SUFDVEMsVUFBVSxRQUFWQSxVQUFVO0lBQ1ZDLE1BQU0sUUFBTkEsTUFBTTtJQUNOQyxZQUFZLFFBQVpBLFlBQVk7SUFDWkMsY0FBYyxRQUFkQSxjQUFjO0VBRWQsSUFBTUMsTUFBTSxH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aURBQVMsQ0FBQ0MsTUFBTTtJQUNwQnRCLElBQUksRUFBRXFCLGlEQUFTLENBQUNDLE1BQU07SUFDdEIxQixNQUFNLEVBQUV5QixpREFBUyxDQUFDSSxPQUFPLENBQUNKLGlEQUFTLENBQUNHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDTixJQUFJLEVBQUVHLGlEQUFTLENBQUNHLEtBQUssQ0FBQztNQUNwQnhCLElBQUksRUFBRXFCLGlEQUFTLENBQUNDLE1BQU07TUFDdEJ4QixJQUFJLEVBQUV1QixpREFBUyxDQUFDQztJQUNsQixDQUFDO0VBQ0gsQ0FBQyxDQUFDO0VBQ0ZyQyxNQUFNLEVBQUVvQyxpREFBUyxDQUFDSyxJQUFJLENBQUNILFVBQVU7RUFDakN6QyxXQUFXLEVBQUV1QyxpREFBUyxDQUFDSyxJQUFJLENBQUNILFVBQVU7RUFDdEN4QyxTQUFTLEVBQUVzQyxpREFBUyxDQUFDSyxJQUFJLENBQUNILFVBQVU7RUFDcEN2QyxVQUFVLEVBQUVxQyxpREFBUyxDQUFDTSxJQUFJLENBQUNKLFVBQVU7RUFDckNyQyxZQUFZLEVBQUVtQyxpREFBUyxDQUFDTSxJQUFJLENBQUNKLFVBQVU7RUFDdkNwQyxjQUFjLEVBQUVrQyxpREFBUyxDQUFDSyxJQUFJLENBQUNIO0FBQ2pDLENBQUM7QUFFRDVDLFFBQVEsQ0FBQ2lELFlBQVksR0FBRztFQUN0Qi9DLElBQUksRUFBRSxDQUFDO0FBQ1QsQ0FBQztBQUVjRix1RUFBUSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tLmY2YmQxYzg3MzljYjUxMDBkMDY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VTb2NrZXQgfSBmcm9tICcuLi8uLi9jb250ZXh0L3NvY2tldCc7XHJcbmltcG9ydCB7IFN0eWxlZENhcmRMaXN0LCBTdHlsZWRDYXJkTGlzdEl0ZW0gfSBmcm9tICcuLi9jYXJkLWxpc3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbic7XHJcblxyXG5jb25zdCBIb3N0VmlldyA9ICh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIHJvb20sXHJcbiAgZ3Vlc3RzVm90ZWQsXHJcbiAgaG9zdFZvdGVkLFxyXG4gIGNsZWFyVm90ZXMsXHJcbiAgaXNIb3N0LFxyXG4gIHN0YXJ0U2Vzc2lvbixcclxuICBzZXNzaW9uU3RhcnRlZCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHNvY2tldCA9IHVzZVNvY2tldCgpO1xyXG4gIGNvbnN0IGludml0ZUxpbmsgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfS9qb2luP2lkPSR7cm9vbS5pZH1gO1xyXG5cclxuICBjb25zdCBndWVzdFZvdGVkID0gdXNlQ2FsbGJhY2soKGd1ZXN0SWQpID0+IHtcclxuICAgIGNvbnN0IHsgdm90ZSA9IG51bGwgfSA9IHJvb20uZ3Vlc3RzLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IGd1ZXN0SWQpO1xyXG4gICAgcmV0dXJuIHZvdGU7XHJcbiAgfSwgW3Jvb20uZ3Vlc3RzXSk7XHJcblxyXG4gIGNvbnN0IG9uS2lja0d1ZXN0T3V0ID0gdXNlQ2FsbGJhY2soKHsgaWQsIG5hbWUgfSkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5jb25maXJtKGBEbyB5b3UgcmVhbGx5IHdhbnQgdG8ga2ljayBcIiR7bmFtZX1cIiBvdXQ/YCkpIHtcclxuICAgICAgc29ja2V0LmVtaXQoJ2tpY2tHdWVzdE91dCcsIHsgcm9vbUlkOiByb29tLmlkLCBndWVzdElkOiBpZCB9KTtcclxuICAgIH1cclxuICB9LCBbc29ja2V0LCByb29tLmlkXSk7XHJcblxyXG4gIGNvbnN0IGFsbFZvdGVkID0gZ3Vlc3RzVm90ZWQgJiYgaG9zdFZvdGVkO1xyXG4gIGNvbnN0IGNhbFZvdGVzID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2NhbFZvdGVzJyk7XHJcbiAgICB2YXIgcmVzdWx0ID0gcm9vbS5ndWVzdHMubWFwKHg9Pngudm90ZSk7XHJcbiAgICBjb25zdCBjb3VudCA9IHt9O1xyXG4gICAgcmVzdWx0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGNvdW50W2VsZW1lbnRdID0gKGNvdW50W2VsZW1lbnRdIHx8IDApICsgMTtcclxuICAgIH0pO1xyXG4gICAgYWxlcnQoXCJL4bq/dCBxdeG6ozogXCIgKyBKU09OLnN0cmluZ2lmeShjb3VudCkpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gY29tcG9uZW50LWhvc3Qtdmlld2B9PlxyXG4gICAgICB7aXNIb3N0ICYmIChcclxuICAgICAgICA8cD5cclxuICAgICAgICAgIEhpXHJcbiAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAge3Jvb20uaG9zdC5uYW1lfVxyXG4gICAgICAgICAgLCBi4bqhbiBsw6AgY2jhu6cuIFPhu60gZOG7pW5nIGxpw6puIGvhur90IG7DoHkgxJHhu4MgbeG7nWkgbmjhu69uZyBuZ8aw4budaSBraMOhYzpcclxuICAgICAgICAgIDxhIGhyZWY9e2ludml0ZUxpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj57aW52aXRlTGlua308L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1ob3N0LXZpZXdfX2NhcmRzXCI+XHJcbiAgICAgICAgPFN0eWxlZENhcmRMaXN0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtaG9zdC12aWV3X19jYXJkLXdyYXBcIj5cclxuICAgICAgICAgICAgPFN0eWxlZENhcmRMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshZ3Vlc3RzVm90ZWR9XHJcbiAgICAgICAgICAgICAgcmV2ZWFsZWQ9e2FsbFZvdGVkfVxyXG4gICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3Bhbj57cm9vbS5ob3N0LnZvdGUgPyByb29tLmhvc3Qudm90ZSA6ICc/J308L3NwYW4+XHJcbiAgICAgICAgICAgICAgeyFob3N0Vm90ZWQgJiYgPHNtYWxsPldhaXQgdW50aWwgYWxsIGd1ZXN0cyB2b3RlZDwvc21hbGw+fVxyXG4gICAgICAgICAgICA8L1N0eWxlZENhcmRMaXN0SXRlbT5cclxuICAgICAgICAgICAgPHNwYW4+e3Jvb20uaG9zdC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3Jvb20uZ3Vlc3RzLm1hcCgoeyBpZCwgbmFtZSwgdm90ZSA9ICc/JyB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWhvc3Qtdmlld19fY2FyZC13cmFwXCIga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZENhcmRMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFzZXNzaW9uU3RhcnRlZCB8fCAhZ3Vlc3RWb3RlZChpZCl9XHJcbiAgICAgICAgICAgICAgICByZXZlYWxlZD17YWxsVm90ZWR9XHJcbiAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnthbGxWb3RlZCA/IHZvdGUgOiAnPyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvU3R5bGVkQ2FyZExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIHtpc0hvc3QgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImtpY2stZ3Vlc3QtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25LaWNrR3Vlc3RPdXQoeyBpZCwgbmFtZSB9KX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICtcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDxzcGFuPntuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1N0eWxlZENhcmRMaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgeyhpc0hvc3QgJiYgIXNlc3Npb25TdGFydGVkICYmICEhcm9vbS5ndWVzdHMubGVuZ3RoKSAmJiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17c3RhcnRTZXNzaW9ufVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29tcG9uZW50LWhvc3Qtdmlld19fYnV0dG9uIGNvbXBvbmVudC1ob3N0LXZpZXdfX2J1dHRvbi0tc3RhcnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFN0YXJ0IHNlc3Npb25cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKX1cclxuICAgICAgeyhhbGxWb3RlZCAmJiBpc0hvc3QpICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjbGVhclZvdGVzfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb21wb25lbnQtaG9zdC12aWV3X19idXR0b24gY29tcG9uZW50LWhvc3Qtdmlld19fYnV0dG9uLXJlc2V0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgWMOzYSBwaGnhur91IGLhuqd1XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDw+IDwvPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjYWxWb3Rlc31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tcG9uZW50LWhvc3Qtdmlld19fYnV0dG9uIGNvbXBvbmVudC1ob3N0LXZpZXdfX2J1dHRvbi1yZXNldFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFThu5VuZyBr4bq/dFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgPHA+S+G6v3QgcXXhuqM6IDwvcD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Ib3N0Vmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgcm9vbTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGd1ZXN0czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSksXHJcbiAgICBob3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICB2b3RlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbiAgaXNIb3N0OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGd1ZXN0c1ZvdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGhvc3RWb3RlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBjbGVhclZvdGVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHN0YXJ0U2Vzc2lvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBzZXNzaW9uU3RhcnRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbkhvc3RWaWV3LmRlZmF1bHRQcm9wcyA9IHtcclxuICByb29tOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvc3RWaWV3O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
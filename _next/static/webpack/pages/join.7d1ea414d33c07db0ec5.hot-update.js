webpackHotUpdate_N_E("pages/join",{

/***/ "./pages/join/join.logic.js":
/*!**********************************!*\
  !*** ./pages/join/join.logic.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_global_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/global-state */ "./context/global-state/index.js");
/* harmony import */ var _reducer_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducer/actions */ "./reducer/actions.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_html_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/html-head */ "./components/html-head/index.js");
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/input */ "./components/input/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/button */ "./components/button/index.js");
/* harmony import */ var _context_socket__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../context/socket */ "./context/socket/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks */ "./hooks/index.js");

var _this = undefined,
  _jsxFileName = "D:\\FEAV\\SourceCode\\react\\planning.poker\\scrum-poker\\pages\\join\\join.logic.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var Join = function Join(_ref) {
  _s();
  var className = _ref.className;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var socket = Object(_context_socket__WEBPACK_IMPORTED_MODULE_11__["useSocket"])();
  var _useGlobalState = Object(_context_global_state__WEBPACK_IMPORTED_MODULE_5__["useGlobalState"])(),
    _useGlobalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGlobalState, 2),
    dispatch = _useGlobalState2[1];
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
    listenersReady = _useState[0],
    setListenersReady = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
    guestName = _useState2[0],
    setGuestName = _useState2[1];
  var isValidGuestName = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return guestName.length >= 2;
  }, [guestName.length]);
  var onGuestChangeName = function onGuestChangeName(_ref2) {
    var value = _ref2.target.value;
    setGuestName(value);
  };
  var joinRoom = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var _router$query$id = router.query.id,
      roomId = _router$query$id === void 0 ? null : _router$query$id;
    if (!roomId) {
      alert('wrong URL');
      router.push('/');
      return;
    }
    if (socket && roomId && isValidGuestName) {
      socket.emit('joinRoom', {
        id: roomId,
        guestName: guestName
      });
    }
  }, [socket, router, guestName, isValidGuestName]);
  Object(_hooks__WEBPACK_IMPORTED_MODULE_12__["useEnterKey"])(joinRoom);
  var onJoinedRoom = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (joinedRoom) {
    dispatch(Object(_reducer_actions__WEBPACK_IMPORTED_MODULE_6__["setRoom"])(joinedRoom));
    router.push("/room?id=".concat(joinedRoom.id));
  }, [router, dispatch]);
  var onUnexistingRoom = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    router.push('/unexisting-room');
  }, [router]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (socket && !listenersReady) {
      socket.on('guestJoined', onJoinedRoom);
      socket.on('unexistingRoom', onUnexistingRoom);
      setListenersReady(true);
    }
  }, [socket, listenersReady, onJoinedRoom, onUnexistingRoom]);
  return __jsx("div", {
    id: "component-join",
    className: "".concat(className),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(_components_html_head__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "B\xECnh ch\u1ECDn nh\xE2n vi\xEAn \u01B0u t\xFA - Tham gia",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, "Tham gia b\xECnh ch\u1ECDn"), __jsx("div", {
    className: "component-join__content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(_components_input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "component-join__input component-home__input__host-name",
    placeholder: "Your name",
    onChange: onGuestChangeName,
    value: guestName,
    size: "lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "component-join__button",
    onClick: joinRoom,
    size: "lg",
    disabled: !isValidGuestName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, "Tham gia"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, "Ho\u1EB7c n\u1EBFu b\u1EA1n th\xEDch,", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "H\xE3y t\u1EA1o m\u1ED9t ph\xF2ng m\u1EDBi"), "."))));
};
_s(Join, "lJvMe19mkIxqGZ2+edPDXGxJ8O8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], _context_socket__WEBPACK_IMPORTED_MODULE_11__["useSocket"], _context_global_state__WEBPACK_IMPORTED_MODULE_5__["useGlobalState"], _hooks__WEBPACK_IMPORTED_MODULE_12__["useEnterKey"]];
});
_c = Join;
Join.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
Join.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Join);
var _c;
$RefreshReg$(_c, "Join");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvam9pbi9qb2luLmxvZ2ljLmpzIl0sIm5hbWVzIjpbIkpvaW4iLCJjbGFzc05hbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzb2NrZXQiLCJ1c2VTb2NrZXQiLCJ1c2VHbG9iYWxTdGF0ZSIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJsaXN0ZW5lcnNSZWFkeSIsInNldExpc3RlbmVyc1JlYWR5IiwiZ3Vlc3ROYW1lIiwic2V0R3Vlc3ROYW1lIiwiaXNWYWxpZEd1ZXN0TmFtZSIsInVzZU1lbW8iLCJsZW5ndGgiLCJvbkd1ZXN0Q2hhbmdlTmFtZSIsInZhbHVlIiwidGFyZ2V0Iiwiam9pblJvb20iLCJ1c2VDYWxsYmFjayIsInF1ZXJ5IiwiaWQiLCJyb29tSWQiLCJhbGVydCIsInB1c2giLCJlbWl0IiwidXNlRW50ZXJLZXkiLCJvbkpvaW5lZFJvb20iLCJqb2luZWRSb29tIiwic2V0Um9vbSIsIm9uVW5leGlzdGluZ1Jvb20iLCJ1c2VFZmZlY3QiLCJvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVlO0FBQ29CO0FBQ0s7QUFDWDtBQUUrQjtBQUNaO0FBQ0g7QUFDSztBQUNEO0FBQ0U7QUFDRjtBQUNQO0FBRTFDLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFJLE9BQXNCO0VBQUE7RUFBQSxJQUFoQkMsU0FBUyxRQUFUQSxTQUFTO0VBQ3ZCLElBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBRTtFQUMxQixJQUFNQyxNQUFNLEdBQUdDLGtFQUFTLEVBQUU7RUFDMUIsc0JBQXFCQyw0RUFBYyxFQUFFO0lBQUE7SUFBNUJDLFFBQVE7RUFDakIsZ0JBQTRDQyxzREFBUSxDQUFDLEtBQUssQ0FBQztJQUFwREMsY0FBYztJQUFFQyxpQkFBaUI7RUFDeEMsaUJBQWtDRixz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O0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFDVCxFQUNGLE1BQUMsMkRBQVk7SUFDWCxTQUFTLEVBQUMsd0JBQXdCO0lBQ2xDLE9BQU8sRUFBRVEsUUFBUztJQUNsQixJQUFJLEVBQUMsSUFBSTtJQUNULFFBQVEsRUFBRSxDQUFDTixnQkFBaUI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUM3QixVQUVELENBQWUsRUFDZjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQUcsdUNBRUQsRUFBQyxHQUFHLEVBQ0osTUFBQyxnREFBSTtJQUFDLElBQUksRUFBQyxHQUFHO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBQyw0Q0FBcUIsQ0FBTyxLQUU3QyxDQUFJLENBQ0EsQ0FDQyxDQUNMO0FBRVYsQ0FBQztBQUFDLEdBMUVJYixJQUFJO0VBQUEsUUFDT0cscURBQVMsRUFDVEUsMERBQVMsRUFDSEMsb0VBQWMsRUFxQm5DcUIsbURBQVc7QUFBQTtBQUFBLEtBeEJQM0IsSUFBSTtBQTRFVkEsSUFBSSxDQUFDa0MsU0FBUyxHQUFHO0VBQ2ZqQyxTQUFTLEVBQUVrQyxpREFBUyxDQUFDQyxNQUFNLENBQUNDO0FBQzlCLENBQUM7QUFFRHJDLElBQUksQ0FBQ3NDLFlBQVksR0FBRyxDQUFDLENBQUM7QUFFUHRDLG1FQUFJLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2pvaW4uN2QxZWE0MTRkMzNjMDdkYjBlYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZUNhbGxiYWNrLFxyXG59IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tICcuLi8uLi9jb250ZXh0L2dsb2JhbC1zdGF0ZSc7XHJcbmltcG9ydCB7IHNldFJvb20gfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2FjdGlvbnMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IEh0bWxIZWFkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaHRtbC1oZWFkJztcclxuaW1wb3J0IFN0eWxlZElucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5wdXQnO1xyXG5pbXBvcnQgU3R5bGVkQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uJztcclxuaW1wb3J0IHsgdXNlU29ja2V0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9zb2NrZXQnO1xyXG5pbXBvcnQgeyB1c2VFbnRlcktleSB9IGZyb20gJy4uLy4uL2hvb2tzJztcclxuXHJcbmNvbnN0IEpvaW4gPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHNvY2tldCA9IHVzZVNvY2tldCgpO1xyXG4gIGNvbnN0IFssIGRpc3BhdGNoXSA9IHVzZUdsb2JhbFN0YXRlKCk7XHJcbiAgY29uc3QgW2xpc3RlbmVyc1JlYWR5LCBzZXRMaXN0ZW5lcnNSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2d1ZXN0TmFtZSwgc2V0R3Vlc3ROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBpc1ZhbGlkR3Vlc3ROYW1lID0gdXNlTWVtbygoKSA9PiBndWVzdE5hbWUubGVuZ3RoID49IDIsIFtndWVzdE5hbWUubGVuZ3RoXSk7XHJcblxyXG4gIGNvbnN0IG9uR3Vlc3RDaGFuZ2VOYW1lID0gKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xyXG4gICAgc2V0R3Vlc3ROYW1lKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBqb2luUm9vbSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IHsgaWQ6IHJvb21JZCA9IG51bGwgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGlmICghcm9vbUlkKSB7XHJcbiAgICAgIGFsZXJ0KCd3cm9uZyBVUkwnKTtcclxuICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHNvY2tldCAmJiByb29tSWQgJiYgaXNWYWxpZEd1ZXN0TmFtZSkge1xyXG4gICAgICBzb2NrZXQuZW1pdCgnam9pblJvb20nLCB7IGlkOiByb29tSWQsIGd1ZXN0TmFtZSB9KTtcclxuICAgIH1cclxuICB9LCBbc29ja2V0LCByb3V0ZXIsIGd1ZXN0TmFtZSwgaXNWYWxpZEd1ZXN0TmFtZV0pO1xyXG5cclxuICB1c2VFbnRlcktleShqb2luUm9vbSk7XHJcblxyXG4gIGNvbnN0IG9uSm9pbmVkUm9vbSA9IHVzZUNhbGxiYWNrKChqb2luZWRSb29tKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRSb29tKGpvaW5lZFJvb20pKTtcclxuICAgIHJvdXRlci5wdXNoKGAvcm9vbT9pZD0ke2pvaW5lZFJvb20uaWR9YCk7XHJcbiAgfSwgW3JvdXRlciwgZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3Qgb25VbmV4aXN0aW5nUm9vbSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKCcvdW5leGlzdGluZy1yb29tJyk7XHJcbiAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNvY2tldCAmJiAhbGlzdGVuZXJzUmVhZHkpIHtcclxuICAgICAgc29ja2V0Lm9uKCdndWVzdEpvaW5lZCcsIG9uSm9pbmVkUm9vbSk7XHJcbiAgICAgIHNvY2tldC5vbigndW5leGlzdGluZ1Jvb20nLCBvblVuZXhpc3RpbmdSb29tKTtcclxuICAgICAgc2V0TGlzdGVuZXJzUmVhZHkodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW3NvY2tldCwgbGlzdGVuZXJzUmVhZHksIG9uSm9pbmVkUm9vbSwgb25VbmV4aXN0aW5nUm9vbV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImNvbXBvbmVudC1qb2luXCIgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9YH0+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPEh0bWxIZWFkIHRpdGxlPVwiQsOsbmggY2jhu41uIG5ow6JuIHZpw6puIMawdSB0w7ogLSBUaGFtIGdpYVwiIC8+XHJcbiAgICAgICAgPGgxPlRoYW0gZ2lhIGLDrG5oIGNo4buNbjwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtam9pbl9fY29udGVudFwiPlxyXG4gICAgICAgICAgPFN0eWxlZElucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbXBvbmVudC1qb2luX19pbnB1dCBjb21wb25lbnQtaG9tZV9faW5wdXRfX2hvc3QtbmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uR3Vlc3RDaGFuZ2VOYW1lfVxyXG4gICAgICAgICAgICB2YWx1ZT17Z3Vlc3ROYW1lfVxyXG4gICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTdHlsZWRCdXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tcG9uZW50LWpvaW5fX2J1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2pvaW5Sb29tfVxyXG4gICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IWlzVmFsaWRHdWVzdE5hbWV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFRoYW0gZ2lhXHJcbiAgICAgICAgICA8L1N0eWxlZEJ1dHRvbj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBIb+G6t2MgbuG6v3UgYuG6oW4gdGjDrWNoLFxyXG4gICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkjDo3kgdOG6oW8gbeG7mXQgcGjDsm5nIG3hu5tpPC9MaW5rPlxyXG4gICAgICAgICAgICAuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkpvaW4ucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuSm9pbi5kZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpvaW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
"use strict";
(self["webpackChunkzoft_site"] = self["webpackChunkzoft_site"] || []).push([["src_app_project-modules_auth_auth_module_ts"],{

/***/ 1014:
/*!*************************************************************!*\
  !*** ./src/app/project-modules/auth/auth-routing-module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component */ 8119);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 7253);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up/sign-up.component */ 7220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: '',
  component: _auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent,
  children: [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
  }, {
    path: 'sign-up',
    component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__.SignUpComponent
  }]
}];
class AuthRoutingModule {}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) {
  return new (t || AuthRoutingModule)();
};
AuthRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AuthRoutingModule
});
AuthRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 8119:
/*!********************************************************!*\
  !*** ./src/app/project-modules/auth/auth.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AuthComponent {}
AuthComponent.ɵfac = function AuthComponent_Factory(t) {
  return new (t || AuthComponent)();
};
AuthComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AuthComponent,
  selectors: [["app-auth"]],
  decls: 2,
  vars: 0,
  consts: [[1, "full-height"]],
  template: function AuthComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] { height: 100%; }\r\nbody[_ngcontent-%COMP%] { \r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    background-color:  #E9E9E9;;\r\n    font-family: \"Noto Sans JP\", sans-serif !important;\r\n    font-style: normal;\r\n    box-sizing: border-box !important; }\r\nlabel[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  line-height: 0.8;\r\n  color: #000000;\r\n  font-weight: 400;\r\n}\r\n\r\n    .input-box[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      height: 40px;\r\n      padding: 5px 40px 5px 15px;\r\n      border-radius: 5px;\r\n      border: solid 1px #a2a2a2;\r\n      background-color: #fff;\r\n      outline: none;\r\n      font-size: 16px;\r\n      font-weight: normal;\r\n      font-stretch: normal;\r\n      font-style: normal;\r\n      line-height: 1.5;\r\n      letter-spacing: normal;\r\n      text-align: left;\r\n      color: #b7b7b7;\r\n    \r\n      &:focus {\r\n        outline: none;\r\n      }\r\n    }\r\n      \r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  color: #000 !important;\r\n\r\n  &::placeholder {\r\n    color: #b7b7b7 !important;\r\n  }\r\n}\r\n.button[_ngcontent-%COMP%]{\r\n  \r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n    color: #0b0b0b;\r\n    cursor: pointer;\r\n   margin-left: -30px;\r\n}\r\n.button[_ngcontent-%COMP%]:hover{\r\ncolor: #552de4;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:focus{\r\ncolor: white;\r\nbackground-color: rgb(255, 191, 0);\r\n}\r\n.title[_ngcontent-%COMP%]{\r\nfont-size: 28px;\r\nline-height: 28px;\r\nfont-weight: 600;\r\nfont-family:Georgia, 'Times New Roman', Times, serif\r\n}\r\n.desc[_ngcontent-%COMP%]{\r\nfont-size: 18px;\r\nfont-family:Georgia, 'Times New Roman', Times, serif;\r\nline-height: 28px;\r\nfont-weight: 400;\r\ncolor: #494848;\r\n}\r\n.full-height[_ngcontent-%COMP%] {\r\n    height: 100% !important;\r\n    overflow: hidden;\r\n  }\r\n\r\n.main-title[_ngcontent-%COMP%]{\r\nfont-size: 40px;\r\nfont-family:Georgia, 'Times New Roman', Times, serif;\r\nline-height: 48px;\r\nmargin-bottom: 10px;\r\ndisplay: inline-block;\r\nfont-weight: 700;\r\ncolor: #fff;\r\n}\r\n.sub-desc[_ngcontent-%COMP%]{\r\nfont-size: 16px;\r\ncolor: #fff;\r\ntext-transform: uppercase;\r\n}\r\n\r\n\r\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] { height: 100%; }\nbody[_ngcontent-%COMP%] { margin: 0; font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.full-height[_ngcontent-%COMP%] {\n  height: 100% !important;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7O0FBRTlFLGFBQWEsWUFBWSxFQUFFO0FBQzNCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGtEQUFrRDtJQUNsRCxrQkFBa0I7SUFDbEIsaUNBQWlDLEVBQUU7QUFDdkM7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0lBRUk7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLDBCQUEwQjtNQUMxQixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLHNCQUFzQjtNQUN0QixhQUFhO01BQ2IsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixvQkFBb0I7TUFDcEIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixzQkFBc0I7TUFDdEIsZ0JBQWdCO01BQ2hCLGNBQWM7O01BRWQ7UUFDRSxhQUFhO01BQ2Y7SUFDRjs7QUFFSjs7RUFFRSxzQkFBc0I7O0VBRXRCO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTs7SUFFSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7R0FDaEIsa0JBQWtCO0FBQ3JCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxZQUFZO0FBQ1osa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Ysb0RBQW9EO0FBQ3BELGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsY0FBYztBQUNkO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztBQUVGO0FBQ0EsZUFBZTtBQUNmLG9EQUFvRDtBQUNwRCxpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsV0FBVztBQUNYO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsV0FBVztBQUNYLHlCQUF5QjtBQUN6Qjs7OztBQUlBLGFBQWEsWUFBWSxFQUFFO0FBQzNCLE9BQU8sU0FBUyxFQUFFLGlEQUFpRCxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxyXG5ib2R5IHsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0U5RTlFOTs7XHJcbiAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgSlBcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50OyB9XHJcbmxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMC44O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbiAgICAuaW5wdXQtYm94IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgcGFkZGluZzogNXB4IDQwcHggNXB4IDE1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2EyYTJhMjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBjb2xvcjogI2I3YjdiNztcclxuICAgIFxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIFxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYjdiN2I3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5idXR0b257XHJcbiAgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzBiMGIwYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG59XHJcbi5idXR0b246aG92ZXJ7XHJcbmNvbG9yOiAjNTUyZGU0O1xyXG59XHJcblxyXG4uYnV0dG9uOmZvY3Vze1xyXG5jb2xvcjogd2hpdGU7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5MSwgMCk7XHJcbn1cclxuLnRpdGxle1xyXG5mb250LXNpemU6IDI4cHg7XHJcbmxpbmUtaGVpZ2h0OiAyOHB4O1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5mb250LWZhbWlseTpHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmXHJcbn1cclxuLmRlc2N7XHJcbmZvbnQtc2l6ZTogMThweDtcclxuZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxubGluZS1oZWlnaHQ6IDI4cHg7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbmNvbG9yOiAjNDk0ODQ4O1xyXG59XHJcbi5mdWxsLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuLm1haW4tdGl0bGV7XHJcbmZvbnQtc2l6ZTogNDBweDtcclxuZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxubGluZS1oZWlnaHQ6IDQ4cHg7XHJcbm1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxuY29sb3I6ICNmZmY7XHJcbn1cclxuLnN1Yi1kZXNje1xyXG5mb250LXNpemU6IDE2cHg7XHJcbmNvbG9yOiAjZmZmO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuXG5odG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9XG5ib2R5IHsgbWFyZ2luOiAwOyBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdC1tb2R1bGVzL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL3pvZnQlMjBzb2x1dGlvbnMvSU5URVotRkUvc3JjL2FwcC9wcm9qZWN0LW1vZHVsZXMvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnLi4vLi4vLi4vc3R5bGVzLnNjc3MnKTtcclxuLmZ1bGwtaGVpZ2h0IHtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIH1cclxuICIsIkBpbXBvcnQgdXJsKFwiLi4vLi4vLi4vc3R5bGVzLnNjc3NcIik7XG4uZnVsbC1oZWlnaHQge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7404:
/*!*****************************************************!*\
  !*** ./src/app/project-modules/auth/auth.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component */ 8119);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 7253);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing-module */ 1014);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up/sign-up.component */ 7220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class AuthModule {
  constructor() {
    console.log("sassssssssss");
  }
}
AuthModule.ɵfac = function AuthModule_Factory(t) {
  return new (t || AuthModule)();
};
AuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AuthModule
});
AuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__.AuthRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__.SignUpComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__.AuthRoutingModule]
  });
})();

/***/ }),

/***/ 7253:
/*!***************************************************************!*\
  !*** ./src/app/project-modules/auth/login/login.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function () {
  return ["/auth/sign-up"];
};
// import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
class LoginComponent {
  // user: SocialUser | any;
  // loggedIn: boolean |any;
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    //   console.log(" this.user", this.user,this.loggedIn);
    // });
  }
  login() {
    this.router.navigate(['user']);
  }
  googleSignIn() {
    //   console.log("this.user")
    //   this.authService.signIn('180688556478-gppfet8ghbp58l75lfnbg7beru2v0um0.apps.googleusercontent.com').then((userData) => {
    //     // You can access the user data returned by Google here
    //     console.log("userData",userData);
    //   });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 41,
  vars: 2,
  consts: [[1, "center-align"], [1, "h-100", "gradient-form", 2, "background-color", "#DCD8E3"], [1, "container", "py-5", "h-100", 2, "border-radius", "25px 25px 25px 25px"], [1, "row", "d-flex", "justify-content-center", "align-items-center", "h-100"], [1, "col-xl-10"], [1, "card", "rounded-3", "text-black"], [1, "row", "g-0"], [1, "col-lg-6"], [1, "card-body", "p-md-5", "mx-md-4"], [1, "text-center"], ["src", "../../../../assets//images//logo.png", 1, "logo"], [1, "welcome"], [1, "sub-head"], [1, "row", "sign-row"], [1, "col", "signtext", 2, "background-color", "#FEFEFE", "border-radius", "5px"], [1, "col", "signtext", 3, "routerLink"], [1, "form-outline", "mb-4"], ["src", "../../../../assets//icons/email.png", 1, "envelope"], ["type", "text", "placeholder", "Email Address", 1, "form-control"], ["src", "../../../../assets//icons/password.png", 1, "envelope"], ["type", "text", "placeholder", "Password", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "or-container"], [1, "line-separator"], [1, "label"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "buttn", 3, "click"], ["src", "../../../../assets//icons/google.png", "width", "20px", "height", "18px"], [1, "col-lg-6", "d-flex", "align-items-center", "gradient-custom-2"], ["src", "../../../assets/images/login-page-image.jpg", "width", "100%", "height", "100%"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Welcome Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Welcome Back, Please enter Your details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13)(16, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "sign up");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form")(21, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 17)(23, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 19)(26, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16)(28, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_28_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Continue");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "or Continue With Google");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16)(36, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_36_listener() {
        return ctx.googleSignIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Sign in with Google");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] { height: 100%; }\r\nbody[_ngcontent-%COMP%] { \r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    background-color:  #E9E9E9;;\r\n    font-family: \"Noto Sans JP\", sans-serif !important;\r\n    font-style: normal;\r\n    box-sizing: border-box !important; }\r\nlabel[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  line-height: 0.8;\r\n  color: #000000;\r\n  font-weight: 400;\r\n}\r\n\r\n    .input-box[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      height: 40px;\r\n      padding: 5px 40px 5px 15px;\r\n      border-radius: 5px;\r\n      border: solid 1px #a2a2a2;\r\n      background-color: #fff;\r\n      outline: none;\r\n      font-size: 16px;\r\n      font-weight: normal;\r\n      font-stretch: normal;\r\n      font-style: normal;\r\n      line-height: 1.5;\r\n      letter-spacing: normal;\r\n      text-align: left;\r\n      color: #b7b7b7;\r\n    \r\n      &:focus {\r\n        outline: none;\r\n      }\r\n    }\r\n      \r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  color: #000 !important;\r\n\r\n  &::placeholder {\r\n    color: #b7b7b7 !important;\r\n  }\r\n}\r\n.button[_ngcontent-%COMP%]{\r\n  \r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n    color: #0b0b0b;\r\n    cursor: pointer;\r\n   margin-left: -30px;\r\n}\r\n.button[_ngcontent-%COMP%]:hover{\r\ncolor: #552de4;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:focus{\r\ncolor: white;\r\nbackground-color: rgb(255, 191, 0);\r\n}\r\n.title[_ngcontent-%COMP%]{\r\nfont-size: 28px;\r\nline-height: 28px;\r\nfont-weight: 600;\r\nfont-family:Georgia, 'Times New Roman', Times, serif\r\n}\r\n.desc[_ngcontent-%COMP%]{\r\nfont-size: 18px;\r\nfont-family:Georgia, 'Times New Roman', Times, serif;\r\nline-height: 28px;\r\nfont-weight: 400;\r\ncolor: #494848;\r\n}\r\n.full-height[_ngcontent-%COMP%] {\r\n    height: 100% !important;\r\n    overflow: hidden;\r\n  }\r\n\r\n.main-title[_ngcontent-%COMP%]{\r\nfont-size: 40px;\r\nfont-family:Georgia, 'Times New Roman', Times, serif;\r\nline-height: 48px;\r\nmargin-bottom: 10px;\r\ndisplay: inline-block;\r\nfont-weight: 700;\r\ncolor: #fff;\r\n}\r\n.sub-desc[_ngcontent-%COMP%]{\r\nfont-size: 16px;\r\ncolor: #fff;\r\ntext-transform: uppercase;\r\n}\r\n\r\n\r\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] { height: 100%; }\nbody[_ngcontent-%COMP%] { margin: 0; font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.logo[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.img[_ngcontent-%COMP%] {\n  height: 500px;\n  width: 100%;\n  border-radius: 0px 20px 20px 0px;\n}\n\n.welcome[_ngcontent-%COMP%] {\n  font-family: \"SF Pro Display\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 30px;\n  line-height: 36px;\n  color: #424242;\n  margin-top: 30px;\n}\n\n.sign-row[_ngcontent-%COMP%] {\n  height: 40px;\n  background-color: #F0EFF2;\n  margin: 1% 15% 1% 15%;\n  border-radius: 5px;\n  padding: 1% 1% 1% 1%;\n}\n\n.sub-head[_ngcontent-%COMP%] {\n  font-family: \"SF Pro Display\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  text-align: center;\n  color: #9D9999;\n}\n\ninput[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\ninput[type=text][_ngcontent-%COMP%] {\n  padding-left: 40px;\n  font-family: \"SF Pro Display\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 14px;\n  color: #ABABAB;\n}\n\n.signtext[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  font-family: \"SF Pro Display\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  color: #000000;\n}\n\n.envelope[_ngcontent-%COMP%] {\n  position: relative;\n  top: 28px;\n  left: 10px;\n  width: 20px;\n  height: 20px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (max-width: 600px) {\n  .main[_ngcontent-%COMP%] {\n    border-radius: 0px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .main-card[_ngcontent-%COMP%] {\n    width: 300px;\n    margin: auto;\n  }\n}\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.or-container[_ngcontent-%COMP%] {\n  align-items: center;\n  color: #ccc;\n  display: flex;\n  margin: 25px 0;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-family: \"SF Pro Display\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #000000;\n}\n\n.buttn[_ngcontent-%COMP%] {\n  font-family: \"SF Pro Display\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #000000;\n  background-color: white;\n  border: 1px solid #DCD8E3;\n  row-gap: 5px;\n}\n\n.line-separator[_ngcontent-%COMP%] {\n  background-color: #ccc;\n  flex-grow: 5;\n  height: 1px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7O0FBRTlFLGFBQWEsWUFBWSxFQUFFO0FBQzNCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGtEQUFrRDtJQUNsRCxrQkFBa0I7SUFDbEIsaUNBQWlDLEVBQUU7QUFDdkM7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0lBRUk7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLDBCQUEwQjtNQUMxQixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLHNCQUFzQjtNQUN0QixhQUFhO01BQ2IsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixvQkFBb0I7TUFDcEIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixzQkFBc0I7TUFDdEIsZ0JBQWdCO01BQ2hCLGNBQWM7O01BRWQ7UUFDRSxhQUFhO01BQ2Y7SUFDRjs7QUFFSjs7RUFFRSxzQkFBc0I7O0VBRXRCO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTs7SUFFSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7R0FDaEIsa0JBQWtCO0FBQ3JCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxZQUFZO0FBQ1osa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Ysb0RBQW9EO0FBQ3BELGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsY0FBYztBQUNkO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztBQUVGO0FBQ0EsZUFBZTtBQUNmLG9EQUFvRDtBQUNwRCxpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsV0FBVztBQUNYO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsV0FBVztBQUNYLHlCQUF5QjtBQUN6Qjs7OztBQUlBLGFBQWEsWUFBWSxFQUFFO0FBQzNCLE9BQU8sU0FBUyxFQUFFLGlEQUFpRCxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxyXG5ib2R5IHsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0U5RTlFOTs7XHJcbiAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgSlBcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50OyB9XHJcbmxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMC44O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbiAgICAuaW5wdXQtYm94IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgcGFkZGluZzogNXB4IDQwcHggNXB4IDE1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2EyYTJhMjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBjb2xvcjogI2I3YjdiNztcclxuICAgIFxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIFxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYjdiN2I3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5idXR0b257XHJcbiAgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzBiMGIwYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG59XHJcbi5idXR0b246aG92ZXJ7XHJcbmNvbG9yOiAjNTUyZGU0O1xyXG59XHJcblxyXG4uYnV0dG9uOmZvY3Vze1xyXG5jb2xvcjogd2hpdGU7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5MSwgMCk7XHJcbn1cclxuLnRpdGxle1xyXG5mb250LXNpemU6IDI4cHg7XHJcbmxpbmUtaGVpZ2h0OiAyOHB4O1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5mb250LWZhbWlseTpHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmXHJcbn1cclxuLmRlc2N7XHJcbmZvbnQtc2l6ZTogMThweDtcclxuZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxubGluZS1oZWlnaHQ6IDI4cHg7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbmNvbG9yOiAjNDk0ODQ4O1xyXG59XHJcbi5mdWxsLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuLm1haW4tdGl0bGV7XHJcbmZvbnQtc2l6ZTogNDBweDtcclxuZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxubGluZS1oZWlnaHQ6IDQ4cHg7XHJcbm1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxuY29sb3I6ICNmZmY7XHJcbn1cclxuLnN1Yi1kZXNje1xyXG5mb250LXNpemU6IDE2cHg7XHJcbmNvbG9yOiAjZmZmO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuXG5odG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9XG5ib2R5IHsgbWFyZ2luOiAwOyBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdC1tb2R1bGVzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi96b2Z0JTIwc29sdXRpb25zL0lOVEVaLUZFL3NyYy9hcHAvcHJvamVjdC1tb2R1bGVzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxVQUFBO0FDREY7O0FER0E7RUFDRSxhQUFBO0VBQ0QsV0FBQTtFQUNDLGdDQUFBO0FDQUY7O0FER0E7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREVBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FDQUE7O0FESUE7RUFDRSxZQUFBO0FDREY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNGLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FDSEE7O0FETUE7RUFDQyxpQkFBQTtFQUNDLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNIRjs7QURLQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0MsWUFBQTtBQ0ZEOztBRElBO0VBQ0UsV0FBQTtBQ0RGOztBRE1BO0VBQ0U7SUFDSSxrQkFBQTtFQ0hKO0FBQ0Y7QURNQTtFQUNFO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUNKSjtBQUNGO0FET0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNMRjs7QURPQTtFQUNFLFlBQUE7QUNKRjs7QURPQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDSkY7O0FETUE7RUFFQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSkE7O0FETUE7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNIRjs7QURLQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNGRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCcuLi8uLi8uLi8uLi9zdHlsZXMuc2NzcycpO1xyXG5cclxuXHJcbi5sb2dve1xyXG4gIHdpZHRoOjUwJVxyXG59XHJcbi5pbWd7XHJcbiAgaGVpZ2h0OjUwMHB4O1xyXG4gd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XHJcbn1cclxuXHJcbi53ZWxjb21le1xyXG4gIGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBsaW5lLWhlaWdodDogMzZweDtcclxuICBjb2xvcjogIzQyNDI0MjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxufVxyXG4uc2lnbi1yb3d7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6I0YwRUZGMjtcclxuICBtYXJnaW46MSUgMTUlIDElIDE1JTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMSUgMSUgMSUgMSU7XHJcbn1cclxuLnN1Yi1oZWFke1xyXG5mb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5JztcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5mb250LXNpemU6IDE0cHg7XHJcbmxpbmUtaGVpZ2h0OiAxN3B4O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5jb2xvcjogIzlEOTk5OTtcclxuXHJcbn1cclxuXHJcbmlucHV0e1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDsgXHJcbiAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheSc7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxuZm9udC1zaXplOiAxMnB4O1xyXG5saW5lLWhlaWdodDogMTRweDtcclxuXHJcbmNvbG9yOiAjQUJBQkFCO1xyXG5cclxufVxyXG4uc2lnbnRleHR7XHJcbiBwYWRkaW5nLXRvcDogMTBweDtcclxuICBmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5JztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLmVudmVsb3Ble1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnRvcDoyOHB4O1xyXG5sZWZ0OiAxMHB4O1xyXG53aWR0aDoyMHB4O1xyXG4gaGVpZ2h0OjIwcHhcclxufVxyXG5idXR0b257XHJcbiAgd2lkdGg6MTAwJVxyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tYWluIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tYWluLWNhcmQge1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmltZy1mbHVpZHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5vci1jb250YWluZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDI1cHggMDtcclxufVxyXG4ubGFiZWx7XHJcblxyXG5mb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5JztcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogNTAwO1xyXG5mb250LXNpemU6IDE0cHg7XHJcbmxpbmUtaGVpZ2h0OiAxN3B4O1xyXG5jb2xvcjogIzAwMDAwMDtcclxufVxyXG4uYnV0dG57XHJcbiAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheSc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjoxcHggc29saWQgI0RDRDhFMztcclxuICByb3ctZ2FwOiA1cHg7XHJcbn1cclxuLmxpbmUtc2VwYXJhdG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIGZsZXgtZ3JvdzogNTtcclxuICBoZWlnaHQ6IDFweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiQGltcG9ydCB1cmwoXCIuLi8uLi8uLi8uLi9zdHlsZXMuc2Nzc1wiKTtcbi5sb2dvIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmltZyB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcbn1cblxuLndlbGNvbWUge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGNvbG9yOiAjNDI0MjQyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uc2lnbi1yb3cge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEVGRjI7XG4gIG1hcmdpbjogMSUgMTUlIDElIDE1JTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxJSAxJSAxJSAxJTtcbn1cblxuLnN1Yi1oZWFkIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOUQ5OTk5O1xufVxuXG5pbnB1dCB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmlucHV0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBjb2xvcjogI0FCQUJBQjtcbn1cblxuLnNpZ250ZXh0IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBEaXNwbGF5XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5lbnZlbG9wZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyOHB4O1xuICBsZWZ0OiAxMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tYWluIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1haW4tY2FyZCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW1nLWZsdWlkIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ub3ItY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNjY2M7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMjVweCAwO1xufVxuXG4ubGFiZWwge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uYnV0dG4ge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RDRDhFMztcbiAgcm93LWdhcDogNXB4O1xufVxuXG4ubGluZS1zZXBhcmF0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBmbGV4LWdyb3c6IDU7XG4gIGhlaWdodDogMXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7220:
/*!*******************************************************************!*\
  !*** ./src/app/project-modules/auth/sign-up/sign-up.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function () {
  return ["/auth/login"];
};
class SignUpComponent {
  constructor(router) {
    this.router = router;
  }
  submit() {
    this.router.navigate(['user']);
  }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
  return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
SignUpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SignUpComponent,
  selectors: [["app-sign-up"]],
  decls: 44,
  vars: 2,
  consts: [[1, "center-align"], [1, "h-100", "gradient-form", 2, "background-color", "#DCD8E3"], [1, "container", "py-5", "h-100", 2, "border-radius", "25px 25px 25px 25px"], [1, "row", "d-flex", "justify-content-center", "align-items-center", "h-100"], [1, "col-xl-10"], [1, "card", "rounded-3", "text-black"], [1, "row", "g-0"], [1, "col-lg-6"], [1, "card-body", "p-md-5", "mx-md-4"], [1, "text-center"], ["src", "../../../../assets//images//logo.png", 1, "logo"], [1, "welcome"], [1, "sub-head"], [1, "row", "sign-row"], [1, "col", "signtext", 3, "routerLink"], [1, "col", "signtext", 2, "background-color", "#FEFEFE", "border-radius", "5px"], [1, "form-outline", "mb-4"], ["src", "../../../../assets//icons/email.png", 1, "envelope"], ["type", "text", "placeholder", "Email Address", 1, "form-control"], ["src", "../../../../assets//icons/password.png", 1, "envelope"], ["type", "text", "placeholder", "Password", 1, "form-control"], ["type", "text", "placeholder", "Confirm Password", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "or-container"], [1, "line-separator"], [1, "label"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "buttn"], ["src", "../../../../assets//icons/google.png", "width", "20px", "height", "18px"], [1, "col-lg-6", "d-flex", "align-items-center", "gradient-custom-2"], ["src", "../../../assets/images/login-page-image.jpg", "width", "100%", "height", "100%"]],
  template: function SignUpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Create an account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Please enter Your details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13)(16, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "sign up");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form")(21, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 17)(23, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 19)(26, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 19)(29, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16)(31, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_31_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Continue");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "or Continue With Google");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16)(39, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Sign in with Google");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] { height: 100%; }\r\nbody[_ngcontent-%COMP%] { \r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    background-color:  #E9E9E9;;\r\n    font-family: \"Noto Sans JP\", sans-serif !important;\r\n    font-style: normal;\r\n    box-sizing: border-box !important; }\r\nlabel[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  line-height: 0.8;\r\n  color: #000000;\r\n  font-weight: 400;\r\n}\r\n\r\n    .input-box[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      height: 40px;\r\n      padding: 5px 40px 5px 15px;\r\n      border-radius: 5px;\r\n      border: solid 1px #a2a2a2;\r\n      background-color: #fff;\r\n      outline: none;\r\n      font-size: 16px;\r\n      font-weight: normal;\r\n      font-stretch: normal;\r\n      font-style: normal;\r\n      line-height: 1.5;\r\n      letter-spacing: normal;\r\n      text-align: left;\r\n      color: #b7b7b7;\r\n    \r\n      &:focus {\r\n        outline: none;\r\n      }\r\n    }\r\n      \r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  color: #000 !important;\r\n\r\n  &::placeholder {\r\n    color: #b7b7b7 !important;\r\n  }\r\n}\r\n.button[_ngcontent-%COMP%]{\r\n  \r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n    color: #0b0b0b;\r\n    cursor: pointer;\r\n   margin-left: -30px;\r\n}\r\n.button[_ngcontent-%COMP%]:hover{\r\ncolor: #552de4;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:focus{\r\ncolor: white;\r\nbackground-color: rgb(255, 191, 0);\r\n}\r\n.title[_ngcontent-%COMP%]{\r\nfont-size: 28px;\r\nline-height: 28px;\r\nfont-weight: 600;\r\nfont-family:Georgia, 'Times New Roman', Times, serif\r\n}\r\n.desc[_ngcontent-%COMP%]{\r\nfont-size: 18px;\r\nfont-family:Georgia, 'Times New Roman', Times, serif;\r\nline-height: 28px;\r\nfont-weight: 400;\r\ncolor: #494848;\r\n}\r\n.full-height[_ngcontent-%COMP%] {\r\n    height: 100% !important;\r\n    overflow: hidden;\r\n  }\r\n\r\n.main-title[_ngcontent-%COMP%]{\r\nfont-size: 40px;\r\nfont-family:Georgia, 'Times New Roman', Times, serif;\r\nline-height: 48px;\r\nmargin-bottom: 10px;\r\ndisplay: inline-block;\r\nfont-weight: 700;\r\ncolor: #fff;\r\n}\r\n.sub-desc[_ngcontent-%COMP%]{\r\nfont-size: 16px;\r\ncolor: #fff;\r\ntext-transform: uppercase;\r\n}\r\n\r\n\r\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] { height: 100%; }\nbody[_ngcontent-%COMP%] { margin: 0; font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.logo[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.img[_ngcontent-%COMP%] {\n  height: 500px;\n  width: 100%;\n  border-radius: 0px 20px 20px 0px;\n}\n\n.welcome[_ngcontent-%COMP%] {\n  font-family: \"SF Pro Display\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 30px;\n  line-height: 36px;\n  margin-top: 30px;\n  color: #424242;\n}\n\n.sign-row[_ngcontent-%COMP%] {\n  height: 40px;\n  background-color: #F0EFF2;\n  margin: 1% 15% 1% 15%;\n  border-radius: 5px;\n  padding: 1% 1% 1% 1%;\n}\n\n.sub-head[_ngcontent-%COMP%] {\n  font-family: \"SF Pro Display\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  text-align: center;\n  color: #9D9999;\n}\n\ninput[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\ninput[type=text][_ngcontent-%COMP%] {\n  padding-left: 40px;\n  font-family: \"SF Pro Display\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 14px;\n  color: #ABABAB;\n}\n\n.signtext[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  font-family: \"SF Pro Display\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  color: #000000;\n}\n\n.envelope[_ngcontent-%COMP%] {\n  position: relative;\n  top: 28px;\n  left: 10px;\n  width: 20px;\n  height: 20px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (max-width: 600px) {\n  .main[_ngcontent-%COMP%] {\n    border-radius: 0px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .main-card[_ngcontent-%COMP%] {\n    width: 300px;\n    margin: auto;\n  }\n}\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.or-container[_ngcontent-%COMP%] {\n  align-items: center;\n  color: #ccc;\n  display: flex;\n  margin: 25px 0;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-family: \"SF Pro Display\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  color: #ABABAB;\n}\n\n.buttn[_ngcontent-%COMP%] {\n  font-family: \"SF Pro Display\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #000000;\n  background-color: white;\n  border: 1px solid #DCD8E3;\n  row-gap: 5px;\n}\n\n.line-separator[_ngcontent-%COMP%] {\n  background-color: #ccc;\n  flex-grow: 5;\n  height: 1px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7O0FBRTlFLGFBQWEsWUFBWSxFQUFFO0FBQzNCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGtEQUFrRDtJQUNsRCxrQkFBa0I7SUFDbEIsaUNBQWlDLEVBQUU7QUFDdkM7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0lBRUk7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLDBCQUEwQjtNQUMxQixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLHNCQUFzQjtNQUN0QixhQUFhO01BQ2IsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixvQkFBb0I7TUFDcEIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixzQkFBc0I7TUFDdEIsZ0JBQWdCO01BQ2hCLGNBQWM7O01BRWQ7UUFDRSxhQUFhO01BQ2Y7SUFDRjs7QUFFSjs7RUFFRSxzQkFBc0I7O0VBRXRCO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTs7SUFFSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7R0FDaEIsa0JBQWtCO0FBQ3JCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxZQUFZO0FBQ1osa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Ysb0RBQW9EO0FBQ3BELGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsY0FBYztBQUNkO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztBQUVGO0FBQ0EsZUFBZTtBQUNmLG9EQUFvRDtBQUNwRCxpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsV0FBVztBQUNYO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsV0FBVztBQUNYLHlCQUF5QjtBQUN6Qjs7OztBQUlBLGFBQWEsWUFBWSxFQUFFO0FBQzNCLE9BQU8sU0FBUyxFQUFFLGlEQUFpRCxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxyXG5ib2R5IHsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0U5RTlFOTs7XHJcbiAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgSlBcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50OyB9XHJcbmxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMC44O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbiAgICAuaW5wdXQtYm94IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgcGFkZGluZzogNXB4IDQwcHggNXB4IDE1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2EyYTJhMjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBjb2xvcjogI2I3YjdiNztcclxuICAgIFxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIFxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYjdiN2I3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5idXR0b257XHJcbiAgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzBiMGIwYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG59XHJcbi5idXR0b246aG92ZXJ7XHJcbmNvbG9yOiAjNTUyZGU0O1xyXG59XHJcblxyXG4uYnV0dG9uOmZvY3Vze1xyXG5jb2xvcjogd2hpdGU7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5MSwgMCk7XHJcbn1cclxuLnRpdGxle1xyXG5mb250LXNpemU6IDI4cHg7XHJcbmxpbmUtaGVpZ2h0OiAyOHB4O1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5mb250LWZhbWlseTpHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmXHJcbn1cclxuLmRlc2N7XHJcbmZvbnQtc2l6ZTogMThweDtcclxuZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxubGluZS1oZWlnaHQ6IDI4cHg7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbmNvbG9yOiAjNDk0ODQ4O1xyXG59XHJcbi5mdWxsLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuLm1haW4tdGl0bGV7XHJcbmZvbnQtc2l6ZTogNDBweDtcclxuZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxubGluZS1oZWlnaHQ6IDQ4cHg7XHJcbm1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxuY29sb3I6ICNmZmY7XHJcbn1cclxuLnN1Yi1kZXNje1xyXG5mb250LXNpemU6IDE2cHg7XHJcbmNvbG9yOiAjZmZmO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuXG5odG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9XG5ib2R5IHsgbWFyZ2luOiAwOyBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdC1tb2R1bGVzL2F1dGgvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vem9mdCUyMHNvbHV0aW9ucy9JTlRFWi1GRS9zcmMvYXBwL3Byb2plY3QtbW9kdWxlcy9hdXRoL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFVBQUE7QUNERjs7QURHQTtFQUNFLGFBQUE7RUFDRCxXQUFBO0VBQ0MsZ0NBQUE7QUNBRjs7QURHQTtFQUNFLDZCQUFBO0VBQ0Ysa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FBOztBREdBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQUo7O0FERUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUNBQTs7QURJQTtFQUNFLFlBQUE7QUNERjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Ysa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUNIQTs7QURNQTtFQUNDLGlCQUFBO0VBQ0MsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0hGOztBREtBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQyxZQUFBO0FDRkQ7O0FESUE7RUFDRSxXQUFBO0FDREY7O0FETUE7RUFDRTtJQUNJLGtCQUFBO0VDSEo7QUFDRjtBRE1BO0VBQ0U7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQ0pKO0FBQ0Y7QURPQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0xGOztBRE9BO0VBQ0UsWUFBQTtBQ0pGOztBRE9BO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNKRjs7QURNQTtFQUdBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNMQTs7QURRQTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0xGOztBRE9BO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0pGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzJyk7XHJcblxyXG5cclxuLmxvZ297XHJcbiAgd2lkdGg6NTAlXHJcbn1cclxuLmltZ3tcclxuICBoZWlnaHQ6NTAwcHg7XHJcbiB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcclxufVxyXG5cclxuLndlbGNvbWV7XHJcbiAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheSc7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxuZm9udC1zaXplOiAzMHB4O1xyXG5saW5lLWhlaWdodDogMzZweDtcclxubWFyZ2luLXRvcDogMzBweDtcclxuY29sb3I6ICM0MjQyNDI7XHJcblxyXG59XHJcbi5zaWduLXJvd3tcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0YwRUZGMjtcclxuICAgIG1hcmdpbjoxJSAxNSUgMSUgMTUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMSUgMSUgMSUgMSU7XHJcbiAgfVxyXG4uc3ViLWhlYWR7XHJcbmZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiA2MDA7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxubGluZS1oZWlnaHQ6IDE3cHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbmNvbG9yOiAjOUQ5OTk5O1xyXG5cclxufVxyXG5cclxuaW5wdXR7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5pbnB1dC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4OyBcclxuICBmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5JztcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5mb250LXNpemU6IDEycHg7XHJcbmxpbmUtaGVpZ2h0OiAxNHB4O1xyXG5cclxuY29sb3I6ICNBQkFCQUI7XHJcblxyXG59XHJcbi5zaWdudGV4dHtcclxuIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTdweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4uZW52ZWxvcGV7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOjI4cHg7XHJcbmxlZnQ6IDEwcHg7XHJcbndpZHRoOjIwcHg7XHJcbiBoZWlnaHQ6MjBweFxyXG59XHJcbmJ1dHRvbntcclxuICB3aWR0aDoxMDAlXHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm1haW4ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm1haW4tY2FyZCB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uaW1nLWZsdWlke1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm9yLWNvbnRhaW5lciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogI2NjYztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMjVweCAwO1xyXG59XHJcbi5sYWJlbHtcclxuXHJcblxyXG5mb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5JztcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5mb250LXNpemU6IDE0cHg7XHJcbmxpbmUtaGVpZ2h0OiAxN3B4O1xyXG5jb2xvcjogI0FCQUJBQjtcclxuXHJcbn1cclxuLmJ1dHRue1xyXG4gIGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTdweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6MXB4IHNvbGlkICNEQ0Q4RTM7XHJcbiAgcm93LWdhcDogNXB4O1xyXG59XHJcbi5saW5lLXNlcGFyYXRvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICBmbGV4LWdyb3c6IDU7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIkBpbXBvcnQgdXJsKFwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIik7XG4ubG9nbyB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5pbWcge1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XG59XG5cbi53ZWxjb21lIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBjb2xvcjogIzQyNDI0Mjtcbn1cblxuLnNpZ24tcm93IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFRkYyO1xuICBtYXJnaW46IDElIDE1JSAxJSAxNSU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMSUgMSUgMSUgMSU7XG59XG5cbi5zdWItaGVhZCB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBEaXNwbGF5XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzlEOTk5OTtcbn1cblxuaW5wdXQge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5pbnB1dC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBEaXNwbGF5XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgY29sb3I6ICNBQkFCQUI7XG59XG5cbi5zaWdudGV4dCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZW52ZWxvcGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjhweDtcbiAgbGVmdDogMTBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubWFpbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tYWluLWNhcmQge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmltZy1mbHVpZCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm9yLWNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjY2NjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDI1cHggMDtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBjb2xvcjogI0FCQUJBQjtcbn1cblxuLmJ1dHRuIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEQ0Q4RTM7XG4gIHJvdy1nYXA6IDVweDtcbn1cblxuLmxpbmUtc2VwYXJhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgZmxleC1ncm93OiA1O1xuICBoZWlnaHQ6IDFweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_project-modules_auth_auth_module_ts.js.map
"use strict";
(self["webpackChunkzoft_site"] = self["webpackChunkzoft_site"] || []).push([["src_app_project-modules_admin_admin_module_ts"],{

/***/ 3641:
/*!***************************************************************!*\
  !*** ./src/app/project-modules/admin/admin-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.component */ 4557);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ 3339);
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ 4131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: '',
  component: _admin_component__WEBPACK_IMPORTED_MODULE_0__.AdminComponent,
  children: [{
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }, {
    path: "home",
    component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
  }, {
    path: "user-profile",
    component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__.UserProfileComponent
  }]
}];
class AdminRoutingModule {}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) {
  return new (t || AdminRoutingModule)();
};
AdminRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AdminRoutingModule
});
AdminRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 4557:
/*!**********************************************************!*\
  !*** ./src/app/project-modules/admin/admin.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminComponent": () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


class AdminComponent {
  constructor() {
    this.name = "Angular Toggle Show Hide";
    this.showMyContainer = false;
    this.isSideBarOpen = true;
    this.statusLink = false;
  }
  //   this.toggleButton = document.getElementById('toggleButton');
  //  this.content = document.querySelector('.content');
  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event) {
  //   this.screenWidth = window.innerWidth;
  //   if(this.screenWidth<1000){
  //   this.status=true
  //   console.log("this.status",this.status)
  //   }
  // }
  clickEvent() {
    this.isSideBarOpen = !this.isSideBarOpen;
  }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) {
  return new (t || AdminComponent)();
};
AdminComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AdminComponent,
  selectors: [["app-admin"]],
  decls: 20,
  vars: 4,
  consts: [[1, "outer-div"], [1, "sidebarMenu", 3, "ngClass"], [1, "sideBarUst", "text-center", "pt-3"], [1, "toggleIcon", "mt-3"], ["id", "toggleButton", 1, "userFoto", "mb-2", 3, "ngClass", "click"], [2, "margin-top", "30px"], [1, "nav", "flex-column"], [1, "nav-item"], ["href", "#", 1, "nav-link", "active"], [1, "navIcon"], [3, "ngClass"], ["href", "#", 1, "nav-link"]],
  template: function AdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_4_listener() {
        return ctx.clickEvent();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "EE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8)(10, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "T");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Time Sheets");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7)(15, "a", 11)(16, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "H");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Holidays");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isSideBarOpen ? "openSideBar" : "closeSideBar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isSideBarOpen ? "userPhotoOpen" : "userPhotoClose");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.statusLink ? "navLinkDar" : "navLinkGenis animated fadeInRight");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.statusLink ? "navLinkDar" : "navLinkGenis animated fadeInRight");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
  styles: [".outer-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 100%;\n  width: 100% !important;\n}\n\n.sidebarMenu[_ngcontent-%COMP%] {\n  background-color: #00417b;\n  color: #fff;\n  z-index: 100;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 250px; \n  height: 100%;\n  transition: transform 0.3s ease;\n}\n\n.openSideBar[_ngcontent-%COMP%] {\n  color: #fff;\n  transition: 0.3s;\n}\n\n.closeSideBar[_ngcontent-%COMP%] {\n  width: 60px;\n  transition: 0.3s;\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: bold;\n  font-size: 16px;\n  color: #fff;\n  border: 2px solid #fff;\n  border-radius: 4px;\n  line-height: normal;\n  padding: 4px 8px;\n}\n\n.userFoto[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  color: #088afe;\n  background-color: #fff;\n  line-height: normal;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff !important;\n  font-size: 14px;\n}\n\n.navIcon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 26px;\n  height: 26px;\n  font-weight: bold;\n  background-color: #ffbb00;\n  color: #fff;\n  margin-right: 6px;\n  border-radius: 4px;\n}\n\n.userPhotoOpen[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 38px;\n  font-size: 20px;\n  transition: 0.4s;\n}\n\n.userPhotoClose[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 40px;\n  font-size: 16px;\n  transition: 0.4s;\n}\n\n.userFotoOpen[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.userNameDar[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.navLinkGenis[_ngcontent-%COMP%] {\n  display: inline-block;\n  visibility: visible;\n}\n\n.navLinkDar[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n\n.genisSideBarAlt[_ngcontent-%COMP%] {\n  width: 160px;\n}\n\n.darSideBarAlt[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.content.full-width[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n@media (min-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.router-view-div[_ngcontent-%COMP%] {\n  z-index: 1;\n  padding: 0px 20px 30px 20px;\n  background-color: #fff;\n}\n\n.main[_ngcontent-%COMP%] {\n  transition: margin-left 0.5s;\n}\n\n@media (max-width: 600px) {\n  .router-view-div[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdC1tb2R1bGVzL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vem9mdCUyMHNvbHV0aW9ucy9JTlRFWi1GRS9zcmMvYXBwL3Byb2plY3QtbW9kdWxlcy9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBLEVBQUEscUJBQUE7RUFDQSxZQUFBO0VBRUEsK0JBQUE7QUNESjs7QURJQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNDLGdCQUFBO0FDREg7O0FET0E7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0pBOztBRE1BO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0hBOztBRE1BO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FDSEY7O0FETUE7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hGOztBREtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsY0FBQTtBQ0ZGOztBRElBO0VBQ0UsYUFBQTtBQ0RGOztBRElBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQ0RGOztBREdBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FES0E7RUFDRSxjQUFBO0FDRkY7O0FESUE7RUFDRTtJQUNFLGVBQUE7RUNERjtBQUNGO0FESUE7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0ZGOztBREtBO0VBQ0UsNEJBQUE7QUNGRjs7QURLQTtFQUNFO0lBQ0ksYUFBQTtFQ0ZKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXItZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2lkZWJhck1lbnV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDE3YjtcclxuICBjb2xvcjogI2ZmZjtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDI1MHB4OyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgIFxyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuXHJcbn1cclxuLm9wZW5TaWRlQmFye1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IC4zcztcclxuICAvLyBjb2xvcjojMDA0MTdiICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNsb3NlU2lkZUJhcntcclxuICB3aWR0aDogNjBweDtcclxuICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gIC8vICBjb2xvcjogI2ZmZjtcclxuICBcclxufVxyXG5cclxuXHJcbi5sb2dve1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5mb250LXNpemU6IDE2cHg7XHJcbmNvbG9yOiAjZmZmO1xyXG5ib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG5ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbnBhZGRpbmc6IDRweCA4cHg7XHJcbn1cclxuLnVzZXJGb3Rve1xyXG5kaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5jb2xvcjogIzA4OGFmZTtcclxuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxubGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuXHJcbn1cclxuLm5hdiBsaSBhe1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIFxyXG59XHJcbi5uYXZJY29ue1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDI2cHg7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJiMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4udXNlclBob3RvT3BlbntcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzhweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogLjQwcztcclxufVxyXG4udXNlclBob3RvQ2xvc2V7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRyYW5zaXRpb246IC40MHM7XHJcbn1cclxuXHJcbi51c2VyRm90b09wZW57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnVzZXJOYW1lRGFye1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXZMaW5rR2VuaXN7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLm5hdkxpbmtEYXJ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5nZW5pc1NpZGVCYXJBbHR7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG59XHJcbi5kYXJTaWRlQmFyQWx0e1xyXG4gIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4uY29udGVudHtcclxuIFxyXG59XHJcbi5jb250ZW50LmZ1bGwtd2lkdGgge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5yb3V0ZXItdmlldy1kaXYge1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcGFkZGluZzogMHB4IDIwcHggMzBweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAuNXM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KSB7XHJcbiAgLnJvdXRlci12aWV3LWRpdiB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG59IiwiLm91dGVyLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uc2lkZWJhck1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0MTdiO1xuICBjb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDI1MHB4OyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuLm9wZW5TaWRlQmFyIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5jbG9zZVNpZGVCYXIge1xuICB3aWR0aDogNjBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG59XG5cbi51c2VyRm90byB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDg4YWZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4ubmF2IGxpIGEge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5uYXZJY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmIwMDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi51c2VyUGhvdG9PcGVuIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMzhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4udXNlclBob3RvQ2xvc2Uge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi51c2VyRm90b09wZW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnVzZXJOYW1lRGFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm5hdkxpbmtHZW5pcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLm5hdkxpbmtEYXIge1xuICBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5nZW5pc1NpZGVCYXJBbHQge1xuICB3aWR0aDogMTYwcHg7XG59XG5cbi5kYXJTaWRlQmFyQWx0IHtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbi5jb250ZW50LmZ1bGwtd2lkdGgge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5yb3V0ZXItdmlldy1kaXYge1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAwcHggMjBweCAzMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5tYWluIHtcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC41cztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5yb3V0ZXItdmlldy1kaXYge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1578:
/*!*******************************************************!*\
  !*** ./src/app/project-modules/admin/admin.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 3641);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.component */ 4557);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ 3339);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ 8463);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 951);
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ 4131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);








class AdminModule {
  constructor() {
    console.log("enteringgggggg");
  }
}
AdminModule.ɵfac = function AdminModule_Factory(t) {
  return new (t || AdminModule)();
};
AdminModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AdminModule
});
AdminModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_1__.AdminComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__.UserProfileComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]
  });
})();

/***/ }),

/***/ 8463:
/*!*****************************************************************************!*\
  !*** ./src/app/project-modules/admin/components/header/header.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HeaderComponent {}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 16,
  vars: 0,
  consts: [[1, "row", "home-div"], [1, "col"], [1, "title"], [2, "color", "rgb(82, 82, 205)"], [1, "col", 2, "text-align", "right"], [2, "display", "flex", "justify-content", "flex-end", "grid-gap", "10px"], ["aria-hidden", "true", 1, "fa", "fa-bell", "blue-color"], ["aria-hidden", "true", 1, "fa", "fa-cog", "blue-color"], [2, "display", "flex", "justify-content", "flex-end", "border", "1px solid rgb(209, 198, 198)"], ["src", "../../../../../assets//icons/gmail.png", 2, "border-radius", "50%", "width", "25px", "height", "25px"], [2, "background-color", "rgb(140, 145, 145)", "width", "100%", "height", "1px", "border-bottom", "1 px solid darkred"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Zoft");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Portal");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6)(10, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "John Doe");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] { height: 100%; }\r\nbody[_ngcontent-%COMP%] { \r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    background-color:  #E9E9E9;;\r\n    font-family: \"Noto Sans JP\", sans-serif !important;\r\n    font-style: normal;\r\n    box-sizing: border-box !important; }\r\nlabel[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  line-height: 0.8;\r\n  color: #000000;\r\n  font-weight: 400;\r\n}\r\n\r\n    .input-box[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      height: 40px;\r\n      padding: 5px 40px 5px 15px;\r\n      border-radius: 5px;\r\n      border: solid 1px #a2a2a2;\r\n      background-color: #fff;\r\n      outline: none;\r\n      font-size: 16px;\r\n      font-weight: normal;\r\n      font-stretch: normal;\r\n      font-style: normal;\r\n      line-height: 1.5;\r\n      letter-spacing: normal;\r\n      text-align: left;\r\n      color: #b7b7b7;\r\n    \r\n      &:focus {\r\n        outline: none;\r\n      }\r\n    }\r\n      \r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  color: #000 !important;\r\n\r\n  &::placeholder {\r\n    color: #b7b7b7 !important;\r\n  }\r\n}\r\n.button[_ngcontent-%COMP%]{\r\n  \r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n    color: #0b0b0b;\r\n    cursor: pointer;\r\n   margin-left: -30px;\r\n}\r\n.button[_ngcontent-%COMP%]:hover{\r\ncolor: #552de4;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:focus{\r\ncolor: white;\r\nbackground-color: rgb(255, 191, 0);\r\n}\r\n.title[_ngcontent-%COMP%]{\r\nfont-size: 28px;\r\nline-height: 28px;\r\nfont-weight: 600;\r\nfont-family:Georgia, 'Times New Roman', Times, serif\r\n}\r\n.desc[_ngcontent-%COMP%]{\r\nfont-size: 18px;\r\nfont-family:Georgia, 'Times New Roman', Times, serif;\r\nline-height: 28px;\r\nfont-weight: 400;\r\ncolor: #494848;\r\n}\r\n.full-height[_ngcontent-%COMP%] {\r\n    height: 100% !important;\r\n    overflow: hidden;\r\n  }\r\n\r\n.main-title[_ngcontent-%COMP%]{\r\nfont-size: 40px;\r\nfont-family:Georgia, 'Times New Roman', Times, serif;\r\nline-height: 48px;\r\nmargin-bottom: 10px;\r\ndisplay: inline-block;\r\nfont-weight: 700;\r\ncolor: #fff;\r\n}\r\n.sub-desc[_ngcontent-%COMP%]{\r\nfont-size: 16px;\r\ncolor: #fff;\r\ntext-transform: uppercase;\r\n}\r\n\r\n\r\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] { height: 100%; }\nbody[_ngcontent-%COMP%] { margin: 0; font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.home-div[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1%;\n}\n\n.blue-color[_ngcontent-%COMP%] {\n  color: rgb(73, 73, 176);\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7O0FBRTlFLGFBQWEsWUFBWSxFQUFFO0FBQzNCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGtEQUFrRDtJQUNsRCxrQkFBa0I7SUFDbEIsaUNBQWlDLEVBQUU7QUFDdkM7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0lBRUk7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLDBCQUEwQjtNQUMxQixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLHNCQUFzQjtNQUN0QixhQUFhO01BQ2IsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixvQkFBb0I7TUFDcEIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixzQkFBc0I7TUFDdEIsZ0JBQWdCO01BQ2hCLGNBQWM7O01BRWQ7UUFDRSxhQUFhO01BQ2Y7SUFDRjs7QUFFSjs7RUFFRSxzQkFBc0I7O0VBRXRCO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTs7SUFFSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7R0FDaEIsa0JBQWtCO0FBQ3JCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxZQUFZO0FBQ1osa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Ysb0RBQW9EO0FBQ3BELGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsY0FBYztBQUNkO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztBQUVGO0FBQ0EsZUFBZTtBQUNmLG9EQUFvRDtBQUNwRCxpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsV0FBVztBQUNYO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsV0FBVztBQUNYLHlCQUF5QjtBQUN6Qjs7OztBQUlBLGFBQWEsWUFBWSxFQUFFO0FBQzNCLE9BQU8sU0FBUyxFQUFFLGlEQUFpRCxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxyXG5ib2R5IHsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0U5RTlFOTs7XHJcbiAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgSlBcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50OyB9XHJcbmxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMC44O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbiAgICAuaW5wdXQtYm94IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgcGFkZGluZzogNXB4IDQwcHggNXB4IDE1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2EyYTJhMjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBjb2xvcjogI2I3YjdiNztcclxuICAgIFxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIFxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYjdiN2I3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5idXR0b257XHJcbiAgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzBiMGIwYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG59XHJcbi5idXR0b246aG92ZXJ7XHJcbmNvbG9yOiAjNTUyZGU0O1xyXG59XHJcblxyXG4uYnV0dG9uOmZvY3Vze1xyXG5jb2xvcjogd2hpdGU7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5MSwgMCk7XHJcbn1cclxuLnRpdGxle1xyXG5mb250LXNpemU6IDI4cHg7XHJcbmxpbmUtaGVpZ2h0OiAyOHB4O1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5mb250LWZhbWlseTpHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmXHJcbn1cclxuLmRlc2N7XHJcbmZvbnQtc2l6ZTogMThweDtcclxuZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxubGluZS1oZWlnaHQ6IDI4cHg7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbmNvbG9yOiAjNDk0ODQ4O1xyXG59XHJcbi5mdWxsLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuLm1haW4tdGl0bGV7XHJcbmZvbnQtc2l6ZTogNDBweDtcclxuZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxubGluZS1oZWlnaHQ6IDQ4cHg7XHJcbm1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxuY29sb3I6ICNmZmY7XHJcbn1cclxuLnN1Yi1kZXNje1xyXG5mb250LXNpemU6IDE2cHg7XHJcbmNvbG9yOiAjZmZmO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuXG5odG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9XG5ib2R5IHsgbWFyZ2luOiAwOyBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdC1tb2R1bGVzL2FkbWluL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL3pvZnQlMjBzb2x1dGlvbnMvSU5URVotRkUvc3JjL2FwcC9wcm9qZWN0LW1vZHVsZXMvYWRtaW4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUVBLFdBQUE7QUNBSjs7QURHQTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7QUNBSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCcuLi8uLi8uLi8uLi8uLi9zdHlsZXMuc2NzcycpO1xyXG4uaG9tZS1kaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG4uYmx1ZS1jb2xvciB7XHJcbiAgICBjb2xvcjpyZ2IoNzMsIDczLCAxNzYpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn0iLCJAaW1wb3J0IHVybChcIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzXCIpO1xuLmhvbWUtZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDElO1xufVxuXG4uYmx1ZS1jb2xvciB7XG4gIGNvbG9yOiByZ2IoNzMsIDczLCAxNzYpO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3339:
/*!*************************************************************************!*\
  !*** ./src/app/project-modules/admin/components/home/home.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HomeComponent {
  constructor() {
    console.log("home");
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 84,
  vars: 0,
  consts: [[1, "home-div"], [1, "table", "table-striped", "table-bordered"], [1, "dropdown"], [1, "td-actions"], ["href", "javascript:;", 1, "btn", "btn-small", "btn-primary"], [1, "btn-icon-only", "icon-ok"], ["href", "javascript:;", 1, "btn", "btn-small"], [1, "btn-icon-only", "icon-remove"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr")(4, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Modules");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Work Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Projects Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody")(17, "tr")(18, "td")(19, "div", 2)(20, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Internet Explorer 4.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 3)(23, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Internet Explorer 4.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 3)(30, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr")(35, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Trident");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Internet Explorer 5.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 3)(40, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr")(45, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Trident");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Internet Explorer 5.5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 3)(50, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr")(55, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Trident");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Internet Explorer 5.5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 3)(60, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr")(65, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Trident");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Internet Explorer 5.5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 3)(70, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr")(75, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Trident");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Internet Explorer 5.5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td", 3)(80, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: [".home-div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.table-bordered[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  border-collapse: separate;\n  border-left: 0;\n  border-radius: 4px;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: rgb(80, 80, 150);\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n  background-color: transparent;\n  border-collapse: collapse;\n  border-spacing: 0;\n  display: table;\n}\n\n.widget.widget-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  border: none;\n}\n\n.widget.widget-table[_ngcontent-%COMP%]   .widget-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.widget[_ngcontent-%COMP%]   .widget-header[_ngcontent-%COMP%]    + .widget-content[_ngcontent-%COMP%] {\n  border-top: none;\n  -webkit-border-top-left-radius: 0;\n  -webkit-border-top-right-radius: 0;\n  -moz-border-radius-topleft: 0;\n  -moz-border-radius-topright: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.widget[_ngcontent-%COMP%]   .widget-content[_ngcontent-%COMP%] {\n  padding: 20px 15px 15px;\n  background: #FFF;\n  border: 1px solid #D5D5D5;\n  border-radius: 5px;\n}\n\n.widget[_ngcontent-%COMP%]   .widget-header[_ngcontent-%COMP%] {\n  position: relative;\n  height: 40px;\n  line-height: 40px;\n  background: #E9E9E9;\n  background: linear-gradient(top, #fafafa 0%, #e9e9e9 100%);\n  text-shadow: 0 1px 0 #fff;\n  border-radius: 5px 5px 0 0;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1), inset 0 1px 0 white, inset 0 -1px 0 rgba(255, 255, 255, 0.7);\n  border-bottom: 1px solid #bababa;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#FAFAFA\", endColorstr=\"#E9E9E9\");\n  -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr='#FAFAFA', endColorstr='#E9E9E9')\";\n  border: 1px solid #D5D5D5;\n  -webkit-border-top-left-radius: 4px;\n  -webkit-border-top-right-radius: 4px;\n  -moz-border-radius-topleft: 4px;\n  -moz-border-radius-topright: 4px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  -webkit-background-clip: padding-box;\n}\n\nthead[_ngcontent-%COMP%] {\n  display: table-header-group;\n  vertical-align: middle;\n  border-color: inherit;\n}\n\n.widget[_ngcontent-%COMP%]   .widget-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  top: 2px;\n  position: relative;\n  left: 10px;\n  display: inline-block;\n  margin-right: 3em;\n  font-size: 14px;\n  font-weight: 600;\n  color: #555;\n  line-height: 17px;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);\n}\n\n.widget[_ngcontent-%COMP%]   .widget-header[_ngcontent-%COMP%]   [class^=icon-][_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   .widget-header[_ngcontent-%COMP%]   [class*=\" icon-\"][_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 13px;\n  margin-right: -2px;\n  font-size: 15px;\n  color: #555;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdC1tb2R1bGVzL2FkbWluL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vem9mdCUyMHNvbHV0aW9ucy9JTlRFWi1GRS9zcmMvYXBwL3Byb2plY3QtbW9kdWxlcy9hZG1pbi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBR0Esa0JBQUE7QUNESjs7QURHSTtFQUNJLGtDQUFBO0FDQVI7O0FER0k7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0k7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHSTtFQUNBLFVBQUE7QUNBSjs7QURHSTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDQUo7O0FER0k7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFHQSxrQkFBQTtBQ0FKOztBREdJO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQU1BLDBEQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNHQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrR0FBQTtFQUNBLHdHQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtBQ0FKOztBREdJO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDQUo7O0FER0k7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlEQUFBO0FDQUo7O0FER0k7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDQUoiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1kaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAwJSAhaW1wb3J0YW50O1xyXG4gICAgLy8gcGFkZGluZzogMSUgMCUgMSUgMSU7XHJcbn1cclxuXHJcbi50YWJsZS1ib3JkZXJlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICAgIHRoe1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgODAsIDE1MCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAud2lkZ2V0LndpZGdldC10YWJsZSAudGFibGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLndpZGdldC53aWRnZXQtdGFibGUgLndpZGdldC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC53aWRnZXQgLndpZGdldC1oZWFkZXIgKyAud2lkZ2V0LWNvbnRlbnQge1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXMtdG9wbGVmdDogMDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1cy10b3ByaWdodDogMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLndpZGdldCAud2lkZ2V0LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjBweCAxNXB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q1RDVENTtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC53aWRnZXQgLndpZGdldC1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTlFOUU5O1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZmFmYWZhIDAlLCAjZTllOWU5IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgI2ZhZmFmYSksIGNvbG9yLXN0b3AoMTAwJSwgI2U5ZTllOSkpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZmFmYWZhIDAlLCAjZTllOWU5IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZhZmFmYSAwJSwgI2U5ZTllOSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjZmFmYWZhIDAlLCAjZTllOWU5IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZhZmFmYSAwJSwgI2U5ZTllOSAxMDAlKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsMCwwLDAuMSksaW5zZXQgMCAxcHggMCB3aGl0ZSxpbnNldCAwIC0xcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JhYmFiYTtcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNGQUZBRkEnLCBlbmRDb2xvcnN0cj0nI0U5RTlFOScpO1xyXG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI0ZBRkFGQScsIGVuZENvbG9yc3RyPScjRTlFOUU5JylcIjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENUQ1RDU7XHJcbiAgICAtd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OiA0cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6IDRweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoZWFkIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC53aWRnZXQgLndpZGdldC1oZWFkZXIgaDMge1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzZW07XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC53aWRnZXQgLndpZGdldC1oZWFkZXIgW2NsYXNzXj1cImljb24tXCJdLCAud2lkZ2V0IC53aWRnZXQtaGVhZGVyIFtjbGFzcyo9XCIgaWNvbi1cIl0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0ycHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiIsIi5ob21lLWRpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFibGUtYm9yZGVyZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItbGVmdDogMDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCA4MCwgMTUwKTtcbn1cblxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi53aWRnZXQud2lkZ2V0LXRhYmxlIC50YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLndpZGdldC53aWRnZXQtdGFibGUgLndpZGdldC1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLndpZGdldCAud2lkZ2V0LWhlYWRlciArIC53aWRnZXQtY29udGVudCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6IDA7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy10b3ByaWdodDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi53aWRnZXQgLndpZGdldC1jb250ZW50IHtcbiAgcGFkZGluZzogMjBweCAxNXB4IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNENUQ1RDU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ud2lkZ2V0IC53aWRnZXQtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjRTlFOUU5O1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmYWZhZmEgMCUsICNlOWU5ZTkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICNmYWZhZmEpLCBjb2xvci1zdG9wKDEwMCUsICNlOWU5ZTkpKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZmFmYWZhIDAlLCAjZTllOWU5IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZmFmYWZhIDAlLCAjZTllOWU5IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZhZmFmYSAwJSwgI2U5ZTllOSAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZhZmFmYSAwJSwgI2U5ZTllOSAxMDAlKTtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMXB4IDAgd2hpdGUsIGluc2V0IDAgLTFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiYWJhYmE7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9XCIjRkFGQUZBXCIsIGVuZENvbG9yc3RyPVwiI0U5RTlFOVwiKTtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI0ZBRkFGQScsIGVuZENvbG9yc3RyPScjRTlFOUU5JylcIjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q1RDVENTtcbiAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6IDRweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiA0cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xufVxuXG50aGVhZCB7XG4gIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xufVxuXG4ud2lkZ2V0IC53aWRnZXQtaGVhZGVyIGgzIHtcbiAgdG9wOiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDNlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzU1NTtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi53aWRnZXQgLndpZGdldC1oZWFkZXIgW2NsYXNzXj1pY29uLV0sIC53aWRnZXQgLndpZGdldC1oZWFkZXIgW2NsYXNzKj1cIiBpY29uLVwiXSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gIG1hcmdpbi1yaWdodDogLTJweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzU1NTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4131:
/*!*****************************************************************************************!*\
  !*** ./src/app/project-modules/admin/components/user-profile/user-profile.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileComponent": () => (/* binding */ UserProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class UserProfileComponent {}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
  return new (t || UserProfileComponent)();
};
UserProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: UserProfileComponent,
  selectors: [["app-user-profile"]],
  decls: 207,
  vars: 0,
  consts: [[1, "home-div", 2, "padding", "2%"], [1, "row"], [1, "col-9", 2, "padding", "1%"], [1, "row", 2, "background-color", "rgb(235, 232, 232)", "height", "160px"], [1, "col-3"], ["src", "../../../../../assets/images/sample-profile-picture.png", "width", "150 px", "height", "160px"], [1, "col-9"], [1, "col", 2, "grid-gap", "0px !important"], [2, "font-weight", "600"], [2, "flex-direction", "row"], [1, "col", 2, "text-align", "right"], [1, "fa", "fa-edit"], [1, "row", 2, "grid-gap", "20px"], [1, "col", 2, "border", "1px solid rgb(143, 157, 222)", "width", "60px"], [2, "text-align", "center", "height", "fit-content"], [1, "col", 2, "border", "1px solid  rgb(143, 157, 222)", "width", "60px"], [1, "col", 2, "background-color", "rgb(143, 157, 222)", "width", "60px"], [1, "col", 2, "background-color", "rgb(62, 92, 225)", "width", "60px"], [1, "col", 2, "background-color", "rgb(224, 218, 25)", "width", "60px"], [1, "table", "table-bordered"], [1, "col-3", 2, "padding", "1%"], [1, "col"]],
  template: function UserProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PROFILE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "div", 1)(10, "div", 7)(11, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "JOHN DOE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Employee ID 100031");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Designation \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sr. Web Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Date Of Join \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "10/2/2012");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1)(24, "div", 9)(25, "div", 1)(26, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Career Started \u00A0 10/2/2012");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "UI UX Designer MindSoft");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Years of Experience ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " 8 years");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div")(37, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Leave Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12)(40, "div", 13)(41, "div", 14)(42, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "3.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "CASUAL LEAVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13)(47, "div", 14)(48, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "3.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "CASUAL LEAVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15)(53, "div", 14)(54, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "3.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "CASUAL LEAVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13)(59, "div", 14)(60, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "3.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "CASUAL LEAVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 15)(65, "div", 14)(66, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "3.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "CASUAL LEAVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div")(71, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Attendence (As on 31/10/2019)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 12)(74, "div", 16)(75, "div", 14)(76, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "160");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Monthly Target Hours");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 17)(81, "div", 14)(82, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "0.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Hours Worked");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 18)(87, "div", 14)(88, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "160.0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Remaining Working Hours To Achieve Target");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div")(93, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Leave (Leave Balance And History)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "table", 19)(96, "thead")(97, "tr")(98, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Reason");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "From");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "To");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Leave Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "tbody")(109, "tr")(110, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Doe");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "john@example.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Annual leave");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Accepted");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tr")(121, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Moe");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "mary@example.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Annual leave");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Accepted");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "tr")(132, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Dooley");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "july@example.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Annual leave");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Accepted");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "tr")(143, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Moe");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "mary@example.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Annual leave");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Accepted");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "tr")(154, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Dooley");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "july@example.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Annual leave");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Accepted");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 20)(165, "div", 1)(166, "div", 21)(167, "div")(168, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "permenant address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Kakkanad, Ernakulam, Kerala. Pin : 67506 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div")(173, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Emergency Contact Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Father 8891565232 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div")(178, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Completed Projects ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " CCA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " SchoolWizard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div")(186, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " Working Projects ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " Oneclick ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " IVSM ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " ZS Portal ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " Onebayshore");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " Mybayshore ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div")(199, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Team Members Employee -1 Employee -2 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div")(202, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Kudos Completed IS MBA Best floor Award Winner ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div")(205, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Completed Courses BMMC MBA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
  },
  styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] { height: 100%; }\r\nbody[_ngcontent-%COMP%] { \r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    background-color:  #E9E9E9;;\r\n    font-family: \"Noto Sans JP\", sans-serif !important;\r\n    font-style: normal;\r\n    box-sizing: border-box !important; }\r\nlabel[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  line-height: 0.8;\r\n  color: #000000;\r\n  font-weight: 400;\r\n}\r\n\r\n    .input-box[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      height: 40px;\r\n      padding: 5px 40px 5px 15px;\r\n      border-radius: 5px;\r\n      border: solid 1px #a2a2a2;\r\n      background-color: #fff;\r\n      outline: none;\r\n      font-size: 16px;\r\n      font-weight: normal;\r\n      font-stretch: normal;\r\n      font-style: normal;\r\n      line-height: 1.5;\r\n      letter-spacing: normal;\r\n      text-align: left;\r\n      color: #b7b7b7;\r\n    \r\n      &:focus {\r\n        outline: none;\r\n      }\r\n    }\r\n      \r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  color: #000 !important;\r\n\r\n  &::placeholder {\r\n    color: #b7b7b7 !important;\r\n  }\r\n}\r\n.button[_ngcontent-%COMP%]{\r\n  \r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n    color: #0b0b0b;\r\n    cursor: pointer;\r\n   margin-left: -30px;\r\n}\r\n.button[_ngcontent-%COMP%]:hover{\r\ncolor: #552de4;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:focus{\r\ncolor: white;\r\nbackground-color: rgb(255, 191, 0);\r\n}\r\n.title[_ngcontent-%COMP%]{\r\nfont-size: 28px;\r\nline-height: 28px;\r\nfont-weight: 600;\r\nfont-family:Georgia, 'Times New Roman', Times, serif\r\n}\r\n.desc[_ngcontent-%COMP%]{\r\nfont-size: 18px;\r\nfont-family:Georgia, 'Times New Roman', Times, serif;\r\nline-height: 28px;\r\nfont-weight: 400;\r\ncolor: #494848;\r\n}\r\n.full-height[_ngcontent-%COMP%] {\r\n    height: 100% !important;\r\n    overflow: hidden;\r\n  }\r\n\r\n.main-title[_ngcontent-%COMP%]{\r\nfont-size: 40px;\r\nfont-family:Georgia, 'Times New Roman', Times, serif;\r\nline-height: 48px;\r\nmargin-bottom: 10px;\r\ndisplay: inline-block;\r\nfont-weight: 700;\r\ncolor: #fff;\r\n}\r\n.sub-desc[_ngcontent-%COMP%]{\r\nfont-size: 16px;\r\ncolor: #fff;\r\ntext-transform: uppercase;\r\n}\r\n\r\n\r\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] { height: 100%; }\nbody[_ngcontent-%COMP%] { margin: 0; font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.home-div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7O0FBRTlFLGFBQWEsWUFBWSxFQUFFO0FBQzNCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGtEQUFrRDtJQUNsRCxrQkFBa0I7SUFDbEIsaUNBQWlDLEVBQUU7QUFDdkM7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0lBRUk7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLDBCQUEwQjtNQUMxQixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLHNCQUFzQjtNQUN0QixhQUFhO01BQ2IsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixvQkFBb0I7TUFDcEIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixzQkFBc0I7TUFDdEIsZ0JBQWdCO01BQ2hCLGNBQWM7O01BRWQ7UUFDRSxhQUFhO01BQ2Y7SUFDRjs7QUFFSjs7RUFFRSxzQkFBc0I7O0VBRXRCO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTs7SUFFSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7R0FDaEIsa0JBQWtCO0FBQ3JCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxZQUFZO0FBQ1osa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Ysb0RBQW9EO0FBQ3BELGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsY0FBYztBQUNkO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztBQUVGO0FBQ0EsZUFBZTtBQUNmLG9EQUFvRDtBQUNwRCxpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsV0FBVztBQUNYO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsV0FBVztBQUNYLHlCQUF5QjtBQUN6Qjs7OztBQUlBLGFBQWEsWUFBWSxFQUFFO0FBQzNCLE9BQU8sU0FBUyxFQUFFLGlEQUFpRCxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxyXG5ib2R5IHsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0U5RTlFOTs7XHJcbiAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgSlBcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50OyB9XHJcbmxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMC44O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbiAgICAuaW5wdXQtYm94IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgcGFkZGluZzogNXB4IDQwcHggNXB4IDE1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2EyYTJhMjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBjb2xvcjogI2I3YjdiNztcclxuICAgIFxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIFxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYjdiN2I3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5idXR0b257XHJcbiAgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzBiMGIwYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG59XHJcbi5idXR0b246aG92ZXJ7XHJcbmNvbG9yOiAjNTUyZGU0O1xyXG59XHJcblxyXG4uYnV0dG9uOmZvY3Vze1xyXG5jb2xvcjogd2hpdGU7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5MSwgMCk7XHJcbn1cclxuLnRpdGxle1xyXG5mb250LXNpemU6IDI4cHg7XHJcbmxpbmUtaGVpZ2h0OiAyOHB4O1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5mb250LWZhbWlseTpHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmXHJcbn1cclxuLmRlc2N7XHJcbmZvbnQtc2l6ZTogMThweDtcclxuZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxubGluZS1oZWlnaHQ6IDI4cHg7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbmNvbG9yOiAjNDk0ODQ4O1xyXG59XHJcbi5mdWxsLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuLm1haW4tdGl0bGV7XHJcbmZvbnQtc2l6ZTogNDBweDtcclxuZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxubGluZS1oZWlnaHQ6IDQ4cHg7XHJcbm1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxuY29sb3I6ICNmZmY7XHJcbn1cclxuLnN1Yi1kZXNje1xyXG5mb250LXNpemU6IDE2cHg7XHJcbmNvbG9yOiAjZmZmO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuXG5odG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9XG5ib2R5IHsgbWFyZ2luOiAwOyBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdC1tb2R1bGVzL2FkbWluL2NvbXBvbmVudHMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL3pvZnQlMjBzb2x1dGlvbnMvSU5URVotRkUvc3JjL2FwcC9wcm9qZWN0LW1vZHVsZXMvYWRtaW4vY29tcG9uZW50cy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksV0FBQTtBQ0ZKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzJyk7XHJcbi8vIHRke1xyXG4vLyAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4vLyB9XHJcbi5ob21lLWRpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDAlICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBwYWRkaW5nOiAxJSAwJSAxJSAxJTtcclxufSIsIkBpbXBvcnQgdXJsKFwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIik7XG4uaG9tZS1kaXYge1xuICB3aWR0aDogMTAwJTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_project-modules_admin_admin_module_ts.js.map
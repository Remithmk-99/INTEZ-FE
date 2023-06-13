"use strict";
(self["webpackChunkzoft_site"] = self["webpackChunkzoft_site"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [
// {
//   path: '',
//   redirectTo: 'admin',
//   pathMatch: 'full'
// },
{
  path: '',
  redirectTo: 'auth',
  pathMatch: 'full'
}, {
  path: 'auth',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_project-modules_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./project-modules/auth/auth.module */ 7404)).then(module => module.AuthModule)
}, {
  path: 'admin',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_project-modules_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./project-modules/admin/admin.module */ 1578)).then(module => module.AdminModule)
}, {
  path: 'user',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_project-modules_user_user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./project-modules/user/user.module */ 1678)).then(module => module.UserModule)
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'Employee Engagement';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _project_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-modules/shared/shared.module */ 951);
/* harmony import */ var _project_modules_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-modules/user/user.component */ 6351);
/* harmony import */ var _project_modules_user_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-modules/user/components/header/header.component */ 9594);
/* harmony import */ var _project_modules_user_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-modules/user/components/sidebar/sidebar.component */ 4841);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _project_modules_services_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-modules/services/interceptor.interceptor */ 4215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);








// import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
// import { GoogleLoginProvider } from 'angularx-social-login';



class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
    useClass: _project_modules_services_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_6__.InterceptorInterceptor,
    multi: true
  }
  // {
  //   provide: 'SocialAuthServiceConfig',
  //   useValue: {
  //     autoLogin: false,
  //     providers: [
  //       {
  //         id: GoogleLoginProvider.PROVIDER_ID,
  //         provider: new GoogleLoginProvider(
  //           '180688556478-ul7b05u5j0n9mmob4391ibdvioegc6nj.apps.googleusercontent.com'
  //         )
  //       }
  //     ]
  //   } as SocialAuthServiceConfig,
  // }    
  ],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _project_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _project_modules_user_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.SidebarComponent, _project_modules_user_user_component__WEBPACK_IMPORTED_MODULE_3__.UserComponent, _project_modules_user_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _project_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 5709:
/*!*********************************************************!*\
  !*** ./src/app/project-modules/services/api.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ApiService {
  constructor(http) {
    this.http = http;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  ExecuteGet(url, urlParam, queryParam) {
    if (urlParam) {
      url = url + '/' + urlParam;
    }
    return this.http.get(url, {
      params: queryParam
    });
  }
  ExecutePost(url, body, urlParam, queryParam) {
    if (urlParam) {
      url = url + '/' + urlParam;
    }
    return this.http.post(url, body, {
      params: queryParam
    });
  }
  ExecutePut(url, body, urlParam, queryParam) {
    if (urlParam) {
      url = url + '/' + urlParam;
    }
    return this.http.put(url, body, {
      params: queryParam
    });
  }
  ExecuteDelete(url, urlParam, queryParam) {
    if (urlParam) {
      url = url + '/' + urlParam;
    }
    return this.http.delete(url, {
      params: queryParam
    });
  }
  ExecutePatch(url, body, urlParam, queryParam) {
    if (urlParam) {
      url = url + '/' + urlParam;
    }
    return this.http.patch(url, body, {
      params: queryParam
    });
  }
}
ApiService.ɵfac = function ApiService_Factory(t) {
  return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ApiService,
  factory: ApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7824:
/*!*************************************************************!*\
  !*** ./src/app/project-modules/services/general.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralService": () => (/* binding */ GeneralService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5709);




class GeneralService {
  constructor(router, apiService) {
    this.router = router;
    this.apiService = apiService;
    this.unreadMessage = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
  }
  get getToken() {
    if (localStorage.getItem('intezToken')) {
      return localStorage.getItem('intezToken');
    } else {
      return null;
    }
  }
  logOut() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
GeneralService.ɵfac = function GeneralService_Factory(t) {
  return new (t || GeneralService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
};
GeneralService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: GeneralService,
  factory: GeneralService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4215:
/*!*********************************************************************!*\
  !*** ./src/app/project-modules/services/interceptor.interceptor.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterceptorInterceptor": () => (/* binding */ InterceptorInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general.service */ 7824);


class InterceptorInterceptor {
  constructor(general) {
    this.general = general;
  }
  intercept(request, next) {
    if (request.headers.get('Skip')) {
      const newHeaders = request.headers.delete('Skip');
      const newRequest = request.clone({
        headers: newHeaders
      });
      return next.handle(newRequest);
    } else if (this.general.getToken) {
      const modified = request.clone({
        setHeaders: {
          Authorization: this.general.getToken
        }
      });
      return next.handle(modified);
    } else {
      return next.handle(request);
    }
  }
}
InterceptorInterceptor.ɵfac = function InterceptorInterceptor_Factory(t) {
  return new (t || InterceptorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_general_service__WEBPACK_IMPORTED_MODULE_0__.GeneralService));
};
InterceptorInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: InterceptorInterceptor,
  factory: InterceptorInterceptor.ɵfac
});

/***/ }),

/***/ 951:
/*!*********************************************************!*\
  !*** ./src/app/project-modules/shared/shared.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);












class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule]
  });
})();

/***/ }),

/***/ 9594:
/*!****************************************************************************!*\
  !*** ./src/app/project-modules/user/components/header/header.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);



const _c0 = function () {
  return ["/user/user-profile"];
};
class HeaderComponent {
  constructor() {
    this.sideOpenEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnChanges() {
    console.log("this.isSidebarOpened", this.isSidebarOpened);
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  inputs: {
    isSidebarOpened: "isSidebarOpened"
  },
  outputs: {
    sideOpenEvent: "sideOpenEvent"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 11,
  vars: 2,
  consts: [[1, "row", "home-div"], [1, "col"], ["src", "../../../../assets//images//logo.png", "width", "150px", "height", "50px"], [1, "side-head"], ["src", "../../../../../assets//icons/plus.svg", 2, "position", "relative", "top", "0px", "left", "56px"], ["src", "../../../../../assets//icons/Rectangle 6 (1).svg"], ["src", "../../../../../assets//icons/bell.svg"], [3, "routerLink"], ["src", "../../../../../assets//images//sample-profile-picture.png", 1, "dp"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1)(5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4)(7, "img", 5)(8, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] { height: 100%; }\r\nbody[_ngcontent-%COMP%] { \r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    background-color:  #E9E9E9;;\r\n    font-family: \"Noto Sans JP\", sans-serif !important;\r\n    font-style: normal;\r\n    box-sizing: border-box !important; }\r\nlabel[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  line-height: 0.8;\r\n  color: #000000;\r\n  font-weight: 400;\r\n}\r\n\r\n    .input-box[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      height: 40px;\r\n      padding: 5px 40px 5px 15px;\r\n      border-radius: 5px;\r\n      border: solid 1px #a2a2a2;\r\n      background-color: #fff;\r\n      outline: none;\r\n      font-size: 16px;\r\n      font-weight: normal;\r\n      font-stretch: normal;\r\n      font-style: normal;\r\n      line-height: 1.5;\r\n      letter-spacing: normal;\r\n      text-align: left;\r\n      color: #b7b7b7;\r\n    \r\n      &:focus {\r\n        outline: none;\r\n      }\r\n    }\r\n      \r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  color: #000 !important;\r\n\r\n  &::placeholder {\r\n    color: #b7b7b7 !important;\r\n  }\r\n}\r\n.button[_ngcontent-%COMP%]{\r\n  \r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n    color: #0b0b0b;\r\n    cursor: pointer;\r\n   margin-left: -30px;\r\n}\r\n.button[_ngcontent-%COMP%]:hover{\r\ncolor: #552de4;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:focus{\r\ncolor: white;\r\nbackground-color: rgb(255, 191, 0);\r\n}\r\n.title[_ngcontent-%COMP%]{\r\nfont-size: 28px;\r\nline-height: 28px;\r\nfont-weight: 600;\r\nfont-family:Georgia, 'Times New Roman', Times, serif\r\n}\r\n.desc[_ngcontent-%COMP%]{\r\nfont-size: 18px;\r\nfont-family:Georgia, 'Times New Roman', Times, serif;\r\nline-height: 28px;\r\nfont-weight: 400;\r\ncolor: #494848;\r\n}\r\n.full-height[_ngcontent-%COMP%] {\r\n    height: 100% !important;\r\n    overflow: hidden;\r\n  }\r\n\r\n.main-title[_ngcontent-%COMP%]{\r\nfont-size: 40px;\r\nfont-family:Georgia, 'Times New Roman', Times, serif;\r\nline-height: 48px;\r\nmargin-bottom: 10px;\r\ndisplay: inline-block;\r\nfont-weight: 700;\r\ncolor: #fff;\r\n}\r\n.sub-desc[_ngcontent-%COMP%]{\r\nfont-size: 16px;\r\ncolor: #fff;\r\ntext-transform: uppercase;\r\n}\r\n\r\n\r\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] { height: 100%; }\nbody[_ngcontent-%COMP%] { margin: 0; font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.home-div[_ngcontent-%COMP%] {\n  padding: 1%;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 0.5px solid #ABABAB;\n}\n\n.side-head[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 25px;\n  justify-content: flex-end;\n  padding-top: 10px;\n  padding-right: 20px;\n}\n\n.dp[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 55px;\n  width: 55px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7O0FBRTlFLGFBQWEsWUFBWSxFQUFFO0FBQzNCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGtEQUFrRDtJQUNsRCxrQkFBa0I7SUFDbEIsaUNBQWlDLEVBQUU7QUFDdkM7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0lBRUk7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLDBCQUEwQjtNQUMxQixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLHNCQUFzQjtNQUN0QixhQUFhO01BQ2IsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixvQkFBb0I7TUFDcEIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixzQkFBc0I7TUFDdEIsZ0JBQWdCO01BQ2hCLGNBQWM7O01BRWQ7UUFDRSxhQUFhO01BQ2Y7SUFDRjs7QUFFSjs7RUFFRSxzQkFBc0I7O0VBRXRCO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTs7SUFFSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7R0FDaEIsa0JBQWtCO0FBQ3JCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxZQUFZO0FBQ1osa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Ysb0RBQW9EO0FBQ3BELGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsY0FBYztBQUNkO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztBQUVGO0FBQ0EsZUFBZTtBQUNmLG9EQUFvRDtBQUNwRCxpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsV0FBVztBQUNYO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsV0FBVztBQUNYLHlCQUF5QjtBQUN6Qjs7OztBQUlBLGFBQWEsWUFBWSxFQUFFO0FBQzNCLE9BQU8sU0FBUyxFQUFFLGlEQUFpRCxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxyXG5ib2R5IHsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0U5RTlFOTs7XHJcbiAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgSlBcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50OyB9XHJcbmxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMC44O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbiAgICAuaW5wdXQtYm94IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgcGFkZGluZzogNXB4IDQwcHggNXB4IDE1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2EyYTJhMjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBjb2xvcjogI2I3YjdiNztcclxuICAgIFxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIFxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYjdiN2I3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5idXR0b257XHJcbiAgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzBiMGIwYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG59XHJcbi5idXR0b246aG92ZXJ7XHJcbmNvbG9yOiAjNTUyZGU0O1xyXG59XHJcblxyXG4uYnV0dG9uOmZvY3Vze1xyXG5jb2xvcjogd2hpdGU7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5MSwgMCk7XHJcbn1cclxuLnRpdGxle1xyXG5mb250LXNpemU6IDI4cHg7XHJcbmxpbmUtaGVpZ2h0OiAyOHB4O1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5mb250LWZhbWlseTpHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmXHJcbn1cclxuLmRlc2N7XHJcbmZvbnQtc2l6ZTogMThweDtcclxuZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxubGluZS1oZWlnaHQ6IDI4cHg7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbmNvbG9yOiAjNDk0ODQ4O1xyXG59XHJcbi5mdWxsLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuLm1haW4tdGl0bGV7XHJcbmZvbnQtc2l6ZTogNDBweDtcclxuZm9udC1mYW1pbHk6R2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxubGluZS1oZWlnaHQ6IDQ4cHg7XHJcbm1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxuY29sb3I6ICNmZmY7XHJcbn1cclxuLnN1Yi1kZXNje1xyXG5mb250LXNpemU6IDE2cHg7XHJcbmNvbG9yOiAjZmZmO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuXG5odG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9XG5ib2R5IHsgbWFyZ2luOiAwOyBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdC1tb2R1bGVzL3VzZXIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vem9mdCUyMHNvbHV0aW9ucy9JTlRFWi1GRS9zcmMvYXBwL3Byb2plY3QtbW9kdWxlcy91c2VyL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNLLFdBQUE7RUFDRCxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtBQ0NKOztBREdBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7RUFDQyx5QkFBQTtFQUNELGlCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCcuLi8uLi8uLi8uLi8uLi9zdHlsZXMuc2NzcycpO1xyXG4uaG9tZS1kaXZ7XHJcbiAgICAgcGFkZGluZzogMSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI0FCQUJBQjtcclxufVxyXG5cclxuXHJcbi5zaWRlLWhlYWR7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBnYXA6IDI1cHg7IFxyXG4gICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5kcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICB3aWR0aDogNTVweDtcclxufSIsIkBpbXBvcnQgdXJsKFwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIik7XG4uaG9tZS1kaXYge1xuICBwYWRkaW5nOiAxJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjQUJBQkFCO1xufVxuXG4uc2lkZS1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmRwIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDU1cHg7XG4gIHdpZHRoOiA1NXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4841:
/*!******************************************************************************!*\
  !*** ./src/app/project-modules/user/components/sidebar/sidebar.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




function SidebarComponent_div_7_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
  }
}
function SidebarComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_div_7_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.activateButton(item_r1 == null ? null : item_r1.index, item_r1 == null ? null : item_r1.path));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_div_7_span_4_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.activeButton === (item_r1 == null ? null : item_r1.index));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSidebarOpened);
  }
}
class SidebarComponent {
  constructor(router) {
    this.router = router;
    this.activeButton = 1;
    this.sideOpenEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.menuItems = [{
      index: 1,
      path: '/user/home',
      title: 'Home',
      icon: '../../../../../assets/icons/home.svg'
    }, {
      index: 2,
      path: '/user/timesheet-dashboard',
      title: 'Timesheet',
      icon: '../../../../../assets/icons/timesheetinactive.svg'
    }, {
      index: 3,
      path: '/user/home',
      title: 'ActivityFeed',
      icon: '/assets/icons/activityfeed.svg'
    }, {
      index: 4,
      path: '/user/home',
      title: 'Assignments',
      icon: '../../../../../assets/icons/assignments.svg'
    }, {
      index: 5,
      path: '/user/home',
      title: 'Events',
      icon: '../../../../../assets/icons/events.svg'
    }, {
      index: 6,
      path: '/user/home',
      title: 'Settings',
      icon: '../../../../../assets/icons/settings.svg'
    }];
    console.log("this.isSidebarOpened", this.isSidebarOpened);
  }
  onToggle() {
    this.isSidebarOpened = !this.isSidebarOpened;
    this.sideOpenEvent.emit(this.isSidebarOpened);
  }
  activateButton(index, path) {
    this.activeButton = index;
    this.router.navigateByUrl(path);
  }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
  return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SidebarComponent,
  selectors: [["app-sidebar"]],
  inputs: {
    isSidebarOpened: "isSidebarOpened"
  },
  outputs: {
    sideOpenEvent: "sideOpenEvent"
  },
  decls: 8,
  vars: 1,
  consts: [[1, "outer-div"], [1, "sidebarMenu", 3, "ngClass"], [1, "sideBarUst", "text-center", "pt-3"], [1, "toggleIcon", "mt-3", 2, "cursor", "pointer"], [2, "padding", "10px", 3, "click"], ["src", "../../../../../assets//icons/bars-solid.svg", 1, "toogle-icon"], [2, "margin", "30px 10px 30px 10px"], [4, "ngFor", "ngForOf"], [3, "click"], [1, "nav-icon", 3, "src"], ["style", "padding-top: 5px", 4, "ngIf"], [2, "padding-top", "5px"]],
  template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_span_click_4_listener() {
        return ctx.onToggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidebarComponent_div_7_Template, 5, 4, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: [".sidebar-main[_ngcontent-%COMP%] {\n  background-color: #E9E9E9;\n  height: 100%;\n  width: 100%;\n  box-shadow: 5px 0 10px 0 rgba(68, 82, 119, 0.25);\n  border: solid 0.6px #eee;\n  border-radius: 8px;\n  padding: 30px 0px 20px 0px;\n  overflow: auto;\n}\n.sidebar-main[_ngcontent-%COMP%]:hover   .sidebar-btn[_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n\n.sidebar-main[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 0px;\n  width: 4px;\n}\n\n.sidebar-main[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #e0e0e0;\n  border-radius: 10px;\n  margin: 120px 0px 20px 0px;\n}\n\n.sidebar-main[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #eeeded;\n}\n\n.active[_ngcontent-%COMP%] {\n  background: #307FF5;\n  border-radius: 5px;\n}\n.active[_ngcontent-%COMP%]:hover {\n  color: #21252C;\n}\n.active[_ngcontent-%COMP%]   .visible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.nav-button-groups[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.toogle-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 55px;\n  border: none;\n  background: linear-gradient(180deg, #F4F5F9 0%, #F4F5F9 100%);\n  outline: none;\n  font-style: normal;\n  animation-name: sideBarButton;\n  animation-duration: 2s;\n  transition: background-color, margin-left;\n  transition-duration: 1s;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 17px;\n  display: flex;\n  text-align: left;\n  padding: 13px 10px 10px 21px;\n  color: #21252C;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  color: #307FF5;\n  border-right: 4px solid var(--night-blue);\n  border-radius: 5px;\n  margin-left: 5px;\n}\n\n.nav-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  width: 26px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdC1tb2R1bGVzL3VzZXIvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi96b2Z0JTIwc29sdXRpb25zL0lOVEVaLUZFL3NyYy9hcHAvcHJvamVjdC1tb2R1bGVzL3VzZXIvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0RBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDQUo7QURHTTtFQUNFLGtCQUFBO0FDRFI7O0FETUU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ0hKOztBRE1FO0VBQ0UsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDSEo7O0FETUU7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FDSEo7O0FET0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDSko7QURLTTtFQUNFLGNBQUE7QUNIUjtBREtNO0VBQ0UsYUFBQTtBQ0hSOztBRE9NO0VBQ0UsV0FBQTtBQ0pSOztBRE9JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNKTjs7QURRTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZEQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNMUjs7QURTTTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNOUjs7QURXTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ1JSIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLnNpZGViYXItbWFpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFOUU5RTk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDVweCAwIDEwcHggMCByZ2JhKDY4LCA4MiwgMTE5LCAwLjI1KTtcclxuICAgIGJvcmRlcjogc29saWQgMC42cHggI2VlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDMwcHggMHB4IDIwcHggMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgLnNpZGViYXItYnRuIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItbWFpbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci1tYWluOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICNlMGUwZTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMjBweCAwcHggMjBweCAwcHhcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItbWFpbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVkZWQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6ICAjMzA3RkY1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzIxMjUyQztcclxuICAgICAgfVxyXG4gICAgICAudmlzaWJsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgICAgIC5uYXYtYnV0dG9uLWdyb3VwcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAudG9vZ2xlLWljb257XHJcbiAgICAgIHdpZHRoOjMwcHg7XHJcbiAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRjRGNUY5IDAlLCAjRjRGNUY5IDEwMCUpO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzaWRlQmFyQnV0dG9uO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciwgbWFyZ2luLWxlZnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDEzcHggMTBweCAxMHB4IDIxcHg7XHJcbiAgICAgICAgY29sb3I6ICMyMTI1MkM7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogICMzMDdGRjU7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdmFyKC0tbmlnaHQtYmx1ZSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgXHJcbiAgICAgIFxyXG4gICAgICAubmF2LWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgfVxyXG4gIFxyXG5cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgXHJcbiAgICAgICIsIi5zaWRlYmFyLW1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlFOUU5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiA1cHggMCAxMHB4IDAgcmdiYSg2OCwgODIsIDExOSwgMC4yNSk7XG4gIGJvcmRlcjogc29saWQgMC42cHggI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAzMHB4IDBweCAyMHB4IDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uc2lkZWJhci1tYWluOmhvdmVyIC5zaWRlYmFyLWJ0biB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLnNpZGViYXItbWFpbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBoZWlnaHQ6IDBweDtcbiAgd2lkdGg6IDRweDtcbn1cblxuLnNpZGViYXItbWFpbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTIwcHggMHB4IDIwcHggMHB4O1xufVxuXG4uc2lkZWJhci1tYWluOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVkZWQ7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMzA3RkY1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uYWN0aXZlOmhvdmVyIHtcbiAgY29sb3I6ICMyMTI1MkM7XG59XG4uYWN0aXZlIC52aXNpYmxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm5hdi1idXR0b24tZ3JvdXBzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b29nbGUtaWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0Y0RjVGOSAwJSwgI0Y0RjVGOSAxMDAlKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBhbmltYXRpb24tbmFtZTogc2lkZUJhckJ1dHRvbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciwgbWFyZ2luLWxlZnQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAxM3B4IDEwcHggMTBweCAyMXB4O1xuICBjb2xvcjogIzIxMjUyQztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjb2xvcjogIzMwN0ZGNTtcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdmFyKC0tbmlnaHQtYmx1ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLm5hdi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMjZweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6351:
/*!********************************************************!*\
  !*** ./src/app/project-modules/user/user.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserComponent": () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 4841);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ 9594);





const _c0 = function (a0, a1) {
  return {
    "open-sidebar": a0,
    "close-sidebar": a1
  };
};
const _c1 = function (a0, a1) {
  return {
    "open-menu": a0,
    "close-menu": a1
  };
};
class UserComponent {
  getScreenSize(event) {
    this.scrWidth = window.innerWidth;
    if (this.scrWidth < 1120) this.isSidebarOpened = false;else this.isSidebarOpened = true;
  }
  constructor() {
    this.isSidebarOpened = false;
    this.sidebarStatus = 'open';
  }
  ngOnInit() {
    if (window.innerWidth < 1120) {
      this.isSidebarOpened = false;
    } else {
      this.isSidebarOpened = true;
    }
  }
  sidebarEvent(value) {
    this.isSidebarOpened = value;
  }
}
UserComponent.ɵfac = function UserComponent_Factory(t) {
  return new (t || UserComponent)();
};
UserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: UserComponent,
  selectors: [["app-user"]],
  hostBindings: function UserComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function UserComponent_resize_HostBindingHandler($event) {
        return ctx.getScreenSize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    }
  },
  decls: 7,
  vars: 9,
  consts: [[1, "full-height"], [1, "sidebarMenu", 3, "ngClass"], [3, "isSidebarOpened", "sideOpenEvent"], [1, "main", "full-height", 3, "ngClass"], [1, "router-view-div", "full-height"]],
  template: function UserComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-sidebar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sideOpenEvent", function UserComponent_Template_app_sidebar_sideOpenEvent_2_listener($event) {
        return ctx.sidebarEvent($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-header")(6, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, ctx.isSidebarOpened, !ctx.isSidebarOpened));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isSidebarOpened", ctx.isSidebarOpened);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](6, _c1, ctx.isSidebarOpened, !ctx.isSidebarOpened));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
  styles: [".sidebarMenu[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 85px;\n  position: fixed;\n  z-index: 1;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  background: linear-gradient(180deg, #F4F5F9 0%, #F4F5F9 100%);\n  overflow-x: hidden;\n  transition: 0.1s;\n  z-index: 1000;\n}\n\n.open-sidebar[_ngcontent-%COMP%] {\n  transition: 0.9s;\n  width: 230px !important;\n}\n\n.open-menu[_ngcontent-%COMP%] {\n  transition: 0.9s;\n  margin-left: 230px;\n}\n\n.nav-header[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  position: fixed;\n  right: 0px;\n  left: 0px;\n  top: 0px;\n  z-index: 10;\n}\n\n.close-sidebar[_ngcontent-%COMP%] {\n  width: 85px;\n  box-shadow: none;\n  transition: 0.8s;\n}\n\n.close-menu[_ngcontent-%COMP%] {\n  margin-left: 85px;\n}\n\n.main[_ngcontent-%COMP%] {\n  transition: margin-left 0.7s;\n}\n\n.router-view-div[_ngcontent-%COMP%] {\n  background-color: white;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n\n@media (max-width: 1119.98px) {\n  .open-menu[_ngcontent-%COMP%] {\n    margin-left: 85px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdC1tb2R1bGVzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL3pvZnQlMjBzb2x1dGlvbnMvSU5URVotRkUvc3JjL2FwcC9wcm9qZWN0LW1vZHVsZXMvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDZEQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREdBO0VBQ0U7SUFDSSxpQkFBQTtFQ0FKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhck1lbnV7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA4NXB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBib3R0b206IDBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRjRGNUY5IDAlLCAjRjRGNUY5IDEwMCUpO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcblxyXG59XHJcblxyXG4ub3Blbi1zaWRlYmFye1xyXG4gIHRyYW5zaXRpb246IDAuOXM7XHJcbiAgd2lkdGg6IDIzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vcGVuLW1lbnV7XHJcbiAgdHJhbnNpdGlvbjogMC45cztcclxuICBtYXJnaW4tbGVmdDogMjMwcHg7XHJcbn1cclxuLm5hdi1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uY2xvc2Utc2lkZWJhciB7XHJcbiAgd2lkdGg6IDg1cHg7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICB0cmFuc2l0aW9uOiAwLjhzO1xyXG59XHJcblxyXG4uY2xvc2UtbWVudSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDg1cHg7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAuN3M7XHJcbn1cclxuXHJcbi5yb3V0ZXItdmlldy1kaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMTkuOThweCkge1xyXG4gIC5vcGVuLW1lbnUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogODVweDtcclxuICB9XHJcblxyXG59XHJcbiIsIi5zaWRlYmFyTWVudSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDg1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNGNEY1RjkgMCUsICNGNEY1RjkgMTAwJSk7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC4xcztcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLm9wZW4tc2lkZWJhciB7XG4gIHRyYW5zaXRpb246IDAuOXM7XG4gIHdpZHRoOiAyMzBweCAhaW1wb3J0YW50O1xufVxuXG4ub3Blbi1tZW51IHtcbiAgdHJhbnNpdGlvbjogMC45cztcbiAgbWFyZ2luLWxlZnQ6IDIzMHB4O1xufVxuXG4ubmF2LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jbG9zZS1zaWRlYmFyIHtcbiAgd2lkdGg6IDg1cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuOHM7XG59XG5cbi5jbG9zZS1tZW51IHtcbiAgbWFyZ2luLWxlZnQ6IDg1cHg7XG59XG5cbi5tYWluIHtcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC43cztcbn1cblxuLnJvdXRlci12aWV3LWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTE5Ljk4cHgpIHtcbiAgLm9wZW4tbWVudSB7XG4gICAgbWFyZ2luLWxlZnQ6IDg1cHg7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  // baseURL:"http://localhost:9191/",
  apiUrl: 'https://zoft-intez-user-service-be.azurewebsites.net/api/v1/'
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
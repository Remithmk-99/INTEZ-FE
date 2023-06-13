"use strict";
(self["webpackChunkzoft_site"] = self["webpackChunkzoft_site"] || []).push([["src_app_project-modules_user_user_module_ts"],{

/***/ 8402:
/*!********************************************************!*\
  !*** ./src/app/project-modules/shared/apiconstants.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiConstant": () => (/* binding */ ApiConstant)
/* harmony export */ });


const ApiConstant = Object.freeze({
  getProjectList: 'project/list-all'
});

/***/ }),

/***/ 3461:
/*!************************************************************************!*\
  !*** ./src/app/project-modules/user/components/home/home.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var src_app_project_modules_shared_apiconstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/project-modules/shared/apiconstants */ 8402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_project_modules_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/project-modules/services/api.service */ 5709);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function HomeComponent_ul_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul")(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](project_r4 == null ? null : project_r4.title);
  }
}
const _c0 = function () {
  return {
    "background": "#DAE9FF",
    "border": "1px solid #307FF5",
    "color": "#307FF5"
  };
};
const _c1 = function () {
  return {
    "background": "#FFFFFF",
    "border": "1px solid #307FF5",
    "color": "#808080"
  };
};
function HomeComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const date_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r1.isCurrentDate(date_r5) ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", date_r5, "");
  }
}
function HomeComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35)(1, "div", 36)(2, "div", 1)(3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 39)(6, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "John Alexander");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h4", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div")(13, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 45)(17, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h3", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "12");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h3", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "21");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const feed_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](feed_r6 == null ? null : feed_r6.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", feed_r6 == null ? null : feed_r6.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", feed_r6 == null ? null : feed_r6.attachment, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function HomeComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 49)(2, "div", 50)(3, "h3", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Upcoming Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 53)(8, "h3", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "08");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Tue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " 08 Dec - 10 Dec, 2023 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const event_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](event_r7 == null ? null : event_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", event_r7 == null ? null : event_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](event_r7 == null ? null : event_r7.content);
  }
}
class HomeComponent {
  constructor(apiService) {
    this.apiService = apiService;
    this.projects = [{
      "title": "INTEZ"
    }, {
      "title": "Zoft Site"
    }, {
      "title": "OneClick"
    }, {
      "title": "Bass Phase 2"
    }];
    this.feeds = [{
      "content": "📢 Exciting Journey! 🎥🏢 Take a moment to watch the video, and let us know your thoughts and impressions in the comments below. We are excited to hear your feedback and share this remarkable accomplishment with all of you! ",
      "attachment": "../../../../../assets/images/video.png",
      "time": "10 min ago"
    }, {
      "content": " video, and let us know your thoughts and impressions in the comments below. We are excited to hear your feedback and share this remarkable accomplishment with all of you! ",
      "attachment": "../../../../../assets/images/video.png",
      "time": "20 min ago"
    }, {
      "content": " Take a moment to watch the video, and let us know your thoughts and impressions in the comments below. We are excited to hear your feedback and share this remarkable accomplishment with all of you! ",
      "attachment": "../../../../../assets/images/video.png",
      "time": "30 min ago"
    }];
    this.events = [{
      "title": "TechX",
      "image": "../../../../../assets/images/eventImg.svg",
      "content": "TechX is a cutting-edge industry gathering for tech enthusiasts and business professionals to explore trends, advancements, and disruptive technologies shaping the future. Connect with experts, engage in discussions, and discover innovative solutions.",
      "start_date": "",
      "end_date": ""
    }, {
      "title": "Innovation Summit",
      "image": "../../../../../assets/images/eventImg.svg",
      "content": "Join industry leaders, entrepreneurs, and innovators at the Innovation Summit to explore cutting-edge ideas, trends, and the future of technology and business. Connect, learn, and collaborate with renowned speakers, workshops, and industry connections.",
      "date": ""
    }];
    this.getCurrentWeekDates();
  }
  ngOnInit() {
    this.getProjectList();
  }
  getCurrentWeekDates() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
    // Calculate the starting date of the current week
    const startingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDay);
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startingDate.getFullYear(), startingDate.getMonth(), startingDate.getDate() + i);
      weekDates.push(date.getDate());
    }
    console.log("weekDates", weekDates);
    return weekDates;
  }
  isCurrentDate(date) {
    const currentDate = new Date().getDate();
    console.log("currentDate", currentDate, date);
    if (currentDate == date) {
      return true;
    } else {
      return false;
    }
  }
  getProjectList() {
    console.log("this.apiService.baseUrl", this.apiService.baseUrl);
    this.apiService.ExecuteGet(this.apiService.baseUrl + src_app_project_modules_shared_apiconstants__WEBPACK_IMPORTED_MODULE_0__.ApiConstant.getProjectList).subscribe(response => {
      console.log("response", response);
    }, error => {});
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_project_modules_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 68,
  vars: 4,
  consts: [[1, "outer-div"], [1, "row"], [1, "col-lg-3", "col-md-3", "col-sm-3", "col-xs-7", "profile"], [1, "profile-det"], ["src", "../../../../../assets/icons/rectangle.svg", 1, "dp-background"], ["src", "../../../../../assets//images//sample-profile-picture.png", 1, "dp"], [1, "profile-name"], [1, "sub-title"], [1, "project-detail"], ["src", "../../../../../assets//icons/projects.svg"], [2, "padding-top", "35px"], [4, "ngFor", "ngForOf"], [2, "padding-left", "20px", "padding-top", "20px"], ["src", "../../../../../assets//icons//timesheet.svg"], [1, "row", "outer-timesheet-div"], ["class", "col inner-timesheet-div", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "timesheet"], [1, "form-outline", "mb-4", 2, "margin-top", "20px"], ["type", "button", 1, "btn", "btn-primary", "btn-block"], [1, "leave-status"], ["src", "../../../../../assets//icons//leave2.svg"], [1, "leave-type"], [1, "col-lg-6", "col-md-5", "col-sm-5", "col-xs-7", 2, "margin-right", "10px"], [1, "col", "profile", 2, "padding", "2%"], ["src", "../../../../../assets//icons//content.svg", 2, "position", "relative", "left", "20px", "bottom", "45px"], [2, "display", "flex", "gap", "20px", "justify-content", "space-between"], [2, "display", "flex", "gap", "5px"], ["src", "../../../../../assets//icons/imgIcon.svg"], [1, "title"], ["src", "../../../../../assets//icons/vidIcon.svg"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 2, "height", "38px", "margin-top", "7px"], ["src", "../../../../../assets/icons/publish.svg", 1, "publish-icon"], ["class", "col profile", "style", "padding: 3%;margin-top: 3%;", 4, "ngFor", "ngForOf"], [1, "col-lg", "col-md-3", "col-sm-3", "col-xs-7", "profile", "responsive", 2, "background-color", "#E9E9E9"], [1, "col", "inner-timesheet-div", 3, "ngStyle"], [1, "col", "profile", 2, "padding", "3%", "margin-top", "3%"], [2, "display", "flex", "justify-content", "space-between"], [1, "col-3"], ["src", "../../../../../assets//images/sample-profile-picture.png", 2, "width", "43px", "height", "43px", "border-radius", "50%"], [1, "col-9"], [1, "sub-title", 2, "color", "#424242"], [1, "time"], ["src", "../../../../../assets//icons//threedot.svg"], [1, "sub-title", 2, "color", "#404040 !important", "font-weight", "500"], ["width", "100%", 3, "src"], [2, "padding", "15px 10px 10px 0px", "display", "flex", "gap", "20px"], [1, "fa", "fa-heart", 2, "color", "#C53434", "font-size", "22px"], [1, "count"], ["src", "../../../../../assets//icons/comment.svg", 2, "margin-top", "-16px"], [1, "row", 2, "border-radius", "10px", "background", "#FFFFFF", "padding", "2%", "margin-bottom", "10px"], [1, "col-lg-9", "col-md-12", "col-xm-12"], [1, "sub-title", 2, "padding-top", "10px"], [1, "event-title"], [1, "col-lg-3", "col-md-4", "col-sm-4", "date-div"], [1, "date"], [1, "day"], [2, "margin-top", "10px", 3, "src"], [1, "content"], [1, "event-dates"], ["src", "../../../../../assets//icons/datepicker.svg", 2, "margin-right", "10px"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4)(5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "John Alexander");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "UI/UX Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u00A0 Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, HomeComponent_ul_15_Template, 3, 1, "ul", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12)(17, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u00A0 Timesheet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, HomeComponent_div_21_Template, 3, 4, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 16)(23, "div", 17)(24, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Update Timesheet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 19)(27, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u00A0 Leave Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 21)(31, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Casual Leave");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "03");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 21)(36, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Sick Leave");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "03");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 21)(41, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Annual Leave");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 22)(46, "div", 23)(47, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Create Post");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "textarea");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "What's up, John?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 25)(53, "div", 25)(54, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "h4", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "image");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "h4", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "video");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Publish");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, HomeComponent_div_65_Template, 25, 3, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, HomeComponent_div_67_Template, 18, 3, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.projects);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getCurrentWeekDates());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.feeds);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.events);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
  styles: [".outer-div[_ngcontent-%COMP%] {\n  padding: 2%;\n  background-color: #E9E9E9;\n  height: auto;\n}\n\n.dp-background[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.dp[_ngcontent-%COMP%] {\n  position: relative;\n  top: -36px;\n  border-radius: 50%;\n  height: 65px;\n  width: 65px;\n}\n\n.profile[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  margin-right: 1%;\n  padding-left: 0px;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.profile-det[_ngcontent-%COMP%] {\n  border-bottom: 0.5px solid #c6c6c6;\n  width: 105%;\n  text-align: center;\n}\n\n.profile-name[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  color: #424242;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  color: #8d8d8d;\n}\n\n.project-detail[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-bottom: 0.5px solid #c6c6c6;\n  width: 105%;\n}\n\nli[_ngcontent-%COMP%] {\n  margin-left: 0px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  color: #262626;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  outline: none !important;\n  border: none;\n  background-color: #c2c2c2;\n  margin-top: 15px;\n  padding: 20px 10px 10px 60px;\n  overflow: hidden;\n  border-radius: 5px;\n  font-style: normal;\n  width: 100%;\n  resize: none;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #424242;\n  display: flex;\n  justify-content: space-between;\n}\n\n.timesheet[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  border-bottom: 0.5px solid #c6c6c6;\n}\n\n.outer-timesheet-div[_ngcontent-%COMP%] {\n  background: #D6D6D6;\n  padding: 10px 5px 10px 5px;\n  border: 1px solid #D6D6D6;\n  width: 100%;\n  border-radius: 10px;\n  margin-top: 24px;\n  margin-left: 1px;\n}\n\n.inner-timesheet-div[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  text-align: center;\n  width: 15px;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 10px 10px 10px 8px;\n  margin: 1%;\n  border-radius: 5px;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 14px;\n  color: #808080;\n}\n\n.leave-status[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-bottom: 0.5px solid #c6c6c6;\n}\n\n.leave-type[_ngcontent-%COMP%] {\n  background-color: #c2c2c2;\n  margin-top: 15px;\n  padding: 10px;\n  border-radius: 5px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #424242;\n  display: flex;\n  justify-content: space-between;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  padding-top: 15px;\n  color: #818181;\n}\n\n.time[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #818181;\n  margin-top: -9px !important;\n}\n\n.publish-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  width: 20px;\n  height: 20px;\n}\n\n.count[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  color: #424242;\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.event-title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 20px;\n  color: #333333;\n}\n\n.date[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n  color: #ffffff;\n}\n\n.day[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 12px;\n  text-align: center;\n  color: #ffffff;\n}\n\n.content[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  color: #282828;\n  padding-top: 35px;\n}\n\n.event-dates[_ngcontent-%COMP%] {\n  background-color: #eceef6;\n  margin: 15px;\n  padding: 10px;\n  border-radius: 5px;\n  width: 92%;\n  color: #424242;\n  text-align: center;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #444444;\n}\n\n.date-div[_ngcontent-%COMP%] {\n  background: linear-gradient(260.81deg, #3dbde8 12.58%, #307ff5 102.87%);\n  border-radius: 10px;\n  padding-top: 10px;\n  text-align: center;\n  height: auto;\n  max-height: 70px;\n}\n\n@media (max-width: 992px) {\n  .date-div[_ngcontent-%COMP%] {\n    margin-left: 15px;\n    margin-top: 5px;\n    max-height: 60px;\n  }\n  .day[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 15px;\n  }\n  .date[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 15px;\n  }\n  .outer-timesheet-div[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .inner-timesheet-div[_ngcontent-%COMP%] {\n    flex-basis: 20%;\n  }\n}\n@media (max-width: 576px) {\n  .dp-background[_ngcontent-%COMP%] {\n    background: linear-gradient(260.81deg, #3DBDE8 12.58%, #307FF5 102.87%);\n  }\n  .date-div[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n}\n@media (max-width: 830px) {\n  .btn[_ngcontent-%COMP%] {\n    font-size: 10px;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n  }\n  .publish-icon[_ngcontent-%COMP%] {\n    width: 13px;\n    height: 13px;\n  }\n}\n@media (max-width: 750px) {\n  .publish-icon[_ngcontent-%COMP%] {\n    margin-left: 4px !important;\n    display: none;\n  }\n  .btn[_ngcontent-%COMP%] {\n    font-size: 10px;\n    padding: 3px 1px 3px 1px;\n  }\n  .title[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\nli[_ngcontent-%COMP%] {\n  margin-left: -8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdC1tb2R1bGVzL3VzZXIvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi96b2Z0JTIwc29sdXRpb25zL0lOVEVaLUZFL3NyYy9hcHAvcHJvamVjdC1tb2R1bGVzL3VzZXIvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDQyxXQUFBO0FDQUQ7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7QUNBRjs7QURFQTtFQUNFLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNFRjs7QURBQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7QUNHRjs7QURBQTtFQUVFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNFRjs7QURBQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDR0Y7O0FEREE7RUFDRSxnQkFBQTtFQUNBLGtDQUFBO0FDSUY7O0FERkE7RUFDRSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDS0Y7O0FERkE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0MsV0FBQTtFQUNELHdCQUFBO0VBQUEsbUJBQUE7RUFDQSwyQkFBQTtFQUNDLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0gsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDS0E7O0FERkE7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7QUNLRjs7QURGQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0tGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0tGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQ0tGOztBREhBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ01GOztBREhBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNNRjs7QURIQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDTUY7O0FESkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FDTUY7O0FESkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDT0Y7O0FESkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDT0Y7O0FESkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNPRjs7QURMQTtFQUNFLHVFQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDUUY7O0FETEE7RUFDRTtJQUNJLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDUUo7RURORTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQ1FKO0VETkU7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUNRSjtFRE5FO0lBQ0UsYUFBQTtJQUNBLGVBQUE7RUNRSjtFRE5FO0lBQ0UsZUFBQTtFQ1FKO0FBQ0Y7QURLRTtFQUNBO0lBQ0UsdUVBQUE7RUNIRjtFREtBO0lBQ0UsVUFBQTtFQ0hGO0FBQ0Y7QURPQTtFQUNFO0lBQ0EsZUFBQTtJQUNBLHVCQUFBO0lBQUEsa0JBQUE7SUFDQSx3QkFBQTtJQUFBLG1CQUFBO0VDTEE7RURPRjtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDTEE7QUFDRjtBRFFBO0VBQ0E7SUFFRSwyQkFBQTtJQUNBLGFBQUE7RUNQQTtFRFdEO0lBQ0MsZUFBQTtJQUNBLHdCQUFBO0VDVEE7RURXRDtJQUNDLGVBQUE7RUNUQTtBQUNGO0FEYUE7RUFDRSxpQkFBQTtBQ1hGIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyLWRpdntcclxuICBcclxuICBwYWRkaW5nOiAyJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlFOUU5O1xyXG4gIGhlaWdodDogYXV0b1xyXG59XHJcblxyXG4uZHAtYmFja2dyb3VuZHtcclxuIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZHAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0zNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcbi5wcm9maWxlLWRldCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2M2YzZjNjtcclxuICB3aWR0aDogMTA1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9maWxlLW5hbWUge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogIzQyNDI0MjtcclxufVxyXG4uc3ViLXRpdGxlIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgY29sb3I6ICM4ZDhkOGQ7XHJcbn1cclxuLnByb2plY3QtZGV0YWlsIHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNjNmM2YzY7XHJcbiAgd2lkdGg6IDEwNSU7XHJcbn1cclxuXHJcbmxpIHtcclxuICAvLyBmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5JztcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTdweDtcclxuICBjb2xvcjogIzI2MjYyNjtcclxufVxyXG50ZXh0YXJlYSB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJjMmMyO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4IDEwcHggNjBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gIGNvbG9yOiAjNDI0MjQyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi50aW1lc2hlZXQge1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2M2YzZjNjtcclxufVxyXG4ub3V0ZXItdGltZXNoZWV0LWRpdntcclxuICBiYWNrZ3JvdW5kOiNENkQ2RDY7XHJcbiAgcGFkZGluZzogMTBweCA1cHggMTBweCA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q2RDZENjtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDFweDtcclxuICBcclxufVxyXG4uaW5uZXItdGltZXNoZWV0LWRpdntcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA4cHg7XHJcbiAgIG1hcmdpbjogMSU7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogNzAwO1xyXG5mb250LXNpemU6IDEycHg7XHJcbmxpbmUtaGVpZ2h0OiAxNHB4O1xyXG5jb2xvcjogIzgwODA4MDtcclxufVxyXG5cclxuLmxlYXZlLXN0YXR1cyB7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYzZjNmM2O1xyXG59XHJcblxyXG4ubGVhdmUtdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyYzJjMjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTdweDtcclxuICBjb2xvcjogIzQyNDI0MjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgY29sb3I6ICM4MTgxODE7XHJcbn1cclxuXHJcbi50aW1lIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgY29sb3I6ICM4MTgxODE7XHJcbiAgbWFyZ2luLXRvcDogLTlweCAhaW1wb3J0YW50O1xyXG59XHJcbi5wdWJsaXNoLWljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jb3VudCB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGNvbG9yOiAjNDI0MjQyO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZXZlbnQtdGl0bGUge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogIzMzMzMzMztcclxufVxyXG4uZGF0ZSB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmRheSB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICBjb2xvcjogIzI4MjgyODtcclxuICBwYWRkaW5nLXRvcDogMzVweDtcclxufVxyXG5cclxuLmV2ZW50LWRhdGVzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZWY2O1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogOTIlO1xyXG4gIGNvbG9yOiAjNDI0MjQyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgY29sb3I6ICM0NDQ0NDQ7XHJcbn1cclxuLmRhdGUtZGl2IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjYwLjgxZGVnLCAjM2RiZGU4IDEyLjU4JSwgIzMwN2ZmNSAxMDIuODclKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogNzBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmRhdGUtZGl2IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgbWF4LWhlaWdodDogNjBweDtcclxuICAgIH1cclxuICAgIC5kYXl7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuZGF0ZXtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIH1cclxuICAgIC5vdXRlci10aW1lc2hlZXQtZGl2e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbiAgICAuaW5uZXItdGltZXNoZWV0LWRpdntcclxuICAgICAgZmxleC1iYXNpczogMjAlOyBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC8vICAucmVzcG9uc2l2ZXtcclxuICAvLyAgIHBhZGRpbmctcmlnaHQ6IDAlICFpbXBvcnRhbnQ7XHJcbiAgLy8gIH1cclxuICAvLyAgLnB1Ymxpc2gtaWNvbntcclxuICAvLyAgIHdpZHRoOiAxM3B4O1xyXG4gIC8vICAgaGVpZ2h0OiAxM3B4O1xyXG4gIC8vICB9XHJcbiAgLy8gfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuZHAtYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNjAuODFkZWcsICMzREJERTggMTIuNTglLCAjMzA3RkY1IDEwMi44NyUpO1xyXG4gIH1cclxuICAuZGF0ZS1kaXZ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MzBweCkge1xyXG4gIC5idG57XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHdpZHRoOmZpdC1jb250ZW50O1xyXG4gIGhlaWdodDpmaXQtY29udGVudDtcclxufVxyXG4ucHVibGlzaC1pY29ue1xyXG4gIHdpZHRoOiAxM3B4O1xyXG4gIGhlaWdodDogMTNweDtcclxuXHJcbiB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbi5wdWJsaXNoLWljb257XHJcbiAgLy8gd2lkdGg6IDEzcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgLy8gaGVpZ2h0OiAxM3B4O1xyXG4gIC8vIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuIH1cclxuIC5idG57XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDNweCAxcHggM3B4IDFweDtcclxufVxyXG4gLnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuIH1cclxuXHJcbn1cclxuXHJcbmxpe1xyXG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG59XHJcblxyXG4gICIsIi5vdXRlci1kaXYge1xuICBwYWRkaW5nOiAyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RTlFOTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uZHAtYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZHAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA2NXB4O1xuICB3aWR0aDogNjVweDtcbn1cblxuLnByb2ZpbGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDElO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLnByb2ZpbGUtZGV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2M2YzZjNjtcbiAgd2lkdGg6IDEwNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtbmFtZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICM0MjQyNDI7XG59XG5cbi5zdWItdGl0bGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGNvbG9yOiAjOGQ4ZDhkO1xufVxuXG4ucHJvamVjdC1kZXRhaWwge1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYzZjNmM2O1xuICB3aWR0aDogMTA1JTtcbn1cblxubGkge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGNvbG9yOiAjMjYyNjI2O1xufVxuXG50ZXh0YXJlYSB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJjMmMyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nOiAyMHB4IDEwcHggMTBweCA2MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgd2lkdGg6IDEwMCU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgY29sb3I6ICM0MjQyNDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRpbWVzaGVldCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNjNmM2YzY7XG59XG5cbi5vdXRlci10aW1lc2hlZXQtZGl2IHtcbiAgYmFja2dyb3VuZDogI0Q2RDZENjtcbiAgcGFkZGluZzogMTBweCA1cHggMTBweCA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNENkQ2RDY7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMXB4O1xufVxuXG4uaW5uZXItdGltZXNoZWV0LWRpdiB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDhweDtcbiAgbWFyZ2luOiAxJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuXG4ubGVhdmUtc3RhdHVzIHtcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2M2YzZjNjtcbn1cblxuLmxlYXZlLXR5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJjMmMyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgY29sb3I6ICM0MjQyNDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgY29sb3I6ICM4MTgxODE7XG59XG5cbi50aW1lIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBjb2xvcjogIzgxODE4MTtcbiAgbWFyZ2luLXRvcDogLTlweCAhaW1wb3J0YW50O1xufVxuXG4ucHVibGlzaC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uY291bnQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjNDI0MjQyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ldmVudC10aXRsZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5kYXRlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZGF5IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY29udGVudCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgY29sb3I6ICMyODI4Mjg7XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xufVxuXG4uZXZlbnQtZGF0ZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZWY2O1xuICBtYXJnaW46IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDkyJTtcbiAgY29sb3I6ICM0MjQyNDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBjb2xvcjogIzQ0NDQ0NDtcbn1cblxuLmRhdGUtZGl2IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI2MC44MWRlZywgIzNkYmRlOCAxMi41OCUsICMzMDdmZjUgMTAyLjg3JSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogNzBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5kYXRlLWRpdiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1heC1oZWlnaHQ6IDYwcHg7XG4gIH1cbiAgLmRheSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB9XG4gIC5kYXRlIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIH1cbiAgLm91dGVyLXRpbWVzaGVldC1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5pbm5lci10aW1lc2hlZXQtZGl2IHtcbiAgICBmbGV4LWJhc2lzOiAyMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuZHAtYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI2MC44MWRlZywgIzNEQkRFOCAxMi41OCUsICMzMDdGRjUgMTAyLjg3JSk7XG4gIH1cbiAgLmRhdGUtZGl2IHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODMwcHgpIHtcbiAgLmJ0biB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB9XG4gIC5wdWJsaXNoLWljb24ge1xuICAgIHdpZHRoOiAxM3B4O1xuICAgIGhlaWdodDogMTNweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5wdWJsaXNoLWljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA0cHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5idG4ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nOiAzcHggMXB4IDNweCAxcHg7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cbmxpIHtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8073:
/*!******************************************************************************************************!*\
  !*** ./src/app/project-modules/user/components/timesheet-dashboard/timesheet-dashboard.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimesheetDashboardComponent": () => (/* binding */ TimesheetDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TimesheetDashboardComponent {
  constructor() {
    this.project = false;
    this.workTypes = false;
    this.module = false;
    this.projectListView = false;
    this.projects = ["INTEZ", "ZoftSite", "OneClick", "BassPhase"];
    this.modules = ["1", "2", "3", "4"];
    this.workType = ["1", "2", "3", "4"];
    this.addNewProject = false;
    this.timeSheet = [{
      projects: [],
      modules: [],
      workType: [],
      day: []
    }];
  }
  viewProjectList() {
    this.projectListView = !this.projectListView;
  }
  selectedPoject(val) {
    console.log("val", val);
    this.timeSheet.forEach(res => {
      console.log("res", res);
      //  res?.projects.push(val)
    });
  }

  addWorkType() {}
}
TimesheetDashboardComponent.ɵfac = function TimesheetDashboardComponent_Factory(t) {
  return new (t || TimesheetDashboardComponent)();
};
TimesheetDashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TimesheetDashboardComponent,
  selectors: [["app-timesheet-dashboard"]],
  decls: 0,
  vars: 0,
  template: function TimesheetDashboardComponent_Template(rf, ctx) {},
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2818:
/*!****************************************************************************************!*\
  !*** ./src/app/project-modules/user/components/user-profile/user-profile.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileComponent": () => (/* binding */ UserProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function UserProfileComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const skill_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r6);
  }
}
function UserProfileComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22)(3, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const member_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", member_r7 == null ? null : member_r7.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r7 == null ? null : member_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r7 == null ? null : member_r7.position, " ");
  }
}
function UserProfileComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22)(3, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const collegue_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", collegue_r8 == null ? null : collegue_r8.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](collegue_r8 == null ? null : collegue_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", collegue_r8 == null ? null : collegue_r8.position, " ");
  }
}
function UserProfileComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h3", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r9);
  }
}
function UserProfileComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h3", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r10);
  }
}
function UserProfileComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15)(1, "div", 27)(2, "div", 2)(3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 40)(6, "h4", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "John Alexander");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div")(13, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 45)(17, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "12");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "21");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const feed_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feed_r11 == null ? null : feed_r11.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feed_r11 == null ? null : feed_r11.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", feed_r11 == null ? null : feed_r11.attachment, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class UserProfileComponent {
  constructor() {
    this.skills = ["UX Design", "Product Design", "Figma", "UX Design", "Product Design", "Figma"];
    this.projects = ["ZoftSolutions Site", "GSM one Click", "INTEZ", "Bass Phase 2", "CCA", "SchoolWizard"];
    this.teamMembers = [{
      "name": "Kevin Alexander",
      "avatar": "../../../../../assets/icons/profileIMG.svg",
      "position": "UI/UX Designer"
    }, {
      "name": "Alex John",
      "avatar": "../../../../../assets/images/sample-profile-picture.png",
      "position": "Web Developer"
    }, {
      "name": "Edwin Alex",
      "avatar": "../../../../../assets/icons/profileIMG.svg",
      "position": "Web Developer"
    }, {
      "name": "Winson John",
      "avatar": "../../../../../assets/icons/pic.svg",
      "position": "Web Developer"
    }];
    this.collegues = [{
      "name": "Christopher Neil",
      "avatar": "../../../../../assets/images/sample-profile-picture.png",
      "position": "UI/UX Designer"
    }, {
      "name": "Agnus John",
      "avatar": "../../../../../assets/icons/collegpic.png",
      "position": "Web Developer"
    }, {
      "name": "Christo Alex",
      "avatar": "../../../../../assets/icons/profileIMG.svg",
      "position": "Web Developer"
    }, {
      "name": "Winson John",
      "avatar": "../../../../../assets/icons/pic.svg",
      "position": "Web Developer"
    }];
    this.feeds = [{
      "content": "Exciting Journey!Take a moment to watch the video, and let us know your thoughts and impressions in the comments below. We are excited to hear your feedback and share this remarkable accomplishment with all of you! ",
      "attachment": "../../../../../assets/images/eventImg.svg",
      "time": "10 min ago"
    }, {
      "content": " Take a moment to watch the video, and let us know your thoughts and impressions in the comments below. We are excited to hear your feedback and share this remarkable accomplishment with all of you! ",
      "attachment": "../../../../../assets/images/eventImg.svg",
      "time": "30 min ago"
    }];
  }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
  return new (t || UserProfileComponent)();
};
UserProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: UserProfileComponent,
  selectors: [["app-user-profile"]],
  decls: 82,
  vars: 6,
  consts: [[1, "outer-div"], [1, "user"], [1, "row"], [1, "col-6"], [1, "col", "img-div"], ["src", "../../../../../assets//images//sample-profile-picture.png", 1, "avatar"], [1, "name-div"], [1, "name"], [1, "sub-title"], [1, "col-lg-6", "col-md-12"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 2, "margin", "10px"], ["type", "button", 1, "btn", "btn-light", 2, "margin", "10px"], [1, "col-lg-6"], [1, "row", 2, "margin", "20px"], [1, "col-5"], [1, "about-div"], [1, "title"], [1, "content"], [2, "display", "flex", "flex-wrap", "wrap"], [4, "ngFor", "ngForOf"], [2, "display", "flex", "gap", "10px", "padding-top", "10px"], ["src", "../../../../../assets//images//sample-profile-picture.png", "width", "40", "height", "40", 2, "border-radius", "50%"], [2, "display", "grid", "gap", "0px"], [1, "position", 2, "margin-top", "-8px !important"], [1, "members-det"], [1, "about-div", "members"], [1, "col-12"], [2, "display", "flex", "justify-content", "space-between"], [1, "view-all"], ["style", "display: flex; gap: 10px; padding-top: 10px", 4, "ngFor", "ngForOf"], [1, "col-7"], [2, "display", "flex", "flex-wrap", "wrap", "border-bottom", "0.3px solid #b0b0b0"], [2, "display", "flex", "margin-top", "3%", "justify-content", "space-between"], ["class", "about-div", 4, "ngFor", "ngForOf"], [1, "skills"], ["width", "40", "height", "40", 2, "border-radius", "50%", 3, "src"], [1, "team-member"], [1, "projects-view"], [1, "col-3"], ["src", "../../../../../assets//images/sample-profile-picture.png", 2, "width", "43px", "height", "43px", "border-radius", "50%"], [1, "col-9"], [1, "team-member", 2, "color", "#424242"], [1, "position"], ["src", "../../../../../assets//icons//threedot.svg"], ["width", "100%", 3, "src"], [2, "padding", "15px 10px 10px 0px", "display", "flex", "gap", "20px"], [2, "display", "flex", "gap", "5px"], [1, "fa", "fa-heart", 2, "color", "#c53434", "font-size", "22px"], [1, "count"], ["src", "../../../../../assets//icons/comment.svg", 2, "margin-top", "-16px"]],
  template: function UserProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 2)(5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "John Doe");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "UI/UX Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3)(13, "div", 2)(14, "div", 9)(15, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Give Kudos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Johndoe@zoftsolutions.net ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12)(20, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Kudos received : 16 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " +91 9744 233 222 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13)(25, "div", 14)(26, "div", 15)(27, "h3", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "About me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Hey there! I'm John Doe, a passionate UI/UX designer. I love crafting beautiful and user-friendly designs that make people's lives easier. With my eye for aesthetics and understanding of user behavior, I create intuitive interfaces that leave a lasting impression. I stay up-to-date with design trends and enjoy collaborating with teams to deliver exceptional solutions. Let's work together to create something amazing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15)(32, "h3", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, UserProfileComponent_div_35_Template, 3, 1, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15)(37, "h3", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Reporting Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 22)(42, "h4", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "John Alexander");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Project Manager ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24)(47, "div", 25)(48, "div", 2)(49, "div", 26)(50, "div", 27)(51, "h3", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Team");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "View All");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, UserProfileComponent_div_55_Template, 7, 3, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25)(57, "div", 2)(58, "div", 26)(59, "div", 27)(60, "h3", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Collegues");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "View All");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, UserProfileComponent_div_64_Template, 7, 3, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30)(66, "div", 15)(67, "div", 27)(68, "h3", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Working Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "View All");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, UserProfileComponent_div_73_Template, 3, 1, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 32)(75, "h3", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Completed Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h3", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "View All");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, UserProfileComponent_div_80_Template, 3, 1, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, UserProfileComponent_div_81_Template, 25, 3, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teamMembers);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collegues);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.feeds);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: [".outer-div[_ngcontent-%COMP%] {\n  background-color: linear-gradient(180deg, #F4F5F9 0%, #F4F5F9 100%);\n  height: auto;\n}\n\n.user[_ngcontent-%COMP%] {\n  background: url('profileImagebackground.svg');\n  width: 100%;\n  height: 230px;\n}\n\n.img-div[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.name-div[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n\n@media (max-width: 650px) {\n  .img-div[_ngcontent-%COMP%] {\n    display: grid;\n  }\n  .name-div[_ngcontent-%COMP%] {\n    margin-left: 15%;\n    margin-top: -10%;\n  }\n}\n.avatar[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 60px;\n  width: 150px;\n  height: 150px;\n  border: 5px solid white;\n  border-radius: 50%;\n  margin-left: 8%;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 36px;\n  color: #424242;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #8C8C8C;\n}\n\n.btn-light[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 17px;\n  background-color: #F2F2F2;\n  color: #363535;\n}\n\n.btn-block[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 17px;\n  color: #ffffff;\n}\n\n.about-div[_ngcontent-%COMP%] {\n  display: grid;\n  margin-bottom: 20px;\n  background: #F4F5F9;\n  border-radius: 10px;\n  padding: 3%;\n  margin-top: 3%;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 19px;\n  color: #383838;\n}\n\n.content[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: #404040;\n}\n\n.position[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 12px;\n  color: #5F5F5F;\n}\n\n.team-member[_ngcontent-%COMP%] {\n  font-weight: 580;\n  font-size: 14px;\n  line-height: 19px;\n  color: #383838;\n}\n\n.view-all[_ngcontent-%COMP%] {\n  font-weight: 580;\n  font-size: 14px;\n  line-height: 17px;\n  text-align: right;\n  color: #1C569A;\n}\n\n.members[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.members-det[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\n@media (max-width: 950px) {\n  .members[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .members-det[_ngcontent-%COMP%] {\n    display: grid;\n    gap: 10px;\n  }\n}\n.skills[_ngcontent-%COMP%] {\n  font-weight: 550;\n  font-size: 14px;\n  line-height: 17px;\n  color: #1E62C8;\n  margin-right: 10px;\n  border: 1px solid #9e9e9e;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.projects-view[_ngcontent-%COMP%] {\n  font-weight: 450;\n  font-size: 14px;\n  line-height: 17px;\n  color: #FFFFFF;\n  margin-right: 10px;\n  background-color: #307FF5;\n  border: 1px solid #9e9e9e;\n  border-radius: 5px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdC1tb2R1bGVzL3VzZXIvY29tcG9uZW50cy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vem9mdCUyMHNvbHV0aW9ucy9JTlRFWi1GRS9zcmMvYXBwL3Byb2plY3QtbW9kdWxlcy91c2VyL2NvbXBvbmVudHMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1FQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREdBO0VBQ0UsNkNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBREdBO0VBQ0UsU0FBQTtBQ0FGOztBREdBO0VBQ0U7SUFDRSxhQUFBO0VDQUY7RURHQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUNERjtBQUNGO0FESUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNGRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSkY7O0FEUUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0xGOztBRFVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUEY7O0FEV0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNSRjs7QURXQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUkY7O0FEV0E7RUFDRSxVQUFBO0FDUkY7O0FEV0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQ1JGOztBRFdBO0VBQ0U7SUFDRSxXQUFBO0VDUkY7RURXQTtJQUNFLGFBQUE7SUFDQSxTQUFBO0VDVEY7QUFDRjtBRFlBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1ZGOztBRFlBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDVEYiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXItZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRjRGNUY5IDAlLCAjRjRGNUY5IDEwMCUpO1xyXG4gIGhlaWdodDogYXV0bztcclxuXHJcbn1cclxuXHJcbi51c2VyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL3Byb2ZpbGVJbWFnZWJhY2tncm91bmQuc3ZnKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIzMHB4O1xyXG59XHJcblxyXG4uaW1nLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm5hbWUtZGl2IHtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gIC5pbWctZGl2IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgfVxyXG5cclxuICAubmFtZS1kaXYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIG1hcmdpbi10b3A6IC0xMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiA2MHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogOCU7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgY29sb3I6ICM0MjQyNDI7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTdweDtcclxuICBjb2xvcjogIzhDOEM4QztcclxufVxyXG5cclxuLmJ0bi1saWdodCB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XHJcbiAgY29sb3I6ICMzNjM1MzU7XHJcblxyXG5cclxufVxyXG5cclxuLmJ0bi1ibG9jayB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uYWJvdXQtZGl2IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI0Y0RjVGOTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDMlO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICBjb2xvcjogIzM4MzgzODtcclxufVxyXG5cclxuXHJcbi5jb250ZW50IHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgY29sb3I6ICM0MDQwNDA7XHJcblxyXG5cclxufVxyXG5cclxuLnBvc2l0aW9uIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMTJweDtcclxuICBjb2xvcjogIzVGNUY1RjtcclxuXHJcbn1cclxuXHJcbi50ZWFtLW1lbWJlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDU4MDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgY29sb3I6ICMzODM4Mzg7XHJcbn1cclxuXHJcbi52aWV3LWFsbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDU4MDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6ICMxQzU2OUE7XHJcbn1cclxuXHJcbi5tZW1iZXJzIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ubWVtYmVycy1kZXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAubWVtYmVycyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tZW1iZXJzLWRldCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNraWxscyB7XHJcbiAgZm9udC13ZWlnaHQ6IDU1MDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgY29sb3I6ICMxRTYyQzg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ZTllOWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4ucHJvamVjdHMtdmlldyB7XHJcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDdGRjU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzllOWU5ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4vLyAgIC5wcm9maWxlIC51c2VyIC5hdmF0YXIge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgbGVmdDogMjBweDtcclxuLy8gICAgIHRvcDogLTg1cHg7XHJcbi8vICAgICB6LWluZGV4OiAyO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLnByb2ZpbGUgLnVzZXIgaDIge1xyXG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgICAgbWFyZ2luOiA0cHggMHB4IDBweCAxMzVweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLnByb2ZpbGUgLnVzZXIgLmFjdGlvbnMge1xyXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLnByb2ZpbGUgLnVzZXIgLmFjdGlvbnMgLmJ0biB7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbi8vICAgfVxyXG5cclxuLy8gICAucHJvZmlsZSAuaW5mbyB7XHJcbi8vICAgICBmbG9hdDogbGVmdDtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLmltZy1wcm9maWxle1xyXG4vLyAgICAgICBoZWlnaHQ6MTAwcHg7XHJcbi8vICAgICAgIHdpZHRoOjEwMHB4O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLmltZy1jb3ZlcntcclxuLy8gICAgICAgd2lkdGg6MTAwJTtcclxuLy8gICAgICAgaGVpZ2h0OjMwMHB4O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbi8vICAgICAuYnRuLXJlc3BvbnNpdmUge1xyXG4vLyAgICAgICBwYWRkaW5nOjJweCA0cHg7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTo4MCU7XHJcbi8vICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4vLyAgICAgICBib3JkZXItcmFkaXVzOjNweDtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcblxyXG4vLyAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbi8vICAgICAuYnRuLXJlc3BvbnNpdmUge1xyXG4vLyAgICAgICBwYWRkaW5nOjRweCA5cHg7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTo5MCU7XHJcbi8vICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbi8vICAgICB9XHJcbi8vICAgfSIsIi5vdXRlci1kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRjRGNUY5IDAlLCAjRjRGNUY5IDEwMCUpO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi51c2VyIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9wcm9maWxlSW1hZ2ViYWNrZ3JvdW5kLnN2Zyk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIzMHB4O1xufVxuXG4uaW1nLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5uYW1lLWRpdiB7XG4gIGdhcDogMTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIC5pbWctZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICB9XG4gIC5uYW1lLWRpdiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgICBtYXJnaW4tdG9wOiAtMTAlO1xuICB9XG59XG4uYXZhdGFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDYwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDglO1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgY29sb3I6ICM0MjQyNDI7XG59XG5cbi5zdWItdGl0bGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGNvbG9yOiAjOEM4QzhDO1xufVxuXG4uYnRuLWxpZ2h0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICBjb2xvcjogIzM2MzUzNTtcbn1cblxuLmJ0bi1ibG9jayB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5hYm91dC1kaXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjRjRGNUY5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAzJTtcbiAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgY29sb3I6ICMzODM4Mzg7XG59XG5cbi5jb250ZW50IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzQwNDA0MDtcbn1cblxuLnBvc2l0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgY29sb3I6ICM1RjVGNUY7XG59XG5cbi50ZWFtLW1lbWJlciB7XG4gIGZvbnQtd2VpZ2h0OiA1ODA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiAjMzgzODM4O1xufVxuXG4udmlldy1hbGwge1xuICBmb250LXdlaWdodDogNTgwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICMxQzU2OUE7XG59XG5cbi5tZW1iZXJzIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLm1lbWJlcnMtZGV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgLm1lbWJlcnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5tZW1iZXJzLWRldCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDEwcHg7XG4gIH1cbn1cbi5za2lsbHMge1xuICBmb250LXdlaWdodDogNTUwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBjb2xvcjogIzFFNjJDODtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ZTllO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnByb2plY3RzLXZpZXcge1xuICBmb250LXdlaWdodDogNDUwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA3RkY1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ZTllO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8247:
/*!*************************************************************!*\
  !*** ./src/app/project-modules/user/user-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRoutingModule": () => (/* binding */ UserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.component */ 6351);
/* harmony import */ var _user_components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/components/home/home.component */ 3461);
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ 2818);
/* harmony import */ var _components_timesheet_dashboard_timesheet_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/timesheet-dashboard/timesheet-dashboard.component */ 8073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [{
  path: '',
  component: _user_component__WEBPACK_IMPORTED_MODULE_0__.UserComponent,
  children: [{
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }, {
    path: "home",
    component: _user_components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
  }, {
    path: "user-profile",
    component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__.UserProfileComponent
  }, {
    path: "timesheet-dashboard",
    component: _components_timesheet_dashboard_timesheet_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.TimesheetDashboardComponent
  }]
}];
class UserRoutingModule {}
UserRoutingModule.ɵfac = function UserRoutingModule_Factory(t) {
  return new (t || UserRoutingModule)();
};
UserRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: UserRoutingModule
});
UserRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 1678:
/*!*****************************************************!*\
  !*** ./src/app/project-modules/user/user.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-routing.module */ 8247);
/* harmony import */ var _user_components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/components/user-profile/user-profile.component */ 2818);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ 3461);
/* harmony import */ var _components_timesheet_dashboard_timesheet_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/timesheet-dashboard/timesheet-dashboard.component */ 8073);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);



// import { HeaderComponent } from './components/header/header.component';


// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { UserComponent } from './user.component';


class UserModule {}
UserModule.ɵfac = function UserModule_Factory(t) {
  return new (t || UserModule)();
};
UserModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: UserModule
});
UserModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UserModule, {
    declarations: [_user_components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__.UserProfileComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _components_timesheet_dashboard_timesheet_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.TimesheetDashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_project-modules_user_user_module_ts.js.map
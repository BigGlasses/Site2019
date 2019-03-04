(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".landing-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .is-mobile .mat-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  \r\n  .mat-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    flex: 1;\r\n  }\r\n  \r\n  .mat-sidenav-content{\r\n  }\r\n  \r\n  .is-mobile .mat-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    flex: 1 0 auto;\r\n  }\r\n  \r\n  .mat-sidenav{\r\n    padding: 10px;\r\n}\r\n  \r\n  .project-image{\r\n    max-height: 500px;\r\n    padding: 5px;\r\n    border: 1px gray solid;\r\n    border-radius: 5px;\r\n    box-shadow: 5px black;\r\n    margin : auto;\r\n    width: 100%\r\n}\r\n  \r\n  .project-image-gallery {\r\n    width: 100%;\r\n    display: inline-block;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n  \r\n  .mat-card-actions a {\r\n    margin-right: 8px;\r\n    color: white;\r\n    font-size: 24px;\r\n}\r\n  \r\n  .mat-card{\r\n    padding: 2em;\r\n}\r\n  \r\n  .empty-space{\r\n    flex: 1 1 auto;\r\n}\r\n  \r\n  .projectYearDiv{\r\n    margin-bottom: 5cm;\r\n    padding: 10px;\r\n    background: #222222;\r\n}\r\n  \r\n  .projectYearDiv h1{\r\n    font-size: 64px;\r\n    text-align: center;\r\n}\r\n  \r\n  .mat-sidenav-container {\r\n    background-image: url(\"/assets/bg/bg.png\");\r\n}\r\n  \r\n  .project {\r\n    padding-bottom: 1cm;\r\n    padding-top: 1cm;\r\n}\r\n  \r\n  .pcproject {  \r\n    padding-bottom: 1cm;\r\n    padding-top: 1cm;\r\n    padding-left: 20%;\r\n    padding-right: 20%;\r\n}\r\n  \r\n  .whoami{\r\n    font-size: 64px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0dBQ1Y7O0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsK0VBQStFO0lBQy9FLFdBQVc7R0FDWjs7RUFFRDtJQUNFOzZGQUN5RjtJQUN6RixRQUFRO0dBQ1Q7O0VBQ0Q7R0FDQzs7RUFFRDtJQUNFO2tFQUM4RDtJQUM5RCxlQUFlO0dBQ2hCOztFQUVIO0lBQ0ksY0FBYztDQUNqQjs7RUFFRDtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFdBQVc7Q0FDZDs7RUFFRDtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2Qjs7RUFDRDtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0NBQ25COztFQUVEO0lBQ0ksYUFBYTtDQUNoQjs7RUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0VBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG9CQUFvQjtDQUN2Qjs7RUFDRDtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEI7O0VBRUQ7SUFDSSwyQ0FBMkM7Q0FDOUM7O0VBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0NBQ3BCOztFQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCOztFQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZGluZy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5pcy1tb2JpbGUgLm1hdC10b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5cclxuICAubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICAubWF0LXNpZGVuYXYtY29udGVudHtcclxuICB9XHJcbiAgXHJcbiAgLmlzLW1vYmlsZSAubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4ubWF0LXNpZGVuYXZ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59ICAgXHJcblxyXG4ucHJvamVjdC1pbWFnZXtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggZ3JheSBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCBibGFjaztcclxuICAgIG1hcmdpbiA6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG4ucHJvamVjdC1pbWFnZS1nYWxsZXJ5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLm1hdC1jYXJkLWFjdGlvbnMgYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLm1hdC1jYXJke1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG59XHJcblxyXG4uZW1wdHktc3BhY2V7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLnByb2plY3RZZWFyRGl2e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNWNtO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyMjIyMjI7XHJcbn1cclxuLnByb2plY3RZZWFyRGl2IGgxe1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYmcvYmcucG5nXCIpO1xyXG59XHJcblxyXG4ucHJvamVjdCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWNtO1xyXG4gICAgcGFkZGluZy10b3A6IDFjbTtcclxufVxyXG5cclxuLnBjcHJvamVjdCB7ICBcclxuICAgIHBhZGRpbmctYm90dG9tOiAxY207XHJcbiAgICBwYWRkaW5nLXRvcDogMWNtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbi53aG9hbWl7XHJcbiAgICBmb250LXNpemU6IDY0cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n<div class=\"landing-container\" [class.is-mobile]=\"mobileQuery.matches\">\n    <mat-toolbar color=\"primary\" class=\"example-toolbar\">\n        <span>\n            <button mat-icon-button (click)=\"snav.toggle()\">\n                <mat-icon>menu</mat-icon>\n            </button>\n        </span>\n        <span class=\"empty-space\">\n            <h1 style=\"text-align: center\"> Brandon Roberts </h1>\n        </span>\n        <span>\n            <a style=\"text-align: right\" mat-button href=\"assets/Brandon Roberts Resume.pdf\"> Resume </a>\n        </span>\n    </mat-toolbar>\n\n    <mat-sidenav-container [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n\n        <mat-sidenav #snav class=\"leftCol\" [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\"\n            fixedTopGap=\"56\">\n            <h2>Projects</h2>\n            <mat-list *ngFor=\"let projectYear of projectsByYear\">\n                {{projectYear.year}}\n                <mat-list-item *ngFor=\"let project of projectYear.projects\">\n                    <!-- <a [href]=\"'#'+project.projectCodeName\"> -->\n\n                    <button mat-button (click)=\"goTo(project.projectCodeName)\">{{project.projectName}}</button>\n                </mat-list-item>\n            </mat-list>\n        </mat-sidenav>\n        <mat-sidenav-content>\n            <ng-container *ngFor=\"let projectYear of projectsByYear\">\n                <div class=\"projectYearDiv\">\n                    <mat-divider></mat-divider>\n                    <h1 class=\"projectyear\"> {{projectYear.year}} Projects </h1>\n                    <ng-container *ngFor=\"let project of projectYear.projects\">\n                        <div class=\"project\" [class]=\"mobileQuery.matches ? 'project' : 'pcproject'\"  [id]=\"project.projectCodeName\">\n                            <mat-card-header>\n                                <h2>{{project.projectName}}</h2>\n                                <p style=\"color: grey\">{{project.projectFlavour + \" \" + project.startYear + \" - \" + project.endYear}}</p>\n                            </mat-card-header>\n                            <mat-chip-list style=\"text-align: center;\">\n                                <mat-chip *ngFor=\"let item of project.stack\">{{item}}</mat-chip>\n                            </mat-chip-list>\n                            <div class=\"project-image-gallery\">\n                                <mdb-carousel class=\"carousel slide\" [interval]=\"'0'\" [animation]=\"'slide'\">\n                                    <ng-container>\n                                        <mdb-carousel-item *ngFor=\"let imgSrc of project.imageSources\">\n                                            <div class=\"view w-100\">\n                                                <img class=\"d-block project-image align-center\" [src]=\"imgSrc\" alt=\"First slide\">\n                                                <div class=\"mask rgba-black-light waves-light\" mdbWavesEffect></div>\n                                            </div>\n                                        </mdb-carousel-item>\n                                    </ng-container>\n                                </mdb-carousel>\n\n                            </div>\n                            <mat-card-content>\n                                <p>\n                                    {{project.description}}\n                                </p>\n                            </mat-card-content>\n                            <mat-card-actions>\n                                <a *ngIf=\"project.repoLink\" mat-button color=\"primary\" [href]=\"project.repoLink\" target=\"_blank\">\n                                    <mat-icon fontSet=\"fab\" fontIcon=\"fa-github\"></mat-icon>\n                                </a>\n                                <a *ngIf=\"project.websiteLink\" mat-button color=\"primary\" [href]=\"project.websiteLink\" target=\"_blank\"> WEB </a>\n                                <a *ngIf=\"project.infoLink\" mat-button color=\"primary\" [href]=\"project.infoLink\" target=\"_blank\">\n                                    <mat-icon fontSet=\"fa\" fontIcon=\"fa-info\"></mat-icon>\n                                </a>\n                            </mat-card-actions>\n\n                        </div>\n                        <mat-divider></mat-divider>\n                    </ng-container>\n                </div>\n            </ng-container>\n        </mat-sidenav-content>\n    </mat-sidenav-container>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _landing_access_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing/access.service */ "./src/app/landing/access.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(access, changeDetectorRef, media) {
        var _this = this;
        this.access = access;
        this.title = 'Site2019';
        access.getData(function (value) {
            var projects = [];
            var prepare = {};
            for (var index = 0; index < value.length; index++) {
                var project = value[index];
                project.imageSources = [];
                for (var j = 1; j < project.imageCount + 1; j++) {
                    project.imageSources.push("assets/projectimages/" + project.projectCodeName + "/screen" + j + ".png");
                }
                if (prepare[project.startYear]) {
                    prepare[project.startYear].push(project);
                }
                else {
                    prepare[project.startYear] = [project];
                }
            }
            for (var key in prepare) {
                projects.push({
                    year: key,
                    projects: prepare[key]
                });
            }
            projects = projects.sort(function (a, b) { return Number(b.year) - Number(a.year); });
            _this.projectsByYear = projects;
        });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AppComponent.prototype.goTo = function (element) {
        document.getElementById(element).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_landing_access_service__WEBPACK_IMPORTED_MODULE_1__["AccessService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["MDBBootstrapModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["WavesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/landing/access.service.ts":
/*!*******************************************!*\
  !*** ./src/app/landing/access.service.ts ***!
  \*******************************************/
/*! exports provided: AccessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessService", function() { return AccessService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AccessService = /** @class */ (function () {
    function AccessService(http) {
        this.http = http;
    }
    AccessService.prototype.getData = function (next, error) {
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        var url = "assets/data/projects.json";
        this.http.get(url, options).subscribe(next, error);
    };
    AccessService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AccessService);
    return AccessService;
}());

// const projects = ['current', 'accelskies', 'magichotel', 'overlord', 'rainbow', 'vanquest', 'lolcompare', 'samepage', 'comds', "c4m", "vanwyn"];
// const projectNames = ['Untitled Game', 'Accel Skies', 'Magic Hotel', 'Overlord (Nickname)', 'Rainbow Race', 'Vanquest', 'LoL Compare Stats', 'SamePage', 'ComDS Website', "CarFindingMachine", "VanWyn Website"];
// const projectNums = [ 10 ,9, 8, 7, 6,0, 1, 2, 3, 4, 5];
// const projectImages = [12, 11, 8, 11, 10, 9, 3, 4, 4, 3, 2];
// const projectDescriptions = ["", "", "", "", "", "", "", "", "", ""];
// // Current
// projectDescriptions[0] = "An extension of my Overlord game, with much of the code rewritten for optimization, and support for Python 3. This one features my own art, gameplay updates and a visual novel system for delivering story. It is still in development, and was originally set for release summer 2017. It was scrapped, but I liked the characters and decided to use them for a future project. Implemented UDP sockets to allow multiplayer. Created using Python and OpenGL.";
// // Accel Skies
// projectDescriptions[1] = "Another Disgaea themed game. You have to survive in a map with random objectives, and are given random items to help you complete the objectives. ";
// projectDescriptions[1] += "Created for the 2015 EPIC Game Challenge of McMaster University, it came out very well. I am proud of the game's efficient use of polymorphism. ";
// projectDescriptions[1] += "Different characters play very differently, and even enemies are very varied in attack patterns. ";
// projectDescriptions[1] += "The item and achievement system is inspired by the systems in another game, Risk of Rain. ";
// projectDescriptions[1] += "Players will unlock items by completing performance bases achievements. ";
// projectDescriptions[1] += "The items themselves can wildly alter playstyles, adding flavour to the gameplay. ";
// // Magic Hotel
// projectDescriptions[2] = "";
// projectDescriptions[2] += "A game I made to experiment with polymorphism. It is inspired by pokemon, so you basically battle monsters while managing a hotel. ";
// projectDescriptions[2] += "There are a variety of battle moves, abilities and mechanics that make battles challenging. ";
// projectDescriptions[2] += "I am not happy with the graphics, but I am happy with the stack system that controls the flow of battle. ";
// projectDescriptions[2] += "This one is unfinished because it was purely experimentation with classes, to the point where many sprites were taken from another one of my unfinished games. ";
// // Overlord
// projectDescriptions[3] = "A Disgaea themed board game. Win through friendship-breaking combat. This game was created because I liked a steam game (100% Orange Juice), but it was limited to 4 players. I ended up making a very similar game capable of many more concurrent players to play with friends. This was fun to make, as the mechanics are light-hearted. It runs very well, has AI, and a variety of new/altered mechanics compared to Orange Juice.";
// // Rainbow
// projectDescriptions[4] = "An MLP themed racing game I made in Grade 11 for a graded game contest. I am pretty proud of how this one turned out because it was the first program I ever made. The code is a nightmare, of course; at the time I had no idea what a class was, so there is a ton of repitition and clutter.";
// // VanQuest
// projectDescriptions[5] = "A game made in a very short time span. It's inspired by Super Amazing Wagon Adventure, and was created to play at school in the computer lab before the christmas break. The objective is to make a delivery, but the world wants to get rid of you and your friends. The multiplayer is very smooth, but tweaks to the script must be made with large volumes of players(>4). The graphics are basic. It was fun to use my imagination to cheaply represent enemies.";
// //lol compare
// projectDescriptions[6] = "A simple application that makes API calls based on inputed usernames. It draws stats from the server, and ranks players against each other. Makes API calls for game information using Java. Created using Android Studio.";
// //samepage
// projectDescriptions[7] = "Solo project created for a client. Educational application that asked users questions. Stored user information into a mySQL database using API endpoints.Android/iOS application created using Ionic, HTML, Javascript and XML.Back-end created using web2py, mySQL and Python.";
// //comds
// projectDescriptions[8] = "Worked in a team of 5 to design and develop a website for community members to plan events. Implemented website using bootstrap and ReactJS. Made responsive web pages, with support for mobile devices. Created API endpoints using Springboot, neo4j databases and Java.";
// //car for me
// projectDescriptions[9] = "Designed and developed a website for car buyers to find affordable cars. Created API endpoints using Springboot. Implemented website using Bootstrap 4 and jQuery. Uses a dataset of over 60k cars, and quickly finds the best cars for the user. Works on mobile devices. https://carfinding.azurewebsites.net/";
// //vanwyn
// projectDescriptions[10] = "Designed and developed a website for as a consultant for a startup company in Hamilton. Implemented googlemaps-js for a map simulation and java spring server backend for complex math calculations. Also implemented a login and administration system with java spring and mySQL database to allow client to protect certain content/pages.";


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\brand\Desktop\SiteTest\New folder\Site2019\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
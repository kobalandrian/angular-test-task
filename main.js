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

module.exports = "body {\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    transition: 2s all ease-in-out;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.nav {\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    background: rgba(153, 153, 153, 0.692);\r\n    position: fixed;\r\n    color: white;\r\n    z-index: 13;\r\n}\r\n\r\n.nav-flex-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.nav-item {\r\n    margin: 0 4px;\r\n    padding: 8px 4px;\r\n    display: inline;\r\n    font-size: 18px;\r\n    font-family: \"Roboto Condensed\", sans-serif;\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\n.left {\r\n    width: 25%;\r\n    text-align: left;\r\n    float: left;\r\n    line-height: 1.25;\r\n}\r\n\r\n.nav-item-title-left {\r\n    margin: 0;\r\n    padding: 0 6px;\r\n    font-size: 36px;\r\n    display: inline;\r\n    float: left;\r\n}\r\n\r\n.nav-img1 {\r\n    padding: 2px 4px 0 4px;\r\n    height: 20px;\r\n}\r\n\r\n.center {\r\n    margin: 0 auto;\r\n    padding: 10px 16px;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 28px;\r\n    text-align: center;\r\n    font-family: \"Monoton\", cursive;\r\n    color: rgb(255, 255, 255);\r\n    word-spacing: 0.175em;\r\n}\r\n\r\n.center a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n.right {\r\n    width: 30%;\r\n    text-align: right;\r\n    float: right;\r\n    line-height: 1.4;\r\n}\r\n\r\n.nav-item-title-right {\r\n    margin: 0;\r\n    padding: 0px 6px;\r\n    font-size: 36px;\r\n    display: inline;\r\n    float: right;\r\n}\r\n\r\n.topnav {\r\n    overflow: hidden;\r\n    z-index: 13;\r\n}\r\n\r\n.topnav a {\r\n    float: left;\r\n    display: block;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 8px 12px;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n}\r\n\r\n.topnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n}\r\n\r\n.topnav .icon {\r\n    display: none;\r\n}\r\n\r\n.nav>.topnav>.step1,\r\n.nav>.topnav>.step2 {\r\n    display: none;\r\n}\r\n\r\n.basic-container {\r\n    margin: 0;\r\n    padding: 30;\r\n}\r\n\r\n.version-info {\r\n    font-size: 8pt;\r\n    float: left;\r\n}\r\n\r\n@media screen and (max-width: 1050px) {}\r\n\r\n@media screen and (max-width: 850px) {\r\n    .left {\r\n        width: 20%;\r\n    }\r\n    .right {\r\n        width: 25%;\r\n    }\r\n    .nav-item {\r\n        font-size: 14px;\r\n    }\r\n    .nav-item-title-left,\r\n    .nav-item-title-right {\r\n        font-size: 24px;\r\n    }\r\n    .center {\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    .center {\r\n        margin: 0;\r\n        padding: 10px 16px;\r\n        text-align: left;\r\n        font-size: 18px;\r\n    }\r\n    .left,\r\n    .right,\r\n    .topnav a {\r\n        display: none;\r\n    }\r\n    .topnav a.icon {\r\n        margin: 0;\r\n        padding: 12px 12px;\r\n        float: right;\r\n        display: block;\r\n        z-index: 13;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    .topnav.responsive {\r\n        position: relative;\r\n    }\r\n    .topnav.responsive .icon {\r\n        position: absolute;\r\n        right: 0;\r\n        top: 0;\r\n    }\r\n    .topnav.responsive a {\r\n        float: none;\r\n        display: block;\r\n        text-align: left;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtDQUNmOztBQUVEO0lBQ0ksY0FBYztJQUNkLCtCQUErQjtDQUNsQzs7QUFFRDtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtJQUMxQixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDs7SUFFSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksVUFBVTtJQUNWLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGVBQWU7SUFDZixZQUFZO0NBQ2Y7O0FBRUQsd0NBQXdDOztBQUV4QztJQUNJO1FBQ0ksV0FBVztLQUNkO0lBQ0Q7UUFDSSxXQUFXO0tBQ2Q7SUFDRDtRQUNJLGdCQUFnQjtLQUNuQjtJQUNEOztRQUVJLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0NBQ0o7O0FBRUQ7SUFDSTtRQUNJLFVBQVU7UUFDVixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtLQUNuQjtJQUNEOzs7UUFHSSxjQUFjO0tBQ2pCO0lBQ0Q7UUFDSSxVQUFVO1FBQ1YsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixlQUFlO1FBQ2YsWUFBWTtLQUNmO0NBQ0o7O0FBRUQ7SUFDSTtRQUNJLG1CQUFtQjtLQUN0QjtJQUNEO1FBQ0ksbUJBQW1CO1FBQ25CLFNBQVM7UUFDVCxPQUFPO0tBQ1Y7SUFDRDtRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2YsaUJBQWlCO0tBQ3BCO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogMnMgYWxsIGVhc2UtaW4tb3V0O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4ubmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTUzLCAxNTMsIDE1MywgMC42OTIpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTM7XHJcbn1cclxuXHJcbi5uYXYtZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggNHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLmxlZnQge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG59XHJcblxyXG4ubmF2LWl0ZW0tdGl0bGUtbGVmdCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ubmF2LWltZzEge1xyXG4gICAgcGFkZGluZzogMnB4IDRweCAwIDRweDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJNb25vdG9uXCIsIGN1cnNpdmU7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgd29yZC1zcGFjaW5nOiAwLjE3NWVtO1xyXG59XHJcblxyXG4uY2VudGVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxufVxyXG5cclxuLm5hdi1pdGVtLXRpdGxlLXJpZ2h0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDBweCA2cHg7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi50b3BuYXYge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDEzO1xyXG59XHJcblxyXG4udG9wbmF2IGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi50b3BuYXYgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udG9wbmF2IC5pY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXY+LnRvcG5hdj4uc3RlcDEsXHJcbi5uYXY+LnRvcG5hdj4uc3RlcDIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJhc2ljLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAzMDtcclxufVxyXG5cclxuLnZlcnNpb24taW5mbyB7XHJcbiAgICBmb250LXNpemU6IDhwdDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHt9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgLmxlZnQge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICB9XHJcbiAgICAucmlnaHQge1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbiAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5uYXYtaXRlbS10aXRsZS1sZWZ0LFxyXG4gICAgLm5hdi1pdGVtLXRpdGxlLXJpZ2h0IHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgICAuY2VudGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY2VudGVyIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLmxlZnQsXHJcbiAgICAucmlnaHQsXHJcbiAgICAudG9wbmF2IGEge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAudG9wbmF2IGEuaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMTJweDtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgei1pbmRleDogMTM7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAudG9wbmF2LnJlc3BvbnNpdmUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC50b3BuYXYucmVzcG9uc2l2ZSAuaWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgIH1cclxuICAgIC50b3BuYXYucmVzcG9uc2l2ZSBhIHtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav nav-flex-container\">\n    <div class=\"nav-item left \">\n        <div class=\"nav-item-title-left\">1</div>\n        Spot Remaining <br/> in <img class=\"nav-img1\" src=\"./assets/img/flagIsrael.svg\" /> ISREAL\n    </div>\n    <div class=\"nav-item center\"><a href=\"#\"> dubai lifestyle app </a></div>\n    <div class=\"nav-item right\">\n        <div class=\"nav-item-title-right\">{{countDown | async | formatTime}}</div>\n        Time Remaining <br /> OFFER EXPIRES\n    </div>\n    <app-menu></app-menu>\n    <!--\n        <div class=\"topnav\" id=\"myTopnav\">\n        <button class=\"icon\" mat-button [matMenuTriggerFor]=\"menu\"><i class=\"fa fa-bars\"></i></button>\n        <mat-menu #menu=\"matMenu\">\n            <a class=\"step2 mat-menu-item\" routerLink=\"\">Step 1</a>\n            <a class=\"step1 mat-menu-item\" routerLink=\"/step2\">Step 2</a>            \n              <button mat-menu-item>Item 1</button>\n            <button mat-menu-item>Item 2</button> \n        </mat-menu>       \n        <a href=\"javascript:void(0);\" class=\"icon\" (click)=\"showMenu()\">\n            <i class=\"fa fa-bars\"></i>\n        </a>        \n    </div>\n-->\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, FormatTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatTimePipe", function() { return FormatTimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.counter = 900;
        this.tick = 1000;
        /*
        showMenu(): void {
          let x = document.getElementById("myTopnav");
          if (x.className === "topnav") {
            x.className += " responsive";
          } else {
            x.className = "topnav";
          }
        }
        */
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, this.tick).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(this.counter), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return --_this.counter; }));
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

var FormatTimePipe = /** @class */ (function () {
    function FormatTimePipe() {
    }
    FormatTimePipe.prototype.transform = function (value) {
        var minutes = Math.floor(value / 60);
        return ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
    };
    FormatTimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'formatTime' })
    ], FormatTimePipe);
    return FormatTimePipe;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _step1_step1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./step1/step1.component */ "./src/app/step1/step1.component.ts");
/* harmony import */ var _step2_step2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./step2/step2.component */ "./src/app/step2/step2.component.ts");
/* harmony import */ var _s1_header_s1_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./s1-header/s1-header.component */ "./src/app/s1-header/s1-header.component.ts");
/* harmony import */ var _s1_section1_s1_section1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./s1-section1/s1-section1.component */ "./src/app/s1-section1/s1-section1.component.ts");
/* harmony import */ var _s1_section2_s1_section2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./s1-section2/s1-section2.component */ "./src/app/s1-section2/s1-section2.component.ts");
/* harmony import */ var _s1_footer_s1_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./s1-footer/s1-footer.component */ "./src/app/s1-footer/s1-footer.component.ts");
/* harmony import */ var _s2_header_s2_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./s2-header/s2-header.component */ "./src/app/s2-header/s2-header.component.ts");
/* harmony import */ var _s2_section1_s2_section1_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./s2-section1/s2-section1.component */ "./src/app/s2-section1/s2-section1.component.ts");
/* harmony import */ var _s2_footer_s2_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./s2-footer/s2-footer.component */ "./src/app/s2-footer/s2-footer.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");




// materials


// pipe

















var appRoutes = [
    { path: '', component: _step2_step2_component__WEBPACK_IMPORTED_MODULE_11__["Step2Component"] },
    { path: 'step2', component: _step1_step1_component__WEBPACK_IMPORTED_MODULE_10__["Step1Component"] },
    { path: 'item/:id', component: _s2_header_s2_header_component__WEBPACK_IMPORTED_MODULE_16__["S2HeaderComponent"] },
    { path: 'item/:id', component: _s2_footer_s2_footer_component__WEBPACK_IMPORTED_MODULE_18__["S2FooterComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_6__["FormatTimePipe"],
                _step1_step1_component__WEBPACK_IMPORTED_MODULE_10__["Step1Component"],
                _step2_step2_component__WEBPACK_IMPORTED_MODULE_11__["Step2Component"],
                _s1_header_s1_header_component__WEBPACK_IMPORTED_MODULE_12__["S1HeaderComponent"],
                _s1_section1_s1_section1_component__WEBPACK_IMPORTED_MODULE_13__["S1Section1Component"],
                _s1_section2_s1_section2_component__WEBPACK_IMPORTED_MODULE_14__["S1Section2Component"],
                _s1_footer_s1_footer_component__WEBPACK_IMPORTED_MODULE_15__["S1FooterComponent"],
                _s2_header_s2_header_component__WEBPACK_IMPORTED_MODULE_16__["S2HeaderComponent"],
                _s2_section1_s2_section1_component__WEBPACK_IMPORTED_MODULE_17__["S2Section1Component"],
                _s2_footer_s2_footer_component__WEBPACK_IMPORTED_MODULE_18__["S2FooterComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_19__["MenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_20__["DemoMaterialModule"]
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"], useValue: '/' },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comments.ts":
/*!*****************************!*\
  !*** ./src/app/comments.ts ***!
  \*****************************/
/*! exports provided: Comment, COMMENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENTS", function() { return COMMENTS; });
var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());

var COMMENTS = [
    { status: 'Verify Member', autor: 'Jon Snow', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' },
    { status: 'Verify Member', autor: 'Jon Snow', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { status: 'Verify Member', autor: 'Jon Snow', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { status: 'Verify Member', autor: 'Jon Snow', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { status: 'Verify Member', autor: 'Jon Snow', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { status: 'Verify Member', autor: 'Jon Snow', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { status: 'Verify Member', autor: 'Jon Snow', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { status: 'Verify Member', autor: 'Jon Snow', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { status: 'Verify Member', autor: 'Jon Snow', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { status: 'Verify Member', autor: 'Jon Snow', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
];


/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: none;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    .example-container {\r\n        display: block;\r\n    }\r\n    .ico-btn {\r\n        margin: 0;\r\n        padding: 16px;\r\n        border: none;\r\n        font-size: 16px;\r\n    }\r\n    .sidenav-container {\r\n        width: 100%;\r\n        margin: 0;\r\n        padding: 0;\r\n        background: rgba(153, 153, 153, 0.692);\r\n        left: -680%;\r\n        overflow: hidden;\r\n    }\r\n    mat-sidenav {\r\n        margin: 0;\r\n        padding: 0;\r\n        background: buttonface;\r\n        width: 90%;\r\n        height: 120px;\r\n        z-index: 33;\r\n        overflow: hidden;\r\n    }\r\n    .list-menu {\r\n        margin: 0;\r\n        padding: 8px 0;\r\n        top: 0;\r\n        left: 0;\r\n        border: none;\r\n        font-size: 22px;\r\n        background: inherit;\r\n        color: black;\r\n        font-family: \"Monoton\", cursive;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0k7UUFDSSxlQUFlO0tBQ2xCO0lBQ0Q7UUFDSSxVQUFVO1FBQ1YsY0FBYztRQUNkLGFBQWE7UUFDYixnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLFlBQVk7UUFDWixVQUFVO1FBQ1YsV0FBVztRQUNYLHVDQUF1QztRQUN2QyxZQUFZO1FBQ1osaUJBQWlCO0tBQ3BCO0lBQ0Q7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsY0FBYztRQUNkLFlBQVk7UUFDWixpQkFBaUI7S0FDcEI7SUFDRDtRQUNJLFVBQVU7UUFDVixlQUFlO1FBQ2YsT0FBTztRQUNQLFFBQVE7UUFDUixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixhQUFhO1FBQ2IsZ0NBQWdDO0tBQ25DO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5pY28tYnRuIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNjkyKTtcclxuICAgICAgICBsZWZ0OiAtNjgwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgbWF0LXNpZGVuYXYge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJ1dHRvbmZhY2U7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDMzO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAubGlzdC1tZW51IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LWZhbWlseTogXCJNb25vdG9uXCIsIGN1cnNpdmU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n    <button class=\"ico-btn\" (click)=\"snav.toggle()\">\n          <!--\n            <mat-icon>menu</mat-icon>\n          -->\n          <i class=\"fa fa-bars\"></i>\n        </button>\n    <mat-sidenav-container class=\"sidenav-container\">\n        <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n            <mat-nav-list class=\"list-menu\">\n                <a mat-list-item routerLink=\"\">Step 1</a>\n                <a mat-list-item routerLink=\"/step2\">Step 2</a>\n            </mat-nav-list>\n        </mat-sidenav>\n    </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");




var MenuComponent = /** @class */ (function () {
    function MenuComponent(changeDetectorRef, media) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    MenuComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/s1-footer/s1-footer.component.css":
/*!***************************************************!*\
  !*** ./src/app/s1-footer/s1-footer.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.footer {\r\n    margin: 0;\r\n    padding: 0;\r\n    position: relative;\r\n}\r\n\r\n.big-img {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: url('footer-img1.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.container {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    width: 880px;\r\n}\r\n\r\n.retrive {\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 20px 0 0 0;\r\n}\r\n\r\n.retrive-items {\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-size: 16px;\r\n    list-style: none;\r\n}\r\n\r\n.retrive-user {\r\n    width: 100%;\r\n    padding: 18px;\r\n    margin: 0px;\r\n    border: none;\r\n    border-radius: 6px;\r\n    background: #f1f1f1;\r\n}\r\n\r\n/* Add styles to the form container */\r\n\r\n.form-container {\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 12px 0;\r\n}\r\n\r\n.footer-flex-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.point {\r\n    width: 26px;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text],\r\ninput[type=password] {\r\n    width: 100%;\r\n    padding: 18px;\r\n    margin: 0px 0 12px 0;\r\n    font-size: 16px;\r\n    border: none;\r\n    border-radius: 6px;\r\n    background: #f1f1f1;\r\n}\r\n\r\ninput[type=text]:focus,\r\ninput[type=password]:focus {\r\n    background-color: #ddd;\r\n    outline: none;\r\n}\r\n\r\ninput.ng-touched.ng-invalid {\r\n    border: solid red 2px;\r\n}\r\n\r\ninput.ng-touched.ng-valid {\r\n    border: solid green 2px;\r\n}\r\n\r\n.input-flex-container {\r\n    display: flex;\r\n    align-items: stretch;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 50%;\r\n}\r\n\r\n.input-flex-container>input {\r\n    width: 20%;\r\n}\r\n\r\n.input-flex-container>.input-phone {\r\n    width: 20%;\r\n    margin: 0 8px 10px 12px;\r\n}\r\n\r\n/* Set a style for the submit button */\r\n\r\n.btn {\r\n    margin: 6px 0;\r\n    padding: 12px 20px;\r\n    border: 10px solid #b8b2be;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    background-color: #ffd06a;\r\n    background-image: linear-gradient(#ffd06a, #ffae00);\r\n    text-transform: uppercase;\r\n    font-family: sans-serif, \"Khand\", ;\r\n    color: rgb(80, 41, 34);\r\n    font-weight: 900;\r\n    font-size: 32px;\r\n    opacity: 0.95;\r\n}\r\n\r\n.btn:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.sec1-text {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n}\r\n\r\n.sec1-text-small {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    font-size: 16px;\r\n    font-family: \"RobotoCondensed\", sans-serif;\r\n    color: rgb(254, 254, 254);\r\n    line-height: 1.2;\r\n    text-align: center;\r\n}\r\n\r\n.sec1-flex-container {\r\n    width: 100%;\r\n    margin: 12px auto;\r\n    padding: 16px 0 22px 0;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-self: center;\r\n    align-items: baseline;\r\n}\r\n\r\n.logo {\r\n    margin: 0;\r\n    padding: 0 24px;\r\n}\r\n\r\n.footer-text-small {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    font-size: 12px;\r\n    font-family: \"Roboto\", sans-serif;\r\n    color: rgb(255, 255, 255);\r\n    line-height: 1.2;\r\n    text-align: center;\r\n}\r\n\r\n.footer-text-big {\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 14px;\r\n    font-family: \"Roboto\", sans-serif;\r\n    color: rgb(255, 255, 255);\r\n    line-height: 2;\r\n    margin: 0;\r\n    padding: 32px 0;\r\n}\r\n\r\n@media screen and (max-width: 1050px) {\r\n    body {\r\n        width: 100%;\r\n        height: 100%;\r\n        position: relative;\r\n    }\r\n    .container {\r\n        width: 100%;\r\n        height: 100%;\r\n        padding: 0 12px;\r\n    }\r\n    .footer-flex-container {\r\n        flex-direction: row;\r\n    }\r\n    .input-flex-container {\r\n        width: 100%;\r\n    }\r\n    .sec1-flex-container {\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-self: center;\r\n        align-items: baseline;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 850px) {\r\n    body {\r\n        width: 100%;\r\n        height: 100%;\r\n        position: relative;\r\n    }\r\n    .container {\r\n        width: 100%;\r\n        height: 100%;\r\n        padding: 0 12px;\r\n    }\r\n    .footer-flex-container {\r\n        flex-direction: row;\r\n    }\r\n    .input-flex-container {\r\n        width: 100%;\r\n    }\r\n    .sec1-flex-container {\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-self: center;\r\n        align-items: baseline;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    body {\r\n        width: 100%;\r\n        height: 100%;\r\n        position: relative;\r\n    }\r\n    .container {\r\n        width: 100%;\r\n        height: 100%;\r\n        padding: 0;\r\n    }\r\n    .retrive {\r\n        width: 100%;\r\n        padding: 6px 16px 0 16px;\r\n    }\r\n    .retrive-user {\r\n        margin: 12px 0 0 0;\r\n    }\r\n    .form-container {\r\n        padding: 12px 16px 20px 16px;\r\n    }\r\n    .footer-flex-container {\r\n        flex-direction: column;\r\n    }\r\n    .input-flex-container {\r\n        width: 100%;\r\n    }\r\n    .sec1-flex-container {\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-self: center;\r\n        align-items: baseline;\r\n    }\r\n    .logo {\r\n        margin: 0 auto;\r\n        padding: 12px 0;\r\n        height: 100%;\r\n        width: auto;\r\n        text-align: center;\r\n    }\r\n    .btn {\r\n        font-size: 22px;\r\n    }\r\n    .footer-text-small {\r\n        padding: 0 16px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvczEtZm9vdGVyL3MxLWZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxtQ0FBb0Q7SUFDcEQsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUN2Qjs7QUFHRCxzQ0FBc0M7O0FBRXRDO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0NBQ2Q7O0FBR0QsNkJBQTZCOztBQUU3Qjs7SUFFSSxZQUFZO0lBQ1osY0FBYztJQUNkLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDdkI7O0FBRUQ7O0lBRUksdUJBQXVCO0lBQ3ZCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztDQUNkOztBQUVEO0lBQ0ksV0FBVztDQUNkOztBQUVEO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtDQUMzQjs7QUFHRCx1Q0FBdUM7O0FBRXZDO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLG9EQUFvRDtJQUNwRCwwQkFBMEI7SUFDMUIsbUNBQW1DO0lBQ25DLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQywwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO0tBQ3RCO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksb0JBQW9CO0tBQ3ZCO0lBQ0Q7UUFDSSxZQUFZO0tBQ2Y7SUFDRDtRQUNJLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsbUJBQW1CO1FBQ25CLHNCQUFzQjtLQUN6QjtDQUNKOztBQUVEO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtLQUN0QjtJQUNEO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLG9CQUFvQjtLQUN2QjtJQUNEO1FBQ0ksWUFBWTtLQUNmO0lBQ0Q7UUFDSSxvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLG1CQUFtQjtRQUNuQixzQkFBc0I7S0FDekI7Q0FDSjs7QUFFRDtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7S0FDdEI7SUFDRDtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsV0FBVztLQUNkO0lBQ0Q7UUFDSSxZQUFZO1FBQ1oseUJBQXlCO0tBQzVCO0lBQ0Q7UUFDSSxtQkFBbUI7S0FDdEI7SUFDRDtRQUNJLDZCQUE2QjtLQUNoQztJQUNEO1FBQ0ksdUJBQXVCO0tBQzFCO0lBQ0Q7UUFDSSxZQUFZO0tBQ2Y7SUFDRDtRQUNJLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsbUJBQW1CO1FBQ25CLHNCQUFzQjtLQUN6QjtJQUNEO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsWUFBWTtRQUNaLG1CQUFtQjtLQUN0QjtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSxnQkFBZ0I7S0FDbkI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL3MxLWZvb3Rlci9zMS1mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5iaWctaW1nIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvZm9vdGVyLWltZzEucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogODgwcHg7XHJcbn1cclxuXHJcbi5yZXRyaXZlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMjBweCAwIDAgMDtcclxufVxyXG5cclxuLnJldHJpdmUtaXRlbXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnJldHJpdmUtdXNlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcblxyXG4vKiBBZGQgc3R5bGVzIHRvIHRoZSBmb3JtIGNvbnRhaW5lciAqL1xyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTJweCAwO1xyXG59XHJcblxyXG4uZm9vdGVyLWZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ucG9pbnQge1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0sXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMThweDtcclxuICAgIG1hcmdpbjogMHB4IDAgMTJweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxcclxuaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIHJlZCAycHg7XHJcbn1cclxuXHJcbmlucHV0Lm5nLXRvdWNoZWQubmctdmFsaWQge1xyXG4gICAgYm9yZGVyOiBzb2xpZCBncmVlbiAycHg7XHJcbn1cclxuXHJcbi5pbnB1dC1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmlucHV0LWZsZXgtY29udGFpbmVyPmlucHV0IHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5pbnB1dC1mbGV4LWNvbnRhaW5lcj4uaW5wdXQtcGhvbmUge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIG1hcmdpbjogMCA4cHggMTBweCAxMnB4O1xyXG59XHJcblxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXHJcblxyXG4uYnRuIHtcclxuICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgI2I4YjJiZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDA2YTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZmZkMDZhLCAjZmZhZTAwKTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZiwgXCJLaGFuZFwiLCA7XHJcbiAgICBjb2xvcjogcmdiKDgwLCA0MSwgMzQpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIG9wYWNpdHk6IDAuOTU7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnNlYzEtdGV4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnNlYzEtdGV4dC1zbWFsbCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9Db25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VjMS1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMTJweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTZweCAwIDIycHggMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxufVxyXG5cclxuLmZvb3Rlci10ZXh0LXNtYWxsIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb290ZXItdGV4dC1iaWcge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMzJweCAwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAgIGJvZHkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuICAgIC5pbnB1dC1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuc2VjMS1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgYm9keSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLWZsZXgtY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG4gICAgLmlucHV0LWZsZXgtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5zZWMxLWZsZXgtY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBib2R5IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAucmV0cml2ZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDE2cHggMCAxNnB4O1xyXG4gICAgfVxyXG4gICAgLnJldHJpdmUtdXNlciB7XHJcbiAgICAgICAgbWFyZ2luOiAxMnB4IDAgMCAwO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHggMjBweCAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5pbnB1dC1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuc2VjMS1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci10ZXh0LXNtYWxsIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/s1-footer/s1-footer.component.html":
/*!****************************************************!*\
  !*** ./src/app/s1-footer/s1-footer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"big-img\">\n        <div class=\"container\">\n            <ul class=\"retrive\">\n                <li class=\"retrive-items footer-flex-container\" *ngFor=\"let item of items\">\n                    <div class=\"retrive-user\"> {{item.first_name}} </div>\n                    <div class=\"point\"></div>\n                    <div class=\"retrive-user\"> {{item.email}} </div>\n                </li>\n            </ul>\n            <form class=\"form-container\" [formGroup]=\"myForm\" novalidate (ngSubmit)=\"submit()\">\n                <div class=\"footer-flex-container \">\n                    <input type=\"text\" placeholder=\"Last Name\" class=\"right\" name=\"last_name\" formControlName=\"last_name\">\n                    <div class=\"point\"></div>\n                    <input type=\"password\" placeholder=\"Password\" class=\"right\" name=\"password\" formControlName=\"password\">\n                </div>\n                <div class=\"input-flex-container\">\n                    <input type=\"text\" placeholder=\"49\" class=\"input-code\" name=\"country\" formControlName=\"country\">\n                    <input type=\"text\" placeholder=\"Phone number\" class=\"input-phone\" style=\"flex-basis:79%\" name=\"phone\" formControlName=\"phone\">\n                </div>\n                <button class=\"btn\" [disabled]=\"myForm.invalid\"> get free access  </button>\n            </form>\n            <div class=\"sec1-text\">\n                <p class=\"sec1-text-small\">We respect your privacy and your information is 100% secure.</p>\n                <div class=\"sec1-logo sec1-flex-container\">\n                    <img class=\"logo\" src=\"./assets/img/section-img1.png\" alt=\"logo McAfee\">\n                    <img class=\"logo\" src=\"./assets/img/section-img2.png\" alt=\"logo VeriSign\">\n                    <img class=\"logo\" src=\"./assets/img/section-img3.png\" alt=\"logo Symantec\">\n                    <img class=\"logo\" src=\"./assets/img/section-img4.png\" alt=\"logo GeoTrust\">\n                    <img class=\"logo\" src=\"./assets/img/section-img5.png\" alt=\"logo SSl\">\n                </div>\n                <p class=\"footer-text-small\">Binary options present a significant opportunity for you to make serious earning, but like any investment, they present an element of risk. Potential lots of full of partial funds should be considereted at all times befor making any trade.\n                    We urge you to explore individual tax liability laws in your country of reading and recommend reading our Terms of Service for more information. Please note it is illegal under U.S. law to solicit the purchase and sale of commodit\n                    options unless explicitly listed for trading on a CFTC exchange or Legally exempt.</p>\n                <p class=\"footer-text-big\">Terms | Privacy | Support</p>\n            </div>\n\n        </div>\n\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/s1-footer/s1-footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/s1-footer/s1-footer.component.ts ***!
  \**************************************************/
/*! exports provided: FullUser, S1FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullUser", function() { return FullUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1FooterComponent", function() { return S1FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/user.service */ "./src/app/user.service.ts");




var FullUser = /** @class */ (function () {
    function FullUser() {
    }
    return FullUser;
}());

var S1FooterComponent = /** @class */ (function () {
    function S1FooterComponent(dataService) {
        this.dataService = dataService;
        this.items = [];
        this.fulluser = new FullUser();
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            // 'first_name': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{2,}')]),
            // 'email': new FormControl('', [ Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]),
            'last_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z]{2,}')]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9].{6,12}')]),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9].{8}')]),
            'country': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9].{1}')])
        });
    }
    S1FooterComponent.prototype.ngOnInit = function () {
        this.items = this.dataService.getData();
    };
    S1FooterComponent.prototype.submit = function () {
        console.log(this.myForm.value);
        console.log(this.fulluser);
        alert('Registration has been completed!');
    };
    S1FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-s1-footer',
            template: __webpack_require__(/*! ./s1-footer.component.html */ "./src/app/s1-footer/s1-footer.component.html"),
            providers: [_app_user_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]],
            styles: [__webpack_require__(/*! ./s1-footer.component.css */ "./src/app/s1-footer/s1-footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_user_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], S1FooterComponent);
    return S1FooterComponent;
}());



/***/ }),

/***/ "./src/app/s1-header/s1-header.component.css":
/*!***************************************************!*\
  !*** ./src/app/s1-header/s1-header.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.header {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 580px;\r\n    position: relative;\r\n}\r\n\r\n.big-img {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: url('header-img1.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 580px;\r\n}\r\n\r\n/*\r\n.nav {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: rgba(153, 153, 153, 0.692);\r\n    position: relative;\r\n    color: white;\r\n}\r\n\r\n.nav-flex-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.nav-item {\r\n    margin: 8px 4px;\r\n    padding: 6px 4px;\r\n    display: inline;\r\n    font-size: 18px;\r\n    font-family: \"Roboto Condensed\", sans-serif;\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\n.left {\r\n    width: 25%;\r\n    text-align: left;\r\n    float: left;\r\n    line-height: 1.25;\r\n}\r\n\r\n.nav-item-title-left {\r\n    margin: 0;\r\n    padding: 0 6px;\r\n    font-size: 36px;\r\n    display: inline;\r\n    float: left;\r\n}\r\n\r\n.nav-img1 {\r\n    padding: 2px 4px 0 4px;\r\n    height: 20px;\r\n}\r\n\r\n.center {    \r\n    margin: 0 auto;\r\n    padding: 16px 16px;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 28px;\r\n    text-align: center;\r\n    font-family: \"Monoton\", cursive;\r\n    color: rgb(255, 255, 255);\r\n    word-spacing: 0.175em;\r\n}\r\n\r\n.right {\r\n    width: 30%;\r\n    text-align: right;\r\n    float: right;\r\n    line-height: 1.4;\r\n}\r\n\r\n.nav-item-title-right {\r\n    margin: 0;\r\n    padding: 0px 6px;\r\n    font-size: 36px;\r\n    display: inline;\r\n    float: right;\r\n}\r\n*/\r\n\r\n.container {\r\n    position: relative;\r\n    width: 1050px;\r\n    margin: 0 auto;\r\n    padding: 80px 0 0 0;\r\n}\r\n\r\n.header-title {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    display: relative;\r\n    font-size: 36px;\r\n    text-align: center;\r\n    font-family: \"Khand\", sans-serif;\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\n.title {\r\n    text-transform: uppercase;\r\n}\r\n\r\n.header-flex-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    margin: 8px 0;\r\n    padding: 0;\r\n    width: 100%;\r\n}\r\n\r\n.flex-item1 {\r\n    width: 60%;\r\n}\r\n\r\n.video {\r\n    background: black;\r\n    height: 420px;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n}\r\n\r\n#sm-video {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.flex-item2 {\r\n    width: 40%;\r\n}\r\n\r\n.retrive {\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0 0 0 20px;\r\n}\r\n\r\n.retrive-items {\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-size: 16px;\r\n    list-style: none;\r\n}\r\n\r\n.retrive-user {\r\n    width: 100%;\r\n    padding: 18px;\r\n    margin: 0px 0 12px 0;\r\n    border: none;\r\n    border-radius: 6px;\r\n    background: #f1f1f1;\r\n}\r\n\r\n/* Add styles to the form container */\r\n\r\n.form-container {\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0 0 0 20px;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text],\r\ninput[type=password] {\r\n    width: 100%;\r\n    padding: 18px;\r\n    margin: 0px 0 12px 0;\r\n    font-size: 16px;\r\n    border: none;\r\n    border-radius: 6px;\r\n    background: #f1f1f1;\r\n}\r\n\r\ninput[type=text]:focus,\r\ninput[type=password]:focus {\r\n    background-color: #ddd;\r\n    outline: none;\r\n}\r\n\r\ninput.ng-touched.ng-invalid {\r\n    border: solid red 2px;\r\n}\r\n\r\ninput.ng-touched.ng-valid {\r\n    border: solid green 2px;\r\n}\r\n\r\n.input-flex-container {\r\n    display: flex;\r\n    align-items: stretch;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n}\r\n\r\n.input-flex-container>input {\r\n    width: 20%;\r\n}\r\n\r\n.input-flex-container>.input-phone {\r\n    width: 20%;\r\n    margin: 0 0 10px 16px;\r\n}\r\n\r\n/* Set a style for the submit button */\r\n\r\n.btn {\r\n    padding: 12px 20px;\r\n    color: #502922;\r\n    border: 10px solid #b8b2be;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    background-color: #ffd06a;\r\n    background-image: linear-gradient(#ffd06a, #ffae00);\r\n    text-transform: uppercase;\r\n    font-size: 32px;\r\n    font-weight: 800;\r\n    opacity: 0.95;\r\n}\r\n\r\n.btn:hover {\r\n    opacity: 1;\r\n}\r\n\r\n@media screen and (max-width: 1050px) {\r\n    body {\r\n        width: 100%;\r\n        height: 100%;\r\n        display: block;\r\n    }\r\n    .header {\r\n        width: 100%;\r\n    }\r\n    .container {\r\n        width: 100%;\r\n        height: 100%;\r\n        padding: 60px 12px 0 12px;\r\n    }\r\n    .header-flex-container {\r\n        flex-direction: row;\r\n    }\r\n    .flex-item1 {\r\n        width: 100%;\r\n    }\r\n    .video {\r\n        width: 100%;\r\n    }\r\n    .flex-item2 {\r\n        width: 100%;\r\n        padding: 0 0 0 12px;\r\n    }\r\n    .form-container {\r\n        padding: 0;\r\n    }\r\n    .big-img {\r\n        background-position: center;\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        height: 580px;\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 850px) {\r\n    body {\r\n        width: 100%;\r\n        height: 100%;\r\n        display: block;\r\n    }\r\n    .header {\r\n        width: 100%;\r\n        height: 980px\r\n    }\r\n    .container {\r\n        width: 100%;\r\n        height: 100%;\r\n        padding: 60px 12px 0 12px;\r\n    }\r\n    .header-flex-container {\r\n        flex-direction: column;\r\n    }\r\n    .retrive {\r\n        padding: 0;\r\n    }\r\n    .flex-item1 {\r\n        width: 100%;\r\n    }\r\n    .video {\r\n        width: 100%;\r\n    }\r\n    .flex-item2 {\r\n        width: 100%;\r\n        padding: 12px 0;\r\n    }\r\n    .form-container {\r\n        padding: 0;\r\n    }\r\n    .big-img {\r\n        background-position: center;\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        height: 980px;\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    body {\r\n        width: 100%;\r\n        height: 100%;\r\n        display: block;\r\n    }\r\n    .header {\r\n        width: 100%;\r\n        height: 1050px;\r\n    }\r\n    .container {\r\n        width: 100%;\r\n        height: 100%;\r\n        padding: 60px 0 0 0;\r\n    }\r\n    .header-title {\r\n        padding: 8px 16px;\r\n    }\r\n    .header-flex-container {\r\n        flex-direction: column;\r\n        padding: 0 16px;\r\n    }\r\n    .flex-item1 {\r\n        width: 100%;\r\n    }\r\n    .video {\r\n        width: 100%;\r\n    }\r\n    .flex-item2 {\r\n        width: 100%;\r\n        padding: 12px 0;\r\n    }\r\n    .form-container {\r\n        padding: 0;\r\n    }\r\n    .big-img {\r\n        background-position: center;\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        height: 1050px;\r\n        width: 100%;\r\n    }\r\n    .btn {\r\n        font-size: 22px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvczEtaGVhZGVyL3MxLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUNBQW9EO0lBQ3BELDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLGNBQWM7Q0FDakI7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFFRTs7QUFFRjtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtJQUNmLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQywwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUN2Qjs7QUFHRCxzQ0FBc0M7O0FBRXRDO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixvQkFBb0I7Q0FDdkI7O0FBR0QsNkJBQTZCOztBQUU3Qjs7SUFFSSxZQUFZO0lBQ1osY0FBYztJQUNkLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDdkI7O0FBRUQ7O0lBRUksdUJBQXVCO0lBQ3ZCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtDQUNmOztBQUVEO0lBQ0ksV0FBVztDQUNkOztBQUVEO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtDQUN6Qjs7QUFHRCx1Q0FBdUM7O0FBRXZDO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLG9EQUFvRDtJQUNwRCwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksV0FBVztDQUNkOztBQUVEO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGVBQWU7S0FDbEI7SUFDRDtRQUNJLFlBQVk7S0FDZjtJQUNEO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYiwwQkFBMEI7S0FDN0I7SUFDRDtRQUNJLG9CQUFvQjtLQUN2QjtJQUNEO1FBQ0ksWUFBWTtLQUNmO0lBQ0Q7UUFDSSxZQUFZO0tBQ2Y7SUFDRDtRQUNJLFlBQVk7UUFDWixvQkFBb0I7S0FDdkI7SUFDRDtRQUNJLFdBQVc7S0FDZDtJQUNEO1FBQ0ksNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUM3Qix1QkFBdUI7UUFDdkIsY0FBYztRQUNkLFlBQVk7S0FDZjtDQUNKOztBQUVEO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGVBQWU7S0FDbEI7SUFDRDtRQUNJLFlBQVk7UUFDWixhQUFhO0tBQ2hCO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLDBCQUEwQjtLQUM3QjtJQUNEO1FBQ0ksdUJBQXVCO0tBQzFCO0lBQ0Q7UUFDSSxXQUFXO0tBQ2Q7SUFDRDtRQUNJLFlBQVk7S0FDZjtJQUNEO1FBQ0ksWUFBWTtLQUNmO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSxXQUFXO0tBQ2Q7SUFDRDtRQUNJLDRCQUE0QjtRQUM1Qiw2QkFBNkI7UUFDN0IsdUJBQXVCO1FBQ3ZCLGNBQWM7UUFDZCxZQUFZO0tBQ2Y7Q0FDSjs7QUFFRDtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixlQUFlO0tBQ2xCO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osZUFBZTtLQUNsQjtJQUNEO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixvQkFBb0I7S0FDdkI7SUFDRDtRQUNJLGtCQUFrQjtLQUNyQjtJQUNEO1FBQ0ksdUJBQXVCO1FBQ3ZCLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksWUFBWTtLQUNmO0lBQ0Q7UUFDSSxZQUFZO0tBQ2Y7SUFDRDtRQUNJLFlBQVk7UUFDWixnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLFdBQVc7S0FDZDtJQUNEO1FBQ0ksNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUM3Qix1QkFBdUI7UUFDdkIsZUFBZTtRQUNmLFlBQVk7S0FDZjtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9zMS1oZWFkZXIvczEtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDU4MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYmlnLWltZyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1nL2hlYWRlci1pbWcxLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDU4MHB4O1xyXG59XHJcblxyXG5cclxuLypcclxuLm5hdiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxNTMsIDE1MywgMTUzLCAwLjY5Mik7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uYXYtZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICAgIG1hcmdpbjogOHB4IDRweDtcclxuICAgIHBhZGRpbmc6IDZweCA0cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbn1cclxuXHJcbi5uYXYtaXRlbS10aXRsZS1sZWZ0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5uYXYtaW1nMSB7XHJcbiAgICBwYWRkaW5nOiAycHggNHB4IDAgNHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY2VudGVyIHsgICAgXHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDE2cHggMTZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJNb25vdG9uXCIsIGN1cnNpdmU7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgd29yZC1zcGFjaW5nOiAwLjE3NWVtO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxufVxyXG5cclxuLm5hdi1pdGVtLXRpdGxlLXJpZ2h0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDBweCA2cHg7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuKi9cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwNTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogODBweCAwIDAgMDtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIktoYW5kXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmhlYWRlci1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZsZXgtaXRlbTEge1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLnZpZGVvIHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4jc20tdmlkZW8ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW0yIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5yZXRyaXZlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMCAwIDAgMjBweDtcclxufVxyXG5cclxuLnJldHJpdmUtaXRlbXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnJldHJpdmUtdXNlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICBtYXJnaW46IDBweCAwIDEycHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcblxyXG4vKiBBZGQgc3R5bGVzIHRvIHRoZSBmb3JtIGNvbnRhaW5lciAqL1xyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMCAwIDAgMjBweDtcclxufVxyXG5cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICBtYXJnaW46IDBweCAwIDEycHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5pbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xyXG4gICAgYm9yZGVyOiBzb2xpZCByZWQgMnB4O1xyXG59XHJcblxyXG5pbnB1dC5uZy10b3VjaGVkLm5nLXZhbGlkIHtcclxuICAgIGJvcmRlcjogc29saWQgZ3JlZW4gMnB4O1xyXG59XHJcblxyXG4uaW5wdXQtZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW5wdXQtZmxleC1jb250YWluZXI+aW5wdXQge1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmlucHV0LWZsZXgtY29udGFpbmVyPi5pbnB1dC1waG9uZSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweCAxNnB4O1xyXG59XHJcblxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXHJcblxyXG4uYnRuIHtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIGNvbG9yOiAjNTAyOTIyO1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICNiOGIyYmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQwNmE7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2ZmZDA2YSwgI2ZmYWUwMCk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG9wYWNpdHk6IDAuOTU7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgICBib2R5IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA2MHB4IDEycHggMCAxMnB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuICAgIC5mbGV4LWl0ZW0xIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC52aWRlbyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZmxleC1pdGVtMiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAgMTJweDtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5iaWctaW1nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGhlaWdodDogNTgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICBib2R5IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDk4MHB4XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogNjBweCAxMnB4IDAgMTJweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItZmxleC1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAucmV0cml2ZSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5mbGV4LWl0ZW0xIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC52aWRlbyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZmxleC1pdGVtMiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAwO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLmJpZy1pbWcge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA5ODBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGJvZHkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDYwcHggMCAwIDA7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItZmxleC1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmZsZXgtaXRlbTEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnZpZGVvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5mbGV4LWl0ZW0yIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAuYmlnLWltZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwNTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/s1-header/s1-header.component.html":
/*!****************************************************!*\
  !*** ./src/app/s1-header/s1-header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <div class=\"big-img\">\n        <!--       \n        <nav class=\"nav nav-flex-container\">\n            <div class=\"nav-item left \">\n                <div class=\"nav-item-title-left\">1</div>\n                Spot Remaining <br/> in <img class=\"nav-img1\" src=\"../../assets/img/flagIsrael.svg\" /> ISREAL\n            </div>\n            <div class=\"nav-item center\">dubai lifestyle app</div>\n            <div class=\"nav-item right\">\n                <div class=\"nav-item-title-right\">10:03</div>\n                Time Remaining <br /> OFFER EXPIRES\n            </div>\n        </nav>\n         -->\n        <div class=\"container\">\n            <div class=\"header-title\">Welcome To The <span class=\"title\">dubai lifestyle app</span> Members</div>\n            <div class=\"header-flex-container\">\n                <div class=\"flex-item1 \">\n                    <div class=\" video \">\n                        <embed id=\"sm-video\" src=\"https://www.youtube.com/embed/79nFO8dTJfY\">\n                    </div>\n                </div>\n                <div class=\"flex-item2 \">\n                    <ul class=\"retrive\">\n                        <li class=\"retrive-items\" *ngFor=\"let item of items\">\n                            <div class=\"retrive-user\"> {{item.first_name}} </div>\n                            <div class=\"retrive-user\"> {{item.email}} </div>\n                        </li>\n                    </ul>\n\n                    <form class=\"form-container\" [formGroup]=\"myForm\" novalidate (ngSubmit)=\"submit()\">\n                        <!--\n                                <input type=\"text\" placeholder=\"First Name\" name=\"first_name\" formControlName=\"first_name\" />\n                                <input type=\"text\" placeholder=\"Email\" name=\"email\" formControlName=\"email\" />\n                           -->\n                        <input type=\"text\" placeholder=\"Last Name\" name=\"last_name\" formControlName=\"last_name\">\n\n                        <input type=\"password\" placeholder=\"Password\" name=\"password\" formControlName=\"password\" />\n                        <div class=\"input-flex-container\">\n                            <input type=\"text\" placeholder=\"49\" class=\"input-code\" name=\"country\" formControlName=\"country\" />\n                            <input type=\"text\" placeholder=\"Phone number\" class=\"input-phone\" style=\"flex-basis:79%\" name=\"phone\" formControlName=\"phone\">\n                        </div>\n                        <button class=\"btn\" [disabled]=\"myForm.invalid\"> get free access </button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/s1-header/s1-header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/s1-header/s1-header.component.ts ***!
  \**************************************************/
/*! exports provided: FullUser, S1HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullUser", function() { return FullUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1HeaderComponent", function() { return S1HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/user.service */ "./src/app/user.service.ts");




var FullUser = /** @class */ (function () {
    function FullUser() {
    }
    return FullUser;
}());

var S1HeaderComponent = /** @class */ (function () {
    function S1HeaderComponent(dataService) {
        this.dataService = dataService;
        this.items = [];
        this.fulluser = new FullUser();
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            // 'first_name': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{2,}')]),
            // 'email': new FormControl('', [ Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]),
            'last_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z]{2,}')]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9].{6,12}')]),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9].{8}')]),
            'country': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9].{1}')])
        });
    }
    S1HeaderComponent.prototype.ngOnInit = function () {
        this.items = this.dataService.getData();
        console.log(this.items);
    };
    S1HeaderComponent.prototype.submit = function () {
        console.log(this.myForm.value);
        console.log(this.fulluser);
        alert('Registration has been completed!');
    };
    S1HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-s1-header',
            template: __webpack_require__(/*! ./s1-header.component.html */ "./src/app/s1-header/s1-header.component.html"),
            providers: [_app_user_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]],
            styles: [__webpack_require__(/*! ./s1-header.component.css */ "./src/app/s1-header/s1-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_user_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], S1HeaderComponent);
    return S1HeaderComponent;
}());



/***/ }),

/***/ "./src/app/s1-section1/s1-section1.component.css":
/*!*******************************************************!*\
  !*** ./src/app/s1-section1/s1-section1.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    color: #494949;\r\n    font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n.sec1 {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n}\r\n\r\n.container {\r\n    position: relative;\r\n    width: 1050px;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n}\r\n\r\n.sec1-text {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    padding: 16px 0;\r\n}\r\n\r\n.sec1-text-small {\r\n    margin: 12px auto;\r\n    padding: 12px;\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-family: \"Roboto Condensed\", sans-serif;\r\n    color: rgb(157, 156, 156);\r\n}\r\n\r\n.sec1-flex-container {\r\n    width: 100%;\r\n    margin: 12px auto;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-self: center;\r\n    align-items: baseline;\r\n}\r\n\r\n.logo {\r\n    margin: 0 auto;\r\n    padding: 0 24px;\r\n}\r\n\r\n.hr {\r\n    margin: 4px 0;\r\n    padding: 0;\r\n}\r\n\r\n.sec1-text-main {\r\n    margin: 0 auto;\r\n    padding: 12px;\r\n    font-size: 22px;\r\n    font-family: \"Roboto Condensed\", sans-serif;\r\n    color: rgb(73, 73, 73);\r\n    text-align: center;\r\n}\r\n\r\n.text-main-title {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n}\r\n\r\n.black {\r\n    color: #494949;\r\n}\r\n\r\n.orange {\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #f3a345;\r\n}\r\n\r\n.sec1-text-prize {\r\n    font-size: 42px;\r\n    font-weight: bold;\r\n}\r\n\r\n.text-main-title-brown {\r\n    margin: 0;\r\n    padding: 12px 0;\r\n    font-size: 42px;\r\n    font-family: \"Khand\", sans-serif;\r\n    color: rgb(78, 42, 0);\r\n    text-align: center;\r\n}\r\n\r\n.bold {\r\n    font-weight: bold;\r\n}\r\n\r\n.layout {\r\n    margin: 0;\r\n    padding: 12px 0;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: left;\r\n    align-self: left;\r\n    align-items: baseline;\r\n}\r\n\r\n/*\r\n.text-item-content {\r\n    width: 80%;\r\n    display: inline-block;\r\n}\r\n*/\r\n\r\n.number {\r\n    margin: 0 28px 0 0;\r\n    padding: 16px;\r\n    height: 32px;\r\n    width: 32px;\r\n    border: 1.6px solid #f3a345;\r\n    border-radius: 50%;\r\n    color: rgb(78, 42, 0);\r\n    font-style: italic;\r\n    text-align: center;\r\n    font-size: 32px\r\n}\r\n\r\n.sec1-text-item {\r\n    text-align: left;\r\n}\r\n\r\n.sec1-text-flex-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-self: left;\r\n    /*\r\n    justify-content: baseline;\r\n    */\r\n}\r\n\r\n.card {\r\n    width: 50%;\r\n    font-size: 18px;\r\n    font-family: \"Roboto Condensed\", sans-serif;\r\n    color: rgb(54, 54, 54);\r\n}\r\n\r\n.card-img {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.left {\r\n    display: inline-block;\r\n    width: 70%;\r\n    padding: 0 12px\r\n}\r\n\r\n.title-item {\r\n    font-size: 24px;\r\n    font-family: \"Khand\" sans-serif;\r\n    color: rgb(238, 129, 1);\r\n    font-weight: bold;\r\n}\r\n\r\n@media screen and (max-width: 1050px) {\r\n    body {\r\n        width: 100%;\r\n        height: 100%;\r\n        position: relative;\r\n    }\r\n    .container {\r\n        position: relative;\r\n        width: 100%;\r\n        height: 100%;\r\n        padding: 0 12px;\r\n    }\r\n    .sec1-flex-container {\r\n        width: 100%;\r\n        margin: 0 auto;\r\n        padding: 0;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-self: center;\r\n        align-items: baseline;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 850px) {\r\n    body {\r\n        width: 100%;\r\n        height: 100%;\r\n        position: relative;\r\n    }\r\n    .container {\r\n        position: relative;\r\n        width: 100%;\r\n        height: 100%;\r\n        padding: 0 12px;\r\n    }\r\n    .sec1-flex-container {\r\n        width: 100%;\r\n        margin: 0 auto;\r\n        padding: 0;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-self: center;\r\n        align-items: baseline;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    body {\r\n        width: 100%;\r\n        height: 100%;\r\n        position: relative;\r\n        overflow-x: hidden;\r\n    }\r\n    .container {\r\n        width: 100%;\r\n        height: 100%;\r\n        padding: 0;\r\n    }\r\n    .sec1-text-main {\r\n        padding: 0 16px;\r\n    }\r\n    .sec1-flex-container {\r\n        width: 100%;\r\n        margin: 0 auto;\r\n        padding: 0;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-self: center;\r\n        align-items: baseline;\r\n    }\r\n    .logo {\r\n        margin: 0 auto;\r\n        padding: 12px 24px;\r\n        height: 100%;\r\n        width: auto;\r\n        text-align: center;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvczEtc2VjdGlvbjEvczEtc2VjdGlvbjEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZUFBZTtJQUNmLDRDQUE0QztDQUMvQzs7QUFFRDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztDQUNkOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0lBQ2YsV0FBVztDQUNkOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksY0FBYztJQUNkLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDRDQUE0QztJQUM1Qyx1QkFBdUI7SUFDdkIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixzQkFBc0I7Q0FDekI7O0FBR0Q7Ozs7O0VBS0U7O0FBRUY7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakI7O01BRUU7Q0FDTDs7QUFFRDtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxVQUFVO0NBQ2I7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO0tBQ3RCO0lBQ0Q7UUFDSSxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGFBQWE7UUFDYixnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2YsV0FBVztRQUNYLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsbUJBQW1CO1FBQ25CLHNCQUFzQjtLQUN6QjtDQUNKOztBQUVEO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtLQUN0QjtJQUNEO1FBQ0ksbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixhQUFhO1FBQ2IsZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLFdBQVc7UUFDWCxvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLG1CQUFtQjtRQUNuQixzQkFBc0I7S0FDekI7Q0FDSjs7QUFFRDtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsbUJBQW1CO0tBQ3RCO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLFdBQVc7S0FDZDtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLFdBQVc7UUFDWCx1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLG1CQUFtQjtRQUNuQixzQkFBc0I7S0FDekI7SUFDRDtRQUNJLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLFlBQVk7UUFDWixtQkFBbUI7S0FDdEI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL3MxLXNlY3Rpb24xL3MxLXNlY3Rpb24xLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiAjNDk0OTQ5O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2VjMSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTA1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc2VjMS10ZXh0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbn1cclxuXHJcbi5zZWMxLXRleHQtc21hbGwge1xyXG4gICAgbWFyZ2luOiAxMnB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYigxNTcsIDE1NiwgMTU2KTtcclxufVxyXG5cclxuLnNlYzEtZmxleC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEycHggYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxufVxyXG5cclxuLmhyIHtcclxuICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc2VjMS10ZXh0LW1haW4ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYig3MywgNzMsIDczKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQtbWFpbi10aXRsZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ibGFjayB7XHJcbiAgICBjb2xvcjogIzQ5NDk0OTtcclxufVxyXG5cclxuLm9yYW5nZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6ICNmM2EzNDU7XHJcbn1cclxuXHJcbi5zZWMxLXRleHQtcHJpemUge1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50ZXh0LW1haW4tdGl0bGUtYnJvd24ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTJweCAwO1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiS2hhbmRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2IoNzgsIDQyLCAwKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5sYXlvdXQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTJweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBhbGlnbi1zZWxmOiBsZWZ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcblxyXG5cclxuLypcclxuLnRleHQtaXRlbS1jb250ZW50IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuKi9cclxuXHJcbi5udW1iZXIge1xyXG4gICAgbWFyZ2luOiAwIDI4cHggMCAwO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgYm9yZGVyOiAxLjZweCBzb2xpZCAjZjNhMzQ1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6IHJnYig3OCwgNDIsIDApO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzMnB4XHJcbn1cclxuXHJcbi5zZWMxLXRleHQtaXRlbSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2VjMS10ZXh0LWZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24tc2VsZjogbGVmdDtcclxuICAgIC8qXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGJhc2VsaW5lO1xyXG4gICAgKi9cclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2IoNTQsIDU0LCA1NCk7XHJcbn1cclxuXHJcbi5jYXJkLWltZyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgcGFkZGluZzogMCAxMnB4XHJcbn1cclxuXHJcbi50aXRsZS1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIktoYW5kXCIgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2IoMjM4LCAxMjksIDEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xyXG4gICAgYm9keSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgfVxyXG4gICAgLnNlYzEtZmxleC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgYm9keSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgfVxyXG4gICAgLnNlYzEtZmxleC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgYm9keSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5zZWMxLXRleHQtbWFpbiB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgfVxyXG4gICAgLnNlYzEtZmxleC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/s1-section1/s1-section1.component.html":
/*!********************************************************!*\
  !*** ./src/app/s1-section1/s1-section1.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"sec1 container\">\n    <div class=\"sec1-text\">\n        <p class=\"sec1-text-small\">We respect your privacy and your information is 100% secure.</p>\n        <div class=\"sec1-logo sec1-flex-container\">\n            <img class=\"logo\" src=\"./assets/img/section-img1.png\" alt=\"logo McAfee\">\n            <img class=\"logo\" src=\"./assets/img/section-img2.png\" alt=\"logo VeriSign\">\n            <img class=\"logo\" src=\"./assets/img/section-img3.png\" alt=\"logo Symantec\">\n            <img class=\"logo\" src=\"./assets/img/section-img4.png\" alt=\"logo GeoTrust\">\n            <img class=\"logo\" src=\"./assets/img/section-img5.png\" alt=\"logo SSl\">\n        </div>\n    </div>\n    <hr class=\"hr\" />\n\n    <div class=\"sec1-text-main\">\n        <p>Hi! The entire team of the <span class=\"text-main-title black\">dubai lifestyle app</span> App is thriled you've made into the <span class=\"text-main-title orange\">member's area.</span><br /> You're only one step away from finally becoming a beta\n            testers and raking in over</p>\n        <p><span class=\"sec1-text-prize\">$7,183.82</span> <br /> in profit each and <br />\n            <span class=\"text-main-title orange\">every single day</span>\n        </p>\n        <p>Ready to secure your spot? Watch the video and fill out the form right now to get your <span class=\"text-main-title orange\">free copy</span>on the <span class=\"text-main-title black\">dubai lifestyle app</span> activeted!</p>\n        <div class=\"sec1-team\">\n            <img class=\"\" src=\"./assets/img/section2-img1.png\" alt=\"Team\" />\n            <p>Your friend <br /> the <span class=\"text-main-title black\">dubai lifestyle app</span> team\n            </p>\n        </div>\n    </div>\n    <hr class=\"hr\" />\n\n    <div class=\"sec1-text-main \">\n        <h3 class=\"text-main-title-brown\">Start Profiting in <span class=\"bold\"> 3 Simple Steps </span></h3>\n        <div class=\"sec1-text-item layout\">\n            <div class=\"number\"> 1 </div>\n            <div class=\"text-item-content\">Continue the registration form with your details and put submit</div>\n        </div>\n        <div class=\"sec1-text-item layout\">\n            <div class=\"number\"> 2 </div>\n            <div class=\"text-item-content\">Deposit the min sum brokers requirment of at least $250 to activate your account</div>\n        </div>\n        <div class=\"sec1-text-item layout\">\n            <div class=\"number\"> 3 </div>\n            <div class=\"text-item-content\">After descripting your funds, you will resive an email from me with details or how to log into your account and our recomended broke will manage your account and start making you the orotits you wanted are decerve</div>\n        </div>\n    </div>\n    <hr class=\"hr\" />\n\n    <div class=\"sec1-text-main\">\n        <h3 class=\"text-main-title-brown\">Here What you Get When You Register</h3>\n        <p>As soon as you enter your conect details in the form below, you get instant access <br /> to all of the benefits and resources ofered to members of our inner circle</p>\n        <div class=\"sec1-text-flex-container\">\n            <div class=\"sec1-text-item card\">\n                <img class=\"card-img\" src=\"./assets/img/section3-img3.png\" alt=\"profits 1\" />\n                <div class=\"left\">\n                    <h4 class=\"title-item orange\">Auto-Trade Functionality</h4>\n                    <p>Make 99.8% accurate trades without the Insasle. Just select. Let auto-trade fulfet on and let the profits roll in. Or you can simply make your own tredes using our manual option.</p>\n                </div>\n            </div>\n            <div class=\"sec1-text-item card\">\n                <img class=\"card-img\" src=\"./assets/img/section3-img1.png\" alt=\"profits 2\" />\n                <div class=\"left\">\n                    <h4 class=\"title-item orange\">VIP Members Area</h4>\n                    <p>Connect with the worlswide owners of the Dubai Lifestyle App. Here you cariase queastions, share stories and comment about your profits</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"sec1-text-flex-container\">\n            <div class=\"sec1-text-item card\">\n                <img class=\"card-img\" src=\"./assets/img/section3-img2.png\" alt=\"profits 3\" />\n                <div class=\"left\">\n                    <h4 class=\"title-item orange\">24/7 Support</h4>\n                    <p>It's easy to each us! Get your questions answered any day any time by our friendly customer support manager</p>\n                </div>\n            </div>\n            <div class=\"sec1-text-item card\">\n                <img class=\"card-img\" src=\"./assets/img/section3-img4.png\" alt=\"profits 4\" />\n                <div class=\"left\">\n                    <h4 class=\"title-item orange\">Members-Only Newslatter</h4>\n                    <p>Get exclusive access to incusory insights and quick and effective tibs you can use to maximaze your profits</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <hr class=\"hr\" />\n</section>"

/***/ }),

/***/ "./src/app/s1-section1/s1-section1.component.ts":
/*!******************************************************!*\
  !*** ./src/app/s1-section1/s1-section1.component.ts ***!
  \******************************************************/
/*! exports provided: S1Section1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1Section1Component", function() { return S1Section1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var S1Section1Component = /** @class */ (function () {
    function S1Section1Component() {
    }
    S1Section1Component.prototype.ngOnInit = function () {
    };
    S1Section1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-s1-section1',
            template: __webpack_require__(/*! ./s1-section1.component.html */ "./src/app/s1-section1/s1-section1.component.html"),
            styles: [__webpack_require__(/*! ./s1-section1.component.css */ "./src/app/s1-section1/s1-section1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], S1Section1Component);
    return S1Section1Component;
}());



/***/ }),

/***/ "./src/app/s1-section2/s1-section2.component.css":
/*!*******************************************************!*\
  !*** ./src/app/s1-section2/s1-section2.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #494949;\r\n    font-family: \"Roboto Condensed\", sans-serif;\r\n}\r\n\r\n.hr {\r\n    margin: 4px 0;\r\n    padding: 0;\r\n}\r\n\r\n.sec2 {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n}\r\n\r\n.container {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    width: 1050px;\r\n}\r\n\r\n.card-flex-container {\r\n    margin: 8px 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-self: center;\r\n    align-items: baseline;\r\n}\r\n\r\n.card-item {\r\n    width: 25%;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 4px solid #ededed;\r\n    border-radius: 6px;\r\n    text-align: center;\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\n.card-item2 {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 16px 0;\r\n}\r\n\r\n.card-flex-container a:hover .card-item2 {\r\n    background: #8e11ef;\r\n    color: white;\r\n}\r\n\r\n.card-flex-container a:hover {\r\n    border: 4px solid #8e11ef;\r\n}\r\n\r\n.table {\r\n    margin: 0 -3px;\r\n    padding: 6px 3px;\r\n    width: 100%;\r\n    height: auto;\r\n    background: #8e11ef;\r\n    border-radius: 6px;\r\n}\r\n\r\n.table-points {\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 12px 8px;\r\n    color: white;\r\n}\r\n\r\n.table-points-item {\r\n    margin: 0;\r\n    padding: 6px 12px;\r\n    text-align: left;\r\n    display: inline-block;\r\n    font-size: 18px;\r\n    font-weight: 100;\r\n}\r\n\r\n.point {\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\r\n\r\n.table-info {\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    background: white;\r\n    color: #8e11ef;\r\n}\r\n\r\n.table-info-item {\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    padding: 8px 0;\r\n    margin: 0;\r\n}\r\n\r\n.bold {\r\n    font-weight: 800;\r\n    font-size: 24px;\r\n}\r\n\r\n.right {\r\n    float: right;\r\n}\r\n\r\ntable {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n}\r\n\r\nthead {\r\n    margin: 0;\r\n    padding: 8px 0;\r\n    background: #5f5f5f;\r\n    color: white;\r\n}\r\n\r\ntbody {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ntr {\r\n    margin: 0;\r\n    padding: 8px 0;\r\n}\r\n\r\ntr:nth-child(2n+2) {\r\n    background: #cecccc;\r\n}\r\n\r\nth {\r\n    margin: 0;\r\n    padding: 12px 0;\r\n    text-transform: uppercase;\r\n}\r\n\r\ntd {\r\n    margin: 0;\r\n    padding: 10px 0;\r\n    text-transform: uppercase;\r\n    color: #494949;\r\n}\r\n\r\n.td-assets {\r\n    font-weight: bold;\r\n}\r\n\r\n.td-position {\r\n    color: green;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.td-status {\r\n    margin: 0;\r\n    padding: 2px 0;\r\n    border-radius: 4px;\r\n    background: green;\r\n    color: white;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.sec2-text-main {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    text-align: left;\r\n    font-size: 22px;\r\n    font-family: \"Roboto Condensed\", sans-serif;\r\n    color: rgb(60, 60, 60);\r\n    line-height: 1.636;\r\n}\r\n\r\n.sec2-text-main>p {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.text-main {\r\n    margin: 0;\r\n    padding: 24px 12px;\r\n    font-weight: bold;\r\n    font-size: 48px;\r\n    font-family: \"Khand\", sans-serif;\r\n    color: rgb(73, 73, 73);\r\n    line-height: 1.2;\r\n    text-align: center;\r\n}\r\n\r\n.orange {\r\n    color: #f3a345;\r\n    font-weight: bold;\r\n}\r\n\r\n.sec2-text-small {\r\n    margin: 0 auto;\r\n    padding: 12px 0 12px 48px;\r\n    font-size: 18px;\r\n    font-family: \"Roboto Condensed\", sans-serif;\r\n    color: rgb(60, 60, 60);\r\n    line-height: 1.2;\r\n    display: block;\r\n}\r\n\r\n@media screen and (max-width: 1050px) {\r\n    body {\r\n        width: 100%;\r\n        height: 100%;\r\n        position: relative;\r\n    }\r\n    .container {\r\n        width: 100%;\r\n        height: 100%;\r\n        padding: 0 12px;\r\n    }\r\n    .card-flex-container {\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-self: center;\r\n        align-items: baseline;\r\n    }\r\n    .card-item {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 850px) {\r\n    body {\r\n        width: 100%;\r\n        height: 100%;\r\n        position: relative;\r\n    }\r\n    .container {\r\n        width: 100%;\r\n        height: 100%;\r\n        padding: 0 12px;\r\n    }\r\n    .card-flex-container {\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-self: center;\r\n        align-items: baseline;\r\n    }\r\n    .card-item {\r\n        width: 90%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    body {\r\n        width: 100%;\r\n        height: 100%;\r\n        position: relative;\r\n    }\r\n    .sec2 {\r\n        padding: 0;\r\n        margin: 0;\r\n    }\r\n    .container {\r\n        width: 100%;\r\n        height: 100%;\r\n        padding: 0;\r\n        margin: 0;\r\n    }\r\n    .text-main {\r\n        margin: 0 16px;\r\n        padding: 24px 0;\r\n    }\r\n    .card-flex-container {\r\n        padding: 0;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-self: center;\r\n        align-items: baseline;\r\n    }\r\n    .card-item {\r\n        width: 100%;\r\n    }\r\n    .table {\r\n        width: 90%;\r\n        margin: 0 16px;\r\n        padding: 6px 3px;\r\n        overflow-x: hidden;\r\n    }\r\n    .bold {\r\n        font-weight: 700;\r\n        font-size: 16px;\r\n    }\r\n    .table-points {\r\n        padding: 8px 4px;\r\n    }\r\n    .table-points-item {\r\n        padding: 6px 6px;\r\n        font-size: auto;\r\n    }\r\n    .for-mobile {\r\n        overflow-x: scroll;\r\n    }\r\n    table {\r\n        overflow-x: scroll;\r\n    }\r\n    thead {\r\n        overflow-x: scroll;\r\n    }\r\n    tbody {\r\n        overflow-x: scroll;\r\n    }\r\n    tr {\r\n        overflow-x: scroll;\r\n    }\r\n    th {\r\n        font-size: auto;\r\n    }\r\n    td {\r\n        font-size: auto;\r\n    }\r\n    .sec2-text-main {\r\n        padding: 0 16px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvczEtc2VjdGlvbjIvczEtc2VjdGlvbjIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtJQUNmLDRDQUE0QztDQUMvQzs7QUFFRDtJQUNJLGNBQWM7SUFDZCxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYztDQUNqQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFVBQVU7Q0FDYjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLFVBQVU7SUFDVixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDLHVCQUF1QjtJQUN2QixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsV0FBVztDQUNkOztBQUVEO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlO0NBQ2xCOztBQUVEO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtLQUN0QjtJQUNEO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsbUJBQW1CO1FBQ25CLHNCQUFzQjtLQUN6QjtJQUNEO1FBQ0ksWUFBWTtLQUNmO0NBQ0o7O0FBRUQ7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO0tBQ3RCO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QixtQkFBbUI7UUFDbkIsc0JBQXNCO0tBQ3pCO0lBQ0Q7UUFDSSxXQUFXO0tBQ2Q7Q0FDSjs7QUFFRDtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7S0FDdEI7SUFDRDtRQUNJLFdBQVc7UUFDWCxVQUFVO0tBQ2I7SUFDRDtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsV0FBVztRQUNYLFVBQVU7S0FDYjtJQUNEO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksV0FBVztRQUNYLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsbUJBQW1CO1FBQ25CLHNCQUFzQjtLQUN6QjtJQUNEO1FBQ0ksWUFBWTtLQUNmO0lBQ0Q7UUFDSSxXQUFXO1FBQ1gsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixtQkFBbUI7S0FDdEI7SUFDRDtRQUNJLGlCQUFpQjtRQUNqQixnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLGlCQUFpQjtLQUNwQjtJQUNEO1FBQ0ksaUJBQWlCO1FBQ2pCLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksbUJBQW1CO0tBQ3RCO0lBQ0Q7UUFDSSxtQkFBbUI7S0FDdEI7SUFDRDtRQUNJLG1CQUFtQjtLQUN0QjtJQUNEO1FBQ0ksbUJBQW1CO0tBQ3RCO0lBQ0Q7UUFDSSxtQkFBbUI7S0FDdEI7SUFDRDtRQUNJLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSxnQkFBZ0I7S0FDbkI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL3MxLXNlY3Rpb24yL3MxLXNlY3Rpb24yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb2xvcjogIzQ5NDk0OTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmhyIHtcclxuICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc2VjMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTA1MHB4O1xyXG59XHJcblxyXG4uY2FyZC1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG5cclxuLmNhcmQtaXRlbSB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkICNlZGVkZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNhcmQtaXRlbTIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbn1cclxuXHJcbi5jYXJkLWZsZXgtY29udGFpbmVyIGE6aG92ZXIgLmNhcmQtaXRlbTIge1xyXG4gICAgYmFja2dyb3VuZDogIzhlMTFlZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQtZmxleC1jb250YWluZXIgYTpob3ZlciB7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjOGUxMWVmO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgbWFyZ2luOiAwIC0zcHg7XHJcbiAgICBwYWRkaW5nOiA2cHggM3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjOGUxMWVmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4udGFibGUtcG9pbnRzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTJweCA4cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50YWJsZS1wb2ludHMtaXRlbSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4ucG9pbnQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50YWJsZS1pbmZvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6ICM4ZTExZWY7XHJcbn1cclxuXHJcbi50YWJsZS1pbmZvLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYm9sZCB7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG50aGVhZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnRib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbnRyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQoMm4rMikge1xyXG4gICAgYmFja2dyb3VuZDogI2NlY2NjYztcclxufVxyXG5cclxudGgge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTJweCAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxudGQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjNDk0OTQ5O1xyXG59XHJcblxyXG4udGQtYXNzZXRzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGQtcG9zaXRpb24ge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnRkLXN0YXR1cyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAycHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnNlYzItdGV4dC1tYWluIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogcmdiKDYwLCA2MCwgNjApO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjM2O1xyXG59XHJcblxyXG4uc2VjMi10ZXh0LW1haW4+cCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udGV4dC1tYWluIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDI0cHggMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiS2hhbmRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2IoNzMsIDczLCA3Myk7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ub3JhbmdlIHtcclxuICAgIGNvbG9yOiAjZjNhMzQ1O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zZWMyLXRleHQtc21hbGwge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMnB4IDAgMTJweCA0OHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYig2MCwgNjAsIDYwKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgICBib2R5IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgIH1cclxuICAgIC5jYXJkLWZsZXgtY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1pdGVtIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgIGJvZHkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtZmxleC1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIH1cclxuICAgIC5jYXJkLWl0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBib2R5IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLnNlYzIge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLnRleHQtbWFpbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMjRweCAwO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtZmxleC1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtaXRlbSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAudGFibGUge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDNweDtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAuYm9sZCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAudGFibGUtcG9pbnRzIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggNHB4O1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLXBvaW50cy1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nOiA2cHggNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogYXV0bztcclxuICAgIH1cclxuICAgIC5mb3ItbW9iaWxlIHtcclxuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICB9XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgfVxyXG4gICAgdGhlYWQge1xyXG4gICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIH1cclxuICAgIHRib2R5IHtcclxuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICB9XHJcbiAgICB0ciB7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgfVxyXG4gICAgdGgge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogYXV0bztcclxuICAgIH1cclxuICAgIHRkIHtcclxuICAgICAgICBmb250LXNpemU6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuc2VjMi10ZXh0LW1haW4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/s1-section2/s1-section2.component.html":
/*!********************************************************!*\
  !*** ./src/app/s1-section2/s1-section2.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"sec2 container\">\n    <h3 class=\"text-main \">Watch Live Accounts</h3>\n    <div class=\"card-flex-container\">\n        <a class=\"card-item\" href=\"#\">\n            <div class=\"card-item2\">\n                <img class=\"\" src=\"./assets/img/section4-img1.png\" alt=\"user1\" />\n                <div>Erin Parkers</div>\n                <div>Starting: $300</div>\n                <div>Profit: $23,145</div>\n            </div>\n        </a>\n        <a class=\"card-item\" href=\"#\">\n            <div class=\"card-item2\">\n                <img class=\"\" src=\"./assets/img/section4-img2.png\" alt=\"user2\" />\n                <div>Gabriel Massie</div>\n                <div>Starting: $300</div>\n                <div>Profit: $23,145</div>\n            </div>\n        </a>\n        <a class=\"card-item\" href=\"#\">\n            <div class=\"card-item2\">\n                <img class=\"\" src=\"./assets/img/section4-img3.png\" alt=\"user3\" />\n                <div>Imogen Haddon</div>\n                <div>Starting: $300</div>\n                <div>Profit: $23,145</div>\n            </div>\n        </a>\n        <a class=\"card-item\" href=\"#\">\n            <div class=\"card-item2\">\n                <img class=\"\" src=\"./assets/img/section4-img4.png\" alt=\"user4\" />\n                <div>Benjamin Potts</div>\n                <div>Starting: $300</div>\n                <div>Profit: $23,145</div>\n            </div>\n        </a>\n    </div>\n\n    <div class=\"table\">\n        <div class=\"table-points\">\n            <div class=\"table-points-item\">Open: <span class=\"point\">7</span></div>\n            <div class=\"table-points-item\">Won: <span class=\"point\">320</span></div>\n            <div class=\"table-points-item\">Lost: <span class=\"point\">295</span></div>\n            <div class=\"table-points-item\">Total: <span class=\"point\">622</span></div>\n        </div>\n        <div class=\"table-info\">\n            <div class=\"table-info-item\">\n                <img class=\"table-info-img\" src=\"./assets/img/section4-img5.png\" alt=\"table-logo\" /> <span class=\"bold\"> Trade history</span>\n            </div>\n            <div class=\"table-info-item right\">\n                <img class=\"table-info-img\" src=\"./assets/img/reload.png\" alt=\"table-logo\" /> <span>last apdate: </span>\n            </div>\n            <div class=\"for-mobile\">\n                <table>\n                    <thead>\n                        <tr>\n                            <th>Asset</th>\n                            <th>Position</th>\n                            <th>Amount</th>\n                            <th>Entry Rate</th>\n                            <th>Closing Rate</th>\n                            <th>Payout</th>\n                            <th>Profit</th>\n                            <th>Date</th>\n                            <th>Status</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of users\">\n                            <td class=\"td-assets\">{{item.Asset}}</td>\n                            <td class=\"td-position\">{{item.Position}}</td>\n                            <td>${{item.Amount}}</td>\n                            <td>{{item.ERate}}</td>\n                            <td>{{item.CRate}}</td>\n                            <td>{{item.Payout}}</td>\n                            <td>{{item.Profit}}</td>\n                            <td>{{item.Date}}</td>\n                            <td>\n                                <div class=\"td-status\">{{item.Status}} </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>USD/ZAR</td>\n                            <td>Put</td>\n                            <td>$100</td>\n                            <td>12.08325</td>\n                            <td>12.08325</td>\n                            <td>-</td>\n                            <td>-74.000</td>\n                            <td>26/01/2015 00:24</td>\n                            <td>Lost</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n\n            <div class=\"table-info-item\">\n                Showing 1 of\n            </div>\n            <div class=\"table-info-item right\">\n                12345 >\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"sec2-text-main\">\n        <h3 class=\"text-main \">Frequently Asked Questions</h3>\n        <hr class=\"hr\" />\n        <p>What kind of results can I expect?</p>\n        <p>How many hours per day do I need to work?</p>\n        <hr class=\"hr\" />\n        <p><span class=\"orange\">Is there a maximum that I can make?</span> <br />\n            <span class=\"sec2-text-small\">Our members typically profit a minimum of $1,000 each and every single day. That amount is to about $30,000 a month. And About $365,000a year.</span>\n        </p>\n        <hr class=\"hr\" />\n        <p><span class=\"orange\">How much does this cost?</span> <br />\n            <span class=\"sec2-text-small\">The 1K Daily Profit software will cost you absolutly nothing. I am sharing this with you absolutly FREE. All you have to do is fill the form below to register to become a member.</span>\n        </p>\n        <hr class=\"hr\" />\n        <p>Is this like MLM, Affilate Marketing or Forex?</p>\n        <p>Are there any fees?</p>\n        <hr class=\"hr\" />\n        <br />\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/s1-section2/s1-section2.component.ts":
/*!******************************************************!*\
  !*** ./src/app/s1-section2/s1-section2.component.ts ***!
  \******************************************************/
/*! exports provided: S1Section2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1Section2Component", function() { return S1Section2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_table_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/table-users */ "./src/app/table-users.ts");



var S1Section2Component = /** @class */ (function () {
    function S1Section2Component() {
        this.users = _app_table_users__WEBPACK_IMPORTED_MODULE_2__["USERS"];
    }
    S1Section2Component.prototype.ngOnInit = function () {
    };
    S1Section2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-s1-section2',
            template: __webpack_require__(/*! ./s1-section2.component.html */ "./src/app/s1-section2/s1-section2.component.html"),
            styles: [__webpack_require__(/*! ./s1-section2.component.css */ "./src/app/s1-section2/s1-section2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], S1Section2Component);
    return S1Section2Component;
}());



/***/ }),

/***/ "./src/app/s2-footer/s2-footer.component.css":
/*!***************************************************!*\
  !*** ./src/app/s2-footer/s2-footer.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.footer {\r\n    margin: 0;\r\n    padding: 0;\r\n    position: relative;\r\n}\r\n\r\n.big-img {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: url('footer-img1.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.container {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    width: 880px;\r\n}\r\n\r\n/* Add styles to the form container */\r\n\r\n.form-container {\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 20px 0;\r\n}\r\n\r\n.footer-title {\r\n    margin: 0;\r\n    padding: 24px 0 0 0;\r\n    width: 100%;\r\n    display: relative;\r\n    font-size: 32px;\r\n    text-align: center;\r\n    font-family: \"Khand\", sans-serif;\r\n    color: rgb(255, 255, 255);\r\n    line-height: 1.2;\r\n}\r\n\r\n.title {\r\n    text-transform: uppercase;\r\n    font-weight: bolder;\r\n}\r\n\r\n.footer-flex-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.point {\r\n    width: 26px;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text],\r\ninput[type=password] {\r\n    width: 100%;\r\n    padding: 24px 18px;\r\n    margin: 0px 0 16px 0;\r\n    font-size: 16px;\r\n    font-family: \"RobotoCondensed\", sans-serif;\r\n    color: rgb(53, 53, 53);\r\n    line-height: 1.3;\r\n    border: none;\r\n    border-radius: 6px;\r\n    background: #f1f1f1;\r\n}\r\n\r\ninput[type=text]:focus,\r\ninput[type=password]:focus {\r\n    background-color: #ddd;\r\n    outline: none;\r\n}\r\n\r\ninput.ng-touched.ng-invalid {\r\n    border: solid red 2px;\r\n}\r\n\r\ninput.ng-touched.ng-valid {\r\n    border: solid green 2px;\r\n}\r\n\r\n/* Set a style for the submit button */\r\n\r\n.btn {\r\n    margin: 0;\r\n    padding: 12px 0;\r\n    border: 10px solid #b8b2be;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    background-color: #ffd06a;\r\n    background-image: linear-gradient(#ffd06a, #ffae00);\r\n    opacity: 0.95;\r\n    text-transform: uppercase;\r\n    font-size: 72px;\r\n    font-family: \"Khand\", sans-serif;\r\n    color: rgb(80, 41, 34);\r\n    font-weight: bolder;\r\n    line-height: 1;\r\n}\r\n\r\n.btn:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.sec1-text {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n}\r\n\r\n.sec1-text-small {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    font-size: 16px;\r\n    font-family: \"Roboto Condensed\", sans-serif;\r\n    color: rgb(254, 254, 254);\r\n    line-height: 1.2;\r\n    text-align: center;\r\n}\r\n\r\n.sec1-flex-container {\r\n    width: 100%;\r\n    margin: 12px auto;\r\n    padding: 16px 0 22px 0;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-self: center;\r\n    align-items: baseline;\r\n}\r\n\r\n.logo {\r\n    margin: 0;\r\n    padding: 0 24px;\r\n}\r\n\r\n.footer-text-small {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    font-size: 12px;\r\n    font-family: \"Roboto\", sans-serif;\r\n    color: rgb(255, 255, 255);\r\n    line-height: 1.2;\r\n    text-align: center;\r\n}\r\n\r\n.footer-text-big {\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 14px;\r\n    font-family: \"Roboto\", sans-serif;\r\n    color: rgb(255, 255, 255);\r\n    line-height: 2;\r\n    margin: 0;\r\n    padding: 32px 0;\r\n}\r\n\r\n@media screen and (max-width: 1050px) {\r\n    body {\r\n        width: 100%;\r\n    }\r\n    .container {\r\n        width: 100%;\r\n        padding: 0 12px;\r\n    }\r\n    .sec1-text-main {\r\n        width: 100%;\r\n    }\r\n    .footer-flex-container {\r\n        flex-direction: row;\r\n    }\r\n    .btn {\r\n        font-size: 32px;\r\n    }\r\n    .sec1-flex-container {\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-self: center;\r\n        align-items: baseline;\r\n    }\r\n    .logo {\r\n        margin: 0 auto;\r\n        padding: 12px 24px;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 850px) {\r\n    body {\r\n        width: 100%;\r\n    }\r\n    .container {\r\n        width: 100%;\r\n        padding: 0 12px;\r\n    }\r\n    .sec1-text-main {\r\n        width: 100%;\r\n    }\r\n    .footer-flex-container {\r\n        flex-direction: row;\r\n    }\r\n    .btn {\r\n        font-size: 32px;\r\n    }\r\n    .sec1-flex-container {\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-self: center;\r\n        align-items: baseline;\r\n    }\r\n    .logo {\r\n        margin: 0 auto;\r\n        padding: 12px 24px;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    body {\r\n        margin: 0;\r\n        padding: 0;\r\n        width: 100%;\r\n    }\r\n    .container {\r\n        width: 100%;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .footer-title {\r\n        padding: 24px 16px 0 16px;\r\n    }\r\n    .sec1-text-main {\r\n        width: 100%;\r\n    }\r\n    .form-container {\r\n        width: 100%;\r\n        margin: 0;\r\n        padding: 20px 16px;\r\n    }\r\n    .footer-flex-container {\r\n        flex-direction: column;\r\n    }\r\n    .btn {\r\n        font-size: 32px;\r\n    }\r\n    .sec1-flex-container {\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-self: center;\r\n        align-items: baseline;\r\n    }\r\n    .logo {\r\n        margin: 0 auto;\r\n        padding: 12px 24px;\r\n        height: 100%;\r\n        width: auto;\r\n        text-align: center;\r\n    }\r\n    .footer-text-small {\r\n        padding: 0 16px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvczItZm9vdGVyL3MyLWZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGtDQUFrQztDQUNyQzs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxtQ0FBb0Q7SUFDcEQsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7Q0FDaEI7O0FBR0Qsc0NBQXNDOztBQUV0QztJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLDBCQUEwQjtJQUMxQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztDQUNkOztBQUdELDZCQUE2Qjs7QUFFN0I7O0lBRUksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQyx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0NBQ3ZCOztBQUVEOztJQUVJLHVCQUF1QjtJQUN2QixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksd0JBQXdCO0NBQzNCOztBQUdELHVDQUF1Qzs7QUFFdkM7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsb0RBQW9EO0lBQ3BELGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDRDQUE0QztJQUM1QywwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSTtRQUNJLFlBQVk7S0FDZjtJQUNEO1FBQ0ksWUFBWTtRQUNaLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksWUFBWTtLQUNmO0lBQ0Q7UUFDSSxvQkFBb0I7S0FDdkI7SUFDRDtRQUNJLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QixtQkFBbUI7UUFDbkIsc0JBQXNCO0tBQ3pCO0lBQ0Q7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixtQkFBbUI7S0FDdEI7Q0FDSjs7QUFFRDtJQUNJO1FBQ0ksWUFBWTtLQUNmO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSxZQUFZO0tBQ2Y7SUFDRDtRQUNJLG9CQUFvQjtLQUN2QjtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSxvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLG1CQUFtQjtRQUNuQixzQkFBc0I7S0FDekI7SUFDRDtRQUNJLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLG1CQUFtQjtLQUN0QjtDQUNKOztBQUVEO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLFlBQVk7S0FDZjtJQUNEO1FBQ0ksWUFBWTtRQUNaLFVBQVU7UUFDVixXQUFXO0tBQ2Q7SUFDRDtRQUNJLDBCQUEwQjtLQUM3QjtJQUNEO1FBQ0ksWUFBWTtLQUNmO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osVUFBVTtRQUNWLG1CQUFtQjtLQUN0QjtJQUNEO1FBQ0ksdUJBQXVCO0tBQzFCO0lBQ0Q7UUFDSSxnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsbUJBQW1CO1FBQ25CLHNCQUFzQjtLQUN6QjtJQUNEO1FBQ0ksZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsWUFBWTtRQUNaLG1CQUFtQjtLQUN0QjtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9zMi1mb290ZXIvczItZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5iaWctaW1nIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvZm9vdGVyLWltZzEucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogODgwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBBZGQgc3R5bGVzIHRvIHRoZSBmb3JtIGNvbnRhaW5lciAqL1xyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG4uZm9vdGVyLXRpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDI0cHggMCAwIDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiS2hhbmRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5mb290ZXItZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5wb2ludCB7XHJcbiAgICB3aWR0aDogMjZweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSxcclxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDE4cHg7XHJcbiAgICBtYXJnaW46IDBweCAwIDE2cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b0NvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYig1MywgNTMsIDUzKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcclxuICAgIGJvcmRlcjogc29saWQgcmVkIDJweDtcclxufVxyXG5cclxuaW5wdXQubmctdG91Y2hlZC5uZy12YWxpZCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIGdyZWVuIDJweDtcclxufVxyXG5cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciB0aGUgc3VibWl0IGJ1dHRvbiAqL1xyXG5cclxuLmJ0biB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgI2I4YjJiZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDA2YTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZmZkMDZhLCAjZmZhZTAwKTtcclxuICAgIG9wYWNpdHk6IDAuOTU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiA3MnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiS2hhbmRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2IoODAsIDQxLCAzNCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnNlYzEtdGV4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnNlYzEtdGV4dC1zbWFsbCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogcmdiKDI1NCwgMjU0LCAyNTQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYzEtZmxleC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEycHggYXV0bztcclxuICAgIHBhZGRpbmc6IDE2cHggMCAyMnB4IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbn1cclxuXHJcbi5mb290ZXItdGV4dC1zbWFsbCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9vdGVyLXRleHQtYmlnIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDMycHggMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgICBib2R5IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgIH1cclxuICAgIC5zZWMxLXRleHQtbWFpbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLWZsZXgtY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgfVxyXG4gICAgLnNlYzEtZmxleC1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIH1cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgYm9keSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgICB9XHJcbiAgICAuc2VjMS10ZXh0LW1haW4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIH1cclxuICAgIC5zZWMxLWZsZXgtY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGJvZHkge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAyNHB4IDE2cHggMCAxNnB4O1xyXG4gICAgfVxyXG4gICAgLnNlYzEtdGV4dC1tYWluIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTZweDtcclxuICAgIH1cclxuICAgIC5mb290ZXItZmxleC1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAuYnRuIHtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB9XHJcbiAgICAuc2VjMS1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci10ZXh0LXNtYWxsIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/s2-footer/s2-footer.component.html":
/*!****************************************************!*\
  !*** ./src/app/s2-footer/s2-footer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"big-img\">\n        <div class=\"container\">\n            <div class=\"footer-title\">Enter your full name and email address in the form below to get immediate <span class=\"title\"> free </span> access to the <span class=\"title\"> dubai lifestyle app </span></div>\n            <form class=\"form-container\" [formGroup]=\"myForm\" novalidate (ngSubmit)=\"submit(first_name, email)\">\n                <div class=\"footer-flex-container \">\n                    <input type=\"text\" placeholder=\"Enter Your Name\" name=\"first_name\" formControlName=\"first_name\" [(ngModel)]=\"first_name\" />\n                    <div class=\"point\"></div>\n                    <input type=\"text\" placeholder=\"Enter Your Email\" name=\"email\" formControlName=\"email\" [(ngModel)]=\"email\" />\n                </div>\n                <button class=\"btn\" [disabled]=\"myForm.invalid\"> get free access </button>\n            </form>\n            <div class=\"sec1-text\">\n                <p class=\"sec1-text-small\">We respect your privacy and your information is 100% secure.</p>\n                <div class=\"sec1-logo sec1-flex-container\">\n                    <img class=\"logo\" src=\"./assets/img/section-img1.png\" alt=\"logo McAfee\" />\n                    <img class=\"logo\" src=\"./assets/img/section-img2.png\" alt=\"logo VeriSign\" />\n                    <img class=\"logo\" src=\"./assets/img/section-img3.png\" alt=\"logo Symantec\" />\n                    <img class=\"logo\" src=\"./assets/img/section-img4.png\" alt=\"logo GeoTrust\" />\n                    <img class=\"logo\" src=\"./assets/img/section-img5.png\" alt=\"logo SSl\" />\n                </div>\n                <p class=\"footer-text-small\">Binary options present a significant opportunity for you to make serious earning, but like any investment, they present an element of risk. Potential lots of full of partial funds should be considereted at all times befor making any trade.\n                    We urge you to explore individual tax liability laws in your country of reading and recommend reading our Terms of Service for more information. Please note it is illegal under U.S. law to solicit the purchase and sale of commodit\n                    options unless explicitly listed for trading on a CFTC exchange or Legally exempt.</p>\n                <p class=\"footer-text-big\">Terms | Privacy | Support</p>\n            </div>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/s2-footer/s2-footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/s2-footer/s2-footer.component.ts ***!
  \**************************************************/
/*! exports provided: S2FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S2FooterComponent", function() { return S2FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/user.service */ "./src/app/user.service.ts");





var S2FooterComponent = /** @class */ (function () {
    function S2FooterComponent(route, router, dataService) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'first_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z]{2,}')]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')])
        });
        this.params = route.snapshot.params['id'];
    }
    S2FooterComponent.prototype.ngOnInit = function () {
    };
    S2FooterComponent.prototype.submit = function (first_name, email) {
        first_name = sessionStorage.setItem('item1', first_name);
        email = sessionStorage.setItem('item2', email);
        this.dataService.addData(first_name, email);
        alert('Your autorithation will continue...');
        this.router.navigate(['step2']);
    };
    S2FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-s2-footer',
            template: __webpack_require__(/*! ./s2-footer.component.html */ "./src/app/s2-footer/s2-footer.component.html"),
            providers: [_app_user_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]],
            styles: [__webpack_require__(/*! ./s2-footer.component.css */ "./src/app/s2-footer/s2-footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _app_user_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], S2FooterComponent);
    return S2FooterComponent;
}());



/***/ }),

/***/ "./src/app/s2-header/s2-header.component.css":
/*!***************************************************!*\
  !*** ./src/app/s2-header/s2-header.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.header {\r\n    margin: 0;\r\n    padding: 0;\r\n    position: relative;\r\n}\r\n\r\n.big-img {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: url('header2-img1.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n/*\r\n.nav {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: rgba(153, 153, 153, 0.692);\r\n    position: relative;\r\n    color: white;\r\n}\r\n\r\n.nav-flex-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.nav-item {\r\n    margin: 8px 4px;\r\n    padding: 6px 4px;\r\n    display: inline;\r\n    font-size: 18px;\r\n    font-family: \"RobotoCondensed\", sans-serif;\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\n.left {\r\n    width: 25%;\r\n    text-align: left;\r\n    float: left;\r\n    line-height: 1.25;\r\n}\r\n\r\n.nav-item-title-left {\r\n    margin: 0;\r\n    padding: 0 6px;\r\n    font-size: 36px;\r\n    display: inline;\r\n    float: left;\r\n}\r\n\r\n.nav-img1 {\r\n    padding: 2px 4px 0 4px;\r\n    height: 20px;\r\n}\r\n\r\n.center {\r\n    margin: 0 auto;\r\n    padding: 16px 16px;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 28px;\r\n    text-align: center;\r\n    font-family: \"Monoton\", cursive;\r\n    color: rgb(255, 255, 255);\r\n    word-spacing: 0.175em;\r\n}\r\n\r\n.right {\r\n    width: 30%;\r\n    text-align: right;\r\n    float: right;\r\n    line-height: 1.4;\r\n}\r\n\r\n.nav-item-title-right {\r\n    margin: 0;\r\n    padding: 0px 6px;\r\n    font-size: 36px;\r\n    display: inline;\r\n    float: right;\r\n}\r\n*/\r\n\r\n.container {\r\n    width: 880px;\r\n    margin: 0 auto;\r\n    padding: 80px 0 0 0;\r\n}\r\n\r\n.header-title {\r\n    margin: 0;\r\n    padding: 8px 0;\r\n    width: 100%;\r\n    display: relative;\r\n    font-size: 42px;\r\n    text-align: center;\r\n    font-family: \"Khand\", sans-serif;\r\n    color: rgb(255, 255, 255);\r\n    line-height: 0.983;\r\n    font-stretch: ultra-expanded;\r\n    word-spacing: 0.075em;\r\n}\r\n\r\n.title {\r\n    text-transform: uppercase;\r\n    font-weight: bolder;\r\n}\r\n\r\n.header-flex-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    margin: 8px 0;\r\n    padding: 0;\r\n    width: 100%;\r\n}\r\n\r\n.flex-item1 {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n}\r\n\r\n.video {\r\n    height: 380px;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n}\r\n\r\n#sm-video {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.flex-item2 {\r\n    margin: 16px 0;\r\n    padding: 0;\r\n    width: 100%;\r\n}\r\n\r\n/* Add styles to the form container */\r\n\r\n.form-container {\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text],\r\ninput[type=password] {\r\n    width: 100%;\r\n    padding: 24px 18px;\r\n    margin: 0px 0 16px 0;\r\n    font-size: 16px;\r\n    font-family: \"Roboto Condensed\", sans-serif;\r\n    color: rgb(53, 53, 53);\r\n    line-height: 1.3;\r\n    border: none;\r\n    border-radius: 6px;\r\n    background: #f1f1f1;\r\n}\r\n\r\ninput[type=text]:focus,\r\ninput[type=password]:focus {\r\n    background-color: #ddd;\r\n    outline: none;\r\n}\r\n\r\ninput.ng-touched.ng-invalid {\r\n    border: solid red 2px;\r\n}\r\n\r\ninput.ng-touched.ng-valid {\r\n    border: solid green 2px;\r\n}\r\n\r\n.point {\r\n    width: 32px;\r\n}\r\n\r\n/* Set a style for the submit button */\r\n\r\n.btn {\r\n    margin: 0;\r\n    padding: 12px 0;\r\n    border: 10px solid #b8b2be;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    background-color: #ffd06a;\r\n    background-image: linear-gradient(#ffd06a, #ffae00);\r\n    opacity: 0.95;\r\n    text-transform: uppercase;\r\n    font-size: 72px;\r\n    font-family: \"Khand\", sans-serif;\r\n    color: rgb(80, 41, 34);\r\n    font-weight: bolder;\r\n    line-height: 1;\r\n}\r\n\r\n.btn:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.sec1-text-small {\r\n    margin: 12px auto;\r\n    padding: 12px;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    font-family: \"RobotoCondensed\", sans-serif;\r\n    color: rgb(254, 254, 254);\r\n}\r\n\r\n.sec1-flex-container {\r\n    width: 100%;\r\n    margin: 12px auto;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-self: center;\r\n    align-items: baseline;\r\n}\r\n\r\n.logo {\r\n    margin: 0;\r\n    padding: 0 24px 24px 0;\r\n}\r\n\r\n@media screen and (max-width: 1050px) {\r\n    .container {\r\n        width: 100%;\r\n        padding: 60px 12px 12px 12px;\r\n    }\r\n    .header-flex-container {\r\n        flex-direction: row;\r\n        justify-content: center;\r\n    }\r\n    .form-container {\r\n        flex-direction: row;\r\n        justify-content: center;\r\n    }\r\n    .btn {\r\n        font-size: 32px;\r\n    }\r\n    .sec1-flex-container {\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-self: center;\r\n        align-items: baseline;\r\n    }\r\n    .logo {\r\n        margin: 0 auto;\r\n        padding: 12px 24px;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 850px) {\r\n    .container {\r\n        width: 100%;\r\n        padding: 60px 12px 12px 12px;\r\n    }\r\n    .header-flex-container {\r\n        flex-direction: row;\r\n        justify-content: center;\r\n    }\r\n    .form-container {\r\n        flex-direction: row;\r\n        justify-content: center;\r\n    }\r\n    .btn {\r\n        font-size: 32px;\r\n    }\r\n    .sec1-flex-container {\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-self: center;\r\n        align-items: baseline;\r\n    }\r\n    .logo {\r\n        margin: 0 auto;\r\n        padding: 12px 24px;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    body {\r\n        width: 100%;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .container {\r\n        width: 100%;\r\n        margin: 0;\r\n        padding: 60px 0 0 0;\r\n    }\r\n    .header-title {\r\n        padding: 8px 16px;\r\n    }\r\n    .video {\r\n        padding: 0 16px;\r\n    }\r\n    .flex-item2 {\r\n        padding: 0 16px;\r\n    }\r\n    .form-container {\r\n        flex-direction: column;\r\n        justify-content: center;\r\n    }\r\n    .btn {\r\n        font-size: 32px;\r\n    }\r\n    .sec1-flex-container {\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-self: center;\r\n        align-items: baseline;\r\n    }\r\n    .logo {\r\n        margin: 0 auto;\r\n        padding: 12px 0;\r\n        height: 100%;\r\n        width: auto;\r\n        text-align: center;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvczItaGVhZGVyL3MyLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxvQ0FBcUQ7SUFDckQsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix1QkFBdUI7Q0FDMUI7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFFRTs7QUFFRjtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtDQUNmOztBQUVEO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztDQUNkOztBQUVEO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtDQUNmOztBQUVEO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0NBQ2Y7O0FBR0Qsc0NBQXNDOztBQUV0QztJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0NBQzNCOztBQUdELDZCQUE2Qjs7QUFFN0I7O0lBRUksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDRDQUE0QztJQUM1Qyx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0NBQ3ZCOztBQUVEOztJQUVJLHVCQUF1QjtJQUN2QixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUdELHVDQUF1Qzs7QUFFdkM7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsb0RBQW9EO0lBQ3BELGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsMkNBQTJDO0lBQzNDLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0k7UUFDSSxZQUFZO1FBQ1osNkJBQTZCO0tBQ2hDO0lBQ0Q7UUFDSSxvQkFBb0I7UUFDcEIsd0JBQXdCO0tBQzNCO0lBQ0Q7UUFDSSxvQkFBb0I7UUFDcEIsd0JBQXdCO0tBQzNCO0lBQ0Q7UUFDSSxnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsbUJBQW1CO1FBQ25CLHNCQUFzQjtLQUN6QjtJQUNEO1FBQ0ksZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osbUJBQW1CO0tBQ3RCO0NBQ0o7O0FBRUQ7SUFDSTtRQUNJLFlBQVk7UUFDWiw2QkFBNkI7S0FDaEM7SUFDRDtRQUNJLG9CQUFvQjtRQUNwQix3QkFBd0I7S0FDM0I7SUFDRDtRQUNJLG9CQUFvQjtRQUNwQix3QkFBd0I7S0FDM0I7SUFDRDtRQUNJLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QixtQkFBbUI7UUFDbkIsc0JBQXNCO0tBQ3pCO0lBQ0Q7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixtQkFBbUI7S0FDdEI7Q0FDSjs7QUFFRDtJQUNJO1FBQ0ksWUFBWTtRQUNaLFVBQVU7UUFDVixXQUFXO0tBQ2Q7SUFDRDtRQUNJLFlBQVk7UUFDWixVQUFVO1FBQ1Ysb0JBQW9CO0tBQ3ZCO0lBQ0Q7UUFDSSxrQkFBa0I7S0FDckI7SUFDRDtRQUNJLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0lBQ0Q7UUFDSSx1QkFBdUI7UUFDdkIsd0JBQXdCO0tBQzNCO0lBQ0Q7UUFDSSxnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsbUJBQW1CO1FBQ25CLHNCQUFzQjtLQUN6QjtJQUNEO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsWUFBWTtRQUNaLG1CQUFtQjtLQUN0QjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvczItaGVhZGVyL3MyLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJpZy1pbWcge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9oZWFkZXIyLWltZzEucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuXHJcbi8qXHJcbi5uYXYge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTUzLCAxNTMsIDE1MywgMC42OTIpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2LWZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAgICBtYXJnaW46IDhweCA0cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggNHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbn1cclxuXHJcbi5uYXYtaXRlbS10aXRsZS1sZWZ0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5uYXYtaW1nMSB7XHJcbiAgICBwYWRkaW5nOiAycHggNHB4IDAgNHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTZweCAxNnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbm90b25cIiwgY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDAuMTc1ZW07XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG59XHJcblxyXG4ubmF2LWl0ZW0tdGl0bGUtcmlnaHQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMHB4IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4qL1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODgwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDgwcHggMCAwIDA7XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiS2hhbmRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBsaW5lLWhlaWdodDogMC45ODM7XHJcbiAgICBmb250LXN0cmV0Y2g6IHVsdHJhLWV4cGFuZGVkO1xyXG4gICAgd29yZC1zcGFjaW5nOiAwLjA3NWVtO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW0xIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnZpZGVvIHtcclxuICAgIGhlaWdodDogMzgwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuI3NtLXZpZGVvIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmxleC1pdGVtMiB7XHJcbiAgICBtYXJnaW46IDE2cHggMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8qIEFkZCBzdHlsZXMgdG8gdGhlIGZvcm0gY29udGFpbmVyICovXHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDI0cHggMThweDtcclxuICAgIG1hcmdpbjogMHB4IDAgMTZweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYig1MywgNTMsIDUzKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcclxuICAgIGJvcmRlcjogc29saWQgcmVkIDJweDtcclxufVxyXG5cclxuaW5wdXQubmctdG91Y2hlZC5uZy12YWxpZCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIGdyZWVuIDJweDtcclxufVxyXG5cclxuLnBvaW50IHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG59XHJcblxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXHJcblxyXG4uYnRuIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjYjhiMmJlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkMDZhO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNmZmQwNmEsICNmZmFlMDApO1xyXG4gICAgb3BhY2l0eTogMC45NTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDcycHg7XHJcbiAgICBmb250LWZhbWlseTogXCJLaGFuZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYig4MCwgNDEsIDM0KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uc2VjMS10ZXh0LXNtYWxsIHtcclxuICAgIG1hcmdpbjogMTJweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b0NvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYigyNTQsIDI1NCwgMjU0KTtcclxufVxyXG5cclxuLnNlYzEtZmxleC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEycHggYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwIDI0cHggMjRweCAwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDYwcHggMTJweCAxMnB4IDEycHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLWZsZXgtY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgfVxyXG4gICAgLnNlYzEtZmxleC1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIH1cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogNjBweCAxMnB4IDEycHggMTJweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItZmxleC1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYnRuIHtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB9XHJcbiAgICAuc2VjMS1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBib2R5IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiA2MHB4IDAgMCAwO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICB9XHJcbiAgICAudmlkZW8ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIH1cclxuICAgIC5mbGV4LWl0ZW0yIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYnRuIHtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB9XHJcbiAgICAuc2VjMS1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/s2-header/s2-header.component.html":
/*!****************************************************!*\
  !*** ./src/app/s2-header/s2-header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <div class=\"big-img\">\n        <!--\n            <nav class=\"nav nav-flex-container\">\n            <div class=\"nav-item left \">\n                <div class=\"nav-item-title-left\">1</div>\n                Spot Remaining <br/> in <img class=\"nav-img1\" src=\"../../assets/img/flagIsrael.svg\" /> ISREAL\n            </div>\n            <div class=\"nav-item center\">dubai lifestyle app</div>\n            <div class=\"nav-item right\">\n                <div class=\"nav-item-title-right\">10:03</div>\n                Time Remaining <br /> OFFER EXPIRES\n            </div>\n        </nav>\n        -->\n        <div class=\"container\">\n            <div class=\"header-title\">Be One Of <span class=\"title\">100 beta testers</span> To Profit <br /> From The <span class=\"title\">dubai lifestyle app</span>\n            </div>\n            <div class=\"flex-item1 \">\n                <div class=\"video \">\n                    <embed id=\"sm-video\" src=\"https://www.youtube.com/embed/HkyVTxH2fIM\">\n                </div>\n            </div>\n            <div class=\"flex-item2 \">\n                <form class=\"form\" [formGroup]=\"myForm\" novalidate (ngSubmit)=\"submit(first_name, email)\">\n                    <div class=\"form-container\">\n                        <input type=\"text\" placeholder=\"Enter Your Name\" name=\"first_name\" formControlName=\"first_name\" [(ngModel)]=\"first_name\" />\n                        <div class=\"point\"></div>\n                        <input type=\"text\" placeholder=\"Enter Your Email\" name=\"email\" formControlName=\"email\" [(ngModel)]=\"email\" />\n                    </div>\n                    <button class=\"btn\" [disabled]=\"myForm.invalid\"> get free access </button>\n                </form>\n            </div>\n            <p class=\"sec1-text-small\">We respect your privacy and your information is 100% secure.</p>\n            <div class=\"sec1-logo sec1-flex-container\">\n                <img class=\"logo\" src=\"./assets/img/section-img1.png\" alt=\"logo McAfee\" />\n                <img class=\"logo\" src=\"./assets/img/section-img2.png\" alt=\"logo VeriSign\" />\n                <img class=\"logo\" src=\"./assets/img/section-img3.png\" alt=\"logo Symantec\" />\n                <img class=\"logo\" src=\"./assets/img/section-img4.png\" alt=\"logo GeoTrust\" />\n                <img class=\"logo\" src=\"./assets/img/section-img5.png\" alt=\"logo SSl\" />\n            </div>\n        </div>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/s2-header/s2-header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/s2-header/s2-header.component.ts ***!
  \**************************************************/
/*! exports provided: S2HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S2HeaderComponent", function() { return S2HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/user.service */ "./src/app/user.service.ts");





var S2HeaderComponent = /** @class */ (function () {
    function S2HeaderComponent(route, router, dataService) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'first_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z]{2,}')]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')])
        });
        this.params = route.snapshot.params['id'];
    }
    S2HeaderComponent.prototype.ngOnInit = function () {
    };
    S2HeaderComponent.prototype.submit = function (first_name, email) {
        first_name = sessionStorage.setItem('item1', first_name);
        email = sessionStorage.setItem('item2', email);
        this.dataService.addData(first_name, email);
        console.log(first_name);
        console.log(email);
        console.log(this.myForm);
        console.log(this.myForm.value);
        alert('Your autorithation will continue...');
        this.router.navigate(['step2']);
    };
    S2HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-s2-header',
            template: __webpack_require__(/*! ./s2-header.component.html */ "./src/app/s2-header/s2-header.component.html"),
            providers: [_app_user_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]],
            styles: [__webpack_require__(/*! ./s2-header.component.css */ "./src/app/s2-header/s2-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _app_user_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], S2HeaderComponent);
    return S2HeaderComponent;
}());



/***/ }),

/***/ "./src/app/s2-section1/s2-section1.component.css":
/*!*******************************************************!*\
  !*** ./src/app/s2-section1/s2-section1.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    margin: 0;\r\n    padding: 0;\r\n    color: rgb(73, 73, 73);\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.hr {\r\n    margin: 4px 0;\r\n    padding: 0;\r\n}\r\n\r\n.about {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    width: 1050px;\r\n}\r\n\r\n.about-team {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n}\r\n\r\n.text-main-title-brown {\r\n    margin: 0;\r\n    padding: 12px 0 0 0;\r\n    font-size: 42px;\r\n    font-family: \"Khand\", sans-serif;\r\n    color: rgb(78, 42, 0);\r\n    text-align: center;\r\n}\r\n\r\n.about-title {\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n    font-size: 24px;\r\n    font-family: \"Khand\", sans-serif;\r\n    line-height: 0.6;\r\n    font-weight: 300;\r\n}\r\n\r\n.img-about-me {\r\n    margin: 0 auto;\r\n    padding: 24px 0;\r\n}\r\n\r\n.sec1-text-main {\r\n    width: 880px;\r\n    margin: 0 auto;\r\n    padding: 12px;\r\n    font-size: 22px;\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n    color: rgb(73, 73, 73);\r\n    text-align: center;\r\n}\r\n\r\n.img-team {\r\n    margin: 0 auto;\r\n    padding: 24px 0 0 0;\r\n}\r\n\r\n.text-main-title {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n}\r\n\r\n.black {\r\n    color: #494949;\r\n}\r\n\r\n.orange {\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #f3a345;\r\n}\r\n\r\n.sec1-text-prize {\r\n    font-size: 42px;\r\n}\r\n\r\n.bold {\r\n    font-weight: bold;\r\n}\r\n\r\n.sec1-team {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.comments {\r\n    margin: 0;\r\n    padding: 24px 0;\r\n    list-style: none;\r\n    text-align: left;\r\n}\r\n\r\n.txt {\r\n    margin: 0;\r\n    padding: 12px 0;\r\n}\r\n\r\n.txt-autor {\r\n    margin: 0;\r\n    padding: 0;\r\n    color: inherit;\r\n    font-family: inherit;\r\n    font-size: 14px;\r\n}\r\n\r\n.autor {\r\n    color: #448fd1;\r\n}\r\n\r\n.checked {\r\n    color: orange;\r\n}\r\n\r\n.txt-status {\r\n    margin: 0;\r\n    padding: 4px 0;\r\n    color: orange;\r\n    font-family: inherit;\r\n    font-size: 14px;\r\n}\r\n\r\n.txt-comment {\r\n    margin: 0;\r\n    padding: 12px 0;\r\n    color: inherit;\r\n    font-family: inherit;\r\n    font-size: 16px;\r\n}\r\n\r\n@media screen and (max-width: 1050px) {\r\n    body {\r\n        width: 100%;\r\n    }\r\n    .about {\r\n        width: 100%;\r\n        padding: 0 12px;\r\n    }\r\n    .sec1-text-main {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 850px) {\r\n    body {\r\n        width: 100%;\r\n    }\r\n    .about {\r\n        width: 100%;\r\n        margin: 0 12px;\r\n        padding: 0;\r\n    }\r\n    .sec1-text-main {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    .about {\r\n        width: 100%;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .sec1-text-main {\r\n        width: 100%;\r\n        padding: 12px 0;\r\n    }\r\n    .txt {\r\n        margin: 0;\r\n        padding: 12px 16px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvczItc2VjdGlvbjEvczItc2VjdGlvbjEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLDRDQUE0QztDQUMvQzs7QUFFRDtJQUNJLFVBQVU7SUFDVixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsV0FBVztDQUNkOztBQUVEO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLFVBQVU7SUFDVixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSTtRQUNJLFlBQVk7S0FDZjtJQUNEO1FBQ0ksWUFBWTtRQUNaLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksWUFBWTtLQUNmO0NBQ0o7O0FBRUQ7SUFDSTtRQUNJLFlBQVk7S0FDZjtJQUNEO1FBQ0ksWUFBWTtRQUNaLGVBQWU7UUFDZixXQUFXO0tBQ2Q7SUFDRDtRQUNJLFlBQVk7S0FDZjtDQUNKOztBQUVEO0lBQ0k7UUFDSSxZQUFZO1FBQ1osVUFBVTtRQUNWLFdBQVc7S0FDZDtJQUNEO1FBQ0ksWUFBWTtRQUNaLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksVUFBVTtRQUNWLG1CQUFtQjtLQUN0QjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvczItc2VjdGlvbjEvczItc2VjdGlvbjEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiByZ2IoNzMsIDczLCA3Myk7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5ociB7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmFib3V0IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDUwcHg7XHJcbn1cclxuXHJcbi5hYm91dC10ZWFtIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnRleHQtbWFpbi10aXRsZS1icm93biB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDAgMCAwO1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiS2hhbmRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2IoNzgsIDQyLCAwKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFib3V0LXRpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJLaGFuZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuNjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5pbWctYWJvdXQtbWUge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyNHB4IDA7XHJcbn1cclxuXHJcbi5zZWMxLXRleHQtbWFpbiB7XHJcbiAgICB3aWR0aDogODgwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYig3MywgNzMsIDczKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltZy10ZWFtIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjRweCAwIDAgMDtcclxufVxyXG5cclxuLnRleHQtbWFpbi10aXRsZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ibGFjayB7XHJcbiAgICBjb2xvcjogIzQ5NDk0OTtcclxufVxyXG5cclxuLm9yYW5nZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6ICNmM2EzNDU7XHJcbn1cclxuXHJcbi5zZWMxLXRleHQtcHJpemUge1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG59XHJcblxyXG4uYm9sZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNlYzEtdGVhbSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY29tbWVudHMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMjRweCAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50eHQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTJweCAwO1xyXG59XHJcblxyXG4udHh0LWF1dG9yIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uYXV0b3Ige1xyXG4gICAgY29sb3I6ICM0NDhmZDE7XHJcbn1cclxuXHJcbi5jaGVja2VkIHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi50eHQtc3RhdHVzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4udHh0LWNvbW1lbnQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTJweCAwO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgICBib2R5IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5hYm91dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgfVxyXG4gICAgLnNlYzEtdGV4dC1tYWluIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgIGJvZHkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmFib3V0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDAgMTJweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLnNlYzEtdGV4dC1tYWluIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5hYm91dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAuc2VjMS10ZXh0LW1haW4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgIH1cclxuICAgIC50eHQge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/s2-section1/s2-section1.component.html":
/*!********************************************************!*\
  !*** ./src/app/s2-section1/s2-section1.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"about\">\n    <div class=\"sec1-text-main\">\n        <h3 class=\"text-main-title-brown\">Meet Scott Hathaway</h3>\n        <h5 class=\"about-title\">CEO & Founder, DUBAI LIFESTYLE APP</h5>\n        <img class=\"img-about-me\" src=\"./assets/img/section1-img1.png\" alt=\"Photo, Scott Hathaway\" />\n        <p> If you haven't yet heard, the <span class=\"text-main-title black\"> dubai lifestyle app </span> has just launched internationally and we're looking for <span class=\"text-main-title orange\"> 100 beta testers </span> to make profits of over. </p>\n        <p><span class=\"sec1-text-prize\"> $ <span class=\"bold\">7000 </span> a day</span> <br /> Watch the video now to see how you can join us\n            <span class=\"text-main-title orange\">free</span>\n        </p>\n        <img class=\"img-team\" src=\"./assets/img/section2-img1.png\" alt=\"Team\" />\n        <p>Your friend <br /> the <span class=\"text-main-title black\">dubai lifestyle app</span> team\n        </p>\n    </div>\n    <hr class=\"hr\" />\n\n    <div class=\"about-us\">\n        <h3 class=\"text-main-title-brown\">What People Are Saying</h3>\n        <ul class=\"comments\">\n            <li class=\"txt\">\n                <div class=\"txt-autor\">By <span class=\"autor\"> Linkoln Tremlin </span> on April 10, 2016\n                    <span class=\"fa fa-star checked\"></span>\n                    <span class=\"fa fa-star checked\"></span>\n                    <span class=\"fa fa-star checked\"></span>\n                    <span class=\"fa fa-star checked\"></span>\n                    <span class=\"fa fa-star\"></span>\n                </div>\n                <div class=\"txt-status\">Verify Member</div>\n                <div class=\"txt-comment\">For the past 3 years, I tried everythin you could imagine to profit online. But I was seammed every single time. This was my last shot. And I couldn't be happier to announce that I made my first $6,839.23 online! </div>\n            </li>\n            <li class=\"txt\" *ngFor=\"let key of comments\">\n                <div class=\"txt-autor\">By <span class=\"autor\"> {{key.autor}} </span> on April 10, 2016\n                    <span class=\"fa fa-star checked\"></span>\n                    <span class=\"fa fa-star checked\"></span>\n                    <span class=\"fa fa-star checked\"></span>\n                    <span class=\"fa fa-star checked\"></span>\n                    <span class=\"fa fa-star checked\"></span>\n                </div>\n                <div class=\"txt-status\"> {{key.status}} </div>\n                <div class=\"txt-comment\"> {{key.text}} </div>\n            </li>\n        </ul>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/s2-section1/s2-section1.component.ts":
/*!******************************************************!*\
  !*** ./src/app/s2-section1/s2-section1.component.ts ***!
  \******************************************************/
/*! exports provided: S2Section1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S2Section1Component", function() { return S2Section1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/comments */ "./src/app/comments.ts");



var S2Section1Component = /** @class */ (function () {
    function S2Section1Component() {
        this.comments = _app_comments__WEBPACK_IMPORTED_MODULE_2__["COMMENTS"];
    }
    S2Section1Component.prototype.ngOnInit = function () {
    };
    S2Section1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-s2-section1',
            template: __webpack_require__(/*! ./s2-section1.component.html */ "./src/app/s2-section1/s2-section1.component.html"),
            styles: [__webpack_require__(/*! ./s2-section1.component.css */ "./src/app/s2-section1/s2-section1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], S2Section1Component);
    return S2Section1Component;
}());



/***/ }),

/***/ "./src/app/step1/step1.component.css":
/*!*******************************************!*\
  !*** ./src/app/step1/step1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    display: block;\r\n    overflow-x: hidden;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    app-s1-header {\r\n        width: 100%;\r\n        margin: 0;\r\n        padding: 0;\r\n        height: 1020px;\r\n        display: block;\r\n        position: relative;\r\n    }\r\n    app-s1-section1 {\r\n        width: 100%;\r\n        margin: 0;\r\n        padding: 0;\r\n        display: block;\r\n        position: relative;\r\n    }\r\n    app-s1-section2 {\r\n        width: 100%;\r\n        margin: 0;\r\n        padding: 0;\r\n        display: block;\r\n        position: relative;\r\n    }\r\n    app-s1-footer {\r\n        width: 100%;\r\n        margin: 0;\r\n        padding: 0;\r\n        display: block;\r\n        position: relative;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RlcDEvc3RlcDEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSTtRQUNJLFlBQVk7UUFDWixVQUFVO1FBQ1YsV0FBVztRQUNYLGVBQWU7UUFDZixlQUFlO1FBQ2YsbUJBQW1CO0tBQ3RCO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osVUFBVTtRQUNWLFdBQVc7UUFDWCxlQUFlO1FBQ2YsbUJBQW1CO0tBQ3RCO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osVUFBVTtRQUNWLFdBQVc7UUFDWCxlQUFlO1FBQ2YsbUJBQW1CO0tBQ3RCO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osVUFBVTtRQUNWLFdBQVc7UUFDWCxlQUFlO1FBQ2YsbUJBQW1CO0tBQ3RCO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9zdGVwMS9zdGVwMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGFwcC1zMS1oZWFkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGhlaWdodDogMTAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIGFwcC1zMS1zZWN0aW9uMSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgYXBwLXMxLXNlY3Rpb24yIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICBhcHAtczEtZm9vdGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/step1/step1.component.html":
/*!********************************************!*\
  !*** ./src/app/step1/step1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-s1-header></app-s1-header>\n<app-s1-section1></app-s1-section1>\n<app-s1-section2></app-s1-section2>\n<app-s1-footer></app-s1-footer>"

/***/ }),

/***/ "./src/app/step1/step1.component.ts":
/*!******************************************!*\
  !*** ./src/app/step1/step1.component.ts ***!
  \******************************************/
/*! exports provided: Step1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1Component", function() { return Step1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Step1Component = /** @class */ (function () {
    function Step1Component() {
    }
    Step1Component.prototype.ngOnInit = function () {
    };
    Step1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-step1',
            template: __webpack_require__(/*! ./step1.component.html */ "./src/app/step1/step1.component.html"),
            styles: [__webpack_require__(/*! ./step1.component.css */ "./src/app/step1/step1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Step1Component);
    return Step1Component;
}());



/***/ }),

/***/ "./src/app/step2/step2.component.css":
/*!*******************************************!*\
  !*** ./src/app/step2/step2.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    display: block;\r\n    overflow-x: hidden;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    app-s2-header {\r\n        width: 100%;\r\n        margin: 0;\r\n        padding: 0;\r\n        display: block;\r\n        position: relative;\r\n    }\r\n    app-s2-section1 {\r\n        width: 100%;\r\n        margin: 0;\r\n        padding: 0;\r\n        display: block;\r\n        position: relative;\r\n    }\r\n    app-s2-footer {\r\n        width: 100%;\r\n        margin: 0;\r\n        padding: 0;\r\n        display: block;\r\n        position: relative;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RlcDIvc3RlcDIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSTtRQUNJLFlBQVk7UUFDWixVQUFVO1FBQ1YsV0FBVztRQUNYLGVBQWU7UUFDZixtQkFBbUI7S0FDdEI7SUFDRDtRQUNJLFlBQVk7UUFDWixVQUFVO1FBQ1YsV0FBVztRQUNYLGVBQWU7UUFDZixtQkFBbUI7S0FDdEI7SUFDRDtRQUNJLFlBQVk7UUFDWixVQUFVO1FBQ1YsV0FBVztRQUNYLGVBQWU7UUFDZixtQkFBbUI7S0FDdEI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL3N0ZXAyL3N0ZXAyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgYXBwLXMyLWhlYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgYXBwLXMyLXNlY3Rpb24xIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICBhcHAtczItZm9vdGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/step2/step2.component.html":
/*!********************************************!*\
  !*** ./src/app/step2/step2.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-s2-header></app-s2-header>\n<app-s2-section1></app-s2-section1>\n<app-s2-footer></app-s2-footer>"

/***/ }),

/***/ "./src/app/step2/step2.component.ts":
/*!******************************************!*\
  !*** ./src/app/step2/step2.component.ts ***!
  \******************************************/
/*! exports provided: Step2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2Component", function() { return Step2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Step2Component = /** @class */ (function () {
    function Step2Component() {
    }
    Step2Component.prototype.ngOnInit = function () {
    };
    Step2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-step2',
            template: __webpack_require__(/*! ./step2.component.html */ "./src/app/step2/step2.component.html"),
            styles: [__webpack_require__(/*! ./step2.component.css */ "./src/app/step2/step2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Step2Component);
    return Step2Component;
}());



/***/ }),

/***/ "./src/app/table-users.ts":
/*!********************************!*\
  !*** ./src/app/table-users.ts ***!
  \********************************/
/*! exports provided: User, USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var USERS = [
    { Asset: 'USD/ZAR', Position: 'cell', Amount: 100, ERate: 12.08, CRate: 12.08, Payout: 4, Profit: -74.10, Date: '26/01/2015 00:24', Status: 'win' },
    { Asset: 'USD/ZAR', Position: 'cell', Amount: 1, ERate: 2, CRate: 3, Payout: 4, Profit: 5, Date: '26/01/2015 00:24', Status: 'win' },
    { Asset: 'USD/ZAR', Position: 'cell', Amount: 1, ERate: 2, CRate: 3, Payout: 4, Profit: 5, Date: '26/01/2015 00:24', Status: 'win' },
    { Asset: 'USD/ZAR', Position: 'cell', Amount: 1, ERate: 2, CRate: 3, Payout: 4, Profit: 5, Date: '26/01/2015 00:24', Status: 'win' },
    { Asset: 'USD/ZAR', Position: 'cell', Amount: 1, ERate: 2, CRate: 3, Payout: 4, Profit: 5, Date: '26/01/2015 00:24', Status: 'win' },
    { Asset: 'USD/ZAR', Position: 'cell', Amount: 1, ERate: 2, CRate: 3, Payout: 4, Profit: 5, Date: '26/01/2015 00:24', Status: 'win' },
    { Asset: 'USD/ZAR', Position: 'cell', Amount: 1, ERate: 2, CRate: 3, Payout: 4, Profit: 5, Date: '26/01/2015 00:24', Status: 'win' },
    { Asset: 'USD/ZAR', Position: 'cell', Amount: 1, ERate: 2, CRate: 3, Payout: 4, Profit: 5, Date: '26/01/2015 00:24', Status: 'win' },
    { Asset: 'USD/ZAR', Position: 'cell', Amount: 1, ERate: 2, CRate: 3, Payout: 4, Profit: 5, Date: '26/01/2015 00:24', Status: 'win' },
];


/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: User, DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
// import {User} from './s2-header/s2-header.component';
var User = /** @class */ (function () {
    function User(first_name, email) {
        this.first_name = first_name;
        this.email = email;
    }
    return User;
}());

var DataService = /** @class */ (function () {
    function DataService() {
        this.userData = [
            { first_name: sessionStorage.getItem('item1'), email: sessionStorage.getItem('item2') },
        ];
    }
    DataService.prototype.getData = function () {
        console.log(this.userData);
        return this.userData;
    };
    DataService.prototype.addData = function (first_name, email) {
        this.userData.push(new User(sessionStorage.getItem('item1'), sessionStorage.getItem('item2')));
        console.log(this.userData);
    };
    return DataService;
}());

/*
import {EventEmitter} from '@angular/core';

export class DataService {
  private clickCnt: number = 0;
  onClick: EventEmitter<number> = new EventEmitter();

  public doClick() {
    this.clickCnt++;
    this.onClick.emit(this.clickCnt);
  }

}
*/


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

module.exports = __webpack_require__(/*! E:\Java\website\TRAINING\Angular\registration-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
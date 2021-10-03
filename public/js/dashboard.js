"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/AdminLayout.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/AdminLayout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Logo */ "./resources/js/components/Logo.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AdminLayout",
  components: {
    Logo: _components_Logo__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'mdi-apps',
        title: 'داشبورد',
        to: '/dashboard'
      }, {
        icon: 'mdi-chart-bubble',
        title: 'کاربران',
        to: '/dashboard/users',
        children: [{
          icon: 'mdi-chart-bubble',
          title: 'افزودن محصول جدید',
          to: '/dashboard/users'
        }]
      }, {
        icon: 'mdi-products',
        title: 'محصولات',
        to: '/dashboard/users',
        children: [{
          icon: 'mdi-chart-bubble',
          title: 'افزودن محصول جدید',
          to: '/dashboard/users'
        }]
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      navItems: [{
        action: 'mdi-view-dashboard',
        items: [{
          title: 'داشبورد',
          to: 'Home',
          active: true
        }],
        title: 'داشبورد'
      }, {
        action: 'mdi-account-group',
        items: [{
          title: 'لیست کاربران',
          to: 'Users',
          active: true
        }],
        title: 'کاربران'
      }, {
        action: 'mdi-shape-outline',
        items: [{
          title: 'لیست دسته بندی ها',
          to: 'category-index'
        }],
        title: 'دسته بندی ها'
      }, {
        action: 'mdi-storefront-outline',
        items: [{
          title: 'لیست محصولات',
          to: 'products-index'
        }, {
          title: 'افزودن محصول',
          to: 'products-create'
        }, {
          title: 'پیشنهاد شگفت انگیز',
          to: 'incredible'
        }, {
          title: 'کد تخفیف',
          to: 'discount'
        }, {
          title: 'شیوه ارسال',
          to: 'shipment'
        }, {
          title: 'گارانتی ها',
          to: 'guarantee'
        }, {
          title: 'برندها',
          to: 'brands'
        }, {
          title: 'متغییر ها',
          to: 'product-variant'
        }, {
          title: 'رضایت قیمت',
          to: 'product-price-survey'
        }],
        title: 'محصولات'
      }, {
        action: 'mdi-basket-outline',
        items: [{
          title: 'لیست  سفارشات',
          to: 'orders'
        }],
        title: 'سفارشات'
      }, {
        action: 'mdi-comment-multiple-outline',
        items: [{
          title: 'لیست  نظرات',
          to: 'comments'
        }],
        title: 'نظرات'
      }, {
        action: 'mdi-poll',
        items: [{
          title: 'آمار  گزارشات',
          to: 'stats'
        }],
        title: 'گزارشات'
      }, {
        action: 'mdi-file-document-multiple-outline',
        items: [{
          title: 'لیست  صفحات',
          to: 'pages'
        }],
        title: 'صفحات'
      }, {
        action: 'mdi-shield-lock-outline',
        items: [{
          title: 'لیست  سطوح دسترسی',
          to: 'permissions'
        }],
        title: 'سطوح دسترسی'
      }, {
        action: 'mdi-credit-card-multiple-outline',
        items: [{
          title: 'لیست درگاه پرداخت',
          to: 'permissions'
        }],
        title: 'درگاه پرداخت'
      }, {
        action: 'mdi-message-processing',
        items: [{
          title: 'سرویس دهنده ها',
          to: 'permissions'
        }, {
          title: 'تنظیمات ارسال',
          to: 'permissions'
        }],
        title: ' سرویس پیامکی'
      }, {
        action: 'mdi-hammer-screwdriver',
        items: [{
          title: 'نوار اعلان',
          to: 'permissions'
        }, {
          title: 'ارسال اعلان',
          to: 'permissions'
        }],
        title: 'ابزار ها'
      }, {
        action: 'mdi-cog',
        items: [{
          title: 'تنظیمات سایت',
          to: 'permissions'
        }],
        title: 'تنظیمات'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/AdminLayout.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/AdminLayout.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*.v-application {*/\n/*    font-family: IRANSans,sans-serif !important;*/\n/*}*/\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/AdminLayout.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/AdminLayout.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminLayout.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/AdminLayout.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/layout/AdminLayout.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/layout/AdminLayout.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminLayout_vue_vue_type_template_id_2056d513___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminLayout.vue?vue&type=template&id=2056d513& */ "./resources/js/views/layout/AdminLayout.vue?vue&type=template&id=2056d513&");
/* harmony import */ var _AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminLayout.vue?vue&type=script&lang=js& */ "./resources/js/views/layout/AdminLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _AdminLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminLayout.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/layout/AdminLayout.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminLayout_vue_vue_type_template_id_2056d513___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminLayout_vue_vue_type_template_id_2056d513___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layout/AdminLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layout/AdminLayout.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/layout/AdminLayout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/AdminLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layout/AdminLayout.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/layout/AdminLayout.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminLayout.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/AdminLayout.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/layout/AdminLayout.vue?vue&type=template&id=2056d513&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/layout/AdminLayout.vue?vue&type=template&id=2056d513& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_template_id_2056d513___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_template_id_2056d513___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_template_id_2056d513___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminLayout.vue?vue&type=template&id=2056d513& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/AdminLayout.vue?vue&type=template&id=2056d513&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/AdminLayout.vue?vue&type=template&id=2056d513&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layout/AdminLayout.vue?vue&type=template&id=2056d513& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-app",
        { attrs: { light: "" } },
        [
          _c(
            "v-navigation-drawer",
            {
              attrs: {
                "mini-variant": _vm.miniVariant,
                fixed: "",
                app: "",
                right: ""
              },
              model: {
                value: _vm.drawer,
                callback: function($$v) {
                  _vm.drawer = $$v
                },
                expression: "drawer"
              }
            },
            [
              _c(
                "router-link",
                { attrs: { to: { name: "Home" } } },
                [_c("Logo", { staticClass: "mx-auto my-3" })],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list",
                { staticClass: "d-none" },
                _vm._l(_vm.items, function(item, i) {
                  return _c(
                    "v-list-item",
                    { key: i, attrs: { to: item.to, router: "", exact: "" } },
                    [
                      _c(
                        "v-list-item-action",
                        [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c("v-list-item-title", {
                            domProps: { textContent: _vm._s(item.title) }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                1
              ),
              _vm._v(" "),
              _c(
                "v-list",
                _vm._l(_vm.navItems, function(item) {
                  return _c(
                    "v-list-group",
                    {
                      key: item.items.to,
                      attrs: { "prepend-icon": item.action, "no-action": "" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function() {
                              return [
                                _c(
                                  "v-list-item-content",
                                  [
                                    _c("v-list-item-title", {
                                      domProps: {
                                        textContent: _vm._s(item.title)
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        true
                      ),
                      model: {
                        value: item.items.active,
                        callback: function($$v) {
                          _vm.$set(item.items, "active", $$v)
                        },
                        expression: "item.items.active"
                      }
                    },
                    [
                      _vm._v(" "),
                      _vm._l(item.items, function(child, index) {
                        return _c(
                          "v-list-item",
                          {
                            key: index,
                            attrs: {
                              router: "",
                              exact: "",
                              to: { name: child.to }
                            }
                          },
                          [
                            _c(
                              "v-list-item-content",
                              [
                                _c(
                                  "router-link",
                                  { attrs: { to: { name: child.to } } },
                                  [
                                    _c("v-list-item-title", {
                                      domProps: {
                                        textContent: _vm._s(child.title)
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      })
                    ],
                    2
                  )
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-app-bar",
            {
              attrs: {
                "clipped-left": _vm.clipped,
                fixed: "",
                app: "",
                flat: ""
              }
            },
            [
              _c("v-app-bar-nav-icon", {
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    _vm.drawer = !_vm.drawer
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      _vm.miniVariant = !_vm.miniVariant
                    }
                  }
                },
                [
                  _c("v-icon", [
                    _vm._v(
                      "mdi-" +
                        _vm._s(
                          "chevron-" + (_vm.miniVariant ? "right" : "left")
                        )
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      _vm.fixed = !_vm.fixed
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-account-circle")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-main", [_c("v-container", [_c("router-view")], 1)], 1)
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
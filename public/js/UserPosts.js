"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["UserPosts"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/posts/NewPost.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/posts/NewPost.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  name: "NewPost",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        root = _ref.root;

    var bookmarkPost = function bookmarkPost(post) {
      post.is_bookmarked = !post.is_bookmarked;
      var reqType = post.is_bookmarked ? "post" : "delete";
      axios[reqType]("/api/bookmarks/".concat(post.slug)).then(function (data) {});
    };

    var likePost = function likePost() {
      props.data.is_liked = !props.data.is_liked;
      var reqType = props.data.is_liked ? "post" : "delete";
      axios[reqType]("/api/likes/".concat(props.data.slug)).then(function () {
        props.data.is_liked ? props.data.likes_count++ : props.data.likes_count--;
      });
    };

    return {
      bookmarkPost: bookmarkPost,
      likePost: likePost
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User/UserPosts.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User/UserPosts.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _components_posts_NewPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/posts/NewPost */ "./resources/js/components/posts/NewPost.vue");
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
  name: "UserPosts",
  components: {
    NewPost: _components_posts_NewPost__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        root = _ref.root;
    var posts = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__.ref)({});
    var user = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__.ref)({});

    var followUser = function followUser() {
      axios.post("/api/follow/".concat(user.value.username)).then(function () {
        user.value.is_follow = !user.value.is_follow;
      });
    }; // created hook


    axios.get("/api/user-posts/".concat(root.$route.params.username)).then(function (_ref2) {
      var data = _ref2.data;
      posts.value = data.posts;
      user.value = data.user;
    });
    return {
      posts: posts,
      user: user,
      followUser: followUser
    };
  }
});

/***/ }),

/***/ "./resources/js/components/posts/NewPost.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/posts/NewPost.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewPost_vue_vue_type_template_id_3e70edc9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewPost.vue?vue&type=template&id=3e70edc9& */ "./resources/js/components/posts/NewPost.vue?vue&type=template&id=3e70edc9&");
/* harmony import */ var _NewPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewPost.vue?vue&type=script&lang=js& */ "./resources/js/components/posts/NewPost.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewPost_vue_vue_type_template_id_3e70edc9___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewPost_vue_vue_type_template_id_3e70edc9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/posts/NewPost.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/User/UserPosts.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/User/UserPosts.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserPosts_vue_vue_type_template_id_1ed9737a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserPosts.vue?vue&type=template&id=1ed9737a& */ "./resources/js/views/User/UserPosts.vue?vue&type=template&id=1ed9737a&");
/* harmony import */ var _UserPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserPosts.vue?vue&type=script&lang=js& */ "./resources/js/views/User/UserPosts.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserPosts_vue_vue_type_template_id_1ed9737a___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserPosts_vue_vue_type_template_id_1ed9737a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/User/UserPosts.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/posts/NewPost.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/posts/NewPost.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewPost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/posts/NewPost.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/User/UserPosts.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/User/UserPosts.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPosts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User/UserPosts.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/posts/NewPost.vue?vue&type=template&id=3e70edc9&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/posts/NewPost.vue?vue&type=template&id=3e70edc9& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_template_id_3e70edc9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_template_id_3e70edc9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_template_id_3e70edc9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewPost.vue?vue&type=template&id=3e70edc9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/posts/NewPost.vue?vue&type=template&id=3e70edc9&");


/***/ }),

/***/ "./resources/js/views/User/UserPosts.vue?vue&type=template&id=1ed9737a&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/User/UserPosts.vue?vue&type=template&id=1ed9737a& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_template_id_1ed9737a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_template_id_1ed9737a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_template_id_1ed9737a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPosts.vue?vue&type=template&id=1ed9737a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User/UserPosts.vue?vue&type=template&id=1ed9737a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/posts/NewPost.vue?vue&type=template&id=3e70edc9&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/posts/NewPost.vue?vue&type=template&id=3e70edc9& ***!
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
    "v-card",
    { staticClass: "mt-5", attrs: { flat: "" } },
    [
      _c(
        "div",
        { staticClass: "d-flex flex-row align-center p-3" },
        [
          _c(
            "v-list-item",
            { staticClass: "pr-0" },
            [
              _c(
                "router-link",
                {
                  attrs: {
                    to: {
                      name: "user-posts",
                      params: { username: _vm.data.user.username }
                    }
                  }
                },
                [
                  _c(
                    "v-list-item-avatar",
                    [
                      _c("v-img", { attrs: { src: _vm.data.user.profile_src } })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item-content",
                [
                  _c("v-list-item-title", {
                    domProps: { innerHTML: _vm._s(_vm.data.title) }
                  }),
                  _vm._v(" "),
                  _c("v-list-item-subtitle", {
                    domProps: { innerHTML: _vm._s(_vm.data.created_at) }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("div", { staticClass: "gray--text body-2" }, [_vm._v("ورزشی")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "router-link",
        {
          attrs: { to: { name: "post-show", params: { slug: _vm.data.slug } } }
        },
        [
          _c("v-img", {
            attrs: { "max-height": "300", src: _vm.data.banner_src }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", { domProps: { innerHTML: _vm._s(_vm.data.dec) } }),
      _vm._v(" "),
      _c(
        "v-card-actions",
        { staticClass: "mt-3" },
        [
          _c(
            "div",
            { staticClass: "d-flex align-center" },
            [
              _c(
                "v-btn",
                { attrs: { icon: "" }, on: { click: _vm.likePost } },
                [
                  _c("v-icon", { class: { "red--text": _vm.data.is_liked } }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(
                          _vm.data.is_liked
                            ? " mdi-heart"
                            : " mdi-heart-outline"
                        ) +
                        "\n                "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mr-1" }, [
                _vm._v(_vm._s(_vm.data.likes_count))
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
                  return _vm.bookmarkPost(_vm.data)
                }
              }
            },
            [
              _c("v-icon", [
                _vm._v(
                  "\n                " +
                    _vm._s(
                      _vm.data.is_bookmarked
                        ? "mdi-bookmark"
                        : "mdi-bookmark-outline"
                    ) +
                    "\n            "
                )
              ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User/UserPosts.vue?vue&type=template&id=1ed9737a&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User/UserPosts.vue?vue&type=template&id=1ed9737a& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _vm.user
    ? _c(
        "v-container",
        [
          _c(
            "v-row",
            {
              staticClass:
                "d-flex flex-row flex-column justify-center align-center"
            },
            [
              _c("v-col", { attrs: { cols: "12", md: "8" } }, [
                _c(
                  "div",
                  {
                    staticClass: "d-flex align-center flex-row justify-between"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "d-flex flex-row align-center" },
                      [
                        _c(
                          "v-avatar",
                          {
                            on: {
                              click: function($event) {
                                return _vm.$refs.profile.click()
                              }
                            }
                          },
                          [
                            _c("v-img", {
                              attrs: {
                                src: _vm.user.profile_src || "/images/5.jpg",
                                size: "80px"
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "d-none",
                              attrs: { type: "file" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "mr-4 caption" }, [
                            _vm._v(_vm._s(_vm.user.name))
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "mr-4 caption" }, [
                            _vm._v(_vm._s(_vm.user.email))
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex flex-row flex-column mr-10" },
                      [
                        _vm.$store.state.user.isLoggedIn &&
                        _vm.user.id != _vm.$store.state.user.user.id
                          ? _c(
                              "v-btn",
                              {
                                staticClass: "mr-4",
                                attrs: {
                                  color: _vm.user.is_follow ? "info" : "grey",
                                  rounded: "",
                                  dark: "",
                                  small: ""
                                },
                                on: { click: _vm.followUser }
                              },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(
                                      _vm.user.is_follow
                                        ? "دنبال می کنید"
                                        : "دنبال کنید"
                                    ) +
                                    "\n                    "
                                )
                              ]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "mt-15" }, [
                  _c("span", [
                    _vm._v(
                      "توسط " +
                        _vm._s(_vm.user.followers_count) +
                        " نفر دنبال می شود"
                    )
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "mr-5" }, [
                    _vm._v(
                      _vm._s(_vm.user.follows_count) + " نفر را دنبال می کند"
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "my-15" },
                  _vm._l(_vm.posts.data, function(post, index) {
                    return _c("new-post", { key: index, attrs: { data: post } })
                  }),
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "d-none flex-row align-center justify-center mt-15"
                  },
                  [_c("div", { staticClass: "title" }, [_vm._v(". . .")])]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "mt-15 d-none" }, [
                  _vm._v(
                    "\n                شما هنوز پستی در ویرگول ننوشته‌اید. همین حالا اقدام به نوشتن\n                اولین پست خود کنید.\n            "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mt-10" },
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "darken-1",
                        attrs: { rounded: "", large: "", color: "primary" }
                      },
                      [
                        _vm._v(
                          "\n                    نوشتن اولین پست\n                    "
                        ),
                        _c("v-icon", { staticClass: "mr-1" }, [
                          _vm._v("mdi-chevron-left")
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
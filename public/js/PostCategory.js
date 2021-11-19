"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["PostCategory"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Post/PostCategory.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Post/PostCategory.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _components_posts_NewPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/posts/NewPost */ "./resources/js/components/posts/NewPost.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  name: "PostCategory",
  components: {
    NewPost: _components_posts_NewPost__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup(porps, _ref) {
    var emit = _ref.emit,
        root = _ref.root;
    var posts = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__.ref)({});
    var category = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__.ref)({}); // created hook

    axios.get("/api/posts/category/".concat(root.$route.params.slug)).then(function (_ref2) {
      var data = _ref2.data;
      posts.value = data.posts;
      category.value = data.category;
    });

    var fetchNextPosts = function fetchNextPosts() {
      axios.get(posts.value.next_page_url).then(function (_ref3) {
        var _posts$value$data;

        var data = _ref3.data;

        (_posts$value$data = posts.value.data).push.apply(_posts$value$data, _toConsumableArray(data.posts.data));

        posts.value.next_page_url = data.posts.next_page_url;
      });
    };

    return {
      posts: posts,
      category: category,
      fetchNextPosts: fetchNextPosts
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

/***/ "./resources/js/views/Post/PostCategory.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Post/PostCategory.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PostCategory_vue_vue_type_template_id_cb7a1544___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostCategory.vue?vue&type=template&id=cb7a1544& */ "./resources/js/views/Post/PostCategory.vue?vue&type=template&id=cb7a1544&");
/* harmony import */ var _PostCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostCategory.vue?vue&type=script&lang=js& */ "./resources/js/views/Post/PostCategory.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostCategory_vue_vue_type_template_id_cb7a1544___WEBPACK_IMPORTED_MODULE_0__.render,
  _PostCategory_vue_vue_type_template_id_cb7a1544___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Post/PostCategory.vue"
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

/***/ "./resources/js/views/Post/PostCategory.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Post/PostCategory.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Post/PostCategory.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/views/Post/PostCategory.vue?vue&type=template&id=cb7a1544&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Post/PostCategory.vue?vue&type=template&id=cb7a1544& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCategory_vue_vue_type_template_id_cb7a1544___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCategory_vue_vue_type_template_id_cb7a1544___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCategory_vue_vue_type_template_id_cb7a1544___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostCategory.vue?vue&type=template&id=cb7a1544& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Post/PostCategory.vue?vue&type=template&id=cb7a1544&");


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
    "v-col",
    { attrs: { cols: "4" } },
    [
      _c(
        "v-card",
        { staticClass: "mt-5 bg-tp-ui", attrs: { flat: "" } },
        [
          _c(
            "router-link",
            {
              attrs: {
                to: { name: "post-show", params: { slug: _vm.data.slug } }
              }
            },
            [
              _c("v-img", {
                staticClass: "cover-post-ui",
                attrs: {
                  height: "200",
                  src: _vm.data.banner_src,
                  gradient: "to bottom,rgba(0,0,0,.1), rgba(0,0,0,.8)"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              attrs: {
                to: { name: "post-show", params: { slug: _vm.data.slug } }
              }
            },
            [
              _c("v-card-title", {
                staticClass: "black--text pr-0",
                domProps: { innerHTML: _vm._s(_vm.data.title) }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-text", {
            staticClass: "pr-0",
            domProps: { innerHTML: _vm._s(_vm.data.dec) }
          }),
          _vm._v(" "),
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
                    domProps: { innerHTML: _vm._s(_vm.data.user.username) }
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
          _c(
            "v-card-actions",
            { staticClass: "mt-3 d-none" },
            [
              _c(
                "div",
                { staticClass: "d-flex align-center" },
                [
                  _c(
                    "v-btn",
                    { attrs: { icon: "" }, on: { click: _vm.likePost } },
                    [
                      _c(
                        "v-icon",
                        { class: { "red--text": _vm.data.is_liked } },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(
                                _vm.data.is_liked
                                  ? " mdi-heart"
                                  : " mdi-heart-outline"
                              ) +
                              "\n                    "
                          )
                        ]
                      )
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
                      "\n                    " +
                        _vm._s(
                          _vm.data.is_bookmarked
                            ? "mdi-bookmark"
                            : "mdi-bookmark-outline"
                        ) +
                        "\n                "
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Post/PostCategory.vue?vue&type=template&id=cb7a1544&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Post/PostCategory.vue?vue&type=template&id=cb7a1544& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    [
      _c(
        "v-row",
        { staticClass: "justify-center" },
        [
          _c(
            "v-col",
            { attrs: { cols: "8" } },
            [
              _c(
                "div",
                { staticClass: "d-flex" },
                [
                  _c("div", [
                    _c("h4", { staticClass: "grey--text mb-3" }, [
                      _vm._v("پست‌های مرتبط با")
                    ]),
                    _vm._v(" "),
                    _c("h2", [_vm._v(_vm._s(_vm.category.title))])
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("h3", { staticClass: "font-weight-light" }, [
                    _vm._v(
                      "\n                    تعداد کل پست‌ها: " +
                        _vm._s(_vm.category.posts_count) +
                        "\n                "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-15" },
                _vm._l(_vm.posts.data, function(item, index) {
                  return _c("new-post", { key: index, attrs: { data: item } })
                }),
                1
              ),
              _vm._v(" "),
              !!_vm.posts.next_page_url
                ? _c(
                    "v-btn",
                    { staticClass: "mt-10", on: { click: _vm.fetchNextPosts } },
                    [_vm._v("\n                مشاهده بیشتر\n            ")]
                  )
                : _vm._e()
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



/***/ })

}]);
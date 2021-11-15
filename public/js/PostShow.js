"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["PostShow"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "PostComments",
  props: {
    data: {
      type: Object
    }
  },
  setup: function setup(props, _ref) {
    var root = _ref.root;
    var showReply = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var disableBtn = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var reply = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.ref)({
      comment_id: props.data.id,
      post_id: props.data.post_id,
      content: null
    });
    var comment = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.ref)(props.data);

    var saveReply = function saveReply() {
      axios.post("/api/replies/".concat(root.$route.params.slug), reply.value).then(function () {
        showReply.value = false;
        reply.value.content = null;
      });
    };

    var deleteComment = function deleteComment() {
      axios["delete"]("/api/comments/".concat(props.data.id)).then(function () {});
    };

    var canShow = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return root.$store.state.user.isLoggedIn && root.$store.state.user.user.id == props.data.user_id;
    });
    (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      Echo.channel("virgool_reply_".concat(props.data.id)).listen(".reply.created", function (_ref2) {
        var reply = _ref2.reply;
        comment.value.replies.push(reply);
      });
      Echo.channel("virgool_reply_".concat(props.data.id)).listen("CommentDeletedEvent", function (event) {
        comment.value.replies = comment.value.replies.filter(function (c) {
          return c.id !== event.comment.id;
        });
      });
    });
    (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return reply.value.content;
    }, function (value) {
      if (reply.value.content && value.length > 5) {
        disableBtn.value = true;
      } else {
        disableBtn.value = false;
      }
    });
    return {
      showReply: showReply,
      reply: reply,
      disableBtn: disableBtn,
      saveReply: saveReply,
      deleteComment: deleteComment,
      canShow: canShow,
      comment: comment
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Post/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Post/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _components_posts_PostComments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/posts/PostComments */ "./resources/js/components/posts/PostComments.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Index",
  components: {
    PostComments: _components_posts_PostComments__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: this.post.title,
      titleTemplate: ""
    };
  },
  setup: function setup(props, _ref) {
    var root = _ref.root;
    var post = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__.ref)({});
    var related_posts = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__.ref)({});
    var short_link = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var comment = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__.ref)({
      content: "",
      post_id: null
    });
    var disableBtn = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__.ref)(false);

    var saveComment = function saveComment() {
      axios.post("/api/comments/".concat(post.value.slug), comment.value).then(function (data) {
        comment.value.content = null;
      });
    };

    var bookmarkPost = function bookmarkPost(post) {
      post.is_bookmarked = !post.is_bookmarked;
      var reqType = post.is_bookmarked ? "post" : "delete";
      axios[reqType]("/api/bookmarks/".concat(post.slug)).then(function (data) {});
    };

    var likePost = function likePost() {
      post.value.is_liked = !post.value.is_liked;
      var reqType = post.value.is_liked ? "post" : "delete";
      axios[reqType]("/api/likes/".concat(post.value.slug)).then(function () {
        post.value.is_liked ? post.value.likes_count++ : post.value.likes_count--;
      });
    };

    var followUser = function followUser() {
      axios.post("/api/follow/".concat(post.value.user.username)).then(function () {
        post.value.user.is_follow = !post.value.user.is_follow;
      });
    };

    (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__.watch)(function () {
      return comment.value.content;
    }, function (value) {
      if (comment.value.content && value.length > 5) {
        disableBtn.value = true;
      } else {
        disableBtn.value = false;
      }
    }); // created hook

    axios.get("/api/posts/".concat(root.$route.params.slug)).then(function (_ref2) {
      var data = _ref2.data;
      post.value = data.post;
      related_posts.value = data.related_posts;
      short_link.value = "http://virgool.local/link/".concat(data.post.short_link);
      comment.value.post_id = data.post.id;
      Echo.channel("virgool_comment_".concat(data.post.id)).listen(".comment.created", function (_ref3) {
        var comment = _ref3.comment;
        console.log(comment);
        post.value.parent_comments.push(comment);
      });
      Echo.channel("virgool_comment_".concat(data.post.id)).listen("CommentDeletedEvent", function (_ref4) {
        var comment = _ref4.comment;
        post.value.parent_comments = post.value.parent_comments.filter(function (c) {
          return c.id !== comment.id;
        });
      });
    });
    return {
      post: post,
      related_posts: related_posts,
      short_link: short_link,
      comment: comment,
      disableBtn: disableBtn,
      saveComment: saveComment,
      bookmarkPost: bookmarkPost,
      likePost: likePost,
      followUser: followUser
    };
  }
});

/***/ }),

/***/ "./resources/js/components/posts/PostComments.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/posts/PostComments.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PostComments_vue_vue_type_template_id_4443491b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostComments.vue?vue&type=template&id=4443491b& */ "./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&");
/* harmony import */ var _PostComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostComments.vue?vue&type=script&lang=js& */ "./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostComments_vue_vue_type_template_id_4443491b___WEBPACK_IMPORTED_MODULE_0__.render,
  _PostComments_vue_vue_type_template_id_4443491b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/posts/PostComments.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Post/Index.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Post/Index.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_6f1c6362___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=6f1c6362& */ "./resources/js/views/Post/Index.vue?vue&type=template&id=6f1c6362&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/Post/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_6f1c6362___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_6f1c6362___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Post/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostComments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Post/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Post/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Post/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_template_id_4443491b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_template_id_4443491b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_template_id_4443491b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostComments.vue?vue&type=template&id=4443491b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&");


/***/ }),

/***/ "./resources/js/views/Post/Index.vue?vue&type=template&id=6f1c6362&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Post/Index.vue?vue&type=template&id=6f1c6362& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6f1c6362___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6f1c6362___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6f1c6362___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=6f1c6362& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Post/Index.vue?vue&type=template&id=6f1c6362&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-10" },
    [
      _c(
        "v-card",
        [
          _c(
            "div",
            { staticClass: "d-flex flex-row align-center" },
            [
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-avatar",
                    [
                      _c("v-img", { attrs: { src: _vm.data.user.profile_src } })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-content", [
                    _c("div", [_vm._v(_vm._s(_vm.data.user.name))]),
                    _vm._v(" "),
                    _c("div", { staticClass: "caption text--grey" }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.data.created_at) +
                          "\n                    "
                      )
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
                { staticClass: "d-flex flex-row" },
                [
                  _vm.canShow
                    ? _c(
                        "v-btn",
                        {
                          staticClass: "ml-1",
                          attrs: { icon: "", color: "grey" },
                          on: { click: _vm.deleteComment }
                        },
                        [_c("v-icon", [_vm._v("mdi-delete")])],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "ml-3",
                      attrs: { icon: "", color: "grey" },
                      on: {
                        click: function($event) {
                          _vm.showReply = !_vm.showReply
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-undo")])],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-text", { staticClass: "text-justify" }, [
            _vm._v("\n            " + _vm._s(_vm.data.content) + "\n        ")
          ]),
          _vm._v(" "),
          _vm.showReply
            ? _c(
                "div",
                [
                  _c(
                    "div",
                    { staticClass: "d-flex flex-row align-center" },
                    [
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-avatar",
                            [
                              _c("v-img", {
                                attrs: { src: _vm.data.user.profile_src }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-content", [
                            _c("div", [_vm._v(_vm._s(_vm.data.user.name))])
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c("v-textarea", {
                        attrs: { placeholder: "پاسخ خود را بنویسید .." },
                        model: {
                          value: _vm.reply.content,
                          callback: function($$v) {
                            _vm.$set(_vm.reply, "content", $$v)
                          },
                          expression: "reply.content"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex justify-end ml-5 my-3" },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            rounded: "",
                            color: "primary",
                            outlined: "",
                            large: "",
                            disabled: !_vm.disableBtn
                          },
                          on: { click: _vm.saveReply }
                        },
                        [_vm._v("ارسال پاسخ\n                ")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.data.replies, function(comment) {
        return _c("post-comments", {
          key: comment.id,
          staticStyle: { "border-right": "2px solid red" },
          attrs: { data: comment }
        })
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Post/Index.vue?vue&type=template&id=6f1c6362&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Post/Index.vue?vue&type=template&id=6f1c6362& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    "v-main",
    [
      _vm.post.user
        ? _c(
            "v-container",
            [
              _c(
                "v-row",
                { staticClass: "d-flex justify-center" },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "8" } },
                    [
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-avatar",
                            { attrs: { size: "75" } },
                            [
                              _c(
                                "v-avatar",
                                { attrs: { size: "75" } },
                                [
                                  _c("v-img", {
                                    attrs: { src: _vm.post.user.profile_src }
                                  })
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
                              _c(
                                "v-list-item-title",
                                [
                                  _c("span", [
                                    _vm._v(_vm._s(_vm.post.user.name))
                                  ]),
                                  _vm._v(" "),
                                  _vm.$store.state.user.isLoggedIn &&
                                  _vm.post.user.id !=
                                    _vm.$store.state.user.user.id
                                    ? _c(
                                        "v-btn",
                                        {
                                          staticClass: "mr-4",
                                          attrs: {
                                            color: _vm.post.user.is_follow
                                              ? "info"
                                              : "grey",
                                            rounded: "",
                                            dark: "",
                                            small: ""
                                          },
                                          on: { click: _vm.followUser }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(
                                                _vm.post.user.is_follow
                                                  ? "دنبال می کنید"
                                                  : "دنبال کنید"
                                              ) +
                                              "\n                            "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.post.user.bio) +
                                    "\n                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-list-item-subtitle",
                                { staticClass: "caption mt-2" },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.post.created_at) +
                                      " / خواندن\n                            " +
                                      _vm._s(_vm.post.min_read) +
                                      " دقیقه\n                        "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mb-4" },
                        [
                          _c("h2", { staticClass: "my-4" }, [
                            _vm._v(_vm._s(_vm.post.title))
                          ]),
                          _vm._v(" "),
                          _c("v-img", { attrs: { src: _vm.post.banner_src } }),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "post-module_content",
                            domProps: { innerHTML: _vm._s(_vm.post.content) }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "post-module_tags mt-4" },
                            _vm._l(_vm.post.categories, function(category) {
                              return _c(
                                "v-chip",
                                {
                                  key: category.title,
                                  staticClass: "ml-2",
                                  attrs: { ripple: false }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(category.title) +
                                      "\n                        "
                                  )
                                ]
                              )
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "d-flex flex-row mt-9" },
                            [
                              _c(
                                "span",
                                { staticClass: "mx-2" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      on: { click: _vm.likePost }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          class: {
                                            "red--text": _vm.post.is_liked
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(
                                                _vm.post.is_liked
                                                  ? " mdi-heart"
                                                  : " mdi-heart-outline"
                                              ) +
                                              "\n                                "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "grey--text" }, [
                                    _vm._v(_vm._s(_vm.post.likes_count))
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "mx-2" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.bookmarkPost(_vm.post)
                                        }
                                      }
                                    },
                                    [
                                      _c("v-icon", [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(
                                              _vm.post.is_bookmarked
                                                ? "mdi-bookmark"
                                                : "mdi-bookmark-outline"
                                            ) +
                                            "\n                                "
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "mx-2" },
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { icon: "" } },
                                    [
                                      _c("v-icon", [
                                        _vm._v("mdi-comment-outline")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "grey--text" }, [
                                    _vm._v(_vm._s(_vm.post.comments_count))
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c("v-icon", [_vm._v("mdi-telegram")]),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  directives: [
                                    {
                                      name: "clipboard",
                                      rawName: "v-clipboard:copy",
                                      value: _vm.short_link,
                                      expression: "short_link",
                                      arg: "copy"
                                    }
                                  ],
                                  staticClass: "ma-2 white--text",
                                  attrs: {
                                    outlined: "",
                                    rounded: "",
                                    color: "blue-grey"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.short_link) +
                                      "\n                            "
                                  ),
                                  _c(
                                    "v-icon",
                                    { attrs: { right: "", dark: "" } },
                                    [
                                      _vm._v(
                                        "\n                                mdi-content-copy\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-12" },
                        [
                          _c("p", { staticClass: "body-2 font-weight-bold" }, [
                            _vm._v(
                              "\n                        شاید از این نوشته‌ها هم خوشتان بیاید\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-container",
                            [
                              _c(
                                "v-row",
                                _vm._l(_vm.related_posts, function(
                                  related_post,
                                  index
                                ) {
                                  return _c(
                                    "v-col",
                                    {
                                      key: index,
                                      attrs: { cols: "12", md: "4" }
                                    },
                                    [
                                      _c(
                                        "v-card",
                                        [
                                          _c("v-img", {
                                            attrs: {
                                              height: "160",
                                              "max-height": "160",
                                              src: related_post.banner_src
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "router-link",
                                            {
                                              attrs: {
                                                to: {
                                                  name: "post-show",
                                                  params: {
                                                    slug: related_post.slug
                                                  }
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-card-title",
                                                {
                                                  staticClass:
                                                    "title body-1 card-title-ui"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(
                                                        related_post.title
                                                      ) +
                                                      "\n                                        "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-card-actions",
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "d-flex flex-row"
                                                },
                                                [
                                                  _c(
                                                    "v-avatar",
                                                    { attrs: { size: "45" } },
                                                    [
                                                      _c("v-img", {
                                                        attrs: {
                                                          src:
                                                            related_post.user
                                                              .profile_src
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "mr-2" },
                                                    [
                                                      _c(
                                                        "router-link",
                                                        {
                                                          attrs: {
                                                            to: {
                                                              name:
                                                                "user-posts",
                                                              params: {
                                                                username:
                                                                  related_post
                                                                    .user
                                                                    .username
                                                              }
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "body-2"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  related_post
                                                                    .user.name
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass: "caption"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    خواندن\n                                                    " +
                                                              _vm._s(
                                                                related_post.min_read
                                                              ) +
                                                              "\n                                                    دقیقه\n                                                "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
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
                                                      return _vm.bookmarkPost(
                                                        related_post
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v(
                                                      "\n                                                " +
                                                        _vm._s(
                                                          related_post.is_bookmarked
                                                            ? "mdi-bookmark"
                                                            : "mdi-bookmark-outline"
                                                        ) +
                                                        "\n                                            "
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
                                }),
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-12" },
                        [
                          _c("p", [_vm._v("پاسخ ها")]),
                          _vm._v(" "),
                          _c(
                            "div",
                            [
                              _c("v-textarea", {
                                attrs: {
                                  outlined: "",
                                  label: "نظر خود را بنویسید"
                                },
                                model: {
                                  value: _vm.comment.content,
                                  callback: function($$v) {
                                    _vm.$set(_vm.comment, "content", $$v)
                                  },
                                  expression: "comment.content"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "d-flex justify-end" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        rounded: "",
                                        color: "primary",
                                        large: "",
                                        disabled: !_vm.disableBtn
                                      },
                                      on: { click: _vm.saveComment }
                                    },
                                    [
                                      _vm._v(
                                        "ارسال دیدگاه\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.post.parent_comments, function(
                            comment,
                            index
                          ) {
                            return _c("post-comments", {
                              key: index,
                              attrs: { data: comment }
                            })
                          })
                        ],
                        2
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
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
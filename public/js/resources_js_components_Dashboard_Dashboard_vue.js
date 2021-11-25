(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Dashboard",
  data: function data() {
    return {
      user: '',
      product: '',
      preloader1: false,
      preloader2: false
    };
  },
  methods: {
    showTotal: function showTotal() {
      var _this = this;

      this.preloader1 = true;
      this.axios.get('api/total_user').then(function (response) {
        _this.user = response.data.data;
        _this.preloader1 = false;
      })["catch"](function (error) {
        _this.user = 0;
      });
      this.preloader2 = true;
      this.axios.get('api/total_product').then(function (response) {
        _this.product = response.data.data;
        _this.preloader2 = false;
      })["catch"](function (error) {
        _this.product = 0;
      });
    }
  },
  mounted: function mounted() {
    this.showTotal();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=style&index=0&id=c3d42bc4&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=style&index=0&id=c3d42bc4&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.circle-tile[data-v-c3d42bc4] {\r\n    margin-bottom: 15px;\r\n    text-align: center;\n}\n.circle-tile-heading[data-v-c3d42bc4] {\r\n    border: 3px solid rgba(255, 255, 255, 0.3);\r\n    border-radius: 100%;\r\n    color: #FFFFFF;\r\n    height: 80px;\r\n    margin: 0 auto -40px;\r\n    position: relative;\r\n    transition: all 0.3s ease-in-out 0s;\r\n    width: 80px;\n}\n.circle-tile-heading .fa[data-v-c3d42bc4] {\r\n    line-height: 80px;\n}\n.circle-tile-content[data-v-c3d42bc4] {\r\n    padding-top: 50px;\n}\n.circle-tile-number[data-v-c3d42bc4] {\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    padding: 5px 0 15px;\n}\n.circle-tile-description[data-v-c3d42bc4] {\r\n    text-transform: uppercase;\n}\n.circle-tile-footer[data-v-c3d42bc4] {\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n    color: rgba(255, 255, 255, 0.5);\r\n    display: block;\r\n    padding: 5px;\r\n    transition: all 0.3s ease-in-out 0s;\n}\n.circle-tile-footer[data-v-c3d42bc4]:hover {\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n    color: rgba(255, 255, 255, 0.5);\r\n    text-decoration: none;\n}\n.circle-tile-heading.dark-blue[data-v-c3d42bc4]:hover {\r\n    background-color: #2E4154;\n}\n.circle-tile-heading.green[data-v-c3d42bc4]:hover {\r\n    background-color: #138F77;\n}\n.circle-tile-heading.orange[data-v-c3d42bc4]:hover {\r\n    background-color: #DA8C10;\n}\n.circle-tile-heading.blue[data-v-c3d42bc4]:hover {\r\n    background-color: #2473A6;\n}\n.circle-tile-heading.red[data-v-c3d42bc4]:hover {\r\n    background-color: #CF4435;\n}\n.circle-tile-heading.purple[data-v-c3d42bc4]:hover {\r\n    background-color: #7F3D9B;\n}\n.tile-img[data-v-c3d42bc4] {\r\n    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.9);\n}\n.dark-blue[data-v-c3d42bc4] {\r\n    background-color: #34495E;\n}\n.green[data-v-c3d42bc4] {\r\n    background-color: #16A085;\n}\n.blue[data-v-c3d42bc4] {\r\n    background-color: #2980B9;\n}\n.orange[data-v-c3d42bc4] {\r\n    background-color: #F39C12;\n}\n.red[data-v-c3d42bc4] {\r\n    background-color: #E74C3C;\n}\n.purple[data-v-c3d42bc4] {\r\n    background-color: #8E44AD;\n}\n.dark-gray[data-v-c3d42bc4] {\r\n    background-color: #7F8C8D;\n}\n.gray[data-v-c3d42bc4] {\r\n    background-color: #95A5A6;\n}\n.light-gray[data-v-c3d42bc4] {\r\n    background-color: #BDC3C7;\n}\n.yellow[data-v-c3d42bc4] {\r\n    background-color: #F1C40F;\n}\n.text-dark-blue[data-v-c3d42bc4] {\r\n    color: #34495E;\n}\n.text-green[data-v-c3d42bc4] {\r\n    color: #16A085;\n}\n.text-blue[data-v-c3d42bc4] {\r\n    color: #2980B9;\n}\n.text-orange[data-v-c3d42bc4] {\r\n    color: #F39C12;\n}\n.text-red[data-v-c3d42bc4] {\r\n    color: #E74C3C;\n}\n.text-purple[data-v-c3d42bc4] {\r\n    color: #8E44AD;\n}\n.text-faded[data-v-c3d42bc4] {\r\n    color: rgba(255, 255, 255, 0.7);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/Dashboard/Dashboard.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Dashboard/Dashboard.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_c3d42bc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=c3d42bc4&scoped=true& */ "./resources/js/components/Dashboard/Dashboard.vue?vue&type=template&id=c3d42bc4&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_c3d42bc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=c3d42bc4&scoped=true&lang=css& */ "./resources/js/components/Dashboard/Dashboard.vue?vue&type=style&index=0&id=c3d42bc4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dashboard_vue_vue_type_template_id_c3d42bc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_c3d42bc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c3d42bc4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Dashboard/Dashboard.vue?vue&type=template&id=c3d42bc4&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Dashboard.vue?vue&type=template&id=c3d42bc4&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_c3d42bc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_c3d42bc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_c3d42bc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=c3d42bc4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=template&id=c3d42bc4&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Dashboard/Dashboard.vue?vue&type=style&index=0&id=c3d42bc4&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Dashboard.vue?vue&type=style&index=0&id=c3d42bc4&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_c3d42bc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=c3d42bc4&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=style&index=0&id=c3d42bc4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_c3d42bc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_c3d42bc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_c3d42bc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_c3d42bc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=template&id=c3d42bc4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=template&id=c3d42bc4&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "container bootstrap snippets bootdey" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-2 col-sm-6" }, [
          _c("div", { staticClass: "circle-tile " }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "circle-tile-content orange" }, [
              _c("div", { staticClass: "circle-tile-description text-faded" }, [
                _vm._v(" Total User ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "circle-tile-number text-faded " }, [
                _vm.preloader1
                  ? _c(
                      "div",
                      {
                        staticClass: "spinner-border text-warning",
                        attrs: { role: "status" }
                      },
                      [
                        _c("span", { staticClass: "sr-only" }, [
                          _vm._v("Loading...")
                        ])
                      ]
                    )
                  : _vm._e(),
                _vm._v(_vm._s(_vm.user))
              ]),
              _vm._v(" "),
              _vm._m(2)
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-2 col-sm-6" }, [
          _c("div", { staticClass: "circle-tile " }, [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "circle-tile-content blue" }, [
              _c("div", { staticClass: "circle-tile-description text-faded" }, [
                _vm._v(" Total Product ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "circle-tile-number text-faded " }, [
                _vm.preloader2
                  ? _c(
                      "div",
                      {
                        staticClass: "spinner-border text-warning",
                        attrs: { role: "status" }
                      },
                      [
                        _c("span", { staticClass: "sr-only" }, [
                          _vm._v("Loading...")
                        ])
                      ]
                    )
                  : _vm._e(),
                _vm._v("\n                            " + _vm._s(_vm.product))
              ]),
              _vm._v(" "),
              _vm._m(4)
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3"
      },
      [_c("div", [_c("h1", { staticClass: "h2" }, [_vm._v("Dashboard")])])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "#" } }, [
      _c("div", { staticClass: "circle-tile-heading orange" }, [
        _c("i", { staticClass: "fa fa-comments fa-fw fa-3x" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "circle-tile-footer", attrs: { href: "#" } },
      [
        _vm._v("More Info"),
        _c("i", { staticClass: "fa fa-chevron-circle-right" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "#" } }, [
      _c("div", { staticClass: "circle-tile-heading blue" }, [
        _c("i", { staticClass: "fa fa-comments fa-fw fa-3x" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "circle-tile-footer", attrs: { href: "#" } },
      [
        _vm._v("More Info"),
        _c("i", { staticClass: "fa fa-chevron-circle-right" })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=style&index=0&id=c3d42bc4&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=style&index=0&id=c3d42bc4&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=c3d42bc4&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=style&index=0&id=c3d42bc4&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5d94244e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
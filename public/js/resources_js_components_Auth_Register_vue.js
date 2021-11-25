(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Auth_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Register.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Register.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Register",
  data: function data() {
    return {
      registerData: {
        name: '',
        email: '',
        password: ''
      },
      loginData: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    register: function register() {
      var _this = this;

      this.axios.post("api/v1/register", this.registerData).then(function (response) {
        if (response.data.status === true) {
          _this.login(_this.registerData.email, _this.registerData.password);
        } else {
          alert("Error " + response.data.message);
        }
      })["catch"](function (error) {
        alert("Error " + error.response.data.message);
      });
    },
    login: function login(email, password) {
      this.loginData.email = email;
      this.loginData.password = password;
      this.axios.post("api/v1/login", this.loginData).then(function (response) {
        if (response.data.status === true) {
          alert("Success " + response.data.message);
          window.location.href = '/dashboard';
        } else {
          alert("Error " + response.data.message);
        }
      })["catch"](function (error) {
        alert("Error " + error.response.data.message);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Auth/Register.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Auth/Register.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_ff714c22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=ff714c22&scoped=true& */ "./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Register_vue_vue_type_template_id_ff714c22_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_ff714c22_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ff714c22",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Auth/Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_ff714c22_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_ff714c22_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_ff714c22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=ff714c22&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "form",
    {
      staticClass: "form-signin",
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.register()
        }
      }
    },
    [
      _c("img", {
        staticClass: "mb-4",
        attrs: {
          src:
            "https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg",
          alt: "",
          width: "72",
          height: "72"
        }
      }),
      _vm._v(" "),
      _c("h1", { staticClass: "h3 mb-3 font-weight-normal" }, [
        _vm._v("Register")
      ]),
      _vm._v(" "),
      _c("label", { staticClass: "sr-only", attrs: { for: "inputName" } }, [
        _vm._v("Name address")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.registerData.name,
            expression: "registerData.name"
          }
        ],
        staticClass: "form-control",
        attrs: {
          type: "text",
          id: "inputName",
          placeholder: "Email Name",
          name: "name"
        },
        domProps: { value: _vm.registerData.name },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.registerData, "name", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("label", { staticClass: "sr-only", attrs: { for: "inputEmail" } }, [
        _vm._v("Email address")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.registerData.email,
            expression: "registerData.email"
          }
        ],
        staticClass: "form-control",
        attrs: {
          type: "text",
          id: "inputEmail",
          placeholder: "Email address",
          name: "email"
        },
        domProps: { value: _vm.registerData.email },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.registerData, "email", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("label", { staticClass: "sr-only", attrs: { for: "inputPassword" } }, [
        _vm._v("Password")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.registerData.password,
            expression: "registerData.password"
          }
        ],
        staticClass: "form-control",
        attrs: {
          type: "password",
          id: "inputPassword",
          placeholder: "Password",
          name: "password"
        },
        domProps: { value: _vm.registerData.password },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.registerData, "password", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-lg btn-primary btn-block",
          attrs: { type: "submit" }
        },
        [_vm._v("Register")]
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "p",
        [
          _vm._v("Already a member? "),
          _c("router-link", { attrs: { to: "/login" } }, [_vm._v("Login Here")])
        ],
        1
      ),
      _vm._v(" "),
      _c("p", { staticClass: "mt-5 mb-3 text-muted" }, [_vm._v("© 2017-2018")])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
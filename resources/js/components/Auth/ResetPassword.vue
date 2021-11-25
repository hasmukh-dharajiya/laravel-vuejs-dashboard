<template>
  <div>
      <!-- Header -->
      <div v-if="isValidateKey">
          <div class="header bg-gradient-primary py-3 py-lg-8 pt-lg-9">
              <div class="container">
                  <div class="header-body text-center mb-7">
                      <div class="row justify-content-center">
                          <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                              <h1 class="text-white">yahoo ...</h1>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="separator separator-bottom separator-skew zindex-100">
                  <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
                  </svg>
              </div>
          </div>
          <div class="container mt--8 pb-5">
              <div class="row justify-content-center">
                  <div class="col-lg-5 col-md-7">
                      <div class="card bg-secondary border-0 mb-0" id="forgotLoading">
                          <div class="card-header bg-transparent">
                              <div class="text-muted text-center mt-2 h1">
                                  Reset Password
                              </div>
                          </div>
                          <div class="card-body px-lg-5 py-lg-5">
                              <form v-on:submit.prevent="resetPasswordFun()" ref="resetForm">
                                  <div class="form-group mb-3">
                                      <div class="input-group input-group-merge input-group-alternative">
                                          <div class="input-group-prepend">
                                              <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                          </div>
                                          <input class="form-control" placeholder="**********" name="email" type="password" v-model="resetPassword.password">
                                      </div>
                                  </div>
                                  <div class="form-group mb-3">
                                      <div class="input-group input-group-merge input-group-alternative">
                                          <div class="input-group-prepend">
                                              <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                          </div>
                                          <input class="form-control" placeholder="**********" name="password" type="password" v-model="resetPassword.new_password">
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-lg-6">
                                          <button type="submit" class="btn btn-primary btn-sm">Reset Password</button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="container" v-else>
          <div class="header-body text-center mt-5 mb-7">
              <div align="center">
                  <img src="https://tlr.stripocdn.email/content/guids/CABINET_2663efe83689b9bda1312f85374f56d2/images/10381620386430630.png" alt style="display: block;" width="100">
                  <h2>Invalid Code Or Link is Expire Please Try Again !</h2>
                  <router-link to="/" class="btn btn-primary btn-sm">Back To Login</router-link>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "ResetPassword",
    data(){
        return {
            resetPassword :{
                key:null,
                password: null,
                new_password: null,
            },
            preLoader: false,
            isValidateKey: false,
        }
    },
    methods:{
        validateKey(){
            this.preLoader = true;
            this.axios.get('/api/v1/reset_password/'+this.$route.params.key)
                .then(response => {
                    this.isValidateKey = response.data.status;
                    this.preLoader = false;
                })
                .catch(error => {
                    this.isVerify = error.response.data.status;
                    this.preLoader = false;
                });
        },
        resetPasswordFun(){
            this.resetPassword.key = this.$route.params;
            this.axios.post('/api/v1/reset_password/',this.resetPassword)
                .then(response => {
                    this.successNotification(response.data.message);
                    this.isValidateKey = response.data.status;
                    this.preLoader = false;
                })
                .catch(error => {
                    this.errorNotification(error.response.data.message);
                    this.isVerify = error.response.data.status;
                });
        }
    },
    beforeMount() {
        this.validateKey();
    }
}
</script>

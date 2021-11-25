<template>
    <div>
        <!-- Header -->
        <div class="header bg-gradient-primary py-3 py-lg-8 pt-lg-9">
            <div class="container">
                <div class="header-body text-center mb-7">
                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                            <h1 class="text-white">Welcome!</h1>
                            <p class="text-lead text-white">Login Your account in your project for free.</p>
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
        <!-- Page content -->
        <div class="container mt--8 pb-5">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-7">
                    <div class="card bg-secondary border-0 mb-0" id="loginLoader">
                        <div class="card-header bg-transparent">
                            <div class="text-muted text-center mt-2 h1">
                                Login
                            </div>
                        </div>
                        <div class="card-body px-lg-5 py-lg-5">
                            <form role="form" @submit.prevent="login()">
                                <div class="form-group mb-3">
                                    <div class="input-group input-group-merge input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                        </div>
                                        <input class="form-control" placeholder="Email" type="email" name="email" v-model="loginData.email">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group input-group-merge input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                        </div>
                                        <input class="form-control" placeholder="Password" type="password" v-model="loginData.password">
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary my-4">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                            <router-link class="text-light" to="/forgot-password"><small>Forgot password?</small></router-link>
                        </div>
                        <div class="col text-center">
                            <router-link class="text-light" to="/register"><small>Create new account</small></router-link>
                            <a href="#" ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Login",
    data(){
        return{
            loginData:{
                email:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            let loading = this.block('loginLoader');
            this.axios.post('api/v1/login',this.loginData)
                .then(response => {
                    if (response.data.status === true){
                        loading.close()
                        window.location.href = '/dashboard';
                    }else {
                        this.errorNotification(response.data.message)
                        loading.close()
                    }
                })
                .catch(error =>{
                    this.errorNotification(error.response.data.message)
                    loading.close()
                });
        }
    },
}
</script>

<style scoped>

</style>

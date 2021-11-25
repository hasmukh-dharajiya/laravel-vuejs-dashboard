<template>
    <div>
        <!-- Header -->
        <div class="header bg-gradient-primary py-3 py-lg-8 pt-lg-9">
            <div class="container">
                <div class="header-body text-center mb-7">
                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                            <h1 class="text-white">Create an account</h1>
                            <p class="text-lead text-white">create new account in your project for free.</p>
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
        <div class="container mt--8 pb-5" >
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-7">
                    <div class="card bg-secondary border-0 mb-0" id="registerLoader">
                        <div class="card-header bg-transparent">
                            <div class="text-muted text-center mt-2 h1">
                                Register
                            </div>
                        </div>
                        <div class="card-body px-lg-5 py-lg-5">
                            <form role="form" @submit.prevent="register()">
                                <div class="form-group mb-3">
                                    <div class="input-group input-group-merge input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                        </div>
                                        <input class="form-control" placeholder="Name" type="text" v-model="registerData.name">
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <div class="input-group input-group-merge input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                        </div>
                                        <input class="form-control" placeholder="Email" type="email" v-model="registerData.email">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group input-group-merge input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                        </div>
                                        <input class="form-control" placeholder="Password" type="password" v-model="registerData.password">
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary my-4">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col text-center">
                            <router-link class="text-light" to="/login"><small>Already have Account</small></router-link>
                            <a href="#" ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!--    <form class="form-signin" >-->
<!--        <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">-->
<!--        <h1 class="h3 mb-3 font-weight-normal">Register</h1>-->
<!--        <label for="inputName" class="sr-only">Name address</label>-->
<!--        <input type="text" id="inputName" class="form-control" placeholder="Email Name" name="name" >-->
<!--        <label for="inputEmail" class="sr-only">Email address</label>-->
<!--        <input type="text" id="inputEmail" class="form-control" placeholder="Email address" name="email" >-->
<!--        <label for="inputPassword" class="sr-only">Password</label>-->
<!--        <input type="password" id="inputPassword" class="form-control" placeholder="Password" name="password" >-->
<!--        <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>-->
<!--        <br>-->
<!--        <p>Already a member? <router-link to="/login">Login Here</router-link></p>-->
<!--        <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>-->
<!--    </form>-->
</template>
<script>
export default {
    name: "Register",
    data(){
        return {
            registerData:{
                name: '',
                email: '',
                password:''
            },
            loginData:{
                email: '',
                password:''
            }

        }
    },
    methods:{
        register(){
            let loading = this.block('registerLoader');
            this.axios.post("api/v1/register",this.registerData)
                .then(response =>{
                    if (response.data.status === true){
                        this.login(this.registerData.email,this.registerData.password)
                    }else{
                        this.errorNotification(response.data.message)
                        loading.close();
                    }
                })
                .catch(error => {
                    this.errorNotification(error.response.data.message)
                    loading.close();
                });
        },
        login(email,password){
            this.loginData.email = email;
            this.loginData.password = password;
            let loading = this.block('registerLoader');
            this.axios.post("api/v1/login",this.loginData)
                .then(response => {
                    if (response.data.status === true){
                        let loading = this.block('registerLoader');
                        window.location.href = '/dashboard';
                    }else{
                        this.errorNotification(response.data.message)
                        let loading = this.block('registerLoader');
                    }
                })
                .catch(error => {
                    this.errorNotification(error.response.data.message)
                    let loading = this.block('registerLoader');
                });
        }
    },
}
</script>

<style scoped>

</style>

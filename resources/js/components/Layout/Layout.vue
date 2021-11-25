<template>
    <div>
            <div v-if="!isVerify" class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Hey {{ name }} !</strong> Please Verify your email address...
                <button type="button" v-on:click="sendMail()" :disabled="isActive" class="btn btn-primary btn-sm">
                    <div>
                        <div class="spinner-border text-warning" role="status" v-if="preloader">
                        </div>
                        <span v-if="!preloader">Verify Now</span>
                        <div v-if="MBox">Check Mail Box</div>
                    </div>
                </button>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

        <Sidebar></Sidebar>
        <div class="main-content" id="panel">
                <Navbar></Navbar>
                <router-view></router-view>
         </div>
    </div>
</template>

<script>

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
export default {
    name: "Layout",
    components: {Footer, Sidebar, Navbar},
    data(){
        return{
            isVerify:true,
            preloader:false,
            isActive: false,
            name:'',
            email: '',
            MBox: false
        }
    },
    methods:{
        sendMail(){
            this.preloader = true;
            this.isActive = true;
            this.axios.get('api/v1/sendVerifyMail')
                .then(response =>{
                    if (response.data.status === true ){
                        this.successNotification(response.data.message)
                        this.preloader = false;
                        this.isActive = false;
                    }
                })
                .catch(error =>{
                    this.errorNotification(error.response.data.message)
                    this.preloader = false;
                } )
        },
        getUserInfo(){
            this.axios.get("api/v1/get/user/info")
                .then(response => {
                    let item = response.data.data.original.data;
                    this.name = item.name;
                    this.isVerify = item.confirmed;
                    this.email = item.email;
                })
                .catch(error => {
                    console.log(error.response.data)
                })
        }
    },
    beforeMount() {
        this.axios
        .get('api/v1/auth/check')
        .then(response => {
        })
        .catch(error => {
            if (error.response.data.status === false){
                window.location.href = '/login';
            }
        })
    },
    mounted() {
        this.getUserInfo();
    }
}
</script>

<style scoped>
 .fade {
     transition: opacity .15s linear;
 }
.alert-dismissible {
    padding-right: 3.85rem;
}
.alert {
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: unset;
    border: unset;
    border-radius: unset;
    margin-left: 250px !important;
}
 @media (max-width: 1199.98px){
     .alert {
         margin-left: 0px !important;
     }
 }
 .spinner-border {
     width: 1rem;
     height: 1rem;
 }
</style>

<template>
    <div>
        <div class="container">
            <div class="header-body text-center mt-5 mb-7">
                <div align="center" v-if="isVerify">
                    <img src="https://tlr.stripocdn.email/content/guids/CABINET_2663efe83689b9bda1312f85374f56d2/images/10381620386430630.png" alt style="display: block;" width="100">
                    <h2>Email Verify Successfully</h2>
                    <router-link to="/" class="btn btn-success">Back To Home</router-link>
                </div>
                <div align="center" v-else>
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
    name: "VerifyEmail",
    data(){
        return{
            isVerify: false,
            preLoader: false,
        }
    },
    beforeMount() {
        this.preLoader = true;
        this.axios.get('/api/v1/conform-mail/'+this.$route.params.key)
            .then(response => {
                this.isVerify = response.data.status;
                this.preLoader = false;
            })
            .catch(error => {
                console.log(error.response.data)
                this.isVerify = error.response.data.status;
                this.preLoader = false;
            });
    }
}
</script>

<template>
    <div>
        <div class="pl-lg-4" id="notificationLoading">
            <form v-on:submit.prevent="">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="con-switch">
                            <vs-switch v-model="notification.email" v-on:click="changeNotification('email_notification')"/>
                            <h3 class="ml-2 d-block">Email Notification</h3>
                        </div>
                        <div class="con-switch">
                            <vs-switch v-model="notification.mobile" v-on:click="changeNotification('mobile_notification')"/>
                            <h3 class="ml-2 d-block">Mobile Notification</h3>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Notifications",
    data(){
        return{
            notification :{
                mobile: null,
                email:null
            }
        }
    },
    methods:{
        getNotification(){
            let Loading = this.block("notificationLoading");
            this.axios.get("/api/v1/notification")
                .then(response =>{
                    let data = response.data;
                    if (data.status === true){
                        this.notification.mobile = data.data.mobile_notification ? true : false;
                        this.notification.email = data.data.email_notification ? true : false;
                    }
                    Loading.close()
                })
                .catch(error =>{
                    console.log(error.response.data)
                    Loading.close()
                })
        },
        changeNotification(nID){
            if (nID == "email_notification"){
                this.updateNotification("email_notification",!this.notification.email);
            }
            if (nID == "mobile_notification"){
                this.updateNotification("mobile_notification",!this.notification.mobile);
            }
        },
        updateNotification(setting_name,setting_value){
            let updatePostData = {
                setting_name : setting_name,
                setting_value : setting_value
            }
            let Loading = this.block("notificationLoading");
            this.axios.post('/api/v1/update/notification',updatePostData)
                .then(response => {
                    if (response.data.status === true){
                        this.successNotification(response.data.message)
                        Loading.close();
                    }else {
                        Loading.close();
                    }
                })
                .catch(error => {
                    Loading.close();
                    this.errorNotification(error.response.data.message)
                });
        }
    },
    mounted() {
        this.getNotification();
    },
}
</script>

<style scoped>
.con-switch{
    display: flex;
    margin-bottom: 5px;
}
.vs-switch__background {
    background: #5e72e4;
}
</style>

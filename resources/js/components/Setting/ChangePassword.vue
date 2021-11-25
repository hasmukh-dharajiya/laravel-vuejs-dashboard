<template>
    <div>
        <div class="pl-lg-4" id="formLoading">
            <form v-on:submit.prevent="changePasswordFun()" ref="resetForm">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label class="form-control-label" for="current_password">Current Password</label>
                            <input type="password" id="current_password" class="form-control" placeholder="*******"
                                   v-model="changePassword.currentPassword">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label class="form-control-label" for="new_password">New Password</label>
                            <input type="password" id="new_password" class="form-control" placeholder="*******"
                                   v-model="changePassword.newPassword">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label class="form-control-label" for="confirm_password">Confirm Password</label>
                            <input type="password" id="confirm_password" class="form-control" placeholder="*******"
                                   v-model="changePassword.confirmPassword">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <button type="submit" class="btn btn-primary btn-sm">Change Password</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChangePassword",
    data() {
        return {
            changePassword: {
                currentPassword: null,
                newPassword: null,
                confirmPassword: null,
            }
        }
    },
    methods: {
        changePasswordFun() {
            let Loading = this.block("formLoading");
            this.axios.post('/api/v1/change_password',this.changePassword)
                .then(response => {
                    if (response.data.status === true){
                        this.successNotification(response.data.message)
                        Loading.close();
                        this.$refs.resetForm.reset();
                    }else {
                        Loading.close();
                    }
                })
                .catch(error => {
                    Loading.close();
                    this.errorNotification(error.response.data.message)
                });
        }
    }
}
</script>

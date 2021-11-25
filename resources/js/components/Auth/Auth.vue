<template>
    <div class="text-center">
        <!-- Main content -->
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "Auth",
    beforeMount() {
        this.axios
        .get("api/v1/auth/check")
        .then(response => {
            if (response.data.status === true){
                window.location.href = '/dashboard';
            }else {
                window.location.href = '/login';
            }
        })
        .catch(error => {

        });
    }
}
</script>

<style>
.main-content{
    background-color: #172b4d;
}
</style>

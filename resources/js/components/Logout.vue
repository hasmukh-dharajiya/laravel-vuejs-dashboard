<template>

</template>

<script>
export default {
    name: "Logout",
    mounted() {
        this.axios.get('api/v1/logout')
            .then(response => {
                if (response.data.status === true){
                    document.location.href = '/login';
                }
            })
            .catch(error => {
                this.errorNotification(error.response.data.message)
            })
    }
}
</script>

<style scoped>

</style>

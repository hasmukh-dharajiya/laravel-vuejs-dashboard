<template>
    <div class="row py-4" id="summaryLoading">
        <div class="col-xl-3 col-md-6 ">
            <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <h5 class="card-title text-uppercase text-muted mb-0">Total Project</h5>
                            <span class="h2 font-weight-bold mb-0">{{ this.summary.totalProject }}</span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                <i class="fas fa-project-diagram"></i>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 mb-0 text-sm"></div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 ">
            <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <h5 class="card-title text-uppercase text-muted mb-0">Total Task</h5>
                            <span class="h2 font-weight-bold mb-0">{{ this.summary.totalTask }}</span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                <i class="fas fa-tasks"></i>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 mb-0 text-sm"></div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 ">
            <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <h5 class="card-title text-uppercase text-muted mb-0">Complete Project</h5>
                            <span class="h2 font-weight-bold mb-0">{{ this.summary.completeProject }}</span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                <i class="fas fa-check"></i>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 mb-0 text-sm"></div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 ">
            <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <h5 class="card-title text-uppercase text-muted mb-0">Complete Task</h5>
                            <span class="h2 font-weight-bold mb-0">{{ this.summary.completeTask }}</span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                <i class="fas fa-check"></i>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 mb-0 text-sm"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Summary",
    data(){
        return {
           summary : {
               totalProject:0,
               totalTask:0,
               completeProject:0,
               completeTask:0,
           }
        }
    },
    methods:{
        getSummary(){
            let loading = this.block("summaryLoading","waves");
            this.axios.get("/api/v1/count")
            .then(response => {
                let item = response.data.data;
                this.summary.totalProject = item.totalProject
                this.summary.totalTask = item.totalTask
                this.summary.completeProject = item.completeProject
                this.summary.completeTask = item.completeTask
                loading.close()
            })
            .catch(error =>{
                loading.close()
            });
        }
    },
    mounted() {
        this.getSummary();
    }
}
</script>

<style scoped>

</style>

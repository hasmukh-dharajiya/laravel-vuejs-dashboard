<template>
    <div class="row">
        <div class="col-md-7 col ">
            <div class="card">
                <div class="card-header border-0">
                    <div class="row align-items-center">
                        <div class="col">
                            <h3 class="mb-0">Task</h3>
                        </div>
                        <div class="col text-right">
                            <router-link to="/task" class="btn btn-sm btn-primary">See all</router-link>
                        </div>
                    </div>
                </div>
                <div class="table-responsive" id="taskLoading">
                    <!-- Projects table -->
                    <table class="table align-items-center table-flush">
                        <thead class="thead-light">
                        <tr>
                            <th scope="col">Task</th>
                            <th scope="col">User</th>
                            <th scope="col" class="sort">Status</th>
                            <th scope="col">Due date</th>
                        </tr>
                        </thead>
                        <tbody v-for="item in items" :key="item.id">
                        <tr>
                            <th scope="row">
                                {{ item.name }}
                            </th>
                            <td>
                                {{ item.responsible_user }}
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <span class="badge badge-dot mr-4">
                                            <i class="bg-danger" v-if="item.status == status.pending"></i>
                                            <i class="bg-success" v-if="item.status == status.completed"></i>
                                            <span class="status">{{ item.status }}</span>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <span class="mr-2">{{ item.due_date }}</span>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                        <tbody v-if="dataNotFound">
                        <tr class="text-center">
                          <td colspan="10">No Data Display</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskTable",
    data(){
        return{
            items:{},
            status:{
              pending : "PENDING",
              completed : "COMPLETED",
            },
            dataNotFound : false
        }
    },
    methods:{
        getTask(){
            let Loading = this.block("taskLoading");
            this.axios.get("/api/v1/tasks")
                .then(response => {
                    this.items = response.data.data;
                    Loading.close();
                    this.dataNotFound = false
                })
                .catch(error => {
                  this.items = null
                  this.dataNotFound = true
                    Loading.close();
                });
        }
    },
    mounted() {
        this.getTask();
    }
}
</script>

<template>
    <div>
        <div class="header bg-primary pb-6">
            <div class="container-fluid">
                <div class="header-body">
                    <div class="row align-items-center py-4">
                        <div class="col-lg-6 col-7">
                            <h6 class="h2 text-white d-inline-block mb-0">Task</h6>
                        </div>
                        <div class="col-lg-6 col-5 text-right">
                            <a href="#" class="btn btn-sm btn-neutral" @click="addTaskModel=!addTaskModel">New</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid mt--6">
            <div class="row">
                <div class="col">
                    <div class="card" id="deleteLoading">
                        <!-- Card header -->
                        <div class="card-header border-0">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h3 class="mb-0">Task</h3>
                                </div>
                            </div>
                        </div>

                        <!-- Light table -->
                        <div class="table-responsive" id="taskLoading">
                            <table class="table align-items-center table-flush">
                                <thead class="thead-light">
                                <tr>
                                    <th scope="col" class="sort">Task</th>
                                    <th scope="col" class="sort">Responsible User</th>
                                    <th scope="col" class="sort">Status</th>
                                    <th scope="col" class="sort">Due Date</th>
                                    <th scope="col" class="sort">Action</th>
                                </tr>
                                </thead>
                                <tbody class="list" v-for="item in items" :key="item.id">
                                <tr>
                                    <th scope="row">
                                        <div class="media align-items-center">
                                            <div class="media-body">
                                                <span class="name mb-0 text-sm">{{ item.name }}</span>
                                            </div>
                                        </div>
                                    </th>
                                    <td class="budget">
                                        {{ item.responsible_user }}
                                    </td>
                                    <td>
                                        <span class="badge badge-dot mr-4">
                                            <i class="bg-danger" v-if="item.status == status.pending"></i>
                                            <i class="bg-success" v-if="item.status == status.completed"></i>
                                            <span class="status">{{ item.status }}</span>
                                        </span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="completion mr-2">{{ item.due_date }}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div style="display: inline-flex">
                                            <div>
                                                <button class="btn btn-primary btn-sm" @click="editBtn(item.id)">
                                                    <i class="far fa-edit"></i>
                                                    <span><strong>Edit</strong></span>
                                                </button>
                                                <button href="#" class="btn btn-danger btn-sm"
                                                        @click="deleteBtn(item.id)">
                                                    <i class="fas fa-trash-alt"></i>
                                                    <span><strong>Delete</strong></span>
                                                </button>
                                            </div>
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
        </div>
        <vs-dialog v-model="addTaskModel" prevent-close blur>
            <template #header>
                <h4 class="not-margin">
                    Add New <b>Task</b>
                </h4>
            </template>
            <form v-on:submit.prevent="addTask()" id="addTaskForm">
                <div class="form-group">
                    <label class="form-control-label">Name Of Task</label>
                    <input class="form-control" placeholder="Name" v-model="addPostData.name"/>
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Responsible User</label>
                    <input class="form-control" placeholder="Responsible User" v-model="addPostData.responsible_user"/>
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Status</label>
                    <select class="form-control" @change="onChangeStatus($event)">
                        <option value="0">Select Status</option>
                        <option value="PENDING">Pending</option>
                        <option value="COMPLETED">Completed</option>
                    </select>
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Due Date</label>
                    <input class="form-control" placeholder="due date" type="date" v-model="addPostData.due_date"/>
                </div>
                <div class="footer-dialog text-center">
                    <button class="btn btn-primary" type="submit">Add New Task</button>
                </div>
            </form>
        </vs-dialog>

        <vs-dialog v-model="editTaskModel" prevent-close blur>
            <template #header>
                <h4 class="not-margin">
                    Add New <b>Task</b>
                </h4>
            </template>
            <form v-on:submit.prevent="updateTask()" id="editTaskForm">
                <div class="form-group">
                    <label class="form-control-label">Name Of Task</label>
                    <input class="form-control" placeholder="Name" v-model="editPostData.name"/>
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Responsible User</label>
                    <input class="form-control" placeholder="Responsible User" v-model="editPostData.responsible_user"/>
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Status</label>
                    <select class="form-control" @change="onEditChangeStatus($event)" ref="getStatus">
                        <option value="0">Select Status</option>
                        <option value="PENDING">Pending</option>
                        <option value="COMPLETED">Completed</option>
                    </select>
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Due Date</label>
                    <input class="form-control" placeholder="due date" type="date" v-model="editPostData.due_date"/>
                </div>
                <div class="footer-dialog text-center">
                    <button class="btn btn-primary" type="submit">Update Task</button>
                </div>
            </form>
        </vs-dialog>

        <vs-dialog width="550px" not-center v-model="deleteDialog">
            <template #header>
                <h4 class="not-margin">
                    <b>Are you sure?</b>
                </h4>
            </template>
            <div class="con-content">
                <p>Are you sure you want to Delete?</p>

            </div>
            <template #footer>
                <div class="con-footer">
                    <button class="btn btn-primary" @click="deleteTask()">
                        Ok
                    </button>
                    <button class="btn btn-light" @click="deleteDialog=false">
                        Cancel
                    </button>
                </div>
            </template>
        </vs-dialog>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
        return {
            addPostData: {
                name: null,
                status: null,
                responsible_user: null,
                due_date:null
            },
            editPostData: {
                id: null,
                name: null,
                status: null,
                responsible_user: null,
                due_date:null
            },
            deletePostData: {
                id: null
            },
            items: {},
            status:{
                pending : "PENDING",
                completed : "COMPLETED"
            },
            addTaskModel: false,
            editTaskModel: false,
            activeTooltip1: false,
            deleteDialog: false,
            dataNotFound : false
        }
    },
    methods: {
        getTask() {
            let loading = this.block("taskLoading");
            this.axios.get("/api/v1/tasks")
                .then(response => {
                    this.items = response.data.data;
                    loading.close()
                    this.dataNotFound = false
                })
                .catch(error => {
                    this.items = null
                    console.log(error.response.data)
                    this.dataNotFound = true
                    loading.close()
                })
        },
        addTask() {
            let Loading = this.block("addTaskForm");
            this.axios.post('api/v1/add/task', this.addPostData)
                .then(response => {
                    if (response.data.status === true) {
                        document.getElementById("addTaskForm").reset();
                        Loading.close();
                        this.addTaskModel = false;
                        this.getTask()
                    } else {
                        this.errorNotification(response.data.message)
                        Loading.close()
                    }
                })
                .catch(error => {
                    this.errorNotification(error.response.data.message)
                    Loading.close()
                });
        },
        updateTask() {
            let Loading = this.block("editTaskForm");
            this.axios.put("/api/v1/update/task", this.editPostData)
                .then(response => {
                    this.editTaskModel = false;
                    this.successNotification(response.data.message);
                    Loading.close()
                    this.getTask()
                })
                .catch(error => {
                    this.editTaskModel = false;
                    this.errorNotification(error.response.data.message);
                    Loading.close()
                });
        },
        onChangeStatus(event) {
            this.addPostData.status = event.target.value;
        },
        onEditChangeStatus(event) {
            this.editPostData.status = event.target.value;
        },
        deleteBtn(id) {
            if (id == '') {
                this.errorNotification("Something we Wrong..");
            }
            this.deleteDialog = true;
            this.deletePostData.id = id;
        },
        deleteTask() {
            let Loading = this.block("deleteLoading");
            this.axios.delete("/api/v1/delete/task/" + this.deletePostData.id)
                .then(response => {
                    if (response.data.status === true) {
                        this.deleteDialog = false;
                        this.successNotification(response.data.message)
                        this.getTask();
                        Loading.close();
                    } else {
                        this.deleteDialog = false;
                        this.errorNotification(response.data.message)
                        Loading.close();
                    }
                })
                .catch(error => {
                    this.deleteDialog = false;
                    Loading.close();
                    this.errorNotification(error.response.data.message)
                });
        },
        editBtn(id) {
            this.editPostData.id = id;
            this.editTaskModel = true;
            this.axios.get("/api/v1/get/task/" + id)
                .then(response => {
                    let item = response.data.data;
                    this.editPostData.name = item.name;
                    this.editPostData.due_date = item.due_date;
                    this.editPostData.responsible_user = item.responsible_user;
                    this.editPostData.status = item.status;
                    this.$refs.getStatus.value = item.status;
                })
                .catch(error => {
                    console.log(error.response.data)
                });
        },
    },
    mounted() {
        this.getTask()
    }
}
</script>
<style>
.btn i:not(:last-child), .btn svg:not(:last-child) {
    margin-right: unset;
}
</style>

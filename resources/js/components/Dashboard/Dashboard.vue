<template>
    <div>
        <div class="header bg-primary pb-6">
            <div class="container-fluid">
                <div class="header-body">
                    <div class="row align-items-center py-3">
                        <div class="col-lg-6 col-7">
                            <h6 class="h2 text-white d-inline-block mb-0">Dashboard</h6>
                        </div>
                    </div>
                    <Summary></Summary>
                </div>
            </div>
        </div>
        <div class="container-fluid mt--6">
            <ProductTable></ProductTable>
            <TaskTable></TaskTable>
        </div>
    </div>
</template>

<script>

import Summary from "./Summary";
import ProductTable from "./ProductTable";
import TaskTable from "./TaskTable";
export default {
    name: "Dashboard",
    components: {TaskTable, ProductTable, Summary},
}
</script>

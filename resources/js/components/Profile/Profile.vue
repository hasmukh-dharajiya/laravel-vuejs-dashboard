<template>
<div>
    <div class="header bg-primary pb-6">
        <div class="container-fluid">
            <div class="header-body">
                <div class="row align-items-center py-4">
                    <div class="col-lg-6 col-7">
                        <h6 class="h2 text-white d-inline-block mb-0">My Profile</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid mt--6">
        <div class="row">
            <ProfileView></ProfileView>
            <ProfileUpdate></ProfileUpdate>
        </div>
    </div>

</div>
</template>

<script>
import ProfileView from "./ProfileView";
import ProfileUpdate from "./ProfileUpdate";
export default {
    name: "Profile",
    components: {ProfileUpdate, ProfileView},
}
</script>

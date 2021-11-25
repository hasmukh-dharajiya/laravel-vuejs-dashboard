<template>
    <div class="col-xl-4 order-xl-2">
        <div class="card card-profile" id="profileLoading">
            <img src="assets/img/theme/img-1-1000x600.jpg" alt="Image placeholder" class="card-img-top">
            <div class="row justify-content-center">
                <div class="col-lg-3 order-lg-2">
                    <vs-avatar circle size="100" badge badge-color="danger" class="mt--5" >
                        <img v-bind:src="profile.profile_pic" class="rounded-circle">
                        <template #badge>
                            <div style="position: relative; overflow: hidden; display: inline-block; ">
                                <i class="far fa-edit" style="font-size: 20px"></i>
                                <input type="file" style="font-size: 100px; position: absolute; left: 0; top: 0; opacity: 0;" v-on:change="onChange"/>
                            </div>
                        </template>
                    </vs-avatar>
                </div>
            </div>

            <div class="card-body pt-0 mt-2">
                <div class="text-center">
                    <h5 class="h3">
                        {{ profile.first_name  }} {{ profile.last_name  }}
                    </h5>
                    <div class="h5 font-weight-300">
                        <i class="ni location_pin mr-2"></i>
                        {{ profile.headline  }}
                    </div>
                </div>

                <div class="mt-2">
                    {{ profile.about_me }}
                </div>
                <div>
                    <div class="h5 mt-4">
                        <i class="ni business_briefcase-24 mr-2"></i>Contact Me
                    </div>
                    <div>
                        <div class="font-weight-300 ">Email Id: <span>{{ profile.email }}</span></div>
                    </div>
                    <div>
                        <div class="font-weight-300">phone number: <span>{{ profile.phone_number }}</span></div>
                    </div>
                    <div>
                        {{ profile.address }}
                    </div>
                    <div>
                        {{ profile.city  }}, {{ profile.country  }} - {{ profile.postal_code  }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProfileView",
    data() {
        return {
            profile: {
                first_name: null,
                last_name: null,
                about_me: null,
                email: null,
                phone_number: null,
                headline: null,
                address: null,
                city: null,
                country: null,
                postal_code: null,
                profile_pic:null
            },
            profilePic:{
                image: null
            },
            profile_baseURL : 'assets/img/profile/',
        }
    },
    methods: {
        getProfile() {
            let Loading = this.block("profileLoading")
            this.axios.get("/api/v1/profile")
                .then(response => {
                    let data  = response.data.data;
                    this.profile.first_name = data.first_name ? data.first_name : '------';
                    this.profile.last_name = data.last_name ? data.last_name : '------';
                    this.profile.about_me = data.about_me ? data.about_me : '--------------------------------------------------------------------------------';
                    this.profile.email = data.email ? data.email : '------';
                    this.profile.phone_number = data.phone_number ? data.phone_number : '-------------';
                    this.profile.headline = data.headline ? data.headline : '------';
                    this.profile.address = data.address ? data.address : '------';
                    this.profile.city = data.city ? data.city : '------';
                    this.profile.postal_code = data.postal_code ? data.postal_code : '------';
                    this.profile.country = data.country ? data.country : '------';
                    this.profile.profile_pic = data.profile_pic ? this.profile_baseURL+data.profile_pic : this.profile_baseURL + "default.jpg";
                    Loading.close()
                })
                .catch(error => {
                    console.log(error.response.data)
                    Loading.close()
                })
        },
        onChange(e) {
            let Loading = this.block("profileLoading")
            this.profilePic.image = e.target.files[0];
            const config = {
                headers: {
                    "Content-type":"multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2)
                }
            }
            let data = new FormData();
            data.append('image',this.profilePic.image);
            console.log(data)
            this.axios.post('/api/v1/update/profile/pic',data,config)
                .then(response=>{
                    if (response.data.status === true){
                        this.successNotification(response.data.message)
                        this.getProfile();
                        Loading.close()
                    }else
                    {
                        this.errorNotification(response.data.message)
                        Loading.close()
                    }
                })
                .catch(error =>{
                    this.errorNotification(error.response.data.message)
                    console.log(error.response.data)
                    Loading.close()
                });
        },
    },
    mounted() {
        this.getProfile();
    },
    created() {
        this.$root.$refs.ProfileView = this;
    },
}
</script>

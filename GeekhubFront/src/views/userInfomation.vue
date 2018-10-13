<template>
    <div class='userInfo'>
        <h2>用户信息:{{data}}</h2>
       <div ref='user' class='user' v-if='show'>
            <p>username:{{username}}</p>
            <p>telphone:{{telphone}}</p>
       </div>
        <button @click='getUserInfo'>获取个人信息</button>
    </div>
</template>

<script>
import Bus from '../assets/eventBus';

export default {
    name: '',
    data: () => ({
        username: '',
        telphone: '',
        data: '',
        show: false
    }),
    components: {},
    created() {
        let self = this;
        Bus.$on('userInfoData', (data) => {
            self.username = data.username;
            self.telphone = data.telphone;
            self.data = data.data;
            console.log(data);
        });
    },
    methods: {
        getUserInfo() {
            this.show = !(this.show);
        }
    }
};
</script>

<style lang="scss" scoped>
.userInfo{
    // background: #657b83c9;
    border: 2px solid #657b83c9;
    padding: 40px;
    margin: 80px auto;
}
.user{
    background: pink;
    padding: 5px 10px;
}
</style>
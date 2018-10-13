<template>
    <div id="portal">
        <header>
            <nav>
                <logo />
            </nav>
            <!-- <div>
                <h1>portal</h1>
            </div> -->
        </header>
        <div class="container">
            <div class="leftUserInfo col-md-3 col-lg-3 col-sm-4">
                <userInfo></userInfo>
            </div>
            <div class="archives col-md-9">
                <archive :dataPar = 'dataPar'></archive>
            </div>
        </div>
    </div>
</template>

<script>
import logo from '../common/logo.vue';
import archive from '../archive.vue';
import userInfo from '../userInfomation.vue';
export default {
    name: '',
    data: () => ({
        dataPar: '父组件向子组件传值'
    }),
    components: {
        logo,
        archive,
        userInfo
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
#portal{
    header{
        display: flex;
        justify-content: space-around;
    }
    nav{
        width: 60%;
    }
    #archives{
        // width: 60%;
        margin: 40px auto;
    }
}
</style>
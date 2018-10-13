<template>
    <div>
        <div class="netLogo">
            <i class="logoIcon icon-yunfuwuqi iconStyle"></i>
            <p class="logoGeekhub" @click="hello()">geekhub</p>
            <ul class='nav nav-pills'>
                <li> <router-link to='/index' class="active">首页</router-link>  </li>
                <li> <router-link to='/userInfo'>个人中心</router-link></li>
                <li> <router-link to='/articleDetail'>文章</router-link></li>
                <li> <router-link to='/userInfo'>{{username}}</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bus from '../../assets/eventBus';
export default {
    name: '',
    data: () => ({
        username: 'zqian',
        telphone: '18877777777'
    }),
    components: {},
    mounted() {
        var self = this;
        Bus.$emit('userInfoData', {
            'username': self.username,
            'telphone': self.telphone,
            'data': '兄弟组件通信'
        });
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
@import "../../dep/iconfont/iconfont.css";
.netLogo {
    // float: left;
    display: flex;
    margin-top: 5px;
    margin-left: 15px;
    height: 30px;
    cursor: pointer;
    .logoIcon {
        font-family: "iconfont" !important;
        font-style: normal;
        font-size: 30px;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    .iconStyle {
        float: left;
    }
    p {
        float: left;
        line-height: 30px;
    }
    .logoGeekhub {
        padding-left: 5px;
    }
    .nav {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            color: darkturquoise;
        }
    }
}
</style>
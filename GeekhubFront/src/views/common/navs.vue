<template>
    <div>
       <ul class='nav nav-pills'>
           <li> <Router-link to='/index' class="active">首页</Router-link>  </li>
           <li> <Router-link to='/userInfo'>个人中心</Router-link></li>
       </ul>
        
       <router-view></router-view>
    </div>
</template>

<script>
import Bus from '../assets/eventBus';

export default {
    name: '',
    data: () => ({
        username:'zqian',
        telphone:'18877777777'
    }),
    components: {},
    mounted() {
        var self = this;
        Bus.$emit('userInfo',{username:self.username,telphone:self.telphone});
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
@import "../../dep/iconfont/iconfont.css";

</style>
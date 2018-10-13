<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{$store.state.count}}</h3>

        <div>
    <!--     <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button> -->
        <button @click="add">+</button>
        <button @click="reduce">-</button>
</div>
    </div>
</template>
<script>
    import store from '@/vuex/store';
    import {mapMutations,mapGetters} from 'vuex';
    export default{
        data(){
            return{
                msg:'Hello Vuex',
            }
        },
        mounted(){
            this.sayHello();
            count();
        },
        // methods: mapMutations(['add','reduce']),
        methods:{
            sayHello:function(){
                console.log('hello world');
            },
            ...mapMutations(['add','reduce']),
        },
        computed:{
            ...mapGetters(['count']),
            count(){
                console.log(this.$store.getters.count);
                return this.$store.getters.count;
            }
        },
        store
    }
</script>
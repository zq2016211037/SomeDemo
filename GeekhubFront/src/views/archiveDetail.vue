<template>
    <div id="portal">
        <header class="contanier">
            <h2> {{articleId}}:文章详情</h2>
        </header>
        <div>
            <h2 class="title">{{dataLists.title}}</h2>
            <div class="con">{{dataLists.content}}</div>
        </div>
    </div>
</template>

<script>
// import Bus from '../assets/eventBus';

export default {
    name: '',
    data: () => ({
        articleId: '',
        dataLists: {
            'title': 'set和map',
            'content': 'ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。Set函数可以接受一个数组（或类似数组的对象）作为参数，用来初始化。在Set内部，两个NaN是相等。两个对象总是不相等的。可以用length来检测四个操作方法:add(value)：添加某个值，返回Set结构本身. delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。has(value)：返回一个布尔值，表示该值是否为Set的成员。clear()：清除所有成员，没有返回set内部的元素可以遍历for...of...'
        }
    }),
    components: {
    },
    created() {
        this.articleId = this.$route.query.articleId;

        // Bus.$on('getId', function(data) {
        //     console.log(data);
        // });
    },
    methods: {}
};
</script>

<style lang="scss" scoped>

</style>
<template>
    <!-- <div class="contanier row wrap"> -->
       <!-- <div class="col-md-4 col-xs-12 col-sm-12"></div> -->

       <!--右边内容 -->
       <div class="row archives" id="archives">
         <!--文章 -->
        <h1>{{dataPar}}</h1> 
         <div class="col-md-11 col-lg-11  col-sm-11 col-xs-11" v-for = 'item in archivesLists' v-bind:key = 'item.id'>
          
              <div class="archive item_1" >
                  <h2 class="archive_title" title="">
                      <p>{{item.title}}</p>
                      <p>文章id: {{item.articleId}}</p>
                  </h2>
                  <p class="content">{{item.content}}</p>
                  <p>
                    <span @click='showDetails($event)' :id= "item.articleId">learn more</span>
                  </p>
              </div>
         </div>
         
       </div>
    <!-- </div> -->
</template>

<script>
// import Bus from '../assets/eventBus';

export default {
    name: 'archive',
    props: ['dataPar'],
    data() {
        return {
            archivesLists: [
                {
                    'articleId': '001',
                    'title': 'ES6解构赋值',
                    'content': '5.1 RegExp构造函数第一种，参数为字符串，第二个参数指定修饰符。'
                },
                {
                    'articleId': '002',
                    'title': 'ES6解构赋值',
                    'content': '5.1 RegExp构造函数第一种，参数为字符串，第二个参数指定修饰符。'
                }
            ]
        };
    },
    mounted() {
        console.log(this.dataPar);
    },
    methods: {
        showDetails: function(e) {
            // Bus.$emit('getId', 'hello');
            console.log(e);
            this.$router.push({
                name: 'articleDetail',
                query: {
                    articleId: e.target.id
                }
            });
        }
    }
};
</script>


<style>
/* 整体内容 */
.wrap {
  margin-top: 100px;
}

#archives{
  margin-left: 0;
}
/* 文章内荣 */
.archive{
  width: 100%;
  height: 200px;
  margin:10px;
  border:1px solid #657b83c9;
  border-radius: 5px;
  box-shadow:1px 1px 5px 1px #657b83c9;
  border-bottom:0;
}
.archive_title{
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color:#333;
  line-height: 60px;
}
.content{
  text-emphasis: none;
  text-indent: 40px;
  text-align: left;
  font-size: 16px;
  font-family:'Times New Roman', Times, serif;
  height: 50px;
  color: rgb(49, 113, 138);
  overflow: hidden;
}
.archive p span{
    color: #fff;
    padding: 7px 13px;
    display: inline-block;
    background: rgb(49, 113, 138);
    margin: 10px;
    border-radius: 7px;
}
.archive p span:hover{
    cursor: pointer;
}
</style>


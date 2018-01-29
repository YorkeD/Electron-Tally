<template>
    <div id="app">
        <div class="common_box">
            <!-- 头部 -->
            <HeaderView v-if="pathData == 0"></HeaderView>
            <!-- 左侧导航 -->
            <NavLeftView class="l" v-if="pathData == 0"></NavLeftView>
            <router-view class="l" v-if="pathData == 1 || pathData == 0"></router-view>
        </div>
        
    </div>
</template>

<script>
import HeaderView from './components/common/Header'
import NavLeftView from './components/common/NavLeft'
export default {
    name: 'vue-electronjs',
    data(){
        return{
            pathData:0, // 用于判断导航和头部是否显示
        }
    },
    beforeMount(){
        
    },
    methods: {
        
    },
    watch: {
       $route(to,from){
           console.log(to.name,"to");
           if(to.name == 'login'){
               this.pathData = 1;
           }else if(to.name == 'locking'){
               this.pathData = 2;
           }else{
               this.pathData = 0;
           }
        //    console.log(from,"from");
       }   
    },
    components:{
        HeaderView,
        NavLeftView
    }
}
</script>

<style>
  /* CSS */
</style>

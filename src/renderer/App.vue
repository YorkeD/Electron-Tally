<template>
    <div id="app">
        
        <div class="common_box" v-if="pathData">
            <!-- 头部 -->
            <HeaderView></HeaderView>
            <!-- 左侧导航 -->
            <NavLeftView></NavLeftView>
        </div>
        <router-view class="l"></router-view>
    </div>
</template>

<script>
import HeaderView from './components/common/Header'
import NavLeftView from './components/common/NavLeft'
export default {
    name: 'vue-electronjs',
    data(){
        return{
            pathData:false, // 用于判断导航和头部是否显示
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
               this.pathData = false;
           }else{
               this.pathData = true;
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

<template>
    <div id="about">
        <div class="select_box">
            <Tabs :animated="false">
                <TabPane label="个人简介">标签一的内容</TabPane>
                <TabPane label="职业技能">标签二的内容</TabPane>
                <TabPane label="工作经历">标签三的内容</TabPane>
                <TabPane label="待定">标签三的内容</TabPane>
            </Tabs>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    beforeCreate(){

    },
    beforeMount () {
        
    },
    methods:{

    },
    components:{

    }
}
</script>
<style scoped lang="css">
#about{
    width: calc(100% - 260px);
    margin-top: 20px;
    margin-left:20px;
    height: 100vh;
    background: #495060;
    border-radius: 6px;
    color:#fff;
}
</style>

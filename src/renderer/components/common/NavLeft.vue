<template>
    <div id="nav_left">
        <Menu :theme="theme2" @on-select="MenuSelect" accordion>
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-gear-outline"></Icon>
                    管理
                </template>
                <MenuItem name="1-1">首页</MenuItem>
                <MenuItem name="1-2">账户管理</MenuItem>
                <MenuItem name="1-3">消费管理</MenuItem>
                <MenuItem name="1-4">存储管理</MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-person"></Icon>
                    关于我
                </template>
                <MenuItem name="2-1">关于我</MenuItem>
            </Submenu>
        </Menu>
    </div>
</template>
<script>
export default {
    data(){
        return{
            theme2:'dark'
        }
    },
    beforeCreate(){

    },
    beforeMount () {
        
    },
    methods:{
        MenuSelect(name){
            switch(name){
                case '1-1':
                    this.$router.push({path: '/index'});
                break;
                case '1-2':
                    this.$router.push({path: '/index'});
                break;
                case '1-3':
                    this.$router.push({path: '/index'});
                break;
                case '1-4':
                    this.$router.push({path: '/index'});
                break;
                case '2-1':
                    this.$router.push({path: '/my'});
                break;
            }
        }
    },
    components:{

    }
}
</script>
<style scoped lang="css">
 @import '../../assets/css/navleft.css';
</style>

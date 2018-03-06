<template>
    <div id="index">
        <div class="index_content">
            <div class="login_history l">
                <h2 class="history_title"><Icon type="ios-book-outline"></Icon>操作历史</h2>
                <Table stripe :columns="columns1" :data="data1"></Table>
            </div>
            <div class="add_data l">
                <h2 class="add_data_title"><Icon type="ios-plus-outline"></Icon>快捷添加</h2>
                <div class="add_data_content">
                    <span class="title_min_box">消费：</span>
                    <Select style="width:100px">
                        <Option></Option>
                    </Select>
                    <Input  placeholder="请输入金额" style="width: 200px"></Input>
                    <Button type="primary" >确定</Button>
                </div>
                <div class="add_data_content">
                    <span class="title_min_box">存储：</span>
                    <Select style="width:100px">
                        <Option></Option>
                    </Select>
                    <Input  placeholder="请输入金额" style="width: 200px"></Input>
                    <Button type="primary" >确定</Button>
                </div>
            </div>
            <div class="consume_map_box l">
                <h2 class="map_title"><Icon type="ios-pie-outline"></Icon>消费分析</h2>
                <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
            </div>
            <div class="storage_map_box l">
                <h2 class="map_title"><Icon type="ios-pie-outline"></Icon>存储分析</h2>
                <ve-pie :data="chartData1" :settings="chartSettings1"></ve-pie>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            columns1: [
                {
                    title: '登录时间',
                    key: 'time'
                },
                {
                    title: '操作',
                    key: 'operate'
                }
            ],
            data1: [
                {
                    time: '2018-03-05 12:00:14',
                    operate: "新增收入",
                },
                {
                    time: '2018-03-05 12:00:14',
                    operate: "新增收入",
                },
                {
                    time: '2018-03-06 12:00:14',
                    operate: "新增支出",
                }
            ]
        }
    },
    beforeCreate(){
        this.chartData = {
            columns: ['日期', '成本', '利润'],
            rows: [
                { '日期': '1月1号', '成本': 123, '利润': 3 },
                { '日期': '1月2号', '成本': 1223, '利润': 6 },
                { '日期': '1月3号', '成本': 2123, '利润': 90 },
                { '日期': '1月4号', '成本': 4123, '利润': 12 },
                { '日期': '1月5号', '成本': 3123, '利润': 15 },
                { '日期': '1月6号', '成本': 7123, '利润': 20 }
            ]
        }
        this.chartSettings = {
            dimension: '成本',
            metrics: '利润'
        }
        this.chartData1 = {
            columns: ['日期', '成本', '利润'],
            rows: [
                { '日期': '1月1号', '成本': 123, '利润': 3 },
                { '日期': '1月2号', '成本': 1223, '利润': 6 },
                { '日期': '1月3号', '成本': 2123, '利润': 90 },
                { '日期': '1月4号', '成本': 4123, '利润': 12 },
                { '日期': '1月5号', '成本': 3123, '利润': 15 },
                { '日期': '1月6号', '成本': 7123, '利润': 20 }
            ]
        }
        this.chartSettings1 = {
            dimension: '成本',
            metrics: '利润'
        }
    },
    beforeMount(){

    },
    components:{
        
    }
}
</script>
<style scoped lang="css">
#index{
    width: calc(100% - 260px);
    margin-top: 20px;
    margin-left:20px;
    height: 100vh;
    background: #fff;
    border-radius: 6px;
}
 @import '../../assets/css/index.css';
</style>

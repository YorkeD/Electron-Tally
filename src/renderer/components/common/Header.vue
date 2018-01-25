<template>
    <div id="header">
        <div class="header_box">
            <img class="logo l" title="返回首页" @click="logoBtn" src="../../assets/images/logo.png">
            <p class="logo_title l">YorkeD<span class="title_text">记账工具</span></p>
            <div class="banner_box l">
                <Carousel
                    v-model="bannerData"
                    :autoplay="setting.autoplay"
                    :autoplay-speed="setting.autoplaySpeed"
                    :dots="setting.dots"
                    :radius-dot="setting.radiusDot"
                    :trigger="setting.trigger"
                    :arrow="setting.arrow"
                    >
                    <CarouselItem>
                        <div class="demo-carousel">YorkeD记账工具，是在作者YorkeD工作之余的时间完成的一件作品；</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">如果有什么不足的地方，希望大家多多体谅~</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">前端职业，永无止境~</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">热爱前端，喜欢研究新的技术和有趣的东西~^_^</div>
                    </CarouselItem>
                </Carousel>
            </div>
            <Button class="login_btn r" @click="backLogin" type="error">退出登录</Button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            bannerData:0,
            setting: {
                autoplay: true,
                autoplaySpeed: 5000,
                dots: 'none',
                radiusDot: false,
                trigger: 'click',
                arrow: 'never'
            }
        }
    },
    methods: {
        backLogin(){
            this.$router.push({path:'/login'})
        },
        logoBtn(){
            this.$router.push({path:'/index'})
        }
    }
}
</script>
<style scoped lang="css">
 @import '../../assets/css/header.css';
</style>

<template>
    <div class="index">
        <!-- 导航更多 开始 -->
        <div class="morebox">
            <ul class="morebox-nr">
                <li>
                    <router-link to="/home">首页</router-link>
                </li>
                <li>
                    <router-link to="/news">夜场新闻</router-link>
                </li>
                <li>
                    <router-link to="/aboutus">联系我们</router-link>
                </li>
                <li>
                    <router-link to="/model">模特展示</router-link>
                </li>
            </ul>
        </div>
        <!-- 导航更多 结束 -->
        <!-- 固定导航栏 开始 -->
        <div class="fixednav">
            <img src="../assets/img/morenav.png" alt="">
        </div>
        <!-- 固定导航栏 结束 -->
        <!-- 工具导航栏 开始 -->
        <div class="toolbar">
            <ul>
                <li>
                    <a href="#">
                        <img src="../assets/img/7944236_1538985767.png" alt="">
                        <span>首页</span>
                    </a>
                </li>
                <li>
                    <a href="tel:13688143752">
                        <img src="../assets/img/7944138_1538985640.png" alt="">
                        <span>电话</span>
                    </a>
                </li>
                <li class="wxconsult">
                    <a href="#">
                        <img src="../assets/img/2053_1513021523931978.png" alt="">
                        <span>微信咨询</span>
                    </a>
                </li>
            </ul>
        </div>
        <!-- 工具导航栏 结束 -->
        <!-- 微信咨询 开始 -->
        <div class="wxconsultapp">
            <div class="app">
                <img :src="srcurl(value1.image)" class="bg">
            </div>
        </div>
        <!-- 微信咨询 结束 -->
        <!-- 内容 开始 -->
        <div class="content">
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>
        <!-- 内容 结束 -->
    </div>
</template>

<script>
import '../assets/js/index.js'
export default {
    data () {
        return {
            value1: ''
        }
    },
    methods: {
        getmodeldetailed (id) {
            this.$router.push('/modeldetailed/' + id)
        },
        srcurl (url) {
            return this.http + url
        },
        getfoot () {
             this.$http.get('/api/footer/get').then(res => {
                this.value1 = res
                // console.log(res)
            })
        }
    },
    mounted () {
        /* 微信咨询图片 */
        this.getfoot()
    }
}
</script>

<style lang="less" scoped>
@import '../assets/less/index.less';
</style>

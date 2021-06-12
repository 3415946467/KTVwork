<template>
    <div class="home">
        <!-- 头部 开始 -->
        <header>
            <div class="logo">
                <img src="../assets/img/1610085416802776.png" class="bg">
            </div>
        </header>
        <!-- 头部 结束 -->
        <!-- 内容 开始 -->
        <div class="content">
            <!-- 广告 开始 -->
            <div class="advertising">
                <img :src="srcurl(advertising.image)" class="bg">
                <h3 class="markdown-body">
                    <VueMarkdown :source="value"></VueMarkdown>
                </h3>
                <span>联系电话: 13688143752</span>
            </div>
            <!-- 广告 结束 -->
            <!-- 环境 开始 -->
            <div class="environment">
                <div class="environment-h">
                    <h2>ENVIRONMENTAL DISPLAY</h2>
                    <p class="border-b">环境/AMBIENT</p>
                </div>
                <ul>
                    <li v-for="val in list" :key="val.id">
                        <a href="#">
                            <img :src="srcurl(val.image)" alt="">
                        </a>
                        <div class="libox">
                            <h3>{{val.title}}</h3>
                            <p>联系人：{{val.contacts}}</p>
                            <p>手 机：{{val.phone}}（微信同号）</p>
                            <p>地 址：{{val.address}}</p>
                        </div>
                        <div class="lxwm">
                            <a href="tel:13688143752">了解更多</a>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 环境 结束 -->
            <!-- 活动 开始 -->
            <div class="activity">
                <img src="../assets/img/banner-1.jpg" class="">
                <span class="bg"></span>
                <h2>KTV夜总会招聘</h2>
                <p>小包低消1080元 中包低消1280 大包低消1380 豪包低消2680全场所有啤酒均可享受买二送一，还有更多豪礼等着你，当晚本包间消费满6666以上，当晚可赠送豪华名宿酒店一套，限当天使用。</p>
            </div>
            <!-- 活动 结束 -->
            <!-- 模特 开始 -->
            <div class="model">
                <div class="environment-h">
                    <h2>高端KTV</h2>
                    <p class="border-b">High-end KTV</p>
                </div>
                <ul>
                    <li v-for="val in  model" :key="val.id" @click.prevent="getmodeldetailed(val.id)">
                        <a href="#">
                            <div>
                                <img :src="srcurl(val.image)" alt="">
                            </div>
                            <p>{{val.title}}</p>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- 模特 结束 -->
            <!-- 新闻 开始 -->
            <div class="news">
                <div class="environment-h">
                    <h2>高端KTV</h2>
                    <p class="border-b">High-end KTV</p>
                </div>
                <ul>
                    <li v-for="val in news" :key="val.id" @click.prevent="getnews(val.id)">
                        <p>{{val.title}}</p>
                    </li>
                </ul>
            </div>
            <!-- 新闻 结束 -->
        </div>
        <!-- 内容 结束 -->
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import '../assets/js/index.js'
export default {
    components: {
        VueMarkdown // 注入组件
    },
    data () {
        return {
            advertising: {},
            list: [],
            model: [],
            news: [],
            value: '',
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
        getadvertising () {
             this.$http.get('/api/carousel_map/list').then(res => {
                this.advertising = res[0]
                this.value = res[0].content
                // console.log(res)
            })
        },
        getlist () {
            this.$http.get('api/ambient/list').then(res => {
                this.list = res.filter((val, index) => {
                    if (index < 3) {
                        return res[index]
                    }
                })
                // console.log(res)
                // console.log(this.list)
                // console.log(this.http + res[0].image)
            })
        },
        getmodel () {
            this.$http.get('/api/models/list').then(res => {
                // this.list = res[0]
                // console.log(res)
                var arr = res
                this.model = arr.filter((val, index) => {
                    if (index <= 5) {
                        return arr[index]
                    }
                })
                console.log(this.model)
            })
        },
        getteacher () {
            this.$http.get('/api/journalism/list').then(res => {
                this.news = res
                // console.log(res)
            })
        }
    },
    mounted () {
        /* 广告 */
        this.getadvertising()
        /* 环境 */
        this.getlist()
        /* 模特 */
        this.getmodel()
        /* 新闻 */
        this.getteacher()
    }
}
</script>

<style lang="less" scoped>
@import '../assets/less/index.less';
</style>

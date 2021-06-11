<template>
    <div class="home">
        <!-- 头部 开始 -->
        <header>
            <div class="logo">
                <img src="../assets/img/1610085416802776.png" class="bg">
            </div>
        </header>
        <!-- 头部 结束 -->
        <!-- 固定导航栏 开始 -->
        <div class="fixednav">
            <!-- <img src="../assets/img/" alt=""> -->
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
                    <a href="#">
                        <img src="../assets/img/7944138_1538985640.png" alt="">
                        <span>电话</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../assets/img/2053_1513021523931978.png" alt="">
                        <span>微信咨询</span>
                    </a>
                </li>
            </ul>
        </div>
        <!-- 工具导航栏 结束 -->
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
                    <p>环境/AMBIENT</p>
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
                        <div><span class="icon-mobile"></span> 联系我们</div>
                    </li>
                </ul>
            </div>
            <!-- 环境 结束 -->
            <!-- 活动 开始 -->
            <div class="activity">
                活动
            </div>
            <!-- 活动 结束 -->
            <!-- 模特 开始 -->
            <div class="model">
                模特
            </div>
            <!-- 模特 结束 -->
            <!-- 新闻 开始 -->
            <div class="news">
                新闻
            </div>
            <!-- 新闻 结束 -->
        </div>
        <!-- 内容 结束 -->
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
    components: {
        VueMarkdown // 注入组件
    },
    data () {
        return {
            advertising: {},
            list: [],
            model: [],
            value: '',
            news: []
        }
    },
    methods: {
        getmodeldetailed (id) {
            this.$router.push('/modeldetailed/' + id)
        },
        getEnvironment () {
            this.$router.push('/environment')
        },
        getnews (id) {
            this.$router.push('/newsdetail/' + id)
        },
        aboutus () {
            this.$router.push('/aboutus')
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
                // console.log(this.model)
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

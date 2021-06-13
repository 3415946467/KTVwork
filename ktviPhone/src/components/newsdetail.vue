<template>
    <div class="newsdetail">
        <div class="aboutus-top">
            <div class="return">
                <a href="JavaScript:;" class="fh" @click.prevent="setnews"><img src="../assets/img/fh.png" ></a>
                <a href="JavaScript:;" class="fx"><img src="../assets/img/fx.png"></a>
                <a href="JavaScript:;" class="yh"><img src="../assets/img/yh.png"></a>
            </div>
        </div>
        <div class="markdown-body">
            <h2>{{data.title}}</h2>
            <VueMarkdown :source="data.content"></VueMarkdown>
        </div>
        <div class="recommend">
            <h3><span></span>&nbsp;&nbsp;&nbsp;推荐&nbsp;&nbsp;&nbsp;<span></span></h3>
            <ul>
                <li><img src="../assets/img/kj_icon.jpg" alt=""><p>QQ空间</p></li>
                <li><img src="../assets/img/weibo.png" alt=""><p>新浪微博</p></li>
                <li><img src="../assets/img/renren.png" alt=""><p>人人网</p></li>
                <li><img src="../assets/img/dou.png" alt=""><p>豆瓣</p></li>
            </ul>
        </div>
        <div class="newlis">
            <span @click.prevent="prev1()">上一篇</span>
            <span @click.prevent="next1()">下一篇</span>
        </div>
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
            id: '',
            data: [],
            nextdata: [],
            prevdata: [],
            news: []
        }
    },
    methods: {
        setnews () {
            this.$router.push('/home')
        },
        getdata (id) {
            this.$http.get('/api/journalism/get?id=' + this.id).then(res => {
                this.data = res
                this.data.content = this.data.content.replace('/', this.imgURL + '/')
            })
        },
        next () {
            if (parseInt(this.id) !== parseInt(this.arrid)) {
                this.$http.get('/api/journalism/get?id=' + this.id + '&operate=next').then(res => {
                    this.nextdata = res
                })
            }
        },
        next1 () {
            // if (this.id !== parseInt(this.arrid)) {
                this.next()
                this.id++
                if (this.id > this.news[this.news.length - 1].id) {
                    this.id = this.news[0].id
                }
            // }
             this.$http.get('/api/journalism/get?id=' + this.id).then(res => {
                this.data = res
            })
            setTimeout(() => {
                this.data = this.nextdata
                this.data.content = this.data.content.replace('/', this.imgURL + '/')
            }, 1000)
            this.prev()
        },
        prev () {
            if (parseInt(this.id) !== 1) {
                this.$http.get('/api/journalism/get?id=' + this.id + '&operate=prev').then(res => {
                    this.prevdata = res
                })
            }
        },
        prev1 () {
            if (parseInt(this.id) !== 1) {
                this.id--
                 this.prev()
            }
            setTimeout(() => {
                this.data = this.prevdata
                this.data.content = this.data.content.replace('/', this.imgURL + '/')
            }, 800)
            this.next()
        },
        getnews () {
            this.$http.get('/api/journalism/list').then(res => {
                // console.log(res)
                this.news = res
            })
        }
    },
    mounted () {
        this.getnews()
        this.id = this.$route.params.id
        this.getdata(this.id)
        this.next()
        this.prev()
    }
}
</script>

<style lang="less" scoped>
@import '../assets/less/index.less';
</style>

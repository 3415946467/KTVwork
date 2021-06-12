<template>
    <div class="newsbox">
        <div class="aboutus-top">
            <div class="return">
                <a href="JavaScript:;" class="fh" @click.prevent="getindex"><img src="../assets/img/fh.png" ></a>
                <a href="JavaScript:;" class="fx"><img src="../assets/img/fx.png"></a>
                <a href="JavaScript:;" class="yh"><img src="../assets/img/yh.png"></a>
            </div>
        </div>
        <div class="title">
            <span @click="newsshows(val.id)" v-for="val in type" :key="val.id">{{val.name}}</span>
        </div>
        <ul>
            <li v-for="val in news" :key="val.id" @click.prevent="newsclick(val.id)">
                <a href="#">
                    <h3>{{val.title}}</h3>
                    <p>{{val.time}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            news: [],
            type: []
        }
    },
    methods: {
        getindex () {
            this.$router.push('/home')
        },
        newsshows (id) {
            // this.$router.push('/news')
            this.$http.get('/api/journalism/list').then(res => {
                // console.log(res)
                // console.log(id)
                this.news = res.filter(val => val.journalismtype_id === id)
            })
        },
        srcurl (url) {
            return this.http + url
        },
        getnews () {
            this.$http.get('/api/journalism/list').then(res => {
                console.log(res)
                this.news = res
            })
        },
        newsclick (id) {
            this.$router.push('/newsdetail/' + id)
        },
        gettype () {
            this.$http.get('/api/journalismtype/list').then(res => {
                console.log(res)
                this.type = res
            })
        }
    },
    mounted () {
        this.getnews()
        this.gettype()
    }
}
</script>

<style lang="less" scoped>
@import '../assets/less/index.less';
</style>

<template>
    <div class="aboutus">
        <div class="aboutus-top">
            <div class="return">
                <a href="JavaScript:;" class="fh" @click.prevent="getaboutus"><img src="../assets/img/fh.png" ></a>
                <a href="JavaScript:;" class="fx"><img src="../assets/img/fx.png"></a>
                <a href="JavaScript:;" class="yh"><img src="../assets/img/yh.png"></a>
            </div>
        </div>
        <div class="aboutusbox">
            <h3><VueMarkdown :source="title"></VueMarkdown></h3>
            <div class="Details markdown-body">
                <VueMarkdown :source="value" style="margin: 0px; padding: 0px; color: rgb(33, 33, 33); font-family: tt, Arial, 微软雅黑; font-size: 16px; white-space: normal; background-color: rgb(255, 255, 255); text-align: center; line-height: 30px; font-size: 16px;"></VueMarkdown>
            </div>
        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
    data () {
        return {
            value: '',
            title: ''
        }
    },
    methods: {
        getaboutus () {
            this.$router.push('/aboutus')
        }
    },
    components: {
        VueMarkdown // 注入组件
    },
    mounted () {
        this.$http.get('/api/about_us/list').then(res => {
            console.log(res)
            this.value = res[2].content
            this.title = res[2].title
        })
    }
}
</script>

<style lang="less" scoped>
@import '../assets/less/index.less';
</style>

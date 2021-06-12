<template>
    <div class="modelshows">
        <div class="return" @click.prevent="setmodel">
            <a href="JavaScript:;" class="fh" >
                <span></span>
            </a>
        </div>
        <div class="present">
            <div class="image">
                <img :src="srcurl(data.image)">
            </div>
            <p class="price" style="color: red;">￥&nbsp;<span>{{data.price}}</span></p>
            <p style="color: 2a2a2a; font-weight: 700;">{{data.title}}</p>
        </div>
        <div class="explain">
            <h2><span>产品说明</span></h2>
            <img :src="srcurl(data.image)">
        </div>
        <div class="correlation">
            <h3>相关产品</h3>
            <ul>
                <li v-for="val in model" :key="val.id" @click.prevent="getmodeldetailed(val.id)">
                    <a href="#" >
                        <div>
                            <img :src="srcurl(val.image)" alt="">
                        </div>
                        <p class="title">{{val.title}}</p>
                        <p style="color: #999;"><span style="color: red; font-weight: 700; ">{{val.price}}</span>元</p>
                    </a>
                </li>
            </ul>
        </div>
        <!-- 返回顶部 -->
        <div class="returntop">
            <img src="https://aimg8.oss-cn-shanghai.aliyuncs.com/xcx_pack/vip_shopmall/gotop.png" alt="">
        </div>
        <!-- 放大的图片 -->
        <div class="present-img">
            <img :src="srcurl(data.image)">
        </div>
    </div>
</template>

<script>
import '../assets/js/index.js'
export default {
    data () {
        return {
            model: [],
            data: [],
            id: ''
        }
    },
    methods: {
        setmodel () {
            this.$router.push('/model')
            console.log(1)
        },
        srcurl (url) {
            return this.http + url
        },
        getmodel (id) {
            this.$http.get('/api/models/list').then(res => {
                // console.log(res)
                this.model = res.filter(val => val.id !== id)
                // console.log(this.model)
            })
        },
        getmodellist (id) {
            this.$http.get('/api/models/list').then(res => {
                // this.list = res[0]
                // console.log(res)
                var arr = res
                var brr = arr.filter(val => val.id === parseInt(id))
                this.data = brr[0]
                // console.log(this.data)
            })
        },
        getmodeldetailed (id) {
            this.getmodel(id)
            this.getmodellist(id)
        }
    },
    mounted () {
        this.id = this.$route.params.id
        this.getmodel(this.id)
        this.getmodellist(this.id)
    }
}
</script>

<style lang="less" scoped>
@import '../assets/less/index.less';
</style>
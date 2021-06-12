<template>
    <div class="modelbox">
        <div class="aboutus-top">
            <div class="return">
                <a href="JavaScript:;" class="fh" @click.prevent="getindex">
                    <img src="../assets/img/fh.png" >
                </a>
                <span>
                    <input type="text" value="请输入您要搜索的内容">
                </span>
                <a href="JavaScript:;" class="yh">
                    <img src="../assets/img/yh.png">
                </a>
                <a href="JavaScript:;" class="fx">
                    <img src="../assets/img/fx2.png">
                </a>
                <a href="JavaScript:;" class="zy" @click.prevent="getindex">
                    <img src="../assets/img/zy.png">
                </a>
            </div>
        </div>
        <h2>高端模特</h2>
        <ul>
            <li v-for="val in models" :key="val.id" >
                <a href="#" @click.prevent="getmodeldetailed(val.id)">
                    <h4>{{val.title}}</h4>
                    <p>￥{{val.price}}元</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import '../assets/js/index.js'
export default {
    data () {
        return {
            models: []
        }
    },
    methods: {
        getindex () {
            this.$router.push('/home')
        },
        getmodel () {
            this.$http.get('/api/models/list').then(res => {
                // this.list = res[0]
                // console.log(res)
                var arr = res
                this.models = arr.filter((val, index) => {
                    if (index <= 5) {
                        return arr[index]
                    }
                })
                // console.log(this.model)
            })
        },
        getmodeldetailed (id) {
            this.$router.push('/modeldetailed/' + id)
        }
    },
    mounted () {
        this.getmodel()
    }
}
</script>

<style lang="less" scoped>
@import '../assets/less/index.less';
</style>

<template>
    <div class="modelbox">
        <div class="aboutus-top">
            <div class="return">
                <a href="JavaScript:;" class="fh" @click.prevent="getindex">
                    <img src="../assets/img/fh.png" >
                </a>
                <span>
                    <input type="text" value="请输入您要搜索的内容" v-model="text">
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
                <a href="##" @click.prevent="addnum()" class="bian" v-if="num === 1">
                    <img src="../assets/img/style4.png" alt="">
                </a>
                <a href="##" @click.prevent="addnum()" class="bian" v-if="num === 2">
                    <img src="../assets/img/style3.png" alt="">
                </a>
                <a href="##" @click.prevent="addnum()" class="bian" v-if="num === 3">
                    <img src="../assets/img/style1.png" alt="">
                </a>
                <a href="##" @click.prevent="addnum()" class="bian" v-if="num === 4">
                    <img src="../assets/img/style2.png" alt="">
                </a>
            </div>
        </div>
        <h2>高端模特</h2>
        <ul class="model">
            <li v-for="val in models" :key="val.id" :class="[num === 1? 'lis1' : '', num === 2? 'lis2' : '', num === 3? 'lis3' : '', num === 4? 'lis4' : '']" @click.prevent="getmodeldetailed(val.id)">
                <div :class="[num === 1 ? 'dn' : 'block']">
                    <a href="##"><img :src="srcurl(val.image)" alt=""></a>
                </div>
                <a href="#" >
                    <h4>{{val.title}}</h4>
                    <p>￥{{val.price}}元</p>
                </a>
            </li>
            <!-- <li class="lis2" v-for="val in models" :key="val.id" @click.prevent="getmodeldetailed(val.id)" :class="[num === 2 ? 'block' : 'dn']">
                <div>
                    <a href="##"><img :src="srcurl(val.image)" alt=""></a>
                </div>
                <a href="#">
                    <h4>{{val.title}}</h4>
                    <p>￥{{val.price}}元</p>
                </a>
            </li>
            <li class="lis3" v-for="val in models" :key="val.id" @click.prevent="getmodeldetailed(val.id)" :class="[num === 3 ? 'block' : 'dn']">
                <div>
                    <a href="##"><img :src="srcurl(val.image)" alt=""></a>
                </div>
                <a href="#">
                    <h4>{{val.title}}</h4>
                    <p>￥{{val.price}}元</p>
                </a>
            </li>
            <li class="lis4" v-for="val in models" :key="val.id" @click.prevent="getmodeldetailed(val.id)" :class="[num === 4 ? 'block' : 'dn']">
                <div>
                    <a href="##"><img :src="srcurl(val.image)" alt=""></a>
                </div>
                <a href="#">
                    <h4>{{val.title}}</h4>
                    <p>￥{{val.price}}元</p>
                </a>
            </li> -->
        </ul>
    </div>
</template>

<script>
import '../assets/js/index.js'
export default {
    data () {
        return {
            models: [],
            modelslist: [],
            text: '',
            num: 1
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
                this.modelslist = this.models
                // console.log(this.model)
            })
        },
        getmodeldetailed (id) {
            this.$router.push('/modeldetailed/' + id)
        },
        srcurl (src) {
            return this.http + src
        },
        addnum () {
            if (this.num !== 4) {
                this.num++
            } else {
                this.num = 1
            }
        }
    },
    mounted () {
        this.getmodel()
    },
    watch: {
        text () {
            if (this.text === '') {
                this.getmodel()
            }
            this.models = this.modelslist.filter(val => val.title.indexOf(this.text) > -1)
            // console.log(this.models)
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/less/index.less';
</style>

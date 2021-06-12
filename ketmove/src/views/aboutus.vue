<template>
    <div class="aboutus">
        <div class="aboutus-top">
            <div class="return">
                <a href="JavaScript:;" class="fh" @click.prevent="getindex"><img src="../assets/img/fh.png" ></a>
                <a href="JavaScript:;" class="fx"><img src="../assets/img/fx.png"></a>
                <a href="JavaScript:;" class="yh"><img src="../assets/img/yh.png"></a>
            </div>
        </div>
        <ul>
            <li>
                <router-link to="/aboutusbox">关于我们</router-link>
            </li>
            <li>
                <router-link to="/Contactus">联系我们</router-link>
            </li>
            <li>
                <router-link to="/Requirement">招聘要求</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        getindex () {
            this.$router.push('/home')
        }
    },
    mounted () {
    }
}
</script>

<style lang="less" scoped>
@import '../assets/less/index.less';
</style>

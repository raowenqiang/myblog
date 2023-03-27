<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <TopCompont/>
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
            <el-footer>
                <footer-compont/>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import TopCompont from "../components/TopCompont";
    import FooterCompont from "../components/FooterCompont";
    export default {
        name: "home",
        components:{TopCompont,FooterCompont}
    }
</script>

<style scoped>

</style>

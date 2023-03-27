<template>
    <div class="header-div">
        <ul class="header-ul" >
            <li class="header-li"><router-link class="router-link-active" to="/home">首页</router-link></li>
            <li class="header-li"><router-link class="router-link-active" to="/home">分类</router-link></li>
            <li class="header-li"><router-link class="router-link-active" to="/home">留言板</router-link></li>
            <li class="header-li"><router-link class="router-link-active" to="/home">友链墙</router-link></li>
            <li class="header-li"><router-link class="router-link-active" to="/home">关于我</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TopCompont"
    }
</script>

<style scoped>
    .header-div{
        background-color: aqua;
        width: 100%;
        height: 50px;
    }
    .header-ul {
        list-style:none;
        padding:0px;
        margin-left:10%;
    }
    .header-li {
        text-align: center;
        float: left;
        width: 80px;
        height: 50px;
        line-height: 50px;
    }
    .header-li:hover{
        background-color: aquamarine;
    }
    .router-link-active {
    text-decoration: none;
    }
</style>

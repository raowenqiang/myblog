<template>
    <div >
        <el-form
                ref="loginRef"
                :model="connie"
                label-width="120px"
                class="login-form"
                :rules="basicRules"
        >
            <el-form-item>
               <p class="login-p">管理员登录</p>
            </el-form-item>
            <el-form-item
                    prop="userName"
                    label="用户名"
            >
                <el-col :span="20">
                    <el-input v-model="connie.userName" />
                </el-col>
            </el-form-item>
            <el-form-item
                    label="密码"
                    prop="password"
            >
                <el-col :span="20">
                    <el-input type="password"  v-model="connie.password" />
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" >登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                connie:{
                    password:'',
                    userName:'',
                },
                basicRules: {
                    userName:[{ required: true, message: '请输入用户名', trigger: 'blur' }],
                    password:[{ required: true, message: '请输入密码', trigger: 'blur' }],
                },
            }
        },

        methods: {
            login(){
                //表单验证
                this.$refs.loginRef.validate((valid) => {
                    if(!valid) {
                        //验证不通过
                        this.$message.warning('输入错误，请重新数据');
                        return false
                    }
                    //验证通过，调用API

                })
            }
        }
    }
</script>

<style scoped>
    .login-form {
        margin-left: 30%;
        margin-top: 10%;
        background-color: darkseagreen;
        width: 30%;
        height: 280px;
    }
    .login-p {
        font-size: 26px;
        font-family: 华文隶书;
        color: white;
        text-align: center;
        margin-left: 10%;
    }
</style>

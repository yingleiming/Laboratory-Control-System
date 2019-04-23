<template>
  <el-container>
    <el-main>
      <el-form :model="loginForm" :rules="fieldRules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
          <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="请输入用户名">
            <template slot="prepend">账号</template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码">
            <template slot="prepend">密码</template>
          </el-input>
        </el-form-item>
        <el-form-item style="width:100%;margin-bottom: 0;">
          <el-button type="primary" style="width:48%;" @click="login('loginForm')">登 录</el-button>
          <el-button style="width:48%;" @click="reset('loginForm')">重 置</el-button>
        </el-form-item>
        <el-button type="text" id="createAccount">创建用户？</el-button>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        account: '',
        password: ''
      },
      fieldRules: {
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
        ]
      },
      checked: true
    };
  },
  methods: {
    login(loginForm) {
      this.$refs[loginForm].validate((valid) => {
        let account = this.loginForm.account;
        let password = this.loginForm.password;
        this.$axios.get('/login',{
          account:account,
          password:password
        }).then(
          (res)=>{
            console.log(res);
          }
        ).catch(
          (err)=>{
            console.log(err);
          }
        )
      })
    },
    reset(loginForm) {
      this.$refs[loginForm].resetFields();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>

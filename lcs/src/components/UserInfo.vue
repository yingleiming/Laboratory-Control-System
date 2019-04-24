<template>
    <div id="userInfo">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户详情</span>
        </div>
        <el-row class="dev">
          <el-col :span="3">头像：</el-col>
          <el-col :span="10">
            <img src="" alt="">
          </el-col>
        </el-row>
        <el-row class="dev">
          <el-col :span="3">用户名：</el-col>
          <el-col :span="10">盈雷明</el-col>
        </el-row>
        <el-row class="dev">
          <el-col :span="3">性别：</el-col>
          <el-col :span="10">男</el-col>
        </el-row>
        <el-row class="dev">
          <el-col :span="3">年龄：</el-col>
          <el-col :span="10">30</el-col>
        </el-row>
        <el-row class="dev">
          <el-col :span="3">账户：</el-col>
          <el-col :span="10">007</el-col>
        </el-row>
        <el-row class="dev">
          <el-col :span="3">密码：</el-col>
          <el-col :span="10">80803850325</el-col>
        </el-row>
        <el-row class="dev">
          <el-col :span="3">注册时间：</el-col>
          <el-col :span="10">2014-12-15</el-col>
        </el-row>
        <el-row class="dev">
          <el-col :span="3">最后登陆时间：</el-col>
          <el-col :span="10">2019-3-15</el-col>
        </el-row>
        <el-row class="dev">
          <el-col :span="3">系统日志：</el-col>
          <el-col :span="10">5464615646315645</el-col>
        </el-row>
        <el-row class="dev">
          <el-col :span="3">用户描述：</el-col>
          <el-col :span="10">，笔耕不辍，喜欢撰文和阅读。长期执于心理学、家庭教育的研究和学习，并积极实践在工作中，取得显著的成效。</el-col>
        </el-row>
        <!--操作-->
        <el-button id="handel" size="small" type="primary" @click="">修改</el-button>
      </el-card>
    </div>

</template>

<script>
    export default {
      name: "UserInfo",
      data(){

      },
      methods:{
        // handel(){
        //
        // }
      }
    }
</script>

<style scoped lang="scss">
  #userInfo{
    /*padding: 15px 0;*/
  }
    #userInfo .dev{
      padding: 15px;
      border-bottom: 1px solid #EBEEF5;
    }
    #handel{
      margin-top: 15px;
    }

</style>

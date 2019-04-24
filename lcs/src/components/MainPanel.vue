<template>
    <div id="mainPanel">
      <el-container>
        <el-header>欢迎登陆实验室智能管控系统</el-header>
        <el-container>
          <el-aside  width="200px" style="background-color: rgb(238, 241, 246)">
            <el-row class="tac">
              <el-col>
                <h5 align="center">主控制面板</h5>
                <el-menu default-active="1">
                  <el-menu-item index="1" @click="selectUseInfo">
                    <i class="el-icon-info"></i>
                    <span slot="title">用户详情</span>
                  </el-menu-item>
                  <el-menu-item index="2" @click="selectDeviceList">
                    <i class="el-icon-menu"></i>
                    <span slot="title">设备列表</span>
                  </el-menu-item>
                  <el-menu-item index="3" @click="selectLaboratoryList">
                    <i class="el-icon-setting"></i>
                    <span slot="title">实验室列表</span>
                  </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>
          </el-aside>
          <el-main>
            <UserInfo v-show="showUserInfo"></UserInfo>
            <DeviceList v-show="showDeviceList"></DeviceList>
            <LaboratoryList v-show="showLaboratoryList"></LaboratoryList>
          </el-main>
        </el-container>
        <el-footer>版权公告 © 2019-2099 本系统为个人维护和开发，请尊重知识产权，未经允许不得擅自抄袭。</el-footer>
      </el-container>
    </div>
</template>

<script>
    import UserInfo from './UserInfo'
    import DeviceList from './DeviceList'
    import LaboratoryList from './LaboratoryList'
    export default {
      name: "MainPanel",
      components:{UserInfo,DeviceList,LaboratoryList},
      data(){
        return{
          showUserInfo:true,
          showDeviceList:false,
          showLaboratoryList:false
        }
      },
      methods: {
        selectUseInfo() {
          console.log("选择了用户详情");
          this.showUserInfo=true;
          this.showDeviceList=false;
          this.showLaboratoryList =false;
        },
        selectDeviceList() {
          console.log("选择了实设备列表");
          this.showDeviceList = true;
          this.showUserInfo=false;
          this.showLaboratoryList =false;
        },
        selectLaboratoryList(){
          console.log("选择了实验室列表");
          this.showLaboratoryList=true;
          this.showUserInfo=false;
          this.showDeviceList =false;
        }
      }
    }
</script>

<style scoped lang="scss">
  #mainPanel{
    min-height: 600px;
    background: #CCCCCC;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    /*text-align: center;*/
    /*line-height: 200px;*/
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
  }
</style>

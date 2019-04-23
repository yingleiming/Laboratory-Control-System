<template>
    <div id="mainPanel">
      <el-container>
        <el-aside>
          <el-row class="tac">
            <el-col :span="12">
              <h5>主控制面板</h5>
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
    /*background: #CCCCCC;*/
  }
</style>

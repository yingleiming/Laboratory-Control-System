<template>
    <div id="mainPanel">
      <el-container>
        <el-aside>
          <el-row class="tac">
            <el-col :span="12">
              <h5>主控制面板</h5>
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-menu-item index="1">
                  <i class="el-icon-info"></i>
                  <span slot="title">用户详情</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">设备列表</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-setting"></i>
                  <span slot="title">实验室列表</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>

        </el-main>
      </el-container>
    </div>
</template>

<script>
    export default {
      name: "MainPanel",
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
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

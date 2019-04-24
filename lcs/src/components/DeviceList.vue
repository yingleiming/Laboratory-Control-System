<template>
    <div>
      <div>
        <span>查找设备</span>
        <input type="text" placeholder="请输入设备名称">
      </div>

      <div class="dev">
        <div>
          <span>设备名称：</span>
          <span>1号设备</span>
        </div>
        <div>
          <span>设备状态：</span>
          <div>
            <span>1:正常</span>
            <span>2:损坏</span>
          </div>
        </div>
        <div>
          <span>设备ID:</span>
          <span>464688</span>
        </div>
        <div>
          <span>设备描述：</span>
          <span>实验室sfsfsf</span>
        </div>
        <div>
          <span>创建时间：</span>
          <span>2019年3月5日</span>
        </div>
        <div>
          <el-button type="primary" @click="" size="mini">修改此设备</el-button>
        </div>
      </div>
      <div class="dev">
        <div>
          <span>设备名称：</span>
          <span>1号设备</span>
        </div>
        <div>
          <span>设备状态：</span>
          <div>
            <span>1:正常</span>
            <span>2:损坏</span>
          </div>
        </div>
        <div>
          <span>设备ID:</span>
          <span>464688</span>
        </div>
        <div>
          <span>设备描述：</span>
          <span>实验室sfsfsf</span>
        </div>
        <div>
          <span>创建时间：</span>
          <span>2019年3月5日</span>
        </div>
        <div>
          <el-button type="primary" @click="" size="mini">修改此设备</el-button>
        </div>
      </div>
      <div class="dev">
        <div>
          <span>设备名称：</span>
          <span>1号设备</span>
        </div>
        <div>
          <span>设备状态：</span>
          <div>
            <span>1:正常</span>
            <span>2:损坏</span>
          </div>
        </div>
        <div>
          <span>设备ID:</span>
          <span>464688</span>
        </div>
        <div>
          <span>设备描述：</span>
          <span>实验室sfsfsf</span>
        </div>
        <div>
          <span>创建时间：</span>
          <span>2019年3月5日</span>
        </div>
        <div>
          <el-button type="primary" @click="" size="mini">修改此设备</el-button>
        </div>
      </div>

      <div>
        <el-button type="success" @click="" size="mini">添加设备</el-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DeviceList"
    }
</script>

<style scoped>
    .dev{
      border: 1px solid #cccccc;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
</style>

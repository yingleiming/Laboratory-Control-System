<template>
  <div>
    <div>
      <span>查找实验室</span>
      <input type="text" placeholder="请输入实验室名称">
    </div>
    <div class="dev">
      <div>
        <span>实验室名称：</span>
        <span>1号实验室</span>
      </div>
      <div>
        <span>当前状态：</span>
        <div>
          <span>1:可用</span>
          <span>0:不可用</span>
        </div>
      </div>
      <div>
        <el-button type="primary" @click="" size="mini">修改实验室</el-button>
      </div>
    </div>
    <div class="dev">
      <div>
        <span>实验室名称：</span>
        <span>1号实验室</span>
      </div>
      <div>
        <span>当前状态：</span>
        <div>
          <span>1:可用</span>
          <span>0:不可用</span>
        </div>
      </div>
      <div>
        <el-button type="primary" @click="" size="mini">修改实验室</el-button>
      </div>
    </div>
    <div class="dev">
      <div>
        <span>实验室名称：</span>
        <span>1号实验室</span>
      </div>
      <div>
        <span>当前状态：</span>
        <div>
          <span>1:可用</span>
          <span>0:不可用</span>
        </div>
      </div>
      <div>
        <el-button type="primary" @click="" size="mini">修改实验室</el-button>
      </div>
    </div>
    <div>
      <el-button type="success" @click="" size="mini">添加实验室</el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "LaboratoryList"
    }
</script>

<style scoped>
  .dev{
    border: 1px solid #cccccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
</style>

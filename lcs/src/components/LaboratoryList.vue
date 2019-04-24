<template>
  <div id="laboratory">
    <el-card class="box-card">
      <el-row id="search">
        <el-col :span="24">
          <el-autocomplete
            class="inline-input"
            v-model="state2"
            :fetch-suggestions="querySearch"
            placeholder="请输入实验室名称"
            :trigger-on-focus="false"
            @select="handleSelect"
          ></el-autocomplete>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="dev" :span="6">
          <div>
            <span>实验室名称：</span>
            <span>1号实验室</span>
          </div>
          <div>
            <span>当前状态：</span>
            <span>可用</span>
          </div>
          <div class="handel">
            <el-button type="primary" @click="" size="mini">修改</el-button>
            <el-button type="danger" @click="" size="mini">删除</el-button>
          </div>
        </el-col>
        <el-col class="dev" :span="6">
          <div>
            <span>实验室名称：</span>
            <span>1号实验室</span>
          </div>
          <div>
            <span>当前状态：</span>
            <span>可用</span>
          </div>
          <div class="handel">
            <el-button type="primary" @click="" size="mini">修改</el-button>
            <el-button type="danger" @click="" size="mini">删除</el-button>
          </div>
        </el-col>
        <el-col class="dev" :span="6">
          <div>
            <span>实验室名称：</span>
            <span>1号实验室</span>
          </div>
          <div>
            <span>当前状态：</span>
            <span>可用</span>
          </div>
          <div class="handel">
            <el-button type="primary" @click="" size="mini">修改</el-button>
            <el-button type="danger" @click="" size="mini">删除</el-button>
          </div>
        </el-col>
        <el-col class="dev" :span="6">
          <div>
            <span>实验室名称：</span>
            <span>1号实验室</span>
          </div>
          <div>
            <span>当前状态：</span>
            <span>可用</span>
          </div>
          <div class="handel">
            <el-button type="primary" @click="" size="mini">修改</el-button>
            <el-button type="danger" @click="" size="mini">删除</el-button>
          </div>
        </el-col>
        <el-col class="dev" :span="6">
          <div>
            <span>实验室名称：</span>
            <span>1号实验室</span>
          </div>
          <div>
            <span>当前状态：</span>
            <span>可用</span>
          </div>
          <div class="handel">
            <el-button type="primary" @click="" size="mini">修改</el-button>
            <el-button type="danger" @click="" size="mini">删除</el-button>
          </div>
        </el-col>
        <el-col class="dev" :span="6">
          <div>
            <span>实验室名称：</span>
            <span>1号实验室</span>
          </div>
          <div>
            <span>当前状态：</span>
            <span>可用</span>
          </div>
          <div class="handel">
            <el-button type="primary" @click="" size="mini">修改</el-button>
            <el-button type="danger" @click="" size="mini">删除</el-button>
          </div>
        </el-col>
        <el-col class="dev" :span="6">
          <div>
            <span>实验室名称：</span>
            <span>1号实验室</span>
          </div>
          <div>
            <span>当前状态：</span>
            <span>可用</span>
          </div>
          <div class="handel">
            <el-button type="primary" @click="" size="mini">修改</el-button>
            <el-button type="danger" @click="" size="mini">删除</el-button>
          </div>
        </el-col>
        <el-col class="dev" :span="6">
          <div>
            <span>实验室名称：</span>
            <span>1号实验室</span>
          </div>
          <div>
            <span>当前状态：</span>
            <span>可用</span>
          </div>
          <div class="handel">
            <el-button type="primary" @click="" size="mini">修改</el-button>
            <el-button type="danger" @click="" size="mini">删除</el-button>
          </div>
        </el-col>
        <el-col class="dev" :span="6">
          <div>
            <span>实验室名称：</span>
            <span>1号实验室</span>
          </div>
          <div>
            <span>当前状态：</span>
            <span>可用</span>
          </div>
          <div class="handel">
            <el-button type="primary" @click="" size="mini">修改</el-button>
            <el-button type="danger" @click="" size="mini">删除</el-button>
          </div>
        </el-col>
      </el-row>
      <div >
        <el-button type="success" @click="" size="small">添加实验室</el-button>
      </div>
    </el-card>

  </div>
</template>

<script>
    export default {
        name: "LaboratoryList"
    }
</script>

<style scoped>
  #laboratory{
    /*padding: 15px 0;*/
  }
  .dev{
    padding: 15px;
    margin: 0 15px 15px 0;
    border: 1px solid #cccccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .dev>div{
    height: 25px;
    line-height: 25px;
  }
  .handel{
    margin-top: 5px;
  }
  #search{
    margin-bottom: 15px;
  }
</style>

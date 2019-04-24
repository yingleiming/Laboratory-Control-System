<template>
    <div id="device">
      <el-card class="box-card">
        <el-row id="search">
          <el-col :span="24">
            <el-autocomplete
              class="inline-input"
              v-model="state2"
              :fetch-suggestions="querySearch"
              placeholder="请输入设备名称或实验室ID"
              :trigger-on-focus="false"
              @select="handleSelect"
            ></el-autocomplete>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="dev" :span="6">
            <div>
              <span>设备名称：</span>
              <span>1号设备</span>
            </div>
            <div>
              <span>设备状态：</span>
              <span>正常</span>
            </div>
            <div>
              <span>设备ID：</span>
              <span>6465498</span>
            </div>
            <div>
              <span>设备描述：</span>
              <span>实验室sfsfsf</span>
            </div>
            <div>
              <span>创建时间：</span>
              <span>2019年3月5日</span>
            </div>
            <div class="handel">
              <el-button type="primary" @click="" size="mini">修改</el-button>
              <el-button type="danger" @click="" size="mini">删除</el-button>
            </div>
          </el-col>
          <el-col class="dev" :span="6">
            <div>
              <span>设备名称：</span>
              <span>1号设备</span>
            </div>
            <div>
              <span>设备状态：</span>
              <span>正常</span>
            </div>
            <div>
              <span>设备ID：</span>
              <span>6465498</span>
            </div>
            <div>
              <span>设备描述：</span>
              <span>实验室sfsfsf</span>
            </div>
            <div>
              <span>创建时间：</span>
              <span>2019年3月5日</span>
            </div>
            <div class="handel">
              <el-button type="primary" @click="" size="mini">修改</el-button>
              <el-button type="danger" @click="" size="mini">删除</el-button>
            </div>
          </el-col>
          <el-col class="dev" :span="6">
            <div>
              <span>设备名称：</span>
              <span>1号设备</span>
            </div>
            <div>
              <span>设备状态：</span>
              <span>正常</span>
            </div>
            <div>
              <span>设备ID：</span>
              <span>6465498</span>
            </div>
            <div>
              <span>设备描述：</span>
              <span>实验室sfsfsf</span>
            </div>
            <div>
              <span>创建时间：</span>
              <span>2019年3月5日</span>
            </div>
            <div class="handel">
              <el-button type="primary" @click="" size="mini">修改</el-button>
              <el-button type="danger" @click="" size="mini">删除</el-button>
            </div>
          </el-col>
          <el-col class="dev" :span="6">
            <div>
              <span>设备名称：</span>
              <span>1号设备</span>
            </div>
            <div>
              <span>设备状态：</span>
              <span>正常</span>
            </div>
            <div>
              <span>设备ID：</span>
              <span>6465498</span>
            </div>
            <div>
              <span>设备描述：</span>
              <span>实验室sfsfsf</span>
            </div>
            <div>
              <span>创建时间：</span>
              <span>2019年3月5日</span>
            </div>
            <div class="handel">
              <el-button type="primary" @click="" size="mini">修改</el-button>
              <el-button type="danger" @click="" size="mini">删除</el-button>
            </div>
          </el-col>
          <el-col class="dev" :span="6">
            <div>
              <span>设备名称：</span>
              <span>1号设备</span>
            </div>
            <div>
              <span>设备状态：</span>
              <span>正常</span>
            </div>
            <div>
              <span>设备ID：</span>
              <span>6465498</span>
            </div>
            <div>
              <span>设备描述：</span>
              <span>实验室sfsfsf</span>
            </div>
            <div>
              <span>创建时间：</span>
              <span>2019年3月5日</span>
            </div>
            <div class="handel">
              <el-button type="primary" @click="" size="mini">修改</el-button>
              <el-button type="danger" @click="" size="mini">删除</el-button>
            </div>
          </el-col>
          <el-col class="dev" :span="6">
            <div>
              <span>设备名称：</span>
              <span>1号设备</span>
            </div>
            <div>
              <span>设备状态：</span>
              <span>正常</span>
            </div>
            <div>
              <span>设备ID：</span>
              <span>6465498</span>
            </div>
            <div>
              <span>设备描述：</span>
              <span>实验室sfsfsf</span>
            </div>
            <div>
              <span>创建时间：</span>
              <span>2019年3月5日</span>
            </div>
            <div class="handel">
              <el-button type="primary" @click="" size="mini">修改</el-button>
              <el-button type="danger" @click="" size="mini">删除</el-button>
            </div>
          </el-col>
          <el-col class="dev" :span="6">
            <div>
              <span>设备名称：</span>
              <span>1号设备</span>
            </div>
            <div>
              <span>设备状态：</span>
              <span>正常</span>
            </div>
            <div>
              <span>设备ID：</span>
              <span>6465498</span>
            </div>
            <div>
              <span>设备描述：</span>
              <span>实验室sfsfsf</span>
            </div>
            <div>
              <span>创建时间：</span>
              <span>2019年3月5日</span>
            </div>
            <div class="handel">
              <el-button type="primary" @click="" size="mini">修改</el-button>
              <el-button type="danger" @click="" size="mini">删除</el-button>
            </div>
          </el-col>
          <el-col class="dev" :span="6">
            <div>
              <span>设备名称：</span>
              <span>1号设备</span>
            </div>
            <div>
              <span>设备状态：</span>
              <span>正常</span>
            </div>
            <div>
              <span>设备ID：</span>
              <span>6465498</span>
            </div>
            <div>
              <span>设备描述：</span>
              <span>实验室sfsfsf</span>
            </div>
            <div>
              <span>创建时间：</span>
              <span>2019年3月5日</span>
            </div>
            <div class="handel">
              <el-button type="primary" @click="" size="mini">修改</el-button>
              <el-button type="danger" @click="" size="mini">删除</el-button>
            </div>
          </el-col>
          <el-col class="dev" :span="6">
            <div>
              <span>设备名称：</span>
              <span>1号设备</span>
            </div>
            <div>
              <span>设备状态：</span>
              <span>正常</span>
            </div>
            <div>
              <span>设备ID：</span>
              <span>6465498</span>
            </div>
            <div>
              <span>设备描述：</span>
              <span>实验室sfsfsf</span>
            </div>
            <div>
              <span>创建时间：</span>
              <span>2019年3月5日</span>
            </div>
            <div class="handel">
              <el-button type="primary" @click="" size="mini">修改</el-button>
              <el-button type="danger" @click="" size="mini">删除</el-button>
            </div>
          </el-col>
        </el-row>
        <div>
          <el-button type="success" @click="" size="small">添加设备</el-button>
        </div>
      </el-card>
    </div>

</template>

<script>
    export default {
        name: "DeviceList"
    }
</script>

<style scoped>
    #device{
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

<template>
    <div id="userInfo">
      <el-row>
        <el-col :span="3">头像：</el-col>
        <el-col :span="21">
          <img src="" alt="">
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">用户名：</el-col>
        <el-col :span="21">盈雷明</el-col>
      </el-row>
      <el-row>
        <el-col :span="3">性别：</el-col>
        <el-col :span="21">男</el-col>
      </el-row>
      <el-row>
        <el-col :span="3">年龄：</el-col>
        <el-col :span="21">30</el-col>
      </el-row>
      <el-row>
        <el-col :span="3">账户：</el-col>
        <el-col :span="21">007</el-col>
      </el-row>
      <el-row>
        <el-col :span="3">密码：</el-col>
        <el-col :span="21">80803850325</el-col>
      </el-row>
      <el-row>
        <el-col :span="3">注册时间：</el-col>
        <el-col :span="21">2014-12-15</el-col>
      </el-row>
      <el-row>
        <el-col :span="3">最后登陆时间：</el-col>
        <el-col :span="21">2019-3-15</el-col>
      </el-row>
      <el-row>
        <el-col :span="3">系统日志：</el-col>
        <el-col :span="21">5464615646315645</el-col>
      </el-row>
      <el-row>
        <el-col :span="3">用户描述：</el-col>
        <el-col :span="21">1974.6月出生，小教高级，本科学历。1993年参加工作一直在河南省新乡市红旗区和平路小学任教，2011年任和平小学教导处主任，2014年任红旗区小店镇中心校副校长。国际二级心理咨询师；国家高级家庭教育指导师；国家首届幸福力讲师；河南省国培讲师；新乡市积极心理学幸福教育委员会秘书长。在24年的工作中一直秉承着“不忘初心，行走在朴素而幸福的教育路上”的宗旨，兢兢业业，尽自己所能教好每一个孩子，始终牢记教育的初衷和本真。河南省骨干教师河南省教学标兵新乡市第四届名师新乡市学科教育优秀专家新乡市骨干教师新乡市教学标兵新乡市师德先进个人新乡市教学工作先进个人新乡市红旗区首席教师新乡市红旗区五一劳动模范全国真语文说课特等奖河南省优质课一等奖河南省教学技能竞赛一等奖新乡市教学技能竞赛一等奖辅导年轻教师多次获得全国素养大赛一等奖省优质课一等奖深耕教育一线24年，笔耕不辍，喜欢撰文和阅读。长期执于心理学、家庭教育的研究和学习，并积极实践在工作中，取得显著的成效。</el-col>
      </el-row>
      <el-button type="primary" @click="">修改</el-button>
    </div>

</template>

<script>
    export default {
        name: "UserInfo"
    }
</script>

<style scoped lang="scss">
    #userInfo{
      div{
      &:first-child{
        border-bottom: 1px solid #ccc;
      }
      }
    }
</style>

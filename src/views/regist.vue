<template>
  <!-- 注册功能 -->
  <div class="regist" >
    <el-steps :active="active" finish-status="success" align-center >
      <el-step title="手机号"></el-step>
      <el-step title="基本信息"></el-step>
      <el-step title="注册完成"></el-step>
    </el-steps>
    <div class="content">
      <div v-if="active==0">
        <Checkphone :phonenum="phonenum" @num="getPhone"/>
      </div>
      <div v-if="active==1">
        <Information :ruleForm="ruleForm" @name="getName"/>
      </div>
      <div v-if="active==2">
        <h1>恭喜你注册成功,{{ruleForm.name}}</h1>
        <h2>祝您的购物之旅愉快!!!</h2>
      </div>
    </div>
    <el-button style="margin-top: 12px;width:90px" @click="back" v-if="active===1">上一步</el-button>
    <el-button style="margin-top: 12px;width:90px"
      @click="next" v-if="active<2">下一步</el-button>
    <router-link to='/'>
      <el-button style="margin-top: 12px;width:90px" v-if="active==2">
        完&nbsp;&nbsp;成
      </el-button>
    </router-link>
  </div>
</template>

<script>
import Checkphone from '../Regist/checkphone.vue';
import Information from '../Regist/information.vue';

export default {
  components: {
    Checkphone,
    Information,
  },
  name: 'regist',
  data() {
    return {
      active: 0,
      phonenum: {
        phone: '',
      },
      ruleForm: {
        name: '',
        pass: '',
        checkPass: '',
        email: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        gender: '1',
        desc: '',
      },
    };
  },

  methods: {
    next() {
      this.active += 1;
      if (this.phonenum.phone === '') {
        // eslint-disable-next-line no-alert
        alert('错误提交');
        this.active -= 1;
      } else if (this.phonenum.phone.length !== 11) {
        // // eslint-disable-next-line no-alert
        // alert('手机号格式错误,错误提交');
        this.active -= 1;
      }
    },
    back() {
      this.active -= 1;
    },
    getPhone(msg) {
      this.phonenum.phone = msg;
    },
    getName(msg) {
      this.ruleForm.name = msg;
    },
  },
};
</script>

<style>
.regist{
  position: absolute;
  top:100px;
  left: 10%;
  text-align: center;
  width:80%;
}
.regist .content{
  width: 600px;
  margin:20px auto;
}
</style>

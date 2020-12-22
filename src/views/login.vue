<template>
  <!-- 登录界面 -->
  <div class="login">
    <h1>欢迎登录~</h1>
    <br>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名：">
          <el-input v-model="formLabelAlign.name" placeholder="用户名/手机号/邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码：">
          <el-input v-model="formLabelAlign.region"
          placeholder="请输入密码" type="password" show-password></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="check">登录</el-button>
    <router-link to='/'><el-button>取消</el-button></router-link>
  </div>
</template>

<script>
import swal from 'sweetalert';

export default {
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: '',
      },
    };
  },
  methods: {
    check() {
      // 初始化用户
      // const user = [
      //   {
      //     name: 'admin',
      //     password: '123456',
      //     phone: 18912737402,
      //   },
      //   {
      //     name: 'chenh',
      //     password: 'chenhong',
      //     phone: 18912737403,
      //   },
      // ];
      // localStorage.setItem('user', JSON.stringify(user));
      const data1 = JSON.parse(localStorage.getItem('user'));
      for (let i = 0; i < data1.length; i += 1) {
        if (this.formLabelAlign.name === data1[i].name) {
          if (this.formLabelAlign.region === data1[i].password) {
            const loginform = {
              islogin: 'true',
              name: this.formLabelAlign.name,
            };
            // const usercar = [];
            // localStorage.setItem(this.formLabelAlign.name, JSON.stringify(usercar));
            localStorage.setItem('islogin', JSON.stringify(loginform));
            this.$router.push({ path: '/' });
            // eslint-disable-next-line no-restricted-globals
            location.reload();
            return;
          }
        }
      }
      swal({
        title: '账号或者密码不正确!',
        text: '请重新输入...',
        icon: 'error',
      });
      // console.log(this.formLabelAlign);
    },
  },
};
</script>

<style>
.login{
  border-radius: 20px;
  position: absolute;
  top:200px;
  left:35%;
  text-align: center;
  width: 450px;
  background-color: #fff;
}
.login .el-form{
  width:400px;
}
.login .el-form .el-form-item{
  height: 60px;
}
.login .el-button{
  margin: 0 40px;
  margin-bottom: 30px;
}
.swal-overlay {
  background-color: rgba(187, 247, 233, 0.45);
}
</style>

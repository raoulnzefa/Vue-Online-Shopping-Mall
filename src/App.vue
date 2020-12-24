<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <div class="nav" v-if="!islogin">
      <router-link to='/login'>登录</router-link>
      <router-link to='/regist'>注册</router-link>
    </div>
    <div class="nav" v-if="islogin">
      <div class="username">{{name}},欢迎！</div>
      <el-button type="text" @click="logout">注销</el-button>
    </div>
    <div class="navrear">
          <router-link to='/'>首页</router-link>
          <router-link to='/About' >我的订单</router-link>
          <router-link to='/shoppingcar'>
            <el-badge :value="numn" :max="99" class="item">
              购物车
            </el-badge>
          </router-link>
      </div>
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      islogin: false,
      isRouterAlive: true,
      name: '',
      numn: 0,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      // eslint-disable-next-line func-names
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
    logout() {
      this.islogin = false;
      const loginform = {
        islogin: false,
      };
      localStorage.setItem('islogin', JSON.stringify(loginform));
      this.reload();
    },
  },
  mounted() {
    const data1 = JSON.parse(localStorage.getItem('islogin'));
    if (data1 === null) {
      // 初始化用户
      const user = [
        {
          name: 'admin',
          password: '123456',
          phone: 18912737402,
        },
        {
          name: 'chenh',
          password: 'chenhong',
          phone: 18912737403,
        },
      ];
      localStorage.setItem('user', JSON.stringify(user));
      // 初始化未登录状态
      const islogin = {
        islogin: false,
      };
      localStorage.setItem('islogin', JSON.stringify(islogin));
    }
    this.islogin = data1.islogin;
    this.name = data1.name;
    const data2 = JSON.parse(localStorage.getItem(data1.name));
    this.numn = data2.length;
  },
};
</script>

<style>
body{
  min-width: 1400px;
  margin:0;
  padding:0;
  background: #daecff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  font-size:15px;
}
.nav {
  float: left;
  text-align: left;
  padding: 12px 0;
  background:#fff;
  width:50%;
  height: 18px;
  border-bottom: 3px solid cyan;
  border-radius:0 0 0 20px;
}
.navrear {
  float: left;
  padding: 12px 0;
  text-align: right;
  background:#fff;
  width: 50%;
  height: 18px;
  border-bottom: 3px solid cyan;
  border-radius:0 0 20px 0;
}
.navrear .el-badge{
  font-size: 14px;
}
.nav a {
  margin-left:50px;
  text-decoration:none;
  font-weight: bold;
  color: #2c3e50;
}
.nav .username{
  margin-left: 100px;
  float: left;
}
.nav button{
  margin-top: -8px;
}
.navrear a {
  margin-right:50px;
  text-decoration:none;
  font-weight: bold;
  color: #2c3e50;
}
.nav a.router-link-exact-active {
  color: #42b983;
}
.navrear a.router-link-exact-active {
  color: #42b983;
}
.navrear .el-dropdown-link {
    cursor: pointer;
    font-weight: bold;
    color: #2c3e50;
  }
.navrear .el-icon-arrow-down {
    font-size: 12px;
}
</style>

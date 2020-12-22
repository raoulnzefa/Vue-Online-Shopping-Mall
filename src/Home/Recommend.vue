<template>
<!-- 推荐商品 -->
<div class="recommend1">
  <div class="title">
    发现
    <br>好货
  </div>
  <div class="graphic" v-for="(item,i) in lists" :key="i">
    <!-- 推荐传参 -->
    <router-link :to="'/details/tui'+(i+1)">
      <div class="puc"><el-image
      :src="require(`../images/home/${item.path}`)" fill="fill"></el-image></div>
      <div class="font">{{item.font}}</div>
    </router-link>

  </div>
</div>
</template>

<script>
import axios from 'axios';
import address from '../network/api';
import '../mock/index';

export default {
  name: 'Promotion',
  data() {
    return {
      // 文字数据
      lists: [],
    };
  },
  mounted() {
    axios.get(address.tuiurl).then((res) => {
      this.lists = res.data.lists;
    });
  },
};
</script>

<style>
.recommend1{
  /* 相对定位 */
  position: relative;
  width: 100%;
  height: 100%;
}
.recommend1 .title{
  /* 绝对定位 */
  position: absolute;
  top:-2px;
  right:-6px;
  float: right;
  width: 14%;
  background: red;
  color: #fff;
  font-family: '幼圆';
  text-align: center;
  font-size: 48px;
  border-radius:20px;
  padding: 13px 0;
}
.recommend1 .graphic{
  margin:0 7px;
  border-radius:20px;
  float:left;
  width: 13%;
  height: 100%;
  padding-top: 5px;
}
.recommend1 .el-image{
  border-radius:20px;
  height:60%;
  width: 60%;
}
.recommend1 .font{
  color: rgb(255, 0, 0);
}
</style>

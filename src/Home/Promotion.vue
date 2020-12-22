<template>
<!-- 促销商品 -->
<div class="promotion1">
  <div class="title">
    限时
    <br>促销
  </div>
  <!-- 促销传参 -->
  <div class="graphic" v-for="(item,i) in lists" :key="i">
    <router-link :to="'/details/cu'+(i+1)">
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
import '../mock';

export default {
  name: 'Promotion',
  data() {
    return {
      lists: [],
    };
  },
  mounted() {
    axios.get(address.cuurl).then((res) => {
      this.lists = res.data.lists;
    });
  },
};
</script>

<style>
.promotion1{
  position: relative;
  width: 100%;
  height: 100%;
}
.promotion1 .title{
  /* 绝对定位 */
  position: absolute;
  top:-2px;
  left:-6px;
  float: left;
  width: 14%;
  background: red;
  color: #fff;
  text-align: center;
  font-size: 48px;
  border-radius:20px;
  padding: 13px 0;
}
.promotion1 .graphic{
  margin: 0px 7px;
  float:right;
  width: 13%;
  height: 100%;
  padding-top: 5px;
}
.promotion1 .el-image{
  height:60%;
  width: 60%;
}
.promotion1 .font{
  color: rgb(255, 0, 0);
}
</style>

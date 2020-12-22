<template>
  <!-- 轮播图 -->
  <div class="rotation">
  <el-carousel :interval="4000" type="card" height="374px">
    <el-carousel-item v-for="item in imgs" :key="item">
      <el-image style="height:100%;width:100%;" :src="item" fit="fill"></el-image>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
import axios from 'axios';
import address from '../network/api';
import '../mock/index';

export default {
  name: 'Rotation',
  data() {
    return {
      imgs: [],
    };
  },
  mounted() {
    axios.get(address.carurl).then((res) => {
      this.imgs = res.data.imgs;
    });
  },
};
</script>

<style>
.rotation{
  width: 1000px;
}
</style>

<template>
  <div id="buy">
    <!-- 标题 -->
    <el-row>
      <el-col :span="20" class="title">{{this.title}}</el-col>
    </el-row>
    <!-- 价格 -->
    <div class="displayprice">
      <el-row>
        <el-col :span="4">价格:</el-col>
        <el-col :span="4" class="price">￥{{this.price}}</el-col>
      </el-row>
    </div>
    <!-- 地址选择 -->
    <el-row class="neirong" style="margin-top:20px">
      <el-col :span="2" style="text-align:right">配送至</el-col>
      <el-col :span="8" :offset="1">
        <el-cascader :options="options" separator="" placeholder="请选择地址：">
          <template slot-scope="{ node, data }">
            <span>{{ data.label }}</span>
            <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
          </template>
        </el-cascader>
      </el-col>
      <el-col :span="3">有货</el-col>
      <el-col :span="4">在线支付免邮费</el-col>
    </el-row>
    <el-divider></el-divider>
    <!-- 颜色选择 -->
    <el-row class="neirong">
      <el-col :span="3">选择颜色</el-col>
      <el-col :span="20">
        <el-radio-group v-model="radio1" >
          <el-radio-button v-for="item in color" :key="item"
            :label="item">{{item}}</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
    <!-- 版本选择 -->
    <el-row class="neirong">
      <el-col :span="3">选择版本</el-col>
      <el-col :span="20">
        <el-radio-group v-model="radio2" >
          <el-radio-button v-for="item in version" :key="item"
            :label="item">{{item}}</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
    <!-- 分期选择 -->
    <el-row class="neirong">
      <el-col :span="3">白条分期</el-col>
      <el-col :span="20">
        <el-radio-group v-model="radio3">
          <el-radio-button v-for="item in staging" :key="item"
            :label="item">{{item}}</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <!-- 添加购物车 -->
    <el-row class="neirong">
      <el-col :span="6">
        <el-input-number v-model="num"
        :min="1" :max="10" label="购买数量"></el-input-number>
      </el-col>
      <el-col :span="12">
          <el-button type="danger" @click="show">加入购物车</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';
import address from '../network/api';
import '../mock/index';

export default {
  inject: ['reload'],
  name: 'Buy',
  data() {
    return {
      id: 0,
      title: '',
      path: '',
      price: '',
      color: [],
      options: [],
      version: [],
      staging: [],
      radio1: '',
      radio2: '',
      radio3: '',
      num: 1,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    axios.post('/details', this.id).then((res) => {
      this.title = res.data.title;
      this.path = res.data.path;
      this.price = res.data.price;
      this.color = res.data.color;
      [this.radio1] = this.color;
      this.version = res.data.version;
      [this.radio2] = this.version;
      this.staging = res.data.staging;
      [this.radio3] = this.staging;
    });
    axios.post(address.address).then((res) => {
      this.options = res.data.options;
    });
  },
  methods: {
    show() {
      const login = JSON.parse(localStorage.getItem('islogin'));
      if (login.islogin === false) {
        // eslint-disable-next-line no-alert
        alert('您还未登录。');
        return;
      }
      // 删购物车本地数据
      // localStorage.removeItem('infocart');
      const data1 = JSON.parse(localStorage.getItem(login.name));
      if (data1 === null) {
        const buy = [{
          id: Math.round(Math.random() * 10000),
          title: this.title,
          path: this.path,
          price: this.price,
          color: this.radio1,
          version: this.radio2,
          staging: this.radio3,
          num: this.num,
        }];
        localStorage.setItem(login.name, JSON.stringify(buy));
      } else {
        const buy = {
          id: Math.round(Math.random() * 10000),
          title: this.title,
          path: this.path,
          price: this.price,
          color: this.radio1,
          version: this.radio2,
          staging: this.radio3,
          num: this.num,
        };
        for (let i = 0; i < data1.length; i += 1) {
          if (buy.color === data1[i].color && buy.version === data1[i].version
            && buy.staging === data1[i].staging) {
            data1[i].num += this.num;
            if (data1[i].num > 10) {
              this.$notify({
                title: '加入购物车失败',
                message: '很抱歉，该类商品数量到达上限',
                type: 'error',
                duration: 1000,
              });
              data1[i].num -= this.num;
              return;
            }
            localStorage.setItem(login.name, JSON.stringify(data1));
            this.$notify({
              title: '加入购物车成功',
              type: 'success',
              duration: 1000,
            });
            return;
          }
        }
        const len = data1.length;
        data1[len] = buy;
        localStorage.setItem(login.name, JSON.stringify(data1));
      }
      this.$notify({
        title: '加入购物车成功',
        type: 'success',
        duration: 1000,
      });
      this.new();
    },
    new() {
      setTimeout(() => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();// 刷新页面
      }, 1000);// 这就是 一分钟
    },
  },
};
</script>

<style scoped>
#buy{
  width: 750px;
  margin-left:525px;
  z-index: 1;
  margin-bottom: 50px;
}
#buy .title{
  text-align: left;
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  font-size: 20px;
  font-weight: 700;
}
#buy .displayprice{
  width: 750px;
  height:50px;
  background: rgba(100, 100, 100,0.3);
  line-height: 50px;
  color: #fff;
  border-radius: 20px;
}
#buy .price{
  text-align: left;
}
#buy .neirong{
  line-height: 60px;
  text-align: left;
}
#buy .neirong .el-radio-button{
  margin-top: 10px;
  margin-right:5px;
}
</style>

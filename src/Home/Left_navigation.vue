<template>
  <!-- 左导航栏 -->
  <div class="leftnav">
    <ul>
      <el-popover
        placement="right"
        width="600"
        trigger="hover"
        visible-arrow="false"
        v-for="item in list" :key="item.id"
        title="商城分类">
        <a v-for="theme in item.theme" :key="theme.id" :href=theme.web>
          {{theme.msg}}
        </a>
      <li slot="reference">
        <a v-for="lists in item.lists" :key="lists.id" :href=lists.web target="view_frame">
          {{lists.msg}}&nbsp;/
        </a>
      </li>
      </el-popover>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import address from '../network/api';
import '../mock/index';

export default {
  name: 'LeftNav',
  data() {
    return {
      list: [],
      // list: [
      //   {
      //     id: 1,
      //     lists: [
      //       { web: 'https://www.baidu.com/', msg: '女装' },
      //       { web: '#', msg: '内衣' },
      //       { web: '#', msg: '家具' },
      //     ],
      //     theme: [
      //       { web: '#', msg: '毛衣外套' },
      //       { web: '#', msg: '宝藏羊毛' },
      //       { web: '#', msg: '阔腿神裤' },
      //       { web: '#', msg: '小黑裙' },
      //       { web: '#', msg: '西装大衣' },
      //       { web: '#', msg: '芭比裤' },
      //       { web: '#', msg: '美背文胸' },
      //     ],
      //   },
      //   {
      //     id: 2,
      //     lists: [
      //       { web: '#', msg: '女鞋' },
      //       { web: '#', msg: '男鞋' },
      //       { web: '#', msg: '箱包' },
      //     ],
      //     theme: [
      //       { web: '#', msg: '电脑' },
      //     ],
      //   },
      //   {
      //     id: 3,
      //     lists: [
      //       { web: '#', msg: '男装' },
      //       { web: '#', msg: '户外运动' },
      //     ],
      //     theme: [
      //       { web: '#', msg: '平板' },
      //     ],
      //   },
      //   {
      //     id: 4,
      //     lists: [
      //       { web: '#', msg: '手机' },
      //       { web: '#', msg: '数码' },
      //       { web: '#', msg: '企业' },
      //     ],
      //     theme: [
      //       { web: '#', msg: '耳机' },
      //     ],
      //   },
      //   {
      //     id: 5,
      //     lists: [
      //       { web: '#', msg: '零食' },
      //       { web: '#', msg: '生鲜' },
      //       { web: '#', msg: '茶酒' },
      //     ],
      //     theme: [
      //       { web: '#', msg: '笔记本' },
      //     ],
      //   },
      //   {
      //     id: 6,
      //     lists: [{ web: '#', msg: '图书音像' }, { web: '#', msg: '文具' }],
      //     theme: [{ web: '#', msg: '显示屏' }],
      //   },
      //   {
      //     id: 7,
      //     lists: [{ web: '#', msg: '手表' }, { web: '#', msg: '眼镜' }, { web: '#', msg: '珠宝饰品' }],
      //     theme: [{ web: '#', msg: '鼠标' }],
      //   },
      // ],
    };
  },
  mounted() {
    // 导航栏数据初始化
    axios.get(address.navurl).then((res) => {
      this.list = res.data.list;
    });
  },
};
</script>
<style>
.leftnav{
  margin:auto;
  height: 400px;
  text-align: left;
}
a{
  color: black;
  text-decoration:none;
}
a:hover{
  color: coral;
}
a:active{
  color:coral;
}
.leftnav ul{
  margin-top:10px;
  height: 400px;
}
.leftnav ul li{
  margin-left:-40px;
  padding-left: 10px;
  list-style:none;
  font-size: 18px;
  height: 30px;
}
.leftnav ul li:hover{
  background-color:blanchedalmond;
}
.leftnav .el-popover{
  height: 200px;
}
</style>

<template>
<!-- 搜索框 -->
<div class="hello">
  <el-input class="search"
    placeholder="请输入搜索内容"
    :v-model="msg"
    clearable>
  </el-input>
  <el-button type="danger" icon="el-icon-search">搜索</el-button>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      imput: '',
    };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
.hello{
  margin:auto;
}
.search{
  margin: 15px 0;
  width:600px;
}
</style>

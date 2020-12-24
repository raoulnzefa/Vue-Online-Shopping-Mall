<template>
  <div id="detail">
    <Header/>
    <Picmagnifier/>
    <Buy/>
    <div class="jieshao">
      <el-image  v-for="item in intro" :key="item" :src="item"></el-image>
    </div>
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
import Header from '../Home/Header.vue';
import Picmagnifier from '../Details/Picmagnifier.vue';
import Buy from '../Details/Buy.vue';
import Footer from '../Home/footer.vue';
import '../mock/index';

export default {
  name: 'Details',
  components: {
    Header,
    Picmagnifier,
    Buy,
    Footer,
  },
  data() {
    return {
      intro: [],
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    axios.post('/details', this.id).then((res) => {
      if (res.data === null) {
        swal('该商品数据不存在', '您可以返回首页', 'error', {
          buttons: {
            content: '确定',
          },
        // eslint-disable-next-line no-restricted-globals
        }).then(() => { history.go(-1); });
        return;
      }
      this.intro = res.data.introductionpic;
    });
  },
};
</script>

<style scoped>
#detail{
  /* position: relative; */
  width: 100%;
  /* background: cyan; */
  text-align: center;
}
#detail .jieshao{
  margin: auto;
}
#detail .jieshao .el-image{
  margin: -2px 0;
}
</style>

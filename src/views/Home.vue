<template>
  <!-- 首页 -->
  <div class="home">
    <Header/>
    <div class="content">
      <div class="nav1"><LeftNav/></div>
      <div class="rot"><Rotation/></div>
      <!-- <div class="user"></div> -->
      <div class="promotion"><Promotion/></div>
      <div class="recommend"><Recommend/></div>
    </div>
    <div class="footerhome">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from '../Home/Header.vue';
import Rotation from '../Home/Rotation.vue';
import LeftNav from '../Home/Left_navigation.vue';
import Footer from '../Home/footer.vue';
import Promotion from '../Home/Promotion.vue';
import Recommend from '../Home/Recommend.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Rotation,
    LeftNav,
    Footer,
    Promotion,
    Recommend,
  },
  mounted() {
  },
};
</script>
<style scoped>
.home{
  text-align: center;
}
.home .content{
  width: 1200px;
  margin:auto;
  text-align: center;
}
.home .content .nav1{
  width: 200px;
  height: 400px;
  float: left;
  background: #fff;
  border-radius:20px 0 0 20px;
  /* overflow: auto; */
}
.home .rot{
  float: left;
  height:400px;
  background-color: #fd8786;
  border-radius:0 20px 20px 0;
}
.home .user{
  float:left;
  width: 200px;
  height: 400px;
  background: rgba(98, 71, 221,0.5);
}
.home .promotion{
  margin-top: 20px;
  float: left;
  width: 1200px;
  height:150px;
  border: 3px solid #ff0000;
  border-radius: 20px;
  background: #fff;
}
.home .recommend{
  margin-top: 20px;
  float: left;
  width: 1200px;
  height:150px;
  border: 3px solid #ff0000;
  border-radius: 20px;
  background: #fff;
}
.home .footerhome{
  margin-top:800px;
}
</style>

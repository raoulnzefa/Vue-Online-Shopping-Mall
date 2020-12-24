<template>
  <div class="magnifier">
      <!-- 被放大区域 -->
      <div class="magnified" @mouseover= "displayopen"
        @mouseout ="displayclose" @mousemove="marks">
        <el-image :src="require(`../images/home/${id}.jpg`)" class="Img"></el-image>
         <!-- 遮罩层 -->
        <div v-show="display" class="marks"
          :style="{top:top+'px',left:left+'px',width:width+'px',height:height+'px'}"></div>
      </div>
      <!-- 放大区域 -->
      <div class="zoomarea" v-if="display" @mousemove="marks">
        <el-image :src="require(`../images/home/${id}.jpg`)" class="BigImg"
          :style="{top:topBigImg+'px',left:leftBigImg+'px',width:Bwidth+'px',height:Bheight+'px'}" >
        </el-image>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Picmagnifier',
  data() {
    return {
      id: 'cu1',
      display: false,
      top: 0,
      left: 0,
      topBigImg: 0,
      leftBigImg: 0,
      width: 220,
      height: 220,
      Bwidth: 1018,
      Bheight: 1018,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
  },
  methods: {
    displayopen() {
      this.display = true;
    },
    displayclose() {
      this.display = false;
    },
    marks(e) {
      const markswidth = 100 + this.width / 2; // 100为左边距的距离
      const marksheight = 115 + this.height / 2; // 125为上边距的距离
      const img = 400;
      const magnification = 560 / (this.width / img) / 400;
      this.Bwidth = 560 / (this.width / img);
      this.Bheight = 560 / (this.width / img);
      this.top = e.clientY - marksheight;
      this.left = e.clientX - markswidth;
      if (this.top < 0) {
        this.top = 0;
      } else if (this.top > (img - this.height)) {
        this.top = (img - this.height);
      }
      if (this.left < 0) {
        this.left = 0;
      } else if (this.left > (img - this.width)) {
        this.left = (img - this.width);
      }
      this.leftBigImg = -this.left * magnification;
      this.topBigImg = -this.top * magnification;
      // 测试
      // eslint-disable-next-line no-console
      // console.log(this.left);
      // eslint-disable-next-line no-console
      // console.log(this.leftBigImg);
      // eslint-disable-next-line no-console
      // console.log(this.top);
      // // eslint-disable-next-line no-console
      // console.log(this.topBigImg);
    },
  },
};
</script>

<style scoped>
.magnifier .magnified{
  /* float: left; */
  width: 400px;
  height: 400px;
  background: #000;
  margin-left: 100px;
  position: absolute;
}
.magnifier .magnified .Img{
  width: 400px;
  height: 400px;
}
/* 遮罩层 */
.magnifier .marks{
    /* width:220px;
    height:220px; */
    position:absolute;
    background-color:rgba(220, 220, 220, 0.5);
}
.magnifier .zoomarea{
  position: absolute;
  left: 500px;
  float: left;
  width: 560px;
  height: 560px;
  overflow: hidden;
  background: #fff;
  z-index: 3;
}
</style>

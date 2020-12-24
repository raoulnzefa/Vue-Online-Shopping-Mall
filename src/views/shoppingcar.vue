<template>
  <!-- 购物车界面 -->
  <div id="shopping-cart">
    <div style="width:1200px;min-height:700px;margin:auto;">
    <div class="carttop">
      <Header/>
    </div>
    <div class="w">
      <div class="cart-filter-bar">
        <div class="switch-cart">
          全部商品&nbsp;&nbsp;&nbsp;&nbsp;{{count}}
        </div>
        <div class="Shipping-address">
          <el-row style="text-align:right">
            <el-col :span="10" style="text-align:right">配送至</el-col>
            <el-col :span="14" style="text-align:right">
            <el-cascader :options="options" separator="" placeholder="请选择地址：">
            <template slot-scope="{ data }">
            <span>{{ data.label }}</span>
            </template>
            </el-cascader>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 购物车头部 -->
      <div class="cart-thead">
        <div class="thead-all">
          <el-checkbox :indeterminate="isIndeterminate"
          v-model="checkAll" @change="handleCheckAll">全选</el-checkbox>
        </div>
        <div class="thead-goods">商品</div>
        <div class="thead-price">单价</div>
        <div class="thead-count">数量</div>
        <div class="thead-sum">小计</div>
        <div class="thead-action">操作</div>
      </div>
      <div v-if="this.commoditys.length === 0">
        <el-image :src="require(`../images/shoppingcar/Empty.png`)"
        style="width:100%;height:100%;margin-bottom:-8px;"></el-image>
      </div>
      <!-- 购物车内部 -->
      <div class="cartlan" v-for="(item,index) in commoditys"
      :key="index" >
        <div class="cartsingle">
          <el-checkbox-group v-model="checked" @change="handleCheckedCities">
            <el-checkbox :label="item.id">{{''}}</el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="cartimg">
          <el-image :src="require(`../images/home/${item.path}`)"
          style="width:95px;heigth:95px">
          </el-image>
        </div>
        <div class="carttitle">
          {{item.title}}
          <br>
          {{item.color}}
          <br>
          {{item.version}}
          <br>
          {{item.staging}}
        </div>
        <div class="cartprice">
          ￥{{item.price}}
        </div>
        <div class="cartnum">
          <el-input-number v-model="item.num"
          :min="1" :max="10" label="描述文字"></el-input-number>
        </div>
        <div class="cartsum">￥{{item.price * item.num}}</div>
        <div class="cartaction">
          <el-button type="danger" icon="el-icon-delete" circle plain
          @click="delcart(item.id)"></el-button>
        </div>
      </div>
      <!-- 购物车底部 -->
      <div class="cartbottom">
        <div class="thead-all">
          <el-checkbox :indeterminate="isIndeterminate"
          v-model="checkAll" @change="handleCheckAll">全选</el-checkbox>
        </div>
        <div class="settlement">
          <el-button type="primary" @click="settlement">结算</el-button>
        </div>
        <div class="delchecked">
          <el-button type="danger" @click="delchecked">删除</el-button>
        </div>
        <div class="total">总金额：￥{{total}}</div>
      </div>
    </div>
    </div>
    <div class="footercart">
      <Footer/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
import Header from '../Home/Header.vue';
import Footer from '../Home/footer.vue';
import address from '../network/api';
import '../mock/index';

export default {
  inject: ['reload'],
  name: 'Shoppingcar',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      checkAll: false,
      checked: [],
      isIndeterminate: true,
      count: 0,
      options: [],
      commoditys: [],
    };
  },
  mounted() {
    const login = JSON.parse(localStorage.getItem('islogin'));
    if (login.islogin === false) {
      // eslint-disable-next-line no-alert
      alert('您尚未登录!...即将跳转登录界面');
      this.$router.push({ path: '/login' });
    }
    axios.post(address.address).then((res) => {
      this.options = res.data.options;
    });
    const data1 = JSON.parse(localStorage.getItem(login.name));
    this.commoditys = data1;
    this.count = data1.length;
  },
  computed: {
    total() {
      let sum = 0;
      const goods = this.checked;
      for (let i = 0; i < goods.length; i += 1) {
        for (let j = 0; j < this.commoditys.length; j += 1) {
          if (goods[i] === this.commoditys[j].id) {
            sum += this.commoditys[j].price * this.commoditys[j].num;
          }
        }
      }
      return sum;
    },
  },
  methods: {
    // 全选
    handleCheckAll(val) {
      const all = [];
      if (val) {
        for (let i = 0; i < this.commoditys.length; i += 1) {
          all[i] = this.commoditys[i].id;
        }
      } else {
        this.checked = [];
      }
      this.checked = all;
      this.isIndeterminate = false;
    },
    // 单选判定
    handleCheckedCities(value) {
      const checkedCount = value.length;
      this.checkAll = checkedCount === this.commoditys.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.commoditys.length;
    },
    // 删除
    delcart(index) {
      swal({
        title: '您确定要删除此商品吗?',
        icon: 'warning',
        buttons: ['取消', '确定'],
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            const data1 = [];
            let n = 0;
            for (let i = 0; i < this.commoditys.length; i += 1) {
              if (this.commoditys[i].id !== index) {
                data1[n] = this.commoditys[i];
                n += 1;
              }
            }
            const login = JSON.parse(localStorage.getItem('islogin'));
            localStorage.setItem(login.name, JSON.stringify(data1));
            swal('删除成功，感谢您的使用!', {
              icon: 'success',
            }).then(() => {
              // eslint-disable-next-line no-restricted-globals
              location.reload();
            });
          } else {
            swal('您保留了您的商品!');
          }
        });
    },
    delchecked() {
      if (this.commoditys.length === 0) {
        swal({
          title: '抱歉，暂无商品信息。',
          icon: 'warning',
          buttons: '确定',
        });
        return;
      }
      if (this.checked.length === 0) {
        swal({
          title: '抱歉，暂无选择商品。',
          icon: 'warning',
          buttons: '确定',
        });
        return;
      }
      swal({
        title: '您要删除商品吗?',
        icon: 'warning',
        buttons: ['取消', '确定'],
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
          // 删除订单
            const order = [];
            const goods = this.checked;
            let n = 0;
            for (let i = 0; i < goods.length; i += 1) {
              for (let j = 0; j < this.commoditys.length; j += 1) {
                if (goods[i] === this.commoditys[j].id) {
                  order[n] = this.commoditys[j];
                  n += 1;
                }
              }
            }
            for (let i = 0; i < order.length; i += 1) {
              for (let j = 0; j < this.commoditys.length; j += 1) {
                if (order[i].id === this.commoditys[j].id) {
                  this.del(this.commoditys[j].id);
                }
              }
            }
            swal('删除成功，感谢您的使用!', {
              icon: 'success',
            }).then(() => {
              // eslint-disable-next-line no-restricted-globals
              location.reload();
            });
          }
        });
    },
    del(index) {
      const data2 = [];
      let n = 0;
      const login = JSON.parse(localStorage.getItem('islogin'));
      const data1 = JSON.parse(localStorage.getItem(login.name));
      for (let i = 0; i < data1.length; i += 1) {
        if (data1[i].id !== index) {
          data2[n] = data1[i];
          n += 1;
        }
      }
      localStorage.setItem(login.name, JSON.stringify(data2));
    },
    // 结算
    settlement() {
      if (this.commoditys.length === 0) {
        swal({
          title: '抱歉，暂无商品信息。',
          icon: 'warning',
          buttons: '确定',
        });
        return;
      }
      if (this.checked.length === 0) {
        swal({
          title: '抱歉，暂无选择商品。',
          icon: 'warning',
          buttons: '确定',
        });
        return;
      }
      swal({
        title: '您要结算商品吗?',
        icon: 'warning',
        buttons: ['取消', '确定'],
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
          // 订单生成
            const order = [];
            const goods = this.checked;
            let n = 0;
            for (let i = 0; i < goods.length; i += 1) {
              for (let j = 0; j < this.commoditys.length; j += 1) {
                if (goods[i] === this.commoditys[j].id) {
                  order[n] = this.commoditys[j];
                  n += 1;
                }
              }
            }
            // 订单保存
            const data1 = JSON.parse(localStorage.getItem('islogin'));
            const ordername = `${data1.name}(${'order'})`;
            const data2 = JSON.parse(localStorage.getItem(ordername));
            if (data2 === null) {
              localStorage.setItem(ordername, JSON.stringify(order));
            } else {
              const len1 = data2.length;
              for (let i = 0; i < order.length; i += 1) {
                data2[len1 + i] = order[i];
              }
              localStorage.setItem(ordername, JSON.stringify(data2));
            }
            for (let i = 0; i < order.length; i += 1) {
              for (let j = 0; j < this.commoditys.length; j += 1) {
                if (order[i].id === this.commoditys[j].id) {
                  this.del(this.commoditys[j].id);
                }
              }
            }
            swal('结算成功，感谢您的使用!', {
              icon: 'success',
            }).then(() => {
              // eslint-disable-next-line no-restricted-globals
              location.reload();
            });
          }
        });
    },
    new() {
      setTimeout(() => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();// 刷新页面
      }, 800);
    },
  },
};
</script>

<style scoped>
#shopping-cart{
  min-height: 700px;
  margin: auto;
}
#shopping-cart .carttop{
  text-align: right;
}
#shopping-cart .w{
  margin-top: 10px;
  /* background: rgb(251, 255, 0); */
}
#shopping-cart .w .cart-filter-bar{
  height: 40px;
}
#shopping-cart .w .cart-filter-bar .switch-cart{
  height: 40px;
  line-height: 40px;
  width: 200px;
  margin-left: 20px;
  float: left;
  color: red;
  font-weight: 900;
  font-size: 24px;
}
#shopping-cart .w .cart-filter-bar .Shipping-address{
  width: 400px;
  height: 40px;
  line-height: 40px;
  margin-right: 20px;
  float:right;
}
#shopping-cart .w .cart-thead{
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: rgb(220, 221, 220);
}
#shopping-cart .w .cart-thead .thead-all{
  width: 100px;
  float: left;
}
#shopping-cart .w .cart-thead .thead-goods{
  width: 200px;
  float: left;
}
#shopping-cart .w .cart-thead .thead-price{
  width: 400px;
  text-align:right;
  float: left;
}
#shopping-cart .w .cart-thead .thead-count{
  text-align: right;
  width: 150px;
  float: left;
}
#shopping-cart .w .cart-thead .thead-sum{
  text-align: right;
  width: 170px;
  float: left;
}
#shopping-cart .w .cart-thead .thead-action{
  text-align: left;
  width: 105px;
  float: right;
}
#shopping-cart .w .cartlan{
  width: 100%;
  height: 100px;
  text-align: left;
  margin-top: 10px;
  border-bottom: 1px solid rgba(167, 167, 167,0.5);
}
#shopping-cart .w .cartlan .cartsingle{
  line-height: 100px;
  margin: 0 24px;
  float: left;
}
#shopping-cart .w .cartlan .cartimg{
  width: 100px;
  float: left;
  margin-left: 55px;
}
#shopping-cart .w .cartlan .carttitle{
  margin-top: 10px;
  margin-left: 10px;
  font-size: 12px;
  float: left;
  width: 200px;
}
#shopping-cart .w .cartlan .cartprice{
  line-height: 100px;
  width: 280px;
  text-align: right;
  float: left;
}
#shopping-cart .w .cartlan .cartnum{
  margin-left: 30px;
  text-align: right;
  line-height: 100px;
  float: left;
}
#shopping-cart .w .cartlan .cartsum{
  float: left;
  width: 150px;
  /* background: #000; */
  line-height: 100px;
  text-align: center;
}
#shopping-cart .w .cartlan .cartaction{
  float: left;
  line-height: 100px;
  margin-left: 20px;
}
#shopping-cart .w .cartbottom{
  height: 50px;
  line-height: 50px;
  background: rgb(220, 221, 220);
  margin-top: 4px;
}
#shopping-cart .w .cartbottom .thead-all{
  margin-left: 23px;
  text-align: left;
  width: 100px;
  float: left;
}
#shopping-cart .w .cartbottom .settlement{
  width: 250px;
  float:right;
}
#shopping-cart .w .cartbottom .delchecked{
  width: 150px;
  float:right;
  text-align: right;
}
#shopping-cart .w .cartbottom .total{
  float:right;
}
#shopping-cart .footercart{
  margin-top: 20px;
}
</style>

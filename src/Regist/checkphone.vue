<template>
  <!-- 手机号提交 -->
  <div>
    <el-form :model="phonenum" :rules="rules"
        label-width="70px" class="demo-ruleForm">
      <el-form-item
        label="手机号"
        prop="phone"
        status-icon="true"
      >
      <el-input @change="setPhone" v-model="phonenum.phone"
        autocomplete="off" placeholder="请输入手机号" clearable>
      </el-input>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
export default {
  name: 'checkphone',
  data() {
    return {
      props: [
        'phonenum',
      ],
      phonenum: {
        phone: '',
      },
      rules: {
        phone: [
          { required: true, message: '手机号为空', trigger: 'blur' },
          {
            min: 11, max: 11, message: '手机号格式错误', trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    setPhone() {
      this.$emit('num', this.phonenum.phone);
    },
  },
};
</script>
<style>
/* number输入框去上下箭头 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input[type="number"]{
    -moz-appearance: textfield;
}
</style>

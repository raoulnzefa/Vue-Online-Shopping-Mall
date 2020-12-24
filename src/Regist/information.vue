<template>
<div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm"
    label-width="80px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="name">
    <el-input v-model="ruleForm.name" @change="setName"></el-input>
  </el-form-item>
    <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="ruleForm.email"></el-input>
  </el-form-item>
  <el-form-item label="地址" prop="region">
    <el-col :span="12">
      <el-select v-model="ruleForm.region1" placeholder="请选择省份">
        <el-option label="上海" value="shanghai"></el-option>
        <el-option label="北京" value="beijing"></el-option>
        <el-option label="江苏" value="jiangsu"></el-option>
      </el-select>
    </el-col>
    <el-col :span="12">
      <el-select v-model="ruleForm.region2" placeholder="请选择城市">
        <el-option label="上海" value="shanghai"></el-option>
        <el-option label="北京" value="beijing"></el-option>
      </el-select>
    </el-col>
  </el-form-item>
  <el-form-item label="出生日期" required>
    <el-col :span="24">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期"
          v-model="ruleForm.date1" style="width: 100%;">

        </el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="性别" prop="gender">
    <el-radio-group v-model="ruleForm.gender">
      <el-radio label="1">男</el-radio>
      <el-radio label="2">女</el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="喜欢的商品种类" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="美食/休闲零食" name="type"></el-checkbox>
      <el-checkbox label="服装" name="type"></el-checkbox>
      <el-checkbox label="生活用品" name="type"></el-checkbox>
      <el-checkbox label="数码" name="type"></el-checkbox>
      <el-checkbox label="工具" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="个性签名" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
</el-form>
</div>
</template>
<script>
export default {
  name: 'information',
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: '',
        pass: '',
        checkPass: '',
        email: '',
        region1: '',
        region2: '',
        date1: '',
        delivery: false,
        type: [],
        gender: '1',
        desc: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 8,
            max: 16,
            message: '长度在 8 到 16 个字符',
            trigger: 'blur',
          },
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' },
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' },
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
        ],
        region1: [
          { message: '请选择收货地址', trigger: 'change' },
        ],
        region2: [
          { message: '请选择收货地址', trigger: 'change' },
        ],
        date1: [
          {
            type: 'date', required: true, message: '请选择日期', trigger: 'change',
          },
        ],
        type: [
          {
            type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change',
          },
        ],
        // desc: [
        //   { required: true, message: '请填写活动形式', trigger: 'blur' },
        // ],
      },
    };
  },
  methods: {
    setName() {
      this.$emit('name', this.ruleForm.name);
    },
  },
};
</script>

<style scoped>

</style>

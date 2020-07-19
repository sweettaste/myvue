<template>
    <div class="login">
       <div class="center">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item prop="username" label-width="0px">
                <el-input  v-model="ruleForm.username" autocomplete="off" prefix-icon="iconfont icon-yonghu"></el-input>
            </el-form-item>
            <el-form-item prop="password" label-width="0px">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"  prefix-icon="iconfont icon-suo"></el-input>
            </el-form-item>
            <el-form-item label-width="0px">
               <el-button style="width:100%" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
        </el-form>
       </div>
    </div>
</template>
<script>
import {loginRequest} from '@/network/login.js'
export default {
    name:'Login',
      data() {
      return {
        ruleForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            {  required: true, message: '请输入账号', trigger: 'blur'  }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          console.log(this.ruleForm)
          if (!valid) return 
           //发送请求
            loginRequest(this.ruleForm).then((res) => {
              window.sessionStorage.setItem('token',res.data.data.token)
              this.$router.push({path:'/home'})
            }).catch( err => {
              console.log( err )
            });
          
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style scoped>
.login{
  /* background-color: rgba(56, 118, 233, 0.5); */
  background-image: url('~assets/flow.jpg');
  opacity: 0.9;
  width: 100vw;
  height: 100vh;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
.demo-ruleForm{
    position: absolute;
    top: 50%;
    left: 50%;
    overflow: hidden;
    transform: translate(-50%,-50%);
    width: 350px;
    max-width: 100%;
    height: 180px;
    
}
.center{
    background: rgba(248, 246, 246, 0.5);
    width: 550px;
    max-width: 100%;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px ;
}
</style>

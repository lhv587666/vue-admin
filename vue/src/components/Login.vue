<template>
  <div class="container_login">
    <div class="box_login">
      <!--头像-->
      <div class="pic">
    <img src="../assets/logo.png" alt="">
      </div>
      <!--登录-->
      <div>
        <el-form :model="form" :rules="loginrule" ref="loginref" lable-width="0px" class="login_form">
        <p class="st">账号：</p>
        <el-form-item prop="name"  class="zi3" >
          <el-input v-model="form.username" prefix-icon="el-icon-user" placeholder="用户名/邮箱/手机号">
        </el-input>
       </el-form-item>

<br>   <p class="st">密码：</p>
       <el-form-item prop="passwd" class="zi4" >
          <el-input v-model="form.password" prefix-icon="el-icon-s-custom" placeholder="密码"></el-input>
       </el-form-item>

          <!--单选框-->
        <div class="btn2">
          <template>
              <label><input name="Fruit" type="radio" v-model="radio" value="1" style="width:100px;height:25px"/>管理员 </label>
              <label><input name="Fruit" type="radio" v-model="radio" value="2" style="width:100px;height:25px"/>用户 </label>
          </template></div>

          <!--登录注册按钮-->
      <el-form-item class="btn">
        <el-button type="success" round @click="login" class="zi">登 录</el-button>
        <el-button type="success" round @click="register" class="zi2">注 册</el-button>
      </el-form-item>


        </el-form>
      </div>
      </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      form:{
        username:'',
        password:''
      },
      loginrule:{
            username:[  { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 0, max: 10, message: '长度在 0 到 10 个字符', trigger: 'blur' }],
            password:[  { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }]
      },
      radio: '1'
    }
  },
  methods: {
    register(){
      this.$refs.loginref.resetFields();
    },
      login: function () {
          this.$refs.loginref.validate(async valid => {
              if (!valid) return;
              // console.log(this.form);
              // console.log(this.radio);
              const {data: res} = await this.$http.post('login', this.form);
              console.log(this.form);
              console.log(res);
              if (res.meta.status !== 200) return this.$message.error("登录失败");
              this.$message.success("登录成功");
              console.log(res.data.token)
              window.sessionStorage.setItem("token", res.data.token);
              this.$router.push("/home");
          });
      },

  }
}
</script>


<style lang="less" scoped>
  .container_login{
    background-image: url("../assets/2.png");
    height: 100%;
  }
  .box_login{
    background-color: rgba(46, 220, 207, 0.04);
    width: 450px;
    height: 414px;
    border-radius: 3px;
    position: absolute;
    left: 38%;
    top: 45.2%;
    .pic{
      width: 120px;
      height: 120px;
      position: absolute;
      border:1px solid snow;
      padding: 10px;
      box-shadow: 0 0 10px #dddddd;
      opacity: 0.9;
      border-radius: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: #fff;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: snow;
      }
    }
    .login_form{
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 50px;
      box-sizing: border-box;
    }
      .radio{
          display: flex;
      }
    .btn2{
      display: flex;
      transform: translate(1%,-50%);
      padding-top: 20px;
        opacity: 1;
    }
      .btn{
          display: flex;
          transform: translate(14%,-37%);
          padding-top: 20px;
          opacity: 1;
      }
      .zi{
        font-family: 华文楷体;
        font-size: 23px;
      }
    .zi2{
      font-size: 23px;
      font-family: 华文楷体;
      margin-left: 58px;
    }
    .zi3{
      font-family: 微软雅黑;
      font-size: 20px;margin-top:-17px
    }
      .zi4{
          font-family: 微软雅黑;
          font-size: 20px;margin-top:-21px
      }
      .st{
         font-family: 新宋体;
          font-weight: bold;
          font-size: 18px;
      }
  }

</style>

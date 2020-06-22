<template>
  <div class="loginNav">
    <div class="btnNav" v-if="!navLog">
      <div>
        <button @click="navLog='youxiang'">邮箱登陆</button>
      </div>
      <div class="box"></div>
      <div>
        <button @click="navLog='shouji'">手机号登陆</button>
      </div>
    </div>

    <div class="logItem" v-else>
      <form action="####" class="fromItem">
        <h1>{{navLog==='youxiang'?'邮箱登陆':'手机登陆'}}</h1>
        <input class="fromItem" type="text" v-model="userName" />
        <br />
        <input class="fromItem" type="password" v-model="password" />
        <br />
        <input type="submit" value="登陆" @click.prevent="helder" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-login",
  data() {
    return {
      userName: "",
      password: "",
      navLog: ""
    };
  },

  methods: {
    helder() {
      const { userName, password, navLog } = this;
      if (navLog === "youxiang") {
        let rgab = /^([a-zA-Z]|[0-9])(\w|\-)+\@([a-zA-Z])+\.([a-zA-Z]{2,4})$/;
        let pwd = /^([0-9]{4,6})$/;
        if (rgab.test(userName) && pwd.test(password)) {
          let obj = {
            name: "阿虎",
            age: 14,
            img:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2393544950,185753394&fm=26&gp=0.jpg"
          };
          let userName = JSON.stringify(obj);
          this.$router.replace({path:'/'})
          window.localStorage.setItem("user-keys", userName);
          this.$router.push({path:'/personal'})
        } else {
          alert("亲!输入格式不正确");
          return;
        }
      } else {
        let rgab = /^([0-9]{11})$/;
        let pwd = /^([0-9]{6})$/;
        if (rgab.test(userName) && pwd.test(password)) {
          let obj = {
            name: "阿虎",
            age: 14,
            img:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2393544950,185753394&fm=26&gp=0.jpg"
          };
          let userName = JSON.stringify(obj);
          window.localStorage.setItem("user-keys", userName);
         
        } else {
          alert("亲!输入格式不正确");
          return;
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.loginNav {
  width: 100%;
  height: 100%;
  .btnNav {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .box {
      width: 100px;
      height: 50px;
    }
    button {
      width: 600px;
      height: 100px;
      background: pink;
      font-size: 50px;
    }
  }
  .logItem {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translateX(-50%) translateY(-50%);
    h1 {
      font-size: 50px;
    }
    .fromItem {
      width: 500px;
      height: 50px;
      font-size: 50px;
    }
  }
}
</style>
<template>
  <div class="navPersonal" ref="navPersonal">
    <div class="navPersonalTop">
      <div class="header">
        <img class="userImg" :src="userInfo.img" mode />
        <div class="userInfo" @click="isuser">
          <p>{{userInfo.name?userInfo.name:'点击登录账号'}}</p>
          <p v-if="userInfo.name">退出登录</p>
        </div>
      </div>
      <div class="content">
        <h2>我的资产</h2>
        <p class="line"></p>
        <div class="myAssetList">
          <div class="assetItem">
            <span>￥0</span>
            <span>回馈金</span>
          </div>
          <div class="assetItem">
            <span>￥0</span>
            <span>红包</span>
          </div>
          <div class="assetItem">
            <span>￥0</span>
            <span>优惠券</span>
          </div>
          <div class="assetItem">
            <span>￥0</span>
            <span>津贴</span>
          </div>
          <div class="assetItem">
            <span>￥0</span>
            <span>礼品卡</span>
          </div>
        </div>
        <!-- 列表选项 -->
        <div class="personalList">
          <div class="navItem" v-for="(item, index) in personalList" :key="index">
            <i class="iconfont" :class="item.icon"></i>
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "v-personal",
  data() {
    return {
      userInfo: {},
      personalList: [
        {
          name: "我的订单",
          icon: "icon-dingdan11"
        },
        {
          name: "我的拼团",
          icon: "icon-pintuandingdan"
        },
        {
          name: "领红包",
          icon: "icon-tubiaolunkuo-1"
        },
        {
          name: "我的积分",
          icon: "icon-jifen3"
        },
        {
          name: "地址管理",
          icon: "icon-dizhiguanli"
        },
        {
          name: "账号安全",
          icon: "icon-dingdan11"
        },
        {
          name: "联系客服",
          icon: "icon-zhanghaoanquan"
        },
        {
          name: "用户反馈",
          icon: "icon-tubiaolunkuo-"
        },
        {
          name: "帮助中心",
          icon: "icon-bangzhuzhongxin"
        },
        {
          name: "退还/售后",
          icon: "icon-shouhou"
        }
      ]
    };
  },
  mounted() {
    this.personalScroll = new BScroll(this.$refs.navPersonal, {
      click: true,
      scrollX: false,
      scrollY: true
    });
    this.userInfo = JSON.parse(window.localStorage.getItem("user-keys"))||{};
  },
  methods:{
      isuser(){
        if(!this.userInfo.name){
          this.$router.replace({path:'/login'})
        }else{
          this.userInfo={}
          window.localStorage.removeItem('user-keys')
        }
      }
  }
};
</script>

<style lang="less" scoped>
.navPersonal {
  width: 100%;
  height: 100%;
  .navPersonalTop {
    .header {
      display: flex;
      background: #eed7b5;
      padding: 40upx 0;
      .userImg {
        width: 100px;
        height: 100px;
        margin: 0 50px 030px;
        background: #ffffff;
        border-radius: 50px;
      }
      .userInfo {
        p {
          height: 50px;
          line-height: 40px;
          &:first-child {
            font-size: 28px;
          }
          &:last-child {
            font-size: 24px;
          }
        }
      }
    }
    .content {
      h2 {
        font-size: 26px;
        line-height: 100px;
        margin-left: 5%;
      }
      .line {
        width: 90%;
        height: 2px;
        background: #eee;
        margin: 0 auto;
      }
      .myAssetList {
        width: 90%;
        margin: 20px auto;
        display: flex;
        .assetItem {
          width: 25%;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 24px;
          color: #333333;
          line-height: 40px;
        }
      }
      .personalList {
        display: flex;
        flex-wrap: wrap;
        border-top: 1px solid #eee;
        .navItem {
          width: 33.3333%;
          text-align: center;
          border-bottom: 1px solid #ffffff;
          border-right: 1px solid #fff;
          box-sizing: border-box;
          padding: 30px 0;
          .iconfont {
            font-size: 60px;
          }
          p {
            font-size: 24px;
            line-height: 40px;
          }
        }
      }
    }
  }
}
</style>
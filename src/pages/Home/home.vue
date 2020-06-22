<template>
  <div class="homeWrap">
    <!-- <搜索 -->
    <div class="headerNav">
      <img src="../../assets/images/logo.png" alt srcset />
      <div class="searchNav" @click="isServech">
        <i class="iconfont icon-iconfonticon-dianyu"></i>
        <span>搜索商品搜索商品搜索商品</span>
      </div>
      <button class="btn" v-if="!user.name">登陆</button>
      <img v-else :src="user.img" class="userImage" alt="" srcset="">
    </div>
    <!-- 滑屏区域 -->
    <div class="navScroll" ref="navScroll">
      <div class="navItem">
        <div class="item" :class="{active:navId===-1}" @click="isNavId(-1)">推荐</div>
        <div
          class="item"
          :class="{active:navId===index}"
          v-for="(item,index) in home.kingKongModule&&home.kingKongModule.kingKongList"
          :key="index"
          @click="isNavId(index,item.L1Id)"
        >{{item.text}}</div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="navContent" ref="navContent">
      <div>
        <Recommend v-show="navId===-1" />
        <CateList v-show="navId!==-1" :L1Id="L1Id" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Recommend from "../../components/Recommend";
import BScroll from "better-scroll";
import CateList from "../../components/CateList/index";

export default {
  name: "v-home",
  data() {
    return {
      navId: -1,
      L1Id: "",
      user:{}
    };
  },
  methods: {
    isNavId(navId, L1Id) {
      this.navId = navId;
      this.L1Id = L1Id;
    },
    isServech(){
      this.$router.push({path:'/servech'})
    }
  },
  components: {
    Recommend,
    CateList
  },
  computed: {
    ...mapState({
      home: state => state.Home.homeList
    })
  },
  mounted() {
    this.$store.dispatch("getHomeList");
    this.user = JSON.parse(window.localStorage.getItem('user-keys'))
  },
  watch: {
    L1Id: {
      handler() {
        this.$nextTick(() => {
          this.menuScroll = new BScroll(this.$refs.navScroll, {
            click: true,
            scrollX: true,
            scrollY: false
          });
          if (!this.boxScroll) {
            this.boxScroll = new BScroll(this.$refs.navContent, {
              click: true,
              scrollX: false,
              scrollY: true
            });
          } else {
            this.boxScroll.refresh();
          }
        });
      },
      immediate: true
    }
  }
};
</script>

<style lang="less" scoped>
.homeWrap {
  width: 100%;
  height: 100%;
}
.headerNav {
  display: flex;
  padding: 16px 30px;
  z-index: 10;
  img {
    width: 138px;
    height: 40px;
    margin-right: 20px;
  }
  .searchNav {
    width: 442px;
    height: 46px;
    vertical-align: top;
    text-align: center;
    background: #eee;
    line-height: 46px;
    .iconfont {
      margin-right: 10px;
      font-size: 36px;
    }
  }
  .btn {
    margin-left: 10px;
    width: 70px;
    height: 40px;
    color: red;
    background-color: plum;
    vertical-align: top;
  }
  .userImage{
    margin-left: 10px;
    width: 70px;
    height: 40px;
    vertical-align: top;
  }
}
.navScroll {
  height: 60px;
  display: flex;
  .navItem {
    display: flex;
    flex-wrap: nowrap;
    margin-left: 30px;
  }
  .item {
    width: 150px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    margin: 0 10px;
  }
  .active {
    border-bottom: 1px solid black;
  }
}
.box {
  width: 500px;
  height: 500px;
  background: red;
}
.navContent {
  height: 100%;
  width: 100%;
  overflow: hidden;
  div{
   padding-bottom: 100px;

  }
}
</style>
<template>
  <div class="homeWrap">
    <!-- <搜索 -->
    <div class="headerNav">
      <img src="../../assets/images/logo.png" alt srcset />
      <div class="searchNav">
        <i class="iconfont icon-iconfonticon-dianyu"></i>
        <span>搜索商品搜索商品搜索商品</span>
      </div>
      <button class="btn">登陆</button>
    </div>
    <!-- 滑屏区域 -->
    <div class="navScroll" ref="navScroll">
      <div class="navItem">
        <div class="item active">COA</div>
        <div class="item active">COA</div>
        <div class="item active">COA</div>
        <div class="item active">COA</div>
        <div class="item active">COA</div>
        <div class="item active">COA</div>
        <div class="item active">COA</div>
        <div class="item active">COA</div>
        <div class="item active">COA</div>
        <div class="item active">COA</div>
        <div class="item active">COA</div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="navContent" ref="navContent">
      <!-- <Recommend /> -->
      <CateList />
    </div>
  </div>
</template>
<script>
import Recommend from "../../components/Recommend";
import BScroll from "better-scroll";
import axios from 'axios'
import CateList from '../../components/CateList/index'
export default {
  name: "v-home",
  components: {
    Recommend,
    CateList
  },
  mounted() {
    this.menuScroll = new BScroll(this.$refs.navScroll, {
      click: true,
      scrollX: true,
      scrollY: false
    });
    this.boxScroll = new BScroll(this.$refs.navContent,{
      click: true,
      scrollX: false,
      scrollY: true
    });
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
}
.navScroll {
  width: 100%;
  height: 60px;
  display: flex;
  .navItem {
    display: flex;
    flex-wrap: nowrap;
    margin-left: 30px;
  }
  .item {
    font-size: 30px;
    height: 60px;
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
.navContent{
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
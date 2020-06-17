<template>
  <div class="naviGation">
    <router-link to="/" class="navItem active">
      <i class="iconfont icon-fangzilengjiao"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/category" class="navItem">
      <i class="iconfont icon-tubiaozhizuomoban"></i>
      <span>分类</span>
    </router-link>
    <router-link to="/best" class="navItem">
      <i class="iconfont icon-iconfonticon-dianyu"></i>
      <span>值得买</span>
    </router-link>
    <router-link to="/cart" class="navItem">
      <i class="iconfont icon-icon-test"></i>
      <span >购物车</span>
    </router-link>
    <router-link to="/personal" class="navItem">
      <i class="iconfont icon-iconfonticon-yonghu"></i>
      <span>个人中心</span>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.naviGation {
  z-index: 10;
  position: relative;
  height: 0;
  right: 0;
  display: flex;
  height: 10%;
  .navItem {
    display: flex;
    flex-direction: column;
    text-align: center;
    flex: 1;
    font-size: 26px;
  }
  .active {
    color: red;
  }
}
</style>
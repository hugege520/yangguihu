<template>
  <div class="naviGation">
    <router-link 
    class="navItem router-link-active" 
    :class="{active:index===id}" 
    v-for="(p,index) in routeList" 
    :key="index"
    :to="p.path" 
    >
      <i style="font-size:90px" :class="p.icon"></i>
      <span>{{p.name}}</span>
    </router-link>
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      routeList: [
        { name: "首页", icon: "iconfont icon-fangzilengjiao",path:'/'},
        { name: "分类", icon: "iconfont icon-tubiaozhizuomoban", path:'/category' },
        { name: "值得买", icon: "iconfont icon-icon-test", path:'/best'},
        { name: "购物车", icon: "iconfont icon-iconfonticon-yonghu", path:'/cart'},
        { name: "个人中心", icon: "iconfont icon-iconfonticon-yonghu", path:'/personal' }
      ],
      id:0
    };
  },
 
};
</script>

<style lang="less" scoped>
.naviGation {
  z-index: 999;
  position: relative;
  right: 0;
  bottom: 0;
  display: flex;
  height: 10%;
  background: #fff;
  .navItem {
    display: flex;
    flex-direction: column;
    text-align: center;
    flex: 1;
    font-size: 26px;
    text-decoration:none;
    background: none;
  }
  
}
.router-link-active:hover{
  color: red;
  background: #fff;
}
</style>
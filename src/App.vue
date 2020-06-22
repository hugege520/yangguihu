<template>
  <div id="homeCarit">
    <div class="Wrap">
      <router-view></router-view>
    </div>
    <NaviGation v-show="!$route.meta.isHideFooter"/>
  </div>
</template>

<script>
import NaviGation from "./components/NaviGation/index";
import instance from './api/ajax'
import server from './api/mock'
export default {
  name: "App",
  components: {
    NaviGation
  },
  mounted(){ 
    
  },
};
</script>

<style lang="less" scoped>
#homeCarit {
  width: 100%;
  height: 100%;

  .Wrap {
    height: 90%;
    width: 750px;
  }
}
</style>

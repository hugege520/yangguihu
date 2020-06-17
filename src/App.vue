<template>
  <div id="homeCarit">
    <div class="Wrap">
      <router-view></router-view>
    </div>
    <NaviGation v-if="!$route.meta.isHideFooter" />
  </div>
</template>

<script>
import NaviGation from "./components/NaviGation/index";
import instance from './api/ajax'
import asios from 'axios'
export default {
  name: "App",
  components: {
    NaviGation
  },
  mounted(){
    instance.get('api/getindexCateList')
    .then((reponse)=>{
      console.log(reponse)
    })
    
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
    overflow: hidden;
  }
}
</style>

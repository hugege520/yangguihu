<template>
  <div class="navCateList">
      <!-- //轮播 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="imgItem" src="../../assets/timg.jpg" alt srcset />
        </div>
        <div class="swiper-slide">
          <img  class="imgItem" src="../../assets/timg.jpg" alt srcset />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div  class="swiper-pagination"></div>
    </div>
    <!-- 内容 -->
    <div class="navContentList">
        <span class="header">热销爆款</span>
        <span class="text">人气爆款</span>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  mounted() {
    new Swiper(".swiper-container", {
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang="less" scoped>
.navCateList {
  .navTopList {
    width: 100%;
    height: 300px;
    background: red;
  }
  .imgItem {
    width: 100%;
    height: 300px;
  }
}
.navContentList{
    display: flex;
    flex-direction: column;
    text-align: center;
    .header{
        font-size: 30px;
    }
    .text{
        font-size:20px;
        margin-top:10px;
    }
}
</style>
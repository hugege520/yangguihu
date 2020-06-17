<template>
<div class="sclllRommend">
   <div class="navRecommend">
    <!-- 轮播图 -->
    <div class="navTop">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/timg.jpg" alt srcset />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/timg.jpg" alt srcset />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="navBottom">
      <div class="navItem">
        <img class="iconfont" src="../../assets/u=1950846641,3729028697&fm=111&gp=0.jpg" alt srcset />
        <span>哈哈哈</span>
      </div>
      <div class="navItem">
        <img class="iconfont" src="../../assets/u=1950846641,3729028697&fm=111&gp=0.jpg" alt srcset />
        <span>哈哈哈</span>
      </div>
      <div class="navItem">
        <img class="iconfont" src="../../assets/u=1950846641,3729028697&fm=111&gp=0.jpg" alt srcset />
        <span>哈哈哈</span>
      </div>
    </div>
    <div class="kingKongList">
        <div class="itemList">
            <img src="../../assets/timg.jpg" alt="" srcset="">
            <div class="textItem">哈哈</div>
        </div>
        <div class="itemList">
            <img src="../../assets/timg.jpg" alt="" srcset="">
            <div class="textItem">哈哈</div>
        </div>
        <div class="itemList">
            <img src="../../assets/timg.jpg" alt="" srcset="">
            <div class="textItem">哈哈</div>
        </div>
        <div class="itemList">
            <img src="../../assets/timg.jpg" alt="" srcset="">
            <div class="textItem">哈哈</div>
        </div>
        <div class="itemList">
            <img src="../../assets/timg.jpg" alt="" srcset="">
            <div class="textItem">哈哈</div>
        </div>
        <div class="itemList">
            <img src="../../assets/timg.jpg" alt="" srcset="">
            <div class="textItem">哈哈</div>
        </div>
        <div class="itemList">
            <img src="../../assets/timg.jpg" alt="" srcset="">
            <div class="textItem">哈哈</div>
        </div>
    </div>
    <Catecorys />
  </div>
</div>
 
</template>

<script>
import Swiper from "swiper";
import  Catecorys from '../Catecorys/index'
export default {
  name: "v-recommend",
  components:{
    Catecorys
  },
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
.navRecommend {
  padding-top: 10px;
}
.navTop {
  width: 100%;
  display: flex;
  padding-bottom: 10px;
  .swiper-container {
    display: flex;
    width: 750px;
    height: 300px;
    .swiper-slide {
      width: 750px !important; 
      height: 300px;
      img {
        width: 750px;
        height: 300px;
      }
    }
  }
}
.navBottom {
  display: flex;
  width: 100%;
  padding: 0 30px;
  justify-content: space-between;
  .navItem {
    display: inline-block;
    font-size: 27px;
    margin-top: 15rpx;
    flex: 1;
    .iconfont {
      margin-right: 10px;
      width: 25px;
      height: 25upx;
      vertical-align: middle;
    }
  }
}
.kingKongList{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 30px;
    .itemList{
        width: 20%;
        margin: 20px 0;
        img{
            width: 100px;
            height: 100px;
            border-radius: 30px;
        }
        .textItem{
            font-size: 26px;
        }
    }
}
</style>
<template>
  <div class="sclllRommend">
    <div class="navRecommend">
      <!-- 轮播图 -->
      <div class="navTop">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" style="width:0px">
              <img
                src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg"
                alt
                srcset
                style="width:100%"
              />
            </div>
            <div class="swiper-slide" style="width:0px">
              <img
                src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg"
                alt
                srcset
              />
            </div>
            <div class="swiper-slide" style="width:0px">
              <img
                src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg"
                alt
                srcset
              />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="navBottom">
        <div class="navItem" v-for="(p,index) in home.policyDescList" :key="index">
          <img class="iconfont" :src="p.icon" alt srcset />
          <span>{{p.desc}}</span>
        </div>
      </div>

      <div class="kingKongList" v-if="home.kingKongModule">
        <div class="itemList" v-for="(p,index) in home.kingKongModule.kingKongList" :key="index">
          <img :src="p.picUrl" alt srcset />
          <div class="textItem">{{p.text}}</div>
        </div>
      </div>
      <Catecorys />
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import Catecorys from "../Catecorys/index";
import { mapState } from "vuex";
export default {
  name: "v-recommend",
  components: {
    Catecorys
  },
  computed: {
    ...mapState({
      home: state => state.Home.homeList
    })
  },
  mounted() {
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        direction: "horizontal", // 垂直切换选项
        // loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
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
  padding-bottom: 10px;
  .swiper-wrapper {
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
.kingKongList {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 30px;
  .itemList {
    width: 20%;
    margin: 20px 0;
    img {
      width: 100px;
      height: 100px;
      border-radius: 30px;
    }
    .textItem {
      font-size: 26px;
    }
  }
}
</style>
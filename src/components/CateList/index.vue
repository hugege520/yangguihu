<template>
  <div class="navCateList">
    <!-- //轮播 -->
    <div class="swiper-container">
      <div class="swiper-wrapper" v-if="cateObj">
        <div
          class="swiper-slide"
          v-for="(item, index) in cateObj.category.bannerUrlList"
          :key="index"
        >
          <img class="imgItem" :src="item" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 内容 -->
    <div class="navContentList" v-if="cateObj">
      <span class="header">{{cateObj.category.frontName}}</span>
      <span class="text">{{cateObj.category.frontDesc}}</span>
    </div>
    <div class="contenListNav" v-if="cateObj">
      <div class="listItem" 
      v-for="(item,index) in cateObj.itemList" 
      :key="index"
      @click="iscateObj(item)"
      >
        <img :src="item.primaryPicUrl" />
        <span>{{item.name}}</span>
        <span class="text">$ {{item.retailPrice}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import instance from "@/api/ajax";
import {mapMutations} from 'vuex'
export default {
  name: "v-cateList",
  props: ["L1Id"],
  data() {
    return {
      cateList: []
    };
  },
  mounted() {
    console.log(this.cateObj)
    this.getCateDate();
  },

  watch: {
    cateObj: {
      handler() {
        this.$nextTick(() => {
          new Swiper(".swiper-container", {
            direction: "horizontal", // 垂直切换选项
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination"
            }
          });
        });
      }
    }
  },
  computed: {
    cateObj() {
      const { cateList, L1Id } = this;
      return cateList.find(v => {
        return v.category.parentId === L1Id;
      });
    }
  },
  methods: {
    async getCateDate() {
      instance.get("/api/getindexCateList").then(res => (this.cateList = res));
    },
    iscateObj(item){
      console.log(item)
      console.log(this.L1Id,item.id)
      const { L1Id } = this
      this.$router.replace({path:'/detail',query:{itemId:item.id,L1Id:L1Id}})
    }
  }
};
</script>

<style lang="less" scoped>
.navCateList {
  padding-top: 20px;
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
.navContentList {
  display: flex;
  flex-direction: column;
  text-align: center;
  .header {
    font-size: 30px;
  }
  .text {
    font-size: 20px;
    margin-top: 10px;
  }
}
.contenListNav {
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  .listItem {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-left: 50px;
    img {
      width: 300px;
      height: 300px;
    }
    span{
      font-size: 23px;
    }
    .text{
      color: red;
      font-size: 30px;
    }
  }
}
</style>
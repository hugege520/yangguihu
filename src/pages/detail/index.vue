<template>
  <div class="detailContainer" v-if="cateObj">
    <div class="headerContainer">
      <span @click="isHome(true)" style="font-size:100px" class="iconfont icon-icon-test"></span>
      <span class="text" style="font-size:60px">网易严选</span>
      <span
        @click="isHome(false)"
        style="font-size:100px"
        class="iconfont icon-iconfonticon-yonghu text1"
      ></span>
    </div>
    <!-- 图片 -->
    <div class="imgItem" v-if="cateObj[0]">
      <img :src="cateObj[0].primaryPicUrl" />
    </div>
    <!-- 详情 -->
    <div class="detailNav" v-if="cateObj[0]">
      <h1 class="pice">$ {{cateObj[0].retailPrice}}</h1>
      <h1 class="pice">{{cateObj[0].name}}</h1>
    </div>
    <div class="addCart">
      <div class="box1">
        <span @click="isHome(true)" style="font-size:100px" class="iconfont icon-icon-test"></span>
      </div>
      <div class="box2">立即购买</div>
      <div class="box3" @click="isCart(cateObj[0])">加入购物车</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import instance from "@/api/ajax";
export default {
  name: "v-detail",
  data() {
    return {
      cateList: []
    };
  },
  mounted() {
    //   console.log(this.$route)
    this.getCateDatees();
  },
  computed: {
    cateObj() {
      const L1Id = this.$route.query.L1Id * 1;
      const itemId = this.$route.query.itemId * 1;
      let arr = [];
      this.cateList.forEach(v => {
        if (v.category.parentId === L1Id) {
            v.itemList.forEach(p=>{
                if( p.id === itemId){
                    arr.push(p)
                }
               
            })
        }
      });
      return arr
    }
  },
  methods: {
    getCateDatees() {
      const L1Id = this.$route.query.L1Id * 1;
      instance.get("/api/getindexCateList").then(res => {
        this.cateList = res;
      });
    },
    isCart(obj){
      this.$store.commit('IMFI_CATESER',obj)
      console.log(obj)
    },
    isHome(flan) {
      if (flan) {
        this.$router.replace({ path: "/" });
      } else {
        this.$router.replace({ path: "/cart" });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.detailContainer {
  width: 100%;
  height: 111%;
  .headerContainer {
    position: relative;
    height: 100px;
    width: 100%;
    span {
      display: inline-block;
      line-height: 100px;
      padding-left: 30px;
    }
    .text {
      position: absolute;
      left: 39%;
      top: -6%;
      margin: auto;
    }
    .text1 {
      float: right;
      margin-right: 20px;
    }
  }
  .imgItem {
    width: 100%;
    height: 800px;
    img {
      width: 100%;
      height: 800px;
    }
  }
  .detailNav {
    padding: 0 30px;
    padding-top: 20px;
    .pice {
      font-size: 50px;
      color: red;
    }
  }
  .addCart {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 130px;
    display: flex;
    .box1 {
      width: 160px;
      height: 130px;
      text-align: center;
      line-height: 130px;
    }
    .box2 {
      width: 270px;
      height: 130px;
      text-align: center;
      font-size: 40px;
      line-height: 130px;
    }
    .box3 {
      width: 370px;
      height: 130px;
      text-align: center;
      font-size: 40px;
      line-height: 130px;
      background: red;
    }
  }
}
</style>
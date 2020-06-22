<template>
  <div class="navFoolt">
    <div v-for="(item,index) in home.categoryModule" :key="index">
      <img :src="item.titlePicUrl" />
      <div class="fooltItem" ref="fooltItem">
        <div class="cartFoolt">
          <div class="foolt" v-for="(p,index) in item.itemList" :key="index">
            <img :src="p.listPicUrl" />
            <p>{{p.simpleDesc}}</p>
          </div>
          <div class="foolt more">
            <div class="scrollImg more">查看更多></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState } from "vuex";
export default {
  name: "v-cateorys",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      home: state => state.Home.homeList
    })
  },
  mounted() {
    
      console.log(this.$refs.fooltItem);
 
  },
  watch: {
    home:{
      handler(q,b){
      //   new BScroll(this.$refs.fooltItem, {
      //   click: true,
      //   scrollX: true,
      //   scrollY: false
      // });
      console.log(this.$refs.fooltItem);
      }  
    }
  }
};
</script>

<style lang="less" scoped>
.navFoolt {
  width: 100%;
  white-space: nowrap;
  img {
    width: 100%;
    height: 370px;
  }
  .fooltItem {
    display: flex;
    height: 370px;
    .cartFoolt {
      height: 370px;
      display: flex;
      .foolt {
        width: 200px;
        display: inline-block;
        margin: 20px 10px;
        vertical-align: top;
        .scrollImg {
          width: 200px;
          height: 200px;
          background: #eee;
        }
        img {
          width: 200px;
          height: 200px;
        }
        p {
          font-size: 26px;
          line-height: 40px;
          width: 100%;
          white-space: pre-wrap;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
      .more {
        text-align: center;
        line-height: 200px;
        font-size: 26px;
      }
    }
  }
}
</style>
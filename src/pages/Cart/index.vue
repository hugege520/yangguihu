<template>
  <div class="carContainer">
    <div class="title">购物车</div>
    <!-- 没有登录 -->
    <!-- <div class="header">
      <span>30天无优惠</span>
      <span>48小时快速发货</span>
      <span>满99元免又邮费</span>
    </div>
    <div class="contentContainer">
      <img class="cartImg" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp" alt="" srcset="">
      <button @click="toLogin">登录</button>
      <div class="addMore">去添加点什么吧</div>
    </div>-->

    <div class="cartList" >
      <div class="cartItem" v-for="(item,index) in cartList" :key="index">
        <span 
          class="iconfont icon-xuanzhong selected"
          :class="{active:item.selected}"
          @click="isFlan(item)"
          >
        </span>
        <div class="shopItem">
          <img
            class="shopImg"
            :src="item.primaryPicUrl"
            alt
            srcset
          />
          <div class="shopInfo">
            <span>{{item.name}}</span>
            <span class="price">$ {{item.retailPrice}}</span>
          </div>
        </div>
        <!-- 控制数量 -->
        <div class="countCtrl">
          <span class="add" @click="isHeader(item,true)">+</span>
          <span class="count">{{item.count}}</span>
          <span class="del" @click="isHeader(item,false)">-</span>
        </div>
      </div>
    </div>
    <!-- 底部下单 -->
    <div class="cartFooter">
      <span @click="isSelected(!isAllSelected)" class="iconfont icon-xuanzhong selected " :class="{active:isAllSelected}"></span>
      <span class="allSelected">已选 {{isAllConte}}</span>
      <div class="right">
        <span class="totalPrice">合计: ￥{{totalPrice}}</span>
        <span class="preOrder">下单</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name:'v-Cart',
  computed:{
    ...mapState({
      cartList:state=>state.Cate.cartList
    }),
    ...mapGetters(['isAllSelected','isAllConte','totalPrice'])
  },
  methods:{
    isHeader(shopItem,flan){
      this.$store.commit('IMFI_CATESEREEOOP',{shopItem,flan})
    },
    isSelected(isAllSelected){
       this.$store.commit('IMFI_CATESEREEOOPTTTEWX',isAllSelected)
    },
    isFlan(item){
      this.$store.commit('IMFI_CATESJKASD',item)
    }
  }
  
};
</script>

<style lang="less" scoped>
.carContainer {
  width: 100%;
  height: 100%;
  .title {
    font-size: 60px;
    width: 100%;
    text-align: center;
   padding-bottom: 50px;
  }
}
.cartList {
  position: relative;
  .cartItem {
    display: flex;
    width: 100%;
    height: 200px;
    .iconfont {
      position: relative;
      left: 0px;
      top: 55px;
      font-size: 60px;
    }
    .active{
    color: red;
  }
    .shopItem {
      display: flex;
      .shopImg {
        width: 200px;
        height: 200px;
        margin-left: 30px;
        margin-right: 30px;
      }
      .shopInfo {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        span {
          height: 60px;
          font-size: 30px;
        }
        .price {
          color: red;
        }
      }
    }
  }
}
.countCtrl {
  position: absolute;
  right: 0;
  margin-top:100px;
  font-size: 60px;
  span {
    display: inline-block;
    width: 100px;
    height: 100px;
  }
}
.cartFooter {
  position: absolute;
  left: 0;
  bottom: 150px;
  width: 100%;
  height: 150px;
  line-height: 150px;
  
  span {
    font-size: 30px;
    
  }
  .iconfont{
    margin-right: 30px;
    margin-left: 30px;
  }
  .right {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    color: red;
    display: flex;
    line-height: 150px;
    .preOrder {
      text-align: center;
      width: 200px;
      background: crimson;
      color: #fff;
    }
  }
  .active{
    color: red;
  }
}
</style>
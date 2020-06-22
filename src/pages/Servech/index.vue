<template>
  <div class="serverNav">
    <input
      type="text"
      placeholder="请输入"
      @input="isInput"
      @keyup.13="isCode"
      @change="onChange"
    />
    <span @click="isflan">取消</span>
    <div class="serveList">
      <h1 v-if="flang">热门搜索</h1>
      <div class="listNav" v-if="flang">
        <div
          class="item"
          v-for="(p,index) in KeywordVOList"
          :key="index"
          :class="{active:p.algSort}"
        >{{p.keyword}}</div>
      </div>
      <div class="box" v-if="!flang">
        <div class="box1" v-for="(item,index) in KeywordDate" :key="index">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import server from "@/api/mock";
import throttle from "lodash/throttle";
export default {
  name: "v-servch",
  data() {
    return {
      KeywordVOList: [],
      KeywordDate: [],
      flang: true
    };
  },
  methods: {
    onChange(event) {
        console.log(event.target.value)
        event.target.value=''
    },
    isflan(event) {
      this.flang = true;
      console.log(this.$route)
      this.$router.back()
    },
    isCode(evnet) {
      this.flang = true;
      event.target.value=''
    },
    isInput: throttle(function(event) {
      this.flang = false;
      let keywordPrefix = event.data;
      server
        .post(`/mock/xhr/search/searchAutoComplete.json`, { keywordPrefix })
        .then(res => {
          this.KeywordDate = res.data;
        });
    })
  },
  mounted() {
    server.get("/mock/xhr/search/init.json").then(res => {
      this.KeywordVOList = res.data.hotKeywordVOList;
    });
  }
};
</script>

<style lang="less" scoped>
.serverNav {
  width: 100%;
  height: 100%;

  input {
    width: 80%;
    height: 50px;
    border: 1px solid #f40;
    border-radius: 15px;
    font-size: 30px;
    margin-left: 30px;
    margin-right: 30px;
  }
  span {
    display: inline-block;
    font-size: 30px;
  }
}
.serveList {
  width: 100%;
  padding-left: 30px;
  padding-top: 30px;
  h1 {
    font-size: 30px;
  }
  .listNav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .item {
      padding: 0 30px;
      font-size: 26px;
      height: 50px;
      line-height: 50px;
      margin-top: 30px;
      margin-right: 30px;
      border: 1px solid rgb(17, 16, 16);
      box-sizing: 100%;
    }
    .active {
      border: 1px solid red;
    }
  }
  .box {
    font-size: 30px;
    .box1 {
      width: 100%;
      height: 50px;
      padding-bottom: 20px;
      line-height: 50px;
    }
  }
}
</style>


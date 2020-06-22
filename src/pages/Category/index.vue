<template>
  <div class="cateCoryCatiorn">
    <!-- //头部搜索 -->
    <div class="cateCoryiInput">
      <div class="itemInput" @click="isServech">搜索商品</div>
    </div>

    <!-- 内容区 -->
    <div class="navBottom">
      <!-- 右侧导航区 -->
      <div class="ItemLeft">
        <div
          class="item"
          :class="{active:id===p.id}"
          v-for="(p,index) in cateGoryLsit"
          :key="index"
          @click="isCateId(p.id)"
        >{{p.name}}</div>
      </div>
      <!-- 右侧 -->
      <div class="navRight" ref="navRight">
        <div>
          <div class="box1" v-if="objCateGory">

            <img  :src="objCateGory.imgUrl" alt srcset />
            <div class="listItem">
              <div class="item" v-for="(item,index) in objCateGory.subCateList" :key="index">
                <img :src="item.wapBannerUrl" alt srcset />
                <div class="text">{{item.name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import instance from "@/api/ajax";
export default {
  name: "v-cateCoryList",
  data() {
    return {
      cateGoryLsit: [],
      id: ""
    };
  },
  async mounted() {
    try {
      let result = await instance.get("/api/getCateGoryData");
      this.cateGoryLsit = result.data;
      this.id = this.cateGoryLsit[0].id;
    } catch (err) {
      console.log("请求出错" + err.message);
    }

    this.$nextTick(() => {
      this.menuScroll = new BScroll(this.$refs.navRight, {
        click: true,
        scrollX: false,
        scrollY: true
      });
    });
  },
  methods: {
    isCateId(id) {
      this.id = id;
    },
    isServech(){
      this.$router.push({path:'/servech'})
    }
  },
  computed: {
    objCateGory() {
      const { cateGoryLsit, id } = this;
      return cateGoryLsit.find(v => v.subCateList[0].superCategoryId === id);
    }
  }
};
</script>

<style lang="less" scoped>
.cateCoryCatiorn {
  width: 100%;
  height: 100%;
}
.cateCoryiInput {
  width: 100%;
  height: 100px;
  padding-top: 10px;
  .itemInput {
    width: 600px;
    height: 80px;
    background: #ededed;
    margin: auto;
    border-radius: 20px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
  }
}
.navBottom {
  display: flex;
  height: calc(100vh - 260px);
  width: 100%;
  border-top: 1px solid black;
}
.ItemLeft {
  width: 200px;
  height: calc(100vh - 260px);
  border-right: 1px solid black;
  .item {
    position: relative;
    width: 100%;
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 30px;
  }
  .active::after {
    position: absolute;
    left: 5px;
    height: 50px;
    width: 7px;
    top: 15px;
    background: #b4282d;
    content: "";
  }
}
.navRight {
  width: 550px;
  height: calc(100vh - 260px);
  overflow: hidden;
}

.box1 {
  padding: 30px 10px;

  img {
    width: 500px;
    height: 200px;
  }
  .listItem {
    padding-top: 20px;
    padding-left: 20px;
    display: flex;
    flex-wrap: wrap;
    .item {
      margin-right: 20px;
      padding-bottom: 20px;
    }
    img {
      width: 144px;
      height: 144px;
    }
    .text {
      width: 144px;
      height: 30px;
      font-size: 20px;
      text-align: center;
    }
  }
}
</style>
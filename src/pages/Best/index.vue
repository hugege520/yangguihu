<template>
  <div class="bestListNav" ref="bestListNav">
    <div>
      <div class="bestNav" ref="scloWidth">
        <!-- 内容部分 -->
        <div class="box">
          <div class="box1">
            <!-- 头部 -->
            <div class="header">
              <span>值得买</span>
            </div>
          </div>

          <div class="box2" ref="box2">
            <div class="boxNav">
              <div class="boxItem" v-for="(item,index) in navList" :key="item.viceTitle">
                <img :src="item.picUrl" alt srcset />
                <div>{{item.mainTitle}}</div>
                <div class="text">{{item.viceTitle}}</div>
              </div>
            </div>
          </div>

          <div class="navListBest">
            <div class="navListBestItem" v-for="(p,index) in headrList" :key="p.id">
              <img :src="p.picUrl" />
              <div class="bottomItem">
                <div class="text">{{p.title}}</div>
                <img
                  src="http://yanxuan.nosdn.127.net/3769578a6595d8e3c61d1186123141e0.png?imageView&quality=65&thumbnail=48y48"
                  alt
                  srcset
                />
                <span style="font-size:40px">{{p.nickname}}</span>
                <div class="right">{{p.readCount}}</div>
              </div>
            </div>

            <div class="navListBestItem" v-for="(v,index) in bestList" :key="index">
              <img :src="v.picUrl" />
              <div class="bottomItem">
                <div class="text">{{v.title}}</div>
                <img
                  src="http://yanxuan.nosdn.127.net/3769578a6595d8e3c61d1186123141e0.png?imageView&quality=65&thumbnail=48y48"
                  alt
                  srcset
                />
                <span style="font-size:40px">{{v.nickname}}</span>
                <div class="right">{{v.readCount}}</div>
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
import server from "@/api/mock";
import debounce from "lodash/debounce";
export default {
  name: "v-best",
  data() {
    return {
      id: 0,
      bestList: [],
      navList: [],
      headrList: []
    };
  },
  mounted() {
    server.get("/mock/topic/v1/know/navWap.json").then(res => {
      this.navList = res.data.navList;
    });
    server.get("/mock/topic/v1/find/recManual.json").then(res => {
      this.headrList = res.data[0].topics;
    });
    this.loadData();
    this.$nextTick(() => {
      this.box2Scroll = new BScroll(this.$refs.box2, {
        click: true,
        scrollX: true,
        scrollY: false
      });
    });
  },
  methods: {
    loadData: debounce  (function() {
      let { id } = this;
      this.id = id + 1;
      let ofHeight = this.$refs.scloWidth.offsetHeight;
      server
        .get(`/mock/topic/v1/find/recAuto.json?page=${this.id}&size=1`)
        .then(res => {
          let result = res.data.result[0].topics;
          this.bestList = this.bestList.concat(result);
          this.$nextTick(() => {
            if (!this.bestScroll) {
              this.bestScroll = new BScroll(this.$refs.bestListNav, {
                click: true,
                scrollX: false,
                scrollY: true,
                probeType: 3
              });
              this.bestScroll.on("scroll", ({ x, y }) => {
                if (y < -ofHeight) {
                  this.scrollY=Math.abs(y)
                   this.loadData();
                    ofHeight= (ofHeight+2000);
                }
              });
            } else {
              this.bestScroll.refresh();
            }
          });
        });
      
    }, 1000)
  }
};
</script>

<style lang="less" scoped>
.bestListNav {
  width: 100%;
  height: 100%;
  .bestNav {
    .box {
      .box1 {
        width: 100%;
        .header {
          width: 100%;
          height: 100px;
          text-align: center;
          font-size: 50px;
          line-height: 100px;
        }
      }
      .box2 {
        width: 100%;
        display: flex;
        flex-wrap: nowrap;

        .boxNav {
          display: flex;
          flex-wrap: nowrap;
          .boxItem {
            width: 200px;
            height: 200px;
            text-align: center;
            img {
              width: 150px;
              height: 150px;
              border-radius: 50%;
            }
            div {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
  .navListBest {
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
    padding-left: 30px;
    .navListBestItem {
      overflow: hidden;
      width: 300px;
      height: 400px;
      border-radius: 10%;
      margin-left: 30px;
      img {
        width: 100%;
        height: 230px;
      }
      .bottomItem {
        img {
          width: 50px;
          height: 50px;
          display: inline-block;
          border-radius: 50%;
          margin-left: 20px;
        }
        .text {
          padding-bottom: 20px;
          font-size: 26px;
        }
        .right {
          font-size: 26px;
          float: right;
          padding-right: 30px;
        }
      }
    }
  }
}
</style>
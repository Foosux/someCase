<style scoped>
.home {
  /* background-color: rgba(255, 255, 255, 0.1); */
  color: #fff;
  /* border: 1px solid #47b3fe; */
}
.home .ivu-card-bordered {
  border-color: #0394d9 !important;
}
.home .ivu-card-head {
  border-bottom: 1px solid #0394d9 !important;
}
.bj button {
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid #47b3fe;
}
.home input {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid #47b3fe;
}
.home {
  width: 1200px;
  margin: 0 auto;
}
.text-con3,
.hot-list {
  list-style: none;
}
.text-con3 li,
.text-con1 li {
  line-height: 30px;
  color: #fff;
  overflow: hidden;
}
.text-con3 li:not(:last-child) {
  border-bottom: 1px dashed #ccc;
}
.text-con3 li a {
  color: #fff;
}
.text-con1 li p {
  width: 318px;
  height: 30px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.text-con1 li a {
  color: #fff;
}
.home .hot-list li {
  line-height: 30px;
}
.home .hot-list li span {
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  display: inline-block;
  margin: 0 5px;
}

.footer-left {
  float: left;
  width: 300px;
  margin-left: 80px;
}
.footer-cen {
  width: 500px;
  float: left;
}
.footer-cen p {
  line-height: 50px;
  font-weight: bold;
  font-size: 20px;
  color: #00b3ff;
}
.footer-right {
  padding-right: 50px;
  float: left;
  width: 300px;
}
.footer-left p,
.footer-right p {
  color: #fff;
}
.footer-right p {
  text-align: right;
}
.footer-right p:nth-child(2) {
  color: #06d6d3;
  line-height: 28px;
}
.footer-left p:nth-child(2) {
  color: #06d6d3;
  line-height: 28px;
}
.media-con {
  list-style: none;
}
.media-con li {
  height: 16px;
  line-height: 16px;
  float: left;
  display: inline-block;
  padding: 0 2px;
  font-size: 10px;
  margin: 0 3px;
  color: #fff;
  cursor: pointer;
}
.media-con .media-act {
  background: #17bcfd;
  font-weight: bold;
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: red;
  display: inline-block;
  margin-right: 3px;
}
.flexBox {
  display: flex;
  align-items: center;
}
.flexBox span:nth-child(2) {
  flex:1;
}
.flexBox span:last-child {
  margin-left:5px;
}
</style>
<template>
  <div style="width:100%;">
    <div class="home">
      <div class="bj">
        <Row>
          <Col span="24">
            <Row>
              <Col span="2">
                <span style="lineHeight:40px;color:#fff;fontWeight:bold;fontSize:20px;">线索搜索</span>
              </Col>
              <Col span="18">
                <router-link to="search"><Input search size="large" style="float:left;" enter-button="搜索" placeholder/></router-link>
              </Col>
              <Col span="3" offset="1">
                <a style="lineHeight:40px;">刷新</a>
              </Col>
            </Row>
          </Col>
          <Col span="24" style="marginTop:10px;">
            <Row>
              <Col span="18">
                <ButtonGroup>
                  <!-- getHitWord()  -->
                  <Button type="primary" @click="nodeVal={val:0}">全部</Button>
                  <Button type="default" @click="nodeVal={val:1}">
                    <span class="dot" style="background:#fd7201;"></span>危害食品安全
                  </Button>
                  <Button type="default" @click="nodeVal={val:2}">
                    <span class="dot" style="background:#948617;"></span>危害药品安全
                  </Button>
                  <Button type="default" @click="nodeVal={val:3}">
                    <span class="dot" style="background:#03f85f;"></span>损害自然资源
                  </Button>
                  <Button type="default" @click="nodeVal={val:4}">
                    <span class="dot" style="background:#03ece7;"></span>损害生态环境
                  </Button>
                  <Button type="default" @click="nodeVal={val:5}">
                    <span class="dot" style="background:#b802fc;"></span>违法出让国有土地使用权
                  </Button>
                  <Button type="default" @click="nodeVal={val:6}">
                    <span class="dot" style="background:#ea06b7;"></span>损害消费者权益
                  </Button>
                </ButtonGroup>
              </Col>
              <Col span="6">
                <ButtonGroup>
                  <Button type="primary">最近一周</Button>
                  <Button type="default">最近一月</Button>
                  <Button type="default">最近一季度</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Row style="marginTop:10px;">
        <Col span="6">
          <Card :padding="10" :style="{background:image}">
            <p slot="title" style="color:#fff;">
              热点关键词
              <a style="float:right;" href='javascript:void(0)'>更多</a>
            </p>
            <div>
              <ul class="text-con3">
                <li v-for="(item,index) in hitWord[nodeVal.val]" :key="index">
                  <router-link :to="{
                    path: '/search',
                    query: {
                      title: item.keyword
                    }
                  }">
                    <div class='flexBox'>
                      <span style="padding:0 5px;">{{index+1}}</span>
                      <span
                        style="width:210px; white-space:nowrap;text-overflow: ellipsis; overflow:hidden;"
                      >{{item.keyword}}</span>
                      <span>{{item.hotspot}}</span>
                      <span
                        :style="{
                          background:
                          item.trend==1
                            ? upBg
                            : item.trend==2
                              ? downBg
                              : 'none',
                          width:'10px',height:'16px',marginLeft: '5px'
                        }" ></span>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </Card>
          <Card :style="{background:image,marginTop:'10px'}">
            <p slot="title" style="color:#fff;">情感属性</p>
            <div style="margin:0 auto;">
              <chart3></chart3>
            </div>
          </Card>
        </Col>
        <Col span="12">
          <div>
            <chart-map :mapNode="{nodeVal}"></chart-map>
            <!-- <img style="width:100%;height:100%" src="../../assets/map.png" alt> -->
          </div>
        </Col>
        <Col span="6">
          <Card :style="{background:image}">
            <p slot="title" style="color:#fff;">主题词云</p>
            <div style="height:180px;">
              <!-- <p>主题词云</p> -->
              <div style="margin:0 auto;">
                <chart2 :mapNode="{nodeVal}"></chart2>
              </div>
            </div>
          </Card>

          <Card :style="{background:image,marginTop:'10px'}">
            <p slot="title" style="color:#fff;">媒体分布</p>

            <div style="margin:0 auto;">
              <chart1></chart1>
            </div>

          </Card>
        </Col>
      </Row>
      <Row :gutter="10">
        <Col span="8" style="marginTop:10px;">
          <Card :style="{background:image}">
            <p slot="title" style="color:#fff;">预警信息</p>
            <a slot="extra">查看更多</a>
            <div style="padding:0 20px;">
              <ul class="text-con1">
                <li v-for="(item,index) in aText2" :key="index">
                  <div>
                    <p>
                      <a target="_blank" :href="item.url">{{item.title}}</a>
                      <!-- <span style="float:right;">{{item.time}}</span> -->
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Card>
        </Col>
        <Col span="8" style="marginTop:10px;">
          <Card :style="{background:image}">
            <p slot="title" style="color:#fff;">敏感信息</p>
            <a slot="extra">查看更多</a>
            <div style="padding:0 20px;">
              <ul class="text-con1">
                <li v-for="(item,index) in aText3" :key="index">
                  <div>
                    <p>
                      <a target="_blank" :href="item.url">{{item.title}}</a>
                      <!-- <span style="float:right;">{{item.time}}</span> -->
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Card>
        </Col>
        <Col span="8" style="marginTop:10px;">
          <Card :style="{background:image}">
            <p slot="title" style="color:#fff;">行政处罚书</p>
            <a slot="extra">查看更多</a>
            <div style="padding:0 20px;">
              <ul class="text-con1">
                <li v-for="(item,index) in aText4" :key="index">
                  <div>
                    <p>
                      <a target="_blank" :href="item.url">{{item.title}}</a>
                      <!-- <span style="float:right;">{{item.time}}</span> -->
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Card>
        </Col>
      </Row>
      <!-- 两个图 -->
      <Row :gutter="10">
        <Col span="12" style="marginTop:10px;">
          <Card :style="{background:image}">
            <p slot="title" style="color:#fff;">情感走势</p>
            <div style="padding:0 20px;">
              <!-- <chart2></chart2> -->
              <chart6></chart6>
            </div>
          </Card>
        </Col>
        <Col span="12" style="marginTop:10px;">
          <Card :style="{background:image}">
            <p slot="title" style="color:#fff;">情感走势</p>
            <div style="padding:0 20px;">
              <!-- <chart4></chart4> -->
              <chart5></chart5>
            </div>
          </Card>
        </Col>
        <Col span="24" :style="{background:imgFot,height:'50px',marginTop:'10px'}">
          <div class="footer-left">
            <p>当前时间</p>
            <p>2018年 11月 29 日 23:32:59</p>
          </div>
          <div class="footer-cen">
            <p>Beijing Blitech Technology CO., LTD @ Copyright</p>
          </div>
          <div class="footer-right">
            <p>当前大厅</p>
            <p>昆明市人民检察院·智慧侦监分析平台</p>
          </div>
        </Col>
      </Row>

    </div>
  </div>
</template>

<script>
// import chart0 from "./components/chart0.vue";
import chart1 from "./components/chart1.vue";
import chart2 from "./components/chart2.vue";
import chart3 from "./components/chart3.vue";
import chart4 from "./components/chart4.vue";
import chart5 from "./components/chart5.vue";
import chart6 from "./components/chart6.vue";
import chartMap from "./components/chartMap.vue";
import axios from "../../axios/index";
export default {
  name: "home",
  components: {
    // chart0,
    chart1,
    chart2,
    chart3,
    chart4,
    chart5,
    chart6,
    chartMap
  },
  data() {
    return {
      //image:"url(" + require("../../assets/bg.png") + ")",
      upBg: "url(" + require("../../assets/up.png") + ")",
      downBg: "url(" + require("../../assets/down.png") + ")",
      image: "rgba(0,0,0,0.1)",
      imgFot: "url(" + require("../../assets/footer.png") + ")",
      type: 1,
      nodeVal: { val: 7 },
      // 文章
      hitWord: [[{
        keyword: '违法出让国有土地',
        trend: 0,
        hotspot: 224,
      },{
        keyword: '损害生态环境',
        trend: 1,
        hotspot: 178,
      },{
        keyword: '损害消费者权益',
        trend: 0,
        hotspot: 136,
      },{
        keyword: '危害药品安全',
        trend: 0,
        hotspot: 135,
      },{
        keyword: '损害自然环境',
        trend: 0,
        hotspot: 123,
      },{
        keyword: '火灾',
        trend: 2,
        hotspot: 120,
      },{
        keyword: '危害食品安全',
        trend: 0,
        hotspot: 112,
      }],[{
        keyword: '危害食品安全',
        hotspot: 135,
        trend: 1,
      },{
        keyword: '假冒',
        hotspot: 44,
        trend: 1,
      },{
        keyword: '绿色食品',
        hotspot: 41,
        trend: 0,
      },{
        keyword: '食品安全',
        hotspot: 20,
        trend: 0,
      },{
        keyword: '卫生',
        hotspot: 10,
        trend: 0,
      },{
        keyword: '食物中毒',
        hotspot: 7,
        trend: 0,
      },{
        keyword: '外卖偷吃',
        hotspot: 2,
        trend: 2,
      }],[{
        keyword: '药品安全',
        hotspot: 135,
        trend: 0,
      },{
        keyword: '假冒',
        hotspot: 44,
        trend: 1,
      },{
        keyword: '高价',
        hotspot: 20,
        trend: 0,
      },{
        keyword: '土方子',
        hotspot: 5,
        trend: 2,
      },{
        keyword: '微量元素超标',
        hotspot: 4,
        trend: 0,
      },{
        keyword: '公共卫生事件',
        hotspot: 1,
        trend: 0,
      },{
        keyword: '违禁药物',
        hotspot: 1,
        trend: 0,
      }],[{
        keyword: '火灾',
        hotspot: 120,
        trend: 0,
      },{
        keyword: '污水',
        hotspot: 64,
        trend: 1,
      },{
        keyword: '废水',
        hotspot: 23,
        trend: 0,
      },{
        keyword: '自然资源',
        hotspot: 20,
        trend: 0,
      },{
        keyword: '水污染',
        hotspot: 12,
        trend: 2,
      },{
        keyword: '土壤污染',
        hotspot: 2,
        trend: 0,
      },{
        keyword: '粉尘',
        hotspot: 1,
        trend: 0,
      }],[{
        keyword: '火灾',
        hotspot: 120,
        trend: 1,
      },{
        keyword: '污水',
        hotspot: 64,
        trend: 0,
      },{
        keyword: '雾霾',
        hotspot: 39,
        trend: 0,
      },{
        keyword: '损害生态',
        hotspot: 35,
        trend: 2,
      },{
        keyword: '废水',
        hotspot: 23,
        trend: 0,
      },{
        keyword: '农药污染',
        hotspot:11,
        trend: 0,
      },{
        keyword: '矿山',
        hotspot: 7,
        trend: 0,
      }],[{
        keyword: '侵占',
        hotspot: 59,
        trend: 1,
      },{
        keyword: '拆迁',
        hotspot: 44,
        trend: 0,
      },{
        keyword: '城中村',
        hotspot: 36,
        trend: 1,
      },{
        keyword: '违建',
        hotspot: 35,
        trend: 0,
      },{
        keyword: '国有土地使用权',
        hotspot: 20,
        trend: 0,
      },{
        keyword: '占用',
        hotspot:19,
        trend: 0,
      },{
        keyword: '违法出让国有土地使用权',
        hotspot: 6,
        trend: 2,
      }],[{
        keyword: '假冒',
        hotspot: 44,
        trend: 0,
      },{
        keyword: '欺诈',
        hotspot: 43,
        trend: 1,
      },{
        keyword: '高价',
        hotspot: 20,
        trend: 0,
      },{
        keyword: '维权',
        hotspot: 20,
        trend: 0,
      },{
        keyword: '诈骗',
        hotspot: 20,
        trend: 2,
      },{
        keyword: '宰客',
        hotspot:9,
        trend: 0,
      },{
        keyword: '骗局',
        hotspot: 4,
        trend: 0,
      }],[{
        "area":"嵩明县",
        "hotspot":135,
        "trend":1,
        "id":1,
        "keyword":"药品安全",
        "type":1
      },{
        "area":"禄劝县",
        "hotspot":120,
        "trend":0,
        "id":2,
        "keyword":"火灾",
        "type":4
      },{
        "area":"石林县",
        "hotspot":64,
        "trend":2,
        "id":3,
        "keyword":"污水",
        "type":6
      },{
        "area":"寻甸县",
        "hotspot":59,
        "trend":0,
        "id":4,
        "keyword":"侵占",
        "type":3
      },{
        "area":"宜良县",
        "hotspot":44,
        "trend":1,
        "id":5,
        "keyword":"拆迁",
        "type":6
      },{
        "area":"晋宁县",
        "hotspot":44,
        "trend":1,
        "id":6,
        "keyword":"假冒",
        "type":2
      },{
        "area":"昆明市",
        "hotspot":43,
        "trend":0,
        "id":7,
        "keyword":"欺诈",
        "type":5
      }]],
      // 文章
      aText2: [
        {
          title: "受得了副科单价了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副科级了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副科级数量单辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副科了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副量单价了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副量单价了解到酸辣粉",
          time: "2018-11-29"
        }
      ],
      // 文章
      aText3: [
        {
          title: "受得了副科单价了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副科级了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副科级数量单辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副科了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副量单价了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副量单价了解到酸辣粉",
          time: "2018-11-29"
        }
      ],
      // 文章
      aText4: [
        {
          title: "受得了副科单价了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副科级了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副科级数量单辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副科了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副量单价了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副量单价了解到酸辣粉",
          time: "2018-11-29"
        }
      ],
      // 热点list
      aHot: [
        "老师的街坊邻居",
        "老师的街坊邻居",
        "老师的街坊邻居",
        "杀戮空间发了打法",
        "老师的街坊邻居",
        "是非窝太晚日2522",
        "老师的街坊邻居",
        "外套43感受到感受到",
        "  说的房",
        "老师的街坊邻居",
        "撒地方撒的说的sd",
        "老师的街坊邻居",
        " 色任务玩日无日峰人事"
      ]
    };
  },
  mounted() {
    // this.getHitWord();
    this.getYJXX();
    this.getMGXX();
    this.getXZCFS();
  },
  methods: {
    getXZCFS() {
      const _this = this;
      axios
        .get("http://123.56.205.155:8082/km/news?type=3")
        .then(function(response) {
          //console.log(response.data);
          _this.aText4 = response.data.data;
          //console.log(_this.aText4);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getMGXX() {
      const _this = this;
      axios
        .get("http://123.56.205.155:8082/km/news?type=2")
        .then(function(response) {
          //console.log(response.data);
          _this.aText3 = response.data.data;
          //console.log(_this.aText3);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getYJXX() {
      const _this = this;
      axios
        .get("http://123.56.205.155:8082/km/news?type=1")
        .then(function(response) {
          //console.log(response.data);
          _this.aText2 = response.data.data;
          //console.log(_this.aText2);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getHitWord() {
      this.nodeVal = { val: 1 };
      const _this = this;
      // _this.hitWord =
    //   axios
    //     .get("http://123.56.205.155:8082/km/keywords")
    //     .then(function(response) {
    //       _this.hitWord = response.data.data;
          // console.log(_this.hitWord);
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    }
  }
};
</script>

<style>
.home1 {
  width: 1200px;
  margin: 0 auto;
}
.text-con,
.hot-list {
  list-style: none;
  color: #919191;
}
.hot-list li {
  border-bottom: 1px dashed #ccc;
}
.text-con li {
  padding: 28px;
  border-bottom: 1px dashed #ccc;
}
.hot-list li {
  line-height: 30px;
}
.hot-list li span {
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
</style>
<template>
  <div>
    <div class="home1">
      <Row :gutter="20">
        <Col span="18">
          <Row>
            <Input search size="large" enter-button="搜索" placeholder="搜索线索"/>
          </Row>
          <Card style="marginTop:10px;">
            <Tabs value="tab1">
              <TabPane label="信息汇总" name="tab1">
                <Card>
                  <div>
                    <div>
                      <p style="height:38px;">
                        <span>时间：</span>
                        <Button type="dashed">近30天</Button>
                        <Button type="text">近7天</Button>
                        <Button type="text">昨天</Button>
                        <Button type="text">今天</Button>
                      </p>
                      <p style="height:38px;">
                        <span>情感：</span>
                        <Button type="dashed">全部</Button>
                        <Button type="text">正面</Button>
                        <Button type="text">中性</Button>
                        <Button type="text">负面</Button>
                      </p>
                      <p style="height:38px;">
                        <span>排序：</span>
                        <Button type="dashed">时间降序</Button>
                        <Button type="text">时间升序</Button>
                      </p>
                      <p style="height:38px;">
                        <span>媒体平台</span>
                        <Button type="dashed">全部（2352）</Button>
                        <Button type="text">微信（103）</Button>
                        <Button type="text">微博（42）</Button>
                        <Button type="text">网页（102）</Button>
                        <Button type="text">报刊（55）</Button>
                        <Button type="text">客户端（13）</Button>
                        <Button type="text">论坛（332）</Button>
                      </p>
                    </div>
                  </div>
                </Card>
                <Card style="marginTop:10px;">
                  <p slot="title">原文链接</p>
                    <div style="padding:0 20px;">
                      <ul class="text-con">
                        <li v-for="(item,index) in aText" :key="index">
                          <Button
                            ghost
                            :type="(item.news_id%3)==1?'success':(item.news_id%3)==2?'error':'info'"
                            style="float:left;marginLeft:-50px;marginRight:10px;"
                            size="small"
                          >{{(item.news_id%3)==1?'正面':(item.news_id%3)==2?'负面':'中性'}}</Button>
                          <div>
                            <p style="fontSize:16px;lineHeight:34px;">
                              <a target="_blank" :href="item.url">{{item.name}}</a>
                            </p>
                            <p style="color:#7d7d7d">{{item.name}} 讨论热点{{item.discuss_count}} 浏览量 {{item.view_count}}</p>
                            <p style="lineHeight:30px;">
                              <a>相似文章{{item.discuss_count}}</a>
                            </p>
                            <div>
                              <span style="float:left;">主题词：</span>
                              <!-- <span
                                style="float:left;padding:0 10px;"
                                v-for="(item_word,index_word) in item.word"
                                :key="index_word"
                              >{{item_word}}
                              </span> -->
                              <span>昆明 污水排放 环境污染</span>
                              <b style="float:right;">{{item.time}}</b>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <Row type="flex" justify="center" :style="{marginTop:'10px'}">
                        <Col>
                          <Page :pageSize="1" :total="112" :current="1" show-total></Page>
                        </Col>
                      </Row>
                    </div>
                </Card>
              </TabPane>
              <TabPane label="内容分析" name="tab2">
                <Card>
                  <div>
                    <div>
                      <p style="height:38px;">
                        <span>时间：</span>
                        <Button type="dashed">全部</Button>
                        <Button type="text">今天</Button>
                        <Button type="text">昨天</Button>
                        <Button type="text">近7天</Button>
                        <Button type="text">近30天</Button>
                      </p>
                      <p style="height:38px;">
                        <span>媒体平台：</span>
                        <Button type="dashed">全部（2352）</Button>
                        <Button type="text">微信（103）</Button>
                        <Button type="text">微博（42）</Button>
                        <Button type="text">网页（102）</Button>
                        <Button type="text">报刊（55）</Button>
                        <Button type="text">客户端（13）</Button>
                        <Button type="text">论坛（332）</Button>
                      </p>
                    </div>
                  </div>
                </Card>
                <Card style="marginTop:10px;">
                    <Row :gutter="20">
                      <Col span="12">
                        <Card>
                          <p slot="title">活跃媒体</p>
                          <div style="padding:0 20px;">
                            <chart1></chart1>
                          </div>
                        </Card>
                      </Col>
                      <Col span="12">
                        <Card>
                          <p slot="title">媒体分布</p>
                          <div style="padding:0 20px;">
                            <chart2></chart2>
                          </div>
                        </Card>
                      </Col>
                      <Col span="12" style="marginTop:10px;">
                        <Card>
                          <p slot="title">情感属性</p>
                          <div style="padding:0 20px;">
                            <chart3></chart3>
                          </div>
                        </Card>
                      </Col>
                      <Col span="12" style="marginTop:10px;">
                        <Card>
                          <p slot="title">发布热区</p>
                          <div style="padding:0 20px;">
                            <chart4></chart4>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                </Card>
              </TabPane>
            </Tabs>
          </Card>
        </Col>
        <Col span="6">
          <Card>
            <p slot="title">热点关键词</p>
            <div style="padding:0 20px;">
              <ul class="hot-list">
                <li v-for="(item,index) in aHot" :key="index">
                  <span
                    :style="{background:index==0?'red':index==1?'orange':index==2?'yellow':'#4ec7fa'}"
                  >{{index}}</span>
                  {{item}}
                </li>
              </ul>
            </div>
          </Card>
        </Col>
      </Row>

      <Row :style="{background:imgFot,marginTop:'10px'}">
        <Col span="24" :style="{height:'50px'}">
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
import chart1 from "./components/chart1.vue";
import chart2 from "./components/chart2.vue";
import chart3 from "./components/chart3.vue";
import chart4 from "./components/chart4.vue";
import axios from "../../axios/index";
export default {
  name: "home",
  components: {
    chart1,
    chart2,
    chart3,
    chart4
  },
  data() {
    return {
      imgFot: "url(" + require("../../assets/footer.png") + ")",
      // 文章
      aText: [
        {
          type: 1,
          title: "遥隔四万里的“好知音”，习近平再访阿根廷",
          info: "时政新闻眼 | 遥隔四万里的“好知音”，习近平再访阿根廷",
          num: 60,
          word: ["时政新闻眼", "习近平再访阿根廷"],
          time: "2018年11月30日",
          link:
            "http://news.cctv.com/2018/11/30/ARTI0Fq7owlBlW5NRuXUJyOh181130.shtml"
        },
        {
          type: 1,
          title: "环境部回应福建碳九事件",
          info: "环境部回应福建碳九事件：试图掩盖真相极其愚蠢",
          num: 88,
          word: ["环境", "福建碳九事件"],
          time: "2018年11月30日",
          link:
            "https://xinwen.eastday.com/a/n181130123459788.html?qid=news.baidu.com"
        },
        {
          type: 2,
          title: "风华正茂的IDG资本：2018年16个IPO",
          info: "风华正茂的IDG资本：2018年16个IPO，手上还有至少36个独角兽",
          num: 18,
          word: ["IDG资本"],
          time: "2018年11月30日",
          link: "http://www.sohu.com/a/278784522_355020"
        },
        {
          type: 1,
          title: "连接一带一路 德邦快递",
          info: "连接一带一路 德邦快递拓展国际物流新通道",
          num: 100,
          word: ["一带一路"],
          time: "2018年11月30日",
          link: "http://economy.enorth.com.cn/system/2018/11/30/036460259.shtml"
        }
      ],
      titList: [12, 12],
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
    const _this = this;
    axios
      .get("http://123.56.205.155:8082/km/indexsearch?page=1")
      .then(function(response) {
        //console.log(response.data);
        _this.aText = response.data.data;
        //console.log(_this.aText);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

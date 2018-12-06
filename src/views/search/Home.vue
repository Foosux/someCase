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
  display: flex;
  align-items: center;
  line-height: 45px;
}
.hot-list li:not(:last-child) {
  border-bottom: 1px dashed #ccc;
}
.text-con li {
  padding: 28px 0 28px 50px;
  border-bottom: 1px dashed #ccc;
}
.hot-list li span:nth-child(2) {
  flex: 1;
}
.hot-list li .num {
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
.filters .tit {
  text-align: right;
  display: inline-block;
  width: 5em;
  line-height: 32px;
}
.filters > div:not(:last-child){
  margin-bottom: 10px;
}
.filters button {
  margin-right: 10px;
  padding: 5px 10px 6px;
}
.filters .flex {
  display: flex;
}
.split {
  flex: 1;
}
.titWrap .ivu-card-body{
  padding: 0 16px;
}
.moreInfo {
  float: right;
}
</style>
<template>
  <div>
    <div class="home1">
      <Row :gutter="20">
        <Col span="18">
          <Row>
            <Input 
              search 
              size="large" 
              enter-button="搜索" 
              placeholder="搜索线索"
              v-model="searchKeyWords"
              @on-search="searchHandle"
            />
          </Row>
          <Card style="marginTop:10px;">
            <Tabs value="tab1">
              <TabPane label="信息汇总" name="tab1">
                <Card>
                  <div>
                    <div class="filters">
                      <div>
                        <span class='tit'>时间：</span>
                        <Button type="primary" ghost>近30天</Button>
                        <Button type="text">近7天</Button>
                        <Button type="text">昨天</Button>
                        <Button type="text">今天</Button>
                      </div>
                      <div>
                        <span class='tit'>情感：</span>
                        <Button type="primary" ghost>全部</Button>
                        <Button type="text">正面</Button>
                        <Button type="text">中性</Button>
                        <Button type="text">负面</Button>
                      </div>
                      <div>
                        <span class='tit'>排序：</span>
                        <Button type="primary" ghost>时间降序</Button>
                        <Button type="text">时间升序</Button>
                      </div>
                      <div class='flex'>
                        <span class='tit'>媒体平台：</span>
                        <span class='split'>
                          <Button type="primary" ghost>全部（908）</Button>
                          <Button type="text">金碧社区（103）</Button>
                          <Button type="text">彩龙社区（42）</Button>
                          <Button type="text">滇族部落（102）</Button>
                          <Button type="text">大观网昆明（55）</Button>
                          <Button type="text">我爱昆明（13）</Button>
                          <Button type="text">昆明在线（332）</Button>
                          <Button type="text">新昆明（65）</Button>
                          <Button type="text">宝善街（32）</Button>
                          <Button type="text">昆明妈妈网（10）</Button>
                          <Button type="text">云岭清风（90）</Button>
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card style="marginTop:10px;">
                  <p slot="title">原文链接</p>
                    <div style="margin:-20px 0 20px;">
                      <ul class="text-con">
                        <li v-for="(item,index) in aText.data" :key="index">
                          <Button
                            ghost
                            :type="item.face_flag==1?'success':item.face_flag==2?'error':'info'"
                            style="float:left;margin: 5px 10px 0px -50px;"
                            size="small"
                          >{{item.face_flag==1?'正面':item.face_flag==2?'负面':'中性'}}</Button>
                          <div>
                            <p style="fontSize:20px;lineHeight:34px;">
                              <a target="_blank" style="color:#313131;" :href="item.url">{{item.title}}</a>
                            </p>
                            <!--
                            <p style="color:#7d7d7d;fontSize:16px;">{{item.name}} 讨论热点{{item.discuss_count}} 浏览量 {{item.view_count}}</p>
                             -->
                            <p class='dec'>{{item.content}}</p>
                            <p style="lineHeight:30px;">
                              <a href='javascript: void(0)'>相似文章 {{item.discuss_count}} </a>
                            </p>
                
                            <div>
                              <span style="float:left;color:#7d7d7d;fontSize:14px;">主题词：</span>
                              <!-- <span
                                style="float:left;padding:0 10px;"
                                v-for="(item_word,index_word) in item.word"
                                :key="index_word"
                              >{{item_word}}
                              </span> -->
                              <span>{{item.tag}}</span>
                              <span style="marginLeft:20px;">{{item.from}}</span>
                              <b style="float:right;">{{item.time}}</b>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <Row type="flex" justify="center" :style="{marginTop:'10px'}">
                        <Col>
                          <Page 
                            :pageSize="aText.per_page" 
                            :total="aText.total" 
                            :current="aText.current_page" 
                            @on-change="changePage"
                            show-total
                          ></Page>
                        </Col>
                      </Row>
                    </div>
                </Card>
              </TabPane>
              <TabPane label="内容分析" name="tab2">
                <Card>
                  <div>
                    <div class="filters">
                      <div>
                        <span class='tit'>时间：</span>
                        <Button type="primary" ghost>全部</Button>
                        <Button type="text">今天</Button>
                        <Button type="text">昨天</Button>
                        <Button type="text">近7天</Button>
                        <Button type="text">近30天</Button>
                      </div>
                      <div class='flex'>
                        <span class='tit'>媒体平台：</span>
                        <span class='split'>
                          <Button type="primary" ghost>全部（908）</Button>
                          <Button type="text">金碧社区（103）</Button>
                          <Button type="text">彩龙社区（42）</Button>
                          <Button type="text">滇族部落（102）</Button>
                          <Button type="text">大观网昆明（55）</Button>
                          <Button type="text">我爱昆明（13）</Button>
                          <Button type="text">昆明在线（332）</Button>
                          <Button type="text">新昆明（65）</Button>
                          <Button type="text">宝善街（32）</Button>
                          <Button type="text">昆明妈妈网（10）</Button>
                          <Button type="text">云岭清风（90）</Button>
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card style="marginTop:10px;">
                    <Row :gutter="20">
                      <Col span="12">
                        <Card>
                          <p slot="title">活跃媒体</p>
                          <div style="padding:0;">
                            <chart1></chart1>
                          </div>
                        </Card>
                      </Col>
                      <Col span="12">
                        <Card>
                          <p slot="title">媒体分布</p>
                          <div style="padding:0;">
                            <chart2></chart2>
                          </div>
                        </Card>
                      </Col>
                      <Col span="12" style="marginTop:10px;">
                        <Card>
                          <p slot="title">情感属性</p>
                          <div style="padding:0;">
                            <chart3></chart3>
                          </div>
                        </Card>
                      </Col>
                      <Col span="12" style="marginTop:10px;">
                        <Card>
                          <p slot="title">发布热区</p>
                          <div style="padding:0;">
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
          <Card class='titWrap'>
            <p slot="title">热点关键词<a class='moreInfo' href='javascript:void(0)'>更多</a></p>
            <div>
              <ul class="hot-list">
                <li v-for="(item,index) in aHot" :key="index">
                  <span
                    class='num'
                    :style="{color:'#FFF',background:index==0?'#ff0404':index==1?'#fe9104':index==2?'#fbb803':'#4ec7fa'}"
                  >{{index+1}}</span>
                  <span>{{item.title}}</span>
                  <span>{{item.count}}</span>
                  <span
                    :style="{
                      background:
                      item.upDown==1
                        ? upBg
                        : item.upDown==2
                          ? downBg
                          : 'none',
                      width:'10px',height:'16px',marginLeft: '5px'
                    }" >
                  </span>
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
      upBg: "url(" + require("../../assets/up.png") + ")",
      downBg: "url(" + require("../../assets/down.png") + ")",
      searchKeyWords: '',
      // 文章
      aText: {     
        current_page: 1,
        per_page: 10,
        total: 90,
        data: [
          // {
          //   type: 1,
          //   title: "遥隔四万里的“好知音”，习近平再访阿根廷",
          //   info: "时政新闻眼 | 遥隔四万里的“好知音”，习近平再访阿根廷",
          //   num: 60,
          //   word: ["时政新闻眼", "习近平再访阿根廷"],
          //   time: "2018年11月30日",
          //   link:
          //     "http://news.cctv.com/2018/11/30/ARTI0Fq7owlBlW5NRuXUJyOh181130.shtml"
          // },
          // {
          //   type: 1,
          //   title: "环境部回应福建碳九事件",
          //   info: "环境部回应福建碳九事件：试图掩盖真相极其愚蠢",
          //   num: 88,
          //   word: ["环境", "福建碳九事件"],
          //   time: "2018年11月30日",
          //   link:
          //     "https://xinwen.eastday.com/a/n181130123459788.html?qid=news.baidu.com"
          // },
          // {
          //   type: 2,
          //   title: "风华正茂的IDG资本：2018年16个IPO",
          //   info: "风华正茂的IDG资本：2018年16个IPO，手上还有至少36个独角兽",
          //   num: 18,
          //   word: ["IDG资本"],
          //   time: "2018年11月30日",
          //   link: "http://www.sohu.com/a/278784522_355020"
          // },
          // {
          //   type: 1,
          //   title: "连接一带一路 德邦快递",
          //   info: "连接一带一路 德邦快递拓展国际物流新通道",
          //   num: 100,
          //   word: ["一带一路"],
          //   time: "2018年11月30日",
          //   link: "http://economy.enorth.com.cn/system/2018/11/30/036460259.shtml"
          // }
        ]
      },
      titList: [12, 12],
      // 热点list
      aHot: [{
        title: "嵩明县疑似出现非洲猪瘟",
        count: 18250,
        upDown: 1
      }, {
        title: "禄劝县龙马村村名滥伐林木",
        count: 16468,
        upDown: 0
      },
      {
        title: "石林县黑中介套路租房",
        count: 12678,
        upDown: 2
      },
      {
        title: "寻甸县八宝镇垃圾焚烧污染",
        count:  9876,
        upDown: 0
      },
      {
        title: "宜良县御景新城烂尾",
        count: 6789,
        upDown: 0
      },
      {
        title: "晋宁县查获违禁药品",
        count: 4673,
        upDown: 0
      },
      {
        title: "禄劝县龙马村村名滥伐林木",
        count: 3676,
        upDown: 0
      },
      {
        title: "寻甸县八宝镇垃圾焚烧污染",
        count: 2456,
        upDown: 0
      },
      {
        title: "晋宁县查获违禁药品",
        count: 1897,
        upDown: 0
      },
      {
        title: "石林县黑中介套路租房",
        count: 1657,
        upDown: 0
      }
      ]
    };
  },
  mounted() {
    let params = {}
    if(this.$route.query.title) {
      this.searchKeyWords = this.$route.query.title
      params.title = this.$route.query.title
    }
    this.searchInfo({...params})
  },
  methods: {
    searchInfo(params) {
      const _this = this;
      axios("http://kmbeta.blitech.cn/index/Index/list_data",{
        params: {
          page: _this.aText.current_page,
          title: _this.searchKeyWords,
          ...params
        }
      })
        // .get("http://123.56.205.155:8082/km/indexsearch?page=1")
      .then(function(response) {
        response.data.data.forEach((item, i) => {
          item.time = ["2018年11月3日","2017年6月23日","2018年1月5日","2018年8月14日","2016年7月20日","2018年10月6日","2018年3月5日","2018年5月21日","2018年9月17日","2015年8月3日"][i]
          item.discuss_count = Math.floor(Math.random()*100)
          item.content = _this.formatToText(item.content)
        })
        _this.aText = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    changePage(page) {
      this.searchInfo({page})
    },
    searchHandle() {
      this.$router.push(`/search?title=${this.searchKeyWords}`)
      this.searchInfo({title: this.searchKeyWords})
    },
    formatToText(HTML) {
      let input = HTML;
      let text = input.replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi,'').replace(/<[^>]+?>/g,'').replace(/\s+/g,' ').replace(/ /g,' ').replace(/>/g,' ').replace(/(&nbsp;)/g,'');  
      return text.substring(0, 100)+'...'
    }
  }
};
</script>

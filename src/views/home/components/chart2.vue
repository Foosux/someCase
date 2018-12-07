<template>
  <div id="chart2" style="width:260px;height:180px;"></div>
</template>
<script>
import echarts from "echarts";
import wordcloud from "echarts-wordcloud";
export default {
  name: "chart2",
  props: {
    mapNode: {
      type: Object
      // default:1,
    }
  },
  data() {
    return {
      typeV: 0,
      data: [
          {
              name: "绿色食品",
              value: 41,
              textStyle: this.createRandomItemStyle(0)
          },
          {
              name: "药品安全",
              value: 135,
              textStyle: this.createRandomItemStyle(1)
          },
          {
              name: "火灾",
              value: 120,
              textStyle: this.createRandomItemStyle(2)
          },
          {
              name: "雾霾",
              value: 39,
              textStyle: this.createRandomItemStyle(3)
          },
          {
              name: "侵占",
              value: 59,
              textStyle: this.createRandomItemStyle(4)
          },
          {
              name: "假冒",
              value: 44,
              textStyle: this.createRandomItemStyle(5)
          },
          {
              name: "食品安全",
              value: 20,
              textStyle: this.createRandomItemStyle(0)
          },
          {
              name: "土方子",
              value: 5,
              textStyle: this.createRandomItemStyle(1)
          },
          {
              name: "自然资源",
              value: 20,
              textStyle: this.createRandomItemStyle(2)
          },
          {
              name: "农药污染",
              value: 11,
              textStyle: this.createRandomItemStyle(3)
          },
          {
              name: "城中村",
              value: 36,
              textStyle: this.createRandomItemStyle(4)
          },
          {
              name: "骗局",
              value: 58,
              textStyle: this.createRandomItemStyle(5)
          },
          {
              name: "食品安全",
              value: 20,
              textStyle: this.createRandomItemStyle(0)
          },
          {
              name: "高价",
              value: 20,
              textStyle: this.createRandomItemStyle(1)
          },
          {
              name: "自然资源",
              value: 20,
              textStyle: this.createRandomItemStyle(2)
          },
          {
              name: "污水",
              value: 64,
              textStyle: this.createRandomItemStyle(3)
          },
          {
              name: "拆迁",
              value: 44,
              textStyle: this.createRandomItemStyle(4)
          },
          {
              name: "欺诈",
              value: 43,
              textStyle: this.createRandomItemStyle(5)
          }
      ]
    };
  },
  watch: {
    mapNode(cur, old) {
      // console.log(cur.nodeVal.val)
      switch (cur.nodeVal.val) {
        case 0:
          this.data=[{
            name: '违法出让国有土地',
            value: 224,
            textStyle: this.createRandomItemStyle(0)
          },{
            name: '损害生态环境',
            value: 178,
            textStyle: this.createRandomItemStyle(0)
          },{
            name: '损害消费者权益',
            value: 136,
            textStyle: this.createRandomItemStyle(0)
          },{
            name: '危害药品安全',
            value: 135,
            textStyle: this.createRandomItemStyle(0)
          },{
            name: '损害自然环境',
            value: 123,
            textStyle: this.createRandomItemStyle(0)
          },{
            name: '火灾',
            value: 120,
            textStyle: this.createRandomItemStyle(0)
          },{
            name: '危害食品安全',
            value: 112,
            textStyle: this.createRandomItemStyle(0)
          }]
          this.initChart()
          break;
        case 1:
          this.data=[{
            name: '危害食品安全',
            value: 135,
            textStyle: this.createRandomItemStyle(1)
          },{
            name: '假冒',
            value: 44,
            textStyle: this.createRandomItemStyle(1)
          },{
            name: '绿色食品',
            value: 41,
            textStyle: this.createRandomItemStyle(1)
          },{
            name: '食品安全',
            value: 20,
            textStyle: this.createRandomItemStyle(1)
          },{
            name: '卫生',
            value: 10,
            textStyle: this.createRandomItemStyle(1)
          },{
            name: '食物中毒',
            value: 7,
            textStyle: this.createRandomItemStyle(1)
          },{
            name: '外卖偷吃',
            value: 2,
            textStyle: this.createRandomItemStyle(1)
          }]
          this.initChart()
          break;
        case 2:
          this.data=[{
            name: '药品安全',
            value: 135,
            textStyle: this.createRandomItemStyle(2)
          },{
            name: '假冒',
            value: 44,
            textStyle: this.createRandomItemStyle(2)
          },{
            name: '高价',
            value: 20,
            textStyle: this.createRandomItemStyle(2)
          },{
            name: '土方子',
            value: 5,
            textStyle: this.createRandomItemStyle(2)
          },{
            name: '微量元素超标',
            value: 4,
            textStyle: this.createRandomItemStyle(2)
          },{
            name: '公共卫生事件',
            value: 1,
            textStyle: this.createRandomItemStyle(2)
          },{
            name: '违禁药物',
            value: 1,
            textStyle: this.createRandomItemStyle(2)
          }]
          this.initChart()
          break;
        case 3:
          this.data=[{
            name: '火灾',
            value: 120,
            textStyle: this.createRandomItemStyle(3)
          },{
            name: '污水',
            value: 64,
            textStyle: this.createRandomItemStyle(3)
          },{
            name: '废水',
            value: 23,
            textStyle: this.createRandomItemStyle(3)
          },{
            name: '自然资源',
            value: 20,
            textStyle: this.createRandomItemStyle(3)
          },{
            name: '水污染',
            value: 12,
            textStyle: this.createRandomItemStyle(3)
          },{
            name: '土壤污染',
            value: 2,
            textStyle: this.createRandomItemStyle(3)
          },{
            name: '粉尘',
            value: 1,
            textStyle: this.createRandomItemStyle(3)
          }]
          this.initChart()
          break;
        case 4:
          this.data=[{
            name: '火灾',
            value: 120,
            textStyle: this.createRandomItemStyle(4)
          },{
            name: '污水',
            value: 64,
            textStyle: this.createRandomItemStyle(4)
          },{
            name: '雾霾',
            value: 39,
            textStyle: this.createRandomItemStyle(4)
          },{
            name: '损害生态',
            value: 35,
            textStyle: this.createRandomItemStyle(4)
          },{
            name: '废水',
            value: 23,
            textStyle: this.createRandomItemStyle(4)
          },{
            name: '农药污染',
            value:11,
            textStyle: this.createRandomItemStyle(4)
          },{
            name: '矿山',
            value: 7,
            textStyle: this.createRandomItemStyle(4)
          }]
          this.initChart()
          break;
        case 5:
          this.data=[{
            name: '侵占',
            value: 59,
            textStyle: this.createRandomItemStyle(5)
          },{
            name: '拆迁',
            value: 44,
            textStyle: this.createRandomItemStyle(5)
          },{
            name: '城中村',
            value: 36,
            textStyle: this.createRandomItemStyle(5)
          },{
            name: '违建',
            value: 35,
            textStyle: this.createRandomItemStyle(5)
          },{
            name: '国有土地使用权',
            value: 20,
            textStyle: this.createRandomItemStyle(5)
          },{
            name: '占用',
            value:19,
            textStyle: this.createRandomItemStyle(5)
          },{
            name: '违法出让国有土地使用权',
            value: 6,
            textStyle: this.createRandomItemStyle(5)
          }]
          this.initChart()
          break;
        case 6:
          this.data=[{
            name: '假冒',
            value: 44,
             textStyle: this.createRandomItemStyle(6)
          },{
            name: '欺诈',
            value: 43,
             textStyle: this.createRandomItemStyle(6)
          },{
            name: '高价',
            value: 20,
             textStyle: this.createRandomItemStyle(6)
          },{
            name: '维权',
            value: 20,
             textStyle: this.createRandomItemStyle(6)
          },{
            name: '诈骗',
            value: 20,
             textStyle: this.createRandomItemStyle(6)
          },{
            name: '宰客',
            value:9,
             textStyle: this.createRandomItemStyle(6)
          },{
            name: '骗局',
            value: 4,
             textStyle: this.createRandomItemStyle(6)
          }]
          this.initChart()
          break;
      }
    }
  },
  methods: {
    createRandomItemStyle(type) {
      return {
        normal: {
          color: ['#FFF','rgb(253, 114, 1)', 'rgb(148, 134, 23)', 'rgb(3, 248, 95)', 'rgb(3, 236, 231)', 'rgb(184, 2, 252)', 'rgb(234, 6, 183)'][type]
        }
      };
    },
    initChart() {
      var mixLineBar = echarts.init(document.getElementById("chart2"));
      const option = {
        // title: {
        //   text: "Google Trends",
        //   link: "http://www.google.com/trends/hottrends"
        // },
        tooltip: {
          show: true
        },

        series: [{
            name: '',
            type: 'wordCloud',
            size: ['100%', '100%'],
            // textRotation : [0, 45, 90, -45],
            textPadding: 0,
            autoSize: {
                enable: true,
                minSize: 12
            },
            data: this.data
        }]
      };
      mixLineBar.setOption(option);
      window.addEventListener("resize", function() {
        mixLineBar.resize();
      });
    }
  },
  mounted() {
    this.initChart();
    this.typeV = this.mapNode.nodeVal.val;
  }
};
</script>

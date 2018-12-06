<template>
  <div id="chart2" style="width:260px;height:180px;"></div>
</template>
<script>
import echarts from "echarts";
import wordcloud from "echarts-wordcloud";
export default {
  name: "chart2",
  props: {},
  data() {
    return {};
  },
  methods: {
    createRandomItemStyle(type) {
      return {
        normal: {    
          color: ['rgb(253, 114, 1)', 'rgb(148, 134, 23)', 'rgb(3, 248, 95)', 'rgb(3, 236, 231)', 'rgb(184, 2, 252)', 'rgb(234, 6, 183)'][type] 
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
            textRotation : [0, 45, 90, -45],
            textPadding: 0,
            autoSize: {
                enable: true,
                minSize: 12,
                maxSize:14
            },
            data: [
                {
                    name: "食物中毒",
                    value: 149,
                    textStyle: this.createRandomItemStyle(0)
                },
                {
                    name: "毒品",
                    value: 218,
                    textStyle: this.createRandomItemStyle(1)
                },
                {
                    name: "雾霾",
                    value: 338,
                    textStyle: this.createRandomItemStyle(2)
                },
                {
                    name: "滥伐林木",
                    value: 205,
                    textStyle: this.createRandomItemStyle(3)
                },
                {
                    name: "违建",
                    value: 226,
                    textStyle: this.createRandomItemStyle(4)
                },
                {
                    name: "宰客",
                    value: 144,
                    textStyle: this.createRandomItemStyle(5)
                },
                {
                    name: "农药残留",
                    value: 189,
                    textStyle: this.createRandomItemStyle(0)
                },
                {
                    name: "民间偏方",
                    value: 148,
                    textStyle: this.createRandomItemStyle(1)
                },
                {
                    name: "火灾",
                    value: 211,
                    textStyle: this.createRandomItemStyle(2)
                },
                {
                    name: "偷猎",
                    value: 196,
                    textStyle: this.createRandomItemStyle(3)
                },
                {
                    name: "侵占",
                    value: 84,
                    textStyle: this.createRandomItemStyle(4)
                },
                {
                    name: "骗局",
                    value: 58,
                    textStyle: this.createRandomItemStyle(5)
                },
                {
                    name: "绿色食品",
                    value: 589,
                    textStyle: this.createRandomItemStyle(0)
                },
                {
                    name: "假药",
                    value: 148,
                    textStyle: this.createRandomItemStyle(1)
                },
                {
                    name: "污水",
                    value: 211,
                    textStyle: this.createRandomItemStyle(2)
                },
                {
                    name: "森林大火",
                    value: 96,
                    textStyle: this.createRandomItemStyle(3)
                },
                {
                    name: "城中村",
                    value: 184,
                    textStyle: this.createRandomItemStyle(4)
                },
                {
                    name: "非法集资",
                    value: 458,
                    textStyle: this.createRandomItemStyle(5)
                }
            ]
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
  }
};
</script>

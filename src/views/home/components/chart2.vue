<template>
  <div id="chart2" style="width:230px;height:180px;"></div>
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
    createRandomItemStyle() {
      return {
        normal: {
          
          color:'yellow'
            // "rgb(" +
            // [
            //   Math.round(Math.random() * 160),
            //   Math.round(Math.random() * 160),
            //   Math.round(Math.random() * 160)
            // ].join(",") +
            // ")"
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
       
        series: [
          {
            name: "",
            type: "wordCloud",
            size: ["100%", "90%"],
            // textRotation: [0, 45, 90, -45],
            textPadding: 0,
            autoSize: {
              enable: true,
              minSize: 14
            },
            data: [
              {
                name: "违法开采",
                value: 10000,
                textStyle: {
                  normal: {
                    color: "yellow"
                  }
                }
              },
              {
                name: "违章建筑",
                value: 6181,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "垃圾焚烧",
                value: 4386,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "非洲猪瘟",
                value: 4055,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "违法开采",
                value: 6181,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "烂尾楼",
                value: 4386,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "污水排放",
                value: 4055,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "雾霾",
                value: 4055,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "违禁药品",
                value: 6181,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "环境污染",
                value: 4386,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "黑中介",
                value: 4055,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "暴力执法",
                value: 5219,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "雪崩",
                value: 3847,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "套路租房",
                value: 2038,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "美容贷",
                value: 2038,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "套牌",
                value: 2038,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "超速",
                value: 2038,
                textStyle: this.createRandomItemStyle()
              }
            ]
          }
        ]
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

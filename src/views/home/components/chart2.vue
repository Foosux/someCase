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

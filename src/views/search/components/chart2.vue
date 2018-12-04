<template>
  <div
    id="chart2"
    style="width:380px;height:300px;"
  ></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "chart2",
  props: {},
  data() {
    return {};
  },
  methods: {
    initChart() {
      var mixLineBar = echarts.init(document.getElementById("chart2"));
      const option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        textStyle: {
          color: "rgba(255, 255, 255, 0.3)"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            data: [
              { value: 400, name: "微信" },
              { value: 335, name: "微博" },
              { value: 310, name: "网页" },
              { value: 210, name: "报刊" },
              { value: 150, name: "客户端" },
              { value: 80, name: "论坛" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            label: {
              normal: {
                color: "#333"
                // formatter: '{b}:{c}/{d}%'
              }
            }
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

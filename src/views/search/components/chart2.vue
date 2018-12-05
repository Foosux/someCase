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
              { value: 103, name: "金碧社区" },
              { value: 42, name: "彩龙社区" },
              { value: 102, name: "滇族部落" },
              { value: 55, name: "大观网昆明" },
              { value: 13, name: "我爱昆明" },
              { value: 65, name: "新昆明" },
              { value: 32, name: "宝善街" },
              { value: 10, name: "昆明妈妈网" },
              { value: 92, name: "云岭清风" }
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

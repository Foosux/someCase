<template>
  <div
    id="chart3"
    style="width:266px;height:180px;"
  ></div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "chart3",
  props: {},
  data() {
    return {};
  },
  methods: {
    initChart() {
      var mixLineBar = echarts.init(document.getElementById("chart3"));
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
              { value: 400, name: "中性",itemStyle:{
                  color:'#00b3ff'
              }},
              { value: 335, name: "正面",itemStyle:{
                  color:'#01e452'
              } },
              { value: 310, name: "负面",itemStyle:{
                  color:'#fcdd0c'
              } }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "#fff"
              }
            },
            label: {
              normal: {
                color: "#fff"
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

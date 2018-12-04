<template>
  <div id="chart4" style="width:500px;height:200px;"></div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "chart4",
  props: {},
  data() {
    return {};
  },
  methods: {
    initChart() {
      var mixLineBar = echarts.init(document.getElementById("chart4"));
      const option = {
        // 提示框组件
        tooltip: {
          confine: true,
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#fff"
            }
          }
        },
         textStyle: {
          color: "rgba(255, 255, 255)"
        },
            xAxis: {
                type: 'category',
                data: ['北京', '保定', '廊坊', '邢台', '涿州', '唐山', '张家口', '承德']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 99, 48, 29],
                type: 'bar'
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

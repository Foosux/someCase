<template>
  <div id="chart4" style="width:380px;height:300px;"></div>
  </div>
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
              color: "#999"
            }
          }
        },
            xAxis: {
                type: 'category',
                data: ["昆明市", "五华区", "盘龙区", "嵩明县", "禄劝县"]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70],
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

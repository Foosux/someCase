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
            series: [
              {
                data: [{
                  value : 120,
                  itemStyle:{
                    color: '#c370f3',
                  }
                }, {
                  value : 200,
                  //自定义特殊 itemStyle，仅对该数据项有效
                  itemStyle:{
                    color: '#e5f543',
                  }
                },{
                  value : 150,
                  //自定义特殊 itemStyle，仅对该数据项有效
                  itemStyle:{
                    color: '#63d8f3',
                  }
                },{
                  value : 80,
                  //自定义特殊 itemStyle，仅对该数据项有效
                  itemStyle:{
                    color: '#0b5add',
                  }
                },{
                  value : 70,
                  //自定义特殊 itemStyle，仅对该数据项有效
                  itemStyle:{
                    color: '#f70404',
                  }
                }],
                type: "bar"
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

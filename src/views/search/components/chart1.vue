<template>
  <div
    id="chart1"
    style="width:380px;height:300px;"
  ></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "chart1",
  props: {},
  data() {
    return {};
  },
  methods: {
    initChart() {
      var mixLineBar = echarts.init(document.getElementById("chart1"));
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
          type: "category",
          data: ["金碧", "彩龙", "滇族", "大观网", "昆明"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [{
              value : 9876,
              itemStyle:{
                color: '#fc0404',
              }
            }, {
              value : 7896,
              //自定义特殊 itemStyle，仅对该数据项有效
              itemStyle:{
                color: '#f9d101',
              }
            },{
              value : 5834,
              //自定义特殊 itemStyle，仅对该数据项有效
              itemStyle:{
                color: '#298af7',
              }
            },{
              value : 4135,
              //自定义特殊 itemStyle，仅对该数据项有效
              itemStyle:{
                color: '#71cf7d',
              }
            },{
              value : 3476,
              //自定义特殊 itemStyle，仅对该数据项有效
              itemStyle:{
                color: '#dce404',
              }
            }],
            type: "bar",
            barWidth:'10',
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

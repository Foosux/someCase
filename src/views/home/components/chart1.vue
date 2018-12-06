<template>
  <div
    id="chart1"
    style="width:280px;height:200px;"
  ></div>
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
        // title : {
        //     subtext: '单位:篇'
        // },
       // legend: {
            // data:["新昆明", "彩龙社区", "我爱昆明", "昆明在线"]
        // },
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
          color: "rgba(255, 255, 255)",
          fontSize:10
        },
        xAxis: {
          type: "category",
          data: ["新昆明", "彩龙社区", "我爱昆明","昆明在线","金碧社区"],
          color:"#fff",
          axisTick: {show: false},
        },
        yAxis: {
          name: '单位：篇',
          type: "value",
          splitLine: {
            // show: false
            lineStyle: {
              color: 'rgba(255,255,255, .1)',
            }
          }
        },
        series: [
          {
            data: [120, 110, 98, 87,100],
            type: "bar",
            barWidth:'10',
            itemStyle:{
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'red'},
                            {offset: 0.9, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    )
                },
            }
          },
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

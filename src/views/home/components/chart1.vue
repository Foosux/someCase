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
    createRandomItemStyle(a,b,c) {
      return {
        normal: {  
          color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                  {offset: 0, color: a},
                  {offset: 0.9, color: b},
                  {offset: 1, color: c}
              ]
          )  
        }
      };
    },
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
        },
        yAxis: {
          name: '单位：篇',
          type: "value",
          splitLine: {
            // show: false
            lineStyle: {
              type: 'dashed',
              color: '#FFF',
            }
          },
        },
        series: [
          {
            data: [{
              value: 120,
              itemStyle: this.createRandomItemStyle('#fa0b13', '#b10b13', '#7b0b12')
            },{
              value: 112,
              itemStyle: this.createRandomItemStyle('#fad40a', '#f19b0b', '#e8680c')
            },{
              value: 80,
              itemStyle: this.createRandomItemStyle('#258ff7', '#4770f4', '#6653f1')
            },{
              value: 76,
              itemStyle: this.createRandomItemStyle('#1e9afb', '#0f66e2', '#033fcf')
            },{
              value: 55,
              itemStyle: this.createRandomItemStyle('#89d470', '#42c697', '#0bb0ae')
            }],
            type: "bar",
            barWidth:'10',
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

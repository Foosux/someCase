<template>
  <div id="chart5" style="width:500px;height:200px;"></div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "chart5",
  props: {},
  data() {
    return {};
  },
  methods: {
    initChart() {
      var mixLineBar = echarts.init(document.getElementById("chart5"));
    const option = {
    tooltip : {
        trigger: 'axis'
    },
     textStyle: {
          color: "rgba(255, 255, 255)"
        },
    legend: {
        textStyle:{
            color:'#fff'
        },
        data:['中性','正面','负面']
    },
   
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['00:00','04:00','08:00','12:00','16:00','20:00','24:00']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'中性',
            type:'line',
            stack: '总量',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#43a2e5'
                    }, {
                        offset: 1,
                        color: '#ffe'
                    }])
                }
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[120, 132, 369, 389, 229, 230, 210]
        },
        {
            name:'正面',
            type:'line',
            stack: '总量',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#0f807b'
                    }, {
                        offset: 1,
                        color: '#ffe'
                    }])
                }
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[220, 182, 330, 310, 290, 330, 310]
        },
        {
            name:'负面',
            type:'line',
            stack: '总量',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#77b161'
                    }, {
                        offset: 1,
                        color: '#ffe'
                    }])
                }
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[150, 232, 410, 390, 190, 330, 410]
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

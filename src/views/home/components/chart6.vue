<template>
  <div id="chart6" style="width:500px;height:200px;"></div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "chart6",
  props: {},
  data() {
    return {};
  },
  methods: {
    initChart() {
      var mixLineBar = echarts.init(document.getElementById("chart6"));
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
        data:['非洲猪瘟','滥伐林木','违禁药品','烂尾']
    },
    // toolbox: {
    //     show : true,
    //     feature : {
    //         mark : {show: true},
    //         dataView : {show: true, readOnly: false},
    //         magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
    //         restore : {show: true},
    //         saveAsImage : {show: true}
    //     }
    // },
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
            name:'非洲猪瘟',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle:{
                color:'#ff6f18'
            }
        },
        {
            name:'滥伐林木',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310],
            itemStyle:{
                color:'#dd81de'
            }
        },
        {
            name:'黑中介',
            type:'line',
            stack: '总量',
            data:[320, 319, 331, 318, 352, 330, 310],
            itemStyle:{
                color:'#00ffce'
            }
        },
        {
            name:'违禁药品',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410],
            itemStyle:{
                color:'#00cfff'
            }
        },
        {
            name:'烂尾',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320],
            itemStyle:{
                color:'#fff000'
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

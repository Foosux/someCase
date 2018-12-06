<template>
  <div id="chartMap" style="width:700px;height:600px;"></div>
</template>
<script>
import echarts from "echarts";
import geoJson from "@/libs/530100.json";
export default {
  name: "chartMap",
  data() {
    return {
      typeV: 1,
      brightData: [
        { name: "寻甸回族彝族自治县", value: 13289 },
        { name: "晋宁线", value: 8773 },
        { name: "西山区", value: 7876 },
        { name: "呈贡区", value: 18772 },
        { name: "东川区", value: 6553 }
      ],
      bright_pos: {
        '寻甸回族彝族自治县': [350, 280],
        '晋宁线': [290, 480],
        '西山区': [270, 370],
        '呈贡区': [340, 430],
        '东川区': [360, 120]
      }
    };
  },
  props: {
    mapNode: {
      type: Object
      // default:1,
    }
  },
  methods: {
    createRandomItemStyle() {
      let a =
        "rgb(" +
        [
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160)
        ].join(",") +
        ")";
      return a;
    },
    convertData(data, geoCoordMap) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
          });
        }
      }
      return res;
    },
    initChart() {
      var mixLineBar = echarts.init(document.getElementById("chartMap"));
      let arr = [];
      const _this = this;
      for (let index = 0; index < 100; index++) {
        arr.push(this.createRandomItemStyle());
      }
      echarts.registerMap("kunming", geoJson);
      //console.log(geoJson);

      function randomData() {
        return Math.round(Math.random() * 1000);
      }
      var data = this.brightData;
      var geoCoordMap = this.bright_pos;
      var geoCoord = {};
      geoJson.features.map(item => {
        geoCoord[item.properties.name] = item.geometry.coordinates[0][0][0];
      });
      //亮点数据
      var convertData = function(data) {
        // console.log(111, data, _this.mapNode.nodeVal.val)
        var res = [];
        let opts = {
          0: [{
            name: '违法出让国有土地',
            num: 224
          },{
            name: '损害生态环境',
            num: 178
          },{
            name: '损害消费者权益',
            num: 136
          },{
            name: '危害药品安全',
            num: 135
          },{
            name: '损害自然环境',
            num: 123
          },{
            name: '火灾',
            num: 120
          },{
            name: '危害食品安全',
            num: 112
          }],
          1:[{
            name: '危害食品安全',
            num: 135
          },{
            name: '假冒',
            num: 44
          },{
            name: '绿色食品',
            num: 41
          },{
            name: '食品安全',
            num: 20
          },{
            name: '卫生',
            num: 10
          },{
            name: '食物中毒',
            num: 7
          },{
            name: '外卖偷吃',
            num: 2
          }],
          2: [{
            name: '药品安全',
            num: 135
          },{
            name: '假冒',
            num: 44
          },{
            name: '高价',
            num: 20
          },{
            name: '土方子',
            num: 5
          },{
            name: '微量元素超标',
            num: 4
          },{
            name: '公共卫生事件',
            num: 1
          },{
            name: '违禁药物',
            num: 1
          }],
          3: [{
            name: '火灾',
            num: 120
          },{
            name: '污水',
            num: 64
          },{
            name: '废水',
            num: 23
          },{
            name: '自然资源',
            num: 20
          },{
            name: '水污染',
            num: 12
          },{
            name: '土壤污染',
            num: 2
          },{
            name: '粉尘',
            num: 1
          }],
          4: [{
            name: '火灾',
            num: 120
          },{
            name: '污水',
            num: 64
          },{
            name: '雾霾',
            num: 39
          },{
            name: '损害生态',
            num: 35
          },{
            name: '废水',
            num: 23
          },{
            name: '农药污染',
            num:11
          },{
            name: '矿山',
            num: 7
          }],
          5: [{
            name: '侵占',
            num: 59
          },{
            name: '拆迁',
            num: 44
          },{
            name: '城中村',
            num: 36
          },{
            name: '违建',
            num: 35
          },{
            name: '国有土地使用权',
            num: 20
          },{
            name: '占用',
            num:19
          },{
            name: '违法出让国有土地使用权',
            num: 6
          }],
          6: [{
            name: '假冒',
            num: 44
          },{
            name: '欺诈',
            num: 43
          },{
            name: '高价',
            num: 20
          },{
            name: '维权',
            num: 20
          },{
            name: '诈骗',
            num: 20
          },{
            name: '宰客',
            num:9
          },{
            name: '骗局',
            num: 4
          }]

        }

        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
              itemStyle: {
                normal: {
                  color: ["#FFF","#fd7201","#948617","#03f85f","#03ece7","#b802fc","#ea06b7"][_this.mapNode.nodeVal.val],
                }
              },
              tag: opts[_this.mapNode.nodeVal.val]
            });
          }
        }

        return res;
      };

      const option = {
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            dataView: { readOnly: false }
          }
        },
        tooltip: {
          trigger: "item"
        },
        geo: {
          map: "knnming",
          label: {
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              color: "#fff",
              areaColor: "rgba(0,0,0,.1)",
              // areaColor: 'red',
              borderColor: "#fff"
            },
            emphasis: {
              areaColor: "#fff"
            }
          }
        },
        geoCoord: geoCoord,
        series: [
          {
            name: "热度",
            type: "map",
            silent: true,
            mapType: "kunming", // 自定义扩展图表类型
            label: {
              show: false
            },
            itemStyle: {
              normal: {
                label: { show: true, fontSize: 10, color: "#fff" },
                areaColor: "rgba(0,0,0,.1)",
                borderColor: "#00d5ff",
                borderWidth: 1.5
              },
              emphasis: {
                areaColor: "rgba(255,255,255,.1)",
                label: { show: true, color: "#fff" },
                itemStyle: {
                  backgroundColor: "blue",
                  areaColor: "#fff",
                  color: "green",
                  opacity: 0.2
                }
              }
            },
            markPoint: {
              symbol: "circle",
              effectType: "ripple",
              //动态标记
              symbolSize: 12,
              itemStyle: {
                normal: {
                  shadowBlur: 2,
                  shadowColor: "rgba(37, 140, 249, 0.8)"
                }
              },
              data: [
              //   {
              //     name: "石林彝族自治区",
              //     x: 400,
              //     y: 500,
              //     itemStyle: {
              //       normal: {
              //         color: "red",
              //         opacity: 1
              //       }
              //     }
              //   },
              //   {
              //     name: "晋宁县",
              //     x: 320,
              //     y: 400,
              //     itemStyle: {
              //       normal: {
              //         color: "green",
              //         opacity: 0.6
              //       }
              //     }
              //   },
              //   {
              //     name: "东川区",
              //     x: 350,
              //     y: 300,
              //     itemStyle: {
              //       normal: {
              //         color: "yellow",
              //         opacity: 0.6
              //       }
              //     }
              //   }
              ]
            }
          },
          {
            name: "热度",
            type: "effectScatter",
            coordinateSystem: "geo",
            silent: true,
            data: convertData(
              data
                .sort(function(a, b) {
                  return b.value - a.value;
                })
                .slice(0, 6)
            ),
            symbolSize: 10,
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                show: true,
                fontSize: 14,
                textBorderColor: "#FFF",
                position: "right",
                offset: [4,0],
                backgroundColor: "rgba(0,0,0, .6)",
                padding: 4,
                formatter: (obj)=> {
                  // console.log(6666666, obj)
                  let arr = obj.data.tag.sort(function() {
                      return .5 - Math.random();
                  })
                  return `${obj.name}-${arr[obj.dataIndex].name}（${arr[obj.dataIndex].num}）`
                },
              }
            },
            zlevel: 1
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
    this.typeV = this.mapNode.nodeVal.val;
  },
  watch: {
    mapNode(cur, old) {
      switch (cur.nodeVal.val) {
        case 0:
          this.brightData = [
            { name: "寻甸回族彝族自治县", value: 13289 },
            { name: "晋宁线", value: 8773 },
            { name: "西山区", value: 7876 },
            { name: "呈贡区", value: 18772 },
            { name: "东川区", value: 6553 },
          ];
          this.bright_pos = {
            '寻甸回族彝族自治县': [350, 280],
            '晋宁线': [290, 480],
            '西山区': [270, 370],
            '呈贡区': [340, 430],
            '东川区': [360, 120],
          };
          this.initChart();
          break;
        case 1:
          this.brightData = [
            { name: "晋宁线", value: 8773 },
            { name: "西山区", value: 7876 },
            { name: "呈贡区", value: 18772 },
            { name: "东川区", value: 6553 },
          ];
          this.bright_pos = {
            '晋宁线': [290, 480],
            '西山区': [270, 370],
            '呈贡区': [340, 430],
            '东川区': [360, 120],
          };
          this.initChart();
          break;
        case 2:
           this.brightData = [
            { name: "晋宁线", value: 8773 },
            { name: "西山区", value: 7876 },
            { name: "东川区", value: 6553 }
          ];
          this.bright_pos = {
            '晋宁线': [290, 480],
            '西山区': [270, 370],
            '东川区': [360, 120]
          };
          this.initChart();
          break;
        case 3:
         this.brightData = [
            { name: "寻甸回族彝族自治县", value: 13289 },
            { name: "西山区", value: 7876 },
            { name: "呈贡区", value: 18772 },
          ];
          this.bright_pos = {
            '寻甸回族彝族自治县': [350, 280],
            '晋宁线': [290, 480],
            '呈贡区': [340, 430],
          };
          this.initChart();
          break;
        case 4:
         this.brightData = [
            { name: "寻甸回族彝族自治县", value: 13289 },
            { name: "晋宁线", value: 8773 },
            { name: "呈贡区", value: 18772 },
            { name: "东川区", value: 6553 }
          ];
          this.bright_pos = {
            '寻甸回族彝族自治县': [350, 280],
            '晋宁线': [290, 480],
            '呈贡区': [340, 430],
            '东川区': [360, 120]
          };
          this.initChart();
          break;
        case 5:
          this.brightData = [
            { name: "晋宁线", value: 8773 },
            { name: "西山区", value: 7876 },
            { name: "呈贡区", value: 18772 },
            { name: "东川区", value: 6553 }
          ];
          this.bright_pos = {
            '晋宁线': [290, 480],
            '西山区': [270, 370],
            '呈贡区': [340, 430],
            '东川区': [360, 120]
          };
          this.initChart();
          break;
        case 6:
          this.brightData = [
            { name: "寻甸回族彝族自治县", value: 13289 },
            { name: "晋宁线", value: 8773 },
          ];
          this.bright_pos = {
            '寻甸回族彝族自治县': [350, 280],
            '晋宁线': [290, 480],
          };
          this.initChart();
          break;
        case 7:
          this.brightData = [
            { name: "寻甸回族彝族自治县", value: 13289 },
            { name: "晋宁线", value: 8773 },
            { name: "西山区", value: 7876 },
            { name: "呈贡区", value: 18772 },
            { name: "东川区", value: 6553 }
          ];
          this.bright_pos = {
            '寻甸回族彝族自治县': [350, 280],
            '晋宁线': [290, 480],
            '西山区': [270, 370],
            '呈贡区': [340, 430],
            '东川区': [360, 120]
          };
          this.initChart();
          break;
        default:
          break;
      }
    }
  }
};
</script>

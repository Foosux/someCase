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
      typeV: 2,
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
            value: geoCoord.concat(data[i].value)
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
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
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
            mapType: "kunming", // 自定义扩展图表类型
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
                {
                  name: "9877",
                  x: 400,
                  y: 500,
                  itemStyle: {
                    normal: {
                      color: "red",
                      opacity: 1
                    }
                  }
                },
                {
                  name: "晋宁县",
                  x: 320,
                  y: 400,
                  itemStyle: {
                    normal: {
                      color: "green",
                      opacity: 0.6
                    }
                  }
                },
                {
                  name: "东川区",
                  x: 350,
                  y: 300,
                  itemStyle: {
                    normal: {
                      color: "yellow",
                      opacity: 0.6
                    }
                  }
                }
              ]
            }
          },
          {
            name: "热度",
            type: "effectScatter",
            coordinateSystem: "geo",
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
                formatter: "{b}",
                position: "right",
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#f4e925",
                shadowBlur: 10,
                shadowColor: "#333"
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
        case 1:
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

$(function(){
    function rednerchart(){
        var html1=` <div class="topchart" id="lefttop"></div>
        <div class="bottomchart" id="leftbottom"></div>`
        var html2=`<div class="topchart" id="righttop"></div>
        <div class="bottomchart" id="rightbottom"></div>
        `
        $(".leftchart").empty();
        $(".rightchart").empty();
        $(".leftchart").html(html1)
        $(".rightchart").html(html2)
        lefttop()
        leftbottom()
        righttop()
        leftbottom()
    }

    //左上
    function lefttop(){
        var myChart = ec.init(document.getElementById("lefttop"));
        var option = {
            backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                top: '15%',
                right: '3%',
                left: '5%',
                bottom: '12%'
            },
            xAxis: [{
                type: 'category',
                data: ['工作票', '操作票', '抢修', '用电调查', '设备巡视', '现场勘查', '到岗到位'],
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.12)'
                    }
                },
                axisLabel: {
                    margin: 10,
                    color: '#e2e9ff',
                    textStyle: {
                        fontSize: 14
                    },
                },
            }],
            yAxis: [{
                axisLabel: {
                    formatter: '{value}',
                    color: '#e2e9ff',
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.12)'
                    }
                }
            }],
            series: [{
                type: 'bar',
                data: [300, 450, 770, 203, 255, 188, 156],
                barWidth: '20px',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,244,255,1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(0,77,167,1)' // 100% 处的颜色
                        }], false),
                        barBorderRadius: [30, 30, 30, 30],
                        shadowColor: 'rgba(0,160,221,1)',
                        shadowBlur: 4,
                    }
                },
                label: {
                    normal: {
                        show: true,
                        lineHeight: 30,
                        width: 80,
                        height: 30,
                        backgroundColor: 'rgba(0,160,221,0.1)',
                        borderRadius: 200,
                        position: ['-8', '-60'],
                        distance: 1,
                        formatter: [
                            '    {d|●}',
                            ' {a|{c}}     \n',
                            '    {b|}'
                        ].join(','),
                        rich: {
                            d: {
                                color: '#3CDDCF',
                            },
                            a: {
                                color: '#fff',
                                align: 'center',
                            },
                            b: {
                                width: 1,
                                height: 30,
                                borderWidth: 1,
                                borderColor: '#234e6c',
                                align: 'left'
                            },
                        }
                    }
                }
            }]
        };
        myChart.setOption(option)
    }
    //左下
    function leftbottom(){
        var myChart = ec.init(document.getElementById("leftbottom"));
        var option = {
            title: {
                   text: '2019年销售水量和主营业务收入对比',
                   textStyle: {
                        align: 'center',
                       color: '#fff',
                       fontSize: 20,
                   },
                   top: '3%',
                   left: '10%',
               },
           backgroundColor: '#0f375f',
           grid: {
               top: "25%",
               bottom: "10%"
           },
           tooltip: {
               trigger: "axis",
               axisPointer: {
                   type: "shadow",
                   label: {
                       show: true
                   }
               }
           },
           legend: {
               data: ["销售水量", "主营业务"],
               top: "15%",
               textStyle: {
                   color: "#ffffff"
               }
           },
           xAxis: {
               data: [
                   "当年完成水量",
                   "去年同期水量",
                   "滚动目标值水量",
                   "全年目标值水量",
                   "当年完成金额",
                   "去年同期金额",
                   "滚动目标金额",
                   "全年目标值",
                   
               ],
               axisLine: {
                   show: true //隐藏X轴轴线
               },
               axisTick: {
                   show: true //隐藏X轴刻度
               },
               axisLabel: {
                   show: true,
                   textStyle: {
                       color: "#ebf8ac" //X轴文字颜色
                   }
               },
                axisLine: {
                           lineStyle: {
                               color: '#01FCE3'
                               }
                       },
           },
           yAxis: [{
                   type: "value",
                   name: "亿元",
                   nameTextStyle: {
                       color: "#ebf8ac"
                   },
                   splitLine: {
                       show: false
                   },
                   splitLine: {
                       show: false
                   },
                   axisTick: {
                       show: true
                   },
                   axisLine: {
                       show: true
                   },
                   axisLabel: {
                       show: true,
                       textStyle: {
                           color: "#ebf8ac"
                       }
                   },
                    axisLine: {
                               lineStyle: {
                                   color: '#FFFFFF'
                                   }
                           },
               },
               {
                   type: "value",
                   name: "同比",
                   nameTextStyle: {
                       color: "#ebf8ac"
                   },
                   position: "right",
                   splitLine: {
                       show: false
                   },
                   splitLine: {
                       show: false
                   },
                   axisTick: {
                       show: false
                   },
                   axisLine: {
                       show: false
                   },
                   axisLabel: {
                       show: true,
                       formatter: "{value} %", //右侧Y轴文字显示
                       textStyle: {
                           color: "#ebf8ac"
                       }
                   }
               },
               {
                   type: "value",
                   gridIndex: 0,
                   min: 50,
                   max: 100,
                   splitNumber: 8,
                   splitLine: {
                       show: false
                   },
                   axisLine: {
                       show: false
                   },
                   axisTick: {
                       show: false
                   },
                   axisLabel: {
                       show: false
                   },
                   splitArea: {
                       show: true,
                       areaStyle: {
                           color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                       }
                   }
               }
           ],
           series: [{
                   name: "销售水量",
                   type: "line",
                   yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                   smooth: true, //平滑曲线显示
                   showAllSymbol: true, //显示所有图形。
                   symbol: "circle", //标记的图形为实心圆
                   symbolSize: 10, //标记的大小
                   itemStyle: {
                       //折线拐点标志的样式
                       color: "#058cff"
                   },
                   lineStyle: {
                       color: "#058cff"
                   },
                   areaStyle:{
                       color: "rgba(5,140,255, 0.2)"
                   },
                   data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
               },
               {
                   name: "主营业务",
                   type: "bar",
                   barWidth: 15,
                   itemStyle: {
                       normal: {
                           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                   offset: 0,
                                   color: "#00FFE3"
                               },
                               {
                                   offset: 1,
                                   color: "#4693EC"
                               }
                           ])
                       }
                   },
                   data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
               }
           ]
       };
        myChart.setOption(option)
    }
    //右上
    function righttop(){
        var myChart = ec.init(document.getElementById("righttop"));
        var fontColor = '#30eee9';
        option ={
                backgroundColor:'#11183c',
                grid: {
                    left: '5%',
                    right: '10%',
                    top:'20%',
                    bottom: '15%',
                    containLabel: true
                },
                tooltip : {
                    show: true,
                    trigger: 'item'
                },
                legend: {
                    show:true,
                    x:'center',
                    y:'35',
                    icon: 'stack',
                    itemWidth:10,
                    itemHeight:10,
                    textStyle:{
                        color:'#1bb4f6'
                    },
                    data:['已采纳','已发布','浏览量']
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        axisLabel:{
                            color: fontColor
                        },
                        axisLine:{
                               show:true,
                               lineStyle:{
                                color:'#397cbc'
                            }
                        },
                        axisTick:{
                            show:false,
                        },  
                        splitLine:{
                            show:true,
                            lineStyle:{
                                color:'#195384'
                            }
                        },
                        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        name : '信息量',
                        min:0,
                        max:1000,
                        axisLabel : {
                            formatter: '{value}',
                            textStyle:{
                                color:'#2ad1d2'
                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#27b4c2'
                            }
                        },
                        axisTick:{
                            show:false,
                        },
                        splitLine:{
                            show:true,
                            lineStyle:{
                                color:'#11366e'
                            }
                        }
                    },
                    {
                        type : 'value',
                        name : '浏览量',
                        min:0,
                        max:1000,
                        axisLabel : {
                            formatter: '{value} 人',
                            textStyle:{
                                color:'#186afe'
                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#186afe'
                            }
                        },
                        axisTick:{
                            show:false,
                        },
                        splitLine:{
                            show:true,
                            lineStyle:{
                                color:'#11366e'
                            }
                        }
                    }
                ],
                series : [
                    {
                        name:'已采纳',
                        type:'line',
                        stack: '总量',
                        symbol:'circle',
                        symbolSize: 8,
                        itemStyle: {
                            normal: {
                                color:'#0092f6',
                                lineStyle: {
                                    color: "#0092f6",
                                    width:1
                                },
                                areaStyle: { 
                                    //color: '#94C9EC'
                                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                        offset: 0,
                                        color: 'rgba(7,44,90,0.3)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(0,146,246,0.9)'
                                    }]),
                                }
                            }
                        },
                        markPoint:{
                            itemStyle:{
                                normal:{
                                    color:'red'
                                }
                            }
                        },
                        data:[120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
                    },
                    {
                        name:'已发布',
                        type:'line',
                        stack: '总量',
                        symbol:'circle',
                        symbolSize: 8,
                        
                        itemStyle: {
                            normal: {
                                color:'#00d4c7',
                                lineStyle: {
                                    color: "#00d4c7",
                                    width:1
                                },
                                areaStyle: { 
                                    //color: '#94C9EC'
                                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                        offset: 0,
                                        color: 'rgba(7,44,90,0.3)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(0,212,199,0.9)'
                                    }]),
                                }
                            }
                        },
                        data:[220, 182, 191, 234, 290, 330, 310,201, 154, 190, 330, 410]
                    },
                    {
                        name:'浏览量',
                        type:'line',
                        stack: '总量',
                        symbol:'circle',
                        symbolSize: 8,
                        itemStyle: {
                            normal: {
                                color: '#aecb56',
                                lineStyle: {
                                    color: "#aecb56",
                                    width:1
                                },
                                areaStyle: { 
                                    //color: '#94C9EC'
                                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                        offset: 0,
                                        color: 'rgba(7,44,90,0.3)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(114,144,89,0.9)'
                                    }]),
                                }
                            }
                        },
                        data:[150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190]
                    }
                ]
            };
        myChart.setOption(option)
    }
    //右下
    function leftbottom(){
        var myChart = ec.init(document.getElementById("rightbottom"));
        var option = {
            "backgroundColor": "#031739",
            "tooltip": {
                "show": true,
                "textStyle": {
                    "fontSize": "16",
                    "color": "#3c3c3c"
                },
                "backgroundColor": "#fff",
                "borderColor": "#ddd",
                "borderWidth": 1
            },
            "series": [{
                "name": "积分排行",
                "type": "wordCloud",
                "gridSize": 20,
                "sizeRange": [12, 50],
                "rotationRange": [0, 0],
                "shape": "circle",
                "autoSize": {
                    "enable": true,
                    "minSize": 18
                },
                "data": [{
                    "name": "供应商01",
                    "value": 200,
                    "textStyle": {
                        "normal": {
                            "color": "#ffe400"
                        }
                    }
                }, {
                    "name": "供应商02",
                    "value": 181,
                    "textStyle": {
                        "normal": {
                            "color": "#29a8ed"
                        }
                    }
                }, {
                    "name": "供应商03",
                    "value": 386,
                    "textStyle": {
                        "normal": {
                            "color": "#634fd4"
                        }
                    }
                }, {
                    "name": "供应商04",
                    "value": 155,
                    "textStyle": {
                        "normal": {
                            "color": "#ffe400"
                        }
                    }
                }, {
                    "name": "供应商05",
                    "value": 467,
                    "textStyle": {
                        "normal": {
                            "color": "#634fd4"
                        }
                    }
                }, {
                    "name": "供应商06",
                    "value": 244,
                    "textStyle": {
                        "normal": {
                            "color": "#634fd4"
                        }
                    }
                }, {
                    "name": "供应商07",
                    "value": 898,
                    "textStyle": {
                        "normal": {
                            "color": "#e75a46"
                        }
                    }
                }, {
                    "name": "供应商08",
                    "value": 484,
                    "textStyle": {
                        "normal": {
                            "color": "#e75a46"
                        }
                    }
                }, {
                    "name": "供应商09",
                    "value": 112,
                    "textStyle": {
                        "normal": {
                            "color": "#29a8ed"
                        }
                    }
                }, {
                    "name": "供应商10",
                    "value": 465,
                    "textStyle": {
                        "normal": {
                            "color": "#ffe400"
                        }
                    }
                }, {
                    "name": "供应商11",
                    "value": 447,
                    "textStyle": {
                        "normal": {
                            "color": "#29a8ed"
                        }
                    }
                }, {
                    "name": "供应商12",
                    "value": 582,
                    "textStyle": {
                        "normal": {
                            "color": "#29a8ed"
                        }
                    }
                }, {
                    "name": "供应商13",
                    "value": 555,
                    "textStyle": {
                        "normal": {
                            "color": "#634fd4"
                        }
                    }
                }, {
                    "name": "供应商14",
                    "value": 550,
                    "textStyle": {
                        "normal": {
                            "color": "#29a8ed"
                        }
                    }
                }, {
                    "name": "供应商15",
                    "value": 462,
                    "textStyle": {
                        "normal": {
                            "color": "#29a8ed"
                        }
                    }
                }, {
                    "name": "供应商16",
                    "value": 366,
                    "textStyle": {
                        "normal": {
                            "color": "#29a8ed"
                        }
                    }
                }, {
                    "name": "供应商17",
                    "value": 360,
                    "textStyle": {
                        "normal": {
                            "color": "#634fd4"
                        }
                    }
                }, {
                    "name": "供应商18",
                    "value": 282,
                    "textStyle": {
                        "normal": {
                            "color": "#e75a46"
                        }
                    }
                }, {
                    "name": "供应商19",
                    "value": 273,
                    "textStyle": {
                        "normal": {
                            "color": "#29a8ed"
                        }
                    }
                }, {
                    "name": "供应商20",
                    "value": 265,
                    "textStyle": {
                        "normal": {
                            "color": "#ffe400"
                        }
                    }
                }, {
                    "name": "供应商21",
                    "value": 265,
                    "textStyle": {
                        "normal": {
                            "color": "#634fd4"
                        }
                    }
                }, {
                    "name": "供应商22",
                    "value": 265,
                    "textStyle": {
                        "normal": {
                            "color": "#634fd4"
                        }
                    }
                }]
            }]
        }
        myChart.setOption(option)
    }
})
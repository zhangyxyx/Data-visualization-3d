$(function () {
    var h = $(window).height()
    $(".echartse").css("height", h - 100)
    echartsleft1()

    echartsright1()
    echartsbottom1()

})
function echartsleft1() {
    var dataArr = 44;
    var colorSet = {
        color: '#468EFD'
    };
    var option = {
        tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
        },
        grid: {
            left: '10%',
            right: '10%',
            bottom: '10%',
            top: '1%',
            //	padding:'0 0 10 0',
            containLabel: true,
        },
        series: [{
            name: "内部进度条",
            type: "gauge",
            // center: ['20%', '50%'],
            radius: '40%',

            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [dataArr / 100, colorSet.color],
                        [1, "#111F42"]
                    ],
                    width: 8
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                formatter: function (value) {
                    if (value !== 0) {
                        var num = Math.round(value);
                        return parseInt(num).toFixed(0) + "%";
                    } else {
                        return 0;
                    }
                },
                offsetCenter: [0, 82],
                textStyle: {
                    padding: [0, 0, 0, 0],
                    fontSize: 18,
                    fontWeight: '700',
                    color: colorSet.color
                }
            },
            title: { //标题
                show: true,
                offsetCenter: [0, 46], // x, y，单位px
                textStyle: {
                    color: "#fff",
                    fontSize: 14, //表盘上的标题文字大小
                    fontWeight: 400,
                    fontFamily: 'PingFangSC'
                }
            },
            data: [{
                name: "title",
                value: dataArr,
            }],
            pointer: {
                show: true,
                length: '75%',
                radius: '20%',
                width: 10, //指针粗细
            },
            animationDuration: 4000,
        },
        {
            name: '外部刻度',
            type: 'gauge',
            //  center: ['20%', '50%'],
            radius: '50%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, 'rgba(0,0,0,0)']
                    ]
                }
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: '#4d5bd1',
                distance: 25,
                formatter: function (v) {
                    switch (v + '') {
                        case '0':
                            return '0';
                        case '10':
                            return '10';
                        case '20':
                            return '20';
                        case '30':
                            return '30';
                        case '40':
                            return '40';
                        case '50':
                            return '50';
                        case '60':
                            return '60';
                        case '70':
                            return '70';
                        case '80':
                            return '80';
                        case '90':
                            return '90';
                        case '100':
                            return '100';
                    }
                }
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 7,
                lineStyle: {
                    color: colorSet.color, //用颜色渐变函数不起作用
                    width: 1,
                },
                length: -8
            }, //刻度样式
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: colorSet.color, //用颜色渐变函数不起作用
                }
            }, //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        ]
    };
    var myecharts = echarts.init(document.getElementById('left1'))
    myecharts.setOption(option)
}

function echartsright1() {
    var myecharts = echarts.init(document.getElementById('right1'))
    var dataArr = 44;
    var colorSet = {
        color: '#468EFD'
    };
    var option = {
        tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
        },
        grid: {
            left: '10%',
            right: '10%',
            bottom: '10%',
            top: '10%',
            //	padding:'0 0 10 0',
            containLabel: true,
        },
        series: [{
            name: "内部进度条",
            type: "gauge",
            // center: ['20%', '50%'],
            radius: '40%',

            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [dataArr / 100, colorSet.color],
                        [1, "#111F42"]
                    ],
                    width: 8
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                formatter: function (value) {
                    if (value !== 0) {
                        var num = Math.round(value);
                        return parseInt(num).toFixed(0) + "%";
                    } else {
                        return 0;
                    }
                },
                offsetCenter: [0, 82],
                textStyle: {
                    padding: [0, 0, 0, 0],
                    fontSize: 18,
                    fontWeight: '700',
                    color: colorSet.color
                }
            },
            title: { //标题
                show: true,
                offsetCenter: [0, 46], // x, y，单位px
                textStyle: {
                    color: "#fff",
                    fontSize: 14, //表盘上的标题文字大小
                    fontWeight: 400,
                    fontFamily: 'PingFangSC'
                }
            },
            data: [{
                name: "title",
                value: dataArr,
            }],
            pointer: {
                show: true,
                length: '75%',
                radius: '20%',
                width: 10, //指针粗细
            },
            animationDuration: 4000,
        },
        {
            name: '外部刻度',
            type: 'gauge',
            //  center: ['20%', '50%'],
            radius: '50%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, 'rgba(0,0,0,0)']
                    ]
                }
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: '#4d5bd1',
                distance: 25,
                formatter: function (v) {
                    switch (v + '') {
                        case '0':
                            return '0';
                        case '10':
                            return '10';
                        case '20':
                            return '20';
                        case '30':
                            return '30';
                        case '40':
                            return '40';
                        case '50':
                            return '50';
                        case '60':
                            return '60';
                        case '70':
                            return '70';
                        case '80':
                            return '80';
                        case '90':
                            return '90';
                        case '100':
                            return '100';
                    }
                }
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 7,
                lineStyle: {
                    color: colorSet.color, //用颜色渐变函数不起作用
                    width: 1,
                },
                length: -8
            }, //刻度样式
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: colorSet.color, //用颜色渐变函数不起作用
                }
            }, //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        ]
    };
    myecharts.setOption(option)
}

function echartsbottom1() {
    var myecharts = echarts.init(document.getElementById('bottom1'))
    var option = {
        tooltip: { //提示框组件
            trigger: 'axis',
            formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
            axisPointer: {
                type: 'shadow',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '10%',
            top: '10%',
            //	padding:'0 0 10 0',
            containLabel: true,
        },
        legend: {//图例组件，颜色和名字
            right: '10%',
            top: '30%',
            itemGap: 16,
            itemWidth: 18,
            itemHeight: 10,
            data: [{
                name: '健康度',
                //icon:'image://../wwwroot/js/url2.png', //路径
            },
            {
                name: '可用度',
            }],
            textStyle: {
                color: '#a8aab0',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        xAxis: [
            {
                type: 'category',
                //	boundaryGap: true,//坐标轴两边留白
                data: ['22:18', '22:23', '22:25', '22:28', '22:30', '22:33', '22:35', '22:40', '22:18', '22:23', '22:25', '22:28', '22:30', '22:33', '22:35', '22:40'],
                axisLabel: { //坐标轴刻度标签的相关设置。
                    //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                    //	margin:15,
                    textStyle: {
                        color: '#078ceb',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    },
                    rotate: 50,
                },
                axisTick: {//坐标轴刻度相关设置。
                    show: false,
                },
                axisLine: {//坐标轴轴线相关设置
                    lineStyle: {
                        color: '#fff',
                        opacity: 0.2
                    }
                },
                splitLine: { //坐标轴在 grid 区域中的分隔线。
                    show: false,
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitNumber: 5,
                axisLabel: {
                    textStyle: {
                        color: '#a8aab0',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#fff'],
                        opacity: 0.06
                    }
                }

            }
        ],
        series: [
            {
                name: '健康度',
                type: 'bar',
                data: [10, 15, 30, 45, 55, 60, 62, 80, 80, 62, 60, 55, 45, 30, 15, 10],
                barWidth: 10,
                barGap: 0,//柱间距离
                // label: {//图形上的文本标签
                //     normal: {
                //       show: true,
                //       position: 'top',
                //       textStyle: {
                //           color: '#a8aab0',
                //           fontStyle: 'normal',
                //           fontFamily: '微软雅黑',
                //           fontSize: 12,   
                //       },
                //     },
                // },
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#5768EF'
                        }, {
                            offset: 1,
                            color: '#5768EF'
                        }]),
                        barBorderRadius: 50,
                        borderWidth: 0,
                    }
                },
            },
            {
                name: '可用度',
                type: 'bar',
                data: [8, 5, 25, 30, 35, 55, 62, 78, 65, 55, 60, 45, 42, 15, 12, 5],
                barWidth: 10,
                barGap: 0,//柱间距离
                // label: {//图形上的文本标签
                //     normal: {
                //       show: true,
                //       position: 'top',
                //       textStyle: {
                //           color: '#a8aab0',
                //           fontStyle: 'normal',
                //           fontFamily: '微软雅黑',
                //           fontSize: 12,   
                //       },
                //     },
                // },
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#69CBF2'
                        }, {
                            offset: 1,
                            color: '#69CBF2'
                        }]),
                        barBorderRadius: 50,
                        borderWidth: 0,
                    }
                },
            }
        ]
    };
    myecharts.setOption(option)
}

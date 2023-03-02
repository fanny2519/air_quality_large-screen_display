
var for_ = function(mydata) {
    var arr1 = new Array();
    for(let i =0;i<mydata.length;i++){
//        console.log(i)
        var arr2 = new Array();
        for(let j=0; j < Object.keys(mydata[i]).length; j++){
//            console.log(Object.values(mydata[i])[j])
            arr2.push(Object.values(mydata[i])[j])
        }
//        console.log(arr2);
        arr1.push(arr2);
    }
//    console.log(arr1);
    return arr1;
}

//echart_1北京污染物浓度变化
function echarts_line() {
    $.ajax({
        url:"line",
        success:function (data){
            var chart = echarts.init(document.getElementById('chart_1'));
            var mydata = data;
            var arr = for_(mydata);
            option = {
                animationDuration: 10000,
                title: {
                    x: 'center',
                    textStyle: {
                        fontSize: 22
                    }
                },
                tooltip: {
                    show: true,
                    order: 'valueDesc',
                    trigger: 'axis'
                },
                toolbox: {
                  show: true,
                  right: 18,
                  feature: {
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                  }
                },
                grid: {
                    top: '10%'
                },
                xAxis: {
                    type: 'category',
                    nameLocation: 'middle',
                    axisLine: {
                        lineStyle: {
                            color: "#fff"
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: "#fff"
                        }
                    }
                },
                dataset: {
                    source: arr
                },
                dataZoom: [
                {
                    type: "inside",
                    start: 0,
                    end: 10
                },
                {
                    show: true,
                    height: 10,
                    textStyle: {
                        color: "#fff"
                    }
                }
                ],
                series: [
                {
                    name: '臭氧（O3）空气质量指数',//数据提示窗标题
                    type: 'line',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#60EEFF'
                            }
                        }
                    },
                    showSymbol: false,
                    labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    encode: {
                        x: 0,
                        y: 1
                    },
                    emphasis: {
                        focus: 'self',
                        blurScope: 'coordinateSystem'
                    }
                },
                {
                    name: 'PM10空气质量指数',//数据提示窗标题
                    type: 'line',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#FAEE68'
                            }
                        }
                    },
                    showSymbol: false,
                    labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    encode: {
                        x: 0,
                        y: 2
                    },
                    emphasis: {
                        focus: 'self',
                        blurScope: 'coordinateSystem'
                    }
                },
                {
                    name: '二氧化氮（NO2）空气质量指数',//数据提示窗标题
                    type: 'line',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#EE6771'
                            }
                        }
                    },
                    showSymbol: false,
                    labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    encode: {
                        x: 0,
                        y: 3
                    },
                    emphasis: {
                        focus: 'self',
                        blurScope: 'coordinateSystem'
                    }
                },
                {
                    name: 'PM2.5空气质量指数',//数据提示窗标题
                    type: 'line',
                    showSymbol: false,
                    labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    encode: {
                        x: 0,
                        y: 4
                    },
                    emphasis: {
                        focus: 'self',
                        blurScope: 'coordinateSystem'
                    }
                },
                {
                    name: '二氧化硫（SO2）空气质量指数',//数据提示窗标题
                    type: 'line',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#895BC7'
                            }
                        }
                    },
                    showSymbol: false,
                    labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    encode: {
                        x: 0,
                        y: 5
                    },
                    emphasis: {
                        focus: 'self',
                        blurScope: 'coordinateSystem'
                    }
                },
                {
                    name: 'AQI',//数据提示窗标题
                    type: 'line',
                    showSymbol: false,
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#50A0FF'
                            }
                        }
                    },
                    labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    encode: {
                        x: 0,
                        y: 6
                    },
                    emphasis: {
                        focus: 'self',
                        blurScope: 'coordinateSystem'
                    }
                },
                {
                    name: '一氧化碳（CO）空气质量指数',//数据提示窗标题
                    type: 'line',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                               color: '#0A7566'
                            }
                        }
                    },
                    showSymbol: false,
                    labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    encode: {
                        x: 0,
                        y: 7
                    },
                    emphasis: {
                        focus: 'self',
                        blurScope: 'coordinateSystem'
                    }
                }]
            };
            chart.setOption(option);
            window.addEventListener("resize", function () {
                chart.resize();
            });
        },
        error:function (xhr, type, errorThrown){
            alert("echarts_bar_good ajax error")
        },
        async:false
    })
}

//echart_2武汉空气质量优良比
function echarts_pie() {
	var mychart = echarts.init(document.getElementById("chart_2"));
	var mydata;
	$.ajax({
		url: "pie",
		success: function(data) {
			data2 = data;
			console.log(data2);
			option = {
			    animationDuration: 10000,
				tooltip: {
					trigger: 'item',
					formatter: '{a} <br/>{b} : {c} ({d}%)'
				},
				legend: {
				    top:'10%',
				    orient: 'vertical',
				    left: 'left',
					textStyle: {
					    color:'#fff'
					},
					itemWidth: 15
				},
                toolbox: {
                    show: true,
                    top: '7%',
                    right: 18,
                    feature: {
                      dataView: { show: true, readOnly: false },
                      restore: { show: true },
                      saveAsImage: { show: true }
                    }
                },
				series: [{
					name: '武汉空气质量指数比例',
					type: 'pie',
					radius: ['45%', '78%'],
					center: ['60%', '55%'],
					avoidLabelOverlap: false,
					itemStyle: {
                        color:function(params) {
                           var colorList = ["#ff4c00","#ff7500","#ffc64b","#eaff56","#9b4400","#21a675"];
                           return colorList[params.dataIndex]
                        },
						borderColor: '#fff',
						borderWidth: 2
					},
					label: {
						show: false,
						position: 'center'
					},
					emphasis: {
						label: {
							show: true,
							fontSize:20,
							fontWeight: 'bold'
						}
					},
					labelLine: {
						show: false
					},
					data: data2
				}]
			};
			mychart.setOption(option);
		},
		error: function(xhr, type, errorThrown) {
			alert('echarts_pie ajax error')
		},
		async: true
	});
}

//echart_map全国空气质量预测
function echarts_map() {
    // 基于准备好的dom，初始化echarts实例
    var myChart_01d0ffb710c342059b6fad871d87ff87 = echarts.init(document.getElementById('chart_map'));
    var option_01d0ffb710c342059b6fad871d87ff87;
    $.ajax({
        success: function (data){
            option_01d0ffb710c342059b6fad871d87ff87 = {
                "toolbox": {
                "show": true,
                 "right": 18,
//                "orient": "vertical",
//                "left": "right",
//                "top": "center",
                "feature": {
                    "saveAsImage": { "show": true },
                    "dataView": { "show": true, "readOnly": false },
                    "restore": { "show": true }
                 }
            },
                "_index_flag": 678788,
                "tooltip": {},
                "series":
                {
                    "type": "scatter",
                    "name": "AQI预测",
                    "coordinateSystem": "geo",
                    "symbol": "circle",
                    "symbolSize": 15,
                    "data": [
                        {
                            "name": "\u4e03\u53f0\u6cb3",
                            "value": 69.3525
                        },
                        {
                            "name": "\u4e09\u4e9a",
                            "value": 33.0
                        },
                        {
                            "name": "\u4e09\u660e",
                            "value":47.0
                        },
                        {
                            "name": "\u4e09\u95e8\u5ce1",
                            "value": 85.0
                        },
                        {
                            "name": "\u4e0a\u6d77",
                            "value":65.705
                        },
                        {
                            "name": "\u4e0a\u9976",
                            "value": 61.5
                        },
                        {
                            "name": "\u4e1c\u839e",
                            "value": 54.0
                        },
                        {
                            "name": "\u4e1c\u8425",
                            "value": 92.0
                        },
                        {
                            "name": "\u4e2d\u536b",
                            "value": 74.0
                        },
                        {
                            "name": "\u4e2d\u5c71",
                            "value":49.285
                        },
                        {
                            "name": "\u4e34\u590f\u5dde",
                            "value": 70.5
                        },
                        {
                            "name": "\u4e34\u5b89",
                            "value": 69.0975
                        },
                        {
                            "name": "\u4e34\u6c7e",
                            "value": 94.235
                        },
                        {
                            "name": "\u4e34\u6c82",
                            "value": 99.0
                        },
                        {
                            "name": "\u4e34\u6ca7",
                            "value": 48.24
                        },
                        {
                            "name": "\u4e39\u4e1c",
                            "value": 61.5
                        },
                        {
                            "name": "\u4e3d\u6c34",
                            "value":55.0
                        },
                        {
                            "name": "\u4e3d\u6c5f",
                            "value": 46.0
                        },
                        {
                            "name": "\u4e49\u4e4c",
                            "value": 67.1025
                        },
                        {
                            "name": "\u4e4c\u5170\u5bdf\u5e03",
                            "value": 57.0
                        },
                        {
                            "name": "\u4e4c\u6d77",
                            "value": 82.5
                        },
                        {
                            "name": "\u4e4c\u9c81\u6728\u9f50",
                            "value": 89.555
                        },
                        {
                            "name": "\u4e50\u5c71",
                            "value": 75.0
                        },
                        {
                            "name": "\u4e5d\u6c5f",
                            "value": 68.6025
                        },
                        {
                            "name": "\u4e73\u5c71",
                            "value": 56.47
                        },
                        {
                            "name": "\u4e91\u6d6e",
                            "value": 52.0
                        },
                        {
                            "name": "\u4e94\u5bb6\u6e20",
                            "value": 94.235
                        },
                        {
                            "name": "\u4eb3\u5dde",
                            "value": 81.0
                        },
                        {
                            "name": "\u4f0a\u6625",
                            "value": 48.1075
                        },
                        {
                            "name": "\u4f0a\u7281\u54c8\u8428\u514b\u5dde",
                            "value": 61.5
                        },
                        {
                            "name": "\u4f5b\u5c71",
                            "value": 55.0
                        },
                        {
                            "name": "\u4f73\u6728\u65af",
                            "value": 53.0
                        },
                        {
                            "name": "\u4fdd\u5b9a",
                            "value": 127.675
                        },
                        {
                            "name": "\u4fdd\u5c71",
                            "value": 48.1325
                        },
                        {
                            "name": "\u4fe1\u9633",
                            "value": 74.0
                        },
                        {
                            "name": "\u514b\u5b5c\u52d2\u82cf\u5dde",
                            "value": 112.5
                        },
                        {
                            "name": "\u514b\u62c9\u739b\u4f9d",
                            "value":57.53
                        },
                        {
                            "name": "\u516d\u5b89",
                            "value": 69.0975
                        },
                        {
                            "name": "\u516d\u76d8\u6c34",
                            "value":61.5
                        },
                        {
                            "name": "\u5170\u5dde",
                            "value": 82.5
                        },
                        {
                            "name": "\u5174\u5b89\u76df",
                            "value": 53.0
                        },
                        {
                            "name": "\u5185\u6c5f",
                            "value": 72.0
                        },
                        {
                            "name": "\u51c9\u5c71\u5dde",
                            "value": 51.0
                        },
                        {
                            "name": "\u5305\u5934",
                            "value": 77.825
                        },
                        {
                            "name": "\u5317\u4eac",
                            "value": 94.235
                        },
                        {
                            "name": "\u5317\u6d77",
                            "value": 53.0
                        },
                        {
                            "name": "\u5341\u5830",
                            "value": 68.3475
                        },
                        {
                            "name": "\u5357\u4eac",
                            "value": 74.0
                        },
                        {
                            "name": "\u5357\u5145",
                            "value": 78.0
                        },
                        {
                            "name": "\u5357\u5b81",
                            "value": 61.5
                        },
                        {
                            "name": "\u5357\u5e73",
                            "value": 48.24
                        },
                        {
                            "name": "\u5357\u660c",
                            "value": 61.5
                        },
                        {
                            "name": "\u5357\u901a",
                            "value": 69.5
                        },
                        {
                            "name": "\u5357\u9633",
                            "value": 83.0
                        },
                        {
                            "name": "\u535a\u5dde",
                            "value": 60.5225
                        },
                        {
                            "name": "\u5373\u58a8",
                            "value": 69.3525
                        },
                        {
                            "name": "\u53a6\u95e8",
                            "value": 52.0
                        },
                        {
                            "name": "\u53cc\u9e2d\u5c71",
                            "value": 55.0
                        },
                        {
                            "name": "\u53e5\u5bb9",
                            "value": 72.0
                        },
                        {
                            "name": "\u53f0\u5dde",
                            "value": 64.0
                        },
                        {
                            "name": "\u5408\u80a5",
                            "value":88.0
                        },
                        {
                            "name": "\u5409\u5b89",
                            "value": 66.5
                        },
                        {
                            "name": "\u5409\u6797",
                            "value": 69.5
                        },
                        {
                            "name": "\u5410\u9c81\u756a\u5730\u533a",
                            "value": 125.5625
                        },
                        {
                            "name": "\u5415\u6881",
                            "value": 74.0
                        },
                        {
                            "name": "\u5434\u5fe0",
                            "value": 74.0
                        },
                        {
                            "name": "\u5434\u6c5f",
                            "value": 69.0975
                        },
                        {
                            "name": "\u5468\u53e3",
                            "value": 85.0
                        },
                        {
                            "name": "\u547c\u4f26\u8d1d\u5c14",
                            "value": 53.0
                        },
                        {
                            "name": "\u547c\u548c\u6d69\u7279",
                            "value": 74.0
                        },
                        {
                            "name": "\u548c\u7530\u5730\u533a",
                            "value": 117.9075
                        },
                        {
                            "name": "\u54b8\u5b81",
                            "value": 68.3475
                        },
                        {
                            "name": "\u54b8\u9633",
                            "value": 100.0
                        },
                        {
                            "name": "\u54c8\u5bc6\u5730\u533a",
                            "value": 70.35
                        },
                        {
                            "name": "\u54c8\u5c14\u6ee8",
                            "value":84.0
                        },
                        {
                            "name": "\u5510\u5c71",
                            "value": 105.0
                        },
                        {
                            "name": "\u5546\u4e18",
                            "value": 85.0
                        },
                        {
                            "name": "\u5546\u6d1b",
                            "value": 70.5
                        },
                        {
                            "name": "\u5580\u4ec0\u5730\u533a",
                            "value": 146.435
                        },
                        {
                            "name": "\u5609\u5174",
                            "value": 69.66
                        },
                        {
                            "name": "\u5609\u5cea\u5173",
                            "value": 75.0
                        },
                        {
                            "name": "\u56db\u5e73",
                            "value": 69.5
                        },
                        {
                            "name": "\u56fa\u539f",
                            "value": 70.68
                        },
                        {
                            "name": "\u5854\u57ce\u5730\u533a",
                            "value": 48.1325
                        },
                        {
                            "name": "\u5927\u5174\u5b89\u5cad\u5730\u533a",
                            "value": 48.1075
                        },
                        {
                            "name": "\u5927\u540c",
                            "value": 61.5
                        },
                        {
                            "name": "\u5927\u5e86",
                            "value": 55.0
                        },
                        {
                            "name": "\u5927\u7406\u5dde",
                            "value": 48.7125
                        },
                        {
                            "name": "\u5927\u8fde",
                            "value": 61.5
                        },
                        {
                            "name": "\u5929\u6c34",
                            "value": 70.5
                        },
                        {
                            "name": "\u5929\u6d25",
                            "value": 94.235
                        },
                        {
                            "name": "\u592a\u4ed3",
                            "value": 67.8525
                        },
                        {
                            "name": "\u592a\u539f",
                            "value": 88.0
                        },
                        {
                            "name": "\u5a01\u6d77",
                            "value": 58.0
                        },
                        {
                            "name": "\u5a04\u5e95",
                            "value": 68.6025
                        },
                        {
                            "name": "\u5b5d\u611f",
                            "value": 72.0
                        },
                        {
                            "name": "\u5b81\u5fb7",
                            "value": 48.1325
                        },
                        {
                            "name": "\u5b81\u6ce2",
                            "value": 55.0
                        },
                        {
                            "name": "\u5b89\u5e86",
                            "value": 72.0
                        },
                        {
                            "name": "\u5b89\u5eb7",
                            "value": 67.0625
                        },
                        {
                            "name": "\u5b89\u9633",
                            "value": 105.0
                        },
                        {
                            "name": "\u5b89\u987a",
                            "value": 48.0
                        },
                        {
                            "name": "\u5b9a\u897f",
                            "value": 70.5
                        },
                        {
                            "name": "\u5b9c\u5174",
                            "value": 67.0625
                        },
                        {
                            "name": "\u5b9c\u5bbe",
                            "value": 79.1225
                        },
                        {
                            "name": "\u5b9c\u660c",
                            "value": 94.235
                        },
                        {
                            "name": "\u5b9c\u6625",
                            "value": 67.0625
                        },
                        {
                            "name": "\u5b9d\u9e21",
                            "value": 84.0
                        },
                        {
                            "name": "\u5ba3\u57ce",
                            "value": 68.3475
                        },
                        {
                            "name": "\u5bbf\u5dde",
                            "value": 88.0
                        },
                        {
                            "name": "\u5bbf\u8fc1",
                            "value": 84.0
                        },
                        {
                            "name": "\u5bcc\u9633",
                            "value":69.0975
                        },
                        {
                            "name": "\u5bff\u5149",
                            "value": 99.0
                        },
                        {
                            "name": "\u5c71\u5357",
                            "value": 74.45
                        },
                        {
                            "name": "\u5cb3\u9633",
                            "value": 69.67
                        },
                        {
                            "name": "\u5d07\u5de6",
                            "value": 53.0
                        },
                        {
                            "name": "\u5df4\u4e2d",
                            "value": 54.2775
                        },
                        {
                            "name": "\u5df4\u5f66\u6dd6\u5c14",
                            "value": 70.5
                        },
                        {
                            "name": "\u5e38\u5dde",
                            "value": 79.1225
                        },
                        {
                            "name": "\u5e38\u5fb7",
                            "value": 75.0
                        },
                        {
                            "name": "\u5e38\u719f",
                            "value": 69.83
                        },
                        {
                            "name": "\u5e73\u51c9",
                            "value": 61.5
                        },
                        {
                            "name": "\u5e73\u5ea6",
                            "value": 78.5
                        },
                        {
                            "name": "\u5e73\u9876\u5c71",
                            "value": 122.9375
                        },
                        {
                            "name": "\u5e7f\u5143",
                            "value": 56.0
                        },
                        {
                            "name": "\u5e7f\u5b89",
                            "value": 61.5
                        },
                        {
                            "name": "\u5e7f\u5dde",
                            "value": 55.0
                        },
                        {
                            "name": "\u5e86\u9633",
                            "value": 62.475
                        },
                        {
                            "name": "\u5e93\u5c14\u52d2",
                            "value": 112.5
                        },
                        {
                            "name": "\u5eca\u574a",
                            "value": 100.0
                        },
                        {
                            "name": "\u5ef6\u5b89",
                            "value": 74.0
                        },
                        {
                            "name": "\u5ef6\u8fb9\u5dde",
                            "value": 53.0
                        },
                        {
                            "name": "\u5f00\u5c01",
                            "value": 100.0
                        },
                        {
                            "name": "\u5f20\u5bb6\u53e3",
                            "value": 65.0
                        },
                        {
                            "name": "\u5f20\u5bb6\u6e2f",
                            "value": 74.0
                        },
                        {
                            "name": "\u5f20\u5bb6\u754c",
                            "value": 68.3475
                        },
                        {
                            "name": "\u5f20\u6396",
                            "value": 66.205
                        },
                        {
                            "name": "\u5f90\u5dde",
                            "value": 89.0
                        },
                        {
                            "name": "\u5fb7\u5b8f\u5dde",
                            "value": 53.0
                        },
                        {
                            "name": "\u5fb7\u5dde",
                            "value": 114.0
                        },
                        {
                            "name": "\u5fb7\u9633",
                            "value": [
                                104.37,
                                31.13,
                                72.0
                            ]
                        },
                        {
                            "name": "\u5ffb\u5dde",
                            "value": [
                                112.43,
                                38.24,
                                79.1225
                            ]
                        },
                        {
                            "name": "\u6000\u5316",
                            "value": [
                                109.58,
                                27.33,
                                61.5
                            ]
                        },
                        {
                            "name": "\u6012\u6c5f\u5dde",
                            "value": 48.24
                        },
                        {
                            "name": "\u6069\u65bd\u5dde",
                            "value": 66.5
                        },
                        {
                            "name": "\u60e0\u5dde",
                            "value": [
                                114.4,
                                23.09,
                                53.0
                            ]
                        },
                        {
                            "name": "\u6210\u90fd",
                            "value": [
                                104.06,
                                30.67,
                                87.15
                            ]
                        },
                        {
                            "name": "\u626c\u5dde",
                            "value": [
                                119.42,
                                32.39,
                                78.0
                            ]
                        },
                        {
                            "name": "\u627f\u5fb7",
                            "value": [
                                117.93,
                                40.97,
                                61.5
                            ]
                        },
                        {
                            "name": "\u629a\u5dde",
                            "value": 55.0
                        },
                        {
                            "name": "\u629a\u987a",
                            "value": [
                                123.97,
                                41.97,
                                69.0975
                            ]
                        },
                        {
                            "name": "\u62c9\u8428",
                            "value": [
                                91.11,
                                29.97,
                                56.47
                            ]
                        },
                        {
                            "name": "\u62db\u8fdc",
                            "value": [
                                120.38,
                                37.35,
                                69.0975
                            ]
                        },
                        {
                            "name": "\u63ed\u9633",
                            "value": [
                                116.35,
                                23.55,
                                55.0
                            ]
                        },
                        {
                            "name": "\u6500\u679d\u82b1",
                            "value": [
                                101.718637,
                                26.582347,
                                60.835
                            ]
                        },
                        {
                            "name": "\u6587\u5c71\u5dde",
                            "value": 48.0
                        },
                        {
                            "name": "\u6587\u767b",
                            "value": [
                                122.05,
                                37.2,
                                55.0
                            ]
                        },
                        {
                            "name": "\u65b0\u4e61",
                            "value": [
                                113.52,
                                35.18,
                                99.0
                            ]
                        },
                        {
                            "name": "\u65b0\u4f59",
                            "value": [
                                114.56,
                                27.48,
                                61.5
                            ]
                        },
                        {
                            "name": "\u65e0\u9521",
                            "value": [
                                120.29,
                                31.59,
                                78.0
                            ]
                        },
                        {
                            "name": "\u65e5\u5580\u5219",
                            "value": [
                                88.51,
                                29.16,
                                65.0
                            ]
                        },
                        {
                            "name": "\u65e5\u7167",
                            "value": [
                                119.46,
                                35.42,
                                78.0
                            ]
                        },
                        {
                            "name": "\u6606\u5c71",
                            "value": [
                                120.95,
                                31.39,
                                67.1025
                            ]
                        },
                        {
                            "name": "\u6606\u660e",
                            "value": [
                                102.73,
                                25.04,
                                55.0
                            ]
                        },
                        {
                            "name": "\u660c\u5409\u5dde",
                            "value": 79.1225
                        },
                        {
                            "name": "\u660c\u90fd",
                            "value": 60.0
                        },
                        {
                            "name": "\u662d\u901a",
                            "value": [
                                103.42,
                                27.2,
                                54.2775
                            ]
                        },
                        {
                            "name": "\u664b\u4e2d",
                            "value": 80.0
                        },
                        {
                            "name": "\u664b\u57ce",
                            "value": [
                                112.51,
                                35.3,
                                84.0
                            ]
                        },
                        {
                            "name": "\u666e\u6d31",
                            "value": 48.0
                        },
                        {
                            "name": "\u666f\u5fb7\u9547",
                            "value": [
                                117.13,
                                29.17,
                                64.0
                            ]
                        },
                        {
                            "name": "\u66f2\u9756",
                            "value": [
                                103.79,
                                25.51,
                                53.0
                            ]
                        },
                        {
                            "name": "\u6714\u5dde",
                            "value": [
                                112.26,
                                39.19,
                                74.0
                            ]
                        },
                        {
                            "name": "\u671d\u9633",
                            "value": [
                                120.27,
                                41.34,
                                70.5
                            ]
                        },
                        {
                            "name": "\u672c\u6eaa",
                            "value": [
                                123.73,
                                41.3,
                                69.54
                            ]
                        },
                        {
                            "name": "\u6765\u5bbe",
                            "value": 55.0
                        },
                        {
                            "name": "\u676d\u5dde",
                            "value": [
                                120.19,
                                30.26,
                                72.0
                            ]
                        },
                        {
                            "name": "\u677e\u539f",
                            "value": [
                                124.49,
                                45.11,
                                61.5
                            ]
                        },
                        {
                            "name": "\u6797\u829d",
                            "value": 63.0
                        },
                        {
                            "name": "\u679c\u6d1b\u5dde",
                            "value": 60.5225
                        },
                        {
                            "name": "\u67a3\u5e84",
                            "value": [
                                117.57,
                                34.86,
                                103.1175
                            ]
                        },
                        {
                            "name": "\u67f3\u5dde",
                            "value": [
                                109.4,
                                24.33,
                                69.66
                            ]
                        },
                        {
                            "name": "\u682a\u6d32",
                            "value": [
                                113.16,
                                27.83,
                                78.0
                            ]
                        },
                        {
                            "name": "\u6842\u6797",
                            "value": [
                                110.28,
                                25.29,
                                66.5
                            ]
                        },
                        {
                            "name": "\u6885\u5dde",
                            "value": [
                                116.1,
                                24.55,
                                52.0
                            ]
                        },
                        {
                            "name": "\u68a7\u5dde",
                            "value": [
                                111.2,
                                23.29,
                                55.0
                            ]
                        },
                        {
                            "name": "\u695a\u96c4\u5dde",
                            "value": 48.1075
                        },
                        {
                            "name": "\u6986\u6797",
                            "value": [
                                109.47,
                                38.18,
                                66.395
                            ]
                        },
                        {
                            "name": "\u6b66\u5a01",
                            "value": [
                                102.39,
                                37.56,
                                74.0
                            ]
                        },
                        {
                            "name": "\u6b66\u6c49",
                            "value": [
                                114.31,
                                30.52,
                                87.15
                            ]
                        },
                        {
                            "name": "\u6bd5\u8282",
                            "value": [
                                105.18,
                                27.18,
                                49.3825
                            ]
                        },
                        {
                            "name": "\u6c38\u5dde",
                            "value": [
                                111.37,
                                26.13,
                                66.5
                            ]
                        },
                        {
                            "name": "\u6c49\u4e2d",
                            "value": [
                                107.01,
                                33.04,
                                72.0
                            ]
                        },
                        {
                            "name": "\u6c55\u5934",
                            "value": [
                                116.69,
                                23.39,
                                53.0
                            ]
                        },
                        {
                            "name": "\u6c55\u5c3e",
                            "value": [
                                115.375279,
                                22.786211,
                                48.1075
                            ]
                        },
                        {
                            "name": "\u6c5f\u95e8",
                            "value": [
                                113.06,
                                22.61,
                                55.0
                            ]
                        },
                        {
                            "name": "\u6c5f\u9634",
                            "value": [
                                120.26,
                                31.91,
                                87.15
                            ]
                        },
                        {
                            "name": "\u6c60\u5dde",
                            "value": 67.0625
                        },
                        {
                            "name": "\u6c88\u9633",
                            "value": [
                                123.38,
                                41.8,
                                81.0
                            ]
                        },
                        {
                            "name": "\u6ca7\u5dde",
                            "value": [
                                116.83,
                                38.33,
                                99.0
                            ]
                        },
                        {
                            "name": "\u6cb3\u6c60",
                            "value": [
                                108.03,
                                24.42,
                                55.0
                            ]
                        },
                        {
                            "name": "\u6cb3\u6e90",
                            "value": [
                                114.68,
                                23.73,
                                52.0
                            ]
                        },
                        {
                            "name": "\u6cc9\u5dde",
                            "value": [
                                118.58,
                                24.93,
                                54.2775
                            ]
                        },
                        {
                            "name": "\u6cf0\u5b89",
                            "value": [
                                117.13,
                                36.18,
                                89.555
                            ]
                        },
                        {
                            "name": "\u6cf0\u5dde",
                            "value": [
                                119.9,
                                32.49,
                                81.0
                            ]
                        },
                        {
                            "name": "\u6cf8\u5dde",
                            "value": [
                                105.39,
                                28.91,
                                79.1225
                            ]
                        },
                        {
                            "name": "\u6d1b\u9633",
                            "value": [
                                112.44,
                                34.7,
                                88.0
                            ]
                        },
                        {
                            "name": "\u6d4e\u5357",
                            "value": [
                                117,
                                36.65,
                                103.1175
                            ]
                        },
                        {
                            "name": "\u6d4e\u5b81",
                            "value": [
                                116.59,
                                35.38,
                                99.0
                            ]
                        },
                        {
                            "name": "\u6d77\u4e1c\u5730\u533a",
                            "value": 74.0
                        },
                        {
                            "name": "\u6d77\u5317\u5dde",
                            "value": 60.5225
                        },
                        {
                            "name": "\u6d77\u5357\u5dde",
                            "value": 60.355
                        },
                        {
                            "name": "\u6d77\u53e3",
                            "value": [
                                110.35,
                                20.02,
                                39.5
                            ]
                        },
                        {
                            "name": "\u6d77\u897f\u5dde",
                            "value": 60.5225
                        },
                        {
                            "name": "\u6d77\u95e8",
                            "value": [
                                121.15,
                                31.89,
                                66.5
                            ]
                        },
                        {
                            "name": "\u6dc4\u535a",
                            "value": [
                                118.05,
                                36.78,
                                105.0
                            ]
                        },
                        {
                            "name": "\u6dee\u5317",
                            "value": [
                                116.47,
                                33.57,
                                81.0
                            ]
                        },
                        {
                            "name": "\u6dee\u5357",
                            "value": [
                                116.58,
                                32.37,
                                74.0
                            ]
                        },
                        {
                            "name": "\u6dee\u5b89",
                            "value": [
                                119.15,
                                33.5,
                                80.0
                            ]
                        },
                        {
                            "name": "\u6df1\u5733",
                            "value": [
                                114.07,
                                22.62,
                                49.285
                            ]
                        },
                        {
                            "name": "\u6e05\u8fdc",
                            "value": [
                                113.01,
                                23.7,
                                55.0
                            ]
                        },
                        {
                            "name": "\u6e29\u5dde",
                            "value": [
                                120.65,
                                28.01,
                                67.0
                            ]
                        },
                        {
                            "name": "\u6e2d\u5357",
                            "value": [
                                109.5,
                                34.52,
                                94.235
                            ]
                        },
                        {
                            "name": "\u6e56\u5dde",
                            "value": [
                                120.1,
                                30.86,
                                72.0
                            ]
                        },
                        {
                            "name": "\u6e58\u6f6d",
                            "value": [
                                112.91,
                                27.87,
                                79.1225
                            ]
                        },
                        {
                            "name": "\u6e58\u897f\u5dde",
                            "value": 61.5
                        },
                        {
                            "name": "\u6e5b\u6c5f",
                            "value": [
                                110.359377,
                                21.270708,
                                48.24
                            ]
                        },
                        {
                            "name": "\u6ea7\u9633",
                            "value": [
                                119.48,
                                31.43,
                                72.0
                            ]
                        },
                        {
                            "name": "\u6ec1\u5dde",
                            "value": [
                                118.18,
                                32.18,
                                79.1225
                            ]
                        },
                        {
                            "name": "\u6ee8\u5dde",
                            "value": [
                                118.03,
                                37.36,
                                99.0
                            ]
                        },
                        {
                            "name": "\u6f2f\u6cb3",
                            "value": [
                                114.02,
                                33.33,
                                85.0
                            ]
                        },
                        {
                            "name": "\u6f33\u5dde",
                            "value": [
                                117.39,
                                24.31,
                                56.47
                            ]
                        },
                        {
                            "name": "\u6f4d\u574a",
                            "value": [
                                119.1,
                                36.62,
                                92.0
                            ]
                        },
                        {
                            "name": "\u6f6e\u5dde",
                            "value": [
                                116.63,
                                23.68,
                                54.0
                            ]
                        },
                        {
                            "name": "\u6fee\u9633",
                            "value": [
                                115.01,
                                35.44,
                                85.0
                            ]
                        },
                        {
                            "name": "\u70df\u53f0",
                            "value": [
                                121.39,
                                37.52,
                                61.5
                            ]
                        },
                        {
                            "name": "\u7126\u4f5c",
                            "value": [
                                113.21,
                                35.24,
                                93.745
                            ]
                        },
                        {
                            "name": "\u7261\u4e39\u6c5f",
                            "value": [
                                129.58,
                                44.6,
                                61.5
                            ]
                        },
                        {
                            "name": "\u7389\u6797",
                            "value": [
                                110.09,
                                22.38,
                                55.0
                            ]
                        },
                        {
                            "name": "\u7389\u6811\u5dde",
                            "value": 48.0
                        },
                        {
                            "name": "\u7389\u6eaa",
                            "value": [
                                102.52,
                                24.35,
                                49.3825
                            ]
                        },
                        {
                            "name": "\u73e0\u6d77",
                            "value": [
                                113.52,
                                22.3,
                                49.285
                            ]
                        },
                        {
                            "name": "\u74e6\u623f\u5e97",
                            "value": [
                                121.979603,
                                39.627114,
                                72.0
                            ]
                        },
                        {
                            "name": "\u7518\u5357\u5dde",
                            "value": 70.5
                        },
                        {
                            "name": "\u7518\u5b5c\u5dde",
                            "value": 39.0
                        },
                        {
                            "name": "\u767d\u57ce",
                            "value": [
                                122.5,
                                45.38,
                                70.5
                            ]
                        },
                        {
                            "name": "\u767d\u5c71",
                            "value": [
                                126.26,
                                41.56,
                                68.6025
                            ]
                        },
                        {
                            "name": "\u767d\u94f6",
                            "value": [
                                104.12,
                                36.33,
                                74.0
                            ]
                        },
                        {
                            "name": "\u767e\u8272",
                            "value": [
                                106.36,
                                23.54,
                                55.0
                            ]
                        },
                        {
                            "name": "\u76ca\u9633",
                            "value": [
                                112.2,
                                28.36,
                                61.5
                            ]
                        },
                        {
                            "name": "\u76d0\u57ce",
                            "value": [
                                120.13,
                                33.38,
                                69.5
                            ]
                        },
                        {
                            "name": "\u76d8\u9526",
                            "value": [
                                122.070714,
                                41.119997,
                                68.6025
                            ]
                        },
                        {
                            "name": "\u7709\u5c71",
                            "value": 75.0
                        },
                        {
                            "name": "\u77f3\u5634\u5c71",
                            "value": [
                                106.39,
                                39.04,
                                77.675
                            ]
                        },
                        {
                            "name": "\u77f3\u5bb6\u5e84",
                            "value": [
                                114.48,
                                38.03,
                                124.6325
                            ]
                        },
                        {
                            "name": "\u77f3\u6cb3\u5b50",
                            "value": [
                                86.0,
                                44.18,
                                74.0
                            ]
                        },
                        {
                            "name": "\u798f\u5dde",
                            "value": [
                                119.3,
                                26.08,
                                54.2775
                            ]
                        },
                        {
                            "name": "\u79e6\u7687\u5c9b",
                            "value": [
                                119.57,
                                39.95,
                                74.0
                            ]
                        },
                        {
                            "name": "\u7ae0\u4e18",
                            "value": [
                                117.53,
                                36.72,
                                85.0
                            ]
                        },
                        {
                            "name": "\u7ea2\u6cb3\u5dde",
                            "value": 55.0
                        },
                        {
                            "name": "\u7ecd\u5174",
                            "value": [
                                120.58,
                                30.01,
                                72.0
                            ]
                        },
                        {
                            "name": "\u7ee5\u5316",
                            "value": [
                                126.59,
                                46.38,
                                56.47
                            ]
                        },
                        {
                            "name": "\u7ef5\u9633",
                            "value": [
                                104.73,
                                31.48,
                                68.3475
                            ]
                        },
                        {
                            "name": "\u804a\u57ce",
                            "value": [
                                115.97,
                                36.45,
                                115.0
                            ]
                        },
                        {
                            "name": "\u8087\u5e86",
                            "value": [
                                112.44,
                                23.05,
                                55.0
                            ]
                        },
                        {
                            "name": "\u80f6\u5357",
                            "value": [
                                119.97,
                                35.88,
                                72.0
                            ]
                        },
                        {
                            "name": "\u80f6\u5dde",
                            "value": [
                                120.03336,
                                36.264622,
                                69.0975
                            ]
                        },
                        {
                            "name": "\u81ea\u8d21",
                            "value": [
                                104.778442,
                                29.33903,
                                94.235
                            ]
                        },
                        {
                            "name": "\u821f\u5c71",
                            "value": [
                                122.207216,
                                29.985295,
                                48.0
                            ]
                        },
                        {
                            "name": "\u829c\u6e56",
                            "value": [
                                118.38,
                                31.33,
                                75.0
                            ]
                        },
                        {
                            "name": "\u82cf\u5dde",
                            "value": [
                                120.62,
                                31.32,
                                75.0
                            ]
                        },
                        {
                            "name": "\u8302\u540d",
                            "value": [
                                110.88,
                                21.68,
                                52.0
                            ]
                        },
                        {
                            "name": "\u8346\u5dde",
                            "value": [
                                112.239741,
                                30.335165,
                                89.0
                            ]
                        },
                        {
                            "name": "\u8346\u95e8",
                            "value": [
                                112.12,
                                31.02,
                                79.1225
                            ]
                        },
                        {
                            "name": "\u8363\u6210",
                            "value": [
                                122.41,
                                37.16,
                                56.47
                            ]
                        },
                        {
                            "name": "\u8386\u7530",
                            "value": [
                                119.01,
                                24.26,
                                48.0
                            ]
                        },
                        {
                            "name": "\u83b1\u5dde",
                            "value": [
                                119.942327,
                                37.177017,
                                74.0
                            ]
                        },
                        {
                            "name": "\u83b1\u829c",
                            "value": [
                                117.67,
                                36.19,
                                120.5
                            ]
                        },
                        {
                            "name": "\u83b1\u897f",
                            "value": [
                                120.53,
                                36.86,
                                69.5
                            ]
                        },
                        {
                            "name": "\u83cf\u6cfd",
                            "value": [
                                115.480656,
                                35.23375,
                                120.5
                            ]
                        },
                        {
                            "name": "\u840d\u4e61",
                            "value": [
                                113.5,
                                27.37,
                                72.0
                            ]
                        },
                        {
                            "name": "\u8425\u53e3",
                            "value": [
                                122.18,
                                40.65,
                                61.5
                            ]
                        },
                        {
                            "name": "\u846b\u82a6\u5c9b",
                            "value": [
                                120.836932,
                                40.711052,
                                69.5
                            ]
                        },
                        {
                            "name": "\u84ec\u83b1",
                            "value": [
                                120.75,
                                37.8,
                                61.5
                            ]
                        },
                        {
                            "name": "\u868c\u57e0",
                            "value": [
                                117.21,
                                32.56,
                                83.0
                            ]
                        },
                        {
                            "name": "\u8861\u6c34",
                            "value": [
                                115.72,
                                37.72,
                                119.0
                            ]
                        },
                        {
                            "name": "\u8861\u9633",
                            "value": [
                                112.37,
                                26.53,
                                69.5
                            ]
                        },
                        {
                            "name": "\u8862\u5dde",
                            "value": [
                                118.88,
                                28.97,
                                66.5
                            ]
                        },
                        {
                            "name": "\u8944\u9633",
                            "value": 89.555
                        },
                        {
                            "name": "\u897f\u53cc\u7248\u7eb3\u5dde",
                            "value": 53.0
                        },
                        {
                            "name": "\u897f\u5b81",
                            "value": [
                                101.74,
                                36.56,
                                78.5
                            ]
                        },
                        {
                            "name": "\u897f\u5b89",
                            "value": [
                                108.95,
                                34.27,
                                94.235
                            ]
                        },
                        {
                            "name": "\u8bb8\u660c",
                            "value": [
                                113.49,
                                34.01,
                                87.7575
                            ]
                        },
                        {
                            "name": "\u8bf8\u66a8",
                            "value": [
                                120.23,
                                29.71,
                                36.5
                            ]
                        },
                        {
                            "name": "\u8d35\u6e2f",
                            "value": [
                                109.36,
                                23.06,
                                55.0
                            ]
                        },
                        {
                            "name": "\u8d35\u9633",
                            "value": [
                                106.71,
                                26.57,
                                55.0
                            ]
                        },
                        {
                            "name": "\u8d3a\u5dde",
                            "value": 55.0
                        },
                        {
                            "name": "\u8d44\u9633",
                            "value": [
                                104.38,
                                30.09,
                                70.5
                            ]
                        },
                        {
                            "name": "\u8d63\u5dde",
                            "value": [
                                114.56,
                                28.52,
                                66.5
                            ]
                        },
                        {
                            "name": "\u8d64\u5cf0",
                            "value": [
                                118.87,
                                42.28,
                                61.5
                            ]
                        },
                        {
                            "name": "\u8fbd\u6e90",
                            "value": [
                                125.09,
                                42.54,
                                66.5
                            ]
                        },
                        {
                            "name": "\u8fbd\u9633",
                            "value": [
                                123.12,
                                41.16,
                                69.0975
                            ]
                        },
                        {
                            "name": "\u8fbe\u5dde",
                            "value": 75.0
                        },
                        {
                            "name": "\u8fd0\u57ce",
                            "value": [
                                110.59,
                                35.02,
                                90.0
                            ]
                        },
                        {
                            "name": "\u8fde\u4e91\u6e2f",
                            "value": [
                                119.16,
                                34.59,
                                74.0
                            ]
                        },
                        {
                            "name": "\u8fea\u5e86\u5dde",
                            "value": 39.0
                        },
                        {
                            "name": "\u901a\u5316",
                            "value": [
                                125.56,
                                41.43,
                                61.5
                            ]
                        },
                        {
                            "name": "\u901a\u8fbd",
                            "value": [
                                122.16,
                                43.37,
                                70.5
                            ]
                        },
                        {
                            "name": "\u9042\u5b81",
                            "value": [
                                105.33,
                                30.31,
                                61.5
                            ]
                        },
                        {
                            "name": "\u9075\u4e49",
                            "value": [
                                106.9,
                                27.7,
                                61.5
                            ]
                        },
                        {
                            "name": "\u90a2\u53f0",
                            "value": [
                                114.48,
                                37.05,
                                124.6325
                            ]
                        },
                        {
                            "name": "\u90a3\u66f2\u5730\u533a",
                            "value": 78.5
                        },
                        {
                            "name": "\u90af\u90f8",
                            "value": [
                                114.47,
                                36.6,
                                120.0
                            ]
                        },
                        {
                            "name": "\u90b5\u9633",
                            "value": [
                                111.28,
                                27.14,
                                75.0
                            ]
                        },
                        {
                            "name": "\u90d1\u5dde",
                            "value": [
                                113.65,
                                34.76,
                                105.0
                            ]
                        },
                        {
                            "name": "\u90f4\u5dde",
                            "value": [
                                113.02,
                                25.46,
                                61.5
                            ]
                        },
                        {
                            "name": "\u9102\u5c14\u591a\u65af",
                            "value": [
                                109.781327,
                                39.608266,
                                60.355
                            ]
                        },
                        {
                            "name": "\u9102\u5dde",
                            "value": [
                                114.52,
                                30.23,
                                80.0
                            ]
                        },
                        {
                            "name": "\u9152\u6cc9",
                            "value": [
                                98.31,
                                39.44,
                                82.5
                            ]
                        },
                        {
                            "name": "\u91cd\u5e86",
                            "value": [
                                106.54,
                                29.59,
                                72.0
                            ]
                        },
                        {
                            "name": "\u91d1\u534e",
                            "value": [
                                119.64,
                                29.12,
                                72.0
                            ]
                        },
                        {
                            "name": "\u91d1\u575b",
                            "value": [
                                119.56,
                                31.74,
                                69.67
                            ]
                        },
                        {
                            "name": "\u91d1\u660c",
                            "value": [
                                102.188043,
                                38.520089,
                                75.0
                            ]
                        },
                        {
                            "name": "\u94a6\u5dde",
                            "value": [
                                108.37,
                                21.57,
                                55.0
                            ]
                        },
                        {
                            "name": "\u94c1\u5cad",
                            "value": 69.5
                        },
                        {
                            "name": "\u94dc\u4ec1\u5730\u533a",
                            "value": 57.0
                        },
                        {
                            "name": "\u94dc\u5ddd",
                            "value": 80.0
                        },
                        {
                            "name": "\u94dc\u9675",
                            "value": 75.0
                        },
                        {
                            "name": "\u94f6\u5ddd",
                            "value":78.5
                        },
                        {
                            "name": "\u9521\u6797\u90ed\u52d2\u76df",
                            "value": 48.1075
                        },
                        {
                            "name": "\u9526\u5dde",
                            "value": 75.0
                        },
                        {
                            "name": "\u9547\u6c5f",
                            "value": 80.0
                        },
                        {
                            "name": "\u957f\u6625",
                            "value": 74.0
                        },
                        {
                            "name": "\u957f\u6c99",
                            "value": 80.0
                        },
                        {
                            "name": "\u957f\u6cbb",
                            "value": 88.0
                        },
                        {
                            "name": "\u961c\u65b0",
                            "value": 70.5
                        },
                        {
                            "name": "\u961c\u9633",
                            "value": 80.0
                        },
                        {
                            "name": "\u9632\u57ce\u6e2f",
                            "value": 47.0
                        },
                        {
                            "name": "\u9633\u6c5f",
                            "value": 49.3825
                        },
                        {
                            "name": "\u9633\u6cc9",
                            "value": 84.0
                        },
                        {
                            "name": "\u963f\u514b\u82cf\u5730\u533a",
                            "value": 99.0
                        },
                        {
                            "name": "\u963f\u52d2\u6cf0\u5730\u533a",
                            "value": 47.7425
                        },
                        {
                            "name": "\u963f\u575d\u5dde",
                            "value": 41.33
                        },
                        {
                            "name": "\u963f\u62c9\u5584\u76df",
                            "value": 63.0
                        },
                        {
                            "name": "\u963f\u91cc\u5730\u533a",
                            "value": 44.0
                        },
                        {
                            "name": "\u9647\u5357",
                            "value": 57.0
                        },
                        {
                            "name": "\u968f\u5dde",
                            "value": 75.0
                        },
                        {
                            "name": "\u96c5\u5b89",
                            "value": 61.5
                        },
                        {
                            "name": "\u9752\u5c9b",
                            "value": 74.0
                        },
                        {
                            "name": "\u978d\u5c71",
                            "value": 79.1225
                        },
                        {
                            "name": "\u97f6\u5173",
                            "value": 55.0
                        },
                        {
                            "name": "\u9a6c\u978d\u5c71",
                            "value": 75.0
                        },
                        {
                            "name": "\u9a7b\u9a6c\u5e97",
                            "value": 84.0
                        },
                        {
                            "name": "\u9e21\u897f",
                            "value": 56.47
                        },
                        {
                            "name": "\u9e64\u58c1",
                            "value": 343.0
                        },
                        {
                            "name": "\u9e64\u5c97",
                            "value": 64.0
                        },
                        {
                            "name": "\u9e70\u6f6d",
                            "value": 55.0
                        },
                        {
                            "name": "\u9ec4\u5188",
                            "value": 69.5
                        },
                        {
                            "name": "\u9ec4\u5357\u5dde",
                            "value": 70.5
                        },
                        {
                            "name": "\u9ec4\u5c71",
                            "value": 47.0
                        },
                        {
                            "name": "\u9ec4\u77f3",
                            "value": 78.0
                        },
                        {
                            "name": "\u9ed1\u6cb3",
                            "value": 48.0
                        },
                        {
                            "name": "\u9ed4\u4e1c\u5357\u5dde",
                            "value": 48.1075
                        },
                        {
                            "name": "\u9ed4\u5357\u5dde",
                            "value": 48.1075
                        },
                        {
                            "name": "\u9ed4\u897f\u5357\u5dde",
                            "value": 39.5
                        },
                        {
                            "name": "\u9f50\u9f50\u54c8\u5c14",
                            "value": 55.0
                        },
                        {
                            "name": "\u9f99\u5ca9",
                            "value": 48.1075
                        }
                    ],
                },
//                "legend": {
//                    "show": true,
//                    "left": "center",
//                    "top": "top",
//                    "orient": "horizontal"
//                },
                "geo": {
                    "map": "china",
                    "roam": true,
                    "label": {
                        "show": true,
                        "fontSize": 12,
                        "color": "#fff"
                    },
                    "itemStyle": {
                        "normal": {
                            "areaColor": "#58B0FF",
                            "borderColor": "#fff",
                            "borderWidth": 1,
                            "borderType": "solid"
                        },
                        "emphasis": {
                            "focus": "self",
                            "areaColor": "#EDAFEF"
                        }
                    },
                    "selectedMode": "multiple",
                    "select": {
                        "itemStyle": {
                            "color": 'auto',
                            "areaColor": "#EDAFEF"
                        }
                    }
                },
                "visualMap": {
                    "type": "continuous",
                    "min": 0,
                    "max": 100,
                    "text": [
                        "high",
                        "low"
                    ],
                    "textStyle": {
                        "color": "#edb87b"
                    },
//                    "inRange": {
//                        "color": [
//                            "#50a3ba",
//                            "#eac763",
//                            "#d94e5d"
//                        ]
//                    },
                    "calculable": true,
                    "orient": "vertical",
                    "left": "left",
                    "top": "bottom"
                }
    };
            myChart_01d0ffb710c342059b6fad871d87ff87.setOption(option_01d0ffb710c342059b6fad871d87ff87);}
    })
}

//echart_3全球空气质量较好城市
function echarts_bar_good() {
    $.ajax({
        url: "bar_good",
        success: function (data) {
            var chart = echarts.init(document.getElementById('chart_3'));
            var mydata = data;
            var arr = for_(mydata);
            var option = {
              tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: 'shadow'
                }
              },
              grid: {
                top: '5%'
              },
              toolbox: {
                top: '1%',
                right: 'right',
                show: true,
                feature: {
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
              },
              xAxis: {
                type: 'category',
                nameLocation: 'middle',
                axisLine: {
                    lineStyle: {
                        color: "#fff"
                    }
                },
                axisLabel: {
                   interval:0,
                   rotate:30
                }
              },
              yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: "#fff"
                    }
                }
              },
              dataset: {
                source: arr
              },
              dataZoom: [
                {
                    type: "inside",
                    start: 0,
                    end: 20
                },
                {
                    bottom: '5%',
                    show: true,
                    height: 10,
                    textStyle: {
                        color: "#fff"
                    }
                }
              ],
              series: [
                {
                    name: '二氧化氮（NO2）浓度',//数据提示窗标题
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#60EEFF'
                            }
                        }
                    },
                    showSymbol: false,
                    labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    encode: {
                        x: 0,
                        y: 1
                    }
                },
                {
                    name: 'PM2.5浓度',//数据提示窗标题
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#895BC7'
                            }
                        }
                    },
                    showSymbol: false,
                    labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    encode: {
//                        x: 0,
                        y: 2
                    }
                },
                {
                    name: '臭氧（O3）浓度',//数据提示窗标题
                    type: 'bar',
                    showSymbol: false,
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#50A0FF'
                            }
                        }
                    },
                    labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    encode: {
//                        x: 0,
                        y: 3
                    }
                }
              ]
            };
            // 使用刚指定的配置项和数据显示图表。
            chart.setOption(option);
            window.addEventListener("resize", function () {
                chart.resize();
            });
        },
        error: function (xhr, type, errorThrown) {
            alert('echarts_bar_good ajax error')
        },
        async: false
    })
}

//echart_4全球空气质量较差城市
function echarts_bar_bad() {
    $.ajax({
            url: "bar_bad",
            success: function (data) {
               var chart = echarts.init(document.getElementById('chart_4'));
                var mydata = data;
                var arr = for_(mydata);
                var option = {
              tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: 'shadow'
                }
              },
              grid: {
                top: '15%'
              },
              toolbox: {
                top: '10%',
                right: 'right',
                show: true,
                feature: {
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
              },
              xAxis: {
                type: 'category',
                nameLocation: 'middle',
                axisLine: {
                    lineStyle: {
                        color: "#fff"
                    }
                },
                axisLabel: {
                   interval:0,
                   rotate:30
                }
              },
              yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: "#fff"
                    }
                }
              },
              dataset: {
                source: arr
              },
              dataZoom: [
                {
                    type: "inside",
                    start: 0,
                    end: 20
                },
                {
                    bottom: '5%',
                    show: true,
                    height: 10,
                    textStyle: {
                        color: "#fff"
                    }
                }
              ],
              series: [
                {
                    name: '二氧化氮（NO2）浓度',//数据提示窗标题
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#60EEFF'
                            }
                        }
                    },
                    showSymbol: false,
                    labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    encode: {
                        x: 0,
                        y: 1
                    }
                },
                {
                    name: 'PM2.5浓度',//数据提示窗标题
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#895BC7'
                            }
                        }
                    },
                    showSymbol: false,
                    labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    encode: {
//                        x: 0,
                        y: 2
                    }
                },
                {
                    name: '臭氧（O3）浓度',//数据提示窗标题
                    type: 'bar',
                    showSymbol: false,
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#50A0FF'
                            }
                        }
                    },
                    labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    encode: {
//                        x: 0,
                        y: 3
                    }
                }
              ]
            };
               // 使用刚指定的配置项和数据显示图表。
               chart.setOption(option);
               window.addEventListener("resize", function () {
                   chart.resize();
               });
          },
          error: function (xhr, type, errorThrown) {
              alert('echarts_bar_bad ajax error')
          },
          async: false
      })
}

//echart_5中国历年污染物得分
function echarts_gauge() {
    var chartDom = document.getElementById('chart_5');
    var myChart = echarts.init(chartDom);
    var option;
    $.ajax({
//        url: "/pie1",
        success: function(data) {
//        mydata = data,
        const gaugeData = [
          {
            value: 18.8,
            name: 'PM2.5',
            title: {
              offsetCenter: ['160%', '-100%']
            },
            detail: {
              valueAnimation: true,
              offsetCenter: ['160%', '-80%']
            }
          },
          {
            value: 32.1,
            name: 'PM10',
            title: {
              offsetCenter: ['160%', '-60%']
            },
            detail: {
              valueAnimation: true,
              offsetCenter: ['160%', '-40%']
            }
          },
          {
            value: 28.61,
            name: 'O3',
            title: {
              offsetCenter: ['160%', '-20%']
            },
            detail: {
              valueAnimation: true,
              offsetCenter: ['160%', '0%']
            }
          },
          {
            value: 9.22,
            name: 'SO2',
            title: {
              offsetCenter: ['160%', '20%']
            },
            detail: {
              valueAnimation: true,
              offsetCenter: ['160%', '40%']
            }
          },
          {
            value: 10.91,
            name: 'NO2',
            title: {
              offsetCenter: ['160%', '60%']
            },
            detail: {
              valueAnimation: true,
              offsetCenter: ['160%', '80%']
            }
          },
          {
            value: 0.36,
            name: 'CO',
            title: {
              offsetCenter: ['160%', '100%']
            },
            detail: {
              valueAnimation: true,
              offsetCenter: ['160%', '120%']
            }
          }
        ];
        option = {
          series: [
            {
              type: 'gauge',
              startAngle: 90,
              endAngle: -270,
              center: ['30%','60%'],
              pointer: {
                show: false
              },
              progress: {
                show: true,
                overlap: false,
                roundCap: true,
                clip: false,
                itemStyle: {
                  borderWidth: 1,
                  borderColor: '#fff'
                }
              },
              axisLine: {
                lineStyle: {
                  width: 45
                }
              },
              splitLine: {
                show: false,
//                distance: 0,
//                length: 10
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false,
//                distance: 50
              },
              data: gaugeData,
              title: {
                fontSize: 12,
                color: '#fff'
              },
              detail: {
                width: 50,
                height: 14,
                fontSize: 14,
                color: 'inherit',
                borderColor: 'inherit',
                borderRadius: 20,
                borderWidth: 1
              }
            }
          ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
             myChart.resize();
        });
        },
        error:function (xhr, type, errorThrown){
            alert("echarts_line ajax error")
        },
        async:false
    })
}

//echart_6全球空气质量国家排名
function echarts_country_bar() {
    $.ajax({
        url: "bar_country",
        success: function (data) {
            var chart = echarts.init(document.getElementById('chart_6'));
//            console.log(data);
            var gaugeData=[
                ['Australia',0],
                ['Canada',0],
                ['China',0],
                ['France',0],
                ['India',0],
                ['Japan',0],
                ['Norway',0],
                ['Poland',0],
                ['Russia',0],
                ['Turkey',0]
            ];
            var option;
            var gaugeData = [
                            ['Australia',0],
                            ['Canada',0],
                            ['China',0],
                            ['France',0],
                            ['India',0],
                            ['Japan',0],
                            ['Norway',0],
                            ['Poland',0],
                            ['Russia',0],
                            ['Turkey',0]
                        ]
                        option = {
                            grid: {
                                top: 10
                            },
                            tooltip: {
                                trigger: "axis",
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            toolbox: {
                                show: true,
//                                top: 10,
                                right: 18,
                                feature: {
                                    dataView: { show: true, readOnly: false },
                                    restore: { show: true },
                                    saveAsImage: { show: true }
                                }
                            },
//                            legend: {
//                                top: -5,
//                                textStyle:{
//                                    color: '#F8F8FF'
//                                }
//                            },
                             dataset: [
                               {
                                 dimensions: ['name', 'score'],
                                 source: gaugeData

                               },
                               {
                                 transform: {
                                   type: 'sort',
                                   config: { dimension: 'score', order: 'desc' }
                                 }
                               }
                             ],
                             xAxis: {
                               type: 'category',
                               axisLabel: {
                                interval: 0,
                                rotate: 30,
                                textStyle: {
                                    color: '#fff'
                                }
                               },
                               axisLine: {
                                lineStyle: {
                                    color: '#fff'
                                }
                               }
                             },
                             yAxis: {
                                axisLine: {
                                    lineStyle: {
                                        color: '#fff'
                                    }
                                },
                                axisLabel: {
                                     textStyle: {
                                         color: '#fff'
                                     }
                                },
                                type: 'value'
                             },
                             series: {
                                itemStyle: {
                                    color: function(params) {
                                        var colorList = ['#49AFCF','#E4C75A','#79F9AE','#FF7981','#50A0FF','#9B4FF9','#FF8A45','#05D39F','#FF7500','#EAFF56'];
                                        return colorList[params.dataIndex]
                                    }
                                },
                                type: 'bar',
                                encode: { x: 'name', y: 'score' },
                                datasetIndex: 1
                             }
                           };
                        // 使用刚指定的配置项和数据显示图表。
                        var i = 0;
                        setInterval(function () {
                          gaugeData[0][1] = data[i].value;
                          gaugeData[1][1] = data[i+1].value;
                          gaugeData[2][1] = data[i+2].value;
                          gaugeData[3][1] = data[i+3].value;
                          gaugeData[4][1] = data[i+4].value;
                          gaugeData[5][1] = data[i+5].value;
                          gaugeData[6][1] = data[i+6].value;
                          gaugeData[7][1] = data[i+7].value;
                          gaugeData[8][1] = data[i+8].value;
                          gaugeData[9][1] = data[i+9].value;
                          i = i + 10
                          chart.setOption(option);
                          if(i>=719){
                            i = 0
                          }
                        }, 1500);
            window.addEventListener("resize", function () {
                chart.resize();
            });
        },
        error: function (xhr, type, errorThrown) {
            alert('echarts_country_bar ajax error')
        },
        async: false
    })
}

//echart_7全球空气质量普遍水平
function echarts_cloud() {
    var mydata;
    var arr1= new Array();
    var dataRG= new Array();
    $.ajax({
        url: "cloud",
        success: function (data) {
            var chart = echarts.init(document.getElementById('chart_7'));
            console.log(data);
            mydata = data;
            var option = {
                animationDuration: 10000,
                title: {
                    x: 'center',
                    textStyle: {
                        fontSize: 22
                    }
                },
                backgroundColor: 'rgba(255, 255, 255, 0)',
                tooltip: {
                    show: true
                },
                toolbox: {
                  show: true,
                  right: 30,
                  feature: {
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                  }
                },
                series: [{
                    name: '空气质量等级',//数据提示窗标题
                    type: 'wordCloud',
                    sizeRange: [11, 25],//画布范围，如果设置太大会出现少词（溢出屏幕）
                    rotationRange: [0,0],//数据翻转范围
                    textPadding: 0,
                    shape:"diamond",
                    autoSize: {
                        enable: true,
                        minSize: 14
                    },
                    textStyle: {
                        color:function() {
                            return 'rgb(' + [
                                Math.round(200 + Math.random() * 256),
                                Math.round(Math.random() * 256),
                                Math.round(100+ Math.random() * 256)
                            ].join(',') + ')';
                        },
                        emphasis: {
//                            shadowBlur: 1,
//                            shadowColor: '#111'
                        }
                    },
                    data: mydata
                }
              ]
            };
            // 使用刚指定的配置项和数据显示图表。
            chart.setOption(option);
            chart.on('click',function(params){
                console.log('chart---click---:',params,'---',params.data)
            });
            window.addEventListener("resize", function () {
                chart.resize();
            });
        },
        error: function (xhr, type, errorThrown) {
            alert('echarts_scatter_plot ajax error')
        },
        async: false
    })
}



function flashAll() {
    echarts_line()
    echarts_pie()
    echarts_map()
    echarts_bar_good()
    echarts_bar_bad()
    echarts_gauge()
    echarts_country_bar()
    echarts_cloud()
//    echarts_line()
//    echarts_funnel_plots()
//    echarts_pie()
//    echarts_scatter_plot()
//    echarts_double_y()
//    echarts_histogram()
}

// 执行
$(function () {
    console.log("js")
    setInterval(flashAll, 1000 * 60 * 30)  //每隔30分钟调用flashAll函数，刷新页面数据
    flashAll()  // 调用flashAll函数
});
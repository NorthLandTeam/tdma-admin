/*
Name: 			Dashboard - Examples
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version: 	1.4.1
*/

(function( $ ) {

	'use strict';

	/*
	Sales Selector
	*/
	$('#salesSelector').themePluginMultiSelect().on('change', function() {
		var rel = $(this).val();
		$('#salesSelectorItems .chart').removeClass('chart-active').addClass('chart-hidden');
		$('#salesSelectorItems .chart[data-sales-rel="' + rel + '"]').addClass('chart-active').removeClass('chart-hidden');
	});

	$('#salesSelector').trigger('change');

	$('#salesSelectorWrapper').addClass('ready');

	/*
	Flot: Sales 1
	*/
	if($('#flotDashSales1').length>0){
		var flotDashSales1 = $.plot('#flotDashSales1', flotDashSales1Data, {
			series: {
				lines: {
					show: true,
					lineWidth: 2
				},
				points: {
					show: true
				},
				shadowSize: 0
			},
			grid: {
				hoverable: true,
				clickable: true,
				borderColor: 'rgba(0,0,0,0.1)',
				borderWidth: 1,
				labelMargin: 15,
				backgroundColor: 'transparent'
			},
			yaxis: {
				min: 0,
				color: 'rgba(0,0,0,0.1)'
			},
			xaxis: {
				mode: 'categories',
				color: 'rgba(0,0,0,0)'
			},
			legend: {
				show: false
			},
			tooltip: true,
			tooltipOpts: {
				content: '%x: %y',
				shifts: {
					x: -30,
					y: 25
				},
				defaultTheme: false
			}
		});
}
	/*
	Flot: Sales 2
	*/
	if($('#flotDashSales2').length>0){
		var flotDashSales2 = $.plot('#flotDashSales2', flotDashSales2Data, {
			series: {
				lines: {
					show: true,
					lineWidth: 2
				},
				points: {
					show: true
				},
				shadowSize: 0
			},
			grid: {
				hoverable: true,
				clickable: true,
				borderColor: 'rgba(0,0,0,0.1)',
				borderWidth: 1,
				labelMargin: 15,
				backgroundColor: 'transparent'
			},
			yaxis: {
				min: 0,
				color: 'rgba(0,0,0,0.1)'
			},
			xaxis: {
				mode: 'categories',
				color: 'rgba(0,0,0,0)'
			},
			legend: {
				show: false
			},
			tooltip: true,
			tooltipOpts: {
				content: '%x: %y',
				shifts: {
					x: -30,
					y: 25
				},
				defaultTheme: false
			}
		});
}
	/*
	Flot: Sales 3
	*/
	if($('#flotDashSales3').length>0){
		var flotDashSales3 = $.plot('#flotDashSales3', flotDashSales3Data, {
			series: {
				lines: {
					show: true,
					lineWidth: 2
				},
				points: {
					show: true
				},
				shadowSize: 0
			},
			grid: {
				hoverable: true,
				clickable: true,
				borderColor: 'rgba(0,0,0,0.1)',
				borderWidth: 1,
				labelMargin: 15,
				backgroundColor: 'transparent'
			},
			yaxis: {
				min: 0,
				color: 'rgba(0,0,0,0.1)'
			},
			xaxis: {
				mode: 'categories',
				color: 'rgba(0,0,0,0)'
			},
			legend: {
				show: false
			},
			tooltip: true,
			tooltipOpts: {
				content: '%x: %y',
				shifts: {
					x: -30,
					y: 25
				},
				defaultTheme: false
			}
		});
}
	/*
	Liquid Meter
	*/
	$('#meterSales').liquidMeter({
		shape: 'circle',
		color: '#0088cc',
		background: '#F9F9F9',
		fontSize: '24px',
		fontWeight: '600',
		stroke: '#F2F2F2',
		textColor: '#333',
		liquidOpacity: 0.9,
		liquidPalette: ['#333'],
		speed: 3000,
		animate: !$.browser.mobile
	});

	$('#meterSalesSel a').on('click', function( ev ) {
		ev.preventDefault();

		var val = $(this).data("val"),
			selector = $(this).parent(),
			items = selector.find('a');

		items.removeClass('active');
		$(this).addClass('active');

		// Update Meter Value
		$('#meterSales').liquidMeter('set', val);
	});


	}).apply( this, [ jQuery ]);


(function() {
	//显示默认加载的idu
	var ip=$("#idu_select_ip").val();
	$.ajax({
		type: "POST",
		url: basePath+"getIduListForSelect",//url请求的地址
		cache: false,  //禁用缓存
		async: false,
		data: [],
		dataType: "json",
		success: function (result) {
			var idus = result;
			console.log('idu列表数据生成成功-'+JSON.stringify(result));
			$("#ipList").select2({
			     data: idus,
			     placeholder:ip,//默认文字提示
			     language: "zh-CN",//汉化
			     allowClear: false//允许清空
			 })

		}
	});

	loadTdmaPower();

	$('#connectIDU').on('click', function( ev ) {
		//阻止默认响应事件
	  ev.preventDefault();
		loadTdmaPower();
	});
})();

function loadTdmaPower() {
		var select_ip = $("#ipList").val();
		if(!select_ip){
			select_ip = $("#idu_select_ip").val();
		}
		if(!select_ip){
			return;
		}
		//加载TDMA功率参数图
		var tdma_power = echarts.init(document.getElementById('TdmaPowerValueForDash'));
		var tdma_power_option = {
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['本站发射电平/dB/10','本站接收电平/dB/10','环路质量']
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            data : []
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'本站发射电平/dB/10',
		            type:'bar',
		            data:[],
		            markPoint : {
		                data : [
		                    {type : 'max', name: '最大值'},
		                    {type : 'min', name: '最小值'}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name: '平均值'}
		                ]
		            }
		        },
		        {
		            name:'本站接收电平/dB/10',
		            type:'bar',
		            data:[],
		            markPoint : {
		                data : [
		                    {type : 'max', name: '最大值'},
		                    {type : 'min', name: '最小值'}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name: '平均值'}
		                ]
		            }
		        },
		        {
		            name:'环路质量',
		            type:'bar',
		            data:[],
		            markPoint : {
		                data : [
		                    {type : 'max', name: '最大值'},
		                    {type : 'min', name: '最小值'}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name: '平均值'}
		                ]
		            }
		        }
		    ]
		};
		tdma_power.setOption(tdma_power_option);


		//数据加载完之前先显示一段简单的loading动画
		tdma_power.showLoading();
		//从后台获取TDMA功率参数信息
		var time_array=[];    			//时间数组（用来盛放X轴坐标值）
		var send_array=[];    			//本站发射电平数据数组
		var receive_array=[]; 			//本站接收电平数据数组
		var circularGrade_array = []; 	//环路质量数组
		$.ajax({
		  type: "POST",
		  url: basePath+"getTDMAPowerInfoList",//url请求的地址
		  async : true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
		  data : {
		    "select_ip":select_ip
		  },
		  dataType : "json",        //返回数据形式为json
		  success : function(result) {
		     //请求成功时执行该函数内容，result即为服务器返回的json对象
		     if (result) {
		        console.log('数据加载成功-'+JSON.stringify(result));
		        for(var i=0;i<result.length;i++){
		          time_array.push(result[i].recordTime);    		//挨个取出类别并填入类别数组
		        }

		        for(var i=0;i<result.length;i++){
		          send_array.push(result[i].bBandEsToNoOwn);    	//挨个取出类别并填入类别数组
		        }

		        for(var i=0;i<result.length;i++){
		          receive_array.push(result[i].bBandEsToNoRef);    	//挨个取出类别并填入类别数组
		        }

		        for(var i=0;i<result.length;i++){
		        	circularGrade_array.push(result[i].circularGrade);    //挨个取出类别并填入类别数组
			    }
		        
		        tdma_power.hideLoading();    //隐藏加载动画
		        tdma_power_option = {
		          tooltip : {
		              trigger: 'axis'
		          },
		          legend: {
		              data:['本站发射电平/dB/10','本站接收电平/dB/10','环路质量']
		          },
		          calculable : true,
		          xAxis : [
		              {
		                  type : 'category',
		                  data : time_array
		              }
		          ],
		          yAxis : [
		              {
		                  type : 'value'
		              }
		          ],
		          series : [
		              {
		                  name:'本站发射电平/dB/10',
		                  type:'line',
		                  data:send_array,
		                  markPoint : {
		                      data : [
		                          {type : 'max', name: '最大值'},
		                          {type : 'min', name: '最小值'}
		                      ]
		                  },
		                  markLine : {
		                      data : [
		                          {type : 'average', name: '平均值'}
		                      ]
		                  }
		              },
		              {
		                  name:'本站接收电平/dB/10',
		                  type:'line',
		                  data:receive_array,
		                  markPoint : {
		                      data : [
		                          {type : 'max', name: '最大值'},
		                          {type : 'min', name: '最小值'}
		                      ]
		                  },
		                  markLine : {
		                      data : [
		                          {type : 'average', name: '平均值'}
		                      ]
		                  }
		              },
		              {
		                  name:'环路质量',
		                  type:'line',
		                  data:circularGrade_array,
		                  markPoint : {
		                      data : [
		                          {type : 'max', name: '最大值'},
		                          {type : 'min', name: '最小值'}
		                      ]
		                  },
		                  markLine : {
		                      data : [
		                          {type : 'average', name: '平均值'}
		                      ]
		                  }
		              }
		          ]

		        };
		        // 使用刚指定的配置项和数据显示图表。
		        tdma_power.setOption(tdma_power_option);

		     }

		  },
		  error : function(errorMsg) {
		    //请求失败时执行该函数
		    toastr.warning("获取TDMA功率参数失败!");
		    tdma_power.hideLoading();
		  }
		});
	}

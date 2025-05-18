(function($) {
    /* "use strict" */


 var dzChartlist = function(){
	//let draw = Chart.controllers.line.__super__.draw; //draw shadow
	var screenWidth = $(window).width();
	var donutChart = function(){
		$("span.donut").peity("donut", {
			width: "65",
			height: "65"
		});
	}
	var lineChart = function(){
		var options = {
          series: [{
          name: 'Total candidatures',
          data: [31, 40, 28, 51, 42, 60, 40]
        }, {
          name: 'candidatures Acceptées',
          data: [11, 32, 45, 32, 34, 70, 41]
        },{
		name: 'Candidatures Refusées',
          data: [12, 35, 55, 42, 44, 80, 51]
        }],
          chart: {
          height: 300,
		  toolbar:{
			show:false
		  },
          type: 'area'
        },
		colors:['#2BC155','#3F9AE0','#ff424d'],
		legend:{
			show:true
		},
        dataLabels: {
          enabled: false
        },
        stroke: {
			width:4,
          curve: 'smooth'
        },
       xaxis: {
			show: true,
			lines: {
				show: true,
			},
			labels: {
				show: true,
			},
			axisBorder: {
			  show: true,
			},
			
		},
		fill:{
			opacity:0.05,
			type:'solid'
		},
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        };

        var chart = new ApexCharts(document.querySelector("#lineChart"), options);
        chart.render();
	}
	/* Function ============ */
		return {
			init:function(){
			},
			
			
			load:function(){
				donutChart();
				lineChart();
			},
			
			resize:function(){
				
			}
		}
	
	}();

	jQuery(document).ready(function(){
	});
		
	jQuery(window).on('load',function(){
		setTimeout(function(){
			dzChartlist.load();
		}, 1000); 
		
	});

	jQuery(window).on('resize',function(){
		
		
	});     

})(jQuery);
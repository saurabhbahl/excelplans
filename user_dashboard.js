if ($.cookie('modal_user_dashboard') != 'loaded')
{
   $.cookie('modal_user_dashboard', 'loaded');
   // code to show modal
   setTimeout(function(){
		$('#modal_user_dashboard').modal('show');
	}, 2000)
}
function ex13() {
    $.ajax({
            url: site_url+"Products/localproductsummary",
            type: "GET",
            dataType: "JSON",
            success: function (row){

                    y1 = parseInt(row['sumTotal'].replace(/,/g, '').replace(/\$|\€|\₹/g, ''));

                    y2 = parseInt((y1 * ($('#ex13').val() / 100)) + y1);

                    y3 = parseInt((y2 * ($('#ex13').val() / 100)) + y2);

                    currency = row['currency'];

                    $('.ServiceIncomeProduct').text(parseInt($('#ex13').val()));
                    $('.RangeSelectorProduct').val(parseInt($('#ex13').val()));

                    drawBarGraphs('product_canvas', '#product_canvas', y1, y2, y3, currency);
                }

            })
}
function ex14(){
    $.ajax({
    url: site_url+"ImportedProducts/importedproductsummary",
    type: "GET",
    dataType: "JSON",
    success: function (row){

            y1 = parseInt(row['sumTotal'].replace(/,/g, '').replace(/\$|\€|\₹/g, ''));

            y2 = parseInt((y1 * ($('#ex14').val() / 100)) + y1);

            y3 = parseInt((y2 * ($('#ex14').val() / 100)) + y2);

            currency = row['currency'];

            $('.ServiceIncomeImpProduct').text(parseInt($('#ex14').val()));
            $('.RangeSelectorImpProduct').val(parseInt($('#ex14').val()));

            drawBarGraphs('import_canvas', '#import_canvas', y1, y2, y3, currency);
        }

    })
}
function ex15(){
     $.ajax({
            url: site_url+"Service_setup/ajax_summary",
            type: "GET",
            dataType: "JSON",
            success: function (row){

                    y1 = parseInt(row['sumTotal'].replace(/,/g, '').replace(/\$|\€|\₹/g, ''));

                    y2 = parseInt((y1 * ($('#ex15').val() / 100)) + y1);

                    y3 = parseInt((y2 * ($('#ex15').val() / 100)) + y2);

                    currency = row['currency'];

                    $('.ServiceIncomeService').text(parseInt($('#ex15').val()));
                    $('.RangeSelectorServices').val(parseInt($('#ex15').val()));

                    drawBarGraphs('service_canvas', '#service_canvas', y1, y2, y3, currency);
                }

            })
}
function ex16(){
     $.ajax({
            url: site_url+"revenue/ajax_summary",
            type: "GET",
            dataType: "JSON",
            success: function (row){

                    y1 = parseInt(row['annual_revenue_yearly1']);

                    y2 = parseInt((y1 * ($('#ex16').val() / 100)) + y1);

                    y3 = parseInt((y2 * ($('#ex16').val() / 100)) + y2);

                    currency = row['currency'];

                    $('.ServiceIncomeRevenue').text(parseInt($('#ex16').val()));
                    $('.RangeSelectorRevenue').val(parseInt($('#ex16').val()));

                    drawBarGraphs('revenue_canvas', '#revenue_canvas', y1, y2, y3, cur);
                }

            })
}

var myBarChart = null;
	$(document).ready(function () {
	      
	    drawingGraphs();
        reload_expense();

	    for (k = 0; k <= 1; k++) {

		$("#table-key_ratios_" + k).tableHeadFixer({'left': 1});

		$("#table-key_ratios_" + k).css({
		    "min-width": "920px"
		});
	    }

        //cur = '<?php echo $cur ?>';

        var table1;

        table1 = $('#tablepeoplesummary').DataTable({
            "Processing": true, //Feature control the processing indicator.
            "ServerSide": true, //Feature control DataTables' server-side processing mode.
            "bFilter": false,
            "bPaginate": false,
            "bSort":false,
            "bInfo": false,
            "bAutoWidth": false,
            //"order": [], //Initial no order.

            // Load data for the table's content from an Ajax source
            "ajax": {
                "url": site_url+"People/peoplesummary_dashboard",
                "type": "GET"
            },
            "drawCallback": function (d) {
                if (d.json !== undefined)
                {
                    setTimeout(function () {
                        CalcSerVal(d.json.Service_income, d.json.currency);
                    }, 300);
                    $('.people_RangeSelectorInput').val(parseInt(d.json.Service_income));
                    
                    $('.ServiceIncomePerson').text(parseInt(d.json.Service_income));
                }
            }
        });

        datalocalproduct();

        dataimpproduct();

        dataservice();

        datarevenue();

        $('#ex12').on("input change", function () {
            
            var y1=0;
            var y2=0;
            var y3=0;
            var currency;

            $.ajax({
            url: site_url+"People/peoplesummary_dashboard",
            type: "GET",
            dataType: "JSON",
            success: function (row){

                    $('.ServiceIncomePerson').text(parseInt($('#ex12').val()));
                    $('.people_RangeSelectorInput').val(parseInt($('#ex12').val()));

                    CalcSerVal(row['Service_income'], row['currency']);
                }

            })

            
        });

        $('#ex13').on("input change", function () {

            var y1=0;
            var y2=0;
            var y3=0;
            var currency;
            ex13();
        });

        $('#ex14').on("input change", function () {

            var y1=0;
            var y2=0;
            var y3=0;
            var currency;
            ex14();  
        });

        $('#ex15').on("input change", function () {

            var y1=0;
            var y2=0;
            var y3=0;
            var currency;
            ex15();
        });

        $('#ex16').on("input change", function () {

            var y1=0;
            var y2=0;
            var y3=0;
            var currency;
            ex16();  
        });

	})

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	    var target = $(e.target).attr("href") // activated tab
	    if ((target == '#menu0')) {
		drawingGraphs();
	    }
	})

    function datalocalproduct(){

        $.ajax({
            url: site_url+"Products/localproductsummary",
            type: "GET",
            dataType: "JSON",
            success: function (row){

                $('.ServiceIncomeProduct').text(parseInt(row['Service_income']));
                $('.RangeSelectorProduct').val(parseInt(row['Service_income']));
            }
        })

    }

    function dataimpproduct(){

        $.ajax({
            url: site_url+"ImportedProducts/importedproductsummary",
            type: "GET",
            dataType: "JSON",
            success: function (row){

                $('.ServiceIncomeImpProduct').text(parseInt(row['Service_income']));
                $('.RangeSelectorImpProduct').val(parseInt(row['Service_income']));
            }
        })

    }

    function dataservice(){

        $.ajax({
            url: site_url+"Service_setup/ajax_summary",
            type: "GET",
            dataType: "JSON",
            success: function (row){

                $('.ServiceIncomeService').text(parseInt(row['Service_income']));
                $('.RangeSelectorServices').val(parseInt(row['Service_income']));
            }
        })

    }

    function datarevenue(){

        $.ajax({
            url: site_url+"revenue/ajax_summary",
            type: "GET",
            dataType: "JSON",
            success: function (row){

                $('.ServiceIncomeRevenue').text(parseInt(row['Service_income']));
                $('.RangeSelectorRevenue').val(parseInt(row['Service_income']));
            }
        })

    }


	function drawingGraphs() {

	    $.ajax({
		url: site_url+"User_dashboard/ajax_report_graph",
		type: "POST",
		dataType: "JSON",
		success: function (row)
		{
		    ex13();
		    ex14();
		    ex15();
		    ex16();
		   // drawBarGraphs('product_canvas', '#product_canvas', row['cogproductyear1'], row['cogproductyear2'], row['cogproductyear3'], row['currency']);
		 //   drawBarGraphs('import_canvas', '#import_canvas', row['cogimportyear1'], row['cogimportyear2'], row['cogimportyear3'], row['currency']);
		  //  drawBarGraphs('service_canvas', '#service_canvas', row['serviceyear'], row['serviceyear2'], row['serviceyear3'], row['currency']);
          //  drawBarGraphs('revenue_canvas', '#revenue_canvas', row['annual_revenue_yearly1'], row['annual_revenue_yearly2'], row['annual_revenue_yearly3'], row['currency']);

		    var graph_1 = new Array;
		    var graph_2 = new Array;
		    var graph_3 = new Array;

		    for (i = 1; i <= 12; i++) {
			graph_1.push(row['graph_data_1_' + i]);
			graph_2.push(row['graph_data_2_' + i]);
			graph_3.push(row['graph_data_3_' + i]);
		    }
		    drawLineGraphs(graph_1, graph_2, graph_3, row['currency'], row['table_header']);

		    drawPieGraphs('expenses_canvas', '#expenses_canvas', row['total_monthly_marketing'], row['total_monthly_public'], row['total_monthly_administrator'], row['total_monthly_other'], row['currency']);

		    var label = [];
		    var total_payroll = [];


		    for (i = 0; i <= row['people_count']; i++) {
    			if (i % 2 == 0) {

    			    label.push(row['people_detail'][i]);

    			} else {

    			    total_payroll.push(row['people_detail'][i]);

    			}
		    }

		    var chartdata = {
			labels: label,
			datasets: [
			    {
				label: 'Payroll Analysis',
				backgroundColor: [
				    'rgba(255, 99, 132, 0.2)',
				    'rgba(54, 162, 235, 0.2)',
				    'rgba(255, 206, 86, 0.2)',
				    'rgba(75, 192, 192, 0.2)',
				    'rgba(153, 102, 255, 0.2)',
				    'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
				    'rgba(255,99,132,1)',
				    'rgba(54, 162, 235, 1)',
				    'rgba(255, 206, 86, 1)',
				    'rgba(75, 192, 192, 1)',
				    'rgba(153, 102, 255, 1)',
				    'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1,
				data: total_payroll
			    }
			]
		    };


		    horizontalBarGraphs(chartdata, row['currency']);

            

		},
		error: function (jqXHR, textStatus, errorThrown)
		{
		    alert('Error fetching data');
		}
	    });

	}

	function drawBarGraphs(elementId, canvas, ty1, ty2, ty3, cur) {

	    var myChart;

	    $(canvas).html('');

	    var ctx = document.getElementById(elementId);
	    if (myChart != undefined) {
		myChart.destroy();
	    }

	    myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		    labels: ["Year 1", "Year 2", "Year 3"],
		    datasets: [{
			    data: [ty1, ty2, ty3],
			    backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)'
			    ],
			    borderColor: [
				'rgba(255,99,132,1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)'
			    ],
			    borderWidth: 1
			}]
		},
		options: {
		    legend: {
			display: false
		    },
		    scales: {
			yAxes: [{
				ticks: {
				    beginAtZero: true
				}
			    }]
		    },
		    tooltips: {
			mode: 'label',
			label: 'mylabel',
			callbacks: {
			    label: function (tooltipItem, data) {
				return cur + ' ' + number_format(tooltipItem.yLabel, 0, '.', ',');
			    }, },
		    },
		}
	    });

	}

	function drawLineGraphs(graph_data_1, graph_data_2, graph_data_3, cur, label) {

	    var myChart;

	    $('#breakeven_canvas').html('');

	    var ctx = document.getElementById('breakeven_canvas');
	    if (myChart != undefined) {
		myChart.destroy();
	    }

	    myChart = new Chart(ctx, {
		type: 'line',
		data: {
		    labels: label,
		    datasets: [{
			    label: "Total Income",
			    backgroundColor: "rgba(255, 99, 132, 0.2)",
			    borderColor: "rgba(255, 99, 132, 0.2)",
			    data: graph_data_1,
			    //fill: false
			}, {
			    label: "Total Expenses",
			    backgroundColor: "rgba(54, 162, 235, 0.2)",
			    borderColor: "rgba(54, 162, 235, 0.2)",
			    data: graph_data_2,
			    //fill: false
			}, {
			    label: "Total Gross Profit",
			    backgroundColor: "rgba(255, 206, 86, 0.2)",
			    borderColor: "rgba(255, 206, 86, 0.2)",
			    data: graph_data_3,
			    //fill: false
			}]
		},
		responsive: false,
		maintainAspectRatio: false,
		options: {
		    legend: {
			display: true
		    },
		    scales: {
			scaleBeginAtZero: false,
			scaleOverride: true,
			scaleSteps: 20,
			scaleStepWidth: 2,
			scaleStartValue: -20,
		    },
		    tooltips: {
			mode: 'label',
			label: 'mylabel',
			callbacks: {
			    label: function (tooltipItem, data) {
				return cur + ' ' + number_format(tooltipItem.yLabel, 2, '.', ',');
			    },
			},
		    },
		}
	    })
	}

	function drawPieGraphs(canvas, elementId, marketing, public, admin, other, cur) {

	    var myChart;

	    $(elementId).html('');

	    var ctx = document.getElementById(canvas);
	    if (myChart != undefined) {
		myChart.destroy();
	    }

	    myChart = new Chart(ctx, {
		type: 'pie',
		data: {
		    labels: ['Marketing', 'Public Relations', 'Administration', 'Others'],
		    datasets: [{
			    data: [marketing, public, admin, other],
			    backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)'
			    ],
			    hoverBackgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)'
			    ]
			}]
		},
		options: {
		    tooltips: {
			callbacks: {
			    label: function (tooltipItem, data) {
				var value = data.datasets[0].data[tooltipItem.index];
				var label = data.labels[tooltipItem.index];
				return label + ' ' + cur + number_format(value, 0, '.', ',');
			    },
			},
		    },
		}
	    })
	}

	function horizontalBarGraphs(chartdata, cur) {

	    var myChart;

	    $('#people_canvas').html('');

	    var ctx = document.getElementById('people_canvas');
	    if (myChart != undefined) {
		myChart.destroy();
	    }

	    myChart = new Chart(ctx, {
		type: 'horizontalBar',
		data: chartdata,
		options: {
		    legend: {
			display: true
		    },
		    scales: {
			xAxes: [{
				ticks: {
				    beginAtZero: true
				}
			    }]
		    },
		    tooltips: {
			mode: 'label',
			label: 'mylabel',
			callbacks: {
			    label: function (tooltipItem, data) {
				return cur + ' ' + number_format(tooltipItem.xLabel, 0, '.', ',');
			    }, },
		    },
		}
	    })

	}

	function number_format(number, decimals, decPoint, thousandsSep) {
	    decimals = decimals || 0;
	    number = parseFloat(number);

	    if (!decPoint || !thousandsSep) {
		decPoint = '.';
		thousandsSep = ',';
	    }

	    var roundedNumber = Math.round(Math.abs(number) * ('1e' + decimals)) + '';
	    // add zeros to decimalString if number of decimals indicates it
	    roundedNumber = (1 > number && -1 < number && roundedNumber.length <= decimals)
		    ? Array(decimals - roundedNumber.length + 1).join("0") + roundedNumber
		    : roundedNumber;
	    var numbersString = decimals ? roundedNumber.slice(0, decimals * -1) : roundedNumber.slice(0);
	    var checknull = parseInt(numbersString) || 0;

	    // check if the value is less than one to prepend a 0
	    numbersString = (checknull == 0) ? "0" : numbersString;
	    var decimalsString = decimals ? roundedNumber.slice(decimals * -1) : '';

	    var formattedNumber = "";
	    while (numbersString.length > 3) {
		formattedNumber = thousandsSep + numbersString.slice(-3) + formattedNumber
		numbersString = numbersString.slice(0, -3);
	    }

	    return (number < 0 ? '-' : '') + numbersString + formattedNumber + (decimalsString ? (decPoint + decimalsString) : '');
	}



	$(document).ready(function () {
	    $('.progress .progress-bar').css("width",
		    function () {
			return $(this).attr("aria-valuenow") + "%";
		    }
	    )
	});

	$('.next-step, .prev-step').on('click', function (e) {
	    var $activeTab = $('.tab-pane.active');
	    $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
	    if ($(e.target).hasClass('next-step')) {

		var nextTab = $activeTab.next('.tab-pane').attr('id');
		$('[href="#' + nextTab + '"]').removeClass('btn-default');
		$('[href="#' + nextTab + '"]').tab('show');
		$("body").scrollTop(0);
	    } else {

		var prevTab = $activeTab.prev('.tab-pane').attr('id');
		$('[href="#' + prevTab + '"]').removeClass('btn-default');
		$('[href="#' + prevTab + '"]').tab('show');
		$("body").scrollTop(0);
	    }
	});
	
	





$(document).ready(function(){

  $('.next').click(function(){
  
    var nextId = $(this).parents('.tab-pane').next().attr("id");
    $('[href=#'+nextId+']').tab('show');
    return false;
    
  })
  
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    
    //update progress
    var step = $(e.target).data('step');
    var percent = (parseInt(step) / 1) * 100;
    
    $('.progress-bar').css({width: percent + '%'});
    $('.progress-bar').text("Step " + step + " of 1");
    
    //e.relatedTarget // previous tab
    
  })
  
  $('.first').click(function(){
  
    $('#myWizard a:first').tab('show')
  
  })

});

$(".wizard").each(function() {
  var index = 0;
  var wizard = $(this);

  $(wizard).prepend('<div class="wizardProgress"></div>');
  $(wizard).prepend('<div class="header"></div>');

  $(wizard).find(".wizardPanel").each(function() {

    $(wizard).find(".wizardProgress").append("<div>" + $(this).data("title") + "</div>");
  });

  $(wizard).find(".wizardProgress div").click(function() {
    selectPanel($(this).index());
  });

  $(wizard).append('<div class="footer"><button id="btnPrev" class="btn btn-default">Prev</button><button id="btnNext" class="btn btn-primary">Next</button></div>');

  $(wizard).find("#btnPrev").click(function() {
    selectPanel($(".wizardProgress .selected").index() - 1);
  });
  $(wizard).find("#btnNext").click(function() {
    selectPanel($(".wizardProgress .selected").index() + 1);
  });

  selectPanel(0);

  function selectPanel(index) {


      if (index == 0) {
        $(wizard).find("#btnPrev").fadeOut();
      } else {
        $(wizard).find("#btnPrev").fadeIn();
      }

      if (index == $(".wizardProgress div").length - 1) {
        $(wizard).find("#btnNext").fadeOut();
      } else {
        $(wizard).find("#btnNext").fadeIn();
      }

      $(".wizardProgress .selected").removeClass("selected");
      var selectedTab = $(".wizardProgress div").get(index);
      $(selectedTab).addClass("selected");

      $(".wizardPanel").slideUp();
      var selectedPanel = $(wizard).find(".wizardPanel").get(index);
      $(selectedPanel).slideDown();
    }
  

});

function reload_expense(){

   url = site_url+"expenses/ajax_expense_summary";
  $.ajax({

    url : url,
    type: "POST",
    success: function(data)
    {

      var summary_data = JSON.parse(data);
        
        console.log(summary_data);
         
      var cur = summary_data['currency'][0];
      var summary = summary_data.expense_summary;
      var html="";
      var total_y1=0;
      var total_y2=0;
      var total_y3=0;
      var  total_w = 0;
      var  total_m = 0;
      var  total_q = 0;

      for( var i=0;i<summary.length; i++){
        var purpose = summary[i]['purpose'];
        var cost_increase = get_cost_increase_perc(summary_data.cost_increase_percentage,summary[i]);
          html+="<tr id="+summary[i]['purpose']+" onclick='update_expenses(\""+purpose+"\")'>"
            +"<td>"
              +"Total "+summary[i]['purpose']
            +"</td>"
            

        var year1 = parseInt(summary[i]['yearly_cost']);
        var year2 = parseInt(year1)*cost_increase + parseInt(year1);
        var year3 = parseInt(year2)*cost_increase + parseInt(year2);
        year1;
        year2;
        year3;

        total_y1 = total_y1+year1;
        total_y2 = total_y2+year2;
        total_y3 = total_y3+year3;


        html+=" <td id='"+summary[i]['purpose']+"_year1' data-val='"+year1+"'>"+cur+number_format(year1,0,'.',',')+" </td>";
        html+=" <td id='"+summary[i]['purpose']+"_year2' data-val='"+year2+"'>"+cur+number_format(year2,0,'.',',')+" </td>";
        html+=" <td id='"+summary[i]['purpose']+"_year3' data-val='"+year3+"'>"+cur+number_format(year3,0,'.',',')+" </td>";
        html+="</tr>";
      }

        var total = summary_data.total;

        html+='<tr onclick="update_expenses(\'loadchart\')" style="background-color: #d3d3d3;">'
          +'<td><b>Total:</b></td>'
          +'<td id="total_y1" data-val="'+total_y1+'">'
            +'<b>'+cur+number_format(total_y1,0,'.',',')+'</b>'
          +'</td>'
          +'<td id="total_y2" data-val="'+total_y2+'">'
            +'<b>'+cur+number_format(total_y2,0,'.',',')+'</b>'
          +'</td>'
          +'<td id="total_y3" data-val="'+total_y3+'">'
            +'<b>'+cur+number_format(total_y3,0,'.',',')+'</b>'
          +'</td>'
          +'</tr>';

          $("#table2 tbody").empty();
          $("#table2 tbody").append(html);


        update_expenses('loadchart');
    },
    error: function (jqXHR, textStatus, errorThrown){

        throw(errorThrown);
    }
  });
} /* reload graph */

function update_expenses(account){
  if(myBarChart!=null){
    $("#chart-container").empty();
    $("#chart-container").append('<canvas id="expenses_bar_canvas"  width="300" height="200" ></canvas>');
  }
  var ctx = $("#expenses_bar_canvas");
  if(account=="loadchart"){
    var year1 = $("#total_y1").attr('data-val').replace(/\$|\€|\₹/g, '').replace(/,/g, '');
    var year2 = $("#total_y2").attr('data-val').replace(/\$|\€|\₹/g, '').replace(/,/g, '');
    var year3 = $("#total_y3").attr('data-val').replace(/\$|\€|\₹/g, '').replace(/,/g, '');
  }
  else{
    var year1 = $("#"+account+"_year1").attr('data-val').replace(/\$|\€|\₹/g, '').replace(/,/g, '');
    var year2 = $("#"+account+"_year2").attr('data-val').replace(/\$|\€|\₹/g, '').replace(/,/g, '');
    var year3 = $("#"+account+"_year3").attr('data-val').replace(/\$|\€|\₹/g, '').replace(/,/g, '');
  }
  var data = {
        labels: ["Year One","Year Two","Year Three"],
        datasets: [{
          label: "Expense Summary",
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1,
          data: [
            year1,
            year2,
            year3
          ],
        }]
  };
  myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: true
        }]
      },
      tooltips: {
       mode: 'label',
       label: 'mylabel',
       callbacks: {
           label: function(tooltipItem, data) {
               return cur+' '+number_format(tooltipItem.yLabel,0,'.',','); },},
      },
    }
  });
}


function get_cost_increase_perc(perc_array,obj){
  var cost = 1;

  if(perc_array.length > 0 && perc_array[0] !== null) {

      if(obj['purpose']=='Marketing')
        cost = perc_array[0]['marketing'];

      if(obj['purpose']=='Administration')
        cost = perc_array[0]['ac'];

      if(obj['purpose']=='Public-Relations')
        cost = perc_array[0]['pr'];

      if(obj['purpose']=='Other')
        cost = perc_array[0]['other'];
  }

  return cost/100;
}

$('#ex8').on("input change", function(){
   var sv = parseInt($("#ex8").val());
   $("#m_perc").text(sv);
   $("#ex8").val(sv);
   if($("#Marketing").length>0){

   var account = "Marketing";
   var years= [];
   years['year1'] = parseInt($("#Marketing_year1").attr('data-val'));
   years['year2'] = parseInt( years['year1'] * (sv/100)) + years['year1'];
   years['year3'] = parseInt( years['year2'] * (sv/100)) + years['year2'];

   $("#Marketing_year2").attr('data-val',years['year2']);
   $("#Marketing_year3").attr('data-val',years['year3']);
   $("#Marketing_year2").text(cur+number_format(years['year2'],0,'.',','));
   $("#Marketing_year3").text(cur+number_format(years['year3'],0,'.',','));
   calculate_total();
   update_expenses(account);

   }

});
$('#ex9').on("input change", function(){
   var sv = parseInt($("#ex9").val());
   $("#p_perc").text(sv);
   $("#ex9").val(sv);
   if($("#Public-Relations").length>0)
   {
      var account = "Public-Relations";
      var years= [];
      years['year1'] = parseInt($("#Public-Relations_year1").attr('data-val'));
      years['year2'] = parseInt( years['year1'] * (sv/100)) + years['year1'];
      years['year3'] = parseInt( years['year2'] * (sv/100)) + years['year2'];

      $("#Public-Relations_year2").attr('data-val',years['year2']);
      $("#Public-Relations_year3").attr('data-val',years['year3']);
      $("#Public-Relations_year2").text(cur+number_format(years['year2'],0,'.',','));
      $("#Public-Relations_year3").text(cur+number_format(years['year3'],0,'.',','));
      calculate_total();
      update_expenses(account);
  }
});
$('#ex10').on("input change", function(){
    var sv = parseInt($("#ex10").val());
    $("#a_perc").text(sv);
    $("#ex10").val(sv);
    if($("#Administration").length>0){
      var account = "Administration";
      var years= [];
      years['year1'] = parseInt($("#Administration_year1").attr('data-val'));
      years['year2'] = parseInt( years['year1'] * (sv/100)) + years['year1'];
      years['year3'] = parseInt( years['year2'] * (sv/100)) + years['year2'];

      $("#Administration_year2").attr('data-val',years['year2']);
      $("#Administration_year3").attr('data-val',years['year3']);
      $("#Administration_year2").text(cur+number_format(years['year2'],0,'.',','));
      $("#Administration_year3").text(cur+number_format(years['year3'],0,'.',','));
      calculate_total();
      update_expenses(account);
    }
});
$('#ex11').on("input change", function(){
    var sv = parseInt($("#ex11").val());
    $("#o_perc").text(sv);
    $("#ex11").val(sv);
    if($("#Other").length>0){
      var account = "Other";
      var years= [];
      years['year1'] = parseInt($("#Other_year1").attr('data-val'));
      years['year2'] = parseInt( years['year1'] * (sv/100)) + years['year1'];
      years['year3'] = parseInt( years['year2'] * (sv/100)) + years['year2'];

      $("#Other_year2").attr('data-val',years['year2']);
      $("#Other_year3").attr('data-val',years['year3']);
      $("#Other_year2").text(cur+number_format(years['year2'],0,'.',','));
      $("#Other_year3").text(cur+number_format(years['year3'],0,'.',','));
      calculate_total();
      update_expenses(account);
    }
});

$('#save_expenses').click(function(){
  var m_perc = $("#ex8").val();
  var p_perc = $("#ex9").val();
  var a_perc = $("#ex10").val();
  var o_perc = $("#ex11").val();

  $.ajax({
    type: 'GET',
    url: site_url+"Expenses/updateExpensesIncrease?m="+m_perc+"&p="+p_perc+"&a="+a_perc+"&o="+o_perc,

    success:
      function(data){

        $('#modalConfirmYesNo').modal('show');

          $("#lblTitleConfirmYesNo").html("");
          $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
            +"<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
            +"<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
            +"c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
            +"c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
            +"<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
            +"<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
            +"<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
            +"</svg>"
            +"</div>"
            +"<p class='alert-box'>Your changes have been saved successfully</p>");

          $("#btnNoConfirmYesNo").hide();

          $("#btnYesConfirmYesNo").html('Okey');

          $("#btnYesConfirmYesNo").off('click').click(function () {

              $('#modalConfirmYesNo').modal('hide');

              $("#btnNoConfirmYesNo").show();

              $("#btnYesConfirmYesNo").html('Yes');
          });

        //$("#btnNoConfirmYesNo").off('click').click(function () {

        //    $('#modalConfirmYesNo').modal('hide');
        //});
        calculate_total();
      }
  });


});

function calculate_total(){

  var total_y1 = 0;
  var total_y2 = 0;
  var total_y3 = 0;

  total_y1= parseFloat( ($("#Marketing_year1").length>0) ? $("#Marketing_year1").attr('data-val'):0.00 ) + parseFloat( ($("#Public-Relations_year1").length>0) ? $("#Public-Relations_year1").attr('data-val'):0.00 ) + parseFloat( ($("#Administration_year1").length>0) ? $("#Administration_year1").attr('data-val'):0.00 ) + parseFloat( ($("#Other_year1").length>0) ? $("#Other_year1").attr('data-val'):0.00 );
  total_y2= parseFloat( ($("#Marketing_year2").length>0) ? $("#Marketing_year2").attr('data-val'):0.00 ) + parseFloat( ($("#Public-Relations_year2").length>0) ? $("#Public-Relations_year2").attr('data-val'):0.00 ) + parseFloat( ($("#Administration_year2").length>0) ? $("#Administration_year2").attr('data-val'):0.00 ) + parseFloat( ($("#Other_year2").length>0) ? $("#Other_year2").attr('data-val'):0.00 );
  total_y3= parseFloat( ($("#Marketing_year3").length>0) ? $("#Marketing_year3").attr('data-val'):0.00 ) + parseFloat( ($("#Public-Relations_year3").length>0) ? $("#Public-Relations_year3").attr('data-val'):0.00 ) + parseFloat( ($("#Administration_year3").length>0) ? $("#Administration_year3").attr('data-val'):0.00 ) + parseFloat( ($("#Other_year3").length>0) ? $("#Other_year3").attr('data-val'):0.00 );

  $("#total_y1").attr('data-val',total_y1);
  $("#total_y2").attr('data-val',total_y2);
  $("#total_y3").attr('data-val',total_y3);

  $("#total_y1").text(cur+number_format(total_y1,0,'.',','));
  $("#total_y2").text(cur+number_format(total_y2,0,'.',','));
  $("#total_y3").text(cur+number_format(total_y3,0,'.',','));
}
 
function CalcSerVal(ser, cur) {

    $('#ChartDisplay').html('');
    var tb = $('#tablepeoplesummary');
    ser = parseInt(ser);
    var ty1 = 0, ty2 = 0, ty3 = 0;
    tb.find('tbody tr').each(function () {
        
        var y1 = parseInt($(this).find('td:eq(1)').text().replace(/,/g, '').replace(/\$|\€|\₹/g, ''));
        var y2 = parseInt((y1 * (ser / 100)) + y1);
        var y3 = parseInt((y2 * (ser / 100)) + y2);
        
        ty1 += y1;
        ty2 += y2;
        ty3 += y3;
        if (isNaN(y2)) {
            $(this).find('td:eq(2)').text(cur + number_format(y1, 0, '.', ','));
            $(this).find('td:eq(3)').text(cur + number_format(y1, 0, '.', ','));
        } else {
            $(this).find('td:eq(2)').text(cur + number_format(y2, 0, '.', ','));
            $(this).find('td:eq(3)').text(cur + number_format(y3, 0, '.', ','));
        }

    });
    
    if(isNaN(ty1)){
      $('.SumYTotal1').text(cur + number_format(0, 0, '.', ','));
    }else{
      $('.SumYTotal1').text(cur + number_format(ty1, 0, '.', ','));
    }
    if (isNaN(ty2)) {
      $('.SumYTotal2').text(cur + number_format(0, 0, '.', ','));
    }else {
      $('.SumYTotal2').text(cur + number_format(ty2, 0, '.', ','));
    }
    if (isNaN(ty3)) {
      $('.SumYTotal3').text(cur + number_format(0, 0, '.', ','));
    }else {
      $('.SumYTotal3').text(cur + number_format(ty3, 0, '.', ','));
    }
    //ChartDisplay

    var ctx = document.getElementById("ChartDisplay");
    var peopleChart;

    if (peopleChart != undefined) {
        peopleChart.destroy();
    }
    peopleChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Year 1", "Year 2", "Year 3"],
            datasets: [{
                    data: [ty1, ty2, ty3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            },
            tooltips: {
       mode: 'label',
       label: 'mylabel',
       callbacks: {
           label: function(tooltipItem, data) {
               return cur+' '+number_format(tooltipItem.yLabel,0,'.',','); },},
      },
        }
    });
} 

$('#save_people').click(function () {
    vi = $('.people_RangeSelectorInput').val();
    var datapass = 'si=' + vi;

    $.ajax({
        type: 'POST',
        data: datapass,
        url: site_url+"people/saving_range",
        datatype: 'json',
        success:
            function (data) {
                //console.log(data);
                var datas = jQuery.parseJSON(data);
                //alert(datas);
                if (datas.status == 'yes') {

            $('#modalConfirmYesNo').modal('show');
            $("#lblTitleConfirmYesNo").html("");
            $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
            +"<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
            +"<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
            +"c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
            +"c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
            +"<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
            +"<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
            +"<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
            +"</svg>"
            +"</div>"
            +"<p class='alert-box'>Your changes have been saved successfully</p>");

          $("#btnNoConfirmYesNo").hide();

          $("#btnYesConfirmYesNo").html('Okey');

          $("#btnYesConfirmYesNo").off('click').click(function () {

          $('#modalConfirmYesNo').modal('hide');

          $("#btnNoConfirmYesNo").show();

           $("#btnYesConfirmYesNo").html('Yes');
          });
                }
                if (datas.status == 'no') {
                    $('#modalConfirmYesNo').modal('show');

        $("#lblTitleConfirmYesNo").html("User Information");
        $("#lblMsgConfirmYesNo").html("Error while saving the change");

        $("#btnNoConfirmYesNo").hide();

        $("#btnYesConfirmYesNo").html('Okey');

        $("#btnYesConfirmYesNo").off('click').click(function () {

        $('#modalConfirmYesNo').modal('hide');

        $("#btnNoConfirmYesNo").show();

        $("#btnYesConfirmYesNo").html('Yes');
      });

                }
            }
    });
});
$('#saveproduct').click(function () {

    vi = $('.RangeSelectorProduct').val();
    var datapass = 'si=' + vi;

    $.ajax({
        type: 'POST',
        data: datapass,
        url: site_url+"Products/update_sales_income_increase",
        datatype: 'json',
        success:
          function (data) {
            var datas = jQuery.parseJSON(data);
            if (datas.status == 'yes') {
                 $('#modalConfirmYesNo').modal('show');
                 $("#lblTitleConfirmYesNo").html("");
                  $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
                    +"<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                    +"<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                    +"c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                    +"c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                    +"<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                    +"<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                    +"<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                    +"</svg>"
                    +"</div>"
                    +"<p class='alert-box'>Your changes have been saved successfully</p>");

                  $("#btnNoConfirmYesNo").hide();

                  $("#btnYesConfirmYesNo").html('Okey');

                  $("#btnYesConfirmYesNo").off('click').click(function () {

                      $('#modalConfirmYesNo').modal('hide');

                      $("#btnNoConfirmYesNo").show();

                      $("#btnYesConfirmYesNo").html('Yes');
                  });
            }
            if (datas.status == 'no') {
              $('#modalConfirmYesNo').modal('show');
              $("#lblTitleConfirmYesNo").html("User Information");
              $("#lblMsgConfirmYesNo").html("Error while saving the change");
              $("#btnNoConfirmYesNo").hide();

              $("#btnYesConfirmYesNo").off('click').click(function () {

                      $('#modalConfirmYesNo').modal('hide');

                      $("#btnNoConfirmYesNo").show();

                      $("#btnYesConfirmYesNo").html('Yes');
              });

            }
          }
    });
});
$('#saverevenue').click(function () {

    vi = $('.RangeSelectorRevenue').val();
    var datapass = 'si=' + vi;

    $.ajax({
        type: 'POST',
        data: datapass,
        url: site_url+"Revenue/update_revenue_income_increase",
        datatype: 'json',
        success:
          function (data) {
            var datas = jQuery.parseJSON(data);
            if (datas.status == 'yes') {
                 $('#modalConfirmYesNo').modal('show');
                 $("#lblTitleConfirmYesNo").html("");
                  $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
                    +"<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                    +"<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                    +"c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                    +"c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                    +"<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                    +"<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                    +"<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                    +"</svg>"
                    +"</div>"
                    +"<p class='alert-box'>Your changes have been saved successfully</p>");

                  $("#btnNoConfirmYesNo").hide();

                  $("#btnYesConfirmYesNo").html('Okey');

                  $("#btnYesConfirmYesNo").off('click').click(function () {

                      $('#modalConfirmYesNo').modal('hide');

                      $("#btnNoConfirmYesNo").show();

                      $("#btnYesConfirmYesNo").html('Yes');
                  });
            }
            if (datas.status == 'no') {
              $('#modalConfirmYesNo').modal('show');
              $("#lblTitleConfirmYesNo").html("User Information");
              $("#lblMsgConfirmYesNo").html("Error while saving the change");
              $("#btnNoConfirmYesNo").hide();

              $("#btnYesConfirmYesNo").off('click').click(function () {

                      $('#modalConfirmYesNo').modal('hide');

                      $("#btnNoConfirmYesNo").show();

                      $("#btnYesConfirmYesNo").html('Yes');
              });

            }
          }
    });
});
$('#saveimpproduct').click(function () {

    vi = $('.RangeSelectorImpProduct').val();
    var datapass = 'si=' + vi;

    $.ajax({
        type: 'POST',
        data: datapass,
        url: site_url+"ImportedProducts/update_sales_income_increase",
        datatype: 'json',
        success:function (data) {
            var datas = jQuery.parseJSON(data);
            
            if (datas.status == 'yes') {
                $('#modalConfirmYesNo').modal('show');
                 $("#lblTitleConfirmYesNo").html("");
                  $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
                    +"<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                    +"<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                    +"c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                    +"c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                    +"<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                    +"<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                    +"<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                    +"</svg>"
                    +"</div>"
                    +"<p class='alert-box'>Your changes have been saved successfully</p>");

                  $("#btnNoConfirmYesNo").hide();

                  $("#btnYesConfirmYesNo").html('Okey');

                  $("#btnYesConfirmYesNo").off('click').click(function () {

                      $('#modalConfirmYesNo').modal('hide');

                      $("#btnNoConfirmYesNo").show();

                      $("#btnYesConfirmYesNo").html('Yes');
                  });
            }
            if (datas.status == 'no') {
                $('#modalConfirmYesNo').modal('show');
                  $("#lblTitleConfirmYesNo").html("User Information");
                  $("#lblMsgConfirmYesNo").html("Error while saving the change");
                  $("#btnNoConfirmYesNo").hide();

                  $("#btnYesConfirmYesNo").off('click').click(function () {

                          $('#modalConfirmYesNo').modal('hide');

                          $("#btnNoConfirmYesNo").show();

                          $("#btnYesConfirmYesNo").html('Yes');
                  });
            }
        }
    });
});
$('#saveservice').click(function(){
   vi = $('.RangeSelectorServices').val();
    var datapass = 'si='+vi;
    
    $.ajax({
      type: 'POST',
      data: datapass,
      url: site_url+"Upsincome/upincome",
      datatype: 'json',
      success: function(data){
           var datas=jQuery.parseJSON(data);

            if(datas.status=='yes'){
                $('#modalConfirmYesNo').modal('show');
                $("#lblTitleConfirmYesNo").html("");
                $("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
                    +"<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
                    +"<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
                    +"c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
                    +"c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
                    +"<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
                    +"<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
                    +"<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
                    +"</svg>"
                    +"</div>"
                    +"<p class='alert-box'>Your changes have been saved successfully</p>");

                $("#btnNoConfirmYesNo").hide();

                $("#btnYesConfirmYesNo").html('Okey');

                $("#btnYesConfirmYesNo").off('click').click(function () {

                      $('#modalConfirmYesNo').modal('hide');

                      $("#btnNoConfirmYesNo").show();

                      $("#btnYesConfirmYesNo").html('Yes');
                  });
            }
            if(datas.status=='no'){
                $('#modalConfirmYesNo').modal('show');
                  $("#lblTitleConfirmYesNo").html("User Information");
                  $("#lblMsgConfirmYesNo").html("Error while saving the change");
                  $("#btnNoConfirmYesNo").hide();

                  $("#btnYesConfirmYesNo").off('click').click(function () {

                          $('#modalConfirmYesNo').modal('hide');

                          $("#btnNoConfirmYesNo").show();

                          $("#btnYesConfirmYesNo").html('Yes');
                  });
            }
        }
    })
});
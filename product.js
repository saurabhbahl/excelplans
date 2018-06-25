//if ($.cookie('modal-imported_products') != 'loaded') {
//    $.cookie('modal-imported_products', 'loaded');
//    // code to show modal
//    setTimeout(function () {
//        $('#modal-imported_products').modal('show');
//    }, 2000)
//}

$('input').blur(function () {
	var $this = $(this);
	if ($this.val())
		$this.addClass('used');
	else
		$this.removeClass('used');
});

$(document).ready(function () {
	$('input').each(function () {
		var $this = $(this);
		if ($this.val())
			$this.addClass('used');
		else
			$this.removeClass('used');
	});

});


$(document).ready(function () {
	$('#purchases').find('td input').each(function () {
		$(this).prop('readonly', true);
	})

	/* IPAD KeyBoard Fixed*/
	$('#modalConfirmYesNo').css('position', 'fixed');
	$('#modalConfirmYes').css('position', 'fixed');

	$('.next').click(function () {
		var nextId = $(this).parents('.tab-pane').next().attr("id");
		$('[href=#' + nextId + ']').tab('show');
		return false;
	})

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

		//update progress
		var step = $(e.target).data('step');
		var percent = (parseInt(step) / 3) * 100;
		$('.progress-bar').css({ width: percent + '%' });
		$('.progress-bar').text("Step " + step + " of 3");
	})
})


var cur;
var products_cost = 0;
var MarkUpOnCost = 0;
var rrp_cost = 0;
var counter = 2;

jQuery('a#add_row').click(function (event) {
	event.preventDefault();
	counter++;
	var newRow = '<tr id="row_id_' + counter + '">'
		+ '<input name="id_' + counter + '" id="id_' + counter + '" type="hidden">'
		+ '<td id="td_type_' + counter + '">'
		+ '<div class="form-group is-empty no-margin"><input name="type_' + counter + '" class="form-control" id="type_' + counter + '" placeholder="Enter Item Type" type="text"></input><span class="material-input"></span></div></td>'
		+ '<td id="td_description_' + counter + '">'
		+ '<div class="form-group is-empty no-margin"><input name="description_' + counter + '" class="form-control" id="description_' + counter + '" placeholder="Enter Item Description" type="text"></input><span class="material-input"></span></div></td>'
		+ '<td id="td_qty_' + counter + '">'
		+ '<div class="form-group no-margin"><input name="qty_' + counter + '" class="form-control used" id="qty_' + counter + '" onchange="getTotalMts(' + counter + ')" value="0" type="number"></input><span class="material-input"></span></div></td>'
		+ '<td id="td_price_' + counter + '">'
		+ '<div class="form-group no-margin"><input name="price_' + counter + '" class="form-control used" id="price_' + counter + '" onchange="getTotal(' + counter + ')" value="0" type="number"></input><span class="material-input"></span></div></td>'
		+ '<td id="td_totmts_' + counter + '">0</td>'
		+ '<td id="td_total_' + counter + '">0</td>'
		+ '<td id="td_vat_' + counter + '">0</td>'
		+ '<td id="td_totcost_' + counter + '">0</td>'
		+ '<td id="td_avecost_' + counter + '">0</td></tr>';
	var newRow1 = "<tr id='row_id_" + counter + "'>"
		+ "<input name='id_" + counter + "' id='id_" + counter + "' type='hidden'>"
		+ "<td id='td_type_" + counter + "'>"
		+ "<input type='text' name='type_" + counter + "' class='form-control' placeholder='Enter Item Type' id='type_" + counter + "'>"
		+ "</td>"
		+ "<td id='td_description_" + counter + "'>"
		+ "<input type='text' name='description_" + counter + "' class='form-control' placeholder='Enter Item Description' id='description_" + counter + "'>"
		+ "</td>"
		+ "<td id='td_qty_" + counter + "'>"
		+ "<input type='number' name='qty_" + counter + "' class='form-control' id='qty_" + counter + "' onChange='getTotalMts(" + counter + ")' value='0'>"
		+ "</td>"
		+ "<td id='td_price_" + counter + "'>"
		+ "<input type='number' name='price_" + counter + "' class='form-control' id='price_" + counter + "' onChange='getTotal(" + counter + ")' value='0'>"
		+ "</td>"
		+ "<td id='td_totmts_" + counter + "'>0"
		+ "</td>"
		+ "<td id='td_total_" + counter + "'>0"
		+ "</td>"
		+ "<td id='td_vat_" + counter + "'>0"
		+ "</td>"
		+ "<td id='td_totcost_" + counter + "'>0"
		+ "</td>"
		+ "<td id='td_avecost_" + counter + "'>0"
		+ "</td>"
		+ "</tr>";
	jQuery('table.table_bom').append(newRow);
});


function open_gallery(id) {
	var html = '';
	html += '<div id="myCarousel" class="carousel slide" data-ride="carousel">'
		+ '<ol class="carousel-indicators"></ol>'
		+ '<div class="carousel-inner" role="listbox">'
		+ '</div>'
		+ '<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">'
		+ '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>'
		+ '<span class="sr-only">Previous</span>'
		+ '</a>'
		+ '<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">'
		+ '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'
		+ '<span class="sr-only">Next</span>'
		+ '</a>'
		+ '<div/>';

	$('#lblGalleryLblMessage').append(html);

	$('#ModalGallery').modal('show');

	$('#ModalGallery').on('hidden.bs.modal', function () {

		$('#myCarousel').remove();
	})

	$.ajax({
		url: site_url + 'Products/ajax_get_image/' + id,
		type: "GET",
		dataType: "JSON",
		success: function (data) {
			//$(data.data).each(function (key, val) {

			for (i = 0; i < data.length; i++) {

				$('<li data-target="#myCarousel" data-slide-to="' + i + '"></li>').appendTo('.carousel-indicators');
				$('<div class="item"><img src="' + site_url + data[i]["ThumbNail"] + '" alt="Product id #' + data[i]["id"] + '"><div class="carousel-caption"><h3>Product ID #' + data[i]["id"] + '</h3><p>' + data[i]["Description"] + '</p></div></div>').appendTo('.carousel-inner');

			}
			;

			$('#myCarousel .carousel-indicators > li').first().addClass('active');
			$('#myCarousel .item').first().addClass('active');

			$('#myCarousel').carousel({
				interval: 3500,
			});

		},
		error: function (jqXHR, textStatus, errorThrown) {
			alert(errorThrown);
		}
	});
}


function getTotalMts(i) {
	var total_mts = 0;

	if ($('#qty_' + i).val() == "") {

		$('#qty_' + i).val(0);

	}

	total_mts = parseInt($('#sp_13').html().replace(/,/g, '')) * parseFloat($('#qty_' + i).val()).toFixed(2);

	if (total_mts == 0) {
		$('#td_totmts_' + i).html(total_mts);
	} else {
		$('#td_totmts_' + i).html(number_format(total_mts, 2, '.', ','))
	}
}


function getTotal(i) {
	var total = 0;
	var sum_total = 0;
	var vat = 0;
	var sum_vat = 0;
	var tot_cost = 0;
	var sum_totcost = 0;
	var ave_cost = 0;
	var sum_totave = 0;
	products_cost = 0;

	if ($('#price_' + i).val() == "") {
		$('#price_' + i).val(0);
	}

	total = (parseInt($('#sp_13').html().replace(/,/g, '')) * parseFloat($('#qty_' + i).val()).toFixed(2)) * parseFloat($('#price_' + i).val()).toFixed(2)

	if (total == 0) {
		$('#td_total_' + i).html(cur + total);
	} else {
		$('#td_total_' + i).html(cur + number_format(total, 2, '.', ','));
	}

	for (j = 0; j <= counter; j++) {

		sum_total += parseFloat($('#td_total_' + j).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''));
	}

	if (sum_total == 0) {
		$('.SumTotal').html(cur + sum_total)
	} else {
		$('.SumTotal').html(cur + number_format(sum_total, 2, '.', ','))
	}

	vat = total * 0.1;
	if (vat == 0) {
		$('#td_vat_' + i).html(cur + vat)
	} else {
		$('#td_vat_' + i).html(cur + number_format(vat, 2, '.', ','))
	}

	for (k = 0; k <= counter; k++) {
		sum_vat += parseFloat($('#td_vat_' + k).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''));
	}

	if (sum_vat == 0) {
		$('.SumVat').html(cur + sum_vat)
	} else {
		$('.SumVat').html(cur + number_format(sum_vat, 2, '.', ','))
	}

	tot_cost = total + vat

	if (tot_cost == 0) {
		$('#td_totcost_' + i).html(cur + tot_cost)
	} else {
		$('#td_totcost_' + i).html(cur + number_format(tot_cost, 2, '.', ','))
	}


	for (l = 0; l <= counter; l++) {
		sum_totcost += parseFloat($('#td_totcost_' + l).html().replace(/,/g, '').replace(/\$|\€|\?/g, '')).toFixed(2);
	}

	if (sum_totcost == 0) {
		$('.SumTotCost').html(cur + sum_totcost)
	} else {
		$('.SumTotCost').html(cur + number_format(sum_totcost, 2, '.', ','))
	}

	ave_cost = tot_cost / parseInt($('#sp_13').html().replace(/,/g, ''))

	if (ave_cost == 0) {
		$('#td_avecost_' + i).html(cur + ave_cost);
	} else {
		$('#td_avecost_' + i).html(cur + number_format(ave_cost, 2, '.', ','));
	}

	for (m = 0; m <= counter; m++) {
		sum_totave += parseFloat($('#td_avecost_' + m).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''));
	}

	if (sum_totave == 0) {
		$('.SumAveCost').html(cur + sum_totave)
		$('#bom_cost').val(sum_totave);
	} else {
		$('.SumAveCost').html(cur + number_format(sum_totave, 2, '.', ','))
		$('#bom_cost').val(number_format(sum_totave, 2, '.', ','));
	}

	products_cost = parseFloat($('#unit_cost').val()) + parseFloat($('.SumAveCost').html().replace(/,/g, '').replace(/\$|\€|\?/g, ''));

	if (products_cost == 0) {
		$('#products_cost').val(products_cost);
	} else {
		$('#products_cost').val(number_format(parseFloat(products_cost), 2, '.', ','));
	}

	if ($('#markup_on_cost').val() == "") {
		$('#markup_on_cost').val(0)
	}

	rrp_cost = parseFloat(products_cost) * parseFloat($('#markup_on_cost').val().replace(/,/g, '')) / 100 + parseFloat(products_cost).toFixed(2);
	if (rrp_cost == 0) {
		$('#rrp_cost').val(rrp_cost)
	} else {
		$('#rrp_cost').val(number_format(parseFloat(rrp_cost), 2, '.', ','))
	}
}


$('#products_cost').on('change', function () {
	products_cost = parseFloat($('#products_cost').val());
	rrp_cost = ((parseFloat(products_cost) * parseFloat($('#markup_on_cost').val())) / 100) + parseFloat(products_cost);
	if (rrp_cost == 0) {
		$('#rrp_cost').val(rrp_cost)
	} else {
		$('#rrp_cost').val(number_format(parseFloat(rrp_cost), 2, '.', ','))
	}
	MarkUpOnCost = parseFloat($('#rrp_cost').val().replace(/,/g, ''));
	TableCalculation();
})

$('#markup_on_cost').on('change', function () {
	if ($("#indus_type").val() != "Cosmetics") {
		products_cost = parseFloat($('#products_cost').val());
		rrp_cost = ((parseFloat(products_cost) * parseFloat($('#markup_on_cost').val())) / 100) + parseFloat(products_cost);
		if (rrp_cost == 0) {
			$('#rrp_cost').val(rrp_cost)
		} else {

			$('#rrp_cost').val(number_format(parseFloat(rrp_cost), 2, '.', ','))
		}
		MarkUpOnCost = parseFloat($('#rrp_cost').val().replace(/,/g, ''));
		TableCalculation();
	}
})

$('#table_projected_sales').on('change', 'input', function () {
	TableCalculation();
});


/*===============================This is for the Monthly Sales  confirmation =========================*/

function cancel() {
	$('#modalConfirmYesNo').modal('show');
	$("#lblTitleConfirmYesNo").html("User Confirmation");
	$("#lblMsgConfirmYesNo").html("Are you sure wanted to cancel this item?");
	$("#btnYesConfirmYesNo").off('click').click(function () {
		clearForm();
		$("#product_form").hide();
		$('#modalConfirmYesNo').modal('hide');
	});

	$("#btnNoConfirmYesNo").off('click').click(function () {
		$('#modalConfirmYesNo').modal('hide');
	});
}

function confirmation() {
	/*if (confirm("Do you want input monthly sales manually ??") == true) {
	 manualEntry();
	 } else {
	 automaticEntry();
	 */

	$('#modalConfirmYesNo').modal('show');
	$("#lblTitleConfirmYesNo").html("User Confirmation");
	$("#lblMsgConfirmYesNo").html("Option 1: <br/>Enter unit sales on a month by month bases.<br/><br/>Option 2:<br/>Enter an average equel qty for each month.");
	$("#btnYesConfirmYesNo").off('click').click(function () {

		$('#sales_projection').find('td input').each(function () {
			if ($(this).prop('readonly', true)) {
				$(this).prop('readonly', false);
			}
		})

		$('#purchases').find('td input').each(function () {
			if ($(this).prop('readonly', true)) {
				$(this).prop('readonly', false);
			}
		})

		var index = $(".wizardProgress .selected").index() + 1;
		selectPanel(index);
		$('#rad_manual').prop('checked', true);
		$('.manual').addClass('active');
		$('.year').removeClass('active');

		$('#monthlytable_qty').val("0")
		$('[name="unit_cost"]').val("0")
		$('[name="markup_on_cost"]').val("0")
		$('#sp_1').focus();
		$('#modalConfirmYesNo').modal('hide');

	});

	$("#btnNoConfirmYesNo").off('click').click(function () {
		$('#sales_projection').find('td input').each(function () {
			if ($(this).prop('readonly', false)) {
				$(this).prop('readonly', true);
			}
		})

		$('#monthlytable_qty').focus();
		$('#modalConfirmYesNo').modal('hide');
	});
}


/*==================================== This is for the Bill of materials confirmation ========================*/
/*iThis is for the Bill of materials confirmation*/

function confirmationBOM() {
	$('#modalConfirmYesNo').modal('show');
	$("#lblTitleConfirmYesNo").html("User Confirmation");
	$("#lblMsgConfirmYesNo").html("Do you want to insert Bill of Materials ??");
	$("#btnYesConfirmYesNo").off('click').click(function () {

		selectPanel(2);
		/*$('.nav a[href="#add_menu1"]').tab('show');*/
		$('#type_0').focus();
		$('#modalConfirmYesNo').modal('hide');
	});

	$("#btnNoConfirmYesNo").off('click').click(function () {

		var index = $(".wizardProgress .selected").index() + 3;
		selectPanel(3);

		$('#markup_on_cost').focus();
		$('#modalConfirmYesNo').modal('hide');
	});
}

function delete_confirmation(id) {
	/*if (confirm("Do you want insert Bill of Materials ??") == true) {
	 $('.nav a[href="#add_menu1"]').tab('show');
	 }else{
	 $('#markup_on_cost').focus();
	 }*/


	$('#modalConfirmYesNo').modal('show');
	$("#lblTitleConfirmYesNo").html("User Confirmation");
	$("#lblMsgConfirmYesNo").html("Are you sure you want to delete this product ??");
	$("#btnYesConfirmYesNo").off('click').click(function () {
		delete_localproduct(id)
		$('#modalConfirmYesNo').modal('hide');
	});

	$("#btnNoConfirmYesNo").off('click').click(function () {
		$('#modalConfirmYesNo').modal('hide');
	});
}

function manualEntryMonthly() {
	selectPanel(1);
	$('#rad_manual').prop('checked', true);
	$('#sales_projection').find('td input').each(function () {
		if ($(this).prop('readonly', true)) {
			$(this).prop('readonly', false);
		}
	})
	$('#purchases').find('td input').each(function () {
		if ($(this).prop('readonly', true)) {
			$(this).prop('readonly', false);
		}
	})
	$("sp_1").focus();

}

function automaticEntryMonthly() {
	if ($('#monthlytable_qty').val() == "") {
		alert("How many units do you plan to sell each month ?");
		$('#monthlytable_qty').focus();
	} else {
		$('#sales_projection').find('td input').each(function () {
			$(this).val($('#monthlytable_qty').val());
		});
		$('#purchases').find('td input').each(function () {
			$(this).val($('#monthlytable_qty').val());
		});

		$('#unit_cost').focus();
		TableCalculation();
	}
}


$(function () {
	//$('#start_date').daterangepicker({singleDatePicker: true});
	$("[data-mask]").inputmask();
	$('.btn-circle').on('click', function () {
		$('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
		$(this).addClass('btn-info').removeClass('btn-default').blur();
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
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var target = $(e.target).attr("href") // activated tab
		if ((target == '#localproductstep2')) {

			table1.ajax.reload(null, false);

		}
	});
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var target = $(e.target).attr("href") // activated tab
		if ((target == '#localproductstep3')) {
			$.ajax({
				url: site_url + 'Products/ajax_calculating_summary',
				type: "GET",
				dataType: "JSON",
				success: function (row) {
					for (i = 1; i <= 15; i++) {

						j = i - 1;
						if (i < 13) {
							$('#sales_month_' + i).html(row['table_header'][j]);
							$('#stock_month_' + i).html(row['table_header'][j]);
							$('#gross_month_' + i).html(row['table_header'][j]);
						}

						$('#summary_oq_' + i).html(number_format(row['total_oq_' + i], 0, '.', ','));
						$('#summary_sp_' + i).html(number_format(row['total_sp_' + i], 0, '.', ','));
						$('#summary_p_' + i).html(number_format(row['total_p_' + i], 0, '.', ','));
						$('#summary_cq_' + i).html(number_format(row['total_cq_' + i], 0, '.', ','));

						$('#summary_soq_' + i).html(row['cur'] + number_format(row['total_soq_' + i], 0, '.', ','));
						$('#summary_ssp_' + i).html(row['cur'] + number_format(row['total_ssp_' + i], 0, '.', ','));
						$('#summary_scp_' + i).html(row['cur'] + number_format(row['total_scp_' + i], 0, '.', ','));
						$('#summary_scq_' + i).html(row['cur'] + number_format(row['total_scq_' + i], 0, '.', ','));

						$('#summary_spp_' + i).html(row['cur'] + number_format(row['total_spp_' + i], 0, '.', ','));
						$('#summary_pp_' + i).html(row['cur'] + number_format(row['total_pp_' + i], 0, '.', ','));
						$('#summary_pg_' + i).html(row['cur'] + number_format(row['total_pg_' + i], 0, '.', ','));
					}

					$('#average_whosale_price').html(row['cur'] + number_format(row['average_whosale_price'], 2, '.', ','));
					$('#average_unit_cost').html(row['cur'] + number_format(row['average_unit_cost'], 2, '.', ','));
					$('#average_gross_cost').html(row['cur'] + number_format(row['average_gross_cost'], 2, '.', ','));
					$('#percentage_on_cost').html(number_format(row['percentage_on_cost'], 2, '.', ',') + '%');

				},
				error: function (jqXHR, textStatus, errorThrown) {
					alert('Error fetching data');
				}
			})
		}
	});


	$('input:radio[name="option"]').change(function () {

		if ($(this).val() == 'manual') {

			if ($('#yearlytable_qty').val() == "") {

				alert("How many units do you plan to sell each year ?");

			} else {

				// $('#weeklytable_qty').prop('readonly', true);
				//$('#monthlytable_qty').prop('readonly', true);
				// $('#yearlytable_qty').prop('readonly', true);

				$('#purchases').find('td input').each(function () {
					if ($(this).prop('readonly', true)) {
						$(this).prop('readonly', false);
					}
				})
				$('#sales_projection').find('td input').each(function () {
					if ($(this).prop('readonly', true)) {
						$(this).prop('readonly', false);
					}
				})
			}

		}
		if ($(this).val() == 'year') {
			$('#purchases').find('td input').each(function () {
				if ($(this).prop('readonly', false)) {
					$(this).prop('readonly', true);
				}
			})
			$('#sales_projection').find('td input').each(function () {
				if ($(this).prop('readonly', false)) {
					$(this).prop('readonly', true);
				}
			})
			//$('#weeklytable_qty').prop('readonly', false);
			//selectPanel(0);
			$('#monthlytable_qty').prop('readonly', false);
			$('#monthlytable_qty').focus();
			//$('#yearlytable_qty').prop('readonly', false);
		}
	});
	$('#monthlytable_qty').on('change', function () {

		if ($('#monthlytable_qty').val() == "") {

			$('#monthlytable_qty').focus();

		} else {

			/*$('#modal_dialog').modal('show')*/
			$('#sales_projection').find('td input').each(function () {
				$(this).val($('#monthlytable_qty').val());
			});
			$('#purchases').find('td input').each(function () {
				$(this).val($('#monthlytable_qty').val());
			});

			$('#unit_cost').focus();

		}

	})

	$('#bom_cost').on('change', function () {

		$('#products_cost').val(parseFloat($('#bom_cost').val()) + parseFloat($('#unit_cost').val()))

		products_cost = parseFloat($('#products_cost').val());

		rrp_cost = ((parseFloat(products_cost) * parseFloat($('#markup_on_cost').val())) / 100) + parseFloat(products_cost);

		if (rrp_cost == 0) {
			$('#rrp_cost').val(rrp_cost)

		} else {

			$('#rrp_cost').val(number_format(parseFloat(rrp_cost), 2, '.', ','))
		}

		MarkUpOnCost = parseFloat($('#rrp_cost').val().replace(/,/g, ''));

		TableCalculation();

	})

	$('#unit_cost').on('change', function () {

		if ($('#unit_cost').val() == "") {

			$('#unit_cost').focus();

		} else {

			$('#rad_manual').prop('checked', true);


			$('#purchases').find('td input').each(function () {
				if ($(this).prop('readonly', true)) {
					$(this).prop('readonly', false);
				}
			})
			$('#sales_projection').find('td input').each(function () {
				if ($(this).prop('readonly', true)) {
					$(this).prop('readonly', false);
				}
			})

			$('#products_cost').val(parseFloat($('#bom_cost').val()) + parseFloat($('#unit_cost').val()))

			products_cost = parseFloat($('#products_cost').val());

			rrp_cost = ((parseFloat(products_cost) * parseFloat($('#markup_on_cost').val())) / 100) + parseFloat(products_cost);

			if (rrp_cost == 0) {
				$('#rrp_cost').val(rrp_cost)

			} else {

				$('#rrp_cost').val(number_format(parseFloat(rrp_cost), 2, '.', ','))
			}

			MarkUpOnCost = parseFloat($('#rrp_cost').val().replace(/,/g, ''));

			TableCalculation();
		}

	})

	$("#table_projected_sales").tableHeadFixer({ 'left': 1 });

	$("#table_stock_cost").tableHeadFixer({ 'left': 1 });

	$("#table_monthly_gross").tableHeadFixer({ 'left': 1 });

	$("#table_projected_sales_summary").tableHeadFixer({ 'left': 1 });

	$("#table_stock_cost_summary").tableHeadFixer({ 'left': 1 });

	$("#table_monthly_gross_summary").tableHeadFixer({ 'left': 1 });
});


function TableCalculation() {
	$('#sales_projection').find('td input').each(function () {
		if ($(this).val() == "") {
			$(this).val(0)
		}
	});
	$('#purchases').find('td input').each(function () {
		if ($(this).val() == "") {
			$(this).val(0)
		}
	})

	var total_purchases = 0;
	var toq = 0;
	var tp = 0;
	var tsp = 0;
	var tproject = 0;

	$('#oq_13').html("0");
	$('#sp_13').html("0");
	$('#p_13').html("0");
	$('#cq_13').html("0");
	if ($("#indus_type").val() == "Cosmetics") {
		$('#oq_0').html($('#oq_1').val());
	}

	$('#cq_1').html(number_format(Math.floor(parseInt($('#oq_1').val().replace(/,/g, '')) + parseInt($('#p_1').val().replace(/,/g, '')) - parseInt($('#sp_1').val().replace(/,/g, ''))), 0, '.', ','));

	$('#oq_2').html($('#cq_1').html());
	$('#cq_2').html(number_format(Math.floor(parseInt($('#oq_2').html().replace(/,/g, '')) + parseInt($('#p_2').val().replace(/,/g, '')) - parseInt($('#sp_2').val().replace(/,/g, ''))), 0, '.', ','));

	$('#oq_3').html($('#cq_2').html());
	$('#cq_3').html(number_format(Math.floor(parseInt($('#oq_3').html().replace(/,/g, '')) + parseInt($('#p_3').val().replace(/,/g, '')) - parseInt($('#sp_3').val().replace(/,/g, ''))), 0, '.', ','));

	$('#oq_4').html($('#cq_3').html());
	$('#cq_4').html(number_format(Math.floor(parseInt($('#oq_4').html().replace(/,/g, '')) + parseInt($('#p_4').val().replace(/,/g, '')) - parseInt($('#sp_4').val().replace(/,/g, ''))), 0, '.', ','));

	$('#oq_5').html($('#cq_4').html());
	$('#cq_5').html(number_format(Math.floor(parseInt($('#oq_5').html().replace(/,/g, '')) + parseInt($('#p_5').val().replace(/,/g, '')) - parseInt($('#sp_5').val().replace(/,/g, ''))), 0, '.', ','));

	$('#oq_6').html($('#cq_5').html());
	$('#cq_6').html(number_format(Math.floor(parseInt($('#oq_6').html().replace(/,/g, '')) + parseInt($('#p_6').val().replace(/,/g, '')) - parseInt($('#sp_6').val().replace(/,/g, ''))), 0, '.', ','));

	$('#oq_7').html($('#cq_6').html());
	$('#cq_7').html(number_format(Math.floor(parseInt($('#oq_7').html().replace(/,/g, '')) + parseInt($('#p_7').val().replace(/,/g, '')) - parseInt($('#sp_7').val().replace(/,/g, ''))), 0, '.', ','));

	$('#oq_8').html($('#cq_7').html());
	$('#cq_8').html(number_format(Math.floor(parseInt($('#oq_8').html().replace(/,/g, '')) + parseInt($('#p_8').val().replace(/,/g, '')) - parseInt($('#sp_8').val().replace(/,/g, ''))), 0, '.', ','));

	$('#oq_9').html($('#cq_8').html());
	$('#cq_9').html(number_format(Math.floor(parseInt($('#oq_9').html().replace(/,/g, '')) + parseInt($('#p_9').val().replace(/,/g, '')) - parseInt($('#sp_9').val().replace(/,/g, ''))), 0, '.', ','));

	$('#oq_10').html($('#cq_9').html());
	$('#cq_10').html(number_format(Math.floor(parseInt($('#oq_10').html().replace(/,/g, '')) + parseInt($('#p_10').val().replace(/,/g, '')) - parseInt($('#sp_10').val().replace(/,/g, ''))), 0, '.', ','));

	$('#oq_11').html($('#cq_10').html());
	$('#cq_11').html(number_format(Math.floor(parseInt($('#oq_11').html().replace(/,/g, '')) + parseInt($('#p_11').val().replace(/,/g, '')) - parseInt($('#sp_11').val().replace(/,/g, ''))), 0, '.', ','));

	$('#oq_12').html($('#cq_11').html());
	$('#cq_12').html(number_format(Math.floor(parseInt($('#oq_12').html().replace(/,/g, '')) + parseInt($('#p_12').val().replace(/,/g, '')) - parseInt($('#sp_12').val().replace(/,/g, ''))), 0, '.', ','));


	$('#purchases').find('td input').each(function () {

		total_purchases = total_purchases + parseInt(Math.floor($(this).val().replace(/,/g, '')))
	})

	toq = $('#oq_1').val().replace(/,/g, '');
	tp = total_purchases;

	$('#sales_projection').find('td input').each(function () {

		tsp += parseInt(Math.floor($(this).val().replace(/,/g, '')))
	})

	tproject = parseInt(toq) + parseInt(tp) - parseInt(tsp);
	$('#oq_13').html(number_format(toq, 0, '.', ','));
	$('#sp_13').html(number_format(tsp, 0, '.', ','));
	$('#p_13').html(number_format(tp, 0, '.', ','));
	$('#cq_13').html(number_format(tproject, 0, '.', ','));
	tableCalculationPrice()
}

function tableCalculationPrice() {
	var total_purchasesprice = 0;
	var total_sspprice = 0;
	var tscp = 0;
	var tssp = 0;
	var tsoq = 0;
	var total = 0;

	$('#soq_13').html("0");
	$('#scp_13').html("0");
	$('#ssp_13').html("0");
	$('#scq_13').html("0");

	for (sce = 1; sce <= 12; sce++) {
		$('#ssp_' + sce).html(cur + number_format($('#sp_' + sce).val().replace(/,/g, '') * products_cost), 0, '.', ',');
		$('#scp_' + sce).html(cur + number_format($('#p_' + sce).val().replace(/,/g, '') * products_cost), 0, '.', ',');
	}
	$('#soq_1').html(cur + number_format(parseInt($('#oq_1').val().replace(/,/g, '')) * parseInt($('#unit_cost').val()), 0, '.', ','));
	$('#scq_1').html(cur + number_format(parseInt($('#soq_1').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) + parseInt($('#scp_1').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#ssp_1').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));

	$('#soq_2').html(cur + number_format(parseInt($('#scq_1').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));
	$('#scq_2').html(cur + number_format(parseInt($('#soq_2').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) + parseInt($('#scp_2').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#ssp_2').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));

	$('#soq_3').html(cur + number_format(parseInt($('#scq_2').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));
	$('#scq_3').html(cur + number_format(parseInt($('#soq_3').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) + parseInt($('#scp_3').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#ssp_3').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));

	$('#soq_4').html(cur + number_format(parseInt($('#scq_3').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));
	$('#scq_4').html(cur + number_format(parseInt($('#soq_4').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) + parseInt($('#scp_4').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#ssp_4').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));

	$('#soq_5').html(cur + number_format(parseInt($('#scq_4').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));
	$('#scq_5').html(cur + number_format(parseInt($('#soq_5').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) + parseInt($('#scp_5').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#ssp_5').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));

	$('#soq_6').html(cur + number_format(parseInt($('#scq_5').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));
	$('#scq_6').html(cur + number_format(parseInt($('#soq_6').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) + parseInt($('#scp_6').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#ssp_6').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));

	$('#soq_7').html(cur + number_format(parseInt($('#scq_6').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));
	$('#scq_7').html(cur + number_format(parseInt($('#soq_7').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) + parseInt($('#scp_7').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#ssp_7').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));

	$('#soq_8').html(cur + number_format(parseInt($('#scq_7').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));
	$('#scq_8').html(cur + number_format(parseInt($('#soq_8').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) + parseInt($('#scp_8').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#ssp_8').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));

	$('#soq_9').html(cur + number_format(parseInt($('#scq_8').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));
	$('#scq_9').html(cur + number_format(parseInt($('#soq_9').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) + parseInt($('#scp_9').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#ssp_9').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));

	$('#soq_10').html(cur + number_format(parseInt($('#scq_9').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));
	$('#scq_10').html(cur + number_format(parseInt($('#soq_10').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) + parseInt($('#scp_10').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#ssp_10').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));

	$('#soq_11').html(cur + number_format(parseInt($('#scq_10').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));
	$('#scq_11').html(cur + number_format(parseInt($('#soq_11').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) + parseInt($('#scp_11').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#ssp_11').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));

	$('#soq_12').html(cur + number_format(parseInt($('#scq_11').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));
	$('#scq_12').html(cur + number_format(parseInt($('#soq_12').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) + parseInt($('#scp_12').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#ssp_12').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')), 0, '.', ','));

	//calcuation is wrong ned to be fix.

	$('#purchasesprice').find('td').each(function () {
		if (!isNaN($(this).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))) {
			total_purchasesprice += parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))
		}
	})
	$('#sales_projection_price').find('td').each(function () {
		if (!isNaN($(this).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))) {
			total_sspprice += parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))
		}
	})

	tscp = total_purchasesprice;
	tssp = total_sspprice;
	tsoq = $('#soq_1').html().replace(/,/g, '').replace(/\$|\€|\?/g, '');
	$('#soq_13').html(cur + number_format(tsoq, 0, '.', ','));
	$('#scp_13').html(cur + number_format(tscp, 0, '.', ','));
	$('#ssp_13').html(cur + number_format(tssp, 0, '.', ','));
	total = parseInt(tscp) + parseInt(tsoq) - parseInt(tssp);
	$('#scq_13').html(cur + number_format(total, 0, '.', ','));
	tableCalculationprofit()
}

function tableCalculationprofit() {

	var total_sales_profit = 0;
	var total_purchases_profit = 0;
	var tspp = 0;
	var tpp = 0;
	var tpg = 0;

	$('#spp_13').html("0");
	$('#pp_13').html("0");
	$('#pg_13').html("0");

	$('#spp_1').html(cur + number_format($('#sp_1').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * MarkUpOnCost), 0, '.', ',');
	$('#pp_1').html(cur + number_format($('#sp_1').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * products_cost), 0, '.', ',');
	$('#pg_1').html(cur + number_format(parseInt($('#spp_1').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#pp_1').html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))), 0, '.', ',');

	$('#spp_2').html(cur + number_format($('#sp_2').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * MarkUpOnCost), 0, '.', ',');
	$('#pp_2').html(cur + number_format($('#sp_2').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * products_cost), 0, '.', ',');
	$('#pg_2').html(cur + number_format(parseInt($('#spp_2').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#pp_2').html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))), 0, '.', ',');

	$('#spp_3').html(cur + number_format($('#sp_3').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * MarkUpOnCost), 0, '.', ',');
	$('#pp_3').html(cur + number_format($('#sp_3').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * products_cost), 0, '.', ',');
	$('#pg_3').html(cur + number_format(parseInt($('#spp_3').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#pp_3').html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))), 0, '.', ',');

	$('#spp_4').html(cur + number_format($('#sp_4').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * MarkUpOnCost), 0, '.', ',');
	$('#pp_4').html(cur + number_format($('#sp_4').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * products_cost), 0, '.', ',');
	$('#pg_4').html(cur + number_format(parseInt($('#spp_4').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#pp_4').html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))), 0, '.', ',');

	$('#spp_5').html(cur + number_format($('#sp_5').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * MarkUpOnCost), 0, '.', ',');
	$('#pp_5').html(cur + number_format($('#sp_5').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * products_cost), 0, '.', ',');
	$('#pg_5').html(cur + number_format(parseInt($('#spp_5').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#pp_5').html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))), 0, '.', ',');

	$('#spp_6').html(cur + number_format($('#sp_6').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * MarkUpOnCost), 0, '.', ',');
	$('#pp_6').html(cur + number_format($('#sp_6').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * products_cost), 0, '.', ',');
	$('#pg_6').html(cur + number_format(parseInt($('#spp_6').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#pp_6').html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))), 0, '.', ',');

	$('#spp_7').html(cur + number_format($('#sp_7').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * MarkUpOnCost), 0, '.', ',');
	$('#pp_7').html(cur + number_format($('#sp_7').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * products_cost), 0, '.', ',');
	$('#pg_7').html(cur + number_format(parseInt($('#spp_7').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#pp_7').html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))), 0, '.', ',');

	$('#spp_8').html(cur + number_format($('#sp_8').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * MarkUpOnCost), 0, '.', ',');
	$('#pp_8').html(cur + number_format($('#sp_8').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * products_cost), 0, '.', ',');
	$('#pg_8').html(cur + number_format(parseInt($('#spp_8').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#pp_8').html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))), 0, '.', ',');

	$('#spp_9').html(cur + number_format($('#sp_9').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * MarkUpOnCost), 0, '.', ',');
	$('#pp_9').html(cur + number_format($('#sp_9').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * products_cost), 0, '.', ',');
	$('#pg_9').html(cur + number_format(parseInt($('#spp_9').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#pp_9').html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))), 0, '.', ',');

	$('#spp_10').html(cur + number_format($('#sp_10').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * MarkUpOnCost), 0, '.', ',');
	$('#pp_10').html(cur + number_format($('#sp_10').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * products_cost), 0, '.', ',');
	$('#pg_10').html(cur + number_format(parseInt($('#spp_10').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#pp_10').html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))), 0, '.', ',');

	$('#spp_11').html(cur + number_format($('#sp_11').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * MarkUpOnCost), 0, '.', ',');
	$('#pp_11').html(cur + number_format($('#sp_11').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * products_cost), 0, '.', ',');
	$('#pg_11').html(cur + number_format(parseInt($('#spp_11').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#pp_11').html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))), 0, '.', ',');

	$('#spp_12').html(cur + number_format($('#sp_12').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * MarkUpOnCost), 0, '.', ',');
	$('#pp_12').html(cur + number_format($('#sp_12').val().replace(/,/g, '').replace(/\$|\€|\?/g, '') * products_cost), 0, '.', ',');
	$('#pg_12').html(cur + number_format(parseInt($('#spp_12').html().replace(/,/g, '').replace(/\$|\€|\?/g, '')) - parseInt($('#pp_12').html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))), 0, '.', ',');

	//matematic still not right-- need to fix it
	$('#table_monthly_gross').find('tbody tr:not(#sales_projection_profit, #grossprofit) td').each(function () {
		if (!isNaN($(this).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))) {
			total_purchases_profit += parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''));
		}


	})
	$('#table_monthly_gross').find('tbody tr:not(#purchasesprofit, #grossprofit) td').each(function () {
		if (!isNaN($(this).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))) {
			total_sales_profit += parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))
		}
	})

	tspp = total_sales_profit;
	tpp = total_purchases_profit;

	tpg = parseInt(total_sales_profit) - parseInt(total_purchases_profit)

	$('#spp_13').html(cur + number_format(tspp, 0, '.', ','));
	$('#pp_13').html(cur + number_format(tpp, 0, '.', ','));
	$('#pg_13').html(cur + number_format(tpg, 0, '.', ','));
}
function add_localproduct() {
	// var isVisible = document.getElementById("product_form").style.display == "block";
	// if (isVisible){
	// 	$("#product_form").hide();
	// }
	// else{
	// 	$("#product_form").show();
	// }
	$("#myModal2").modal('show');
	$("a[href='#locaprodsteps1-1']").trigger('click');
	$("label.error").remove();
	save_method = 'add';
	//$('#table_form')[0].reset();
	clearForm();
	$('.form-group').removeClass('has-error'); // clear error class
	$('.help-block').empty(); // clear error string
	$('#stock_modal').modal('show'); // show bootstrap modal
	$('#stock_modal').on('shown.bs.modal', function () {
		$('.nav a[href="#add_menu0"]').tab('show');
	})
	$('.modal-title').text('Add Product'); // Set Title to Bootstrap modal title

	$('#weeklytable_qty').prop('readonly', false)
	$('#monthlytable_qty').prop('readonly', false)
	$('#yearlytable_qty').prop('readonly', false)

	$('.year').addClass('active');
	$('.manual').removeClass('active');

	$('#purchases').find('td input').each(function () {

		$(this).prop('readonly', true);

	})
	$('#sales_projection').find('td input').each(function () {

		$(this).prop('readonly', true);

	});

	$("#flnFile").fileinput('refresh', {
		overwriteInitial: true,
		maxFileSize: 500,
		showClose: false,
		showCaption: false,
		browseLabel: '',
		removeLabel: '',
		browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>',
		removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
		removeTitle: 'Cancel or reset changes',
		elErrorContainer: '#kv-avatar-errors-1',
		msgErrorClass: 'alert alert-block alert-danger',
		defaultPreviewContent: '<img id="imgfile" class="img-circle" src="' + site_url + 'assets/images/default-avatar.png" alt="Product Picture" style="width:180px;height:180px;">',
		layoutTemplates: { main2: '{preview}  {remove} {browse} ' },
		allowedFileExtensions: ["jpg", "png", "gif"]
	});

}


$(".stepwizard-step a.btn[id^=lprod]").on('click', function (e) {
	var target = $(e.target).attr("href");// activated tab
	if ((target == '#locaprodstep1-1')) {
		$("#btnNextStep").show()
		$("#btnSaveTable").hide()
	}
	if ((target == '#locaprodstep1-2')) {
		$("#btnNextStep").show()
		$("#btnSaveTable").hide()
	}
	if ((target == '#locaprodstep1-3')) {
		$("#btnNextStep").show()
		$("#btnSaveTable").hide()
	}
	if ((target == '#locaprodstep1-4')) {
		$("#btnNextStep").hide()
		$("#btnSaveTable").show()
	}

});



function edit_product(id) {
	$("#save_product").val("SAVE");
	if ($("#indus_type").val() == "Cosmetics") {
		edit_cosmetic_product(id);
	} else {
		$("#myModal2").modal();
		$("label.error").remove();
		save_method = 'update';
		//$('#table_form')[0].reset(); // reset form on modals
		clearForm();
		$('.form-group').removeClass('has-error'); // clear error class
		$('.help-block').empty(); // clear error string

		$('.year').addClass('active');
		$('.manual').removeClass('active');

		//$('#weeklytable_qty').prop('readonly', false)
		$('#monthlytable_qty').prop('readonly', false)
		//$('#yearlytable_qty').prop('readonly', false)

		$('#purchases').find('td input').each(function () {

			$(this).prop('readonly', true);

		})
		$('#sales_projection').find('td input').each(function () {

			$(this).prop('readonly', true);

		});

		//Ajax Load data from ajax
		$.ajax({
			url: site_url + 'Products/ajax_edit/' + id,
			type: "GET",
			dataType: "JSON",
			success: function (data) {
				//alert(JSON.stringify(data));
				//$('#btnOpenForm').click();
				$("#product_form").show();
				selectPanel(0);
				$('[name="status"]').val("update");
				$('#product_description').focus();
				$('[name="id"]').val(data[0].id);
				$('#id_item').val(data[0].id);
				$('[name="product_description"]').val(data[0].Description);
				//$('[name="Quantity"]').val(data[0].Qty);
				$('[name="unit_cost"]').val(data[0].UnitCost);
				$('[name="markup_on_cost"]').val(data[0].MarkUpOnCost);
				//$('[name="weeklytable_qty"]').val(data[0].weekly_qty);
				$('[name="monthlytable_qty"]').val(data[0].monthly_qty);
				//$('[name="yearlytable_qty"]').val(data[0].yearly_qty);
				//$('[name="flnFile"]').val(data.ThumbNail);
				$('[name="oq_1"]').val(number_format(data[0].oq_1), 0, '.', ',');
				$('[name="sp_1"]').val(number_format(data[0].sp_1), 0, '.', ',');
				$('[name="sp_2"]').val(number_format(data[0].sp_2), 0, '.', ',');
				$('[name="sp_3"]').val(number_format(data[0].sp_3), 0, '.', ',');
				$('[name="sp_4"]').val(number_format(data[0].sp_4), 0, '.', ',');
				$('[name="sp_5"]').val(number_format(data[0].sp_5), 0, '.', ',');
				$('[name="sp_6"]').val(number_format(data[0].sp_6), 0, '.', ',');
				$('[name="sp_7"]').val(number_format(data[0].sp_7), 0, '.', ',');
				$('[name="sp_8"]').val(number_format(data[0].sp_8), 0, '.', ',');
				$('[name="sp_9"]').val(number_format(data[0].sp_9), 0, '.', ',');
				$('[name="sp_10"]').val(number_format(data[0].sp_10), 0, '.', ',');
				$('[name="sp_11"]').val(number_format(data[0].sp_11), 0, '.', ',');
				$('[name="sp_12"]').val(number_format(data[0].sp_12), 0, '.', ',');

				$('[name="p_1"]').val(number_format(data[0].p_1), 0, '.', ',');
				$('[name="p_2"]').val(number_format(data[0].p_2), 0, '.', ',');
				$('[name="p_3"]').val(number_format(data[0].p_3), 0, '.', ',');
				$('[name="p_4"]').val(number_format(data[0].p_4), 0, '.', ',');
				$('[name="p_5"]').val(number_format(data[0].p_5), 0, '.', ',');
				$('[name="p_6"]').val(number_format(data[0].p_6), 0, '.', ',');
				$('[name="p_7"]').val(number_format(data[0].p_7), 0, '.', ',');
				$('[name="p_8"]').val(number_format(data[0].p_8), 0, '.', ',');
				$('[name="p_9"]').val(number_format(data[0].p_9), 0, '.', ',');
				$('[name="p_10"]').val(number_format(data[0].p_10), 0, '.', ',');
				$('[name="p_11"]').val(number_format(data[0].p_11), 0, '.', ',');
				$('[name="p_12"]').val(number_format(data[0].p_12), 0, '.', ',');

				cur = data[1].cur;

				if (data[0].ThumbNail != "assets/images/default-avatar.png") {
					var btnReset = '<button type="button" class="btn btn-default" title="Restore default" ' +
						'onclick="restoreDefault(' + data[0].id + ')">' +
						'<i class="fa fa-trash"></i>' +
						'</button>';
				} else {
					var btnReset = "";
				}

				$("#flnFile").fileinput('refresh', {
					overwriteInitial: true,
					maxFileSize: 500,
					showClose: false,
					showCaption: false,
					browseLabel: '',
					removeLabel: '',
					browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>',
					removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
					removeTitle: 'Cancel or reset changes',
					elErrorContainer: '#kv-avatar-errors-1',
					msgErrorClass: 'alert alert-block alert-danger',
					defaultPreviewContent: '<img id="imgfile" class="img-circle" src="' + site_url + data[0].ThumbNail + '" alt="Product Picture" style="width:180px;height:180px;">',
					layoutTemplates: { main2: '{preview}  {remove} {browse} ' + btnReset },
					allowedFileExtensions: ["jpg", "png", "gif"]
				});


				$('#stock_modal').modal('show'); // show bootstrap modal when complete loaded

				$('#stock_modal').on('shown.bs.modal', function () {
					$('.nav a[href="#add_menu0"]').tab('show');
				})
				$('.modal-title').text('Edit Product'); // Set title to Bootstrap modal title


				TableCalculation();


				$("#table_bom tr:first").append("<th id='action_title'>Action</th>");

				$('#table_bom tr:not(:first)').each(function (e) {

					$(this).append("<td id='td_action_" + e + "'></td>");

				});

				for (m = 0; m < Object.keys(data[2]).length; m++) {
					if (m > 2) {
						var editnewRow = '<tr id="row_id_' + m + '">'
							+ '<input name="id_' + m + '" id="id_' + m + '" type="hidden">'
							+ '<td id="td_type_' + m + '">'
							+ '<div class="form-group is-empty no-margin"><input name="type_' + m + '" class="form-control" id="type_' + m + '" placeholder="Enter Item Type" type="text"></input><span class="material-input"></span></div></td>'
							+ '<td id="td_description_' + m + '">'
							+ '<div class="form-group is-empty no-margin"><input name="description_' + m + '" class="form-control" id="description_' + m + '" placeholder="Enter Item Description" type="text"></input><span class="material-input"></span></div></td>'
							+ '<td id="td_qty_' + m + '">'
							+ '<div class="form-group no-margin"><input name="qty_' + m + '" class="form-control used" id="qty_' + m + '" onchange="getTotalMts(' + m + ')" value="0" type="number"></input><span class="material-input"></span></div></td>'
							+ '<td id="td_price_' + m + '">'
							+ '<div class="form-group no-margin"><input name="price_' + m + '" class="form-control used" id="price_' + m + '" onchange="getTotal(' + m + ')" value="0" type="number"></input><span class="material-input"></span></div></td>'
							+ '<td id="td_totmts_' + m + '">0</td>'
							+ '<td id="td_total_' + m + '">0</td>'
							+ '<td id="td_vat_' + m + '">0</td>'
							+ '<td id="td_totcost_' + m + '">0</td>'
							+ '<td id="td_avecost_' + m + '">0</td><td id="td_action_' + m + '"></td></tr>';
						$('table.table_bom').append(editnewRow);
					}
					$('#id_' + m).val(data[2][m].id)
					$('#type_' + m).val(data[2][m].type);
					$('#description_' + m).val(data[2][m].description);
					number_format($('#qty_' + m).val(data[2][m].qty), 2, '.', ',');
					number_format($('#price_' + m).val(data[2][m].price), 2, '.', ',');
					$('#td_action_' + m).html("<a href='#' class='btn btn-warning' onclick='delete_bom(" + data[2][m].id + "," + m + ")'>Delete</a>");

					var total_mts = 0;
					total_mts = parseFloat($('#sp_13').html().replace(/,/g, '')) * data[2][m].qty

					$('#td_totmts_' + m).html(number_format(total_mts, 2, '.', ','))

					var total = 0;
					var sum_total = 0;
					var vat = 0;
					var sum_vat = 0;
					var tot_cost = 0;
					var sum_totcost = 0;
					var ave_cost = 0;
					var sum_totave = 0;

					total = (parseFloat($('#sp_13').html().replace(/,/g, '')) * data[2][m].qty) * data[2][m].price;

					if (total == 0) {
						$('#td_total_' + m).html(cur + total)
					} else {
						$('#td_total_' + m).html(cur + number_format(total, 2, '.', ','))
					}

					for (j = 0; j < counter; j++) {
						sum_total += parseFloat($('#td_total_' + j).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''));
					}
					if (sum_total == 0) {
						$('.SumTotal').html(cur + sum_total)
					} else {
						$('.SumTotal').html(cur + number_format(sum_total, 2, '.', ','))
					}

					vat = total * 0.1;

					if (vat == 0) {
						$('#td_vat_' + m).html(cur + vat)
					} else {
						$('#td_vat_' + m).html(cur + number_format(vat, 2, '.', ','))
					}


					for (k = 0; k < counter; k++) {
						sum_vat += parseFloat($('#td_vat_' + k).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''));
					}
					if (sum_vat == 0) {
						$('.SumVat').html(cur + sum_vat)
					} else {
						$('.SumVat').html(cur + number_format(sum_vat, 2, '.', ','))
					}

					tot_cost = total + vat

					if (tot_cost == 0) {
						$('#td_totcost_' + m).html(cur + tot_cost)
					} else {
						$('#td_totcost_' + m).html(cur + number_format(tot_cost, 2, '.', ','))
					}


					for (l = 0; l < counter; l++) {
						sum_totcost += parseFloat($('#td_totcost_' + l).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''));
					}

					if (sum_totcost == 0) {
						$('.SumTotCost').html(cur + sum_totcost)
					} else {
						$('.SumTotCost').html(cur + number_format(sum_totcost, 2, '.', ','))
					}

					ave_cost = parseFloat(tot_cost) / parseFloat($('#sp_13').html().replace(/,/g, ''))
					if (ave_cost == 0) {
						$('#td_avecost_' + m).html(cur + ave_cost);
					} else {
						$('#td_avecost_' + m).html(cur + number_format(ave_cost, 2, '.', ','));
					}

					for (n = 0; n < counter; n++) {
						sum_totave += parseFloat($('#td_avecost_' + n).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''));
					}
					if (sum_totave == 0) {
						$('.SumAveCost').html(cur + sum_totave)
					} else {
						$('.SumAveCost').html(cur + number_format(sum_totave, 2, '.', ','))
					}


				}

				if (sum_totave == 0 || sum_totave === undefined) {
					sum_totave = 0;
					$('#bom_cost').val(sum_totave);
				} else {
					$('#bom_cost').val(number_format(sum_totave, 2, '.', ','));
				}


				products_cost = parseFloat(data[0].UnitCost) + parseFloat($('.SumAveCost').html().replace(/,/g, '').replace(/\$|\€|\?/g, ''));

				if (products_cost == 0) {
					$('#products_cost').val(products_cost);
				} else {
					$('#products_cost').val(number_format(products_cost, 2, '.', ','));
				}

				rrp_cost = (products_cost * data[0].MarkUpOnCost / 100 + products_cost).toFixed(2);

				if (rrp_cost == 0) {

					$('#rrp_cost').val(rrp_cost)

				} else {

					$('#rrp_cost').val(number_format(rrp_cost, 2, '.', ','))

				}

				products_cost = parseFloat($('#products_cost').val());
				MarkUpOnCost = parseFloat($('#rrp_cost').val());

				tableCalculationPrice();

			},
			error: function (jqXHR, textStatus, errorThrown) {
				alert(textStatus);
			}
		});
	}
}


function delete_bom(id, row) {

	if (confirm('Are you sure you want to delete this data?')) {

		// ajax delete data to database
		$.ajax({
			url: site_url + 'Products/ajax_delete_bom/' + id,
			type: "POST",
			dataType: "JSON",
			row: row,
			success: function (data) {
				var temp_sumtotal = 0;
				var sumtotal_new = 0
				var temp_sumvat = 0;
				var sumvat_new = 0
				var temp_sumcost = 0;
				var sumcost_new = 0;
				var temp_sumave = 0;
				var sumave_new = 0
				var temp_total = 0;
				var temp_vat = 0;
				var temp_cost = 0;
				var temp_ave = 0;
				//get SUM Total
				$('#table_bom tfoot').find('.SumTotal').each(function () {
					temp_sumtotal = parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))
				})

				$('#table_bom tfoot').find('.SumVat').each(function () {
					temp_sumvat = parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))
				})
				$('#table_bom tfoot').find('.SumTotCost').each(function () {
					temp_sumcost = parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))
				})

				$('#table_bom tfoot').find('.SumAveCost').each(function () {
					temp_sumave = parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''))
				})
				$('#row_id_' + this.row).find('td:eq(0) input').each(function () {
					$(this).val("");
				})
				$('#row_id_' + this.row).find('td:eq(1) input').each(function () {
					$(this).val("");
				})
				$('#row_id_' + this.row).find('td:eq(2) input').each(function () {
					$(this).val(0);
				})
				$('#row_id_' + this.row).find('td:eq(3) input').each(function () {
					$(this).val(0);
				})
				$('#row_id_' + this.row).find('td:eq(4)').each(function () {
					$(this).html(0);
				})
				$('#row_id_' + this.row).find('td:eq(5)').each(function () {
					temp_total = parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''));
					$(this).html(0);
				})
				$('#row_id_' + this.row).find('td:eq(6)').each(function () {
					temp_vat = parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''));
					$(this).html(0);
				})
				$('#row_id_' + this.row).find('td:eq(7)').each(function () {
					temp_cost = parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''));
					$(this).html(0);
				})
				$('#row_id_' + this.row).find('td:eq(8)').each(function () {
					temp_ave = parseInt($(this).html().replace(/,/g, '').replace(/\$|\€|\?/g, ''));
					$(this).html(0);
				})
				$('#td_action_' + this.row).html("");

				sumtotal_new = temp_sumtotal - temp_total;
				sumvat_new = temp_sumvat - temp_vat;
				sumcost_new = temp_sumcost - temp_cost;
				sumave_new = temp_sumave - temp_ave;

				$('#table_bom tfoot').find('.SumTotal').each(function () {
					$(this).html(data.cur + number_format(sumtotal_new));
				})
				$('#table_bom tfoot').find('.SumVat').each(function () {
					$(this).html(data.cur + number_format(sumvat_new));
				})
				$('#table_bom tfoot').find('.SumTotCost').each(function () {
					$(this).html(data.cur + number_format(sumcost_new));
				})
				$('#table_bom tfoot').find('.SumAveCost').each(function () {
					$(this).html(data.cur + number_format(sumave_new));
				})

				//remove row dari table
				//$('#row_id_'+this.row). remove();

			},
			error: function (jqXHR, textStatus, errorThrown) {
				alert('Error deleting data');
			}
		});
	}

}


function clearForm() {
	var chk_industry = $("#indus_type").val();
	if (chk_industry == "Cosmetics") {
		$("#product_code").val('');
		$("#base_ingredients").val('');
		$("#base_purchase_volume").val('');
		$("#base_purchase_price").val('');
		$("#base_cost_per").val('');
		$("#base_volume").val('');
		$("#base_volume_cost").val('');
		$("#drops").val('');
		$("#cost_per_drop").val('');
		$("#productitemslist").html('');
		$('#total_unit').html('0');
		$('#bi_unit').html('0');
		$('#p_unit').html('0');
		$('#dh_unit').html('0');
		$('#pac_unit').html('0');
		$('#bnd_unit').html('0');
		$('#aing_unit').html('0');
		$('#total_prod').html('0');
		$('#bi_prod').html('0');
		$('#p_prod').html('0');
		$('#dh_prod').html('0');
		$('#pac_prod').html('0');
		$('#bnd_prod').html('0');
		$('#aing_prod').html('0');
		$('#rrp_cost').val('0');
		$('#gross_profit').val('0');
		$('#monthly_revenue').val('0');
		$('#monthly_gross_profit').val('0');
		$('input').each(function () {
			var $this = $(this);
			$this.removeClass('used');
		});
		$("#markup_on_cost").addClass('used');
		$("#rrp_cost").addClass('used');
	}
	$('[name="unit_cost"]').val("0");
	$('[name="rrp_cost"]').val("0");
	save_method == 'add';
	$('[name="status"]').val("");
	$('[name="id"]').val("");
	$('[name="product_description"]').val("");


	$('[name="markup_on_cost"]').val("0");
	$('[name="products_cost"]').val("0");
	$('[name="monthlytable_qty"]').val("0");
	$('[name="bom_cost"]').val("0");
	$('#flnFile').val("");
	//$('#imgfile').attr("src", "assets/images/default-avatar.png");

	btnReset = ""
	//<?php for ($i = 0; $i < 10; $i++) { ?>
	/*$('#type_<?php echo $i; ?>').val("");
	$('#description_<?php echo $i; ?>').val("");
	$('#qty_<?php echo $i; ?>').val("");
	$('#price_<?php echo $i; ?>').val("");
	$('#td_totmts_<?php echo $i; ?>').html("0");
	$('#td_total_<?php echo $i; ?>').html("0");
	$('#td_vat_<?php echo $i; ?>').html("0");
	$('#td_totcost_<?php echo $i; ?>').html("0");
	$('#td_avecost_<?php echo $i; ?>').html("0");*/
	//<?php } ?>

	for (i = 0; i < 10; i++) {
		$('#type_' + i).val("");
		$('#description_' + i).val("");
		$('#qty_' + i).val("");
		$('#price_' + i).val("");
		$('#td_totmts_' + i).html("0");
		$('#td_total_' + i).html("0");
		$('#td_vat_' + i).html("0");
		$('#td_totcost_' + i).html("0");
		$('#td_avecost_' + i).html("0");
	}

	//remove action
	$("#table_bom th#action_title").remove();
	for (i = 0; i < counter; i++) {
		$('#table_bom td#td_action_' + i).remove();
	}
	$('#table_bom tbody').find('td input').each(function () {
		$(this).val("");
		$(this).html("0");
	})
	$('#table_bom tbody').find('td input[type="number"]').each(function () {
		$(this).val("0");

	})

	$('.SumTotal').html("0");
	$('.SumVat').html("0");
	$('.SumTotCost').html("0");
	$('.SumAveCost').html("0");

	for (clearCount = 1; clearCount <= 12; clearCount++) {
		$('[name="oq_1"]').val("0");
		$('[name="sp_' + clearCount + '"]').val("0");
		$('[name="p_' + clearCount + '"]').val("0");
		$('#oq_' + clearCount).html("0");
		$('#cq_' + clearCount).html("0");
		$('#soq_' + clearCount).html("0");
		$('#ssp_' + clearCount).html("0");
		$('#scq_' + clearCount).html("0");
		$('#scp_' + clearCount).html("0");
		$('#spp_' + clearCount).html("0");
		$('#pp_' + clearCount).html("0");
		$('#pg_' + clearCount).html("0");

	}

	$('#sp_13').html("0");
	$('#p_13').html("0");
	$('#oq_13').html("0");
	$('#cq_13').html("0");
	$('#soq_13').html("0");
	$('#ssp_13').html("0");
	$('#scq_13').html("0");
	$('#scp_13').html("0");
	$('#spp_13').html("0");
	$('#pp_13').html("0");
	$('#pg_13').html("0");

	$("#flnFile").fileinput('refresh', {
		overwriteInitial: true,
		maxFileSize: 500,
		showClose: false,
		showCaption: false,
		browseLabel: '',
		removeLabel: '',
		browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>',
		removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
		removeTitle: 'Cancel or reset changes',
		elErrorContainer: '#kv-avatar-errors-1',
		msgErrorClass: 'alert alert-block alert-danger',
		defaultPreviewContent: '<img id="imgfile" class="img-circle" src="' + site_url + 'assets/images/default-avatar.png" alt="Product Picture" style="width:180px;height:180px;">',
		layoutTemplates: { main2: '{preview}  {remove} {browse} ' + btnReset },
		allowedFileExtensions: ["jpg", "png", "gif"]
	});
	$('#lprod_step1').trigger('click');
}


function restoreDefault(id) {
	$.ajax({
		type: 'POST',
		url: 'products/restoreDefault/' + id,
		success: function () {
			edit_product(id);
		},
		error: function (jqXHR, textStatus, errorThrown) {

			showResultFailed(jqXHR.responseText);
			hideWaitingFail();
		}
	})
}

/*// register jQuery extension
 jQuery.extend(jQuery.expr[':'], {
 focusable: function (el, index, selector) {
 return $(el).is('a, button, :input, [tabindex]');
 }
 });

 $(document).on('keydown', ':focusable', function (e) {
 if (e.which == 13) {
 e.preventDefault();
 // Get all focusable elements on the page
 var $canfocus = $(':focusable');
 var index = $canfocus.index(this) + 1;
 if (index >= $canfocus.length) index = 0;
 $canfocus.eq(index).focus();
 }
 });*/

 function nextStep(){
	 
 }


function saveTable() {

	$('#btnSaveTable').text('saving...'); //change button text
	$('#btnSaveTable').attr('disabled', true); //set button disable

	var url;

	if ($('[name="status"]').val() == "update") {
		url = site_url + 'Products/ajax_update/' + counter;
	} else {
		url = site_url + 'Products/ajax_add/' + counter;
	}

	if ($('#flnFile').val() == "" && $('#imgfile').attr('src') == site_url + "assets/images/default-avatar.png") {

		$('#modalConfirmYesNo').modal('show');

		$("#lblTitleConfirmYesNo").html("User Confirmation");
		$("#lblMsgConfirmYesNo").html("<div class='col-sm-3'>"
			+ "<img id='imgfile' class='img-circle' src='" + site_url + "assets/images/default-avatar.png' alt='Product Picture' style='width:75px;'>"
			+ "</div>"
			+ "<div class='col-sm-9'>"
			+ "If you want to add image <strong>Click on folder icon <i class='fa fa-folder-o'></i>, then select an image <i class='fa fa-file-image-o'></i>.</strong><br/>Do you want to add image now ??"
			+ "</div>");

		$("#btnNoConfirmYesNo").off('click').click(function () {
			// ajax adding data to database
			//
			$.ajax({
				url: url,
				type: "POST",
				data: new FormData($('#table_form')[0]),
				contentType: false,
				async: false,
				cache: false,
				processData: false,
				success: function (data) {

					var obj = jQuery.parseJSON(data);

					$('#stock_modal').modal('hide');
					if (obj['status']) //if success close modal and reload ajax table
					{
						if (save_method == 'add') {
							var msg = "Product added successfully, <br/> Do you want to add another ???"
						} else {
							var msg = "Product edited successfully !!! <br/> Do you want to add Product ???"
						}

						$('#modalConfirmYesNo').modal('show');

						$("#lblTitleConfirmYesNo").html("");
						$("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
							+ "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
							+ "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
							+ "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
							+ "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
							+ "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
							+ "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
							+ "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
							+ "</svg>"
							+ "</div>"
							+ "<p class='alert-box'>" + msg + "</p>");

						$("#btnYesConfirmYesNo").off('click').click(function () {

							clearForm();
							selectPanel(0);
							drawCollectionView();

							$('#modalConfirmYesNo').modal('hide');
							$("#product_form").show();

						});

						$("#btnNoConfirmYesNo").off('click').click(function () {
							clearForm();
							drawCollectionView();
							//$('#btnCloseForm').click();
							$('#modalConfirmYesNo').modal('hide');
							$("#product_form").hide();

						});

					}

					$('.nav a[href="#add_menu0"]').tab('show');

					$('#btnSaveTable').text('save'); //change button text
					$('#btnSaveTable').attr('disabled', false); //set button enable

				},
				error: function (jqXHR, textStatus, errorThrown) {
					alert('Error adding / update data');
					$('#btnSaveTable').text('save'); //change button text
					$('#btnSaveTable').attr('disabled', false); //set button enable
				}
			});

		});

		$("#btnYesConfirmYesNo").off('click').click(function () {
			$('.nav a[href="#add_menu0"]').tab('show');

			$('#flnFile').trigger('click');

			$('#btnSaveTable').text('save'); //change button text
			$('#btnSaveTable').attr('disabled', false); //set button enable
			$('#modalConfirmYesNo').modal('hide');
			$("#product_form").show();
		});
	} else {

		$.ajax({
			url: url,
			type: "POST",
			data: new FormData($('#table_form')[0]),
			contentType: false,
			async: false,
			cache: false,
			processData: false,
			success: function (data) {

				$('#stock_modal').modal('hide');

				var obj = jQuery.parseJSON(data);

				if (obj['status']) //if success close modal and reload ajax table
				{

					if (save_method == 'add') {
						var msg = "Product added successfully, <br/> Do you want to add another ???"
					} else {
						var msg = "Product edited successfully !!! <br/> Do you want to add Product ???"
					}

					$('#modalConfirmYesNo').modal('show');

					$("#lblTitleConfirmYesNo").html("");
					$("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
						+ "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
						+ "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
						+ "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
						+ "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
						+ "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
						+ "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
						+ "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
						+ "</svg>"
						+ "</div>"
						+ "<p class='alert-box'>" + msg + "</p>");

					$("#btnYesConfirmYesNo").off('click').click(function () {

						//add_localproduct();
						clearForm();
						drawCollectionView();

						$('#modalConfirmYesNo').modal('hide');
						$("#product_form").show();

					});

					$("#btnNoConfirmYesNo").off('click').click(function () {
						clearForm();
						$('#stock_modal').modal('hide');
						drawCollectionView();
						$('#modalConfirmYesNo').modal('hide');
						$("#product_form").hide();
					});
				}

				$('.nav a[href="#add_menu0"]').tab('show');
				$('#btnSaveTable').text('save'); //change button text
				$('#btnSaveTable').attr('disabled', false); //set button enable
			},
			error: function (jqXHR, textStatus, errorThrown) {
				alert('Error adding / update data');
				$('#btnSaveTable').text('save'); //change button text
				$('#btnSaveTable').attr('disabled', false); //set button enable
			}
		});

	}
}

function saveProduct() {

	$('#save_product').val('saving...'); //change button text
	//$('#save_product').attr('disabled', true); //set button disable

	var url;

	if ($('[name="status"]').val() == "update") {
		url = site_url + 'Products/ajax_update/' + counter;
	} else {
		url = site_url + 'Products/ajax_add/' + counter;
	}

	if ($('#flnFile').val() == "" && $('#imgfile').attr('src') == site_url + "assets/images/default-avatar.png") {
		$('#save_product').val('SAVE'); 
		$('#modalConfirmYesNo').css("z-index","9999");
		$('#modalConfirmYesNo').modal('show');

		$("#lblTitleConfirmYesNo").html("User Confirmation");
		$("#lblMsgConfirmYesNo").html("<div class='col-sm-3'>"
			+ "<img id='imgfile' class='img-circle' src='" + site_url + "assets/images/default-avatar.png' alt='Product Picture' style='width:75px;'>"
			+ "</div>"
			+ "<div class='col-sm-9'>"
			+ "If you want to add image <strong>Click on folder icon <i class='fa fa-folder-o'></i>, then select an image <i class='fa fa-file-image-o'></i>.</strong><br/>Do you want to add image now ??"
			+ "</div>");

		$("#btnNoConfirmYesNo").off('click').click(function () {
			// ajax adding data to database
			//
			$.ajax({
				url: url,
				type: "POST",
				data: new FormData($('#add_local_product_form')[0]),
				contentType: false,
				async: false,
				cache: false,
				processData: false,
				success: function (data) {

					var obj = jQuery.parseJSON(data);
					$('#myModal2').modal('hide');
					$('#stock_modal').modal('hide');
					if (obj['status']) //if success close modal and reload ajax table
					{
						if (save_method == 'add') {
							var msg = "Product added successfully, <br/> Do you want to add another ???"
						} else {
							var msg = "Product edited successfully !!! <br/> Do you want to add Product ???"
						}

						$('#modalConfirmYesNo').modal('show');

						$("#lblTitleConfirmYesNo").html("");
						$("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
							+ "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
							+ "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
							+ "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
							+ "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
							+ "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
							+ "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
							+ "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
							+ "</svg>"
							+ "</div>"
							+ "<p class='alert-box'>" + msg + "</p>");

						$("#btnYesConfirmYesNo").off('click').click(function () {

							clearForm();
							selectPanel(0);
							drawCollectionView();

							$('#modalConfirmYesNo').modal('hide');
							$("#myModal2").modal('show');
							$('#product_step1').trigger('click');

						});

						$("#btnNoConfirmYesNo").off('click').click(function () {
							clearForm();
							drawCollectionView();
							//$('#btnCloseForm').click();
							$("#myModal2").modal('hide');
	

						});

					}

					//$('.nav a[href="#add_menu0"]').tab('show');

					$('#save_product').val('save'); //change button text
					$('#save_product').attr('disabled', false); //set button enable

				},
				error: function (jqXHR, textStatus, errorThrown) {
					alert('Error adding / update data');
					$('#save_product').val('save'); //change button text
					$('#save_product').attr('disabled', false); //set button enable
				}
			});

		});

		$("#btnYesConfirmYesNo").off('click').click(function () {
			$('.nav a[href="#add_menu0"]').tab('show');

			$('#flnFile').trigger('click');

			$('#btnSaveTable').text('save'); //change button text
			$('#btnSaveTable').attr('disabled', false); //set button enable
			$('#modalConfirmYesNo').modal('hide');
		});
	} else {

		$.ajax({
			url: url,
			type: "POST",
			data: new FormData($('#add_local_product_form')[0]),
			contentType: false,
			async: false,
			cache: false,
			processData: false,
			success: function (data) {
				$('#myModal2').modal('hide');
				$('#stock_modal').modal('hide');

				var obj = jQuery.parseJSON(data);

				if (obj['status']) //if success close modal and reload ajax table
				{

					if (save_method == 'add') {
						var msg = "Product added successfully, <br/> Do you want to add another ???"
					} else {
						var msg = "Product edited successfully !!! <br/> Do you want to add Product ???"
					}
					$('#modalConfirmYesNo').css("z-index","9999");
					$('#modalConfirmYesNo').modal('show');

					$("#lblTitleConfirmYesNo").html("");
					$("#lblMsgConfirmYesNo").html("<div class='checkmark'>"
						+ "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 161.2 161.2' enable-background='new 0 0 161.2 161.2' xml:space='preserve'>"
						+ "<path class='path' fill='none' stroke='#7DB0D5' stroke-miterlimit='10' d='M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4"
						+ "c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5"
						+ "c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z'/>"
						+ "<circle class='path' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' cx='80.6' cy='80.6' r='62.1'/>"
						+ "<polyline class='path' fill='none' stroke='#28B463' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='113,52.8,74.1,108.4 48.2,86.4 '/>"
						+ "<circle class='spin' fill='none' stroke='#7DB0D5' stroke-width='4' stroke-miterlimit='10' stroke-dasharray='12.2175,12.2175' cx='80.6' cy='80.6' r='73.9'/>"
						+ "</svg>"
						+ "</div>"
						+ "<p class='alert-box'>" + msg + "</p>");

					$("#btnYesConfirmYesNo").off('click').click(function () {

						//add_localproduct();
						clearForm();
						drawCollectionView();

						$('#myModal2').modal('show');
						$("#product_step1").trigger('click');
						$('#modalConfirmYesNo').modal('hide');

					});

					$("#btnNoConfirmYesNo").off('click').click(function () {
						clearForm();
						$('#stock_modal').modal('hide');
						drawCollectionView();
						$("#myModal2").modal('hide');
						$('#modalConfirmYesNo').modal('hide');
					});
				}

				$('.nav a[href="#add_menu0"]').tab('show');
				$('#btnSaveTable').text('save'); //change button text
				$('#btnSaveTable').attr('disabled', false); //set button enable
			},
			error: function (jqXHR, textStatus, errorThrown) {
				alert('Error adding / update data');
				$('#btnSaveTable').text('save'); //change button text
				$('#btnSaveTable').attr('disabled', false); //set button enable
			}
		});

	}
}

function delete_localproduct(id) {
	$.ajax({
		url: site_url + 'Products/ajax_delete/' + id,
		type: "POST",
		dataType: "JSON",
		success: function (data) {
			//if success reload ajax table
			$('#table_form').modal('hide');
			drawCollectionView();
		},
		error: function (jqXHR, textStatus, errorThrown) {
			alert('Error deleting data');
		}
	});
}

// add the animation to the popover
$('a[rel=popover]').popover().click(function (e) {
	e.preventDefault();
	var open = $(this).attr('data-easein');
	if (open == 'shake') {
		$(this).next().velocity('callout.' + open);
	} else if (open == 'pulse') {
		$(this).next().velocity('callout.' + open);
	} else if (open == 'tada') {
		$(this).next().velocity('callout.' + open);
	} else if (open == 'flash') {
		$(this).next().velocity('callout.' + open);
	} else if (open == 'bounce') {
		$(this).next().velocity('callout.' + open);
	} else if (open == 'swing') {
		$(this).next().velocity('callout.' + open);
	} else {
		$(this).next().velocity('transition.' + open);
	}
});

$(document).on('click', '#btnSkipBOM', function (e) {
	$('#Step4').trigger('click');
});


$(".wizard").each(function () {
	var index = 0;
	var wizard = $(this);

	$(wizard).prepend('<div class="wizardProgress"></div>');
	$(wizard).prepend('<div class="header"></div>');

	$(wizard).find(".wizardPanel").each(function () {

		$(wizard).find(".wizardProgress").append("<div>" + $(this).data("title") + "</div>");
	});

	$(wizard).find(".wizardProgress div").click(function () {
		selectPanel($(this).index());
	});

	$(wizard).append('<div class="footer"><button type="button" id="btnFormPrev" class="btn btn-default">Prev</button><button id="btnFormNext" type="button" class="btn btn-primary">Next</button></div>');

	$(wizard).find("#btnFormPrev").click(function () {
		selectPanel($(".wizardProgress .selected").index() - 1);
	});
	$(wizard).find("#btnSkipBOM").click(function () {
		selectPanel(3);

		$('#markup_on_cost').focus();
	});
	$(wizard).find("#btnFormNext").click(function () {

		if ($(".wizardProgress .selected").index() == 0) {

			if ($('#product_description').val() == "") {

				$('#modalConfirmYes').modal('show');

				$("#lblTitleConfirmYes").html("User Confirmation");
				$("#lblMsgConfirmYes").html("Please insert product description first ??");

				$("#btnYesConfirmYes").off('click').click(function () {

					$('#product_description').focus()

					$('#modalConfirmYes').modal('hide');

					//$('.btn-next').trigger("click");

				});

			} else {

				selectPanel($(".wizardProgress .selected").index() + 1);

				$('#monthlytable_qty').focus();

				return false;

			}

		}
		if ($(".wizardProgress .selected").index() == 1) {

			if ($('#monthlytable_qty').val() == "") {

				$('#modalConfirmYes').modal('show');

				$("#lblTitleConfirmYes").html("User Confirmation");
				$("#lblMsgConfirmYes").html("Please insert monthly quantity ??");

				$("#btnYesConfirmYes").off('click').click(function () {

					$('#monthlytable_qty').focus()

					$('#modalConfirmYes').modal('hide');

				});

			} else {

				selectPanel($(".wizardProgress .selected").index() + 1);


				$('#bom_cost').focus();

				return false;

			}

		}
		if ($(".wizardProgress .selected").index() == 2) {

			selectPanel($(".wizardProgress .selected").index() + 1);

			$('#markup_on_cost').focus();

		}

	});

	selectPanel(0);
	function selectPanel(index) {
		if (index == 0) {
			$(wizard).find("#btnFormPrev").fadeOut();
		} else {
			$(wizard).find("#btnFormPrev").fadeIn();
		}

		if (index == $(".wizardProgress div").length - 1) {
			$(wizard).find("#btnFormNext").fadeOut();
		} else {
			$(wizard).find("#btnFormNext").fadeIn();
		}

		$(".wizardProgress .selected").removeClass("selected");
		var selectedTab = $(".wizardProgress div").get(index);
		$(selectedTab).addClass("selected");

		$(".wizardPanel").slideUp();
		var selectedPanel = $(wizard).find(".wizardPanel").get(index);
		$(selectedPanel).slideDown();
	}

});


function selectPanel(index) {
	var wizard = $('.wizard');
	if (index == 0) {
		$(wizard).find("#btnFormPrev").fadeOut();
	} else {
		$(wizard).find("#btnFormPrev").fadeIn();
	}

	if (index == $(".wizardProgress div").length - 1) {
		$(wizard).find("#btnFormNext").fadeOut();
	} else {
		$(wizard).find("#btnFormNext").fadeIn();
	}

	$(".wizardProgress .selected").removeClass("selected");
	var selectedTab = $(".wizardProgress div").get(index);
	$(selectedTab).addClass("selected");

	$(".wizardPanel").slideUp();
	var selectedPanel = $(wizard).find(".wizardPanel").get(index);
	$(selectedPanel).slideDown();
}



$(".wizard_1").each(function () {
	var index = 0;
	var wizard_1 = $(this);

	$(wizard_1).prepend('<div class="wizard_1Progress"></div>');
	$(wizard_1).prepend('<div class="header"></div>');

	$(wizard_1).find(".wizard_1Panel").each(function () {

		$(wizard_1).find(".wizard_1Progress").append("<div>" + $(this).data("title") + "</div>");
	});

	$(wizard_1).find(".wizard_1Progress div").click(function () {
		if ($(this).index() == 2) {
			loadSummary();

			selectPanel($(this).index());
		} else {

			selectPanel($(this).index());
		}
	});

	$(wizard_1).append('<div class="footer"><button id="btnPrev" class="btn btn-default">Prev</button><button id="btnNext" class="btn btn-primary">Next</button></div>');

	$(wizard_1).find("#btnPrev").click(function () {
		selectPanel($(".wizard_1Progress .selected").index() - 1);
	});
	$(wizard_1).find("#btnNext").click(function () {


		if ($(".wizard_1Progress .selected").index() == 1) {

			loadSummary();

			selectPanel($(".wizard_1Progress .selected").index() + 1);
		} else {
			selectPanel($(".wizard_1Progress .selected").index() + 1);
		}

	});

	selectPanel(0);

	function loadSummary() {
		$.ajax({
			url: site_url + 'Products/ajax_calculating_summary',
			type: "GET",
			dataType: "JSON",
			success: function (row) {
				for (i = 1; i <= 15; i++) {

					j = i - 1;
					if (i < 13) {
						$('#sales_month_' + i).html(row['table_header'][j]);
						$('#stock_month_' + i).html(row['table_header'][j]);
						$('#gross_month_' + i).html(row['table_header'][j]);
					}

					$('#summary_oq_' + i).html(number_format(row['total_oq_' + i], 0, '.', ','));
					$('#summary_sp_' + i).html(number_format(row['total_sp_' + i], 0, '.', ','));
					$('#summary_p_' + i).html(number_format(row['total_p_' + i], 0, '.', ','));
					$('#summary_cq_' + i).html(number_format(row['total_cq_' + i], 0, '.', ','));

					$('#summary_soq_' + i).html(row['cur'] + number_format(row['total_soq_' + i], 0, '.', ','));
					$('#summary_ssp_' + i).html(row['cur'] + number_format(row['total_ssp_' + i], 0, '.', ','));
					$('#summary_scp_' + i).html(row['cur'] + number_format(row['total_scp_' + i], 0, '.', ','));
					$('#summary_scq_' + i).html(row['cur'] + number_format(row['total_scq_' + i], 0, '.', ','));

					$('#summary_spp_' + i).html(row['cur'] + number_format(row['total_spp_' + i], 0, '.', ','));
					$('#summary_pp_' + i).html(row['cur'] + number_format(row['total_pp_' + i], 0, '.', ','));
					$('#summary_pg_' + i).html(row['cur'] + number_format(row['total_pg_' + i], 0, '.', ','));
				}

				$('#average_whosale_price').html(row['cur'] + number_format(row['average_whosale_price'], 2, '.', ','));
				$('#average_unit_cost').html(row['cur'] + number_format(row['average_unit_cost'], 2, '.', ','));
				$('#average_gross_cost').html(row['cur'] + number_format(row['average_gross_cost'], 2, '.', ','));
				$('#percentage_on_cost').html(number_format(row['percentage_on_cost'], 2, '.', ',') + '%');
			},
			error: function (jqXHR, textStatus, errorThrown) {
				alert('Error fetching data');
			}
		})

	}

	function selectPanel(index) {


		if (index == 0) {
			$(wizard_1).find("#btnPrev").fadeOut();
		} else {
			$(wizard_1).find("#btnPrev").fadeIn();
		}

		if (index == $(".wizard_1Progress div").length - 1) {
			$(wizard_1).find("#btnNext").fadeOut();
		} else {
			$(wizard_1).find("#btnNext").fadeIn();
		}

		$(".wizard_1Progress .selected").removeClass("selected");
		var selectedTab = $(".wizard_1Progress div").get(index);
		$(selectedTab).addClass("selected");

		$(".wizard_1Panel").slideUp();
		var selectedPanel = $(wizard_1).find(".wizard_1Panel").get(index);
		$(selectedPanel).slideDown();
	}


});
$(document).ready(function () {
    if($("#product_description").val !== '') {
        $("#product_description").addClass('used');
    }
});

setTimeout(function () {
	$('#modal-default').modal('show');
}, 2000);

setTimeout(function () {
	$('#modal-default').modal('hide');
}, 40000);






<style>
.label {
   
    margin: 0 0 0; 
    padding: 0px 0px;
    
}
.easyPaginateNav a {
    font-size: 18px;
    padding: 5px 10px;
    font-weight: bold;
    color: white;
    margin-left: 5px;
    background-color: #3c8dbc;
}
.easyPaginateNav{
    width: auto!important;
    text-align: left;
    clear: both;
}
.easyPaginateNav a.current {
    font-weight:bold;
    text-decoration:underline;}

.itemThumbnail{
    height:170px;
    margin-bottom:0px;
}
.itemFooter{
    padding: 5px;
    border: solid 1px #e6e6e6;
    border-top: none;
    height: 40px;
}
.itemInfo{
    border: solid 1px #e6e6e6;
    border-top: none;
    padding-left: 10%;
    height: 140px;
}


.thumbnail
{
    /*margin-bottom: 20px;*/
    padding: 0px;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
}
.item.list-group-item
{
    float: none;
    width: 100%;
    background-color: #fff;
    margin-bottom: 10px;
}
.item.list-group-item:nth-of-type(odd):hover,.item.list-group-item:hover
{
    /*background: #428bca;*/
    background: #e2effb;
}
.item.list-group-item .list-group-image
{

}
.item.list-group-item .thumbnail
{
    margin-bottom: 0px;
}
.item.list-group-item .caption
{
    padding: 9px 9px 0px 9px;
}
.item.list-group-item:nth-of-type(odd)
{
    background: #eeeeee;
}

.item.list-group-item:before, .item.list-group-item:after
{
    display: table;
    content: " ";
}

.item.list-group-item img
{
    float: left;
}
.item.list-group-item:after
{
    clear: both;
}
.list-group-item-text
{
    margin: 0 0 11px;
}
button#searchpeopleButton {
    position: relative !important;
    top: -17px !important;
    margin-bottom: 0px !important;
}

.nav-pills>li.active>a, .nav-pills>li.active>a:hover, .nav-pills>li.active>a:focus {
    color: black;
}

.p-r-5 {
    position: relative;
    bottom: 5px;
}

</style>

        <div class=" col-sm-12 col-md-12 col-lg-12">
            <div class="btn-group">
                <ul class="list-unstyled list-inline pull-left">
        	<div class="center">
                <!--<a href="#" id="list" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-th-list"></span> List</a>
                    <a href="#" id="grid" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-th"></span> Grid</a>-->
        	</div>
        </ul>
    </div>
        <div class="searchbar">
    <br/>
        <div class="input-group">
            <input type="text" placeholder="Search..." name="searchpeople" id="searchpeople" class="form-control">
                <div class="input-group-btn">
                    <button class="btn btn-info" type="submit" id="searchpeopleButton"><i class="glyphicon glyphicon-search"></i></button>
                </div>
            </div>
        </div>
    <br/>
        
        <div class="addbutton">
            <!--<button style="float: left;margin-top:5px;"  class="btn btn-success" onclick="add_person()"><i class="glyphicon glyphicon-plus"></i> Add Person</button>
            <a href="<?=base_url()?>/Dashboard/printStockAnalysis" style=" margin-left: 11px; margin-top: 5px; " class="btn btn-success" target="_blank"><i class="glyphicon glyphicon-print"></i> Print</a>-->
        </div>
    </div>
        <div id="personal" class="row-height list-group col-sm-12 col-md-12 col-lg-12">
    </div>
        
        <script src="<?php echo base_url('assets/plugins/easypaginate/easyPaginate.js') ?>">
            
        </script>
        <script type="text/javascript">

// Validations
$(function () {
    $("#personform").validate({
        rules: {
            person_fname: {
                required: true
            },
            person_lname: {
                required: true,
            },
            person_work_hour: {
                required: true,
                number: true,
                min: 1
            },
            person_rate: {
                required: true,
                number: true,
                min: 1
            },
            person_quantity: {
                required: true,
                number: true,
                min: 1
            },
            person_subsidi: {
                required: false,
                number: false,
                min: 0
            },
            person_commission: {
                required: false,
                number: false,
                min: 0
            },
            person_other: {
                required: false,
                number: false,
                min:0
            },
            person_pension: {
               number: true
            },
            person_medicare: {
               number: true
            },
            person_retire: {
               number: true
            },
            person_tax: {
               number: true
            },
            person_union: {
               number: true
            },
            person_sick: {
               number: true
            },
            person_fringe: {
               number: true
            },
            person_deductions: {
               number: true
            },
            person_superannuation: {
               number: true
            },
            person_workcover: {
               number: true
            }

        }
    });
});

var save_method; //for save method string
var table;

$(document).ready(function () {
    drawCollectionView();

    $('#list').click(function (event) {
        event.preventDefault();
        $('#personal .item').removeClass('grid-group-item');
        $('#personal .item').addClass('list-group-item');
    });
    $('#grid').click(function (event) {
        event.preventDefault();
        $('#personal .item').removeClass('list-group-item');
        $('#personal .item').addClass('grid-group-item');
    });
    //datatables

    $("#btnSavePerson").click(function (e) {
        e.preventDefault();
        if ($("#personform").valid()) {
            saveperson();
        }
    });

});

function drawCollectionView()
{

    $.ajax({
        url: "<?php echo site_url('people/ajax_list') ?>/",
        type: "GET",
        dataType: "JSON",
        success: function (data)
        {
            loadcollectionview(data);
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            alert(errorThrown);
        }
    });
}


function loadcollectionview(person_data) {

var html = "";
$(person_data.data).each(function (key, val) {
    html += '<div class="item  col-sm-12 col-md-6 col-lg-4">'
            + '<div class="thumbnail itemThumbnail">'
                + '<img style="height:95%" class="group list-group-image img-responsive" src="<?php echo base_url();?>' + this["thumbnail"] + '" alt="" />'
            + '</div>'
       
            + '<div class="itemInfo caption">'
               + '<br/>'
                    + '<div class="row">'
                         + '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 txt-bold">'
                        + '<label style="font-weight:600;">First Name:</label>'
                    + '</div>'
                    + '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="font-weight: normal;">' + this["f_name"] + '</div>'
                + '</div>'
                
                + '<div class="row">'
                    + '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">'
                        + '<label style="font-weight:600;">Last Name:</label>'
                    + '</div>'
                    + '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="font-weight: normal;">' + this["l_name"] + '</div>'
                + '</div>'
                
                + '<div class="row">'
                    + '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">'
                        + '<label style="font-weight:600;">Hour Worked:</label>'
                    + '</div>'
                    + '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="font-weight: normal;">' + this["hour_worked"] + '</div>'
                + '</div>'
                
                + '<div class="row">'
                    + '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">'
                        + '<label style="font-weight:600;">Rates / Hour :</label>'
                    + '</div>'
                    + '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="font-weight: normal;">' + this["rates"] + '</div>'
                + '</div>'
               
           /*
                + '<div class="row">'
                    + '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">'
                        + '<label style="font-weight:600;">Subsidies :</label>'
                    + '</div>'
                    + '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="font-weight: normal;">' + this["subsidies"] + '</div>'
                + '</div>'
                
                + '<div class="row">'
                    + '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">'
                        + '<label style="font-weight:600;">Commission :</label>'
                    + '</div>'
                    + '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="font-weight: normal;">' + this["commission"] + '</div>'
                + '</div>'
                
                + '<div class="row">'
                    + '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">'
                        + '<label style="font-weight:600;">Other :</label>'
                    + '</div>'
                    + '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="font-weight: normal;">' + this["other"] + '</div>'
                + '</div>'
           */
            
                
            + '</div>'
            
           
            + '<div class="itemFooter" style="margin-bottom:10px;" >'
                + '<a  style="margin-left: 1%;" class="btn btn-sm btn-primary pull-right p-r-5" href="javascript:void(0)" title="Edit" onclick="edit_people(' + this["id"] + ')">'
                    + '<i class="glyphicon glyphicon-pencil"></i>'
                + '</a>'
                + '<a  class="btn btn-sm btn-danger pull-right p-r-5" href="javascript:void(0)" title="Delete" onclick="delete_confirmation(' + this["id"] + ')">'
                    + '<i class="glyphicon glyphicon-trash"></i>'
                + '</a>'

            + '</div>'
         + '</div>';
});
$('#personal').html(html);
// code for pagination
$('#personal').easyPaginate({
    paginateElement: '.item',
    elementsPerPage: 9,
    firstButton: true,
    lastButton: true
            // effect: 'climb'
});
$('.item-desc').each(function () {
    if ($(this).text().length > 130) {
        $(this).text($(this).text().substring(0, 130) + "...");
    }
});
}

$('#searchpeopleButton').on('click', function(){

    searchpeopleform()
})

$('#searchpeople').on('keyup',function(){

    searchpeopleform();
})

function searchpeopleform(){

    var searchkey = $('#searchpeople').val();

    if (searchkey == ""){

        $.ajax({
            url: "<?php echo site_url('people/ajax_list') ?>/",
            type: "GET",
            dataType: "JSON",
            success: function (data)
            {
                loadcollectionview(data);
            },
            error: function (jqXHR, textStatus, errorThrown)
            {
                alert(errorThrown);
            }
        });

    }else{

        $.ajax({
            url: "<?php echo site_url('people/ajax_search/') ?>/" + searchkey,
            type: "GET",
            dataType: "JSON",
            success: function (data)
            {
                loadcollectionview(data);
            },
            error: function (jqXHR, textStatus, errorThrown)
            {
                alert(textStatus);
            }
        })

    }

}
</script>

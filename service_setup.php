<?php if (isset($message)) {?>
<div class="alert alert-warning">
    <h3 class="text-black">
        <?=$message?>
            </span>
    </h3>
</div>

<?php }?>
<br><br><br>


<style type="text/css">
    .form-group {
        margin-bottom: 30px;
    }

    .error {
        top: 30px !important;
        color: red !important;
        font-size: 12px !important;
    }
    .m-b-0 {
        margin-bottom: 0px !important;
    }
</style>



<section class="content animated zoomIn" style="background-color:rgba(255, 255, 255, 1.0)">

    <Body>
        <div class="col-md-offset-1 col-md-10 ">
            <!--  Button Starts -->



            <div class="wizard-container">


                <!--<p id="gStartTd" style="color:rgba(255, 255, 255, 1.0);font-size:30px;font-weight:thin;">Welcome to Revenue by Services</p>
                <input style="background-color: rgba(60, 141, 188, 1.0) ;color:rgba(255, 255, 255, 1.0);font-size:30px;font-weight:thin; "
                    type="text" name="f_name" value="<?php echo (isset($user->f_name))? $user->f_name:''?>">-->


                <!-- Info button begins -->
                <!--<button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#modal_service_revenue">
                    <i class="fa fa-info mr-1"></i>
                </button>-->

                <div class="card wizard-card" data-color="green" id="wizardStartup">
                    <div class="wizard-navigation">
                        <ul>
                            <li>
                                <a href="#startupstep1" data-toggle="tab">Services</a>
                            </li>
                            <li>
                                <a href="#startupstep2" data-toggle="tab">Interaction</a>
                            </li>
                            <li>
                                <a href="#startupstep3" data-toggle="tab">Summary</a>
                            </li>

                        </ul>
                    </div>

                    <!-- New wizard 1 style ends -->
                    <div class="tab-content clearfix">
                        <div class="tab-pane animated zoomIn" id="startupstep1">

                            <div class="box box-default">
                                <div class="box-header with-border">
                                    <h1>
                                        <strong>Local Services</strong> -
                                        <small> What is your projected revenue from local services?</small>
                                    </h1>


                                    <!--<button style=" margin-left: 11px; margin-top: 17px; " class="btn btn-success" type="button"
														onclick="add_expenses()" data-toggle="collapse" aria-expanded="false" aria-controls="expenses_form"><i
															class="glyphicon glyphicon-plus"></i> Add Expenses
												</button>-->


                                    <button class="btn btn-success" type="button" data-toggle="collapse" aria-expanded="false" aria-controls="importform" onclick="add_service()"
                                        id="btnOpenForm_service">
                                        <span class="glyphicon glyphicon-plus"></span>Add A Service</button>


                                    <!--<button class="btn btn-success" type="button" data-toggle="collapse" 
                                                data-target="#serviceForm" 
                                                aria-expanded="false" 
                                                aria-controls="importform" 
                                                onclick="add_importedproduct()" id="btnOpenForm_service"><span class="glyphicon glyphicon-plus"></span>Add A Service</button>-->

                                </div>
                                <!-- /.box-header -->
                                <div class="box-body">
                                    <div class="row" id="monthly_expense_row_add_imported">
                                        <?php include 'service_imported_view.php'; ?>
                                    </div>
                                </div>
                                <div class="box-footer">
                                </div>
                            </div>
                        </div>
                        <!-- New wizard 1 style ends -->
                        <!-- New wizard 2 style begins -->
                        <div class="tab-pane animated zoomIn" id="startupstep2">
                            <h1>Project Yearly Increases</h1>
                            <div class="box box-default">
                                <div class="box-header with-border">
                                </div>
                                <!-- /.box-header -->
                                <div class="box-body">
                                    <div class="row" id="monthly_expense_row_add_imported">
                                        <?php include 'service_summary_view.php'; ?>
                                    </div>
                                    <div class="box-footer">
                                        <hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--end Menu1 -->
                        <div class="tab-pane animated zoomIn" id="startupstep3">
                            <h1>Service Revenue Summary</h1>
                            <div class="box box-default">
                                <div class="box-header with-border">
                                </div>
                                <!-- /.box-header -->
                                <div class="box-body">
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <br/>
                                        <div class="info-box" style="background-color: rgba(250, 250, 250, .20);color:rgba(250, 250, 250, 1.0);font-size:17px;font-weight:light;">
                                            <span class="info-box-icon bg-aqua">
                                                <i class="ion ion-calculator"></i>
                                            </span>
                                            <div class="info-box-content">
                                                <span class="info-box-text">Total Marketing</span>
                                                <span class="info-box-number">
                                                    <p id="total_renumeration_year1"></p>
                                                    <small></small>
                                                </span>
                                            </div>
                                            <!-- /.info-box-content -->
                                        </div>
                                        <!-- /.info-box -->
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <br/>
                                        <div class="info-box" style="background-color: rgba(250, 250, 250, .20);color:rgba(250, 250, 250, 1.0);font-size:17px;font-weight:light;">
                                            <span class="info-box-icon bg-red">
                                                <i class="ion ion-calculator"></i>
                                            </span>
                                            <div class="info-box-content">
                                                <span class="info-box-text">Total Puplic Relations</span>
                                                <span class="info-box-number">
                                                    <p id="total_superannuation_year1"></p>
                                                    <small></small>
                                                </span>
                                            </div>
                                            <!-- /.info-box-content -->
                                        </div>
                                        <!-- /.info-box -->
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="info-box" style="background-color: rgba(250, 250, 250, .20);color:rgba(250, 250, 250, 1.0);font-size:17px;font-weight:light;">
                                            <span class="info-box-icon bg-green">
                                                <i class="ion ion-calculator"></i>
                                            </span>
                                            <div class="info-box-content">
                                                <span class="info-box-text">Total Administration</span>
                                                <span class="info-box-number">
                                                    <p id="total_deductions_year1"></p>
                                                    <small></small>
                                                </span>
                                            </div>
                                            <!-- /.info-box-content -->
                                        </div>
                                        <!-- /.info-box -->
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="info-box" style="background-color: rgba(250, 250, 250, .20);color:rgba(250, 250, 250, 1.0);font-size:17px;font-weight:light;">
                                            <span class="info-box-icon bg-yellow">
                                                <i class="ion ion-calculator"></i>
                                            </span>
                                            <div class="info-box-content">
                                                <span class="info-box-text">Total Other Expenses</span>
                                                <span class="info-box-number">
                                                    <p id="total_workcover_year1"></p>
                                                    <small></small>
                                                </span>
                                            </div>
                                            <!-- /.info-box-content -->
                                        </div>
                                        <!-- /.info-box -->
                                    </div>
                                    <div class="col-md-12">
                                        <div class="panel-group" id="summary_expneses_accordion">
                                            <div class="panel panel-primary">
                                                <div class="panel-heading">
                                                    <h4 class="panel-title">
                                                        <a data-toggle="collapse" data-parent="#summary_expneses_accordion" href="#summary_expenses" class="accordion-toggle">Monthly Expenses Projections</a>
                                                    </h4>
                                                </div>
                                                <div class="panel-body">
                                                    <div id="summary_expenses" class="panel-collapse collapse in">
                                                        <div class="table-responsive">
                                                            <table id="table_summary_expense_prjections" class="table table-striped table-bordered table-hover table-condensed">
                                                                <colgroup>
                                                                    <col width="13%">
                                                                    <col width="6%">
                                                                    <col width="6%">
                                                                    <col width="6%">
                                                                    <col width="6%">
                                                                    <col width="6%">
                                                                    <col width="6%">
                                                                    <col width="6%">
                                                                    <col width="6%">
                                                                    <col width="6%">
                                                                    <col width="6%">
                                                                    <col width="6%">
                                                                    <col width="6%">
                                                                    <col width="6%">
                                                                </colgroup>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Account</th>
                                                                        <?php for ($i=0;$i<count($table_header);$i++) {?>
                                                                        <th>
                                                                            <?php echo $table_header[$i]?>
                                                                        </th>
                                                                        <?php } ?>
                                                                        <th>Total</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr id="summary_marketing">
                                                                        <td>Marketing</td>
                                                                        <?php for ($i=1;$i<=13;$i++) {?>
                                                                        <td id="summary_mark_<?php echo $i;?>">0</td>
                                                                        <?php }?>
                                                                    </tr>
                                                                    <tr id="summary_public_relations">
                                                                        <td>Public Relations</td>
                                                                        <?php for ($j=1;$j<=13;$j++) {?>
                                                                        <td id="summary_puplic_rel_<?php echo $j;?>">0</td>
                                                                        <?php }?>
                                                                    </tr>
                                                                    <tr id="summary_administraltion">
                                                                        <td>Administration</td>
                                                                        <?php for ($j=1;$j<=13;$j++) {?>
                                                                        <td id="summary_wadmin_<?php echo $j;?>">0</td>
                                                                        <?php }?>
                                                                    </tr>
                                                                    <tr id="summary_other">
                                                                        <td>Other</td>
                                                                        <?php for ($j=1;$j<=13;$j++) {?>
                                                                        <td id="summary_oth_<?php echo $j;?>">0</td>
                                                                        <?php }?>
                                                                    </tr>
                                                                    <tr id="tbl_space">
                                                                        <td>&nbsp;</td>
                                                                        <?php for ($k=1;$k<=13;$k++) {?>
                                                                        <td>&nbsp;</td>
                                                                        <?php }?>
                                                                    </tr>
                                                                    <tr id="total_summary_expenses">
                                                                        <td>
                                                                            <b>Total Expense Projections</b>
                                                                        </td>
                                                                        <?php for ($l=1;$l<=13;$l++) {?>
                                                                        <td id="summary_total_expoense_projections_<?php echo $l;?>">0</td>
                                                                        <?php }?>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <!-- End Table Responsive -->
                                                    </div>
                                                </div>
                                            </div>
                                            <!--Panel Primary-->
                                        </div>
                                        <!--Panel Group-->
                                    </div>
                                    <hr>
                                </div>
                                <!-- End Box Body -->
                                <div class="box-body">
                                </div>
                                <!-- /.box-body -->
                            </div>
                            <!-- Menu 5 -->
                        </div>
                        <!-- End tab Content -->
                        <div class="wizard-footer">
                            <div class="pull-right">
                                <input type='button' class='btn btn-next btn-fill btn-success btn-wd' name='next' value='Next' />
                                <input type='button' id="save_comsetting" class='btn btn-finish btn-fill btn-success btn-wd' name='finish' value='Finish'
                                />
                            </div>
                            <div class="pull-right">
                                <input type='button' class='btn btn-previous btn-fill btn-default btn-wd' name='previous' value='Previous' />
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
                <!-- New wizard style ends -->

            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>



</section>


<!-- Dynamic modal starts -->
<div id="modalConfirmYesNo" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"></span>
                </button>
                <h4 id="lblTitleConfirmYesNo" class="modal-title">User Confirmation</h4>
            </div>
            <div class="modal-body">
                <p id="lblMsgConfirmYesNo"></p>
            </div>
            <div class="modal-footer">
                <button id="btnYesConfirmYesNo" type="button" class="btn btn-success m-b-0">
                    <span class="glyphicon glyphicon-ok-sign"></span>Yes</button>
                <button id="btnNoConfirmYesNo" type="button" class="btn btn-default" data-dismiss="modal">
                    <span class="glyphicon glyphicon-remove"></span>No</button>
            </div>
        </div>
    </div>
</div>
<!-- /.modal dynamic ends -->

<!-- myModal2-->
<div class="modal fade" id="myModal2" tabindex="-2" role="dialog" aria-labelledby="myModalLabel2">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-body setupbody">
                <!--Wizard container -->
                <div class="wizard-container">
                    <div class="card wizard-card" data-color="green" id="wizardProfile2">

                        <form action="" method="post" id="importform" name="revenue_form" enctype="multipart/form-data" accept-charset="utf-8">
                            <?php $this->load->view('products/service_setup_modal.php'); ?>
                        </form>
                        <!-- /.Form Ends -->
                    </div>
                    <!-- /.Wizard Profile Ends -->
                </div>
                <!-- /.Wizard container -->
            </div>
            <!-- /.Modal Body Ends -->
        </div>
        <!-- /.Modal Content Ends -->
    </div>
    <!-- /.Modal Dilalog Ends -->
</div>


<!-- Feature 1 Modal-Start-->
<div class="modal fade" tabindex="-1" role="dialog" data-toggle="modal-onload" data-progress-bar="" data-duration="10000"
    id="modal_service_revenue">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <!--<h1 class="modal-title">My Plan</h1>-->
                <br/>
                <div class="info-box">
                    <span class="info-box-icon bg-aqua">
                        <i class="fa fa-bar-chart"></i>
                    </span>
                    <div class="info-box-content">
                        <div class "row">
                            <h1>"Revenue by Services Rendered" </h1>
                            <p>
                                <strong>What is service revenue?</strong>
                            </p>
                        </div>
                        <span class="info-box-number">
                            <p id="total_renumeration_year1"></p>
                            <small></small>
                        </span>
                    </div>
                    <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
                <div class="modal-body">
                    <!--Content Starts Here-->
                    <div class="col-md-12">
                        <div class="row" style="border:none; background:white; height:350px;">
                            <div class="col-xs-3">
                                <!--<img src="http://excelplans.com.au/cbp_online/assets/images/feature_1/feature_slider_1_1.jpg" height="600" width="700" alt="Image" style="border: 1px solid rgb(0, 0, 0); " /><!-->
                                <!--<centr><img class="img-responsive modal-slide-img" alt="Feature Slider10"  src="<?=base_url();?>assets/images/feature_10/feature_slider_10_1.jpg" width="200" height="150" ></center>-->
                            </div>
                            <div class="col-xs-12">
                                <p>
                                    <strong>Serivice Revenue</strong> is the total amount of revenue received by the company for
                                    services rendered for a specific period of time.Personal Services Income (PSI) is income
                                    mainly derived from an individual’s personal efforts and skill.
                                    <br/>
                                    <br/>Generally,consultants and contractors who operate as a sole trader or work through a
                                    company,that charges fees on an hourly basis or a fixed job rate are classifie as service
                                    industries.</p>

                                <h1>Example:</h1>
                                <p>
                                    <strong>
                                        Example Contract: Joe has a removalist business operating as a sole trader. he charges $120 per hour to move your goods from
                                        one place to another, he also charges $50 for call out fee ,or quatation.</strong>

                                </p>

                                <p>
                                    Use the Service Module to evlaute your service revenue.

                                </p>



                                <hr>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <h4 style="color:rgba(60, 141, 188, 1.0);font-size:12px;font-weight:thin;">Note:When you "Close" this information will no longer appear! </h4>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <!-- Feature 4 Modal-End-->
    <!-- modal dynamic content starts here -->
    <div class="modal fade" id="myModal_Help" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        ×</button>
                    <h4 class="modal-title" id="myModalLabel">
                        Help Center -
                        <a href="">Startup</a>
                    </h4>
                </div>
                <div class="modal-body">
                    <div>
                        <center>
                            <video id="videoWidth" width="600" height="" controls>
                                <source src="<?php echo base_url(); ?>/help_file/xcelplans_introduction.mp4" type="video/mp4"> Your browser does not support HTML5 video.
                            </video>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
</div>
<!-- modal dynamic content ends here -->


<!-- Scripts starts -->

<script src="<?= base_url(); ?>assets/plugins/carhartl-jquery-cookie-92b7715/jquery.cookie.js"></script>
<script src="<?= base_url(); ?>assets/js/service_setup.js"></script>
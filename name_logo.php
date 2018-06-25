<div class="row">
    <div class="col-md-12">
        <div class="testiminial-block">
            <div class="row">
                <div class="col-md-0 col-sm-4">
                    <div id="kv-avatar-errors-1" class="center" style="width:800px;display:none">
                        <?php echo $this->session->flashdata('avatar-1'); ?>
                    </div>
                    <div class="kv-avatar center image_cell">
                        <input  name="company_logo" type="file" class="file-loading image-responsive" id="company_logo">
                    </div>
                    <div class="testimonial-author">
                        Image <span>(Upload your company logo <br/>Max (120x120) jpg, jpeg, gif and png only.)</span>
                    </div>
                </div>
                <div class="col-md-0 col-sm-8 testimonial-content">
                    <div class="form-group margin-btm-zero">
                        <div class="form-group label-floating margin-btm-zero">
                            <label class="control-label">Start Date <small>(required)</small></label>
                            <input type="text" id="start_date" name="start_date" value="<?php echo ($start_date == "" || $start_date == "1970-01-01") ? date('m/d/Y') : date('m/d/Y', strtotime($start_date)); ?>">
                        </div>
                    </div>
                    <div class="form-group margin-btm-zero">
                        <div class="form-group label-floating margin-btm-zero">
                            <label class="control-label">Company Name <small>(required)</small></label>
                            <input name="company_name" id="company_name" value="<?php print $company_name; ?>" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="form-group margin-btm-zero">
                        <div class="form-group label-floating margin-btm-zero">
                            <label class="control-label">ABN No</label>
                            <input type="text" name="abn_no" id="abn_no" value="<?php print $abn_no; ?>" class="form-control">
                        </div>
                    </div>
                    <div class="form-group margin-btm-zero">
                        <div class="form-group label-floating margin-btm-zero">
                            <label class="control-label">Business Registration No </label>
                            <input type="text" name="register_no" id="register_no" value="<?php print $register_no; ?>" class="form-control">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<style>
    .margin-btm-zero{margin-bottom:0px !important;}
</style>
<script type="text/javascript">



   /* $("#company_logo").fileinput({
              overwriteInitial: true,
             maxFileSize: 500,
             showClose: false,
             showCaption: false,
             browseLabel: '',
             removeLabel: '',
            previewClass: 'company_setup',
             browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>',
             removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
             removeTitle: 'Cancel or reset changes',
             elErrorContainer: '#kv-avatar-errors-1',
             msgErrorClass: 'alert alert-block alert-danger',
            defaultPreviewContent: '<img id="imgcompany" class="img-circle" src="<?php echo ($company_detail['company_logo']) ? base_url() . 'assets/uploads/company_logo/' . $company_detail['company_logo'] : base_url() . 'assets/img/logo_placeholder_120 x 120.png'; ?>" alt="Company Logo" style="width:130px;">',
           layoutTemplates: {main2: '{preview}  {remove} {browse} '<?php if ($company_detail['company_logo']) { ?> + btnReset <?php } ?>},
            allowedFileExtensions: ["jpg", "png", "gif"]
             });
    
    */
    
    
</script>

<div class="row">

    <div class="col-sm-4">
		<div class="form-group margin-btm-zero">
			<div class="form-group label-floating margin-btm-zero">
			  <label class="control-label">Street No <small>(required)</small></label>
			  <input type="text" name="street_no" id="street_no" value="<?php print $street_no; ?>" class="form-control" >
			</div>
		</div>
    </div>

    <div class="col-sm-4">
		<div class="form-group margin-btm-zero">
			<div class="form-group label-floating margin-btm-zero">
			  <label class="control-label">Street Name <small>(required)</small></label>
			  <input type="text" name="street_name" id="street_name" value="<?php print $street_name; ?>" class="form-control">
			</div>
		</div>
    </div>

    <div class="col-sm-4">
		<div class="form-group margin-btm-zero">
			<div class="form-group label-floating margin-btm-zero">
			  <label class="control-label">Suburb <small>(required)</small></label>
			  <input type="text" name="suburb" id="suburb" value="<?php print $suburb; ?>" class="form-control">
			</div>
		</div>
    </div>
</div>
    

<div class="row">
    <div class="col-sm-6">
		<div class="form-group label-floating margin-btm-zero">
			<label class="control-label" style="top: -30px;">State/Province:</label>
			<select name="state" class="form-control" id="state"  rel="tooltip" title="In what state is you business" >
				<option value="<?php echo $state; ?>" selected><?php echo $state; ?></option>
			</select>
		</div>
	</div>
	<div class="col-sm-6">
		<div class="form-group margin-btm-zero">
			<div class="form-group label-floating margin-btm-zero">
			  <label class="control-label">Post Code/Zip Code <small>(required)</small></label>
			  <input type="text" name="zipcode" id="zipcode" value="<?php print$zipcode; ?>" class="form-control" >
			</div>
		</div>
	</div>
</div>

<div class="row">
    <div class="col-sm-6">
		<div class="form-group margin-btm-zero">
			<div class="form-group label-floating margin-btm-zero">
			  <label class="control-label">Tele <small>(required)</small></label>
			  <input type="text" name="telephone" id="telephone" value="<?php print $telephone; ?>"  data-inputmask='"mask": "(999) 999-9999"' class="form-control" >
			</div>
		</div>
	</div>
    <div class="col-sm-6">
		<div class="form-group margin-btm-zero">
			<div class="form-group label-floating margin-btm-zero">
			  <label class="control-label">Fax <small>(required)</small></label>
			  <input type="text" name="fax" id="fax" value="<?php print $fax; ?>"  data-inputmask='"mask": "(999) 999-9999"' class="form-control">
			</div>
		</div>
    </div>
</div>

<div class="row">
    <div class="col-sm-6">
		<div class="form-group margin-btm-zero">
			<div class="form-group label-floating margin-btm-zero">
			  <label class="control-label">Email <small>(required)</small></label>
			 <input type="email" name="company_email" id="company_email" value="<?php print $company_email; ?>" class="form-control"rel="tooltip"  >
			</div>
		</div>
	</div>
    <div class="col-sm-6">
		<div class="form-group margin-btm-zero">
			<div class="form-group label-floating margin-btm-zero">
			  <label class="control-label">Web</label>
			 <input type="url" name="website" id="website" value="<?php print $website; ?>" class="form-control" >
			</div>
		</div>
    </div>
</div>


<style>
.margin-btm-zero{margin-bottom:0px !important;}
</style>
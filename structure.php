<div class="row">
    <div class="col-md-12">
        <div class="testiminial-block">
            <div class="row">
                <div class="col-md-0 col-sm-6 testimonial-content">
                    <div class="form-group margin-btm-zero">
                        <div class="group">
                            <div class="form-group label-floating margin-btm-zero">
                                <label class="control-label" style="top: -30px; !important">Country</label>
                                <select name="country" class="form-control" id="country" onfocus="populateDropDown()">
                                    <option value="<?php echo $country; ?>" selected><?php echo $country.''; ?></option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group margin-btm-zero">
                        <div class="group">
                            <div class="form-group label-floating margin-btm-zero">
                                <label class="control-label">Company Structure:</label>
                                <select class="form-control" name="cmpy_structure" id="cmpy_structure">
                                    <option <?php ($cmpy_structure == '') ? print "selected" : print "" ?>>Please Select</option>
                                    <option <?php ($cmpy_structure == 'Sole Proprietorship') ? print "selected" : print "" ?>>Sole Proprietorship</option>
                                    <option <?php ($cmpy_structure == 'General Partnership') ? print "selected" : print "" ?>>General Partnership</option>
                                    <option <?php ($cmpy_structure == 'Limited Partnership') ? print "selected" : print ""; ?>>Limited Partnership</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group margin-btm-zero">
                        <div class="group">
                            <div class="form-group label-floating margin-btm-zero">
                                <label class="control-label">Revenue Streams :</label>
                                
                                
                                <select class="form-control" name="industry" id="industry">
                                    
                               <!--------------------------------------------------------------------
                                [1. Online Revenue is turnd on for Basic subscription]
                                ---------------------------------------------------------------------->
                                   
                                    <option <?php ($industry == 'Clothing') ? print "selected" : print "" ?>>Apparel Product</option>
                                    <option <?php ($industry == 'Cosmetics') ? print "selected" : print "" ?>>Cosmetics</option> 
                                    
                                    
                                
                                    <!--------------------------------------------------------------------
                                    [1. Revenue]
                                    
                                    <!----------------------------------------------------------------------------------
                                    [1. These revenue options will be turneed if userr subscribes to the Pro Version
                                    fro now they are trned off
                          
                                    <option <?php ($industry == 'Products') ? print "selected" : print "" ?>>Imported Products</option> 
                                    <option <?php ($industry == 'Online sales') ? print "selected" : print "" ?>>Online sales</option>
                                    <option <?php ($industry == 'Services') ? print "selected" : print "" ?>>Service Industry</option>
                                    
                               
                                    
                 
                                    <option <?php ($industry == 'Accounting') ? print "selected" : print "" ?>>Accounting</option>
                                    <option <?php ($industry == 'Automotive electrical services') ? print "selected" : print "" ?>>Automotive electrical services</option>
                                    <option <?php ($industry == 'Architectural services') ? print "selected" : print ""; ?>>Architectural services</option>
                                    <option <?php ($industry == 'Alarm installation services – fire and security') ? print "selected" : print "" ?>>Alarm installation services – fire and security</option>
                                    <option <?php ($industry == 'Air conditioning, refrigeration and heating services') ? print "selected" : print "" ?>>Air conditioning, refrigeration and heating services</option>
                                    <option <?php ($industry == 'Building Construction') ? print "selected" : print "" ?>>Building Constrcution</option>
                                    
                                    <option <?php ($industry == 'Bottle shops and liquor retailing') ? print "selected" : print ""; ?>>Bottle shops and liquor retailing</option>
                                    <option <?php ($industry == 'Bricklaying services') ? print "selected" : print "" ?>>Bricklaying services</option>

                                    <option <?php ($industry == 'Book retailing') ? print "selected" : print "" ?>>Book retailing</option>
                                    <option <?php ($industry == 'Blocklaying services') ? print "selected" : print ""; ?>>Blocklaying services</option>
                                    <option <?php ($industry == 'Beauty services') ? print "selected" : print "" ?>>Beauty services</option>

                                    <option <?php ($industry == 'Barber and men’s hairdressing') ? print "selected" : print "" ?>>Barber and men’s hairdressing</option>
                                    <option <?php ($industry == 'Bakeries and hot bread shops') ? print "selected" : print ""; ?>>Bakeries and hot bread shops</option>
                                    <option <?php ($industry == 'Beauty services') ? print "selected" : print "" ?>>Beauty services</option>

                                    <option <?php ($industry == 'Cabinet makers') ? print "selected" : print "" ?>>Cabinet makers</option>
                                    <option <?php ($industry == 'Cake shops and patisseries') ? print "selected" : print ""; ?>>Cake shops and patisseries</option>
                                    <option <?php ($industry == 'Carpet laying services') ? print "selected" : print "" ?>>Carpet laying services</option>
                                    <option <?php ($industry == 'Capentry service') ? print "selected" : print "" ?>>Capentry serivice</option>
                                    <option <?php ($industry == 'Carpet laying services') ? print "selected" : print "" ?>>Carpet laying services</option>
                                    <option <?php ($industry == 'Catering services') ? print "selected" : print "" ?>>Cabinet makers</option>
                        
			
                                    <option <?php ($industry == 'Cement rendering') ? print "selected" : print ""; ?>>Cement rendering</option>
                                    <option <?php ($industry == 'Chicken shops') ? print "selected" : print "" ?>>Chicken shops</option>
                                    <option <?php ($industry == 'Child care services') ? print "selected" : print "" ?>>Child care services</option>
                                    <option <?php ($industry == 'Chiropractic and osteopathic services') ? print "selected" : print "" ?>>Chiropractic and osteopathic services</option>
                                    <option <?php ($industry == 'Cleaning services – building and other industrial') ? print "selected" : print "" ?>>Cleaning services – building and other industrial</option>
                                    <option <?php ($industry == 'Cleaning services – carpet, rug and furniture upholstery') ? print "selected" : print "" ?>>Cleaning services – carpet, rug and furniture upholstery</option>
                                    <option <?php ($industry == 'Clothing') ? print "selected" : print "" ?>>Clothing</option>
                                    <option <?php ($industry == 'Coffee shops') ? print "selected" : print ""; ?>>Coffee shops</option>
                                    <option <?php ($industry == 'Computer retailing') ? print "selected" : print "" ?>>Computer retailing</option>
                                    <option <?php ($industry == 'Concreting services') ? print "selected" : print "" ?>>Concreting services</option>
                                    <option <?php ($industry == 'Confectionery retailing') ? print "selected" : print "" ?>>Confectionery retailing</option>
                                    <option <?php ($industry == 'Courier services') ? print "selected" : print "" ?>>Courier services</option>
                                    <option <?php ($industry == 'Cosmetics') ? print "selected" : print "" ?>>Cosmetics</option>  
                                    <option <?php ($industry == 'Craft shops') ? print "selected" : print ""; ?>>Craft shops</option>

                                    <option <?php ($industry == 'Delivery services') ? print "selected" : print "" ?>>Delivery services</option>
                                    <option <?php ($industry == 'Dental specialists') ? print "selected" : print "" ?>>Dental specialists</option>
                                    <option <?php ($industry == 'Dental surgeons – general') ? print "selected" : print ""; ?>>Dental surgeons – general</option>
                                    <option <?php ($industry == 'Discount and variety stores') ? print "selected" : print "" ?>>Discount and variety stores</option>
                                    <option <?php ($industry == 'Domestic appliance repair and maintenance') ? print "selected" : print "" ?>>Domestic appliance repair and maintenance</option>
                                    <option <?php ($industry == 'Driving schools and instructors') ? print "selected" : print ""; ?>>Driving schools and instructors</option>
                                    <option <?php ($industry == 'Delicatessen') ? print "selected" : print ""; ?>>Delicatessen</option>

                                    <option <?php ($industry == 'Electrical and electronic product retailing') ? print "selected" : print "" ?>>Electrical and electronic product retailing</option>
                                    <option <?php ($industry == 'Electrical services') ? print "selected" : print "" ?>>Electrical services</option>
                                    <option <?php ($industry == 'Entertainment media retailing') ? print "selected" : print "" ?>>Entertainment media retailing</option>

                                    <option <?php ($industry == 'Fence construction') ? print "selected" : print ""; ?>>Fence constructionl</option>
                                    <option <?php ($industry == 'Fish and chips shops') ? print "selected" : print "" ?>>Fish and chips shops</option>
                                    <option <?php ($industry == 'Fish and seafood retailing – fresh') ? print "selected" : print "" ?>>Fish and seafood retailing – fresh</option>
                                    <option <?php ($industry == 'Floor covering retailing') ? print "selected" : print "" ?>>Floor covering retailing</option>
                                    <option <?php ($industry == 'Florists') ? print "selected" : print ""; ?>>Florists</option>
                                    <option <?php ($industry == 'Footwear retailing') ? print "selected" : print ""; ?>>Footwear retailing</option>
                                    <option <?php ($industry == 'Fruit and vegetable retailing') ? print "selected" : print "" ?>>Fruit and vegetable retailing</option>
                                    <option <?php ($industry == 'Fuel retailing') ? print "selected" : print "" ?>>Fuel retailing</option>
                                    <option <?php ($industry == 'Furniture removalists') ? print "selected" : print "" ?>>Furniture removalists</option>
                                    <option <?php ($industry == 'Furniture retailing') ? print "selected" : print ""; ?>>Furniture retailing</option>

                                    <option <?php ($industry == 'Graphic Artist') ? print "selected" : print "" ?>>Graphic Artist</option>
                                    <option <?php ($industry == 'Garden supplies retailing') ? print "selected" : print ""; ?>>Garden supplies retailing</option>
                                    <option <?php ($industry == 'Gift stores') ? print "selected" : print "" ?>>Gift stores</option>
                                    <option <?php ($industry == 'Glazing services') ? print "selected" : print "" ?>>Glazing services</option>
                                    <option <?php ($industry == 'Grocery retailing and convenience stores') ? print "selected" : print "" ?>>Grocery retailing and convenience stores</option>
                               

                                    <option <?php ($industry == 'Hairdressers') ? print "selected" : print "" ?>>Hairdressers</option>
                                    <option <?php ($industry == 'Hardware and building supplies retailing') ? print "selected" : print ""; ?>>Hardware and building supplies retailing</option>
                                    <option <?php ($industry == 'Health and fitness centres') ? print "selected" : print "" ?>>Health and fitness centres</option>
                                    <option <?php ($industry == 'Health food retailing') ? print "selected" : print "" ?>>Health food retailing</option>
                                    <option <?php ($industry == 'Homewares retailing') ? print "selected" : print "" ?>>Homewares retailing</option>

                                    <option <?php ($industry == 'Ice cream retailing') ? print "selected" : print ""; ?>>Ice cream retailing</option>
                                    <option <?php ($industry == 'It') ? print "selected" : print "" ?>>It</option>

                                    <option <?php ($industry == 'Kebab shops') ? print "selected" : print "" ?>>Kebab shops</option>

                                    <option <?php ($industry == 'Landscape construction') ? print "selected" : print ""; ?>>Landscape construction</option>
                                    <option <?php ($industry == 'Laundry and dry-cleaning services') ? print "selected" : print "" ?>>Laundry and dry-cleaning services</option>
                                    <option <?php ($industry == 'Lawn mower retailing') ? print "selected" : print "" ?>>Lawn mower retailing</option>
                                    <option <?php ($industry == 'Lawn mowing and garden services') ? print "selected" : print "" ?>>Lawn mowing and garden services</option>

                                    <option <?php ($industry == 'Machinery and equipment repairs and maintenance') ? print "selected" : print "" ?>>Machinery and equipment repairs and maintenance</option>
                                    <option <?php ($industry == 'Manchester and other textile goods retailing') ? print "selected" : print ""; ?>>Manchester and other textile goods retailing</option>
                                    <option <?php ($industry == 'Meat and poultry retailing – fresh') ? print "selected" : print "" ?>>Meat and poultry retailing – fresh</option>
                                    <option <?php ($industry == 'Motor vehicle parts and batteries retailing') ? print "selected" : print "" ?>>Motor vehicle parts and batteries retailing</option>
                                    <option <?php ($industry == 'Motor vehicle retail – new and used') ? print "selected" : print "" ?>>GMotor vehicle retail – new and used</option>
                                    <option <?php ($industry == 'Musical instruments retail') ? print "selected" : print ""; ?>>Musical instruments retail</option>

                                    <option <?php ($industry == 'Newsagents') ? print "selected" : print "" ?>>Newsagents</option>

                                    <option <?php ($industry == 'Painting services') ? print "selected" : print ""; ?>>Painting services</option>
                                    <option <?php ($industry == 'Panel beating and smash repairs') ? print "selected" : print "" ?>>Panel beating and smash repairs</option>
                                    <option <?php ($industry == 'Pest control services') ? print "selected" : print "" ?>>Pest control services</option>
                                    <option <?php ($industry == 'Pets and pet supply retailing') ? print "selected" : print "" ?>>Pets and pet supply retailing</option>
                                    <option <?php ($industry == 'Pharmacy') ? print "selected" : print ""; ?>>Pharmacy</option>
                                    <option <?php ($industry == 'Physiotherapy services') ? print "selected" : print ""; ?>>Physiotherapy services</option>
                                    <option <?php ($industry == 'Picture framing retailing') ? print "selected" : print "" ?>>Picture framing retailing</option>
                                    <option <?php ($industry == 'Pizza shops – takeaway') ? print "selected" : print "" ?>>Pizza shops – takeaway</option>
                                    <option <?php ($industry == 'Plastering and ceiling services') ? print "selected" : print "" ?>>Plastering and ceiling services</option>
                                    <option <?php ($industry == 'Plumbing services') ? print "selected" : print ""; ?>>Plumbing services</option>
                                    <option <?php ($industry == 'Printing') ? print "selected" : print ""; ?>>Printing</option>
                                    <option <?php ($industry == 'Printing support services') ? print "selected" : print "" ?>>Printing support services</option>
                                    <option <?php ($industry == 'Pubs, taverns and bars') ? print "selected" : print "" ?>>Pubs, taverns and bars</option>

                                    <option <?php ($industry == 'Restaurants') ? print "selected" : print "" ?>>Restaurants</option>
                                    <option <?php ($industry == 'Road freight transport services') ? print "selected" : print ""; ?>>Road freight transport services</option>
                                    <option <?php ($industry == 'Roofing services, including roof tiling, guttering and metal roofing') ? print "selected" : print ""; ?>>Roofing services, including roof tiling, guttering and metal roofing</option>


                                    <option <?php ($industry == 'Sports, camping and fishing retailing') ? print "selected" : print "" ?>>Sports, camping and fishing retailing</option>
                                    <option <?php ($industry == 'Sports and physical recreation instruction') ? print "selected" : print ""; ?>>Sports and physical recreation instruction</option>
                                    <option <?php ($industry == 'Stationery goods retailing') ? print "selected" : print ""; ?>>Stationery goods retailing</option>

                                    <option <?php ($industry == 'Takeaway food services') ? print "selected" : print "" ?>>Takeaway food services</option>
                                    <option <?php ($industry == 'Taxi drivers and operators') ? print "selected" : print ""; ?>>Taxi drivers and operators</option>
                                    <option <?php ($industry == 'Tiling services – floor and wall') ? print "selected" : print ""; ?>>Tiling services – floor and wall</option>
                                    <option <?php ($industry == 'Timber floor sanding') ? print "selected" : print "" ?>>Timber floor sanding</option>
                                    <option <?php ($industry == 'Tobacco retailing') ? print "selected" : print ""; ?>>Tobacco retailing</option>
                                    <option <?php ($industry == 'Towing services') ? print "selected" : print ""; ?>>Towing services</option>
                                    <option <?php ($industry == 'Toy and game retailingd') ? print "selected" : print "" ?>>Toy and game retailing</option>
                                    <option <?php ($industry == 'Tutoring and coaching') ? print "selected" : print ""; ?>>Tutoring and coaching</option>
                                    <option <?php ($industry == 'Tyre retailing') ? print "selected" : print ""; ?>>Tyre retailing</option>

                                    <option <?php ($industry == 'Veterinary services') ? print "selected" : print "" ?>>Veterinary services</option>
                                    <option <?php ($industry == 'Video and other electronic media rental and hiring') ? print "selected" : print ""; ?>>Video and other electronic media rental and hiring</option>

                                    <option <?php ($industry == 'Watch and jewellery retailing') ? print "selected" : print ""; ?>>Watch and jewellery retailing</option>
                            
                                                   
                                      ---------------------------------------------------------------------->
                                    
                                                     
                                    
                                    
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-0 col-sm-6 testimonial-content">
                    <div class="form-group margin-btm-zero">
                        <div class="group">
                            <div class="form-group label-floating margin-btm-zero margin-btm-zero">
                                <label class="control-label">Currency:</label>
                                <select class="form-control" name="currency" id="currency" onchange="adj_financial_year(this.value)">
                                    <option value="AUD" <?php ($currency == 'AUD') ? print "selected" : print "" ?>>AUD</option>
                                    <option value="USD" <?php ($currency == 'USD') ? print "selected" : print "" ?>>USD</option>
                                    <option value="INR" <?php ($currency == 'INR') ? print "selected" : print ""; ?>>INR</option>
                                    <option value="EUR" <?php ($currency == 'EUR') ? print "selected" : print "" ?>>EUR</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group margin-btm-zero">
                        <div class="form-group label-floating margin-btm-zero">
                            <label class="control-label" style="top: -30px; !important">Financial Year</label>
                            <input type="text" class="form-control" name="financial_year" id="financial_year" value="<?php if(!empty($financial_year)) { print $financial_year; } else { echo 'JUL-JUN'; } ?>" readonly>
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

<script>
    function populateDropDown() {
        populateCountries("country", "state");
    }

    function adj_financial_year(value) {
        var  currency_class;
        if (value == "AUD") {
            currency_class = "fa-dollar";
            $("#financial_year").val("JUL-JUN");
        } else if (value == "USD") {
            currency_class = "fa-dollar";
            $("#financial_year").val("JAN-DEC");
        } else if (value == "INR") {
            currency_class = "fa-inr";
            $("#financial_year").val("APR-MAR");
        } else if (value == "EUR") {
            currency_class = "fa-eur";
            $("#financial_year").val("APR-MAR");
        }
        $(".curr").removeClass("fa-dollar");
        $(".curr").removeClass("fa-inr");
        $(".curr").removeClass("fa-eur");
        $(".curr").addClass(currency_class);
    }
</script>
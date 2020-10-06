odoo.define('website_sale_default_code.website_sale_default_code', function(require) {
    "use strict";
    var core = require('web.core');
    var _t = core._t;
    var ajax = require('web.ajax');
    
    $(document).ready(function() {
    	$('.oe_website_sale').each(function () {
		    var oe_website_sale = this;
			
            show_hide_stock_change();
            $(oe_website_sale).on('change', function(ev) {
                show_hide_stock_change();
            });
        });

        function show_hide_stock_change() {
            var $form_data = $('div.js_product').closest('form');
            var $js_qty = $form_data.find('.css_quantity.input-group.oe_website_spinner');

            if ($("input[name='product_id']").is(':radio')){
                var product_id = $form_data.find("input[name='product_id']:checked").val();
            } else {
                var product_id = $form_data.find("input[name='product_id']").val();
            }
                
            var qty_available = $form_data.find('#' + product_id).attr('value');
            $form_data.find('.show_hide_stock_change').hide();
            $form_data.find('#' + product_id).show();

            if (qty_available <= 0) {
                $('#add_to_cart').hide();
                $js_qty.hide();
            } else {
                $('#add_to_cart').show();
                $js_qty.show();
            }
        }
    });
});
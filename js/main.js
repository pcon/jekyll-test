/*jslint browser: true, regexp: true */
/*global jQuery, $ */

function toggle_dropdown() {
    jQuery(this).parent().toggleClass('slds-is-open');
}

jQuery(document).ready(function () {
    jQuery('#lang_button').on('click', toggle_dropdown);
});
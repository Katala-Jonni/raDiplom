export default (change) => {
    const jQuery = window.jQuery;
    jQuery(document).ready(function () {
        jQuery("#slider-range").slider({
            range: true,
            min: 0,
            max: 60000,
            values: [0, 60000],
            slide: function (event, ui) {
                change(ui.values, event.target.children);
            }
        });
    });
};
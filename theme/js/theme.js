/*
 * This JavaScript doesn't do anything. The file exists just to demonstrate
 * including static assets from the HTML in themes.
 */
$(function(){
    $('body').scrollspy({ target: '#navbar-example' });

    $('.bs-docs-sidenav a').click(function (e) {
        // e.preventDefault()
        $(this).tab('show')
    });

})


$(document).ready(function () {
    var $headerSideMenu = $('.header-sidemenu');
    var $headerSideMenuClose = $('.close-header-sidemenu');
    var $headerSideMenuToggle = $('.toggle-header-sidemenu');
    
    $headerSideMenuToggle.click(function(e){
        e.preventDefault();
       $headerSideMenu.addClass('d-block slideInRight animated'); 
    });
    
    $headerSideMenuClose.click(function(e){
        e.preventDefault();
        $headerSideMenu.removeClass('d-block slideInRight animated');
    });
});
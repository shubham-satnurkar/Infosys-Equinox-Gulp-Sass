$(document).ready(function(){
    let navBtn = $('.navbar__toggler');
    let $navMenu = $('#collapseMenu');
    navBtn.on('click', function(){
        $(this).toggleClass('change')

        $navMenu.toggleClass('active');
        $('body').toggleClass('overflow')
    })
})
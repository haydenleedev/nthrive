$(document).ready(function (e) {
    function t(t) {
        e(t).bind("click", function (t) {
            t.preventDefault();
            e(this).parent().fadeOut()
        })
    }
    e(".dropdown-toggle").click(function () {
        $(".submenu-change").removeClass("active-link");
        $(".right-column-wrap > div.submenu-change-default:nth-of-type(1)").show();
        var t = e(this).parent(".button-dropdown").children(".dropdown-menu").is(":hidden");
        e(".dropdown-menu").hide();
        e(".dropdown-toggle").removeClass("active");
        if (t) {
            e(this).parent(".button-dropdown").children(".dropdown-menu").toggle().parent(".button-dropdown").children(".dropdown-toggle").addClass("active")
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
    })
});
$("div.first-sub").hover(function () {
    var num = $(this).data('menulink');
    $('#secondsub-' + num).toggleClass("active-link");
    $('.right-column-wrap > div.submenu-change-default:nth-of-type(1)').toggleClass("hide-default");
});
$("div.submenu-change").hover(function () {
    $(this).toggleClass("active-link");
    $('.right-column-wrap > div.submenu-change-default:nth-of-type(1)').toggleClass("hide-default");
});
$(".dropdown-menu").mouseleave(function () {
    $('.right-column-wrap > div.submenu-change-default:nth-of-type(1)').show();
});
$(".left-column-wrap").hover(function () {
    $(this).toggleClass("active-default");
});
$('#show-mobile-menu').on('click', function () {
    $('body').toggleClass('mobmenuopen');
});

(function ($) {
    var ico = $('<span class="arrow"></span>');
    $('#mobile-main-menu > li:has(ul) > a').on('click', function () {
        $(this).parent('li').toggleClass('open');
    });
    $('.mobile-sub-menu > li:has(ul) > a').append(ico);
    $('.mobile-sub-menu > li:has(ul) > a ').on('click', function () {
        $(this).parent('li').toggleClass('open-sub');
    });
})(jQuery)
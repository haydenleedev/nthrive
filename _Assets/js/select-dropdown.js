$(document).ready(function () {
    $('.contact-tabs ul li a').on('click', function () {
        $(this).parent('div').parent('li').removeClass('open').addClass('open');
        $(this).parent('div').parent('li').siblings('li').removeClass('open');
        var hat1 = $(this).attr("href");
        $(hat1).siblings('div.tab-detail').hide();
        $(hat1).show();
        return false;
    });

    $('.mobile-select ul li a').on('click', function () {
        $(this).parent('li').parent('ul').slideToggle(200);
        var toggleText2 = $(this).text();
        $(this).parent('li').parent('ul').siblings('div').children('span.drtext').text(toggleText2);
        $(this).parent('li').toggleClass('open');
        $(this).parent('li').siblings('li').removeClass('open');
        var hat1 = $(this).attr("href");
        $(hat1).show();
        return false;
    });

    $('.mobile-select .dropdown').click(function () {
        $(this).next('ul').slideToggle(200);
    });

    $('.mobile-select ul li').on('click', function () {
        var toggleText = $(this).find('a').text();
        $('.drtext-c').text(toggleText);
        $(this).toggleClass('open');
        $(this).siblings('li').removeClass('open');
        var hat2 = $(this).children('a').attr("href");
        $(hat2).siblings('div.tab-detail').hide();
        $(hat2).show();
        var hat3 = $(this).children('a').attr("href");
        $(hat2).parent('li').siblings('li').removeClass('showme');
        $(hat2).parent('li').addClass('showme');
        $('.mobile-carousel').slick('setPosition');
        return false;
    });

    $('.nav-dropdown a').click(function (e) {
        var tabLink = $(this).attr("href");
        var aText = $(this).find('a').text();
        //$(this).siblings('div.tab-detail').hide();
        //$(this).show();
        //return false;
        console.log(tabLink);
        console.log(aText);

        //$('.contact-tabs > .tab-detail').hide();
        //$(this).siblings('.tab-detail').hide();
        //$(this.hash).show();

        //e.preventDefault(); 

    });

    //$(".nav-dropdown a").click(function (event) {
    //    event.preventDefault();
    //    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    //});
});

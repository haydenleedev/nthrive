$(function () {
    // misc adjustments
    //$('.footer-share').clone().addClass('mobileview').insertAfter('.footer-logo');
    //$('.social-strip .comment-link').clone().addClass('tabview').insertAfter('.social-share');
    $('.home-slider').on('init', function (ev, el) {
        $('video').each(function () {
            this.play();
        });
    });
    // slick slider
    $('.home-slider').slick({
        arrows: false,
        infinite: true,
        autoplay: true,
        pauseOnFocus: false,
        dots: true,
        fade: true,
        autoplaySpeed: 6000,
        speed: 400
    });
    $('.home-slider').on('afterChange', function (event, slick, currentSlide) {
        var vid = $(slick.$slides[currentSlide]).find('video');
        if (vid.length > 0)
            $(vid).get(0).play();
    });
    $('.carousel-box').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // companies carousel
    $('.partner-companies-carousel').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.c-arrows .ar-prev').on('click', function () {
        $('.carousel-box .slick-prev').trigger('click');
    });
    $('.c-arrows .ar-next').on('click', function () {
        $('.carousel-box .slick-next').trigger('click');
    });
    // mobile carousel
    /*$('.mob-carousel-wrapper').each(function(){
        var $this = $(this);
        var cTarget = $(this).find('.mobile-carousel');
        $this.find('.item').clone().appendTo(cTarget);
    });*/
    /*var divs = $(".wrap-2 > div");
    for(var i = 0; i < divs.length; i+=2) {
      divs.slice(i, i+2).wrapAll("<div class='wrapped'></div>");
    }*/
    $('.mobile-carousel').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    // background maker
    $('.backbg').each(function () {
        var backbgPath = $(this).attr('src');
        $(this).parent('.backbgbox').css('background-image', 'url(' + backbgPath + ')');
    });

    // tabs
    $('.tab-links ul li a').on('click', function () {
        $(this).parent('li').toggleClass('open');
        $(this).parent('li').siblings('li').removeClass('open');
        var hat1 = $(this).attr("href");
        //$(hat).siblings('div.listing').hide();
        $(hat1).siblings('div.tab-detail').hide();
        $(hat1).show();
        return false;
    });
    // Contact tabs
    $('.contact-tabs ul li a').on('click', function () {
        $(this).parent('div').parent('li').toggleClass('open');
        $(this).parent('div').parent('li').siblings('li').removeClass('open');
        var hat1 = $(this).attr("href");
        $(hat1).siblings('div.tab-detail').hide();
        $(hat1).show();
        return false;
    });
    // Contact tabs Mobile
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
    $('.tabs-box .tab-links ul').clone().appendTo(".tab-links-mobile");
    $('.tab-links-mobile .dropdown').click(function () {
        //alert("hi");
        $(this).next('ul').slideToggle(200);
    });
    $('.tab-links-mobile ul li').on('click', function () {
        var toggleText = $(this).find('a').text();
        //$(this).find('a').click();
        //alert(toggleText);
        $('.tab-links-mobile ul').slideUp();
        $('.drtext').text(toggleText);
        $(this).toggleClass('open');
        $(this).siblings('li').removeClass('open');
        var hat2 = $(this).children('a').attr("href");
        //$(hat).siblings('div.listing').hide();
        $(hat2).siblings('div.tab-detail').hide();
        $(hat2).show();
        var hat3 = $(this).children('a').attr("href");
        //$(hat).siblings('div.listing').hide();
        $(hat2).parent('li').siblings('li').removeClass('showme');
        $(hat2).parent('li').addClass('showme');
        $('.mobile-carousel').slick('setPosition');
        //$('.mobile-carousel').resize();
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
    if ($(window).width() < 960) {
        $('.mainnav > ul > li:has(>ul)').on('click', function () {
            $(this).find('>ul').slideToggle();
            $(this).siblings('li:has(>ul)').find('>ul').hide();
        });
    }
    // mobile menu
    $('.mobilemenu_btn').on('click', function () {
        $('.mainnav').slideToggle();
        if ($('.mainnav ul li ul').is(':visible')) {
            $('.mainnav ul li ul').slideUp();
        }
    });
    $('.th-dots').on('click', function () {
        $('body').toggleClass('mobmenuopen');
    });
    function wResize() {
        var winW = $(window).width();
        var winH = $(window).innerHeight();
        if (winW > 767) {
        }
        if (winW < 768) {
        }
    }
    wResize();
    $(window).resize(function () {
        wResize();
    });
    // load more
    $('.to-load-more0').each(function (i) {
        var $this = $(this);
        x = 6;
        x1 = x;
        size_li = $this.find("ul.mob-carousel-content li").size();
        if (size_li < x) {
            $this.find('.show-more').css({ 'visibility': 'hidden' });
        }
        $this.find('ul li:lt(' + x + ')').show();
        $this.find('.show-more').click(function () {
            x = (x + 3 <= size_li) ? x + 3 : size_li;
            $this.find('ul li:lt(' + x + ')').show();
            //alert(size_li);
            var avdown = $this.find('ul li:visible').size();
            //alert(avdown);
            if (avdown >= size_li) {
                $this.addClass('alldown');
            }
            return false;
        });
        $this.find('.collapse').click(function () {
            $this.removeClass('alldown');
            $this.find('ul li').hide();
            $this.find('ul li:lt(' + x1 + ')').show();
            x = x1;
        });
    });
    $('.to-load-more1').each(function (i) {
        var $this = $(this);
        y = 6;
        y1 = y;
        size_li1 = $this.find("ul.mob-carousel-content li").size();
        if (size_li1 < y) {
            $this.find('.show-more').css({ 'visibility': 'hidden' });
        }
        $this.find('ul li:lt(' + y + ')').show();
        $this.find('.show-more').click(function () {
            y = (y + 3 <= size_li1) ? y + 3 : size_li1;
            $this.find('ul li:lt(' + y + ')').show();
            //alert(size_li);
            var avdown1 = $this.find('ul li:visible').size();
            //alert(avdown);
            if (avdown1 >= size_li1) {
                $this.addClass('alldown');
            }
            return false;
        });
        $this.find('.collapse').click(function () {
            $this.removeClass('alldown');
            $this.find('ul li').hide();
            $this.find('ul li:lt(' + y1 + ')').show();
            y = y1;
        });
    });
    $('.to-load-more2').each(function (i) {
        var $this = $(this);
        z = 6;
        z1 = z;
        size_li2 = $this.find("ul.mob-carousel-content li").size();
        if (size_li2 < z) {
            $this.find('.show-more').css({ 'visibility': 'hidden' });
        }
        $this.find('ul li:lt(' + z + ')').show();
        $this.find('.show-more').click(function () {
            z = (z + 3 <= size_li2) ? z + 3 : size_li2;
            $this.find('ul li:lt(' + z + ')').show();
            var avdown2 = $this.find('ul li:visible').size();
            if (avdown2 >= size_li2) {
                $this.addClass('alldown');
            }
            return false;
        });
        $this.find('.collapse').click(function () {
            $this.removeClass('alldown');
            $this.find('ul li').hide();
            $this.find('ul li:lt(' + z1 + ')').show();
            z = z1;
        });
    });
    // marquee
    $('marquee').on('mouseover', function () {
        $(this).attr('scrollamount', 0);
    }).mouseout(function () {
        $(this).attr('scrollamount', 5);
    });

    // Sticky header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('body').addClass("sticky");
        } else {
            $('body').removeClass("sticky");
        }
    });
    if ($(this).scrollTop() > 20) {
        $('body').addClass("sticky");
    } else {
        $('body').removeClass("sticky");
    }
}); // end document ready
// Sticky Search home
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var nav = $('#sticky-anchor');
    if (nav.length) {
        var div_top = nav.offset().top;
        if (window_top > (div_top - 80)) {
            // $('#search-bar-home').addClass('stick');
            //  $('#sticky-anchor').height($('#search-bar-home').outerHeight());
            $('.search-bar').addClass('stick');
            $('#sticky-anchor').height($('.search-bar').outerHeight());
        } else {
            //   $('#search-bar-home').removeClass('stick');
            $('.search-bar').removeClass('stick');
            $('#sticky-anchor').height(0);
        }
    }
}
$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});
var dir = 1;
var MIN_TOP = 200;
var MAX_TOP = 350;
function autoscroll() {
    var window_top = $(window).scrollTop() + dir;
    if (window_top >= MAX_TOP) {
        window_top = MAX_TOP;
        dir = -1;
    } else if (window_top <= MIN_TOP) {
        window_top = MIN_TOP;
        dir = 1;
    }
    $(window).scrollTop(window_top);
    window.setTimeout(autoscroll, 100);
}
// END: Sticky Search
// START: Word Trim Function
function wordTrim(value, length, overflowSuffix) {
    if (value.length <= length) return value;
    var strAry = value.split(' ');
    var retLen = strAry[0].length;
    for (var i = 1; i < strAry.length; i++) {
        if (retLen == length || retLen + strAry[i].length + 1 > length) break;
        retLen += strAry[i].length + 1
    }
    return strAry.slice(0, i).join(' ') + (overflowSuffix || '');
}
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
        var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
        e(".dropdown-menu").hide();
        e(".dropdown-toggle").removeClass("active-menu");
        if (t) {
            e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active-menu")
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active-menu");
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
// Mobiel Menu
$('#show-mobile-menu').on('click', function () {
    $('body').toggleClass('mobmenuopen');
});
// tabs
$('.contact-tabs ul li a').on('click', function () {
    $(this).parent('div').parent('li').toggleClass('open');
    $(this).parent('div').parent('li').siblings('li').removeClass('open');
    var hat1 = $(this).attr("href");
    $(hat1).siblings('div.tab-detail').hide();
    $(hat1).show();
    return false;
});
(function ($) {
    var ico = $('<span class="arrow"></span>');
    // $('#mobile-main-menu > li:has(ul) > a').append(ico);
    $('#mobile-main-menu > li:has(ul) > a').on('click', function () {
        $(this).parent('li').toggleClass('open');
    });
    $('.mobile-sub-menu > li:has(ul) > a').append(ico);
    $('.mobile-sub-menu > li:has(ul) > a ').on('click', function () {
        $(this).parent('li').toggleClass('open-sub');
    });
})(jQuery)
//video
function videoClose() {
    location.reload();
}
!(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function ($) {
            return factory(root, $);
        });
    } else if (typeof exports === 'object') {
        factory(root, require('jquery'));
    } else {
        factory(root, root.jQuery || root.Zepto);
    }
})(this, function (global, $) {
    'use strict';
    /**
     * Name of the plugin
     * @private
     * @const
     * @type {String}
     */
    var PLUGIN_NAME = 'popup';
    /**
     * Namespace for CSS and events
     * @private
     * @const
     * @type {String}
     */
    var NAMESPACE = global.REMODAL_GLOBALS && global.REMODAL_GLOBALS.NAMESPACE || PLUGIN_NAME;
    /**
     * Animationstart event with vendor prefixes
     * @private
     * @const
     * @type {String}
     */
    var ANIMATIONSTART_EVENTS = $.map(
        ['animationstart', 'webkitAnimationStart', 'MSAnimationStart', 'oAnimationStart'],
        function (eventName) {
            return eventName + '.' + NAMESPACE;
        }
    ).join(' ');
    /**
     * Animationend event with vendor prefixes
     * @private
     * @const
     * @type {String}
     */
    var ANIMATIONEND_EVENTS = $.map(
        ['animationend', 'webkitAnimationEnd', 'MSAnimationEnd', 'oAnimationEnd'],
        function (eventName) {
            return eventName + '.' + NAMESPACE;
        }
    ).join(' ');
    /**
     * Default settings
     * @private
     * @const
     * @type {Object}
     */
    var DEFAULTS = $.extend({
        hashTracking: true,
        closeOnConfirm: true,
        closeOnCancel: true,
        closeOnEscape: true,
        closeOnOutsideClick: true,
        modifier: ''
    }, global.REMODAL_GLOBALS && global.REMODAL_GLOBALS.DEFAULTS);
    /**
     * States of the Remodal
     * @private
     * @const
     * @enum {String}
     */
    var STATES = {
        CLOSING: 'closing',
        CLOSED: 'closed',
        OPENING: 'opening',
        OPENED: 'opened'
    };
    /**
     * Reasons of the state change.
     * @private
     * @const
     * @enum {String}
     */
    var STATE_CHANGE_REASONS = {
        CONFIRMATION: 'confirmation',
        CANCELLATION: 'cancellation'
    };
    /**
     * Is animation supported?
     * @private
     * @const
     * @type {Boolean}
     */
    var IS_ANIMATION = (function () {
        var style = document.createElement('div').style;
        return style.animationName !== undefined ||
            style.WebkitAnimationName !== undefined ||
            style.MozAnimationName !== undefined ||
            style.msAnimationName !== undefined ||
            style.OAnimationName !== undefined;
    })();
    /**
     * Is iOS?
     * @private
     * @const
     * @type {Boolean}
     */
    var IS_IOS = /iPad|iPhone|iPod/.test(navigator.platform);
    /**
     * Current modal
     * @private
     * @type {Remodal}
     */
    var current;
    /**
     * Scrollbar position
     * @private
     * @type {Number}
     */
    var scrollTop;
    /**
     * Returns an animation duration
     * @private
     * @param {jQuery} $elem
     * @returns {Number}
     */
    function getAnimationDuration($elem) {
        if (
            IS_ANIMATION &&
            $elem.css('animation-name') === 'none' &&
            $elem.css('-webkit-animation-name') === 'none' &&
            $elem.css('-moz-animation-name') === 'none' &&
            $elem.css('-o-animation-name') === 'none' &&
            $elem.css('-ms-animation-name') === 'none'
        ) {
            return 0;
        }
        var duration = $elem.css('animation-duration') ||
            $elem.css('-webkit-animation-duration') ||
            $elem.css('-moz-animation-duration') ||
            $elem.css('-o-animation-duration') ||
            $elem.css('-ms-animation-duration') ||
            '0s';
        var delay = $elem.css('animation-delay') ||
            $elem.css('-webkit-animation-delay') ||
            $elem.css('-moz-animation-delay') ||
            $elem.css('-o-animation-delay') ||
            $elem.css('-ms-animation-delay') ||
            '0s';
        var iterationCount = $elem.css('animation-iteration-count') ||
            $elem.css('-webkit-animation-iteration-count') ||
            $elem.css('-moz-animation-iteration-count') ||
            $elem.css('-o-animation-iteration-count') ||
            $elem.css('-ms-animation-iteration-count') ||
            '1';
        var max;
        var len;
        var num;
        var i;
        duration = duration.split(', ');
        delay = delay.split(', ');
        iterationCount = iterationCount.split(', ');
        // The 'duration' size is the same as the 'delay' size
        for (i = 0, len = duration.length, max = Number.NEGATIVE_INFINITY; i < len; i++) {
            num = parseFloat(duration[i]) * parseInt(iterationCount[i], 10) + parseFloat(delay[i]);
            if (num > max) {
                max = num;
            }
        }
        return num;
    }
    /**
     * Returns a scrollbar width
     * @private
     * @returns {Number}
     */
    function getScrollbarWidth() {
        if ($(document.body).height() <= $(window).height()) {
            return 0;
        }
        var outer = document.createElement('div');
        var inner = document.createElement('div');
        var widthNoScroll;
        var widthWithScroll;
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        document.body.appendChild(outer);
        widthNoScroll = outer.offsetWidth;
        // Force scrollbars
        outer.style.overflow = 'scroll';
        // Add inner div
        inner.style.width = '100%';
        outer.appendChild(inner);
        widthWithScroll = inner.offsetWidth;
        // Remove divs
        outer.parentNode.removeChild(outer);
        return widthNoScroll - widthWithScroll;
    }
    /**
     * Locks the screen
     * @private
     */
    function lockScreen() {
        if (IS_IOS) {
            return;
        }
        var $html = $('html');
        var lockedClass = namespacify('is-locked');
        var paddingRight;
        var $body;
        if (!$html.hasClass(lockedClass)) {
            $body = $(document.body);
            // Zepto does not support '-=', '+=' in the `css` method
            paddingRight = parseInt($body.css('padding-right'), 10) + getScrollbarWidth();
            $body.css('padding-right', paddingRight + 'px');
            $html.addClass(lockedClass);
        }
    }
    /**
     * Unlocks the screen
     * @private
     */
    function unlockScreen() {
        if (IS_IOS) {
            return;
        }
        var $html = $('html');
        var lockedClass = namespacify('is-locked');
        var paddingRight;
        var $body;
        if ($html.hasClass(lockedClass)) {
            $body = $(document.body);
            // Zepto does not support '-=', '+=' in the `css` method
            paddingRight = parseInt($body.css('padding-right'), 10) - getScrollbarWidth();
            $body.css('padding-right', paddingRight + 'px');
            $html.removeClass(lockedClass);
        }
    }
    /**
     * Sets a state for an instance
     * @private
     * @param {Remodal} instance
     * @param {STATES} state
     * @param {Boolean} isSilent If true, Remodal does not trigger events
     * @param {String} Reason of a state change.
     */
    function setState(instance, state, isSilent, reason) {
        var newState = namespacify('is', state);
        var allStates = [namespacify('is', STATES.CLOSING),
        namespacify('is', STATES.OPENING),
        namespacify('is', STATES.CLOSED),
        namespacify('is', STATES.OPENED)].join(' ');
        instance.$bg
            .removeClass(allStates)
            .addClass(newState);
        instance.$overlay
            .removeClass(allStates)
            .addClass(newState);
        instance.$wrapper
            .removeClass(allStates)
            .addClass(newState);
        instance.$modal
            .removeClass(allStates)
            .addClass(newState);
        instance.state = state;
        !isSilent && instance.$modal.trigger({
            type: state,
            reason: reason
        }, [{ reason: reason }]);
    }
    /**
     * Synchronizes with the animation
     * @param {Function} doBeforeAnimation
     * @param {Function} doAfterAnimation
     * @param {Remodal} instance
     */
    function syncWithAnimation(doBeforeAnimation, doAfterAnimation, instance) {
        var runningAnimationsCount = 0;
        var handleAnimationStart = function (e) {
            if (e.target !== this) {
                return;
            }
            runningAnimationsCount++;
        };
        var handleAnimationEnd = function (e) {
            if (e.target !== this) {
                return;
            }
            if (--runningAnimationsCount === 0) {
                // Remove event listeners
                $.each(['$bg', '$overlay', '$wrapper', '$modal'], function (index, elemName) {
                    instance[elemName].off(ANIMATIONSTART_EVENTS + ' ' + ANIMATIONEND_EVENTS);
                });
                doAfterAnimation();
            }
        };
        $.each(['$bg', '$overlay', '$wrapper', '$modal'], function (index, elemName) {
            instance[elemName]
                .on(ANIMATIONSTART_EVENTS, handleAnimationStart)
                .on(ANIMATIONEND_EVENTS, handleAnimationEnd);
        });
        doBeforeAnimation();
        // If the animation is not supported by a browser or its duration is 0
        if (
            getAnimationDuration(instance.$bg) === 0 &&
            getAnimationDuration(instance.$overlay) === 0 &&
            getAnimationDuration(instance.$wrapper) === 0 &&
            getAnimationDuration(instance.$modal) === 0
        ) {
            // Remove event listeners
            $.each(['$bg', '$overlay', '$wrapper', '$modal'], function (index, elemName) {
                instance[elemName].off(ANIMATIONSTART_EVENTS + ' ' + ANIMATIONEND_EVENTS);
            });
            doAfterAnimation();
        }
    }
    /**
     * Closes immediately
     * @private
     * @param {Remodal} instance
     */
    function halt(instance) {
        if (instance.state === STATES.CLOSED) {
            return;
        }
        $.each(['$bg', '$overlay', '$wrapper', '$modal'], function (index, elemName) {
            instance[elemName].off(ANIMATIONSTART_EVENTS + ' ' + ANIMATIONEND_EVENTS);
        });
        instance.$bg.removeClass(instance.settings.modifier);
        instance.$overlay.removeClass(instance.settings.modifier).hide();
        instance.$wrapper.hide();
        unlockScreen();
        setState(instance, STATES.CLOSED, true);
    }
    /**
     * Parses a string with options
     * @private
     * @param str
     * @returns {Object}
     */
    function parseOptions(str) {
        var obj = {};
        var arr;
        var len;
        var val;
        var i;
        // Remove spaces before and after delimiters
        str = str.replace(/\s*:\s*/g, ':').replace(/\s*,\s*/g, ',');
        // Parse a string
        arr = str.split(',');
        for (i = 0, len = arr.length; i < len; i++) {
            arr[i] = arr[i].split(':');
            val = arr[i][1];
            // Convert a string value if it is like a boolean
            if (typeof val === 'string' || val instanceof String) {
                val = val === 'true' || (val === 'false' ? false : val);
            }
            // Convert a string value if it is like a number
            if (typeof val === 'string' || val instanceof String) {
                val = !isNaN(val) ? +val : val;
            }
            obj[arr[i][0]] = val;
        }
        return obj;
    }
    /**
     * Generates a string separated by dashes and prefixed with NAMESPACE
     * @private
     * @param {...String}
     * @returns {String}
     */
    function namespacify() {
        var result = NAMESPACE;
        for (var i = 0; i < arguments.length; ++i) {
            result += '-' + arguments[i];
        }
        return result;
    }
    /**
     * Handles the hashchange event
     * @private
     * @listens hashchange
     */
    function handleHashChangeEvent() {
        var id = location.hash.replace('#', '');
        var instance;
        var $elem;
        if (!id) {
            // Check if we have currently opened modal and animation was completed
            if (current && current.state === STATES.OPENED && current.settings.hashTracking) {
                current.close();
            }
        } else {
            // Catch syntax error if your hash is bad
            try {
                $elem = $(
                    '[data-' + PLUGIN_NAME + '-id="' + id + '"]'
                );
            } catch (err) { }
            if ($elem && $elem.length) {
                instance = $[PLUGIN_NAME].lookup[$elem.data(PLUGIN_NAME)];
                if (instance && instance.settings.hashTracking) {
                    instance.open();
                }
            }
        }
    }
    /**
     * Remodal constructor
     * @constructor
     * @param {jQuery} $modal
     * @param {Object} options
     */
    function Remodal($modal, options) {
        var $body = $(document.body);
        var popup = this;
        popup.settings = $.extend({}, DEFAULTS, options);
        popup.index = $[PLUGIN_NAME].lookup.push(popup) - 1;
        popup.state = STATES.CLOSED;
        popup.$overlay = $('.' + namespacify('overlay'));
        if (!popup.$overlay.length) {
            popup.$overlay = $('<div>').addClass(namespacify('overlay') + ' ' + namespacify('is', STATES.CLOSED)).hide();
            $body.append(popup.$overlay);
        }
        popup.$bg = $('.' + namespacify('bg')).addClass(namespacify('is', STATES.CLOSED));
        popup.$modal = $modal
            .addClass(
                NAMESPACE + ' ' +
                namespacify('is-initialized') + ' ' +
                popup.settings.modifier + ' ' +
                namespacify('is', STATES.CLOSED))
            .attr('tabindex', '-1');
        popup.$wrapper = $('<div>')
            .addClass(
                namespacify('wrapper') + ' ' +
                popup.settings.modifier + ' ' +
                namespacify('is', STATES.CLOSED))
            .hide()
            .append(popup.$modal);
        $body.append(popup.$wrapper);
        // Add the event listener for the close button
        popup.$wrapper.on('click.' + NAMESPACE, '[data-' + PLUGIN_NAME + '-action="close"]', function (e) {
            e.preventDefault();
            popup.close();
        });
        // Add the event listener for the cancel button
        popup.$wrapper.on('click.' + NAMESPACE, '[data-' + PLUGIN_NAME + '-action="cancel"]', function (e) {
            e.preventDefault();
            popup.$modal.trigger(STATE_CHANGE_REASONS.CANCELLATION);
            if (popup.settings.closeOnCancel) {
                popup.close(STATE_CHANGE_REASONS.CANCELLATION);
            }
        });
        // Add the event listener for the confirm button
        popup.$wrapper.on('click.' + NAMESPACE, '[data-' + PLUGIN_NAME + '-action="confirm"]', function (e) {
            e.preventDefault();
            popup.$modal.trigger(STATE_CHANGE_REASONS.CONFIRMATION);
            if (popup.settings.closeOnConfirm) {
                popup.close(STATE_CHANGE_REASONS.CONFIRMATION);
            }
        });
        // Add the event listener for the overlay
        popup.$wrapper.on('click.' + NAMESPACE, function (e) {
            var $target = $(e.target);
            if (!$target.hasClass(namespacify('wrapper'))) {
                return;
            }
            if (popup.settings.closeOnOutsideClick) {
                popup.close();
            }
        });
    }
    /**
     * Opens a modal window
     * @public
     */
    Remodal.prototype.open = function () {
        var popup = this;
        var id;
        // Check if the animation was completed
        if (popup.state === STATES.OPENING || popup.state === STATES.CLOSING) {
            return;
        }
        id = popup.$modal.attr('data-' + PLUGIN_NAME + '-id');
        if (id && popup.settings.hashTracking) {
            scrollTop = $(window).scrollTop();
            location.hash = id;
        }
        if (current && current !== popup) {
            halt(current);
        }
        current = popup;
        lockScreen();
        popup.$bg.addClass(popup.settings.modifier);
        popup.$overlay.addClass(popup.settings.modifier).show();
        popup.$wrapper.show().scrollTop(0);
        popup.$modal.focus();
        syncWithAnimation(
            function () {
                setState(popup, STATES.OPENING);
            },
            function () {
                setState(popup, STATES.OPENED);
            },
            popup);
    };
    /**
     * Closes a modal window
     * @public
     * @param {String} reason
     */
    Remodal.prototype.close = function (reason) {
        var popup = this;
        // Check if the animation was completed
        if (popup.state === STATES.OPENING || popup.state === STATES.CLOSING) {
            return;
        }
        if (
            popup.settings.hashTracking &&
            popup.$modal.attr('data-' + PLUGIN_NAME + '-id') === location.hash.substr(1)
        ) {
            location.hash = '';
            $(window).scrollTop(scrollTop);
        }
        syncWithAnimation(
            function () {
                setState(popup, STATES.CLOSING, false, reason);
            },
            function () {
                popup.$bg.removeClass(popup.settings.modifier);
                popup.$overlay.removeClass(popup.settings.modifier).hide();
                popup.$wrapper.hide();
                unlockScreen();
                location.reload();
                setState(popup, STATES.CLOSED, false, reason);
            },
            popup);
    };
    /**
     * Returns a current state of a modal
     * @public
     * @returns {STATES}
     */
    Remodal.prototype.getState = function () {
        return this.state;
    };
    /**
     * Destroys a modal
     * @public
     */
    Remodal.prototype.destroy = function () {
        var lookup = $[PLUGIN_NAME].lookup;
        var instanceCount;
        halt(this);
        this.$wrapper.remove();
        delete lookup[this.index];
        instanceCount = $.grep(lookup, function (instance) {
            return !!instance;
        }).length;
        if (instanceCount === 0) {
            this.$overlay.remove();
            this.$bg.removeClass(
                namespacify('is', STATES.CLOSING) + ' ' +
                namespacify('is', STATES.OPENING) + ' ' +
                namespacify('is', STATES.CLOSED) + ' ' +
                namespacify('is', STATES.OPENED));
        }
    };
    /**
     * Special plugin object for instances
     * @public
     * @type {Object}
     */
    $[PLUGIN_NAME] = {
        lookup: []
    };
    /**
     * Plugin constructor
     * @constructor
     * @param {Object} options
     * @returns {JQuery}
     */
    $.fn[PLUGIN_NAME] = function (opts) {
        var instance;
        var $elem;
        this.each(function (index, elem) {
            $elem = $(elem);
            if ($elem.data(PLUGIN_NAME) == null) {
                instance = new Remodal($elem, opts);
                $elem.data(PLUGIN_NAME, instance.index);
                if (
                    instance.settings.hashTracking &&
                    $elem.attr('data-' + PLUGIN_NAME + '-id') === location.hash.substr(1)
                ) {
                    instance.open();
                }
            } else {
                instance = $[PLUGIN_NAME].lookup[$elem.data(PLUGIN_NAME)];
            }
        });
        return instance;
    };
    $(document).ready(function () {
        // data-popup-target opens a modal window with the special Id
        $(document).on('click', '[data-' + PLUGIN_NAME + '-target]', function (e) {
            e.preventDefault();
            var elem = e.currentTarget;
            var id = elem.getAttribute('data-' + PLUGIN_NAME + '-target');
            var $target = $('[data-' + PLUGIN_NAME + '-id="' + id + '"]');
            $[PLUGIN_NAME].lookup[$target.data(PLUGIN_NAME)].open();
        });
        // Auto initialization of modal windows
        // They should have the 'popup' class attribute
        // Also you can write the `data-popup-options` attribute to pass params into the modal
        $(document).find('.' + NAMESPACE).each(function (i, container) {
            var $container = $(container);
            var options = $container.data(PLUGIN_NAME + '-options');
            if (!options) {
                options = {};
            } else if (typeof options === 'string' || options instanceof String) {
                options = parseOptions(options);
            }
            $container[PLUGIN_NAME](options);
        });
        // Handles the keydown event
        $(document).on('keydown.' + NAMESPACE, function (e) {
            if (current && current.settings.closeOnEscape && current.state === STATES.OPENED && e.keyCode === 27) {
                current.close();
            }
        });
        // Handles the hashchange event
        $(window).on('hashchange.' + NAMESPACE, handleHashChangeEvent);
    });
});
// Ticker
jQuery.fn.nTicker = function (settings) {
    settings = jQuery.extend({
        speed: 100,
        pause: true,
        buttons: false
    }, settings);
    return this.each(function () {
        var j = jQuery;
        var $line = j(this);
        var id = "ER_" + new Date().getTime();
        $line.wrap("<div id=\"" + id + "\"></div>");
        $line.css({
            margin: "0 !important",
            padding: "0 !important"
        });
        var currentSpazio, currentTempo;
        var run = true;
        var initialOffset = $line.offset().left;
        var lineWidth = 1;
        $line.children("li.tick-clones").remove();
        //elimina cloni se ci sono - Serve in caso io aggiorni dinamicamente il contenuto
        $line.addClass("newsticker");
        var $mask = $line.wrap("<div class='mask'></div>");
        var $tickercontainer = $line.parent().wrap("<div class='tickercontainer'></div>");
        var elements = $line.children("li");
        var fill = function () {
            lineWidth = 1;
            $line.append(elements.clone(true).addClass("tick-clones"));
            $line.children("li").each(function (i) {
                lineWidth += j(this, i).outerWidth(true);
                //outherWidth con argomento true ritorna larghezza compresi margini
            });
        }
        var l = $tickercontainer.outerWidth(true);
        while (lineWidth < l) fill();
        $line.width(lineWidth);
        $line.height($line.parent().height());
        function scrollnews(spazio, tempo) {
            $line.animate({ left: '-=' + spazio }, tempo, "linear", function () {
                $line.children("li:first").appendTo($line);
                $line.css("left", 0);
                currentSpazio = $line.children("li:first").outerWidth(true);
                currentTempo = tempo / spazio * currentSpazio;
                if (run)
                    scrollnews(currentSpazio, currentTempo);
            });
        }
        //BOOT
        currentSpazio = $line.children("li:first").outerWidth(true);
        currentTempo = currentSpazio / settings.speed * 1000;
        //x 1000 perch? tempo ? in millisecondi
        scrollnews(currentSpazio, currentTempo);
        function setHover() {
            $line.hover(pause, resume);
        }
        function pause() {
            run = false;
            $line.stop();
        }
        function resume() {
            run = true;
            var offset = $line.offset().left;
            var residualSpace = offset + $line.children("li:first").outerWidth(true) - initialOffset;
            var residualTime = currentTempo / currentSpazio * residualSpace;
            scrollnews(residualSpace, residualTime);
        }
        if (settings.pause) setHover();
        if (settings.buttons) {
            var $buttons = j('<ul class="ticker-controls">' +
                '<li class="prev nthriveticker nthriveticker-left"></li>' +
                '<li class="pause nthriveticker nthriveticker-pause"></li>' +
                '<li class="next nthriveticker nthriveticker-right"></li>' +
                '</ul>');
            $buttons.insertAfter($tickercontainer);
            //DELEGATE IS BETTER!
            j("body").on("click", "#" + id + " .ticker-controls > .pause", function () {
                if (!run) return false;
                j(this).toggleClass("pause nthriveticker-pause play nthriveticker-play");
                $line.unbind('mouseenter mouseleave');
                run = false;
            });
            j("body").on("click", "#" + id + " .ticker-controls > .play", function () {
                if (run) return false;
                j(this).toggleClass("pause nthriveticker-pause play nthriveticker-play");
                run = true;
                setHover();
                var offset = $line.offset().left;
                var residualSpace = offset + $line.children("li:first").outerWidth(true) - initialOffset;
                var residualTime = currentTempo / currentSpazio * residualSpace;
                scrollnews(residualSpace, residualTime);
            });
            var moving = false;
            j("body").on("click", "#" + id + " .ticker-controls > .next", function () {
                if (run) {
                    j("#" + id + " .ticker-controls > .pause").toggleClass("pause nthriveticker-pause play nthriveticker-play");
                    run = false;
                    return;
                }
                if (moving) return false;
                var spazio = $line.children("li:first").outerWidth(true);
                var tempo = spazio / settings.speed * 1000;
                moving = true;
                $line.stop(true, true).animate({ left: '-=' + spazio }, tempo, "linear", function () {
                    $line.children("li:first").appendTo($line);
                    $line.css("left", 0);
                    moving = false;
                });
            });
            j("body").on("click", "#" + id + " .ticker-controls > .prev", function () {
                if (run) {
                    j("#" + id + " .ticker-controls > .pause").toggleClass("pause nthriveticker-pause play nthriveticker-play");
                    run = false;
                    return;
                }
                if (moving) return false;
                var spazio = $line.children("li:last").outerWidth(true);
                $line.css("left", "-" + spazio + "px");
                $line.children("li:last").prependTo($line);
                var tempo = spazio / settings.speed * 1000;
                moving = true;
                $line.stop(true, true).animate({ left: '+=' + spazio }, tempo, "linear", function () {
                    moving = false;
                });
            });
        }
    });
};
// Footer Form
$(document).ready(function () {
    $(':input', 'form')
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .prop('checked', false)
        .prop('selected', false);
});
$("#form-next").click(function () {
    if ($("input[name=Contact_me_Details__c]").valid()) {
        $(this).parent('div').parent('div').parent('div').parent("div.l-double-width").animate({ left: '-100%' }, "fast");
    }
});
$("#back").click(function () {
    $(this).parent('div').parent('div').parent("div.l-double-width").animate({ left: '0' }, "fast");
});
// Form Validation
$(document).ready(function () {
    $("#mktoForm_604").validate({
        messages: {
            FirstName: {
                required: !0,
                minlength: 3
            },
            LastName: {
                required: !0,
                minlength: 3
            },
            Email: {
                required: !0,
                email: !0
            },
            Contact_me_Details__c: {
                required: !0,
                minlength: 5
            }
        },
        messages: {
            FirstName: {
                required: "Please enter your first name",
                minlength: "Your first name must consist of at least 3 characters"
            },
            LastName: {
                required: "Please enter your last name",
                minlength: "Your last name must consist of at least 3 characters"
            },
            Email: "Please enter a valid email address",
            Contact_me_Details__c: {
                required: "Please enter your question",
                minlength: "Your question must consist of at least 5 characters"
            }
        }
    })
});
$(document).ready(function () {
    $("#mktoForm_602").validate({
        messages: {
            FirstName: {
                required: !0,
                minlength: 3
            },
            LastName: {
                required: !0,
                minlength: 3
            },
            Email: {
                required: !0,
                email: !0
            },
            Contact_me_Details__c: {
                required: !0,
                minlength: 5
            },
            Email_Opt_in__c: "required"
        },
        messages: {
            FirstName: {
                required: "Please enter your first name",
                minlength: "Your first name must consist of at least 3 characters"
            },
            LastName: {
                required: "Please enter your last name",
                minlength: "Your last name must consist of at least 3 characters"
            },
            Email: "Please enter a valid email address",
            Contact_me_Details__c: {
                required: "Please enter your question",
                minlength: "Your question must consist of at least 5 characters"
            },
            Email_Opt_in__c: "Please accept our policy"
        }
    })
});
$(document).ready(function () {
    $("#mktoForm_437").validate({
        messages: {
            FirstName: {
                required: !0,
                minlength: 3
            },
            LastName: {
                required: !0,
                minlength: 3
            },
            Email: {
                required: !0,
                email: !0
            },
            Contact_me_Details__c: {
                required: !0,
                minlength: 5
            },
            Email_Opt_in__c: "required"
        },
        messages: {
            FirstName: {
                required: "Please enter your first name",
                minlength: "Your first name must consist of at least 3 characters"
            },
            LastName: {
                required: "Please enter your last name",
                minlength: "Your last name must consist of at least 3 characters"
            },
            Email: "Please enter a valid email address",
            Contact_me_Details__c: {
                required: "Please enter your question",
                minlength: "Your question must consist of at least 5 characters"
            },
            Email_Opt_in__c: "Please accept our policy"
        }
    })
});
$(document).ready(function () {
    $("#mktoForm_437_2").validate({
        messages: {
            FirstName: {
                required: !0,
                minlength: 3
            },
            LastName: {
                required: !0,
                minlength: 3
            },
            Email: {
                required: !0,
                email: !0
            },
            Contact_me_Details__c: {
                required: !0,
                minlength: 5
            },
            Email_Opt_in__c: "required"
        },
        messages: {
            FirstName: {
                required: "Please enter your first name",
                minlength: "Your first name must consist of at least 3 characters"
            },
            LastName: {
                required: "Please enter your last name",
                minlength: "Your last name must consist of at least 3 characters"
            },
            Email: "Please enter a valid email address",
            Contact_me_Details__c: {
                required: "Please enter your question",
                minlength: "Your question must consist of at least 5 characters"
            },
            Email_Opt_in__c: "Please accept our policy"
        }
    })
});
$(document).ready(function () {
    $('form :input').focus(function () {
        $(this).parent().addClass("valid-group").children('label.label-focus').removeClass("label-focus").addClass("label-blur");
    });
    $('form :input').blur(function () {
        $(this).next('label.label-blur').removeClass("label-blur").addClass("label-focus");
    });
    $('#mktFrmSubmit').on('click', function () {
        $(this).parent().parent().parent().addClass("valid-group");
    });
});
// Make same height
$(document).ready(function () {
    $('.smheight').matchHeight();
    $('.smheight .story_content').matchHeight();
    $('.l-list-two-col .box-container').matchHeight();
});
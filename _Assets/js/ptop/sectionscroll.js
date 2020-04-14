window.log = function f() { log.history = log.history || []; log.history.push(arguments); if (this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr); } }; (function (a) { function b() { } for (var c = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","), d; !!(d = c.pop());) { a[d] = a[d] || b; } })
    (function () { try { console.log(); return window.console; } catch (a) { return (window.console = {}); } }()); (function () { var special = jQuery.event.special, uid1 = 'D' + (+new Date()), uid2 = 'D' + (+new Date() + 1); special.scrollstart = { setup: function () { var timer, handler = function (evt) { var _self = this, _args = arguments; if (timer) { clearTimeout(timer) } else { evt.type = 'scrollstart'; $.event.dispatch.apply(_self, _args) } timer = setTimeout(function () { timer = null }, special.scrollstop.latency) }; jQuery(this).bind('scroll', handler).data(uid1, handler) }, teardown: function () { jQuery(this).unbind('scroll', jQuery(this).data(uid1)) } }; special.scrollstop = { latency: 300, setup: function () { var timer, handler = function (evt) { var _self = this, _args = arguments; if (timer) { clearTimeout(timer) } timer = setTimeout(function () { timer = null; evt.type = 'scrollstop'; $.event.dispatch.apply(_self, _args) }, special.scrollstop.latency) }; jQuery(this).bind('scroll', handler).data(uid2, handler) }, teardown: function () { jQuery(this).unbind('scroll', jQuery(this).data(uid2)) } } })(); (function ($) {
        var types = ['DOMMouseScroll', 'mousewheel']; if ($.event.fixHooks) { for (var i = types.length; i;) { $.event.fixHooks[types[--i]] = $.event.mouseHooks; } }
        $.event.special.mousewheel = { setup: function () { if (this.addEventListener) { for (var i = types.length; i;) { this.addEventListener(types[--i], handler, false); } } else { this.onmousewheel = handler; } }, teardown: function () { if (this.removeEventListener) { for (var i = types.length; i;) { this.removeEventListener(types[--i], handler, false); } } else { this.onmousewheel = null; } } }; $.fn.extend({ mousewheel: function (fn) { return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel"); }, unmousewheel: function (fn) { return this.unbind("mousewheel", fn); } }); function handler(event) {
            var orgEvent = event || window.event, args = [].slice.call(arguments, 1), delta = 0, returnValue = true, deltaX = 0, deltaY = 0; event = $.event.fix(orgEvent); event.type = "mousewheel"; if (orgEvent.wheelDelta) { delta = orgEvent.wheelDelta / 120; }
            if (orgEvent.detail) { delta = -orgEvent.detail / 3; }
            deltaY = delta; if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) { deltaY = 0; deltaX = -1 * delta; }
            if (orgEvent.wheelDeltaY !== undefined) { deltaY = orgEvent.wheelDeltaY / 120; }
            if (orgEvent.wheelDeltaX !== undefined) { deltaX = -1 * orgEvent.wheelDeltaX / 120; }
            args.unshift(event, delta, deltaX, deltaY); return ($.event.dispatch || $.event.handle).apply(this, args);
        }
    })(jQuery);; (function ($, window, Math, undefined) {
        'use strict'; var pluginName = 'scrollSections'; var defaults = { attr: 'id', active: 'active-scrollsection', keyboard: true, mousewheel: true, touch: true, scrollbar: true, navigation: true, scrollMax: 1, before: null, after: null, prefix: 'scrollsections', alwaysStartWithFirstSection: false, animateScrollToFirstSection: false, createNavigation: true, speed: 500, exceptions: false }; function ScrollSectionsException(message) { this.name = 'ScrollSectionsException'; this.message = message; }
        var Plugin = function (elements, options) { this.elements = elements; this.options = $.extend({}, defaults, options); this._defaults = defaults; this._name = pluginName; this._$window = $(window); this._$htmlBody = $('html, body'); this._$body = $('body'); this._sections = elements.length; this._$sections = []; this._sectionIdentifiers = []; this._delayFirstScroll = null; this._$previousSection = null; this._$currentSection = null; this._currentStep = 0; this._isFirstSection = true; this._isAnimated = false; this._wheelDelay = null; this._scrollPaused = false; this._$nav = null; this._ltIE9 = false; this.init(); }; Plugin.prototype = {
            createNavigation: function () {
                if (this.options.navigation) {
                    this._$nav = $('<nav>', { id: this.options.prefix + '-navigation' }); for (var i = 0; i < this._sections; i++) { this._$nav.append($('<a>', { id: this.options.prefix + '-menuitem-' + i, 'class': this.options.prefix + '-menuitem', href: '#' + this._sectionIdentifiers[i], html: 'Section ' + i })); }
                    this._$body.append(this._$nav);
                }
                return this;
            }, navigation: function () {
                var self = this; if (this._$nav === null) {
                    if (this.options.createNavigation) {
                        this.createNavigation(); this.options.createNavigation = false; this._$nav._$menuitems = $('a', this._$nav).each(function (index) {
                            var $this = $(this); if (index === self._currentStep) { $this.addClass(self.options.active); }
                            $this.data(self.options.prefix, index);
                        });
                    }
                    else {
                        this._$nav = $('#' + this.options.prefix + '-navigation'); this._$nav._$menuitems = $('a', this._$nav).each(function () {
                            var $this = $(this), sectionIndex = self._sectionIdentifiers.indexOf($this.attr('href').substr(1)); if (sectionIndex === self._currentStep) { $this.addClass(self.options.active); }
                            $this.data(self.options.prefix, sectionIndex);
                        });
                    }
                }
                if (this._$nav != null && this._$nav.length > 0) {
                    this._$nav._$menuitems.click(function (event) {
                        var $this = $(this), sectionIndex = parseInt($this.data(self.options.prefix), 10); event.preventDefault(); self._$nav._$menuitems.removeClass(self.options.active); $this.addClass(self.options.active); if (sectionIndex >= 0) { self.customScrollTo(parseInt($this.data(self.options.prefix), 10)); }
                        else if (self.options.exceptions) { throw new ScrollSectionsException('Section not find for this menu item, make sure the href is the same as the section id'); }
                        return false;
                    });
                }
                return this;
            }, scrollbar: function () {
                var self = this; if (!$.event.special.scrollstop) { if (this.options.exceptions) { throw new ScrollSectionsException('The jQuery special events scrollstop plugin is missing.'); } else { return this; } }
                this._$window.bind('scrollstop', function (event) {
                    var scrollTop = self._$htmlBody.scrollTop() || self._$window.scrollTop(); var diff = self._$htmlBody.outerHeight(); var nextStep; var diffTmp; self._scrollPaused = false; if (scrollTop === 0 && self._currentStep !== 0) { nextStep = 0; } else if ((scrollTop === (self._sections - 1) * self._$window.height()) && self._currentStep !== (self._sections - 1)) { nextStep = self._sections - 1; } else { for (var i = 0; i < self._sections; i++) { diffTmp = Math.abs(scrollTop - self._$sections[i].offset().top); if (!diff || diffTmp <= diff) { diff = diffTmp; nextStep = i; if (diff === 0) { return; } } } }
                    if (nextStep > -1) { self.customScrollTo(nextStep); }
                }); return this;
            }, touch: function () {
                var self = this; this._$body.bind('touchstart', function (event) {
                    var startEvent = event; event.preventDefault(); self._$body.bind('touchmove', function (event) {
                        var diff = { x: startEvent.clientX - event.clientX, y: startEvent.clientY - event.clientY }; var nextStep; event.preventDefault(); if ((diff.y <= -100 || diff.y >= 100) && Math.abs(diff.y) > Math.abs(diff.x)) { nextStep = diff.y < 0 ? self._currentStep - 1 : self._currentStep + 1; self.customScrollTo(nextStep); }
                        return false;
                    }); return false;
                }); return this;
            }, keyboard: function () {
                var self = this; this._$htmlBody.keydown(function (event) {
                    var nextStep; switch (event.which) {
                        case 33: case 36: event.preventDefault(); self.customScrollTo(0); return false; case 34: case 35: event.preventDefault(); self.customScrollTo(self._sections - 1); return false; case 38: event.preventDefault(); nextStep = self._currentStep - 1; if (nextStep >= 0) { self.customScrollTo(nextStep); }
                            return false; case 40: event.preventDefault(); nextStep = self._currentStep + 1; if (nextStep < self._sections) { self.customScrollTo(nextStep); }
                            return false;
                    }
                }); return this;
            }, scrollCallback: function (before) {
                this._isAnimated = before || false; if (before && this.options.before) { this.options.before(this._$previousSection, this._$currentSection); } else if (!before && this.options.after) { this.options.after(this._$currentSection, this._$previousSection); }
                return this;
            }, customScrollTo: function (index, noAnimation) {
                var self = this; var yTo; var speed; if (index != null && index >= 0 && index < this._sections) {
                    this._currentStep = index; this._$previousSection = this._$currentSection; this._$currentSection = this._$sections[index]; yTo = this._$currentSection.offset().top - 54; speed = noAnimation ? 0 : this.options.speed; if (this._$nav) { this._$nav._$menuitems.removeClass(this.options.active); $('a[href="#' + this._sectionIdentifiers[index] + '"]', this._$nav).addClass(this.options.active); }
                    this.scrollCallback(true); $.when(this._$htmlBody.stop(true, false).animate({ scrollTop: yTo }, speed)).done(function () { self.scrollCallback(); });
                }
                return this;
            }, mousewheelScrollTo: function (index) { this.customScrollTo(index); this._wheelDelay = null; this._scrollPaused = true; return this; }, mousewheel: function () {
                var self = this; if (this._ltIE9) {
                    if (this.options.exceptions) { throw new ScrollSectionsException('Cannot bind mousewheel on broken client.'); }
                    else { return this; }
                }
                if (!$.fn.mousewheel) { if (this.options.exceptions) { throw new ScrollSectionsException('The jQuery mousewheel plugin is missing.'); } else { return this; } }
                this._$window.mousewheel(function (event, delta, deltaX, deltaY) {
                    var stepDiff = null; var nextStep = -1; event.preventDefault(); if (!(self._isAnimated && self._scrollPaused)) {
                        deltaY = deltaY >> 0; if (deltaY < 0) {
                            if (deltaY < -self.options.scrollMax) { deltaY = -self.options.scrollMax; }
                            if ((!nextStep || !stepDiff || deltaY < stepDiff) && ((self._currentStep - deltaY) < self._sections)) { stepDiff = deltaY; nextStep = self._currentStep - stepDiff; }
                        }
                        else {
                            if (deltaY > self.options.scrollMax) { deltaY = self.options.scrollMax; }
                            if ((!nextStep || !stepDiff || deltaY > stepDiff) && ((self._currentStep - deltaY) > -1)) { stepDiff = deltaY; nextStep = self._currentStep - stepDiff; }
                        }
                        if (stepDiff && nextStep > -1) {
                            if (self._wheelDelay) { clearTimeout(self._wheelDelay); }
                            if (Math.abs(stepDiff) < self.options.scrollMax) { self._wheelDelay = setTimeout(function () { self.mousewheelScrollTo(nextStep); }, 10); } else { self.mousewheelScrollTo(nextStep); }
                        }
                    }
                    return false;
                }); return this;
            }, init: function () {
                var self = this; if (this._sections > 0) {
                    this.elements.each(function (index) { var $section = $(this); var windowScrollTop = self._$window.scrollTop(); var offset; self._$sections[index] = $section; self._sectionIdentifiers[index] = $section.attr(self.options.attr); if (self.options.alwaysStartWithFirstSection === true && index === 0) { $section.addClass(self.options.active); self._$currentSection = $section; self.customScrollTo(0, !self.options.animateScrollToFirstSection); } else { offset = $section.offset(); offset.bottom = offset.top + $section.height(); if (windowScrollTop >= offset.top && windowScrollTop < offset.bottom) { $section.addClass(self.options.active); self._currentStep = index; self._$currentSection = $section; if (windowScrollTop !== offset.top) { self.customScrollTo(index); } } } }); if ((new RegExp('MSIE ([0-9]{1,}[\\.0-9]{0,})')).exec(window.navigator.userAgent) && (parseFloat(RegExp.$1) <= 8.0)) { this._ltIE9 = true; }
                    for (var o in this.options) { if (this.options[o] === true && typeof this[o] === 'function') { this[o](); } }
                    this._$window.resize(function () { self.customScrollTo(self._currentStep); });
                }
                return this;
            }
        }; $.fn[pluginName] = function (options) {
            if (!$.data(this, 'plugin_' + pluginName)) { $.data(this, 'plugin_' + pluginName, new Plugin(this, options)); }
            return this;
        };
    })(jQuery, window, Math);
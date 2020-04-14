! function (e) {
    "use strict";
    e.fn.nthriveslider = function (t) {
        var i = {
            width: 1380,
            height: 700,
            animtype: "fade",
            animduration: 450,
            animspeed: 4e3,
            automatic: !0,
            showcontrols: !1,
            centercontrols: !0,
            nexttext: ">",
            prevtext: "<",
            showmarkers: !1,
            showbuttons: !1,
            centermarkers: !0,
            centerbuttons: !0,
            keyboardnav: !0,
            hoverpause: !0,
            usecaptions: !0,
            randomstart: !1,
            responsive: !0
        },
            n = e.extend({}, i, t),
            d = this,
            s = d.find("ul.nthriveslider"),
            h = s.children("li"),
            a = null,
            r = null,
            l = null,
            c = null,
            o = null,
            u = null,
            w = null,
            g = null,
            p = null,
            f = null,
            v = null,
            m = {
                slidecount: h.length,
                animating: !1,
                paused: !1,
                currentslide: 1,
                nextslide: 0,
                currentindex: 0,
                nextindex: 0,
                interval: null
            },
            x = {
                width: null,
                height: null,
                ratio: null
            },
            b = {
                fwd: "forward",
                prev: "previous"
            },
            k = function () {
                h.addClass("nthriveslider-slide"), n.responsive ? y() : T(), m.slidecount > 1 ? (n.randomstart && j(), n.showcontrols && S(), n.showmarkers && I(), n.showbuttons && D(), n.keyboardnav && W(), n.hoverpause && n.automatic && z(), "slide" === n.animtype && q()) : n.automatic = !1, n.usecaptions && M(), "slide" !== n.animtype || n.randomstart || (m.currentindex = 1, m.currentslide = 2), s.show(), h.eq(m.currentindex).show(), n.automatic && (m.interval = setInterval(function () {
                    O(b.fwd, !1)
                }, n.animspeed))
            },
            y = function () {
                x.width = d.outerWidth(), x.ratio = x.width / n.width, x.height = n.height * x.ratio, "fade" === n.animtype && (h.css({
                    height: n.height,
                    width: "100%"
                }), h.children("img").css({
                    height: n.height,
                    width: "100%"
                }), s.css({
                    height: n.height,
                    width: "100%"
                }), d.css({
                    height: n.height,
                    "max-width": n.width,
                    position: "relative"
                }), x.width < n.width && (h.css({
                    height: x.height
                }), h.children("img").css({
                    height: x.height
                }), s.css({
                    height: x.height
                }), d.css({
                    height: x.height
                })), e(window).resize(function () {
                    x.width = d.outerWidth(), x.ratio = x.width / n.width, x.height = n.height * x.ratio, h.css({
                        height: x.height
                    }), h.children("img").css({
                        height: x.height
                    }), s.css({
                        height: x.height
                    }), d.css({
                        height: x.height
                    })
                })), "slide" === n.animtype && (h.css({
                    height: n.height,
                    width: n.width
                }), h.children("img").css({
                    height: n.height,
                    width: n.width
                }), s.css({
                    height: n.height,
                    width: n.width * n.slidecount
                }), d.css({
                    height: n.height,
                    "max-width": n.width,
                    position: "relative"
                }), x.width < n.width && (h.css({
                    height: x.height
                }), h.children("img").css({
                    height: x.height
                }), s.css({
                    height: x.height
                }), d.css({
                    height: x.height
                })), e(window).resize(function () {
                    x.width = d.outerWidth(), x.ratio = x.width / n.width, x.height = n.height * x.ratio, h.css({
                        height: x.height,
                        width: x.width
                    }), h.children("img").css({
                        height: x.height,
                        width: x.width
                    }), s.css({
                        height: x.height,
                        width: x.width * n.slidecount
                    }), d.css({
                        height: x.height
                    }), p.css({
                        height: x.height,
                        width: x.width
                    }), C(function () {
                        O(!1, m.currentslide)
                    }, 200, "some unique string")
                }))
            },
            C = function () {
                var e = {};
                return function (t, i, n) {
                    n || (n = "Don't call this twice without a uniqueId"), e[n] && clearTimeout(e[n]), e[n] = setTimeout(t, i)
                }
            }(),
            T = function () {
                h.css({
                    height: n.height,
                    width: n.width
                }), s.css({
                    height: n.height,
                    width: n.width
                }), d.css({
                    height: n.height,
                    width: n.width,
                    position: "relative"
                })
            },
            q = function () {
                f = h.eq(0).clone(), v = h.eq(m.slidecount - 1).clone(), f.attr({
                    "data-clone": "last",
                    "data-slide": 0
                }).appendTo(s).show(), v.attr({
                    "data-clone": "first",
                    "data-slide": 0
                }).prependTo(s).show(), h = s.children("li"), m.slidecount = h.length, p = e('<div class="nthriveslider-wrapper"></div>'), n.responsive && x.width < n.width ? (p.css({
                    width: x.width,
                    height: x.height,
                    overflow: "hidden",
                    position: "relative"
                }), s.css({
                    width: x.width * (m.slidecount + 2),
                    left: -x.width * m.currentslide
                })) : (p.css({
                    width: n.width,
                    height: n.height,
                    overflow: "hidden",
                    position: "relative"
                }), s.css({
                    width: n.width * (m.slidecount + 2),
                    left: -n.width * m.currentslide
                })), h.css({
                    "float": "left",
                    position: "relative",
                    display: "list-item"
                }), p.prependTo(d), s.appendTo(p)
            },
            S = function () {
                if (a = e('<ul class="nthriveslider-controls"></ul>'), r = e('<li class="nthriveslider-next"><a href="#" data-direction="' + b.fwd + '">' + n.nexttext + "</a></li>"), l = e('<li class="nthriveslider-prev"><a href="#" data-direction="' + b.prev + '">' + n.prevtext + "</a></li>"), a.on("click", "a", function (t) {
                    t.preventDefault();
                    var i = e(this).attr("data-direction");
                    m.animating || (i === b.fwd && O(b.fwd, !1), i === b.prev && O(b.prev, !1))
                }), l.appendTo(a), r.appendTo(a), a.appendTo(d), n.centercontrols) {
                    a.addClass("v-centered");
                    var t = (d.height() - r.children("a").outerHeight()) / 2,
                        i = t / n.height * 100,
                        s = i + "%";
                    r.find("a").css("top", s), l.find("a").css("top", s)
                }
            },
            I = function () {
                if (c = e('<ul class="nthriveslider-markers l-inline-list l-clearfix l-align-center"></ul>'), e.each(h, function (t, i) {
                    var d = t + 1,
                        s = t + 1;
                    "slide" === n.animtype && (s = t + 2);
                    var h = e(i).find("div.marker-block").html(),
                        a = e('<li><a href="#">' + h + "</a></li>");
                    d === m.currentslide && a.addClass("active-marker"), a.on("click", "a", function (e) {
                        e.preventDefault(), m.animating || m.currentslide === s || O(!1, s)
                    }), a.appendTo(c), g = e('<nav class="textnav" role="presentation"></nav>'),
                        a.appendTo(c)
                }), c.appendTo(g), g.prependTo(d), o = c.find("li"), n.centermarkers) {
                    c.addClass("h-centered");
                    //var t = (n.width - c.width()) / 2;
                    //c.css("left", t)
                }
            },
            D = function () {
                if (u = e('<ul class="nthriveslider-buttons l-clearfix"></ul>'), e.each(h, function (t, i) {
                    var d = t + 1,
                        s = t + 1;
                    "slide" === n.animtype && (s = t + 2);
                    var h = e(i).find("div.button-block").html(),
                        a = e('<li class="dotnav-item"><a href="#">' + h + "</a></li>");
                    d === m.currentslide && a.addClass("active-button"), a.on("click", "a", function (e) {
                        e.preventDefault(), m.animating || m.currentslide === s || O(!1, s)
                    }), a.appendTo(u), g = e('<nav class="dotnav carousel-dots" role="presentation"></nav>'),
                        a.appendTo(u)
                }), u.appendTo(g), g.appendTo(d), w = u.find("li"), n.centerbuttons) {
                    u.addClass("h-centered");
                    var t = (n.width - u.width()) / 2;
                    u.css("left", t)
                }
            },

            W = function () {
                e(document).keyup(function (e) {
                    m.paused || (clearInterval(m.interval), m.paused = !0), m.animating || (39 === e.keyCode ? (e.preventDefault(), O(b.fwd, !1)) : 37 === e.keyCode && (e.preventDefault(), O(b.prev, !1))), m.paused && n.automatic && (m.interval = setInterval(function () {
                        O(b.fwd)
                    }, n.animspeed), m.paused = !1)
                })
            },
            z = function () {
                d.hover(function () {
                    m.paused || (clearInterval(m.interval), m.paused = !0)
                }, function () {
                    m.paused && (m.interval = setInterval(function () {
                        O(b.fwd, !1)
                    }, n.animspeed), m.paused = !1)
                })
            },
            M = function () {
                e.each(h, function (t, i) {
                    var n = e(i).children("img:first-child").attr("title");
                    n || (n = e(i).children("a").find("img:first-child").attr("title")), n && (n = e('<p class="nthriveslider-caption">' + n + "</p>"), n.appendTo(e(i)))
                })
            },
            j = function () {
                var e = Math.floor(Math.random() * m.slidecount) + 1;
                m.currentslide = e, m.currentindex = e - 1
            },
            H = function (e) {
                e === b.fwd ? h.eq(m.currentindex).next().length ? (m.nextindex = m.currentindex + 1, m.nextslide = m.currentslide + 1) : (m.nextindex = 0, m.nextslide = 1) : h.eq(m.currentindex).prev().length ? (m.nextindex = m.currentindex - 1, m.nextslide = m.currentslide - 1) : (m.nextindex = m.slidecount - 1, m.nextslide = m.slidecount)
            },
            O = function (e, t) {
                if (!m.animating && (m.animating = !0, t ? (m.nextslide = t, m.nextindex = t - 1) : H(e), "fade" === n.animtype && (n.showmarkers && (o.removeClass("active-marker"), o.eq(m.nextindex).addClass("active-marker")), n.showbuttons && (w.removeClass("active-button"), w.eq(m.nextindex).addClass("active-button")), h.eq(m.currentindex).fadeOut(n.animduration), h.eq(m.nextindex).fadeIn(n.animduration, function () {
                    m.animating = !1, m.currentslide = m.nextslide, m.currentindex = m.nextindex
                })), "slide" === n.animtype)) {
                    if (n.showmarkers) {
                        var i = m.nextindex - 1;
                        i === m.slidecount - 2 ? i = 0 : -1 === i && (i = m.slidecount - 3), o.removeClass("active-marker"), o.eq(i).addClass("active-marker")
                    }
                    if (n.showbuttons) {
                        var d = m.nextindex - 1;
                        d === m.slidecount - 2 ? d = 0 : -1 === d && (d = m.slidecount - 3), w.removeClass("active-button"), w.eq(d).addClass("active-button")
                    }
                    m.slidewidth = n.responsive && x.width < n.width ? x.width : n.width, s.animate({
                        left: -m.nextindex * m.slidewidth
                    }, n.animduration, function () {
                        m.currentslide = m.nextslide, m.currentindex = m.nextindex, "last" === h.eq(m.currentindex).attr("data-clone") ? (s.css({
                            left: -m.slidewidth
                        }), m.currentslide = 2, m.currentindex = 1) : "first" === h.eq(m.currentindex).attr("data-clone") && (s.css({
                            left: -m.slidewidth * (m.slidecount - 2)
                        }), m.currentslide = m.slidecount - 1, m.currentindex = m.slidecount - 2), m.animating = !1
                    })
                }
            };
        k()
    }
}(jQuery);

!function(e1) {
    var t1, n, o, i, c, d = '<svg><symbol id="icon-add-bold" viewBox="0 0 1024 1024"><path d="M874.666667 469.333333H554.666667V149.333333c0-23.466667-19.2-42.666667-42.666667-42.666666s-42.666667 19.2-42.666667 42.666666v320H149.333333c-23.466667 0-42.666667 19.2-42.666666 42.666667s19.2 42.666667 42.666666 42.666667h320v320c0 23.466667 19.2 42.666667 42.666667 42.666666s42.666667-19.2 42.666667-42.666666V554.666667h320c23.466667 0 42.666667-19.2 42.666666-42.666667s-19.2-42.666667-42.666666-42.666667z"  ></path></symbol></svg>', s = (s = document.getElementsByTagName("script"))[s.length - 1].getAttribute("data-injectcss"), a = function(e, t) {
        t.parentNode.insertBefore(e, t);
    };
    if (s && !e1.__iconfont__svg__cssinject__) {
        e1.__iconfont__svg__cssinject__ = !0;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
        } catch (e) {
            console && console.log(e);
        }
    }
    function l() {
        c || (c = !0, o());
    }
    function r() {
        try {
            i.documentElement.doScroll("left");
        } catch (e) {
            return void setTimeout(r, 50);
        }
        l();
    }
    t1 = function() {
        var e, t = document.createElement("div");
        t.innerHTML = d, d = null, (t = t.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", t, (e = document.body).firstChild ? a(t, e.firstChild) : e.appendChild(t));
    }, document.addEventListener ? ~[
        "complete",
        "loaded",
        "interactive"
    ].indexOf(document.readyState) ? setTimeout(t1, 0) : (n = function() {
        document.removeEventListener("DOMContentLoaded", n, !1), t1();
    }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (o = t1, i = e1.document, c = !1, r(), i.onreadystatechange = function() {
        "complete" == i.readyState && (i.onreadystatechange = null, l());
    });
}(window);

//# sourceMappingURL=index.2f13ec0e.js.map

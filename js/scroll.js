(function(window,document) {
        var prefix = "", _addEventListener, support;
        if ( window.addEventListener ) {
            _addEventListener = "addEventListener";
        } else {
            _addEventListener = "attachEvent";
            prefix = "on";
        }
        support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
                  document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
                  "DOMMouseScroll"; 
        window.addWheelListener = function( elem, callback, useCapture ) {
            _addWheelListener( elem, support, callback, useCapture );
            if( support == "DOMMouseScroll" ) {
                _addWheelListener( elem, "MozMousePixelScroll", callback, useCapture );
            }
        };
        function _addWheelListener( elem, eventName, callback, useCapture ) {
            elem[ _addEventListener ]( prefix + eventName, support == "wheel" ? callback : function( originalEvent ) {
                !originalEvent && ( originalEvent = window.event );
                var event = {
                    originalEvent: originalEvent,
                    target: originalEvent.target || originalEvent.srcElement,
                    type: "wheel",
                    deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
                    deltaX: 0,
                    deltaY: 0,
                    deltaZ: 0,
                    preventDefault: function() {
                        originalEvent.preventDefault ?
                            originalEvent.preventDefault() :
                            originalEvent.returnValue = false;
                    }
                };
                if ( support == "mousewheel" ) {
                    event.deltaY = - 1/40 * originalEvent.wheelDelta;
                    originalEvent.wheelDeltaX && ( event.deltaX = - 1/40 * originalEvent.wheelDeltaX );
                } else {
                    event.deltaY = originalEvent.deltaY || originalEvent.detail;
                }
                return callback( event );
            }, useCapture || false );
        }
})(window,document);

var events = document.querySelector("#events");
var descs = document.querySelector("#descs");
var event1 = document.querySelector(".event");
var desc1 = document.querySelector(".desc");
var body = document.body;
var n = document.querySelectorAll(".event").length;
// var accept = true;

function scroll(e) {
    // if(!accept) return;
    var delta;
    if(Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        delta = e.deltaX;
    }
    else {
        delta = -e.deltaY;
    }
    event1.style.marginLeft = event1.style.marginLeft || 30;
    desc1.style.marginLeft = desc1.style.marginLeft || 30;
    var val = parseInt(event1.style.marginLeft) - 2*delta;
    var right = val > -(n + 1)*event1.clientWidth + events.clientWidth;
    if(val<30 && right) {
        event1.style.marginLeft = val;
        setTimeout(function(){
            desc1.style.marginLeft = val;
        }, 70);
    }
    e.preventDefault();
}

addWheelListener(body,scroll);
addWheelListener(events,scroll);
addWheelListener(descs,scroll);


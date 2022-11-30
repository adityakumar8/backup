var container = $("#container"),
    info = $("#info");

var j = 0;
var colors = ['rgba(143, 146, 199, 0.49)', 'rgba(199, 143, 186, 0.49)', 'rgba(149, 199, 143, 0.49)', 'rgba(229, 86, 61, 0.49)', 'rgba(212, 229, 61, 0.49)', 'rgba(206, 61, 229, 0.49)', 'rgba(229, 157, 61, 0.49)', 'rgba(61, 165, 229, 0.49)', 'rgba(61, 229, 133, 0.49)', 'rgba(229, 61, 61, 0.49)', 'rgba(116, 61, 229, 0.49', 'rgba(218, 229, 61, 0.49)', 'rgba(21, 43, 157, 0.49)', 'rgba(153, 157, 21, 0.49)', 'rgba(199, 143, 186, 0.49)', 'rgba(149, 199, 143, 0.49)', 'rgba(229, 86, 61, 0.49)', 'rgba(212, 229, 61, 0.49)', 'rgba(206, 61, 229, 0.49)', 'rgba(229, 157, 61, 0.49)', 'rgba(61, 165, 229, 0.49)', 'rgba(61, 229, 133, 0.49)', 'rgba(229, 61, 61, 0.49)', 'rgba(116, 61, 229, 0.49', 'rgba(218, 229, 61, 0.49)', 'rgba(21, 43, 157, 0.49)', 'rgba(153, 157, 21, 0.49)', 'rgba(199, 143, 186, 0.49)', 'rgba(149, 199, 143, 0.49)']

var ary = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'];


//$('#container').dragScroll({   }); 


//Drag scroll is not working in this fiddle but  it is  works fine in my browser

k = 0;
var cursor = 0;
var attachDiv = function (_curr) {
    container.empty();
    var j = 0;
    for (var i = _curr; i < _curr + 8; i++) {

        container.append('<div  class = "blocks blocks' + i + '" style="left:' + (j * 25) + '%; background:' + colors[i] + ';">' + ary[i] + '</div>');
        j++;
    }
};
var hasScrolled = false,
    locked = false,
    ticker = function () {
        if (hasScrolled && !locked) {
            locked = true;
            
            var xz = container.scrollLeft(),
                maxScrollLeft = container.get(0).scrollWidth - container.get(0).clientWidth,
                middle = maxScrollLeft / 2, loaded = false;
            if (xz == 0) {
                cursor = Math.max(0, cursor - 4);
                loaded = true;
                attachDiv(cursor);
            } else if (xz == maxScrollLeft) {
                cursor = Math.min(cursor + 4, ary.length - 8);
                loaded = true;
                attachDiv(cursor);
            }
            
            if(cursor != 0 && cursor != ary.length - 8 && loaded){
                container.scrollLeft(middle);
            }
            
            info.text(cursor);
            locked = false;
        }
        hasScrolled = false;
    }
setInterval(ticker, 250);
container.on('scroll', function () {
    hasScrolled = true;
});

attachDiv(0);
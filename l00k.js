var $background = $('.background');
var $l00k = $background.find('.l00k');

var max = 25;
var Z = 125;

var changePerspective = function (evt, $container, $ele) {
    var parentOffset = $container.offset();
    var relX = evt.pageX - parentOffset.left;
    var relY = evt.pageY - parentOffset.top;

    var X = ((relX / $container.width()) - 0.5) * max;
    var Y = ((relY / $container.height()) - 0.5) * max * -1;

    $ele.css({ 'transform': 'rotateX(' + Y + 'deg) rotateY(' + X + 'deg) translateZ(' + Z + 'px)' });
}

// On mouse move - change perspective!
var l00kPerspective = _.throttle(function (e) {
    changePerspective(e, $background, $l00k);
}, 16);

$background.on('mousemove', l00kPerspective);

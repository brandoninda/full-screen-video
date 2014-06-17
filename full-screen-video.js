jQuery.fn.fullScreenVideo = function() {
	$(document).ready(sizeVideo);
	$(window).resize(sizeVideo);
	var $video = this;
	function sizeVideo() {
		var windowWidth = $(window).width(),
			windowHeight = $(window).height();
        if (windowWidth / windowHeight > 16 / 9) {
            $video.css({
                'height': 'auto',
                'width': windowWidth
            });
        } else {
            $video.css({
                'height': windowHeight,
                'width': 'auto'
            });
        }
	}
	return $video;
}
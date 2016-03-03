function Video(attrs) {
	_.defaults(this, {type: 'video'}, attrs);
}

function Image(attrs) {
	_.defaults(this, {type: 'image'}, attrs);
}

var MediaFactory = (function () {

	var _media = {
		video: Video,
		image: Image,
	}

	return {
		create(type, attrs) {
			return new _media[type](attrs);
		}
	}

}());

var image = MediaFactory.create('image', {width: 1024, height: 768});
var video = MediaFactory.create('video', {width: 1080, height: 720, length: 93}) 

console.log(image);
console.log(video);


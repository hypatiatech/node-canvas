'use strict'
const fs = require('fs')
const path = require('path')
const bindings = fs.existsSync(path.join(__dirname, '../build/Release/canvas.node')) ? require('../build/Release/canvas.node') : {
	CanvasGradient: { prototype: {} },
	Canvas: { prototype: {} },
	ImageData: { prototype: {} },
	Image: { prototype: {} },
	CanvasPattern: { prototype: {} },
	CanvasRenderingContext2dInit: function (DOMMatrix, parseFont) { },
	CanvasPatternInit: function (DOMMatrix) { },
}

module.exports = bindings

bindings.ImageData.prototype.toString = function () {
	return '[object ImageData]'
}

bindings.CanvasGradient.prototype.toString = function () {
	return '[object CanvasGradient]'
}

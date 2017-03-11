'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return 'type' + uniqueStringCounter_++;
};

var uniqueStringCounter_ = Math.random() * 0x80000000 | 0;
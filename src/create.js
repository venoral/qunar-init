'use strict';

let mkdir = require('./mkdir'),
	build = require('./build'),
	path = __dirname + '/../build', //build目录下为项目所需配置文件
	dist = process.cwd() + '/'; //当前目录下

/**
 * [创建生成目录，复制build目录下文件，形成最终目录结构]
 * @return {[type]} [description]
 */
exports.init = () => {
	mkdir.init();
	build.init(path, dist);
}
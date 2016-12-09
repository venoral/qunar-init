'use strict';

let fs = require('fs');

/**
 * [复制build目录下的配置文件]
 * @param  {[type]} path [description]
 * @param  {[type]} dist [description]
 * @return {[type]}      [description]
 */
exports.init = (path, dist) => {
	fs.readdir(path, (err, files) => {
		if (err) {
			throw err;
		}
		files.forEach((file) => {
			let src = path + '/' + file,
				/*build目录下的文件路径*/
				cur = dist + '/' + file,
				/*当前目录下的文件路径*/
				readable, writable;
			fs.stat(src, (err, stats) => {
				if (err) {
					throw err;
				}

				if (stats.isFile()) {
					readable = fs.createReadStream(src);
					writable = fs.createWriteStream(cur);
					readable.pipe(writable);
				}
			});
		});
	})
}
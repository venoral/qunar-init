'use strict';

let fs = require('fs');

/**
 * [生成项目目录]
 * @param  {[type]} name [description]
 * @param  {[type]} msg  [description]
 * @return {[type]}      [description]
 */
let createDir = (name, msg) => {
	fs.exists(name, (exists) => {
		//创建目录
		if (!exists) {
			fs.mkdirSync(name, '0755');
			console.log(msg);
		}
	});
}

/**
 * [生成项目文件]
 * @param  {[type]} name [description]
 * @param  {[type]} msg  [description]
 * @return {[type]}      [description]
 */
let createFile = (name, msg) => {
	fs.exists(name, (exists) => {
		let tmpIndex = `<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<link rel="icon" href="https://raw.githubusercontent.com/venoral/Test/master/imgs/camel32.ico">
	<link rel="stylesheet" href="./styles/usage/index/index.css">
</head>
<body>
	<a href="./html/qunar.html">Hello Qunar!</a>
	<script src="./scripts/index.js"></script>
</body>
</html>`;

		let tmpSCSS = `@charset "utf-8";
$bgColor: #F4FBFC;
html {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	background: $bgColor;
	a {
		text-decoration: none;
		color: #1EA8CB;
		&:hover {
			color: #05454d;
		}
	}
}`;

		let tmpJS = `'use strict';
console.log('Hello Qunar!');`;

		let tmpHTML = `<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Hello Qunar</title>
	<link rel="icon" href="https://raw.githubusercontent.com/venoral/Test/master/imgs/camel32.ico">
	<link rel="stylesheet" href="">
</head>
<body>
	Hello Qunar!
</body>
</html>`;

		if (!exists) {
			let templete;
			if (/index\.html/.test(name)) {
				templete = tmpIndex;
			} else if (/qunar\.html/.test(name)) {
				templete = tmpHTML;
			} else if (/\.js/.test(name)) {
				templete = tmpJS;
			} else if (/\.scss/.test(name)) {
				templete = tmpSCSS;
			}

			fs.writeFileSync(name, templete);
			console.log(msg);
		}
	});
}

let promise = new Promise((resolve, reject) => {
	resolve();
});

exports.init = () => {
	console.log('开始创建项目目录...');
	promise.then(createDir('src', 'src    /* 开发环境 */\n|'))
		.then(createFile('src/index.html', '|--index.html    /* 主页 */\n|'))
		.then(createDir('src/html', '|--html    /* 静态页面模板目录 */\n|'))
		.then(createFile('src/html/qunar.html', '|    |--qunar.html    /* qunar.html */\n|'))
		.then(createDir('src/bgimg', '|--bgimg    /* 背景图目录 */\n|'))
		.then(createDir('src/image', '|--image    /* 前景图目录 */\n|'))
		.then(createDir('src/scripts', '|--scripts    /* 脚本目录 */\n|'))
		.then(createFile('src/scripts/index.js', '|    |--index.js    /* index.js */\n|'))
		.then(createDir('src/styles', '|--styles    /* 样式目录 */\n|'))
		.then(createDir('src/styles/lib', '|    |--lib    /* 基础库 */\n|'))
		.then(createDir('src/styles/usage', '|    |--usage    /* 项目具体实现 */\n|'))
		.then(createDir('src/styles/usage/index', '|    |    |--index    /* index样式组件示例 */\n|'))
		.then(createFile('src/styles/usage/index/index.scss', '|    |    |    |--index.scss    /* index.scss样式*/\n|'))
		.catch((reason) => {
			console.log(reason);
		});
}
#!/usr/bin/env node

'use strict';

let program = require('commander'),
	create = require('../src/create');

program
	.allowUnknownOption()
	.version('1.0.0')
	.option('init', 'Create project start')
	.parse(process.argv);

//接收init参数，开始项目创建
if (program.init) {
	create.init();
}
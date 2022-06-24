import fs from 'fs';
import pugApi from 'pug';
import locals from './src/main/data/index.js';

var config = {
    main: {
        src: "./src/main/index.pug",
        dist: "./README.md",
    }
};

var compileFile = pugApi.compileFile(config.main.src);
var html = compileFile(locals);

fs.writeFile(config.main.dist, html, () => {});
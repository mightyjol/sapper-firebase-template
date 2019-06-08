const fs = require('fs-extra');

fs.remove('./functions/__sapper__').then(() => {
	console.log('copying build folder to functions')
	fs.copySync('./__sapper__', './functions/__sapper__');
});


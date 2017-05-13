const config = require('../configs/config');

// TODO
let sessionUtil = {
    codeToCookie : function (keyE) {
        var chars = [];
        var segments = config.segmentation.split('-');
        for(var i = 1; i<keyE.length+1; i++) {
            chars.push(keyE.slice(i-1,i));
        }
        for(var i = 1; i<chars.length+1; i++)
        {
            if(chars[i] === 0) {
                chars[i].replace(0,segments[0]);
            }
            if(chars[i] === 1) {
                chars[i].replace(1,segments[1]);
            }
            if(chars[i] === 2) {
                chars[i].replace(2,segments[2]);
            }
            if(chars[i] === 3) {
                chars[i].replace(3,segments[3]);

            }
            if(chars[i] === 4) {

            }
            if(chars[i] === 5) {

            }
            if(chars[i] === 6) {

            }
            if(chars[i] === 7) {

            }
            if(chars[i] === 8) {

            }
            if(chars[i] === 9) {

            }
        }
    }



}
// exports
module.exports = markdownUtil;
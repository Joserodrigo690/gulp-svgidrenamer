var path = require('path');
var svgmin = require('gulp-svgmin');

module.exports = function () {
    var f = function (file) {
        var prefix = path.basename(file.relative, path.extname(file.relative));
        
        return {
            plugins: [{
                cleanupIDs: {
                    prefix: prefix,
                    remove: false,
                    minify: true
                }
            }]
        };
    };
    
    return (svgmin(f));
};
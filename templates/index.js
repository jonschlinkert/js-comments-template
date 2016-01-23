/*!
 * js-comments-template <https://github.com/jonschlinkert/js-comments-template>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

module.exports = [
  '<% _.each(file.comments, function(comment) { %>',
    require(__dirname + '/comment.js'),
  '<% }); %>'
].join('\n');

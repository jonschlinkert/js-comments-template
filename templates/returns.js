/*!
 * js-comments-template <https://github.com/jonschlinkert/js-comments-template>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

module.exports = [
  '<% _.each(comment.returns, function(ret) { %>' +
  '* `returns`<%= ret.type ? " **{" + ret.type + "}**" : "" %><%= ret.name ? " `" + ret.name + "`" : "" %><%= ret.description ? ": " : "" %><%= ret.description %>  ',
  '<% }); %>'
].join('\n');

/*!
 * js-comments-template <https://github.com/jonschlinkert/js-comments-template>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

module.exports = [
  // prefix
  '<%= comment.prefix ? (comment.prefix + " ") : "## " %>' +
  '<% if (file.path) { %>' +
  '<%= "[" + comment.title + "](" + file.path + "#L" + (comment.end + 2) + ")" %>' +
  '<% } else { %>' +
  '<%= comment.title %>' +
  '<% } %>',

  // lead
  '<%= comment.lead ? comment.lead : "" %>'
].join('\n');

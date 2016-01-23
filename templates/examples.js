/*!
 * js-comments-template <https://github.com/jonschlinkert/js-comments-template>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

module.exports = [
  '**<%= comment.examples.length > 1 ? "Examples" : "Example" %>**\n',
  '<% _.each(comment.examples, function(example) { %>',
  '<%= example.description || "" %>',
  '<%= example.block %>',
  '<% }); %>'
].join('\n');

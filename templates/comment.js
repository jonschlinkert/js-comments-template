/*!
 * js-comments-template <https://github.com/jonschlinkert/js-comments-template>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

module.exports = [
  // ## title
  '<% if (comment.title) { %>' + include('title') + '<% } %>',

  // Description
  '<%= comment.description %>',

  // **params**
  '<% if (comment.params) { %>' + include('params') + '<% } %>',
  // **returns**
  '<% if (comment.returns) { %>' + include('returns') + '<% } %>',
  // **events**
  '<% if (comment.emits) { %>' + include('emits') + '<% } %>',
  // **examples**
  '<% if (comment.examples.length) { %>' + include('examples') + '<% } %>'
].join('\n');

function include(name) {
  return require(__dirname + '/' + name + '.js');
}

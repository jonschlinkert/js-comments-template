/*!
 * js-comments-template <https://github.com/jonschlinkert/js-comments-template>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

module.exports = [
  '<%= "\\n**Events**" %>',
  '<% _.each(comment.emits, function(event) { %>' +
  '* `emits`:<%= event.name ? (" `" + event.name + "` ") : " " %><%= event.description %>  ',
  '<% }); %>'
].join('\n');

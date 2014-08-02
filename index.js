/*!
 * js-comments-template <https://github.com/jonschlinkert/js-comments-template>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors
 * Licensed under the MIT License (MIT)
 */

module.exports = [
  '<% _.each(files, function(file) { %> <% _.each(file.comments, function(comments) { %>',
  '<% _.each(comments, function(comment) { %>',
  '',
  '',
  '<%= comment.description %>',
  '<% _.each(comment.params, function(param) { %>',
  '* <%= param.name %> **{<%= param.type %>}**<%= param.description ? ": " : \'\' %><%= param.description %> <% }); %> <%= comment.return ? "\n* `return` " : \'\' %><%= comment.return %> <% }); %> <% }); %>',
  '<% }); %>'
].join('\n');
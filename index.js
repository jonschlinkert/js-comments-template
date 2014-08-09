/*!
 * js-comments-template <https://github.com/jonschlinkert/js-comments-template>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors
 * Licensed under the MIT License (MIT)
 */


exports.readme = [
  '<% _.each(files, function(file) { %>' +
  '<% _.each(file.comments, function(comments) { %>' +
  '<% _.each(comments, function(comment) { %>' +
  '',
  '<% if (comment.title) { %>' +
  '<%= comment.title %>',
  '<% } %>',
  '<%= comment.lead %>',
  '<% _.each(comment.params, function(param) { %>',
  '* `<%= param.name %>` **{<%= param.type %>}**<%= param.description ? ": " : "" %><%= param.description %>' +
  '  <% if (comment.properties) { %>' +
  '  <% _.each(comment.properties, function(prop) { %>',
  '  - `<%= prop.name %>` **{<%= prop.type %>}**<%= prop.description ? ": " : "" %><%= prop.description %>' +
  '  <% }); %>' +
  '  <% } %>' +
  '<% }); %>' +
  '<% if (comment.returns && comment.returns.length > 0) { %>' +
  '<% _.each(comment.returns, function(ret) { %>',
  '* returns<%= ret.type ? " **{" + ret.type + "}**" : "" %><%= ret.name ? " `" + ret.name + "`" : "" %><%= ret.description ? ": " : "" %><%= ret.description %>  ' +
  '<% }); %>' +
  '<% } %>' +
  '<%= comment.description %>',
  '<% }); %>' +
  '<% }); %>' +
  '<% }); %>'
].join('\n');


exports.docs = [
  '<% _.each(files, function(file) { %>',
  '## [<%= file.name %>](<%= file.path %>)',
  '<% _.each(file.comments, function(comments) { %>',
  '<% _.each(comments, function(comment) { %>',
  '<%= comment.name ? "### [" + comment.name + "](" + file.path + "#L" + (comment.end + 2) + ")": "" %>',
  '<%= comment.lead %>',
  '<%= comment.description %>',
  '<% _.each(comment.params, function(param) { %>',
  '* `<%= param.name %>`: {<%= param.type %>} <%= param.description %>',
  '<% }); %> <% }); %> <% }); %> <% }); %>'
].join('\n');


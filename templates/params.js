/*!
 * js-comments-template <https://github.com/jonschlinkert/js-comments-template>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

module.exports = [
  '<%= "\\n**Params**" %>',
  '<% _.each(comment.params, function(param) { %>',
  '* <% if (param.name) { %>`<%= param.name %>` <% } %>**{<%= param.type %>}**<%= param.description ? ": " : "" %><%= param.description %>' +

  '  <% if (param.options) { %>',
  '    <% _.each(param.options, function(option) { %>' +
  '    - `<%= option.name %>` **{<%= option.type %>}**<%= option.description ? ": " : "" %><%= option.description %>',
  '    <% }); %>' +
  '  <% } %>' +

  '  <% if (param.properties) { %>',
  '    <% _.each(param.properties, function(prop) { %>' +
  '    - `<%= prop.name %>` **{<%= prop.type %>}**<%= prop.description ? ": " : "" %><%= prop.description %>',
  '  <% }); %>' +
  '  <% } %>' +
  '<% }); %>'
].join('\n');

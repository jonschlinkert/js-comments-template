# js-comments-template [![NPM version](https://img.shields.io/npm/v/js-comments-template.svg?style=flat)](https://www.npmjs.com/package/js-comments-template) [![NPM monthly downloads](https://img.shields.io/npm/dm/js-comments-template.svg?style=flat)](https://npmjs.org/package/js-comments-template)  [![NPM total downloads](https://img.shields.io/npm/dt/js-comments-template.svg?style=flat)](https://npmjs.org/package/js-comments-template)

> Default template used by js-comments and helper-apidocs for generating API docs.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save js-comments-template
```

## Templates

The [comment template](./templates/comment.js) creates a comment section in a markdown document, with any or all of the following sub-sections (sub-sections only render if defined in the comment):

* `heading`: section title/heading, linked to the actual code on GitHub associated with the comment. Heading can be set explicity with a `@name` tag.
* `params`: A list of parameters and descriptions, defined with the `@param` tag.
* `examples`: gfm formatted code blocks, defined in a block comment using gfm syntax.
* `returns`: a return statement, defined with the `@return` tag
* `events`: any events emitted, defined with the `@emits` tag

## Example

**Rendered markdown**

<code>

### [.isRegistered](index.js#L105)

Returns true if a plugin has already been registered on an instance. This is optionally used by plugin implementors to prevent plugins from being called on an instanced more than once.

**Events**

* `emits`: `plugin` with `registered` and the name of the plugin as arguments.

**Params**

* `name` **{String}**: The plugin name.
* `returns` **{Boolean}**: Returns true when a plugin is already registered.

**Example**

```js
var base = new Base();
base.use(function(app) {
  if (app.isRegistered('myPlugin')) {
    return;
  }
  // do stuff
});
```

</code>

## Live examples

Thousands of projects use this template. Here are a few examples:

* [assemble](https://www.npmjs.com/package/assemble): Get the rocks out of your socks! Assemble makes you fast at creating web projects… [more](https://github.com/assemble/assemble) | [homepage](https://github.com/assemble/assemble "Get the rocks out of your socks! Assemble makes you fast at creating web projects. Assemble is used by thousands of projects for rapid prototyping, creating themes, scaffolds, boilerplates, e-books, UI components, API documentation, blogs, building websit")
* [base-cli](https://www.npmjs.com/package/base-cli): Plugin for base-methods that maps built-in methods to CLI args (also supports methods from a… [more](https://github.com/node-base/base-cli) | [homepage](https://github.com/node-base/base-cli "Plugin for base-methods that maps built-in methods to CLI args (also supports methods from a few plugins, like 'base-store', 'base-options' and 'base-data'.")
* [base-config](https://www.npmjs.com/package/base-config): base-methods plugin that adds a `config` method for mapping declarative configuration values to other 'base… [more](https://github.com/node-base/base-config) | [homepage](https://github.com/node-base/base-config "base-methods plugin that adds a `config` method for mapping declarative configuration values to other 'base' methods or custom functions.")
* [base-options](https://www.npmjs.com/package/base-options): Adds a few options methods to base-methods, like `option`, `enable` and `disable`. See the readme… [more](https://github.com/jonschlinkert/base-options) | [homepage](https://github.com/jonschlinkert/base-options "Adds a few options methods to base-methods, like `option`, `enable` and `disable`. See the readme for the full API.")
* [base-pipeline](https://www.npmjs.com/package/base-pipeline): base-methods plugin that adds pipeline and plugin methods for dynamically composing streaming plugin pipelines. | [homepage](https://github.com/node-base/base-pipeline "base-methods plugin that adds pipeline and plugin methods for dynamically composing streaming plugin pipelines.")
* [base-plugins](https://www.npmjs.com/package/base-plugins): Upgrade's plugin support in base applications to allow plugins to be called any time after… [more](https://github.com/node-base/base-plugins) | [homepage](https://github.com/node-base/base-plugins "Upgrade's plugin support in base applications to allow plugins to be called any time after init.")
* [base-store](https://www.npmjs.com/package/base-store): Plugin for getting and persisting config values with your base-methods application. Adds a 'store' object… [more](https://github.com/node-base/base-store) | [homepage](https://github.com/node-base/base-store "Plugin for getting and persisting config values with your base-methods application. Adds a 'store' object that exposes all of the methods from the data-store library. Also now supports sub-stores!")
* [base-tasks](https://www.npmjs.com/package/base-tasks): base-methods plugin that provides a very thin wrapper around [https://github.com/jonschlinkert/composer](https://github.com/jonschlinkert/composer) for adding task methods to… [more](https://github.com/jonschlinkert/base-tasks) | [homepage](https://github.com/jonschlinkert/base-tasks "base-methods plugin that provides a very thin wrapper around <https://github.com/jonschlinkert/composer> for adding task methods to your application.")
* [base](https://www.npmjs.com/package/base): base is the foundation for creating modular, unit testable and highly pluggable node.js applications, starting… [more](https://github.com/node-base/base) | [homepage](https://github.com/node-base/base "base is the foundation for creating modular, unit testable and highly pluggable node.js applications, starting with a handful of common methods, like `set`, `get`, `del` and `use`.")
* [boilerplate](https://www.npmjs.com/package/boilerplate): Tools and conventions for authoring and using declarative configurations for project "boilerplates" that can be… [more](https://github.com/jonschlinkert/boilerplate) | [homepage](https://github.com/jonschlinkert/boilerplate "Tools and conventions for authoring and using declarative configurations for project "boilerplates" that can be consumed by any build system or project scaffolding tool.")
* [generate](https://www.npmjs.com/package/generate): Command line tool and developer framework for scaffolding out new GitHub projects. Generate offers the… [more](https://github.com/generate/generate) | [homepage](https://github.com/generate/generate "Command line tool and developer framework for scaffolding out new GitHub projects. Generate offers the robustness and configurability of Yeoman, the expressiveness and simplicity of Slush, and more powerful flow control and composability than either.")
* [scaffold](https://www.npmjs.com/package/scaffold): Conventions and API for creating declarative configuration objects for project scaffolds - similar in format… [more](https://github.com/jonschlinkert/scaffold) | [homepage](https://github.com/jonschlinkert/scaffold "Conventions and API for creating declarative configuration objects for project scaffolds - similar in format to a grunt task, but more portable, generic and can be used by any build system or generator - even gulp.")

## About

### Related projects

* [esprima-extract-comments](https://www.npmjs.com/package/esprima-extract-comments): Extract code comments from string or from a glob of files using esprima. | [homepage](https://github.com/jonschlinkert/esprima-extract-comments "Extract code comments from string or from a glob of files using esprima.")
* [extract-comments](https://www.npmjs.com/package/extract-comments): Uses esprima to extract line and block comments from a string of JavaScript. Also optionally… [more](https://github.com/jonschlinkert/extract-comments) | [homepage](https://github.com/jonschlinkert/extract-comments "Uses esprima to extract line and block comments from a string of JavaScript. Also optionally parses code context (the next line of code after a comment).")
* [gfm-code-blocks](https://www.npmjs.com/package/gfm-code-blocks): Extract gfm (GitHub Flavored Markdown) fenced code blocks from a string. | [homepage](https://github.com/jonschlinkert/gfm-code-blocks "Extract gfm (GitHub Flavored Markdown) fenced code blocks from a string.")
* [helper-apidocs](https://www.npmjs.com/package/helper-apidocs): Template helper for automatically generating API docs from code comments. Should work with any template… [more](https://github.com/jonschlinkert/helper-apidocs) | [homepage](https://github.com/jonschlinkert/helper-apidocs "Template helper for automatically generating API docs from code comments. Should work with any template engine.")
* [js-comments](https://www.npmjs.com/package/js-comments): Parse JavaScript code comments and generate API documentation. | [homepage](https://github.com/jonschlinkert/js-comments "Parse JavaScript code comments and generate API documentation.")
* [parse-code-context](https://www.npmjs.com/package/parse-code-context): Parse code context in a single line of javascript, for functions, variable declarations, methods, prototype… [more](https://github.com/jonschlinkert/parse-code-context) | [homepage](https://github.com/jonschlinkert/parse-code-context "Parse code context in a single line of javascript, for functions, variable declarations, methods, prototype properties, prototype methods etc.")
* [parse-comments](https://www.npmjs.com/package/parse-comments): Parse code comments from JavaScript or any language that uses the same format. | [homepage](https://github.com/jonschlinkert/parse-comments "Parse code comments from JavaScript or any language that uses the same format.")
* [verb](https://www.npmjs.com/package/verb): Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used… [more](https://github.com/verbose/verb) | [homepage](https://github.com/verbose/verb "Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used on hundreds of projects of all sizes to generate everything from API docs to readmes.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

| **Commits** | **Contributor**<br/> | 
| --- | --- |
| 30 | [jonschlinkert](https://github.com/jonschlinkert) |
| 1 | [tunnckoCore](https://github.com/tunnckoCore) |

### Building docs

_(This document was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

To generate the readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-generate-readme && verb
```

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/js-comments-template/blob/master/LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.2.0, on December 13, 2016._
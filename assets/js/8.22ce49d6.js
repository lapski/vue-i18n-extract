(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{208:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"how-to-use-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-it"}},[t._v("#")]),t._v(" How to use it")]),t._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting started")]),t._v(" "),a("p",[t._v("Install "),a("code",[t._v("vue-i18n-extract")]),t._v(" using "),a("a",{attrs:{href:"https://yarnpkg.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yarn"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" --dev vue-i18n-extract\n")])])]),a("p",[t._v("Or "),a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NPM"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev vue-i18n-extract\n")])])]),a("blockquote",[a("p",[t._v("Note: "),a("code",[t._v("vue-i18n-extract")]),t._v(" documentation uses "),a("code",[t._v("yarn")]),t._v(" commands, but "),a("code",[t._v("npm")]),t._v(" will also work. You can compare "),a("code",[t._v("yarn")]),t._v(" and "),a("code",[t._v("npm")]),t._v(" commands in the "),a("code",[t._v("yarn")]),t._v(" docs, "),a("a",{attrs:{href:"https://yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[t._v("Add the following section to your "),a("code",[t._v("package.json")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vue-i18n-extract"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-i18n-extract"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Finally, run:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run vue-i18n-extract report -v "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/your/vue-files/**/*.?(js|vue)'")]),t._v(" -l "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/your/language-files/*.?(js|json)'")]),t._v("\n")])])]),a("p",[t._v("or")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" vue-i18n-extract report -v "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/your/vue-files/**/*.?(js|vue)'")]),t._v(" -l "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/your/language-files/*.?(js|json)'")]),t._v("\n")])])]),a("p",[t._v("This will print out a table of missing keys in your language files, as well as unused keys in your language files.")]),t._v(" "),a("h2",{attrs:{id:"running-from-command-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-from-command-line"}},[t._v("#")]),t._v(" Running from command line")]),t._v(" "),a("p",[t._v("You can run "),a("code",[t._v("vue-i18n-extract")]),t._v(" directly from the CLI without having to install anything using npx")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("npx vue-i18n-extract report -v "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/your/vue-files/**/*.?(js|vue)'")]),t._v(" -l "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/your/language-files/*.?(js|json)'")]),t._v("\n")])])]),a("p",[t._v("If you want to install it install it globally")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --global vue-i18n-extract\n")])])]),a("p",[t._v("or")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vue-i18n-extract\n")])])]),a("p",[t._v("Then from anywhere you can now run:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("vue-i18n-extract report -v "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/your/vue-files/**/*.?(js|vue)'")]),t._v(" -l "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/your/language-files/*.?(js|json)'")]),t._v("\n")])])]),a("h2",{attrs:{id:"usage-in-nodejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-in-nodejs"}},[t._v("#")]),t._v(" Usage in NodeJS")]),t._v(" "),a("p",[t._v("Make sure you have "),a("code",[t._v("vue-i18n-extract")]),t._v(" installed locally and then just import the library and uses the API:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" VueI18NExtract "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-i18n-extract'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" report "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" VueI18NExtract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createI18NReport")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/vue-files/**/*.?(js|vue)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/language-files/*.?(js|json)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
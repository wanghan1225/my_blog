(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{471:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"为什么使用模块化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用模块化"}},[s._v("#")]),s._v(" 为什么使用模块化？")]),s._v(" "),t("p",[s._v("模块化是指将一个复杂的系统分解为多个模块以方便编码。")]),s._v(" "),t("p",[s._v("在之前的开发模块中，开发网页要通过"),t("strong",[s._v("命令空间")]),s._v("的方式来组织代码，比如著名的jQuery库将它所有的API都挂到了window.$下，这样会存在一些问题：")]),s._v(" "),t("ul",[t("li",[s._v("命令空间冲突，两个库可能会使用同一个名称，例如Zepto")]),s._v(" "),t("li",[s._v("无法合理地管理项目的依赖和版本")]),s._v(" "),t("li",[s._v("无法方便地控制依赖的加载顺序")])]),s._v(" "),t("p",[s._v("一旦项目过大，这种方式会变得难以维护，所以后面模块化的思想就诞生了。")]),s._v(" "),t("h2",{attrs:{id:"_1-commonjs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-commonjs"}},[s._v("#")]),s._v(" 1. commonjs")]),s._v(" "),t("ul",[t("li",[s._v("动态引入，执行时引入")]),s._v(" "),t("li",[s._v("在运行后才可以得知模块导出内容，编译阶段无法做静态分析")]),s._v(" "),t("li",[s._v("输出的是值的拷贝")])]),s._v(" "),t("h3",{attrs:{id:"commonjs原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs原理"}},[s._v("#")]),s._v(" commonjs原理")]),s._v(" "),t("p",[s._v("a.js：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("b.js：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" fs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("req")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("targetPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" absPath "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" targetPath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" content "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("readFileSync")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("absPath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" module "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("exports")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" fn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exports'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'module'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'require'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__dirname'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__filename'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" content "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\r\\n return module.exports;'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("call")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" req"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" __dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" __filename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("req")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./a.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打印a")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"_2-es-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-es-module"}},[s._v("#")]),s._v(" 2. es module")]),s._v(" "),t("ul",[t("li",[s._v("静态引入，编译时引入，")]),s._v(" "),t("li",[s._v("只能作为模块顶层的语句出现，不能出现在function里面或者是if里面")]),s._v(" "),t("li",[s._v("import的模块名只能是字符串常量")]),s._v(" "),t("li",[s._v("不管import的语句出现的位置在哪里，在模块初始化的时候所有的import都必须已经导入完成")]),s._v(" "),t("li",[s._v("输出的是值的引用")])]),s._v(" "),t("h2",{attrs:{id:"commonjs和es-module使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs和es-module使用场景"}},[s._v("#")]),s._v(" commonjs和es module使用场景")]),s._v(" "),t("ul",[t("li",[s._v("浏览器端代码使用es2015 module，模块化使用灵活，且可充分利用tree shaking减少代码体积")]),s._v(" "),t("li",[s._v("服务端node适合动态引入，一般不支持tree-shaking和es module,同时也并不需要考虑代码体积，所以使用commonjs模块规范，同时也可以拥有更好的debug支持，提高开发效率。")])]),s._v(" "),t("blockquote",[t("p",[s._v("tree-shaking：")]),s._v(" "),t("ul",[t("li",[s._v("tree-shaking可以利用ES2015(es6)模块语法静态分析的特性，删除没有使用的代码，对代码体积进行优化")]),s._v(" "),t("li",[s._v("webpack tree-shaking开启条件：")]),s._v(" "),t("li",[s._v("使用es2015模块语法(import和export), require不行")]),s._v(" "),t("li",[s._v("配合JS代码压缩插件插件，如UglifyJSPlugin,TerserPlugin")]),s._v(" "),t("li",[s._v("去除babel-loader模块转换插件，不让babel-loader进行模块转换，以保留export和import关键字，然后让webpack来转换")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
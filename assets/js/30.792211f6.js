(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{445:function(v,_,a){"use strict";a.r(_);var t=a(1),r=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"为什么要学习函数式编程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要学习函数式编程"}},[v._v("#")]),v._v(" 为什么要学习函数式编程？")]),v._v(" "),_("ul",[_("li",[v._v("首先，开发社区和各大软件公司都渐渐认识到函数式编程给其业务应用带来的好处。如今，大多数主流编程语言（如Scala、Java 8、 F#、Python和JavaScript等）等提供了原生的或基于API的函数式支持。")]),v._v(" "),_("li",[v._v("其次，在JavaScript的上下文中，函数式思想可以塑造非常优秀的语言特性，写出干净的、模块化的、可测试性、简洁的代码，提高开发效率。对于JavaScript为什么用函数式写法更加高效，一方面是由于对JavaScript语言的整体理解偏差，另一方面是JavaScript缺乏一些能够妥当地管理状态的原生结构，所以把管理状态的职责交给了开发人员（这也是程序中产生bug的原因之一）。在脚本代码规模较小时，这个问题还不明显，但随着代码量的不断增长，就会变得难以控制，而函数式编程，会在某种程度上，让你不受此问题的影响。")]),v._v(" "),_("li",[v._v("最后，通过使用一整套基于纯函数式的已被科学证明的技术与实践，即使复杂性日益提高，你也可以编写出易于推理和理解的代码。编写函数式的JavaScript，不仅能够提高整个应用程序的质量，也能够更好地了解并精通JavaScript语言本身。")])]),v._v(" "),_("h2",{attrs:{id:"函数式编程是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程是什么"}},[v._v("#")]),v._v(" 函数式编程是什么？")]),v._v(" "),_("ul",[_("li",[v._v("简单来说，函数式编程（FP）是一种强调以函数使用为主的软件开发风格。")]),v._v(" "),_("li",[v._v("函数式编程的目标是使用函数来"),_("strong",[v._v("抽象作用在数据之上的控制流与操作")]),v._v("，从而在系统中"),_("strong",[v._v("消除副作用")]),v._v("并"),_("strong",[v._v("减少对状态的改变")]),v._v("。")])]),v._v(" "),_("blockquote",[_("p",[v._v("函数式编程不是一种具体的工具，而是一种编写代码的方式。因此，你既可以用它来编写客户端（基于浏览器的）程序，也可以用它来编写服务器端的应用程序（如Node.js）。")])]),v._v(" "),_("h2",{attrs:{id:"函数式编程的好处"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程的好处"}},[v._v("#")]),v._v(" 函数式编程的好处")]),v._v(" "),_("ul",[_("li",[v._v("可以抛弃this（this的缺点：this提供了超出当前作用域的数据访问能力，有副作用，而且也不方便进行类型推断）")]),v._v(" "),_("li",[v._v("tree shaking友好")]),v._v(" "),_("li",[v._v("提高可测试性、方便并行处理")]),v._v(" "),_("li",[v._v("可缓存")])]),v._v(" "),_("h2",{attrs:{id:"函数式编程的javascript"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程的javascript"}},[v._v("#")]),v._v(" 函数式编程的Javascript")]),v._v(" "),_("ul",[_("li",[v._v("函数是一等公民：JavaScript设计之初，借鉴了Scheme语言，将函数提升到"),_("code",[v._v("一等公民")]),v._v("的地位，也就意味着函数可以作为像它的数据类型一样赋值给变量、作为函数参数和函数的返回值。")]),v._v(" "),_("li",[v._v("高阶函数：函数参数为参数或者返回值为参数的函数。")]),v._v(" "),_("li",[v._v("闭包：函数与函数声明的的上下文绑定在一起的数据结构叫做闭包，也可以说是围绕函数定义的"),_("strong",[v._v("静态作用域")]),v._v("。")])]),v._v(" "),_("h2",{attrs:{id:"函数式编程基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程基础"}},[v._v("#")]),v._v(" 函数式编程基础")]),v._v(" "),_("h3",{attrs:{id:"纯函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#纯函数"}},[v._v("#")]),v._v(" 纯函数")]),v._v(" "),_("ul",[_("li",[v._v("概念\n"),_("ul",[_("li",[v._v("相同的输入永远会得到相同的输出")])])]),v._v(" "),_("li",[v._v("好处\n"),_("ul",[_("li",[v._v("可缓存：因为纯函数对相同的输入始终有相同的结果，所以可以把纯函数的结果缓存起来")]),v._v(" "),_("li",[v._v("可测试：纯函数让测试更方便")]),v._v(" "),_("li",[v._v("并行处理")]),v._v(" "),_("li",[v._v("在多线程环境下并行操作共享的内存数据很可能会出现意外情况，而纯函数不需要访问共享的内存数据，所以在并行环境下可以任意运行纯函数 (Web Worker)")])])]),v._v(" "),_("li",[v._v("副作用\n"),_("ul",[_("li",[v._v("没有任何可观察的副作用")]),v._v(" "),_("li",[v._v("副作用会让一个函数变的不纯，如果函数依赖于外部的状态就无法保证输出相同，就会带来副作用")])])])]),v._v(" "),_("h3",{attrs:{id:"柯里化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#柯里化"}},[v._v("#")]),v._v(" 柯里化")]),v._v(" "),_("ul",[_("li",[v._v("当一个函数有多个参数的时候先传递一部分参数调用它（这部分参数以后永远不变）")]),v._v(" "),_("li",[v._v("然后返回一个新的函数接收剩余的参数，返回结果")])]),v._v(" "),_("h3",{attrs:{id:"函数组合"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#函数组合"}},[v._v("#")]),v._v(" 函数组合")]),v._v(" "),_("ul",[_("li",[v._v("纯函数和柯里化很容易写出洋葱代码h(g(f(x)))\n"),_("ul",[_("li",[v._v("获取数组的最后一个元素再转化成大写字母 .toUpper(.first(_.reverse(array)))")])])]),v._v(" "),_("li",[v._v("函数组合可以让我们把细粒度的函数重新组合生成一个新的函数\n"),_("ul",[_("li",[v._v("默认从右往左")])])]),v._v(" "),_("li",[v._v("管道\n"),_("ul",[_("li",[v._v("函数就像是数据的管道，函数组合就是把这些管道连接起来，让数据穿过多个管道形成最终结果")])])]),v._v(" "),_("li",[v._v("Point Free\n"),_("ul",[_("li",[v._v("不需要指明处理的数据")]),v._v(" "),_("li",[v._v("只需要合成运算过程")]),v._v(" "),_("li",[v._v("需要定义一些辅助的基本运算函数")])])])]),v._v(" "),_("h3",{attrs:{id:"functor-函子"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#functor-函子"}},[v._v("#")]),v._v(" Functor(函子)")]),v._v(" "),_("ul",[_("li",[v._v("容器：包含值和值的变形关系(这个变形关系就是函数)")]),v._v(" "),_("li",[v._v("函子：是一个特殊的容器，通过一个普通的对象来实现，该对象具有 map 方法，map 方法可以运行一个函数对值进行处理(变形关系)")])])])}),[],!1,null,null,null);_.default=r.exports}}]);
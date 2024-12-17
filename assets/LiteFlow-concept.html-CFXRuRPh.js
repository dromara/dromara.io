import{_ as p}from"./LiteFlow-concept-1-BEQbtX0e.js";import{_ as e,c as o,a as r,o as n}from"./app-BmgeuuSW.js";const i={};function l(s,t){return n(),o("div",null,t[0]||(t[0]=[r('<p>官网：https://liteflow.cc/</p><p>Gitee：https://gitee.com/dromara/liteFlow</p><p>Github：https://github.com/dromara/liteflow</p><p>LiteFlow 一个现代化的开源规则引擎框架，以下文中简称 LF。</p><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>时常在社区里看到有的小伙伴在那提问：</p><p>LF 在一个流程中如何暂停，等待操作员完成后，进行下一步该怎么做？</p><p>LF 流程失败后，下一次能否继续上次的执行？</p><p>LF 流程适不适合某个我的业务？</p><p>LF 流程如何定时执行我的某个流程？</p><p>还有的同学表示即便全部看完文档，也不知道 LF 该用在何种业务场景。能够带来什么好处。</p><p>究其原因是错误理解了流程的概念和不知道规则引擎的概念。</p><h2 id="流程" tabindex="-1"><a class="header-anchor" href="#流程"><span>流程</span></a></h2><p>我们先说流程。</p><p>LiteFlow 定位是一个规则引擎，而不是流程引擎。它并不完成流程所要做的事，其实压根 LF 和流程一点关系也没有。</p><p>那什么是流程呢，标准的定义是，流程由<strong>流程定义</strong>，<strong>节点要做的事</strong>和<strong>角色</strong>组成。每一个角色做一件事，根据定义的流程定义串起来就叫流程。最典型的例子就是审批流：采购员提交了一张采购申请，部门领导审核，审核通过则到了财务这里，财务专员根据预算进行审核，审核通过到了总监这里，总监审核通过，再到 CEO 这里签字批准。整个采购单状态变成待采购。然后进行采购流程。</p><p>以上就是标准的一个流程。3 大要素，<strong>流程定义</strong>，<strong>事</strong>和<strong>角色</strong>一个都不能少。通常在实际落地过程中，流程引擎负责流程的流转和角色的分派。开发人员只需要定义流程，和开发每个角色需要做的逻辑即可。</p><p>流程引擎重点强调 2 点：</p><p><strong>流程的定义，下一步是什么，整体的流向，有多少分支。</strong></p><p><strong>角色的分派，即下一步该由谁完成</strong>。</p><p>大部分流程引擎为了灵活性，也提供了流程定义的热更新以及添加角色，修改流程节点更改绑定角色的功能。</p><p><strong>虽然 LF 从 EL 规则上来看，似乎也是一个个小模块的流转，但是 LF 并不涉及角色分派这件事。</strong></p><h2 id="规则" tabindex="-1"><a class="header-anchor" href="#规则"><span>规则</span></a></h2><p>我们再来看规则引擎的概念。</p><p>规则引擎主要强调一件事，把业务中最主要的决策逻辑从程序中抽离出来，用预定义的 DSL 来实现。并且可以实时改变这些最主要的决策逻辑。</p><p>说的再白话点，就是决定逻辑走向的最关键的决策逻辑，不是在代码中的，可以放在外面的任意地方(文件里，数据库里，其他存储，远程获取）。并且这些决策逻辑并不是用你应用的代码语义来实现的。规则引擎提供一套语言，来书写这些决策逻辑。规则引擎也应该提供热更新这些决策代码的功能。</p><p>可以看出，规则引擎根本不涉及角色的概念，它更多的适用于一个相对比较复杂的逻辑块。把最核心的部分抽出来用规则引擎定义。</p><p>但是整个逻辑块基本要做的还是一件事情。只是部分抽出来而已。</p><p>标准的规则引擎处理的例子：</p><p>如果有人 v 我 50 块，我就去家门口的 KFC 吃一顿</p><p>如果有人 v 我 200 块，我就坐地铁去港式餐厅吃一顿</p><p>如果有人 v 我 500 块，我就打个车，去吃顿日式烤肉</p><p>如果有人 v 我 2000 块，我就去买身衣服，去吃顿惠林顿牛排，再整瓶酒。</p><p>如果有人 v 我 100w，赶紧抽自己一巴掌，看自己醒了没。</p><p>有同学看到这，可能会说，那我搞个文件，存 groovy 代码，我应用每次执行到关键决策的时候，去读取这个文件里的 groovy 代码，然后解析执行。这不就是规则引擎吗，我要改变决策的时候，每次改那个文件里的 groovy 代码就行了。</p><p>还真是这样！这就是规则引擎！</p><p>简单来说，规则引擎就强调 3 个点：</p><p><strong>决策代码不在你的应用程序里</strong></p><p><strong>拥有独特的 DSL 语义书写</strong></p><p><strong>实时更新，不用改变应用程序</strong></p><p>所以，一些 DSL 项目也被称作为规则引擎，如 Aviator，QLExpress。这些框架提供了热更的接口，稍作包装，就可以开发出一套最基本的规则引擎。</p><p>但是我更愿意把这些项目归类为<strong>表达式引擎</strong>，业界还有著名的 SpEL(spring 的 EL)，springframwork expression language，其实从全程就可以看出，官方定义了就是<strong>表达式语言</strong>。</p><p><strong>LF 满足决策代码可以不写在应用程序里，也拥有独特的 DSL，也支持实时更新。但是 LF 怎么还拥有流转的功能？LF 看起来怎么有点四不像啊？</strong></p><h2 id="那-lf-是什么呢" tabindex="-1"><a class="header-anchor" href="#那-lf-是什么呢"><span>那 LF 是什么呢</span></a></h2><p>LF 也是作用于一个大的逻辑块的，和角色没关系，满足规则引擎的需要的 3 个关键点。从这点来说，LF 是规则引擎。</p><p>LiteFlow 中的脚本节点已经满足了规则引擎的全部的定义了。那么 LF 只做脚本节点就可以了。可以热更，拥有独特的 DSL，可以保存在任意地方。</p><p>但是 LF 也可以流转，从一个节点流转到另外一个节点，但是这里的节点是一个个小的拆分的逻辑块。其实这是 LF 独特的地方，这部分并不是标准规则引擎定义所必须的。我称之为：编排。</p><p>编排如何理解呢，说的专业点，这就是<strong>逻辑关系反转</strong>，看到这里，有些同学可能又开始看不懂了。你丫的怎么还自己造词呢 。</p><p>且听我慢慢道来。</p><p>spring 的出现解决了依赖反转，我们不用 spring 的时候，对象的装载是自己 new 的，spring 出现后，只需要在 xml 里声明后，各个代码块都可以注入了。就不用自己 new 了。这就是依赖反转。相信这个大家学习八股时已经背了无数遍了。</p><p>那么逻辑关系的进行，我们大部分代码还是 A 类调用 B 类的方法，B 类调用 C 类的方法。这就是逻辑关系的绑死。如果 A，B，C 三个类在代码层面互不相干。但是我在 xml 里去规定，这三个的进行顺序。这就是<strong>逻辑关系反转</strong>。</p><p>逻辑关系反转有什么好处呢？</p><p>逻辑关系反转后，好处很多，首先每个类不再强依赖，所有的代码都讲究松耦合理论。那么逻辑关系反转后，就完美实现了松耦合。并且 LF 规定了每个类的声明方式，就显得所有的逻辑类都长的差不多。更加统一。</p><p>其次，逻辑关系反转后，你只需要看 xml 定义就可以大致理解这个大的逻辑块都干了什么事。非常直观。</p><p>再次，逻辑关系都可以热更，那么这是一件多么优雅的事情啊。</p><p>那么做逻辑关系反转的引擎我称之为：<strong>编排引擎</strong>。</p><p>所以，LiteFlow 是<strong>规则引擎</strong>+<strong>编排引擎</strong>的结合体。</p><p><strong>它既可以热更新最关键的决策逻辑，又可以热更新逻辑关系的组成。</strong></p><p><strong>所以 LiteFlow 做的是更现代化的规则引擎，它在做好规则引擎的基础上，超越了原本规则引擎所规定的范畴。</strong></p><h2 id="如何用好-lf" tabindex="-1"><a class="header-anchor" href="#如何用好-lf"><span>如何用好 LF</span></a></h2><p>其实如果对 LF 理解够深刻，它几乎是一个应用最核心的驱动器。妥妥神器，无论重构，要灵活，要解耦，它都不在话下。</p><p>如果对 LF 理解不够，那你可能感觉 LF 没什么用。也不知道该怎么用。</p><p>所以这就是我一开头提到的。理解流程和规则逻辑流的概念很重要。</p><p>LiteFlow 提供的脚本多达 7 种，这些脚本可以充分书写你的关键决策逻辑。并且 LF 打通了所有脚本和 Java 的互通，用脚本写不了的。也可以调用 java 方法来完成。</p><p>LiteFlow 提供的独特 EL 适用于做逻辑反转，让你的巨大复杂的逻辑变成一个个小的积木块，通过 DSL 来进行组搭，形成你业务的逻辑流。积木块可以是你的 java 组件，也可以是脚本写的决策逻辑。</p><p><strong>所以一般项目推荐的做法，就是首先解耦你的复杂逻辑，按照业务边界拆成一个个小的组件，然后把最经常变动的决策逻辑用脚本组件来实现。加上 DSL 编写的逻辑关系反转表达式。这样形成的系统，其优雅度是非常高的。</strong></p><p>你想想，你的关键决策代码，和逻辑关系均可以进行热改变，你的系统中耦合性几乎降低到了最低。改一个小组件不会牵扯到其他的组件的改变。</p><h2 id="再回答开头的问题" tabindex="-1"><a class="header-anchor" href="#再回答开头的问题"><span>再回答开头的问题</span></a></h2><p>如果你看到这，全都能理解的话，那么最开始的几个问题也就能轻而易举的能回答了。</p><p>LF 因为没有角色的概念，全部流转的只是小逻辑块。所以没法暂停的。因为就相当于你普通写的瀑布式代码调用。只是换了一种方式来写而已。</p><p>LF 不保存状态，是一个无状态的东西。一般来说，规则引擎都是无状态的。状态这回事其实还是要业务自己做的。况且有状态这回事情非常危险，一般框架不会去保证这个。</p><p>LF 一般来说，所有用普通瀑布流代码一层层去调用都可以用 LF 去改造，LF 并不针对于某个特殊的领域，都可以用的。除非你的定义是属于标准的流程引擎干的事。那么的确不应该选型 LF。</p><p>关于定时，也不是 LF 该干的事。LF 提供接口层面的执行器，外面套层定时框架即可。很简单。</p><h2 id="lf-对标的框架是什么" tabindex="-1"><a class="header-anchor" href="#lf-对标的框架是什么"><span>LF 对标的框架是什么？</span></a></h2><p>LF 的目标始一直没变过，那就是：超越 Drools。</p><p>LF 独特的理念是国产自研，全部的代码也是国产自研。非常适合拿来做信创项目。</p><p>Drools 是国外老牌且一向作为行业标杆的规则引擎。相信了解过这行的都有听说过。</p><p>其实 Drools 只提供了标准的规则引擎，并没有提供逻辑关系反转的特性，而且它的 DSL 学习成本还是比较大的。而 LF 则用现成的语言来提供作为脚本，比如 js，groovy，aviator，python，lua，甚至 java 本身也可以拿来做写脚本，这些根本不用再次学习。</p><p>LF 除了规则引擎之外，更加拓展了规则引擎的范畴，使得 LF 能做的事情更多。</p><p>并且 LF 支持的存储中间件之丰富的，也绝非 Drools 能比拟的。</p><p>加上 LF 全中文文档，社区答疑体系在开源中首屈一指。Drools 一堆英文文档，去哪答疑？</p><p>一定要说 LF 比不上的 Drools 的地方。那就是决策表体系。</p><p>Drools 是不需要指定规则的，由决策表来多项匹配。LF 由于提供了逻辑反转，是需要指定特定的规则的。</p><p>但是这个 LF 也准备在 2.11.5 中提供，弥补最后核心上的短板。</p><p>届时 LF 可以平替 Drools。</p><p>我会为此一直坚守。</p><p>谨此此篇献给关注过 LF 的同学。</p><h2 id="lf-的-vip-社区" tabindex="-1"><a class="header-anchor" href="#lf-的-vip-社区"><span>LF 的 VIP 社区</span></a></h2><p>LF 开通了 VIP 付费社区，目前正在试运营，加入 VIP 社区可以最大程度保障您的使用体验。</p><p>VIP 社区可无限制的提问，并且每次问答都保证及时和详细。确保你完全掌握 LF 的使用。</p><p>并且 VIP 社区中我会坚持分享 LF 以及规则引擎内容的话题。每周一篇精华文章。大部分是独家拥有，不会发到任何其他平台。</p><p>现在加入会非常划算。享有以下权益：</p><p>1.极致的答疑体验，保证每次回答具体且详细。</p><p>2.每周一篇的独家精华内容。</p><p>3.一年享有 2 次的一对一远程答疑。</p><p>如果有想加入的同学，可以扫以下二维码</p><img src="'+p+'" style="max-height:340px;">',97)]))}const h=e(i,[["render",l],["__file","LiteFlow-concept.html.vue"]]),g=JSON.parse('{"path":"/zh/blog/LiteFlow-concept.html","title":"白话文解析LiteFlow的理念是什么？什么时候用该怎么用？干货满满","lang":"zh-CN","frontmatter":{"title":"白话文解析LiteFlow的理念是什么？什么时候用该怎么用？干货满满","author":"元人部落","tag":["LiteFlow"],"date":"2024-01-19T00:00:00.000Z","cover":"/assets/img/blog/LiteFlow-concept-0.png","head":[["meta",{"name":"博客"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/blog/LiteFlow-concept.html"}],["meta",{"property":"og:title","content":"白话文解析LiteFlow的理念是什么？什么时候用该怎么用？干货满满"}],["meta",{"property":"og:description","content":"官网：https://liteflow.cc/ Gitee：https://gitee.com/dromara/liteFlow Github：https://github.com/dromara/liteflow LiteFlow 一个现代化的开源规则引擎框架，以下文中简称 LF。 前言 时常在社区里看到有的小伙伴在那提问： LF 在一个流程中如何暂..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/blog/LiteFlow-concept-0.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-22T15:09:27.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/blog/LiteFlow-concept-0.png"}],["meta",{"name":"twitter:image:alt","content":"白话文解析LiteFlow的理念是什么？什么时候用该怎么用？干货满满"}],["meta",{"property":"article:author","content":"元人部落"}],["meta",{"property":"article:tag","content":"LiteFlow"}],["meta",{"property":"article:published_time","content":"2024-01-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-22T15:09:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"白话文解析LiteFlow的理念是什么？什么时候用该怎么用？干货满满\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/blog/LiteFlow-concept-0.png\\"],\\"datePublished\\":\\"2024-01-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-22T15:09:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"元人部落\\"}]}"]],"description":"官网：https://liteflow.cc/ Gitee：https://gitee.com/dromara/liteFlow Github：https://github.com/dromara/liteflow LiteFlow 一个现代化的开源规则引擎框架，以下文中简称 LF。 前言 时常在社区里看到有的小伙伴在那提问： LF 在一个流程中如何暂..."},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"流程","slug":"流程","link":"#流程","children":[]},{"level":2,"title":"规则","slug":"规则","link":"#规则","children":[]},{"level":2,"title":"那 LF 是什么呢","slug":"那-lf-是什么呢","link":"#那-lf-是什么呢","children":[]},{"level":2,"title":"如何用好 LF","slug":"如何用好-lf","link":"#如何用好-lf","children":[]},{"level":2,"title":"再回答开头的问题","slug":"再回答开头的问题","link":"#再回答开头的问题","children":[]},{"level":2,"title":"LF 对标的框架是什么？","slug":"lf-对标的框架是什么","link":"#lf-对标的框架是什么","children":[]},{"level":2,"title":"LF 的 VIP 社区","slug":"lf-的-vip-社区","link":"#lf-的-vip-社区","children":[]}],"git":{"createdTime":1708614567000,"updatedTime":1708614567000,"contributors":[{"name":"Cicici-Shi","username":"Cicici-Shi","email":"1901177100@qq.com","commits":1,"url":"https://github.com/Cicici-Shi"},{"name":"tomsun28","username":"tomsun28","email":"tomsun28@outlook.com","commits":1,"url":"https://github.com/tomsun28"}]},"readingTime":{"minutes":10.99,"words":3298},"filePathRelative":"zh/blog/LiteFlow-concept.md","localizedDate":"2024年1月19日","autoDesc":true,"excerpt":"<p>官网：https://liteflow.cc/</p>\\n<p>Gitee：https://gitee.com/dromara/liteFlow</p>\\n<p>Github：https://github.com/dromara/liteflow</p>\\n<p>LiteFlow 一个现代化的开源规则引擎框架，以下文中简称 LF。</p>\\n<h2>前言</h2>\\n<p>时常在社区里看到有的小伙伴在那提问：</p>\\n<p>LF 在一个流程中如何暂停，等待操作员完成后，进行下一步该怎么做？</p>\\n<p>LF 流程失败后，下一次能否继续上次的执行？</p>\\n<p>LF 流程适不适合某个我的业务？</p>"}');export{h as comp,g as data};

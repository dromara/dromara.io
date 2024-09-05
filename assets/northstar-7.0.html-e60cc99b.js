import{_ as r,a as t,b as a,c as i,d as p,e as n,f as o,g as e,h as s,i as h,j as g}from"./northstar-7.0-10-925355bc.js";import{_ as c,o as f,c as d,f as l}from"./app-4b5640bf.js";const u={},_=l('<p>一起来看看这个搅局者都有哪些本事，敢来叫板一众商业量化软件。</p><h2 id="一站式平台" tabindex="-1"><a class="header-anchor" href="#一站式平台" aria-hidden="true">#</a> 一站式平台</h2><p>炒外汇的都知道用MT4、MT5；做国内期货的都知道用文华、MC、开拓者、金字塔；做股票的都听过PTrade、QMT……每切换一次交易平台，都是一次费时费力的重新学习。让人不禁要问，你们这些平台为什么就不能做成一站式的？</p><p>northstar作者本人就曾经深受其苦。因此，northstar从诞生之初就立志要做成一个一站式的平台，誓要让用户重获主导权；而不是让咱们不断地去迎合不同的软件商与交易所。</p><p>为此，northstar的总体设计图如下：</p><figure><img src="'+r+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>由图可见，不管是什么交易所，只要它提供了公开的API接口，便可以通过在northstar实现一个适配器模块对交易所进行接入，从而能实现对任意的交易所进行对接。</p><p>目前已实现对接的有国内期货CTP、币安、老虎证券。</p><h2 id="私有化部署" tabindex="-1"><a class="header-anchor" href="#私有化部署" aria-hidden="true">#</a> 私有化部署</h2><p>除了以上提到的很多客户端商业软件外，如今也有不少是以SaaS租户的形式提供着量化服务，例如某宽、某筐之类的。而SaaS服务最致命的问题便是交易策略的安全性问题。不管平台如何强调交易策略的部署是安全的，也不如可以私有化部署来得放心。</p><p>northstar从基因上就决定了项目的代码由用户绝对可控。部署环节也是全权由用户自行处理。从根本上免除了代码泄漏的风险隐患。</p><p>为了同时兼顾主程序通用框架的更新迭代，以及用户策略代码的私密性，主程序采用了灵活的可插拔设计。只要用户把策略代码包与主程序包放在同一个目录下运行，主程序便可以自动加载用户策略。整个过程非常简单且自然。（下图中，northstar为主程序包，northstar-external为用户策略包）</p><figure><img src="'+t+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>如图所示，不单单是用户的策略代码可以享受这般丝滑的可插拔功能，其余的可扩展模块均能借此来实现更好的扩展性。</p><h2 id="全链路监控" tabindex="-1"><a class="header-anchor" href="#全链路监控" aria-hidden="true">#</a> 全链路监控</h2><p>一个成熟的量化交易程序必然是部署在服务器上长时间不间断地运行，为此一套全链路的监控手段必不可少。得益于成熟的web应用生态，northstar也打造了一整套监控体系为交易保驾护航。</p><p>事前，用户可以通过电脑端或移动端的web页面来创建自动化交易模组。</p><figure><img src="'+a+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>上图为电脑端界面</p><figure><img src="'+i+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>上图为手机端界面</p><p>事中，可以借助微信或电子邮件，及时接收到交易动态以及程序的异常提示。</p><figure><img src="'+p+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>事后，可以通过程序日志与模组运行日志分别进行复盘检查。</p><figure><img src="'+n+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>由此打造出了一套让人放心的自动化交易体系。</p><h2 id="智能化交易" tabindex="-1"><a class="header-anchor" href="#智能化交易" aria-hidden="true">#</a> 智能化交易</h2><p>智能化交易是下一代量化软件的必备门槛（至少我是这么理解的）。随着人工智能算法的普及，越来越多的交易场景需要应用到深度学习框架。</p><p>为此，northstar 7.0把集成人工智能能力作为大版本升级的一大核心功能，借助比较普及的Tensorflow框架，使northstar可以调用已经训练好的神经网络模型。得益于northstar良好的可扩展性设计，要集成人工智能的能力不敢说是易如反掌，至少也是一马平川。</p><figure><img src="'+o+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>如上图所示，新增的人工智能能力本质上是统一了数据采样的方法，并外挂了一个预训练模型。数据采样方法完全由自定义策略去实现。在训练阶段，通过框架提供的回放引擎驱动采样数据的收集，使Tensorflow可以有足够的数据用于训练；在实盘阶段，则预先加载好预训练模型，然后便能轻易地得出神经网络的推理结果。从而实现了人工智能算法对策略的增强。</p><p>northstar支持的交易模式包含但不限于CTA指标交易、合约价差交易、高频TICK算法交易、跨市场套利交易等等。在不同的交易模式上叠加了人工智能算法的加成，可以大大提升交易的胜率。</p><h2 id="低成本运行" tabindex="-1"><a class="header-anchor" href="#低成本运行" aria-hidden="true">#</a> 低成本运行</h2><p>northstar光凭以上智能化交易那轻描淡写的功能特性，放市场上随便一款软件，每年的软件使用费没个小一两万块钱基本没戏。更不谦虚地说，要集齐以上四个特性的，几乎没有。而令用户更加惊艳的是，它的使用成本仅仅需要大概不到十分之一的价格。</p><p>由于northstar项目本身是免费的开源项目，相当于软件是可以免费获得的。毕竟软件产品的边际成本几乎为零，各大量化软件厂商的软件费用之所以昂贵，主要是在于营销费用与企业管理费用比较高。正是因为苦于高昂的软件费用，northstar作者才有了打造出northstar的冲动。因此，northstar在诞生之初就自带草根屠龙属性。正如那句著名的话一样，“从群众中来，到群众中去”。</p><p>凡事都有两面，northstar最大的成本便是用户的学习成本。因此，作为northstar的用户需要有一定的JAVA编程能力，如果要用到AI能力时也需要用户具备AI工程师同等的技术能力。但站在northstar作者的角度看，这些都是作为一名量化交易员的必备技能。因此我相信，但凡是有意向入坑量化交易的用户，都会对自己所面临的挑战有充分的心理预期。</p><p>除了学习成本外，还有便是那微不足道的服务器成本、数据服务成本等等。</p><p>northstar项目作为一个免费开源项目，运营的思路根本不是在卖软件。站在northstar作者的角度看，更像是在做一个网红IP，旨在打造一个草根量化生态社区。欢迎有能力的参与者在社区中提供有价值的付费增值服务，更需要更多的用户支持购买社区的增值服务，以帮助社区发展壮大。</p><h2 id="个性化定制" tabindex="-1"><a class="header-anchor" href="#个性化定制" aria-hidden="true">#</a> 个性化定制</h2><p>northstar拥有良好的可扩展性设计，允许用户按需进行自行扩展。</p><p>社区汇集了众多优秀的开发者，能提供收费的定制服务，欢迎甲方爸爸来体验VIP定制服务。</p><hr><h2 id="northstar-7-0-版本升级说明" tabindex="-1"><a class="header-anchor" href="#northstar-7-0-版本升级说明" aria-hidden="true">#</a> northstar 7.0 版本升级说明</h2><blockquote><p>介绍完了产品竞争力，是时候该向老粉们仔细交代一下此次v7.0升级的几项重大改进了。</p></blockquote><ul><li><strong>重构了核心类，使内存占用率得以优化</strong></li></ul><p>为了更好地验证优化效果，我特意做了一个A/B测试。针对同一个回测周期的同一批模组进行回测，并观测其内存使用情况。</p><figure><img src="'+e+'" alt="" tabindex="0"><figcaption></figcaption></figure><figure><img src="'+s+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>优化前的内存运行情况如下：</p><figure><img src="'+h+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>优化后的内存运行情况如下：</p><figure><img src="'+g+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>可以明显看出优化后的内存增长速度明显降低，最终占用的物理内存也显著下降。</p><ul><li><strong>升级了JDK21，引入了虚拟线程</strong></li></ul><p>对主程序所有涉及IO操作的逻辑，都进行了虚拟线程优化。比如保存K线数据、发送即时行情等。</p><ul><li>集成了Tensorflow深度学习能力</li></ul><p>如前文提到的，策略可以加载Tensorflow的预训练模型，来优化策略的胜率。</p><ul><li><strong>注意事项</strong></li></ul><p>由于springboot3的升级，引发了H2数据库升级导致数据不兼容，必须要移除数据文件，或进行数据迁移。</p><p>——  完 ——</p><p>关注公众号，带你看更多量化交易的干货</p><p><strong>喜欢的话，请点下 【在看】吧</strong><strong><strong><strong>👇</strong></strong></strong></p>',62),m=[_];function b(x,T){return f(),d("div",null,m)}const w=c(u,[["render",b],["__file","northstar-7.0.html.vue"]]);export{w as default};

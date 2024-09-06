import{_ as e,o as i,c as a,f as t}from"./app-b61402ca.js";const s={},d=t(`<h2 id="liteflow-介绍" tabindex="-1"><a class="header-anchor" href="#liteflow-介绍" aria-hidden="true">#</a> LiteFlow 介绍</h2><p><strong>LiteFlow 是一个开源编排式规则引擎，能够让你的系统逻辑任意编排，可选用脚本书写逻辑，支持多达 6 种脚本语言，支持丰富的第三方存储的支持，所有的逻辑和规则均可热变更。设计系统和重构系统的神器。</strong></p><p>LiteFlow 也是 Gitee 的高 star 项目，过去一年来保持了非常快的增长趋势。</p><p>同时 LiteFlow 也是国内优秀的社区驱动型开源项目，开源将近 3 年，目前已经被各大公司应用在核心系统上。特性以及支持度都非常好。社区人数超过 3000 人。</p><p>如果你是第一次知道这个项目，可以去官网或相关的主页进行了解：</p><blockquote><p>项目官网:</p><p>https://liteflow.yomahub.com</p><p>gitee 托管仓库：</p><p>https://gitee.com/dromara/liteFlow</p><p>github 托管仓库：</p><p>https://github.com/dromara/liteflow</p></blockquote><h2 id="liteflow-v2-10-5" tabindex="-1"><a class="header-anchor" href="#liteflow-v2-10-5" aria-hidden="true">#</a> LiteFlow v2.10.5</h2><p>v2.10.5 版本主要就是对日志从底层进行架构改造。增加了支持传入自定义的请求 ID。</p><p>以及修复了一些循环表达式中的 Bug。</p><p>我们对日志进行了大幅度的改造，支持了自定义的 RequestId 传入，这个特性可以很方便的和你自己系统的 traceId 进行集成。</p><p>你可以调用如下方法来传入一个已有的 requestId：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LiteflowResponse response = flowExecutor.execute2RespWithRid(&quot;chain1&quot;, arg, &quot;T001234&quot;, YourContext.class);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么，这个链路中所有的框架日志都会带有[T001234]这个传入的 ID 前缀了。</p><p>另外新版本的 LiteFlow 还提供了一个日志包装类。只要你在组件中把 slf4j 的日志声明换成如下形式，那么你在组件中自己打出的日志也会带有请求 ID 前缀。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private final LFLog logger = LFLoggerManager.getLogger(FlowExecutor.class);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中<code>LFLog</code>这个类是继承自 slf4j 的<code>Logger</code>类的，所以它的使用方式和<code>Logger</code>是完全一致的。</p><p>你只需要把定义换一下就 ok 了。</p><p>如果在一个链路中相同请求的日志都拥有同一个请求 ID，那么对于定位问题来说，会很方便。推荐大家使用此特性。</p><h2 id="循环场景中的一些-bug-的修复" tabindex="-1"><a class="header-anchor" href="#循环场景中的一些-bug-的修复" aria-hidden="true">#</a> 循环场景中的一些 bug 的修复</h2><p>看来大家对循环特性使用的还是比较多的。在使用的过程中，社区内也给出了很多反馈意见。</p><p>可能是之前对循环定义的测试用例有些少了，所以对于一些场景没覆盖到。这次修复了社区内提供的 2 个 Bug。</p><p>同时也补全了测试用例。</p><h2 id="完整更新列表" tabindex="-1"><a class="header-anchor" href="#完整更新列表" aria-hidden="true">#</a> 完整更新列表</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>增强 #I7F567 增加对业务自定义requestId传入的支持

https://gitee.com/dromara/liteFlow/issues/I7F567

修复 #I7EKS8 在isAccess中进行setIsEnd(true)流程没有结束的问题

https://gitee.com/dromara/liteFlow/issues/I7EKS8

修复 #I7EKP3 同一个线程里分别调用2个Chain，currObj没有隔离的情况

https://gitee.com/dromara/liteFlow/issues/I7EKP3

修复 #I7E8RN 次数循环组件 下标获取问题

https://gitee.com/dromara/liteFlow/issues/I7E8RN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支持和赞助-liteflow" tabindex="-1"><a class="header-anchor" href="#支持和赞助-liteflow" aria-hidden="true">#</a> 支持和赞助 LiteFlow</h2><p>开源一个项目并坚持 2 年并不容易，如果各位对 LiteFlow 这个项目有信心并且愿意支持的话，可以在官网首先点击*<code>给LiteFlow发电</code>*按钮。</p><p>但不管你是否选择赞助，我仍然会在社区里尽可能的解决你们的问题。</p><p>社区里的问题太多，如果没回答上，请多艾特我几遍。</p><h2 id="如何加群" tabindex="-1"><a class="header-anchor" href="#如何加群" aria-hidden="true">#</a> 如何加群</h2><p>LiteFlow 的社区群已经有大约 3000 人以上了。你有任何问题，都可以在群里问。</p><p>关于加群的方式，请参考：https://liteflow.yomahub.com/pages/73c2c3/</p>`,31),l=[d];function n(r,o){return i(),a("div",null,l)}const p=e(s,[["render",n],["__file","LiteFlow-2.10.5.html.vue"]]);export{p as default};
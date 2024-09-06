import{_ as e,o as a,c as l,f as n,a as i}from"./app-b61402ca.js";const t="/assets/img/news/warm-flow-0.png",r="/assets/img/news/warm-flow-1.png",s="/assets/img/news/warm-flow-2.png",d="/assets/img/news/warm-flow-3.png",o={},p=n(`<h3 id="作者介绍" tabindex="-1"><a class="header-anchor" href="#作者介绍" aria-hidden="true">#</a> 作者介绍</h3><ul><li><p>名称：warm</p></li><li><p>dromara 开源组织成员，dromara/warm-flow作者</p></li><li><p>研发工程师、技术经理，工作经验8年。此工作流已经持续开发有一年有余。</p></li><li><p>https://gitee.com/dromara/warm-flow.git</p></li><li><p>https://github.com/dromara/warm-flow.git</p></li></ul><h3 id="历史背景" tabindex="-1"><a class="header-anchor" href="#历史背景" aria-hidden="true">#</a> 历史背景</h3><p>flowable和activities确实大而全，但是这样对一般的项目会是好事吗？能早点下班吗</p><ol><li><p><strong>学习曲线：</strong> 对于初学者来说，学习可能需要一定的时间和精力。理解其概念、API 和配置可能需要一些耐心和实践。</p></li><li><p><strong>复杂性：</strong> 对于简单的工作流程来说，引入可能会显得过于复杂。在某些情况下，使用简单的解决方案可能更合适。</p></li><li><p><strong>定制化需求：</strong> 在一些特殊场景下，可能需要对进行定制化开发，以满足特定的需求。这可能需要深入理解其内部工作原理和源代码。</p></li><li><p><strong>版本更新：</strong> 随着时间的推移，会发布新的版本，其中可能包含功能改进、bug 修复等。升级到新版本可能需要投入一定的时间和资源，以确保平稳过渡和兼容性。</p></li><li><p><strong>阅读难度：</strong> 全英文注释，对于英文不好的人来说，确实有门槛。</p></li></ol><blockquote><p><strong>那何不开发属于国人的工作流呢，为此耗时一年时间自研warm-flow工作流。</strong></p></blockquote><h3 id="warm-flow能给你带来什么" tabindex="-1"><a class="header-anchor" href="#warm-flow能给你带来什么" aria-hidden="true">#</a> warm-flow能给你带来什么</h3><p>国产自研工作流，其特点简洁(只有6张表)但又不简单，五脏俱全，组件独立，可扩展，可满足中小项目的组件。</p><ol><li><p>支持常规的流程流转，比如跳转、回退、审批和任意跳转</p></li><li><p>支持转办、终止，任务最终回到发起人</p></li><li><p>支持或签（会签和票签开发中）</p></li><li><p>业务项目可不依赖流程设计器，组件可生成流程图片</p></li><li><p>支持角色、部门和用户等权限配置</p></li><li><p>支持监听器，参数传递，动态权限</p></li><li><p>支持多租户</p></li><li><p>支持互斥网关，并行网关</p></li><li><p>支持条件表达式，可扩展</p></li><li><p>支持不同orm框架和数据库扩展</p></li><li><p>同时支持spring和solon</p></li><li><p>兼容java8、java17及以上版本，理论11也可以</p></li><li><p>官方提供简单流程封装demo项目，很实用</p></li></ol><blockquote><p>接<strong>入warm-flow后妈妈再也不用担心我加班了</strong></p></blockquote><h3 id="项目功能模块" tabindex="-1"><a class="header-anchor" href="#项目功能模块" aria-hidden="true">#</a> 项目功能模块</h3><h4 id="流程流转管理" tabindex="-1"><a class="header-anchor" href="#流程流转管理" aria-hidden="true">#</a> 流程流转管理</h4><p>流程流转就像是warm-flow的驾驶人。让办理流程像喝水一样简单的事情。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 部署流程
public void deployFlow() throws Exception {
    defService.importXml(new FileInputStream(&quot;/xxx/leaveFlow-serial.xml&quot;));
}
// 发布流程
public void publish() {
    defService.publish(1219285650587652096L);
}
// 开启流程
public void startFlow() {
    insService.start(&quot;2&quot;, getUser());
}
// 跳转流程
public void skipFlow() {
    Instance instance = insService.skip(1232001238795685888L,getUser().skipType(SkipType.PASS.getKey())
                                .permissionFlag(Arrays.asList(&quot;role:1&quot;, &quot;role:2&quot;)));
}
//任意跳转
public void skipAnyNode() {
    Instance instance = taskService.skip(1219286332145274880L, getUser().skipType(SkipType.PASS.getKey())
                        .permissionFlag(Arrays.asList(&quot;role:1&quot;, &quot;role:2&quot;)).nodeCode(&quot;4&quot;));
}
// 终止流程
public void termination() {
    taskService.termination(1232001396254052352L, getUser());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="流程图管理" tabindex="-1"><a class="header-anchor" href="#流程图管理" aria-hidden="true">#</a> 流程图管理</h4><p>流程图管理就像warm-flow的门面。作为工作流引擎，当然是可以能脱离流程设计器，独立使用的，那流程图片生成是必不可少的。warm-flow自研了流程图绘制，通过设计器获取坐标，进行绘制流程的进度和状态（当然业务系统可以不集成设计器，可在作者提供的demo项目中设计好导出xml，业务系统再次导入即可）。</p><figure><img src="`+t+'" alt="" tabindex="0"><figcaption></figcaption></figure><figure><img src="'+r+'" alt="" tabindex="0"><figcaption></figcaption></figure><h4 id="监听器管理" tabindex="-1"><a class="header-anchor" href="#监听器管理" aria-hidden="true">#</a> 监听器管理</h4><p>监听器可以说是工作流引擎的上限，灵活度和可扩展性的核心人物</p><ol><li>监听器类型</li></ol><ul><li><p>create：创建监听器，任务创建时执行</p></li><li><p>start：开始监听器，任务开始办理时执行</p></li><li><p>permission：权限监听器，办理任务动态设置权限</p></li><li><p>assignment：分派办理人监听器，分派后执行</p></li><li><p>finish：结束监听器，当前任务完成后执行</p></li></ul><ol start="3"><li>监听器生命周期</li></ol><figure><img src="'+s+`" alt="" tabindex="0"><figcaption></figcaption></figure><p>输入图片说明</p><h4 id="配置管理" tabindex="-1"><a class="header-anchor" href="#配置管理" aria-hidden="true">#</a> 配置管理</h4><p>配置文件可以让工作流使用更加方便，如虎添翼。</p><ol><li><p>配置文件目前支持banner图和填充器配置，后续还会增加多租户和软删除等。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># warm-flow工作流配置
warm-flow:
  # 是否显示banner图，默认是
  banner: true
  #填充器（也通过代码防守注入）
  data-fill-handler-path: com.ruoyi.system.handle.CustomDataFillHandler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>填充器也可通过代码方式注入</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Configuration
public class WarmFlowConfig {

    @Bean
    public DataFillHandler dataFillHandler() {
        return new CustomDataFillHandler();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展支持" tabindex="-1"><a class="header-anchor" href="#扩展支持" aria-hidden="true">#</a> 扩展支持</h3><h4 id="orm和数据库扩展" tabindex="-1"><a class="header-anchor" href="#orm和数据库扩展" aria-hidden="true">#</a> orm和数据库扩展</h4><p>作为新时代的程序员不能固步自封，只支持mybatis和msyql。所以目前已经解偶数据库操作，按照mybatis方式扩展其他的orm或者数据库类型即可</p><figure><img src="`+d+`" alt="" tabindex="0"><figcaption></figcaption></figure><p>输入图片说明</p><h4 id="条件表达式扩展" tabindex="-1"><a class="header-anchor" href="#条件表达式扩展" aria-hidden="true">#</a> 条件表达式扩展</h4><p>工作流引擎想要灵活跳转，就得有相应表达式，满足不同的条件，执行不同的任务</p><p>目前支持，并且支持规则扩展</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;, &gt;=, &lt;, &lt;=, =, !=, like, not like
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="联系作者" tabindex="-1"><a class="header-anchor" href="#联系作者" aria-hidden="true">#</a> 联系作者</h3>`,39),c=i("table",{"data-tool":"mdnice编辑器"},[i("tbody",null,[i("tr",null,[i("td",null,[i("img",{class:"rich_pages wxw-img js_img_placeholder wx_img_placeholder","data-imgfileid":"100005826","data-ratio":"1.3642105263157895","data-src":"https://mmbiz.qpic.cn/mmbiz_jpg/KCPYGythicQJOB3IUnWCibl8sBozvyzBeycM2t0w3vQNsN2UcrckubgRL6tlwr2lqpnaIyUF88hc2fAEDZKmgsuQ/640?wx_fmt=jpeg&from=appmsg","data-type":"jpeg","data-w":"950",style:{display:"block","margin-right":"auto","margin-left":"auto",width:"614px !important",height:"837.625px !important"},"data-original-style":"display: block;margin-right: auto;margin-left: auto;","data-index":"5",src:"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E",_width:"677px",crossorigin:"anonymous",alt:"图片"})]),i("td",null,[i("img",{class:"rich_pages wxw-img js_img_placeholder wx_img_placeholder","data-imgfileid":"100005827","data-ratio":"1.8138297872340425","data-src":"https://mmbiz.qpic.cn/mmbiz_jpg/KCPYGythicQJOB3IUnWCibl8sBozvyzBeyyPVFKnibBflWX4wk1OKRTR3jnP7qSRxolZtzXkicwMjaVicTmA4ibFx9SQ/640?wx_fmt=jpeg&from=appmsg","data-type":"jpeg","data-w":"940",style:{display:"block","margin-right":"auto","margin-left":"auto",width:"322px !important",height:"584.053px !important"},"data-original-style":"display: block;margin-right: auto;margin-left: auto;","data-index":"6",src:"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E",_width:"677px",crossorigin:"anonymous",alt:"图片"})])])])],-1),m=[p,c];function g(u,v){return a(),l("div",null,m)}const b=e(o,[["render",g],["__file","warm-flow.html.vue"]]);export{b as default};
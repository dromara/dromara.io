import{_ as n,a,b as e,c as i}from"./warm-flow-v1.2.8-3-B1m26WjM.js";import{_ as l}from"./qrcode_zsxq-DTovgpZN.js";import{_ as p,c as t,a as r,o as d}from"./app-BmgeuuSW.js";const c={};function o(m,s){return d(),t("div",null,s[0]||(s[0]=[r('<h1 id="warm-flow-1-2-8版本更新-新增办理人变量表达式和条件表达式支持spel" tabindex="-1"><a class="header-anchor" href="#warm-flow-1-2-8版本更新-新增办理人变量表达式和条件表达式支持spel"><span>warm-flow 1.2.8版本更新,新增办理人变量表达式和条件表达式支持spel</span></a></h1><p><img src="'+n+`" alt=""></p><ul><li><p>【升级注意事项】</p></li><li><p>本次升级，内置json库snack3方式，改为spi方式加载，业务项目中存在哪种json就会使用哪种的实现， 支持顺序按顺序加载一种：snack3、jackson、fastjson、gson，并且目前只实现了这四种，可扩展</p></li><li><p>如在未集成snack3库的环境下，还需要使用snack3库，需要单独使用（原组件使用snack3库）</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>      &lt;dependency&gt;</span></span>
<span class="line"><span>          &lt;groupId&gt;org.noear&lt;/groupId&gt;</span></span>
<span class="line"><span>          &lt;artifactId&gt;snack3&lt;/artifactId&gt;</span></span>
<span class="line"><span>          &lt;version&gt;3.2.88&lt;/version&gt;</span></span>
<span class="line"><span>      &lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>更新日志</p></li><li><p>[feat] json库支持snack3、jackson、fastjson和gson，并且支持扩展</p></li><li><p>[feat] 增加办理人变量表达式，支持\${xxx}替换和spel，并支持扩展</p></li><li><p>[feat] ListenerVariable监听器变量新增FlowParams字段，方便开始监听器全局传递参数</p></li><li><p>[feat] 终止新增对开始和完成监听器的支持</p></li><li><p>[update] springboot项目的条件表达式默认支持spel</p></li><li><p>[update] 历史记录改为单条保存，删除重复代码</p></li><li><p>[update] 修改FlowUserDao的bean名称</p></li><li><p>[update] 中间节点拆分为或签，会签，票签</p></li><li><p>[fix] 修复历史记录创建时间相等，导致流程图渲染异常</p></li><li><p>[fix]修复Mybatis逻辑删除变成真实删除的缺陷                               @xiarigang</p></li><li><p>[refactor] 重构id生成器，支持orm默认策略，删除数据填充默认实现类，改为匿名类</p></li></ul><h1 id="部分更新内容介绍" tabindex="-1"><a class="header-anchor" href="#部分更新内容介绍"><span>部分更新内容介绍</span></a></h1><h2 id="_1、增加办理人变量表达式" tabindex="-1"><a class="header-anchor" href="#_1、增加办理人变量表达式"><span>1、增加办理人变量表达式</span></a></h2><h3 id="_1-1、默认办理人变量策略" tabindex="-1"><a class="header-anchor" href="#_1-1、默认办理人变量策略"><span>1.1、默认办理人变量策略</span></a></h3><h4 id="前端页面设置变量" tabindex="-1"><a class="header-anchor" href="#前端页面设置变量"><span>前端页面设置变量</span></a></h4><ul><li><p>比如：<code>@@default@@|\${handler1},role:1,1</code></p></li><li><p><code>@@default@@|\${handler1}</code>中@@default@@表示默认办理人变量策略，handler1是需要被流程变量中替换的标识</p></li><li><p><code>role:1,1</code>表示办理人角色和具体办理人</p></li></ul><p><img src="`+a+`" alt=""></p><h4 id="后端代码设置变量" tabindex="-1"><a class="header-anchor" href="#后端代码设置变量"><span>后端代码设置变量</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>// 流程变量</span></span>
<span class="line"><span>Map&lt;String, Object&gt; variable = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>variable.put(&quot;handler1&quot;, &quot;100&quot;);</span></span>
<span class="line"><span>flowParams.variable(variable);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Instance instance = insService.skipByInsId(testLeave.getInstanceId(), flowParams);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2、spel办理人变量策略" tabindex="-1"><a class="header-anchor" href="#_1-2、spel办理人变量策略"><span>1.2、spel办理人变量策略</span></a></h3><h4 id="前端页面设置变量-1" tabindex="-1"><a class="header-anchor" href="#前端页面设置变量-1"><span>前端页面设置变量</span></a></h4><ul><li><p>比如：<code>@@spel@@|#{@user.evalVar(#handler2)}</code></p></li><li><p><code>#{@user.evalVar(#handler2)}</code>是spel表达式，<code>#handler2</code>是方法入参变量，可以不设置</p></li></ul><p><img src="`+e+`" alt=""></p><h4 id="后端代码设置变量-1" tabindex="-1"><a class="header-anchor" href="#后端代码设置变量-1"><span>后端代码设置变量</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 用户类</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Component(&quot;user&quot;)</span></span>
<span class="line"><span>public class User {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * spel办理人变量表达式</span></span>
<span class="line"><span>     * @param handler2 办理人</span></span>
<span class="line"><span>     * @return String</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public String evalVar(String handler2) {</span></span>
<span class="line"><span>        return handler2;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 流程变量</span></span>
<span class="line"><span>Map&lt;String, Object&gt; variable = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>variable.put(&quot;handler2&quot;, &quot;101&quot;);</span></span>
<span class="line"><span>flowParams.variable(variable);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Instance instance = insService.skipByInsId(testLeave.getInstanceId(), flowParams);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、监听器变量新增flowparams字段" tabindex="-1"><a class="header-anchor" href="#_2、监听器变量新增flowparams字段"><span>2、监听器变量新增FlowParams字段</span></a></h2><blockquote><p>ListenerVariable监听器变量新增FlowParams字段，方便开始监听器全局传递参数</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class GlobalStartListener implements Listener {</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  private static final Logger log = LoggerFactory.getLogger(GlobalStartListener.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 设置办理人id、所拥有的权限等操作，也可以放到业务代码中办理前设置，或者局部监听器</span></span>
<span class="line"><span>   * @param listenerVariable 监听器变量</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  @Override</span></span>
<span class="line"><span>  public void notify(ListenerVariable listenerVariable) {</span></span>
<span class="line"><span>    log.info(&quot;全局开始监听器&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    FlowParams flowParams = listenerVariable.getFlowParams();</span></span>
<span class="line"><span>    LoginUser user = SecurityUtils.getLoginUser();</span></span>
<span class="line"><span>    // 设置当前办理人id</span></span>
<span class="line"><span>    flowParams.setHandler(user.getUser().getUserId().toString());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置办理人所拥有的权限，比如角色、部门、用户等</span></span>
<span class="line"><span>    List&lt;String&gt; permissionList = flowParams.getPermissionFlag();</span></span>
<span class="line"><span>    if (StringUtils.isEmpty(permissionList)) {</span></span>
<span class="line"><span>      permissionList = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    List&lt;SysRole&gt; roles = user.getUser().getRoles();</span></span>
<span class="line"><span>    if (Objects.nonNull(roles)) {</span></span>
<span class="line"><span>      permissionList.addAll(roles.stream().map(role -&gt; &quot;role:&quot; + role.getRoleId()).collect(Collectors.toList()));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    permissionList.add(&quot;dept:&quot; + SecurityUtils.getLoginUser().getUser().getDeptId());</span></span>
<span class="line"><span>    permissionList.add(user.getUser().getUserId().toString());</span></span>
<span class="line"><span>    flowParams.setPermissionFlag(permissionList);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    log.info(&quot;全局开始监听器结束;{}&quot;, &quot;开启流程完成&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、条件表达式默认支持spel" tabindex="-1"><a class="header-anchor" href="#_3、条件表达式默认支持spel"><span>3、条件表达式默认支持spel</span></a></h2><blockquote><p>springboot项目的条件表达式默认支持spel</p></blockquote><ul><li><p>前端配置如<code>#{@user.eval(#flag)}</code>表达式，入库前要拼接前缀，方便区分表达式类型，最终为<code>@@spel@@|#{@user.eval(#flag)}</code></p></li><li><p><code>#flag</code>为变量和以下方法入参命名一致，可不设置入参</p></li></ul><p><img src="`+i+`" alt=""></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Component(&quot;user&quot;)</span></span>
<span class="line"><span>public class User {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * spel条件表达：判断大于等4</span></span>
<span class="line"><span>   * @param flag 待判断的字符串</span></span>
<span class="line"><span>   * @return boolean</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  public boolean eval(String flag) {</span></span>
<span class="line"><span>    BigDecimal a = new BigDecimal(flag);</span></span>
<span class="line"><span>    BigDecimal b = new BigDecimal(&quot;4&quot;);</span></span>
<span class="line"><span>    return a.compareTo(b) &gt; 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 新增OA 请假申请</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @param testLeave OA 请假申请</span></span>
<span class="line"><span> * @return 结果</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>public int insertTestLeave(TestLeave testLeave, String flowStatus)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  FlowParams flowParams = FlowParams.build().flowCode(getFlowType(testLeave));</span></span>
<span class="line"><span>  // 流程变量</span></span>
<span class="line"><span>  Map&lt;String, Object&gt; variable = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>  variable.put(&quot;flag&quot;, String.valueOf(testLeave.getDay()));</span></span>
<span class="line"><span>  flowParams.variable(variable);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Instance instance = insService.start(id, flowParams);</span></span>
<span class="line"><span>  return instance != null? 1 : 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="warm-flow介绍" tabindex="-1"><a class="header-anchor" href="#warm-flow介绍"><span>warm-flow介绍</span></a></h1><blockquote><p>[!IMPORTANT] Warm-Flow国产工作流引擎🎉，其特点简洁轻量但又不简单，五脏俱全，组件独立，可扩展，可满足中小项目的组件。</p></blockquote><ol><li><p>简洁易用：只有7张表，代码量少，可快速上手和集成</p></li><li><p>审批功能：支持通过、退回、任意跳转、转办、终止、会签、票签、委派和加减签、互斥和并行网关</p></li><li><p>监听器与流程变量：支持五种监听器，可应对不同场景，灵活可扩展，参数传递，动态权限</p></li><li><p>流程图：流程引擎自带流程图，可在不集成流程设计器情况下使用</p></li><li><p>条件表达式：内置常见的和spel条件表达式，并且支持自定义扩展</p></li><li><p>办理人变量表达式：内置\${handler}和spel格式的表达式，可满足不同场景，灵活可扩展</p></li><li><p>orm框架扩展：目前支持MyBatis、Mybatis-Plus、Mybatis-Flex和Jpa，后续会由社区提供其他支持，扩展方便</p></li><li><p>数据库支持：目前支持MySQL 、Oracle 和PostgreSQL，后续会继续支持其他数据库或者国产数据库</p></li><li><p>多租户与软删除：流程引擎自身维护多租户和软删除实现，也可使用对应orm框架的实现方式</p></li><li><p>支持角色、部门和用户等权限配置</p></li><li><p>同时支持spring和solon</p></li><li><p>兼容java8和java17,理论11也可以</p></li><li><p>官方提供基于ruoyi-vue封装实战项目，很实用</p></li></ol><h2 id="演示地址" tabindex="-1"><a class="header-anchor" href="#演示地址"><span>演示地址</span></a></h2><ul><li>admin/admin123</li></ul><p>演示地址：http://www.hhzai.top</p><h2 id="官网" tabindex="-1"><a class="header-anchor" href="#官网"><span>官网</span></a></h2><p>http://warm-flow.cn</p><p>关于 Dromara</p><p>Dromara 是由国内顶尖的开源项目作者共同组成的开源社区。提供包括分布式事务，流行工具，企业级认证，微服务RPC，运维监控，Agent监控，分布式日志，调度编排等一系列开源产品、解决方案与咨询、技术支持与培训认证服务。技术栈全面开源共建、 保持社区中立，致力于为全球用户提供微服务云原生解决方案。让参与的每一位开源爱好者，体会到开源的快乐。</p><p>Dromara开源社区目前拥有10+GVP项目，总star数量超过十万，构建了上万人的开源社区，有成千上万的个人及团队在使用Dromara社区的开源项目。</p><p><strong>欢迎大家来到知识星球和我互动</strong></p><p><img src="`+l+'" alt=""></p>',38)]))}const h=p(c,[["render",o],["__file","warm-flow-v1.2.8.html.vue"]]),g=JSON.parse('{"path":"/zh/news/warm-flow-v1.2.8.html","title":"warm-flow v1.2.8 更新 - 新增办理人变量表达式和条件表达式支持spel","lang":"zh-CN","frontmatter":{"title":"warm-flow v1.2.8 更新 - 新增办理人变量表达式和条件表达式支持spel","author":"warm-flow","date":"2024-09-25T00:00:00.000Z","cover":"/assets/img/news/warm-flow-v1.2.8-0.png","head":[["meta",{"name":"新闻"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope-docs-demo.netlify.app/news/warm-flow-v1.2.8.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/news/warm-flow-v1.2.8.html"}],["meta",{"property":"og:title","content":"warm-flow v1.2.8 更新 - 新增办理人变量表达式和条件表达式支持spel"}],["meta",{"property":"og:description","content":"warm-flow 1.2.8版本更新,新增办理人变量表达式和条件表达式支持spel 【升级注意事项】 本次升级，内置json库snack3方式，改为spi方式加载，业务项目中存在哪种json就会使用哪种的实现， 支持顺序按顺序加载一种：snack3、jackson、fastjson、gson，并且目前只实现了这四种，可扩展 如在未集成snack3库的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/warm-flow-v1.2.8-0.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-26T07:39:33.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/warm-flow-v1.2.8-0.png"}],["meta",{"name":"twitter:image:alt","content":"warm-flow v1.2.8 更新 - 新增办理人变量表达式和条件表达式支持spel"}],["meta",{"property":"article:author","content":"warm-flow"}],["meta",{"property":"article:published_time","content":"2024-09-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-26T07:39:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"warm-flow v1.2.8 更新 - 新增办理人变量表达式和条件表达式支持spel\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/warm-flow-v1.2.8-0.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/warm-flow-v1.2.8-1.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/warm-flow-v1.2.8-2.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/warm-flow-v1.2.8-3.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/qrcode_zsxq.webp\\"],\\"datePublished\\":\\"2024-09-25T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-26T07:39:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"warm-flow\\"}]}"]],"description":"warm-flow 1.2.8版本更新,新增办理人变量表达式和条件表达式支持spel 【升级注意事项】 本次升级，内置json库snack3方式，改为spi方式加载，业务项目中存在哪种json就会使用哪种的实现， 支持顺序按顺序加载一种：snack3、jackson、fastjson、gson，并且目前只实现了这四种，可扩展 如在未集成snack3库的..."},"headers":[{"level":2,"title":"1、增加办理人变量表达式","slug":"_1、增加办理人变量表达式","link":"#_1、增加办理人变量表达式","children":[{"level":3,"title":"1.1、默认办理人变量策略","slug":"_1-1、默认办理人变量策略","link":"#_1-1、默认办理人变量策略","children":[]},{"level":3,"title":"1.2、spel办理人变量策略","slug":"_1-2、spel办理人变量策略","link":"#_1-2、spel办理人变量策略","children":[]}]},{"level":2,"title":"2、监听器变量新增FlowParams字段","slug":"_2、监听器变量新增flowparams字段","link":"#_2、监听器变量新增flowparams字段","children":[]},{"level":2,"title":"3、条件表达式默认支持spel","slug":"_3、条件表达式默认支持spel","link":"#_3、条件表达式默认支持spel","children":[]},{"level":2,"title":"演示地址","slug":"演示地址","link":"#演示地址","children":[]},{"level":2,"title":"官网","slug":"官网","link":"#官网","children":[]}],"git":{"createdTime":1727336373000,"updatedTime":1727336373000,"contributors":[{"name":"itanxyu","username":"itanxyu","email":"itanxy@126.com","commits":1,"url":"https://github.com/itanxyu"}]},"readingTime":{"minutes":5.45,"words":1636},"filePathRelative":"zh/news/warm-flow-v1.2.8.md","localizedDate":"2024年9月25日","autoDesc":true,"excerpt":"\\n<p><img src=\\"/assets/img/news/warm-flow-v1.2.8-0.png\\" alt=\\"\\"></p>\\n<ul>\\n<li>\\n<p>【升级注意事项】</p>\\n</li>\\n<li>\\n<p>本次升级，内置json库snack3方式，改为spi方式加载，业务项目中存在哪种json就会使用哪种的实现， 支持顺序按顺序加载一种：snack3、jackson、fastjson、gson，并且目前只实现了这四种，可扩展</p>\\n</li>\\n<li>\\n<p>如在未集成snack3库的环境下，还需要使用snack3库，需要单独使用（原组件使用snack3库）</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>      &lt;dependency&gt;</span></span>\\n<span class=\\"line\\"><span>          &lt;groupId&gt;org.noear&lt;/groupId&gt;</span></span>\\n<span class=\\"line\\"><span>          &lt;artifactId&gt;snack3&lt;/artifactId&gt;</span></span>\\n<span class=\\"line\\"><span>          &lt;version&gt;3.2.88&lt;/version&gt;</span></span>\\n<span class=\\"line\\"><span>      &lt;/dependency&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>更新日志</p>\\n</li>\\n<li>\\n<p>[feat] json库支持snack3、jackson、fastjson和gson，并且支持扩展</p>\\n</li>\\n<li>\\n<p>[feat] 增加办理人变量表达式，支持${xxx}替换和spel，并支持扩展</p>\\n</li>\\n<li>\\n<p>[feat] ListenerVariable监听器变量新增FlowParams字段，方便开始监听器全局传递参数</p>\\n</li>\\n<li>\\n<p>[feat] 终止新增对开始和完成监听器的支持</p>\\n</li>\\n<li>\\n<p>[update] springboot项目的条件表达式默认支持spel</p>\\n</li>\\n<li>\\n<p>[update] 历史记录改为单条保存，删除重复代码</p>\\n</li>\\n<li>\\n<p>[update] 修改FlowUserDao的bean名称</p>\\n</li>\\n<li>\\n<p>[update] 中间节点拆分为或签，会签，票签</p>\\n</li>\\n<li>\\n<p>[fix] 修复历史记录创建时间相等，导致流程图渲染异常</p>\\n</li>\\n<li>\\n<p>[fix]修复Mybatis逻辑删除变成真实删除的缺陷 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; @xiarigang</p>\\n</li>\\n<li>\\n<p>[refactor] 重构id生成器，支持orm默认策略，删除数据填充默认实现类，改为匿名类</p>\\n</li>\\n</ul>"}');export{h as comp,g as data};

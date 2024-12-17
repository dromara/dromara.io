import{_ as e}from"./TestHub-1.0.2-1-BiVuZ-wF.js";import{_ as t}from"./TestHub-0-2-BMYRXTYK.js";import{_ as a,c as n,a as i,o as p}from"./app-BmgeuuSW.js";const l="/assets/img/news/TestHub-1.0.2-2.jpg",o="/assets/img/news/TestHub-1.0.2-3.jpg",u="/assets/img/news/TestHub-1.0.2-4.jpg",r="/assets/img/news/TestHub-1.0.2-5.jpg",d={};function c(h,s){return p(),n("div",null,s[0]||(s[0]=[i('<h2 id="自动化测试工具-testhub-v1-0-2-版本发布" tabindex="-1"><a class="header-anchor" href="#自动化测试工具-testhub-v1-0-2-版本发布"><span>自动化测试工具：TestHub V1.0.2 版本发布</span></a></h2><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>TestHub 是一款基于流程编排的自动化测试工具。是为了解决在软件开发旅程中测试流程管理和执行的复杂挑战而诞生的。传统测试工具可能局限于接口级自动化，无法满足多样化的需求，而我们在 TestHub 中引入了独特的流程编排功能，让您能够轻松定义、管理和执行测试流程。无论是自动化测试、流程调度还是其他自动化任务，TestHub 的插件式架构都能够满足您的无限扩展需求。</p><p>使用手册：http://nsrule.com/</p><p>演示环境：http://testhub.nsrule.com:11018/#/</p><p>Gitee 开源地址：https://gitee.com/dromara/TestHub</p><p>Gitub 开源地址：https://github.com/dromara/TestHub</p><p>演示视频：https://www.bilibili.com/video/BV1X94y1v7ak/</p><p>安装包：https://url84.ctfile.com/d/49656084-58580094-6ad8ce?p=3738 (访问密码: 3738)</p><p><img src="'+e+'" alt=""></p><h2 id="更新内容" tabindex="-1"><a class="header-anchor" href="#更新内容"><span>更新内容</span></a></h2><ul><li><p>🪲🪲 修复 BUG🪲🪲</p></li><li><p>解决用例类目树超出不显示滚动条的问题</p></li><li><p>修复无法退出登陆的问题</p></li><li><p>修复 HTTP 超时问题</p></li><li><p>👍👍 新增功能 👍👍</p></li><li><p>sql 能力支持同时执行多条 sql</p></li><li><p>实现简单级权限控制</p></li><li><p>后端部分插件化改造</p></li><li><p>提供组件库的功能</p></li><li><p>提供页面配置行为</p></li><li><p>支持配置多环境</p></li></ul><h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h2><h3 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置"><span>环境配置</span></a></h3><p>我们可以在环境设置中配置环境级参数，在测试用例执行的时候选择环境用户切换不同参数 只有管理员可以添加和编辑环境</p><p><img src="'+l+'" alt=""><img src="'+o+'" alt=""></p><h3 id="行为设置" tabindex="-1"><a class="header-anchor" href="#行为设置"><span>行为设置</span></a></h3><p>我们可以在行为设置中看到系统级行为和项目级别行为，其中系统级行为不可以被编辑，项目级行为可由管理员和创建人编辑 <img src="'+u+'" alt=""></p><h3 id="如何退出登陆" tabindex="-1"><a class="header-anchor" href="#如何退出登陆"><span>如何退出登陆</span></a></h3><p><img src="'+r+`" alt=""></p><h2 id="http-如何设置超时时间" tabindex="-1"><a class="header-anchor" href="#http-如何设置超时时间"><span>HTTP 如何设置超时时间</span></a></h2><p>timeout 可以设置 HTTP 的超时时间 单位为秒 超时设置默认 60 秒</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;action code=&quot;order&quot; name=&quot;下单&quot; type=&quot;HTTP&quot; dataType=&quot;map&quot;&gt;</span></span>
<span class="line"><span>    &lt;httpModel url=&quot;http://192.168.0.4:12004/order&quot; method=&quot;post&quot; timeout=&quot;120&quot;&gt;</span></span>
<span class="line"><span>        &lt;headers&gt;</span></span>
<span class="line"><span>            &lt;param code=&quot;Content-Type&quot; dataType=&quot;STRING&quot; data=&quot;application/json;charset=utf-8&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/headers&gt;</span></span>
<span class="line"><span>        &lt;body type=&quot;raw&quot; language=&quot;json&quot;&gt;</span></span>
<span class="line"><span>            &lt;bound&gt;</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                &quot;acctId&quot;: &quot;960307&quot;,</span></span>
<span class="line"><span>                &quot;orderPrice&quot;: &quot;1.8&quot;,</span></span>
<span class="line"><span>                &quot;orderQty&quot;: &quot;100&quot;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            &lt;/bound&gt;</span></span>
<span class="line"><span>        &lt;/body&gt;</span></span>
<span class="line"><span>    &lt;/httpModel&gt;</span></span>
<span class="line"><span>&lt;/action&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql-如何设置自动提交事务-与-如何批量执行" tabindex="-1"><a class="header-anchor" href="#sql-如何设置自动提交事务-与-如何批量执行"><span>SQL 如何设置自动提交事务 与 如何批量执行</span></a></h2><p>commit=&quot;true&quot; 表示自动提交事务 bound 中可以写多条 sql</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;action code=&quot;order&quot; name=&quot;下单&quot; type=&quot;HTTP&quot; dataType=&quot;map&quot;&gt;</span></span>
<span class="line"><span>    &lt;httpModel url=&quot;http://192.168.0.4:12004/order&quot; method=&quot;post&quot; timeout=&quot;120&quot;&gt;</span></span>
<span class="line"><span>        &lt;headers&gt;</span></span>
<span class="line"><span>            &lt;param code=&quot;Content-Type&quot; dataType=&quot;STRING&quot; data=&quot;application/json;charset=utf-8&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/headers&gt;</span></span>
<span class="line"><span>        &lt;body type=&quot;raw&quot; language=&quot;json&quot;&gt;</span></span>
<span class="line"><span>            &lt;bound&gt;</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                &quot;acctId&quot;: &quot;960307&quot;,</span></span>
<span class="line"><span>                &quot;orderPrice&quot;: &quot;1.8&quot;,</span></span>
<span class="line"><span>                &quot;orderQty&quot;: &quot;100&quot;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            &lt;/bound&gt;</span></span>
<span class="line"><span>        &lt;/body&gt;</span></span>
<span class="line"><span>    &lt;/httpModel&gt;</span></span>
<span class="line"><span>&lt;/action&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>[失败女神]-TestHub 开发团队</strong></p><img src="`+t+'" height="340">',28)]))}const v=a(d,[["render",c],["__file","TestHub-1.0.2.html.vue"]]),q=JSON.parse('{"path":"/zh/news/TestHub-1.0.2.html","title":"自动化测试工具：TestHub V1.0.2版本发布","lang":"zh-CN","frontmatter":{"title":"自动化测试工具：TestHub V1.0.2版本发布","author":"TestHub","tag":["TestHub"],"date":"2023-10-31T00:00:00.000Z","cover":"/assets/img/news/TestHub-1.0.2-1.jpg","head":[["meta",{"name":"新闻"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/news/TestHub-1.0.2.html"}],["meta",{"property":"og:title","content":"自动化测试工具：TestHub V1.0.2版本发布"}],["meta",{"property":"og:description","content":"自动化测试工具：TestHub V1.0.2 版本发布 简介 TestHub 是一款基于流程编排的自动化测试工具。是为了解决在软件开发旅程中测试流程管理和执行的复杂挑战而诞生的。传统测试工具可能局限于接口级自动化，无法满足多样化的需求，而我们在 TestHub 中引入了独特的流程编排功能，让您能够轻松定义、管理和执行测试流程。无论是自动化测试、流程调度..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/TestHub-1.0.2-1.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-19T11:30:23.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/TestHub-1.0.2-1.jpg"}],["meta",{"name":"twitter:image:alt","content":"自动化测试工具：TestHub V1.0.2版本发布"}],["meta",{"property":"article:author","content":"TestHub"}],["meta",{"property":"article:tag","content":"TestHub"}],["meta",{"property":"article:published_time","content":"2023-10-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-19T11:30:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自动化测试工具：TestHub V1.0.2版本发布\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/TestHub-1.0.2-1.jpg\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/TestHub-1.0.2-2.jpg\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/TestHub-1.0.2-3.jpg\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/TestHub-1.0.2-4.jpg\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/TestHub-1.0.2-5.jpg\\"],\\"datePublished\\":\\"2023-10-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-19T11:30:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TestHub\\"}]}"]],"description":"自动化测试工具：TestHub V1.0.2 版本发布 简介 TestHub 是一款基于流程编排的自动化测试工具。是为了解决在软件开发旅程中测试流程管理和执行的复杂挑战而诞生的。传统测试工具可能局限于接口级自动化，无法满足多样化的需求，而我们在 TestHub 中引入了独特的流程编排功能，让您能够轻松定义、管理和执行测试流程。无论是自动化测试、流程调度..."},"headers":[{"level":2,"title":"自动化测试工具：TestHub V1.0.2 版本发布","slug":"自动化测试工具-testhub-v1-0-2-版本发布","link":"#自动化测试工具-testhub-v1-0-2-版本发布","children":[]},{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"更新内容","slug":"更新内容","link":"#更新内容","children":[]},{"level":2,"title":"如何使用","slug":"如何使用","link":"#如何使用","children":[{"level":3,"title":"环境配置","slug":"环境配置","link":"#环境配置","children":[]},{"level":3,"title":"行为设置","slug":"行为设置","link":"#行为设置","children":[]},{"level":3,"title":"如何退出登陆","slug":"如何退出登陆","link":"#如何退出登陆","children":[]}]},{"level":2,"title":"HTTP 如何设置超时时间","slug":"http-如何设置超时时间","link":"#http-如何设置超时时间","children":[]},{"level":2,"title":"SQL 如何设置自动提交事务 与 如何批量执行","slug":"sql-如何设置自动提交事务-与-如何批量执行","link":"#sql-如何设置自动提交事务-与-如何批量执行","children":[]}],"git":{"createdTime":1698980826000,"updatedTime":1724067023000,"contributors":[{"name":"itanxyu","username":"itanxyu","email":"itanxy@126.com","commits":1,"url":"https://github.com/itanxyu"},{"name":"Cicici-Shi","username":"Cicici-Shi","email":"1901177100@qq.com","commits":1,"url":"https://github.com/Cicici-Shi"}]},"readingTime":{"minutes":2.22,"words":667},"filePathRelative":"zh/news/TestHub-1.0.2.md","localizedDate":"2023年10月31日","autoDesc":true,"excerpt":"<h2>自动化测试工具：TestHub V1.0.2 版本发布</h2>\\n<h2>简介</h2>\\n<p>TestHub 是一款基于流程编排的自动化测试工具。是为了解决在软件开发旅程中测试流程管理和执行的复杂挑战而诞生的。传统测试工具可能局限于接口级自动化，无法满足多样化的需求，而我们在 TestHub 中引入了独特的流程编排功能，让您能够轻松定义、管理和执行测试流程。无论是自动化测试、流程调度还是其他自动化任务，TestHub 的插件式架构都能够满足您的无限扩展需求。</p>\\n<p>使用手册：http://nsrule.com/</p>\\n<p>演示环境：http://testhub.nsrule.com:11018/#/</p>"}');export{v as comp,q as data};

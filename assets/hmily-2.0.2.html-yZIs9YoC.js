import{_ as i,c as s,a,o as l}from"./app-9PLcrqAY.js";const t={};function n(r,e){return l(),s("div",null,e[0]||(e[0]=[a(`<h2 id="hmily-released-2-0-2-release" tabindex="-1"><a class="header-anchor" href="#hmily-released-2-0-2-release"><span>Hmily released 2.0.2-Release</span></a></h2><ul><li><p>Resolved the issue of SpringCloud using Hystrix to configure thread pool.</p></li><li><p>New issue with SpringCloud embedded transaction calls.</p></li><li><p>Added Hmily load balancing strategy.</p></li><li><p>Other bug fixes and code optimizations.</p></li><li><p>Remove unnecessary third-party JAR packages.</p></li><li><p>Introduction of zero intrusion mode.</p></li></ul><h2 id="hmily-s-support-for-the-popular-rpc-framework-and-spring" tabindex="-1"><a class="header-anchor" href="#hmily-s-support-for-the-popular-rpc-framework-and-spring"><span>Hmily&#39;s support for the popular RPC framework and Spring.</span></a></h2><ul><li><p>Dubbo 2.7.0 for all versions below.</p></li><li><p>SpringCloud Dalston and above, including support for Finchley and Greenwich</p></li><li><p>All versions of Motan.</p></li><li><p>All Spring versions up to 3.0.</p></li></ul><h2 id="hmily-has-a-load-balancing-policy-for-user-rpc-clusters-in-version-2-0-2" tabindex="-1"><a class="header-anchor" href="#hmily-has-a-load-balancing-policy-for-user-rpc-clusters-in-version-2-0-2"><span>Hmily has a load-balancing policy for user RPC clusters in version 2.0.2.</span></a></h2><ul><li><p>Hmily provides its own implementation of the load-balancing strategy, only for interfaces with @Hmily added</p><p>Dubbo cluster configuration with loadbalance=&quot;hmily&quot;</p></li></ul><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dubbo:reference</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> timeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;50000&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">       interface</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;org.dromara.hmily.demo.dubbo.account.api.service.AccountService&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">             id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;accountService&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">                 retries</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;0&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> check</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;false&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> actives</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;20&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> loadbalance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;hmily&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Spring Cloud added to the caller&#39;s YML configuration file:</p><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">hmily ：</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">   ribbon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      rule</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> : </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="documents" tabindex="-1"><a class="header-anchor" href="#documents"><span>Documents</span></a></h2><ul><li><p>Official document: https://dromara.org/website/zh-cn/docs/hmily/index.html</p></li><li><p>Github: https://github.com/yu199195/hmily</p></li><li><p>Gitee: https://gitee.com/dromara/hmily</p><p>Welcome to Star Fork, provide excellent code and suggestions.</p></li></ul>`,11)]))}const p=i(t,[["render",n],["__file","hmily-2.0.2.html.vue"]]),h=JSON.parse(`{"path":"/news/hmily-2.0.2.html","title":"Hmily released 2.0.2-Release","lang":"en-US","frontmatter":{"title":"Hmily released 2.0.2-Release","author":"xiaoyu","tag":["hmily"],"date":"2019-04-05T00:00:00.000Z","cover":"/assets/img/architecture/hmily-framework.png","head":[["meta",{"name":"News"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/news/hmily-2.0.2.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/news/hmily-2.0.2.html"}],["meta",{"property":"og:title","content":"Hmily released 2.0.2-Release"}],["meta",{"property":"og:description","content":"Hmily released 2.0.2-Release Resolved the issue of SpringCloud using Hystrix to configure thread pool. New issue with SpringCloud embedded transaction calls. Added Hmily load ba..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/architecture/hmily-framework.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-04T07:29:42.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/architecture/hmily-framework.png"}],["meta",{"name":"twitter:image:alt","content":"Hmily released 2.0.2-Release"}],["meta",{"property":"article:author","content":"xiaoyu"}],["meta",{"property":"article:tag","content":"hmily"}],["meta",{"property":"article:published_time","content":"2019-04-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-04T07:29:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hmily released 2.0.2-Release\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/architecture/hmily-framework.png\\"],\\"datePublished\\":\\"2019-04-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-04T07:29:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xiaoyu\\"}]}"]],"description":"Hmily released 2.0.2-Release Resolved the issue of SpringCloud using Hystrix to configure thread pool. New issue with SpringCloud embedded transaction calls. Added Hmily load ba..."},"headers":[{"level":2,"title":"Hmily released 2.0.2-Release","slug":"hmily-released-2-0-2-release","link":"#hmily-released-2-0-2-release","children":[]},{"level":2,"title":"Hmily's support for the popular RPC framework and Spring.","slug":"hmily-s-support-for-the-popular-rpc-framework-and-spring","link":"#hmily-s-support-for-the-popular-rpc-framework-and-spring","children":[]},{"level":2,"title":"Hmily has a load-balancing policy for user RPC clusters in version 2.0.2.","slug":"hmily-has-a-load-balancing-policy-for-user-rpc-clusters-in-version-2-0-2","link":"#hmily-has-a-load-balancing-policy-for-user-rpc-clusters-in-version-2-0-2","children":[]},{"level":2,"title":"Documents","slug":"documents","link":"#documents","children":[]}],"git":{"createdTime":1693309054000,"updatedTime":1693812582000,"contributors":[{"name":"Cicici-Shi","username":"Cicici-Shi","email":"94002846+Cicici-Shi@users.noreply.github.com","commits":1,"url":"https://github.com/Cicici-Shi"},{"name":"Cici","username":"Cici","email":"1901177100@qq.com","commits":1,"url":"https://github.com/Cici"}]},"readingTime":{"minutes":0.63,"words":190},"filePathRelative":"news/hmily-2.0.2.md","localizedDate":"April 5, 2019","autoDesc":true,"excerpt":"<h2>Hmily released 2.0.2-Release</h2>\\n<ul>\\n<li>\\n<p>Resolved the issue of SpringCloud using Hystrix to configure thread pool.</p>\\n</li>\\n<li>\\n<p>New issue with SpringCloud embedded transaction calls.</p>\\n</li>\\n<li>\\n<p>Added Hmily load balancing strategy.</p>\\n</li>\\n<li>\\n<p>Other bug fixes and code optimizations.</p>\\n</li>\\n<li>\\n<p>Remove unnecessary third-party JAR packages.</p>\\n</li>\\n<li>\\n<p>Introduction of zero intrusion mode.</p>\\n</li>\\n</ul>"}`);export{p as comp,h as data};
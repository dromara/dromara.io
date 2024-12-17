import{_ as n}from"./FreeNginx-0-4DvT6dxL.js";import{_ as t,c as o,a as i,o as a}from"./app-BmgeuuSW.js";const r={};function s(l,e){return a(),o("div",null,e[0]||(e[0]=[i('<p><img src="'+n+'" alt=""></p><h2 id="timeline" tabindex="-1"><a class="header-anchor" href="#timeline"><span>Timeline</span></a></h2><p>On March 11, 2019, F5 Networks announced the acquisition of Nginx for $0.67 billion.</p><blockquote><p>2022.01.18, NGINX founder Igor Sysoev left NGINX and F5: &quot;Igor Sysoev chose to leave F5 in order to spend more time with family and friends, as well as personal projects. Thank him for everything he has done to make websites around the world better.&quot;</p></blockquote><p>On Valentine&#39;s Day 2024.2.14, Maxim Dounin, one of the longtime core developers of nginx, announced the creation of a new fork project called Freenginx.</p><h2 id="he-said-when-he-announced-the-freenginx" tabindex="-1"><a class="header-anchor" href="#he-said-when-he-announced-the-freenginx"><span>He said when he announced the Freenginx</span></a></h2><p>As you may know, F5 closed its Moscow office in 2022, and I have not worked for F5 since then. However, we have reached an agreement that I will continue to participate as a volunteer in nginx development. In the past two years, I have been working on improving nginx and providing better nginx for everyone for free. Unfortunately, some of F5&#39;s new non-technical executives recently decided to interfere with the security policies used by nginx for years, ignoring both policy and developer positions.</p><p>It&#39;s easy to understand: they own the project and can do anything with it, including market-oriented behavior that ignores the positions of developers and the community. However, this still contradicts our agreement. More importantly, I can no longer control changes to nginx within F5 and no longer view nginx as a free and open source project developed and maintained for the public good.</p><p>Therefore, as of today, I will no longer be involved in nginx development run by F5. Instead, I&#39;ll start another project, run by a developer rather than a corporate entity.</p><p>The goal is to make nginx development unaffected by arbitrary company actions. Help and contributions are welcome. I hope everyone can benefit from it.</p><h2 id="short-statement-on-freenginx-org" tabindex="-1"><a class="header-anchor" href="#short-statement-on-freenginx-org"><span>Short statement on freenginx.org</span></a></h2><p>The goal of freenginx.org is to make nginx development independent of arbitrary corporate actions.</p><blockquote><blockquote></blockquote><p>! <a href="/assets/img/news/FreeNginx-1.png"></a></p></blockquote><h2 id="open-source-and-commercial" tabindex="-1"><a class="header-anchor" href="#open-source-and-commercial"><span>Open Source and Commercial</span></a></h2><p>Different interests and goals determine the different development directions of open source projects, which is not good or bad.</p><blockquote><p>as a commercial company, F5, after all, spent so much money on nginx and paid the cost of full-time personnel. this definitely needs to be considered in the direction of commercialization, hoping to find a balance between commerce and open source.</p></blockquote><blockquote><p>Maxim Dounin has a free ideal garden for developers. looking at the development of open source projects from the perspective of developers, nginx can be more open and free, and the direction is controlled by the community. I also hope that the freenginx will develop smoothly.</p></blockquote><p><strong>oracle-jdk vs openjdk, mysql vs mariadb</strong>, now with <strong>nginx vs freenginx</strong>, we can now start to pay attention to the future development of <strong>Freenginx</strong> and see how many other developers will focus on this new fork in the future.</p><h2 id="nginx-edge-off-ads-use-hertzbeat-to-quickly-monitor-nginx" tabindex="-1"><a class="header-anchor" href="#nginx-edge-off-ads-use-hertzbeat-to-quickly-monitor-nginx"><span>Nginx edge-off ads, use HertzBeat to quickly monitor Nginx</span></a></h2><blockquote><p>HertzBeat is our 1 open source real-time monitoring system, without Agent, performance cluster, compatible Prometheus, custom monitoring and status page construction capabilities. <strong>https://github.com/dromara/hertzbeat</strong></p></blockquote><blockquote><p>It supports monitoring of application services, applications, databases, caches, operating systems, big data, middleware, web servers, cloud native, network, customization, etc.</p><blockquote></blockquote><p>The following advertisement demonstrates how to quickly monitor the Nginx service status if using HertzBeat.</p></blockquote><h3 id="_1-deployment-hertzbeat" tabindex="-1"><a class="header-anchor" href="#_1-deployment-hertzbeat"><span>1. Deployment HertzBeat</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat tancloud/hertzbeat</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-deploying-nginx" tabindex="-1"><a class="header-anchor" href="#_2-deploying-nginx"><span>2. Deploying Nginx</span></a></h3><p>By default, the availability of Nginx is monitored. If more metrics are monitored, the ‘ngx_http_stub_status_module’ and &#39;ngx_http_reqstat_module&#39; monitoring modules of Nginx must be enabled.</p><p><strong>Open Reference Document: https://hertzbeat.com/zh-cn/docs/help/nginx /</strong></p><h3 id="_3-add-nginx-monitoring-to-the-hertzbeat" tabindex="-1"><a class="header-anchor" href="#_3-add-nginx-monitoring-to-the-hertzbeat"><span>3. Add Nginx monitoring to the HertzBeat</span></a></h3><p>Access the HertzBeat control page, add peer-to-peer Nginx monitoring in Application Service Monitoring-&gt; Nginx Server, and configure parameters such as the peer IP port. (By the way, Docker&#39;s default network environment localhost not available locally)</p><p>! <a href="/assets/img/news/FreeNginx-2.png"></a></p><p>After confirming the addition, it will be OK. Later, we can see the relevant indicator data status of Nginx, and we can also set * * alarm threshold notification * *, etc. * * when Nginx hangs up or an indicator is abnormally high, we will be notified by email DingTalk WeChat, etc * *.</p><p>! <a href="/assets/img/news/FreeNginx-3.png"></a></p><p>! <a href="/assets/img/news/FreeNginx-4.png"></a></p><p>! <a href="/assets/img/news/FreeNginx-5.png"></a></p><ul><li><ul><li>10 minutes, come and use the HertzBeat 24 hours to automatically observe your Nginx status * *</li></ul></li></ul><p>At Github Star we!</p><p><strong>https://github.com/dromara/hertzbeat</strong></p><p><strong>https://gitee.com/dromara/hertzbeat</strong></p><blockquote><p>Part of the content comes from https://www.msn.com/zh-cn/channel/source/cnBeta. COM</p></blockquote>',38)]))}const h=t(r,[["render",s],["__file","FreeNginx.html.vue"]]),d=JSON.parse(`{"path":"/news/FreeNginx.html","title":"Valentine's Day Is Breaking Up, Here FreeNginx Come","lang":"en-US","frontmatter":{"title":"Valentine's Day Is Breaking Up, Here FreeNginx Come","author":"tom","date":"2024-02-16T00:00:00.000Z","cover":"/assets/img/news/FreeNginx-0.png","head":[["meta",{"name":"News"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/news/FreeNginx.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/news/FreeNginx.html"}],["meta",{"property":"og:title","content":"Valentine's Day Is Breaking Up, Here FreeNginx Come"}],["meta",{"property":"og:description","content":"Timeline On March 11, 2019, F5 Networks announced the acquisition of Nginx for $0.67 billion. 2022.01.18, NGINX founder Igor Sysoev left NGINX and F5: \\"Igor Sysoev chose to leav..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/FreeNginx-0.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-17T16:37:54.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/FreeNginx-0.png"}],["meta",{"name":"twitter:image:alt","content":"Valentine's Day Is Breaking Up, Here FreeNginx Come"}],["meta",{"property":"article:author","content":"tom"}],["meta",{"property":"article:published_time","content":"2024-02-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-17T16:37:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Valentine's Day Is Breaking Up, Here FreeNginx Come\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/FreeNginx-0.png\\"],\\"datePublished\\":\\"2024-02-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-17T16:37:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"tom\\"}]}"]],"description":"Timeline On March 11, 2019, F5 Networks announced the acquisition of Nginx for $0.67 billion. 2022.01.18, NGINX founder Igor Sysoev left NGINX and F5: \\"Igor Sysoev chose to leav..."},"headers":[{"level":2,"title":"Timeline","slug":"timeline","link":"#timeline","children":[]},{"level":2,"title":"He said when he announced the Freenginx","slug":"he-said-when-he-announced-the-freenginx","link":"#he-said-when-he-announced-the-freenginx","children":[]},{"level":2,"title":"Short statement on freenginx.org","slug":"short-statement-on-freenginx-org","link":"#short-statement-on-freenginx-org","children":[]},{"level":2,"title":"Open Source and Commercial","slug":"open-source-and-commercial","link":"#open-source-and-commercial","children":[]},{"level":2,"title":"Nginx edge-off ads, use HertzBeat to quickly monitor Nginx","slug":"nginx-edge-off-ads-use-hertzbeat-to-quickly-monitor-nginx","link":"#nginx-edge-off-ads-use-hertzbeat-to-quickly-monitor-nginx","children":[{"level":3,"title":"1. Deployment HertzBeat","slug":"_1-deployment-hertzbeat","link":"#_1-deployment-hertzbeat","children":[]},{"level":3,"title":"2. Deploying Nginx","slug":"_2-deploying-nginx","link":"#_2-deploying-nginx","children":[]},{"level":3,"title":"3. Add Nginx monitoring to the HertzBeat","slug":"_3-add-nginx-monitoring-to-the-hertzbeat","link":"#_3-add-nginx-monitoring-to-the-hertzbeat","children":[]}]}],"git":{"createdTime":1723712940000,"updatedTime":1723912674000,"contributors":[{"name":"itanxyu","username":"itanxyu","email":"itanxy@126.com","commits":2,"url":"https://github.com/itanxyu"}]},"readingTime":{"minutes":2.5,"words":750},"filePathRelative":"news/FreeNginx.md","localizedDate":"February 16, 2024","autoDesc":true,"excerpt":"<p><img src=\\"/assets/img/news/FreeNginx-0.png\\" alt=\\"\\"></p>\\n<h2>Timeline</h2>\\n<p>On March 11, 2019, F5 Networks announced the acquisition of Nginx for $0.67 billion.</p>\\n<blockquote>\\n<p>2022.01.18, NGINX founder Igor Sysoev left NGINX and F5: \\"Igor Sysoev chose to leave F5 in order to spend more time with family and friends, as well as personal projects. Thank him for everything he has done to make websites around the world better.\\"</p>\\n</blockquote>"}`);export{h as comp,d as data};

import{_ as a,a as s,b as t}from"./Newcar-2.0.0-2-CxfJ7vtw.js";import{_ as n,c as i,a as r,o as p}from"./app-9PLcrqAY.js";const l={};function c(d,e){return p(),i("div",null,e[0]||(e[0]=[r('<p><img src="'+a+`" alt=""></p><p>Newcar在经历了原生Canvas -&gt; Skia的进展过程将会在2.0.0版本结束，至此Newcar已重构完毕，相比于1.0, newcar用更优雅，性能更高的方式实现了内核的重写以及API的重设计</p><p><strong>https://newcar.js.org/</strong></p><h2 id="reactivity-响应式的按需更新" tabindex="-1"><a class="header-anchor" href="#reactivity-响应式的按需更新"><span>Reactivity --- 响应式的按需更新</span></a></h2><p>我们模仿了Vue的响应式设计，并把它用在Newcar的按需更新上，让程序运行更加的高效</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const widget = new Widget()</span></span>
<span class="line"><span>widget.x.value = 100</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>缺点：需要使用 <code>.value</code> 进行值的访问和修改</p><h2 id="setup语法糖" tabindex="-1"><a class="header-anchor" href="#setup语法糖"><span>Setup语法糖</span></a></h2><p>传统的动画需要一个一个进行animate,而且修改单个值特别麻烦，有了setup语法糖，就可以通过生成器函数逐个逐个的调用动画</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>widget.setup(w =&gt; {</span></span>
<span class="line"><span>     yield 3 // 等待3秒</span></span>
<span class="line"><span>     console.log(&#39;Hello world!&#39;)</span></span>
<span class="line"><span>     // 执行动画</span></span>
<span class="line"><span>     yield create().withAttr({ duration: 3 })</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件系统" tabindex="-1"><a class="header-anchor" href="#事件系统"><span>事件系统</span></a></h2><p>Newcar相比于Manim最大的好处就是可以进行交互，这也是前端的一大优势</p><h2 id="交互" tabindex="-1"><a class="header-anchor" href="#交互"><span>交互</span></a></h2><p>新版本增加了交互系统，如 <code>scalable</code>, 可以让用户自由缩放组件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>new Widget({</span></span>
<span class="line"><span>    dragable: true,</span></span>
<span class="line"><span>    scalable: true,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[https://github.com/dromara/newcar](https://github.com/dromara/newcar)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="公告" tabindex="-1"><a class="header-anchor" href="#公告"><span>公告</span></a></h2><p>因为Newcar团队的高中生占了80%，开学后无法连续长时间维护项目，所以发布此条公告，希望能找到人来长期维护。</p><p><img src="`+s+'" alt=""></p><p><img src="'+t+'" alt=""></p>',19)]))}const m=n(l,[["render",c],["__file","Newcar-2.0.0.html.vue"]]),g=JSON.parse('{"path":"/zh/news/Newcar-2.0.0.html","title":"Newcar 2.0.0 Beta 版本发布！","lang":"zh-CN","frontmatter":{"title":"Newcar 2.0.0 Beta 版本发布！","author":"Newcar","date":"2024-07-24T00:00:00.000Z","cover":"/assets/img/news/Newcar-2.0.0-0.png","head":[["meta",{"name":"新闻"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope-docs-demo.netlify.app/news/Newcar-2.0.0.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/news/Newcar-2.0.0.html"}],["meta",{"property":"og:title","content":"Newcar 2.0.0 Beta 版本发布！"}],["meta",{"property":"og:description","content":"Newcar在经历了原生Canvas -> Skia的进展过程将会在2.0.0版本结束，至此Newcar已重构完毕，相比于1.0, newcar用更优雅，性能更高的方式实现了内核的重写以及API的重设计 https://newcar.js.org/ Reactivity --- 响应式的按需更新 我们模仿了Vue的响应式设计，并把它用在Newcar的按..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/Newcar-2.0.0-0.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-19T11:30:23.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/Newcar-2.0.0-0.png"}],["meta",{"name":"twitter:image:alt","content":"Newcar 2.0.0 Beta 版本发布！"}],["meta",{"property":"article:author","content":"Newcar"}],["meta",{"property":"article:published_time","content":"2024-07-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-19T11:30:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Newcar 2.0.0 Beta 版本发布！\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/Newcar-2.0.0-0.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/Newcar-2.0.0-1.jfif\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/Newcar-2.0.0-2.jfif\\"],\\"datePublished\\":\\"2024-07-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-19T11:30:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Newcar\\"}]}"]],"description":"Newcar在经历了原生Canvas -> Skia的进展过程将会在2.0.0版本结束，至此Newcar已重构完毕，相比于1.0, newcar用更优雅，性能更高的方式实现了内核的重写以及API的重设计 https://newcar.js.org/ Reactivity --- 响应式的按需更新 我们模仿了Vue的响应式设计，并把它用在Newcar的按..."},"headers":[{"level":2,"title":"Reactivity --- 响应式的按需更新","slug":"reactivity-响应式的按需更新","link":"#reactivity-响应式的按需更新","children":[]},{"level":2,"title":"Setup语法糖","slug":"setup语法糖","link":"#setup语法糖","children":[]},{"level":2,"title":"事件系统","slug":"事件系统","link":"#事件系统","children":[]},{"level":2,"title":"交互","slug":"交互","link":"#交互","children":[]},{"level":2,"title":"公告","slug":"公告","link":"#公告","children":[]}],"git":{"createdTime":1723912674000,"updatedTime":1724067023000,"contributors":[{"name":"itanxyu","username":"itanxyu","email":"itanxy@126.com","commits":2,"url":"https://github.com/itanxyu"}]},"readingTime":{"minutes":1.17,"words":350},"filePathRelative":"zh/news/Newcar-2.0.0.md","localizedDate":"2024年7月24日","autoDesc":true,"excerpt":"<p><img src=\\"/assets/img/news/Newcar-2.0.0-0.png\\" alt=\\"\\"></p>\\n<p>Newcar在经历了原生Canvas -&gt; Skia的进展过程将会在2.0.0版本结束，至此Newcar已重构完毕，相比于1.0, newcar用更优雅，性能更高的方式实现了内核的重写以及API的重设计</p>\\n<p><strong>https://newcar.js.org/</strong></p>\\n<h2>Reactivity --- 响应式的按需更新</h2>\\n<p>我们模仿了Vue的响应式设计，并把它用在Newcar的按需更新上，让程序运行更加的高效</p>"}');export{m as comp,g as data};
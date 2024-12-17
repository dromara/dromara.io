import{_ as n,a as s}from"./electron-egg-3.10.0-1-BHa40Xwf.js";import{_ as a,c as i,a as t,o as l}from"./app-BmgeuuSW.js";const r="/assets/img/news/electron-egg-3.9.0-2.jpg",p="/assets/img/news/electron-egg-3.9.0-3.png",o={};function c(d,e){return l(),i("div",null,e[0]||(e[0]=[t('<p>大家好，<code>electron-egg 3.9.0</code> 重大更新。</p><p>在这个版本里我们做了重大更新，支持了 <code>go</code> 语言，天生的跨平台、高性能，可以把核心业务用 go 来写，能极大提升了软件体验。</p><p>目前，框架已经广泛应用于记账、政务、企业、医疗、学校、股票交易、ERP、娱乐、视频等领域客户端，请放心使用！</p><p><img src="'+n+`" alt=""></p><h3 id="为什么使用" tabindex="-1"><a class="header-anchor" href="#为什么使用"><span>为什么使用</span></a></h3><p>桌面软件（办公方向、 个人工具），仍然是未来十几年 PC 端需求之一，提高工作效率</p><p>electron 技术是流行趋势，QQ、百度翻译、阿里网盘、迅雷、有道云笔记 ......</p><h3 id="开源" tabindex="-1"><a class="header-anchor" href="#开源"><span>开源</span></a></h3><p>gitee：https://gitee.com/dromara/electron-egg 4200+</p><p>github：https://github.com/dromara/electron-egg 1300+</p><h3 id="本次更新" tabindex="-1"><a class="header-anchor" href="#本次更新"><span>本次更新</span></a></h3><h3 id="_3-9-0" tabindex="-1"><a class="header-anchor" href="#_3-9-0"><span>3.9.0</span></a></h3><p><strong>【重大更新】</strong></p><ol><li>【增加】新增 ee-go 模块，支持 go 语言，以及众多功能。</li><li>【增加】新增 ee-bin dev for go。</li><li>【增加】新增 ee-bin dev 配置 electron.loadingPage。</li><li>【增加】新增 ee-core cross 模块，支持跨语言服务。</li><li>【增加】新增 ee-core 生产环境配置 loadingPage。</li><li>【优化】优化 ee-bin dev --serve 支持自定义命令。</li><li>【优化】优化 ee-bin exec --cmds 支持自定义命令。</li><li>【优化】优化 ee-bin build --cmds 支持自定义命令。</li><li>【升级】升级 ee-core v2.7.1，升级 ee-bin v1.4.0</li></ol><h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># gitee</span></span>
<span class="line"><span>git clone https://gitee.com/dromara/electron-egg.git</span></span>
<span class="line"><span></span></span>
<span class="line"><span># github</span></span>
<span class="line"><span>git clone https://github.com/dromara/electron-egg.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 设置国内镜像源(加速)</span></span>
<span class="line"><span>npm config set registry=https://registry.npmmirror.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#如果下载electron慢，配置如下</span></span>
<span class="line"><span>npm config set electron_mirror=https://registry.npmmirror.com/-/binary/electron/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 根目录，安装 electron 依赖</span></span>
<span class="line"><span>npm i</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 进入【前端目录】安装 frontend 依赖</span></span>
<span class="line"><span>cd frontend</span></span>
<span class="line"><span>npm i</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行项目" tabindex="-1"><a class="header-anchor" href="#运行项目"><span>运行项目</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npm run start</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="`+s+'" alt=""></span></a></h2><h3 id="用户案例" tabindex="-1"><a class="header-anchor" href="#用户案例"><span>用户案例</span></a></h3><p><img src="'+r+'" alt=""></p><p><img src="'+p+'" alt=""></p><h3 id="更多" tabindex="-1"><a class="header-anchor" href="#更多"><span>更多</span></a></h3><p>访问官网：https://www.kaka996.com/</p>',26)]))}const m=a(o,[["render",c],["__file","electron-egg-3.9.0.html.vue"]]),u=JSON.parse('{"path":"/zh/news/electron-egg-3.9.0.html","title":"ElectronEgg v3.9.0 发布，快速开发一个桌面应用","lang":"zh-CN","frontmatter":{"title":"ElectronEgg v3.9.0 发布，快速开发一个桌面应用","author":"electron-egg","date":"2023-12-26T00:00:00.000Z","cover":"/assets/img/news/electron-egg-3.10.0-0.png","head":[["meta",{"name":"新闻"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/news/electron-egg-3.9.0.html"}],["meta",{"property":"og:title","content":"ElectronEgg v3.9.0 发布，快速开发一个桌面应用"}],["meta",{"property":"og:description","content":"大家好，electron-egg 3.9.0 重大更新。 在这个版本里我们做了重大更新，支持了 go 语言，天生的跨平台、高性能，可以把核心业务用 go 来写，能极大提升了软件体验。 目前，框架已经广泛应用于记账、政务、企业、医疗、学校、股票交易、ERP、娱乐、视频等领域客户端，请放心使用！ 为什么使用 桌面软件（办公方向、 个人工具），仍然是未来十几..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/electron-egg-3.10.0-0.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-22T15:09:27.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/electron-egg-3.10.0-0.png"}],["meta",{"name":"twitter:image:alt","content":"ElectronEgg v3.9.0 发布，快速开发一个桌面应用"}],["meta",{"property":"article:author","content":"electron-egg"}],["meta",{"property":"article:published_time","content":"2023-12-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-22T15:09:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ElectronEgg v3.9.0 发布，快速开发一个桌面应用\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/electron-egg-3.10.0-0.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/electron-egg-3.10.0-1.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/electron-egg-3.9.0-2.jpg\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/electron-egg-3.9.0-3.png\\"],\\"datePublished\\":\\"2023-12-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-22T15:09:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"electron-egg\\"}]}"]],"description":"大家好，electron-egg 3.9.0 重大更新。 在这个版本里我们做了重大更新，支持了 go 语言，天生的跨平台、高性能，可以把核心业务用 go 来写，能极大提升了软件体验。 目前，框架已经广泛应用于记账、政务、企业、医疗、学校、股票交易、ERP、娱乐、视频等领域客户端，请放心使用！ 为什么使用 桌面软件（办公方向、 个人工具），仍然是未来十几..."},"headers":[{"level":3,"title":"为什么使用","slug":"为什么使用","link":"#为什么使用","children":[]},{"level":3,"title":"开源","slug":"开源","link":"#开源","children":[]},{"level":3,"title":"本次更新","slug":"本次更新","link":"#本次更新","children":[]},{"level":3,"title":"3.9.0","slug":"_3-9-0","link":"#_3-9-0","children":[]},{"level":3,"title":"下载","slug":"下载","link":"#下载","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"运行项目","slug":"运行项目","link":"#运行项目","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[{"level":3,"title":"用户案例","slug":"用户案例","link":"#用户案例","children":[]},{"level":3,"title":"更多","slug":"更多","link":"#更多","children":[]}]}],"git":{"createdTime":1708614567000,"updatedTime":1708614567000,"contributors":[{"name":"Cicici-Shi","username":"Cicici-Shi","email":"1901177100@qq.com","commits":1,"url":"https://github.com/Cicici-Shi"},{"name":"tomsun28","username":"tomsun28","email":"tomsun28@outlook.com","commits":1,"url":"https://github.com/tomsun28"}]},"readingTime":{"minutes":1.52,"words":457},"filePathRelative":"zh/news/electron-egg-3.9.0.md","localizedDate":"2023年12月26日","autoDesc":true,"excerpt":"<p>大家好，<code>electron-egg 3.9.0</code> 重大更新。</p>\\n<p>在这个版本里我们做了重大更新，支持了 <code>go</code> 语言，天生的跨平台、高性能，可以把核心业务用 go 来写，能极大提升了软件体验。</p>\\n<p>目前，框架已经广泛应用于记账、政务、企业、医疗、学校、股票交易、ERP、娱乐、视频等领域客户端，请放心使用！</p>\\n<p><img src=\\"/assets/img/news/electron-egg-3.10.0-0.png\\" alt=\\"\\"></p>\\n<h3>为什么使用</h3>\\n<p>桌面软件（办公方向、 个人工具），仍然是未来十几年 PC 端需求之一，提高工作效率</p>"}');export{m as comp,u as data};

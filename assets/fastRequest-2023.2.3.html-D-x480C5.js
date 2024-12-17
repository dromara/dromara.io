import{_ as s,c as t,a,o as n}from"./app-BmgeuuSW.js";const p="/assets/img/news/fastRequest-2023.2.3-0.png",r="/assets/img/news/fastRequest-2023.2.3-1.png",i="/assets/img/news/fastRequest-2023.2.3-2.png",o="/assets/img/news/fastRequest-2023.2.3-3.png",l="/assets/img/news/fastRequest-2023.2.3-4.png",m="/assets/img/news/fastRequest-2023.2.3-5.png",g="/assets/img/news/fastRequest-2023.2.3-6.png",u="/assets/img/news/fastRequest-2023.2.3-7.png",c="/assets/img/news/fastRequest-2023.2.3-8.png",d={};function h(f,e){return n(),t("div",null,e[0]||(e[0]=[a('<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h1><p><strong>Restful Fast Request</strong> 是一个类似于 Postman 的 IDEA 插件。它是一个强大的 restful api 工具包插件，可以根据已有的方法帮助您快速、自动生成 url 和 params。Restful Fast Request = API 调试工具 + API 管理工具 + API 搜索工具。它有一个漂亮的界面来完成请求、检查服务器响应、存储你的 api 请求和导出 api 请求。插件帮助你在 IDEA 界面内更快更高效得调试你的 API。</p><p><strong>最新域名</strong>：<strong>api-buddy.cn</strong></p><p><strong>Restful Fast Request 为简化 API 调试而生，3 秒调完 Spring 接口不是梦</strong>，所以少年，赶紧<strong>上号</strong>吧</p><p><strong>倾听用户的声音，不断提升自我</strong>，本次<strong>Restful Fast Request</strong>更新主要内容如下：</p><p><strong>重要功能、新功能、优化项、修复项</strong></p><ul><li><strong>feat:API 同步至 Postman</strong></li><li><strong>feat:自动域名切换项目名下拉框自动切换</strong></li><li><strong>feat:Markdown 文档模板配置</strong></li><li><strong>feat:JSON5 支持</strong></li><li><strong>perf:Environment 重构</strong></li><li><strong>perf:项目域名添加优化</strong></li><li><strong>perf:api 文档同步触发在 api 保存的时候</strong></li><li><strong>perf:忽略字段使用 @fastRequestParseIgnore</strong></li><li><strong>fix:SearchEveryWhere 兼容 idea2023.3</strong></li><li><strong>fix:body 中传非 json 报错</strong></li><li><strong>fix:历史请求显示错误</strong></li></ul><h2 id="_1-api-同步至-postman" tabindex="-1"><a class="header-anchor" href="#_1-api-同步至-postman"><span>1. API 同步至 Postman</span></a></h2><p>仅需配置 Postman 的 token 和对应 workspace 的 ID，再点击保存或同步按钮。即可将 API 上传到 Postman.无需额外操作。</p><p>同时支持了 Environment 变量的上传和域名的变量上传。</p><p><img src="'+p+'" alt=""></p><p><img src="'+r+'" alt=""></p><p><img src="'+i+'" alt=""></p><h2 id="_2-markdown-文档模板配置" tabindex="-1"><a class="header-anchor" href="#_2-markdown-文档模板配置"><span>2. <strong>Markdown 文档模板配置</strong></span></a></h2><p>利用 Velocity 和 Markdown 技术，实现导出文档和 **Api 在线文档 **自定义格式实现，满足用户各种样式类型文档的输出。</p><p>**点击**查看文档</p><p><img src="'+o+'" alt=""></p><p><img src="'+l+'" alt=""></p><p><img src="'+m+'" alt=""></p><h3 id="_3-json5-支持" tabindex="-1"><a class="header-anchor" href="#_3-json5-支持"><span>3. JSON5 支持</span></a></h3><p>请求体 JSON5 格式支持,JSON 字段注释支持等</p><p><img src="'+g+'" alt=""></p><p>json5</p><h2 id="_4-environment-重构" tabindex="-1"><a class="header-anchor" href="#_4-environment-重构"><span>4. Environment 重构</span></a></h2><p>Environment 区分为本地值(Current value)和共享值(Initial value)</p><p>Initial value 可以通过提交 .fastRequest/config/fastRequestCurrentProjectEnvironment.json 实现共享</p><p><img src="'+u+'" alt=""></p><h2 id="_5-项目域名添加优化" tabindex="-1"><a class="header-anchor" href="#_5-项目域名添加优化"><span>5. 项目域名添加优化</span></a></h2><p>添加项目名的时候，自动识别 module 名称作为下拉框选项,也可以自定义输入.</p><p><img src="'+c+`" alt=""></p><p>projectName</p><h2 id="_6-忽略字段使用-fastrequestparseignore" tabindex="-1"><a class="header-anchor" href="#_6-忽略字段使用-fastrequestparseignore"><span>6. 忽略字段使用@fastRequestParseIgnore</span></a></h2><p>针对实体类需要忽略解析的字段,可以在注释中添加@fastRequestParseIgnore 来实现,原来的注解@parseIgnore 依然适用，减少代码入侵</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * xxx description</span></span>
<span class="line"><span> * @fastRequestParseIgnore</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>private String someIgnoreField ;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有非常多的细节优化不再一一描述，赶紧升级吧！</p><h1 id="更多详情" tabindex="-1"><a class="header-anchor" href="#更多详情"><span>更多详情</span></a></h1><p>请点击 -------------&gt;<strong>这里 https://api-buddy.cn/guide/history.html</strong></p><p><strong>看完还不赶紧上号？</strong></p>`,38)]))}const q=s(d,[["render",h],["__file","fastRequest-2023.2.3.html.vue"]]),_=JSON.parse('{"path":"/zh/news/fastRequest-2023.2.3.html","title":"支持 Postman 同步,IDEA 插件 Fast Request 2023.2.3 发布","lang":"zh-CN","frontmatter":{"title":"支持 Postman 同步,IDEA 插件 Fast Request 2023.2.3 发布","author":"Fast Request","tag":["fastRequest"],"date":"2023-12-20T00:00:00.000Z","cover":"/assets/img/news/fastRequest-2023.2.3-0.png","head":[["meta",{"name":"新闻"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/news/fastRequest-2023.2.3.html"}],["meta",{"property":"og:title","content":"支持 Postman 同步,IDEA 插件 Fast Request 2023.2.3 发布"}],["meta",{"property":"og:description","content":"简介 Restful Fast Request 是一个类似于 Postman 的 IDEA 插件。它是一个强大的 restful api 工具包插件，可以根据已有的方法帮助您快速、自动生成 url 和 params。Restful Fast Request = API 调试工具 + API 管理工具 + API 搜索工具。它有一个漂亮的界面来完成请求、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/fastRequest-2023.2.3-0.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-22T15:09:27.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/fastRequest-2023.2.3-0.png"}],["meta",{"name":"twitter:image:alt","content":"支持 Postman 同步,IDEA 插件 Fast Request 2023.2.3 发布"}],["meta",{"property":"article:author","content":"Fast Request"}],["meta",{"property":"article:tag","content":"fastRequest"}],["meta",{"property":"article:published_time","content":"2023-12-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-22T15:09:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"支持 Postman 同步,IDEA 插件 Fast Request 2023.2.3 发布\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/fastRequest-2023.2.3-0.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/fastRequest-2023.2.3-1.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/fastRequest-2023.2.3-2.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/fastRequest-2023.2.3-3.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/fastRequest-2023.2.3-4.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/fastRequest-2023.2.3-5.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/fastRequest-2023.2.3-6.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/fastRequest-2023.2.3-7.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/fastRequest-2023.2.3-8.png\\"],\\"datePublished\\":\\"2023-12-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-22T15:09:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Fast Request\\"}]}"]],"description":"简介 Restful Fast Request 是一个类似于 Postman 的 IDEA 插件。它是一个强大的 restful api 工具包插件，可以根据已有的方法帮助您快速、自动生成 url 和 params。Restful Fast Request = API 调试工具 + API 管理工具 + API 搜索工具。它有一个漂亮的界面来完成请求、..."},"headers":[{"level":2,"title":"1. API 同步至 Postman","slug":"_1-api-同步至-postman","link":"#_1-api-同步至-postman","children":[]},{"level":2,"title":"2. Markdown 文档模板配置","slug":"_2-markdown-文档模板配置","link":"#_2-markdown-文档模板配置","children":[{"level":3,"title":"3. JSON5 支持","slug":"_3-json5-支持","link":"#_3-json5-支持","children":[]}]},{"level":2,"title":"4. Environment 重构","slug":"_4-environment-重构","link":"#_4-environment-重构","children":[]},{"level":2,"title":"5. 项目域名添加优化","slug":"_5-项目域名添加优化","link":"#_5-项目域名添加优化","children":[]},{"level":2,"title":"6. 忽略字段使用@fastRequestParseIgnore","slug":"_6-忽略字段使用-fastrequestparseignore","link":"#_6-忽略字段使用-fastrequestparseignore","children":[]}],"git":{"createdTime":1708614567000,"updatedTime":1708614567000,"contributors":[{"name":"Cicici-Shi","username":"Cicici-Shi","email":"1901177100@qq.com","commits":1,"url":"https://github.com/Cicici-Shi"},{"name":"tomsun28","username":"tomsun28","email":"tomsun28@outlook.com","commits":1,"url":"https://github.com/tomsun28"}]},"readingTime":{"minutes":2.22,"words":666},"filePathRelative":"zh/news/fastRequest-2023.2.3.md","localizedDate":"2023年12月20日","autoDesc":true,"excerpt":"\\n<p><strong>Restful Fast Request</strong> 是一个类似于 Postman 的 IDEA 插件。它是一个强大的 restful api 工具包插件，可以根据已有的方法帮助您快速、自动生成 url 和 params。Restful Fast Request = API 调试工具 + API 管理工具 + API 搜索工具。它有一个漂亮的界面来完成请求、检查服务器响应、存储你的 api 请求和导出 api 请求。插件帮助你在 IDEA 界面内更快更高效得调试你的 API。</p>\\n<p><strong>最新域名</strong>：<strong>api-buddy.cn</strong></p>"}');export{q as comp,_ as data};

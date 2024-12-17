import{_ as t,a as o,b as s,c as a,d as n,e as r,f as i}from"./TestHub-1.0.4-7-BweqLRk7.js";import{_ as l,c as d,a as c,o as p}from"./app-BmgeuuSW.js";const u={};function h(m,e){return p(),d("div",null,e[0]||(e[0]=[c('<h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><p><img src="'+t+'" alt=""></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>TestHub is the 1 automated testing tool based on process orchestration. was born to solve the complex challenges of test process management and execution in the software development journey. Traditional test tools may be limited to interface-level automation and cannot meet diverse needs. We have introduced unique process orchestration capabilities into our TestHub, making it easy for you to define, manage, and execute test processes. Whether it&#39;s testing automation, process scheduling, or other automated tasks, TestHub plug-in architecture can meet your unlimited scaling needs.</p><blockquote><p>Manual: http://nsrule.com/</p></blockquote><blockquote><p>Gitee open source address: https://gitee.com/dromara/TestHub</p></blockquote><blockquote><p>Github open source address: https://github.com/dromara/TestHub</p></blockquote><blockquote><p>Demo Video: https://www.bilibili.com/video/BV1X94y1v7ak/</p></blockquote><blockquote><p>demo environment: http://testhub.nsrule.com:11018/#/account: admin password 123456</p></blockquote><blockquote><p>installation package: https://url37.ctfile.com/d/42659137-60695737-5e2d86?p=3710 (access password: 3710)</p></blockquote><p>! <a href="/assets/img/news/TestHub-1.0.4-1.jfif"></a></p><h2 id="update-content-1-0-4" tabindex="-1"><a class="header-anchor" href="#update-content-1-0-4"><span>Update content 1.0.4</span></a></h2><p>*🪲🪲BUG Fix🪲🪲</p><ul><li>Optimize the problem of excessive front-end memory usage</li></ul><p>*👍👍New Function👍👍</p><ul><li><p>Front-end overall refactoring</p></li><li><p>Support for Restful API tools</p></li><li><p>Introducing a treasure chest</p></li><li><p>Support multi-project switching</p></li></ul><h2 id="overall-front-end-reconstruction" tabindex="-1"><a class="header-anchor" href="#overall-front-end-reconstruction"><span>Overall front-end reconstruction</span></a></h2><p>The author came from a back-end background and was barely able to write with the support of various front-end bosses around him, but his aesthetic and front-end abilities were obviously insufficient. The discovery of Chat2db in 2023 led to the discovery of new parkways. This front-end reconstruction is based on the front-end of Chat2db3.1.18 as scaffolding, replacing or transforming the following components, and then adding TestHub personalized functions to realize front-end reconstruction and upgrading.</p><table><thead><tr><th>Technology</th><th>Selection</th></tr></thead><tbody><tr><td>editor</td><td>react-monaco-editor</td></tr><tr><td>Category Tree</td><td>react-complex-tree</td></tr><tr><td>Split panel</td><td>react-resizable-panels</td></tr><tr><td>electron</td><td>electron-egg</td></tr></tbody></table><h3 id="color-of-tabs-labels" tabindex="-1"><a class="header-anchor" href="#color-of-tabs-labels"><span>Color of Tabs labels</span></a></h3><p>There are three colors of fonts in Tabs: default color, red and green. Different colors identify different content states and are used to prompt whether the page data is consistent with the server-side data. Default color: saved, indicating that the data at the front end is consistent with the data saved at the back end. Red: draft not tracked, Changes to be corresponding to git status committed green: edited draft, Changes not Staged for commit corresponding to git status</p><p><img src="'+o+'" alt=""></p><h3 id="category-tree-usage" tabindex="-1"><a class="header-anchor" href="#category-tree-usage"><span>Category Tree Usage</span></a></h3><p>This category tree uses a new tree component support: search function, multiple selection, rename built-in, powerful drag and drop function</p><p>Search function</p><p><img src="'+s+'" alt=""></p><p>Powerful drag-and-drop functionality</p><p><img src="'+a+'" alt=""></p><h2 id="restful-api-tools" tabindex="-1"><a class="header-anchor" href="#restful-api-tools"><span>Restful API Tools</span></a></h2><p><img src="'+n+'" alt=""></p><p><img src="'+r+'" alt=""></p><h2 id="about-the-treasure-chest" tabindex="-1"><a class="header-anchor" href="#about-the-treasure-chest"><span>About the treasure chest</span></a></h2><ul><li><em>❓There are already many developed gadgets on the market. Why do you need a treasure chest?❓</em> *</li></ul><p>Indeed, many of the toolkits on the market are typically web-based, which gives them the advantage of being cross-platform because users can access them on any device with a network connection. However, there are some limitations to this web-based toolkit:</p><blockquote><p><strong>Insufficient cross-system support</strong>: Most web toolkits are accessed through a browser, and some functions may require the support of the local operating system. This may result in limited or unavailable functionality on some operating systems.</p></blockquote><blockquote><p><strong>Offline access issues</strong>: Web-based toolboxes usually require a network connection to use. If the user is in an environment without a network connection, these toolkits cannot be used.</p></blockquote><blockquote><p><strong>Performance issues</strong>: Compared with local applications, the web toolbox may be limited by browser performance and network speed, resulting in a poor experience.</p></blockquote><p>Therefore, developing a local toolbox software across systems may have its unique advantages:</p><blockquote><p><strong>Localization support</strong>: Local applications can better use the functions of the operating system to provide a richer experience and functional support.</p></blockquote><blockquote><p><strong>Offline access</strong>: Local applications can be used without network connection, which improves user flexibility and convenience.</p></blockquote><blockquote><p><strong>Performance advantages</strong>: Local applications are usually faster and smoother than web-based applications because they can better optimize resource usage.</p></blockquote><p>However, it should be noted that not all users have the ability to access the Internet at all times, especially in some regions or certain environments, where network connections may be unstable or unavailable. Therefore, to ensure wider availability, developers may need to consider providing offline support or localized deployment options to meet the needs of different users. (really want🔪People, such as the author&#39;s industry, need cloud desktop office is completely isolated from the external network. Forget it.🔪People break the law or write it yourself)</p><h3 id="treasure-box-post-sequence-planning" tabindex="-1"><a class="header-anchor" href="#treasure-box-post-sequence-planning"><span>Treasure Box Post-sequence Planning</span></a></h3><table><thead><tr><th>Type</th><th>Function</th></tr></thead><tbody><tr><td>Format Class</td><td>JSON Formatting</td></tr><tr><td>Format Class</td><td>XML Formatting</td></tr><tr><td>Format Class</td><td>SQL Formatting</td></tr><tr><td>Format Classes</td><td>CSS Formatting</td></tr><tr><td></td><td></td></tr><tr><td>Development Class</td><td>Regular Expression</td></tr><tr><td>Development Classes</td><td>CRON Tools</td></tr><tr><td>Development Classes</td><td>crontab Tools</td></tr><tr><td>Development Class</td><td>Color Value Conversion</td></tr><tr><td>Development class</td><td>Timestamp conversion</td></tr><tr><td>Development class</td><td>XML, JSON conversion</td></tr><tr><td></td><td></td></tr><tr><td>Codec</td><td>Base64 codec</td></tr><tr><td>Codec</td><td>MD5 Encryption</td></tr><tr><td>Codec</td><td>AES Encryption and Decryption</td></tr><tr><td>Codec</td><td>JWT Tools</td></tr><tr><td>codec</td><td>URL code</td></tr><tr><td>codec</td><td>two-dimensional code generation</td></tr><tr><td></td><td></td></tr><tr><td>File Class</td><td>File Comparison Tool</td></tr><tr><td>File Class</td><td>Content Retrieval</td></tr><tr><td></td><td></td></tr><tr><td>Text class</td><td>Text comparison tool</td></tr><tr><td>Text Class</td><td>Text Replacement Tool</td></tr><tr><td>Text Class</td><td>Word Count Tool</td></tr><tr><td></td><td></td></tr></tbody></table><p>➡What functions do you want to join? Please issues⬅️ https://gitee.com/dromara/TestHub/issues</p><p>**[Goddess of Failure ]-TestHub Development Team * *</p><ul><li><p>Receive TestHub update notifications as soon as possible.</p></li><li><p>Receive TestHub bug notification the first time.</p></li><li><p>The first time to receive new open source case notification.</p></li><li><p>The first time to get the relevant technical support.</p></li><li><p>communicate with many bosses (huá shuǐ) (m not yú).</p></li><li><p>People are getting more and more handsome, and their hair never falls off.</p></li><li><p>Appreciation, salary increase, V50 on Thursday</p></li><li><p>Add my personal WeChat remarks TestHub invite you to join the group</p></li></ul><p><img src="'+i+'" alt=""></p><p>About Dromara</p><p>Dromara is an open source community composed of top domestic open source project authors. It provides a series of open source products, solutions and consulting, technical support and training certification services, including distributed transactions, popular tools, enterprise-level authentication, microservice RPC, operation and maintenance monitoring, Agent monitoring, distributed logging, scheduling and orchestration. The technology stack is fully open-source and community-neutral, and is committed to providing microservice cloud-native solutions for global users. Let every 1 open source enthusiasts participate in the joy of open source.</p><p>Dromara open source community currently has 10 GVP projects, with a total number of star exceeding 100,000. It has built an open source community of tens of thousands of people, and thousands of individuals and teams are using the open source projects of Dromara community.</p><p>**Welcome to the knowledge planet and I interact * *</p><p>! <a href="/assets/img/qrcode_zsxq.webp"></a></p>',53)]))}const f=l(u,[["render",h],["__file","TestHub-1.0.4.html.vue"]]),y=JSON.parse(`{"path":"/news/TestHub-1.0.4.html","title":"Automated testing tools released TestHub V1.0.4","lang":"en-US","frontmatter":{"title":"Automated testing tools released TestHub V1.0.4","author":"testhub","tag":["TestHub"],"date":"2024-04-15T00:00:00.000Z","cover":"/assets/img/news/TestHub-1.0.4-0.png","head":[["meta",{"name":"News"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/news/TestHub-1.0.4.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/news/TestHub-1.0.4.html"}],["meta",{"property":"og:title","content":"Automated testing tools released TestHub V1.0.4"}],["meta",{"property":"og:description","content":"Introduction TestHub is the 1 automated testing tool based on process orchestration. was born to solve the complex challenges of test process management and execution in the sof..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/TestHub-1.0.4-0.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-19T11:30:23.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/TestHub-1.0.4-0.png"}],["meta",{"name":"twitter:image:alt","content":"Automated testing tools released TestHub V1.0.4"}],["meta",{"property":"article:author","content":"testhub"}],["meta",{"property":"article:tag","content":"TestHub"}],["meta",{"property":"article:published_time","content":"2024-04-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-19T11:30:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Automated testing tools released TestHub V1.0.4\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/TestHub-1.0.4-0.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/TestHub-1.0.4-2.jfif\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/TestHub-1.0.4-3.jfif\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/TestHub-1.0.4-4.jfif\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/TestHub-1.0.4-5.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/TestHub-1.0.4-6.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/TestHub-1.0.4-7.jfif\\"],\\"datePublished\\":\\"2024-04-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-19T11:30:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"testhub\\"}]}"]],"description":"Introduction TestHub is the 1 automated testing tool based on process orchestration. was born to solve the complex challenges of test process management and execution in the sof..."},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Update content 1.0.4","slug":"update-content-1-0-4","link":"#update-content-1-0-4","children":[]},{"level":2,"title":"Overall front-end reconstruction","slug":"overall-front-end-reconstruction","link":"#overall-front-end-reconstruction","children":[{"level":3,"title":"Color of Tabs labels","slug":"color-of-tabs-labels","link":"#color-of-tabs-labels","children":[]},{"level":3,"title":"Category Tree Usage","slug":"category-tree-usage","link":"#category-tree-usage","children":[]}]},{"level":2,"title":"Restful API Tools","slug":"restful-api-tools","link":"#restful-api-tools","children":[]},{"level":2,"title":"About the treasure chest","slug":"about-the-treasure-chest","link":"#about-the-treasure-chest","children":[{"level":3,"title":"Treasure Box Post-sequence Planning","slug":"treasure-box-post-sequence-planning","link":"#treasure-box-post-sequence-planning","children":[]}]}],"git":{"createdTime":1723712940000,"updatedTime":1724067023000,"contributors":[{"name":"itanxyu","username":"itanxyu","email":"itanxy@126.com","commits":3,"url":"https://github.com/itanxyu"}]},"readingTime":{"minutes":3.56,"words":1068},"filePathRelative":"news/TestHub-1.0.4.md","localizedDate":"April 15, 2024","autoDesc":true,"excerpt":"\\n<p><img src=\\"/assets/img/news/TestHub-1.0.4-0.png\\" alt=\\"\\"></p>\\n<h2>Introduction</h2>\\n<p>TestHub is the 1 automated testing tool based on process orchestration. was born to solve the complex challenges of test process management and execution in the software development journey. Traditional test tools may be limited to interface-level automation and cannot meet diverse needs. We have introduced unique process orchestration capabilities into our TestHub, making it easy for you to define, manage, and execute test processes. Whether it's testing automation, process scheduling, or other automated tasks, TestHub plug-in architecture can meet your unlimited scaling needs.</p>"}`);export{f as comp,y as data};

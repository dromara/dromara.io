import{_ as s,c as i,a as t,o as a}from"./app-9PLcrqAY.js";const n="/assets/img/news/dbswitch-0-0.png",l="/assets/img/news/dbswitch-0-1.png",c="/assets/img/news/dbswitch-0-2.png",r="/assets/img/news/dbswitch-0-3.png",h={};function d(p,e){return a(),i("div",null,e[0]||(e[0]=[t('<h1 id="一个适用于异构数据库迁移同步的简单工具-dbswitch" tabindex="-1"><a class="header-anchor" href="#一个适用于异构数据库迁移同步的简单工具-dbswitch"><span>一个适用于异构数据库迁移同步的简单工具 dbswitch</span></a></h1><h2 id="作者介绍" tabindex="-1"><a class="header-anchor" href="#作者介绍"><span>作者介绍</span></a></h2><ul><li>网名：三胖(inrgihc)</li><li>dromara 开源组织成员，项目 dromara/dbswitch 作者</li><li>项目地址：https://gitee.com/dromara/dbswitch</li></ul><p><img src="'+n+`" alt=""></p><h2 id="dbswitch-的诞生" tabindex="-1"><a class="header-anchor" href="#dbswitch-的诞生"><span>dbswitch 的诞生</span></a></h2><p>你需要<strong>将 Oracle 等老牌数据库中的数据一键搞到 MySQL 或 PostgreSQL 中</strong>么？你需要<strong>将 MySQL 等关系型数据库中的数据一键搞到 Greenplum/ClickHouse 等 OLAP 数据库中进行分析</strong>么？</p><p>如果你在工作中遇到与我同样的需求，那么不妨体验下 dbswitch 工具。</p><p>dbswitch 是在<strong>数据库间数据搬迁</strong>和<strong>数据入仓入湖</strong>这两大背景环境下诞生的，虽然目标路程还很长，但是<strong>dbswitch 作为一款开源工具</strong>会一直再努力坚持着（也许各个数据库厂商都有自己的专业迁移工具）。</p><h2 id="dbswitch-的功能" tabindex="-1"><a class="header-anchor" href="#dbswitch-的功能"><span>dbswitch 的功能</span></a></h2><p>简言之，dbswitch 提供源端数据库向目的端数据库的批量迁移同步功能：</p><ul><li>结构迁移：</li></ul><p>(1)支持字段类型、主键信息、建表语句等的转换，并生成建表 SQL 语句。</p><p>(2)支持基于正则表达式转换的表名与字段名映射转换。</p><ul><li>数据同步：</li></ul><p>(1)基于 JDBC 的分批次读取源端数据库数据，并基于 jdbc(insert/copy 方式)将数据分批次写入目的数据库。</p><p>(2)支持有主键表（基于数据比对变化计算原理的）增量变更(insert/update/delete)同步功能</p><h2 id="dbswitch-支持的数据库" tabindex="-1"><a class="header-anchor" href="#dbswitch-支持的数据库"><span>dbswitch 支持的数据库</span></a></h2><p>当前基于<strong>驱动隔离</strong>已经集成支持<strong>多版本的数据库</strong>产品如下：</p><ul><li>甲骨文的 Oracle</li><li>微软的 Microsoft SQLServer</li><li>MySQL/MariaDB</li><li>PostgreSQL</li><li>Greenplum(需使用 PostgreSQL 类型)</li><li>IBM 的 DB2</li><li>Sybase 数据库</li><li>国产达梦数据库 DMDB</li><li>国产人大金仓数据库 Kingbase8</li><li>国产翰高数据库 HighGo</li><li>国产神通数据库 Oscar</li><li>国产南大通用数据库 GBase8a</li><li>Apache Hive(基于 JdbcStorageHandler)</li><li>SQLite3</li><li>OpenGuass</li><li>ClickHouse</li><li>MongoDB</li></ul><h2 id="dbswitch-的部署体验" tabindex="-1"><a class="header-anchor" href="#dbswitch-的部署体验"><span>dbswitch 的部署体验</span></a></h2><h3 id="_1-一键部署" tabindex="-1"><a class="header-anchor" href="#_1-一键部署"><span>1.一键部署</span></a></h3><ul><li>基于 docker-compose 的一键安装(或升级):</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>curl -sSL https://gitee.com/inrgihc/dbswitch/attach_files/1551962/download | sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>基于 docker 的一键安装：</li></ul><p>假设已经部署好的 MySQL 数据库地址为 192.168.31.57，端口为 3306，账号为 test，密码为 123456</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker run -d --name dbswitch \\</span></span>
<span class="line"><span> -e MYSQLDB_HOST=192.168.31.57 \\</span></span>
<span class="line"><span> -e MYSQLDB_PORT=3306 \\</span></span>
<span class="line"><span> -e MYSQLDB_USERNAME=test \\</span></span>
<span class="line"><span> -e MYSQLDB_PASSWORD=&#39;123456&#39; \\</span></span>
<span class="line"><span> -v /tmp:/tmp \\</span></span>
<span class="line"><span> -p 9088:9088 \\</span></span>
<span class="line"><span> registry.cn-hangzhou.aliyuncs.com/inrgihc/dbswitch:1.8.2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-部分截图" tabindex="-1"><a class="header-anchor" href="#_2-部分截图"><span>2.部分截图</span></a></h2><p><img src="`+l+'" alt=""><img src="'+c+'" alt=""></p><ul><li>二次集成开发</li></ul><p>dbswitch 也支持 java 下二次集成开发，具体可查看 dbswitch 项目中的文档说明。</p><h2 id="关注-dbswitch" tabindex="-1"><a class="header-anchor" href="#关注-dbswitch"><span>关注 dbswitch</span></a></h2><p>欢迎体验使用 dbswitch 工具，同时项目中也提供了 dbswitch 相关的实现原理。对项目有什么想法、建议或 BUG，可以加微信进群深度交流（加好友请注明：&quot;程序交流&quot;），也可创建 issues 进行反馈:</p><p><img src="'+r+'" alt=""></p><h2 id="友情项目" tabindex="-1"><a class="header-anchor" href="#友情项目"><span>友情项目</span></a></h2><p>[1] Greenplum 一键安装</p><p>[2] 新闻文章正文抽取正文抽取组件</p><ul><li><strong>项目地址：https://gitee.com/dromara/dbswitch</strong></li></ul>',37)]))}const m=s(h,[["render",d],["__file","dbswitch-0.html.vue"]]),b=JSON.parse('{"path":"/zh/news/dbswitch-0.html","title":"欢迎Dromara新晋开源项目-dbswitch，异构数据库迁移同步工具！","lang":"zh-CN","frontmatter":{"title":"欢迎Dromara新晋开源项目-dbswitch，异构数据库迁移同步工具！","author":"三胖","date":"2023-11-27T00:00:00.000Z","cover":"/assets/img/news/dbswitch-0-0.png","head":[["meta",{"name":"新闻"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/news/dbswitch-0.html"}],["meta",{"property":"og:title","content":"欢迎Dromara新晋开源项目-dbswitch，异构数据库迁移同步工具！"}],["meta",{"property":"og:description","content":"一个适用于异构数据库迁移同步的简单工具 dbswitch 作者介绍 网名：三胖(inrgihc) dromara 开源组织成员，项目 dromara/dbswitch 作者 项目地址：https://gitee.com/dromara/dbswitch dbswitch 的诞生 你需要将 Oracle 等老牌数据库中的数据一键搞到 MySQL 或 Po..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/dbswitch-0-0.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-22T15:09:27.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/dbswitch-0-0.png"}],["meta",{"name":"twitter:image:alt","content":"欢迎Dromara新晋开源项目-dbswitch，异构数据库迁移同步工具！"}],["meta",{"property":"article:author","content":"三胖"}],["meta",{"property":"article:published_time","content":"2023-11-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-22T15:09:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"欢迎Dromara新晋开源项目-dbswitch，异构数据库迁移同步工具！\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/dbswitch-0-0.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/dbswitch-0-1.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/dbswitch-0-2.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/dbswitch-0-3.png\\"],\\"datePublished\\":\\"2023-11-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-22T15:09:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三胖\\"}]}"]],"description":"一个适用于异构数据库迁移同步的简单工具 dbswitch 作者介绍 网名：三胖(inrgihc) dromara 开源组织成员，项目 dromara/dbswitch 作者 项目地址：https://gitee.com/dromara/dbswitch dbswitch 的诞生 你需要将 Oracle 等老牌数据库中的数据一键搞到 MySQL 或 Po..."},"headers":[{"level":2,"title":"作者介绍","slug":"作者介绍","link":"#作者介绍","children":[]},{"level":2,"title":"dbswitch 的诞生","slug":"dbswitch-的诞生","link":"#dbswitch-的诞生","children":[]},{"level":2,"title":"dbswitch 的功能","slug":"dbswitch-的功能","link":"#dbswitch-的功能","children":[]},{"level":2,"title":"dbswitch 支持的数据库","slug":"dbswitch-支持的数据库","link":"#dbswitch-支持的数据库","children":[]},{"level":2,"title":"dbswitch 的部署体验","slug":"dbswitch-的部署体验","link":"#dbswitch-的部署体验","children":[{"level":3,"title":"1.一键部署","slug":"_1-一键部署","link":"#_1-一键部署","children":[]}]},{"level":2,"title":"2.部分截图","slug":"_2-部分截图","link":"#_2-部分截图","children":[]},{"level":2,"title":"关注 dbswitch","slug":"关注-dbswitch","link":"#关注-dbswitch","children":[]},{"level":2,"title":"友情项目","slug":"友情项目","link":"#友情项目","children":[]}],"git":{"createdTime":1708614567000,"updatedTime":1708614567000,"contributors":[{"name":"Cicici-Shi","username":"Cicici-Shi","email":"1901177100@qq.com","commits":1,"url":"https://github.com/Cicici-Shi"},{"name":"tomsun28","username":"tomsun28","email":"tomsun28@outlook.com","commits":1,"url":"https://github.com/tomsun28"}]},"readingTime":{"minutes":2.52,"words":756},"filePathRelative":"zh/news/dbswitch-0.md","localizedDate":"2023年11月27日","autoDesc":true,"excerpt":"\\n<h2>作者介绍</h2>\\n<ul>\\n<li>网名：三胖(inrgihc)</li>\\n<li>dromara 开源组织成员，项目 dromara/dbswitch 作者</li>\\n<li>项目地址：https://gitee.com/dromara/dbswitch</li>\\n</ul>\\n<p><img src=\\"/assets/img/news/dbswitch-0-0.png\\" alt=\\"\\"></p>\\n<h2>dbswitch 的诞生</h2>\\n<p>你需要<strong>将 Oracle 等老牌数据库中的数据一键搞到 MySQL 或 PostgreSQL 中</strong>么？你需要<strong>将 MySQL 等关系型数据库中的数据一键搞到 Greenplum/ClickHouse 等 OLAP 数据库中进行分析</strong>么？</p>"}');export{m as comp,b as data};
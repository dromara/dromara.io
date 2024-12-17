import{_ as t}from"./HertzBeat-1.3.2-1-BfrUcz2y.js";import{_ as o}from"./HertzBeat-1.4.1-8-CXcKLTGF.js";import{_ as r,c as s,a,o as n}from"./app-BmgeuuSW.js";const i="/assets/img/news/HertzBeat-1.3.2-2.png",p="/assets/img/news/HertzBeat-1.3.2-3.png",c="/assets/img/news/HertzBeat-1.3.2-4.png",l="/assets/img/news/HertzBeat-1.3.2-5.png",m="/assets/img/news/HertzBeat-1.3.2-6.png",d="/assets/img/news/HertzBeat-1.3.2-7.png",g={};function h(u,e){return n(),s("div",null,e[0]||(e[0]=[a('<h3 id="hertzbeat-介绍" tabindex="-1"><a class="header-anchor" href="#hertzbeat-介绍"><span>HertzBeat 介绍</span></a></h3><blockquote><p>HertzBeat 赫兹跳动 是一个拥有强大自定义监控能力，无需 Agent 的开源实时监控告警工具。<br> 致力于<strong>易用友好</strong>，全 WEB 页面操作，鼠标点一点就能监控告警，零上手学习成本。<br> 集 <strong>监控+告警+通知</strong> 为一体，支持对应用服务，数据库，操作系统，中间件，云原生，网络等指标监控，阈值告警通知一步到位。<br> 支持更自由化的阈值规则，<code>邮件</code> <code>Discord</code> <code>Slack</code> <code>Telegram</code> <code>钉钉</code> <code>微信</code> <code>飞书</code> <code>短信</code> <code>Webhook</code> 等方式及时送达。</p></blockquote><blockquote><p>我们将<code>Http,Jmx,Ssh,Snmp,Jdbc</code>等协议规范可配置化，您只需配置<code>YML</code>就能使用这些协议去自定义采集任何您想要的指标。</p></blockquote><p>官网: hertzbeat.com | hertzbeat.dromara.org | tancloud.cn</p><p><img src="'+t+'" alt=""></p><p><strong>Github: https://github.com/dromara/hertzbeat</strong></p><p><strong>Gitee: https://gitee.com/dromara/hertzbeat</strong></p><h3 id="v1-3-2-来了" tabindex="-1"><a class="header-anchor" href="#v1-3-2-来了"><span>v1.3.2 来了</span></a></h3><p>**这次累计 27 位小伙伴们的辛苦贡献才出来了这个令人欣喜的版本。****感谢他们！爱心 💗**</p><p>这个版本我们支持对<strong>freebsd, debian, opensuse, redhat, apache doris</strong>等新的监控类型和指标。</p><ul><li>支持 WEB 页面配置邮件服务器，<strong>取代之前的文件配置</strong></li><li>支持告警收敛，<strong>是否遇到了重复告警频繁发送，有了告警收敛马上解决</strong></li><li>公共消息队列支持 Kafka，<strong>除了我们默认的内置内存消息队列，也支持了外置 Kafka 消息队列，提升系统性能。</strong></li><li>新的监控中心页面，<strong>聚合所有监控类型，不用像之前那样切来切去了。</strong></li><li>支持标签分组展示，<strong>把同一业务类别的监控们分组标记，统一管理。</strong></li><li>阈值配置不仅仅有表达式，<strong>还支持更人性化的操作 UI，之前的表达式对新人不太友好很容易出错，现在可以直接 UI 操作啦，它可以和表达式互相切换。</strong></li><li>还有 HTTP ipv6 等更多功能。</li></ul><p>修复了大量 BUG，完善文档代码，提高了整体的稳定可用性。更多新功能欢迎探索！</p><p>只需要一条 docker 命令即可安装体验 hertzbeat:<br><code>docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat</code></p><p>若 dockerhub 网络超时，可以使用下面命令:<br><code>docker run -d -p 1157:1157 --name hertzbeat quay.io/tancloud/hertzbeat</code></p><hr><p><strong>监控告警全页面操作，0 学习成本，无需修改配置文件加监控，上效果:</strong></p><p><img src="'+i+'" alt=""><img src="'+p+'" alt=""><img src="'+c+'" alt=""><img src="'+l+'" alt=""><img src="'+m+'" alt=""><img src="'+d+'" alt=""></p><hr><h2 id="⛄-已支持" tabindex="-1"><a class="header-anchor" href="#⛄-已支持"><span>⛄ 已支持</span></a></h2><blockquote><p>我们将监控采集类型(mysql,jvm,k8s)都定义为 yml 监控模版，用户可以导入这些模版来支持对应类型的监控!<br> 欢迎大家一起贡献你使用过程中自定义的通用监控类型监控模版。</p></blockquote><ul><li>Website, Port Telnet, Http Api, Ping Connect, Jvm, SiteMap, Ssl Certificate, SpringBoot2, FTP Server, SpringBoot3</li><li>Mysql, PostgreSQL, MariaDB, Redis, ElasticSearch, SqlServer, Oracle, MongoDB, DM, OpenGauss, ClickHouse, IoTDB, Redis Cluster, Redis Sentinel</li><li>Linux, Ubuntu, CentOS, Windows, EulerOS, Fedora CoreOS, OpenSUSE, Rocky Linux, Red Hat, FreeBSD, AlmaLinux, Debian Linux</li><li>Tomcat, Nacos, Zookeeper, RabbitMQ, Flink, Kafka, ShenYu, DynamicTp, Jetty, ActiveMQ</li><li>Kubernetes, Docker</li><li>CiscoSwitch, HpeSwitch, HuaweiSwitch, TpLinkSwitch, H3cSwitch</li><li>和更多自定义监控模版。</li><li>通知支持 Discord Slack Telegram 邮件 钉钉 微信 飞书 短信 Webhook。</li></ul><hr><p><strong>欢迎 star 三连来支持我们</strong></p><p><strong>Github: https://github.com/dromara/hertzbeat</strong><br><strong>Gitee: https://gitee.com/dromara/hertzbeat</strong></p><p>加微信进交流群哇：</p><p><img src="'+o+'" alt=""></p>',26)]))}const H=r(g,[["render",h],["__file","HertzBeat-1.3.2.html.vue"]]),v=JSON.parse('{"path":"/zh/news/HertzBeat-1.3.2.html","title":"开源实时监控 HertzBeat v1.3.2 发布, 更稳定更易用","lang":"zh-CN","frontmatter":{"title":"开源实时监控 HertzBeat v1.3.2 发布, 更稳定更易用","author":"tom","tag":["HertzBeat"],"date":"2023-07-05T00:00:00.000Z","cover":"/assets/img/news/HertzBeat-1.4.0-1.png","head":[["meta",{"name":"新闻"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/news/HertzBeat-1.3.2.html"}],["meta",{"property":"og:title","content":"开源实时监控 HertzBeat v1.3.2 发布, 更稳定更易用"}],["meta",{"property":"og:description","content":"HertzBeat 介绍 HertzBeat 赫兹跳动 是一个拥有强大自定义监控能力，无需 Agent 的开源实时监控告警工具。 致力于易用友好，全 WEB 页面操作，鼠标点一点就能监控告警，零上手学习成本。 集 监控+告警+通知 为一体，支持对应用服务，数据库，操作系统，中间件，云原生，网络等指标监控，阈值告警通知一步到位。 支持更自由化的阈值规则，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/HertzBeat-1.4.0-1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-23T05:33:00.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/HertzBeat-1.4.0-1.png"}],["meta",{"name":"twitter:image:alt","content":"开源实时监控 HertzBeat v1.3.2 发布, 更稳定更易用"}],["meta",{"property":"article:author","content":"tom"}],["meta",{"property":"article:tag","content":"HertzBeat"}],["meta",{"property":"article:published_time","content":"2023-07-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-23T05:33:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"开源实时监控 HertzBeat v1.3.2 发布, 更稳定更易用\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/HertzBeat-1.3.2-1.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/HertzBeat-1.3.2-2.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/HertzBeat-1.3.2-3.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/HertzBeat-1.3.2-4.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/HertzBeat-1.3.2-5.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/HertzBeat-1.3.2-6.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/HertzBeat-1.3.2-7.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/HertzBeat-1.4.1-8.jpg\\"],\\"datePublished\\":\\"2023-07-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-23T05:33:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"tom\\"}]}"]],"description":"HertzBeat 介绍 HertzBeat 赫兹跳动 是一个拥有强大自定义监控能力，无需 Agent 的开源实时监控告警工具。 致力于易用友好，全 WEB 页面操作，鼠标点一点就能监控告警，零上手学习成本。 集 监控+告警+通知 为一体，支持对应用服务，数据库，操作系统，中间件，云原生，网络等指标监控，阈值告警通知一步到位。 支持更自由化的阈值规则，..."},"headers":[{"level":3,"title":"HertzBeat 介绍","slug":"hertzbeat-介绍","link":"#hertzbeat-介绍","children":[]},{"level":3,"title":"v1.3.2 来了","slug":"v1-3-2-来了","link":"#v1-3-2-来了","children":[]},{"level":2,"title":"⛄ 已支持","slug":"⛄-已支持","link":"#⛄-已支持","children":[]}],"git":{"createdTime":1698039180000,"updatedTime":1698039180000,"contributors":[{"name":"Cici","username":"Cici","email":"1901177100@qq.com","commits":1,"url":"https://github.com/Cici"}]},"readingTime":{"minutes":2.78,"words":833},"filePathRelative":"zh/news/HertzBeat-1.3.2.md","localizedDate":"2023年7月5日","autoDesc":true,"excerpt":"<h3>HertzBeat 介绍</h3>\\n<blockquote>\\n<p>HertzBeat 赫兹跳动 是一个拥有强大自定义监控能力，无需 Agent 的开源实时监控告警工具。<br>\\n致力于<strong>易用友好</strong>，全 WEB 页面操作，鼠标点一点就能监控告警，零上手学习成本。<br>\\n集 <strong>监控+告警+通知</strong> 为一体，支持对应用服务，数据库，操作系统，中间件，云原生，网络等指标监控，阈值告警通知一步到位。<br>\\n支持更自由化的阈值规则，<code>邮件</code> <code>Discord</code> <code>Slack</code> <code>Telegram</code> <code>钉钉</code> <code>微信</code> <code>飞书</code> <code>短信</code> <code>Webhook</code> 等方式及时送达。</p>\\n</blockquote>"}');export{H as comp,v as data};

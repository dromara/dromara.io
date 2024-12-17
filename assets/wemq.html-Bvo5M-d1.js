import{_ as s,c as a,a as n,o as i}from"./app-BmgeuuSW.js";const l={};function t(r,e){return i(),a("div",null,e[0]||(e[0]=[n(`<h2 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景"><span>项目背景</span></a></h2><p>随着物联网技术的迅猛发展，越来越多的物联网设备被应用于各个行业和领域。物联网设备的调试和管理是确保设备正常运行和提供稳定服务的关键环节。然而，传统的物联网设备调试方案往往存在一些问题，如复杂的配置流程、安全性不足、功能不完善等。</p><p>为了解决这些问题，<strong>WeMQ</strong>应运而生。WeMQ 是一款面向物联网设备运营商的开源物联网设备调试系统，旨在提供完整的物联网设备调试方案，并集成了设备管理、MQTT 服务器管理、客户管理等功能。该系统采用自研的 Nmqs 通信层组件，实现了连接信息的加密，保证了数据的安全性。</p><p>WeMQ 的项目背景源于对物联网设备调试过程中存在问题的深入研究和理解。通过提供开源的解决方案，WeMQ 希望为物联网设备运营商提供一个高性能、安全可靠、功能强大的调试和管理平台，帮助他们简化设备调试流程、提高调试效率，并保证设备的稳定运行。</p><p><strong>项目的主要特性：</strong></p><ol><li>提供一套完整的物联网设备调试方案，包括设备管理、MQTT 服务器管理、客户管理等功能，帮助设备运营商简化调试流程。</li><li>自研 Nmqs 通信层组件，实现连接信息的加密，确保数据传输的安全性。</li><li>提供高性能、稳定可靠的服务，满足大规模物联网设备的调试和管理需求。</li><li>开源项目，吸引更多的开发者参与贡献，推动物联网设备调试领域的发展。</li></ol><p>通过 WeMQ，物联网设备运营商可以更轻松地进行设备调试和管理，提高工作效率，降低运营成本，并为最终用户提供更好的物联网设备体验。</p><p><a href="https://gitee.com/dromara/WeMQ"><img src="https://gitee.com/dromara/WeMQ/badge/star.svg"></a><a href="https://gitee.com/dromara/WeMQ/members"><img src="https://gitee.com/dromara/WeMQ/badge/fork.svg"></a><a href="https://github.com/dromara/WeMQ/blob/master/LICENSE"><img src="https://img.shields.io/github/license/dromara/WeMQ.svg?style=flat-square"></a></p><h2 id="技术选型" tabindex="-1"><a class="header-anchor" href="#技术选型"><span>技术选型</span></a></h2><h4 id="_1-系统环境" tabindex="-1"><a class="header-anchor" href="#_1-系统环境"><span>1. 系统环境</span></a></h4><ul><li>Java 8</li><li>Servlet 3.0</li><li>Apache Maven 3</li></ul><h4 id="_2-主框架" tabindex="-1"><a class="header-anchor" href="#_2-主框架"><span>2. 主框架</span></a></h4><ul><li>Spring Boot 2.7.x</li><li>Spring Framework 5.3.x</li><li>Spring MVC 5.3.x</li></ul><h4 id="_3-持久层" tabindex="-1"><a class="header-anchor" href="#_3-持久层"><span>3. 持久层</span></a></h4><ul><li>Mybatis 3.5.x</li><li>Alibaba Druid 1.2.x</li><li>Hibernate Validation 6.0.x</li><li>Java MySQL Connector 8.0.x</li></ul><h4 id="_4-视图层" tabindex="-1"><a class="header-anchor" href="#_4-视图层"><span>4. 视图层</span></a></h4><ul><li>Thymeleaf 3.x</li><li>Bootstrap 5.x</li><li>Layui 2.x</li></ul><h4 id="_5-工具类" tabindex="-1"><a class="header-anchor" href="#_5-工具类"><span>5. 工具类</span></a></h4><ul><li>Apache Commons</li><li>Hutool 5.x</li></ul><h4 id="_6-通信层" tabindex="-1"><a class="header-anchor" href="#_6-通信层"><span>6. 通信层</span></a></h4><ul><li>Nmqs 实现连接信息加密、消息转发，支持 WS/TCP 协议连接</li><li>Eclipse Paho</li></ul><h2 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构"><span>项目结构</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cn.mmanager</span></span>
<span class="line"><span>├── mm-common            // 工具类</span></span>
<span class="line"><span>│       └── annotation                    // 自定义注解</span></span>
<span class="line"><span>│       └── constant                      // 通用常量</span></span>
<span class="line"><span>│       └── core                          // 核心控制</span></span>
<span class="line"><span>│       └── enums                         // 通用枚举</span></span>
<span class="line"><span>│       └── exception                     // 通用异常</span></span>
<span class="line"><span>├── mm-framework         // 框架核心</span></span>
<span class="line"><span>│       └── aspectj                       // 注解实现</span></span>
<span class="line"><span>│       └── interceptor                   // 拦截器</span></span>
<span class="line"><span>│       └── manager                       // 异步处理</span></span>
<span class="line"><span>│       └── web                           // 前端控制</span></span>
<span class="line"><span>├── mm-web         // Web服务</span></span>
<span class="line"><span>├── mm-dao        // 数据访问层</span></span>
<span class="line"><span>├── mm-service     // 业务层</span></span>
<span class="line"><span>├── mm-model       // 模型\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通信层" tabindex="-1"><a class="header-anchor" href="#通信层"><span>通信层</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> _   _ __  __  ____   _____</span></span>
<span class="line"><span> | \\ | |  \\/  |/ __ \\ / ____|</span></span>
<span class="line"><span> |  \\| | \\  / | |  | | (___</span></span>
<span class="line"><span> | . \` | |\\/| | |  | |\\___ \\</span></span>
<span class="line"><span> | |\\  | |  | | |__| |____) |</span></span>
<span class="line"><span> |_| \\_|_|  |_|\\___\\_\\_____/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通信层组件在物联网设备调试系统中扮演着重要的角色，它负责设备与服务器之间的通信和数据传输。在 WeMQ 中，采用了自研的 Nmqs 通信层组件，它实现了连接信息的加密，确保数据传输的安全性。</p><p><strong>Nmqs 通信层组件具有以下特点和功能：</strong></p><ol><li><strong>连接信息加密</strong>：Nmqs 采用先进的加密算法，对设备与服务器之间的连接信息进行加密处理。这样可以确保通信过程中的数据安全，防止信息被窃取或篡改。</li><li><strong>安全认证</strong>：Nmqs 提供了安全认证机制，确保只有经过授权的设备和服务器才能建立连接。通过身份验证和密钥交换等方式，确保通信双方的身份合法性和通信的安全性。</li><li><strong>数据压缩和优化</strong>：Nmqs 支持数据压缩和优化技术，可以在传输过程中对数据进行压缩，减少数据传输的带宽占用和传输延迟，提高通信效率。</li><li><strong>可靠性保证</strong>：Nmqs 具备可靠性保证机制，能够处理通信过程中的数据丢失、重传和错误处理。它采用可靠的传输协议，确保数据的完整性和可靠性。</li><li><strong>适应性和灵活性</strong>：Nmqs 通信层组件具有良好的适应性和灵活性，可以适应不同的网络环境和设备类型。它支持多种通信协议和网络传输方式，能够适应不同的物联网设备调试场景。</li></ol><p>通过自研的 Nmqs 通信层组件，WeMQ 能够提供安全可靠的设备与服务器之间的通信服务。它保护设备数据的安全性，确保通信过程的可靠性和稳定性，为物联网设备调试和管理提供了强大的基础支持。</p><h2 id="开源地址" tabindex="-1"><a class="header-anchor" href="#开源地址"><span>开源地址</span></a></h2><p><strong>Gitee：https://gitee.com/dromara/WeMQ</strong></p><p><strong>Github：https://github.com/dromara/WeMQ</strong></p><h2 id="issues-pull-requests" tabindex="-1"><a class="header-anchor" href="#issues-pull-requests"><span>Issues &amp; Pull Requests</span></a></h2><p>欢迎提交 Issues 和 Pull Requests，开源大门永远向所有人敞开。</p><h2 id="作者介绍" tabindex="-1"><a class="header-anchor" href="#作者介绍"><span>作者介绍</span></a></h2><ul><li>名称：NicholasLD</li><li>全栈开发工程师，物联网爱好者</li><li>Dromara 开源组织成员，dromara/WeMQ 作者</li></ul><p><strong>联系方式：</strong></p><ul><li>Email: 878639947@qq.com</li><li>QQ: 878639947</li><li>WeChat: NicholasLD505</li></ul>`,38)]))}const o=s(l,[["render",t],["__file","wemq.html.vue"]]),c=JSON.parse('{"path":"/zh/news/wemq.html","title":"欢迎开源项目 WEMQ 加入 Dromara 社区，物联网设备调试系统","lang":"zh-CN","frontmatter":{"title":"欢迎开源项目 WEMQ 加入 Dromara 社区，物联网设备调试系统","author":"wemq","date":"2023-09-25T00:00:00.000Z","cover":"/assets/img/news/wemq-cover.png","head":[["meta",{"name":"新闻"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/news/wemq.html"}],["meta",{"property":"og:title","content":"欢迎开源项目 WEMQ 加入 Dromara 社区，物联网设备调试系统"}],["meta",{"property":"og:description","content":"项目背景 随着物联网技术的迅猛发展，越来越多的物联网设备被应用于各个行业和领域。物联网设备的调试和管理是确保设备正常运行和提供稳定服务的关键环节。然而，传统的物联网设备调试方案往往存在一些问题，如复杂的配置流程、安全性不足、功能不完善等。 为了解决这些问题，WeMQ应运而生。WeMQ 是一款面向物联网设备运营商的开源物联网设备调试系统，旨在提供完整的物..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/wemq-cover.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-23T05:33:00.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/wemq-cover.png"}],["meta",{"name":"twitter:image:alt","content":"欢迎开源项目 WEMQ 加入 Dromara 社区，物联网设备调试系统"}],["meta",{"property":"article:author","content":"wemq"}],["meta",{"property":"article:published_time","content":"2023-09-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-23T05:33:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"欢迎开源项目 WEMQ 加入 Dromara 社区，物联网设备调试系统\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/wemq-cover.png\\"],\\"datePublished\\":\\"2023-09-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-23T05:33:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wemq\\"}]}"]],"description":"项目背景 随着物联网技术的迅猛发展，越来越多的物联网设备被应用于各个行业和领域。物联网设备的调试和管理是确保设备正常运行和提供稳定服务的关键环节。然而，传统的物联网设备调试方案往往存在一些问题，如复杂的配置流程、安全性不足、功能不完善等。 为了解决这些问题，WeMQ应运而生。WeMQ 是一款面向物联网设备运营商的开源物联网设备调试系统，旨在提供完整的物..."},"headers":[{"level":2,"title":"项目背景","slug":"项目背景","link":"#项目背景","children":[]},{"level":2,"title":"技术选型","slug":"技术选型","link":"#技术选型","children":[]},{"level":2,"title":"项目结构","slug":"项目结构","link":"#项目结构","children":[]},{"level":2,"title":"通信层","slug":"通信层","link":"#通信层","children":[]},{"level":2,"title":"开源地址","slug":"开源地址","link":"#开源地址","children":[]},{"level":2,"title":"Issues & Pull Requests","slug":"issues-pull-requests","link":"#issues-pull-requests","children":[]},{"level":2,"title":"作者介绍","slug":"作者介绍","link":"#作者介绍","children":[]}],"git":{"createdTime":1698039180000,"updatedTime":1698039180000,"contributors":[{"name":"Cici","username":"Cici","email":"1901177100@qq.com","commits":1,"url":"https://github.com/Cici"}]},"readingTime":{"minutes":4.6,"words":1381},"filePathRelative":"zh/news/wemq.md","localizedDate":"2023年9月25日","autoDesc":true,"excerpt":"<h2>项目背景</h2>\\n<p>随着物联网技术的迅猛发展，越来越多的物联网设备被应用于各个行业和领域。物联网设备的调试和管理是确保设备正常运行和提供稳定服务的关键环节。然而，传统的物联网设备调试方案往往存在一些问题，如复杂的配置流程、安全性不足、功能不完善等。</p>\\n<p>为了解决这些问题，<strong>WeMQ</strong>应运而生。WeMQ 是一款面向物联网设备运营商的开源物联网设备调试系统，旨在提供完整的物联网设备调试方案，并集成了设备管理、MQTT 服务器管理、客户管理等功能。该系统采用自研的 Nmqs 通信层组件，实现了连接信息的加密，保证了数据的安全性。</p>\\n<p>WeMQ 的项目背景源于对物联网设备调试过程中存在问题的深入研究和理解。通过提供开源的解决方案，WeMQ 希望为物联网设备运营商提供一个高性能、安全可靠、功能强大的调试和管理平台，帮助他们简化设备调试流程、提高调试效率，并保证设备的稳定运行。</p>"}');export{o as comp,c as data};

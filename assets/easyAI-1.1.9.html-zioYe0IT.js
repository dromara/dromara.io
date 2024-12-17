import{_ as a}from"./easyAI-1.1.9-0-D4reCt9p.js";import{_ as s,a as t}from"./easyAI-1.1.9-7-C1mq5NBA.js";import{_ as i,c as p,a as r,o as l}from"./app-BmgeuuSW.js";const n="/assets/img/news/easyAI-1.1.9-2.png",o="/assets/img/news/easyAI-1.1.9-3.png",m="/assets/img/news/easyAI-1.1.9-4.png",h="/assets/img/news/easyAI-1.1.9-5.png",y="/assets/img/news/easyAI-1.1.9-6.png",d={};function c(g,e){return l(),p("div",null,e[0]||(e[0]=[r('<p><img src="'+a+'" alt=""></p><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>EasyAi的出现对于Java的意义，等同于在JavaWeb领域spring出现的意义一样——做一个开箱即用，让每一个开发者都可以使用EasyAi，来开发符合自己人工智能业务需求的小微模型，这就是它的使命！</p><h2 id="easyai介绍" tabindex="-1"><a class="header-anchor" href="#easyai介绍"><span>EasyAi介绍</span></a></h2><p>EasyAi无任何依赖，它是一个原生Java人工智能算法框架。首先，**它可以Maven一键丝滑引入我们的Java项目，无需任何额外的环境配置与依赖，做到开箱即用。**再者，它既有一些我们已经封装好的图像目标检测及人工智能客服的模块，也提供各种深度学习，机器学习，强化学习，启发式学习，矩阵运算，等底层算法工具。开发者可以通过简单的学习，就能完成根据自身业务，深度开发符合自己业务的小微模型</p><ul><li><p>EasyAI码云下载链接:https://gitee.com/dromara/easyAi</p></li><li><p>EasyAI GitHub下载链接:https://github.com/lifejwang11/easyAi</p></li><li><p>EasyAI主要技术文档地址：https://yhk.yhktech.com/easyai</p></li><li><p>EasyAI详细视频教程：https://www.bilibili.com/video/av89134035</p></li><li><p>JAVA人工智能0基础体系课程:https://www.bilibili.com/cheese/play/ss17600</p></li></ul><h3 id="v1-1-9-更新内容" tabindex="-1"><a class="header-anchor" href="#v1-1-9-更新内容"><span>v1.1.9 更新内容</span></a></h3><ul><li><p>图像目标检测稳定程度增加，增加可调参数，来性能与稳定性之间的平衡。</p></li><li><p>对图像识别API进行功能补全，增强性能，对YOLO进行工程性与算法环节优化，简化API步骤，调用上手清晰简单。</p></li></ul><h3 id="图像识别fastyolo效果展示" tabindex="-1"><a class="header-anchor" href="#图像识别fastyolo效果展示"><span>图像识别FastYolo效果展示</span></a></h3><ul><li>使用EasyAi实现图像结算自动贩卖机视觉内核</li></ul><p><img src="'+s+'" alt=""></p><h3 id="sayorder人工智能客服" tabindex="-1"><a class="header-anchor" href="#sayorder人工智能客服"><span>sayOrder人工智能客服</span></a></h3><ul><li><p>sayOrder是依赖EasyAi进行封装的人工智能客服系统。</p></li><li><p>它可以分析用户输入的语义，来识别用户的行为，并通过typeID来区分用户意图ID。并通过捕捉其后台设置的关键词类别，来抓出系统关心的用户在语句中包含的内容，比如语句中的时间，地点等。</p></li><li><p>它还可以与用户自主进行问答交互，进行自主解答疑问或者进行其余意图的交流等。</p></li><li><p>项目链接地址: https://gitee.com/dromara/sayOrder</p></li></ul><h3 id="sayorder交互基本业务流程演示" tabindex="-1"><a class="header-anchor" href="#sayorder交互基本业务流程演示"><span>sayOrder交互基本业务流程演示</span></a></h3><ul><li><p>用户第一次进行输入表达自己的想法<img src="'+n+'" alt=""></p></li><li><p>SayOrder发现用户的描述缺少订单必要信息，则进行反问。用户接收到SayOrder的反问，进一步补充的自己的想法<img src="'+o+'" alt=""></p></li><li><p>用户第二次输入信息依然不满足后台14分类法律咨询的订单关键信息要求，继续补充信息，最终完成订单信息补充生成订单。<img src="'+m+'" alt=""></p></li><li><p>用户输入想要咨询的问题，SayOrder对用户咨询的问题进行自主解答<img src="'+h+'" alt=""></p></li></ul><h3 id="以上是sayorder-基于easyai引擎-自定义业务接口的简单案例演示-具体安装部署及细节详情请到其主页下载-https-gitee-com-dromara-sayorder" tabindex="-1"><a class="header-anchor" href="#以上是sayorder-基于easyai引擎-自定义业务接口的简单案例演示-具体安装部署及细节详情请到其主页下载-https-gitee-com-dromara-sayorder"><span>以上是SayOrder（基于easyAI引擎）自定义业务接口的简单案例演示，具体安装部署及细节详情请到其主页下载:https://gitee.com/dromara/sayOrder</span></a></h3><h3 id="架构设计" tabindex="-1"><a class="header-anchor" href="#架构设计"><span>架构设计</span></a></h3><p><strong>常用底层算法模块</strong></p><ul><li><p>基础矩阵及线代计算模块：</p><p>1.内置矩阵类，矩阵计算类，可以完成常用矩阵四则运算，奇偶性，多元线性回归，逻辑斯蒂回归，欧式距离，余弦相似性，im2col，逆im2col，求代数余子式，求逆，求伴随矩阵，内积等，微分等一系列api。</p><p>2.RGB三通道矩阵，可进行图像转化，剪切，分块，生成图像矩阵等操作方便后续计算。</p></li><li><p>机器学习-聚类：</p><p>k聚类，混合高斯聚类，密度聚类，学习向量量化聚类等</p></li><li><p>机器学习-分类及拟合：多层前馈神经网络，多层循环神经网络，残差网络，多层残差循环神经网络，卷积神经网络，决策树，随机森林，k最近邻等</p></li><li><p>启发式算法：粒子群，蚁群，模拟退火</p></li><li><p>强化学习 动态规划，蒙特卡洛分析，马尔可夫，时序差分</p></li></ul><p><strong>常用上层算法模块</strong></p><ul><li><p>视觉图像：图像识别，图片摘要，目标检测</p></li><li><p>自然语言：语义理解，拆词分词，推理敏感及关键词，语句补全，语言交流</p></li><li><p>游戏机器人：自主策略，自主行动</p></li></ul><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><p>1.将项目下载后打包进本地maven库</p><p>2.将easyAi pom文件引入地址引入项目</p><h3 id="关注项目" tabindex="-1"><a class="header-anchor" href="#关注项目"><span>关注项目</span></a></h3><ul><li>对项目有什么想法或者建议与学习，都可以加我工作微信<img src="'+y+'" alt=""></li></ul><p>关于 Dromara</p><p>Dromara 是由国内顶尖的开源项目作者共同组成的开源社区。提供包括分布式事务，流行工具，企业级认证，微服务RPC，运维监控，Agent监控，分布式日志，调度编排等一系列开源产品、解决方案与咨询、技术支持与培训认证服务。技术栈全面开源共建、 保持社区中立，致力于为全球用户提供微服务云原生解决方案。让参与的每一位开源爱好者，体会到开源的快乐。</p><p>Dromara开源社区目前拥有10+GVP项目，总star数量超过十万，构建了上万人的开源社区，有成千上万的个人及团队在使用Dromara社区的开源项目。</p><p><strong>欢迎大家来到知识星球和我互动</strong></p><p><img src="'+t+'" alt=""></p>',31)]))}const f=i(d,[["render",c],["__file","easyAI-1.1.9.html.vue"]]),I=JSON.parse('{"path":"/zh/news/easyAI-1.1.9.html","title":"原生Java人工智能算法框架 easyAI v1.1.9 版本发布","lang":"zh-CN","frontmatter":{"title":"原生Java人工智能算法框架 easyAI v1.1.9 版本发布","author":"easyAI","tag":["EasyAI"],"date":"2024-07-01T00:00:00.000Z","cover":"/assets/img/news/easyAI-1.1.9-0.png","head":[["meta",{"name":"新闻"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope-docs-demo.netlify.app/news/easyAI-1.1.9.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/news/easyAI-1.1.9.html"}],["meta",{"property":"og:title","content":"原生Java人工智能算法框架 easyAI v1.1.9 版本发布"}],["meta",{"property":"og:description","content":"前言 EasyAi的出现对于Java的意义，等同于在JavaWeb领域spring出现的意义一样——做一个开箱即用，让每一个开发者都可以使用EasyAi，来开发符合自己人工智能业务需求的小微模型，这就是它的使命！ EasyAi介绍 EasyAi无任何依赖，它是一个原生Java人工智能算法框架。首先，**它可以Maven一键丝滑引入我们的Java项目，无..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/easyAI-1.1.9-0.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-19T11:30:23.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/easyAI-1.1.9-0.png"}],["meta",{"name":"twitter:image:alt","content":"原生Java人工智能算法框架 easyAI v1.1.9 版本发布"}],["meta",{"property":"article:author","content":"easyAI"}],["meta",{"property":"article:tag","content":"EasyAI"}],["meta",{"property":"article:published_time","content":"2024-07-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-19T11:30:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"原生Java人工智能算法框架 easyAI v1.1.9 版本发布\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/easyAI-1.1.9-0.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/easyAI-1.1.9-1.jfif\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/easyAI-1.1.9-2.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/easyAI-1.1.9-3.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/easyAI-1.1.9-4.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/easyAI-1.1.9-5.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/easyAI-1.1.9-6.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/easyAI-1.1.9-7.webp\\"],\\"datePublished\\":\\"2024-07-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-19T11:30:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"easyAI\\"}]}"]],"description":"前言 EasyAi的出现对于Java的意义，等同于在JavaWeb领域spring出现的意义一样——做一个开箱即用，让每一个开发者都可以使用EasyAi，来开发符合自己人工智能业务需求的小微模型，这就是它的使命！ EasyAi介绍 EasyAi无任何依赖，它是一个原生Java人工智能算法框架。首先，**它可以Maven一键丝滑引入我们的Java项目，无..."},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"EasyAi介绍","slug":"easyai介绍","link":"#easyai介绍","children":[{"level":3,"title":"v1.1.9 更新内容","slug":"v1-1-9-更新内容","link":"#v1-1-9-更新内容","children":[]},{"level":3,"title":"图像识别FastYolo效果展示","slug":"图像识别fastyolo效果展示","link":"#图像识别fastyolo效果展示","children":[]},{"level":3,"title":"sayOrder人工智能客服","slug":"sayorder人工智能客服","link":"#sayorder人工智能客服","children":[]},{"level":3,"title":"sayOrder交互基本业务流程演示","slug":"sayorder交互基本业务流程演示","link":"#sayorder交互基本业务流程演示","children":[]},{"level":3,"title":"以上是SayOrder（基于easyAI引擎）自定义业务接口的简单案例演示，具体安装部署及细节详情请到其主页下载:https://gitee.com/dromara/sayOrder","slug":"以上是sayorder-基于easyai引擎-自定义业务接口的简单案例演示-具体安装部署及细节详情请到其主页下载-https-gitee-com-dromara-sayorder","link":"#以上是sayorder-基于easyai引擎-自定义业务接口的简单案例演示-具体安装部署及细节详情请到其主页下载-https-gitee-com-dromara-sayorder","children":[]},{"level":3,"title":"架构设计","slug":"架构设计","link":"#架构设计","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":3,"title":"关注项目","slug":"关注项目","link":"#关注项目","children":[]}]}],"git":{"createdTime":1723912674000,"updatedTime":1724067023000,"contributors":[{"name":"itanxyu","username":"itanxyu","email":"itanxy@126.com","commits":2,"url":"https://github.com/itanxyu"}]},"readingTime":{"minutes":4.57,"words":1372},"filePathRelative":"zh/news/easyAI-1.1.9.md","localizedDate":"2024年7月1日","autoDesc":true,"excerpt":"<p><img src=\\"/assets/img/news/easyAI-1.1.9-0.png\\" alt=\\"\\"></p>\\n<h2>前言</h2>\\n<p>EasyAi的出现对于Java的意义，等同于在JavaWeb领域spring出现的意义一样——做一个开箱即用，让每一个开发者都可以使用EasyAi，来开发符合自己人工智能业务需求的小微模型，这就是它的使命！</p>\\n<h2>EasyAi介绍</h2>\\n<p>EasyAi无任何依赖，它是一个原生Java人工智能算法框架。首先，**它可以Maven一键丝滑引入我们的Java项目，无需任何额外的环境配置与依赖，做到开箱即用。**再者，它既有一些我们已经封装好的图像目标检测及人工智能客服的模块，也提供各种深度学习，机器学习，强化学习，启发式学习，矩阵运算，等底层算法工具。开发者可以通过简单的学习，就能完成根据自身业务，深度开发符合自己业务的小微模型</p>"}');export{f as comp,I as data};

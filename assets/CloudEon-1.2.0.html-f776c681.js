import{_ as i}from"./CloudEon-1.2.0-4-a7ea2624.js";import{_ as a,r,o as l,c as s,a as e,b as o,d as t,e as d}from"./app-9548bae6.js";const c="/assets/img/news/CloudEon-1.2.0-1.png",p="/assets/img/news/CloudEon-1.2.0-2.png",h="/assets/img/news/CloudEon-1.2.0-3.png",u={},g=d('<h3 id="新增功能-features" tabindex="-1"><a class="header-anchor" href="#新增功能-features" aria-hidden="true">#</a> <strong>新增功能（Features）：</strong></h3><p>1. 实现用 k8s job 进行初始化服务任务，替换原来用 ssh 执行命令的方式，提高兼容性和更好监听状态和获取日志</p><p>2. 增加 namespace 设置功能，不再写死 default namespace</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>3. 集成新组件 Trino</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>4. 集成新组件 Amoro</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>5. 初步集成 filebeat 用于大数据服务的日志采集</p><p>6. 实现下载服务实例配置文件接口</p><h3 id="修复缺陷-bug-fixes" tabindex="-1"><a class="header-anchor" href="#修复缺陷-bug-fixes" aria-hidden="true">#</a> <strong>修复缺陷（Bug Fixes）：</strong></h3><ol><li>修复安装 dinky，SQL 脚本找不到问题</li><li>修复 flink standalone 的 rest 地址无法外部访问</li><li>修复 hdfs 组件的环境变量，导致 pod 内无法正常使用 hdfs 命令</li><li>修复 flink 提交任务到 YARN 集群问题</li></ol><h3 id="优化改进-enhancements" tabindex="-1"><a class="header-anchor" href="#优化改进-enhancements" aria-hidden="true">#</a> <strong>优化改进（Enhancements）：</strong></h3><ol><li>组件 jvm 参数增加 gc 日志文件生成</li><li>优化贡献文档</li><li>优化任务日志输出，精简日志内容</li><li>选择框架会自动显示内置的服务版本</li><li>FAQ 文档增加去除节点污点方式</li><li>优化 deployment 启动，删除无用日志打印</li><li>优化 K8S 节点信息提取 hostname 和 ip，兼容 K8S 和 K3S</li></ol><hr><p>[项目简介]</p><p>CloudEon 是一款基于 Kubernetes 的云原生大数据平台，旨在为用户提供一种简单、高效、可扩展的大数据解决方案。如果 CloudEon 项目对您有帮助，请在 Gitee 或 Github 搜索 CloudEon 支持一下，点击 star 加关注。</p><p>CloudEon 遵循 Apache-2.0 开源协议，代码完全开源，如果您想为开源社区做出贡献，非常欢迎加入 CloudEon 项目，与其他开发者一起共同推动项目的发展。</p>',18),_={href:"https://gitee.com/dromara/CloudEon",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/dromara/CloudEon",target:"_blank",rel:"noopener noreferrer"},m={href:"https://cloudeon.top/",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"欢迎加入社区技术交流",-1),E=e("p",null,"公众号：CloudEon 开源",-1),x=e("p",null,"微信社区：",-1),C=e("figure",null,[e("img",{src:i,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function k(y,N){const n=r("ExternalLinkIcon");return l(),s("div",null,[g,e("p",null,[o("Gitee："),e("a",_,[o("https://gitee.com/dromara/CloudEon"),t(n)])]),e("p",null,[o("Github："),e("a",f,[o("https://github.com/dromara/CloudEon"),t(n)])]),e("p",null,[o("官网："),e("a",m,[o("https://cloudeon.top/"),t(n)])]),b,E,x,C])}const z=a(u,[["render",k],["__file","CloudEon-1.2.0.html.vue"]]);export{z as default};
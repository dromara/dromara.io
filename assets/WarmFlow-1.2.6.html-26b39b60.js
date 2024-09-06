import{_ as i}from"./WarmFlow-1.2.6-0-ff91bfd4.js";import{_ as a}from"./qrcode_zsxq-8eef4d18.js";import{_ as l,o as p,c as r,f as e}from"./app-b61402ca.js";const o={},t=e('<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <img src="'+i+'" alt=""></h2><h2 id="warm-flow-1-2-6版本更新" tabindex="-1"><a class="header-anchor" href="#warm-flow-1-2-6版本更新" aria-hidden="true">#</a> warm-flow 1.2.6版本更新</h2><h3 id="本次改动" tabindex="-1"><a class="header-anchor" href="#本次改动" aria-hidden="true">#</a> 本次改动</h3><blockquote><p>流程状态：可接收外部传递，可以支持字符串<br> 新增api：增加获取下个节点信息<br> id生成：支持其他位数的id，可以前端精度问题的序列化处理</p></blockquote><ul><li><p>v1.2.6 2024-08-28</p></li><li><p>[feat] 增加获取下个节点集合api  @xiarigang</p></li><li><p>[feat] id内存策略新增14、15位雪花算法支持</p></li><li><p>[feat] 流程激活和挂起案例  @xiaoxiaoliu889</p></li><li><p>[feat] 增加基于流程定义Id获取流程图  @xiaoxiaoliu889</p></li><li><p>[update] 流程状态改成字符串类型  @xiarigang</p></li><li><p>[update] 测试模块拆分独立仓库</p></li><li><p>[update] modes-sb删除加载配置文件，改为有上层jar加载</p></li><li><p>[update] flex solon版本yml弄错了，config调整</p></li><li><p>[refactor] 流程版本号生成逻辑重构  @xiaoxiaoliu889</p></li><li><p>[fix] 修复deleteByTaskIds 中的根据无法正确删除user数据</p></li><li><p>[fix] 修复 jpa solon注解问题  @vanlin</p></li><li><p>[fix] 修复 并行网关三个任务分支的时候，错误结束流程的问题</p></li><li><p>执行升级脚本【warm-flow_1.2.6.sql】</p></li><li><p>流程状态字段flow_status改为string类型，业务系统需要对应修改</p></li><li><p>【升级注意事项】</p></li><li><p>更新日志</p></li></ul><h2 id="warm-flow介绍" tabindex="-1"><a class="header-anchor" href="#warm-flow介绍" aria-hidden="true">#</a> warm-flow介绍</h2><blockquote><p>[!IMPORTANT] Warm-Flow国产工作流引擎🎉，其特点简洁轻量但又不简单，五脏俱全，组件独立，可扩展，可满足中小项目的组件。</p></blockquote><ol><li><p>简洁易用：只有7张表，代码量少，可快速上手和集成</p></li><li><p>审批功能：支持通过、退回、任意跳转、转办、终止、会签、票签、委派和加减签、互斥和并行网关</p></li><li><p>监听器与流程变量：支持五种监听器，可应对不同场景，灵活可扩展，参数传递，动态权限</p></li><li><p>流程图：流程引擎自带流程图，可在不集成流程设计器情况下使用</p></li><li><p>条件表达式：内置常见的条件表达式，并且支持自定义扩展</p></li><li><p>orm框架扩展：目前支持MyBatis、Mybatis-Plus、Mybatis-Flex和Jpa，后续会由社区提供其他支持，扩展方便</p></li><li><p>数据库支持：目前支持MySQL 、Oracle 和PostgreSQL，后续会继续支持其他数据库或者国产数据库</p></li><li><p>多租户与软删除：流程引擎自身维护多租户和软删除实现，也可使用对应orm框架的实现方式</p></li><li><p>支持角色、部门和用户等权限配置</p></li><li><p>同时支持spring和solon</p></li><li><p>兼容java8和java17,理论11也可以</p></li><li><p>官方提供基于ruoyi-vue封装实战项目，很实用</p></li></ol><h2 id="演示地址" tabindex="-1"><a class="header-anchor" href="#演示地址" aria-hidden="true">#</a> 演示地址</h2><ul><li>admin/admin123</li></ul><p>演示地址：http://www.hhzai.top</p><h2 id="官网" tabindex="-1"><a class="header-anchor" href="#官网" aria-hidden="true">#</a> 官网</h2><p>http://warm-flow.cn</p><p>关于 Dromara</p><p>Dromara 是由国内顶尖的开源项目作者共同组成的开源社区。提供包括分布式事务，流行工具，企业级认证，微服务RPC，运维监控，Agent监控，分布式日志，调度编排等一系列开源产品、解决方案与咨询、技术支持与培训认证服务。技术栈全面开源共建、 保持社区中立，致力于为全球用户提供微服务云原生解决方案。让参与的每一位开源爱好者，体会到开源的快乐。</p><p>Dromara开源社区目前拥有10+GVP项目，总star数量超过十万，构建了上万人的开源社区，有成千上万的个人及团队在使用Dromara社区的开源项目。</p><p><strong>欢迎大家来到知识星球和我互动</strong></p><figure><img src="'+a+'" alt="" tabindex="0"><figcaption></figcaption></figure>',18),s=[t];function d(n,h){return p(),r("div",null,s)}const u=l(o,[["render",d],["__file","WarmFlow-1.2.6.html.vue"]]);export{u as default};
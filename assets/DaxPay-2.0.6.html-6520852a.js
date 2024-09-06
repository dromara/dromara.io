import{_ as a,a as i,b as e,c as d,d as r,e as t,f as h,g as p,h as l}from"./DaxPay-2.0.6-8-857d4a06.js";import{_ as o,o as c,c as n,f as s}from"./app-b61402ca.js";const u={},f=s('<h2 id="项目介绍" tabindex="-1"><a class="header-anchor" href="#项目介绍" aria-hidden="true">#</a> 项目介绍</h2><p><code>DaxPay</code>是<code>Dromara开源社区</code>旗下一套开源支付网关系统，已经对接支付宝、微信支付、云闪付相关的接口。独立部署，提供接口供业务系统进行调用，不对原有系统产生影响。</p><h2 id="源码地址" tabindex="-1"><a class="header-anchor" href="#源码地址" aria-hidden="true">#</a> 源码地址</h2><table><thead><tr><th>项目</th><th>GITEE</th><th>GITHUB</th></tr></thead><tbody><tr><td>后端地址</td><td>https://gitee.com/dromara/dax-pay</td><td>https://github.com/dromara/dax-pay</td></tr><tr><td>Web前端地址</td><td>https://gitee.com/bootx/dax-pay-ui</td><td>https://github.com/xxm1995/dax-pay-ui</td></tr><tr><td>H5前端地址</td><td>https://gitee.com/bootx/dax-pay-h5</td><td>https://github.com/xxm1995/dax-pay-h5</td></tr></tbody></table><h2 id="系统亮点" tabindex="-1"><a class="header-anchor" href="#系统亮点" aria-hidden="true">#</a> 系统亮点</h2><ul><li><p>封装各类支付通道的接口为统一的接口，方便业务系统进行调用，简化对接多种支付方式的复杂度</p></li><li><p>已对接<code>微信支付</code>、<code>支付宝</code>和<code>云闪付</code>相关的接口</p></li><li><p>支持支付、退款、对账、分账等支付相关的能力</p></li><li><p>提供<code>HTTP</code>方式接口调用能力，和<code>Java</code>版本的<code>SDK</code>，方便业务系统进行对接</p></li><li><p>接口请求和响应数据支持启用签名机制，保证交易安全可靠</p></li><li><p>提供管理平台，方便运营人员进行管理和操作</p></li><li><p>提供<code>聚合支付</code>、<code>电脑收银台</code>和<code>手机收银台</code>的演示模块，供开发者参考其实现支付功能的逻辑</p></li><li><p>系统源码为商业友好的<code>Apache-2.0</code>协议，文档为更加宽松的<code>MIT</code>协议，不需要担心后续代码和文档会突然进行收费</p></li></ul><h2 id="重构和更新说明" tabindex="-1"><a class="header-anchor" href="#重构和更新说明" aria-hidden="true">#</a> 重构和更新说明</h2><blockquote><p>本次重构前的<code>DaxPay</code>存在一些设计思路上的问题，如为了与其他支付系统做出不一样的东西，引入了组合支付的概念，导致为了解决极少数的场景而付出增加了翻倍的复杂度。以及前后开发考虑的不同，系统中各类概念、过度设计、命名不统一随处可见，对阅读源码和二次开发产生了极大的障碍。经过和社区交流群讨论，以及对多商户版设计中确定的思路，决定对单商户版进行瘦身，专注小微商户和开发者需求，以及作为多商户版的验证前哨，进行一次大的系统重构，来更好应对后续的演进。</p></blockquote><h3 id="订单概念简化" tabindex="-1"><a class="header-anchor" href="#订单概念简化" aria-hidden="true">#</a> 订单概念简化</h3><ul><li><p>去除通道支付订单概念，不再存在多级订单，从一对多简化为一对一</p></li><li><p>去除通道退款概念，只与支付订单产生关联，不再与通道支付订单有任何联系，退款单也回归一对一关系</p></li><li><p>支付和退款相关的回调记录、关闭记录、同步记录等，关联关系都简化为一对多，不再存在多对多的关系</p></li><li><p>对各类交易号生成规则进行优化，由原有的雪花ID更改为有具体业务含义的编号</p></li></ul><h3 id="支付流程简化" tabindex="-1"><a class="header-anchor" href="#支付流程简化" aria-hidden="true">#</a> 支付流程简化</h3><ul><li><p>去除组合支付概念，牺牲5%的适用场景换取了业务复杂度下降50%，代码量下降30%</p></li><li><p>简化支付链路长度和分支数，去除部分过度使用的设计模式，使代码更容易入手</p></li><li><p>支付同步、回调和退款同步、回调去除组合支付导致的特殊处理逻辑</p></li><li><p>消息通知发送流程改造，不在使用复杂继承组合关系，只保留一级类继承关系</p></li><li><p>回调通知处理不再使用继承模式，修改为组合模式，提高阅读和debug的便利性</p></li></ul><h3 id="对账流程优化" tabindex="-1"><a class="header-anchor" href="#对账流程优化" aria-hidden="true">#</a> 对账流程优化</h3><ul><li><p>将原有晦涩的流程进行简化抽象位对账单和对账差异两块</p></li><li><p>保存从三方支付机构下载下来的原始对账文件，并提供下载功能</p></li><li><p>支持下载系统交易账单、对账差异明细单来就进行线下对账</p></li></ul><h3 id="分账自动化" tabindex="-1"><a class="header-anchor" href="#分账自动化" aria-hidden="true">#</a> 分账自动化</h3><ul><li><p>支持自动根据默认分账组队支付完成的订单进行分账</p></li><li><p>支持自动同步对账结果，并自动对分账单进行完结</p></li></ul><h3 id="统一api接口风格" tabindex="-1"><a class="header-anchor" href="#统一api接口风格" aria-hidden="true">#</a> 统一API接口风格</h3><ul><li><p>统一参数命名规则，包括支付、退款、对账、分账等相关参数的属性，实现风格的统一</p></li><li><p>统一公共请求参数和响应参数，同时响应参数格式，便于进行统一处理</p></li><li><p>对响应参数默认进行签名，避免被中间人篡改导致资金损失</p></li><li><p>初步统一异常返回格式，后续将各类异常码和异常信息进行统一</p></li></ul><h3 id="前端交互优化" tabindex="-1"><a class="header-anchor" href="#前端交互优化" aria-hidden="true">#</a> 前端交互优化</h3><ul><li><p>对85%支付相关的页面进行优化，统一页面交互逻辑</p></li><li><p>适配各种查询条件和显示，初步完成管理端的功能完备性</p></li><li><p>对金额进行统一，统一使用元作为显示单位，目前已完成完成80%</p></li></ul><h3 id="脚手架简化" tabindex="-1"><a class="header-anchor" href="#脚手架简化" aria-hidden="true">#</a> 脚手架简化</h3><ul><li><p>从jar集成修改为源码集成</p></li><li><p>对无用模块进行剔除简化</p></li></ul><h2 id="系统前瞻" tabindex="-1"><a class="header-anchor" href="#系统前瞻" aria-hidden="true">#</a> 系统前瞻</h2><h3 id="多商户版启动开发" tabindex="-1"><a class="header-anchor" href="#多商户版启动开发" aria-hidden="true">#</a> 多商户版启动开发</h3><blockquote><p>针对于中大型项目，各类复杂的支付业务，能够实现多商户、多应用自主进件、收单；以及根据规则、自动选择最优的直连或间连通道进行收单；预计多商户版本将于第四季度发布，尽请期待！</p></blockquote><ul><li><p>基于Spring Boot3.X + JDK 21 + Postgresql搭建，拥抱新技术，适应后续Java新版本变化</p></li><li><p>引入商户、应用等概念，系统将会分为支付网关端、运营管理端、商户端，适应更复杂的业务场景</p></li><li><p>支付相关代码直接使用官方SDK，增加系统自主可控性</p></li><li><p>各类加密方式切换为国密算法，更方便适应国产化、安全可控的要求</p></li><li><p>底层脚手架重构，去除无关业务模块，重新设计系统模块，提高系统性能和操作便利性</p></li><li><p>更多特性在设计规划中</p></li></ul><h3 id="单商户后续演进" tabindex="-1"><a class="header-anchor" href="#单商户后续演进" aria-hidden="true">#</a> 单商户后续演进</h3><blockquote><p>单商户版本定位于小微商户，中小企业开发者，可用于简单的收单、小型项目支付的组成、以及学习参考使用。同时也会对一些多商户版本的设计和功能进行先期验证。</p></blockquote><ul><li><p>支持支付宝和微信V3版本接口</p></li><li><p>支持撤销、转账等更多支付接口</p></li><li><p>增加微信通知、钉钉通知、飞书通知能力</p></li><li><p>支持服务商模式，以及一些间连通道，如通联支付、易宝支付等，更好适应小微收单场景</p></li></ul><h2 id="演示地址" tabindex="-1"><a class="header-anchor" href="#演示地址" aria-hidden="true">#</a> 演示地址</h2><h3 id="管理平台" tabindex="-1"><a class="header-anchor" href="#管理平台" aria-hidden="true">#</a> 管理平台:</h3><blockquote><p>注：演示账号部分功能修改删除权限未开放。</p></blockquote><p>地址：https://daxpay.demo.bootx.cn 账号：daxpay 密码：123456</p><h3 id="网关接口" tabindex="-1"><a class="header-anchor" href="#网关接口" aria-hidden="true">#</a> 网关接口</h3><blockquote><p>注：接口平台只开放支付网关相关的接口，不开放系统其他接口。</p></blockquote><p>地址: https://daxpay.server.bootx.cn/doc.html 账号: daxpay 密码: 123456</p><h3 id="收银台" tabindex="-1"><a class="header-anchor" href="#收银台" aria-hidden="true">#</a> 收银台</h3><blockquote><p>请勿大额支付，可以通过后台管理平台进行退款</p></blockquote><p>电脑收银台地址: https://daxpay.demo.bootx.cn/#/cashier</p><p>手机收银台地址: https://daxpay.demo.bootx.cn/h5/#/cashier/uniCashier</p><h2 id="系统展示" tabindex="-1"><a class="header-anchor" href="#系统展示" aria-hidden="true">#</a> 系统展示</h2><h3 id="pc收银台" tabindex="-1"><a class="header-anchor" href="#pc收银台" aria-hidden="true">#</a> PC收银台</h3><figure><img src="'+a+'" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="驾驶舱" tabindex="-1"><a class="header-anchor" href="#驾驶舱" aria-hidden="true">#</a> 驾驶舱</h3><figure><img src="'+i+'" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="支付订单" tabindex="-1"><a class="header-anchor" href="#支付订单" aria-hidden="true">#</a> 支付订单</h3><figure><img src="'+e+'" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="订单详情" tabindex="-1"><a class="header-anchor" href="#订单详情" aria-hidden="true">#</a> 订单详情</h3><figure><img src="'+d+'" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="分账组" tabindex="-1"><a class="header-anchor" href="#分账组" aria-hidden="true">#</a> 分账组</h3><figure><img src="'+r+'" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="沟通交流" tabindex="-1"><a class="header-anchor" href="#沟通交流" aria-hidden="true">#</a> 沟通交流</h2><p>一个人的能力总是有限的，非常欢迎大家能够一起来交流，一起成长！！！</p><h3 id="qq交流群" tabindex="-1"><a class="header-anchor" href="#qq交流群" aria-hidden="true">#</a> QQ交流群</h3><figure><img src="'+t+'" alt="" tabindex="0"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="微信扫码加小助手拉群" tabindex="-1"><a class="header-anchor" href="#微信扫码加小助手拉群" aria-hidden="true">#</a> 微信扫码加小助手拉群</h3><figure><img src="'+p+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>关于 Dromara</p><p>Dromara 是由国内顶尖的开源项目作者共同组成的开源社区。提供包括分布式事务，流行工具，企业级认证，微服务RPC，运维监控，Agent监控，分布式日志，调度编排等一系列开源产品、解决方案与咨询、技术支持与培训认证服务。技术栈全面开源共建、 保持社区中立，致力于为全球用户提供微服务云原生解决方案。让参与的每一位开源爱好者，体会到开源的快乐。</p><p>Dromara开源社区目前拥有10+GVP项目，总star数量超过十万，构建了上万人的开源社区，有成千上万的个人及团队在使用Dromara社区的开源项目。</p><p><strong>欢迎大家来到知识星球和我互动</strong></p><figure><img src="'+l+'" alt="" tabindex="0"><figcaption></figcaption></figure>',63),x=[f];function b(g,m){return c(),n("div",null,x)}const q=o(u,[["render",b],["__file","DaxPay-2.0.6.html.vue"]]);export{q as default};
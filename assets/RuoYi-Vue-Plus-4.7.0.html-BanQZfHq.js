import{_ as d,c as e,a as i,o as l}from"./app-BmgeuuSW.js";const a={};function r(o,t){return l(),e("div",null,t[0]||(t[0]=[i('<h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><h3 id="依赖升级" tabindex="-1"><a class="header-anchor" href="#依赖升级"><span>依赖升级</span></a></h3><ul><li>update springboot 2.7.9 =&gt; 2.7.11 修复 DoS 漏洞</li><li>update xxljob 2.3.1 =&gt; 2.4.0</li><li>update minio 升级至最新版 避免低版本信息泄漏问题</li><li>update hutool 5.8.15 =&gt; 5.8.18</li><li>update redisson 3.20.0 =&gt; 3.20.1</li></ul><h3 id="功能更新" tabindex="-1"><a class="header-anchor" href="#功能更新"><span>功能更新</span></a></h3><ul><li>update 优化 更改 sys_oss_config 表注释 避免误解</li><li>update 项目正式入驻 dromara 开源社区 更改项目地址</li><li>update 全新 logo 全新背景图(设计师打造)</li><li>update 优化代码生成 同步操作使用批量处理</li><li>update 重写项目 readme 说明</li><li>update 修改 controller 中校验直接返回 R.fail</li><li>update 更换默认用户头像</li><li>update 优化 限流注解 key 支持简单 spel 表达式</li><li>update 优化弹窗后导航栏偏移的问题</li><li>update 优化$tab.closePage 后存在非首页页签时不应该跳转首页</li><li>update delete build style</li><li>update 优化选择图标组件</li><li>update 移除 vue-multiselect 样式</li><li>update 优化固定头部页签滚动条被隐藏的问题</li><li>update 按代码规范补全重写注解</li><li>update 优化 极端情况获取 LoginUser 可能为 null 问题</li><li>update 优化 更改系统所有服务日志配置文件命名为 logback-plus.xml 避免与其他框架默认配置冲突</li><li>update 优化 加解密模块 将 null 判断下推防止任何可能的 null 出现</li><li>update 优化 调整配置文件错误注释</li><li>update 优化 在线用户 token 获取方式</li><li>update 优化 用户更改角色 踢掉角色相关所有在线用户</li><li>update 优化 下拉图标选择组件优化：1.已选择图标高亮回显 2.滚动条采用 el-scrollbar</li><li>update 优化 Vue 的 DictTag 组件 当 value 没有匹配的值时 展示空 value</li><li>update 优化 恢复翻页/切换路由滚动功能</li></ul><h3 id="新增功能" tabindex="-1"><a class="header-anchor" href="#新增功能"><span>新增功能</span></a></h3><ul><li>add 新增 ip2region 实现离线 IP 地址定位库</li><li>add 增加 邮箱验证码发送接口</li><li>add 增加 邮箱登陆接口</li><li>add 增加 EncryptUtils 加解密安全工具类 可以处理 base64,aes,sm4,sm2,rsa,md5,sha256 加解密</li><li>add 增加 EncryptUtils 类中增加国密 sm3 的不可逆加密算法</li><li>add 新增 忽略数据权限写法 防止异常不执行关闭问题</li></ul><h3 id="问题修复" tabindex="-1"><a class="header-anchor" href="#问题修复"><span>问题修复</span></a></h3><ul><li>fix 修复 代码生成 点选按钮不生效问题</li><li>fix 修复 用户密码更新无效问题</li><li>fix 修复 findInSet 在 mysql 下方法搜索非数字字段时 无引号报错问题</li><li>fix 修复 oracle postgres 数据库日志表索引创建错误</li><li>fix 角色列表关联多表 sort 值都一样 导致排序不稳定、临时表没有原来的主键顺序</li><li>fix 修复 DefaultExcelResult 单词拼写错误</li><li>fix 修复页面切换时布局错乱的问题</li><li>fix 修复 tab 栏“关闭其他”异常的问题</li><li>fix 修复 加解密拦截器 对象属性为 null 问题</li><li>fix 修复 取消 oss 预览状态修改 图标变化不正常问题</li><li>fix 修复 开启 TopNav 后一级菜单路由参数设置无效问题</li><li>fix 修复 路由跳转被阻止时 vue-router 内部产生报错信息问题</li><li>fix 修复 缓存列表：多次清除操作，提示不变的问题</li></ul><h2 id="平台简介" tabindex="-1"><a class="header-anchor" href="#平台简介"><span>平台简介</span></a></h2><blockquote><p>RuoYi-Vue-Plus 是重写 RuoYi-Vue 针对 <code>分布式集群</code> 场景全方位升级(不兼容原框架)</p></blockquote><blockquote><p>项目代码、文档 均开源免费可商用 遵循开源协议在项目中保留开源协议文件即可<br> 活到老写到老 为兴趣而开源 为学习而开源 为让大家真正可以学到技术而开源</p></blockquote><h2 id="本框架与-ruoyi-的功能差异" tabindex="-1"><a class="header-anchor" href="#本框架与-ruoyi-的功能差异"><span>本框架与 RuoYi 的功能差异</span></a></h2><table><thead><tr><th>功能</th><th>本框架</th><th>RuoYi</th></tr></thead><tbody><tr><td>前端项目</td><td>基于 vue3-element-admin 开源项目重写 Vue3 + TS + ElementPlus</td><td>基于 Vue2/Vue3 + JS</td></tr><tr><td>后端项目结构</td><td>采用插件化 + 扩展包形式 结构解耦 易于扩展</td><td>模块相互注入耦合严重难以扩展</td></tr><tr><td>后端代码风格</td><td>严格遵守 Alibaba 规范与项目统一配置的代码格式化</td><td>代码书写与常规结构不同阅读障碍大</td></tr><tr><td>Web 容器</td><td>采用 Undertow 基于 XNIO 的高性能容器</td><td>采用 Tomcat</td></tr><tr><td>权限认证</td><td>采用 Sa-Token、Jwt 静态使用功能齐全 低耦合 高扩展</td><td>Spring Security 配置繁琐扩展性极差</td></tr><tr><td>权限注解</td><td>采用 Sa-Token 支持注解 登录校验、角色校验、权限校验、二级认证校验、HttpBasic 校验、忽略校验。 角色与权限校验支持多种条件 如 <code>AND</code> <code>OR</code> 或 <code>权限 OR 角色</code> 等复杂表达式</td><td>只支持是否存在匹配</td></tr><tr><td>关系数据库支持</td><td>原生支持 MySQL、Oracle、PostgreSQL、SQLServer 。可同时使用异构切换</td><td>支持 Mysql、Oracle 不支持同时使用、不支持异构切换</td></tr><tr><td>缓存数据库</td><td>支持 Redis 5-7 支持大部分新功能特性 如 分布式限流、分布式队列</td><td>Redis 简单 get set 支持</td></tr><tr><td>Redis 客户端</td><td>采用 Redisson Redis 官方推荐 基于 Netty 的客户端工具 。支持 Redis 90%以上的命令 底层优化规避很多不正确的用法 例如: keys 被转换为 scan 。支持单机、哨兵、单主集群、多主集群等模式</td><td>Lettuce + RedisTemplate 支持模式少 工具使用繁琐 。连接池采用 common-pool Bug 多经常性出问题</td></tr><tr><td>缓存注解</td><td>采用 Spring-Cache 注解 对其扩展了实现支持了更多功能 。例如 过期时间 最大空闲时间 组最大长度等 只需一个注解即可完成数据自动缓存</td><td>需手动编写 Redis 代码逻辑</td></tr><tr><td>ORM 框架</td><td>采用 Mybatis-Plus 基于对象几乎不用写 SQL 全 java 操作 功能强大插件众多。例如多租户插件 分页插件 乐观锁插件等等</td><td>采用 Mybatis 基于 XML 需要手写 SQL</td></tr><tr><td>SQL 监控</td><td>采用 p6spy 可输出完整 SQL 与执行时间监控</td><td>log 输出 需手动拼接 sql 与参数无法快速查看调试问题</td></tr><tr><td>数据分页</td><td>采用 Mybatis-Plus 分页插件 。框架对其进行了扩展 对象化分页对象 支持多种方式传参 支持前端多排序 复杂排序</td><td>采用 PageHelper 仅支持单查询分页 参数只能从 param 传 只能单排序 功能扩展性差 体验不好</td></tr><tr><td>数据权限</td><td>采用 Mybatis-Plus 插件 自行分析拼接 SQL 无感式过滤。 只需为 Mapper 设置好注解条件 支持多种自定义 不限于部门角色</td><td>采用 注解+aop 实现 基于部门角色 生成的 sql 兼容性差 不支持其他业务扩展。生成 sql 后需手动拼接到具体业务 sql 上 对于多个 Mapper 查询不起作用</td></tr><tr><td>数据脱敏</td><td>采用 注解 + jackson 序列化期间脱敏 支持不同模块不同的脱敏条件 。支持多种策略 如身份证、手机号、地址、邮箱、银行卡等 可自行扩展</td><td>无</td></tr><tr><td>数据加解密</td><td>采用 注解 + mybatis 拦截器 对存取数据期间自动加解密 。支持多种策略 如 BASE64、AES、RSA、SM2、SM4 等</td><td>无</td></tr><tr><td>数据翻译</td><td>采用 注解 + jackson 序列化期间动态修改数据 数据进行翻译。 支持多种模式: <code>映射翻译</code> <code>直接翻译</code> <code>其他扩展条件翻译</code> 接口化两步即可完成自定义扩展 内置多种翻译实现</td><td>无</td></tr><tr><td>多数据源框架</td><td>采用 dynamic-datasource 支持世面大部分数据库 。通过 yml 配置即可动态管理异构不同种类的数据库 也可通过前端页面添加数据源 。支持 spel 表达式从请求头参数等条件切换数据源</td><td>基于 druid 手动编写代码配置数据源 配置繁琐 支持性差</td></tr><tr><td>多数据源事务</td><td>采用 dynamic-datasource 支持多数据源不同种类的数据库事务回滚</td><td>不支持</td></tr><tr><td>数据库连接池</td><td>采用 HikariCP Spring 官方内置连接池 配置简单 以性能与稳定性闻名天下</td><td>采用 druid bug 众多 社区维护差 活跃度低 配置众多繁琐性能一般</td></tr><tr><td>数据库主键</td><td>采用 雪花 ID 基于时间戳的 有序增长 唯一 ID 再也不用为分库分表 数据合并主键冲突重复而发愁</td><td>采用 数据库自增 ID 支持数据量有限 不支持多数据源主键唯一</td></tr><tr><td>WebSocket 协议</td><td>基于 Spring 封装的 WebSocket 协议 扩展了 Token 鉴权与分布式会话同步 不再只是基于单机的废物</td><td>无</td></tr><tr><td>序列化</td><td>采用 Jackson Spring 官方内置序列化 靠谱!!!</td><td>采用 fastjson bugjson 远近闻名</td></tr><tr><td>分布式幂等</td><td>参考美团 GTIS 防重系统简化实现(细节可看文档)</td><td>手动编写注解基于 aop 实现</td></tr><tr><td>分布式任务调度</td><td>采用 Xxl-Job 天生支持分布式 统一的管理中心</td><td>采用 Quartz 基于数据库锁性能差 集群需要做很多配置与改造</td></tr><tr><td>文件存储</td><td>采用 Minio 分布式文件存储 天生支持多机、多硬盘、多分片、多副本存储。支持权限管理 安全可靠 文件可加密存储</td><td>采用 本机文件存储 文件裸漏 易丢失泄漏 不支持集群有单点效应</td></tr><tr><td>云存储</td><td>采用 AWS S3 协议客户端 支持 七牛、阿里、腾讯 等一切支持 S3 协议的厂家</td><td>不支持</td></tr><tr><td>短信</td><td>支持 阿里、腾讯 只需在 yml 配置好厂家密钥即可使用 接口化支持扩展其他厂家</td><td>不支持</td></tr><tr><td>邮件</td><td>采用 mail-api 通用协议支持大部分邮件厂商</td><td>不支持</td></tr><tr><td>接口文档</td><td>采用 SpringDoc、javadoc 无注解零入侵基于 java 注释。只需把注释写好 无需再写一大堆的文档注解了</td><td>采用 Springfox 已停止维护 需要编写大量的注解来支持文档生成</td></tr><tr><td>校验框架</td><td>采用 Validation 支持注解与工具类校验 注解支持国际化</td><td>仅支持注解 且注解不支持国际化</td></tr><tr><td>Excel 框架</td><td>采用 Alibaba EasyExcel 基于插件化 。框架对其增加了很多功能 例如 自动合并相同内容 自动排列布局 字典翻译等</td><td>基于 POI 手写实现 功能有限 复杂 扩展性差</td></tr><tr><td>工具类框架</td><td>采用 Hutool、Lombok 上百种工具覆盖 90%的使用需求 基于注解自动生成 get set 等简化框架大量代码</td><td>手写工具稳定性差易出问题 工具数量有限 代码臃肿需自己手写 get set 等</td></tr><tr><td>监控框架</td><td>采用 SpringBoot-Admin 基于 SpringBoot 官方 actuator 探针机制。实时监控服务状态 框架还为其扩展了在线日志查看监控</td><td>无</td></tr><tr><td>链路追踪</td><td>采用 Apache SkyWalking 还在为请求不知道去哪了 到哪出了问题而烦恼吗 。 用了它即可实时查看请求经过的每一处每一个节点</td><td>无</td></tr><tr><td>代码生成器</td><td>只需设计好表结构 一键生成所有 crud 代码与页面 。降低 80%的开发量 把精力都投入到业务设计上 。 框架为其适配 MP、SpringDoc 规范化代码 同时支持动态多数据源代码生成</td><td>代码生成原生结构 只支持单数据源生成</td></tr><tr><td>部署方式</td><td>支持 Docker 编排 一键搭建所有环境 让开发人员从此不再为搭建环境而烦恼</td><td>原生 jar 部署 其他环境需手动下载安装 自行搭建</td></tr><tr><td>项目路径修改</td><td>提供详细的修改方案文档 并为其做了一些改动 非常简单即可修改成自己想要的</td><td>需要做很多改造 文档说明有限</td></tr><tr><td>国际化</td><td>基于请求头动态返回不同语种的文本内容 开发难度低 有对应的工具类 支持大部分注解内容国际化</td><td>只提供基础功能 其他需自行编写扩展</td></tr><tr><td>代码单例测试</td><td>提供单例测试 使用方式编写方法与 maven 多环境单测插件</td><td>只提供基础功能 其他需自行编写扩展</td></tr><tr><td>Demo 案例</td><td>提供框架功能的实际使用案例 单独一个模块提供了很多很全</td><td>无</td></tr></tbody></table><h2 id="本框架与-ruoyi-的业务差异" tabindex="-1"><a class="header-anchor" href="#本框架与-ruoyi-的业务差异"><span>本框架与 RuoYi 的业务差异</span></a></h2><table><thead><tr><th>业务</th><th>功能说明</th><th>本框架</th><th>RuoYi</th></tr></thead><tbody><tr><td>用户管理</td><td>用户的管理配置 如:新增用户、分配用户所属部门、角色、岗位等</td><td>支持</td><td>支持</td></tr><tr><td>部门管理</td><td>配置系统组织机构（公司、部门、小组） 树结构展现支持数据权限</td><td>支持</td><td>支持</td></tr><tr><td>岗位管理</td><td>配置系统用户所属担任职务</td><td>支持</td><td>支持</td></tr><tr><td>菜单管理</td><td>配置系统菜单、操作权限、按钮权限标识等</td><td>支持</td><td>支持</td></tr><tr><td>角色管理</td><td>角色菜单权限分配、设置角色按机构进行数据范围权限划分</td><td>支持</td><td>支持</td></tr><tr><td>字典管理</td><td>对系统中经常使用的一些较为固定的数据进行维护</td><td>支持</td><td>支持</td></tr><tr><td>参数管理</td><td>对系统动态配置常用参数</td><td>支持</td><td>支持</td></tr><tr><td>通知公告</td><td>系统通知公告信息发布维护</td><td>支持</td><td>支持</td></tr><tr><td>操作日志</td><td>系统正常操作日志记录和查询 系统异常信息日志记录和查询</td><td>支持</td><td>支持</td></tr><tr><td>登录日志</td><td>系统登录日志记录查询包含登录异常</td><td>支持</td><td>支持</td></tr><tr><td>文件管理</td><td>系统文件展示、上传、下载、删除等管理</td><td>支持</td><td>无</td></tr><tr><td>文件配置管理</td><td>系统文件上传、下载所需要的配置信息动态添加、修改、删除等管理</td><td>支持</td><td>无</td></tr><tr><td>在线用户管理</td><td>已登录系统的在线用户信息监控与强制踢出操作</td><td>支持</td><td>支持</td></tr><tr><td>定时任务</td><td>运行报表、任务管理(添加、修改、删除)、日志管理、执行器管理等</td><td>支持</td><td>仅支持任务与日志管理</td></tr><tr><td>代码生成</td><td>多数据源前后端代码的生成（java、html、xml、sql）支持 CRUD 下载</td><td>支持</td><td>仅支持单数据源</td></tr><tr><td>系统接口</td><td>根据业务代码自动生成相关的 api 接口文档</td><td>支持</td><td>支持</td></tr><tr><td>服务监控</td><td>监视集群系统 CPU、内存、磁盘、堆栈、在线日志、Spring 相关配置等</td><td>支持</td><td>仅支持单机 CPU、内存、磁盘监控</td></tr><tr><td>缓存监控</td><td>对系统的缓存信息查询，命令统计等。</td><td>支持</td><td>支持</td></tr><tr><td>在线构建器</td><td>拖动表单元素生成相应的 HTML 代码。</td><td>支持</td><td>支持</td></tr><tr><td>使用案例</td><td>系统的一些功能案例</td><td>支持</td><td>不支持</td></tr></tbody></table><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2><p>使用框架前请仔细阅读文档重点注意事项</p><blockquote><p>初始化项目 必看</p><blockquote><p>https://gitee.com/dromara/RuoYi-Vue-Plus/wikis/pages?sort_id=4164117&amp;doc_id=1469725</p></blockquote><p>专栏与视频 入门必看</p><blockquote><p>https://gitee.com/dromara/RuoYi-Vue-Plus/wikis/pages?sort_id=5473272&amp;doc_id=1469725</p></blockquote><p>部署项目 必看</p><blockquote><p>https://gitee.com/dromara/RuoYi-Vue-Plus/wikis/pages?sort_id=4219382&amp;doc_id=1469725</p></blockquote><p>参考文档 Wiki</p><blockquote><p>https://gitee.com/dromara/RuoYi-Vue-Plus/wikis/pages</p></blockquote></blockquote>',19)]))}const s=d(a,[["render",r],["__file","RuoYi-Vue-Plus-4.7.0.html.vue"]]),n=JSON.parse('{"path":"/zh/news/RuoYi-Vue-Plus-4.7.0.html","title":"RuoYi-Vue-Plus 4.7.0 发布 稳定性版本","lang":"zh-CN","frontmatter":{"title":"RuoYi-Vue-Plus 4.7.0 发布 稳定性版本","author":"疯狂的狮子Li","date":"2023-05-08T00:00:00.000Z","cover":"/assets/img/news/RuoYi-Vue-Plus-5.1.0-cover.png","head":[["meta",{"name":"新闻"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/news/RuoYi-Vue-Plus-4.7.0.html"}],["meta",{"property":"og:title","content":"RuoYi-Vue-Plus 4.7.0 发布 稳定性版本"}],["meta",{"property":"og:description","content":"更新日志 依赖升级 update springboot 2.7.9 => 2.7.11 修复 DoS 漏洞 update xxljob 2.3.1 => 2.4.0 update minio 升级至最新版 避免低版本信息泄漏问题 update hutool 5.8.15 => 5.8.18 update redisson 3.20.0 => 3.20...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/RuoYi-Vue-Plus-5.1.0-cover.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-23T05:33:00.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/RuoYi-Vue-Plus-5.1.0-cover.png"}],["meta",{"name":"twitter:image:alt","content":"RuoYi-Vue-Plus 4.7.0 发布 稳定性版本"}],["meta",{"property":"article:author","content":"疯狂的狮子Li"}],["meta",{"property":"article:published_time","content":"2023-05-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-23T05:33:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RuoYi-Vue-Plus 4.7.0 发布 稳定性版本\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/RuoYi-Vue-Plus-5.1.0-cover.png\\"],\\"datePublished\\":\\"2023-05-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-23T05:33:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"疯狂的狮子Li\\"}]}"]],"description":"更新日志 依赖升级 update springboot 2.7.9 => 2.7.11 修复 DoS 漏洞 update xxljob 2.3.1 => 2.4.0 update minio 升级至最新版 避免低版本信息泄漏问题 update hutool 5.8.15 => 5.8.18 update redisson 3.20.0 => 3.20...."},"headers":[{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[{"level":3,"title":"依赖升级","slug":"依赖升级","link":"#依赖升级","children":[]},{"level":3,"title":"功能更新","slug":"功能更新","link":"#功能更新","children":[]},{"level":3,"title":"新增功能","slug":"新增功能","link":"#新增功能","children":[]},{"level":3,"title":"问题修复","slug":"问题修复","link":"#问题修复","children":[]}]},{"level":2,"title":"平台简介","slug":"平台简介","link":"#平台简介","children":[]},{"level":2,"title":"本框架与 RuoYi 的功能差异","slug":"本框架与-ruoyi-的功能差异","link":"#本框架与-ruoyi-的功能差异","children":[]},{"level":2,"title":"本框架与 RuoYi 的业务差异","slug":"本框架与-ruoyi-的业务差异","link":"#本框架与-ruoyi-的业务差异","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1698039180000,"updatedTime":1698039180000,"contributors":[{"name":"Cici","username":"Cici","email":"1901177100@qq.com","commits":1,"url":"https://github.com/Cici"}]},"readingTime":{"minutes":12.51,"words":3753},"filePathRelative":"zh/news/RuoYi-Vue-Plus-4.7.0.md","localizedDate":"2023年5月8日","autoDesc":true,"excerpt":"<h2>更新日志</h2>\\n<h3>依赖升级</h3>\\n<ul>\\n<li>update springboot 2.7.9 =&gt; 2.7.11 修复 DoS 漏洞</li>\\n<li>update xxljob 2.3.1 =&gt; 2.4.0</li>\\n<li>update minio 升级至最新版 避免低版本信息泄漏问题</li>\\n<li>update hutool 5.8.15 =&gt; 5.8.18</li>\\n<li>update redisson 3.20.0 =&gt; 3.20.1</li>\\n</ul>\\n<h3>功能更新</h3>\\n<ul>\\n<li>update 优化 更改 sys_oss_config 表注释 避免误解</li>\\n<li>update 项目正式入驻 dromara 开源社区 更改项目地址</li>\\n<li>update 全新 logo 全新背景图(设计师打造)</li>\\n<li>update 优化代码生成 同步操作使用批量处理</li>\\n<li>update 重写项目 readme 说明</li>\\n<li>update 修改 controller 中校验直接返回 R.fail</li>\\n<li>update 更换默认用户头像</li>\\n<li>update 优化 限流注解 key 支持简单 spel 表达式</li>\\n<li>update 优化弹窗后导航栏偏移的问题</li>\\n<li>update 优化$tab.closePage 后存在非首页页签时不应该跳转首页</li>\\n<li>update delete build style</li>\\n<li>update 优化选择图标组件</li>\\n<li>update 移除 vue-multiselect 样式</li>\\n<li>update 优化固定头部页签滚动条被隐藏的问题</li>\\n<li>update 按代码规范补全重写注解</li>\\n<li>update 优化 极端情况获取 LoginUser 可能为 null 问题</li>\\n<li>update 优化 更改系统所有服务日志配置文件命名为 logback-plus.xml 避免与其他框架默认配置冲突</li>\\n<li>update 优化 加解密模块 将 null 判断下推防止任何可能的 null 出现</li>\\n<li>update 优化 调整配置文件错误注释</li>\\n<li>update 优化 在线用户 token 获取方式</li>\\n<li>update 优化 用户更改角色 踢掉角色相关所有在线用户</li>\\n<li>update 优化 下拉图标选择组件优化：1.已选择图标高亮回显 2.滚动条采用 el-scrollbar</li>\\n<li>update 优化 Vue 的 DictTag 组件 当 value 没有匹配的值时 展示空 value</li>\\n<li>update 优化 恢复翻页/切换路由滚动功能</li>\\n</ul>"}');export{s as comp,n as data};

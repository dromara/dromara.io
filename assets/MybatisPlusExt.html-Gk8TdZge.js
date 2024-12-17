import{_ as n,a}from"./MybatisPlusExt-1-BwmhdmD0.js";import{_ as e,c as i,a as l,o as p}from"./app-BmgeuuSW.js";const d="/assets/img/news/MybatisPlusExt-2.png",t={};function r(c,s){return p(),i("div",null,s[0]||(s[0]=[l('<p><img src="'+n+`" alt=""></p><p>借用MybatisPlus的口号：为简化开发工作、提高生产率而生</p><p>尽管MybatisPlus （后文简称MP）相比较Mybatis丝滑了很多，但是日常使用中，是否偶尔仍会怀念JPA（Hibernate）的那种纵享丝滑的感受，更好的一心投入业务开发中，如果你也是如此，那么恭喜你发现了MybatisPlusExt（后文简称MPE）。</p><p>MPE对MP做了进一步的拓展封装，即保留MP原功能，又添加更多有用便捷的功能。同样坚持MP的原则，只做增强不做改变，所以，即便是在使用MPE的情况下，也可以百分百的只使用MP的方式，因此MP能做的，MPE不仅能做还能做的更多。</p><p>增强功能具体体现在几个方面：<code>免手写Mapper</code>、<code>自动建表</code>、<code>数据自动填充（类似JPA中的审计）</code>、<code>关联查询（类似sql中的join）</code>、<code>冗余数据自动更新</code>、<code>动态查询条件</code>。</p><h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始"><span>开始</span></a></h2><blockquote><h3 id="一、引入jar包" tabindex="-1"><a class="header-anchor" href="#一、引入jar包"><span>一、引入jar包</span></a></h3></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- spring boot2.* --&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.tangzc&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;mybatis-plus-ext-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;{maven仓库搜索最新版}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- spring boot3.* --&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.tangzc&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;mybatis-plus-ext-spring-boot3-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;{maven仓库搜索最新版}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h3 id="二、代码预生成" tabindex="-1"><a class="header-anchor" href="#二、代码预生成"><span>二、代码预生成</span></a></h3></blockquote><h4 id="痛点" tabindex="-1"><a class="header-anchor" href="#痛点"><span>痛点：</span></a></h4><ol><li><p>某个地方的代码想使用下实体字段的名称，但是又不想写死一个字符串（丑、编译期不可校验）。</p></li><li><p>手动为每个实体写一个Mapper类，但是Mapper类中都是空的。</p></li></ol><p><em><strong>这些交给MPE吧！！！</strong></em></p><p>它在代码编译期前，自动预生成实体字段的定义、实体Mapper的接口定义、实体Repository类的定义（该类是进一步封装Mapper的）</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 标记生成表字段定义</span></span>
<span class="line"><span>@AutoDefine</span></span>
<span class="line"><span>// 标记生成Mapper和Repository</span></span>
<span class="line"><span>@AutoRepository</span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>public class TestTable {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String id;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private int age;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><p><img src="`+a+`" alt=""></p><blockquote><h3 id="三、自动建表" tabindex="-1"><a class="header-anchor" href="#三、自动建表"><span>三、自动建表</span></a></h3></blockquote><p>MPE自动建表依托于另一款自研框架AutoTable，MPE是基于AutoTable做了部分注解的拓展，同时做了Mybatis-plus的兼容处理。</p><p><strong>此处做一个简单的使用介绍</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@EnableAutoTable</span></span>
<span class="line"><span>@SpringBootApplication</span></span>
<span class="line"><span>public class DemoAutoTableApplication {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        SpringApplication.run(DemoAutoTableApplication.class, args);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>@Table</span></span>
<span class="line"><span>public class MyTable {</span></span>
<span class="line"><span>    private Integer id;</span></span>
<span class="line"><span>    private String userName；</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码就会自动把MyTable映射为<code>my_table</code>表，字段分别是<code>id:int</code>、<code>user_name:varchar(255)</code></p><p>PS：具体表名、字段名是否转下划线是根据MybatisPlus的配置来的</p><p><em><strong>下面展示一个注解全面的例子：</strong></em></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>@AutoDefine</span></span>
<span class="line"><span>// 指定表的编码</span></span>
<span class="line"><span>@MysqlCharset(value = &quot;utf8mb4&quot;, collate = &quot;utf8mb4_general_ci&quot;)</span></span>
<span class="line"><span>// 指定表的存储引擎</span></span>
<span class="line"><span>@MysqlEngine(&quot;myisam&quot;)</span></span>
<span class="line"><span>// 表头同样可以声明单个索引（此处只是举例，等价于username字段上的@Index）</span></span>
<span class="line"><span>@TableIndex(name = &quot;username_index&quot;, fields = {MyTableDefine.username}, type = IndexTypeEnum.UNIQUE)</span></span>
<span class="line"><span>// 需要在表头声明多个索引的情况下，需要用@TableIndexes包裹起来</span></span>
<span class="line"><span>@TableIndexes({</span></span>
<span class="line"><span>        // 声明普通联合索引</span></span>
<span class="line"><span>        @TableIndex(name = &quot;username_phone_index&quot;, fields = {MyTableDefine.username, MyTableDefine.phone}),</span></span>
<span class="line"><span>        // 声明唯一联合索引，单独指定phone的索引排序方式，构建索引的时候indexFields中字段的顺序权重高于fields中的字段</span></span>
<span class="line"><span>        @TableIndex(name = &quot;username_phone_uni_index&quot;, fields = {MyTableDefine.username}, indexFields = {@IndexField(field = MyTableDefine.phone, sort = IndexSortTypeEnum.DESC)}, type = IndexTypeEnum.UNIQUE),</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// 指定表名、表注释、数据源、忽略字段（不参与建表，等效于字段上的@Ignore）</span></span>
<span class="line"><span>@Table(value = &quot;test_table&quot;, comment = &quot;测试表&quot;, dsName = &quot;my-mysql&quot;, excludeProperty={MyTableDefine.extra})</span></span>
<span class="line"><span>public class MyTable {</span></span>
<span class="line"><span>    // 指定主键自增注释、类型（数据库数字类型可以跟java字符串类型相互转化）、长度</span></span>
<span class="line"><span>    // 注意字段名称id会被自动认定为主键不需要再额外指定</span></span>
<span class="line"><span>    @ColumnComment(&quot;id主键（因为我是独立注解，所以我是大哥，会覆盖下面的comment属性）&quot;)</span></span>
<span class="line"><span>    @ColumnId(mode = IdType.AUTO, comment = &quot;id主键&quot;, type = MysqlTypeConstant.BIGINT, length = 32)</span></span>
<span class="line"><span>    private String id;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 字段非NULL</span></span>
<span class="line"><span>    @NotNull</span></span>
<span class="line"><span>    // 字段默认值是空字符串</span></span>
<span class="line"><span>    @ColumnDefault(type = DefaultValueEnum.EMPTY_STRING)</span></span>
<span class="line"><span>    // 指定字段长度</span></span>
<span class="line"><span>    @ColumnType(length = 100)</span></span>
<span class="line"><span>    // 指定字段注释</span></span>
<span class="line"><span>    @ColumnComment(&quot;用户名&quot;)</span></span>
<span class="line"><span>    // 唯一索引</span></span>
<span class="line"><span>    @Index(type = IndexTypeEnum.UNIQUE)</span></span>
<span class="line"><span>    private String username;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置默认值为0</span></span>
<span class="line"><span>    @ColumnDefault(&quot;0&quot;)</span></span>
<span class="line"><span>    @ColumnComment(&quot;年龄&quot;)</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ColumnType(length = 20)</span></span>
<span class="line"><span>    // 设置注释、默认值、不为空</span></span>
<span class="line"><span>    @Column(comment = &quot;电话&quot;, defaultValue = &quot;+00 00000000&quot;, notNull = true)</span></span>
<span class="line"><span>   // 唯一索引快捷方式</span></span>
<span class="line"><span>    @UniqueIndex</span></span>
<span class="line"><span>    private String phone;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置注释、小数（等同于@ColumnType(length = 12, decimalLength = 6)）</span></span>
<span class="line"><span>    @Column(comment = &quot;资产&quot;, length = 12, decimalLength = 6)</span></span>
<span class="line"><span>    private BigDecimal money;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // boolean值设置默认值</span></span>
<span class="line"><span>    @ColumnDefault(&quot;true&quot;)</span></span>
<span class="line"><span>    @Column(comment = &quot;激活状态&quot;)</span></span>
<span class="line"><span>   // 普通索引：指定索引名称、注释、索引方法</span></span>
<span class="line"><span>    @Index(name = &quot;active_index&quot;, comment = &quot;激活状态索引&quot;)</span></span>
<span class="line"><span>    private Boolean active;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 单独设置字段类型</span></span>
<span class="line"><span>    @ColumnType(MysqlTypeConstant.TEXT)</span></span>
<span class="line"><span>    @ColumnComment(&quot;个人简介&quot;)</span></span>
<span class="line"><span>    private String description;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置默认值为当前时间</span></span>
<span class="line"><span>    @ColumnDefault(&quot;CURRENT_TIMESTAMP&quot;)</span></span>
<span class="line"><span>    @Column(comment = &quot;注册时间&quot;)</span></span>
<span class="line"><span>    private LocalDateTime registerTime;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 忽略该字段，不参与建表</span></span>
<span class="line"><span>    @Ignore</span></span>
<span class="line"><span>    private String extra;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h3 id="四、数据填充" tabindex="-1"><a class="header-anchor" href="#四、数据填充"><span>四、数据填充</span></a></h3></blockquote><p>可以在对数据库做插入或更新操作的时候，自动赋值数据操作人、操作时间、默认值等。</p><p>以文章发布为例，在发布Artice的时候，我们无需再去关心过多的与业务无关的字段值，最终只需要关心title、content两个核心数据即可，其他的数据均会被框架处理。</p><p>其中分别涉及了<code>数据插入</code>、<code>数据更新</code>、<code>数据插入及更新</code>三个处理时机，其中每个时机均可以插入系统时间及自定义用户信息。</p><p><strong>定义文章实体</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>@Table(comment = &quot;文章&quot;)</span></span>
<span class="line"><span>public class Article {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 字符串类型的ID，默认也是雪花算法的一串数字（MP的默认功能）</span></span>
<span class="line"><span>    @ColumnComment(&quot;主键&quot;)</span></span>
<span class="line"><span>    private String id;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @ColumnComment(&quot;标题&quot;)</span></span>
<span class="line"><span>    private String title;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @ColumnComment(&quot;内容&quot;)</span></span>
<span class="line"><span>    private String content;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 默认值用法：文章默认激活状态，ACTIVE为ActicleStatusEnum[ACTIVE, INACTIVE]的枚举名称字符串</span></span>
<span class="line"><span>    @DefaultValue(&quot;ACTIVE&quot;)</span></span>
<span class="line"><span>    @ColumnComment(&quot;内容&quot;)</span></span>
<span class="line"><span>    private ActicleStatusEnum status;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @ColumnComment(&quot;发布时间&quot;)</span></span>
<span class="line"><span>    // 【插入】数据时候会自动获取系统当前时间赋值，支持多种数据类型，具体可参考@FillTime注解详细介绍（注意，这里的时间是MP执行insert的操作的时候的时间，并不是对象构建时候的时间）</span></span>
<span class="line"><span>    @InsertFillTime</span></span>
<span class="line"><span>    private Date publishedTime;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @ColumnComment(&quot;发布人&quot;)</span></span>
<span class="line"><span>    // 【插入】的时候，自动填充用户id，UserIdAutoFillHandler看下面代码</span></span>
<span class="line"><span>    @InsertFillData(UserIdAutoFillHandler.class)</span></span>
<span class="line"><span>    private String publishedUserId;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @ColumnComment(&quot;发布人名字&quot;)</span></span>
<span class="line"><span>    // 【插入】的时候，自动填充用户名字，UsernameAutoFillHandler看下面代码</span></span>
<span class="line"><span>    @InsertFillData(UsernameAutoFillHandler.class)</span></span>
<span class="line"><span>    private String publishedUsername;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @ColumnComment(&quot;最后更新时间&quot;)</span></span>
<span class="line"><span>    // 【插入和更新】数据时候会自动获取系统当前时间赋值，支持多种数据类型，具体可参考@FillTime注解详细介绍</span></span>
<span class="line"><span>    @InsertUpdateFillTime</span></span>
<span class="line"><span>    private Date publishedTime;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @ColumnComment(&quot;最后更新人&quot;)</span></span>
<span class="line"><span>    // 【更新】的时候，自动填充用户id，UserIdAutoFillHandler看下面代码</span></span>
<span class="line"><span>    // @UpdateFillData(UserIdAutoFillHandler.class)</span></span>
<span class="line"><span>    // 【插入和更新】的时候，自动填充用户id，UserIdAutoFillHandler看下面代码</span></span>
<span class="line"><span>    @InsertUpdateFillData(UserIdAutoFillHandler.class)</span></span>
<span class="line"><span>    private String publishedUserId;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @ColumnComment(&quot;最后更新人名字&quot;)</span></span>
<span class="line"><span>    // 【更新】的时候，自动填充用户名字，UsernameAutoFillHandler看下面代码</span></span>
<span class="line"><span>    // @UpdateFillData(UsernameAutoFillHandler.class)</span></span>
<span class="line"><span>    // 【插入和更新】的时候，自动填充用户名字，UsernameAutoFillHandler看下面代码</span></span>
<span class="line"><span>    @InsertUpdateFillData(UsernameAutoFillHandler.class)</span></span>
<span class="line"><span>    private String publishedUsername;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实现动态填充【用户id】的接口</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 全局获取用户ID</span></span>
<span class="line"><span> * 此处实现IOptionByAutoFillHandler接口和AutoFillHandler接口均可，</span></span>
<span class="line"><span> * 实现IOptionByAutoFillHandler接口，可以兼容框架内的BaseEntity。</span></span>
<span class="line"><span> * BaseEntity默认需要IOptionByAutoFillHandler的实现。BaseEntity的使用请查看官网。</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class UserIdAutoFillHandler implements IOptionByAutoFillHandler&lt;String&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * @param object 当前操作的数据对象</span></span>
<span class="line"><span>     * @param clazz  当前操作的数据对象的class</span></span>
<span class="line"><span>     * @param field  当前操作的数据对象上的字段</span></span>
<span class="line"><span>     * @retur</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String getVal(Object object, Class&lt;?&gt; clazz, Field field) {</span></span>
<span class="line"><span>        RequestAttributes requestAttributes = RequestContextHolder.currentRequestAttributes();</span></span>
<span class="line"><span>        HttpServletRequest request = ((ServletRequestAttributes)requestAttributes).getRequest();</span></span>
<span class="line"><span>        // 配合网关或者过滤器，token校验成功后就把用户信息塞到header中</span></span>
<span class="line"><span>        return request.getHeader(&quot;user-id&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实现动态填充【用户名】的接口</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 全局获取用户名</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class UsernameAutoFillHandler implements AutoFillHandler&lt;String&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * @param object 当前操作的数据对象</span></span>
<span class="line"><span>     * @param clazz  当前操作的数据对象的class</span></span>
<span class="line"><span>     * @param field  当前操作的数据对象上的字段</span></span>
<span class="line"><span>     * @return 当前登录用户id</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String getVal(Object object, Class&lt;?&gt; clazz, Field field) {</span></span>
<span class="line"><span>        RequestAttributes requestAttributes = RequestContextHolder.currentRequestAttributes();</span></span>
<span class="line"><span>        HttpServletRequest request = ((ServletRequestAttributes)requestAttributes).getRequest();</span></span>
<span class="line"><span>        // 配合网关或者过滤器，token校验成功后就把用户信息塞到header中</span></span>
<span class="line"><span>        return request.getHeader(&quot;user-name&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h3 id="五、关联查询" tabindex="-1"><a class="header-anchor" href="#五、关联查询"><span>五、关联查询</span></a></h3></blockquote><p>类似JPA的数据关联查询解决方案，替代sql中的join方式（或者内存组装数据的方式），通过注解关联多表之间的关系，查询某实体的时候，自动带出其关联性的数据。</p><p>以用户与文章之间的关系来举例</p><p><strong>定义实体</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>@AutoDefine</span></span>
<span class="line"><span>@Table(comment = &quot;文章&quot;)</span></span>
<span class="line"><span>public class Article {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ColumnComment(&quot;主键&quot;)</span></span>
<span class="line"><span>    private String id;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ColumnComment(&quot;标题&quot;)</span></span>
<span class="line"><span>    private String title;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Column(comment = &quot;内容&quot;, type = MySqlTypeConstant.MEDIUMTEXT)</span></span>
<span class="line"><span>    private String content;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @ColumnComment(&quot;发布人&quot;)</span></span>
<span class="line"><span>    private String publishedUserId;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ColumnComment(&quot;审核: 0 不通过、1 通过&quot;)</span></span>
<span class="line"><span>    private int audit;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @ColumnComment(&quot;发布时间（时间戳）&quot;)</span></span>
<span class="line"><span>    private Long publishedTime;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>@AutoDefine</span></span>
<span class="line"><span>@Table(comment = &quot;用户信息&quot;)</span></span>
<span class="line"><span>public class User {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ColumnComment(&quot;主键&quot;)</span></span>
<span class="line"><span>    private String id;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ColumnComment(&quot;用户名&quot;)</span></span>
<span class="line"><span>    private String username;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ColumnComment(&quot;密码&quot;)</span></span>
<span class="line"><span>    private String password;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>   // 关联该用户发布的所有文章（&quot;audit = 1&quot; 表示的是Article下的audit为1的情况，customCondition的值只能是被关联表下的字段值，且会以and的形式添加在查询条件末尾。）</span></span>
<span class="line"><span>   @BindEntity(conditions = @JoinCondition(selfField = UserDefine.id, joinField = ArticleDefine.publishedUserId), customCondition = &quot;audit = 1&quot;, orderBy = @JoinOrderBy(field = ArticleDefine.publishedTime, isAsc = false))</span></span>
<span class="line"><span>   private List&lt;Article&gt; articles;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>需求：获取用户信息的同时只想获取用户已通过审核的发布记录，并且根据发布时间倒序排序。（通过自定义SQL条件）</strong></p><p>【写法一】</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 获取到需要的user集合</span></span>
<span class="line"><span>User user = userMapper.getByUsername(name);</span></span>
<span class="line"><span>// 【推荐】用法一、指定属性关联。</span></span>
<span class="line"><span>Binder.bindOn(user, User::getArticles);</span></span>
<span class="line"><span>// 【不推荐】用法二、全关联。此种用法关联user下所有声明需要绑定的属性。</span></span>
<span class="line"><span>// Binder.bind(user);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【写法二】</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 本框架拓展的lambda查询器lambdaQueryPlus，增加了bindOne、bindList、bindPage</span></span>
<span class="line"><span>// 显然这是一种更加简便的查询方式，但是如果存在多级深度的关联关系，此种方法就不适用了，还需要借助Binder</span></span>
<span class="line"><span>User user = userRepository.lambdaQueryPlus()</span></span>
<span class="line"><span>        .eq(User::getUsername, name)</span></span>
<span class="line"><span>       // 【推荐】用法一、指定属性关联，只关联文章这个字段。</span></span>
<span class="line"><span>        .bindList(User::getArticles);</span></span>
<span class="line"><span>      // 【不推荐】用法二、全关联。此种用法关联user下所有声明需要绑定的属性。</span></span>
<span class="line"><span>      // .bindList();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>* 如果你打开sql打印，会看到2条sql语句，第一条根据name去user查询信息，第二条根据userId去article中查询关联的所有数据。</p><p><em><strong>篇幅有限，更多用法（中间表查询、多对多查询等），请移步官方文档</strong></em></p><h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意：</span></a></h4><p>为了解决数据库兼容支持的问题，关联查询底层原理是基于MybatisPlus的BaseMapper实现的，所以要求所有关联的实体必须要对应的Mapper且继承自MybatisPlus的BaseMapper，包括中间表的实体，在使用中间表关联查询的情况下，也需要遵循此约束。</p><p>MPE相当于把实体对应的Mapper视为数据访问窗口了，所以但凡需要从数据库查询数据的行为均需要通过对应的Mapper完成。</p><blockquote><h3 id="六、数据冗余" tabindex="-1"><a class="header-anchor" href="#六、数据冗余"><span>六、数据冗余</span></a></h3></blockquote><p>为了避免高频的数据关联查询，一种方案是做数据冗余，将其他表的部分字段冗余到当前表。但是这个方案牵扯一个数据修改后如何同步的问题，本功能就是为了解决这个问题而生的。</p><p>假设用户评论的场景，评论上需要冗余用户名和头像，如果用户的名字和头像有改动，则需要同步新的改动，代码如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>@AutoDefine</span></span>
<span class="line"><span>@Table(comment = &quot;用户信息&quot;)</span></span>
<span class="line"><span>public class User {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ColumnComment(&quot;主键&quot;)</span></span>
<span class="line"><span>    private String id;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ColumnComment(&quot;用户名&quot;)</span></span>
<span class="line"><span>    private String username;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ColumnComment(&quot;头像&quot;)</span></span>
<span class="line"><span>    private String icon;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 省略其他属性</span></span>
<span class="line"><span>    ......</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>@AutoDefine</span></span>
<span class="line"><span>@Table(comment = &quot;评论&quot;)</span></span>
<span class="line"><span>public class Comment {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ColumnComment(&quot;主键&quot;)</span></span>
<span class="line"><span>    private String id;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ColumnComment(&quot;评论内容&quot;)</span></span>
<span class="line"><span>    private String content;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ColumnComment(&quot;评论人id&quot;)</span></span>
<span class="line"><span>    private String userId;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // source指定了数据来源的Entity，同样可以使用sourceName来指定全路径的方式，field指定了映射哪个字段</span></span>
<span class="line"><span>    // conditions中隐含了一个joinField字段，该字段默认是“id”，即@Condition(selfField = &quot;userId&quot;, joinField = &quot;id&quot;)等同于示例中的写法</span></span>
<span class="line"><span>    @DataSource(source = User.class, field = UserDefine.username, conditions = @Condition(selfField = UserDefine.userId))</span></span>
<span class="line"><span>    @ColumnComment(&quot;评论人名称&quot;)</span></span>
<span class="line"><span>    private String userName;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 如上，同理</span></span>
<span class="line"><span>    @DataSource(source = User.class, field = UserDefine.icon, condition = @Condition(selfField = UserDefine.userId))</span></span>
<span class="line"><span>    @ColumnComment(&quot;评论人头像&quot;)</span></span>
<span class="line"><span>    private String userIcon;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基于@DataSource注解，框架会自动为指定字段注册监听<code>EntityUpdateEvent</code>事件（MPE内置事件，可手动发起），所有MP的Mapper的<code>updateById</code>和<code>updateBatchById</code>两个方法执行的时候会自动发布<code>EntityUpdateEvent</code>事件。如果使用其他数据更新方式（比如手动写sql的形式）不会自动触发数据自动更新，如果想触发，需要用户自己抛出<code>EntityUpdateEvent</code>事件，即可完成数据自动更新。</p><p><em><strong>具体用法及讲解，请移步官方文档</strong></em></p><blockquote><h3 id="七、动态条件" tabindex="-1"><a class="header-anchor" href="#七、动态条件"><span>七、动态条件</span></a></h3></blockquote><p>根据预先设置的条件函数，对数据的更新、删除、查询做动态的筛选。常用于数据权限方面。</p><p>比如根据不同权限获取不同数据，用户只能看到自己的数据，管理员能看到所有人的数据，我们通常需要在每一个查询、更新、删除的sql操作上都追加上某个条件，这种操作比较机械化，而且某些情况下很容易忘记，可以抽象成注解直接配置到Entity上，就省去了每个数据操作关心这个特殊条件了。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * congfig中注册动态条件拦截器【1.3.0之前的版本（不包括1.3.0）可以忽略，不注册该Bean】</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Bean</span></span>
<span class="line"><span>public MybatisPlusInterceptor mybatisPlusInterceptor() {</span></span>
<span class="line"><span>    MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();</span></span>
<span class="line"><span>    // 添加动态条件，若同时添加了其他的拦截器，继续添加即可</span></span>
<span class="line"><span>    interceptor.addInnerInterceptor(new DynamicConditionInterceptor());</span></span>
<span class="line"><span>    // 如果使用了分页，请放在DynamicConditionInterceptor之后</span></span>
<span class="line"><span>    interceptor.addInnerInterceptor(new PaginationInnerInterceptor());</span></span>
<span class="line"><span>    return interceptor;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>@Table(comment = &quot;文章&quot;)</span></span>
<span class="line"><span>public class Article {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ColumnComment(&quot;主键&quot;)</span></span>
<span class="line"><span>    private String id;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ColumnComment(&quot;标题&quot;)</span></span>
<span class="line"><span>    private String title;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @ColumnComment(&quot;内容&quot;)</span></span>
<span class="line"><span>    private String content;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ColumnComment(&quot;发布人&quot;)</span></span>
<span class="line"><span>    // 添加了该注解后，针对文章的查询、修改、删除操作，均会被自动带上 published_user_id=?或者published_user_id in (?)的条件，?值来自于CurrentUserDynamicConditionHandler的values()返回值</span></span>
<span class="line"><span>    @DynamicCondition(CurrentUserDynamicConditionHandler.class)</span></span>
<span class="line"><span>    private String publishedUserId;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 省略其他字段</span></span>
<span class="line"><span>    ......</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class CurrentUserDynamicConditionHandler implements IDynamicConditionHandler {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Resource</span></span>
<span class="line"><span>    private HttpServletRequest request;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public List&lt;Object&gt; values() {</span></span>
<span class="line"><span>        // 只有当enable()返回true的时候 本动态条件才生效。</span></span>
<span class="line"><span>        // 返回空集合或者null的时候，sql上体现的是 [column] is null，只返回一个值的时候sql上体现的是 [column]=***，</span></span>
<span class="line"><span>        // 返回集合的时候，sql上体现的是 [column] in (***)</span></span>
<span class="line"><span>        String userId = request.getHeader(&quot;USER_ID&quot;);</span></span>
<span class="line"><span>        return Collections.singletonList(userId);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public boolean enable() {</span></span>
<span class="line"><span>        // 简单例子：header中取用户权限，如果是非管理员则执行该过滤条件，如果是管理员默认查全部，返回false，本动态条件失效</span></span>
<span class="line"><span>        String userRule = request.getHeader(&quot;USER_ROLE&quot;);</span></span>
<span class="line"><span>        return !&quot;ADMIN&quot;.equals(userRule);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>具体用法及讲解，请移步官方文档</strong></em></p><blockquote><h3 id="八、字段序列化与反序列化" tabindex="-1"><a class="header-anchor" href="#八、字段序列化与反序列化"><span>八、字段序列化与反序列化</span></a></h3></blockquote><p>数据存储的时候自动序列化字段上的复杂数据类型为字符串（类json格式），数据读取的时候自动反序列化回来，无需额外编写转化的Handler（MP官方的方案，需要手动为每一个复杂数据类型指定一个BaseTypeHandler）。</p><p>该方案存在一定的局限性，实际是借鉴了Redisson的一种数据序列化方案，将数据本身的特征（类全名称）在序列化的时候，一并记录下来，用于反序列的依据，所以序列化之后的字符串并不是一个标准的json。这种方案的缺点很明显，就是类的全名称（包名+类名）不能随意更改，因为一旦更改，会导致找不到class的问题，进而无法正常的反序列化已经存在的数据。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>@TableName(autoResultMap = true) // 必须</span></span>
<span class="line"><span>@Table(comment = &quot;用户&quot;)</span></span>
<span class="line"><span>public class Users {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @ColumnComment(&quot;ID&quot;)</span></span>
<span class="line"><span>    private Long id;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Serializable // 必须</span></span>
<span class="line"><span>    @ColumnComment(&quot;爱好&quot;)</span></span>
<span class="line"><span>    private List&lt;Like&gt; likes;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>public class Like {</span></span>
<span class="line"><span>    private String id;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="感谢" tabindex="-1"><a class="header-anchor" href="#感谢"><span>感谢</span></a></h2><p>感谢dromara.org开源社区提供的机会</p><p>感谢支持的小伙伴</p><p>有问题的小伙伴欢迎加我微信，拉你进群共同交流学习</p><p><img src="`+d+'" alt=""></p><p>微信二维码</p><h2 id="作者介绍" tabindex="-1"><a class="header-anchor" href="#作者介绍"><span>作者介绍</span></a></h2><p>90年，男，已婚，前后端均有涉猎，毕业后一直在济南这座城市，如果有同地区的小伙伴随时可约</p><h4 id="作者开源项目-求各位看官动动发财的小手-给个star" tabindex="-1"><a class="header-anchor" href="#作者开源项目-求各位看官动动发财的小手-给个star"><span>作者开源项目，求各位看官动动发财的小手，给个star</span></a></h4><p>https://gitee.com/dromara/mybatis-plus-ext</p><p>https://gitee.com/tangzc/auto-table</p>',81)]))}const m=e(t,[["render",r],["__file","MybatisPlusExt.html.vue"]]),o=JSON.parse('{"path":"/zh/news/MybatisPlusExt.html","title":"欢迎新晋开源MPE加入Dromara社区，MybatisPlus能力拓展增强包","lang":"zh-CN","frontmatter":{"title":"欢迎新晋开源MPE加入Dromara社区，MybatisPlus能力拓展增强包","author":"MybatisPlusExt","date":"2024-03-11T00:00:00.000Z","cover":"/assets/img/news/MybatisPlusExt-0.png","head":[["meta",{"name":"新闻"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope-docs-demo.netlify.app/news/MybatisPlusExt.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/news/MybatisPlusExt.html"}],["meta",{"property":"og:title","content":"欢迎新晋开源MPE加入Dromara社区，MybatisPlus能力拓展增强包"}],["meta",{"property":"og:description","content":"借用MybatisPlus的口号：为简化开发工作、提高生产率而生 尽管MybatisPlus （后文简称MP）相比较Mybatis丝滑了很多，但是日常使用中，是否偶尔仍会怀念JPA（Hibernate）的那种纵享丝滑的感受，更好的一心投入业务开发中，如果你也是如此，那么恭喜你发现了MybatisPlusExt（后文简称MPE）。 MPE对MP做了进一步..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/MybatisPlusExt-0.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-17T16:37:54.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/MybatisPlusExt-0.png"}],["meta",{"name":"twitter:image:alt","content":"欢迎新晋开源MPE加入Dromara社区，MybatisPlus能力拓展增强包"}],["meta",{"property":"article:author","content":"MybatisPlusExt"}],["meta",{"property":"article:published_time","content":"2024-03-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-17T16:37:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"欢迎新晋开源MPE加入Dromara社区，MybatisPlus能力拓展增强包\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/MybatisPlusExt-0.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/MybatisPlusExt-1.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/news/MybatisPlusExt-2.png\\"],\\"datePublished\\":\\"2024-03-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-17T16:37:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MybatisPlusExt\\"}]}"]],"description":"借用MybatisPlus的口号：为简化开发工作、提高生产率而生 尽管MybatisPlus （后文简称MP）相比较Mybatis丝滑了很多，但是日常使用中，是否偶尔仍会怀念JPA（Hibernate）的那种纵享丝滑的感受，更好的一心投入业务开发中，如果你也是如此，那么恭喜你发现了MybatisPlusExt（后文简称MPE）。 MPE对MP做了进一步..."},"headers":[{"level":2,"title":"开始","slug":"开始","link":"#开始","children":[]},{"level":2,"title":"感谢","slug":"感谢","link":"#感谢","children":[]},{"level":2,"title":"作者介绍","slug":"作者介绍","link":"#作者介绍","children":[]}],"git":{"createdTime":1723712940000,"updatedTime":1723912674000,"contributors":[{"name":"itanxyu","username":"itanxyu","email":"itanxy@126.com","commits":2,"url":"https://github.com/itanxyu"}]},"readingTime":{"minutes":13.59,"words":4077},"filePathRelative":"zh/news/MybatisPlusExt.md","localizedDate":"2024年3月11日","autoDesc":true,"excerpt":"<p><img src=\\"/assets/img/news/MybatisPlusExt-0.png\\" alt=\\"\\"></p>\\n<p>借用MybatisPlus的口号：为简化开发工作、提高生产率而生</p>\\n<p>尽管MybatisPlus （后文简称MP）相比较Mybatis丝滑了很多，但是日常使用中，是否偶尔仍会怀念JPA（Hibernate）的那种纵享丝滑的感受，更好的一心投入业务开发中，如果你也是如此，那么恭喜你发现了MybatisPlusExt（后文简称MPE）。</p>\\n<p>MPE对MP做了进一步的拓展封装，即保留MP原功能，又添加更多有用便捷的功能。同样坚持MP的原则，只做增强不做改变，所以，即便是在使用MPE的情况下，也可以百分百的只使用MP的方式，因此MP能做的，MPE不仅能做还能做的更多。</p>"}');export{m as comp,o as data};

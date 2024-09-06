import{_ as e,o as i,c as n,f as s}from"./app-b61402ca.js";const d="/assets/img/news/EasyQuery-0.png",t="/assets/img/news/EasyQuery-1.jfif",a="/assets/img/news/EasyQuery-2.jfif",r={},l=s('<h2 id="作者介绍" tabindex="-1"><a class="header-anchor" href="#作者介绍" aria-hidden="true">#</a> 作者介绍</h2><ul><li><p>名称:xuejm</p></li><li><p>dromara 开源组织成员,dromara/easy-query 作者</p></li><li><p>java/.net相关开发10年以上经验小菜鸟一枚</p></li><li><p>爱好开源技术乐于专研分享,拥有多个开源项目O(∩_∩)O哈哈~</p></li><li><p>个人空间:https://github.com/xuejmnet  和  https://gitee.com/xuejm</p></li></ul><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>ORM又叫对象关系映射,一款好的ORM不仅仅是支持OM更重要的是把<code>R</code>合理的利用起来<code>easy-query</code>就是一款支持对象关系和SQL表达式的现代化ORM.</p><h2 id="easyquery介绍" tabindex="-1"><a class="header-anchor" href="#easyquery介绍" aria-hidden="true">#</a> EasyQuery介绍</h2><p>EasyQuery是一款Java下面的现代化ORM,拥有强类型、轻量级、高性能特点,致力于解决jdbc查询,支持对象模型关系筛选,隐式查询,纯SQL表达式查询。</p><p>框架支持java8及以上版本完全无依赖干净,支持分库分表、字段加密、联级筛选、逻辑删除、多租户、动态表名、无实体CRUD、计算属性、乐观锁、批处理、数据追踪差异更新等一系列功能,并且给予用户极大地扩展和方言自定义功能扩展。</p><figure><img src="'+d+`" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h3><p><strong>使用现有orm中你是否有以下痛点呢?</strong></p><blockquote><p>1.orm使用都是字符串不易维护,ide无法智能提示</p><p>2.orm不支持join或者多表join功能偏弱无法满足group+join 子查询或者from 子查询等情况</p><p>3.orm模型联级筛选对象关系过弱,仅支持一对多一对一等的拉取,不支持筛选过滤</p><p>4.没有统一的函数来支持映射翻译到所有的数据库</p><p>5.orm功能薄弱想支撑业务需要添加各种外部组件来满足业务</p><p>6.orm无法和现有pojo体系完美融合兼容</p><p>7.不支持分库分表需要额外引入sharding来支持</p></blockquote><p>如果你有以上痛点,那么<code>easy-query</code>获取能够帮助到你。</p><p><strong>使用easy-query可以为开发者带来什么?</strong></p><blockquote><p>1.简单易用高效的api,流式书写带来的便捷性和易维护性,拒绝魔法值</p><p>2.强类型只能提示哪怕你是刚入门小白也能在idea的提示下很容易写出想要的代码</p><p>3.复杂多表join,子查询,exists面对各种复杂业务场景再也不用担心需要额外引入组件了</p><p>4.模型关系查询将ORM的<code>R</code>体现的淋漓尽致,不仅仅是简单的查询出结果更能完美的进行对象模型筛选,犹如stream查询数据库一样可以以<code>any</code>,<code>none</code>等方法断言和我相关的数据</p><p>5.结构化DTO任意拉取,可以在用户创建各个模型关系后快速拉去任意结构的对象转成json,不用再烦恼一对一、多对一、一对多、多对多在分页下的获取了</p><p>6.完美杜绝n+1带来的性能问题</p><p>7.所有功能完全免费永久开源,并且作者自行编写idea插件帮助大家提高效率happy code</p></blockquote><h2 id="实际业务案例" tabindex="-1"><a class="header-anchor" href="#实际业务案例" aria-hidden="true">#</a> 实际业务案例</h2><p>系统的用户架构一般是用户角色（多对多），用户企业多对1，角色菜单多对多</p><h3 id="用户筛选" tabindex="-1"><a class="header-anchor" href="#用户筛选" aria-hidden="true">#</a> 用户筛选</h3><h4 id="简单筛选" tabindex="-1"><a class="header-anchor" href="#简单筛选" aria-hidden="true">#</a> 简单筛选</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//筛选用户名称包含小明的
List&lt;SysUser&gt; users = easyEntityQuery.queryable(SysUser.class)
    .where(user-&gt;user.name().like(&quot;小明&quot;))
    .toList()
  
//筛选用户名称包含小明的
List&lt;SysUser&gt; users = easyEntityQuery.queryable(SysUser.class)
   // ifnull(name,&#39;小王&#39;) like &#39;小明&#39;
    .where(user-&gt;user.name().nullOrDefault(&quot;小王&quot;).like(&quot;小明&quot;))
    .toList()
  
//筛选用户名称包含小明并且年龄小于18岁的
List&lt;SysUser&gt; users = easyEntityQuery.queryable(SysUser.class)
    .where(user-&gt;{
         //name like ? and age &lt; ?
            user.name().like(&quot;小明&quot;);
            user.age().lt(18)
    })
    .toList()
  
//返回分页结果
EasyPageResult&lt;SysUser&gt; users = easyEntityQuery.queryable(SysUser.class)
    .where(user-&gt;{
         //name like ? and age &lt; ?
            user.name().like(&quot;小明&quot;);
            user.age().lt(18)
    })
   .orderBy(user-&gt;user.createTime().desc())//按用户创建时间倒序
    .toPageResult(1,20)
  

//筛选用户名称包含小明或者年龄小于18岁的
List&lt;SysUser&gt; users = easyEntityQuery.queryable(SysUser.class)
    .where(user-&gt;{
       user.or(()-&gt;{
           //name like ? or age &lt; ?
            user.name().like(&quot;小明&quot;);
            user.age().lt(18)
        })
    })
    .toList()

//筛选用户名称包含小明或者年龄小于18岁的,只返回用户id和name
List&lt;SysUser&gt; users = easyEntityQuery.queryable(SysUser.class)
    .where(user-&gt;{
       user.or(()-&gt;{
           //name like ? or age &lt; ?
            user.name().like(&quot;小明&quot;);
            user.age().lt(18)
        })
    })
   //仅返回id和name
   .select(user-&gt; user.FETCHER.id().name().fetchProxy())
    .toList()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="隐式筛选" tabindex="-1"><a class="header-anchor" href="#隐式筛选" aria-hidden="true">#</a> 隐式筛选</h4><h5 id="一对一隐式join" tabindex="-1"><a class="header-anchor" href="#一对一隐式join" aria-hidden="true">#</a> 一对一隐式join</h5><blockquote><p>因为用户和企业是多对一的关系所以可以在筛选用户的时候利用对象关系以企业为条件进行筛选从而自动进行join</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//筛选用户名称包含小明并且在JAVA企业上班的
List&lt;SysUser&gt; list = easyEntityQuery.queryable(SysUser.class)
    .where(user -&gt; {
        user.name().like(&quot;小明&quot;);
        user.company().name().like(&quot;JAVA企业&quot;);
    }).toList();
//from user left join company on ... where user.name like ? and company.name like ?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="一对多隐式子查询" tabindex="-1"><a class="header-anchor" href="#一对多隐式子查询" aria-hidden="true">#</a> 一对多隐式子查询</h5><blockquote><p>当我们在用户对象里面创建好企业关系可以在筛选用户时使用企业作为条件,反之我们在企业模型里面创建好企业和用户的关系我们在筛选企业的时候一样可以使用用户作为条件帮我们快速实现筛选</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//筛选企业,筛选条件为企业下的员工存在名字是小明的
List&lt;Company&gt; companies = easyEntityQuery.queryable(Company.class)
    .where(com -&gt; {
      com.users().any(u -&gt; {
        u.name().like(&quot;小明&quot;);
      });
    }).toList();
//from company where exists( from user where .... and user.name like ?)


//筛选用户条件为用户包含/admin的菜单路径
List&lt;SysUser&gt; userWithMenuContainsAdminPath = easyEntityQuery.queryable(SysUser.class)
    .where(user -&gt; {
      //筛选条件为用户下的角色,因为角色不需要过滤所以直接展开判断菜单
      //菜单里面存在任意一个路径是&#39;/admin&#39;的即可
      user.roles().flatElement().menus().any(menu -&gt; menu.route().like(&quot;/admin&quot;));
    }).toList();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="多表显式join" tabindex="-1"><a class="header-anchor" href="#多表显式join" aria-hidden="true">#</a> 多表显式join</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
//查询用户join企业表条件是企业的名称包含JAVA企业这几个字
List&lt;Company&gt; companies = easyEntityQuery.queryable(SysUser.class)
    .leftJoin(Company.class, (user, com) -&gt; user.companyId().eq(com.id()))
    .where((user, com) -&gt; com.name().like(&quot;JAVA企业&quot;))
    .select((user, com) -&gt; com).toList();
//select company.* from user left join company on user.company_id = company.id where company.name like ?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="直接获取用户拥有的菜单" tabindex="-1"><a class="header-anchor" href="#直接获取用户拥有的菜单" aria-hidden="true">#</a> 直接获取用户拥有的菜单</h5><blockquote><p>用户和菜单并没有直接关系中间和角色表是多对多中间还有两张表user_role和role_menu表</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//查询小明用户拥有的菜单id集合
List&lt;String&gt; menuIds = easyEntityQuery.queryable(SysUser.class)
    .where(user -&gt; user.name().eq(&quot;小明&quot;))
    .toList(user -&gt; user.roles().flatElement().menus().flatElement().id());

//查询小明用户拥有的菜单集合
List&lt;SysMenu&gt; menus = easyEntityQuery.queryable(SysUser.class)
    .where(user -&gt; user.name().eq(&quot;小明&quot;))
    .toList(user -&gt; user.roles().flatElement().menus().flatElement());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="返回用户结构附带角色" tabindex="-1"><a class="header-anchor" href="#返回用户结构附带角色" aria-hidden="true">#</a> 返回用户结构附带角色</h5><blockquote><p>返回结果</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{user:{id:xxx,roles:[{...}]}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//返回小于18岁的用户并且附带角色
List&lt;SysUser&gt; userAndRoles = easyEntityQuery.queryable(SysUser.class)
    .includes(user -&gt; user.roles())
    .where(user -&gt; user.age().lt(18))
    .toList();

//返回用户和用户拥有的角色分页返回一对多
EasyPageResult&lt;SysUser&gt; userAndRolePage = easyEntityQuery.queryable(SysUser.class)
    .includes(user -&gt; user.roles())
    .where(user -&gt; user.age().lt(18))
    .toPageResult(1, 20);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="隐式查询获取匿名结果" tabindex="-1"><a class="header-anchor" href="#隐式查询获取匿名结果" aria-hidden="true">#</a> 隐式查询获取匿名结果</h5><blockquote><p>有时候我们需要在上文获取中间结果便于java内部计算,大部分orm在这个时候只支持返回map对象,这样会导致在使用时会遍布字符串并且具体类型也会丢失导致使用起来非常不方便</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
//查询返回用户id,用户名称和用户所在企业名称无需定义中间对象适用临时上下文获取或者group时候的聚合结果
List&lt;Draft3&lt;String, String, String&gt;&gt; userInfo = easyEntityQuery.queryable(SysUser.class)
      .where(user -&gt; {
          user.name().like(&quot;小明&quot;);
          user.company().name().like(&quot;JAVA企业&quot;);
      }).select(user -&gt; Select.DRAFT.of(
            user.id(),
            user.name(),
            user.company().name()
    )).toList();
for (Draft3&lt;String, String, String&gt; userAdnCom : userInfo) {
  String userId = userAdnCom.getValue1();
  String userName = userAdnCom.getValue2();
  String companyName = userAdnCom.getValue3();
}


List&lt;Draft2&lt;String, Integer&gt;&gt; list2 = easyEntityQuery.queryable(SysUser.class)
      .where(user -&gt; {
        user.name().like(&quot;小明&quot;);
        user.company().name().like(&quot;JAVA企业&quot;);
      })
      .groupBy(user -&gt; GroupKeys.TABLE1.of(user.name()))
      .select(group -&gt; Select.DRAFT.of(
          group.key1(),//user.name
          group.sum(group.groupTable().age())//sum(user.age)
      )).toList();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结构化dto" tabindex="-1"><a class="header-anchor" href="#结构化dto" aria-hidden="true">#</a> 结构化DTO</h3><p>很多时候我们在访问响应时需要返回自定义的数据结构,而不是整个数据库结构</p><p>所以我们这边使用easy-query插件来快速实现构建结构化DTO响应</p><ul><li><p>首先我们在idea插件市场安装<code>EasyQueryAssistant</code>插件最新版本</p></li><li><p>第二部在需要创建DTO的包右键CreateStructDTO</p></li><li><p>第三步选择需要返回的结构化数据</p><figure><img src="`+t+'" alt="" tabindex="0"><figcaption></figcaption></figure><figure><img src="'+a+`" alt="" tabindex="0"><figcaption></figcaption></figure></li></ul><blockquote><p>最终会生成如下dto</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
/**
 * this file automatically generated by easy-query struct dto mapping
 * 当前文件是easy-query自动生成的 结构化dto 映射
 * {@link com.easy.query.test.entity.blogtest.SysUser }
 *
 * @author easy-query
 */
@Data
public class UserRoleMenuDTO {
    private String id;
    private String name;
    @Navigate(value = RelationTypeEnum.ManyToMany)
    private List&lt;InternalRoles&gt; roles;
    /**
     * {@link com.easy.query.test.entity.blogtest.SysRole }
     */
    @Data
    public static class InternalRoles {
        private String id;
        private String name;
        @Navigate(value = RelationTypeEnum.ManyToMany)
        private List&lt;InternalMenus&gt; menus;
    }

    /**
     * {@link com.easy.query.test.entity.blogtest.SysMenu }
     */
    @Data
    public static class InternalMenus {
        private String id;
        private String name;
        private String route;
        private String icon;
    }

}
//一句话返回需要的结构DTO
//通过selectAutoInclude即可映射到我们的DTO 可以返回任意对象关系


List&lt;UserRoleMenuDTO&gt; menus = easyEntityQuery.queryable(SysUser.class)
    .where(u -&gt; {
      u.name().like(&quot;小明&quot;);
      u.createTime().rangeClosed(LocalDateTime.now().plusDays(-100),LocalDateTime.now());
    })
    .selectAutoInclude(UserRoleMenuDTO.class)
    .toList();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数翻译" tabindex="-1"><a class="header-anchor" href="#函数翻译" aria-hidden="true">#</a> 函数翻译</h3><h4 id="通用函数" tabindex="-1"><a class="header-anchor" href="#通用函数" aria-hidden="true">#</a> 通用函数</h4><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>nullOrDefault</td><td>如果列为null则返回参数值</td></tr><tr><td>count</td><td>统计数量返回long</td></tr><tr><td>intCount</td><td>统计数量返回int</td></tr><tr><td>min</td><td>最小值</td></tr><tr><td>max</td><td>最大值</td></tr></tbody></table><h4 id="字符串函数" tabindex="-1"><a class="header-anchor" href="#字符串函数" aria-hidden="true">#</a> 字符串函数</h4><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>subString</td><td>切割字符串,默认起始0</td></tr><tr><td>concat</td><td>链接多个列或者值</td></tr><tr><td>toLower</td><td>转成小写</td></tr><tr><td>toUpper</td><td>转成大写</td></tr><tr><td>trim</td><td>去掉前后空格</td></tr><tr><td>trimStart</td><td>去掉前面空格</td></tr><tr><td>trimEnd</td><td>去掉后面空格</td></tr><tr><td>replace</td><td>替换字符串</td></tr><tr><td>leftPad</td><td>往左补值</td></tr><tr><td>rightPad</td><td>往右补值</td></tr><tr><td>join</td><td>字符串多列join组合返回常用语group+逗号组合</td></tr><tr><td>length</td><td>字符串长度</td></tr><tr><td>compareTo</td><td>比较字符串大小</td></tr></tbody></table><h4 id="时间函数" tabindex="-1"><a class="header-anchor" href="#时间函数" aria-hidden="true">#</a> 时间函数</h4><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>format</td><td>格式化日期支持java格式化</td></tr><tr><td>plus</td><td>增加时间</td></tr><tr><td>plusMonths</td><td>增加月份</td></tr><tr><td>plusYears</td><td>增加年份</td></tr><tr><td>dayOfYear</td><td>当前天数在一年中代表第几天</td></tr><tr><td>dayOfWeek</td><td>当前天数在一年中代表第几天 0-6星期日为0</td></tr><tr><td>year</td><td>返回年份</td></tr><tr><td>month</td><td>返回月份1-12</td></tr><tr><td>day</td><td>返回月份中的天数1-31</td></tr><tr><td>hour</td><td>返回小时0-23</td></tr><tr><td>minute</td><td>返回分钟0-59</td></tr><tr><td>second</td><td>返回秒数0-59</td></tr><tr><td>duration</td><td>返回间隔天/小时/....  a.duration(b,DateTimeDurationEnum.Days) a比b大多少天,如果a小于b则返回负数 两个日期a,b之间相隔多少天</td></tr><tr><td>now</td><td>当前时间</td></tr><tr><td>utcNow</td><td>当前UTC时间</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//函数嵌套处理
List&lt;SysUser&gt; users = easyEntityQuery.queryable(SysUser.class)
    .where(user -&gt; {
      user.createTime()
        .nullOrDefault(LocalDateTime.now())
        .plus(1, TimeUnit.DAYS)
        .format(&quot;yyyy-MM-dd HH:mm:ss&quot;)
        .eq(&quot;2024-01-01 00:00:00&quot;);
    }).toList();
//SQL:FROM user  WHERE DATE_FORMAT(date_add(IFNULL(\`create_time\`,?), interval (?) microsecond),&#39;%Y-%m-%d %H:%i:%s&#39;) = ?
//参数:2024-05-20T14:40:08.152(LocalDateTime),86400000000(Long),2024-01-01 00:00:00(String)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您对此框架有兴趣那么欢迎您的尝试，也欢迎您的意见建议,框架拥有太多的功能无法在这里意义展示,更多的功能可以访问 github仓库 或gitee仓库 进行查阅</p><h3 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h3><p><code>easy-qeury</code>很高兴加入dromara这个组织希望可以再组织下茁壮成长,为java开源贡献一份自己的微弱力量</p><p>最后附上项目地址欢迎大家加入star提交pr issue</p><p>github仓库 https://github.com/dromara/easy-query</p><p>gitee仓库 https://gitee.com/dromara/easy-query</p>`,58),u=[l];function v(c,m){return i(),n("div",null,u)}const b=e(r,[["render",v],["__file","EasyQuery.html.vue"]]);export{b as default};
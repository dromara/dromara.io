import{_ as s,a as n,b as a,c as i}from"./LiteFlow-2.12.0-3-D5kTBjVC.js";import{_ as t,c as l,a as p,o}from"./app-BmgeuuSW.js";const r={};function d(c,e){return o(),l("div",null,e[0]||(e[0]=[p('<p><img src="'+s+'" alt=""></p><p>**LiteFlow is an open source orchestration rule engine that allows you to arrange your system logic arbitrarily, can choose script writing logic, supports up to seven scripting languages, supports rich third-party storage support, and all logic and rules can be hot changed. Design system and refactoring system artifact. * *</p><p>LiteFlow is Gitee&#39;s high star project. By the time this article was published, Gitee star was close to the 6k mark, while Github had 2.6Kstar.</p><p>At the same time, LiteFlow is also an excellent community-driven open source project in China. It has been open source for more than 3 years and has been applied to the core system by major front-line companies. According to incomplete statistics, nearly a thousand domestic companies are using it. The features and support are very good. The community has more than 5000 people. There are nearly 1800 test cases with guaranteed quality.</p><p>If you know this project for the first time, you can go to the official website or the relevant homepage to learn about it:</p><blockquote><p>Project official website:</p><blockquote><p>https://liteflow.cc</p></blockquote><p>gitee managed repository:</p><blockquote><p>https://gitee.com/dromara/liteFlow</p></blockquote><p>github managed repository:</p><blockquote><p>https://github.com/dromara/liteflow</p></blockquote></blockquote><p>Hereinafter, the article LiteFlow is referred to as LF for short.</p><h2 id="preface" tabindex="-1"><a class="header-anchor" href="#preface"><span>Preface</span></a></h2><p>It has been 3 months since the last version, and this time we have brought the super-large version update of v2.12.0. This version was originally intended to be released at the end of March, skipping two votes in the middle, all for the sake of a more stable version. Thank the developers for waiting.</p><p>This year, I can clearly feel that there are more and more small partners using LF, the number of people in the community is also rising, and daily consultation is constant. I believe many people are waiting for this version, which brings 19 issue updates, including a lot of major feature updates, as well as stability updates and some bug fixes reflected by the community.</p><p>In the past 3 months, my friends and LF team have been working hard for this version, and the new version of official website has also made some changes. The dynamic effect of the home page has been changed and is now more concise. The current moving picture of the background is more in line with the intention of LF&#39;s components, and the idea comes from jigsaw puzzle. Thanks to Senyang&#39;s design.</p><p><img src="'+n+'" alt=""></p><p><img src="'+a+`" alt=""></p><p>At the same time, v2.12.0 replaced slogan. This version of slogan is: Make your code amazing. We hope that using LF will help developers make their code more smart and amazing.</p><p>Next, let&#39;s understand what is the highlight of v2.12.0!</p><h2 id="decision-routing" tabindex="-1"><a class="header-anchor" href="#decision-routing"><span>Decision Routing</span></a></h2><p>Decision routing is a version feature of v2.12.0. LF brings a new use of rules, that is, the execution does not specify a specific rule ID, through the decision route EL judgment, to dynamically execute which rules, and the matching and execution process are all parallel. The (route) tag is introduced for this LF:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;chain name=&quot;chain1&quot;&gt;</span></span>
<span class="line"><span>    &lt;route&gt;</span></span>
<span class="line"><span>        AND(r1, r2, r3)</span></span>
<span class="line"><span>    &lt;/route&gt;</span></span>
<span class="line"><span>    &lt;body&gt;</span></span>
<span class="line"><span>        THEN(a, b, c);</span></span>
<span class="line"><span>    &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/chain&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;chain name=&quot;chain2&quot;&gt;</span></span>
<span class="line"><span>    &lt;route&gt;</span></span>
<span class="line"><span>        AND(OR(r4, r5), NOT(r3))</span></span>
<span class="line"><span>    &lt;/route&gt;</span></span>
<span class="line"><span>    &lt;body&gt;</span></span>
<span class="line"><span>        SWITCH(x).TO(d, e, f);</span></span>
<span class="line"><span>    &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/chain&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The EL in the decision body can only be used with or non-expressions, and the component can only be used with Boolean expressions. Please refer to the &quot;Decision Routing&quot; in the official website document for details on how to use it &#39;.</p><h2 id="boolean-component" tabindex="-1"><a class="header-anchor" href="#boolean-component"><span>Boolean component</span></a></h2><p>v2.12.0 is not a compatible version, the main reason is the new concept of Boolean components.</p><p>In the new version, &#39;NodeIfComponent&#39;,&#39;NodeWhileComponent&#39;, and &#39;NodeBreakComponent&#39; are removed 3 a component form, and the boolean component &#39;NodeBooleanComponent&#39; is unified &#39;. In other words, Boolean components can be used in IF,WHILE,BREAK expressions.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@LiteflowComponent(&quot;x&quot;)</span></span>
<span class="line"><span>public class ECmp extends NodeBooleanComponent {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public boolean processBoolean() throws Exception {</span></span>
<span class="line"><span>        // do your biz</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you upgrade the new version, you need to replace the above three components as Boolean components and replace the superclass. This process will not delay you too much time. To this end, we have prepared the &#39;2.12.0 Upgrade Guide&#39;, which has a very detailed upgrade guide, which can be found in the official website.</p><h2 id="allow-startup-without-checking-node-existence" tabindex="-1"><a class="header-anchor" href="#allow-startup-without-checking-node-existence"><span>Allow startup without checking node existence</span></a></h2><p>Many small partners in the community have reflected that the current mandatory startup check node existence has hindered their collaborative development. A global parameter is provided for this LF new version:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>parse-mode=PARSE_ONE_ON_FIRST_EXEC</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This &#39;parse-mode&#39; replaces the previous &#39;parse-on-start &#39;. This parameter has three values:</p><table><thead><tr><th>Set value</th><th>Meaning</th></tr></thead><tbody><tr><td>PARSE_ALL_ON_START</td><td>Parse all rules at startup, this is the default value without configuration</td></tr><tr><td>PARSE_ALL_ON_FIRST_EXEC</td><td>Rules are not parsed at startup, but the first time any rule is executed, all</td></tr><tr><td>PARSE_ONE_ON_FIRST_EXEC</td><td>Rules are not parsed at startup, but only the corresponding rules are parsed when the relevant rules are executed for the first time.</td></tr></tbody></table><p>For a detailed explanation of this part, please see &#39;Metadata Management-&gt; Start Do Not Check Rules&#39; in the official website document &#39;.</p><h2 id="rewritten-python-scripting-engine" tabindex="-1"><a class="header-anchor" href="#rewritten-python-scripting-engine"><span>Rewritten python scripting engine</span></a></h2><p>LF provides python script support, but this parsing engine has always had some problems. Perhaps there are not many people in the community using python engine, so this problem has not been exposed. Since someone uses it, since there is a problem. Then we need to fix this problem.</p><p>To this end, we overturned the previous implementation of the python parsing engine and re-wrote the 1 version to solve the problem that the python script cannot return normally.</p><h2 id="the-unity-of-declarative-components" tabindex="-1"><a class="header-anchor" href="#the-unity-of-declarative-components"><span>The unity of declarative components</span></a></h2><p>In fact, this feature has been implemented as early as 2.11.4, and is not strictly a new version of the feature. However, due to compatibility, it is not stated in the 2.11.X document.</p><p>Before LF classification declaration type and method level declaration type, and the class declaration type in the declaration than the method level declaration type one more &#39;@ LiteflowCmpDefine&#39; annotation, once a small partner said that this is a bit redundant, and a bit fragmented.</p><p>Therefore, LF can not use this annotation in the new declaration. Basically, class-level declarative and method-level declarative are unified. If you define a component in a class, that is class-level declarative, and defining multiple components is method-level declarative. Of course, the previous definition is still valid. LF is compatible.</p><p>This is the class level declarative:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@LiteflowComponent(&quot;a&quot;)</span></span>
<span class="line"><span>public class ACmp{</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    @LiteflowMethod(LiteFlowMethodEnum.PROCESS, nodeType = NodeTypeEnum.COMMON)</span></span>
<span class="line"><span>    public void processAcmp(NodeComponent bindCmp) {</span></span>
<span class="line"><span>        System.out.println(&quot;ACmp executed!&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is a method level declarative：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@LiteflowComponent</span></span>
<span class="line"><span>public class CmpConfig {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //普通组件的定义</span></span>
<span class="line"><span>    @LiteflowMethod(value = LiteFlowMethodEnum.PROCESS, nodeId = &quot;a&quot;, nodeName = &quot;A组件&quot;)</span></span>
<span class="line"><span>    public void processA(NodeComponent bindCmp) {</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //SWITCH组件的定义</span></span>
<span class="line"><span>    @LiteflowMethod(value = LiteFlowMethodEnum.PROCESS_SWITCH, nodeId = &quot;b&quot;, nodeName = &quot;B组件&quot;, nodeType = NodeTypeEnum.SWITCH)</span></span>
<span class="line"><span>    public String processB(NodeComponent bindCmp) {</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //布尔组件的定义</span></span>
<span class="line"><span>    @LiteflowMethod(value = LiteFlowMethodEnum.PROCESS_BOOLEAN, nodeId = &quot;c&quot;, nodeName = &quot;C组件&quot;, nodeType = NodeTypeEnum.BOOLEAN)</span></span>
<span class="line"><span>    public boolean processC(NodeComponent bindCmp) {</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-context-provides-the-way-to-get-the-alias" tabindex="-1"><a class="header-anchor" href="#the-context-provides-the-way-to-get-the-alias"><span>The context provides the way to get the alias.</span></a></h2><p>I believe everyone knows that the context is obtained through &#39;this.getContextBean&#39; or&#39;this. getFirstContextBean. However, these acquisition methods are all acquired through class. If two contexts of the same class are passed in, there will be problems.</p><p>LF introduced the method of obtaining according to alias in the new version. To define an alias of a context, it is very simple. You only need to label it with the&#39; @ ContextBean&#39; annotation:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@ContextBean(&quot;anyName&quot;)</span></span>
<span class="line"><span>public class YourContext {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When acquiring, LF provides a new acquisition method:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Component(&quot;a&quot;)</span></span>
<span class="line"><span>public class ACmp extends NodeComponent {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void process() {</span></span>
<span class="line"><span>        TestContext context = this.getContextBean(&quot;anyName&quot;);</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This feature can solve the same class as the context of the scenario.</p><h2 id="el-level-provides-retry-keyword" tabindex="-1"><a class="header-anchor" href="#el-level-provides-retry-keyword"><span>EL level provides retry keyword</span></a></h2><p>LF provided the retry feature before, but the retry feature is provided through the &#39;@ LiteflowRetry&#39; annotation. This annotation is on the class, and there is no way to reflect it in the rule EL. In the new version, we provide the &#39;retry&#39; keyword based on the EL level, and apply the retry feature to arbitrary expressions instead of just components.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;chain id=&quot;chain1&quot;&gt;</span></span>
<span class="line"><span>    THEN(a, b.retry(3));</span></span>
<span class="line"><span>&lt;/chain&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;chain id=&quot;chain2&quot;&gt;</span></span>
<span class="line"><span>    THEN(a, b).retry(3);</span></span>
<span class="line"><span>&lt;/chain&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;chain id=&quot;chain3&quot;&gt;</span></span>
<span class="line"><span>    FOR(c).DO(a).retry(3);</span></span>
<span class="line"><span>&lt;/chain&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;chain id=&quot;chain4&quot;&gt;</span></span>
<span class="line"><span>    exp = SWITCH(x).to(m,n,p);</span></span>
<span class="line"><span>    IF(f, exp.retry(3), b);</span></span>
<span class="line"><span>&lt;/chain&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For details about the usage of the &#39;retry&#39; keyword, please refer to &#39;Advanced Features-&gt; Retry in EL&#39; in the official website document &#39;.</p><h2 id="add-validation-unload-script-feature" tabindex="-1"><a class="header-anchor" href="#add-validation-unload-script-feature"><span>Add validation/unload script feature</span></a></h2><p>In the new version, we provide an api for verifying scripts and uninstalling scripts. Specific usage is as follows:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>boolean isValid = ScriptValidator.validate(script);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The usage of the unload script is as follows:</p><p>&#39;&#39;&#39; FlowBus.unloadScriptNode(String nodeId); &#39;&#39;&#39;</p><h2 id="provide-to-view-all-nodes-under-a-rule" tabindex="-1"><a class="header-anchor" href="#provide-to-view-all-nodes-under-a-rule"><span>Provide to view all nodes under a rule</span></a></h2><p>In the new version, we also provide an api to view all nodes under chain:</p><p>&#39;&#39;&#39; List(Node) nodeList = FlowBus.getNodesByChainId(&quot;chain1&quot;); &#39;&#39;&#39;</p><h2 id="start-and-stop-a-rule-script" tabindex="-1"><a class="header-anchor" href="#start-and-stop-a-rule-script"><span>Start and stop a rule/script</span></a></h2><p>In the data, LF has long supported the enable of rules and scripts, but in other storage plug-ins, we did not support it before.</p><p>We also support the new version. Since many storage plug-ins such as zk,etcd,redis,apollo and other rules/scripts are KV structures, we have made some modifications to the structure of key.</p><p>The full form of the rule key is &#39;Rule ID[: Enabled] &#39;.</p><p>The complete format of the script key is: &#39;Script component ID: script type [: script name: script language: enabled] &#39;.</p><p>where the values in square brackets are optional.</p><p>For a detailed explanation of this part, please refer to the 1 chapter of &quot;Rules and Configuration Sources&quot; in the official document.</p><h2 id="full-list-of-updates" tabindex="-1"><a class="header-anchor" href="#full-list-of-updates"><span>Full list of updates</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>特性 #I96A33 为LF增加决策表特性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I96A33</span></span>
<span class="line"><span></span></span>
<span class="line"><span>特性 #I9DQDU 允许对不存在的组件增加全局参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I9DQDU</span></span>
<span class="line"><span></span></span>
<span class="line"><span>特性 #I9050W 为每一个上下文提供一个名字，使用时可以根据名字来获取</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I9050W</span></span>
<span class="line"><span></span></span>
<span class="line"><span>特性 #I8PL2M EL语句里可以设置重试次数，类似于EL中的超时时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I8PL2M</span></span>
<span class="line"><span></span></span>
<span class="line"><span>特性 #I61D1N 规则层面增加一个enable的选项，可以禁用规则</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I61D1N</span></span>
<span class="line"><span></span></span>
<span class="line"><span>特性 #I8YNCB 查看某一个chainId下的所有node</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I8YNCB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>特性 #I8HDIA 新增一个验证脚本的方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I8HDIA</span></span>
<span class="line"><span></span></span>
<span class="line"><span>增强 #I8SMQB BREAK、IF、WHILE组件统一变成布尔组件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I8SMQB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>增强 #I8MW6Q 没有脚本（node）加载后没有提供卸载的方法，可能造成脚本一直占用内存</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I8MW6Q</span></span>
<span class="line"><span></span></span>
<span class="line"><span>增强 #I905AD 优化注解的获取速度，优化性能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I905AD</span></span>
<span class="line"><span></span></span>
<span class="line"><span>增强 #I95XTD python脚本无法写return脚本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I95XTD</span></span>
<span class="line"><span></span></span>
<span class="line"><span>增强 #I90IRR 设置超时maxWaitSenconds之后，超时的组件仍旧执行会报出NPE的问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I90IRR</span></span>
<span class="line"><span></span></span>
<span class="line"><span>增强 #I9F2HP 链路继承中的占位符换成双括弧</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I9F2HP</span></span>
<span class="line"><span></span></span>
<span class="line"><span>增强 #I98L0S 现版本需要依赖jackson2.16，缺少toPrettyString方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I98L0S</span></span>
<span class="line"><span></span></span>
<span class="line"><span>增强 #I97Y7Y 2.11.4.2版本中ComponentScanner初始化失败，建议重写BeanPostProcessor#postProcessBeforeInitialization</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I97Y7Y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>增强 #I91AUT 对于诸如isContinueOnError或isAccess这样的方法，期望能够提供set形式的调用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I91AUT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>修复 #I932V4 组件降级，在寻找降级组件时，仍应该去查找下有没有对应的组件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I932V4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>修复 #I8YDGE 在迭代循环组件中，无法获取子流程传递的请求参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I8YDGE</span></span>
<span class="line"><span></span></span>
<span class="line"><span>修复 #I8Y0X4 并行循环中有可能导致的ConditionStack的并发问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://gitee.com/dromara/liteFlow/issues/I8Y0X4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="adopt-team-members" tabindex="-1"><a class="header-anchor" href="#adopt-team-members"><span>Adopt team members</span></a></h2><p>At present, there are 11 members in LF 1, and we also hope to attract more developers to join the open source team. If you want to join the open source team, the &quot;certificate of submission&quot; is 3 PR, which can only be qualified if you successfully pass the author&#39;s review and be included in the lead. If you are a student friend, you will pass if you complete the topic assigned by the author and successfully join the main task.</p><h2 id="lf-club" tabindex="-1"><a class="header-anchor" href="#lf-club"><span>LF CLUB</span></a></h2><p>LF CLUB is a premium paid community founded by the authors.</p><p>LF CLUB helps users of all LiteFlow frameworks, as well as potential developers who want to use LiteFlow.</p><p>In addition to providing members with the most timely and detailed consulting services, 11 articles have been updated in the series of vernacular analysis LF, and this series will be more than 50 articles. All are exclusive content. It will not be published on other platforms.</p><p>In addition, there will be other high-concurrency parsing, Java spring using advanced skills and other series, as well as LF-related processes, introduction of new features, and so on.</p><p>It is updated every 2 to 3 days. If you are interested in small partners, you can scan the following two-dimensional code to see the introduction.</p><p><img src="`+i+'" alt=""></p>',78)]))}const m=t(r,[["render",d],["__file","LiteFlow-2.12.0.html.vue"]]),v=JSON.parse('{"path":"/blog/LiteFlow-2.12.0.html","title":"Decision routing features hit, LiteFlow release of version 2.12.0, Make your code amaing!","lang":"en-US","frontmatter":{"title":"Decision routing features hit, LiteFlow release of version 2.12.0, Make your code amaing!","author":"Platinum East","date":"2024-04-16T00:00:00.000Z","tag":[null],"cover":"/assets/img/blog/LiteFlow-2.12.0-0.png","head":[["meta",{"name":"Blog"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/blog/LiteFlow-2.12.0.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/blog/LiteFlow-2.12.0.html"}],["meta",{"property":"og:title","content":"Decision routing features hit, LiteFlow release of version 2.12.0, Make your code amaing!"}],["meta",{"property":"og:description","content":"**LiteFlow is an open source orchestration rule engine that allows you to arrange your system logic arbitrarily, can choose script writing logic, supports up to seven scripting ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/blog/LiteFlow-2.12.0-0.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-31T11:19:25.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/blog/LiteFlow-2.12.0-0.png"}],["meta",{"name":"twitter:image:alt","content":"Decision routing features hit, LiteFlow release of version 2.12.0, Make your code amaing!"}],["meta",{"property":"article:author","content":"Platinum East"}],["meta",{"property":"article:published_time","content":"2024-04-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-31T11:19:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Decision routing features hit, LiteFlow release of version 2.12.0, Make your code amaing!\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/blog/LiteFlow-2.12.0-0.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/blog/LiteFlow-2.12.0-1.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/blog/LiteFlow-2.12.0-2.png\\",\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/blog/LiteFlow-2.12.0-3.png\\"],\\"datePublished\\":\\"2024-04-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-31T11:19:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Platinum East\\"}]}"]],"description":"**LiteFlow is an open source orchestration rule engine that allows you to arrange your system logic arbitrarily, can choose script writing logic, supports up to seven scripting ..."},"headers":[{"level":2,"title":"Preface","slug":"preface","link":"#preface","children":[]},{"level":2,"title":"Decision Routing","slug":"decision-routing","link":"#decision-routing","children":[]},{"level":2,"title":"Boolean component","slug":"boolean-component","link":"#boolean-component","children":[]},{"level":2,"title":"Allow startup without checking node existence","slug":"allow-startup-without-checking-node-existence","link":"#allow-startup-without-checking-node-existence","children":[]},{"level":2,"title":"Rewritten python scripting engine","slug":"rewritten-python-scripting-engine","link":"#rewritten-python-scripting-engine","children":[]},{"level":2,"title":"The unity of declarative components","slug":"the-unity-of-declarative-components","link":"#the-unity-of-declarative-components","children":[]},{"level":2,"title":"The context provides the way to get the alias.","slug":"the-context-provides-the-way-to-get-the-alias","link":"#the-context-provides-the-way-to-get-the-alias","children":[]},{"level":2,"title":"EL level provides retry keyword","slug":"el-level-provides-retry-keyword","link":"#el-level-provides-retry-keyword","children":[]},{"level":2,"title":"Add validation/unload script feature","slug":"add-validation-unload-script-feature","link":"#add-validation-unload-script-feature","children":[]},{"level":2,"title":"Provide to view all nodes under a rule","slug":"provide-to-view-all-nodes-under-a-rule","link":"#provide-to-view-all-nodes-under-a-rule","children":[]},{"level":2,"title":"Start and stop a rule/script","slug":"start-and-stop-a-rule-script","link":"#start-and-stop-a-rule-script","children":[]},{"level":2,"title":"Full list of updates","slug":"full-list-of-updates","link":"#full-list-of-updates","children":[]},{"level":2,"title":"Adopt team members","slug":"adopt-team-members","link":"#adopt-team-members","children":[]},{"level":2,"title":"LF CLUB","slug":"lf-club","link":"#lf-club","children":[]}],"git":{"createdTime":1725103165000,"updatedTime":1725103165000,"contributors":[{"name":"itanxyu","username":"itanxyu","email":"itanxy@126.com","commits":1,"url":"https://github.com/itanxyu"}]},"readingTime":{"minutes":7.67,"words":2301},"filePathRelative":"blog/LiteFlow-2.12.0.md","localizedDate":"April 16, 2024","autoDesc":true,"excerpt":"<p><img src=\\"/assets/img/blog/LiteFlow-2.12.0-0.png\\" alt=\\"\\"></p>\\n<p>**LiteFlow is an open source orchestration rule engine that allows you to arrange your system logic arbitrarily, can choose script writing logic, supports up to seven scripting languages, supports rich third-party storage support, and all logic and rules can be hot changed. Design system and refactoring system artifact. * *</p>"}');export{m as comp,v as data};

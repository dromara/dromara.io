import{_ as t,c as i,a as o,o as a}from"./app-BmgeuuSW.js";const r={};function s(n,e){return a(),i("div",null,e[0]||(e[0]=[o('<blockquote><p>Hutool is a small but complete Java utility class library that provides elegant, efficient and convenient tool methods.</p></blockquote><h2 id="what-is-hutool" tabindex="-1"><a class="header-anchor" href="#what-is-hutool"><span>What is Hutool</span></a></h2><p>! [architecture panorama] (/ assets/img/architecture/hutool - framework. PNG)</p><p>Originally, this version should have been 5.7.23, but the user raised some issues, which must be resolved by modifying the original code structure:</p><ol><li>For example, when the MongoDB client is packaged, the packaged tool class has to be modified due to incompatible modifications to its driver.</li><li>The part of the code involved in Bean copy (BeanCopier), due to a parameter failure, thought it was just a simple bug, and later found that there was a problem with the whole design... You can imagine the extent of the crash, liver spent two nights refactoring this part of the code.</li><li>When I modified the code, I found that there were many design problems in many parts, and I made small refactoring by the way.</li><li>In order to solve the possible impact of each major version upgrade on old users, this version is released in a milestone way, the version is M1 (feel to send a CPU to the user), and it is also to solve the problem of each &quot;radical&quot; upgrade of Hutool (after all, old age, to be stable).</li><li>Purchase instead of donation, if you want to support Hutool, you can go to the Hutool home page and click -&gt; click into the surrounding stores to buy Hutool peripheral to support Hutool. Oh, this is more affordable than donation (after all, I do not know how to thank the donor, it is a moral burden...)</li></ol><p>Thank you to the Hutool members who discussed and solved a lot of issues together in this release: @阿超 @Cherryrum @Husky</p><hr><h2 id="_5-8-0-m1" tabindex="-1"><a class="header-anchor" href="#_5-8-0-m1"><span>5.8.0.M1</span></a></h2><h3 id="❌-incompatible-feature" tabindex="-1"><a class="header-anchor" href="#❌-incompatible-feature"><span>❌ Incompatible feature</span></a></h3><p>• 【db 】 【 Not backward compatible 】 Added MongoDB4.x support Return MongoClient change (pr#568@Gitee) • 【json】【Possible compatibility issues】 Modify JSONObject structure, inherited from MapWrapper • 【core】【Possible compatibility issues】 Rebuild BeanCopier, create XXXCopier, and delete XXXValueProvider • 【core】【Possible compatibility issues】URLEncoder is deprecated, URLEncoderUtil uses RFC3986 • 【core】【Possible compatibility issues】 Base32 separate encoding and decoding in order to reduce data load, support Hex mode • 【core】【Possible compatibility issues】 Base58 separate encoding and decoding • 【core】【Possible compatibility issues】 Base62 separate encoding and decoding, added inverted mode support • 【core】【compatibility issues】 PunyCode parameter changed from String to Charsequence • 【cron 】 【 Possible compatibility issues 】SimpleValueParser was renamed AbsValueParser and changed to abstract • 【poi 】 【 Possible compatibility problem 】ExcelUtil.getBigWriter Change the return value to BigExcelWriter • 【core】【Possible compatibility issues】 Opt.ofEmptyAble argument changed from List to Collection subclass (pr#580@Gitee) • 【json】【Possible compatibility issues】 When converting JSON to Bean, use JSON&#39;s own Settings instead of the default (issue#2212@Github) • 【json】【Possible compatibility issues】isOrder is discarded in JSONConfig, and is all ordered by default</p><h3 id="🐣-new-features" tabindex="-1"><a class="header-anchor" href="#🐣-new-features"><span>🐣 New features</span></a></h3><p>• 【http 】 HttpRequest.form is in TableMap mode (issue#I4W427@Gitee) • 【core 】 AnnotationUtil adds getAnnotationAlias (pr#554@Gitee) • 【core 】 FileUtil.extName added special handling for tar.gz (issue#I4W5FS@Gitee)<br> • 【crypto 】 Add XXTEA implementation (issue#I4WH2X@Gitee) • 【core 】 Add Table implementation (issue#2179@Github) • 【core 】 Add UniqueKeySet (issue#I4WUWR@Gitee) • 【core 】 Extension of conversion from Arabic numerals to Chinese to par value of invoice (pr#570@Gitee) • [core] ArrayUtil adds replace method (pr#570@Gitee) • 【core 】 CsvReadConfig Add the custom title line number (issue#2180@Github) • 【core 】 FileAppender Optimizes initial List size (pr#2197@Github) • 【core 】 Base32 adds pad support (pr#2195@Github)<br> • 【core 】 Adds setFields methods to Dict (pr#578@Gitee) • 【db 】 New index related interface to db.meta (pr#563@Gitee) • 【db 】 The length of Column#typeName is removed from the column of Oracle (pr#563@Gitee). • 【poi 】 Optimize ExcelReader for read-only mode (pr#2204@Gitee) • 【poi 】 Optimizes ExcelBase and puts alias in<br> • 【core 】 Improved StrUtil#startWith and endWith performance • 【cron 】 Add CronPatternParser and MatcherTable<br> • 【http 】 GlobalHeaders add system attributes allowUnsafeServerCertChange、allowUnsafeRenegotiation<br> • 【http 】 UserAgentUtil parsing, add MiUI/XiaoMi browser judgment logic (pr#581@Gitee) • 【core 】 FileAppender Add lock structure (pr#2211@Github) • 【poi 】 ExcelReader added construction (pr#2213@Github) • 【core 】 MapUtil provides change function, EnumUtil provides getBy function, enumeration field mapping through lambda (pr#583@Gitee) • 【core 】 CompareUtil adds comparingIndexed (pr#585@Gitee). • 【db 】 DruidDataSource build with custom parameters (issue#I4ZKCW@Gitee) • 【poi 】 ExcelWriter adds addImg overload (issue#2218@Github)<br> • 【bloomFilter】 Added FuncFilter • 【http 】 Added GlobalInterceptor（issue#2217）</p><h3 id="🐞bug-fixed" tabindex="-1"><a class="header-anchor" href="#🐞bug-fixed"><span>🐞Bug fixed</span></a></h3><p>• 【core 】 Fix ObjectUtil.hasNull passing null returns true (pr#555@Gitee) • 【core 】 Fix NumberConverter number conversion issue (issue#I4WPF4@Gitee) • 【core 】 Fixing problems with ReflectUtil.getMethods Obtaining interface methods (issue#I4WUWR@Gitee) • 【core 】 Fix uppercase conversion issue in NamingCase (pr#572@Gitee) • 【http 】 Fix to GET parameter carrying issue (issue#2189@Github)<br> • 【core 】 Fix the parent path error of FileUtil and FileCopier relative paths (pr#2188@Github) • 【core 】 Fixed invalid fieldNameEditor in CopyOptions (issue#2202@Github)<br> • 【json 】 Fix JSON parsing of Map.Entry<br> • 【core 】 Fix MapConverter map and map conversion compatibility issues • 【poi 】 Solves POI-5.2.x compatibility issues when sax reads • 【core 】 Fixed the intersection problem of judging two time intervals (pr#2210@Github) • 【http 】 Fix tag deletion issue (issue#I4Z7BV@Gitee) • 【core 】 Fix file name with * in Win (pr#584@Gitee) • 【core 】 FileUtil.getMimeType added rar and 7z support (issue#I4ZBN0@Gitee) • 【json 】 JSON fixed invalid transient Settings (issue#2212@Github) • 【core 】 Fix IterUtil.getElementType getting null (issue#2222@Github) • 【core 】 Fix lunar calendar to Gregorian calendar in leap month error (issue#I4ZSGJ@Gitee)</p><h2 id="community-co-construction" tabindex="-1"><a class="header-anchor" href="#community-co-construction"><span>Community co-construction</span></a></h2><p>We uphold the principle of <code>harmony and happiness</code>, <code>code first</code>, if you have ideas, are willing to grow with us, contribute together, come and join us!</p><ul><li>github:https://github.com/dromara/hutool</li><li>gitee:https://gitee.com/dromara/hutool</li></ul>',17)]))}const c=t(r,[["render",s],["__file","hutool-5.8.0.html.vue"]]),d=JSON.parse('{"path":"/news/hutool-5.8.0.html","title":"Hutool-5.8.0.M1 released, attempting milestone release","lang":"en-US","frontmatter":{"title":"Hutool-5.8.0.M1 released, attempting milestone release","author":"hutool","tag":["hutool"],"date":"2022-03-30T00:00:00.000Z","cover":"/assets/img/architecture/hutool-framework.png","head":[["meta",{"name":"News"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/news/hutool-5.8.0.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/news/hutool-5.8.0.html"}],["meta",{"property":"og:title","content":"Hutool-5.8.0.M1 released, attempting milestone release"}],["meta",{"property":"og:description","content":"Hutool is a small but complete Java utility class library that provides elegant, efficient and convenient tool methods. What is Hutool ! [architecture panorama] (/ assets/img/ar..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/architecture/hutool-framework.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-04T07:29:42.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/architecture/hutool-framework.png"}],["meta",{"name":"twitter:image:alt","content":"Hutool-5.8.0.M1 released, attempting milestone release"}],["meta",{"property":"article:author","content":"hutool"}],["meta",{"property":"article:tag","content":"hutool"}],["meta",{"property":"article:published_time","content":"2022-03-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-04T07:29:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hutool-5.8.0.M1 released, attempting milestone release\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/architecture/hutool-framework.png\\"],\\"datePublished\\":\\"2022-03-30T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-04T07:29:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"hutool\\"}]}"]],"description":"Hutool is a small but complete Java utility class library that provides elegant, efficient and convenient tool methods. What is Hutool ! [architecture panorama] (/ assets/img/ar..."},"headers":[{"level":2,"title":"What is Hutool","slug":"what-is-hutool","link":"#what-is-hutool","children":[]},{"level":2,"title":"5.8.0.M1","slug":"_5-8-0-m1","link":"#_5-8-0-m1","children":[{"level":3,"title":"❌ Incompatible feature","slug":"❌-incompatible-feature","link":"#❌-incompatible-feature","children":[]},{"level":3,"title":"🐣 New features","slug":"🐣-new-features","link":"#🐣-new-features","children":[]},{"level":3,"title":"🐞Bug fixed","slug":"🐞bug-fixed","link":"#🐞bug-fixed","children":[]}]},{"level":2,"title":"Community co-construction","slug":"community-co-construction","link":"#community-co-construction","children":[]}],"git":{"createdTime":1693309054000,"updatedTime":1693812582000,"contributors":[{"name":"Cicici-Shi","username":"Cicici-Shi","email":"94002846+Cicici-Shi@users.noreply.github.com","commits":1,"url":"https://github.com/Cicici-Shi"},{"name":"Cici","username":"Cici","email":"1901177100@qq.com","commits":1,"url":"https://github.com/Cici"}]},"readingTime":{"minutes":3,"words":899},"filePathRelative":"news/hutool-5.8.0.md","localizedDate":"March 30, 2022","autoDesc":true,"excerpt":"<blockquote>\\n<p>Hutool is a small but complete Java utility class library that provides elegant, efficient and convenient tool methods.</p>\\n</blockquote>\\n<h2>What is Hutool</h2>\\n<p>! [architecture panorama] (/ assets/img/architecture/hutool - framework. PNG)</p>\\n<p>Originally, this version should have been 5.7.23, but the user raised some issues, which must be resolved by modifying the original code structure:</p>"}');export{c as comp,d as data};

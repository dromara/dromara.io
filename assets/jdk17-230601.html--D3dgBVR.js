import{_ as t,c as e,a as l,o as i}from"./app-BmgeuuSW.js";const d={};function n(o,a){return i(),e("div",null,a[0]||(a[0]=[l('<p><strong>Spring Boot 3.1.0-M1</strong> 已经发布一段时间了，不知道各位小伙伴是否关注了。随着 Spring 6.0 以及 SpringBoot 3.0 的发布，整个开发界也逐步进入到 jdk17 的时代。大有当年从 jdk6 到 jdk8 升级过程，痛苦并快乐着。</p><p>为了不被时代抛弃，开发者应追逐新的技术发展，拥抱变化，不要固步自封。</p><h2 id="_0x01-纵观发展" tabindex="-1"><a class="header-anchor" href="#_0x01-纵观发展"><span>0x01 纵观发展</span></a></h2><ul><li>Pre-alpha（Dev）指在软件项目进行正式测试之前执行的所有活动</li><li>LTS（Long-Term Support）版本指的是长期支持版本</li><li>Alpha   软件发布生命周期的 alpha 阶段是软件测试的第一阶段</li><li>Beta 阶段是紧随 alpha 阶段之后的软件开发阶段，以希腊字母第二个字母命名</li><li>Release candidate   发行候选版（RC），也被称为“银色版本”，是具备成为稳定产品的潜力的 beta 版本，除非出现重大错误，否则准备好发布</li><li>Stable release   稳定版又称为生产版本，是通过所有验证和测试阶段的最后一个发行候选版（RC）</li><li>Release   一旦发布，软件通常被称为“稳定版”</li></ul><p><strong>下面我们来看下 JDK9~JDK17 的发展：</strong></p><table><thead><tr><th>版本</th><th>发布时间</th><th>版本类型</th><th>支持时间</th><th>新特性</th></tr></thead><tbody><tr><td>JDK 9</td><td>2017 年 9 月</td><td>长期支持版（LTS）</td><td>5 年</td><td>-模块化系统（Jigsaw）- JShell - 接口的私有方法- 改进的 try-with-resources - 集合工厂方法 - 改进的 Stream API</td></tr><tr><td>JDK 10</td><td>2018 年 3 月</td><td>短期支持版（non-LTS）</td><td>6 个月</td><td>- 局部变量类型推断 - G1 垃圾回收器并行全阶段 - 应用级别的 Java 类数据共享</td></tr><tr><td>JDK 11</td><td>2018 年 9 月</td><td>长期支持版（LTS）</td><td>8 年</td><td>- HTTP 客户端 API - ZGC 垃圾回收器 - 移除 Java EE 和 CORBA 模块</td></tr><tr><td>JDK 12</td><td>2019 年 3 月</td><td>短期支持版（non-LTS）</td><td>6 个月</td><td>- switch 表达式 - JVM 原生 HTTP 客户端 - 微基准测试套件</td></tr><tr><td>JDK 13</td><td>2019 年 9 月</td><td>短期支持版（non-LTS）</td><td>6 个月</td><td>-  switch 表达式增强 - 文本块 - ZGC 垃圾回收器增强</td></tr><tr><td>JDK 14</td><td>2020 年 3 月</td><td>短期支持版（non-LTS）</td><td>6 个月</td><td>- switch 表达式增强 - 记录类型 - Pattern Matching for instanceof</td></tr><tr><td>JDK 15</td><td>2020 年 9 月</td><td>短期支持版（non-LTS）</td><td>6 个月</td><td>- 移除 Nashorn JavaScript 引擎 - ZGC 垃圾回收器增强 - 隐藏类和动态类文件</td></tr><tr><td>JDK 16</td><td>2021 年 3 月</td><td>短期支持版（non-LTS）</td><td>6 个月</td><td>- 位操作符增强- Records 类型的完整性 - Vector API</td></tr><tr><td>JDK 17</td><td>2021 年 9 月</td><td>长期支持版（LTS）</td><td>8 年</td><td>- 垃圾回收器改进 - Sealed 类和接口 - kafka 客户端更新 - 全新的安全存储机制</td></tr></tbody></table><p>需要注意的是，LTS 版本的支持时间可能会受到 Oracle 官方政策变化的影响，因此表格中的支持时间仅供参考。</p><h2 id="_0x02-详细解读" tabindex="-1"><a class="header-anchor" href="#_0x02-详细解读"><span>0x02 详细解读</span></a></h2><h3 id="jdk9-新特性" tabindex="-1"><a class="header-anchor" href="#jdk9-新特性"><span>JDK9 新特性</span></a></h3><p>JDK 9 是 Java 平台的一个重大版本，于 2017 年 9 月发布。它引入了多项新特性，其中最重要的是模块化系统。以下是 JDK 9 新增内容的详细解释：</p><ol><li>模块化系统（Jigsaw）：</li></ol><p>Jigsaw 是 JDK 9 引入的一个模块化系统，它将 JDK 拆分为约 90 个模块。这些模块相互独立，可以更好地管理依赖关系和可见性，从而提高了代码的可维护性和可重用性。模块化系统还提供了一些新的工具和命令，如 jmod 命令和 jlink 命令，用于构建和组装模块化应用程序。</p><ol start="2"><li>JShell：</li></ol><p>JShell 是一个交互式的 Java 命令行工具，可以在命令行中执行 Java 代码片段。它可以非常方便地进行代码测试和调试，并且可以快速地查看和修改代码。JShell 还提供了一些有用的功能，如自动补全、实时反馈和历史记录等。</p><ol start="3"><li>接口的私有方法：</li></ol><p>JDK 9 允许在接口中定义 private 和 private static 方法。这些方法可以被接口中的其他方法调用，但不能被实现该接口的类使用。这样可以避免在接口中重复编写相同的代码，提高了代码的重用性和可读性。</p><ol start="4"><li>改进的 try-with-resources：</li></ol><p>在 JDK 9 中，可以在 try-with-resources 语句块中使用 final 或 effectively final 的变量。这样可以避免在 finally 语句块中手动关闭资源，提高了代码的可读性和可维护性。</p><ol start="5"><li>集合工厂方法：</li></ol><p>JDK 9 提供了一系列工厂方法，用于创建 List、Set 和 Map 等集合对象。这些方法可以使代码更加简洁和易读，而且还可以为集合对象指定初始容量和类型参数。</p><ol start="6"><li>改进的 Stream API：</li></ol><p>JDK 9 引入了一些新的 Stream API 方法，如 takeWhile、dropWhile 和 ofNullable 等。takeWhile 和 dropWhile 方法可以根据指定的条件从流中选择元素，而 ofNullable 方法可以创建一个包含一个非空元素或空元素的 Stream 对象。</p><p>除了以上几个新特性，JDK 9 还引入了一些其他的改进和优化，如改进的 Stack-Walking API、改进的 CompletableFuture API、Java 应用程序启动时优化（Application Class-Data Sharing）等等。这些新特性和改进都为 Java 应用程序的开发和运行提供了更好的支持。</p><h3 id="jdk10-新特性" tabindex="-1"><a class="header-anchor" href="#jdk10-新特性"><span>JDK10 新特性</span></a></h3><p>JDK10 是 JDK 的一个短期支持版本，于 2018 年 3 月发布。它的主要特性如下：</p><ol><li>局部变量类型推断：Java 10 中引入了一种新的语法——<code>var</code>关键字，可以用于推断局部变量的类型，使代码更加简洁。例如，可以这样定义一个字符串类型的局部变量：<code>var str = &quot;hello&quot;</code>。</li><li>G1 垃圾回收器并行全阶段：JDK10 中对 G1 垃圾回收器进行了改进，使其可以在并行全阶段进行垃圾回收，从而提高了 GC 效率。</li><li>应用级别的 Java 类数据共享：Java 10 中引入了一项新的特性，即应用级别的 Java 类数据共享（AppCDS），可以在多个 JVM 进程之间共享 Java 类元数据，从而加速 JVM 的启动时间。</li><li>线程局部握手协议：Java 10 中引入了线程局部握手协议（Thread-Local Handshakes），可以在不影响整个 JVM 性能的情况下，暂停所有线程执行特定的操作。</li><li>其他改进：Java 10 还包含一些其他的改进，例如对 Unicode 10.0 的支持，对时间 API 的改进，以及对容器 API 的改进等等。</li></ol><p>总的来说，JDK10 主要关注于提高 Java 应用程序的性能和可维护性，通过引入一些新的特性和改进对 JDK 进行优化。</p><h3 id="jdk11-新特性" tabindex="-1"><a class="header-anchor" href="#jdk11-新特性"><span>JDK11 新特性</span></a></h3><p>JDK11 是 JDK 的一个长期支持版本，于 2018 年 9 月发布。它的主要特性如下：</p><ol><li>HTTP 客户端 API：Java 11 中引入了一个全新的 HTTP 客户端 API，可以用于发送 HTTP 请求和接收 HTTP 响应，而不需要依赖第三方库。</li><li>ZGC 垃圾回收器：Java 11 中引入了 ZGC 垃圾回收器（Z Garbage Collector），它是一种可伸缩且低延迟的垃圾回收器，可以在数百 GB 的堆上运行，且最大停顿时间不超过 10ms。</li><li>移除 Java EE 和 CORBA 模块：Java 11 中移除了 Java EE 和 CORBA 模块，这些模块在 Java 9 中已被标记为“过时”，并在 Java 11 中被完全移除。</li><li>Epsilon 垃圾回收器：Java 11 中引入了一种新的垃圾回收器，称为 Epsilon 垃圾回收器，它是一种无操作的垃圾回收器，可以在不进行垃圾回收的情况下运行应用程序，适用于测试和基准测试等场景。</li><li>其他改进：Java 11 还包含一些其他的改进，例如对 Lambda 参数的本地变量类型推断，对字符串 API 的改进，以及对嵌套的访问控制的改进等等。</li></ol><p>总的来说，JDK11 主要关注于提高 Java 应用程序的性能和安全性，通过引入一些新的特性和改进对 JDK 进行优化。其中，HTTP 客户端 API 和 ZGC 垃圾回收器是最值得关注的特性之一。</p><h3 id="jdk12-新特性" tabindex="-1"><a class="header-anchor" href="#jdk12-新特性"><span>JDK12 新特性</span></a></h3><p>JDK12 是 JDK 的一个短期支持版本，于 2019 年 3 月发布。它的主要特性如下：</p><ol><li>Switch 表达式：Java 12 中引入了一种新的 Switch 表达式，可以使用 Lambda 表达式风格来简化代码。此外，Switch 表达式也支持返回值，从而可以更方便地进行流程控制。</li><li>Microbenchmark Suite：Java 12 中引入了一个 Microbenchmark Suite，可以用于进行微基准测试，从而更好地评估 Java 程序的性能。</li><li>JVM Constants API：Java 12 中引入了 JVM Constants API，可以用于在运行时获取常量池中的常量，从而更好地支持动态语言和元编程。</li><li>Shenandoah 垃圾回收器：Java 12 中引入了 Shenandoah 垃圾回收器，它是一种低暂停时间的垃圾回收器，可以在非常大的堆上运行，且最大暂停时间不超过几毫秒。</li><li>其他改进：Java 12 还包含一些其他的改进，例如对 Unicode 11.0 的支持，对预览功能的改进，以及对集合 API 的改进等等。</li></ol><p>总的来说，JDK12 主要关注于提高 Java 应用程序的性能和可维护性，通过引入一些新的特性和改进对 JDK 进行优化。其中，Switch 表达式和 Shenandoah 垃圾回收器是最值得关注的特性之一。</p><h3 id="jdk13-新特性" tabindex="-1"><a class="header-anchor" href="#jdk13-新特性"><span>JDK13 新特性</span></a></h3><p>JDK13 是 JDK 的一个短期支持版本，于 2019 年 9 月发布。它的主要特性如下：</p><ol><li>Text Blocks：Java 13 中引入了一种新的语法，称为 Text Blocks，可以用于在代码中编写多行字符串，从而简化代码编写的复杂度。</li><li>Switch 表达式增强：Java 13 中对 Switch 表达式进行了增强，支持多个表达式和 Lambda 表达式。</li><li>ZGC 并行处理引用操作：Java 13 中对 ZGC 垃圾回收器进行了改进，支持并行处理引用操作，从而提高了 GC 效率。</li><li>Reimplement the Legacy Socket API：Java 13 中重新实现了 Legacy Socket API，从而提高了网络编程的性能和可维护性。</li><li>其他改进：Java 13 还包含一些其他的改进，例如对预览功能的改进，对嵌套访问控制的改进，以及对集合 API 的改进等等。</li></ol><p>总的来说，JDK13 主要关注于提高 Java 应用程序的性能和可维护性，通过引入一些新的特性和改进对 JDK 进行优化。其中，Text Blocks 和 Switch 表达式增强是最值得关注的特性之一。</p><h3 id="jdk14-新特性" tabindex="-1"><a class="header-anchor" href="#jdk14-新特性"><span>JDK14 新特性</span></a></h3><p>JDK14 是 JDK 的一个短期支持版本，于 2020 年 3 月发布。它的主要特性如下：</p><ol><li>Records：Java 14 中引入了一种新的语法，称为 Records，可以用于定义不可变的数据类，从而简化代码编写的复杂度。</li><li>Switch 表达式增强：Java 14 中对 Switch 表达式进行了增强，支持使用关键字 yield 返回值，从而可以更方便地进行流程控制。</li><li>Text Blocks 增强：Java 14 中对 Text Blocks 进行了增强，支持在 Text Blocks 中嵌入表达式，从而可以更方便地生成动态字符串。</li><li>Pattern Matching for instanceof：Java 14 中引入了一种新的语法，称为 Pattern Matching for instanceof，可以用于在判断对象类型时，同时对对象进行转换和赋值。</li><li>其他改进：Java 14 还包含一些其他的改进，例如对垃圾回收器和 JVM 的改进，对预览功能的改进，以及对 JFR 的改进等等。</li></ol><p>总的来说，JDK14 主要关注于提高 Java 应用程序的可维护性和易用性，通过引入一些新的特性和改进对 JDK 进行优化。其中，Records 和 Pattern Matching for instanceof 是最值得关注的特性之一。</p><h3 id="jdk15-新特性" tabindex="-1"><a class="header-anchor" href="#jdk15-新特性"><span>JDK15 新特性</span></a></h3><p>JDK15 是 JDK 的一个短期支持版本，于 2020 年 9 月发布。它的主要特性如下：</p><ol><li>Sealed Classes：Java 15 中引入了一种新的语法，称为 Sealed Classes，可以用于限制某个类的子类的数量，从而提高代码的可维护性。</li><li>Text Blocks 增强：Java 15 中对 Text Blocks 进行了增强，支持在 Text Blocks 中使用反斜杠和$符号来表示特殊字符，从而可以更方便地生成动态字符串。</li><li>Hidden Classes：Java 15 中引入了一种新的类，称为 Hidden Classes，可以在运行时动态创建和卸载类，从而提高代码的灵活性和安全性。</li><li>ZGC 并发垃圾回收器增强：Java 15 中对 ZGC 垃圾回收器进行了增强，支持在启动时指定内存大小，从而提高了 GC 效率。</li><li>其他改进：Java 15 还包含一些其他的改进，例如对预览功能的改进，对 JVM 和垃圾回收器的改进，以及对集合 API 和 I/O API 的改进等等。</li></ol><p>总的来说，JDK15 主要关注于提高 Java 应用程序的可维护性和性能，通过引入一些新的特性和改进对 JDK 进行优化。其中，Sealed Classes 和 Hidden Classes 是最值得关注的特性之一。</p><h3 id="jdk16-新特性" tabindex="-1"><a class="header-anchor" href="#jdk16-新特性"><span>JDK16 新特性</span></a></h3><p>JDK16 是 JDK 的一个短期支持版本，于 2021 年 3 月发布。它的主要特性如下：</p><ol><li>Records 增强：Java 16 中对 Records 进行了增强，支持在 Records 中定义静态方法和构造方法，从而可以更方便地进行对象的创建和操作。</li><li>Pattern Matching for instanceof 增强：Java 16 中对 Pattern Matching for instanceof 进行了增强，支持在判断对象类型时，同时对对象进行转换和赋值，并支持对 switch 语句进行模式匹配。</li><li>Vector API：Java 16 中引入了一种新的 API，称为 Vector API，可以用于进行 SIMD（Single Instruction Multiple Data）向量计算，从而提高计算效率。</li><li>JEP 388：Java 16 中引入了一个新的 JEP（JDK Enhancement Proposal），称为 JEP 388，可以用于提高 Java 应用程序的性能和可维护性。</li><li>其他改进：Java 16 还包含一些其他的改进，例如对垃圾回收器、JVM 和 JFR 的改进，对预览功能的改进，以及对集合 API 和 I/O API 的改进等等。</li></ol><p>总的来说，JDK16 主要关注于提高 Java 应用程序的性能和可维护性，通过引入一些新的特性和改进对 JDK 进行优化。其中，Records 增强和 Pattern Matching for instanceof 增强是最值得关注的特性之一。</p><h3 id="jdk17-新特性" tabindex="-1"><a class="header-anchor" href="#jdk17-新特性"><span>JDK17 新特性</span></a></h3><p>JDK17 是 JDK 的一个长期支持版本，于 2021 年 9 月发布。它的主要特性如下：</p><ol><li>Sealed Classes 增强：Java 17 中对 Sealed Classes 进行了增强，支持在 Sealed Classes 中定义接口和枚举类型，从而提高代码的灵活性。</li><li>Pattern Matching for switch 增强：Java 17 中对 Pattern Matching for switch 进行了增强，支持在 switch 语句中使用嵌套模式和 or 运算符，从而提高代码的可读性和灵活性。</li><li>Foreign Function and Memory API：Java 17 中引入了一种新的 API，称为 Foreign Function and Memory API，可以用于在 Java 中调用 C 和 C++的函数和库，从而提高代码的可扩展性和互操作性。</li><li>JEP 391：Java 17 中引入了一个新的 JEP（JDK Enhancement Proposal），称为 JEP 391，可以用于提高 Java 应用程序的性能和可维护性。</li><li>其他改进：Java 17 还包含一些其他的改进，例如对垃圾回收器、JVM 和 JFR 的改进，对预览功能的改进，以及对集合 API 和 I/O API 的改进等等。</li></ol><p>总的来说，JDK17 主要关注于提高 Java 应用程序的灵活性、可扩展性和性能，通过引入一些新的特性和改进对 JDK 进行优化。其中，Sealed Classes 增强和 Foreign Function and Memory API 是最值得关注的特性之一。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><ul><li>JDK9：引入了模块化系统、JShell、私有接口方法、多版本兼容性等新特性</li><li>JDK10：引入了局部变量类型推断、垃圾回收器接口、并行全垃圾回收器等新特性</li><li>JDK11：引入了 ZGC 垃圾回收器、HTTP 客户端 API、VarHandles API 等新特性</li><li>JDK12：引入了 Switch 表达式、新的字符串方法、HTTP/2 客户端 API 等新特性</li><li>JDK13：引入了 Text Blocks、Switch 表达式增强、改进的 ZGC 性能等新特性</li><li>JDK14：引入了 Records、Switch 表达式增强、Pattern Matching for instanceof 等新特性</li><li>JDK15：引入了 Sealed Classes、Text Blocks 增强、Hidden Classes 等新特性</li><li>JDK16：引入了 Records 增强、Pattern Matching for instanceof 增强、Vector API 等新特性</li><li>JDK17：引入了 Sealed Classes 增强、Pattern Matching for switch 增强、Foreign Function and Memory API 等新特性</li></ul><p>总的来说，JDK9 到 JDK17 的更新涵盖了 Java 应用程序开发的各个方面，包括模块化、垃圾回收、性能优化、API 增强等等，为 Java 开发者提供了更多的选择和工具，以提高代码的质量和效率</p><h2 id="小记" tabindex="-1"><a class="header-anchor" href="#小记"><span>小记</span></a></h2><p>Java 作为一门长盛不衰的编程语言，未来的发展仍然有许多潜力和机会。</p><ul><li>云计算和大数据：随着云计算和大数据的发展，Java 在这些领域的应用也越来越广泛。Java 已经成为了许多云计算平台和大数据处理框架的首选语言之一。</li><li>移动端和 IoT：Java 也逐渐开始在移动端和物联网领域崭露头角。Java 的跨平台特性和安全性，使得它成为了许多移动应用和物联网设备的首选开发语言。</li><li>前沿技术的应用：Java 社区一直在积极探索和应用前沿技术，例如人工智能、机器学习、区块链等。Java 在这些领域的应用和发展也将会是未来的趋势。</li><li>开源社区的发展：Java 开源社区的发展也将会对 Java 的未来产生重要影响。Java 社区的开源项目和社区贡献者数量不断增加，将会为 Java 的发展提供更多的动力和资源。</li><li>新的 Java 版本：Oracle 已经宣布将在未来两年内发布两个新的 Java 版本，其中一个是短期支持版本，另一个是长期支持版本。这将会为 Java 开发者提供更多的新特性和改进，以满足不断变化的需求。</li></ul><p>总的来说，Java 作为一门优秀的编程语言，具有广泛的应用和发展前景。随着技术的不断创新和社区的不断发展，Java 的未来将会更加光明。</p>',62)]))}const s=t(d,[["render",n],["__file","jdk17-230601.html.vue"]]),p=JSON.parse('{"path":"/zh/blog/jdk17-230601.html","title":"都JDK17了，你还在用8吗","lang":"zh-CN","frontmatter":{"title":"都JDK17了，你还在用8吗","author":"QIANGLU","date":"2023-06-01T00:00:00.000Z","cover":"/assets/img/blog/jdk17-230601.png","head":[["meta",{"name":"博客"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/blog/jdk17-230601.html"}],["meta",{"property":"og:title","content":"都JDK17了，你还在用8吗"}],["meta",{"property":"og:description","content":"Spring Boot 3.1.0-M1 已经发布一段时间了，不知道各位小伙伴是否关注了。随着 Spring 6.0 以及 SpringBoot 3.0 的发布，整个开发界也逐步进入到 jdk17 的时代。大有当年从 jdk6 到 jdk8 升级过程，痛苦并快乐着。 为了不被时代抛弃，开发者应追逐新的技术发展，拥抱变化，不要固步自封。 0x01 纵观发..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/blog/jdk17-230601.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-23T05:33:00.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/blog/jdk17-230601.png"}],["meta",{"name":"twitter:image:alt","content":"都JDK17了，你还在用8吗"}],["meta",{"property":"article:author","content":"QIANGLU"}],["meta",{"property":"article:published_time","content":"2023-06-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-23T05:33:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"都JDK17了，你还在用8吗\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/blog/jdk17-230601.png\\"],\\"datePublished\\":\\"2023-06-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-23T05:33:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"QIANGLU\\"}]}"]],"description":"Spring Boot 3.1.0-M1 已经发布一段时间了，不知道各位小伙伴是否关注了。随着 Spring 6.0 以及 SpringBoot 3.0 的发布，整个开发界也逐步进入到 jdk17 的时代。大有当年从 jdk6 到 jdk8 升级过程，痛苦并快乐着。 为了不被时代抛弃，开发者应追逐新的技术发展，拥抱变化，不要固步自封。 0x01 纵观发..."},"headers":[{"level":2,"title":"0x01 纵观发展","slug":"_0x01-纵观发展","link":"#_0x01-纵观发展","children":[]},{"level":2,"title":"0x02 详细解读","slug":"_0x02-详细解读","link":"#_0x02-详细解读","children":[{"level":3,"title":"JDK9 新特性","slug":"jdk9-新特性","link":"#jdk9-新特性","children":[]},{"level":3,"title":"JDK10 新特性","slug":"jdk10-新特性","link":"#jdk10-新特性","children":[]},{"level":3,"title":"JDK11 新特性","slug":"jdk11-新特性","link":"#jdk11-新特性","children":[]},{"level":3,"title":"JDK12 新特性","slug":"jdk12-新特性","link":"#jdk12-新特性","children":[]},{"level":3,"title":"JDK13 新特性","slug":"jdk13-新特性","link":"#jdk13-新特性","children":[]},{"level":3,"title":"JDK14 新特性","slug":"jdk14-新特性","link":"#jdk14-新特性","children":[]},{"level":3,"title":"JDK15 新特性","slug":"jdk15-新特性","link":"#jdk15-新特性","children":[]},{"level":3,"title":"JDK16 新特性","slug":"jdk16-新特性","link":"#jdk16-新特性","children":[]},{"level":3,"title":"JDK17 新特性","slug":"jdk17-新特性","link":"#jdk17-新特性","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"小记","slug":"小记","link":"#小记","children":[]}],"git":{"createdTime":1698039180000,"updatedTime":1698039180000,"contributors":[{"name":"Cici","username":"Cici","email":"1901177100@qq.com","commits":1,"url":"https://github.com/Cici"}]},"readingTime":{"minutes":15.84,"words":4752},"filePathRelative":"zh/blog/jdk17-230601.md","localizedDate":"2023年6月1日","autoDesc":true,"excerpt":"<p><strong>Spring Boot 3.1.0-M1</strong> 已经发布一段时间了，不知道各位小伙伴是否关注了。随着 Spring 6.0 以及 SpringBoot 3.0 的发布，整个开发界也逐步进入到 jdk17 的时代。大有当年从 jdk6 到 jdk8 升级过程，痛苦并快乐着。</p>\\n<p>为了不被时代抛弃，开发者应追逐新的技术发展，拥抱变化，不要固步自封。</p>\\n<h2>0x01 纵观发展</h2>\\n<ul>\\n<li>Pre-alpha（Dev）指在软件项目进行正式测试之前执行的所有活动</li>\\n<li>LTS（Long-Term Support）版本指的是长期支持版本</li>\\n<li>Alpha &nbsp; 软件发布生命周期的 alpha 阶段是软件测试的第一阶段</li>\\n<li>Beta 阶段是紧随 alpha 阶段之后的软件开发阶段，以希腊字母第二个字母命名</li>\\n<li>Release candidate &nbsp; 发行候选版（RC），也被称为“银色版本”，是具备成为稳定产品的潜力的 beta 版本，除非出现重大错误，否则准备好发布</li>\\n<li>Stable release &nbsp; 稳定版又称为生产版本，是通过所有验证和测试阶段的最后一个发行候选版（RC）</li>\\n<li>Release &nbsp; 一旦发布，软件通常被称为“稳定版”</li>\\n</ul>"}');export{s as comp,p as data};

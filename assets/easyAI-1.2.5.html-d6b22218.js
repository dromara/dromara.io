import{_ as e,a as i,b as a,c as r,d as l,e as o,f as p}from"./easyAI-1.2.5-7-1abba928.js";import{_ as d,o as t,c as s,f as c}from"./app-b61402ca.js";const h="/assets/img/news/easyAI-1.2.5-0.webp",n={},u=c('<figure><img src="'+h+'" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>EasyAi的出现对于Java的意义，等同于在JavaWeb领域spring出现的意义一样——做一个开箱即用，让每一个开发者都可以使用EasyAi，来开发符合自己人工智能业务需求的小微模型，这就是它的使命！</p><h2 id="easyai介绍" tabindex="-1"><a class="header-anchor" href="#easyai介绍" aria-hidden="true">#</a> EasyAi介绍</h2><p>EasyAi无任何依赖，它是一个原生Java人工智能算法框架。首先，**它可以Maven一键丝滑引入我们的Java项目，无需任何额外的环境配置与依赖，做到开箱即用。**再者，它既有一些我们已经封装好的图像目标检测及人工智能客服的模块，也提供各种深度学习，机器学习，强化学习，启发式学习，矩阵运算，等底层算法工具。开发者可以通过简单的学习，就能完成根据自身业务，深度开发符合自己业务的小微模型</p><ul><li><p>EasyAI码云下载链接:https://gitee.com/dromara/easyAi</p></li><li><p>EasyAI技术文档地址：https://www.myeasyai.cn/</p></li><li><p>EasyAI详细视频教程：https://www.bilibili.com/video/av89134035</p></li><li><p>EasyAI框架0基础深度开发及人工智能完整体系教程：https://www.bilibili.com/cheese/play/ss17600</p></li></ul><h1 id="v1-2-5-更新内容" tabindex="-1"><a class="header-anchor" href="#v1-2-5-更新内容" aria-hidden="true">#</a> v1.2.5 更新内容</h1><ul><li><p>图像稳定性与鲁棒性进行优化，性能提升</p></li><li><p><code>YoloConfig</code>是目标检测的配置类，1.2.5版本增加了几种可调参数来增强其稳定性与鲁棒性。</p></li></ul><blockquote><p><code>private double stepReduce</code>是训练时窗口移动步长，它基于窗口大小的收缩系数，取值范围是(0,1]。实际训练窗口每次遍历，移动步长为<code>stepReduce * windowWidth</code>与<code>stepReduce * windowHeight</code>，即该数值越小，训练步长越小，步长越小就越适合训练样本内训练物越多越密集的情况。步长越大越适合样本照片内训练物越少越稀疏的情况。</p><p><code>private double checkStepReduce</code>是检测时窗口移动步长，它基于窗口大小的收缩系数，取值范围是(0,1]。它基于窗口大小的收缩系数，取值范围是(0,1]。实际检测窗口每次遍历，移动步长为<code>checkStepReduce * windowWidth</code>与<code>checkStepReduce * windowHeight</code>，即该数值越小，检测步长越小，步长越小就越适合单张照片检测物越多越密集的情况。步长越大越适合单张照片内检测物越少越稀疏的情况。</p><p><code>private int regularModel</code>正则模式，选取不同的正则模式带来不同效果的强化，它是基于对神经元权重施加惩罚，提升权重稀疏性来实现效果的提升。</p><blockquote><p>当该值设置为<code>RZ.NOT_RZ</code>时即无正则模式，无正则模式即不对权重施加惩罚，当面对一些指定外形，图像大小都比较固定的工业品时，或者样本数据量较为大充足时，可直接使用无正则模式。</p></blockquote><blockquote><p>当该值设置为<code>RZ.L1</code>时，为L1正则模式，当出现异常值，或者未见过的异常噪音时，L1的鲁棒性非常强。它是以简化模型，突出重点权重的方式来增强其稳定性与鲁棒性的。当面对形态多变，且种类数较少检测物，比如说人脸，人类，动植物等情况有更有益的表达。</p></blockquote><blockquote><p>当该值设置为<code>RZ.L2</code>时，为L2正则模式，它更容易调动全部参数特征，让特征平均的落在每个权重上，误差最容易最快下降到最优解的位置上。面对形态多变且种类复杂，或者维度比较大的情况下，能获得最好的优化效果。</p></blockquote><p><code>private double regular</code>正则系数，取值范围是[0,1),当取值为0时即为无正则影响，调整到合适的正则系数有助于抵抗过拟合，增强网络的鲁棒性与稳定性，该值越大则对神经元权重惩罚越强，推荐默认值是0.01</p></blockquote><ul><li>人脸检测效果演示</li></ul><figure><img src="'+e+'" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="图像识别fastyolo效果展示" tabindex="-1"><a class="header-anchor" href="#图像识别fastyolo效果展示" aria-hidden="true">#</a> 图像识别FastYolo效果展示</h3><ul><li>使用EasyAi实现图像结算自动贩卖机视觉内核</li></ul><figure><img src="'+i+'" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="sayorder人工智能客服" tabindex="-1"><a class="header-anchor" href="#sayorder人工智能客服" aria-hidden="true">#</a> sayOrder人工智能客服</h3><ul><li><p>sayOrder是依赖EasyAi进行封装的人工智能客服系统。</p></li><li><p>它可以分析用户输入的语义，来识别用户的行为，并通过typeID来区分用户意图ID。并通过捕捉其后台设置的关键词类别，来抓出系统关心的用户在语句中包含的内容，比如语句中的时间，地点等。</p></li><li><p>它还可以与用户自主进行问答交互，进行自主解答疑问或者进行其余意图的交流等。</p></li><li><p>项目链接地址: https://gitee.com/dromara/sayOrder</p></li></ul><h3 id="sayorder交互基本业务流程演示" tabindex="-1"><a class="header-anchor" href="#sayorder交互基本业务流程演示" aria-hidden="true">#</a> sayOrder交互基本业务流程演示</h3><ul><li><p>用户第一次进行输入表达自己的想法<img src="'+a+'" alt=""></p></li><li><p>SayOrder发现用户的描述缺少订单必要信息，则进行反问。用户接收到SayOrder的反问，进一步补充的自己的想法<img src="'+r+'" alt=""></p></li><li><p>用户第二次输入信息依然不满足后台14分类法律咨询的订单关键信息要求，继续补充信息，最终完成订单信息补充生成订单。<img src="'+l+'" alt=""></p></li><li><p>用户输入想要咨询的问题，SayOrder对用户咨询的问题进行自主解答<img src="'+o+'" alt=""></p></li></ul><h3 id="架构设计" tabindex="-1"><a class="header-anchor" href="#架构设计" aria-hidden="true">#</a> 架构设计</h3><p><strong>常用底层算法模块</strong></p><ul><li><p>基础矩阵及线代计算模块：</p><p>1.内置矩阵类，矩阵计算类，可以完成常用矩阵四则运算，奇偶性，多元线性回归，逻辑斯蒂回归，欧式距离，余弦相似性，im2col，逆im2col，求代数余子式，求逆，求伴随矩阵，内积等，微分等一系列api。</p><p>2.RGB三通道矩阵，可进行图像转化，剪切，分块，生成图像矩阵等操作方便后续计算。</p></li><li><p>机器学习-聚类：</p><p>k聚类，混合高斯聚类，密度聚类，学习向量量化聚类等</p></li><li><p>机器学习-分类及拟合：多层前馈神经网络，多层循环神经网络，残差网络，多层残差循环神经网络，卷积神经网络，决策树，随机森林，k最近邻等</p></li><li><p>启发式算法：粒子群，蚁群，模拟退火</p></li><li><p>强化学习 动态规划，蒙特卡洛分析，马尔可夫，时序差分</p></li></ul><p><strong>常用上层算法模块</strong></p><ul><li><p>视觉图像：图像识别，图片摘要，目标检测</p></li><li><p>自然语言：语义理解，拆词分词，推理敏感及关键词，语句补全，语言交流</p></li><li><p>游戏机器人：自主策略，自主行动</p></li></ul><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><p>1.将项目下载后打包进本地maven库</p><p>2.将easyAi pom文件引入地址引入项目</p><h3 id="关注项目" tabindex="-1"><a class="header-anchor" href="#关注项目" aria-hidden="true">#</a> 关注项目</h3><ul><li>对项目有什么想法或者建议与学习，都可以加我工作微信<img src="'+p+'" alt=""></li></ul>',28),m=[u];function _(f,y){return t(),s("div",null,m)}const w=d(n,[["render",_],["__file","easyAI-1.2.5.html.vue"]]);export{w as default};
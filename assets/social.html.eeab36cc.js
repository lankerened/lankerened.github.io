import{r as a,o as c,c as l,a as n,b as p,w as r,F as i,e,d as s}from"./app.b97705f9.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const b={},m=e(`<h1 id="\u793E\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u793E\u4EA4" aria-hidden="true">#</a> \u793E\u4EA4</h1><p><img src="https://ooszy.cco.vin/img/blog-note/image-20211011151211549.png?x-oss-process=style/pictureProcess1" alt="image-20211011151211549"></p><img src="https://ooszy.cco.vin/img/blog-note/image-20211011151225054.png?x-oss-process=style/pictureProcess1" alt="image-20211011151225054" style="zoom:50%;"><blockquote><p>\u7EC4\u4EF6\u4F4D\u7F6E</p><p>docs/.vuepress/theme/lib/client/components/child/side/HomeSidebarSocialItem.vue</p></blockquote><p>\u5176\u4E2D\uFF0C\u624B\u673A\u7AEF\u81F3\u591A\u663E\u793A7\u4E2A(<code>\u9996\u9875</code>)\uFF0C\u4FA7\u8FB9\u680F\u7B49\u4E0D\u53D7\u5F71\u54CD\uFF0CPC\u7AEF\u9996\u9875\u81F3\u591A\u53EA\u80FD\u663E\u793A19\u4E2A\uFF0C\u5982\u679C\u8D85\u8FC7\uFF0C\u5219\u4E0D\u4F1A\u663E\u793A\uFF0C\u4FA7\u8FB9\u680F\u4E0D\u53D7\u5F71\u54CD</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
        socials<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token comment">//\u793E\u4EA4\u94FE\u63A5</span>
                aHref<span class="token operator">:</span> <span class="token string">&quot;tencent://message/?uin=2291308094&quot;</span><span class="token punctuation">,</span>
                <span class="token comment">// imgSrc: &quot;https://ooszy.cco.vin/img/ico/qq.svg&quot;, \u4ECEv1.3.2\u5F00\u59CB\u4E45\u79FB\u9664\u6B21\u914D\u7F6E\uFF0C\u4EE5\u524D\u7248\u672C\u7528\u4E8E\u793E\u4EA4ico\u56FE\u6807\u914D\u7F6E</span>

                <span class="token comment">//true\u4E3A\u5728\u9996\u9875\u663E\u793A\uFF0C\u53CD\u4E4B</span>
                isHome<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

                <span class="token comment">//\u662F\u5426\u663E\u793A\u6B64\u793E\u4EA4\u4FE1\u606F,\u5982\u679C\u4E3Afalse\uFF0C\u5C3D\u7BA1isHome=true\uFF0Csidebar=true\uFF0C\u4E5F\u4E0D\u4F1A\u663E\u793A</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

                <span class="token comment">//\u662F\u5426\u5728\u4FA7\u8FB9\u680F\u663E\u793A</span>
                sidebar<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

                <span class="token comment">//\u4F7F\u7528\u963F\u91CC\u56FE\u6807 \u4F7F\u7528\u7684\u662F\u963F\u91CC\u56FE\u6807\u5E93\uFF0C\u6211\u4E5F\u6311\u9009\u90E8\u5206\u56FE\u6807\uFF0C\u8BF7\u8FDB\u5165http://ico.cco.vin/theme\u67E5\u770B</span>
                symbol<span class="token operator">:</span> <span class="token string">&#39;#icon-qq&#39;</span><span class="token punctuation">,</span>

                <span class="token comment">//\u9F20\u6807\u79FB\u5165\u6B64\u56FE\u6807\u65F6\uFF0C\u663E\u793A\u7684\u56FE\u7247\uFF0C\u9002\u7528\u4E8E\u5FAE\u4FE1\u7B49\u901A\u8FC7\u4E8C\u7EF4\u7801\u6DFB\u52A0\u597D\u53CB</span>
                <span class="token comment">// showImgSrc: &quot;https://ooszy.cco.vin/img/blog-public/wechat.jpg&quot;,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                aHref<span class="token operator">:</span> <span class="token string">&quot;javascript:;&quot;</span><span class="token punctuation">,</span>
                <span class="token comment">//imgSrc: /assets/img/ico/wechat.svg,</span>
                showImgSrc<span class="token operator">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/wechat.jpg&quot;</span><span class="token punctuation">,</span>
                isHome<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                symbol<span class="token operator">:</span> <span class="token string">&#39;#icon-weixin&#39;</span><span class="token punctuation">,</span>
                sidebar<span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                aHref<span class="token operator">:</span> <span class="token string">&quot;https://github.com/qsyyke/&quot;</span><span class="token punctuation">,</span>
                isHome<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                sidebar<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                symbol<span class="token operator">:</span> <span class="token string">&#39;#icon-github-fill&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                aHref<span class="token operator">:</span> <span class="token string">&quot;https://stackoverflow.com/&quot;</span><span class="token punctuation">,</span>
                isHome<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                symbol<span class="token operator">:</span> <span class="token string">&#39;#icon-stackoverflow&#39;</span><span class="token punctuation">,</span>
                sidebar<span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                aHref<span class="token operator">:</span> <span class="token string">&quot;https://space.bilibili.com/483962286&quot;</span><span class="token punctuation">,</span>
                isHome<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                sidebar<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                symbol<span class="token operator">:</span> <span class="token string">&#39;#icon-bilibili-1&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                aHref<span class="token operator">:</span> <span class="token string">&quot;https://music.163.com/#/user/home?id=1411050784&quot;</span><span class="token punctuation">,</span>
                isHome<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                symbol<span class="token operator">:</span> <span class="token string">&#39;#icon-wangyiyunyinle&#39;</span><span class="token punctuation">,</span>
                sidebar<span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                aHref<span class="token operator">:</span> <span class="token string">&quot;mailto:2291308094@qq.com&quot;</span><span class="token punctuation">,</span>
                isHome<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                sidebar<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                symbol<span class="token operator">:</span> <span class="token string">&#39;#icon-email&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u914D\u7F6E\u9879\u89E3\u91CA\uFF0C\u8BF7\u67E5\u770B</p></div><h2 id="\u4FEE\u6539\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u56FE\u6807" aria-hidden="true">#</a> \u4FEE\u6539\u56FE\u6807</h2><p>\u793E\u4EA4\u56FE\u6807\u5168\u90E8\u4F7F\u7528\u7684\u662F\u963F\u91CC\u56FE\u6807\u5E93\uFF0C\u6211\u9009\u4E86\u4E00\u4E9B\u6700\u5E38\u7528\u7684\u56FE\u6807\uFF0C\u4F60\u53EF\u4EE5\u81EA\u5DF1\u6311\u9009</p>`,10),k=s("\u5730\u5740\u4E3A"),g={href:"http://aurora-font.cco.vin/",target:"_blank",rel:"noopener noreferrer"},h=s("iconfont Demo (cco.vin)"),d=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
        socials<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                aHref<span class="token operator">:</span> <span class="token string">&quot;javascript:;&quot;</span><span class="token punctuation">,</span>
                showImgSrc<span class="token operator">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/wechat.jpg&quot;</span><span class="token punctuation">,</span>
                isHome<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                symbol<span class="token operator">:</span> <span class="token string">&#39;#icon-weixin&#39;</span><span class="token punctuation">,</span>
                sidebar<span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><img src="https://ooszy.cco.vin/img/blog-note/image-20211011155752690.png?x-oss-process=style/pictureProcess1" alt="image-20211011155752690" style="zoom:50%;"><p><img src="https://ooszy.cco.vin/img/blog-note/image-20211011155915438.png?x-oss-process=style/pictureProcess1" alt="image-20211011155915438"></p><h2 id="\u8BC4\u8BBA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8BC4\u8BBA\u914D\u7F6E" aria-hidden="true">#</a> \u8BC4\u8BBA\u914D\u7F6E</h2>`,4),v=s("\u8BC4\u8BBA\u914D\u7F6E");function q(f,_){const o=a("ExternalLinkIcon"),t=a("RouterLink");return c(),l(i,null,[m,n("p",null,[k,n("a",g,[h,p(o)])]),d,n("p",null,[p(t,{to:"/comment/"},{default:r(()=>[v]),_:1})])],64)}var x=u(b,[["render",q]]);export{x as default};

import{r as n,o as a,c as e,a as p,b as t,w as o,F as c,e as l,d as i}from"./app.b97705f9.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=l(`<h1 id="\u66F4\u6539\u56FE\u6807\u4EE5\u53CA\u8986\u76D6\u4E3B\u9898\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539\u56FE\u6807\u4EE5\u53CA\u8986\u76D6\u4E3B\u9898\u6837\u5F0F" aria-hidden="true">#</a> \u66F4\u6539\u56FE\u6807\u4EE5\u53CA\u8986\u76D6\u4E3B\u9898\u6837\u5F0F</h1><p>\u5728v.1.3.7\u4E4B\u540E\uFF0C\u4F60\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5982\u679C\u4F60\u60F3\u8981\u4FEE\u6539\u7684\u56FE\u6807\uFF0C\u5728http://aurora-font.cco.vin/\u4E2D\u53EF\u4EE5\u627E\u5230\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\uFF0C\u5982\u679C\u6CA1\u6709\u5728http://aurora-font.cco.vin/\u4E2D\uFF0C\u90A3\u4E48\u4F60\u5C31\u9700\u8981\u60F3\u4F60\u5E73\u5E38\u4F7F\u7528\u56FE\u6807\u90A3\u6837\uFF0C\u5F15\u5165\u5B57\u4F53\uFF0C\u6837\u5F0F\uFF0C\u7136\u540E\u518D\u4F7F\u7528</p></div><h2 id="\u4F7F\u7528\u9884\u8BBE\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u9884\u8BBE\u56FE\u6807" aria-hidden="true">#</a> \u4F7F\u7528\u9884\u8BBE\u56FE\u6807</h2><p>\u5047\u8BBE\u4F60\u60F3\u8981\u4FEE\u6539\u7F6E\u9876\u7684\u56FE\u6807</p><p><img src="https://ooszy.cco.vin/img/blog-note/image-20211021003525455.png?x-oss-process=style/pictureProcess1" alt="image-20211021003525455"></p><ul><li><p>\u4F60\u9700\u8981<code>F12</code>\u67E5\u770B\u6B64\u56FE\u6807\u5F97\u7C7B\u540D\uFF0C\u4E3B\u9898\u6240\u6709\u9884\u8BBE\u7684\u56FE\u6807\u7C7B\u540D\u90FD\u662F\u5F00\u5934<code>aurora-</code>\uFF0C\u4E0A\u56FE\u7F6E\u9876\u7684\u56FE\u6807\u7C7B\u540D\u4E3A<code>aurora-stick</code></p></li><li><p>\u5728http://aurora-font.cco.vin/aurora.html\u7AD9\u70B9\u4E2D\uFF0C\u627E\u5230\u4F60\u559C\u6B22\u7684\u56FE\u6807\uFF0C\u5E76\u8BB0\u5F55\u4E0B\u4E0B\u9762\u503C</p><img src="https://ooszy.cco.vin/img/blog-note/image-20211021003913582.png?x-oss-process=style/pictureProcess1" alt="image-20211021003913582" style="zoom:33%;"></li><li><p>\u8FDB\u5165\u5230<code>docs/.vuepress/styles/index.css</code>\u6587\u4EF6\u4E2D\uFF0C\u4F7F\u7528\u4E0B\u9762\u7684\u65B9\u5F0F\u4FEE\u6539\u6B64\u56FE\u6807</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.aurora-stick:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;\\e60a&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://ooszy.cco.vin/img/blog-note/image-20211021004102208.png?x-oss-process=style/pictureProcess1" alt="image-20211021004102208"></p></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u56E0\u4E3A\u5728<code>docs/.vuepress/styles/index.css</code>\u6587\u4EF6\u4E2D\u7684css\u6837\u5F0F\uFF0C\u4F1A\u6DFB\u52A0\u5230<code>head</code>\u5143\u7D20\u7684\u5E95\u90E8\uFF0C\u6240\u4EE5\u6B64\u6587\u4EF6\u4E2D\u7684Css\u6837\u5F0F\u4F1A\u8986\u76D6\u9ED8\u8BA4\u4E3B\u9898\u63D0\u4F9B\u7684\u6837\u5F0F\uFF0C\u6240\u4EE5\u4F60\u53EF\u4EE5\u5728\u6B64\u6587\u4EF6\u4E2D\uFF0C\u76F4\u63A5\u6839\u636E\u4F60\u7684\u9700\u8981\uFF0C\u628A\u4E3B\u9898\u6837\u5F0F\u66F4\u6539\u4E3A\u4F60\u9700\u8981\u7684\u6837\u5F0F\uFF0C\u4F8B\u5982\u4FEE\u6539\u5B57\u4F53\u7B49\u7B49</p></div><h2 id="\u4F7F\u7528\u81EA\u5DF1\u7684\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u81EA\u5DF1\u7684\u56FE\u6807" aria-hidden="true">#</a> \u4F7F\u7528\u81EA\u5DF1\u7684\u56FE\u6807</h2><p>\u8FD9\u91CC\u4F7F\u7528\u963F\u91CC\u5DF4\u5DF4\u56FE\u6807\u5E93\u8FDB\u884C\u6F14\u793A\uFF0C\u53EA\u8981\u662F\u5B57\u4F53\u56FE\u6807\uFF0C\u90FD\u662F\u4E00\u6837\u7684</p><ul><li><p>\u6311\u9009\u81EA\u5DF1\u559C\u6B22\u7684\u56FE\u6807\uFF0C\u7136\u540E\u9009\u62E9\u6DFB\u52A0\u5230\u5E93</p><p><img src="https://ooszy.cco.vin/img/blog-note/image-20211021075125699.png?x-oss-process=style/pictureProcess1" alt="image-20211021075125699"></p></li><li><p>\u70B9\u51FB\u4E0B\u8F7D\u4EE3\u7801</p><img src="https://ooszy.cco.vin/img/blog-note/image-20211021075328055.png?x-oss-process=style/pictureProcess1" alt="image-20211021075328055" style="zoom:50%;"></li><li><p>\u89E3\u538B\u4E4B\u540E\uFF0C\u4F60\u4F1A\u770B\u5230\u4E0B\u9762\u8FD9\u4E9B\u6587\u4EF6</p><p><img src="https://ooszy.cco.vin/img/blog-note/image-20211021075421251.png?x-oss-process=style/pictureProcess1" alt="image-20211021075421251"></p></li><li><p>\u5C06<code>iconfont.css</code>\u5185\u7684\u6837\u5F0F\u590D\u5236\u5230<code>docs/.vuepress/styles/palette.css</code>\u6587\u4EF6\u4E2D(<code>\u4E5F\u53EF\u4EE5\u590D\u5236\u5230docs/.vuepress/styles/index.css</code>)\u4E2D\uFF0C<code>palette.css</code>\u4E2D\uFF0C\u4E3B\u8981\u662F\u5B9A\u4E49\u4E00\u4E9B\u53D8\u91CF\uFF0C\u4F60\u53EF\u4EE5\u5728<code>index.css</code>\u4E2D\uFF0C\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E9B\u53D8\u91CF\uFF0C\u7136\u540E\u4FEE\u6539\u5B57\u4F53\u7684\u8DEF\u5F84</p></li><li><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token property">--test-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">;</span> <span class="token comment">/* Project id  */</span>
    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;iconfont.ttf?t=1634773948652&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;truetype&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.iconfont</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;iconfont&quot;</span> <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
    <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
    <span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.icon-zhiding:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;\\e516&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.icon-zhiding1:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;\\e607&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></li><li><p>\u5728<code>index.css</code>\u6837\u5F0F\u5185\uFF0C\u4FBF\u53EF\u4EE5\u50CF\u4F7F\u7528\u9884\u8BBE\u56FE\u6807\u90A3\u6837\u4F7F\u7528\u4E86</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.aurora-stick:before</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;iconfont&quot;</span> <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
    <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
    <span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;\\e607&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\uFF0C\u5982\u679C\u4F60\u4F7F\u7528\u81EA\u5DF1\u7684\u56FE\u6807\uFF0C\u90A3\u4E48\u5728<code>aurora-xxx:before{}</code>\u6837\u5F0F\u5185\uFF0C\u4F60\u9700\u8981\u6307\u5B9A\u5B57\u4F53\u7684\u540D\u79F0\uFF0C\u8FD8\u6709<code>content</code>\u503C\uFF0C\u539F\u7406\u5C31\u662F<code>index.css</code>\u5185\u7684\u6837\u5F0F\uFF0C\u4F1A\u76F4\u63A5\u8986\u76D6\u4E3B\u9898\u9ED8\u8BA4\u7684\u6837\u5F0F</p></div></li><li><img src="https://ooszy.cco.vin/img/blog-note/image-20211021080627557.png?x-oss-process=style/pictureProcess1" alt="image-20211021080627557" style="zoom:50%;"></li></ul><h2 id="\u8986\u76D6\u4E3B\u9898\u9ED8\u8BA4\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8986\u76D6\u4E3B\u9898\u9ED8\u8BA4\u6837\u5F0F" aria-hidden="true">#</a> \u8986\u76D6\u4E3B\u9898\u9ED8\u8BA4\u6837\u5F0F</h2><p>\u5982\u679C\u4F60\u9700\u8981\u5BF9\u4E00\u4E9B\u6837\u5F0F\u8FDB\u884C\u66F4\u6539\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u5728<code>index.css</code>\u4E2D\uFF0C\u76F4\u63A5\u4FEE\u6539\u6837\u5F0F\uFF0C\u5982\u679C\u4F60\u9700\u8981\u4F7F\u7528\u4E00\u4E9B\u53D8\u91CF\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u5728<code>docs/.vuepress/styles/palette.css</code>\u6587\u4EF6\u5185\u8FDB\u884C\u5B9A\u4E49\uFF0C\u7136\u540E\u5728<code>index.css</code>\u5185\uFF0C\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E9B\u53D8\u91CF\u5C31\u53EF\u4EE5\u4E86</p><h2 id="\u4E3B\u9898\u7279\u5F81\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898\u7279\u5F81\u914D\u7F6E" aria-hidden="true">#</a> \u4E3B\u9898\u7279\u5F81\u914D\u7F6E</h2>`,14),m=i("\u4E3B\u9898\u7279\u5F81\u914D\u7F6E");function k(b,g){const s=n("RouterLink");return a(),e(c,null,[d,p("p",null,[t(s,{to:"/style/feature/feature-config.html"},{default:o(()=>[m]),_:1})])],64)}var y=r(u,[["render",k]]);export{y as default};

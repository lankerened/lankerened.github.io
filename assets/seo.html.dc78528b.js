import{r as s,o as e,c as a,a as p,b as o,w as t,F as c,e as r,d as i}from"./app.b97705f9.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const d={},u=r(`<h1 id="seo" tabindex="-1"><a class="header-anchor" href="#seo" aria-hidden="true">#</a> SEO</h1><p>\u4E3B\u9898\u5DF2\u5BF9\u641C\u7D22\u5F15\u64CE\u8FDB\u884C\u521D\u6B65\u4F18\u5316\uFF0C\u4E3B\u8981\u5C31\u662F\u81EA\u52A8\u8BBE\u7F6E\u5173\u952E\u8BCD\u548C\u63CF\u8FF0\uFF0C\u5982\u679C\u60F3\u8981\u66F4\u6DF1\u5165\u7684SEO\u4F18\u5316\uFF0C\u8BF7\u81EA\u884C\u89E3\u51B3</p><h2 id="\u9996\u9875" tabindex="-1"><a class="header-anchor" href="#\u9996\u9875" aria-hidden="true">#</a> \u9996\u9875</h2><p>\u9996\u9875\u7684<code>description</code>\u548C<code>keyword</code>\u901A\u8FC7\u4EE5\u4E0B\u4FEE\u6539\uFF0C\u5728<code>readme.md</code>\u6587\u4EF6\u4E2D\uFF0C\u4E0D\u63A8\u8350\u5728<code>config.js</code>\u4E2D\u8FDB\u884C\u4FEE\u6539</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
        description<span class="token operator">:</span> <span class="token string">&#39;qsyyke\u7684\u4E2A\u4EBA\u535A\u5BA2\uFF0C\u8BB0\u5F55\u751F\u6D3B\u7410\u4E8B\uFF0C\u5B66\u4E60\u7B14\u8BB0&#39;</span><span class="token punctuation">,</span>
        keyword<span class="token operator">:</span> <span class="token string">&#39;vuepress\u4E3B\u9898,vuepress theme,\u751F\u6D3B\u7410\u4E8B,\u4E8C\u6B21\u5143\u535A\u5BA2,\u7B80\u7EA6\u535A\u5BA2,\u535A\u5BA2\u4E3B\u9898,\u9759\u6001\u4E3B\u9898&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u6587\u7AE0\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u6587\u7AE0\u9875\u9762" aria-hidden="true">#</a> \u6587\u7AE0\u9875\u9762</h2><p>\u5BF9\u4E8E\u6587\u7AE0\u9875\u9762\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7<code>frontmatter</code>\u8BED\u6CD5\u5728\u6BCF\u4E2A<code>.md</code>\u6587\u4EF6\u4E0A\u8FDB\u884C\u4FEE\u6539\uFF0C\u53EF\u4EE5\u53C2\u7167\u5B98\u65B9<a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#description">description</a></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">description</span><span class="token punctuation">:</span> \u8FD9\u662F\u4E00\u4E2A\u6D4B\u8BD5description\u9879
<span class="token key atrule">keyword</span><span class="token punctuation">:</span> key1<span class="token punctuation">,</span>key2<span class="token punctuation">,</span>key3<span class="token punctuation">,</span>key4<span class="token punctuation">,</span>key5
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>description: String</li><li>keyword: \u6570\u7EC4</li></ul><p>\u5982\u679C\u4F60\u6CA1\u6709\u5728\u8BE5<code>.md</code>\u6587\u4EF6\u4E2D\uFF0C\u6CA1\u6709\u5BF9description\u6216\u8005keyword\u8FDB\u884C\u4FEE\u6539\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u901A\u8FC7\u83B7\u53D6\u5F53\u524D\u6587\u7AE0\u7684\u90E8\u5206h2\u6807\u7B7E\u548C\u90E8\u5206p\u6807\u7B7E\u5185\u5BB9\u8FDB\u884C\u7EC4\u5408</p><p>description\u5B57\u7B26\u9ED8\u8BA4\u4E3A<code>1220</code>\uFF0C\u6682\u672A\u5728<code>config.js</code>\u4E2D\u63D0\u4F9B\u4FEE\u6539</p><p>keyword\u5B57\u7B26\u9ED8\u8BA4\u4E3A90</p><h2 id="\u793E\u4EA4\u4FE1\u606F\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u793E\u4EA4\u4FE1\u606F\u914D\u7F6E" aria-hidden="true">#</a> \u793E\u4EA4\u4FE1\u606F\u914D\u7F6E</h2>`,13),k=i("\u793E\u4EA4\u4FE1\u606F\u914D\u7F6E");function m(h,b){const n=s("RouterLink");return e(),a(c,null,[u,p("p",null,[o(n,{to:"/feature/social.html"},{default:t(()=>[k]),_:1})])],64)}var v=l(d,[["render",m]]);export{v as default};

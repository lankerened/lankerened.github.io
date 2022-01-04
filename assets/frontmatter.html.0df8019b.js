import{r as l,o as r,c as d,a as n,b as a,w as t,F as p,d as e,e as c}from"./app.b97705f9.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const h={},_=n("h1",{id:"front-matter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#front-matter","aria-hidden":"true"},"#"),e(" Front Matter")],-1),m=e("\u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u4F60\u53EF\u4EE5\u5148\u8BFB\u4E00\u8BFB\u5B98\u65B9\u5BF9\u4E8E"),k={href:"https://v1.vuepress.vuejs.org/zh/guide/frontmatter.html",target:"_blank",rel:"noopener noreferrer"},b=e("frontmatter"),f=e("\u7684\u4ECB\u7ECD\uFF0C\u66F4\u6709\u52A9\u4E8E\u4F60\u7684\u7406\u89E3\u53CA\u4F7F\u7528"),g=c(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>FrontMatter</code>\u662F\u5199\u5728md\u6587\u4EF6\u4E2D\uFF0C\u5E76\u4E14<code>\u5728\u6BCF\u7BC7md\u7684\u6700\u9876\u90E8\uFF0C\u4F7F\u7528---\u5305\u88F9</code>\u8D77\u6765\u7684\u4E00\u79CD\u5F62\u5F0F\uFF0C\u4F7F\u7528\u7684\u662F<code>yaml</code>\u8BED\u6CD5\uFF0C\u4F60\u53EF\u4EE5\u50CF\u4E0B\u9762\u8FD9\u6837</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token font-matter yaml language-yaml"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token string">&quot;2021/111/27&quot;</span> <span class="token comment">#\u624B\u52A8\u8BBE\u7F6E\u6B64\u7BC7\u6587\u7AE0\u53D1\u5E03\u65F6\u95F4</span>
<span class="token key atrule">tag</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>tag1<span class="token punctuation">,</span>tag2<span class="token punctuation">]</span> <span class="token comment">#\u8BBE\u7F6E\u6B64\u7BC7\u6587\u7AE0\u7684\u6807\u7B7E</span>
<span class="token key atrule">categories</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>cate1<span class="token punctuation">,</span>cate2<span class="token punctuation">,</span>cate3<span class="token punctuation">]</span> <span class="token comment">#\u8BBE\u7F6E\u6B64\u7BC7\u6587\u7AE0\u7684\u7C7B\u522B</span>
<span class="token key atrule">keyword</span><span class="token punctuation">:</span> key1<span class="token punctuation">,</span>key2 <span class="token comment">#\u8BBE\u7F6E\u6B64\u7BC7\u6587\u7AE0\u7684\u5173\u952E\u8BCD</span>
<span class="token key atrule">description</span><span class="token punctuation">:</span> \u8FD9\u662F\u4E00\u4E2A\u63CF\u8FF0 <span class="token comment">#\u8BBE\u7F6E\u6B64\u7BC7\u6587\u7AE0\u7684\u63CF\u8FF0</span>
<span class="token key atrule">sticky</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment">#\u662F\u5426\u7F6E\u9876\u8BE5\u7BC7\u6587\u7AE0</span>
<span class="token key atrule">coverUrl</span><span class="token punctuation">:</span> <span class="token string">&quot;https://aurora.xcye.xyz/avatar.jpg&quot;</span> <span class="token comment">#\u8BBE\u7F6E\u5C01\u9762\u56FE</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> \u8FD9\u662F\u7B2C\u4E00\u7BC7\u6587\u7AE0 <span class="token comment"># \u8BBE\u7F6E\u6807\u9898</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></div><p>\u4E0A\u9762\u8FD9\u4E9B\u662F<code>aurora</code>\u4E3B\u9898\u81EA\u5DF1\u52A0\u4E0A\u7684\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u52A0\u5165\u5B98\u65B9\u7684\u4E00\u4E9B\u8BBE\u7F6E\uFF0C\u4E0B\u9762\u8FD9\u4E9B\u90FD\u662F\u5B98\u65B9\u7684\uFF0C\u5E76\u4E14\u5728\u8BE5\u4E3B\u9898\u4E2D\uFF0C\u57FA\u672C\u4E0A\u90FD\u652F\u6301</p><h2 id="\u5B98\u65B9\u9884\u5B9A\u4E49\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5B98\u65B9\u9884\u5B9A\u4E49\u53D8\u91CF" aria-hidden="true">#</a> \u5B98\u65B9\u9884\u5B9A\u4E49\u53D8\u91CF</h2><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>h1_title || siteConfig.title</code></li></ul><p>\u5F53\u524D\u9875\u9762\u7684\u6807\u9898\u3002</p><h3 id="lang" tabindex="-1"><a class="header-anchor" href="#lang" aria-hidden="true">#</a> lang</h3><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>en-US</code></li></ul><p>\u5F53\u524D\u9875\u9762\u7684\u8BED\u8A00\u3002</p><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h3><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>siteConfig.description</code></li></ul><p>\u5F53\u524D\u9875\u9762\u7684\u63CF\u8FF0\u3002</p><h3 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout</h3><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>Layout</code></li></ul><p>\u8BBE\u7F6E\u5F53\u524D\u9875\u9762\u7684\u5E03\u5C40\u7EC4\u4EF6\u3002</p><h3 id="permalink" tabindex="-1"><a class="header-anchor" href="#permalink" aria-hidden="true">#</a> permalink</h3><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>siteConfig.permalink</code></li></ul>`,17),y=e("\u53C2\u8003: "),E=e("Permalinks"),x=e("."),v=c(`<h3 id="metatitle" tabindex="-1"><a class="header-anchor" href="#metatitle" aria-hidden="true">#</a> metaTitle</h3><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>\`\${page.title} | \${siteConfig.title}\`</code></li></ul><p>\u91CD\u5199\u9ED8\u8BA4\u7684 meta title\u3002</p><h3 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> meta</h3><ul><li>\u7C7B\u578B: <code>array</code></li><li>\u9ED8\u8BA4\u503C: <code>undefined</code></li></ul><p>\u6307\u5B9A\u989D\u5916\u7684\u8981\u6CE8\u5165\u7684 meta \u6807\u7B7E\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">meta</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> description
    <span class="token key atrule">content</span><span class="token punctuation">:</span> hello
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> keywords
    <span class="token key atrule">content</span><span class="token punctuation">:</span> super duper SEO
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u9ED8\u8BA4\u4E3B\u9898\u7684\u9884\u5B9A\u4E49\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u4E3B\u9898\u7684\u9884\u5B9A\u4E49\u53D8\u91CF" aria-hidden="true">#</a> \u9ED8\u8BA4\u4E3B\u9898\u7684\u9884\u5B9A\u4E49\u53D8\u91CF</h2><h3 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar</h3><ul><li>\u7C7B\u578B: <code>boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>undefined</code></li></ul>`,10),B=e("\u53C2\u8003: "),A=e("\u9ED8\u8BA4\u4E3B\u9898\u914D\u7F6E > \u7981\u7528\u5BFC\u822A\u680F"),F=e("\u3002"),C={id:"sidebar",tabindex:"-1"},w=n("a",{class:"header-anchor",href:"#sidebar","aria-hidden":"true"},"#",-1),L=e(" sidebar"),j=n("ul",null,[n("li",null,[e("\u7C7B\u578B: "),n("code",null,"boolean|'auto'")]),n("li",null,[e("\u9ED8\u8BA4\u503C: "),n("code",null,"undefined")])],-1),q=e("\u53C2\u8003: "),N=e("\u9ED8\u8BA4\u4E3B\u9898\u914D\u7F6E > \u4FA7\u8FB9\u680F"),V=e("\u3002"),I={id:"prev",tabindex:"-1"},S=n("a",{class:"header-anchor",href:"#prev","aria-hidden":"true"},"#",-1),T=e(" prev"),z=n("ul",null,[n("li",null,[e("\u7C7B\u578B: "),n("code",null,"boolean|string")]),n("li",null,[e("\u9ED8\u8BA4\u503C: "),n("code",null,"undefined")])],-1),M=e("\u53C2\u8003: "),P=e("\u9ED8\u8BA4\u4E3B\u9898\u914D\u7F6E > \u4E0A / \u4E0B\u4E00\u7BC7\u94FE\u63A5"),R=e("\u3002"),U={id:"next",tabindex:"-1"},$=n("a",{class:"header-anchor",href:"#next","aria-hidden":"true"},"#",-1),D=e(" next"),O=n("ul",null,[n("li",null,[e("\u7C7B\u578B: "),n("code",null,"boolean|string")]),n("li",null,[e("\u9ED8\u8BA4\u503C: "),n("code",null,"undefined")])],-1),G=e("\u53C2\u8003: "),H=e("\u9ED8\u8BA4\u4E3B\u9898\u914D\u7F6E > \u4E0A / \u4E0B\u4E00\u7BC7\u94FE\u63A5"),J=e("\u3002"),K=n("h3",{id:"search",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#search","aria-hidden":"true"},"#"),e(" search")],-1),Q=n("ul",null,[n("li",null,[e("\u7C7B\u578B: "),n("code",null,"boolean")]),n("li",null,[e("\u9ED8\u8BA4\u503C: "),n("code",null,"undefined")])],-1),W=e("\u53C2\u8003: "),X=e("\u9ED8\u8BA4\u4E3B\u9898\u914D\u7F6E > \u5185\u7F6E\u641C\u7D22"),Y=e("\u3002"),Z=n("h3",{id:"tags",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tags","aria-hidden":"true"},"#"),e(" tags")],-1),nn=n("ul",null,[n("li",null,[e("\u7C7B\u578B: "),n("code",null,"array")]),n("li",null,[e("\u9ED8\u8BA4\u503C: "),n("code",null,"undefined")])],-1);function en(an,sn){const i=l("ExternalLinkIcon"),s=l("RouterLink"),o=l("Badge");return r(),d(p,null,[_,n("p",null,[m,n("a",k,[b,a(i)]),f]),g,n("p",null,[y,a(s,{to:"/learn/permalinks.html"},{default:t(()=>[E]),_:1}),x]),v,n("p",null,[B,a(s,{to:"/theme/default-theme-config.html#%E7%A6%81%E7%94%A8%E5%AF%BC%E8%88%AA%E6%A0%8F"},{default:t(()=>[A]),_:1}),F]),n("h3",C,[w,L,a(o,{type:"tip",text:"\u4E0D\u652F\u6301",vertical:"top"})]),j,n("p",null,[q,a(s,{to:"/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F"},{default:t(()=>[N]),_:1}),V]),n("h3",I,[S,T,a(o,{type:"tip",text:"\u4E0D\u652F\u6301",vertical:"top"})]),z,n("p",null,[M,a(s,{to:"/theme/default-theme-config.html#%E4%B8%8A-%E4%B8%8B%E4%B8%80%E7%AF%87%E9%93%BE%E6%8E%A5"},{default:t(()=>[P]),_:1}),R]),n("h3",U,[$,D,a(o,{type:"tip",text:"\u4E0D\u652F\u6301",vertical:"top"})]),O,n("p",null,[G,a(s,{to:"/theme/default-theme-config.html#%E4%B8%8A-%E4%B8%8B%E4%B8%80%E7%AF%87%E9%93%BE%E6%8E%A5"},{default:t(()=>[H]),_:1}),J]),K,Q,n("p",null,[W,a(s,{to:"/theme/default-theme-config.html#%E5%86%85%E7%BD%AE%E6%90%9C%E7%B4%A2"},{default:t(()=>[X]),_:1}),Y]),Z,nn],64)}var ln=u(h,[["render",en]]);export{ln as default};

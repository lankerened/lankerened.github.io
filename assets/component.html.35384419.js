import{r as e,o as c,c as l,a as n,b as a,w as t,F as u,e as p,d as o}from"./app.b97705f9.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const r={},k=p(`<h1 id="coze\u7EC4\u4EF6\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#coze\u7EC4\u4EF6\u4F7F\u7528" aria-hidden="true">#</a> Coze\u7EC4\u4EF6\u4F7F\u7528</h1><blockquote><p>\u4EE5\u4E0B\u6240\u6709\u7684\u7EC4\u4EF6\u90FD\u662F\u5168\u5C40\u7EC4\u4EF6</p></blockquote><h2 id="cozemood" tabindex="-1"><a class="header-anchor" href="#cozemood" aria-hidden="true">#</a> CozeMood</h2><p>\u8BE5\u7EC4\u4EF6\u662F\u5C55\u793A\u8BF4\u8BF4\u7684\u7EC4\u4EF6\uFF0C\u4E5F\u5C31\u662F\u4E0B\u9762\u8FD9\u4E2A\u9875\u9762</p><p><img src="https://ooszy.cco.vin/img/blog-note/image-20211108194504444.png?x-oss-process=style/pictureProcess1" alt="image-20211108194504444"></p><h3 id="\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#\u94A9\u5B50" aria-hidden="true">#</a> \u94A9\u5B50</h3><p>\u8BE5\u7EC4\u4EF6\u5F53\u6240\u6709\u6570\u636E\u52A0\u8F7D\u5B8C\u6210\u4E4B\u540E\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u94A9\u5B50\u51FD\u6570<code>cozeSuccess</code>\uFF0C\u4F60\u53EF\u4EE5\u5728\u4F60\u81EA\u5DF1\u7684\u4E3B\u9898\u4E2D\uFF0C\u4F7F\u7528\u8BE5\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//Mood.vue</span>
<span class="token operator">&lt;</span>CozeMood @coze<span class="token operator">-</span>success<span class="token operator">=</span><span class="token string">&quot;cozeSuccess&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>CozeMood<span class="token operator">&gt;</span>

methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">cozeSuccess</span><span class="token punctuation">(</span><span class="token parameter">cozeMoodData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u6570\u636E\u52A0\u8F7D\u5B8C\u6210\u4E4B\u540E\u8FD4\u56DE</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a> \u63D2\u69FD</h3><p>\u8BE5\u7EC4\u4EF6\u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E9B\u63D2\u69FD</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;coze-mood-content&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;coze-img&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;coze-mood-bottom-left&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;coze-mood-bottom-right&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5BF9\u5E94\u4F4D\u7F6E\u5982\u4E0B</p><p><img src="https://ooszy.cco.vin/img/blog-note/image-20211108202006814.png?x-oss-process=style/pictureProcess1" alt="image-20211108202006814"></p><h3 id="\u6837\u5F0F\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u6837\u5F0F\u53D8\u91CF" aria-hidden="true">#</a> \u6837\u5F0F\u53D8\u91CF</h3><p>\u5982\u679C\u4F60\u9700\u8981\u8BBE\u7F6E\u80CC\u666F\u989C\u8272\u7B49\u7B49\uFF0C\u63D0\u4F9B\u4E86css\u53D8\u91CF\uFF0C\u8BF7\u81EA\u884C\u4F7F\u7528</p><h2 id="cozelogin" tabindex="-1"><a class="header-anchor" href="#cozelogin" aria-hidden="true">#</a> CozeLogin</h2><p>\u8BE5\u7EC4\u4EF6\u662F\u4E00\u4E2A\u6CE8\u518C\uFF0C\u767B\u51FA\u64CD\u4F5C\u7EC4\u4EF6\uFF0C\u4E0D\u63D0\u4F9B\u4EFB\u4F55\u7684\u6837\u5F0F\uFF0C\u5C31\u662F\u4E00\u4E2A\u7A7A\u58F3\uFF0C\u63D0\u4F9B\u7684\u76EE\u7684\u662F\uFF0C\u4F60\u5982\u679C\u9700\u8981\u8BA9\u7528\u6237\u767B\u5F55\uFF0C\u53D1\u5E03\u8BF4\u8BF4\u7B49\uFF0C\u53EF\u4EE5\u4E3A\u7528\u6237\u63D0\u4F9B\u6CE8\u518C\u7B49\u64CD\u4F5C\uFF0C\u6211\u6CA1\u6709\u63D0\u4F9B\u6837\u5F0F\uFF0C\u662F\u56E0\u4E3A\u4EC0\u4E48\u6837\u5F0F\u4E5F\u6CA1\u6709\uFF0C\u66F4\u4FBF\u4E8E\u4F60\u4EEC\u8BBE\u7F6E\u5176css\u6837\u5F0F</p><blockquote><p>\u8BE5\u7EC4\u4EF6\u5C55\u793A\u6548\u679C</p></blockquote><p><img src="https://ooszy.cco.vin/img/blog-note/image-20211110234327520.png?x-oss-process=style/pictureProcess1" alt="image-20211110234327520"></p><ul><li>\u7ED3\u6784</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!--\u8FD9\u662F\u4E00\u4E2A\u767B\u5F55\u6CE8\u518C\u7684\u7EC4\u4EF6--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-login<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cozeCustomTop<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">v-on:</span>submit.prevent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-item-common<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">autocomplete</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8BF7\u8F93\u5165\u7528\u6237\u540D<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-item-common<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">autocomplete</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8F93\u51656\u523020\u4F4D\u5305\u542B\u6570\u5B57,\u5B57\u6BCD\u5BC6\u7801<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-item-common<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">autocomplete</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8BF7\u8F93\u5165\u90AE\u7BB1 \u767B\u5F55\u4E0D\u9700\u8981\u6B64\u90AE\u7BB1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cozeCustomCenter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-item-common coze-custom-button coze-custom-register<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>verifyIdentify<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6CE8\u518C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-item-common coze-custom-button coze-custom-login<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loginIn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u767B\u5F55<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coze-custom-item-common coze-custom-button coze-custom-out<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loginOut<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u767B\u51FA<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cozeCustomBottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="\u94A9\u5B50-1" tabindex="-1"><a class="header-anchor" href="#\u94A9\u5B50-1" aria-hidden="true">#</a> \u94A9\u5B50</h3><p>\u63D0\u4F9B\u7684\u94A9\u5B50\u6709</p><table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>cozeLoginOut</td><td>\u8FD4\u56DE\u6570\u636E</td><td>\u70B9\u51FB\u767B\u51FA\u6309\u94AE\u8FD4\u56DE\u767B\u51FA\u72B6\u6001</td></tr><tr><td>cozeLogin</td><td>\u8FD4\u56DE\u7528\u6237\u767B\u5F55\u76F8\u5173\u4FE1\u606F</td><td>\u70B9\u51FB\u767B\u5F55</td></tr><tr><td>cozeRegister</td><td>\u8FD4\u56DE\u7528\u6237\u6CE8\u518C\u6570\u636E</td><td>\u5728leanCloud\u4E2D\uFF0C\u6CE8\u518C\u65B0\u7528\u6237</td></tr></tbody></table><ul><li>\u4F7F\u7528\u6848\u4F8B</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>CozeLogin @coze<span class="token operator">-</span>login<span class="token operator">-</span>out<span class="token operator">=</span><span class="token string">&quot;cozeLoginOut&quot;</span> @coze<span class="token operator">-</span>login<span class="token operator">=</span><span class="token string">&quot;cozeLogin&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>CozeLogin<span class="token operator">&gt;</span>

methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">cozeLoginOut</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u70B9\u51FB\u767B\u51FA\u6309\u94AE&quot;</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">cozeLogin</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u70B9\u51FB\u767B\u5F55\u6309\u94AE&quot;</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">cozeRegister</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u70B9\u51FB\u6CE8\u518C\u6309\u94AE&quot;</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><img src="https://ooszy.cco.vin/img/blog-note/image-20211108203333154.png?x-oss-process=style/pictureProcess1" alt="image-20211108203333154"></p><blockquote><p>\u4F60\u53EF\u4EE5\u6839\u636E\u8FD4\u56DE\u7684\u6570\u636E\uFF0C\u8FDB\u884C\u989D\u5916\u7684\u4E00\u4E9B\u64CD\u4F5C</p></blockquote><blockquote><ul><li><p>registerStatus</p><blockquote><p>\u4E3A0\uFF0C\u8868\u793A\u6CE8\u518C\u5931\u8D25\uFF0C\u53CD\u4E4B</p></blockquote></li><li><p>status</p><blockquote><p>\u4E3A1\uFF0C\u8868\u793A\u6210\u529F\u9000\u51FA\u767B\u5F55</p></blockquote></li><li><p>administrator</p><blockquote><p>\u4E3A0\uFF0C\u8868\u793A\u4E0D\u662F\u7BA1\u7406\u5458\uFF0C\u53CD\u4E4B</p></blockquote></li></ul></blockquote><h3 id="\u63D2\u69FD-1" tabindex="-1"><a class="header-anchor" href="#\u63D2\u69FD-1" aria-hidden="true">#</a> \u63D2\u69FD</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cozeCustomTop<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cozeCustomBottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="registeruser" tabindex="-1"><a class="header-anchor" href="#registeruser" aria-hidden="true">#</a> RegisterUser</h2><p>\u8BE5\u7EC4\u4EF6\u4E5F\u662F\u4E00\u4E2A\u5168\u5C40\u7EC4\u4EF6\uFF0C\u63D2\u4EF6\u63D0\u4F9B\u7684\u9ED8\u8BA4\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u672A\u63D0\u4F9B\u4EFB\u4F55\u94A9\u5B50\u7B49</p><p><img src="https://ooszy.cco.vin/img/blog-note/image-20211108203909235.png?x-oss-process=style/pictureProcess1" alt="image-20211108203909235"></p><h2 id="\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6837\u5F0F" aria-hidden="true">#</a> \u6837\u5F0F</h2>`,35),m=o("\u6837\u5F0F\u8BBE\u7F6E"),g=p('<h2 id="cozephoto" tabindex="-1"><a class="header-anchor" href="#cozephoto" aria-hidden="true">#</a> CozePhoto</h2><p>\u8BE5\u7EC4\u4EF6\u662F\u5C55\u793A\u76F8\u518C\u7684\u4E00\u4E2A\u5168\u5C40\u7EC4\u4EF6\uFF0C\u8BE5\u7EC4\u4EF6\u7684\u5C55\u793A\u6548\u679C\u5982\u4E0B\u56FE</p><p><img src="https://ooszy.cco.vin/img/blog-note/image-20211111000148676.png?x-oss-process=style/pictureProcess1" alt="image-20211111000148676"></p><p>\u8BE5\u7EC4\u4EF6\u4F1A\u5C55\u793A\u6240\u6709\u7528\u6237\u53D1\u5E03\u5728\u8BF4\u8BF4\u4E0A\uFF0C\u5E76\u4E14\u8BBE\u7F6E\u4E3A\u663E\u793A\u7684\u56FE\u7247</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u540E\u7EED\u4F1A\u52A0\u4E0A\uFF0C\u4E0D\u662F\u7BA1\u7406\u5458\u53EA\u663E\u793A\u5F53\u524D\u7528\u6237\u5BF9\u5E94\u7684\u56FE\u7247\uFF0C\u7BA1\u7406\u5458\u663E\u793A\u6240\u6709</p></div><blockquote><p>\u8BE5\u7EC4\u4EF6\u6CA1\u6709\u63D0\u4F9B\u4EFB\u4F55\u7684\u63D2\u69FD\u7B49</p></blockquote><h2 id="\u6837\u5F0F\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6837\u5F0F\u914D\u7F6E" aria-hidden="true">#</a> \u6837\u5F0F\u914D\u7F6E</h2>',7),d=o("\u6837\u5F0F\u914D\u7F6E");function b(q,h){const s=e("RouterLink");return c(),l(u,null,[k,n("p",null,[a(s,{to:"/plugin/coze/style.html"},{default:t(()=>[m]),_:1})]),g,n("p",null,[a(s,{to:"/plugin/coze/style.html"},{default:t(()=>[d]),_:1})])],64)}var f=i(r,[["render",b]]);export{f as default};

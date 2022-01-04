import{r as s,o as a,c as p,a as t,b as e,w as o,F as c,e as l,d as u}from"./app.b97705f9.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},b=l(`<h1 id="\u5173\u4E8E\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u9875\u9762" aria-hidden="true">#</a> \u5173\u4E8E\u9875\u9762</h1><h2 id="\u793E\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u793E\u4EA4" aria-hidden="true">#</a> \u793E\u4EA4</h2><p><img src="https://ooszy.cco.vin/img/blog-note/image-20211011163020328.png?x-oss-process=style/pictureProcess1" alt="image-20211011163020328"></p><p>\u8FD9\u4E2A\u9700\u8981\u5728<code>socials</code>\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u8BBE\u7F6E\u548C\u9996\u9875\u4E00\u6837</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
		socials<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u5173\u4E8E\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u5217\u8868" aria-hidden="true">#</a> \u5173\u4E8E\u5217\u8868</h2><p>\u5173\u4E8E\u5217\u8868\u662F\u4E00\u4E2A\u4E00\u4E2A\u7684</p><p><img src="http://ooszy.cco.vin/img/blog-note/image-20210831194455529.png?x-oss-process=style/pictureProcess1" alt="image-20210831194455529"></p><p><img src="http://ooszy.cco.vin/img/blog-note/image-20210831194509894.png?x-oss-process=style/pictureProcess1" alt="image-20210831194509894"></p><p>\u5728<code>readme.md</code>\u4E2D\uFF0C\u901A\u8FC7<code>about</code>\u9879\u8FDB\u884C\u66F4\u6539\uFF0C<code>about</code>\u662F\u4E00\u4E2A\u6570\u7EC4\u5BF9\u8C61\uFF0C\u6B64\u5BF9\u8C61\u683C\u5F0F\u6709\u4E24\u79CD\u5F62\u5F0F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    bar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    describe<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    tag<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    showTag<span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    bar<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">&#39;\u6280  \u80FD&#39;</span><span class="token punctuation">,</span>
    describe<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;java&#39;</span><span class="token punctuation">,</span>
        score<span class="token operator">:</span> <span class="token number">70</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    showTag<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><table><thead><tr><th>\u5BF9\u8C61\u540D</th><th>\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>bar</td><td>true or false</td><td>true\u8868\u793Adescribe\u6570\u7EC4\uFF0C\u4EE5\u6761\u5F62\u7684\u5F62\u5F0F\u5C55\u793A\uFF0C\u5426\u5219\u4EE5li\u65B9\u5F0F\u663E\u793A</td></tr><tr><td>title</td><td>String</td><td>\u6B64\u5217\u8868\u7684\u6807\u9898\uFF0C\u5982\u6211?\uFF0C\u6280\u80FD...</td></tr><tr><td>describe</td><td>\u6570\u7EC4</td><td>\u63CF\u8FF0</td></tr><tr><td>tag</td><td>\u6570\u7EC4</td><td>\u6B64\u4E2A\u4EBA\u8BF4\u660E\u9879\u7684\u6807\u7B7E</td></tr><tr><td>showTag</td><td>true or false</td><td>true\u5F00\u542Ftag,false\u4E0D\u4F1A\u663E\u793Atag</td></tr><tr><td>name</td><td>String</td><td>\u53EA\u6709bar\u4E3Atrue\u65F6\u6709\u6548\uFF0C\u6BCF\u4E2Abar\u7684\u6807\u7B7E</td></tr><tr><td>score</td><td>\u6570\u7EC4(0-100)</td><td>\u53EA\u6709bar\u4E3Atrue\u65F6\u6709\u6548\uFF0C\u6BCF\u4E2Abar\u7684\u5360\u6BD4</td></tr></tbody></table><h3 id="\u5168\u90E8\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5168\u90E8\u914D\u7F6E" aria-hidden="true">#</a> \u5168\u90E8\u914D\u7F6E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
        about<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                bar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                title<span class="token operator">:</span> <span class="token string">&quot;\u6211?&quot;</span><span class="token punctuation">,</span>
                describe<span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;\u76EE\u524D\u662F\u4E00\u540D\u5927\u4E09\u5B66\u751F,CS\u4E13\u4E1A,\u5750\u6807\u897F\u5357\u8FB9\u9672&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u559C\u6B22\u5B89\u9759,\u4E0D\u559C\u793E\u4EA4&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u559C\u6B22\u542C\u97F3\u4E50,\u4EC0\u4E48\u7C7B\u578B\u90FD\u53EF&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u559C\u6B22\u6280\u672F,coding&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u76EE\u524D\u6B63\u5728\u5B66\u4E60java\u540E\u7AEF&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;\u6700\u559C\u6B22\u7684\u7535\u5F71\u662F&quot;\u5FE0\u72AC\u516B\u516C\u7684\u6545\u4E8B&quot;,\u68A6\u60F3\u4EE5\u540E\u72EC\u5C45\u4E5F\u80FD\u6709\u4E00\u53EA&quot;Hachi&quot;&#39;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u4E3B\u9898\u662F\u6211\u81EA\u5DF1\u5F00\u53D1\u7684\uFF0C\u524D\u7AEF\u592A\u83DC\u4E86\uFF0C\u5982\u679C\u6709bug\uFF0C\u5E0C\u671B\u5927\u5BB6\u591A\u591A\u5305\u6DB5\`\u03A3(\uFFE3\u25A1\uFFE3||)\` &quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u6709\u70B9\u61D2&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u76EE\u524D\u9664\u4E86\u7F16\u7A0B\u6CA1\u6709\u4EC0\u4E48\u5174\u8DA3\u7231\u597D&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u6B63\u5728\u8FFD\u7684\u756A\u6709\u300A\u767E\u5996\u8C31\u300B,\u300A\u81F4\u4E0D\u706D\u7684\u4F60\u300B,\u300A\u5C11\u5E74\u6B4C\u884C\u300B,\u300A\u9B3C\u706D\u4E4B\u5203\u300B,\u300A\u5173\u4E8E\u6211\u8F6C\u751F\u53D8\u6210\u53F2\u83B1\u59C6\u8FD9\u6863\u4E8B\u300B...&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u559C\u6B22\u5C0F\u8BF4\uFF0C\u559C\u6B22\u7684\u4F5C\u8005\u662F--\u5341\u6708\u6D41\u5E74\uFF0C\u6700\u559C\u6B22\u7684\u5C0F\u8BF4\u300A\u81F3\u5C0A\u4FEE\u7F57\u300B,\u300A\u4E00\u5FF5\u6C38\u6052\u300B,\u300A\u661F\u8FB0\u53D8\u300B&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                tag<span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;coding&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u793E\u6050&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u756A\u5267&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u7535\u5F71&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u5B89\u9759&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u97F3\u4E50&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u5C0F\u8BF4&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u5B85&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u61D2&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                showTag<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                bar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                title<span class="token operator">:</span> <span class="token string">&quot;\u5927\u4E09\u89C4\u5212&quot;</span><span class="token punctuation">,</span>
                describe<span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;\u505A\u9879\u76EE&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u8F6F\u8003\u4E8C\u7EA7&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u82F1\u8BED\u56DB\u7EA7&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u60F3\u627E\u5B9E\u4E60&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u590D\u4E60\u6570\u636E\u7ED3\u6784&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u9A7E\u7167&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u505A\u70B9\u4EC0\u4E48\u6709\u610F\u4E49\u7684\u4E8B&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                tag<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u5927\u5BB6\u52A0\u6CB9\u5440\`\u03A3(\uFFE3\u25A1\uFFE3||)\` ...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                showTag<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                bar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                title<span class="token operator">:</span> <span class="token string">&quot;\u672A\u6765\u89C4\u5212&quot;</span><span class="token punctuation">,</span>
                describe<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u540E\u7AEF\u5DE5\u7A0B\u5E08&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u8D5Amoney&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                tag<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u5FD8\u8BB0\u8FC7\u53BB\uFF0C\u5C55\u671B\u672A\u6765&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                showTag<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                bar<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                title<span class="token operator">:</span> <span class="token string">&quot;\u6280  \u80FD&quot;</span><span class="token punctuation">,</span>
                describe<span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;java&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;HTML5&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">87</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">82</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">73</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;python&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;redis&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">59</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">82</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;spring&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">71</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;springMVC&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">77</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;springBoot&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">71</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                showTag<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

            <span class="token punctuation">{</span>
                showTag<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                bar<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                title<span class="token operator">:</span> <span class="token string">&quot;\u638C\u63E1\u6846\u67B6&quot;</span><span class="token punctuation">,</span>
                describe<span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;spring&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">79</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;springMVC&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">81</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;springBoot&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">82</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;mybatis&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">82</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;dubbo&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">61</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                bar<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                showTag<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                title<span class="token operator">:</span> <span class="token string">&quot;\u638C\u63E1\u6280\u80FD&quot;</span><span class="token punctuation">,</span>
                describe<span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;jetbrains&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;linux&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">68</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;git&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">78</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        name<span class="token operator">:</span> <span class="token string">&quot;Ctrl C V&quot;</span><span class="token punctuation">,</span>
                        score<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&quot;\u5173\u4E8E\u4E3B\u9898&quot;</span><span class="token punctuation">,</span>
                describe<span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;theme-ccds\u4E3B\u9898\u662F\u6211\u81EA\u5DF1\u72EC\u7ACB\u5F00\u53D1\uFF0C\u662F\u4E00\u6B3E\u57FA\u4E8Evuepress\uFF0C\u5BF9\u9ED8\u8BA4\u4E3B\u9898\u8FDB\u884C\u4E86\u5927\u91CF\u4FEE\u6539\uFF0C\u6211\u4EE5\u524D\u4F7F\u7528\u7684\u662Fwordpress\u7684\u535A\u5BA2\u4E3B\u9898\uFF0C\u4F46\u662F\u6211\u5BF9PHP\u4E0D\u4E86\u89E3\uFF0C\u60F3\u6539\u6210\u81EA\u5DF1\u60F3\u8981\u7684\u4E3B\u9898\uFF0C\u592A\u96BE\u4E86\uFF0C\u6700\u8FD1\u5728\u5B66vue\uFF0C\u6B63\u597D\u770B\u5230\u53EF\u4EE5\u4F7F\u7528vuepress\u6765\u642D\u5EFA \u535A\u5BA2\uFF0C\u5C31\u5C06\u9ED8\u8BA4\u4E3B\u9898\u6539\u6210\u73B0\u5728\u8FD9\u4E2A\u6837\uFF0C\u5E76\u4E14\u559C\u6B22vuepress\u7684\u6700\u4E3B\u8981\u539F\u56E0\u662F\uFF0C\u5B83\u53EF\u4EE5 \u76F4\u63A5\u5C06\u672C\u5730\u7684markdown\u6587\u6863\u8FDB\u884C\u7F16\u8BD1\u90E8\u7F72\uFF0C\u6211\u539F\u6765\u535A\u5BA2\uFF0C\u6211\u8BB0\u4E86\u51E0\u4E2A\u6708\u7684\u7B14\u8BB0\uFF0C\u4E0D\u592A\u60F3\u518D\u6162\u6162\u4ECE\u672C\u5730\u590D\u5236\u5230WordPress\u8FDB\u884C\u53D1\u5E03\uFF0C\u4EE5\u81F3\u4E8E\u535A\u5BA2\u51E0\u4E2A\u6708\u6CA1\u6709\u53D1\u5E03\u6587\u7AE0\u4E86\uFF0C\u867D\u7136\u6709\u6280\u672F\u53EF\u4EE5\u89E3\u51B3\uFF0C\u4F46\u8FD8\u662F\u559C\u6B22vuepress\uFF0C\u7B80\u76F4\u662F\u61D2\u764C\u798F\u97F3\uFF0C\u5982\u679C\u4F60\u559C\u6B22\u7684\u8BDD\uFF0C\u53EF\u4EE5\u5728\u6211\u7684GitHub\u8FDB\u884C\u4E0B\u8F7D\uFF0C\u4F7F\u7528\u6587\u6863\u53EF\u4EE5\u67E5\u770Bhttps://theme-ccds.cco.vin\uFF0C\u8BE5\u4E3B\u9898\u5DF2\u5C06\u6240\u6709\u7684\u914D\u7F6E\u8FDB\u884C\u62BD\u79BB\uFF0C\u4F60\u73B0\u5728\u770B\u5230\u7684\u6240\u6709\u4FE1\u606F\uFF0C\u90FD\u62BD\u79BB\u5728\u4E86\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u4F46\u662F\u76EE\u524D\u8FD8\u5E76\u4E0D\u80FD\u505A\u5230\u5F00\u7BB1\u5373\u7528\uFF0C\u5982\u679C\u4F7F\u7528\u7684\u4EBA\u591A\u4E86\uFF0C\u6211\u53EF\u4EE5\u8FDB\u884C\u4FEE\u6539\uFF0C\u5E76\u4E14\u6211\u81EA\u5DF1\u4E5F\u5199\u4E86\u51E0\u4E2A\u7EC4\u4EF6\uFF0C\u5305\u62EC\u6587\u7AE0\u9875\u9762\u770B\u5230\u7684\u9876\u90E8\u56FE\u7247\uFF0C\u53CB\u60C5\u94FE\u63A5\uFF0C\u6D77\u62A5\u5206\u4EAB\u529F\u80FD\u7B49\u7B49 \uFF0C\u53EF\u4EE5\u5728\u4F60\u60F3\u4F7F\u7528\u7684\u5730\u65B9\uFF0C\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E9B\u7EC4\u4EF6\u5C31\u53EF\u4EE5\uFF0C\u8BE5\u4E3B\u9898\u6211\u52A0\u5165\u4E86vuex\uFF0C\u5BF9\u524D\u7AEF\u4E0D\u592A\u4E86\u89E3\uFF0C\u6709\u5F88\u591Acss\u4E0D\u5BF9\u7684\u5730\u65B9\uFF0C\u8BF7\u5927\u5BB6\u591A\u591A\u5305\u6DB5\uFF0CThanks\u266A(\uFF65\u03C9\uFF65)\uFF89&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                bar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                title<span class="token operator">:</span> <span class="token string">&quot;\u66F4\u65B0\u65E5\u5FD7&quot;</span><span class="token punctuation">,</span>
                describe<span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;\u5F00\u53D1\u6C38\u4E0D\u6B62\u6B65......&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;2021.9.12 \u589E\u52A0\u76F8\u518C\u529F\u80FD\uFF0C\u89E3\u51B3\u5DF2\u77E5bug&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;2021.9.9 \u589E\u52A0\u6D77\u62A5\u5206\u4EAB\u529F\u80FD&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;2021.9.5 \u91CD\u65B0\u4FEE\u6539\u6587\u7AE0SEO\u81EA\u52A8\u914D\u7F6E\uFF0C\u4F7F\u7528\u65B0\u89C4\u5219\uFF0C\u89E3\u51B3\u4ECEtag\u9875\u9762\u8FDB\u5165\u6587\u7AE0\u9875\u9762\uFF0C\u61D2\u52A0\u8F7D\u5931\u6548\u95EE\u9898&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;2021.9.4 \u91CD\u65B0\u521D\u59CB\u5316\u4ED3\u5E93&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;2.21.8.10 -- 2021.9 \u4E3B\u9898\u5F00\u53D1&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                tag<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;\u60F3\u6C42\u4E2Astar\`(\u2312\u25BD\u2312)\`&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                showTag<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&quot;\u4E3B\u9898\u540E\u7EED\u8BA1\u5212\u53CA\u95F2\u8BDD&quot;</span><span class="token punctuation">,</span>
                bar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                tag<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                showTag<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                describe<span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;\u4E3A\u8BF4\u8BF4\u9875\u9762\u589E\u52A0\u968F\u65F6\u53D1\u5E03\uFF0C\u968F\u65F6\u4FEE\u6539\u529F\u80FD&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\u589E\u52A0\u6BCF\u65E5\u8BA1\u5212\u6253\u5361\u529F\u80FD&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br></div></div><h2 id="\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E" aria-hidden="true">#</a> \u6807\u7B7E</h2><p><img src="http://ooszy.cco.vin/img/blog-note/image-20210831195631982.png?x-oss-process=style/pictureProcess1" alt="image-20210831195631982"></p><p>\u989C\u8272\u4E0D\u652F\u6301\u66F4\u6539\uFF0C\u968F\u673A\uFF0C\u4ECE<code>randomColor</code>\u4E2D\u968F\u673A\u9009\u62E9</p><h2 id="bar" tabindex="-1"><a class="header-anchor" href="#bar" aria-hidden="true">#</a> bar</h2><p><img src="http://ooszy.cco.vin/img/blog-note/image-20210831195817530.png?x-oss-process=style/pictureProcess1" alt="image-20210831195817530"></p><h2 id="\u53CB\u60C5\u94FE\u63A5\u9875\u9762\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u53CB\u60C5\u94FE\u63A5\u9875\u9762\u914D\u7F6E" aria-hidden="true">#</a> \u53CB\u60C5\u94FE\u63A5\u9875\u9762\u914D\u7F6E</h2>`,20),k=u("\u53CB\u60C5\u94FE\u63A5");function m(g,d){const n=s("RouterLink");return a(),p(c,null,[b,t("p",null,[e(n,{to:"/page/friendlink.html"},{default:o(()=>[k]),_:1})])],64)}var v=r(i,[["render",m]]);export{v as default};

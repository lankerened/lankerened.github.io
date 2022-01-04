import{r as s,o as a,c as p,a as e,b as t,w as l,F as c,e as o,d as u}from"./app.b97705f9.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},b=o(`<h1 id="\u8D5E\u8D4F" tabindex="-1"><a class="header-anchor" href="#\u8D5E\u8D4F" aria-hidden="true">#</a> \u8D5E\u8D4F</h1><p>\u8BE5\u7EC4\u4EF6 \u662F\u4E00\u4E2A\u5168\u5C40\u7EC4\u4EF6\uFF0C\u4F4D\u7F6E<code>docs/.vuepress/theme/lib/client/components/global/Donate.vue</code></p><p><img src="http://ooszy.cco.vin/img/blog-note/image-20210831164021528.png?x-oss-process=style/pictureProcess1" alt="image-20210831164021528"></p><img src="http://ooszy.cco.vin/img/blog-note/image-20210831164036678.png?x-oss-process=style/pictureProcess1" alt="image-20210831164036678" style="zoom:50%;"><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="\u626B\u7801\u652F\u4ED8" tabindex="-1"><a class="header-anchor" href="#\u626B\u7801\u652F\u4ED8" aria-hidden="true">#</a> \u626B\u7801\u652F\u4ED8</h3><img src="http://ooszy.cco.vin/img/blog-note/image-20210831164324595.png?x-oss-process=style/pictureProcess1" style="zoom:50%;"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
        donate<span class="token operator">:</span> <span class="token punctuation">{</span>
            donateImg<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/wxpay.png&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/zfbpay.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u63A8\u8350\u4F20\u5165\u4E24\u5F20\u4E8C\u7EF4\u7801\u56FE\u7247\uFF0C\u652F\u4ED8\u5B9D\u6216\u8005\u4F4D\u7F6E</p><h3 id="\u5546\u54C1" tabindex="-1"><a class="header-anchor" href="#\u5546\u54C1" aria-hidden="true">#</a> \u5546\u54C1</h3><img src="http://ooszy.cco.vin/img/blog-note/image-20210831164526261.png?x-oss-process=style/pictureProcess1" alt="image-20210831164526261" style="zoom:50%;"><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>module.exports = <span class="token punctuation">{</span>

    <span class="token key atrule">themeConfig</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">donate</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token key atrule">donateProduct</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    //\u540D\u5B57
                    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5976\u8336&quot;</span><span class="token punctuation">,</span>

                    //\u56FE\u7247\u5730\u5740
                    <span class="token key atrule">img</span><span class="token punctuation">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/nc.jpeg&quot;</span><span class="token punctuation">,</span>

                    //\u4EF7\u683C
                    <span class="token key atrule">price</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span>

                    //\u524D\u7F00
                    <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;$&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5168\u5473\u5976\u8336&quot;</span><span class="token punctuation">,</span>
                    <span class="token key atrule">img</span><span class="token punctuation">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-note/image-20210911233612031.png?&quot;</span><span class="token punctuation">,</span>
                    <span class="token key atrule">price</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
                    <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;\uFFE5&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="\u8D5E\u8D4F\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u8D5E\u8D4F\u5217\u8868" aria-hidden="true">#</a> \u8D5E\u8D4F\u5217\u8868</h3><img src="http://ooszy.cco.vin/img/blog-note/image-20210831164718349.png?x-oss-process=style/pictureProcess1" alt="image-20210831164718349" style="zoom:50%;"><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>module.exports = <span class="token punctuation">{</span>

    <span class="token key atrule">themeConfig</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">donate</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            //\u7528\u6237\u8D5E\u8D4F\u5217\u8868\u6570\u7EC4
            <span class="token key atrule">donateList</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    //\u7528\u6237\u540D
                    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;qsyyke&quot;</span><span class="token punctuation">,</span>

                    //\u8D5E\u8D4F\u4FE1\u606F
                    <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;\u6587\u7AE0\u5199\u7684\u975E\u5E38\u597D&quot;</span><span class="token punctuation">,</span>

                    //\u7528\u6237\u5934\u50CF
                    <span class="token key atrule">img</span><span class="token punctuation">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/nc.jpeg&quot;</span><span class="token punctuation">,</span>

                    //\u6253\u8D4F\u91D1\u989D
                    <span class="token key atrule">price</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>

                    //\u91D1\u989D\u524D\u7F00
                    <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;\uFFE5&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;\u521D\u5C18&quot;</span><span class="token punctuation">,</span>
                    <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;\u4E3B\u9898\u592A\u68D2\u4E86&quot;</span><span class="token punctuation">,</span>
                    <span class="token key atrule">img</span><span class="token punctuation">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/nc.jpeg&quot;</span><span class="token punctuation">,</span>
                    <span class="token key atrule">price</span><span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                    <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;\uFFE5&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="\u5728\u7EBF\u652F\u4ED8" tabindex="-1"><a class="header-anchor" href="#\u5728\u7EBF\u652F\u4ED8" aria-hidden="true">#</a> \u5728\u7EBF\u652F\u4ED8</h3><p><img src="http://ooszy.cco.vin/img/blog-note/image-20210831164942581.png?x-oss-process=style/pictureProcess1" alt="image-20210831164942581"></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
        donate<span class="token operator">:</span> <span class="token punctuation">{</span>
            onlineList<span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5BF9\u4E8E\u5728\u7EBF\u652F\u4ED8\uFF0C\u8BF7\u81EA\u884C\u5199\u652F\u4ED8\u63A5\u53E3\uFF0C\u6211\u5E76\u6CA1\u6709\u63D0\u4F9B\uFF0C\u53EA\u662F\u63D0\u4F9B\u4E00\u4E2A\u5E03\u5C40\uFF0C\u7EC4\u4EF6\u4F4D\u7F6Edocs/.vuepress/theme/lib/client/components/global/Donate.vue</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://pay.cco.vin/pay/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u5168\u90E8\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5168\u90E8\u914D\u7F6E" aria-hidden="true">#</a> \u5168\u90E8\u914D\u7F6E</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>module.exports = <span class="token punctuation">{</span>

    <span class="token key atrule">themeConfig</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">donate</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>

            //\u8D5E\u8D4F\u9875\u9762\uFF0C\u652F\u4ED8\u4E8C\u7EF4\u7801\uFF0C\u63A8\u8350\u653E\u7F6E\u4E24\u5F20\u56FE\u7247\u94FE\u63A5
            <span class="token key atrule">donateImg</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/wxpay.png&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/zfbpay.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>

            //\u662F\u5426\u5728\u6587\u7AE0\u9875\u9762\u663E\u793A\u8D5E\u8D4F \u9ED8\u8BA4\u663E\u793A
            <span class="token key atrule">articlePage</span><span class="token punctuation">:</span> <span class="token boolean important">true</span><span class="token punctuation">,</span>

            //\u662F\u5426\u5728\u5173\u4E8E\u9875\u9762\u663E\u793A \u9ED8\u8BA4\u663E\u793A
            <span class="token key atrule">aboutPage</span><span class="token punctuation">:</span> <span class="token boolean important">true</span><span class="token punctuation">,</span>

            //\u663E\u793A\u5728\u8D5E\u8D4F\u9875\u9762\u7684\u4FE1\u606F
            <span class="token key atrule">donateProduct</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    //\u540D\u5B57
                    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5976\u8336&quot;</span><span class="token punctuation">,</span>

                    //\u56FE\u7247\u5730\u5740
                    <span class="token key atrule">img</span><span class="token punctuation">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/nc.jpeg&quot;</span><span class="token punctuation">,</span>

                    //\u4EF7\u683C
                    <span class="token key atrule">price</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span>

                    //\u524D\u7F00
                    <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;$&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5168\u5473\u5976\u8336&quot;</span><span class="token punctuation">,</span>
                    <span class="token key atrule">img</span><span class="token punctuation">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-note/image-20210911233612031.png?&quot;</span><span class="token punctuation">,</span>
                    <span class="token key atrule">price</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
                    <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;\uFFE5&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>

            //\u662F\u5426\u663E\u793A\u5728\u7EBF\u652F\u4ED8\u7684\u8BA2\u5355\u4FE1\u606F\uFF0C\u5982\u679C\u9700\u8981\u5F00\u542F\uFF0C\u8BF7\u81EA\u5DF1\u5199\u652F\u4ED8\u63A5\u53E3\uFF0C\u81EA\u5DF1\u4FEE\u6539\u6E90\u7801\uFF0C\u9ED8\u8BA4\u5173\u95ED
            <span class="token key atrule">onlineList</span><span class="token punctuation">:</span> <span class="token boolean important">true</span><span class="token punctuation">,</span>

            //\u7528\u6237\u8D5E\u8D4F\u5217\u8868\u6570\u7EC4
            <span class="token key atrule">donateList</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    //\u7528\u6237\u540D
                    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;qsyyke&quot;</span><span class="token punctuation">,</span>

                    //\u8D5E\u8D4F\u4FE1\u606F
                    <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;\u6587\u7AE0\u5199\u7684\u975E\u5E38\u597D&quot;</span><span class="token punctuation">,</span>

                    //\u7528\u6237\u5934\u50CF
                    <span class="token key atrule">img</span><span class="token punctuation">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/nc.jpeg&quot;</span><span class="token punctuation">,</span>

                    //\u6253\u8D4F\u91D1\u989D
                    <span class="token key atrule">price</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>

                    //\u91D1\u989D\u524D\u7F00
                    <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;\uFFE5&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;\u521D\u5C18&quot;</span><span class="token punctuation">,</span>
                    <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;\u4E3B\u9898\u592A\u68D2\u4E86&quot;</span><span class="token punctuation">,</span>
                    <span class="token key atrule">img</span><span class="token punctuation">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/nc.jpeg&quot;</span><span class="token punctuation">,</span>
                    <span class="token key atrule">price</span><span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                    <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;\uFFE5&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div><h2 id="\u7EC4\u4EF6\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u4EE3\u7801" aria-hidden="true">#</a> \u7EC4\u4EF6\u4EE3\u7801</h2><p>https://github.com/vuepress-aurora/vuepress-theme-aurora/blob/master/Aurora-theme/lib/client/components/global/Donate.vue</p><h2 id="\u7EC4\u4EF6\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u4F7F\u7528" aria-hidden="true">#</a> \u7EC4\u4EF6\u4F7F\u7528</h2><p>\u6B64\u7EC4\u4EF6\u662F\u4E00\u4E2A\u5168\u5C40\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Donate</span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u9876\u90E8\u56FE\u7247\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9876\u90E8\u56FE\u7247\u914D\u7F6E" aria-hidden="true">#</a> \u9876\u90E8\u56FE\u7247\u914D\u7F6E</h2>`,28),k=u("\u9876\u90E8\u56FE\u7247\u914D\u7F6E");function m(g,d){const n=s("RouterLink");return a(),p(c,null,[b,e("p",null,[t(n,{to:"/feature/image.html"},{default:l(()=>[k]),_:1})])],64)}var q=r(i,[["render",m]]);export{q as default};

import{e as n}from"./app.b97705f9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u4E3B\u9898\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u4E3B\u9898\u76EE\u5F55\u7ED3\u6784</h1><h2 id="\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784" aria-hidden="true">#</a> \u7ED3\u6784</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500CHANGELOG.md #\u66F4\u65B0\u65E5\u5FD7
\u251C\u2500deploy-dist.sh
\u251C\u2500deploy.sh
\u251C\u2500package-lock.json
\u251C\u2500package.json
\u251C\u2500postcss.config.js
\u251C\u2500README.md
\u251C\u2500docs
|  |- #Markdown\u6587\u4EF6
|  \u251C\u2500.vuepress
|  |     \u251C\u2500config.js
|  |     \u251C\u2500themeConfig.js #\u4E3B\u9898\u914D\u7F6E
|  |     \u251C\u2500theme
|  |     |   \u251C\u2500package.json
|  |     |   \u251C\u2500lib
|  |     |   |  \u251C\u2500shared
|  |     |   |  \u251C\u2500node
|  |     |   |  |  \u251C\u2500auroraTheme.js #\u4E3B\u9898\u5165\u53E3\u6587\u4EF6
|  |     |   |  |  \u251C\u2500auroraTheme.ts
|  |     |   |  |  \u251C\u2500utils
|  |     |   |  \u251C\u2500client client\u914D\u7F6E
|  |     |   |  |   \u251C\u2500clientAppEnhance.d.ts
|  |     |   |  |   \u251C\u2500clientAppEnhance.js
|  |     |   |  |   \u251C\u2500utils
|  |     |   |  |   \u251C\u2500styles
|  |     |   |  |   |   \u251C\u2500theme.style.css #\u4E3B\u9898\u9ED8\u8BA4\u6837\u5F0F\u914D\u7F6E
|  |     |   |  |   \u251C\u2500public
|  |     |   |  |   |   \u251C\u2500js
|  |     |   |  |   |   | \u251C\u2500network.js #axios\u5C01\u88C5
|  |     |   |  |   |   | \u251C\u2500tag.js #\u83B7\u53D6\u6587\u7AE0\u6240\u6709tag\u6807\u7B7E\u5DE5\u5177
|  |     |   |  |   |   | \u251C\u2500store #vuex
|  |     |   |  |   |   \u251C\u2500fonts #\u4E3B\u9898\u9ED8\u8BA4\u4F7F\u7528\u7684\u5B57\u4F53
|  |     |   |  |   \u251C\u2500layouts
|  |     |   |  |   |    \u251C\u2500404.vue
|  |     |   |  |   |    \u2514Layout.vue
|  |     |   |  |   \u251C\u2500composables
|  |     |   |  |   \u251C\u2500components #\u4E3B\u9898\u7EC4\u4EF6
|  |     |   |  |   |     \u251C\u2500global #\u88AB\u6CE8\u518C\u4E3A\u5168\u5C40\u7684\u7EC4\u4EF6
|  |     |   |  |   |     \u251C\u2500child #\u5B50\u7EC4\u4EF6
|  |     \u251C\u2500styles #\u8986\u76D6\u4E3B\u9898\u9ED8\u8BA4\u6837\u5F0F\u6587\u4EF6 
|  |     |   \u251C\u2500palette.css #\u5B9A\u4E49Css\u53D8\u91CF
|  |     |   \u251C\u2500index.css #\u6837\u5F0F\u6587\u4EF6\u7528\u4E8E\u8986\u76D6\u9ED8\u8BA4\u6837\u5F0F\u6216\u6DFB\u52A0\u989D\u5916\u6837\u5F0F\uFF0C\u56E0\u6B64\u5B83\u4E00\u822C\u4F1A\u5728\u4F60\u4E3B\u9898\u6837\u5F0F\u7684\u672B\u5C3E\u5F15\u5165
|  |     \u251C\u2500public #\u9759\u6001\u6587\u4EF6
|  |     |   \u251C\u2500avatar.png
|  |     |   \u251C\u2500navbar.js
|  |     |   \u2514themeConfig.js
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531" aria-hidden="true">#</a> \u8DEF\u7531</h2><p>\u4E3B\u9898\u9664\u4E86vuepress\u63D0\u4F9B\u7684\u8DEF\u7531\u4E4B\u5916\uFF0C\u8FD8\u52A0\u5165\u4E86<code>/tag,/about,/link,/mood</code>\u56DB\u4E2A\u8DEF\u7531</p><table><thead><tr><th>\u8DEF\u7531</th><th style="text-align:center;"></th></tr></thead><tbody><tr><td>/tag</td><td style="text-align:center;">\u5206\u7C7B\u548C\u6807\u7B7E\u9875\u9762</td></tr><tr><td>/link</td><td style="text-align:center;">\u53CB\u60C5\u94FE\u63A5\u9875\u9762</td></tr><tr><td>/about</td><td style="text-align:center;">\u5173\u4E8E\u9875\u9762</td></tr><tr><td>/mood</td><td style="text-align:center;">\u5FC3\u60C5\u9875\u9762</td></tr></tbody></table>`,6);function r(l,p){return e}var c=s(a,[["render",r]]);export{c as default};

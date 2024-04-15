import{_ as e,c as a,o as t,a4 as i}from"./chunks/framework.B2EPA2lv.js";const g=JSON.parse('{"title":"二进制插件","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/plugin_binary.md","filePath":"zh/guide/plugin_binary.md","lastUpdated":1713161852000}'),o={name:"zh/guide/plugin_binary.md"},d=i('<h1 id="二进制插件" tabindex="-1">二进制插件 <a class="header-anchor" href="#二进制插件" aria-label="Permalink to &quot;二进制插件&quot;">​</a></h1><p>二进制插件是一类插件，主要用于：</p><ul><li>定位可执行文件的位置并判断可执行文件是否存在</li><li>依据实际需求调用可执行文件，并封装输入的预处理和输出的后置处理逻辑</li></ul><h2 id="共享和独享" tabindex="-1">共享和独享 <a class="header-anchor" href="#共享和独享" aria-label="Permalink to &quot;共享和独享&quot;">​</a></h2><p>共享的二进制插件主要在<code>$TEXMACS_PATH/plugins/binary</code>里面，一个可执行文件对应一个源代码文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$TEXMACS_PATH/plugins/binary/progs/binary/&lt;name&gt;.scm</span></span></code></pre></div><p>比如Ghostscript的gs命令对应的源代码在</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$TEXMACS_PATH/plugins/binary/progs/binary/gs.scm</span></span></code></pre></div><p>独享的二进制插件在</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$TEXMACS_PATH/plugins/&lt;name&gt;/progs/binary/&lt;name&gt;.scm</span></span></code></pre></div><p>比如Octave插件的可执行文件对应的源代码在</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$TEXMACS_PATH/plugins/octave/progs/binary/octave.scm</span></span></code></pre></div><h2 id="三要素" tabindex="-1">三要素 <a class="header-anchor" href="#三要素" aria-label="Permalink to &quot;三要素&quot;">​</a></h2><table><thead><tr><th>函数</th><th>用途</th></tr></thead><tbody><tr><td><code>(find-binary-xyz)</code></td><td>定位xyz可执行文件的位置，如果不存在，则返回<code>(url-none)</code></td></tr><tr><td><code>(has-binary-xyz?)</code></td><td>判断xyz可执行文件是否存在，如果存在，返回<code>#t</code>，如果不存在，返回<code>#f</code></td></tr><tr><td><code>(version-binary-xyz?)</code></td><td>返回xyz可执行文件的版本，如果该可执行文件不存在，返回空字符串，如果存在，则返回包含版本信息的字符串</td></tr></tbody></table><h2 id="find-binary-xyz-详解" tabindex="-1"><code>(find-binary-xyz)</code>详解 <a class="header-anchor" href="#find-binary-xyz-详解" aria-label="Permalink to &quot;`(find-binary-xyz)`详解&quot;">​</a></h2><ul><li>如果配置项<code>plugin:binary</code>为<code>off</code>，则<code>(find-binary-xyz)</code>返回<code>(url-none)</code><ul><li>如果配置项<code>plugin:binary:xyz</code>不是<code>default</code>，则检测该配置项中的路径是否存在，如果存在，就返回xyz可执行文件的路径 <ul><li>如果xyz.scm定义的候选路径<code>(xyz-binary-candidates)</code>存在，则返回该候选路径 <ul><li>最终，直接在系统路径中查找xyz可执行文件</li></ul></li></ul></li></ul></li></ul><p>二进制插件作者只需要关注<code>(xyz-binary-candidates)</code>的实现是否合理即可。配置项<code>plugin:binary</code>目前（1.2.5.2）只支持使用Scheme代码<code>(set-preference &quot;plugin:binary&quot; &quot;/path/to/binary/xyz&quot;)</code>配置。</p><h2 id="帮助-插件-二进制" tabindex="-1">帮助<code>-&gt;</code>插件<code>-&gt;</code>二进制 <a class="header-anchor" href="#帮助-插件-二进制" aria-label="Permalink to &quot;帮助`-&gt;`插件`-&gt;`二进制&quot;">​</a></h2><p>在墨干中点击<code>帮助-&gt;插件-&gt;二进制</code>，可以找到三段可运行的Scheme代码片段：</p><ol><li>如何定位某一个二进制插件的路径</li><li>如何自定义某一个二进制插件的路径</li><li>如何禁用所有的二进制插件</li></ol>',20),n=[d];function s(c,l,r,p,h,u){return t(),a("div",null,n)}const y=e(o,[["render",s]]);export{g as __pageData,y as default};
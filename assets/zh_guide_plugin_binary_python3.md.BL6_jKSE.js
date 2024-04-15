import{_ as a,c as e,o as t,a4 as n}from"./chunks/framework.B2EPA2lv.js";const u=JSON.parse('{"title":"Python3二进制插件","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/plugin_binary_python3.md","filePath":"zh/guide/plugin_binary_python3.md","lastUpdated":1713161852000}'),i={name:"zh/guide/plugin_binary_python3.md"},o=n(`<h1 id="python3二进制插件" tabindex="-1">Python3二进制插件 <a class="header-anchor" href="#python3二进制插件" aria-label="Permalink to &quot;Python3二进制插件&quot;">​</a></h1><ul><li>可执行文件名：python3</li><li>插件源代码： <ul><li><a href="https://codeberg.org/XmacsLabs/mogan/src/branch/branch-1.2/TeXmacs/plugins/binary/progs/binary/python3.scm" target="_blank" rel="noreferrer">Codeberg</a></li><li><a href="https://gitee.com/XmacsLabs/mogan/blob/branch-1.2/TeXmacs/plugins/binary/progs/binary/python3.scm" target="_blank" rel="noreferrer">Gitee</a></li><li><a href="https://github.com/XmacsLabs/mogan/blob/branch-1.2/TeXmacs/plugins/binary/progs/binary/python3.scm" target="_blank" rel="noreferrer">Github</a></li></ul></li></ul><h2 id="如何安装python-3" tabindex="-1">如何安装Python 3 <a class="header-anchor" href="#如何安装python-3" aria-label="Permalink to &quot;如何安装Python 3&quot;">​</a></h2><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><p>前往<a href="https://www.python.org" target="_blank" rel="noreferrer">Python官网</a>下载安装包并安装。</p><p>如果用户没有按照默认路径安装，则需要手动将<code>python3.exe</code>所在目录添加到PATH中。</p><h3 id="macos-linux" tabindex="-1">macOS/Linux <a class="header-anchor" href="#macos-linux" aria-label="Permalink to &quot;macOS/Linux&quot;">​</a></h3><p>系统自带，无需安装。</p><h2 id="如何自定义python解释器" tabindex="-1">如何自定义Python解释器 <a class="header-anchor" href="#如何自定义python解释器" aria-label="Permalink to &quot;如何自定义Python解释器&quot;">​</a></h2><p>可通过自定义Python 3二进制插件的方式使用自定义的Python解释器。</p><p>其中的关键在于替换<code>(find-binary-python3)</code>的实现：</p><div class="language-scheme vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scheme</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tm-define (find-binary-python3)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (system-&gt;url </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/path/to/your/python3/interpreter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><p>具体如何自定义Python3二进制插件，请参考文档：<a href="./plugin_binary.html">二进制插件</a>。</p>`,13),r=[o];function s(h,l,p,c,d,y){return t(),e("div",null,r)}const _=a(i,[["render",s]]);export{u as __pageData,_ as default};
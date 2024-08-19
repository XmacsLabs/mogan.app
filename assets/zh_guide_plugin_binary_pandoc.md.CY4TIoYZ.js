import{_ as a,c as e,o as n,a4 as o}from"./chunks/framework.B2EPA2lv.js";const g=JSON.parse('{"title":"Pandoc 二进制插件","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/plugin_binary_pandoc.md","filePath":"zh/guide/plugin_binary_pandoc.md","lastUpdated":1724036813000}'),i={name:"zh/guide/plugin_binary_pandoc.md"},s=o('<h1 id="pandoc-二进制插件" tabindex="-1">Pandoc 二进制插件 <a class="header-anchor" href="#pandoc-二进制插件" aria-label="Permalink to &quot;Pandoc 二进制插件&quot;">​</a></h1><ul><li>可执行文件名：pandoc</li><li>插件源代码： <ul><li><a href="https://codeberg.org/XmacsLabs/mogan/src/branch/branch-1.2/TeXmacs/plugins/binary/progs/binary/pandoc.scm" target="_blank" rel="noreferrer">Codeberg</a></li><li><a href="https://gitee.com/XmacsLabs/mogan/blob/branch-1.2/TeXmacs/plugins/binary/progs/binary/pandoc.scm" target="_blank" rel="noreferrer">Gitee</a></li><li><a href="https://github.com/XmacsLabs/mogan/blob/branch-1.2/TeXmacs/plugins/binary/progs/binary/pandoc.scm" target="_blank" rel="noreferrer">Github</a></li></ul></li></ul><ul><li>功能：支持<code>文档转换-&gt;导出到多种格式</code></li></ul><ul><li>墨干：<code>&gt;= v1.2.8</code></li></ul><h2 id="如何安装-pandoc" tabindex="-1">如何安装 Pandoc <a class="header-anchor" href="#如何安装-pandoc" aria-label="Permalink to &quot;如何安装 Pandoc&quot;">​</a></h2><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><p>使用<code>Chocolatey</code>安装：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>choco install pandoc</span></span></code></pre></div><p>使用<code>winget</code>安装：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>winget install --source winget --exact --id JohnMacFarlane.Pandoc</span></span></code></pre></div><h3 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h3><p>使用<code>brew install pandoc</code>安装。</p><h3 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><p>在Debian bookworm中，使用如下命令安装：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo apt install pandoc</span></span></code></pre></div>',15),t=[s];function c(l,r,d,p,h,u){return n(),e("div",null,t)}const m=a(i,[["render",c]]);export{g as __pageData,m as default};
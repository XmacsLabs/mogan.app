import{_ as e,c as n,a2 as o,o as i}from"./chunks/framework.YPpNXepj.js";const u=JSON.parse('{"title":"Pandoc 二进制插件","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/plugin_binary_pandoc.md","filePath":"zh/guide/plugin_binary_pandoc.md","lastUpdated":1734875134000}'),l={name:"zh/guide/plugin_binary_pandoc.md"};function c(s,a,d,t,r,p){return i(),n("div",null,a[0]||(a[0]=[o('<h1 id="pandoc-二进制插件" tabindex="-1">Pandoc 二进制插件 <a class="header-anchor" href="#pandoc-二进制插件" aria-label="Permalink to &quot;Pandoc 二进制插件&quot;">​</a></h1><ul><li>可执行文件名：pandoc</li><li>插件源代码： <ul><li><a href="https://codeberg.org/XmacsLabs/mogan/src/branch/branch-1.2/TeXmacs/plugins/binary/progs/binary/pandoc.scm" target="_blank" rel="noreferrer">Codeberg</a></li><li><a href="https://gitee.com/XmacsLabs/mogan/blob/branch-1.2/TeXmacs/plugins/binary/progs/binary/pandoc.scm" target="_blank" rel="noreferrer">Gitee</a></li><li><a href="https://github.com/XmacsLabs/mogan/blob/branch-1.2/TeXmacs/plugins/binary/progs/binary/pandoc.scm" target="_blank" rel="noreferrer">Github</a></li></ul></li></ul><ul><li>功能：支持<code>文档转换-&gt;导出到多种格式</code></li></ul><ul><li>墨干：<code>&gt;= v1.2.8</code></li></ul><h2 id="pandoc介绍" tabindex="-1">Pandoc介绍 <a class="header-anchor" href="#pandoc介绍" aria-label="Permalink to &quot;Pandoc介绍&quot;">​</a></h2><ul><li><strong>文件转换</strong>：Pandoc 是一个强大的工具，可以在多种标记格式之间进行转换，包括 Markdown、LaTeX、HTML 等。</li><li><strong>Markdown 扩展</strong>：Pandoc 支持多种有用的 Markdown 语法扩展，如文档元数据、脚注、表格、定义列表、上标和下标、删除线、增强的有序列表等。</li><li><strong>数学公式</strong>：支持 LaTeX 数学公式，可以通过 MathJax 或 MathML 等多种方法在 HTML 中渲染数学公式。</li><li><strong>自动引用和书目</strong>：Pandoc 包含一个强大的系统，可以自动生成引用和书目，支持多种引用格式和书目数据格式。</li></ul><h2 id="如何安装-pandoc" tabindex="-1">如何安装 Pandoc <a class="header-anchor" href="#如何安装-pandoc" aria-label="Permalink to &quot;如何安装 Pandoc&quot;">​</a></h2><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><p>使用包安装工具：</p><ul><li>使用<code>Chocolatey</code>安装：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>choco install pandoc</span></span></code></pre></div><ul><li>使用<code>winget</code>安装：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>winget install --source winget --exact --id JohnMacFarlane.Pandoc</span></span></code></pre></div><p>使用安装程序： 下载并运行Pandoc的安装程序，它会自动将Pandoc安装到系统路径中。</p><p>安装位置： 通常在 <code>C:\\Program Files\\Pandoc\\pandoc.exe</code>。</p><h3 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h3><p>使用<code>brew install pandoc</code>安装。</p><p>安装位置： 通常在 <code>/usr/local/bin/pandoc</code>。</p><h3 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><p>在Debian bookworm中，使用如下命令安装：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo apt install pandoc</span></span></code></pre></div><p>也可以使用Conda进行安装：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>conda install -c conda-forge pandoc</span></span></code></pre></div><p>安装位置： 通常在 <code>/usr/bin/pandoc</code> 或 <code>/usr/local/bin/pandoc</code>。</p><h3 id="如何验证是否安装成功" tabindex="-1">如何验证是否安装成功？ <a class="header-anchor" href="#如何验证是否安装成功" aria-label="Permalink to &quot;如何验证是否安装成功？&quot;">​</a></h3><p>要验证 Pandoc 是否成功安装，可以按照以下步骤操作：</p><ul><li>命令行检查： <ul><li>打开命令行终端（Windows 的 CMD 或 PowerShell，macOS 的 Terminal，Linux 的 Shell）。</li><li>输入 pandoc -v 或 pandoc --version，查看 Pandoc 版本信息。如果显示版本号，则表示安装成功。</li></ul></li><li>转换测试： <ul><li>创建一个简单的 Markdown 文件（例如 test.md），内容可以是 # Hello, Pandoc!。</li><li>在命令行中运行 pandoc test.md -o test.pdf，将 Markdown 文件转换为 PDF。如果生成了 test.pdf 文件，则表示 Pandoc 工作正常。</li></ul></li><li>路径检查： <ul><li>确认 Pandoc 的安装路径已添加到系统的环境变量中。可以在命令行中输入 echo $PATH（Linux 和 macOS）或 echo %PATH%（Windows），查看 Pandoc 的安装路径是否包含在内。</li></ul></li></ul>',27)]))}const b=e(l,[["render",c]]);export{u as __pageData,b as default};

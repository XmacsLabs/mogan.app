import{_ as a,c as t,a2 as i,o as n}from"./chunks/framework.YPpNXepj.js";const p=JSON.parse('{"title":"Octave Plugin","description":"","frontmatter":{},"headers":[],"relativePath":"guide/plugin_octave.md","filePath":"guide/plugin_octave.md","lastUpdated":1734875134000}'),o={name:"guide/plugin_octave.md"};function l(s,e,r,c,d,u){return n(),t("div",null,e[0]||(e[0]=[i('<h1 id="octave-plugin" tabindex="-1">Octave Plugin <a class="header-anchor" href="#octave-plugin" aria-label="Permalink to &quot;Octave Plugin&quot;">​</a></h1><p>It is built-in in v1.2.5 LTS, it is no longer built-in since v1.2.7.</p><p>Video Tutorial in Chinese：<a href="https://www.bilibili.com/video/BV1gK421a7CK/" target="_blank" rel="noreferrer">零基础墨干08：用Octave插件学线性代数</a></p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>The Octave plugin relies on the <a href="./plugin_binary_gs.html">Ghostscript Binary Plugin</a>. Please install Ghostscript according to the documentation first and then check <code>Help -&gt; Plugins -&gt; Octave</code> to ensure that the plots in the documentation can be rendered correctly.</p><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><p>Go to the <a href="https://octave.org" target="_blank" rel="noreferrer">Octave official website</a>, download and install Octave 5.2.0.</p><p>For example, download the Octave 5.2.0 installation package provided by the USTC open source software mirror:</p><ul><li><a href="http://mirrors.ustc.edu.cn/gnu/octave/windows/octave-5.2.0_1-w64-installer.exe" target="_blank" rel="noreferrer">http://mirrors.ustc.edu.cn/gnu/octave/windows/octave-5.2.0_1-w64-installer.exe</a></li><li><a href="http://mirrors.ustc.edu.cn/gnu/octave/windows/octave-5.2.0_1-w64-installer.exe.sig" target="_blank" rel="noreferrer">http://mirrors.ustc.edu.cn/gnu/octave/windows/octave-5.2.0_1-w64-installer.exe.sig</a></li></ul><h3 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>brew install octave</span></span></code></pre></div><h3 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><p>On Debian and its derivatives, use the following command to install:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo apt install octave</span></span></code></pre></div><h2 id="tips" tabindex="-1">Tips <a class="header-anchor" href="#tips" aria-label="Permalink to &quot;Tips&quot;">​</a></h2><ol><li>Windows: The plotting functionality of Octave versions 6.x and above does not work properly in Mogan. <ul><li>We will work on making Mogan compatible with the new versions of Octave in the future, and contributions from the community are welcome.</li></ul></li><li>Ubuntu: Octave installed using snap cannot work with Mogan. <ul><li>This is due to the mechanism of snap, so it is not recommended to install Octave using snap.</li></ul></li></ol><h2 id="check-built-in-doc-at-help-plugins-octave" tabindex="-1">Check built-in Doc at <code>Help -&gt; Plugins -&gt; Octave</code> <a class="header-anchor" href="#check-built-in-doc-at-help-plugins-octave" aria-label="Permalink to &quot;Check built-in Doc at `Help -&gt; Plugins -&gt; Octave`&quot;">​</a></h2>',17)]))}const g=a(o,[["render",l]]);export{p as __pageData,g as default};

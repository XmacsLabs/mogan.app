import{_ as a,c as e,o as t,V as s}from"./chunks/framework.kgZeNgQl.js";const g=JSON.parse('{"title":"如何格式化代码","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/Format.md","filePath":"zh/guide/Format.md","lastUpdated":1708944850000}'),o={name:"zh/guide/Format.md"},i=s('<h1 id="如何格式化代码" tabindex="-1">如何格式化代码 <a class="header-anchor" href="#如何格式化代码" aria-label="Permalink to &quot;如何格式化代码&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>elvish bin/format</span></span></code></pre></div><h2 id="clang-format" tabindex="-1">clang-format <a class="header-anchor" href="#clang-format" aria-label="Permalink to &quot;clang-format&quot;">​</a></h2><p>clang-format版本需要固定为16.0.x。</p><h3 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><p>我们需要手动安装llvm 16.</p><h3 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>brew install clang-format</span></span></code></pre></div><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>scoop install llvm@16.0.6</span></span></code></pre></div>',10),n=[i];function l(c,r,d,h,p,m){return t(),e("div",null,n)}const _=a(o,[["render",l]]);export{g as __pageData,_ as default};
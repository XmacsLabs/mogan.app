import{_ as a,c as e,o as s,V as t}from"./chunks/framework.kgZeNgQl.js";const k=JSON.parse('{"title":"在macOS上开发","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/Develop_on_macOS.md","filePath":"zh/guide/Develop_on_macOS.md","lastUpdated":1706900867000}'),i={name:"zh/guide/Develop_on_macOS.md"},p=t(`<h1 id="在macos上开发" tabindex="-1">在macOS上开发 <a class="header-anchor" href="#在macos上开发" aria-label="Permalink to &quot;在macOS上开发&quot;">​</a></h1><h2 id="使用xmake" tabindex="-1">使用xmake <a class="header-anchor" href="#使用xmake" aria-label="Permalink to &quot;使用xmake&quot;">​</a></h2><h3 id="第一步-安装xmake和xrepo" tabindex="-1">第一步：安装xmake和xrepo <a class="header-anchor" href="#第一步-安装xmake和xrepo" aria-label="Permalink to &quot;第一步：安装xmake和xrepo&quot;">​</a></h3><p>对于Homebrew:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>brew install xmake qt</span></span>
<span class="line"><span>brew install pkg-config</span></span></code></pre></div><p>有时候需要保持xrepo是最新的，以保证使用最新的依赖的构建定义。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>xrepo update-repo</span></span></code></pre></div><p>有时需要xmake使用最新的版本才能正常编译，在xmake 2.8.3中存在这个问题，后面的版本应该不会有这个问题。</p><p>可以用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>xmake update -s dev</span></span></code></pre></div><p>来切换到最新版本</p><h3 id="第二步-配置" tabindex="-1">第二步：配置 <a class="header-anchor" href="#第二步-配置" aria-label="Permalink to &quot;第二步：配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>xmake config --yes -c --qt=/opt/homebrew/share/qt/</span></span></code></pre></div><p>请按需调整Qt相关目录，并不一定是<code>/opt/homebrew/share/qt</code>。</p><h3 id="第三步-构建" tabindex="-1">第三步：构建 <a class="header-anchor" href="#第三步-构建" aria-label="Permalink to &quot;第三步：构建&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>xmake build research</span></span></code></pre></div><h3 id="第四步-测试" tabindex="-1">第四步：测试 <a class="header-anchor" href="#第四步-测试" aria-label="Permalink to &quot;第四步：测试&quot;">​</a></h3><p>见<a href="./Test.html">如何测试</a>。</p><h3 id="第五步-启动墨干" tabindex="-1">第五步：启动墨干 <a class="header-anchor" href="#第五步-启动墨干" aria-label="Permalink to &quot;第五步：启动墨干&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run research</span></span></code></pre></div>`,20),o=[p];function n(l,c,h,d,r,m){return s(),e("div",null,o)}const b=a(i,[["render",n]]);export{k as __pageData,b as default};

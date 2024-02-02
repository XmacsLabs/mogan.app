import{_ as a,c as e,o as s,V as t}from"./chunks/framework.kgZeNgQl.js";const k=JSON.parse('{"title":"Developing on GNU/Linux","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Develop_on_Linux.md","filePath":"guide/Develop_on_Linux.md","lastUpdated":1706900867000}'),n={name:"guide/Develop_on_Linux.md"},i=t(`<h1 id="developing-on-gnu-linux" tabindex="-1">Developing on GNU/Linux <a class="header-anchor" href="#developing-on-gnu-linux" aria-label="Permalink to &quot;Developing on GNU/Linux&quot;">​</a></h1><h2 id="using-xmake" tabindex="-1">Using xmake <a class="header-anchor" href="#using-xmake" aria-label="Permalink to &quot;Using xmake&quot;">​</a></h2><h3 id="step-1-install-xmake-and-qt-5" tabindex="-1">Step 1: Install xmake and Qt 5 <a class="header-anchor" href="#step-1-install-xmake-and-qt-5" aria-label="Permalink to &quot;Step 1: Install xmake and Qt 5&quot;">​</a></h3><p>On Debian or Debian derivatives:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo add-apt-repository ppa:xmake-io/xmake</span></span>
<span class="line"><span>sudo apt install xmake</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo apt update</span></span>
<span class="line"><span>sudo apt install --yes build-essential libfontconfig1-dev qtbase5-dev libqt5svg5-dev</span></span></code></pre></div><p>On Fedora and RHEL derivatives:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo dnf update</span></span>
<span class="line"><span>sudo dnf groupinstall &quot;C Development Tools and Libraries&quot;</span></span>
<span class="line"><span>sudo dnf install git wget unzip glibc-static libstdc++-static qt5-qtbase-devel qt5-qtsvg-devel fontconfig-devel</span></span>
<span class="line"><span>wget https://xmake.io/shget.text -O - | bash #install xmake</span></span></code></pre></div><p>Sometimes, we need the latest xrepo:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xrepo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update-repo</span></span></code></pre></div><h3 id="step-2-compile" tabindex="-1">Step 2: Compile <a class="header-anchor" href="#step-2-compile" aria-label="Permalink to &quot;Step 2: Compile&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config --yes</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build research</span></span></code></pre></div><p>If Qt SDK is not found, we can config it manually:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>xmake config --qt=/usr/lib/\`arch\`-linux-gnu/qt5/</span></span></code></pre></div><p>To switch to Qt 6, just:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>xmake config --qt=/usr/lib/\`arch\`-linux-gnu/qt6/</span></span></code></pre></div><h3 id="step-3-run-tests" tabindex="-1">Step 3: Run tests <a class="header-anchor" href="#step-3-run-tests" aria-label="Permalink to &quot;Step 3: Run tests&quot;">​</a></h3><p>See <a href="./Test.html">How to test</a>。</p><h3 id="step-4-install-to-build-packages-app-mogan" tabindex="-1">Step 4: Install to <code>build/packages/app.mogan</code> <a class="header-anchor" href="#step-4-install-to-build-packages-app-mogan" aria-label="Permalink to &quot;Step 4: Install to \`build/packages/app.mogan\`&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install research</span></span></code></pre></div><h3 id="step-5-launch-mogan-research" tabindex="-1">Step 5: Launch Mogan Research <a class="header-anchor" href="#step-5-launch-mogan-research" aria-label="Permalink to &quot;Step 5: Launch Mogan Research&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run research</span></span></code></pre></div><h3 id="use-vscode-to-help-code-completion" tabindex="-1">Use VSCode to help code completion <a class="header-anchor" href="#use-vscode-to-help-code-completion" aria-label="Permalink to &quot;Use VSCode to help code completion&quot;">​</a></h3><p>Install VSCode, Clangd and the Clangd plugin for VSCode. Then execute in the mogan folder</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>xmake project -k compile_commands</span></span></code></pre></div><p>This will generate a compile_commands.json file under the mogan folder, and Clangd will read it to understand the organizational structure of the project, so as to avoid the error that the header file cannot be found.</p>`,25),l=[i];function p(o,d,h,c,r,u){return s(),e("div",null,l)}const m=a(n,[["render",p]]);export{k as __pageData,m as default};

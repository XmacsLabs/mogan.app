import{_ as s,c as a,o as i,V as e}from"./chunks/framework.kgZeNgQl.js";const u=JSON.parse('{"title":"Developing for Windows","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Develop_on_Windows.md","filePath":"guide/Develop_on_Windows.md","lastUpdated":1706900867000}'),n={name:"guide/Develop_on_Windows.md"},t=e(`<h1 id="developing-for-windows" tabindex="-1">Developing for Windows <a class="header-anchor" href="#developing-for-windows" aria-label="Permalink to &quot;Developing for Windows&quot;">​</a></h1><h2 id="using-xmake-on-windows" tabindex="-1">Using xmake on Windows <a class="header-anchor" href="#using-xmake-on-windows" aria-label="Permalink to &quot;Using xmake on Windows&quot;">​</a></h2><p>This project uses variant length array, so cannot be compiled by msvs. It is recommended to use MinGW as compiler.</p><h3 id="step-1-install-xmake-and-qt-5" tabindex="-1">Step 1: Install xmake and Qt 5 <a class="header-anchor" href="#step-1-install-xmake-and-qt-5" aria-label="Permalink to &quot;Step 1: Install xmake and Qt 5&quot;">​</a></h3><p>Developers should install such tools:</p><ul><li><a href="https://www.qt.io/download" target="_blank" rel="noreferrer">Qt</a><ul><li>only Qt library for MinGW 8.1.0 is needed, it is ok to use Qt 5 or Qt 6 (Qt 5.15.2 is a good choice and can be adapted to MinGW 8.1.0). Other Qt framework like Qt script is not needed.</li></ul></li><li><a href="https://github.com/msys2/msys2-installer/releases" target="_blank" rel="noreferrer">msys environment</a></li><li>MinGW 8.1.0 compiler (see below). <ul><li>It is recommended to install MinGW 8.1.0, which can be found in Qt Tools.</li></ul></li><li>xmake (see below).</li></ul><p>Xmake can be installed either from msys pacman, or from standalone installer for windows.</p><p>It is recommended to use pacman, and other packages need to be installed in this way</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pacman -Sy xmake</span></span>
<span class="line"><span>pacman -Sy make</span></span>
<span class="line"><span>pacman -Sy git</span></span>
<span class="line"><span>pacman -Sy mingw-w64-x86_64-7zip</span></span></code></pre></div><p><strong>CAUTIONS</strong>: MinGW in msys pacman is too new thus incompatible for this project. Please install MinGW 8.1.0 for this project, from either Qt installer or from chocolate.</p><p>Sometimes, we need the latest xrepo:</p><div class="language-pwsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">pwsh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>xrepo update-repo</span></span></code></pre></div><h3 id="step-2-compile" tabindex="-1">Step 2: Compile <a class="header-anchor" href="#step-2-compile" aria-label="Permalink to &quot;Step 2: Compile&quot;">​</a></h3><p>Run these command in msys environment.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>xmake config --yes --verbose --diagnosis --plat=mingw --mingw=&lt;newly installed qt address&gt;/Tools/mingw810_64 --qt=&lt;newly installed qt address&gt;/5.x.x/mingw81_64</span></span></code></pre></div><p>The above example is using MinGW 8.1.0 installed by the Qt installer</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build research</span></span></code></pre></div><h3 id="step-3-run-unit-test" tabindex="-1">Step 3: Run unit test <a class="header-anchor" href="#step-3-run-unit-test" aria-label="Permalink to &quot;Step 3: Run unit test&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">windeployqt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --compiler-runtime</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./build/mingw/x86_64/release/ -printsupport</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run --yes --verbose --diagnosis --group=tests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run --yes --verbose --diagnosis --group=keneral_tests</span></span></code></pre></div><h3 id="step-4-install-to-build-packages" tabindex="-1">Step 4: Install to <code>build/packages</code> <a class="header-anchor" href="#step-4-install-to-build-packages" aria-label="Permalink to &quot;Step 4: Install to \`build/packages\`&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build research</span></span></code></pre></div><h3 id="step-5-launch-mogan-research" tabindex="-1">Step 5: Launch Mogan Research <a class="header-anchor" href="#step-5-launch-mogan-research" aria-label="Permalink to &quot;Step 5: Launch Mogan Research&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run research</span></span></code></pre></div><h3 id="optional-vscode-support" tabindex="-1">Optional: Vscode support <a class="header-anchor" href="#optional-vscode-support" aria-label="Permalink to &quot;Optional: Vscode support&quot;">​</a></h3><p>Developers using Vscode can use xmake to generate <code>compile_command.json</code>, which can be recognized by C/C++ plugin to provide semantics highlight and so on.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project --kind=compile_commands ./.vscode</span></span></code></pre></div><p>then modify <code>.vscode/c_cpp_properties.json</code> to tell C++ lsp configs of this project:</p><div class="language-jsonc vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsonc</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;configurations&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // other configs</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;compilerPath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your configuration&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;cppStandard&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gnu++17&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;intelliSenseMode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;windows-gcc-x64&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;compileCommands&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.vscode/compile_commands.json&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,28),l=[t];function p(o,h,d,r,c,k){return i(),a("div",null,l)}const m=s(n,[["render",p]]);export{u as __pageData,m as default};

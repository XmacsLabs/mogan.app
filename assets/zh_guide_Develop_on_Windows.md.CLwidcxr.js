import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.B2EPA2lv.js";const u=JSON.parse('{"title":"Windows平台开发指南","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/Develop_on_Windows.md","filePath":"zh/guide/Develop_on_Windows.md","lastUpdated":1711805232000}'),n={name:"zh/guide/Develop_on_Windows.md"},t=e(`<h1 id="windows平台开发指南" tabindex="-1">Windows平台开发指南 <a class="header-anchor" href="#windows平台开发指南" aria-label="Permalink to &quot;Windows平台开发指南&quot;">​</a></h1><h2 id="第一步-安装xmake" tabindex="-1">第一步：安装xmake <a class="header-anchor" href="#第一步-安装xmake" aria-label="Permalink to &quot;第一步：安装xmake&quot;">​</a></h2><p>首先安装Scoop，然后用Scoop安装xmake：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>scoop install xmake</span></span></code></pre></div><h2 id="第二步-xmake-config" tabindex="-1">第二步：xmake config <a class="header-anchor" href="#第二步-xmake-config" aria-label="Permalink to &quot;第二步：xmake config&quot;">​</a></h2><p>第一次运行<code>xmake config</code>的时候，可能需要启动有管理员权限的Windows终端，因为libgit2需要这个权限。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>xmake config --yes -vD -m releasedbg --plat=windows</span></span></code></pre></div><p>后面由于已经缓存了libgit2，直接使用普通的Windows终端就可以了。</p><h2 id="第三步-编译" tabindex="-1">第三步：编译 <a class="header-anchor" href="#第三步-编译" aria-label="Permalink to &quot;第三步：编译&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> research</span></span></code></pre></div><h2 id="第四步-测试" tabindex="-1">第四步：测试 <a class="header-anchor" href="#第四步-测试" aria-label="Permalink to &quot;第四步：测试&quot;">​</a></h2><p>见<a href="./Test.html">如何测试</a>。</p><h2 id="第五步-启动墨干" tabindex="-1">第五步：启动墨干 <a class="header-anchor" href="#第五步-启动墨干" aria-label="Permalink to &quot;第五步：启动墨干&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> research</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> research</span></span></code></pre></div><h3 id="在vscode下开发-可选" tabindex="-1">在VSCode下开发（可选） <a class="header-anchor" href="#在vscode下开发-可选" aria-label="Permalink to &quot;在VSCode下开发（可选）&quot;">​</a></h3><p>如果用VSCode来开发，xmake可以生成<code>compile_command.json</code>文件。如果提供这份文件，VSCode的C++插件会根据这个文件来识别项目结构，提供正确的语义高亮等语义提示。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --kind=compile_commands</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./.vscode</span></span></code></pre></div><p>修改<code>.vscode/c_cpp_properties.json</code>文件才能使刚刚生成的<code>compile_command.json</code>文件生效。</p><div class="language-jsonc vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsonc</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,19),l=[t];function p(h,o,d,k,c,r){return i(),a("div",null,l)}const E=s(n,[["render",p]]);export{u as __pageData,E as default};

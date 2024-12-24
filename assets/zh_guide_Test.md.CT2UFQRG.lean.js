import{_ as a,c as t,a2 as i,o as e}from"./chunks/framework.YPpNXepj.js";const o=JSON.parse('{"title":"如何测试","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/Test.md","filePath":"zh/guide/Test.md","lastUpdated":1735023376000}'),l={name:"zh/guide/Test.md"};function n(h,s,r,p,k,d){return e(),t("div",null,s[0]||(s[0]=[i(`<h1 id="如何测试" tabindex="-1">如何测试 <a class="header-anchor" href="#如何测试" aria-label="Permalink to &quot;如何测试&quot;">​</a></h1><p>对于开发者来说，一共有两种测试方式，其一为单元测试，其二为集成测试。</p><h2 id="单元测试" tabindex="-1">单元测试 <a class="header-anchor" href="#单元测试" aria-label="Permalink to &quot;单元测试&quot;">​</a></h2><h3 id="c-单元测试" tabindex="-1">C++单元测试 <a class="header-anchor" href="#c-单元测试" aria-label="Permalink to &quot;C++单元测试&quot;">​</a></h3><table tabindex="0"><thead><tr><th>命令</th><th>作用</th></tr></thead><tbody><tr><td>bin/test_all</td><td>执行所有C++测试</td></tr><tr><td>bin/test_kernel_l1</td><td>执行Kernel L1的C++测试</td></tr><tr><td>bin/test_kernel_l2</td><td>执行Kernel L2的C++测试</td></tr><tr><td>bin/test_only [target-name]</td><td>只执行某一个单元测试</td></tr></tbody></table><h2 id="scheme-测试" tabindex="-1">Scheme 测试 <a class="header-anchor" href="#scheme-测试" aria-label="Permalink to &quot;Scheme 测试&quot;">​</a></h2><p>执行Scheme测试：</p><ul><li>可以使用 <code>xmake run --yes -vD --group=scheme_tests</code> 执行所有Scheme测试.</li></ul><h2 id="集成测试" tabindex="-1">集成测试 <a class="header-anchor" href="#集成测试" aria-label="Permalink to &quot;集成测试&quot;">​</a></h2><p>集成测试的代码和测试文档都放在<code>TeXmacs/tests</code>这个目录下。执行集成测试前，必须构建并安装墨干到临时目录：</p><ul><li>可以使用<code>bin/test_all_doc</code>执行所有集成测试</li><li>可以使用<code>xmake run [target-name]</code>执行单个集成测试，比如<code>xmake run 9_1</code></li><li>可以使用<code>xmake run --yes -vD --group=integration_tests</code>执行所有集成测试。</li></ul><h2 id="列出所有target" tabindex="-1">列出所有target <a class="header-anchor" href="#列出所有target" aria-label="Permalink to &quot;列出所有target&quot;">​</a></h2><p>下面的命令行可以列出所有target，其中以<code>_test</code>结尾的是C++的单元测试，形如<code>[0_9]*_[0_9]*</code>的是集成测试。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> targets</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">color_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        parsexml_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          qt_utilities_test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">string_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       converter_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         17_1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">list_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         keyword_parser_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    image_files_test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xml_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          9_1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    array_test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">12_1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              mogan_install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          queryxml_test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">point_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        tree_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              hashmap_test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rectangle_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    mogan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  env_length_test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">url_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          libkernel_l1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           analyze_test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">libkernel_l2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      hashset_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           libmogan</span></span></code></pre></div>`,14)]))}const c=a(l,[["render",n]]);export{o as __pageData,c as default};
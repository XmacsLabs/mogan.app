import{_ as t,c as s,o as e,V as a}from"./chunks/framework.kgZeNgQl.js";const _=JSON.parse('{"title":"How to test","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Test.md","filePath":"guide/Test.md","lastUpdated":1706900867000}'),i={name:"guide/Test.md"},n=a(`<h1 id="how-to-test" tabindex="-1">How to test <a class="header-anchor" href="#how-to-test" aria-label="Permalink to &quot;How to test&quot;">​</a></h1><p>For Developers, there are two way of testing: Unit tests and Integration tests</p><h2 id="unit-tests" tabindex="-1">Unit Tests <a class="header-anchor" href="#unit-tests" aria-label="Permalink to &quot;Unit Tests&quot;">​</a></h2><h3 id="c-unit-tests" tabindex="-1">C++ Unit Tests <a class="header-anchor" href="#c-unit-tests" aria-label="Permalink to &quot;C++ Unit Tests&quot;">​</a></h3><table><thead><tr><th>命令</th><th>作用</th></tr></thead><tbody><tr><td>bin/test_all</td><td>Run all C++ tests</td></tr><tr><td>bin/test_kernel_l1</td><td>Run C++ tests in Kernel L1</td></tr><tr><td>bin/test_kernel_l2</td><td>Run C++ tests in Kernel L2</td></tr><tr><td>bin/test_only [target-name]</td><td>Only run the specified C++ unit test</td></tr></tbody></table><h3 id="scheme-unit-tests" tabindex="-1">Scheme Unit Tests <a class="header-anchor" href="#scheme-unit-tests" aria-label="Permalink to &quot;Scheme Unit Tests&quot;">​</a></h3><p>Build, install and launch Mogan Research, and then insert the Scheme session to run the Scheme unit tests:</p><div class="language-scheme vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scheme</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(run-all-tests)</span></span></code></pre></div><h2 id="integration-tests" tabindex="-1">Integration Tests <a class="header-anchor" href="#integration-tests" aria-label="Permalink to &quot;Integration Tests&quot;">​</a></h2><p>Source code and docs for integration tests are in <code>TeXmacs/tests</code>. To run integration tests, one must build and install mogan:</p><ul><li>use <code>bin/test_all_doc</code> to run all integration tests</li><li>use <code>xmake run [target-name]</code> to run the specific integration test, eg. <code>xmake run 9_1</code></li></ul><h2 id="list-all-targets" tabindex="-1">List all targets <a class="header-anchor" href="#list-all-targets" aria-label="Permalink to &quot;List all targets&quot;">​</a></h2><p>Use the following commandline to list all targets. The targets (ending with <code>_test</code>) are C++ unit tests, the targets like <code>[0_9]*_[0_9]*</code> are integration tests.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xmake show -l targets</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">color_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        parsexml_test          qt_utilities_test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">string_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       converter_test         </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">17</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">_1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">list_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         keyword_parser_test    image_files_test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xml_test</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          9</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">_1                    array_test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">12_1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              mogan_install          queryxml_test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">point_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        tree_test              hashmap_test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rectangle_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    mogan                  env_length_test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">url_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          libkernel_l1           analyze_test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">libkernel_l2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      hashset_test           libmogan</span></span></code></pre></div>`,14),l=[n];function h(r,o,d,p,k,c){return e(),s("div",null,l)}const u=t(i,[["render",h]]);export{_ as __pageData,u as default};

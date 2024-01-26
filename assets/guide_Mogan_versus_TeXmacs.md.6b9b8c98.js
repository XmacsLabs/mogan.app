import{_ as e,c as t,o as a,V as o}from"./chunks/framework.249fa23d.js";const g=JSON.parse('{"title":"Mogan v.s. GNU TeXmacs","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Mogan_versus_TeXmacs.md","filePath":"guide/Mogan_versus_TeXmacs.md","lastUpdated":1706288731000}'),d={name:"guide/Mogan_versus_TeXmacs.md"},r=o('<h1 id="mogan-v-s-gnu-texmacs" tabindex="-1">Mogan v.s. GNU TeXmacs <a class="header-anchor" href="#mogan-v-s-gnu-texmacs" aria-label="Permalink to &quot;Mogan v.s. GNU TeXmacs&quot;">​</a></h1><h2 id="product-positioning" tabindex="-1">Product Positioning <a class="header-anchor" href="#product-positioning" aria-label="Permalink to &quot;Product Positioning&quot;">​</a></h2><p>Mogan is a libre STEM suite, consists of Mogan Research, Mogan Code and Mogan Beamer. Mogan Research is one of the distribution of GNU TeXmacs, both of them are libre scientific editing platform.</p><p>Mogan Research as a distribution of GNU TeXmacs will try to keep the user experience as the same. Mogan Research and GNU TeXmacs could be regarded as the same kind product released by different teams. Mogan Code and Mogan Beamer will be brand-new products based on the layout engine and structural editing in GNU TeXmacs.</p><p>In this article, we will discuss the differences of Mogan Research and GNU TeXmacs in details:</p><h2 id="preferences" tabindex="-1">Preferences <a class="header-anchor" href="#preferences" aria-label="Permalink to &quot;Preferences&quot;">​</a></h2><table><thead><tr><th>Option</th><th>Mogan Research</th><th>GNU TeXmacs</th></tr></thead><tbody><tr><td>General<code>-&gt;</code>Interactive Questions</td><td><code>In pop-up windows</code></td><td><code>On the footer</code></td></tr><tr><td>Other<code>-&gt;</code>Document updates run</td><td><code>Three times</code></td><td><code>Once</code></td></tr><tr><td>Convert<code>-&gt;</code>Pdf<code>-&gt;</code>Expand beamer slides</td><td><code>on</code></td><td><code>off</code></td></tr></tbody></table><h2 id="new-documents" tabindex="-1">New Documents <a class="header-anchor" href="#new-documents" aria-label="Permalink to &quot;New Documents&quot;">​</a></h2><h3 id="enable-focus-layout-margins-as-on-paper-by-default" tabindex="-1">Enable <code>Focus-&gt;Layout-&gt;Margins as on paper</code> by default <a class="header-anchor" href="#enable-focus-layout-margins-as-on-paper-by-default" aria-label="Permalink to &quot;Enable `Focus-&gt;Layout-&gt;Margins as on paper` by default&quot;">​</a></h3><p>Why:</p><ol><li>Provide experiences like new document in WPS or MS Word for new TeXmacs user</li><li><code>Insert-&gt;Note-&gt;Marginal note</code> works as expected with margins as on paper</li><li>When <code>View-&gt;Zoom</code> is 100%, the default page is almost the same with the exported PDF or the printed A4 paper (actually, because there are reserved and hidden 10px on each side on screen, the screen paper is slightly smaller than the actual A4 paper)</li></ol><h3 id="enable-focus-layout-no-page-numbers-by-default" tabindex="-1">Enable <code>Focus-&gt;Layout-&gt;No page numbers</code> by default <a class="header-anchor" href="#enable-focus-layout-no-page-numbers-by-default" aria-label="Permalink to &quot;Enable `Focus-&gt;Layout-&gt;No page numbers` by default&quot;">​</a></h3><p>Do not show page numbers to make it clean and tidy.</p><h2 id="shortcuts" tabindex="-1">Shortcuts <a class="header-anchor" href="#shortcuts" aria-label="Permalink to &quot;Shortcuts&quot;">​</a></h2><h3 id="structured-variants-circling-since-v1-2-3" tabindex="-1">Structured Variants Circling (since v1.2.3) <a class="header-anchor" href="#structured-variants-circling-since-v1-2-3" aria-label="Permalink to &quot;Structured Variants Circling (since v1.2.3)&quot;">​</a></h3><p>Add <code>A-S-up</code> and <code>A-S-down</code> for structured variants circling.</p><p>On Linux and Windows, <code>C-tab</code> and <code>C-S-tab</code> are reserved. On macOS, because we switched <code>structured:cmd</code> from <code>Option</code> to <code>Ctrl</code> and <code>C-tab</code> does not work, the shortcuts <code>C-tab</code> and <code>C-S-tab</code> do not work.</p><blockquote><p>Why: <code>C-tab</code>, <code>C-S-tab</code> and <code>A-S-tab</code> do not work on macOS, see <a href="https://bugreports.qt.io/browse/QTBUG-12232" target="_blank" rel="noreferrer">QTBUG-12232</a>.</p></blockquote><h2 id="graphics" tabindex="-1">Graphics <a class="header-anchor" href="#graphics" aria-label="Permalink to &quot;Graphics&quot;">​</a></h2><table><thead><tr><th>Action</th><th>Mogan Research</th><th>GNU TeXmacs</th></tr></thead><tbody><tr><td>Insert<code>-&gt;</code>Image<code>-&gt;</code>Draw image</td><td>Show grid</td><td>Do not show grid</td></tr><tr><td>Insert<code>-&gt;</code>Image<code>-&gt;</code>Ink here</td><td>Show grid</td><td>Do not show grid</td></tr><tr><td>Insert<code>-&gt;</code>Grid<code>-&gt;</code>Unit length</td><td>2</td><td>1</td></tr></tbody></table><h2 id="texmacs-home-path" tabindex="-1">TEXMACS_HOME_PATH <a class="header-anchor" href="#texmacs-home-path" aria-label="Permalink to &quot;TEXMACS_HOME_PATH&quot;">​</a></h2><table><thead><tr><th>OS</th><th>Mogan Research</th><th>GNU TeXmacs</th></tr></thead><tbody><tr><td>Linux</td><td><code>$XDG_DATA_HOME/XmacsLabs</code></td><td><code>$HOME/.TeXmacs</code></td></tr><tr><td></td><td><code>$HOME/.local/share/XmacsLabs</code></td><td></td></tr><tr><td>macOS</td><td><code>$HOME/Library/Application Support/XmacsLabs</code></td><td><code>$HOME/.TeXmacs</code></td></tr><tr><td>Windows</td><td><code>%APPDATA%\\XmacsLabs</code></td><td><code>%APPDATA%\\TeXmacs</code></td></tr><tr><td></td><td><code>C:\\Users\\[User name]\\AppData\\Roaming\\XmacsLabs</code></td><td><code>C:\\Users\\[User name]\\AppData\\Roaming\\TeXmacs</code></td></tr></tbody></table><blockquote><p>Why: Using different TEXMACS_HOME_PATH is to make it possible to install both Mogan Research and GNU TeXmacs. The changes on Linux and macOS is to meet the standards on Linux and macOS.</p></blockquote>',23),c=[r];function s(n,i,h,l,u,m){return a(),t("div",null,c)}const b=e(d,[["render",s]]);export{g as __pageData,b as default};
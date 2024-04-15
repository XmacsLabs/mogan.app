import{_ as a,c as e,o as t,a4 as d}from"./chunks/framework.B2EPA2lv.js";const f=JSON.parse('{"title":"PDF数据插件","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/plugin_data_pdf.md","filePath":"zh/guide/plugin_data_pdf.md","lastUpdated":1713161852000}'),o={name:"zh/guide/plugin_data_pdf.md"},c=d('<h1 id="pdf数据插件" tabindex="-1">PDF数据插件 <a class="header-anchor" href="#pdf数据插件" aria-label="Permalink to &quot;PDF数据插件&quot;">​</a></h1><h2 id="texmacs-pdf" tabindex="-1">TeXmacs -&gt; PDF <a class="header-anchor" href="#texmacs-pdf" aria-label="Permalink to &quot;TeXmacs -&gt; PDF&quot;">​</a></h2><p>导出为PDF的选项在<code>编辑-&gt;首选项-&gt;转换-&gt;PDF</code>中。</p><h3 id="选项-展开幻灯片中的可折叠对象" tabindex="-1">选项：<code>展开幻灯片中的可折叠对象</code> <a class="header-anchor" href="#选项-展开幻灯片中的可折叠对象" aria-label="Permalink to &quot;选项：`展开幻灯片中的可折叠对象`&quot;">​</a></h3><p>该选项默认关闭。</p><p>在将幻灯片导出为PDF时，展开可折叠对象会依次展开折叠对象，将墨干中的一页幻灯片变为多页幻灯片。</p><p>如果幻灯片中包含会话，那么会话中的每个段落将在导出PDF时依次执行，比如在幻灯片某一页中写了一个包含三个段落的Maxima会话，那么导出为PDF时，这一页会变成三页，这三个段落在这三页中会依次执行。</p><h3 id="选项-pdf版本号" tabindex="-1">选项：<code>PDF版本号</code> <a class="header-anchor" href="#选项-pdf版本号" aria-label="Permalink to &quot;选项：`PDF版本号`&quot;">​</a></h3><p>默认为1.4。一般建议不做PDF版本号切换，除非有特定需求。</p><h2 id="pdf-texmacs" tabindex="-1">PDF -&gt; TeXmacs <a class="header-anchor" href="#pdf-texmacs" aria-label="Permalink to &quot;PDF -&gt; TeXmacs&quot;">​</a></h2><p>使用<code>文件-&gt;导出-&gt;可编辑PDF</code>可以在导出PDF的同时将文档作为附件嵌入到PDF文档。然后使用<code>文件-&gt;导入-&gt;可编辑PDF</code>就可以导入此类PDF。</p><p>该功能的使用场景在于，墨干用户使用墨干创作了TeXmacs文档，想分享给朋友，但是朋友并不是墨干的用户。此时，墨干用户可以直接导出可编辑的PDF文档，分享给朋友，然后如果朋友有编辑改PDF内容的需求，那么可以推荐Ta下载墨干编辑。</p>',12),r=[c];function p(i,s,n,_,h,l){return t(),e("div",null,r)}const m=a(o,[["render",p]]);export{f as __pageData,m as default};
import{_ as t,c as e,o as a,V as s}from"./chunks/framework.249fa23d.js";const u=JSON.parse('{"title":"插件","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/Plugins.md","filePath":"zh/guide/Plugins.md","lastUpdated":1706441211000}'),o={name:"zh/guide/Plugins.md"},n=s('<h1 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h1><p>墨干的插件按照是否内置，可分为内置插件和社区插件两种。按照功能分为：</p><ul><li><strong>数据插件</strong>：处理数据格式转换的插件，比如HTML数据插件、LaTeX数据插件</li><li><strong>语言插件</strong>：为不同的自然语言提供字典和样式定制，比如中文插件</li><li><strong>图像插件</strong>：为不同格式的图像提供格式转换，比如PDF图像插件</li><li><strong>代码插件</strong>：提供编程语言的代码高亮定义和相应的样式、编辑器定制，比如Python代码插件</li><li><strong>会话插件</strong>：提供外部系统的集成，且带有上下文，比如Maxima插件</li></ul><p>例如：PDF插件有两种，分别为PDF数据插件和PDF图像插件。PDF数据插件负责将带有TeXmacs文档附件的PDF转换（提取附件）为TeXmacs文档或者将TeXmacs文档转换（导出）为PDF文档。PDF图像插件则负责将PDF矢量图转换为PNG格式，以在墨干中正确渲染。</p>',4),i=[n];function r(l,_,c,d,P,g){return a(),e("div",null,i)}const h=t(o,[["render",r]]);export{u as __pageData,h as default};

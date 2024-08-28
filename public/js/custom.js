// 这里编写自定义js脚本；将被静态引入到页面中
{/* Ai摘要自定义头部 */}
<Script src="https://gitee.com/past-dust/code-repository/raw/master/PastKingGPT.js" strategy="lazyOnload" />

{/* Ai摘要 */}
<Script id="chuckle-post-ai" strategy="lazyOnload">
  {`
    new ChucklePostAI({
      el: '#post>#notion-article',
      summary_directly: true,
      rec_method: 'web',
      pjax: true,
    })
  `}
</Script>

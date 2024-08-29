// 这里编写自定义js脚本；将被静态引入到页面中
<Html lang={BLOG.LANG}>
    <Head>
        {/* 将你的外部脚本放在这里 */}
        <script src="https://pan.ltde.cn/directlink/1/codes/PastKingGPT.js"></script>
        {/* 预加载字体 */}
        {BLOG.FONT_AWESOME && (
            <>
                <link
                    rel='preload'
                    href={BLOG.FONT_AWESOME}
                    as='style'
                    crossOrigin='anonymous'
                />
                <link
                    rel='stylesheet'
                    href={BLOG.FONT_AWESOME}
                    crossOrigin='anonymous'
                    referrerPolicy='no-referrer'
                />
            </>
        )}
    </Head>

    <body>
        <Main />
        <NextScript />
        {/* 将你的内联脚本放在这里 */}
        <script data-pjax defer>
            {`
              new ChucklePostAI({
                el: '#notion-article',
                summary_directly: true,
                rec_method: 'web',
                key: '123456',
                pjax: true,
              });
            `}
        </script>
    </body>
</Html>

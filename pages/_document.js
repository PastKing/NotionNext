// eslint-disable-next-line @next/next/no-document-import-in-page
import BLOG from '@/blog.config'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
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
                el: '#post>#notion-article',
                summary_directly: true,
                rec_method: 'web',
                pjax: true,
              });
            `}
          </script>
        </body>
      </Html>
    )
  }
}

export default MyDocument

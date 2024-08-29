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
           {/* 添加内联脚本 */}
          <script>
            {`
              let tianliGPT_postSelector = '#post #article-wrapper > article > section';
              let tianliGPT_key = '5Q5mpqRK5DkwT1X9Gi5e';
            `}
          </script>
          
          {/* 加载外部 JavaScript */}
          <script src="https://gitee.com/past-dust/code-repository/raw/master/PastKingGPT.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument

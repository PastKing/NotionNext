// 这里编写自定义js脚本；将被静态引入到页面中
<html lang="en">
<head>
    <meta name="baidu-site-verification" content="codeva-KwSrUBpKl5" />
    <meta name="baidu-site-verification" content="codeva-dHm5TTCkvq" />

    <script src="https://gitee.com/past-dust/code-repository/raw/master/PastKingGPT.js"></script>

</head>
<body>
    <script data-pjax defer>
        new ChucklePostAI({
            // 文章内容所在的元素属性的选择器, 也是AI挂载的容器, AI将会挂载到该容器的最前面
            el: '#post>#notion-article',
            summary_directly: true,
            rec_method: 'web',
            // 若网站开启了 PJAX, 则开启
            pjax: true,
        })
    </script>
</body>
</html>

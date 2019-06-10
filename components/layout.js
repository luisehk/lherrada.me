import Head from 'next/head'
import Sidebar from './sidebar'

const Layout = props => (
  <>
    <Head>
      <title>Luis Herrada | Full Stack Engineer</title>
    	<meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta
        httpEquiv="X-UA-Compatible"
        content="ie=edge" />
      <link
        href="https://fonts.googleapis.com/css?family=Mada:200,300,400,500,600,700,900&display=swap"
        rel="stylesheet" />
      <link
        href="/static/css/index.css"
        rel="stylesheet" />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-141127632-1"></script>

      <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-141127632-1');
      `}} />
    </Head>

    <Sidebar current={props.current} />

    <div className="main">
      { props.title && <p className="main-title">{props.title}</p> }
      <div className="content">{props.children}</div>
    </div>

  </>
)

export default Layout

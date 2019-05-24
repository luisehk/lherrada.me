import Head from 'next/head'
import Sidebar from './sidebar'

const Layout = props => (
  <> 
    <Head>
      <title>Luis Herrada | Software Engineer</title>
    	<meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta
        http-equiv="X-UA-Compatible"
        content="ie=edge" />
      <link
        href="https://fonts.googleapis.com/css?family=Mada:200,300,400,500,600,700,900&display=swap"
        rel="stylesheet" />
      <link
        href="/static/css/index.css"
        rel="stylesheet" />

      <script dangerouslySetInnerHTML={{__html: `
        var _paq = window._paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u="//matomo.vordem.mx/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '3']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();
      `}} />
    </Head>

    <Sidebar />

    <div className="main">
      <p className="main-title">{props.title}</p>
      <div className="content">{props.children}</div>
    </div>

  </>
)

export default Layout
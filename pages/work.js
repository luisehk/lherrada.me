import Link from 'next/link'
import Layout from '../components/layout'

const Work = () => (
  <Layout title="Work" current="work">

    <div className="card">
      <div className="container container-big">
        <h4 className="title">Portfolio</h4>

        <p className="description">
          You can see some of my recent consulting work here.
          Most of it was developed using Django, React, Postgresql and Docker
          and is being used by real users right now.
        </p>

        <div className="portfolio">

          <div className="p-row">
            <div className="p-column">

              <a href="/static/img/portfolio/canou/00-canvas3-viability-Project-Full-Image-1.jpg" target="_blank">
                <img src="/static/img/portfolio/canou/thumbs/00-canvas3-viability-Project-Full-Image-1.jpg" />
              </a>

              <a href="/static/img/portfolio/canou/canou4.png" target="_blank">
                <img src="/static/img/portfolio/canou/thumbs/canou4.png" />
              </a>

              <a href="/static/img/portfolio/comex/image2.png" target="_blank">
                <img src="/static/img/portfolio/comex/thumbs/image2.png" />
              </a>

              <a href="/static/img/portfolio/santander/image5.png" target="_blank">
                <img src="/static/img/portfolio/santander/thumbs/image5.png" />
              </a>

            </div>
            <div className="p-column">

              <a href="/static/img/portfolio/sealedair/image7.png" target="_blank">
                <img src="/static/img/portfolio/sealedair/thumbs/image7.png" />
              </a>

              <a href="/static/img/portfolio/status/status1.png" target="_blank">
                <img src="/static/img/portfolio/status/thumbs/status1.png" />
              </a>

              <a href="/static/img/portfolio/status/status2.png" target="_blank">
                <img src="/static/img/portfolio/status/thumbs/status2.png" />
              </a>

              <a href="/static/img/portfolio/minute/minute1.png" target="_blank">
                <img src="/static/img/portfolio/minute/thumbs/minute1.png" />
              </a>

              <a href="/static/img/portfolio/minute/minute2.png" target="_blank">
                <img src="/static/img/portfolio/minute/thumbs/minute2.png" />
              </a>

              <a href="/static/img/portfolio/santander/image9.png" target="_blank">
                <img src="/static/img/portfolio/santander/thumbs/image9.png" />
              </a>

            </div>
            <div className="p-column">

              <a href="/static/img/portfolio/smartwatch/smartwatch.png" target="_blank">
                <img src="/static/img/portfolio/smartwatch/thumbs/smartwatch.png" />
              </a>

              <a href="/static/img/portfolio/tenoli/tenoli.png" target="_blank">
                <img src="/static/img/portfolio/tenoli/thumbs/tenoli.png" />
              </a>

              <a href="/static/img/portfolio/tenoli/tenoli2.png" target="_blank">
                <img src="/static/img/portfolio/tenoli/thumbs/tenoli2.png" />
              </a>

              <a href="/static/img/portfolio/sealedair/image3.png" target="_blank">
                <img src="/static/img/portfolio/sealedair/thumbs/image3.png" />
              </a>

              <a href="/static/img/portfolio/somosindustria/image1.png" target="_blank">
                <img src="/static/img/portfolio/somosindustria/thumbs/image1.png" />
              </a>

              <a href="/static/img/portfolio/fronesis/fronesis1.png" target="_blank">
                <img src="/static/img/portfolio/fronesis/thumbs/fronesis1.png" />
              </a>

              <a href="/static/img/portfolio/fronesis/fronesis2.png" target="_blank">
                <img src="/static/img/portfolio/fronesis/thumbs/fronesis2.png" />
              </a>

            </div>
          </div>

        </div>


      </div>
    </div>

  </Layout>
)

export default Work

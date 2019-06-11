import Link from 'next/link'
import Layout from '../components/layout'

const About = () => (
  <Layout title="About" current="about">

    <div className="card">
	    <div className="container container-big limited-width">
    		<h4 className="title">Background</h4>

	      <div className="description">
          <p>
            My name is Luis Herrada. I’m a Full Stack Engineer with 11+ years of experience
            and I’m currently working <a href="https://vordem.io" target="_blank">at Vordem</a>,
            a digital product agency I founded in 2016 with the missions of making businesses thrive
            through technology.
          </p>

          <p>
            I like to talk about Python, Linux, web development, DevOps, CI/CD, technical leadership,
            tech consultancy, product management and strategy. My career has pushed me into working on
            the intersection of technology, design and strategy.
          </p>

          <p>
            You can see <Link href="/work"><a>my portfolio</a></Link> or
            read <Link href="/blog"><a>my blog</a></Link> to have a better idea about what I do.
          </p>
        </div>

      	<h4 className="title">Interests</h4>

      	<div className="description">
          <p>
            When I’m not working you’ll find me playing the guitar, reading, practicing chess,
            playing some starcraft or spending time outside with my wife and/or friends. I’m also interested
            in education, business, astronomy, mental health and cooking.
          </p>
        </div>

      	<h4 className="title">Contact</h4>

	      <div className="description">
	        The best way to get in touch with me is email: <a href="mailto:luis@herrada.me">luis@herrada.me</a>.
	        You can also find me at <a href="https://github.com/luisehk" target="_blank">Github</a> or <a href="https://www.linkedin.com/in/luisehk/" target="_blank">LinkedIn</a>.
	      </div>
	    </div>
	  </div>

  </Layout>
)

export default About

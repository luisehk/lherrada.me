import Link from 'next/link'
import Layout from '../components/layout'

const About = () => (
  <Layout title="About" current="about">

    <div className="card">
	    <div className="container container-big">
    		<h4 className="title">Background</h4>

	      <div className="description">
          <p>
            I’m a Full Stack Engineer with 11+ years of experience
            and I’m currently working <a href="https://vordem.io" target="_blank">at Vordem</a>,
            a digital product agency I founded in 2016.
          </p>

          <p>
            I like to talk about Python, Linux, web development, DevOps, CI/CD, technical leadership, tech consultancy and product management.
          </p>
        </div>

      	<h4 className="title">Interests</h4>

      	<div className="description">
          <p>
            When I’m not working you’ll find me playing the guitar, reading, practicing chess, playing some starcraft
            or spending time outside with my wife and/or friends.
          </p>

          <p>
            I’m also interested in education, business,
            astronomy, mental health and cooking.
          </p>
        </div>

      	<h4 className="title">Contact</h4>

	      <div className="description">
	        The best way to get in touch with me is email: <a href="mailto:luis@herrada.me">luis@herrada.me</a>.
	        You can also find me at:

	        <ul>
	          <li>
	            <a href="https://github.com/luisehk" target="_blank">Github</a>
	          </li>
	          <li>
	            <a href="https://www.linkedin.com/in/luisehk/" target="_blank">LinkedIn</a>
	          </li>
	        </ul>
	      </div>
	    </div>
	  </div>

  </Layout>
)

export default About

import Link from 'next/link'
import Layout from '../components/layout'

const About = () => (
  <Layout title="About">
    
    <div className="card">
	    <div className="container container-big">
	      <h4 className="title">Background</h4>

	      <p className="description">
          I’m a Software Engineer with a focus on digital products, and I’m currently working <a href="https://vordem.io" target="_blank">at Vordem</a>. I like to talk about Python, Linux, developer productivity, product management and web development.
        </p>

	      <h4 className="title">Interests</h4>

	      <p className="description">
          When I’m not working you’ll find me playing the guitar, reading, practicing chess, playing some starcraft or spending time outside with my wife and/or friends. I’m also interested in education, entrepreneurship, astronomy, mental health and cooking.
        </p>

	      <h4 className="title">Contact</h4>

	      <div className="description">
	        The best way to get in touch with me is email: <a href="mailto:luis@herrada.me">luis@herrada.me</a>. You can also find me at:
	        <ul>
	          <li>
	            <a href="https://github.com/luisehk" target="_blank">Github</a>
	          </li>
	          <li>
	            <a href="https://www.linkedin.com/in/luisehk/" target="_blank">LinkedIn</a>
	          </li>
	          <li>
	            <a href="https://www.instagram.com/luisherradakelly/" target="_blank">Instagram</a>
	          </li>
	          <li>
	            <a href="https://www.chess.com/member/luisehk" target="_blank">Chess.com</a>
	          </li>
	        </ul>
	      </div>
	    </div>
	  </div>

  </Layout>
)

export default About
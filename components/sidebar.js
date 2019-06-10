import Link from 'next/link'

const Sidebar = props => (
  <div className="sidebar">
    <div className="profile">
      <img className="pic" src="/static/img/pp.jpg" />

      <p className="name">Luis Herrada</p>

      <p className="bio">I’m a Full Stack Engineer with a focus on digital products.</p>
    </div>

    <ul className="links">
      <li>
        <Link href="/about">
          <a
            className={props.current == 'about' ? 'current' : ''}>
            About
          </a>
        </Link>
      </li>
      <li>
        <Link href="/work">
          <a
            className={props.current == 'work' ? 'current' : ''}>
            Work
          </a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a
            className={props.current == 'blog' ? 'current' : ''}>
            Blog
          </a>
        </Link>
      </li>
    </ul>
  </div>
)

export default Sidebar

import Link from 'next/link'

const Sidebar = () => (
  <div className="sidebar">
    <div className="profile">
      <img className="pic" src="/static/img/pp.jpg" />

      <p className="name">Luis Herrada</p>

      <p className="bio">I’m a Software Engineer with a focus on digital products.</p>
    </div>

    <ul className="links">
      <li>
        <Link href="/">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/work">
          <a href="work.html">Work</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a href="about.html">About</a>
        </Link>
      </li>
    </ul>
  </div>
)

export default Sidebar
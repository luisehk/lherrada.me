import Link from 'next/link'
import Layout from '../components/layout'

const posts = [
  {
    thumbnail: '/static/img/subway-lines.png',
    title: 'The key difference between X and Y',
    description: 'Having done a lot of things, I’ve come to the realization that I need to write about things even though I don’t think of myself as such an interesting person. But here I go.',
    date: '17 may, 2019',
    length: '4 min read',
    category: 'technology'
  },
  {
    thumbnail: '/static/img/shattered-island.gif',
    title: 'The key difference between X and Y',
    description: 'Having done a lot of things, I’ve come to the realization that I need to write about things even though I don’t think of myself as such an interesting person. But here I go.',
    date: '17 may, 2019',
    length: '4 min read',
    category: 'technology'
  },
  {
    thumbnail: '/static/img/glitch.png',
    title: 'The key difference between X and Y',
    description: 'Having done a lot of things, I’ve come to the realization that I need to write about things even though I don’t think of myself as such an interesting person. But here I go.',
    date: '17 may, 2019',
    length: '4 min read',
    category: 'technology'
  },
]

const Index = () => (
  <Layout title="Blog">
    <div className="row">

      {posts.map((post, index) => {
        return <div className="column" key={index}>
          <div className="card">
            <div
              className="thumbnail"
              style={{
                backgroundImage: 'url(' + post.thumbnail + ')'
              }}>
            </div>
            <div className="container">
              <h4 className="title">{post.title}</h4>

              <p className="description">{post.description}</p>

              <span className="details">
                {post.date}
                <br />
                {post.length}
              </span>

              <span className="category">#{post.category}</span>
            </div>
          </div>
        </div>
      })}

    </div>
  </Layout>
)

export default Index
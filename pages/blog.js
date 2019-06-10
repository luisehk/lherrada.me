import Link from 'next/link'
import Layout from '../components/layout'
import React from 'react'
import loadPosts from '../tools/blog'


class Blog extends React.Component {
  static async getInitialProps() {
    return loadPosts()
  }

  render() {
    return (
      <Layout title="Blog">
        <div className="row">

          {this.props.posts.map(({ document: { data }, slug }) => {
            return <Link href={`/post/${slug}`} key={slug}>
              <a className="column block-link">
                <div className="card">
                  <div
                    className="thumbnail"
                    style={{
                      backgroundImage: 'url(' + data.thumbnail + ')'
                    }}>
                  </div>
                  <div className="container">
                    <h4 className="title">{data.title}</h4>

                    <p className="description">{data.description}</p>

                    <span className="details">
                      {data.date}
                      <br />
                      {data.length}
                    </span>

                    <span className="category">#{data.category}</span>
                  </div>
                </div>
              </a>
            </Link>
          })}

        </div>
      </Layout>
    )
  }
}

export default Blog

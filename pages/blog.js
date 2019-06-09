import Link from 'next/link'
import Layout from '../components/layout'
import matter from 'gray-matter'
import React from 'react'


class Blog extends React.Component {
  static async getInitialProps() {
    // load all .md files from ../posts
    let loadedFiles = require.context(
      '../posts', true, /\.md$/)

    // process them with gray-matter
    const posts = (ctx => {
      const keys = ctx.keys();
      const values = keys.map(ctx);

      const data = keys.map((key, index) => {
        // gather the filename and turn it into a slug
        const slug = key.replace(
          /^.*[\\\/]/, ''
        ).split('.').slice(0, -1).join('.')

        // value is an object the file content
        const value = values[index]

        // parse the document and its meta data
        const document = matter(value.default)

        // make the data available as props
        return {
          document,
          slug
        }
      })

      return data
    })(loadedFiles)

    return {
      posts
    }
  }

  render() {
    return (
      <Layout title="Blog">
        <div className="row">

          {this.props.posts.map(({ document: { data }, slug }) => {
            return <Link href={{ pathname: '/post', query: { id: slug } }} key={slug}>
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

import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

class Post extends React.Component {
  static async getInitialProps({ query }) {
    console.log('query', query)
    const post = await import(`../posts/${query.id}.md`)
    const document = matter(post.default)

    return {
      ...document
    }
  }

  render() {
    return (
      <Layout title="Blog" current="blog">
        <div className="card">
    	    <div className="container container-big">
            <h1 className="post-title">
              {this.props.data.title}
            </h1>

            <p className="post-data">
              {this.props.data.date} <br />
              {this.props.data.length}
            </p>

            <div className="post-content">
    	       <ReactMarkdown source={this.props.content} />
            </div>
    	    </div>
    	  </div>

      </Layout>
    )
  }
}

export default Post

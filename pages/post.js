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
      <Layout title={this.props.data.title}>
        <div className="card">
    	    <div className="container container-big">
    	      <ReactMarkdown source={this.props.content} />
    	    </div>
    	  </div>

      </Layout>
    )
  }
}

export default Post

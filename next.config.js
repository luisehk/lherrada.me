module.exports = {
  webpack: (config) => {
    config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader'
    });
    return config
  },
  exportPathMap: () => {
    const posts = [
      {slug: 'example-post'}
    ]

    // tranform the list of posts into a map of pages with the pathname `/post/:id`
    const pages = posts.reduce(
      (pages, post) =>
        Object.assign({}, pages, {
          [`/post/${post.slug}`]: {
            page: '/post',
            query: { id: post.slug }
          }
        }),
      {}
    )

    return Object.assign({}, pages, {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      '/work': { page: '/work' },
      '/about': { page: '/about' }
    })
  }
}

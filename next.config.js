module.exports = {
  webpack: (config) => {
    config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader'
    });
    return config
  },
  exportPathMap: () => {
    // here we should use ./tools/blog.loadPosts()
    // but next.config.js doesnt support babel,
    // so we need to add posts manually
    const posts = [
      {slug: '02-remote-work-best-practices'},
      {slug: '01-just-start-and-keep-practicing'}
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

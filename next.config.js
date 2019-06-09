module.exports = {
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      '/work': { page: '/work' },
      '/about': { page: '/about' }
    }
  },
  webpack: (config) => {
    config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader'
    });
    return config
  }
}

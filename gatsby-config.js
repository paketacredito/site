module.exports = {
  siteMetadata: {
    title: 'Paketá Crédito',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#15bae6',
        theme_color: '#15bae6',
        display: 'minimal-ui',
        icon: 'src/images/paketa-favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://paketa.us19.list-manage.com/subscribe/post?u=ef3af52f9f600355192e6cde4&amp;id=22b2a0b0ec', // see instructions section below
      },
    },
  ],
}

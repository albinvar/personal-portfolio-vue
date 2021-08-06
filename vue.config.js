module.exports = {
  
  pwa: {
    name: 'Albin Varghese',
    themeColor: '#311b92',
	iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      msTileImage: 'img/icons/ms-icon-144x144.png'
    },
     manifestOptions: {
      name: 'Albin Varghese',
      short_name: 'Albin Varghese',
      theme_color: '#284AFF',
      background_color: '#284AFF',
      start_url: '/',
      display: 'standalone',
      orientation: 'portrait',
      icons: [
        {
          src: './img/icons/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          src: './img/icons/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png'
        },
        {
          src: './img/icons/apple-icon-152x152.png',
          sizes: '152x152',
          type: 'image/png'
        },
        {
          src: './img/icons/ms-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
      ]
    }
 }
}
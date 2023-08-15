import Directory from './components/directory/directory.component';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Traditionals',
      imageUrl: 'https://images.shaadisaga.com/shaadisaga_production/photos/pictures/003/133/644/original/page.jpg?1640901251',
    },
    {
      id: 2,
      title: 'Westerns',
      imageUrl: 'https://c4.wallpaperflare.com/wallpaper/32/904/991/katrina-kaif-02-wallpaper-preview.jpg',
    },
    {
      id: 3,
      title: 'Brides',
      imageUrl: 'https://www.bollywoodshaadis.com/img/article-l-2022926817123061950000.jpg',
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://w0.peakpx.com/wallpaper/46/456/HD-wallpaper-brunette-ana-de-armas-is-wearing-black-dress-girls.jpg',  
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://w0.peakpx.com/wallpaper/513/978/HD-wallpaper-hrithik-roshan-indian-actor-portrait-hoot-indian-stars-bollywood.jpg',
    },
  ];

  return <Directory categories={categories} />;
};

export default App;
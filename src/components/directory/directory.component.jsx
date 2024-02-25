import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://2.bp.blogspot.com/-joEsBQD6mJg/Uy6jWrBymXI/AAAAAAAAAgs/7mieve_f-9c/s1600/katrina+kaif+kamli+hd+wallpaper.jpg',
    route: 'shop/hats'
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/sneakers'
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://w0.peakpx.com/wallpaper/46/456/HD-wallpaper-brunette-ana-de-armas-is-wearing-black-dress-girls.jpg',
    route: 'shop/womens'
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://w0.peakpx.com/wallpaper/513/978/HD-wallpaper-hrithik-roshan-indian-actor-portrait-hoot-indian-stars-bollywood.jpg',
    route: 'shop/mens'
  },
];

const Directory = () => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
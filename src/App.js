import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Intro from './component/Intro/Intro';
import Approach from './component/Approach/Approach';
import News from './component/News/News';
import Brands from './component/Brands/Brands';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';



const brandData = [
  { name: 'Lincrafi', logo: 'https://i.shgcdn.com/5587898d-3eb7-4185-8eed-586279b1040d/-/format/auto/-/preview/3000x3000/-/quality/lighter/' },
  { name: 'bassike', logo: 'https://i.shgcdn.com/59c8aaba-afd6-42c1-8666-14530fda0d2f/-/format/auto/-/preview/3000x3000/-/quality/lighter/' },
  { name: 'optical', logo: 'https://i.shgcdn.com/e21faa6c-8c28-4e40-bf6f-6169417bbf93/-/format/auto/-/preview/3000x3000/-/quality/lighter/' },
  { name: 'fcs', logo: 'https://i.shgcdn.com/2177bf0a-2189-4d74-9535-133964457712/-/format/auto/-/preview/3000x3000/-/quality/lighter/' },
  { name: 'shonajoy', logo: 'https://i.shgcdn.com/0814063f-d352-47ea-8462-bcb580a661f2/-/format/auto/-/preview/3000x3000/-/quality/lighter/' },
  { name: 'annathomas', logo: 'https://i.shgcdn.com/640f011e-7b16-4903-aee9-4fc7d760424e/-/format/auto/-/preview/3000x3000/-/quality/lighter/' },
  { name: 'billini', logo: 'https://i.shgcdn.com/88262a51-f48b-4199-93fd-0e5d7ff790ad/-/format/auto/-/preview/3000x3000/-/quality/lighter/s' },
  { name: 'dinosaur', logo: 'https://i.shgcdn.com/089c8405-0a0b-46a3-9633-bc8fcbd93857/-/format/auto/-/preview/3000x3000/-/quality/lighter/' },
  { name: 'siren', logo: 'https://i.shgcdn.com/8d6cabdb-97c9-49fa-bff4-217a7deb097f/-/format/auto/-/preview/3000x3000/-/quality/lighter/' },
  { name: 'whitefox', logo: 'https://i.shgcdn.com/e8b5c723-15e9-41d8-a420-838e3d329ee2/-/format/auto/-/preview/3000x3000/-/quality/lighter/' },
  { name: 'sheike', logo: 'https://i.shgcdn.com/c7e1607b-b6a1-45f7-9e2e-5f0fc2040291/-/format/auto/-/preview/3000x3000/-/quality/lighter/' },
  { name: 'ausreo', logo: 'https://i.shgcdn.com/61cad432-9f1f-4b0b-9575-bdfb55be17c3/-/format/auto/-/preview/3000x3000/-/quality/lighter/' },
]

const App = () => {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Approach />
      <News />
      <Brands brands={brandData} />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

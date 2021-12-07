import './home.css';
import React from 'react';
import { Card, col } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <img
        className="banner_img"
        src="https://github.com/ZionSS/NekoPedia-FrontEnd/blob/main/assets/Home_banner4.png?raw=true"
        alt="kj"
      />
      <Card className="card_home">
        <p className="cap_box"> C A T </p>
        <h1 className="text_box">Neko Pedia</h1>
        <h2 className="quote_box">"I Know I'm just a cat but...</h2>
        <h2 className="quote_box">If you feel sad, I'll be your smile</h2>
        <h2 className="quote_box">if you cry, I'll be your comfort.</h2>
        <h2 className="quote_box">And if someone breaks your heart</h2>
        <h2 className="quote_box">we can use mine to live.</h2>
        <h2 className="quote_box">I'LL ALWAYS BE BY YOUR SIDE."</h2>
        <d className="detail_box">
          Welcome to a website that collects general information about cats.
        </d>
      </Card>
    </div>
  );
}
export default Home;

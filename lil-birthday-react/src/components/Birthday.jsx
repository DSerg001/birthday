import "./style.css";
import image1 from "../assets/photo_5249191399063155964_y.jpg";
import image2 from "../assets/photo_5249191399063155963_x.jpg";
import image3 from "../assets/photo_5249191399063155965_x.jpg";

function BirthdayCard() {
  return (
    <>
      <div id="heart-container"></div>
      <header className="main-header">
        <h1 className="header-text">Happy Birthday Lils!</h1>
        <h4>12.08.2025</h4>
      </header>
      <main className="main-content">
        <div className="card">
          <div className="card-image-container">
            <img
              src="https://scontent.fevn6-5.fna.fbcdn.net/v/t39.30808-6/526617952_4312315735580855_1350021596918552277_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gSsgmqTjSMsQ7kNvwHnmcuO&_nc_oc=AdknmxczOPKe4bZ9_ZHMNIeF77N6AfBUc5OpC97cK3vioYjCoObWa0uIp1A6qLRdp5s&_nc_zt=23&_nc_ht=scontent.fevn6-5.fna&_nc_gid=MckZJjx3LYJ0O8twsTYeqg&oh=00_AfUorvCk4Vo38bqk5KqXJJlUs1Rj3UVBO_awIFYV--sOaQ&oe=68A0D6AC"
              alt="Поздравительная картинка"
            />
          </div>
          <div className="card-content">
            <h3>Շնորհավոր Ծնունդդ, իմ շատ սիրելի Լիլիթ!</h3>
            <p>
              Սիրելի՛ս, շնորհավորում եմ քեզ այս հրաշալի օրվա կապակցությամբ։
              Ցանկանում եմ քեզ երջանկություն, առողջություն, սեր ևորպեսզի
              յուրաքանչյուր օր լինի լի ուրախությամբ ու ժպիտներով։ Թո՛ղ բոլոր քո
              երազանքները կատարվեն։
            </p>
          </div>
        </div>
        <section className="image-gallery">
          <h2 className="section-title">Ես ու Դու...</h2>
          <div className="image-container">
            <img src={image1} alt="Image 1" />
          </div>
          <div className="image-container">
            <img src={image2} alt="Image 2" />
          </div>
          <div className="image-container">
            <img src={image3} alt="Image 3" />
          </div>
        </section>
        <section className="video-section">
          <h2 className="section-title">Քեզ համար նվեր...</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IYLmNLyXg0I?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </section>
      </main>
      <footer className="main-footer">
        <p>By Serg Danielyan Special For My Lil</p>
        <p>©2025</p>
      </footer>
    </>
  );
}

export default BirthdayCard;

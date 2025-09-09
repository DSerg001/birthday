import "./style.css";
import image1 from "../assets/photo_5249191399063155964_y.jpg";
import image2 from "../assets/photo_5249191399063155963_x.jpg";
import image3 from "../assets/photo_5249191399063155965_x.jpg";
import lilitImage from "../assets/Lilit-img.jpg";

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
            <img src={lilitImage} alt="Поздравительная картинка" />
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
            className="iframe"
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

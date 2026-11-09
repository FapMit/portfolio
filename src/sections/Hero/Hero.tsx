import "./Hero.css";
import maximImage from "../../assets/maxim.png";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__background">
        <div className="hero__glow" />
        <div className="hero__grid" />
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line" />
            МАКСИМ ФЕТИСОВ
          </div>

          <h1 className="hero__title">
            Developer
            <br />
            <span>& Digital</span>
            <br />
            Creator<span className="hero__dot">.</span>
          </h1>

          <p className="hero__description">
            Создаю цифровые продукты, разрабатываю интерфейсы
            и превращаю идеи в работающие решения.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="hero__button hero__button--primary">
              Мои проекты
              <span>↗</span>
            </a>

            <a href="#contacts" className="hero__button hero__button--secondary">
              Связаться
            </a>
          </div>

          <div className="hero__technologies">
            <span>FRONTEND</span>
            <i />
            <span>WEB DEVELOPMENT</span>
            <i />
            <span>IT SOLUTIONS</span>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-glow" />

          <div className="hero__image-wrapper">
            <img
              className="hero__image"
              src={maximImage}
              alt="Максим Фетисов"
              fetchPriority="high"
            />
          </div>

          <div className="hero__floating-card">
            <span className="hero__floating-icon">✳</span>
            <div>
              <strong>Ideas into reality</strong>
              <span>Design · Develop · Create</span>
            </div>
          </div>

          <span className="hero__visual-index">01 / 06</span>
        </div>
      </div>

      <a className="hero__scroll" href="#about">
        <span className="hero__scroll-line" />
        SCROLL TO EXPLORE
      </a>

      <div className="hero__copyright">
        © 2026 MAXIM FETISOV
      </div>
    </section>
  );
}
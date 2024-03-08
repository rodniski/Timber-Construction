import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2> CONSTRUA O FUTURO!</h2>
          <h1>
            Transforme cada projeto com a potência incomparável dos maquinários
            SANY
          </h1>
          <div className="buttons">
            <button>Explore as opções</button>
            <button>Fale conosco</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>
      <div className="slidingTextContainer">
        TIMBER SANY FUCHS
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;

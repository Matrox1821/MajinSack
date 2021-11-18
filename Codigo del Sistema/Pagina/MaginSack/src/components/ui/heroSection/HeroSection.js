import { Button } from "../buttons/Button";
import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>MajinSack</h1>
      <p>
        &nbsp;&nbsp; En esta página podrá observar si la mochila está mojada y
        la ubicación de la misma.
      </p>
      <div className="hero-btns">
        <Button
          link="/libros"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Ver Libros
        </Button>
      </div>
    </div>
  );
};

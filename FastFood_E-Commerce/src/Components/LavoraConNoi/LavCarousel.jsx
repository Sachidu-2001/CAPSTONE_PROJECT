import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LavCarousel = () => {
  const navigate = useNavigate();
  const notFoundPage = () => {
    navigate("*");
  };
  return (
    <>
      <div className="LavoraBack w-100 background-contain">
        <div className="mb-4 py-5 d-flex justify-content-center align-items-center">
          <h1 className="workShadow" style={{ color: "#FFC107" }}>
            LAVORA CON NOI
          </h1>
        </div>
        <div>
          <div className="container mb-2">
            <h2 className="text-warning workShadow">UNISCITI AL NOSTRO TEAM</h2>
            <p className="h4 text-white my-5 workShadow">
              UNISCITI A FAST & TASTY Entrare nel team Fast & Tasty significa
              far parte di un ambiente giovane, dinamico e sempre in fermento!
              Ogni giorno mettiamo passione e impegno nella creazione dei nostri
              irresistibili panini e specialità. Vuoi vivere un’esperienza
              stimolante nel mondo del fast food? Scopri le posizioni aperte o
              inviaci la tua candidatura spontanea. Fast & Tasty ti aspetta!
            </p>
            <Button className="btn btn-warning" onClick={notFoundPage}>
              Scopri di Più
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LavCarousel;

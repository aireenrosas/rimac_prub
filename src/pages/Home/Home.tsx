import familyImg from "../../assets/images/family.jpg";
import HomeForm from "../../components/HomeForm/HomeForm";

export default function Home() {
  return (
    <section className="home">
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="home__left d-none d-md-inline me-md-2">
            <img
              src={familyImg}
              alt="Familia feliz"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
          <HomeForm />
        </div>
      </div>
    </section>
  );
}

import "./showCase.scss";
import Cover from "../../assets/images/illustration-working.jpg";

const ShowCase = () => {
  return (
    <div className="Main">
      <div className="info">
        <h1>More Than Just Shorter Links</h1>
        <p>
          build your brand's recegnition and get detailed insights on how your
          links are performing
        </p>
        <button>Get Started</button>
      </div>
      <div className="cover">
        <img src={Cover} alt="" />
      </div>
    </div>
  );
};

export default ShowCase;

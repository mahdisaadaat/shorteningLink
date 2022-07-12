import "./advanced.scss";
import Brand from "../../assets/images/icon-brand-recognition.svg";
import Records from "../../assets/images/icon-detailed-records.svg";
import Fully from "../../assets/images/icon-fully-customizable.svg";

const Advanced = () => {
  return (
    <section className="Advanced">
      <div className="title">
        <h1>Advanced Statics</h1>
        <p>
          track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div className="ad-content">
        <div className="line"></div>
        <article>
          <img className="logo" src={Brand} alt="" />
          <h4 className="">Brand Recognition</h4>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without
          </p>
        </article>
        <article>
          <img className="logo" src={Records} alt="" />
          <h4 className="">Detailed Records</h4>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without
          </p>
        </article>
        <article>
          <img className="logo" src={Fully} alt="" />
          <h4 className="">Fully Customized</h4>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without
          </p>
        </article>
      </div>
    </section>
  );
};

export default Advanced;

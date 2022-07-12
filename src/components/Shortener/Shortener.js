import { useState, useEffect } from "react";
import "./shortener.scss";

//https://api.shrtco.de/v2/shorten?url=

const getLocalStorage = () => {
  let links = localStorage.getItem("links");

  if (links) {
    return JSON.parse(localStorage.getItem("links"));
  } else {
    return [];
  }
};

const Shortener = () => {
  const [text, setText] = useState("");
  const [links, setLinks] = useState(getLocalStorage());

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("input is empty");
    } else {
      const shortenLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);
        const data = await res.json();

        console.log(data.result);

        setLinks(data.result);
        setText("");
      };
      shortenLink();
    }
  };

  const showLink = () => {
    if (links) {
      return true;
    }
  };

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  return (
    <div className="shortener">
      <div className="tool-content">
        <form onSubmit={handleSubmit}>
          <input
            type="url"
            placeholder="Shorten a Link here"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button onClick={handleSubmit}>Shorten it!</button>
        </form>
      </div>
      <div className={showLink && "output"}>
        <article className="main-link">
          <h6>{links.original_link}</h6>
        </article>
        <article className="output-link">
          <a href={links.full_short_link}>{links.full_short_link}</a>
        </article>
      </div>
    </div>
  );
};

export default Shortener;

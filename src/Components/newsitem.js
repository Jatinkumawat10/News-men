import React from "react";

const Newsitem = (props) => {
  let { title, description, imageurl, newsurl, author, date, source } = props;
  return (
    <div className="my-3 ">
      <div className="card mx-2 " style={{ width: "20rem" }}>
        {" "}
        <div className="d-flex justify-content-flex-end position-absolute right -0">
          <span className="  badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageurl
              ? "https:thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
              : imageurl
          }
          className="card-img-top"
          alt=""
        />{" "}
        <div className="cont">
          <div className="card-body ">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>

            <p className="card-text">
              <small className="text-muted">
                By - {author ? author : "unknown"} on
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
          <a
            href={newsurl}
            className="btn btn-sm mb-1 btn-dark d-flex "
            style={{ justifyContent: "center", padding: "5px", margin: "24px" }}
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;

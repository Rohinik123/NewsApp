const NewsItems = (props) => {
  let { title, description, imageurl, newsUrl, date, source, author } = props;

  // const timeString12hr = new Date(publishedAt).toLocaleTimeString("en-US", {
  //   timeZone: "UTC",
  //   hour12: true,
  //   hour: "numeric",
  //   minute: "numeric",
  // });

  return (
    <div className="my-3">
      <div className="card" style={{ height: "600px" }}>
        <img
          style={{ height: "280px" }}
          src={
            !imageurl
              ? "https://cdn.ndtv.com/common/images/ogndtv.png"
              : imageurl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title my-4" style={{ height: "50px" }}>
            {title}...
          </h5>
          <p className="card-text my-5" style={{ height: "50px" }}>
            {description}...
          </p>
          <p className="auth">
            <small className="text-success">
              By-- {!author ? "Undefined" : author} on{" "}
              {new Date(date).toLocaleTimeString()}
            </small>
          </p>
          <div className="d-flex justify-content-between">
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark mx-2"
            >
              Read More....
            </a>
            <span className="spn">{source}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;

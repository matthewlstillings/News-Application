import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Article = (props) => {
  const [articleData, setArticleData] = useState(null);
  useEffect(() => {
    const article = props.childProps.resources.find((item) => {
      return item.ENITY_ID === props.match.params.id;
    });
    setArticleData(article);
    setTimeout(()=> {
      hideToolKit();
    }, 100)
  }, [props.match.params.id, props.childProps.resources]);
  const hideToolKit = () => {
    window.scrollTo({top: 400, left: 0})
    const toolkit = document.querySelector("#toolkit");
    if (toolkit) {
      toolkit.style.display = "none";
    }
  };
  function textToHtml(html) {
    let arr = html.split(/<br\s*\/?>/i);
    return arr.reduce((el, a) => el.concat(a, <br />), []);
  }
  return (
    <>
      <div className="hero">
        <div className="contain"></div>
      </div>
      <div className="article_container contain">
        <Link className="return_link" to={"/"}>
          <div class="arrow"></div>
          <p>Resource Center</p>
        </Link>
        {articleData ? (
          <article className="article_body">
            <p className="date">
              {articleData.POST_DATE_FORMAT} | {articleData.EXTRA3}
            </p>
            <h1 className="title">{articleData.DISPLAY_NAME}</h1>
            {articleData.AUTHOR.length > 1 && (
              <p className="author">By {articleData.AUTHOR}</p>
            )}
            <div className="body_containers">
              {/*}
              <div className="socialMedia">
                <a
                  className="socialLink"
                  id="linked-in"
                  href={`http://www.linkedin.com/shareArticle?mini=true&title=${articleData.DISPLAY_NAME}&url=put_url_in_here/${articleData.ENITY_ID}`}
                >
                  <p>LinkedIn</p>
                </a>
                <a
                  className="socialLink"
                  id="twitter"
                  href={`https://twitter.com/intent/tweet?url=/urlhere/${articleData.ENITY_ID}`}
                >
                  <p>twitter</p>
                </a>
                <a
                  className="socialLink"
                  id="facebook"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${articleData.ENITY_ID}`}
                >
                  <p>facebook</p>
                </a>
                <a
                  className="socialLink"
                  id="email"
                  href={`mailto:no-one@snai1mai1.com?subject=${
                    articleData.ENITY_ID
                  }&body=${"/enterurl/" + articleData.ENITY_ID}"`}
                >
                  <p>email</p>
                </a>
              </div>
              */}
              <div className="bodyText">
                {articleData.EXTRA3 === "Webinar" && (
                  <div className="embed-container">
                  <iframe
                    src={`https://player.vimeo.com/video/${articleData.HREF}`}
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                    title="webinar"
                  ></iframe>
                  </div>
                )}
                <p>{textToHtml(articleData.LONG_DESC)}</p>
              </div>
            </div>
          </article>
        ) : (
          <p>Article not found please return to resource center</p>
        )}
      </div>
    </>
  );
};

export default Article;

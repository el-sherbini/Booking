import "./propertyList.scss";

const PropertyList = () => {
  const pListItem = (imgSrc, title, numOfHotels) => {
    return (
      <div className="pListItem">
        <img src={imgSrc} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>{title}</h1>
          <h2>{numOfHotels} hotels</h2>
        </div>
      </div>
    );
  };

  return (
    <div className="pList">
      {pListItem(
        "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o",
        "Hotels",
        "233"
      )}
      {pListItem(
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
        "Hotels",
        "148"
      )}
      {pListItem(
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
        "Resorts",
        "541"
      )}
      {pListItem(
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
        "Villas",
        "421"
      )}
      {pListItem(
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
        "Cabins",
        "321"
      )}
    </div>
  );
};

export default PropertyList;

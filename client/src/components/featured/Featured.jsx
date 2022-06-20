import useFetch from "../../hooks/useFetch";
import "./featured.scss";

const Featured = () => {
  const { data, loading } = useFetch(
    "hotels/countByCity?cities=cairo,alexandria,aswan"
  );

  const featuredItem = (imgSrc, city, propertyNum) => {
    return (
      <div className="featuredItem">
        <img src={imgSrc} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>{city}</h1>
          <h2>{propertyNum} properties</h2>
        </div>
      </div>
    );
  };

  return (
    <div className="featured">
      {loading ? (
        "Loading ..."
      ) : (
        <>
          {featuredItem(
            "https://wallpaperaccess.com/full/110022.jpg",
            "Cairo",
            data[0]
          )}
          {featuredItem(
            "https://wallpaperaccess.com/full/641657.jpg",
            "Alexandria",
            data[1]
          )}
          {featuredItem(
            "https://windows10spotlight.com/wp-content/uploads/2019/10/c970986ecb7fc8b2b43d55ebc1a5b807.jpg",
            "Aswan",
            data[2]
          )}
        </>
      )}
    </div>
  );
};

export default Featured;

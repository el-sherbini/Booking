import "./hotel.scss";
import { useState } from "react";
import {
  Footer,
  Header,
  HotelData,
  MailList,
  Navbar,
  Slider,
} from "../../components";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";

const Hotel = () => {
  const [slideNum, setSlideNum] = useState(0);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, loading } = useFetch(`hotels/find/${id}`);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading ..."
      ) : (
        <div className="hotelContainer">
          {open && (
            <Slider
              setOpen={setOpen}
              slideNum={slideNum}
              setSlideNum={setSlideNum}
              data={data}
            />
          )}
          <HotelData
            setOpen={setOpen}
            setSlideNum={setSlideNum}
            data={data}
            id={id}
          />
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;

import "./footer.scss";

const Footer = () => {
  const FooterList = (...items) => {
    return (
      <ul className="fList">
        {items.map((item, index) => {
          return (
            <li className="fListItem" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="footer">
      <div className="fLists">
        {FooterList(
          "Countries",
          "Regions",
          "Cities",
          "Districts",
          "Airports",
          "Hotels"
        )}

        {FooterList(
          "Homes",
          "Apartments",
          "Resorts",
          "Villas",
          "Hostels",
          "Guest houses"
        )}

        {FooterList(
          "Unique places to stay",
          "Reviews",
          "Unpacked: Travel articles",
          "Travel communities",
          "Hostels",
          "Seasonal and holiday deals"
        )}

        {FooterList(
          "Car rental",
          "Flight Finder",
          "Restaurant reservations",
          "Travel Agents"
        )}

        {FooterList(
          "Curtomer Service",
          "Partner Help",
          "Careers",
          "Sustainability",
          "Press center",
          "Safety Resource Center",
          "Investor relations",
          "Terms & conditions"
        )}
      </div>
      <div className="fText">Copyright © 2022 Mohamed Emad.</div>
    </div>
  );
};

export default Footer;

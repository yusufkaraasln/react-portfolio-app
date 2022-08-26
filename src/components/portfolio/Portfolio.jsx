import React from "react";
import PfList from "../pfList/pfList";
import "./portfolio.scss";

import {
  webData,
  mobileData,
  designData,
  featuredData,
  desktopData,
  otherData
} from "../../dummyData";

function Portfolio() {
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "desktop",
      title: "Desktop App",
    },
    {
      id: "other",
      title: "Other",
    },
  ];

  const [selected, setSelected] = React.useState("featured");
  const [data, setData] = React.useState([]);

  React.useEffect(() => {

        switch (selected) {
            case "featured":
                setData(featuredData);
                break;
        
            case "web":
                setData(webData);
                break;
            
            case "mobile":
                setData(mobileData);
                break;
            
            case "design":
                setData(designData);
                break;
            case "desktop":
                setData(desktopData);
                break;
            case "other":
                setData(otherData);
                break;

            default:
                setData(featuredData);
                break;
        }


  }, [selected]);

  return (
    <div className="pf" id="pf">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PfList
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            item={item}
          />
        ))}
      </ul>
      <div className="container">
                {
                    data.map(data=>(
                        <div className="item">
          <img
            src={data.img}
            alt=""
          />

          <h3>{data.title}</h3>
        </div>
                    ))
                }
         </div>
    </div>
  );
}

export default Portfolio;

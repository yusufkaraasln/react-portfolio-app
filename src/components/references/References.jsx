import React from "react";
import "./ref.scss";
function References() {
  const data = [
    {
      id: 1,
      name: "Yusuf Karaaslan",
      title: "Student at Istanbul Atlas University",
      img: "assets/yusufkaraasln.jpg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, eaque inventore ea distinctio earum consequuntur est! Consequuntur corrupti suscipit blanditiis, temporibus aliquam distinctio sapiente nemo reprehenderit officiis. Corporis, autem consequuntur?",
      featured: false,
    },
    {
      id: 2,
      name: "Veysel Karaaslan",
      title: "Student at Istanbul Atlas University",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, eaque inventore ea distinctio earum consequuntur est! Consequuntur corrupti suscipit blanditiis, temporibus aliquam distinctio sapiente nemo reprehenderit officiis. Corporis, autem consequuntur?",
      img: "assets/yusufkaraasln.jpg",
      featured: true,
    },
    {
      id: 3,
      name: "Ramiz Karaeski",
      title: "Student at Istanbul Atlas University",
      img: "assets/yusufkaraasln.jpg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, eaque inventore ea distinctio earum consequuntur est! Consequuntur corrupti suscipit blanditiis, temporibus aliquam distinctio sapiente nemo reprehenderit officiis. Corporis, autem consequuntur?",
      featured: false,
    },
  ];

  return (
    <div className="ref" id="ref">
      <h1>References</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <i class="fa-solid fa-arrow-right" id="left"></i>
              <img src={d.img} id="user" alt="" />
              <i class="fa-brands fa-youtube" id="right"></i>
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default References;

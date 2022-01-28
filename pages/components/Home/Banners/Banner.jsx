import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./Banner.module.scss";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { getid } from "../../../actions/actions";
import { Button } from "react-bootstrap";

const banner = [
  {
    id: 1,
    img: "https://i.pinimg.com/originals/02/24/9c/02249cec0273714d0c59615f5e83e092.jpg",
    Name: "dương",
    link:'https://i.pinimg.com/originals/02/24/9c/02249cec0273714d0c59615f5e83e092.jpg',
    desc: "Durable flexible case that grips around the edges of your phone,Shock absorbent TPU case with anti-fingerprint finish,Colors are ink printed on the frosted shell surface,The design is featured on the back while the edges of the case are semi transparent and provide full access to ports,Compatible with Qi-standard wireless charging,Cases for all iPhone 12 and 13 models are compatible with MagSafe charging, too,Weight 26g,Thickness 1/16 inch (1.6mm)",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/236x/87/93/a9/8793a91002c72cd1d09708f1fd6d675a.jpg",
    Name: "dương",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/236x/11/39/78/113978c30b8e69cc480b4147a02e1672.jpg",
    Name: "dương",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/236x/b6/a4/32/b6a4326b8eb2bdf618cac4263509c0eb.jpg",
    Name: "dương",
  },
  {
    id: 5,
    img: "https://i.pinimg.com/236x/80/bc/44/80bc4488af66a39b4bef43bd6bfb3c97.jpg",
    Name: "dương",
  },
  {
    id: 6,
    img: "https://i.pinimg.com/236x/a4/c0/7e/a4c07e00e9d8dceb1dcad37aaf9535ae.jpg",
    Name: "dương",
  },
  {
    id: 7,
    img: "https://i.pinimg.com/236x/38/02/2e/38022e0cbc5f8acc77b56aaffb7a6358.jpg",
    Name: "dương",
  },
  {
    id: 8,
    img: "https://i.pinimg.com/236x/23/21/6c/23216c17fa41e69765020be08e546cad.jpg",
    Name: "dương",
  },
  {
    id: 9,
    img: "https://i.pinimg.com/236x/ff/75/62/ff7562bddb3cef84eb85582acbbc342f.jpg",
    Name: "dương",
  },
  {
    id: 10,
    img: "https://i.pinimg.com/236x/80/f5/a3/80f5a3b61847ade37be424e8b20050a8.jpg",
    Name: "dương",
  },
  {
    id: 11,
    img: "https://i.pinimg.com/236x/1b/ba/5c/1bba5cfecb09e60b84a2fa4b199be51c.jpg",
    Name: "dương",
  },
  {
    id: 12,
    img: "https://i.pinimg.com/236x/23/21/6c/23216c17fa41e69765020be08e546cad.jpg",
    Name: "dương",
  },
  {
    id: 13,
    img: "https://i.pinimg.com/236x/59/bb/f5/59bbf507faa72dcc171f27bd0fff2b01.jpg",
    Name: "dương",
  },
  {
    id: 14,
    img: "https://i.pinimg.com/236x/2e/38/20/2e3820aaea3563ad4e6a3fe27e2b51da.jpg",
    Name: "dương",
  },
  {
    id: 15,
    img: "https://i.pinimg.com/236x/f2/30/4b/f2304bb5b1708749abe621c92b48d292.jpg",
    Name: "dương",
  },
  {
    id: 16,
    img: "https://i.pinimg.com/236x/b5/b2/06/b5b206a86607ae311dc481cdffd59f30.jpg",
    Name: "dương",
  },
  {
    id: 17,
    img: "https://i.pinimg.com/236x/ee/6a/4d/ee6a4ddb9ad076dbf6a491bc31b3678e.jpg",
    Name: "dương",
  },
  {
    id: 18,
    img: "https://i.pinimg.com/236x/ef/69/0c/ef690cea2c9e75e8580bf79de8b5b054.jpg",
    Name: "dương",
  },
];

export default function Banner() {
  const dispatch = useDispatch();
  const setid = (id) => {
    dispatch(getid(id));
  };
  const [model, setModel] = useState(false);
  const [tempimg, setTempimg] = useState({ a: "", b: "" });
  const getImg = (img, desc) => {
    setTempimg({ a: img, b: desc });
    setModel(true);
  };
  return (
    <div>
      <div className={model ? styles.Open : styles.Model}>
        
        <img src={tempimg.a} alt="" />
        <div className={styles.desc}>{tempimg.b}</div>
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className={styles.BannerMain}>
        {banner &&
          banner.map((data, index) => {
            return (
              <div
                key={index}
                className={styles.Bannerimg}
                onClick={() => setid(data.id)}
              >
                <a
                  className={styles.Banner}
                  onClick={() => getImg(data.img, data.desc)}
                >
                  <img src={data.img} alt=""  />
                </a>
                <span className={styles.descmain}>{data.desc}</span>
                <a className={styles.dowload} href="/https://i.pinimg.com/236x/23/21/6c/23216c17fa41e69765020be08e546cad.jpg" download="AwesomeImage.png">Lưu</a>
                
              </div>
            );
          })}
      </div>
    </div>
  );
}

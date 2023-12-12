import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import profilePic5 from "../../img/profile5.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Myself Anjali Choudhary,I'm Ex-Intern at INTUIT also have an FTE Offer with me.Anmol has helped me alot in data structures and algorithm and has taught me core computer fundamentals.The knowledge which he delivers is exceptional and very easy to understand",
    },
    {
      img: profilePic2,
      review:
        "Myself Aditya Prakash,I'm Ex-Intern at NTPC.I took help from Anmol in many projects.He has a very good level of understanding of concepts related to web development and also has an excellent problem solving skills",
    },
    {
      img: profilePic3,
      review:
        "Myself Kanishka Panwar,I'm Ex-Intern at C-DOT also have an FTE offer with me.Anmol has been very sensational in solving coding related questions. He has helped me to clear my doubts in DSA and has also taught me with very easy approch to perplexing problems",
    },
    {
      img: profilePic4,
      review:
        "Myself Dipanshu Kumar,I am a student at IIT DHANBAD.Anmol has taught me Maths and Chemistry during my JEE Preparation. Also he has helped me in solving doubts in Mathematics.He also has a very good sense of humor and also is a very good motivator too.",
    },
    {
      img: profilePic5,
      review:
        "Myself Sinu Pallavi,Anmol works as an video editor for my Youtube Channel named Sinu Pallavi.Anmol has an excellent video editing skill and he has played a major role in organising the contents of my channel.His efforts has been crucial for my channel's growth.Very thankful to him. ",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;

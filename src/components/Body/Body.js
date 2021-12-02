import React from "react";
import Header from "../Header/Header";
import "./body.scss";

function Body({ user }) {
  return (
    <div className="body">
      <Header user={user} />
      <div className="body__info">
        <img
          src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/eVYCy8W5dfyObW2TT1o0BjAXuuhcGOBmGDRdCK5TbVlfAZy6hj-tjwBBykcq0rlv57fLaGUV9a2RJbfrfDJd72lyW9zRJKkbYK7gxGvBK2FNm3Qugiy9K469rq4BssjPi7K1KfwCbHCCzVKnNgUTzU9a4pRSc2gLTfvuvNBALiwulRa1jn1hYd9FwPYH24ePdxQ1LqMcWO-2b4ir6eGO_Y3EBaqx7kOf7LsP21qMoIQwtdJmUfQ8BL2WnxU6w8o_pR0DbxCprOWRNIURs-MtBN1rs7jF5J8VebvJvNNS1LqzhafQKBwtLaem9E3zBoDWF_5-dhveT5Lbpy_H4f8JYmj2Z31yKgwfvRprPC5HlzGMBiV3NxpRHbspUg0nJJRj/MDU6MjE6NTFUMTEtMjEtMQ=="
          alt="Discover Weekly"
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus</p>
        </div>
      </div>
    </div>
  );
}

export default Body;

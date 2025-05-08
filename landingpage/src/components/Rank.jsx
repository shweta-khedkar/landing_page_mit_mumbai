import React from "react";
import "./Ranking.css";
import laurel from "../assets/rank-bg.webp";
const rankings = [
  {
    value: "3rd",
    label: "Times B-School 3rd Ranking for “Top Private Universities”",
  },
  {
    value: "51-100",
    label: "NIRF 51-100 (Band) in the Innovation Category 2023",
    sub: "BAND",
  },
  { value: "72nd", label: "NIRF 72nd in Pharmacy institutes (2024)" },
  {
    value: "116th",
    label: "NIRF Ranked 116th in Engineering Institutes across India",
  },
  {
    value: "200",
    label: "NIRF Ranked under Top 200 universities in India",
    sub: "TOP",
  },
];
const Rank = () => {
  return (
    <section className="ranking-section">
      <div className="overlay" />
      <div className="ranking-container">
        <h2 className="ranking-title">Our Ranking</h2>
        <div className="ranking-grid">
          {rankings.map((rank, index) => (
            <div className="ranking-card" key={index}>
              <div className="rank-value">
                {rank.sub && <span className="rank-sub">{rank.sub}</span>}
                <h3>{rank.value}</h3>
              </div>
              <p className="rank-description">{rank.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rank;

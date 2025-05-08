import React from "react";
import "./whymit.css"; // Import your CSS file for styling
const Whymit = () => {
  const points = [
    "PhD faculty predominantly hold degrees from top-tier institutes such as IITs & NITs.",
    "Rural & National immersion programs",
    "7 days Paid International study tour programs (subsidised for golden scholar batch)",
    "25 Industry study tours",
    "Intensive focus on sports with amenities like swimming pool, basketball court, lawn tennis, football, etc.",
    "6 months paid internships",
    "50 corporate guest lectures (Campus to Corporate)",
    "Biweekly Industry leader interactions",
    "Social Outreach and Extension Activities",
    "Entrepreneurship Development Programs via Founders/Co-Founders.",
    "On campus stay available for better learning outcomes.",
    "A disciplined environment, vegetarian diet, and alcohol-free policy are central to the campus culture.",
  ];
  return (
    <section className="bg-dark text-light py-5">
      <div className="container">
        <h2 className="text-center mb-5 text-warning fw-bold">
          Why Choose MIT Mumbai?
        </h2>
        <div className="row g-4">
          {points.map((point, index) => (
            <div className="col-md-6" key={index}>
              <div className="custom-card h-100 p-4 rounded shadow-sm transition-effect">
                {point}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <button className="enquire-now-btn">Enquire Now</button> */}
      <button
        className="enquire-now-btn"
        onClick={() => (window.location.href = "https://www.mitmumbai.com/")}
      >
        Enquire Now
      </button>
    </section>
  );
};

export default Whymit;

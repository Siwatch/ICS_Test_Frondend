import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./CardDetail.css";

const CardDetail = (props) => {
  const {name,profile_image_url,images,operation_time,rating} = props;
  return (
    <div className="card-container">
      <div className="all-card ms-3 mt-3">
        <div className="top-card">
          <div className="top-img me-2">
            <img src={profile_image_url} />
          </div>

          <div className="top-text">
            <div className="text-left">
              <h5>{name}</h5>
            </div>

            <div className="text-right">
              <div className="text-right-content">
                <CalendarMonthIcon />
                <p>{operation_time[0].time_open} AM-{operation_time[0].time_close} PM </p>
              </div>

              <div className="text-point">
                <p>⬤</p>
                <h6> {rating}</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-card mt-2">
          <div className="first-img">
            <img src={images[0]} />
          </div>
          <img src={images[1]} />
          <div className="third-img">
            <img src={images[2]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;

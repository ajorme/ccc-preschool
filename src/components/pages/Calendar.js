import React from "react";
import Iframe from "react-iframe";

const Calendar = () => {
  return (
    <div>
      <Iframe
        url="https://calendar.google.com/calendar/embed?src=ormea95%40gmail.com&ctz=America%2FNew_York"
        width="100%"
        height="900px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen
      />
    </div>
  );
};

export default Calendar;

import React from "react";
import ApointmentAvailable from "../ApointmentAvailable/ApointmentAvailable";
import ApointmentHeader from "../ApointmentHeader/ApointmentHeader";

const Apointment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <ApointmentHeader date={date} setDate={setDate}></ApointmentHeader>
      <ApointmentAvailable date={date} setDate={setDate}></ApointmentAvailable>
    </div>
  );
};

export default Apointment;

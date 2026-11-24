
import { useState } from "react";
import { Routes, Route } from "react-router";

import doctorsData from "./data/data";

import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/Doctordetails";
import Appointments from "./pages/Appointments";

function App() {
  const [doctors, setDoctors] = useState(doctorsData);

  function bookAppointment(id) {
    const alreadyBooked = doctors.find((d) => d.isBooked);

    if (alreadyBooked) {
      return;
    }

    const updatedDoctors = doctors.map((d) => {
      if (d.id === id && d.isAvailableToday && d.availableSlots > 0) {
        return {
          ...d,
          isBooked: true,
          availableSlots: d.availableSlots - 1
        };
      }

      return d;
    });

    setDoctors(updatedDoctors);
  }

  function cancelAppointment(id) {
    const updatedDoctors = doctors.map((d) => {
      if (d.id === id && d.isBooked) {
        return {
          ...d,
          isBooked: false,
          availableSlots: d.availableSlots + 1
        };
      }

      return d;
    });

    setDoctors(updatedDoctors);
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home doctors={doctors} />} />

        <Route
          path="/doctors"
          element={
            <Doctors
              doctors={doctors}
              bookAppointment={bookAppointment}
              cancelAppointment={cancelAppointment}
            />
          }
        />

        <Route
          path="/doctors/:id"
          element={
            <DoctorDetails
              doctors={doctors}
              bookAppointment={bookAppointment}
              cancelAppointment={cancelAppointment}
            />
          }
        />

        <Route
          path="/appointments"
          element={
            <Appointments
              doctors={doctors}
              cancelAppointment={cancelAppointment}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

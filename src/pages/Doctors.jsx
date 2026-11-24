
import { useState } from "react";
import DoctorCard from "../components/Doctorcard";

function Doctors({ doctors, bookAppointment, cancelAppointment }) {
  const [specialization, setSpecialization] = useState("All");

  const filteredDoctors = doctors.filter((d) => {
    return specialization === "All" || d.specialization === specialization;
  });

  return (
    <div>
      <h1>Our Doctors</h1>

      <label>Filter by Specialization: </label>

      <select
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Orthopedic">Orthopedic</option>
        <option value="Pediatrician">Pediatrician</option>
        <option value="Dentist">Dentist</option>
      </select>

      {filteredDoctors.map((d) => (
        <DoctorCard
          key={d.id}
          doctor={d}
          bookAppointment={bookAppointment}
          cancelAppointment={cancelAppointment}
        />
      ))}
    </div>
  );
}

export default Doctors;

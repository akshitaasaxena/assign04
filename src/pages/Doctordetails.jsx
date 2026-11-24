
import { useParams } from "react-router";

function DoctorDetails({ doctors, bookAppointment, cancelAppointment }) {
  const { id } = useParams();

  const doctor = doctors.find((d) => d.id === Number(id));

  if (!doctor) {
    return <h2>Doctor not found</h2>;
  }

  return (
    <div>
      <h1>{doctor.name}</h1>

      <p>Specialization: {doctor.specialization}</p>
      <p>Hospital: {doctor.hospital}</p>
      <p>Experience: {doctor.experience} years</p>
      <p>Consultation Fee: ₹{doctor.fee}</p>
      <p>Rating: {doctor.rating}</p>
      <p>Available Slots: {doctor.availableSlots}</p>

      {doctor.isBooked ? (
        <button onClick={() => cancelAppointment(doctor.id)}>
          Cancel Appointment
        </button>
      ) : doctor.isAvailableToday && doctor.availableSlots > 0 ? (
        <button onClick={() => bookAppointment(doctor.id)}>
          Book Appointment
        </button>) : doctor.isAvailableToday ? (<p>No Slots Left</p> ) : (<p>Not Available Today</p>
      )}
    </div>
  );
}

export default DoctorDetails;

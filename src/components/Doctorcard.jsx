import { Link } from "react-router";

function DoctorCard({ doctor, bookAppointment, cancelAppointment }) {
  let button;

  if (doctor.isBooked) {
    button = (
      <button onClick={() => cancelAppointment(doctor.id)}>
        Cancel Appointment
      </button>
    );
  } else if (!doctor.isAvailableToday) {
    button = <button disabled>Not Available Today</button>;
  } else if (doctor.availableSlots === 0) {
    button = <button disabled>No Slots Left</button>;
  } else {
    button = (
      <button onClick={() => bookAppointment(doctor.id)}>
        Book Appointment
      </button>
    );
  }

  return (
    <div>
      <h2>{doctor.name}</h2>

      <p>Specialization: {doctor.specialization}</p>
      <p>Experience(Years): {doctor.experience}</p>
      <p>Fees: ₹{doctor.fee}</p>
      <p>Ratings: {doctor.rating}</p>

      {doctor.experience >= 10 && <p>Senior Doctor</p>}

      {doctor.isAvailableToday && doctor.availableSlots > 0 ? (
        <p>Available Today</p>):doctor.isAvailableToday ?(<p>No Slots Left</p>):(<p>Not Available Today</p>
      )}

      <Link to={`/doctors/${doctor.id}`}>View Details</Link>

      {button}
    </div>
  );
}

export default DoctorCard;
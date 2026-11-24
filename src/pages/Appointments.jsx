
function Appointments({ doctors, cancelAppointment }) {
  const bookedDoctors = doctors.filter((d) => d.isBooked);

  const totalFee = bookedDoctors.reduce((sum, d) => sum + d.fee, 0);

  return (
    <div>
      <h1>My Appointments</h1>

      {bookedDoctors.length === 0 ? (
        <p>No appointments booked</p>
      ) : (
        <>
          {bookedDoctors.map((d) => (
            <div key={d.id}>
              <h2>{d.name}</h2>
              <p>Specialization: {d.specialization}</p>
              <p>Hospital: {d.hospital}</p>
              <p>Consultation Fee: ₹{d.fee}</p>

              <button onClick={() => cancelAppointment(d.id)}>
                Cancel Appointment
              </button>
            </div>
          ))}

          <h2>Total Consultation Fee: ₹{totalFee}</h2>
        </>
      )}
    </div>
  );
}

export default Appointments;

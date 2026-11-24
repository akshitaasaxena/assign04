
function Home({ doctors }) {
  const totalDoctors = doctors.length;

  const availableDoctors = doctors.filter(
    (d) => d.isAvailableToday && d.availableSlots > 0
  ).length;

  const bookedAppointments = doctors.filter(
    (d) => d.isBooked
  ).length;

  return (
    <div>
      <h1>Doctor Appointment System</h1>

      <h2>Dashboard</h2>

      <div>
        <h3>Total Doctors</h3>
        <p>{totalDoctors}</p>
      </div>

      <div>
        <h3>Doctors Available Today</h3>
        <p>{availableDoctors}</p>
      </div>

      <div>
        <h3>Booked Appointments</h3>
        <p>{bookedAppointments}</p>
      </div>
    </div>
  );
}

export default Home;

import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <h2>Doctor Appointment System</h2>

      <Link to="/">Home</Link>
      <Link to="/doctors">Doctors</Link>
      <Link to="/appointments">Appointments</Link>
    </nav>
  );
}

export default Navbar;
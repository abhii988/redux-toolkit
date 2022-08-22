import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ Logout }) => {
  // const { user } = useParams();
  return (
    <div>
      <div className="welcome">
        <h2>
          Welcome, <span> {localStorage.getItem("username")}</span>
        </h2>
        <input type="submit" value="LOGOUT" onClick={Logout} />
        <br />
        <Link to="/dashboard">Go to Dashboard</Link>
      </div>
    </div>
  );
};

export default Profile;

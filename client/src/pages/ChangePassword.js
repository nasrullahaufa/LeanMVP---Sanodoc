import React, { useEffect, useState } from "react";

function ChangePasswordPage() {
  const [data, setData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setData({
      ...data,
      [name]: value,
    });
  };

  const changePasswordHandle = (event) => {
    event.preventDefault();
    console.log(data.oldPassword, data.newPassword, data.confirmPassword);
  };
  return (
    <div className="changepassword-page">
      <div className="changepassword-form-container">
        <div className="changepassword-form">
          <form>
            <h2>Change Password</h2>

            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Old Password
              </label>
              <input
                type="password"
                className="form-control"
                required
                name="oldPassword"
                value={data.oldPassword}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                required
                name="newPassword"
                value={data.newPassword}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                required
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div id="login-validation"></div>

            <button
              type="submit"
              onClick={changePasswordHandle}
              className="btn btn-success"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordPage;

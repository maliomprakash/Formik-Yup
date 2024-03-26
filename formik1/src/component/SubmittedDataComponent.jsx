import React, { useState } from "react";

const SubmittedDataComponent = ({ submittedData }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const togglePasswordVisibility = (type) => {
    if (type === "password") {
      setShowPassword(!showPassword);
    } else if (type === "cpassword") {
      setShowCPassword(!showCPassword);
    }
  };

  if (!submittedData) return null;

  return (
    <section>
      <div className="bgset">
        <div className="mask d-flex align-items-center justify-content-around h-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card shadow-2-strong">
                  <div className="">
                    <div className="table-responsive">
                   
                      <table className="table text-center">
                        <thead>
                          <tr className="firsthead">
                            <th className="px-4 py-2 col-3">Name </th>
                            <th className="px-4 py-2 col-3">Email</th>  
                            <th className="px-4 py-2 col-3">Password</th>
                            <th className="px-4 py-2 col-3">Confirm Password</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-4 py-2 " >{submittedData.name}</td>
                            <td className="px-4 py-2">{submittedData.email}</td>
                            <td className="px-4 py-2 ">
                              {showPassword ? (
                                submittedData.password
                              ) : (
                                <span className="password-dot">
                                  {Array(submittedData.password.length)
                                    .fill("*")
                                    .join("")}
                                </span>
                              )}
                              <button
                                className="btn btn-sm passbtn "
                                onClick={() => togglePasswordVisibility("password")}
                              >
                                {showPassword ? "Hide" : "Show"}
                              </button> 
                            </td>
                            <td className="px-4 py-2">
                              {showCPassword ? (
                                submittedData.cpassword
                              ) : (
                                <span className="password-dot">
                                  {Array(submittedData.cpassword.length)
                                    .fill("*")
                                    .join("")}
                                </span>
                              )}
                              <button
                                className="btn btn-sm  passbtn"
                                onClick={() => togglePasswordVisibility("cpassword")}
                              >
                                {showCPassword ? "Hide" : "Show"}
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmittedDataComponent;

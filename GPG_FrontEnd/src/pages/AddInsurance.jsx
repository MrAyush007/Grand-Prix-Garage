import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUrl } from "../utils/utils";

const AddInsurance = () => {
  const navigate = useNavigate();
  const [insuranceData, setInsuranceData] = useState({
    insuranceProvider: "",
    policyNumber: "",
    premiumAmt: "",
    claimAmt: "",
    year: "",
    mode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInsuranceData({ ...insuranceData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = createUrl("/insurance");
    axios
      .post(url, insuranceData)
      .then((response) => {
        toast.success("Insurance Added Successfully!");
        navigate("/salesperson");
      })
      .catch((error) => {
        toast.error("Failed to add insurance.");
        console.error("Error adding insurance:", error);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Add Insurance</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="insuranceProvider" className="form-label">
            Insurance Provider
          </label>
          <input
            type="text"
            className="form-control"
            id="insuranceProvider"
            name="insuranceProvider"
            value={insuranceData.insuranceProvider}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="policyNumber" className="form-label">
            Policy Number
          </label>
          <input
            type="text"
            className="form-control"
            id="policyNumber"
            name="policyNumber"
            value={insuranceData.policyNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="premiumAmt" className="form-label">
            Premium Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="premiumAmt"
            name="premiumAmt"
            value={insuranceData.premiumAmt}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="claimAmt" className="form-label">
            Claim Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="claimAmt"
            name="claimAmt"
            value={insuranceData.claimAmt}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label">
            Year
          </label>
          <input
            type="text"
            className="form-control"
            id="year"
            name="year"
            value={insuranceData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mode" className="form-label">
            Mode
          </label>
          <input
            type="text"
            className="form-control"
            id="mode"
            name="mode"
            value={insuranceData.mode}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Insurance
        </button>
      </form>
    </div>
  );
};

export default AddInsurance;

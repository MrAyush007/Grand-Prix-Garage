import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUrl } from "../utils/utils";

const AddFinancer = () => {
  const navigate = useNavigate();
  const [financeData, setFinanceData] = useState({
    financeName: "",
    loanAmount: "",
    interestRate: "",
    monthlyPayment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFinanceData({ ...financeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = createUrl("/finance");
    axios
      .post(url, financeData)
      .then((response) => {
        toast.success("Financer Added Successfully!");
        navigate("/salesperson");
      })
      .catch((error) => {
        toast.error("Failed to add financer.");
        console.error("Error adding financer:", error);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Add Financer</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="financeName" className="form-label">
            Financer Name
          </label>
          <input
            type="text"
            className="form-control"
            id="financeName"
            name="financeName"
            value={financeData.financeName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="loanAmount" className="form-label">
            Loan Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="loanAmount"
            name="loanAmount"
            value={financeData.loanAmount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="interestRate" className="form-label">
            Interest Rate
          </label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="interestRate"
            name="interestRate"
            value={financeData.interestRate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="monthlyPayment" className="form-label">
            Monthly Payment
          </label>
          <input
            type="number"
            className="form-control"
            id="monthlyPayment"
            name="monthlyPayment"
            value={financeData.monthlyPayment}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Financer
        </button>
      </form>
    </div>
  );
};

export default AddFinancer;

// AddDiseaseModal.js

import React, { useState } from "react";
import Modal from "react-modal";

const AddDiseaseModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    diseaseName: "",
    image: "",
    description: "",
    symptoms: "",
    remedy: "",
    treatment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateFormData = () => {
    return (
      formData.diseaseName.trim() === "" ||
      formData.image.trim() === "" ||
      formData.description.trim() === "" ||
      formData.symptoms.trim() === "" ||
      formData.remedy.trim() === "" ||
      formData.treatment.trim() === ""
    );
  };
  
  const handleSubmit = () => {

    if(validateFormData()) {
      window.alert("Field with * cannot be empty or null.");
      return;
    };

    const symptomsArray = formData.symptoms
      .split(",")
      .map((symptom) => symptom.trim());
    const remedyArray = formData.remedy
      .split(",")
      .map((remedy) => remedy.trim());
    const treatmentArray = formData.treatment
      .split(",")
      .map((treatment) => treatment.trim());

    const updatedFormData = {
      ...formData,
      symptoms: [...symptomsArray],
      remedy: [...remedyArray],
      treatment: [...treatmentArray],
    };

    onSubmit(updatedFormData);

    setFormData({
      diseaseName: "",
      image: "",
      description: "",
      symptoms: "",
      remedy: "",
      treatment: "",
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Disease Modal"
      style={{
        content: {
          width: "400px",
          margin: "auto",
          borderRadius: "8px",
          padding: "20px",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Disease</h2>
      <label style={{ marginBottom: "15px" }}>
        Disease Name: <span style={{ fontSize: 16, color: "red" }}>*</span>
        <input
          type="text"
          name="diseaseName"
          value={formData.diseaseName}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            boxSizing: "border-box",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </label>
      <label style={{ marginBottom: "15px" }}>
        Image: <span style={{ fontSize: 16, color: "red" }}>*</span>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            boxSizing: "border-box",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        />
      </label>
      <label style={{ marginBottom: "15px" }}>
        Description: <span style={{ fontSize: 16, color: "red" }}>*</span>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            boxSizing: "border-box",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        />
      </label>
      <label style={{ marginBottom: "15px" }}>
        Symptoms (comma-separated):{" "}
        <span style={{ fontSize: 16, color: "red" }}>*</span>
        <textarea
          type="text"
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            boxSizing: "border-box",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        />
      </label>
      <label style={{ marginBottom: "15px" }}>
        Remedy: (comma-separated):{" "}
        <span style={{ fontSize: 16, color: "red" }}>*</span>
        <textarea
          name="remedy"
          value={formData.remedy}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            boxSizing: "border-box",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        />
      </label>
      <label style={{ marginBottom: "15px" }}>
        Treatment: (comma-separated):{" "}
        <span style={{ fontSize: 16, color: "red" }}>*</span>
        <textarea
          name="treatment"
          value={formData.treatment}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            boxSizing: "border-box",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        />
      </label>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          style={{
            width: "90px",
            marginRight: "10px",
            padding: "10px",
            backgroundColor: "rgb(53, 190, 224)",
            borderRadius: "10px",
            border: "1px solid rgb(53, 190, 224)",
            cursor: "pointer",
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          onClick={onRequestClose}
          style={{
            width: "90px",
            padding: "10px",
            backgroundColor: "rgb(53, 190, 224)",
            borderRadius: "10px",
            border: "1px solid rgb(53, 190, 224)",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default AddDiseaseModal;

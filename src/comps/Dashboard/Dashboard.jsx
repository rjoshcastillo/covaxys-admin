import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import DiseaseServices from "../../services/disease.services";
import AddDiseaseModal from "../../modals/AddDiseaseModal";
import ViewDiseaseModal from "../../modals/ViewDiseaseModal";

const Dashboard = () => {
  const [disease, setDiseases] = useState([]);
  const [isAddDiseaseModalOpen, setAddDiseaseModalOpen] = useState(false);
  const [isViewDiseaseModalOpen, setViewDiseaseModalOpen] = useState(false);
  const [selectedDisease, setSelectedDisease] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("isLogin") === "true";
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const fetchDiseases = async () => {
    try {
      const disease = await DiseaseServices.getDiseases();
      if (disease) {
        setDiseases(disease);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDisease = async (id) => {
    try {
      await DiseaseServices.deleteDisease(id)
        .then(() => {
          window.alert("Disease deleted successfully!");
          fetchDiseases();
        })
        .catch((err) => {
          window.alert("Error", err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDiseases();
  }, []);

  const handleAddDisease = () => {
    setAddDiseaseModalOpen(true);
  };

  const handleCloseModal = () => {
    setAddDiseaseModalOpen(false);
  };

  const handleAddDiseaseSubmit = async (formData) => {
    try {
      await DiseaseServices.addDisease(formData)
        .then(() => {
          window.alert("Disease added successfully!");
          fetchDiseases();
        })
        .catch((err) => {
          window.alert("Error", err);
        });
    } catch (error) {
      console.error("Error adding disease:", error);
    } finally {
      setAddDiseaseModalOpen(false);
    }
  };

  const handleViewDisease = (row) => {
    setSelectedDisease(row)
    setViewDiseaseModalOpen(true)
  };

  const closeViewDiseaseModal = () => {
    setViewDiseaseModalOpen(false);
  };

  return (
    <div className="dashboard-container">
      <div className="left-column">
        <div>
          <button className="button" onClick={handleAddDisease}>
            Add Disease
          </button>
        </div>
      </div>

      <div className="right-column">
        <table className="disease-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Description</th>
              <th colSpan={4} style={{ textAlign: "center" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {disease.map((row, i) => (
              <tr key={i}>
                <td>{row.diseaseName}</td>
                <td>
                  <img src={row.image} />
                </td>
                <td>{row.description}</td>
                <td>
                  <button
                    className="tbl-button"
                    onClick={() => deleteDisease(row.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button className="tbl-button" onClick={() => handleViewDisease(row)}>
                    Update
                  </button>
                </td>
                <td>
                  <button className="tbl-button" onClick={() => handleViewDisease(row)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddDiseaseModal
        isOpen={isAddDiseaseModalOpen}
        onRequestClose={handleCloseModal}
        onSubmit={handleAddDiseaseSubmit}
      />

      <ViewDiseaseModal 
      isOpen={isViewDiseaseModalOpen}
      onRequestClose={closeViewDiseaseModal}
      diseaseData={selectedDisease}
      />
    </div>
  );
};

export default Dashboard;

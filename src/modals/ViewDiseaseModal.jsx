// ViewDiseaseModal.js
import React from 'react';
import Modal from 'react-modal';

const ViewDiseaseModal = ({ isOpen, onRequestClose, diseaseData }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="View Disease Modal"
      style={{
        content: {
          width: '400px',
          margin: 'auto',
          borderRadius: '8px',
          padding: '20px',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <div>
        <img src={diseaseData.image}/>
      </div>
      <div>
        <p>Disease Name: <span style={{ fontWeight: 'bold' }}>{diseaseData.diseaseName}</span></p>
        <p>Description: {diseaseData.description}</p>
        <p style={{ fontWeight: 'bold' }}>Symptoms</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {diseaseData.symptoms.map((item) => (
                <div><span style={{ fontWeight: 'bold' }}>-</span> {item}</div>
            ))}
        </div>
        <p style={{ fontWeight: 'bold' }}>Remedy</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {diseaseData.remedy.map((item) => (
                <div><span style={{ fontWeight: 'bold' }}>-</span> {item}</div>
            ))}
        </div>
        <p style={{ fontWeight: 'bold' }}>Treatment</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {diseaseData.treatment.map((item) => (
                <div><span style={{ fontWeight: 'bold' }}>-</span> {item}</div>
            ))}
        </div>
      </div>
      <button onClick={onRequestClose} style={{ width: '100%', padding: '10px', marginTop: 20}}>Close</button>
    </Modal>
  );
};

export default ViewDiseaseModal;

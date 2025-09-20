// Centralized patient data for consistency across doctor and patient portals

export const getPatientHistory = (patientId: string) => {
  return {
    medicalHistory: "Past conditions: hypertension (2019), seasonal allergies (2020). No major surgeries. Family history: diabetes (father), heart disease (mother). Regular medications: Lisinopril 10mg daily.",
    prescriptions: [
      {
        medicine: 'Sumatriptan 50mg',
        quantity: '6 tablets',
        prescribedBy: 'Dr. Sharma',
        dateTime: '15/01/2025 10:30 AM'
      },
      {
        medicine: 'Paracetamol 500mg',
        quantity: '20 tablets',
        prescribedBy: 'Dr. Reddy',
        dateTime: '12/01/2025 03:15 PM'
      },
      {
        medicine: 'Ibuprofen 400mg',
        quantity: '12 tablets',
        prescribedBy: 'Dr. Patel',
        dateTime: '08/01/2025 11:00 AM'
      },
      {
        medicine: 'Cetirizine 10mg',
        quantity: '10 tablets',
        prescribedBy: 'Dr. Mehta',
        dateTime: '05/01/2025 02:00 PM'
      },
      {
        medicine: 'Vitamin D3',
        quantity: '30 tablets',
        prescribedBy: 'Dr. Khan',
        dateTime: '01/01/2025 09:45 AM'
      },
      {
        medicine: 'Omeprazole 20mg',
        quantity: '14 capsules',
        prescribedBy: 'Dr. Singh',
        dateTime: '28/12/2024 04:30 PM'
      },
      {
        medicine: 'Metformin 500mg',
        quantity: '60 tablets',
        prescribedBy: 'Dr. Gupta',
        dateTime: '20/12/2024 11:15 AM'
      },
      {
        medicine: 'Atorvastatin 10mg',
        quantity: '30 tablets',
        prescribedBy: 'Dr. Joshi',
        dateTime: '15/12/2024 02:45 PM'
      },
      {
        medicine: 'Aspirin 75mg',
        quantity: '90 tablets',
        prescribedBy: 'Dr. Nair',
        dateTime: '10/12/2024 09:00 AM'
      },
      {
        medicine: 'Lisinopril 10mg',
        quantity: '30 tablets',
        prescribedBy: 'Dr. Verma',
        dateTime: '05/12/2024 03:20 PM'
      }
    ]
  };
};

export const getPatientReports = (patientId: string) => {
  return [
    {
      name: 'MRI Brain Scan',
      date: '15/01/2025',
      uploadedBy: 'Lab Technician – Mr. Rao',
      status: 'Available',
      imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      reportId: 'mri-brain'
    },
    {
      name: 'Blood Test - Complete Panel',
      date: '12/01/2025',
      uploadedBy: 'Lab Technician – Ms. Priya',
      status: 'Available',
      imageUrl: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      reportId: 'blood-panel'
    },
    {
      name: 'Chest X-Ray',
      date: '08/01/2025',
      uploadedBy: 'Lab Technician – Mr. Kumar',
      status: 'Available',
      imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      reportId: 'chest-xray'
    },
    {
      name: 'ECG Report',
      date: '05/01/2025',
      uploadedBy: 'Lab Technician – Ms. Sharma',
      status: 'Available',
      imageUrl: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      reportId: 'ecg-report'
    },
    {
      name: 'Ultrasound Abdomen',
      date: '02/01/2025',
      uploadedBy: 'Lab Technician – Dr. Patel',
      status: 'Available',
      imageUrl: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      reportId: 'ultrasound-abdomen'
    }
  ];
};

export const getPatientAllergies = (patientId: string) => {
  return [
    {
      name: 'Peanuts',
      severity: 'High',
      description: 'Severe allergic reaction to peanuts and peanut products'
    },
    {
      name: 'Penicillin',
      severity: 'High',
      description: 'Severe allergic reaction to penicillin-based antibiotics'
    },
    {
      name: 'Dust',
      severity: 'Medium',
      description: 'Allergic reaction to dust mites and particles'
    },
    {
      name: 'Pollen',
      severity: 'Low',
      description: 'Seasonal allergic rhinitis from tree and grass pollen'
    },
    {
      name: 'Shellfish',
      severity: 'High',
      description: 'Severe allergic reaction to shellfish including shrimp, crab, and lobster.'
    },
    {
      name: 'Latex',
      severity: 'Medium',
      description: 'Contact dermatitis and respiratory symptoms when exposed to latex products.'
    },
    {
      name: 'Aspirin',
      severity: 'Medium',
      description: 'Drug allergy causing stomach upset and skin rashes. NSAIDs should be avoided.'
    }
  ];
};
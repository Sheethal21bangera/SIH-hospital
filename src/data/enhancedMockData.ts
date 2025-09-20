// Enhanced mock data for complete hospital portal functionality
import { Doctor, Patient, Appointment, Invoice, Prescription, TestRequest } from '../types';

export const enhancedDoctors: Doctor[] = [
  {
    doctor_id: 'D-501', 
    name: 'Dr. Ramesh Kumar',
    qualification: 'MD, Dermatology',
    department: 'Dermatology',
    contact_number: '+91 9999999999',
    photo_url: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop'
  },
  {
    doctor_id: 'D-502',
    name: 'Dr. Rajesh Iyer',
    qualification: 'MBBS, MD (Neurology)',
    department: 'Neurology',
    contact_number: '+91 9876501235',
    photo_url: 'https://images.pexels.com/photos/582750/pexels-photo-582750.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop'
  },
  {
    doctor_id: 'D-503',
    name: 'Dr. Priya Mehta',
    qualification: 'MBBS, MD (Cardiology)',
    department: 'Cardiology',
    contact_number: '+91 9876501236',
    photo_url: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop'
  },
  {
    doctor_id: 'D-504',
    name: 'Dr. Amit Singh',
    qualification: 'MBBS, MS (Orthopedics)',
    department: 'Orthopedics',
    contact_number: '+91 9876501237',
    photo_url: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop'
  },
  {
    doctor_id: 'D-505',
    name: 'Dr. Sunita Rao',
    qualification: 'MBBS, MD (Pediatrics)',
    department: 'Pediatrics',
    contact_number: '+91 9876501238',
    photo_url: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop'
  }
];

export const enhancedPatients: Patient[] = [
  {
    patient_id: 'P-1001',
    name: 'Ravi Kumar',
    age: 28,
    gender: 'Male',
    phone_number: '+91 9876543210',
    aadhar_number: '1234-5678-9012',
    problem_description: 'Severe headache and dizziness for 3 days',
    assigned_doctor: 'Dr. Ramesh Kumar'
  },
  {
    patient_id: 'P-1002',
    name: 'Meena Rajesh',
    age: 42,
    gender: 'Female',
    phone_number: '+91 9876543211',
    aadhar_number: '1234-5678-9013',
    problem_description: 'Persistent skin rash and itching',
    assigned_doctor: 'Dr. Ramesh Kumar'
  },
  {
    patient_id: 'P-1003',
    name: 'Arjun Patel',
    age: 55,
    gender: 'Male',
    phone_number: '+91 9876543212',
    aadhar_number: '1234-5678-9014',
    problem_description: 'Chest pain and shortness of breath',
    assigned_doctor: 'Dr. Priya Mehta'
  },
  {
    patient_id: 'P-1004',
    name: 'Priya Sharma',
    age: 34,
    gender: 'Female',
    phone_number: '+91 9876543213',
    aadhar_number: '1234-5678-9015',
    problem_description: 'Knee pain after accident',
    assigned_doctor: 'Dr. Amit Singh'
  },
  {
    patient_id: 'P-1005',
    name: 'Rohit Gupta',
    age: 8,
    gender: 'Male',
    phone_number: '+91 9876543214',
    aadhar_number: '1234-5678-9016',
    problem_description: 'Fever and cold symptoms',
    assigned_doctor: 'Dr. Sunita Rao'
  },
  {
    patient_id: 'P-1006',
    name: 'Kavya Nair',
    age: 29,
    gender: 'Female',
    phone_number: '+91 9876543215',
    aadhar_number: '1234-5678-9017',
    problem_description: 'Migraine and vision problems',
    assigned_doctor: 'Dr. Rajesh Iyer'
  },
  {
    patient_id: 'P-1007',
    name: 'Suresh Reddy',
    age: 67,
    gender: 'Male',
    phone_number: '+91 9876543216',
    aadhar_number: '1234-5678-9018',
    problem_description: 'Diabetes management and check-up',
    assigned_doctor: 'Dr. Priya Mehta'
  },
  {
    patient_id: 'P-1008',
    name: 'Anita Joshi',
    age: 45,
    gender: 'Female',
    phone_number: '+91 9876543217',
    aadhar_number: '1234-5678-9019',
    problem_description: 'Skin allergy and rashes',
    assigned_doctor: 'Dr. Ramesh Kumar'
  }
];

export const enhancedAppointments: Appointment[] = [
  {
    appointment_id: 'A-2001',
    time: '09:00 AM',
    patient_name: 'Ravi Kumar',
    patient_id: 'P-1001',
    age: 28,
    reason: 'Headache consultation',
    status: 'scheduled'
  },
  {
    appointment_id: 'A-2002',
    time: '09:30 AM',
    patient_name: 'Meena Rajesh',
    patient_id: 'P-1002',
    age: 42,
    reason: 'Skin rash treatment',
    status: 'scheduled'
  },
  {
    appointment_id: 'A-2003',
    time: '10:00 AM',
    patient_name: 'Arjun Patel',
    patient_id: 'P-1003',
    age: 55,
    reason: 'Cardiology follow-up',
    status: 'completed'
  },
  {
    appointment_id: 'A-2004',
    time: '10:30 AM',
    patient_name: 'Priya Sharma',
    patient_id: 'P-1004',
    age: 34,
    reason: 'Orthopedic consultation',
    status: 'scheduled'
  },
  {
    appointment_id: 'A-2005',
    time: '11:00 AM',
    patient_name: 'Rohit Gupta',
    patient_id: 'P-1005',
    age: 8,
    reason: 'Pediatric check-up',
    status: 'scheduled'
  },
  {
    appointment_id: 'A-2006',
    time: '11:30 AM',
    patient_name: 'Kavya Nair',
    patient_id: 'P-1006',
    age: 29,
    reason: 'Neurology consultation',
    status: 'cancelled'
  },
  {
    appointment_id: 'A-2007',
    time: '02:00 PM',
    patient_name: 'Suresh Reddy',
    patient_id: 'P-1007',
    age: 67,
    reason: 'Diabetes management',
    status: 'scheduled'
  },
  {
    appointment_id: 'A-2008',
    time: '02:30 PM',
    patient_name: 'Anita Joshi',
    patient_id: 'P-1008',
    age: 45,
    reason: 'Allergy treatment',
    status: 'scheduled'
  }
];

export const enhancedInvoices: Invoice[] = [
  {
    invoice_id: 'INV-3001',
    patient_id: 'P-1001',
    patient_name: 'Ravi Kumar',
    items: [
      { description: 'Consultation - Neurology', amount: 600 },
      { description: 'MRI Scan', amount: 3500 },
      { description: 'Medicine Dispense', amount: 450 }
    ],
    total_amount: 4550,
    payment_status: 'Unpaid',
    due_date: '2025-01-25'
  },
  {
    invoice_id: 'INV-3002',
    patient_id: 'P-1002',
    patient_name: 'Meena Rajesh',
    items: [
      { description: 'Consultation - Dermatology', amount: 500 },
      { description: 'Skin Biopsy', amount: 1200 },
      { description: 'Topical Medications', amount: 300 }
    ],
    total_amount: 2000,
    payment_status: 'Paid',
    due_date: '2025-01-20'
  },
  {
    invoice_id: 'INV-3003',
    patient_id: 'P-1003',
    patient_name: 'Arjun Patel',
    items: [
      { description: 'Consultation - Cardiology', amount: 700 },
      { description: 'ECG Test', amount: 400 },
      { description: 'Echo Cardiogram', amount: 1500 },
      { description: 'Cardiac Medications', amount: 600 }
    ],
    total_amount: 3200,
    payment_status: 'Partial',
    due_date: '2025-01-30'
  },
  {
    invoice_id: 'INV-3004',
    patient_id: 'P-1004',
    patient_name: 'Priya Sharma',
    items: [
      { description: 'Emergency Consultation', amount: 800 },
      { description: 'X-Ray - Knee', amount: 600 },
      { description: 'Pain Medications', amount: 250 }
    ],
    total_amount: 1650,
    payment_status: 'Overdue',
    due_date: '2025-01-10'
  },
  {
    invoice_id: 'INV-3005',
    patient_id: 'P-1005',
    patient_name: 'Rohit Gupta',
    items: [
      { description: 'Pediatric Consultation', amount: 400 },
      { description: 'Blood Test - CBC', amount: 300 },
      { description: 'Fever Medications', amount: 150 }
    ],
    total_amount: 850,
    payment_status: 'Paid',
    due_date: '2025-01-19'
  }
];

export const enhancedPrescriptions: Prescription[] = [
  {
    prescription_id: 'RX-2001',
    patient_id: 'P-1001',
    patient_name: 'Ravi Kumar',
    medicines: ['Paracetamol 500mg - 1 tab 8hr', 'Ibuprofen 200mg - 1 tab 12hr', 'Sumatriptan 50mg - 1 tab when needed'],
    status: 'Pending',
    date: '2025-01-15'
  },
  {
    prescription_id: 'RX-2002',
    patient_id: 'P-1002',
    patient_name: 'Meena Rajesh',
    medicines: ['Hydrocortisone Cream 1% - Apply twice daily', 'Cetirizine 10mg - 1 tab daily', 'Calamine Lotion - Apply as needed'],
    status: 'Dispensed',
    date: '2025-01-14'
  },
  {
    prescription_id: 'RX-2003',
    patient_id: 'P-1003',
    patient_name: 'Arjun Patel',
    medicines: ['Atorvastatin 20mg - 1 tab daily', 'Metoprolol 50mg - 1 tab twice daily', 'Aspirin 75mg - 1 tab daily'],
    status: 'Pending',
    date: '2025-01-16'
  },
  {
    prescription_id: 'RX-2004',
    patient_id: 'P-1004',
    patient_name: 'Priya Sharma',
    medicines: ['Diclofenac 50mg - 1 tab twice daily', 'Paracetamol 650mg - 1 tab 8hr', 'Calcium + Vitamin D - 1 tab daily'],
    status: 'Pending',
    date: '2025-01-17'
  },
  {
    prescription_id: 'RX-2005',
    patient_id: 'P-1005',
    patient_name: 'Rohit Gupta',
    medicines: ['Paracetamol Syrup - 5ml 6hr', 'Amoxicillin 250mg - 1 tab twice daily', 'Cough Syrup - 5ml twice daily'],
    status: 'Dispensed',
    date: '2025-01-13'
  }
];

export const enhancedTestRequests: TestRequest[] = [
  {
    request_id: 'LR-4001',
    patient_id: 'P-1001',
    patient_name: 'Ravi Kumar',
    test_type: 'MRI Brain',
    status: 'Completed',
    date: '2025-01-15'
  },
  {
    request_id: 'LR-4002',
    patient_id: 'P-1002',
    patient_name: 'Meena Rajesh',
    test_type: 'Skin Patch Test',
    status: 'In Progress',
    date: '2025-01-16'
  },
  {
    request_id: 'LR-4003',
    patient_id: 'P-1003',
    patient_name: 'Arjun Patel',
    test_type: 'Lipid Profile',
    status: 'Sample Collected',
    date: '2025-01-17'
  },
  {
    request_id: 'LR-4004',
    patient_id: 'P-1004',
    patient_name: 'Priya Sharma',
    test_type: 'X-Ray Knee',
    status: 'Completed',
    date: '2025-01-14'
  },
  {
    request_id: 'LR-4005',
    patient_id: 'P-1005',
    patient_name: 'Rohit Gupta',
    test_type: 'CBC',
    status: 'Requested',
    date: '2025-01-18'
  }
];

// Staff data for hospital management
export const hospitalStaff = [
  {
    staff_id: 'S-1001',
    name: 'Nurse Rekha Sharma',
    role: 'Senior Nurse',
    department: 'General Ward',
    contact: '+91 9876543220',
    shift: 'Day',
    status: 'Active'
  },
  {
    staff_id: 'S-1002',
    name: 'Mr. Vijay Kumar',
    role: 'Lab Technician',
    department: 'Laboratory',
    contact: '+91 9876543221',
    shift: 'Day',
    status: 'Active'
  },
  {
    staff_id: 'S-1003',
    name: 'Ms. Priya Singh',
    role: 'Pharmacist',
    department: 'Pharmacy',
    contact: '+91 9876543222',
    shift: 'Day',
    status: 'Active'
  },
  {
    staff_id: 'S-1004',
    name: 'Mr. Rajesh Gupta',
    role: 'Receptionist',
    department: 'Front Desk',
    contact: '+91 9876543223',
    shift: 'Day',
    status: 'Active'
  },
  {
    staff_id: 'S-1005',
    name: 'Nurse Sunita Rao',
    role: 'ICU Nurse',
    department: 'ICU',
    contact: '+91 9876543224',
    shift: 'Night',
    status: 'Active'
  }
];

// Inventory data for pharmacy
export const pharmacyInventory = [
  {
    medicine_id: 'MED-001',
    name: 'Paracetamol 500mg',
    type: 'Tablet',
    stock: 500,
    expiry_date: '2026-12-31',
    supplier: 'ABC Pharma',
    price: 2.50
  },
  {
    medicine_id: 'MED-002',
    name: 'Ibuprofen 200mg',
    type: 'Tablet',
    stock: 300,
    expiry_date: '2026-10-15',
    supplier: 'XYZ Medicines',
    price: 3.00
  },
  {
    medicine_id: 'MED-003',
    name: 'Amoxicillin 250mg',
    type: 'Capsule',
    stock: 150,
    expiry_date: '2025-08-20',
    supplier: 'DEF Pharmaceuticals',
    price: 8.50
  },
  {
    medicine_id: 'MED-004',
    name: 'Cetirizine 10mg',
    type: 'Tablet',
    stock: 200,
    expiry_date: '2026-06-30',
    supplier: 'ABC Pharma',
    price: 1.75
  },
  {
    medicine_id: 'MED-005',
    name: 'Atorvastatin 20mg',
    type: 'Tablet',
    stock: 100,
    expiry_date: '2025-12-31',
    supplier: 'GHI Medicines',
    price: 12.00
  }
];

// Lab equipment and tests
export const labEquipment = [
  {
    equipment_id: 'EQ-001',
    name: 'CBC Analyzer',
    status: 'Active',
    last_maintenance: '2025-01-10',
    next_maintenance: '2025-04-10'
  },
  {
    equipment_id: 'EQ-002',
    name: 'X-Ray Machine',
    status: 'Active',
    last_maintenance: '2025-01-05',
    next_maintenance: '2025-07-05'
  },
  {
    equipment_id: 'EQ-003',
    name: 'MRI Scanner',
    status: 'Under Maintenance',
    last_maintenance: '2025-01-15',
    next_maintenance: '2025-01-20'
  },
  {
    equipment_id: 'EQ-004',
    name: 'Ultrasound Machine',
    status: 'Active',
    last_maintenance: '2024-12-20',
    next_maintenance: '2025-06-20'
  }
];
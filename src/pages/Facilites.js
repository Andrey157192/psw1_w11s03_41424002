import React, { useState } from 'react';
import './Dashboard.css'; 
import { Link } from 'react-router-dom';

const facilitiesData = [
    { id: 1, name: 'Laboratorium Komputer', description: 'Laboratorium dengan perangkat komputer modern yang dilengkapi dengan jaringan internet.' },
    { id: 2, name: 'Perpustakaan', description: 'Perpustakaan dengan koleksi buku yang lengkap dan ruang baca yang nyaman.' },
    { id: 3, name: 'Lapangan Olahraga', description: 'Lapangan serbaguna yang dapat digunakan untuk berbagai kegiatan olahraga.' },
    { id: 4, name: 'Ruang Musik', description: 'Ruang dilengkapi alat musik lengkap untuk mendukung kegiatan ekstrakurikuler musik.' },
    { id: 5, name: 'Kantin', description: 'Kantin yang menyediakan berbagai makanan sehat untuk siswa dan staf.' },
    { id: 6, name: 'Ruang Kesenian', description: 'Ruang untuk kegiatan seni seperti tari, teater, dan seni rupa.' },
];

const Facilities = () => {
    const [selectedFacility, setSelectedFacility] = useState(null);

    const handleFacilityClick = (facility) => {
        setSelectedFacility(facility);
    };

    return (
        <div className="dashboard">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="logo">
                    <img src="bt.png" alt="School Logo" />
                    <h2>SMA SW BTS</h2>
                </div>
                <nav>
                    <ul>
                        <li className="nav-item">
                            <Link to="/dashboard">
                                <i className="fas fa-home"></i> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/schedule">
                                <i className="fas fa-calendar-alt"></i> Schedule
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="#grades">
                                <i className="fas fa-graduation-cap"></i> Grades
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to="/facilities">
                                <i className="fas fa-building"></i> Facilities
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="#announcements">
                                <i className="fas fa-bullhorn"></i> Announcements
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#profile">
                                <i className="fas fa-user"></i> Profile
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#settings">
                                <i className="fas fa-cogs"></i> Settings
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="active-teachers">
                    <p>Active Teachers</p>
                    <div className="teacher-icons">
                        <img src="/teacher1.jpg" alt="Teacher 1" />
                        <img src="/teacher2.jpg" alt="Teacher 2" />
                        <img src="/teacher3.jpg" alt="Teacher 3" />
                        <span>+15</span>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                {/* Header */}
                <header>
                    <h1>Facilities</h1>
                    <p>Explore the facilities available at our school.</p>
                </header>

                {/* Facilities List */}
                <section className="facilities-list">
                    <h3>Available Facilities</h3>
                    <ul className="facility-items">
                        {facilitiesData.map((facility) => (
                            <li 
                                key={facility.id} 
                                className="facility-item"
                                onClick={() => handleFacilityClick(facility)}
                            >
                                {facility.name}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Facility Details */}
                {selectedFacility && (
                    <section className="facility-details">
                        <h3>{selectedFacility.name}</h3>
                        <p>{selectedFacility.description}</p>
                        <button onClick={() => setSelectedFacility(null)}>Close</button>
                    </section>
                )}
            </main>
        </div>
    );
};

export default Facilities;

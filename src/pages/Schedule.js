import React from 'react';
import './Dashboard.css'; // Menggunakan CSS yang sama untuk konsistensi
import { Link } from 'react-router-dom';

const Schedule = () => {
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
                    <h1>Weekly Schedule</h1>
                    <p>Here’s an overview of your school activities for the week</p>
                </header>

                {/* Schedule Table */}
                <section className="schedule-section">
                    <table className="schedule-table">
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                                <th>Saturday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>07:00 - 07:45</td>
                                <td>Math</td>
                                <td>Science</td>
                                <td>History</td>
                                <td>Math</td>
                                <td>Geography</td>
                                <td>English</td>
                            </tr>
                            <tr>
                                <td>07:45 - 08:30</td>
                                <td>Physics</td>
                                <td>Math</td>
                                <td>Geography</td>
                                <td>History</td>
                                <td>Math</td>
                                <td>Art</td>
                            </tr>
                            <tr>
                                <td>08:30 - 09:15</td>
                                <td>Math</td>
                                <td>History</td>
                                <td>Math</td>
                                <td>Science</td>
                                <td>Art</td>
                                <td>Physics</td>
                            </tr>
                            <tr>
                                <td>09:15 - 10:00</td>
                                <td>Geography</td>
                                <td>English</td>
                                <td>Science</td>
                                <td>Geography</td>
                                <td>History</td>
                                <td>Math</td>
                            </tr>
                            <tr>
                                <td>10:00 - 10:45</td>
                                <td>History</td>
                                <td>Art</td>
                                <td>English</td>
                                <td>Math</td>
                                <td>Geography</td>
                                <td>English</td>
                            </tr>
                            <tr>
                                <td>10:45 - 11:30</td>
                                <td>Science</td>
                                <td>Math</td>
                                <td>Art</td>
                                <td>English</td>
                                <td>Physics</td>
                                <td>History</td>
                            </tr>
                            <tr>
                                <td>11:30 - 12:15</td>
                                <td>English</td>
                                <td>Geography</td>
                                <td>History</td>
                                <td>Science</td>
                                <td>Math</td>
                                <td>Art</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default Schedule;

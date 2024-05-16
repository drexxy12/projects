-- Creating the Gymnasiums table
CREATE TABLE Gymnasiums (
    gym_id INT PRIMARY KEY,
    name VARCHAR2(100),
    address VARCHAR2(255),
    telephone_number VARCHAR2(20)
);

-- Creating the Members table
CREATE TABLE Members (
    member_id INT PRIMARY KEY,
    last_name VARCHAR2(100),
    first_name VARCHAR2(100),
    address VARCHAR2(255),
    date_of_birth DATE,
    gender VARCHAR2(10),
    gym_id INT,
    CONSTRAINT fk_gym_id FOREIGN KEY (gym_id) REFERENCES Gymnasiums(gym_id)
);

-- Creating the Sessions table
CREATE TABLE Sessions (
    session_id INT PRIMARY KEY,
    sport_type VARCHAR2(100),
    schedule VARCHAR2(100),
    max_capacity INT,
    gym_id INT,
    CONSTRAINT fk_session_gym_id FOREIGN KEY (gym_id) REFERENCES Gymnasiums(gym_id)
);

-- Creating the Coaches table
CREATE TABLE Coaches (
    coach_id INT PRIMARY KEY,
    last_name VARCHAR2(100),
    first_name VARCHAR2(100),
    age INT,
    specialty VARCHAR2(100),
    gym_id INT,
    CONSTRAINT fk_coach_gym_id FOREIGN KEY (gym_id) REFERENCES Gymnasiums(gym_id)
);

-- Creating the Registration table
CREATE TABLE Registration (
    registration_id INT PRIMARY KEY,
    member_id INT,
    session_id INT,
    CONSTRAINT fk_registration_member_id FOREIGN KEY (member_id) REFERENCES Members(member_id),
    CONSTRAINT fk_registration_session_id FOREIGN KEY (session_id) REFERENCES Sessions(session_id)
);

-- Creating the SessionCoaches table
CREATE TABLE SessionCoaches (
    session_id INT,
    coach_id INT,
    CONSTRAINT pk_session_coaches PRIMARY KEY (session_id, coach_id),
    CONSTRAINT fk_session_coach_session_id FOREIGN KEY (session_id) REFERENCES Sessions(session_id),
    CONSTRAINT fk_session_coach_coach_id FOREIGN KEY (coach_id) REFERENCES Coaches(coach_id)
);
-- Adding a column Category (VARCHAR2(20)) to the PRODUCT table
ALTER TABLE Product ADD Category VARCHAR2(20);

-- Adding a column OrderDate (DATE) to the ORDERS table which has SYSDATE as a default value
ALTER TABLE Orders ADD OrderDate DATE DEFAULT SYSDATE;

-- database here
DROP DATABASE IF EXISTS Emotions_DB;
CREATE DATABASE Emotions_DB;
USE Emotions_DB;

CREATE TABLE moodtracking (
    id INT NOT NULL,
    userid VARCHAR(30),
    date DATE,
    mood INT NOT NULL,
    act1 VARCHAR(30),
    act2 VARCHAR(30),
    act3 VARCHAR(30),
    act4 VARCHAR(30),
    act5 VARCHAR(30),
    act6 VARCHAR(30),
    PRIMARY KEY (id)

);

CREATE TABLE userid (
    idnum INT NOT NULL,
    userid VARCHAR(30),
    pass VARCHAR(30),
    PRIMARY KEY (userid)
)
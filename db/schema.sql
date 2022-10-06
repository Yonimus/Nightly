-- database here
DROP DATABASE IF EXISTS Emotions_DB;
CREATE DATABASE Emotions_DB;
USE Emotions_DB;

CREATE TABLE moodtracking (
    id INT NOT NULL,
    userid VARCHAR(30),
    date DATE,
    mood VARCHAR(30),
    moodtext VARCHAR(30),
    cooking VARCHAR(30),
    musicact VARCHAR(30),
    meditateact VARCHAR(30),
    schoolact VARCHAR(30),
    junkact VARCHAR(30),
    bingeact VARCHAR(30),
    PRIMARY KEY (id)

);

CREATE TABLE userid (
    idnum INT NOT NULL,
    userid VARCHAR(30),
    pass VARCHAR(30),
    PRIMARY KEY (userid)
);

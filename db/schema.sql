DROP DATABASE IF EXISTS snacks_dev;
CREATE DATABASE snacks_dev;

\c snacks_dev;

CREATE TABLE snacks (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 calories INT NOT NULL,
 fat INT NOT NULL,
 sodium INT NOT NULL,
 carbs INT NOT NULL,
 added_sugars BOOLEAN DEFAULT FALSE
);


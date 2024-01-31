-- Active: 1701273258915@@127.0.0.1@3306@checkpoint4


use checkpoint4;

create table user (
  id int primary key auto_increment,
  username varchar(30) unique not null,
  email varchar(30) unique not null,
  password varchar(255) not null
);

create table volunteer (
  id int primary key auto_increment ,
  firstname varchar(30) not null,
  lastname varchar(30) not null,
  email varchar(30) unique not null,
  practice_id int not null,
  Foreign Key (practice_id) REFERENCES practice(id)
);

create table practice (
  id int primary key auto_increment  ,
  name varchar(30) not null
);

create table mission(
  id int primary key auto_increment  ,
  volunteer_id int not null,
  Foreign Key (volunteer_id) REFERENCES volunteer(id)
);

INSERT INTO practice(name)
VALUES
    ('medecine'),
    ('hacker'),
    ('crook'),
    ('driver'),
    ('fighter')
;

insert into volunteer(firstname,lastname,email,practice_id) VALUES
('Mafty', 'Navue Erin', 'tureves@gmail.com', 3)

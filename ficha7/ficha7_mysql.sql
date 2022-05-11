create database backend;
use backend;

create table persons(
persons_id int auto_increment,
firstname varchar(50) not null,
lastnae varchar(50) not null,
profession varchar(50) not null,
age int not null,
primary key(persons_id)
);

insert into persons ( persons_id,firstname,lastnae,profession,age) values ("1","Juan","Lopez","professor","27");
insert into persons ( persons_id,firstname,lastnae,profession,age) values ("2","alex","diogo","student","22");
insert into persons ( persons_id,firstname,lastnae,profession,age) values ("3","gui","camera","director","37");
create database if not exists buildingmanagement ;
use buildingmanagement ;

-- Table Employee Building
create table if not exists Emp_Building (
	ID_Emp int primary key auto_increment,
    Emp_Code varchar(10),
    Name_Emp nvarchar(30),
    Gender nvarchar(3),
    ID_Card varchar(12),
    DofB date,
    Address nvarchar(50),
    Phone_Number varchar(15),
    Job_Position nvarchar(30),
    ID_Emp_Manager int,
    foreign key (ID_Emp_Manager) references Emp_Building(ID_Emp)
);
-- Table Account
create table if not exists Accounts (
	ID_Account int primary key auto_increment,
    User_Name varchar(10),
    Pass_Word varchar(10),
    ID_Emp int,
    Status_Acc tinyint
    -- foreign key (ID_Emp) references Emp_Building(ID_Emp)
);
-- Table Company
create table if not exists Company (
	ID_Cpn int primary key auto_increment,
    Cpn_Code varchar(10),
    Name_Cpn nvarchar(30),
    Tax_Code nvarchar(20),
    Capital varchar(20),
    Num_Of_Emp int,
    Address nvarchar(50),
    Acreage float,
    Phone_Number varchar(15),
    Start_Date date,
    End_Date date
);
-- Table Employee Company
create table if not exists Emp_Company (
	ID_Emp int primary key auto_increment,
    Emp_Code varchar(10),
    ID_Cpn int,
    Name_Emp nvarchar(30),
    Gender nvarchar(3),
    ID_Card varchar(12),
    DofB date,
    Address nvarchar(50),
    Phone_Number varchar(15),
    foreign key (ID_Cpn) references Company(ID_Cpn)
);
-- Table Service
create table if not exists Service (
	ID_Service int primary key auto_increment,
    Service_Code varchar(10),
    Name_Service nvarchar(30),
    Unit_Price float
);
-- Table Register Service
create table if not exists Register_Service (
	ID_Register int primary key auto_increment,
    ID_Cpn int,
    ID_Service int,
    Start_Date date,
    End_Date date,
    Price float,
    foreign key (ID_Cpn) references Company(ID_Cpn),
    foreign key (ID_Service) references Service(ID_Service)
);
-- Table Do Service
create table if not exists Do_Service (
	ID_Do int primary key auto_increment,
    ID_Service int,
    ID_Emp int,
    Start_Date date,
    End_Date date,
    Salary_Unit_Price float,
    foreign key (ID_Service) references Service(ID_Service),
    foreign key (ID_Emp) references Emp_Building(ID_Emp)
);
-- Table Card
create table if not exists Card (
	ID_Card int primary key auto_increment,
    ID_Emp int,
    ID_Cpn int,
    Date_Of_Issue date,
    Expiration_Date date,
    Type_Card tinyint,
    foreign key (ID_Emp) references Emp_Company(ID_Emp),
    foreign key (ID_Cpn) references Company(ID_Cpn)
);
-- Table In and Out
create table if not exists In_Out (
	ID_Inout int primary key auto_increment,
    ID_Card int,
    Time_Inout datetime,
    Type_Inout nvarchar(3),
    Place nvarchar(20),
    foreign key (ID_Card) references Card(ID_Card)
);
-- Table Electricity and Water
create table if not exists Elec_Water (
	ID int primary key auto_increment,
    ID_Cpn int,
    Num_Of_Elec int,
    Num_Of_Water int,
    Month_Use int,
    foreign key (ID_Cpn) references Company(ID_Cpn)
);
-- Table Device
create table if not exists Device (
	ID_Device int primary key auto_increment,
    Code_Device varchar(10),
    Name_Device nvarchar(20),
    Amount int
);
-- Table Event
create table if not exists Event_Cpn (
	ID_Event int primary key auto_increment,
    ID_Cpn int,
    Event_Name nvarchar(50),
    Start_Date datetime,
    ID_Emp int,
    foreign key (ID_Cpn) references Company(ID_Cpn),
    foreign key (ID_Emp) references Emp_Building(ID_Emp)
);
create database quanlytoanha;
use quanlytoanha;
drop database quanlytoanha;

create table congtythue (
	maCT varchar(10) primary key not null,
    tenCT varchar(30) not null,
    thue long ,
    vonDL varchar(10),
    soNV int ,
    diachi varchar(10) ,
    dientich float ,
    soDT varchar(11),
    ngaythue date,
    ngayKT date
);
create table nhanviencongty (
	maNV varchar(10) not null,
    maCT varchar(10),
    CMT varchar(12) ,
    tenNV varchar(30) ,
    ngaysinh date ,
    soDT varchar(11),
    primary key(maNV),
    foreign key (maCT) references congtythue(maCT)
	ON DELETE cascade
	ON UPDATE CASCADE
);
create table nhanvientoanha(
	maNV varchar(10) primary key not null,
    tenNV varchar(30) not null,
    ngaysinh date,
    diachi varchar(50),
    soDT varchar(11),
    bac int,
    vitri varchar(10),
    maNV_QL varchar(10),
	foreign key (maNV_QL) references nhanvientoanha(maNV)ON DELETE set null
	ON UPDATE CASCADE
    );
    
    
create table dichvu(
	maDV varchar(10) primary key not null ,
    tenDV varchar(10) not null,
    giaDV float
);
    
create table dangkydichvu(
	maDK INT NOT NULL AUTO_INCREMENT primary key,
	maCT varchar(10) ,
    maDV varchar(10),
    ngayDK date ,
	ngayKT date,
    giaDV float,
    foreign key (maCT) references congtythue(maCT)ON DELETE cascade
	ON UPDATE CASCADE,
    foreign key (maDV) references dichvu(maDV) ON DELETE cascade
	ON UPDATE CASCADE
);

create table lamdichvu (
	maLV varchar(10) primary key,
    maDV varchar(10),
    maNV varchar(10),
    ngayBD date,
    ngayKT date,
    dongialuong float,
    foreign key (maDV) references dichvu(maDV) ON DELETE cascade
ON UPDATE CASCADE,
    foreign key (maNV) references nhanvientoanha(maNV) ON DELETE cascade
ON UPDATE CASCADE
);

create table the (
maT varchar(10) primary key,
maNV varchar(10),
ngaycap date,
ngayhethan date,
loai varchar(20),
foreign key (maNV) references nhanviencongty(maNV) ON DELETE cascade
ON UPDATE CASCADE
);

create table ravao (
	maRV varchar(10) not null,
    maT varchar(10) , 
    tgian datetime,
    loai varchar(5),
    diadiem varchar(20),
    primary key(maRV),
    foreign key(maT) references the(maT) ON DELETE cascade
ON UPDATE CASCADE
);

-- Triggrer công ty bắt buộc sử dụng dịch vụ bảo vệ, vệ sinh .
DELIMITER //
create trigger dichvudefault after INSERT ON congtythue FOR EACH ROW
    begin
    insert into dangkydichvu (maCT,maDV,ngayDK, ngayKT) 
    value (new.maCT,'DV01',new.ngaythue,new.ngayKT);
    insert into dangkydichvu (maCT,maDV,ngayDK, ngayKT ) 
    value (new.maCT,'DV02',new.ngaythue,new.ngayKT);
end //
-- drop trigger dichvudefault

---------------------------------------------------
-- trigger cap nhap nhan vien cong ty
DELIMITER //
CREATE TRIGGER capnhapsonhannien AFTER
INSERT ON nhanviencongty
FOR EACH ROW
	BEGIN 
		update congtythue
        set soNV = soNV +1
        where new.maCT = congtythue.maCT;
END// 
-- drop trigger capnhapsonhannien;
-- trigger xoa nhan vien
DELIMITER //
CREATE TRIGGER xoanhannien AFTER
Delete ON nhanviencongty
FOR EACH ROW
	BEGIN 
		update congtythue
        set soNV = soNV -1;
END// 
-- drop trigger capnhapsonhannien;
#VIEW_1: HOA DON CONG TY
DROP VIEW HOA_DON_CTY;
CREATE VIEW HOA_DON_CTY
AS
SELECT congtythue.maCT, congtythue.tenCT,dichvu.maDV,dichvu.tenDV,dangkydichvu.ngayDK,dangkydichvu.ngayKT,dichvu.giaDV,
case
	when congtythue.soNV >10 and congtythue.dientich>100 then dichvu.giaDV*(1+ (floor((congtythue.soNV-10)/5) +floor((congtythue.dientich - 100)/10))*0.05)
    when congtythue.soNV >10 then dichvu.giaDV*(1+ (floor((congtythue.soNV-10)/5))*0.05)
    when congtythue.dientich>100  then dichvu.giaDV*(1+ (floor(+(congtythue.dientich-100)/10))*0.05)
    ELSE dichvu.giaDV
END AS thuctedichvu
    FROM congtythue,dichvu,dangkydichvu
    where  congtythue.maCT = dangkydichvu.MaCT and dichvu.maDV = dangkydichvu.maDV;
----------------------------------------------------
-- tinh luong nhan vien 
create view Tinhluongnhanvien 
as
select A.*, B.luonghoahong, sum(A.luongcung+B.luonghoahong) as tongluong
from 
-- luong cung theo dich vu
(select lamdichvu.maNV,nhanvientoanha.tenNV,lamdichvu.maDV,(-1)*DATEDIFF (lamdichvu.ngayBD ,lamdichvu.ngayKT) as songaylam,dongialuong*(-1)*DATEDIFF (lamdichvu.ngayBD, lamdichvu.ngayKT) as luongcung
FROM lamdichvu,nhanvientoanha
where lamdichvu.maNV = nhanvientoanha.maNV) as A
,
-- luong hoa hong
(select lamdichvu.maNV,E.maDV, E.luongdv as luonghoahong
from lamdichvu,(select B.maDV, C.soNV,B.tiendichvu,(B.tiendichvu-D.socongty)/ C.soNV*0.5 as luongdv
From
(SELECT maDv, sum(thuctedichvu) as tiendichvu
FROM quanlytoanha.HOA_DON_CTY
group by madv) as B, (SELECT maDV, count(distinct(maNV))as soNV FROM quanlytoanha.lamdichvu
group by maDV) as C, (select dangkydichvu.maDV,dangkydichvu.giaDV,count(dangkydichvu.maCT)*dichvu.GiaDV as socongty
from dangkydichvu,dichvu
where dangkydichvu.maDV =dichvu.maDV
group by dangkydichvu.maDV) as D 
where B.maDV = C.maDV and B.maDV=D.maDV) as E
where lamdichvu.maDv = E.maDV) as B

where A.maNV=B.maNV and A.maDV=B.maDV
group by A.maNV,A.maDV



-- dich vu
INSERT INTO `quanlytoanha`.`dichvu` (`maDV`, `tenDV`, `giaDV`) VALUES ('DV01', 'Bao Ve', '200000');
INSERT INTO `quanlytoanha`.`dichvu` (`maDV`, `tenDV`, `giaDV`) VALUES ('DV02', 'Ve Sinh', '100000');
INSERT INTO `quanlytoanha`.`dichvu` (`maDV`, `tenDV`, `giaDV`) VALUES ('DV03', 'An uong', '100000');
-- cong ty
INSERT INTO `quanlytoanha`.`congtythue` (`maCT`, `tenCT`, `thue`, `vonDL`, `soNV`, `diachi`, `dientich`, `soDT`, `ngaythue`, `ngayKT`) VALUES ('CT01', 'Sam Sung', '123753', '10 ty', '0', 'Tang  2', '105', '34527382', '2019/1/1', '2020/6/1');
INSERT INTO `quanlytoanha`.`congtythue` (`maCT`, `tenCT`, `thue`, `vonDL`, `soNV`, `diachi`, `dientich`, `soDT`, `ngaythue`, `ngayKT`) VALUES ('CT02', 'Formosa', '234567', '20 ty', '0', 'tang 1', '140', '34567', '2020/1/1', '2020/8/1');
INSERT INTO `quanlytoanha`.`congtythue` (`maCT`, `tenCT`, `thue`, `vonDL`, `diachi`, `dientich`, `soDT`, `ngaythue`, `ngayKT`) VALUES ('CT03', 'Honda', '234566543', '4 ty', 'Tang4', '89', '7654323', '2020/2/1', '2020/9/1');
-- nhan vien cong ty
INSERT INTO `quanlytoanha`.`nhanviencongty` (`maNV`, `maCT`, `CMT`, `tenNV`, `ngaysinh`, `soDT`) VALUES ('NV1', 'CT01', '12345', 'le a', '1996/2/3', '34567');
INSERT INTO `quanlytoanha`.`nhanviencongty` (`maNV`, `maCT`, `CMT`, `tenNV`) VALUES ('NV2', 'CT02', '23456', 'tran B');
-- nhan vien toa nha
INSERT INTO `quanlytoanha`.`nhanvientoanha` (`maNV`, `tenNV`, `diachi`, `bac`, `vitri`, `maNV_QL`) VALUES ('NV01', 'Duong Tuan Anh', 'Nam Dinh', '2', 'Giam Doc', 'NV01');
INSERT INTO `quanlytoanha`.`nhanvientoanha` (`maNV`, `tenNV`, `diachi`, `bac`, `vitri`, `maNV_QL`) VALUES ('NV02', 'Nghiem Tuan Anh', 'Ha Noi', '1', 'Bao Ve', 'NV01');
INSERT INTO `quanlytoanha`.`nhanvientoanha` (`maNV`, `tenNV`, `diachi`, `bac`, `vitri`, `maNV_QL`) VALUES ('NV03', 'Ha Van Chieu', 'Hoa Binh', '1', 'Ve Sinh', 'NV01');
-- Lam Viec
INSERT INTO `quanlytoanha`.`lamdichvu` (`maLV`, `maDV`, `maNV`, `ngayBD`, `ngayKT`, `dongialuong`) VALUES ('LV01', 'DV01', 'NV01', '2020/1/1', '2020/3/2', '1000');
INSERT INTO `quanlytoanha`.`lamdichvu` (`maLV`, `maDV`, `maNV`, `ngayBD`, `ngayKT`, `dongialuong`) VALUES ('LV02', 'DV02', 'NV02', '2019/12/31', '2020/3/2', '800');
INSERT INTO `quanlytoanha`.`lamdichvu` (`maLV`, `maDV`, `maNV`, `ngayBD`, `ngayKT`, `dongialuong`) VALUES ('LV03', 'DV01', 'NV03', '2020/2/1', '2020/5/1', '900');
INSERT INTO `quanlytoanha`.`lamdichvu` (`maLV`, `maDV`, `maNV`, `ngayBD`, `ngayKT`, `dongialuong`) VALUES ('LV04', 'DV01', 'NV02', '2020/3/4', '2020/5/6', '900');




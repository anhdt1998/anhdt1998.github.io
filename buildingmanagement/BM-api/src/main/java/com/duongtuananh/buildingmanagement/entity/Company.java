package com.duongtuananh.buildingmanagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

@Entity(name = "Company")
public class Company implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID_Cpn;
    private String Cpn_Code;
    private String Name_Cpn;
    private String Tax_Code;
    private String Capital;
    private Integer Num_Of_Emp;
    private String Address;
    private Float Acreage;
    private String Phone_Number;
    private Date Start_Date;
    private Date End_Date;

    public Integer getID_Cpn() {
        return ID_Cpn;
    }

    public void setID_Cpn(Integer ID_Cpn) {
        this.ID_Cpn = ID_Cpn;
    }

    public String getCpn_Code() {
        return Cpn_Code;
    }

    public void setCpn_Code(String cpn_Code) {
        Cpn_Code = cpn_Code;
    }

    public String getName_Cpn() {
        return Name_Cpn;
    }

    public void setName_Cpn(String name_Cpn) {
        Name_Cpn = name_Cpn;
    }

    public String getTax_Code() {
        return Tax_Code;
    }

    public void setTax_Code(String tax_Code) {
        Tax_Code = tax_Code;
    }

    public String getCapital() {
        return Capital;
    }

    public void setCapital(String capital) {
        Capital = capital;
    }

    public Integer getNum_Of_Emp() {
        return Num_Of_Emp;
    }

    public void setNum_Of_Emp(Integer num_Of_Emp) {
        Num_Of_Emp = num_Of_Emp;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public Float getAcreage() {
        return Acreage;
    }

    public void setAcreage(Float acreage) {
        Acreage = acreage;
    }

    public String getPhone_Number() {
        return Phone_Number;
    }

    public void setPhone_Number(String phone_Number) {
        Phone_Number = phone_Number;
    }

    public Date getStart_Date() {
        return Start_Date;
    }

    public void setStart_Date(Date start_Date) {
        Start_Date = start_Date;
    }

    public Date getEnd_Date() {
        return End_Date;
    }

    public void setEnd_Date(Date end_Date) {
        End_Date = end_Date;
    }
}

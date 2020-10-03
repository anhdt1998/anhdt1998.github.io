package com.duongtuananh.buildingmanagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

@Entity(name = "Emp_Company")
public class Emp_Company implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID_Emp;
    private String Emp_Code;
    private Integer ID_Cpn;
    private String Name_Emp;
    private String Gender;
    private String ID_Card;
    private Date DofB;
    private String Address;
    private String Phone_Number;

    public Integer getID_Emp() {
        return ID_Emp;
    }

    public void setID_Emp(Integer ID_Emp) {
        this.ID_Emp = ID_Emp;
    }

    public String getEmp_Code() {
        return Emp_Code;
    }

    public void setEmp_Code(String emp_Code) {
        Emp_Code = emp_Code;
    }

    public Integer getID_Cpn() {
        return ID_Cpn;
    }

    public void setID_Cpn(Integer ID_Cpn) {
        this.ID_Cpn = ID_Cpn;
    }

    public String getName_Emp() {
        return Name_Emp;
    }

    public void setName_Emp(String name_Emp) {
        Name_Emp = name_Emp;
    }

    public String getGender() {
        return Gender;
    }

    public void setGender(String gender) {
        Gender = gender;
    }

    public String getID_Card() {
        return ID_Card;
    }

    public void setID_Card(String ID_Card) {
        this.ID_Card = ID_Card;
    }

    public Date getDofB() {
        return DofB;
    }

    public void setDofB(Date dofB) {
        DofB = dofB;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getPhone_Number() {
        return Phone_Number;
    }

    public void setPhone_Number(String phone_Number) {
        Phone_Number = phone_Number;
    }
}

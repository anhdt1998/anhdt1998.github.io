package com.duongtuananh.buildingmanagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

@Entity(name = "Emp_Building")
public class Emp_Building implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID_Emp;
    private String Emp_Code;
    private String Name_Emp;
    private String Gender;
    private String ID_Card;
    private Date DofB;
    private String Address;
    private String Phone_Number;
    private String Job_Position;
    private String ID_EmpManager;

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

    public String getJob_Position() {
        return Job_Position;
    }

    public void setJob_Position(String job_Position) {
        Job_Position = job_Position;
    }

    public String getID_EmpManager() {
        return ID_EmpManager;
    }

    public void setID_EmpManager(String ID_EmpManager) {
        this.ID_EmpManager = ID_EmpManager;
    }
}

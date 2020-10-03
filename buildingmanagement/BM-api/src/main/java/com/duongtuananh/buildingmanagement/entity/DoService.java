package com.duongtuananh.buildingmanagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

@Entity(name = "Do_Service")
public class DoService implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID_Do;
    private Integer ID_Service;
    private Integer ID_Emp;
    private Date Start_Date;
    private Date End_Date;
    private Float Salary_Unit_Price;

    public Integer getID_Do() {
        return ID_Do;
    }

    public void setID_Do(Integer ID_Do) {
        this.ID_Do = ID_Do;
    }

    public Integer getID_Service() {
        return ID_Service;
    }

    public void setID_Service(Integer ID_Service) {
        this.ID_Service = ID_Service;
    }

    public Integer getID_Emp() {
        return ID_Emp;
    }

    public void setID_Emp(Integer ID_Emp) {
        this.ID_Emp = ID_Emp;
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

    public Float getSalary_Unit_Price() {
        return Salary_Unit_Price;
    }

    public void setSalary_Unit_Price(Float salary_Unit_Price) {
        Salary_Unit_Price = salary_Unit_Price;
    }
}

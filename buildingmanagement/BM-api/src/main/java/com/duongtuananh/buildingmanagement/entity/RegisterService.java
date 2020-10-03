package com.duongtuananh.buildingmanagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

@Entity(name = "Register_Service")
public class RegisterService implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID_Register;
    private Integer ID_Cpn;
    private Integer ID_Service;
    private Date Start_Date;
    private Date End_Date;
    private Float Price;

    public Integer getID_Register() {
        return ID_Register;
    }

    public void setID_Register(Integer ID_Register) {
        this.ID_Register = ID_Register;
    }

    public Integer getID_Cpn() {
        return ID_Cpn;
    }

    public void setID_Cpn(Integer ID_Cpn) {
        this.ID_Cpn = ID_Cpn;
    }

    public Integer getID_Service() {
        return ID_Service;
    }

    public void setID_Service(Integer ID_Service) {
        this.ID_Service = ID_Service;
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

    public Float getPrice() {
        return Price;
    }

    public void setPrice(Float price) {
        Price = price;
    }
}

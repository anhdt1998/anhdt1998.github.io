package com.duongtuananh.buildingmanagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity(name = "Service")
public class Service implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID_Service;
    private String Service_Code;
    private String Name_Service;
    private Float Unit_Price;

    public Integer getID_Service() {
        return ID_Service;
    }

    public void setID_Service(Integer ID_Service) {
        this.ID_Service = ID_Service;
    }

    public String getService_Code() {
        return Service_Code;
    }

    public void setService_Code(String service_Code) {
        Service_Code = service_Code;
    }

    public String getName_Service() {
        return Name_Service;
    }

    public void setName_Service(String name_Service) {
        Name_Service = name_Service;
    }

    public Float getUnit_Price() {
        return Unit_Price;
    }

    public void setUnit_Price(Float unit_Price) {
        Unit_Price = unit_Price;
    }
}

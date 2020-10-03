package com.duongtuananh.buildingmanagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity(name = "Device")
public class Device implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID_Device;
    private String Code_Device;
    private String Name_Device;
    private Integer Amount;

    public Integer getID_Device() {
        return ID_Device;
    }

    public void setID_Device(Integer ID_Device) {
        this.ID_Device = ID_Device;
    }

    public String getCode_Device() {
        return Code_Device;
    }

    public void setCode_Device(String code_Device) {
        Code_Device = code_Device;
    }

    public String getName_Device() {
        return Name_Device;
    }

    public void setName_Device(String name_Device) {
        Name_Device = name_Device;
    }

    public Integer getAmount() {
        return Amount;
    }

    public void setAmount(Integer amount) {
        Amount = amount;
    }
}

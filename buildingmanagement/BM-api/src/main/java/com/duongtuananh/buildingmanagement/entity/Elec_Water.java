package com.duongtuananh.buildingmanagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity(name = "Elec_Water")
public class Elec_Water implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID;
    private Integer ID_Cpn;
    private Integer Num_Of_Elec;
    private Integer Num_Of_Water;
    private Integer Month_Use;

    public Integer getID() {
        return ID;
    }

    public void setID(Integer ID) {
        this.ID = ID;
    }

    public Integer getID_Cpn() {
        return ID_Cpn;
    }

    public void setID_Cpn(Integer ID_Cpn) {
        this.ID_Cpn = ID_Cpn;
    }

    public Integer getNum_Of_Elec() {
        return Num_Of_Elec;
    }

    public void setNum_Of_Elec(Integer num_Of_Elec) {
        Num_Of_Elec = num_Of_Elec;
    }

    public Integer getNum_Of_Water() {
        return Num_Of_Water;
    }

    public void setNum_Of_Water(Integer num_Of_Water) {
        Num_Of_Water = num_Of_Water;
    }

    public Integer getMonth_Use() {
        return Month_Use;
    }

    public void setMonth_Use(Integer month_Use) {
        Month_Use = month_Use;
    }
}

package com.duongtuananh.buildingmanagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

@Entity(name = "In_Out")
public class In_Out implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID_Inout;
    private Integer ID_Card;
    private Date Time_Inout;
    private String Type_Inout;
    private String Place;

    public Integer getID_Inout() {
        return ID_Inout;
    }

    public void setID_Inout(Integer ID_Inout) {
        this.ID_Inout = ID_Inout;
    }

    public Integer getID_Card() {
        return ID_Card;
    }

    public void setID_Card(Integer ID_Card) {
        this.ID_Card = ID_Card;
    }

    public Date getTime_Inout() {
        return Time_Inout;
    }

    public void setTime_Inout(Date time_Inout) {
        Time_Inout = time_Inout;
    }

    public String getType_Inout() {
        return Type_Inout;
    }

    public void setType_Inout(String type_Inout) {
        Type_Inout = type_Inout;
    }

    public String getPlace() {
        return Place;
    }

    public void setPlace(String place) {
        Place = place;
    }
}

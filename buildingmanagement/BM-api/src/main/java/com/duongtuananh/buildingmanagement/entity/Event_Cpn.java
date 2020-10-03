package com.duongtuananh.buildingmanagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

@Entity(name = "Event_Cpn")
public class Event_Cpn implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID_Event;
    private Integer ID_Cpn;
    private String Event_Name;
    private Date Start_Date;
    private Integer ID_Emp;

    public Integer getID_Event() {
        return ID_Event;
    }

    public void setID_Event(Integer ID_Event) {
        this.ID_Event = ID_Event;
    }

    public Integer getID_Cpn() {
        return ID_Cpn;
    }

    public void setID_Cpn(Integer ID_Cpn) {
        this.ID_Cpn = ID_Cpn;
    }

    public String getEvent_Name() {
        return Event_Name;
    }

    public void setEvent_Name(String event_Name) {
        Event_Name = event_Name;
    }

    public Date getStart_Date() {
        return Start_Date;
    }

    public void setStart_Date(Date start_Date) {
        Start_Date = start_Date;
    }

    public Integer getID_Emp() {
        return ID_Emp;
    }

    public void setID_Emp(Integer ID_Emp) {
        this.ID_Emp = ID_Emp;
    }
}

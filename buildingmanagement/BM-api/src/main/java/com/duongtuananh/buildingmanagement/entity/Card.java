package com.duongtuananh.buildingmanagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

@Entity(name = "Card")
public class Card implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID_Card;
    private Integer ID_Emp;
    private Integer ID_Cpn;
    private Date Date_Of_Issue;
    private Date Expiration_Date;
    private Integer Type_Card;

    public Integer getID_Card() {
        return ID_Card;
    }

    public void setID_Card(Integer ID_Card) {
        this.ID_Card = ID_Card;
    }

    public Integer getID_Emp() {
        return ID_Emp;
    }

    public void setID_Emp(Integer ID_Emp) {
        this.ID_Emp = ID_Emp;
    }

    public Integer getID_Cpn() {
        return ID_Cpn;
    }

    public void setID_Cpn(Integer ID_Cpn) {
        this.ID_Cpn = ID_Cpn;
    }

    public Date getDate_Of_Issue() {
        return Date_Of_Issue;
    }

    public void setDate_Of_Issue(Date date_Of_Issue) {
        Date_Of_Issue = date_Of_Issue;
    }

    public Date getExpiration_Date() {
        return Expiration_Date;
    }

    public void setExpiration_Date(Date expiration_Date) {
        Expiration_Date = expiration_Date;
    }

    public Integer getType_Card() {
        return Type_Card;
    }

    public void setType_Card(Integer type_Card) {
        Type_Card = type_Card;
    }
}

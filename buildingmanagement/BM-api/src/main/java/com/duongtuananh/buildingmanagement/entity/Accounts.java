package com.duongtuananh.buildingmanagement.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "Accounts")
public class Accounts implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID_Account;
    private String User_Name;
    private String Pass_Word;
    private Integer ID_Emp;
    private Integer Status_Acc;

    public Integer getID_Account() {
        return ID_Account;
    }

    public void setID_Account(Integer ID_Account) {
        this.ID_Account = ID_Account;
    }

    public String getUser_Name() {
        return User_Name;
    }

    public void setUser_Name(String user_Name) {
        User_Name = user_Name;
    }

    public String getPass_Word() {
        return Pass_Word;
    }

    public void setPass_Word(String pass_Word) {
        Pass_Word = pass_Word;
    }

    public Integer getID_Emp() {
        return ID_Emp;
    }

    public void setID_Emp(Integer ID_Emp) {
        this.ID_Emp = ID_Emp;
    }

    public Integer getStatus_Acc() {
        return Status_Acc;
    }

    public void setStatus_Acc(Integer status_Acc) {
        Status_Acc = status_Acc;
    }
}

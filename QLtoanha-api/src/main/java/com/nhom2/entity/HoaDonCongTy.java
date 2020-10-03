package com.nhom2.entity;

import com.nhom2.keys.HoaDonKeys;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity(name = "HOA_DON_CTY")
@IdClass(HoaDonKeys.class)
public class HoaDonCongTy implements Serializable {
    @Id
    private String maCT;
    private String tenCT;
    @Id
    private String maDV;
    private String tenDV;
    private Date ngayDK;
    private Date ngayKT;
    private Double giaDV;
    private Double thuctedichvu;

    public String getMaCT() {
        return maCT;
    }

    public void setMaCT(String maCT) {
        this.maCT = maCT;
    }

    public String getTenCT() {
        return tenCT;
    }

    public void setTenCT(String tenCT) {
        this.tenCT = tenCT;
    }

    public String getMaDV() {
        return maDV;
    }

    public void setMaDV(String maDV) {
        this.maDV = maDV;
    }

    public String getTenDV() {
        return tenDV;
    }

    public void setTenDV(String tenDV) {
        this.tenDV = tenDV;
    }

    public Date getNgayDK() {
        return ngayDK;
    }

    public void setNgayDK(Date ngayDK) {
        this.ngayDK = ngayDK;
    }

    public Date getNgayKT() {
        return ngayKT;
    }

    public void setNgayKT(Date ngayKT) {
        this.ngayKT = ngayKT;
    }

    public Double getGiaDV() {
        return giaDV;
    }

    public void setGiaDV(Double giaDV) {
        this.giaDV = giaDV;
    }

    public Double getThuctedichvu() {
        return thuctedichvu;
    }

    public void setThuctedichvu(Double thuctedichvu) {
        this.thuctedichvu = thuctedichvu;
    }


}

package com.nhom2.entity;

import com.nhom2.keys.LuongKeys;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.io.Serializable;

@Entity(name = "Tinhluongnhanvien")
@IdClass(LuongKeys.class)
public class LuongNhanVien implements Serializable {
    @Id
    private String maNV;
    private  String tenNV;
    @Id
    private String maDV;
    private int songaylam;
    private Double luongcung;
    private Double luonghoahong;
    private Double tongluong;

    public String getMaNV() {
        return maNV;
    }

    public void setMaNV(String maNV) {
        this.maNV = maNV;
    }

    public String getTenNV() {
        return tenNV;
    }

    public void setTenNV(String tenNV) {
        this.tenNV = tenNV;
    }

    public String getMaDV() {
        return maDV;
    }

    public void setMaDV(String maDV) {
        this.maDV = maDV;
    }

    public int getSongaylam() {
        return songaylam;
    }

    public void setSongaylam(int songaylam) {
        this.songaylam = songaylam;
    }

    public Double getLuongcung() {
        return luongcung;
    }

    public void setLuongcung(Double luongcung) {
        this.luongcung = luongcung;
    }

    public Double getLuonghoahong() {
        return luonghoahong;
    }

    public void setLuonghoahong(Double luonghoahong) {
        this.luonghoahong = luonghoahong;
    }

    public Double getTongluong() {
        return tongluong;
    }

    public void setTongluong(Double tongluong) {
        this.tongluong = tongluong;
    }
}

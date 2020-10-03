package com.nhom2.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity(name="dangkydichvu")

public class DangKyDichVu implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	private String maDK;
	private String maCT;
	private String maDV;
	private Date ngayDK;
	private Date ngayKT;
	private Double giaDV;
	public String getMaCT() {
		return maCT;
	}
	public void setMaCT(String maCT) {
		this.maCT = maCT;
	}
	public String getMaDV() {
		return maDV;
	}
	public void setMaDV(String maDV) {
		this.maDV = maDV;
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
	public String getMaDK() {
		return maDK;
	}
	public void setMaDK(String maDK) {
		this.maDK = maDK;
	}
	
}

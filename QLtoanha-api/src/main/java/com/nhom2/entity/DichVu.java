package com.nhom2.entity;

import javax.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity(name="dichvu")
public class DichVu implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	private String maDV;
	private String tenDV;
	private Double giaDV;

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
	public Double getGiaDV() {
		return giaDV;
	}
	public void setGiaDV(Double giaDV) {
		this.giaDV = giaDV;
	}
	
	
}

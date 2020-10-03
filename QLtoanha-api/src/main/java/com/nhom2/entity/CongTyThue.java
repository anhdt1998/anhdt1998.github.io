package com.nhom2.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="congtythue")

public class CongTyThue implements Serializable  {
	
	private static final long serialVersionUID = 1L;
	@Id
	private String maCT;

	private String tenCT;

	private  long thue;

	private String vonDL;

	private Integer soNV;

	private String diachi;

	private Float dientich;

	private String soDT;

	private Date ngaythue;

	private Date ngayKT;

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

	public Long getthue() {
		return thue;
	}

	public void setthue(Long thue) {
		this.thue = thue;
	}

	public String getVonDL() {
		return vonDL;
	}

	public void setVonDL(String vonDL) {
		this.vonDL = vonDL;
	}

	public Integer getSoNV() {
		return soNV;
	}

	public void setSoNV(Integer soNV) {
		this.soNV = soNV;
	}

	public String getDiachi() {
		return diachi;
	}

	public void setDiachi(String diachi) {
		this.diachi = diachi;
	}

	public Float getDientich() {
		return dientich;
	}

	public void setDientich(Float dientich) {
		this.dientich = dientich;
	}

	public String getSoDT() {
		return soDT;
	}

	public void setSoDT(String soDT) {
		this.soDT = soDT;
	}

	public Date getNgaythue() {
		return ngaythue;
	}

	public void setNgaythue(Date ngaythue) {
		this.ngaythue = ngaythue;
	}

	public Date getNgayKT() {
		return ngayKT;
	}

	public void setNgayKT(Date ngayKT) {
		this.ngayKT = ngayKT;
	}
}

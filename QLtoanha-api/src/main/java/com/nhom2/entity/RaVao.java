package com.nhom2.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="ravao")
public class RaVao implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	private String maRV;
	private String maT;
	private Date tgian;
	private String loai;
	private String diadiem;
	public String getMaRV() {
		return maRV;
	}
	public void setMaRV(String maRV) {
		this.maRV = maRV;
	}
	public String getMaT() {
		return maT;
	}
	public void setMaT(String maT) {
		this.maT = maT;
	}
	public Date getTgian() {
		return tgian;
	}
	public void setTgian(Date tgian) {
		this.tgian = tgian;
	}
	public String getLoai() {
		return loai;
	}
	public void setLoai(String loai) {
		this.loai = loai;
	}
	public String getDiadiem() {
		return diadiem;
	}
	public void setDiadiem(String diadiem) {
		this.diadiem = diadiem;
	}

}

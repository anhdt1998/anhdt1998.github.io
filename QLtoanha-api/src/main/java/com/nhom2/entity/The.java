package com.nhom2.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="the")
public class The implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	private String maT;
	private String maNV;
	private Date ngaycap;
	private Date ngayhethan;
	private String loai;
	public String getMaT() {
		return maT;
	}
	public void setMaT(String maT) {
		this.maT = maT;
	}
	public String getMaNV() {
		return maNV;
	}
	public void setMaNV(String maNV) {
		this.maNV = maNV;
	}
	public Date getNgaycap() {
		return ngaycap;
	}
	public void setNgaycap(Date ngaycap) {
		this.ngaycap = ngaycap;
	}
	public Date getNgayhethan() {
		return ngayhethan;
	}
	public void setNgayhethan(Date ngayhethan) {
		this.ngayhethan = ngayhethan;
	}
	public String getLoai() {
		return loai;
	}
	public void setLoai(String loai) {
		this.loai = loai;
	}
	
}

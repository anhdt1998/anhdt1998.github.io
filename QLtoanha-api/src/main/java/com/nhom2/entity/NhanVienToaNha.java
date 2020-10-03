package com.nhom2.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "nhanvientoanha")

public class NhanVienToaNha implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private String maNV;
	private String tenNV;
	private Date ngaysinh;
	private String diachi;
	private String soDT;
	private Integer bac;
	private String vitri;
	private String maNV_QL;
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
	public Date getNgaysinh() {
		return ngaysinh;
	}
	public void setNgaysinh(Date ngaysinh) {
		this.ngaysinh = ngaysinh;
	}
	
	public String getDiachi() {
		return diachi;
	}
	public void setDiachi(String diachi) {
		this.diachi = diachi;
	}

	public String getSoDT() {
		return soDT;
	}
	public void setSoDT(String soDT) {
		this.soDT = soDT;
	}
	public Integer getBac() {
		return bac;
	}
	public void setBac(Integer bac) {
		this.bac = bac;
	}
	public String getVitri() {
		return vitri;
	}
	public void setVitri(String vitri) {
		this.vitri = vitri;
	}
	public String getMaNV_QL() {
		return maNV_QL;
	}
	public void setMaNV_QL(String maNV_QL) {
		this.maNV_QL = maNV_QL;
	}
	
	
 
}

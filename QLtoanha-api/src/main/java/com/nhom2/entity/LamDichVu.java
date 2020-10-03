package com.nhom2.entity;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

@Entity(name="lamdichvu")
public class LamDichVu implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	private String maLV;
	private String maDV;
	private String maNV;
	private Date ngayBD;
	private Date ngayKT;
	private Double dongialuong;
	public String getMaLV() {
		return maLV;
	}
	public void setMaLV(String maLV) {
		this.maLV = maLV;
	}
	public String getMaDV() {
		return maDV;
	}
	public void setMaDV(String maDV) {
		this.maDV = maDV;
	}
	public String getMaNV() {
		return maNV;
	}
	public void setMaNV(String maNV) {
		this.maNV = maNV;
	}
	public Date getNgayBD() {
		return ngayBD;
	}
	public void setNgayBD(Date ngayBD) {
		this.ngayBD = ngayBD;
	}
	public Date getNgayKT() {
		return ngayKT;
	}
	public void setNgayKT(Date ngayKT) {
		this.ngayKT = ngayKT;
	}
	public Double getDongialuong() {
		return dongialuong;
	}
	public void setDongialuong(Double dongialuong) {
		this.dongialuong = dongialuong;
	}
	
}

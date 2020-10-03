package com.nhom2.entity;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="nhanviencongty")
public class NhanVienCongTy implements Serializable	 {

	private static final long serialVersionUID = 1L;
	@Id
	private String maNV;
	private String maCT;
	private String CMT;
	private String tenNV;
	private Date ngaysinh;
	public Date getNgaysinh() {
		return ngaysinh;
	}
	public void setNgaysinh(Date ngaysinh) {
		this.ngaysinh = ngaysinh;
	}
	private String soDT;
	public String getMaNV() {
		return maNV;
	}
	public void setMaNV(String maNV) {
		this.maNV = maNV;
	}
	public String getMaCT() {
		return maCT;
	}
	public void setMaCT(String maCT) {
		this.maCT = maCT;
	}
	public String getCMT() {
		return CMT;
	}
	public void setCMT(String cMT) {
		CMT = cMT;
	}
	public String getTenNV() {
		return tenNV;
	}
	public void setTenNV(String tenNV) {
		this.tenNV = tenNV;
	}
	
	public String getSoDT() {
		return soDT;
	}
	public void setSoDT(String soDT) {
		this.soDT = soDT;
	}

}
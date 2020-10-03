package com.nhom2.service;

import java.util.List;
import java.util.Optional;

import com.nhom2.entity.NhanVienCongTy;

public interface NhanVienCongTyService {
	 List<NhanVienCongTy> findAll();
	    void save(NhanVienCongTy nhanVienCongTy);
	    NhanVienCongTy update(NhanVienCongTy nhanVienCongTy);
		void delete(String maNV);

    Optional<NhanVienCongTy> getNVCTbyMa(String maNV);
}

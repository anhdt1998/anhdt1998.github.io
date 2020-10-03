package com.nhom2.service;

import java.util.List;
import java.util.Optional;

import com.nhom2.entity.NhanVienToaNha;

public interface NhanVienToaNhaService {
	
	    List<NhanVienToaNha> findAll();
	    void save(NhanVienToaNha nhanVienToaNha);
	    NhanVienToaNha update(NhanVienToaNha nhanVienToaNha);
	    void delete(String maNV);

    Optional<NhanVienToaNha> getNVTNbyMa(String maNV);
}




package com.nhom2.service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nhom2.entity.DichVu;
import com.nhom2.entity.NhanVienToaNha;
import com.nhom2.repository.NhanVienToaNhaRepository;
import com.nhom2.service.NhanVienToaNhaService;

@Service
public class NhanVienToaNhaServiceImpl implements NhanVienToaNhaService  {
	@Autowired
    private NhanVienToaNhaRepository nhanVienToaNhaRepository;

    @Override
    public List<NhanVienToaNha> findAll() {
        return nhanVienToaNhaRepository.findAll();
        
    }

	@Override
	public void save(NhanVienToaNha nhanVienToaNha) {
		// TODO Auto-generated method stub
		nhanVienToaNhaRepository.save(nhanVienToaNha);
		
	}

	@Override
	public NhanVienToaNha update(NhanVienToaNha nhanVienToaNha) {
		// TODO Auto-generated method stub
		Optional<NhanVienToaNha> oldDV = nhanVienToaNhaRepository.findById(nhanVienToaNha.getMaNV());
		nhanVienToaNhaRepository.save(nhanVienToaNha);
        return nhanVienToaNha;
	}

	@Override
	public void delete(String maNV) {
		// TODO Auto-generated method stub
		nhanVienToaNhaRepository.deleteById(maNV);
		
	}

	@Override
	public Optional<NhanVienToaNha> getNVTNbyMa(String maNV) {
		return nhanVienToaNhaRepository.findById(maNV);
	}

}

package com.nhom2.service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nhom2.entity.NhanVienCongTy;
import com.nhom2.repository.NhanVienCongTyRepository;
import com.nhom2.service.NhanVienCongTyService;

@Service
public class NhanVienCongTyServiceImpl implements NhanVienCongTyService {
	@Autowired
    private NhanVienCongTyRepository nhanVienCongTyRepository;


	@Override
	public List<NhanVienCongTy> findAll() {
		// TODO Auto-generated method stub
		return nhanVienCongTyRepository.findAll();
	}

	@Override
	public void save(NhanVienCongTy nhanVienCongTy) {
		// TODO Auto-generated method stub
		nhanVienCongTyRepository.save(nhanVienCongTy);
		
	}

	@Override
	public NhanVienCongTy update(NhanVienCongTy nhanVienCongTy) {
		// TODO Auto-generated method stub
		Optional<NhanVienCongTy> oldNV = nhanVienCongTyRepository.findById(nhanVienCongTy.getMaNV());
		nhanVienCongTyRepository.save(nhanVienCongTy);
        return nhanVienCongTy;
	}

	@Override
	public void delete(String maNV) {
		nhanVienCongTyRepository.deleteById(maNV);
	}

	@Override
	public Optional<NhanVienCongTy> getNVCTbyMa(String maNV) {
		return nhanVienCongTyRepository.findById(maNV);
	}


}

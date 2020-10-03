package com.nhom2.service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nhom2.entity.DangKyDichVu;
import com.nhom2.repository.DangKyDichVuRepository;
import com.nhom2.service.DangKyDichVuService;

@Service
public class DangKyDichVuServicelmpl implements DangKyDichVuService {
	@Autowired
    private DangKyDichVuRepository dangkydichvuRepository;

    @Override
    public List<DangKyDichVu> findAll() {
        return dangkydichvuRepository.findAll();
    }

    @Override
    public void save(DangKyDichVu dangkydichvu) {
        dangkydichvuRepository.save(dangkydichvu);
    }

   

	@Override
	public void deleteDV(String maDK) {
		dangkydichvuRepository.deleteById(maDK);
	}

    @Override
    public Optional<DangKyDichVu> getDKDVbyMaDK(String maDK) {
        return dangkydichvuRepository.findById(maDK);
    }

    @Override
	public DangKyDichVu update(DangKyDichVu dangkydichvu) {
		// TODO Auto-generated method stub
		return null;
	}

   
}

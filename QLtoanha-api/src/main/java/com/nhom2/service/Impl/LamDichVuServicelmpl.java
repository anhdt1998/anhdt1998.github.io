package com.nhom2.service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nhom2.entity.LamDichVu;
import com.nhom2.repository.LamDichVuRepository;
import com.nhom2.service.DichVuService;
import com.nhom2.service.LamDichVuService;


@Service
public class LamDichVuServicelmpl implements LamDichVuService{
	 @Autowired
	    private LamDichVuRepository lamdichvuRepository;

	    @Override
	    public List<LamDichVu> findAll() {
	        return lamdichvuRepository.findAll();
	    }

	    @Override
	    public void save(LamDichVu lamDichVu) {
	    	lamdichvuRepository.save(lamDichVu);
	    }

	    @Override
	    public LamDichVu update(LamDichVu lamDichVu) {
	        Optional<LamDichVu> oldLV = lamdichvuRepository.findById(lamDichVu.getMaLV());
	        lamdichvuRepository.save(lamDichVu);
	        return lamDichVu;
	    }

	    @Override
	    public void delete(String maLV) {
	    	lamdichvuRepository.deleteById(maLV);
	    }

	@Override
	public Optional<LamDichVu> getLDVbyMa(String maLV) {
		return lamdichvuRepository.findById(maLV);
	}
}

package com.nhom2.service.Impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nhom2.entity.CongTyThue;
import com.nhom2.repository.CongTyThueRepository;
import com.nhom2.service.CongTyThueService;


import java.util.List;
import java.util.Optional;

@Service
public class CongTyThueServicelmpl implements CongTyThueService {
	 @Autowired
	    private CongTyThueRepository congTythueRepository;
	  @Override
	    public List<CongTyThue> findAll() {
	        return congTythueRepository.findAll();
	    }

	    @Override
	    public void save(CongTyThue congtythue) {
	        congTythueRepository.save(congtythue);
	    }

	    @Override
	    public CongTyThue update(CongTyThue congtythue) {
	        Optional<CongTyThue> oldCT = congTythueRepository.findById(congtythue.getMaCT());
	        congTythueRepository.save(congtythue);
	        return congtythue;
	    }

	    @Override
	    public void delete(String maCT) {
	        congTythueRepository.deleteById(maCT);
	    }

	@Override
	public Optional<CongTyThue> getCTTbyMaCT(String maCT) {
		return congTythueRepository.findById(maCT);
	}
}

package com.nhom2.service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nhom2.entity.The;
import com.nhom2.repository.TheRepository;
import com.nhom2.service.TheService;

@Service
public class TheServiceImpl implements TheService {
	@Autowired
    private TheRepository theRepository;

	@Override
	public List<The> findAll() {
		// TODO Auto-generated method stub
		return theRepository.findAll();
	}

	@Override
	public void save(The the) {
		// TODO Auto-generated method stub
		theRepository.save(the);
		
	}

	@Override
	public The update(The the) {
		// TODO Auto-generated method stub
		Optional<The> oldDV = theRepository.findById(the.getMaT());
		theRepository.save(the);
        return the;
	}

	@Override
	public void delete(String maT) {
		// TODO Auto-generated method stub
		theRepository.deleteById(maT);
		
	}

	@Override
	public Optional<The> getThebyMa(String maT) {
		return theRepository.findById(maT);
	}

}

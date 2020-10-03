package com.nhom2.service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nhom2.entity.RaVao;
import com.nhom2.repository.RaVaoRepository;
import com.nhom2.service.RaVaoService;

@Service
public class RaVaoServiceImpl implements RaVaoService {
	@Autowired
    private RaVaoRepository raVaoRepository;

	@Override
	public List<RaVao> findAll() {
		// TODO Auto-generated method stub
		return raVaoRepository.findAll();
	}

	@Override
	public void save(RaVao raVao) {
		// TODO Auto-generated method stub
		raVaoRepository.save(raVao);
		
	}

	@Override
	public RaVao update(RaVao raVao) {
		// TODO Auto-generated method stub
		Optional<RaVao> oldDV = raVaoRepository.findById(raVao.getMaRV());
		raVaoRepository.save(raVao);
        return raVao;
	}

	@Override
	public void delete(String maRV) {
		// TODO Auto-generated method stub
		raVaoRepository.deleteById(maRV);
		
	}

	@Override
	public Optional<RaVao> getRVbyMa(String maRV) {
		return raVaoRepository.findById(maRV);
	}


}

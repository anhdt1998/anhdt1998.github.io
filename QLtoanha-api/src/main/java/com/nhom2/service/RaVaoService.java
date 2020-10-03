package com.nhom2.service;

import java.util.List;
import java.util.Optional;

import com.nhom2.entity.RaVao;

public interface RaVaoService {
	List<RaVao> findAll();
    void save(RaVao raVao);
    RaVao update(RaVao raVao);
    void delete(String maRV);

    Optional<RaVao> getRVbyMa(String maRV);
}

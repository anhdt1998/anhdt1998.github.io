package com.nhom2.service;

import java.util.List;
import java.util.Optional;

import com.nhom2.entity.The;

public interface TheService {
	List<The> findAll();
    void save(The the);
    The update(The the);
    void delete(String maT);

    Optional<The> getThebyMa(String maT);
}

package com.nhom2.service;
import java.util.List;
import java.util.Optional;

import com.nhom2.entity.CongTyThue;


public interface CongTyThueService {
	List<CongTyThue> findAll();
    void save(CongTyThue congtythue);
    CongTyThue update(CongTyThue congtythue);
    void delete(String maCT);
    Optional<CongTyThue> getCTTbyMaCT(String maCT);
}

package com.nhom2.repository;

import com.nhom2.entity.HoaDonCongTy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HoaDonCTRepository extends JpaRepository<HoaDonCongTy,Integer> {
}

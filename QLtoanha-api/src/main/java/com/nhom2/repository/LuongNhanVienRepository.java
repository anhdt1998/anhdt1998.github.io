package com.nhom2.repository;

import com.nhom2.entity.LuongNhanVien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LuongNhanVienRepository extends JpaRepository<LuongNhanVien,String> {

    @Query("select lnv from Tinhluongnhanvien lnv where lnv.maNV like ?1")
    List<LuongNhanVien> getLuongByMa (String maNV);
}

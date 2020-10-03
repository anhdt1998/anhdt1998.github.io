package com.nhom2.repository;

import com.nhom2.entity.LamDichVu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface LamDichVuRepository extends JpaRepository<LamDichVu,String>{

}

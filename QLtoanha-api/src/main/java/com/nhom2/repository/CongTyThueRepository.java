package com.nhom2.repository;
import com.nhom2.entity.CongTyThue;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CongTyThueRepository extends JpaRepository<CongTyThue,String> {

}

package com.nhom2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nhom2.entity.RaVao;
@Repository
public interface RaVaoRepository extends JpaRepository<RaVao,String> {

}

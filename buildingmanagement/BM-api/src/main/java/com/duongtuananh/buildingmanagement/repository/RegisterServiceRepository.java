package com.duongtuananh.buildingmanagement.repository;

import com.duongtuananh.buildingmanagement.entity.RegisterService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisterServiceRepository extends JpaRepository<RegisterService,Integer> {

}

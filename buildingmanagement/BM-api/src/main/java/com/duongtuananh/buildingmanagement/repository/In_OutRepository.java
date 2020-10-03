package com.duongtuananh.buildingmanagement.repository;

import com.duongtuananh.buildingmanagement.entity.In_Out;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface In_OutRepository extends JpaRepository<In_Out,Integer> {

}

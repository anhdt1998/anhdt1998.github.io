package com.duongtuananh.buildingmanagement.repository;

import com.duongtuananh.buildingmanagement.entity.Emp_Building;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Emp_BuildingRepository extends JpaRepository<Emp_Building,Integer> {

}

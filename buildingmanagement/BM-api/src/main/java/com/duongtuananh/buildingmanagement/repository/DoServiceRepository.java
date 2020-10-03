package com.duongtuananh.buildingmanagement.repository;

import com.duongtuananh.buildingmanagement.entity.DoService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoServiceRepository extends JpaRepository<DoService,Integer> {

}

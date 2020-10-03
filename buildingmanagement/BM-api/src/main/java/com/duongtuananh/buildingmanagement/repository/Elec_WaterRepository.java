package com.duongtuananh.buildingmanagement.repository;

import com.duongtuananh.buildingmanagement.entity.Elec_Water;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Elec_WaterRepository extends JpaRepository<Elec_Water,Integer> {

}

package com.duongtuananh.buildingmanagement.repository;

import com.duongtuananh.buildingmanagement.entity.Event_Cpn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Event_CpnRepository extends JpaRepository<Event_Cpn,Integer> {

}

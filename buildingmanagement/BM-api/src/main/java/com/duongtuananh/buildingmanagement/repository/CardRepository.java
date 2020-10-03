package com.duongtuananh.buildingmanagement.repository;

import com.duongtuananh.buildingmanagement.entity.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardRepository extends JpaRepository<Card,Integer> {

}

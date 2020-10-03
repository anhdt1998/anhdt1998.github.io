package com.duongtuananh.buildingmanagement.repository;

import com.duongtuananh.buildingmanagement.entity.Emp_Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Emp_CompanyRepository extends JpaRepository<Emp_Company,Integer> {

}

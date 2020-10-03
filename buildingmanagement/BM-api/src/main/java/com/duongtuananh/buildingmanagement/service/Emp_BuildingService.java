package com.duongtuananh.buildingmanagement.service;

import com.duongtuananh.buildingmanagement.entity.Emp_Building;

import java.util.List;

public interface Emp_BuildingService {
    List<Emp_Building> getAllEmpBuilding();
    void saveEmpBuilding(Emp_Building emp_building);
    void deleteEmpBuilding(Integer ID);
}

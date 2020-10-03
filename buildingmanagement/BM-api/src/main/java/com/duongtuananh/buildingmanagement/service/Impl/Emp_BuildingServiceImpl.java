package com.duongtuananh.buildingmanagement.service.Impl;

import com.duongtuananh.buildingmanagement.entity.Emp_Building;
import com.duongtuananh.buildingmanagement.repository.Emp_BuildingRepository;
import com.duongtuananh.buildingmanagement.service.Emp_BuildingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Emp_BuildingServiceImpl implements Emp_BuildingService {
    @Autowired
    private Emp_BuildingRepository emp_buildingRepository;

    @Override
    public List<Emp_Building> getAllEmpBuilding() {
        return emp_buildingRepository.findAll();
    }

    @Override
    public void saveEmpBuilding(Emp_Building emp_building) {
        emp_buildingRepository.save(emp_building);
    }

    @Override
    public void deleteEmpBuilding(Integer ID) {
        emp_buildingRepository.deleteById(ID);
    }
}

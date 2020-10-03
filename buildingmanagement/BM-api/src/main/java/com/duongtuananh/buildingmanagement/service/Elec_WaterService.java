package com.duongtuananh.buildingmanagement.service;

import com.duongtuananh.buildingmanagement.entity.Elec_Water;

import java.util.List;

public interface Elec_WaterService {
    List<Elec_Water> getAllElecWater();
    void saveElecWater(Elec_Water elec_water);
    void deleteElecWater(Integer ID);
}

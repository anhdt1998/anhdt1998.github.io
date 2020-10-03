package com.duongtuananh.buildingmanagement.service.Impl;

import com.duongtuananh.buildingmanagement.entity.Elec_Water;
import com.duongtuananh.buildingmanagement.repository.Elec_WaterRepository;
import com.duongtuananh.buildingmanagement.service.Elec_WaterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Elec_WaterServiceImpl implements Elec_WaterService {
    @Autowired
    private Elec_WaterRepository elec_waterRepository;

    @Override
    public List<Elec_Water> getAllElecWater() {
        return elec_waterRepository.findAll();
    }

    @Override
    public void saveElecWater(Elec_Water elec_water) {
        elec_waterRepository.save(elec_water);
    }

    @Override
    public void deleteElecWater(Integer ID) {
        elec_waterRepository.deleteById(ID);
    }
}

package com.duongtuananh.buildingmanagement.service.Impl;

import com.duongtuananh.buildingmanagement.entity.In_Out;
import com.duongtuananh.buildingmanagement.repository.In_OutRepository;
import com.duongtuananh.buildingmanagement.service.In_OutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class In_OutServiceImpl implements In_OutService {
    @Autowired
    private In_OutRepository in_outRepository;

    @Override
    public List<In_Out> getAllInOut() {
        return in_outRepository.findAll();
    }

    @Override
    public void saveInOut(In_Out in_out) {
        in_outRepository.save(in_out);
    }

    @Override
    public void deleteInOut(Integer ID) {
        in_outRepository.deleteById(ID);
    }
}

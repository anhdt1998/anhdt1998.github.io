package com.duongtuananh.buildingmanagement.service;

import com.duongtuananh.buildingmanagement.entity.In_Out;

import java.util.List;

public interface In_OutService {
    List<In_Out> getAllInOut();
    void saveInOut(In_Out in_out);
    void deleteInOut(Integer ID);
}

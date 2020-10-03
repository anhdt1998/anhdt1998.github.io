package com.duongtuananh.buildingmanagement.service;

import com.duongtuananh.buildingmanagement.entity.Company;

import java.util.List;

public interface CompanyService {
    List<Company> getAllCompany();
    void saveCompany(Company company);
    void deleteCompany(Integer ID);
}

package com.duongtuananh.buildingmanagement.service;

import com.duongtuananh.buildingmanagement.entity.Accounts;
import org.springframework.stereotype.Service;

import java.util.List;

public interface AccountSerVice {
    List<Accounts> getAllAccount();
    void saveAccount(Accounts accounts);
    void deleteAccount(Integer ID);
}

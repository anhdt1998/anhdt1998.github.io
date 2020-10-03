package com.nhom2.api;

import com.nhom2.entity.HoaDonCongTy;
import com.nhom2.keys.HoaDonKeys;
import com.nhom2.service.HoaDonCTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.IdClass;
import java.util.List;

@CrossOrigin
@RestController
public class HoaDonCTAPI {
    @Autowired
    private HoaDonCTService hoaDonCTService;

    @GetMapping(value = "/hoadonct")
    public List<HoaDonCongTy> getAllHoaDon(){
        return hoaDonCTService.getAllHoaDon();
    }
}

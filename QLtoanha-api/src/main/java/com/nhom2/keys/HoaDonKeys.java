package com.nhom2.keys;

import java.io.Serializable;

public class HoaDonKeys implements Serializable {
    private String maCT;
    private String maDV;

    public HoaDonKeys() {

    }
    public HoaDonKeys(String maCT, String maDV) {
        this.maCT = maCT;
        this.maDV = maDV;
    }
}

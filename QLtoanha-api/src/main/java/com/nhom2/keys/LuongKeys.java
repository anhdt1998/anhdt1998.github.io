package com.nhom2.keys;

import java.io.Serializable;

public class LuongKeys implements Serializable {
    private String maNV;
    private String maDV;

    public LuongKeys() {

    }

    public LuongKeys(String maNV, String maDV) {
        this.maNV = maNV;
        this.maDV = maDV;
    }
}

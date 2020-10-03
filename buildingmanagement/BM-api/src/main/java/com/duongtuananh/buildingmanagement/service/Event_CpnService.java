package com.duongtuananh.buildingmanagement.service;

import com.duongtuananh.buildingmanagement.entity.Event_Cpn;

import java.util.List;

public interface Event_CpnService {
    List<Event_Cpn> getAllEventCpn();
    void saveEventCpn(Event_Cpn event_cpn);
    void deleteEventCpn(Integer ID);
}

package com.duongtuananh.buildingmanagement.service.Impl;

import com.duongtuananh.buildingmanagement.entity.Event_Cpn;
import com.duongtuananh.buildingmanagement.repository.Event_CpnRepository;
import com.duongtuananh.buildingmanagement.service.Event_CpnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Event_CpnServiceImpl implements Event_CpnService {
    @Autowired
    private Event_CpnRepository event_cpnRepository;

    @Override
    public List<Event_Cpn> getAllEventCpn() {
        return event_cpnRepository.findAll();
    }

    @Override
    public void saveEventCpn(Event_Cpn event_cpn) {
        event_cpnRepository.save(event_cpn);
    }

    @Override
    public void deleteEventCpn(Integer ID) {
        event_cpnRepository.deleteById(ID);
    }
}

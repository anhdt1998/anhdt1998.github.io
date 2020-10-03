package com.duongtuananh.buildingmanagement.api;

import com.duongtuananh.buildingmanagement.entity.Event_Cpn;
import com.duongtuananh.buildingmanagement.service.Event_CpnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/event")
public class Event_CpnAPI {
    @Autowired
    private Event_CpnService event_cpnService;

    @GetMapping
    public List<Event_Cpn> getAllEvent() {
        return event_cpnService.getAllEventCpn();
    }

    @PostMapping
    public String insertEvent(@RequestBody Event_Cpn event_cpn) {
        event_cpnService.saveEventCpn(event_cpn);
        return "Inserted !";
    }

    @PutMapping(value = "/{ID}")
    public String updateEvent(@RequestBody Event_Cpn event_cpn,@PathVariable("ID") Integer ID) {
        event_cpn.setID_Event(ID);
        event_cpnService.saveEventCpn(event_cpn);
        return "Updated !";
    }

    @DeleteMapping(value = "/{ID}")
    public String deleteEvent(@PathVariable("ID") Integer ID) {
        event_cpnService.deleteEventCpn(ID);
        return "Deleted !";
    }
}

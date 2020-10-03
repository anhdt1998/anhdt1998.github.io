package com.duongtuananh.buildingmanagement.api;

import com.duongtuananh.buildingmanagement.entity.Card;
import com.duongtuananh.buildingmanagement.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CardAPI {
    @Autowired
    private CardService cardService;

    @GetMapping(value = "/card")
    public List<Card> getAllCard() {
        return cardService.getAllCard();
    }

    @PostMapping(value = "/card")
    public String insertCard(@RequestBody Card card) {
        cardService.saveCard(card);
        return "Inserted !";
    }

    @PutMapping(value = "/card/{ID}")
    public String updateCard(@RequestBody Card card,@PathVariable("ID") Integer ID) {
        card.setID_Card(ID);
        cardService.saveCard(card);
        return "Updated !";
    }

    @DeleteMapping(value = "/card/{ID}")
    public String deleteCard(@PathVariable("ID") Integer ID) {
        cardService.deleteCard(ID);
        return "Deleted !";
    }
}

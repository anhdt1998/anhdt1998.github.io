package com.duongtuananh.buildingmanagement.service;

import com.duongtuananh.buildingmanagement.entity.Card;

import java.util.List;

public interface CardService {
    List<Card> getAllCard();
    void saveCard(Card card);
    void deleteCard(Integer ID);
}

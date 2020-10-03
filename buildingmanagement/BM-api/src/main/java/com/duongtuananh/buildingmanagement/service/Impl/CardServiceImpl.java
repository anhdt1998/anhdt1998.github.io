package com.duongtuananh.buildingmanagement.service.Impl;

import com.duongtuananh.buildingmanagement.entity.Card;
import com.duongtuananh.buildingmanagement.repository.CardRepository;
import com.duongtuananh.buildingmanagement.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardServiceImpl implements CardService {
    @Autowired
    private CardRepository cardRepository;

    @Override
    public List<Card> getAllCard() {
        return cardRepository.findAll();
    }

    @Override
    public void saveCard(Card card) {
        cardRepository.save(card);
    }

    @Override
    public void deleteCard(Integer ID) {
        cardRepository.deleteById(ID);
    }
}

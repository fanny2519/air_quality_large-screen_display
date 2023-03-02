package com.example.service.impl;

import com.example.bean.*;
import com.example.mapper.IndexMapper;
import com.example.service.IndexService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class IndexServiceImpl implements IndexService {
    @Autowired
    private IndexMapper mapper;

    @Override
    public List<Beijing> queryBeijing() {
        return mapper.getBeijing();
    }

    @Override
    public List<Wuhan> queryWuhan() {
        return mapper.getWuhan();
    }

    @Override
    public List<City_good> queryCity_good() {
        return mapper.getCity_good();
    }

    @Override
    public List<City_bad> queryCity_bad() {
        return mapper.getCity_bad();
    }

    @Override
    public List<World> queryWorld() {
        return mapper.getWorld();
    }

    @Override
    public List<Country_bar> queryCountry_bar() {
        return mapper.getCountry_bar();
    }
}

package com.example.service;

import com.example.bean.*;

import java.util.List;

public interface IndexService {
    public List<Beijing> queryBeijing();
    public List<Wuhan> queryWuhan();
    public List<City_good> queryCity_good();
    public List<City_bad> queryCity_bad();
    public List<World> queryWorld();
    public List<Country_bar> queryCountry_bar();
}

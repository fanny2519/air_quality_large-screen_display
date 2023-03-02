package com.example.controller;

import com.example.bean.*;
import com.example.service.IndexService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class IndexController {
    @Autowired
    private IndexService service;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("line")
    @ResponseBody
    public List<Beijing> line() {
        return service.queryBeijing();
    }

    @GetMapping("pie")
    @ResponseBody
    public List<Wuhan> pie() {
        return service.queryWuhan();
    }

    @GetMapping("bar_good")
    @ResponseBody
    public List<City_good> bar_good() {
        return service.queryCity_good();
    }

    @GetMapping("bar_bad")
    @ResponseBody
    public List<City_bad> bar_bad() {
        return service.queryCity_bad();
    }

    @GetMapping("cloud")
    @ResponseBody
    public List<World> cloud() {
        return service.queryWorld();
    }

    @GetMapping("bar_country")
    @ResponseBody
    public List<Country_bar> bar_country() {
        return service.queryCountry_bar();
    }
}

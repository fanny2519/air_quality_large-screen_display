package com.example.mapper;
import com.example.bean.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface IndexMapper {

    @Select("select * from beijing_line")
    List<Beijing> getBeijing();

    @Select("select status as name,day as value from wuhan_pie")
    List<Wuhan> getWuhan();

    @Select("select city,PM2_5,O3,NO2 from city_good_bar")
    List<City_good> getCity_good();

    @Select("select city,PM2_5,O3,NO2 from city_bad_bar")
    List<City_bad> getCity_bad();

    @Select("select status as name,value from world_cloud")
    List<World> getWorld();

    @Select("select Country as name , `AQI Value` as value from Sorting")
    List<Country_bar> getCountry_bar();
}

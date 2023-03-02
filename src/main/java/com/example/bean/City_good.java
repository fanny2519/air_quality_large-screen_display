package com.example.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class City_good {
    private String city;
    private int PM2_5;
    private int O3;
    private int NO2;
}

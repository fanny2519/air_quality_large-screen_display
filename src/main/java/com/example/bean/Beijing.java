package com.example.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Beijing {
    private String date;
    private int PM2_5;
    private int AQI;
    private int PM10;
    private int SO2;
    private int CO;
    private int NO2;
    private int O3_8h;
}

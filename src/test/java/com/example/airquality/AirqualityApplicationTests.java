package com.example.airquality;

import com.example.bean.*;
import com.example.mapper.IndexMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class AirqualityApplicationTests {
	@Autowired
	private IndexMapper mapper;
	@Test
	public void chart1() {
		List<Beijing> bj = mapper.getBeijing();
		for (Beijing b : bj) {
			System.out.println(b.getDate()+","+b.getPM2_5());
		}
	}
	@Test
	public void chart2() {
		List<Wuhan> wh = mapper.getWuhan();
		for (Wuhan w : wh) {
			System.out.println(w.getName()+","+w.getValue());
		}
	}

	@Test
	public void chart3() {
		List<City_good> cg = mapper.getCity_good();
		for (City_good c : cg) {
			System.out.println(c.getCity()+","+c.getPM2_5());
		}
	}

	@Test
	public void chart4() {
		List<City_bad> cb = mapper.getCity_bad();
		for (City_bad c : cb) {
			System.out.println(c.getPM2_5()+","+c.getO3());
		}
	}

	@Test
	public void chart7() {
		List<World> w = mapper.getWorld();
		for (World ws : w) {
			System.out.println(ws.getName()+","+ws.getValue());
		}
	}

}

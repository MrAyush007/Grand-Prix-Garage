package com.app.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class TestDriveResDTO {
	
	private Long id;
	private String carName;
    private LocalDate testDriveDate;
    private String name;

}

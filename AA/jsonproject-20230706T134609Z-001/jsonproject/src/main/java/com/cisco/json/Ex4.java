package com.cisco.json;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

public class Ex4 {
public static void main(String[] args) throws JsonProcessingException {
	Map<String, Integer> marks= new HashMap<String, Integer>();
	marks.put("Maths", 99);
	marks.put("Eng", 90);
	Address address=new Address("Bangalore",123465789);
	int [] phoneNos= {123456,7894565};
	Student s=new Student(101, "ABC", marks, address, phoneNos);
	
	ObjectMapper mapper=new ObjectMapper();
	//mapper.enable(SerializationFeature.WRAP_ROOT_VALUE); //to enable Root for json
	String jsonData=mapper.
			writerWithDefaultPrettyPrinter().
			writeValueAsString(s);
	System.out.println(jsonData);
}
}

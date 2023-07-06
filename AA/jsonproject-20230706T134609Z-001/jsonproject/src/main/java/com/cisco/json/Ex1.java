package com.cisco.json;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;

public class Ex1 {
public static void main(String[] args) throws IOException {
	Product p1= new Product(101, "T Shirt", 999.99f);
	
	ObjectMapper objectMapper= new ObjectMapper();
	
	String prodAsJsonString= objectMapper.writeValueAsString(p1);
	System.out.println(prodAsJsonString);
	
	objectMapper.writeValue(new File("D:\\CISCO\\Cisco june/product.json"), p1);;
	
	Product p2= new Product(102, "Laptop", 65999.99f);
	Product myCart[]= {p1,p2};
	  List<Product> prodList =Arrays.asList(myCart);
	String json=objectMapper.writeValueAsString(myCart);
	System.out.println(json);objectMapper.writeValue(new File("D:\\CISCO\\Cisco june/myCart.json"), myCart);;
	System.out.println(json);objectMapper.writeValue(new File("D:\\CISCO\\Cisco june/myCart2.json"), prodList);;

}
}

package com.cisco.json;

import java.io.File;
import java.io.IOException;
import java.util.List;

import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Ex2 {
public static void main(String[] args) throws StreamReadException, DatabindException, IOException {

	ObjectMapper objectMapper= new ObjectMapper();
	  Product p=
			  objectMapper.readValue(new File("D:\\CISCO\\Cisco june/product.json"),
					  Product.class);
	  System.out.println(p);
	  
	  List<Product> prodList=
			  objectMapper.readValue(new File("D:\\CISCO\\Cisco june/myCart.json"),
					  new TypeReference<List<Product>>() {
	});
	  System.out.println("No of products : "+prodList.size());
	  for (Product product : prodList) {
		System.out.println(product);
	}
	  
}
}

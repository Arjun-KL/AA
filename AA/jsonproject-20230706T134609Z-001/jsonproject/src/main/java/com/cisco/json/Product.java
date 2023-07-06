package com.cisco.json;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Product {
private int productId;
@JsonProperty("pname")
private String productName;
private float price;

public Product() {
	// TODO Auto-generated constructor stub
	System.out.println("obj created....");
}

public Product(int productId, String productName, float price) {
	super();
	this.productId = productId;
	this.productName = productName;
	this.price = price;
}


public int getProductId() {
	return productId;
}
public void setProductId(int productId) {
	this.productId = productId;
}
public String getProductName() {
	return productName;
}
public void setProductName(String productName) {
	this.productName = productName;
}
public float getPrice() {
	return price;
}
public void setPrice(float price) {
	this.price = price;
}


@Override
public String toString() {
	return "Product [productId=" + productId + ", productName=" + productName + ", price=" + price + "]";
}

}

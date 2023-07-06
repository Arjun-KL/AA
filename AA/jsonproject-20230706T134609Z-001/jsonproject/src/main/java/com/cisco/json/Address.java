package com.cisco.json;

public class Address {
private String placeName;
private int pinCode;

public Address() {
	// TODO Auto-generated constructor stub
}

public Address(String placeName, int pinCode) {
	super();
	this.placeName = placeName;
	this.pinCode = pinCode;
}

public String getPlaceName() {
	return placeName;
}

public void setPlaceName(String placeName) {
	this.placeName = placeName;
}

public int getPinCode() {
	return pinCode;
}

public void setPinCode(int pinCode) {
	this.pinCode = pinCode;
}


}

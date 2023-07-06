package com.cisco.json;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonRootName;
@JsonPropertyOrder({"studName","id","phoneNos"})
@JsonRootName(value="STUD")
public class Student {
private int id;
private String studName;
private Map<String, Integer> marks;
private Address address;
private int[] phoneNos;
public Student() {
	// TODO Auto-generated constructor stub
}
public Student(int id, String studName, Map<String, Integer> marks, Address address,int[] phoneNos) {
	super();
	this.id = id;
	this.studName = studName;
	this.marks = marks;
	this.address = address;
	this.phoneNos=phoneNos;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getStudName() {
	return studName;
}
public void setStudName(String studName) {
	this.studName = studName;
}
@JsonAnyGetter
public Map<String, Integer> getMarks() {
	return marks;
}
public void setMarks(Map<String, Integer> marks) {
	this.marks = marks;
}
public Address getAddress() {
	return address;
}
public void setAddress(Address address) {
	this.address = address;
}
public int[] getPhoneNos() {
	return phoneNos;
}
public void setPhoneNos(int[] phoneNos) {
	this.phoneNos = phoneNos;
}


}

package com.cisco.json;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Scanner;
import java.util.Set;
import java.util.function.BiConsumer;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.wnameless.json.flattener.JsonFlattener;
import com.github.wnameless.json.unflattener.JsonUnflattener;
public class Ex3 {
public static void main(String[] args) throws JsonMappingException, JsonProcessingException  {
	ObjectMapper mapper= new ObjectMapper();
	//System.out.println("Enter the city");
	String city="Bangalore";
	String url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=1fc450dcc52f6d29758d36b3c1b6bd2c";
	String json="{\r\n"
			+ "\"problems\": [{\r\n"
			+ "    \"Diabetes\":[{\r\n"
			+ "        \"medications\":[{\r\n"
			+ "            \"medicationsClasses\":[{\r\n"
			+ "                \"className\":[{\r\n"
			+ "                    \"associatedDrug\":[{\r\n"
			+ "                        \"name\":\"asprin\",\r\n"
			+ "                        \"dose\":\"\",\r\n"
			+ "                        \"strength\":\"500 mg\"\r\n"
			+ "                    }],\r\n"
			+ "                    \"associatedDrug#2\":[{\r\n"
			+ "                        \"name\":\"somethingElse\",\r\n"
			+ "                        \"dose\":\"\",\r\n"
			+ "                        \"strength\":\"500 mg\"\r\n"
			+ "                    }]\r\n"
			+ "                }],\r\n"
			+ "                \"className2\":[{\r\n"
			+ "                    \"associatedDrug\":[{\r\n"
			+ "                        \"name\":\"asprin\",\r\n"
			+ "                        \"dose\":\"\",\r\n"
			+ "                        \"strength\":\"500 mg\"\r\n"
			+ "                    }],\r\n"
			+ "                    \"associatedDrug#2\":[{\r\n"
			+ "                        \"name\":\"somethingElse\",\r\n"
			+ "                        \"dose\":\"\",\r\n"
			+ "                        \"strength\":\"500 mg\"\r\n"
			+ "                    }]\r\n"
			+ "                }]\r\n"
			+ "            }]\r\n"
			+ "        }],\r\n"
			+ "        \"labs\":[{\r\n"
			+ "            \"missing_field\": \"missing_value\"\r\n"
			+ "        }]\r\n"
			+ "    }],\r\n"
			+ "    \"Asthma\":[{}]\r\n"
			+ "}]}";
	try {
		JsonNode jsonNode = mapper.readTree(new URL(url));
	
	// String flatJson=JsonFlattener.flatten(jsonNode.toString());
	 String flatJson=JsonFlattener.flatten(json);
	 System.out.println(jsonNode);
	 System.out.println("------flatten json-----------");
	 System.out.println(flatJson);
	 Map<String, Object> map=JsonFlattener.flattenAsMap(json);
	 System.out.println("------flatten as map-----------");

	 //System.out.println(map);
	/* Set<Map.Entry<String, Object>> set= map.entrySet();
	 for(Map.Entry<String, Object> r:set) {
		 System.out.println("Key: "+r.getKey());
		 System.out.println("Value : "+r.getValue());
	 }
	 */
	 BiConsumer<String, Object> consumer=(k,v)-> System.out.println(k+"<----> "+v);
	 
	 map.forEach(consumer);
	// map.forEach( (k,v)-> System.out.println(k+"<----> "+v));
	 
	String unflatten= JsonUnflattener.unflatten(flatJson);
	 System.out.println("------un flatten json-----------");
	System.out.println(unflatten);
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	JsonNode jsonNode=mapper.readTree(json);
//	navigate(jsonNode);
	//JsonNode jsonNode;
	try {
		jsonNode = mapper.readTree(json);
		
		System.out.println(jsonNode);
	//	String curTemp=jsonNode.get("main").get("temp").asText();
		
		//System.out.println("current Temperature of "+city+" is "+curTemp);
	      Iterator<Entry<String, JsonNode>>	 fields=  jsonNode.fields();
	      
	      while(fields.hasNext()) {
	    	 Entry<String, JsonNode> entry=  fields.next();
	    	 System.out.println("Key:"+entry.getKey());
	    	// System.out.println("        "+entry.getValue());
	    	 JsonNode ch1=entry.getValue();
	    	  JsonNode ch2=  ch1.get(0);
	    	    System.out.println(ch2.toString());
	  
	    	 System.out.println();
	      }
	} catch (IOException e) {
		System.out.println(e.getMessage());
		System.out.println("Enter valid city.....");
	}
	
	/*
	JsonNode jsonNode;
	try {
		jsonNode = mapper.readTree(new URL(url));
		
		System.out.println(jsonNode);
		String curTemp=jsonNode.get("main").get("temp").asText();
		System.out.println("current Temperature of "+city+" is "+curTemp);
	      Iterator<Entry<String, JsonNode>>	 fields=  jsonNode.fields();
	      while(fields.hasNext()) {
	    	 Entry<String, JsonNode> entry=  fields.next();
	    	 System.out.println(entry.getKey()+"<====>"+entry.getValue());
	      }
	} catch (IOException e) {
		System.out.println(e.getMessage());
		System.out.println("Enter valid city.....");
	}
	
	*/
}
static void navigate(JsonNode jsonNode) {
	System.out.println("node :"+ jsonNode);
	  Iterator<Entry<String, JsonNode>>	 fields=  jsonNode.fields();
      System.out.println("---------------");
      while(fields.hasNext()) {
    	 Entry<String, JsonNode> entry=  fields.next();
    	 System.out.println("Key:"+entry.getKey()+"<====>"+entry.getValue());
    	 System.out.println();
    	 navigate(entry.getValue());
      }
}
}

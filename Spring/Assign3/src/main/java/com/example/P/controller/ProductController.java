package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class ProductController {
	private static List<Product> list=new ArrayList<>();
	static
	{
		Product prod1=new Product(1,"Blackberry",30000);
		Product prod2=new Product(2,"LG",2000);
		Product prod3=new Product(3,"Spice",4500);
		Product prod4=new Product(4,"Apple",99000);
		list.add(prod1);
		list.add(prod2);
		list.add(prod3);
		list.add(prod4);
	}
	
	@RequestMapping("/hello")
	public String hello()
	{
		return "welcome";
	}
	
	@RequestMapping(value="/products",method=RequestMethod.GET)
			public List<Product> productinfo()
	{
		return list;
	}
	@RequestMapping(value="/product",method=RequestMethod.POST,consumes= {"application/json"},produces= {"application/json"})
	
	public Product addProduct(@RequestBody Product product)
	{
		list.add(product);
		
		return product;
		
	}


}

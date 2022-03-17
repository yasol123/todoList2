package com.yasol123.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//Controller
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {
	//Get Method
	//URI - /hello-world
	//method - "Hello World"
	//@RequestMapping(method = RequestMethod.GET, path = "/hello-world")
	@GetMapping(path = "/hello-world")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World!");
	}
	
	
	//hello-world-bean
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean HelloWorldBean() {
		//throw new RuntimeException("Some Error OCCURRED! Contact Support at 201-658-xxxx");
		return new HelloWorldBean("Hello World - Changed for Yasol");
	}
	
	// helloworld/path-variable/yasol123
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVaraible(@PathVariable String name) {
		return new HelloWorldBean(String.format("Halo World, %s", name));
	}
}

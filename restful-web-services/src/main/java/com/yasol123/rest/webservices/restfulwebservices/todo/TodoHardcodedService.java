package com.yasol123.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@SuppressWarnings("deprecation") //Date constructor is deprecated. not the java.util.Date (still okay)
@Service
public class TodoHardcodedService {
	private static List<Todo> todos = new ArrayList<>();
	private static long idCounter = 0;
	
//	static {
//		todos.add(new Todo(++idCounter, "yasol123", "Learn Java Spring Boot", new Date("1/16/2022"), false));
//		todos.add(new Todo(++idCounter, "yasol123", "Learn AWS Services", new Date("1/17/2022"), false));
//		todos.add(new Todo(++idCounter, "yasol123", "Learn RESTful API Servces", new Date("1/23/2022"), false));
//	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId()==-1 || todo.getId() == 0) {
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	public Todo deleteById(long id){
		Todo todo = findById(id);
		if (todo == null) return null;
		if(todos.remove(todo)) return todo;
		
		return null;
	}

	public Todo findById(long id) {
		for(Todo todo:todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		
		// TODO Auto-generated method stub
		return null;
	}
}

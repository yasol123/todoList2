package com.yasol123.rest.webservices.restfulwebservices.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.yasol123.rest.webservices.restfulwebservices.todo.Todo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResource {
	
	@Autowired
	private TodoHardcodedService todoService;
	
	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodo(@PathVariable String username){
		return todoService.findAll();
	}
	
	@GetMapping("/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable long id){
		return todoService.findById(id);
	}
	
	//DELETE /users/{username}/todos/{id}
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(
			@PathVariable String username, @PathVariable long id){
		Todo todo = todoService.deleteById(id);
		if(todo!=null) {
			//returning a status of no content. If successfully deleted.
			return ResponseEntity.noContent().build(); 
		}
		//Otherwise return response entity not found status
		return ResponseEntity.notFound().build();
	}
	
	//EDIT/Update a Todo
	//PUT /users/{username}/todos/{id}
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(
			@PathVariable String username, @PathVariable long id, @RequestBody Todo todo){
		Todo todoUpdated = todoService.save(todo);
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	//Create a new Todo
	//POST /users/{username}/todos/
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Void> createTodo(
			@PathVariable String username, @RequestBody Todo todo){
		Todo todoCreated = todoService.save(todo);
		
		//Location
		//Get current resource url
		//users/{username}/todos/{id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
		.buildAndExpand(todoCreated.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
}

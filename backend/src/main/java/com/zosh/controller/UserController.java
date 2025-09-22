package com.zosh.controller;

import com.zosh.domain.UserRole;
import com.zosh.exception.ProjectException;
import com.zosh.exception.UserException;
import com.zosh.model.User;
import com.zosh.response.ApiResponse;
import com.zosh.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
	
	
	private UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}

	@GetMapping("/api/users/profile")
	public ResponseEntity<User> getUserProfileHandler(
			@RequestHeader("Authorization") String jwt) throws UserException, ProjectException {

		User user = userService.findUserProfileByJwt(jwt);
		user.setPassword(null);

		return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/api/users/{userId}")
	public ResponseEntity<User> findUserById(
			@PathVariable Long userId,
			@RequestHeader("Authorization") String jwt) throws UserException {

		User user = userService.findUserById(userId);
		user.setPassword(null);

		return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
	}

	@PostMapping("/api/admin/users/trainers")
	public ResponseEntity<User> addNewTrainer(
			@RequestBody User user,
			@RequestHeader("Authorization") String jwt) throws Exception {

		User trainer = userService.addTrainer(
				user.getFullName(),
				user.getEmail(),
				user.getPassword(),
				user.getImage()
		);

		return new ResponseEntity<>(trainer, HttpStatus.CREATED);
	}

	@GetMapping("/users/trainers")
	public ResponseEntity<List<User>> getAllTrainers() throws UserException {

		List<User> user = userService.getUsersByRole(UserRole.ROLE_TRAINER);


		return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
	}

	@DeleteMapping("/api/admin/users/{userId}")
	public ResponseEntity<ApiResponse> deleteTrainer(

			@PathVariable Long userId,
			@RequestHeader("Authorization") String jwt
	) throws UserException {

		userService.deleteUser(userId);
		ApiResponse res=new ApiResponse();
		res.setMessage("Successfully deleted trainer");
		return new ResponseEntity<>(res, HttpStatus.CREATED);

	}

}

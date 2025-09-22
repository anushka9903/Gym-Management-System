package com.zosh.service;

import com.zosh.domain.UserRole;
import com.zosh.exception.ProjectException;
import com.zosh.exception.UserException;
import com.zosh.model.User;

import java.util.List;

public interface UserService {

	public User findUserProfileByJwt(String jwt) throws UserException, ProjectException;
	
	public User findUserByEmail(String email) throws UserException;
	
	public User findUserById(Long userId) throws UserException;


//	public List<User> findAllUsers();


	void updatePassword(User user, String newPassword);

	void sendPasswordResetEmail(User user);

	User addTrainer(String fullName, String email, String password,String image) throws Exception;

	void deleteUser(Long userId) throws UserException;

	List<User> getUsersByRole(UserRole role);


}

package com.zosh.service;

import com.zosh.config.JwtProvider;
import com.zosh.domain.UserRole;
import com.zosh.exception.ProjectException;
import com.zosh.exception.UserException;
import com.zosh.model.PasswordResetToken;
import com.zosh.model.User;
import com.zosh.repository.PasswordResetTokenRepository;
import com.zosh.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class UserServiceImplementation implements UserService {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;


//	@Autowired
//	private ProjectService projectService;

	@Override
	public User findUserProfileByJwt(String jwt) throws UserException, ProjectException {
		String email = JwtProvider.getEmailFromJwtToken(jwt);

		User user = userRepository.findByEmail(email);

//		int projectSize=projectService.getProjectsByTeam(user,null,null).size();
//		user.setProjectSize(projectSize);

		userRepository.save(user);

		if (user == null) {
			throw new UserException("user not exist with email " + email);
		}
		return user;
	}

	@Override
	public User findUserByEmail(String username) throws UserException {

		User user = userRepository.findByEmail(username);

		if (user != null) {

			return user;
		}

		throw new UserException("user not exist with username " + username);
	}

	@Override
	public User findUserById(Long userId) throws UserException {
		Optional<User> opt = userRepository.findById(userId);

		if (opt.isEmpty()) {
			throw new UserException("user not found with id " + userId);
		}
		return opt.get();
	}


	@Override
	public User addTrainer(String fullName, String email, String password,String image) throws Exception {
		User emailExist=userRepository.findByEmail(email);
		if (emailExist != null) {
			throw new Exception("email already exist with another account");
		}
		User user =new User();
		user.setFullName(fullName);
		user.setEmail(email);
		user.setImage(image);
		user.setPassword(passwordEncoder.encode(password));
		user.setRole(UserRole.ROLE_TRAINER);
		user.setCreatedAt(LocalDateTime.now());
		return userRepository.save(user);
	}

	@Override
	public void deleteUser(Long userId) throws UserException {
		User user = findUserById(userId);
		userRepository.delete(user);
	}

	@Override
	public List<User> getUsersByRole(UserRole role) {
		return userRepository.getUsersByRoleOrderByCreatedAtDesc(role);
	}


	private String generateRandomToken() {
		return UUID.randomUUID().toString();
	}

	private Date calculateExpiryDate() {
		Calendar cal = Calendar.getInstance();
		cal.setTime(new Date());
		cal.add(Calendar.MINUTE, 10);
		return cal.getTime();
	}

	}



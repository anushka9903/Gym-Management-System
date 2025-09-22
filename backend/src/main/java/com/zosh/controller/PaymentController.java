package com.zosh.controller;

import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.zosh.exception.ProjectException;
import com.zosh.exception.UserException;
import com.zosh.model.User;
import com.zosh.response.PaymentLinkResponse;
import com.zosh.service.UserService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
public class PaymentController {
	
	@Value("${razorpay.api.key}")
	private String apiKey;

	@Value("${razorpay.api.secret}")
	private String apiSecret;
	
	@Autowired
	private UserService userService;

	

	
	@PostMapping("/payments/{planType}")
	public ResponseEntity<PaymentLinkResponse>createPaymentLink(@PathVariable String planType,
			@RequestHeader("Authorization")String jwt)
			throws RazorpayException, UserException, ProjectException {
		User user=userService.findUserProfileByJwt(jwt);
		int amount = 10 * 100;

		// Adjust amount based on plan type
		if (planType.equals("ANNUALLY")) {
			// Apply 70% discount for annual plan
			int discount = (int) (10 * 0.5 * 12);
			amount=(10*12)-discount;
			amount = amount * 100;
		}

		if (planType.equals("QUARTERLY")) {
			// Apply 30% discount for annual plan
			int discount = (int) (10 * 0.3 * 6);
			amount=(10*6)-discount;
			amount = amount * 100;
		}

		 try {
		      // Instantiate a Razorpay client with your key ID and secret
		      RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);

		      // Create a JSON object with the payment link request parameters
		      JSONObject paymentLinkRequest = new JSONObject();
		      paymentLinkRequest.put("amount",amount);
		      paymentLinkRequest.put("currency","INR");    
//		      paymentLinkRequest.put("expire_by",1691097057);
//		      paymentLinkRequest.put("reference_id",order.getId().toString());
		     

		      // Create a JSON object with the customer details
		      JSONObject customer = new JSONObject();
		      customer.put("name",user.getFullName());

		      customer.put("email",user.getEmail());
		      paymentLinkRequest.put("customer",customer);

		      // Create a JSON object with the notification settings
		      JSONObject notify = new JSONObject();
		      notify.put("email",true);
		      paymentLinkRequest.put("notify",notify);

		      // Set the reminder settings
		      paymentLinkRequest.put("reminder_enable",true);

		      // Set the callback URL and method
		      paymentLinkRequest.put("callback_url","http://localhost:3000/subscription/success?planType="+planType);
		      paymentLinkRequest.put("callback_method","get");

		      // Create the payment link using the paymentLink.create() method
		      PaymentLink payment = razorpay.paymentLink.create(paymentLinkRequest);
		      
		      String paymentLinkId = payment.get("id");
		      String paymentLinkUrl = payment.get("short_url");
		      
		      PaymentLinkResponse res=new PaymentLinkResponse(paymentLinkUrl,paymentLinkId);
		      
		      return new ResponseEntity<PaymentLinkResponse>(res,HttpStatus.ACCEPTED);
		      
		    } catch (RazorpayException e) {
		    	
		      System.out.println("Error creating payment link: " + e.getMessage());
		      throw new RazorpayException(e.getMessage());
		    }
		
		

	}
	
//  @GetMapping("/payments")
//  public ResponseEntity<ApiResponse> redirect(@RequestParam(name="payment_id") String paymentId,@RequestParam("order_id")Long orderId) throws RazorpayException, OrderException {
//	  RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);
//	  Order order =orderService.findOrderById(orderId);
//
//	  try {
//
//
//		Payment payment = razorpay.payments.fetch(paymentId);
//		System.out.println("payment details --- "+payment+payment.get("status"));
//
//		if(payment.get("status").equals("captured")) {
//			System.out.println("payment details --- "+payment+payment.get("status"));
//
//			order.getPaymentDetails().setPaymentId(paymentId);
//			order.getPaymentDetails().setStatus(PaymentStatus.COMPLETED);
//			order.setOrderStatus(OrderStatus.PLACED);
////			order.setOrderItems(order.getOrderItems());
//			System.out.println(order.getPaymentDetails().getStatus()+"payment status ");
//			orderRepository.save(order);
//		}
//		ApiResponse res=new ApiResponse("your order get placed", true);
//	      return new ResponseEntity<ApiResponse>(res,HttpStatus.OK);
//
//	} catch (Exception e) {
//		System.out.println("errrr payment -------- ");
//		new RedirectView("https://shopwithzosh.vercel.app/payment/failed");
//		throw new RazorpayException(e.getMessage());
//	}
//
//  }

}

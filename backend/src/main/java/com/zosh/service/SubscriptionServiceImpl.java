package com.zosh.service;

import com.zosh.domain.PlanType;
import com.zosh.domain.SubscriptionType;
import com.zosh.model.Subscription;
import com.zosh.model.User;
import com.zosh.repository.SubscriptionRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class SubscriptionServiceImpl implements SubscriptionService{

    private final SubscriptionRepository subscriptionRepository;
    private final UserService userService;

    @Autowired
    public SubscriptionServiceImpl(SubscriptionRepository subscriptionRepository, UserService userService) {
        this.subscriptionRepository = subscriptionRepository;
        this.userService = userService;
    }

    @Override
    public Subscription createSubscription(User user,PlanType planType) {
        Subscription subscription=new Subscription();
        subscription.setUser(user);
        subscription.setSubscriptionStartDate(LocalDate.now());
        subscription.setSubscriptionEndDate(LocalDate.now().plusMonths(12)); // Assuming one month validity for simplicity
        subscription.setValid(true);
        subscription.setPlanType(planType);
        subscription.setSubscriptionEndDate(getSubscriptionEndDate(planType));
        return subscriptionRepository.save(subscription);
    }

    @NotNull
    private LocalDate getSubscriptionEndDate(PlanType planType) {
        LocalDate subscriptionEndDate;
        if(planType.equals(PlanType.ANNUALLY)){
            subscriptionEndDate = LocalDate.now().plusMonths(12);
        }
        else if(planType.equals(PlanType.QUARTERLY)){
            subscriptionEndDate = LocalDate.now().plusMonths(6);
        }
        else {
            subscriptionEndDate = LocalDate.now().plusMonths(1);
        }
        return subscriptionEndDate;
    }

    @Override
    public Subscription getUserSubscription(Long userId) throws Exception {
       Subscription subscription = subscriptionRepository.findByUserId(userId);
       if(subscription==null){
           throw new Exception("subscription not found with userId "+userId);
       }
       subscription.setValid(isValid(subscription));
       if(!isValid(subscription)){
           subscriptionRepository.delete(subscription);
           return null;
       }
        return subscription;
    }

    @Override
    public Subscription upgradeSubscription(Long userId, PlanType planType) {
        Subscription subscription = subscriptionRepository.findByUserId(userId);

        subscription.setSubscriptiontype(SubscriptionType.PAID);

        subscription.setPlanType(planType);
        subscription.setSubscriptionStartDate(LocalDate.now());
        subscription.setValid(true);
        subscription.setSubscriptionEndDate(getSubscriptionEndDate(planType));
        return subscriptionRepository.save(subscription);
    }

    @Override
    public List<Subscription> getAllSubscriptions() {
        return subscriptionRepository.findAll();
    }

    @Override
    public boolean isValid(Subscription subscription) {


        LocalDate endDate = subscription.getSubscriptionEndDate();
        LocalDate currentDate = LocalDate.now();

        return endDate.isAfter(currentDate) || endDate.isEqual(currentDate);


    }
}

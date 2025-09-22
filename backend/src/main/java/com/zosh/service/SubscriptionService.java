package com.zosh.service;

import com.zosh.domain.PlanType;
import com.zosh.model.Subscription;
import com.zosh.model.User;

import java.util.List;

public interface SubscriptionService {
    Subscription createSubscription(User user,PlanType planType);
    Subscription getUserSubscription(Long userId) throws Exception;
    Subscription upgradeSubscription(Long userId, PlanType planType);

    List<Subscription> getAllSubscriptions();

    boolean isValid(Subscription subscription);
}

package com.hriday.service;

import com.hriday.modal.PlanType;
import com.hriday.modal.Subscription;
import com.hriday.modal.User;

public interface SubscriptionService {

    Subscription createSubscription(User user);

    Subscription getUsersSubscription(Long userId) throws Exception;

    Subscription upgradeSubsCription(Long userId, PlanType planType);

    boolean isValid(Subscription subscription);


}

package com.hriday.service;


import jakarta.mail.MessagingException;

public interface EmailService {
      void sendEmailWithToken(String useEmail, String link) throws MessagingException;
}

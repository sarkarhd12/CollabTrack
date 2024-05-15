package com.hriday.service;

import com.hriday.modal.Invitation;
import com.hriday.repository.InvitationRepository;
import jakarta.mail.MessagingException;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;


@Service
public class InvitationServiceImpl implements InvitationService{

    @Autowired
    private EmailService emailService;

    @Autowired
    private InvitationRepository invitationRepository;

    @Override
    public void sendInvitation(String email, Long projectId) throws MessagingException {

        String invitationToken= UUID.randomUUID().toString();

        Invitation invitation=new Invitation();

        invitation.setEmail(email);
        invitation.setProjectId(projectId);
        invitation.setToken(invitationToken);

        invitationRepository.save(invitation);

        String invitationLink="http://localhost:5173/accept_invitation="+invitation;
        emailService.sendEmailWithToken(email,invitationLink);



    }

    @Override
    public Invitation acceptInvitation(String token, Long userid) throws Exception {
        Invitation invitation=invitationRepository.findByToken(token);
        if(invitation==null){
            throw new Exception("invalid invitation yoken");
        }
        return invitation;
    }

    @Override
    public String getTokenByUserMail(String userEmail) {
        Invitation invitation=invitationRepository.findByEmail(userEmail);

        return invitation.getToken();
    }

    @Override
    public void deleteToken(String token) {
        Invitation invitation=invitationRepository.findByToken(token);
        invitationRepository.delete(invitation);

    }
}

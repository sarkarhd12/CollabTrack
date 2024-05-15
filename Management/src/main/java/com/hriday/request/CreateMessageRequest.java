package com.hriday.request;

import lombok.Data;

@Data
public class CreateMessageRequest {

    private Long projectId;

    private Long senderId;

    private String content;

}

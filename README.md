# Project Management Application

## Overview
This project management application allows users to create and manage projects, invite team members, create and track issues, comment on issues, and communicate via a built-in chat feature.

## Features
- **User Registration and Authentication:** Users can register, log in, and manage their accounts.
- **Project Management:** Users can create, update, delete, and search for projects.
- **Team Management:** Project owners can invite team members and manage invitations.
- **Issue Tracking:** Users can create, assign, and track issues within a project.
- **Commenting:** Users can add comments to issues for better collaboration.
- **Project Chat:** Real-time chat functionality for project members to communicate.
- **User Profile and Subscription Management:** Users can view and manage their profiles and subscriptions.
- **Payment Integration:** Users can upgrade their subscriptions via Razorpay.

## Data Flow
### 1. User Registration and Authentication
- **User Registration:** Creates a new user and generates a JWT token.
- **User Login:** Authenticates the user and generates a JWT token.

### 2. Project Management
- **Create Project:** Creates a new project.
- **Get Projects:** Retrieves projects associated with the user.
- **Update Project:** Updates project details.
- **Delete Project:** Deletes a project.

### 3. Team Management
- **Invite Team Members:** Sends invitations to join a project.
- **Accept Invitation:** Accepts an invitation and adds the user to the project.

### 4. Issue Management
- **Create Issue:** Creates a new issue.
- **Get Issue by ID:** Retrieves issue details by ID.
- **Get Issues by Project ID:** Retrieves issues associated with a project.
- **Delete Issue:** Deletes an issue.
- **Update Issue Assignee:** Updates the assignee of an issue.
- **Update Issue Status:** Updates the status of an issue.

### 5. Commenting on Issues
- **Create Comment:** Creates a new comment on an issue.
- **Delete Comment:** Deletes a comment.
- **Get Comments by Issue ID:** Retrieves comments associated with an issue.

### 6. Project Chat
- **Send Message:** Sends a message in the project chat.
- **Get Messages by Project ID:** Retrieves messages associated with a project.

### 7. User Profile and Subscription Management
- **Get User Profile:** Retrieves user profile details.
- **Get User Subscription:** Retrieves user's subscription details.
- **Upgrade Subscription:** Upgrades the user's subscription.

### 8. Payment Integration
- **Create Payment Link:** Generates a payment link for subscription upgrade.

## Installation
1. Clone the repository:
   
2. Navigate to the project directory:
    ```bash
    cd project-management-app
    ```
3. Install dependencies:
    ```bash
    mvn install
    ```
4. Set up the database:
    - Configure your database settings in `src/main/resources/application.properties`.
    - Run the application to set up the database schema:
        ```bash
        mvn spring-boot:run
        ```
5. Start the application:
    ```bash
    mvn spring-boot:run
    ```

## Usage
1. Register a new user or log in with existing credentials.
2. Create and manage projects from the dashboard.
3. Invite team members and manage issues within your projects.
4. Use the chat feature to communicate with your team in real-time.
5. Manage your profile and subscription from the user settings.


# CollabTrack
# CollabTrack
# CollabTrack

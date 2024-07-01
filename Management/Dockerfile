# FROM openjdk:17
# ADD target/springboot-mysql-docker.jar springboot-mysql-docker.jar
# ENTRYPOINT["java","jar","/springboot-mysql-docker.jar"]

FROM eclipse-temurin:22-jdk-alpine

COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
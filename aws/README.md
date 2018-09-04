# AWS

## Compute
- [x] Elastic Compute Cloud
- [x] Elastic Container Service
- [x] Elastic Container Registry
- [x] Batch
- [x] Fargate
- [x] Lambda

## Storage
- [x] Simple Storage Service
- [x] Elastic Bloc Storage
- [x] Glacier

## Database
- [x] Aurora
- [x] Relational Database Service
- [x] DynamoDB
- [x] ElastiCache

## Networking
- [x] Virtual Private Cloud
- [x] CloudFront
- [x] Route 53
- [x] API Gateway
- [x] Elastic Load Balancing

## Depeloper Tools
- [x] CodeBuild
- [x] CodeDeploy
- [x] CodePipeline

## Management tools
- [x] CloudWatch
- [x] CloudFormation

## Analytics
- [x] Elasticsearch Service
- [x] ~EMR~
- [x] Kinesis

## Security, identity & compliance
- [x] Identity and Access Management

## Application Integration
- [x] Simple Queue Service
- [x] Simple Notification Service

# Identity and Access Management

![IAM](img/SecurityIdentityCompliance_AWSIAM.png)

- Users
- Groups

```mermaid
graph LR
    USER[User]
    GROUP[Group]
    PERMISSION[Permission]
    ROLE[Role]
    USER-->GROUP
    USER-->PERMISSION
    GROUP-->PERMISSION
    ROLE-->PERMISSION
```

# Elastic Compute Cloud

![EC2](img/Compute_AmazonEC2.png)

- On-Demand instances
- 86 instance's types
- Smaller t2.nano 0.0058$/h 1vCPU 0.5G.RAM
- Bigger p3.16xlarge 24.48$/h 32vCPU 488G.RAM
- 86 instance's types
    - General Purpose
    - Compute Optimized
    - GPU Instances
    - Memory Optimized
    - Storage Optimized

# Elastic Container Registry

![ECR](img/Compute_AmazonECR.png)

Fully-managed Docker container registry.

```mermaid
graph LR
    ECS-->ECR
    BATCH-->ECR
```

# Elastic Container Service

![ECS](img/Compute_AmazonECS.png)

Container orchestration service.

```mermaid
graph LR
    ECS-->ECR
    ECS-->EC2
```

# Batch

![Batch](img/Compute_AWSBatch.png)

Fully Managed Batch Processing at Any Scale.

```mermaid
graph LR
    Batch-->ECR
    Batch-->EC2
```

# Fargate

Compute engine for ECS and ECK without having to manage servers.

```mermaid
graph LR
    ECS-->Fargate
    ECS-->EC2
```

# Lambda

![Batch](img/Compute_AWSLambda.png)

Run code without thinking about servers. Pay only for the compute time you consume.

Supported languages
- .NET
- Go
- Java
- Node.js
- Python

```mermaid
graph TD
    APIGATEWAY[API Gateway]
    DYNAMODBSTREAMS[DynamoDB Streams]
    ETC[...]
    APIGATEWAY-->Lambda
    Kinesis-->Lambda
    DYNAMODBSTREAMS-->Lambda
    SQS-->Lambda
    SNS-->Lambda
    S3-->Lambda
    ETC-->Lambda
```

# Simple Storage Service

![S3](img/Storage_AmazonS3.png)

Object storage built to store and retrieve any amount of data from anywhere

# Elastic Bloc Storage

Persistent block storage for Amazon EC2.

```mermaid
graph RL
    S3
    EC2
    EBS
    EBS-->S3
    EC2-->EBS
```

# Glacier

![Glacier](img/Storage_AmazonGlacier.png)

Long-term, secure, durable object storage for data archiving

- S3: 0.023$/month/Go
- Glacier: 0.004$/month/Go

# Relational Database Service

![RDS](img/Database_AmazonRDS.png)

Managed relational database service

Engines:
- Aurora
- PostgreSQL
- MySQL
- MariaDB
- Oracle
- MSSQL

```mermaid
graph LR
    RDS-->EC2
```

# Aurora

MySQL and PostgreSQL compatible relational database built for the cloud.

- 1/10th the cost

```mermaid
graph LR
    RDS-->Aurora
```

# DynamoDB

![RDS](img/Database_AmazonDynamoDB.png)

Nonrelational database for applications that need performance at any scale

```mermaid
graph LR
    DynamoDB-->S3
    DynamoDB-->|DynamoDB Streams|Kinesis
```

# ElastiCache

![ElastiCache](img/Database_AmazonElasticCache.png)

Managed, in-memory data store services.

Engines:
- Memcached
- Redis

```mermaid
graph LR
    ElastiCache-->EC2
```

# Elasticsearch Service

![Elasticsearch Service](img/Analytics_AmazonES.png)

Fully managed, reliable, and scalable Elasticsearch service.

```mermaid
graph LR
    ES[Elasticsearch Service]-->EC2
```

# Elastic MapReduce

![Elastic MapReduce](img/Analytics_AmazonEMR.png)

A managed Hadoop framework

```mermaid
graph LR
    EMR[Elastic MapReduce]-->EC2
```

# Kinesis

![Kinesis](img/Analytics_AmazonKinesis.png)

With Amazon Kinesis, you can ingest real-time data such as video, audio, application logs, website clickstreams, and IoT telemetry data for machine learning, analytics, and other applications.

# Simple Queue Service

![Simple Queue Service](img/Messaging_AmazonSQS.png)

A fully managed message queuing service.

# Simple Notification Service

![Simple Notification Service](img/Messaging_AmazonSNS.png)

Pub/Sub messaging and mobile notifications

# Virtual Private Cloud

![Virtual Private Cloud](img/NetworkingContentDelivery_AmazonVPC.png)

```mermaid
graph TB
    subgraph VPC1
      apigateway[API Gateway]-->lambda1
      lambda2[Lambda]-->elasticache[ElastiCache]
    end
      dynamodb1-->lambda2
      dynamodb1[DynamoDB]
      lambda1[Lambda]-->dynamodb1
    subgraph VPC2
        cloudwatch[Cloud Watch]-->Batch
    end
    Batch-->S3
    subgraph VPC3
        EMR
    end
    EMR-->S3
    Kinesis-->EMR
```

# CloudFront

![CloudFront](img/NetworkingContentDelivery_AmazonCloudFront.png)

Highly programmable, secure content delivery network (CDN)

```mermaid
graph LR
    CLOUDFRONT[CloudFront]-->ELB[Elastic Load Balancing]
    ELB-->EC2
    ELB-->APIGATEWAY[API Gateway]
    APIGATEWAY-->Lambda
    CLOUDFRONT-->S3
```

# Route 53

![Route 53](img/NetworkingContentDelivery_AmazonRoute53.png)

A highly available and scalable cloud Domain Name System.

```mermaid
graph LR
    S3-->ROUTE53[Route 53]
    EC2-->ROUTE53[Route 53]
    ELB[Elastic Load Balancing]-->ROUTE53[Route 53]
```

# API Gateway

![API Gateway](img/ApplicationServices_AmazonAPIGateway.png)

A fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.

```mermaid
graph LR
    APIGATEWAY[API Gateway]-->Lambda
```

# Elastic Load Balancing

![Elastic Load Balancing](img/NetworkingContentDelivery_ElasticLoadBalancing.png)

Automatically distributes incoming application traffic across multiple targets.

```mermaid
graph LR
    ELB[Elastic Load Balancing]-->EC21[EC2]
    ELB[Elastic Load Balancing]-->EC22[EC2]
    ELB[Elastic Load Balancing]-->EC23[EC2]
```

# CloudWatch

![CloudWatch](img/ManagementTools_AmazonCloudWatch.png)

A monitoring and management service.

- Collect
- Monitor
- Act
- Analyze

```mermaid
graph TD
    CW[CloudWatch]

    Kinesis-->CW
    Lambda-->CW
    ECS-->CW
    RDS-->CW
    CodeBuild-->CW
    CodePipeline-->CW
    ElactiCache-->CW
    ETC[...]-->CW
```

# CodeBuild

![CodeBuild](img/DeveloperTools_AWSCodeBuild.png)

Build and test code.

```mermaid
graph LR
    CodeCommit-->CodeBuild
    GitHub-->CodeBuild
    CodeBuild-->EC2
```

# CodeDeploy

![CodeBuild](img/DeveloperTools_AWSCodeBuild.png)

A service that automates software deployments.

- Blue/green deployments
- Stop and rollback

```mermaid
graph LR
    CodeDeploy-->EC2
    CodeDeploy-->Lambda
```

# CodePipeline

![CodePipeline](img/DeveloperTools_AWSCodePipeline.png)

A continuous integration and continuous delivery service.

```mermaid
graph LR
    CodeCommit-->CodeBuild
    GitHub-->CodeBuild
    CodeCommit-->Jenkins
    GitHub-->Jenkins
    subgraph CodePipeline
        CodeBuild-->CodeDeploy
        Jenkins-->CodeDeploy
        Jenkins-->EB[Elastic Beanstalk]
        CodeBuild-->EB
        Jenkins-->ECS
        CodeBuild-->ECS
    end
```

# CloudFormation

![CloudFormation](img/ManagementTools_AWSCloudFormation.png)

![How it works](img/CloudFormation.png)

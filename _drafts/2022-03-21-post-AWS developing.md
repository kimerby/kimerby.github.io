---
title: "Developing on AWS"
date: 2022-03-21T09:00:00+09:00
categories:
  - AWS
tags:
  - cloud
  - AWS
  - Developing
toc: true
toc_sticky: true
toc_label: "목차"
---

# 8. API Gateway로 솔루션 개발

# 8.1 API Gateway
- 여러 마이크로서비스를 위한 통합 API 프론트엔드 생성
- 백엔드를 위한 DDoS보호 및 조절 제공
- 백엔드에 대한 요청 인증 및 권한 부여
- 타사 개발자가 API 사용량 조절, 측정 및 이를 통해 수익 창출  
- 메시지 변환 및 검증 기능 제공
- API 성능 향상: 캐시 사용
- API 생성 시, 성능향상을 위해 엔드포인트 유형 선택 가능
  - 리전별: 리전에 배포
  - 엣지 최적화: CloudFront 네트워크에 배포
- 사용량 계획: API에 대한 액세스 제어
  - 메서드 수준 조절
  - 사용량 계획에 지정된 클라이언트 사용량 조절 및 할당량 한도
- API 메서드 호출 보호
  - 리소스 정책 생성(JSON): IAM 사용자 또는 역할
  - IAM 권한 정책 생성
  - VPC 클라이언트만 액세스할 수 있는 프라이빗 API 엔드포인트 생성
  - 백엔드 리소스에 액세스하기 전에 Cognito 또는 Lambda 권한 부여자와 통합하여 클라이언트 인증 및 권한 부여 수행
  - CloudFront를 보안 계층으로 사용하여 DDoS로부터 보호
- Amazon Cognito 사용자 풀 인증
- Amazon CloudWatch로 API 로깅
  - API 호출 건수
  - 지연 시간
  - 통합 지연 시간
  - HTTP 400 및 500 오류

# 8.2 API 개발(400 page)

# 8.3 SAM
서버리스 앱을 정의하기 위한 템플릿 기반 배포 모델
- 지원
  - API
  - Amazon DynamoDB 테이블
  - AWS Lambda 함수
  - Amazon API Gateway 리소스
  - AWS CloudFormation이 지원하는 모든 리소스

***

# 9. AWS Step Functions로 솔루션 개발
- 상태로 구성된 상태 시스템(json으로 정의)이라는 워크플로를 정의
- 장점
  - 생산성: 애플리케이션을 빠르게 빌드
  - 민첩성: 안정적인 확장 및 복구
  - 적응성: 애플리케이션을 손쉽게 개선

***

# 10. Amazon SQS 및 Amazon SNS로 솔루션 개발
- 동기식 프로세스: 생산자와 소비자 사이에 강력한 상호 의존성이 있는 종속 프로세스
- 비동기식 프로세스(권장): 생산자와 소비자 사이에 대기열을 두고, 느슨하게 결합하여 내결함성 향상

## 10.1 Amazon Simple Queue Service(SQS)
- 유형
  - 표준 대기열
    - 메시지 순서 보장되지 않음
    - 메시지 중복될 수 있음
    - 최대 처리량 제공
  - FIFO 대기열
    - 메시지 순서 유지
    - 메시지는 한 번만 수신
    - 일괄 처리를 통해 API 작업별로 초당 최대 3,000개의 메시지 지원
    - FIFO 대기열은 일괄 처리 없이 API 작업별로 초당 최대 300개 메시지 지원
- 메시지 수명 주기
  - 메시지 전송
    - 용량: 메시지속성 + 본문 = 256KB
    - 소비자가 대기열에서 메시지 A를 읽으면 가시성 제한 시간이 시작됨
  - 메시지 수신
    - 짧은 폴링 또는 긴 폴링 지정
    - ReceiveMessage 파라미터: waitTimeSeconds, MaxNumberOfMessages, VisibilityTimeout
  - 메시지 삭제
    - DeleteMessage 파라미터: QueueUrl, ReceiptHandle

***

# 11. Amazon ElasticCache로 정보 캐싱

***

# 12. 안전한 애플리케이션 개발
## 12.1 애플리케이션 보호

## 12.2 

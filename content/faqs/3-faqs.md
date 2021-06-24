---
title: "FAQs: mimik Deployment and Integration"
metaTitle: "mimik Deployment and Integration FAQs"
metaDescription: "mimik Frequently Asked Questions about Deployment and Integration"
seo: "mimik, edge, edgeEngine, faqs"
---

# What are the details of deployment requirements (memory, storage, security, OAuth, etc.) of MIMIK edgeCloud backend on other platforms?

mimik hybrid edgeCloud platform back-end hosted on Amazon Web Services. mimik and Amazon formed partnership after Amazon did a technical DD on mimik’s architecture, scalability, security and reliability.  Additionally; mimik offers a rich suite of application domain SaaS and edge serverless microservices for healthcare, fintech, gaming, AI, IoT, EdTech, etc. The application developers that are using mimik hybrid edge engine can host their own application domain back-ends on any public or private cloud of their choice.  

# Other than image API and container API to get/create them, are there any examples showcasing edgeEngine invoke APIs to use additional resources (e.g. GPU) on the backend?

<ul>
<li> mimik edgeEngine and services such as FreeRTOS edgeSDK are downloadable software and therefore doesn’t provide low level hardware access.  The edgeEngine provides information of OS, storage, memory, cpu, connectivity – IP address.  The back-end is hosted in AWS so we don’t provide a view to availability of resource as cloud providers already do that. </li> 

<li> In regarding to invoking RESTful APIs on a custom backend, a serverless microservice can be developed and deployed to the edgeEngine in order to make calls to those RESTful APIs on a custom backend. </li> 
</ul>

#What are the details of deployment of mimik edgeCloud backend on the traditional cloud (e.g. Amazon Web Service) to support one million edge nodes

The back-end is highly scalable (as was validated with Amazon solution architects) and can support millions and millions of edge nodes and mainly b/c it was designed from ground up for supporting hybrid edge.  The edge nodes are not polling back-end constantly.  Everything runs in the most adhoc fashion.  Nothing is pre-configured and communications amongst nodes are done via bootstrap model. 

#Elaborate on E2E technical architecture based hybrid edgeCloud technology
<ul>
1. mimik provides Hybrid Edge Cloud computing to enable any computing device outside the data center with OS, CPU, memory, storage and connectivity  to act as a cloud server to help app developers unlock the next generation of apps for the hyper-connected world. Such edge devices could include an Operator’s CPE (OpenRAN e.g. with Lime microsystem), Wifi gateway, Smart TV, game council, smart phone, Robot as well as a sensor*. The engine is agnostic to OS, device, networks and public/private cloud. It is non-proprietary and works with existing standard development tools and language. mimik also provides ready to deploy application domain SaaS (cloud and/or edge) for a wide range of industry verticals. mimik platform enables an edge-in versus a cloud-out approach to build applications faster and drastically reduce infrastructure cost, minimize latency and improve security and data privacy, and enable direct app-to-app communication via the standard RESTful API first and serverless microservice driven architecture.  mimik’s platform is already used in multiple industry sectors including Fintech, signed up partners such Amazon Web Services and is part of 5G Open Innovation lab.
</ul>

o For more technical information on mimik technology, please see the following videos: 

<ul>

o   Siavash Alamouti keynote speech at the IEEE conference https://bit.ly/303Nx24

o   microservice edge cloud #1 https://bit.ly/351TcdZ

o   microservice edge cloud #2 https://bit.ly/3celXEK

o   microservice for mobile developers https://bit.ly/3d8sTo5

o   https://bit.ly/2I0NUHb
</ul>

#Besides MIMIK implementation, what other components / partnerships are required to have a complete solution for Hybrid edgeCloud platform?

mimik has made an effort to ensure that it’s not introducing anything proprietary that forces application developers to use anything special but develop their applications based on standard RESTful API first with microservice architecture. Therefore, there is no need for any specific provider unless it’s driven by business need and application specific use case.  

#How does device discovery and authentication work? What security protocols have been implemented by MIMIK?

mimik hybrid edge cloud platform has been developed with security first approach.  As a result, there are 6 levels of security built-in to the platform that includes.

Communication level:

 edgeEngine to edgeEngine authorization and authentication

Data level:

AES -128bit encryption with 256bit key.

Protocol level

https & secure WebSocket

API level

All API(s) secured via OAuth 2.0 tokens for authorization and authentication.

Application level

OpenID connects.

Container level

Every microservice runs within its own container.

#Q4: How does container / microservices instantiation occur in this architecture?

It depends on how the application is getting published. If this is a consumer application that is getting published on google or apple app store, the edgeEngine with the application and serverless microservices developed by the application provider for the application is getting bundled as an APK and published on the App store. If this is an enterprise app, it goes through the same enterprise application/solution deployment that the enterprise is using.  In both cases after the deployment and based on the application use case, logic, condition etc. the serverless microservice can also get deployed dynamically.  The light container is the provided by mimik as part of the edgeEngine is compatible with Docker and has the same API semantic as Docker.  This means that an image that is hosted in docker in e.g. cloud can be pushed to the mimik edgeEngine and vice versa. Also; an image on mimik edgeEngine can be pushed to another edgeEngine all based on application logic.  Also given we provide the same API semantics as Docker the DevOps can still use tools such as Kubernetes for orchestration and IBM Open Horizon for application management or other tools that they are using. This is why mimik made the effort to ensure from the application developer point of view everything remains the same and there are no proprietary tools or providers necessary with mimik. mimik has taken care of all the underlying challenges and provides the necessary context via RESTful API(s) for application developers and DevOps to continue to focus on their business. 

#What would it take to implement MIMIK Hybrid edgeCloud solution on a Windows / Linux platform (Edge device / hub)? Any specific requirements / dependencies?

There are no specific dependencies.  Here are the platforms that mimik supports

Here are the platforms that mimik supports:

[INSERT GRAPHIC]

#What application could be supported for Proof of concept using MIMIK far edge solution?

o   One application that you can use to see mimik underlying hybrid edge cloud platform in working is mimik access that can be downloaded from access.mimik.com

o   smart car/city with AirLinq https://bit.ly/2SRtgLE

o   content sharing with Lime microsystem https://bit.ly/3dBPKbz

o   gaming with 3BD https://bit.ly/2LfQBCr

o   mimik currently has customers in wellness, healthcare, fintech, smart mobility that either launched their applications using mimik platform or in the development phase.  mimik is also actively in discussions with large industrial IoT for manufacturing automation, mining, department of Healthcare part of DoD and many others. The feedback is that mimik is the only solution that they have seen that can meet their full business requirements, and billion-dollar target revenue growth. mimik has a first mover advantage with a very unique value proposition that enables enterprises to unlock their business opportunities.

#How to link MIMIK identity service with a potential partner and customer subscriber accounts? Example of OAuth API within MIMIK identity service?

mimik provides federated identity as well.  We can jointly asses the potential partner/customer + mimik identity service interactions.   As for the API please go to Swaggerhub and search for mimik mID.  All API(s) are published there. If you search for mimik in swaggerhub you’ll see all mimik services API and can test them as well
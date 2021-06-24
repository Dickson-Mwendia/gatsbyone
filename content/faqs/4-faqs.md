---
title: "FAQs: edgeEngine JavaScript Serverless"
metaTitle: "mimik edgeEngine JavaScript Serverless FAQs"
metaDescription: "mimik Frequently Asked Questions about edgeEngine JavaScript Serverless"
seo: "mimik, edge, edgeEngine, faqs"
---

# How is edgeEngine embedded within an Android device using JavaScript?

mimik edgeEngine provides a Serverless JavaScript programming environment for developers to develop custom microservices. For more information, please read the following page: edgeEngine serverless JavaScript programming API.

# How do we use the edgeEngine API? From what I’ve seen, it’s only JavaScript modules, which use prepared functions on response, etc.

If you have read the aforementioned documents, and are still uncertain about how to use the JavaScript to develop microservices, please let us know. We have open source projects that also might help you understand JavaScript microservice development: edgeEngine open source edge microservices.

# With edgeEngine’s current implementation, additional services (microservices / mimik node container) mentioned in your documentation have to be written in JavaScript, which is not standard in Android or iOS development. Do you have support a native Android SDK development language?

Using edgeEngine, you can develop microservices using JavaScript once, and then deploy them across all platforms. We have indicated this in our development documentation.

The foundation of mimik technology is to allow server development and deployment on edge nodes. We turn nodes into cloud servers which means developers can develop microservices based on serverless architecture, developing server-type functionality similar to what’s being developed on Amazon Lambda using NodeJS. Server developers are not using OS specific languages/APIs. We had to make the container layer work with JavaScript. To keep the servers (microservices) OS agnostic on the edge (similar to NodeJS). However, on the application level, you use any language to call the JavaScript microservice. For example, mimik access uses three JavaScript microservices, while the application itself is developed using platform-native code. This gives developers the flexibility to easily deploy microservices across all platforms, making only the application OS dependent.

# How does a serverless architecture differ from a traditional IT architecture – whether on-premises or already cloud-based?

Serverless is an architecture and set of technologies that move on-demand computing to the next level since a request will trigger the deployment of the function that handles the request itself. Serverless is a misnomer since you still need a listening component (a server), but instead of having a complete server waiting for the request, only an API gateway is required and the API gateway will instantiate the function or microservice needed to process the request.

If limited to that approach, serverless is just an evolution of IT architecture. However, by making the deployment of a function or microservice dynamic, serverless architecture also introduces the notion of fluid software since it is possible to decide where and when the function or microservice will be deployed. Therefore, based on conditions (derived from analytics), it will be possible to deploy the function or microservice closer to the request generator, which could be an edge node.

In this case, serverless architecture is a fundamental transformation since it breaks away from client-server architecture. The shift from legacy architecture will include the following considerations:

<li>Solutions have to be microservice based.</li>
<li>There may not be a central component, or the central component may be limited to a discovery service.</li>
<li>A microservice may run on the same device the application making the request is running.</li>
<li>Microservices are inherently single-tenant and potentially single-user.</li>

#What kinds of services and solutions should managers and professionals turn to build and support their serverless architecture?

It is important to understand extreme decomposition since serverless implies microservices, which then means understanding clusters and cluster management, and then because of the fluidity of the solution it is important to understand extreme distribution: including edge-cloud which modifies the criteria and scope of the cloud-based cluster management (for clustering based on proximity or on user’s account). So technology like kubernetes for cluster management, and sidecar patterns like Istio or mimik edgeEngine are important to understand. It is also important to understand automated deployment, since non-human-driven deployment and SCM will be mandatory for the success of a serverless/microservice architecture.

#How do security protocols and processes differ in a serverless environment?

The security protocols do not change. However, since serverless-microservice-based solutions are distributed, it is important not to depend on a central trust authority and use peer to peer token validation for API requests. But also not assume that the system’s components will be behind a firewall and that the network is untrustworthy. Finally, it is also important to handle multiple levels of security, since sensitive payload may go through relay microservices. For example, user information may go through a tunnel microservice and the call to the tunnel is protected by a token, but it is also necessary to protect the user information by avoiding the tunnel to be able to interpret the information itself.

# How does the storage component of serverless stack up to previous architectures? Are there additional considerations required for serverless?

In serverless-microservice-based architectures, each instance has to be stateless. Therefore the storage components are essential in storing states, as opposed to some legacy systems where the states are maintained by non-storage components. Based on the distributed nature of serverless-microservice-based systems, and due to theoretical limitations (CAP Theorem), the storage will most likely be BASE as opposed to ACID legacy storage. Clever partitioning strategies like explicit addressing and geocentric storage have to be put in place in order to cope with the eventual consistency of the system.

# Is cloud-based compute power a concern? How can the need for back-end power be addressed in a serverless setting?

In serverless-microservice systems, the computing demand is mediated by the application itself, resulting in a closer fit between the allocated computing power and the used computing power. Due to the dynamic and fluid nature of the systems, it is also possible to offload the required computing power to other computing nodes (like edge devices or gateways) and thereby further optimize the allocation of cloud-like computing power.
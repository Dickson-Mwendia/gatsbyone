---
title: "FAQs: edgeEngine Device Connectivity"
metaTitle: "mimik edgeEngine Device Connectivity"
metaDescription: "mimik Frequently Asked Questions about edgeEngine Device Connectivity"
seo: "mimik, edge, edgeEngine, faqs"
---

# Is there a need for at least one device to be connected to the internet to create the mesh network? Or will it work even if no devices are connected to the internet?

Is there a need for at least one device to be connected to the internet to create the mesh network? Or will it work even if no devices are connected to the internet?

1. The user installs the app using the platform-appropriate app store (e.g. Google Play Store, iOS App Store).

2. The user registers with the app (meaning that edgeEngine will register the node ID under a specific user’s account ID).

3. edgeEngine receives a valid token from our back-end services. The token has expiration time depends on the scope of service which could be varied from 24 hours to a couple of days or months.

From this point on, edgeEngine doesn’t need the internet to be available:

1. edgeEngine uses the valid token to provide all functionality.

2. Devices on the same Wi-Fi network can discover each other using edgeEngine.

3. mimik edgeEngine container manager can instantiate any number of required microservices and use edgeEngine services.

4. Microservices can communicate among each other, exchanging data.

# Does edgeEngine have dependency on a SaaS in the cloud? What are the deployment options for edgeEngine’s backend?

Our product is deployed on AWS with multi-region configuration and it uses AWS Load balancer and auto scaling features. Other than that, all edgeEngine components are NodeJS and deployed using Ansible, which let us minimize the effort required to deploy on AWS. All deployments are done via Ansible, which can also be used for on-premise deployment with some modifications in Ansible’s script.

# In current edgeEngine, do you have implementation enabling P2P communication using of the TCP/UDP hole punching technique or something similar (ex: used by bittorrents, VoIP … etc)?

We are not using UDP or TCP hole punching as the primary P2P communication due to inconsistency in NAT traversal.

We use UDP multicast for local supernode discovery. For bootstrap registration and other communication, we use HTTPS; for tunneling to BEPs we use Secure WebSocket (WSS) for inbound communication (BEP TO NODE) and HTTPS for outbound communication (NODE TO BEP). In the future, we may consider UDP/TCP hole punching as a secondary mechanism.
---
title: "FAQs: mimik Technology"
metaTitle: "mimik Technology FAQs"
metaDescription: "mimik Frequently Asked Questions about mimik Technology"
seo: "mimik, edge, edgeEngine, faqs"
---

# How is mimik technology similar to network mesh?

We do not do network mesh. Instead, our platform enables service mesh, which allows service-to-service communication.

# How does the technology differentiate from other IoT and other point-to-point networks?

This is the major differentiation. Other IoT technology requires a local gateway, to which IoT devices connect, and all communication among these device are proxy’ed through by the gateway.

With our technology, every device can be turned into a server, and thus service-to-service communication happens without any gateway.

# On edge is it point to point?

Yes.

#Can a device be a server and a user simultaneously?


    mimik allows a microservice running on a device, and this turns the device to a server.

    The microservice running on the device can also serve personal information, and of course, only permitted entity has access to this information. The microservice can also act as a consumer of another microservice, aka service-to-service communication.

# Do you have to root the device?

No, there is no need for rooting a device.

# The assumption is that the routing protocols must be modified. How are they modified?

No routing protocol needs to be modified.

In fact, we provide service discovery on over linkLocal, account, and proximity. These service discoveries give you the address to directly access the service, and in the case if the device is behind the firewall, the address is to a secure tunnel.

# Does mimik technology use TCP, UPD & point to point to establish the connections between the end-user devices to allow them to be server?

mimik technology enables running serverless microservices on any compatible OS, and these serverless microservice serves RESTful APIs over HTTPS, which is a TCP based protocol.

# Can the devices establish a network connection without an access point to connect to?

mimik technology can work over IP based network connections, such as Wifi, ethernet, and cellular (LTE/5G) connection.

# What are the point to point, throughput, and distance capabilities?

The throughput is determined by the underlying network connection that the device currently is using. In other words, if two devices have direct linkLocal network connection, the throughput really is the entire local network bandwidth.

If two devices do not have a direct link-local network connection, but have internet connection, The communication is tunneled via mimik tunnelling service, and the throughput is now limited by both the upload internet speed of device A and download internet speed of device B.

#What is the maximum number of clients that one client/server can host and connect to simultaneously?

Because mimik is using serverless microservie, resource is only consumed when an API calls happen. In other words, one can host as much serverless microservice as the storage allows.

#When you are completely offline and you don't have any centralized servers or devices (in a completely decentralized network) what are you using as a routing protocol?

If devices are under the same linkLocal network, the devices can still discover among themselves via the supernode technology. The elected supernode for the link local network contains the local IP of these devices. In other words, if one service on device A want to communicate with another service on device B, service on device A will go to the supernode to find the local IP address of service on device B. After that service on device A will connect to service on device B using the local IP address of device B.

# Is the network topology hierarchical or non-hierarchal? Do certain devices have priority in traffic and routing over other peers, or are all treated equally.

All are equally treated.
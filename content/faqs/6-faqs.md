---
title: "FAQs: edgeEngine Security"
metaTitle: "mimik edgeEngine Security"
metaDescription: "mimik Frequently Asked Questions about edgeEngine Security"
seo: "mimik, edge, edgeEngine, faqs"
---

#What is the security architecture for edge?

[INSERT GRAPHIC]

Edge contains 3 levels of security:

1. Communication encryption (at edgeEngine level communication)
When a node communicates with a supernode, the entire exchange is encrypted using the AES 128 GCM encryption algorithm.
2. Payload encryption (at edgeEngine level communication)
In the account cluster use case, the payload is encrypted using the AES 128 GCM encryption algorithm.
3. Edge Access Token Authorization
Registered apps must use edge access token to make an API call to edgeEngine.

Please Note: Any other level of security beyond the aforementioned levels need to be managed by the app developers.

For Example:
<li>App to edge microservice communication security.</li>
<li>Edge microservice to edge microservice (link-local) communication security.</li>

#Why can’t HTTPS be used for edge level security?
It can’t be used for a number of reasons, including:

<li> HTTPS requires a signed certificate.</li>
<li> A signed certificate requires a valid and registered domain name.</li>
<li> Saving “certificate private key” on every single link-local node in a secure way is near impossible.</li>

Suggestion:

You can encrypt application payload by using any available off-the-shelf security algorithm (e.g. AES 128 GCM).
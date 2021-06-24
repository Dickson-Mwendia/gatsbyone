---
title: "FAQs: edgeEngine Network Configuration"
metaTitle: "mimik edgeEngine Network Configuration"
metaDescription: "mimik Frequently Asked Questions about edgeEngine Network Configuration"
seo: "mimik, edge, edgeEngine, faqs"
---

# Our benchmark stopped at 9500 because after more than 20 seconds on our machine. There was a timeout in the edgeEngine with a 500 status code. Would it be possible to configure this timeout to other values?

Yes you can but we highly recommend that you don’t. The 20 second timeout has been deliberately designed this way as part of our edge-container quota management policy. This policy prevents a microservice from monopolizing the edge node’s entire CPU time.

# Will it be possible to set TCP_NODELAY in edgeEngine optionally?

Yes, but keep in mind that disabling the TCP delay risks causing network congestion.

make requests go thru a proxy agent like 
```js
import HttpsProxyAgent from 'https-proxy-agent';
```
which would intercept all calls to the openai API and then allow for anyone else to replay the message sequence, and verify that the message did indeed from from openai and that it did contain the parameters that you claim it did.

Would store the CA certificate chain, along with the responses.

This is an intermediate step between running the LLMs ourselves.
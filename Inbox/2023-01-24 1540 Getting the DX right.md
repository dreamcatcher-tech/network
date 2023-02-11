
>[!tip] Created: [2023-01-24 Tue 15:40]

>[!question] Targets: 

>[!danger] Depends: 

## primary goal is to get the programmatic interface right, then fortify

so we use AWS for silicon scale, accepting the temporary inconvenience of them being implicitly party to all
activity, and having ultimate control to stop execution

- we don't need to solve this problem to solve the programmability problem
- having a lightweight core lets us adapt rapidly to converge on good programmatic fit
  we can test for scale, programmability, latency - all in the AWS environment
- then we can move on fortifying and making the operation optionally independent of AWS
  using AWS should be no worse for cost, performance, and programmability than current workloads
- once we get off AWS, we should be able to out perform on cost, latency, and capacity
- there are more cpus at home than in AWS
- there are more CPUs outside of AWS than inside it, by quite some way
	

>[!tip] Created: [2024-04-07 Sun 21:17]

>[!question] Targets: 

>[!danger] Depends: 

If the number of transmissions will be too large, set the transmission lock value to the current sequence number time, and then send in a 5th type of queue message, which atomically fires off a range, and tells the recipient to read the io file, and then carry on transmission from a given sequence number.

Then update the sequence marker and fire off another message to the next fan out operator.

The final operator, if reaching the end of the tranmission queue, will delete the transmission lock, moving back into free flowing mode.

If the queue limit of 100k messages is reached, it will back off and try again with a smaller batch.

We should be able to work out our net profit per message in the queue, and so our queue rates in terms of dollars can be calculated.
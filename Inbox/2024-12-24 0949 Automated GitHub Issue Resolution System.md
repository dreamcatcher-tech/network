
>[!tip] Created: [2024-12-24 Tue 09:49]

>[!question] Targets: 

>[!danger] Depends: 

**Proposed Requirements and Workflow**

1. **Automated Issue Intake**
    
    - Connect bots directly to GitHub Issues.
    - Each new issue instantly triggers the bot’s solving process.
2. **Transparent Solving Process**
    
    - Progress and reasoning appear in the issue feed.
    - The bot highlights missed details or new deductions in real time.
    - If clarification is needed, the bot posts questions and suggests possible answers.
3. **Adaptive Decision-Making**
    
    - The bot flags contradictions or conflicts.
    - If higher-level guidance is required, it explicitly requests human or external input.
    - The workflow proceeds once any contradictions are resolved.
4. **Real-Time Updates**
    
    - Ongoing progress, steps, and findings are logged directly in the issue.
    - Users can monitor, comment, or intervene at any stage.
5. **Pull Request Generation**
    
    - After satisfying all checks and requirements, the bot raises a pull request with the proposed fix.
    - This PR is linked to the original issue for traceability and quick review.
6. **Seamless Backlog Integration**
    
    - Existing issues remain in GitHub; no separate interface is needed.
    - All progress is fully automated for faster, more efficient issue resolution.

With this approach, the entire cycle—from issue creation through to solution deployment—occurs within a single integrated workflow, ensuring minimal disruption and maximum transparency.

> This might be possible to attach the dreamcatcher directly to existing projects.  Then the current work, the issues, the commits - all available inside the dreamcatcher.  Humans come and break apart the repo where the bots get stuck, and the issues are triaged and solved by humans based on how much you pay, and bots, again based on how much you pay

So by making a deep integration with github, we become a coding platform, but where we are built from the ground up for ai solutions, where the humans just give advice, and rarely actually code.

Issue is that gh will likely roll this out themselves, so we don't want to spend too much time on it.  The important part is our own ability to solve problems, assisted by a human network, then we simply attach to many different ecosystems.  The ability to handle money might be our biggest gain.
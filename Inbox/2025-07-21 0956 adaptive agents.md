
>[!tip] Created: [2025-07-21 Mon 09:56]

>[!question] Targets: 

>[!danger] Depends: 

**

# GeoSolve AI Scope Document

---

## 1. Purpose & Overview

GeoSolve AI is an intelligent assistant integrated into Microsoft Teams (and other enterprise channels) that support GeoSolve staff by:

- Listening (voice, chat, email, calendar)  
      
    
- Understanding context (projects, roles, tasks, personal preferences)  
      
    
- Acting (answering questions, troubleshooting equipment, nudging updates, routing issues)  
      
    
- Respecting privacy and governance rules  
      
    

---

## 2. Key Capabilities

|   |   |
|---|---|
|Capability Area|Description|
|Multimodal Ingestion|• Real-time capture of Teams chats, calls, emails, calendar events<br><br>• Speech-to-text (multilingual) via Whisper/Azure Speech|
|Contextual Understanding|• Maintain per-user profiles (role, project assignments, skill levels, “trust” flags)<br><br>• Knowledge graph of projects, tasks, equipment, SOPs|
|Conversational Assistance|• Chat-bot persona in Teams (text + optional audio/video)<br><br>• Adaptive tone (friendly, concise, tutorial, managerial)|
|Troubleshooting & Guidance|• Step-by-step technical support (e.g. field operator diagnostics in local language)<br><br>• Onboarding workflows (new-hire tutorials, checklists)|
|Proactive Nudges & Alerts|• Reminders when tasks stagnate or updates are missing<br><br>• Contextual suggestions (e.g. “Your file’s open in another tab”)|
|Privacy & Governance|• PII redaction, opt-out channels<br><br>• Role-based visibility of “risk” signals<br><br>• Human-in-loop review for sensitive flags|
|Self-Improvement Loop|• Automated code/docs generation via Codex<br><br>• Continuous fine-tuning based on user feedback and audit results|

---

## 3. User Types & Persona-Driven Features

|   |   |   |
|---|---|---|
|User Type|Needs & Behaviors|GeoSolve AI Role|
|Field Operator|Mobile, voice-first, needs hands-free troubleshooting|• Voice Q&A in local language<br><br>• Visual guidance via camera feed|
|New Engineer|Onboarding confusion, lacks project context|• Guided checklists<br><br>• Instant answers: “How to connect to VPN?”|
|Project Manager|Overloads of emails, calendar invites, status reports|• Daily summaries<br><br>• Proactive status-update reminders|
|Senior Manager|Quick context (“Where is that proposal?”), hates redundant tasks|• “Context-aware” nudges<br><br>• High-level project health dashboard|
|Architect (You)|Full telemetry, model tuning, bias/risk oversight|• Risk-flag alerts<br><br>• Model performance dashboards|
|Compliance Officer|Ensure legal/ethical use, data residency, consent tracking|• Audit logs<br><br>• Compliance-mode reporting|

---

## 4. Example User Stories

1. Field Repair (Brazil)  
      
    

- As a field operator in Brazil  
      
    
- I want GeoSolve AI to diagnose why my laser detector isn’t reading  
      
    
- So that I can fix it without waiting for remote support  
      
    
- Acceptance Criteria: Bot asks targeted questions, reviews camera view, instructs in Portuguese, confirms resolution.  
      
    

3. Onboarding (New Hire)  
      
    

- As a new geotechnical engineer  
      
    
- I want a guided introduction to GeoSolve systems via Teams chat  
      
    
- So that I can complete setup tasks without interrupting colleagues  
      
    
- Acceptance Criteria: Bot presents a personalized checklist, tracks progress, offers help proactively.  
      
    

5. Spreadsheet Shortcut (Manager)  
      
    

- As a tired manager  
      
    
- I want GeoSolve AI to tell me where my June 2022 PowerPoint is in my open apps  
      
    
- So that I don’t have to search through dozens of tabs  
      
    
- Acceptance Criteria: Bot recognizes keywords, scans open windows metadata, highlights correct file.  
      
    

7. Missed Update Alert  
      
    

- As an Architect  
      
    
- I want to be notified if a project lead hasn’t posted a weekly status update  
      
    
- So that I can remind them before the client meeting  
      
    
- Acceptance Criteria: Bot flags absence after 7 days, pings only the Architect.  
      
    

9. Privacy Flagging  
      
    

- As a compliance officer  
      
    
- I want GeoSolve AI to redact sensitive PII before storing transcripts  
      
    
- So that we remain GDPR/LGPD compliant  
      
    
- Acceptance Criteria: Phone numbers, health data, IDs are removed; audit log created.  
      
    

11. Performance Recognition  
      
    

- As an Architect  
      
    
- I want GeoSolve AI to track high-impact contributions  
      
    
- So that I can acknowledge or reward top performers  
      
    
- Acceptance Criteria: Bot aggregates completed tasks, highlights exemplary work in monthly report.
    

  
  

We want to set up an Adaptive system that filters knowledge, and curates an ever improving self-refining knowledgebase that is accessible to all staff through web app and email.

  

System treats company like a big computer, where email is database query into human brains. Tries to answer questions, if unknown, asks right questions to the right people.

  

Hooks

- Teams chats (read/write)
    
- Teams calls (listen)
    
- Outlook (read/write)
    
- Servers (read filetypes)
    

  

Knowledgebase

- Adaptable
    
- Admin can gate what is going into knowledgebase
    
- All staff can give feedback on quality of information
    
- Admin can rollback by section
    

  

For Dave/G:

Narrow down doubts to core disbeliefs or proof cases eg “what is the status with job 33” or “when will the LMD truck be back in Auckland?”

If it cannot find a good answer, offer to ask the champion.

If multiple answers exist, use least loaded or conditional answer with caveat of “we should double check with champion”.

If best course of action is to ask someone, offers to compose email to champion with correctly worded question.

Champion gets an email from the system summarizing what has been said and if confused, asks for clarification.  
Find pet peeves of Dave and the system that could be fixed with email data

Find full list of problems, find which can be fixed by email / chat / voice.

  

To test system, go through with Dave a set of questions and ideal answers, see if the system can be tested against those questions.

  

Check if there is an existing product.

  

Core feature

- Minimize emails where Person A asks Person B who is responsible for X
    
- If A emails B and says x=y and C emails D and says x =/= y, the system gates and returns contradiction outline
    
- Information retrieval = humans should not have to say something twice (system failure) people stop using people as RAM. Fix without systematic overhead. Real time feedback during calls and email, the agent messages in chat if it detects a contradiction. Automatic TL:DR at the end of each call.
    
- Information verification or contradiction detection
    
- Starting with purely advisory or cautionary feedback (text)
    

  
  

Adaptive system that filters knowledge, and curates an ever improving self-refining knowledgebase that is accessible to all staff through web app and email.

**


the agent must be adaptive in that it continually learns from the current knowledge.  It should never be programmed up front, as this restricts its continual growth and evolution.

might be useful to have humans in the loop to solve and tweak the system.  So we would be selling both the platform, but also the human services that go in to tweaking the system, and people could see when human attention was going in to their specific problems, and how this was getting their stats up.

if we had a failsafe system that removed sensitive information then the general problems can be outsourced, and deduplicated.
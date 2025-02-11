# Dreamcatcher

## Module Breakdown

### Artifact Service

- *Commit Recorder*  
  Responsibilities:  
  - Capture raw contribution events (e.g. commits, data inputs) from various sources.  
  - Annotate each event with metadata (timestamps, actor IDs, dimension tags).  
  - Provide a streaming API for downstream services.  

- *Version Store*  
  Responsibilities:  
  - Maintain and expose the current active version configuration (active dimensions, scoring functions, weights, integration parameters).  
  - Serve as the authoritative source for version data used by the Attribution Engine and Governance Engine.  

- *Data Auditor*  
  Responsibilities:  
  - Periodically validate the integrity and consistency of stored contribution data.  
  - Generate audit logs and flag any anomalies or inconsistencies for dispute resolution.  
  - Provide an interface for troubleshooting and historical review.

---

### Attribution Engine

- *Score Calculator*  
  Responsibilities:  
  - Aggregate contributions from the Artifact Service for each actor.  
  - Apply the dimension functions to compute raw scores across all contribution categories.  
  - Integrate synergy terms (including module creation and integration) into the overall score.  

- *Dimension Functions*  
  Responsibilities:  
  - Implement the mapping \(g_d\) for each dimension (e.g., linear, logarithmic).  
  - Provide specialized functions for synergy interactions (e.g., \(g_{d_1,d_2}\)) and for integration contributions (i.e. \(g_{\text{int}}\)).  

- *Decay Calculator*  
  Responsibilities:  
  - Apply decay functions (exponential, linear, or rolling window) to historical contributions.  
  - Ensure that older contributions are appropriately discounted before scoring.  

- *Integration Processor*  
  Responsibilities:  
  - Specifically handle contributions related to module creation and integrative assembly.  
  - Combine raw module reuse data (\(R_i(t)\)) with integration effort data (\(I_i(t)\)) using defined parameters (\(w_{\text{int}}\) and \(g_{\text{int}}\)).  
  - Feed the resulting integrated score into the Score Calculator.

- *ML Dynamic Weighting Interface (Optional)*  
  Responsibilities:  
  - Accept dynamic weight updates from the ML Dynamic Weighting Module.  
  - Ensure that the Attribution Engine uses the most current weight recommendations for scoring.

---

### Epoch Manager

- *Epoch Scheduler*  
  Responsibilities:  
  - Define and trigger discrete processing cycles (epochs).  
  - Signal the start and end of each epoch, prompting data aggregation and processing.  

- *Time‑Slice Recorder*  
  Responsibilities:  
  - Capture a complete snapshot (Time‑Slice) at the end of each epoch.  
  - Store active version info, aggregated contribution data, computed scores, disputes, and feedback.  
  - Ensure that these snapshots are available for audit and governance review.

---

### Governance Engine

- *Dispute Collector*  
  Responsibilities:  
  - Gather quantitative dispute metrics from actors when their computed attribution does not meet expectations.  
  - Provide an API for logging and retrieving dispute data.

- *Feedback Aggregator*  
  Responsibilities:  
  - Collect qualitative feedback (e.g., suggestions, narrative explanations) regarding the attribution outcomes.  
  - Normalize and store feedback for later analysis.

- *Version Updater (Publication Source)*  
  Responsibilities:  
  - Process aggregated disputes and feedback to determine if a new version is warranted.  
  - Generate and publish a new version \(v^{(t+1)}\) by updating dimension sets, scoring functions, and weights.  
  - Update the Version Store in the Artifact Service with the new configuration.

---

### Payment Module

- *Attribution Fraction Calculator*  
  Responsibilities:  
  - Normalize actor scores to compute fractional attributions \(\alpha_i\) (i.e. \( \alpha_i = S_i / \sum_j S_j \)).  
  - Ensure that all fractions sum to 1 and are ready for payout computation.

- *Payment Executor*  
  Responsibilities:  
  - Calculate final payout amounts using the computed fractions and the verified overall impact (including historic and partial prospective components).  
  - Interface with external payment systems or token accounting modules to execute transactions.

---

### ML Dynamic Weighting Module (Optional)

- *ML Model Trainer*  
  Responsibilities:  
  - Ingest historical contribution and outcome data to train machine learning models for weight prediction.  
  - Use regression or online learning methods to estimate optimal weight adjustments for each dimension.

- *Weight Updater*  
  Responsibilities:  
  - Apply the ML model’s output to update dynamic weights used by the Attribution Engine.  
  - Expose an API or messaging interface for the Attribution Engine to retrieve current weight settings.

---

## Interactions Overview

flowchart TD
    subgraph Artifact Service
        A1[Commit Recorder]
        A2[Version Store]
        A3[Data Auditor]
    end

    subgraph Attribution Engine
        B1[Score Calculator]
        B2[Dimension Functions]
        B3[Decay Calculator]
        B4[Integration Processor]
        B5[ML Dynamic Weighting Interface]
    end

    subgraph Epoch Manager
        C1[Epoch Scheduler]
        C2[Time‑Slice Recorder]
    end

    subgraph Governance Engine
        D1[Dispute Collector]
        D2[Feedback Aggregator]
        D3[Version Updater]
    end

    subgraph Payment Module
        E1[Attribution Fraction Calculator]
        E2[Payment Executor]
    end

    subgraph ML Dynamic Weighting (Optional)
        F1[ML Model Trainer]
        F2[Weight Updater]
    end

    %% Interactions
    A1 --> A2
    A2 --> B1
    B1 --> B2
    B2 --> B3
    B3 --> B4
    B4 --> E1
    C1 --> C2
    C2 --> A2
    D1 --> D2
    D2 --> D3
    D3 --> A2
    E1 --> E2
    F1 --> F2
    F2 --> B5


## End-to-End Sequence Diagram

sequenceDiagram
    participant Actor
    participant CR as Commit Recorder
    participant VS as Version Store
    participant AE as Attribution Engine
    participant EM as Epoch Manager
    participant GE as Governance Engine
    participant PM as Payment Module

    Actor->>CR: Submit Contribution
    CR->>VS: Record Commit + Metadata
    VS->>AE: Provide Active Version & Data
    AE->>AE: Apply Dimension Functions & Decay\nCalculate Scores (incl. integration)
    AE->>EM: Send Computed Scores
    EM->>EM: Aggregate Contributions\nRecord Time‑Slice Snapshot
    EM->>GE: Trigger Dispute/Feedback Collection
    GE->>VS: Update Version (via Publication Source) [if threshold met]
    AE->>PM: Provide Final Attribution Fractions
    PM->>Actor: Execute Payout


## Container Deployment Diagram

flowchart TD
    subgraph Kubernetes Cluster
      AS[Artifact Service]
      AE[Attribution Engine]
      EM[Epoch Manager]
      GE[Governance Engine]
      PM[Payment Module]
      ML[ML Dynamic Weighting Module]
    end

    AS --> AE
    AE --> EM
    EM --> GE
    GE --> AS
    AE --> PM
    ML --> AE

## Epoch Lifecycle State

flowchart TD
    A[Dispute/Feedback Submission]
    B[Aggregate Disputes/Feedback]
    C[Evaluate Aggregate vs. Threshold]
    D{Threshold Met?}
    E[Trigger Version Update(Publication Source)]
    F[Continue with Current Version]

    A --> B
    B --> C
    C --> D
    D -- Yes --> E
    D -- No --> F

## End‑to‑End Contribution & Governance Flow

flowchart TD
    subgraph Contribution Capture
      A[Actor Submits Contribution]
      B[Commit Recorder (Artifact)]
    end
    subgraph Artifact Aggregation
      C[Contribution Aggregator & Version Store]
      D[Data Auditor]
    end
    subgraph Attribution Processing
      E[Score Calculator]
      F[Dimension Functions & Decay Calculator]
      G[Integration Processor]
    end
    subgraph Epoch Processing
      H[Epoch Scheduler]
      I[Time-Slice Recorder]
    end
    subgraph Governance & Dispute
      J[Dispute/Feedback Collector]
      K[Version Updater (Publication Source)]
    end
    subgraph Payment Execution
      L[Attribution Fraction Calculator]
      M[Payment Executor]
    end

    A --> B
    B --> C
    C --> E
    E --> F
    F --> G
    G --> L
    H --> I
    I --> C
    J --> K
    K --> C
    L --> M

## Governance Flow (Dispute & Version Update)

flowchart TD
    A[Dispute/Feedback Submission]
    B[Aggregate Disputes/Feedback]
    C[Evaluate Aggregate vs. Threshold]
    D{Threshold Met?}
    E[Trigger Version Update\n(Publication Source)]
    F[Continue with Current Version]

    A --> B
    B --> C
    C --> D
    D -- Yes --> E
    D -- No --> F

## Epoch Lifecycle State Diagram

stateDiagram-v2
    [*] --> Collecting: Start Epoch
    Collecting --> Processing: End Data Collection
    Processing --> Review: Compute Scores & Gather Disputes
    Review --> Governance: Evaluate Disputes/Feedback
    Governance --> Payment: Trigger Payment Event
    Payment --> [*]: End Epoch (Snapshot Stored)
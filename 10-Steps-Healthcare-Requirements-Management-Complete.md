# 10 Steps to Start Health Care Requirements Management — Full Research Report

**Prepared for Alison | AI-Powered Executive Assistant for Healthcare**  
**Last Updated: March 2025**

---

## Executive Summary

This document provides a complete, web-researched framework for managing healthcare requirements at Alison's organization. It covers scope, compliance, documentation, traceability, audits, and training—aligned with 2025–2026 regulatory priorities including OCR's Risk Analysis Enforcement Initiative, mandatory MFA, and OIG's seven elements.

---

## STEP 1 — Define Scope and Stakeholders

Stakeholder engagement in healthcare is **"not just a best practice — it's a necessity."**

### Stakeholder Map (Influence vs. Interest)

| Role | Responsibility |
|-----|----------------|
| **Executive Sponsor** | Alison — final sign-off, strategic direction |
| **Chief Compliance Officer (CCO)** | Program ownership, audit coordination |
| **Chief Medical Officer (CMO)** | Clinical workflows, patient safety |
| **Legal Counsel** | Regulatory interpretation, contracts |
| **IT / Security Officer** | Technical safeguards, risk analysis |
| **Finance / Billing** | Revenue cycle, coding compliance |
| **HR** | Training, workforce sanctions |
| **Patient Advocate** | Patient rights, access |
| **Ethics Officer** | Conflicts, ethical decisions |

### Initial Scope Areas

- **Clinical workflows** — Intake, documentation, messaging, telehealth (PHI touchpoints)
- **Billing and revenue cycle** — Coding, claims, patient statements
- **Privacy & security** — HIPAA/HITECH, state privacy, marketing data
- **Operations** — Scheduling, referrals, record requests

---

## STEP 2 — Regulatory and Compliance Obligations

### 2025–2026 Key Updates

**OCR Risk Analysis Enforcement Initiative (2025)** — First targeted enforcement of organizations failing HIPAA Security Rule risk analyses; **10 resolution agreements in 5 months.**

| Requirement | Status |
|-------------|--------|
| Mandatory MFA across all ePHI access points | **2025 rule** |
| Mandatory encryption at rest and in transit | **2025 rule** |
| Third-party website tracking (pixels, chat, call tracking) | Requires BAAs and HIPAA safeguards |
| HITECH accountability for PHI disclosures | Must be tracked |
| Hospital price transparency | 46% non-compliance rate (active enforcement) |

### Regulatory Map

| Regulation | Applies To |
|------------|------------|
| HIPAA Privacy Rule | PHI handling, patient rights |
| HIPAA Security Rule | ePHI safeguards, risk analysis |
| HITECH Act | Breach notification, enforcement |
| 21st Century Cures Act | Information blocking, patient access, APIs |
| CMS / Medicare / Medicaid | Conditions of participation, billing |
| State privacy laws | Varies by state (e.g., California) |
| Accreditation | Joint Commission, NCQA, URAC |

**Deliverable:** 1-page "Regulatory Map" listing rules and which parts of the org they touch.

---

## STEP 3 — Document Current State

### 2025 HIPAA Security Rule Requirement

> "A complete technology asset inventory and network map that documents the movement of ePHI throughout a healthcare organization's information systems."

### Document Lifecycle to Map

1. **Creation** — Forms, calls, EHR entries  
2. **Storage** — Servers, cloud, devices  
3. **Use** — Who accesses, for what purpose  
4. **Sharing** — Labs, payers, patient portals, vendors  
5. **Retention** — How long, where  
6. **Disposal** — Secure deletion, device disposal  

### What to Capture Per Workflow

- Systems used (EHR, billing, scheduling, messaging, marketing)
- Where PHI is created, stored, shared
- Pain points and bottlenecks
- Non-compliant tools (general email, unvetted web forms, marketing pixels)
- Contingency plan — critical data restored within **72 hours**

**Deliverable:** "Current State Workbook" with one page per workflow.

---

## STEP 4 — Create a Requirements Repository

### Recommended Platforms

| Platform | Best For |
|----------|-----------|
| **VComply** | HIPAA-ready templates, real-time tracking, audit-ready reports |
| **Scrut** | 75+ pre-built policies, 1,400+ unified controls |
| **ComplyJet** | EHR integration and monitoring |
| **Accountable HQ** | PHI lifecycle, policy routing |
| **Notion / Airtable** | Lean teams, custom fields |

### Standard Fields (Columns)

| Field | Purpose |
|-------|---------|
| **ID** | REQ-001, REQ-002, … |
| **Description** | Plain-language requirement |
| **Source** | HIPAA Security Rule, Privacy Rule, state law, policy |
| **Category** | Clinical, Billing, Privacy/Security, Operations |
| **Priority** | High / Medium / Low |
| **Owner** | Role responsible |
| **Status** | Not Started / In Progress / Implemented / Monitored |
| **Evidence / Link** | Policy doc, log, screenshot, report |

### Automation Ideas

- Policy routing for approval
- Auto-assign training on publish
- Trigger risk assessments for new PHI systems
- Enforce retention rules

**Pre-seed:** 20–30 HIPAA/security requirements, 10–15 billing/RCM, 10–15 operational requirements.

---

## STEP 5 — Prioritize Requirements

### Top Compliance Priorities (US Healthcare 2025–2026)

1. Emerging tech management  
2. Privacy / data security  
3. Quality / safety compliance  
4. Billing / coding compliance  
5. Vendor management  

### Scoring Method (1–3 per dimension)

| Dimension | Score 1 | Score 2 | Score 3 |
|-----------|---------|---------|---------|
| **Regulatory risk** | Low | Medium | High (required by law) |
| **Patient safety impact** | Low | Medium | High (can harm patients) |
| **Business impact** | Low | Medium | High (revenue, contracts, reputation) |
| **Urgency / deadline** | Flexible | Soon | Hard deadline |

**Process:** Sum scores, sort highest to lowest. Present top 10–20 "must do now" items to Alison.

### Immediate High-Urgency Items

- Enterprise-wide risk analysis (OCR actively enforcing)
- Mandatory MFA
- Encryption at rest and in transit
- Third-party tracking tool audit
- Price transparency compliance

---

## STEP 6 — Implement HIPAA and Privacy Safeguards

### Three Safeguard Categories

#### Administrative

- Appoint Privacy and Security Officers
- Conduct formal Security Risk Analysis (SRA) — threats, vulnerabilities, controls, remediation plans
- Role-based access, workforce training
- BAAs with all PHI vendors

#### Technical

- **Mandatory MFA** (2025 rule)
- Encryption at rest and in transit
- Audit logging
- Role-based access controls
- Backup / disaster recovery (critical data within 72 hours)
- Assess all website tracking tools for PHI exposure

#### Physical

- Restrict server / workstation access
- Visitor logs
- Workstation positioning to block unauthorized viewing
- Track and encrypt devices with PHI
- Document disposal procedures

**Deliverable:** "HIPAA Safeguard Register" and SRA summary for leadership review.

---

## STEP 7 — Set Up a Governance Process

### Compliance Committee Structure

Every organization needs a **formal Compliance Committee** with:

- Written charter
- Annual meeting schedule
- Attendance records (auditable)

### Committee Membership

- CCO (lead)
- Legal Counsel
- CMO / CNO
- IT / Security
- Finance / Billing
- HR / Ethics
- Department Managers

### Governance Framework

- **Unify GRC** — Governance + Risk + Compliance in one framework
- **Change process** — Route every new system or vendor through committee before deployment
- **Governance Log** — Decisions, owners, dates for audit trail

---

## STEP 8 — Build Traceability

### Requirements Traceability Matrix (RTM)

An RTM provides **"a transparent chain of evidence for regulators and internal auditors."**

### RTM Structure

```
Requirement ID → Policy/Procedure ID → Control/Implementation → Evidence/Report
```

**Example:**

| Requirement ID | Policy | Control | Evidence |
|----------------|--------|---------|----------|
| REQ-HIPAA-01 (Unique User IDs) | POL-SEC-02 (Access Control Policy) | EHR user provisioning process | Monthly access review report |

### Healthcare-Specific RTM

- Requirements aligned with **patient safety** and **product quality** standards
- Traceability from clinical requirements → design → testing → monitoring
- Any change validated by linking to original clinical requirements

### Evidence Artifacts to Link

- Access control matrices
- Audit logs
- Data maps
- Incident logs
- Training records
- Business Associate Agreements
- Policy revision histories

### Best Practices

- **Version control** — Track every policy change, preserve prior states
- **Immutable audit trails** — Link edits to users and timestamps
- **Attach evidence** — Screen captures, logs, tickets to controls
- **Periodic review** — Update RTM when regulations, processes, or controls change

**Cloud-based RTM** improves visibility, automates documentation, and enables proactive risk management.

---

## STEP 9 — Plan Audits and Monitoring

### OIG Seven Elements (2023 Update)

1. Written policies and procedures  
2. Compliance leadership and oversight  
3. Training and education  
4. Effective lines of communication  
5. **Monitoring and audit**  
6. Enforcement of standards  
7. Corrective action  

### 2025–2026 Enforcement Context

- **DOJ-HHS FCA Working Group** focus: Medicare Advantage, kickbacks, pricing, patient access barriers, defective devices, EHR manipulation
- **HHS OIG funding** (FY 2026): Exceeds $450M; identified $50B in potential payment recovery
- **False Claims Act** settlements: Historic highs in 2025
- **Healthcare data breaches:** $7.42M average per incident (highest of any industry, 14 years)
- **HIPAA violations:** $100–$50,000 per violation; $1.9M annual cap per category

### Internal Audit Plan

| Focus Area | Scope | Sample Size | Checks |
|------------|-------|-------------|--------|
| Access control | EHR, billing, portals | 10% of users | Orphaned accounts, MFA status |
| Telehealth workflows | Visit documentation, consent | 20 visits/month | PHI handling, consent on file |
| Billing documentation | Claims, coding | 50 claims/quarter | Medical necessity, documentation |
| Marketing data collection | Forms, chat, pixels | All tools | BAA status, PHI exposure |

### Monitoring KPIs

| Category | Metric |
|----------|--------|
| **Security** | Access violations, failed logins, inactive accounts |
| **Privacy** | Incidents, near-misses, response times |
| **Operations** | Record request fulfillment time, no-show rates, program enrollment |

### 2025 OIG Emphasis

> Move "beyond reactive monitoring and into proactive, documented risk management."

- Improper payment lifecycle management
- Data integrity
- Track audits, findings, corrective actions through **integrated systems** (not fragmented tools)

**Deliverable:** Monthly or quarterly compliance dashboard with trends and open remediation items.

---

## STEP 10 — Train and Communicate

### HIPAA Training Requirements (2025)

- **Role-based** — Tailored to each employee's PHI access
- **Comprehensive** — All staff who contact PHI (admin, IT, billing, clinical, contractors)
- **Ongoing** — Onboarding + material policy changes + continuous education
- **Documented** — Who completed, when, which topics

### Required Topics (All Staff)

- Definition and identification of PHI
- Privacy Rule basics (permitted uses, minimum necessary, patient rights)
- Breach reporting procedures
- Sanctions for violations

### Security Rule Topics (Electronic Access)

- Cybersecurity threats and incident reporting
- Phishing and social engineering
- Password management and workstation security
- Mobile device and email security

### 2025 Emphasis

**Cybersecurity training** is now explicitly required — healthcare cyberattacks increased **300%**.

### HIPAA Attestation

A **HIPAA attestation** is a signed statement certifying that a requested use or disclosure of PHI complies with the Privacy Rule. Required in scenarios involving:

- Sensitive care (e.g., reproductive health)
- Judicial proceedings
- Law enforcement requests
- Health oversight activities

### Documentation

- Track who completed which training, when
- Maintain attestations (form or LMS export)
- Role-based modules: front desk, clinical, billing, IT, marketing

### Communication

When policies change or new systems are added:

- Draft "what changed, why it matters, what you must do" summary
- Managers distribute to relevant staff

### 2024 Enforcement Context

- OCR levied **over $28 million** in penalties
- **67% of violations** cited inadequate workforce training

---

## Appendix: AI Assistant Value for Alison

### Core Daily Tasks

- **Calendar** — Book, reschedule, protect focus blocks; daily agenda with links and talking points
- **Email** — Triage (urgent / this week / delegate / archive); draft replies; summarize threads
- **Meeting prep** — One-page prep sheets; structured notes; action items by owner and due date
- **Project tracking** — Project board; weekly snapshot; bottleneck alerts
- **Travel** — Flights, hotels, transport; sync to calendar with buffers

### Healthcare-Specific Value

- **Stakeholder briefs** — Clinicians, admins, payers, vendors; roles, orgs, recent news
- **Regulatory watch** — CMS rules, reimbursement changes, quality metrics; "what this means in 5 bullets"
- **HST and AI trends** — Care delivery shifts, telehealth, AI use cases; opportunities and risks
- **Operational workflows** — Document and optimize patient-facing flows; implementation briefs

### Pitch to Alison

> "I can be your AI-powered executive assistant specifically tuned for healthcare. Day to day, I'll protect your calendar and inbox, prep you for meetings, and make sure follow-ups actually happen. On top of that, I'll track regulatory and market changes, translate long reports into short briefs, and help design workflows where AI can take over repetitive tasks. You stay focused on relationships and decisions; I handle the research, organization, and execution."

---

## Sources (Web Research)

- OCR Risk Analysis Enforcement Initiative 2025
- OIG Compliance Program Guidance 2023
- HHS OIG FY 2026 funding and priorities
- ComplianceQuest — RTM in Regulatory Compliance
- Accountable HQ — OIG 7 Elements, Policy Management, Compliance Audit
- AVACompli / HIPAA Training — 2025 training requirements
- Protiviti — 2026 Internal Audit Benchmarks in Healthcare
- VComply, Scrut, ComplyJet — Requirements repository platforms
- Healthicity — OIG 2025 compliance signal

---

*Document prepared for Alison's healthcare requirements management. Customize stakeholder names, scope, and tools to fit her organization.*

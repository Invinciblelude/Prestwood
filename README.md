# Health Care for Alison — Requirements Management

AI-powered executive assistant deliverables for healthcare requirements management.

## What's Included

| File | Purpose |
|------|---------|
| **10-Steps-Healthcare-Requirements-Management-Complete.md** | Full research report: all 10 steps with 2025–2026 regulatory context, OIG 7 elements, OCR enforcement, and implementation guidance |
| **requirements-repository-template.csv** | Pre-seeded 20 requirements (HIPAA, security, billing, operations) — import into Notion, Airtable, or Excel |
| **traceability-matrix-template.csv** | Requirement → Policy → Control → Evidence mapping for audit readiness |

## Quick Start

1. **Read** the full report (Steps 1–10).
2. **Customize** the stakeholder list and scope for Alison's org.
3. **Import** `requirements-repository-template.csv` into your chosen tool (Notion, Airtable, VComply, etc.).
4. **Map** policies and controls using `traceability-matrix-template.csv`.
5. **Prioritize** using the 4-dimension scoring method (regulatory risk, patient safety, business impact, urgency).

## 2025–2026 Priorities (from research)

- Mandatory MFA and encryption (OCR 2025)
- Security Risk Analysis (OCR actively enforcing — 10 resolution agreements in 5 months)
- Third-party tracking tool audit (pixels, chat, call tracking)
- Price transparency compliance
- Workforce training (67% of 2024 violations cited inadequate training)

## Web App (Mobile-Friendly)

**Prestwood IT Solutions** is the main company site. **Health Care for Alison** is a web development project under their portfolio.

### Structure

```
web/
├── index.html              # Prestwood IT Solutions (main company)
├── css/prestwood.css       # Company site styles
└── projects/
    └── health-care-for-alison/   # Healthcare requirements app
        ├── index.html
        ├── css/styles.css
        └── js/
```

### Run locally

```bash
cd web && python3 -m http.server 8088
```

- **Main company:** http://localhost:8088
- **Health Care for Alison:** http://localhost:8088/projects/health-care-for-alison/

### Prestwood IT Solutions

- Company info: Founded 1984, Citrus Heights, (916) 726-5675, prestwood.com
- Services: Managed IT, Microsoft 365, Web/WordPress, Custom Software, Residential Tech
- Clients: Barrick, Aon, Hartford, Webroot; CA Dept of Health, CAL FIRE, State Senate
- Web Development Projects section links to Health Care for Alison

### Health Care for Alison (Project)

- 10-step compliance framework
- Requirements repository (searchable, filterable)
- Traceability matrix
- Built by Prestwood IT Solutions branding

---

## Next Steps

- Assign Alison as Executive Sponsor
- Convene Compliance Committee
- Conduct Security Risk Analysis
- Complete technology asset inventory and PHI flow map

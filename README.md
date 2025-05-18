# 🧠 OGI SDR Demo App – Product Requirements

This is a modular, 4-tab application demonstrating the use of **Organizational Graph Intelligence (OGI)** and **AI Role Agents** to supercharge the SDR (Sales Development Representative) workflow. Designed for demo purposes using fully simulated data, this app follows clean, modular principles for clarity, extensibility, and enterprise presentation quality.

Built with:
- **React + Tailwind CSS**
- **shadcn/ui** for UI components
- **d3.js** for organizational graph visualization
- **JSON-defined AI agent instructions**
- **Prewritten demo conversations with chat-first UX**

---

## 🎯 Objectives

- Show how AI agents can assist SDRs across prospecting, qualification, and outreach.
- Use an **interactive graph** to visualize org and lead relationships.
- Provide analytics to evaluate and optimize campaign performance.
- Include a tab for **Responsible AI controls** to ensure ethical usage.

---

## 🧱 Architecture Overview

/components/
ChatModal.tsx
Tabs/
RoleAgentsTab.tsx
OgiNetworkTab.tsx
AnalyticsTab.tsx
ResponsibleAITab.tsx

/data/
org_graph.json
campaign_stats.json
icp_profiles.json
email_templates.json
responsible_ai_policies.json

/agents/
jazon_general.json
jazon_icp.json
jazon_email.json
jazon_enrichment.json
jazon_analytics.json
jazon_admin.json
jazon_safety.json

/public/images/
avatars/
charts/
logos/


---

## 🧩 Role Agents (Defined in `/agents/`)

1. Lead Definition & Enrichment
Agent Name	Purpose
ICP Assistant	Defines Ideal Customer Profile; suggests industry, company size, roles
Lead Enrichment Agent	Enriches raw leads with firmographic, technographic, and intent data
Persona Generator	Generates synthetic buyer personas for A/B testing and targeting
Signal Analysis Agent	Surfaces job changes, funding, hiring patterns for lead prioritization

🟧 2. Outreach Planning & Execution
Agent Name	Purpose
Email Copy Assistant	Writes cold/warm emails tailored by tone, segment, and CTA
Sequence Builder Agent	Creates multi-step sequences: email, LinkedIn, text
Channel Strategy Agent	Recommends best outreach channels per persona
Tone Optimizer Agent	A/B tests subject lines, emotional tone, and readability
Follow-up Generator	Crafts re-engagement emails based on prior response (or no response)

🟨 3. Qualification & Meeting Conversion
Agent Name	Purpose
Lead Scoring Agent	Calculates a score based on ICP fit + engagement + signals
Meeting Qualifier Agent	Determines if lead is meeting-ready using a ruleset or ML
Objection Handler Agent	Trains SDRs or auto-generates responses to common objections
Disqualification Agent	Suggests when to drop leads and how to recycle them

🟩 4. SDR Performance & Coaching
Agent Name	Purpose
Analytics Agent	Tracks open rates, reply rates, bookings, and conversions
SDR Coach Agent	Gives feedback on message performance, timing, and pacing
Campaign Insight Agent	Compares performance across segments, channels, or time periods
A/B Test Evaluator Agent	Helps compare performance between content variants or sequences

🟪 5. System Configuration & Integration
Agent Name	Purpose
Admin & Config Agent	Guides setup of integrations (e.g. Apollo, HubSpot, Salesforce)
CRM Sync Agent	Handles lead deduplication, sync settings, and pipeline routing logic
Tagging & Routing Agent	Manages ICP-based tagging and SDR assignment logic

⬛ 6. Ethical Outreach & Governance (Responsible AI)
Agent Name	Purpose
Responsible AI Agent	Ensures ethical messaging, bias detection, explainability
Consent Management Agent	Handles opt-in/opt-out and region-specific compliance (GDPR, CCPA)
Escalation Agent	Flags risky messages or workflows for human-in-the-loop review
Compliance Audit Agent	Provides logs and insights for outbound auditability

🟫 7. General & Utility Agents
Agent Name	Purpose
Jazon General Assistant	Default fallback assistant for general guidance
UI Assistant Agent	Helps navigate the app, explains tabs, assists with demos
Demo Mode Agent	Auto-plays scripted conversations for pitch/demo use

| Agent Name            | Purpose                                                                 |
|-----------------------|-------------------------------------------------------------------------|
| `Jazon General`       | Cross-tab help; fallback agent                                           |
| `ICP Assistant`       | Helps define Ideal Customer Profiles and target segments                |
| `Email Assistant`     | Crafts personalized outbound sequences with tone and CTA optimization    |
| `Lead Enrichment`     | Adds firmographic, technographic, and social data to raw leads          |
| `Analytics Assistant` | Surfaces insights about performance, open/reply rates, SDR productivity  |
| `Admin Agent`         | Manages integration setup, routing logic, and configs                   |
| `Responsible AI Agent`| Ensures ethical AI usage; manages bias detection, consent logic         |

Each agent has:
- Prewritten conversations in JSON
- Defined scope by tab
- Role-specific icon and avatar

---

## 🧭 Tabs Breakdown

### 1. 📋 Role Agents

Central access point for all SDR-specific agents.

#### Features:
- Card layout: one per agent, avatar + description
- Floating Chat Modal: launches prewritten scripted interactions
- Auto-play enabled for demo purposes
- Agent chat logic defined in `/agents/*.json`

---

### 2. 🕸️ OGI Network (d3.js)

Graph-based visualization of the SDR ecosystem — who owns which leads, how campaigns are connected, and which accounts are prioritized.

#### Features:
- Force-directed graph
- Nodes: SDRs, AEs, Leads, Campaigns, Accounts
- Edges: `assigned-to`, `created-by`, `touched`, `part-of`
- Sidebar: Contextual agent (Jazon General or Enrichment) provides insights
- Node click: Opens modal with graph explanation and lead/account info

#### Sample Node Schema (org_graph.json):
```json
{
  "nodes": [
    { "id": "SDR_Alex", "type": "sdr" },
    { "id": "Lead_42", "type": "lead" },
    { "id": "Campaign_Gamma", "type": "campaign" }
  ],
  "links": [
    { "source": "SDR_Alex", "target": "Lead_42", "relation": "assigned-to" },
    { "source": "Lead_42", "target": "Campaign_Gamma", "relation": "touched-by" }
  ]
}

3. 📊 Analytics
Evaluate outreach performance and identify what’s working and what’s not.

Features:
Visual dashboards using recharts

Charts:

Open vs. Click-through Rates

Lead Conversion by SDR

Campaign Effectiveness by ICP Tier

Agent (Analytics Assistant):

Suggests subject line changes

Time-of-day delivery optimizations

Highlights underperforming segments

4. 🛡️ Responsible AI
Show how the SDR app is compliant with ethical outreach and AI governance principles.

Features:
Consent Model Simulator

Bias Flagging (simulated bias reports)

Explainability Toggle (show agent rationale)

Guardrails:

Reject high-risk outreach based on geography or context

Auto-escalation trigger for human review

Agent: Responsible AI Assistant walks users through each config option

💬 Global Chat Modal
Reusable component for agent interaction.

Specs:
Visible on every tab

Agent avatar + typing delay

Markdown support (headings, links)

Reset conversation

Auto-scroll to latest message

Triggered by agent card or sidebar prompt

📌 App Configuration
All agent instructions, dialogues, and control settings are defined via structured JSON or YAML files for easy modification and reuse across projects.

✅ Success Criteria
Functional 4-tab layout, styled with shadcn/ui

All chat interactions driven by modular agent files

Graph interaction renders in under 1s, with dynamic highlights

Simulated analytics match SDR workflows

Agent UX is demo-ready for sales/pitch use cases

⚠️ Disclaimers
No real user data is used. Everything is synthetic and generated for demo use only.

Do not connect to live CRMs or marketing systems.

🧰 Tools Used
Tool	Purpose
shadcn/ui	Modular UI components
React	Frontend logic
TailwindCSS	Utility-first styling
d3.js	Graph-based org network visualization
recharts	Analytics dashboard
YAML/JSON	Agent logic and scenario configuration

🧪 Inspired By
Modular Banking Agent App

GRC OGI Visualizations

Lyzr Agent Studio UI Principles
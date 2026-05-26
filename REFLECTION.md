# Reflection

## 1. Hardest Bug

The hardest bug I faced was inconsistent audit state handling when users selected and deselected tools rapidly. Some selected tools remained visually active even after removal because state updates were happening asynchronously.

I debugged this by logging the selectedTools array after every interaction and checking component rerenders inside React DevTools. Initially, I suspected Tailwind styling issues, but the actual issue was duplicate array updates caused by stale state references.

I fixed the problem by restructuring the selection logic and ensuring proper filtering before updating state.

## 2. Decision I Reversed

Initially I planned to build the project using a complex backend architecture with authentication and persistent cloud storage.

Mid-week I reversed this decision because the MVP requirements prioritized user experience, audit logic, and rapid iteration over heavy backend complexity.

I instead focused on building a polished frontend audit experience first before gradually adding persistence and supporting features.

## 3. What I Would Build Next

In week 2, I would implement:
- real AI-generated summaries using Anthropic API
- persistent backend storage using Supabase
- shareable audit pages with Open Graph previews
- PDF export functionality
- benchmark comparisons against industry averages

I would also improve the recommendation engine using usage-based scoring.

## 4. How I Used AI Tools

I used ChatGPT and GitHub Copilot for:
- debugging TypeScript issues
- improving recommendation wording
- generating UI structure ideas
- improving documentation quality

I did not trust AI tools with audit calculation logic because financial recommendations require predictable reasoning.

One mistake AI made was generating unrealistic generic recommendations without considering team size. I corrected the logic manually to make the recommendations feel more realistic.

## 5. Self Ratings

### Discipline — 8/10
Worked consistently across multiple days with incremental commits and documentation updates.

### Code Quality — 7.5/10
Focused on clean reusable React components and readable logic.

### Design Sense — 8.5/10
Prioritized modern SaaS styling and screenshot-friendly layouts.

### Problem Solving — 8/10
Improved the audit flow incrementally while handling multiple frontend issues.

### Entrepreneurial Thinking — 7.5/10
Focused on making the product feel like a realistic SaaS startup tool rather than only a frontend demo.
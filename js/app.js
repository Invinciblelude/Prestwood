/* Health Care for Alison — Web App */

(function () {
  'use strict';

  // DOM refs
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('[data-nav]');
  const stepsGrid = document.getElementById('stepsGrid');
  const requirementsBody = document.getElementById('requirementsBody');
  const reqSearch = document.getElementById('reqSearch');
  const reqCategory = document.getElementById('reqCategory');
  const reqPriority = document.getElementById('reqPriority');
  const reqStatus = document.getElementById('reqStatus');
  const reqCount = document.getElementById('reqCount');
  const traceabilityBody = document.getElementById('traceabilityBody');
  const modal = document.getElementById('stepModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.querySelector('.modal-close');
  const modalBackdrop = document.querySelector('.modal-backdrop');

  // Mobile nav
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  // Smooth scroll + close mobile nav
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-nav');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      nav.classList.remove('open');
    });
  });

  // Render steps
  function renderSteps() {
    if (!stepsGrid || typeof STEPS_DATA === 'undefined') return;
    stepsGrid.innerHTML = STEPS_DATA.map(s => `
      <article class="step-card" data-step="${s.num}">
        <h3>Step ${s.num}: ${s.title}</h3>
        <p>${s.summary}</p>
      </article>
    `).join('');
    stepsGrid.querySelectorAll('.step-card').forEach(card => {
      card.addEventListener('click', () => openStepModal(parseInt(card.dataset.step, 10)));
    });
  }

  // Open step modal
  function openStepModal(num) {
    const step = STEPS_DATA.find(s => s.num === num);
    if (!step || !modal || !modalTitle || !modalBody) return;
    modalTitle.textContent = `Step ${step.num}: ${step.title}`;
    modalBody.innerHTML = step.body;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // Close modal
  function closeModal() {
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) closeModal();
  });

  // Badge class by priority/status
  function getBadgeClass(priority) {
    if (priority === 'High') return 'badge-high';
    if (priority === 'Medium') return 'badge-medium';
    if (priority === 'Low') return 'badge-low';
    return 'badge-pending';
  }

  // Filter and render requirements
  function filterRequirements() {
    const search = (reqSearch?.value || '').toLowerCase();
    const category = reqCategory?.value || '';
    const priority = reqPriority?.value || '';
    const status = reqStatus?.value || '';
    const filtered = REQUIREMENTS_DATA.filter(r => {
      const matchSearch = !search || r.id.toLowerCase().includes(search) ||
        r.description.toLowerCase().includes(search) || r.source.toLowerCase().includes(search) ||
        r.owner.toLowerCase().includes(search);
      const matchCat = !category || r.category === category;
      const matchPri = !priority || r.priority === priority;
      const matchStatus = !status || r.status === status;
      return matchSearch && matchCat && matchPri && matchStatus;
    });
    renderRequirements(filtered);
    if (reqCount) reqCount.textContent = `Showing ${filtered.length} of ${REQUIREMENTS_DATA.length} requirements`;
  }

  function renderRequirements(data) {
    if (!requirementsBody || typeof REQUIREMENTS_DATA === 'undefined') return;
    requirementsBody.innerHTML = (data || REQUIREMENTS_DATA).map(r => `
      <tr>
        <td><code>${r.id}</code></td>
        <td>${escapeHtml(r.description)}</td>
        <td>${escapeHtml(r.source)}</td>
        <td>${escapeHtml(r.category)}</td>
        <td><span class="badge ${getBadgeClass(r.priority)}">${r.priority}</span></td>
        <td>${escapeHtml(r.owner)}</td>
        <td><span class="badge badge-pending">${r.status}</span></td>
      </tr>
    `).join('');
  }

  function escapeHtml(s) {
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  // Render traceability
  function renderTraceability() {
    if (!traceabilityBody || typeof TRACEABILITY_DATA === 'undefined') return;
    traceabilityBody.innerHTML = TRACEABILITY_DATA.map(t => `
      <tr>
        <td><code>${t.reqId}</code></td>
        <td>${escapeHtml(t.policy)}</td>
        <td>${escapeHtml(t.control)}</td>
        <td>${escapeHtml(t.evidence)}</td>
      </tr>
    `).join('');
  }

  // Event listeners for filters
  [reqSearch, reqCategory, reqPriority, reqStatus].forEach(el => {
    if (el) el.addEventListener('input', filterRequirements);
    if (el) el.addEventListener('change', filterRequirements);
  });

  // Init
  renderSteps();
  filterRequirements();
  renderTraceability();
})();

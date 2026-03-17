(function () {
  const links = Array.from(document.querySelectorAll('[data-tab-link]'));
  const panels = Array.from(document.querySelectorAll('[data-tab-panel]'));
  if (!links.length || !panels.length) return;

  const validTabs = panels.map((panel) => panel.dataset.tabPanel);

  const getTabFromHash = () => {
    const rawValue = window.location.hash.replace(/^#/, '');
    const value = rawValue === 'blog' ? 'writing' : rawValue;
    return validTabs.includes(value) ? value : 'home';
  };

  const updateUI = (activeTab) => {
    links.forEach((link) => {
      const isActive = link.dataset.tabLink === activeTab;
      link.classList.toggle('active', isActive);
      link.setAttribute('aria-selected', String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.tabPanel === activeTab;
      panel.classList.toggle('is-active', isActive);
      panel.hidden = !isActive;
      panel.setAttribute('aria-hidden', String(!isActive));
    });
  };

  const syncFromHash = () => {
    const activeTab = getTabFromHash();
    if (!window.location.hash) {
      history.replaceState(null, '', '#home');
    } else if (window.location.hash.replace(/^#/, '') !== activeTab) {
      history.replaceState(null, '', `#${activeTab}`);
    }
    updateUI(activeTab);
  };

  links.forEach((link) => {
    link.addEventListener('click', () => {
      const activeTab = link.dataset.tabLink;
      updateUI(activeTab);
    });
  });

  window.addEventListener('hashchange', syncFromHash);
  syncFromHash();
})();

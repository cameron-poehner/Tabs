const tabs = document.querySelector('.tabs');
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
    // Hide all tab panels
    tabPanels.forEach(panel => panel.hidden = true);
    // Mark all tab panels as selected
    tabButtons.forEach(tab => 
        tab.setAttribute('aria-selected', false));
    // mark the clicked Tab as selected
    event.currentTarget.setAttribute('aria-selected', true);    
    // Find the associated tab panel and show it
    const { id } = event.currentTarget;
    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    console.log(tabPanel);
    tabPanel.hidden = false;

}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
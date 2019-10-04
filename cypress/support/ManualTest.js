// Insert javascript for manual test actions
before(() => {
    const js = `
        const container = Cypress.$('<div id="manual-test-actions"></div>')
            .css('position', 'absolute')
            .css('display', 'none')
            .css('align-items', 'center')
            .css('justify-content', 'space-between')
            .css('bottom', '0')
            .css('left', '0')
            .css('right', '0')
            .css('margin', '0 auto')
            .css('width', '300px')
            .css('padding', '10px')
            .css('background', 'rgba(0,0,0,0.5)')
            .css('z-index', '999999');
    
        const successButton = Cypress.$('<button class="success-test">Success</button>')
            .css('display', 'block')
            .css('padding', '6px 20px')
            .css('color', '#fff')
            .css('border-radius', '4px')
            .css('border', 'none')
            .css('outline', 'none')
            .css('background', '#2ecc71')
            .on('click', () => top.window.successClicked = true);
    
        const failedButton = Cypress.$('<button class="failed-test">Failed</button>')
            .css('display', 'block')
            .css('padding', '6px 20px')
            .css('color', '#fff')
            .css('border-radius', '4px')
            .css('border', 'none')
            .css('outline', 'none')
            .css('background', '#e74c3c')
            .on('click', () => top.window.failedClicked = true);
    
        container.append(successButton);
        container.append(failedButton);
        
        container.appendTo(top.document.getElementsByClassName('runner')[0]);
    `;
    Cypress.$(window.parent.window.document.head)
        .append(`<script>${js}</script>`)
});

Cypress.Commands.add('manualTest', () => {
    Cypress.currentTest.retries(0);

    cy.task('notify', {
        title: 'Cypress',
        message: 'Manual intervention is required!',
    });

    Cypress.$('#manual-test-actions', window.parent.window.document)
        .css('display', 'flex');

    cy.waitUntil(() => window.parent.window.successClicked || window.parent.window.failedClicked, {timeout: 999999 , interval: 500})
        .then(() => cy.wrap(window.parent.window.successClicked))
        .then((success) => {
            Cypress.$('#manual-test-actions', window.parent.window.document)
                .css('display', 'none');
            window.parent.window.successClicked = false;
            window.parent.window.failedClicked = false;
            expect(success).to.be.true;
        });
});

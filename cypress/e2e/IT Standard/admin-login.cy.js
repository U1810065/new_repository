import Login from '../PageObject/login'


describe('IT Standard Admin', () => {
    const login = new Login()
    it ('Login negative', () => {
        cy.visit('https://it-web.dev.adflow.uz/admin-login')
        cy.get('.text-header').should('have.text', 'Вход ').should('be.visible').should('exist')
        cy.url().should('include', 'admin-login')
        login.inputlogin()
        login.loginbtn()
        cy.url().should('include', 'admin-login')
        cy.get('div[class="items-center justify-center absolute right-0 translate-x-1/2 rounded-full cursor-pointer h-9 w-9 bg-grayscale-150 tablet:flex hidden"]').click()
        cy.get('[href="/admin/users"]').click()
        // cy.get('div[class="tablet:pl-[260px] flex flex-col flex-1 transition-all duration-300"]').should('have.text', 'ULUGOVA NOZIMAXON SHUXRATBEK QIZI')
        cy.contains('ULUGOVA NOZIMAXON SHUXRATBEK QIZI').should('be.visible')
        cy.get('[href="/admin/request"]').click()
        cy.contains('nurbek093.nj@gmail.com').should('exist')
        cy.get('[href="/admin/organization"]').click()
        cy.contains('Tin').should('be.visible')
    })
})

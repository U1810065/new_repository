class Login {

    loginbtn(){
        return cy.get('p[class="text-body text-white font-medium group-hover:text-white"]').click()
    }
    inputlogin(){
        cy.get('.mt-8 > .relative > .w-full').type('admin@unicon.uz').should('have.value', 'admin@unicon.uz')
        
        cy.get('input[name="password"]').type('!@#QWEewq321dsa')
        
    }

}
    
export default Login

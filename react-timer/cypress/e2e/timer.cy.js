describe('Start and Stop', () => {
  beforeEach('sunucu run', () => {
    cy.visit('http://localhost:3000')   

  })
  it('start run',async () => {
    
    //start butona basıldı
    cy.contains('Start').click() 
    cy.screenshot('Start')
    // 10sn ye ayarlandı sn geri saydı
    cy.wait(10000)
    cy.get('[data-testid="gosterge"]').should('have.text', '24:50')
    //Sayım duraklatıldı
    cy.contains('Stop').click()
    cy.screenshot('Stop')
    cy.wait(5000)
    //Durdurduktan sonra sayıma devam edildi
    cy.contains('Start').click() 
    cy.screenshot('Start')
       //Reset butonuna basıldı 
    cy.wait(10000)
    cy.get('[data-testid="gosterge"]').should('have.text', '24:40')
    cy.contains('Reset').click()
    cy.screenshot('Reset')
    cy.get('[data-testid="gosterge"]').should('have.text', '25:00')
   
  })
  
  
})

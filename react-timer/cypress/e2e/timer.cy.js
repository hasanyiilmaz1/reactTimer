describe('Start and Stop', () => {
  beforeEach('sunucu run', () => {
    cy.visit('http://localhost:3000')   

  })
  it('start run',async () => {
    //start butona basıldı
    cy.contains('Start').click() 
    // 10sn ye ayarlandı sn geri saydı
    cy.wait(10000)
    //Sayım duraklatıldı
    cy.contains('Stop').click()
    cy.wait(5000)
    //Durdurduktan sonra sayıma devam edildi
    cy.contains('Start').click() 
    //Reset butonuna basıldı 
    cy.wait(10000)
    cy.contains('Reset').click()
 
   
  })
  
  
})
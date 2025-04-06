const openButton = document.querySelector('#openButton');
const modalInfo = document.querySelector('#modalInfo');
const closeButton = document.querySelector('#closeButton');
const modalInfoText = document.querySelector('#modalInfo div')

openButton1.addEventListener("click", () => {
modalInfo.showModal();

modalInfoText.innerHTML=`
 <h3>Non Profit Membership</h3>
            <p>Free membership for nonprofit organizations. Benefits include event access and community support.</p>
            
`
});

openButton2.addEventListener("click", () => {
    modalInfo.showModal();
    
    modalInfoText.innerHTML=`
    <h3>Bronze Membership</h3>
            <p>Includes training events and basic advertising. Ideal for small businesses.</p>
        
    `
    });

    openButton3.addEventListener("click", () => {
        modalInfo.showModal();
        
        modalInfoText.innerHTML=`
        <h3>Silver Membership</h3>
            <p>Includes all Bronze benefits plus spotlight homepage placement and event discounts.</p>
        
        `
        });

        openButton4.addEventListener("click", () => {
            modalInfo.showModal();
            
            modalInfoText.innerHTML=`
            <h3>Gold Membership</h3>
            <p>All-inclusive membership with exclusive training, advertising, and top-tier visibility perks.</p>
        
            `
            });

closeButton.addEventListener("click", () => {
    modalInfo.close();
    })
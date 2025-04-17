 const myInfo = new URLSearchParams(window.location.search);
 const currentYear =  new Date().toISOString().split("T")[0];


document.querySelector('#myresults') . innerHTML = `
<p>Name: ${myInfo.get('name')} </P>
<p>Email: ${myInfo.get('email')} </P>
<p>Message: ${myInfo.get('message')} </P>

`



      
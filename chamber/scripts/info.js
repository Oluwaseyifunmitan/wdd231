 const myInfo = new URLSearchParams(window.location.search);
 const currentYear =  new Date().toISOString().split("T")[0];


document.querySelector('#myresults') . innerHTML = `
<p>Membership info for: ${myInfo.get('first_name')} ${myInfo.get('last_name')}</P>
<p>Email: ${myInfo.get('email')} </P>
<p>Mobile Number: ${myInfo.get('phone')} </P>
<p>Business Name: ${myInfo.get('organization')} </P>
<p>Date: ${myInfo.get('timestamp')} ${currentYear} </P>
`



      
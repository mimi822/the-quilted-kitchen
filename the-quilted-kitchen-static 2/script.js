
function handleSubmit(e){
  e.preventDefault();
  alert('Pre‑order received! (Demo) Connect this form to a service like Tally, Typeform, or email.');
  return false;
}
function handleNewsletter(e){
  e.preventDefault();
  alert('Subscribed! (Demo) Connect to Mailchimp, ConvertKit, or your email list.');
  return false;
}
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('email-submit').addEventListener('submit', function(event) {
    event.preventDefault()
    const [fname, lname] = [document.getElementsByName('fname').innerHTML, document.getElementsByName('lname').innerHTML]
    console.log(fname)

    alert('Your email has been sent')
})

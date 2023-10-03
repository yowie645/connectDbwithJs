const $contactForm = document.querySelector('#js-contact-form')

$contactForm.addEventListener('submit', handleSubmit)

async function handleSubmit(e) {
  
  e.preventDefault()

    const $form = e.target,
    $fullName = $form.querySelector('#fullName'),
    $email = $form.querySelector('#email'),
    $message = $form.querySelector('#message'),
    response = await fetch('https://api.apispreadsheets.com/data/uSmYMAt0yQfxzKN5',{
      method: 'POST',
      body: JSON.stringify({
        data: {
          full_name: $fullName.value,
          email: $email.value,
          message: $message.value
        }
      })
    })

  if(response.status === 201) alert('Сообщение отправлено успешно !')
  else alert('Ошибка')

  $form.reset()
    
}

//https://api.apispreadsheets.com/data/uSmYMAt0yQfxzKN5/
//https://docs.google.com/spreadsheets/d/1kUL6o_Y5YxQ1hpDoGuAS9Ql2yozZbdQVWPLwkbunV6I/edit#gid=0
import Connector from '@tableau/taco-toolkit'

let connectorInitialized = false
let pageLoaded = false

// Inicializar el conector
const connector = new Connector(() => {
  connectorInitialized = true
  enableButtonWhenReady()
})

// Función para enviar los datos a través del conector
function submit() {
  // Obtener los valores ingresados por el usuario
  const username = (document.getElementById('username') as HTMLInputElement).value || ''
  const limit = (document.getElementById('limit') as HTMLInputElement).value || '10'

  console.log(`Fetching tweets for ${username} with a limit of ${limit}`)

  // Configurar el input del conector con la URL personalizada
  connector.handlerInputs = [
    {
      fetcher: 'TwitterFetcher',
      parser: 'TwitterParser',
      data: {
        url: `https://twitter-connector-backend.onrender.com/tweets?username=${username}&limit=${limit}`,
      },
    },
  ]
  connector.submit()
}

// Manejar el evento de clic en el botón de envío
function handleSubmit() {
  const button = getSubmitButton()

  // Deshabilitar el botón mientras se procesa la solicitud
  button.toggleAttribute('disabled')
  button.innerText = 'Processing...'

  // Enviar la solicitud
  submit()
}

// Habilitar el botón de envío una vez que el conector esté listo
function enableButtonWhenReady() {
  if (connectorInitialized && pageLoaded) {
    const button = getSubmitButton()

    button.innerText = 'Get Twitter Data!'
    button.removeAttribute('disabled')
    button.addEventListener('click', handleSubmit, { once: true })
  }
}

// Obtener el botón de envío del DOM
function getSubmitButton(): HTMLElement {
  const button = document.getElementById('submitButton')
  if (!button) {
    throw new Error('Submit button is not present on the page.')
  }

  return button
}

// Esperar hasta que la página haya cargado completamente
window.addEventListener('load', function () {
  pageLoaded = true
  enableButtonWhenReady()
})

const video = document.getElementsByClassName("destaque__video");
const subtitle = document.getElementById("subtitle");

// ... (Código para configurar o MediaSource Extensions e o Web Audio API)

// Função para enviar um chunk de áudio para a API de reconhecimento de voz e atualizar as legendas
function processAudioChunk(chunk) {
  // Enviar o chunk para a API e obter a transcrição
  fetch("./video/acessiblidade.mp4", {
    method: "POST",
    body: chunk,
  })
    .then((response) => response.json())
    .then((data) => {
      subtitle.textContent = data.transcript;
    });
}

// ... (Código para processar o vídeo em chunks e chamar a função processAudioChunk)

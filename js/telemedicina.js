const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const startCallBtn = document.getElementById('startCall');
const endCallBtn = document.getElementById('endCall');

let localStream;
let peer;

async function startCall() {
    try {
        // Captura o vídeo do paciente
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;

        peer = new SimplePeer({
            initiator: true,
            trickle: false,
            stream: localStream
        });

        peer.on('signal', data => {
            // Envie o sinal para o outro lado (via servidor ou outro método)
            console.log('SIGNAL:', JSON.stringify(data));
        });

        peer.on('stream', stream => {
            remoteVideo.srcObject = stream;
        });

        // Receba o sinal do outro lado e sinalize ao peer
        // Isso deve ser feito via servidor ou outro método de sinalização

        peer.on('close', () => {
            endCall();
        });

    } catch (error) {
        console.error('Erro ao acessar mídia:', error);
    }
}

function endCall() {
    if (peer) {
        peer.destroy();
        peer = null;
    }
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
        localStream = null;
    }
    localVideo.srcObject = null;
    remoteVideo.srcObject = null;
}

startCallBtn.addEventListener('click', startCall);
endCallBtn.addEventListener('click', endCall);

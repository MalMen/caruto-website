// trying to avoid spam
maildiv = document.getElementById("socialcontact")
if (maildiv !== null) {
  direction = maildiv.getAttribute("direction")
  domain = maildiv.getAttribute("domain")
  fullm = direction+"@"+domain
  maildiv.href = "mailto:"+fullm+"?subject=Pergunta/Sugestão ao podcast"
  maildiv.text = fullm
}

function changePlaybackSpeed(audioElementID, playbackSpeed){
  const audioElement = document.getElementById(audioElementID);
  audioElement.playbackRate = playbackSpeed;
};

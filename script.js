'use strict';

document.addEventListener('DOMContentLoaded', e => {
	const btnNotify = document.querySelector('button#notify')

	if ('Notification' in window)
		Notification.requestPermission().then();
	else
		alert('Esse dispositivo não suporta notificações nativamente')

	btnNotify.addEventListener('click', e => {
		if(Notification.permission == 'granted') {
			let notification = new Notification('Notificação #42', {
				body: 'Texto da notificação',
				vibrate: window.navigator.vibrate([300])
			})
		}
	})
})
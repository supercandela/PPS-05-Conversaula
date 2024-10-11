import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent  implements OnInit {
  salaId?: string;
  mensajes: any[] = [];
  nuevoMensaje: string = '';
  usuario: string = 'maria.lopez@example.com';

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    this.mensajes = [{
      usuario: 'juan.perez@example.com',
      fecha: '22 de septiembre de 2024, 8:03:56 p.m. UTC-3',
      mensaje: 'Hola a todos, ¿cómo están?'
    },
    {
      usuario: 'maria.lopez@example.com',
      fecha: '22 de septiembre de 2024, 8:05:20 p.m. UTC-3',
      mensaje: '¡Hola Juan! Todo bien, ¿y tú?'
    },
    {
      usuario: 'carlos.garcia@example.com',
      fecha: '22 de septiembre de 2024, 8:06:45 p.m. UTC-3',
      mensaje: '¡Buenas noches! ¿Listos para empezar?'
    },
    {
      usuario: 'ana.rodriguez@example.com',
      fecha: '22 de septiembre de 2024, 8:07:12 p.m. UTC-3',
      mensaje: 'Sí, ya estoy lista. Vamos a darle.'
    },
    {
      usuario: 'lucas.martinez@example.com',
      fecha: '22 de septiembre de 2024, 8:08:33 p.m. UTC-3',
      mensaje: 'Tengo una duda sobre el tema de hoy.'
    },
    {
      usuario: 'juan.perez@example.com',
      fecha: '22 de septiembre de 2024, 8:09:14 p.m. UTC-3',
      mensaje: '¿Qué duda tienes, Lucas?'
    },
    {
      usuario: 'lucas.martinez@example.com',
      fecha: '22 de septiembre de 2024, 8:10:02 p.m. UTC-3',
      mensaje: 'No entendí bien la parte del nuevo componente.'
    },
    {
      usuario: 'ana.rodriguez@example.com',
      fecha: '22 de septiembre de 2024, 8:11:38 p.m. UTC-3',
      mensaje: 'Podemos repasarlo, es una parte clave del proyecto.'
    },
    {
      usuario: 'carlos.garcia@example.com',
      fecha: '22 de septiembre de 2024, 8:12:47 p.m. UTC-3',
      mensaje: 'Totalmente, déjenme compartirles la documentación.'
    },
    {
      usuario: 'maria.lopez@example.com',
      fecha: '22 de septiembre de 2024, 8:13:56 p.m. UTC-3',
      mensaje: '¡Perfecto! Gracias, Carlos.'
    }];
   }

  ngOnInit() {
    this.salaId = this.route.snapshot.paramMap.get('salaId') || '';
  }

  enviarMensaje () {
    console.log(this.nuevoMensaje);
    // if (this.nuevoMensaje.trim() != '') {
    //   this.chatService.registrarMensaje(this.usuario, this.nuevoMensaje);
    //   this.nuevoMensaje = '';
    //   this.scrollToBottom();
    // }
  }

  onLogout () {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}

import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ChatService } from './chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked {
  salaId?: string;
  mensajes: any[] = [];
  nuevoMensaje: string = '';
  sub?: Subscription;
  usuario: string = '';
  subMensajes?: Subscription;
  @ViewChild('scrollAnchor') private scrollAnchor?: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private chatService: ChatService
  ) {}

  ngOnInit() {
    this.salaId = this.route.snapshot.paramMap.get('salaId') || '';
    this.sub = this.authService.userEmail.subscribe((respuesta: any) => {
      this.usuario = respuesta;
    });
    this.subMensajes = this.chatService
      .getMensajes(this.salaId)
      .subscribe((respuesta: any) => {
        this.mensajes = respuesta;
      });
  }

  enviarMensaje() {
    if (this.nuevoMensaje.trim() != '' && this.salaId) {
      this.chatService.registrarMensaje(
        this.salaId,
        this.usuario,
        this.nuevoMensaje
      );
      this.nuevoMensaje = '';
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    if (this.scrollAnchor) {
      this.scrollAnchor.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.subMensajes?.unsubscribe();
  }
}

import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  constructor(private gifService: GifsService) {}

  buscar(termino: string) {
    this.gifService.buscarGifs(termino);
  }

  get historial() {
    return this.gifService.historial;
  }
}

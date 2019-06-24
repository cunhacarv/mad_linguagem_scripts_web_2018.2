import { Component } from '@angular/core';
import { Foto } from './foto/fotos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fotos:Foto[] = [
    {
    id: 1,
    titulo: 'Windranger',
    alt: 'Windrager Lyralei',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg/250px-Polar_Bear_-_Alaska_%28cropped%29.jpg',
    descricao: 'Urso Polar'
    }
]
}

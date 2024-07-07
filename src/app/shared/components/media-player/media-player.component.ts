import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TracksModule } from '@modules/tracks/tracks.module';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit{
  
  mockCover: TrackModel = {
    name: 'BEBE',
    album: 'Gioli & Alissa',
    cover: "https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc",
    url: "http://localhost:3000/track-3.mp3",
    _id: 1,
  }

  constructor(){

  }

  ngOnInit(): void {
    
  }
}

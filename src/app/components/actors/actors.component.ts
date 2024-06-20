// src/app/actors/actors.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Actor } from '../../models/actor';
import { SanityService } from '../../service/sanity.service';

@Component({
selector: 'app-actors',
  standalone: true,
 imports: [CommonModule],
templateUrl: './actors.component.html',
styleUrls: ['./actors.component.css']
})

export class ActorsComponent implements OnInit {

constructor(private sanityService: SanityService) { }

  actors: Actor[] = [];

  defaultImageURL =
  "https://images.vexels.com/media/users/3/140384/isolated/preview/fa2513b856a0c96691ae3c5c39629f31-girl-profile-avatar-1-by-vexels.png";

  imageUrl(source: any) {
    return source ? this.sanityService.urlFor(source) : this.defaultImageURL;
  }

  ngOnInit(): void {
    this.getActors();
  }

  async getActors(): Promise<Actor[]> {
    this.actors = await this.sanityService.getActors();
    return this.actors;
  }
}

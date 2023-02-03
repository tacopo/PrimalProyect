import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  videos = [
    {clip: "../../assets/videos/infected.mp4",description: "Spear and Fang Chased by the Mad Sauropod"},
    {clip: "../../assets/videos/lunch.mp4",description: "Lunch"},
    {clip: "../../assets/videos/hyenas.mp4",description: "Spear and Fang vs The Hyenas"},
    {clip: "../../assets/videos/cook.mp4",description: "Mira Cooks a Proper Meal for Spear and Fang"},
    {clip: "../../assets/videos/fear.mp4",description: "The Night Feeder"},
    {clip: "../../assets/videos/work.mp4",description: "Spear, Fang and Mira work as a Team"},
  ]
}

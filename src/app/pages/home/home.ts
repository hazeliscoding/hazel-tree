import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type LinkItem = {
  label: string;
  url: string;
  emoji?: string;
  description?: string;
  isNew?: boolean;
};

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  profile = {
    name: 'Hazel',
    handle: '@hazelbasil',
    bio: '🌸 software developer | anime + games | building cute things on the internet 🌸',
    avatarUrl: 'https://placehold.co/256x256?text=Avatar', // TODO: swap later with something like assets/avatar.png
  }

  links: LinkItem[] = [
    { label: 'AniList', url: 'https://anilist.co/user/hazelbasil', emoji: '📺', description: 'My anime list', isNew: true },
    { label: 'MyFigureCollection', url: 'https://myfigurecollection.net/profile/hazelbasil', emoji: '🧸', description: 'My figure collection' },
    { label: 'Backloggd', url: 'https://backloggd.com/u/hazelbasil', emoji: '🎮', description: 'My game backlog' },
    { label: 'GitHub', url: 'https://github.com/hazeliscoding', emoji: '💻', description: 'My GitHub profile' }
  ]

  footer = {
    text: 'Made with 💖 by Hazel',
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  facts = [
    { title: "Premise", content: "Primal features a caveman at the dawn of evolution. A dinosaur on the brink of extinction. Bonded by tragedy, this unlikely friendship becomes the only hope of survival in a violent, primordial world."},
    { title: "Cast", content: "Aaron LaPlante as Spear[9], Ape-man #3, Big Gorilla, Screaming Caveman, Viking, Viking C, Constable, Soldier 1, Soldier 2, and Spear's Father.\n\nTom Kenny as Ape-man #1 and Ape-man #2.\n\nJon Olsen as Ape Shaman and Krog.\n\nAmanda Troop as Lula and Witches (Baba, Kira, Haga and Deena).\n\nLaetitia Eido-Mollon as Mira"},
    { title: "Trivia", content: "This series is the second television series created by Tartakovsky to air on Adult Swim, the first was Samurai Jack. However, Samurai Jack initially aired exclusively on Cartoon Network for four seasons.\n\nThe series has almost no dialogue, focusing only on visual storytelling. The only exception is a vocal accompaniment of grunts, screams, and roars.\n\nThe series is animated by French studio Studio La Cachette.\n\nOne of the goals of Primal was to give it a strong horror theme. To accomplish this, the crew drew influence from multiple sources, including Conan The Barbarian, Osamu Tezuka, Frank Frazetta, Moebius, Ralph Bakshi, and Heavy Metal Magazine.\n\nIn an interview following the second season finale, Genndy Tartakovsky stated that season 2 concluded Spear and Fang's story, and has expressed interest in exploring other stories with different characters if there are future seasons of Primal."}
  ]
}

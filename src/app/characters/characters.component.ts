import { Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  characters = [
    { name: "Spear", type: "Protagonist", img: "../../assets/imgs/spear.png", description: "Spear is the protagonist of Primal. He was a caveman from an alternate prehistoric Earth who struggled to survive the violent and brutal conditions of the primordial world, and in the process, forged an unlikely bond with a dinosaur.", link: "https://primaltv.fandom.com/wiki/Spear" },
    { name: "Fang", type: "Protagonist", img: "../../assets/imgs/fang.webp", description: "Fang is the deuteragonist of Primal. A female Tyrannosaurus rex, she tragically lost her young around the same time she crosses paths with a prehistoric human. Together, they strike an unlikely friendship and struggle to adapt to the harsh and unbearable world.", link: "https://primaltv.fandom.com/wiki/Fang" },
    { name: "Mira", type: "Protagonist", img: "../../assets/imgs/mira.webp", description: "Mira is a female Homo sapiens who was enslaved by a mysterious group of Vikings, but escaped and soon encountered Spear and Fang who became her companions. She is the tritagonist of Primal.", link: "https://primaltv.fandom.com/wiki/Mira" },
    { name: "Fang's Offspring", type: "Protagonist", img: "../../assets/imgs/fang_children.jpg", description: "Fang's Offspring are minor characters in Primal. As the name suggests, they are the young of Fang the tyrannosaur; so far, she has reared two separate clutches. Her first set were born prior to first episode and killed shortly after Fang met Spear; the second set were born a while after Fang mated with another Tyrannosaur.", link: "https://primaltv.fandom.com/wiki/Fang's_Offspring" },
    { name: "Tyrannosaurus pack ", type: "Antagonists", img: "../../assets/imgs/Tyrannosaurus_pack.webp", description: "A pack of tyrannosaurs[1] appear as brief antagonists of the series Primal for Season 1 of the first episode.", link: "https://primaltv.fandom.com/wiki/Tyrannosaurus_pack" },
    { name: "Infected Argentinosaurus", type: "Antagonists", img: "../../assets/imgs/infected.webp", description: "The Infected Argentinosaurus (also known as the Mad Sauropod or the Plague Monster) was an individual Argentinosaurus[1] that was infected by a disease that turned it rabid and murderous.", link: "https://primaltv.fandom.com/wiki/Infected_Argentinosaurus" },
    { name: "Kamau", type: "Supporting", img: "../../assets/imgs/kamau.webp", description: "Kamau is a member of a peaceful tribe of giants who, for a time, were enslaved and forced into servitude by a tyrannical queen, Ima.", link: "https://primaltv.fandom.com/wiki/Kamau" },
    { name: "Lula", type: "Supporting", img: "../../assets/imgs/lula.webp", description: "Lula was a former member of a tribe of primitive witches. ", link: "https://primaltv.fandom.com/wiki/Lula" },
  ]
}

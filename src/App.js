import { useState, useEffect } from "react";
import "./App.css";
import "./ScrollIndicator.css";

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });

  return (
    <div className="App">
      <div className="progressMainWrapper">
        <div
          className="progressMainStyle"
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
      <h1>Roma Empire</h1>
      <p>
        The Roman Empire is the Ancient Roman state that was formed during the
        Roman Republic period when Augustus received the powers to govern the
        Republic alone and had rights that were not given to anyone during the
        Republican period.[1] Augustus, BC. Until the year 2, he carried out
        constitutional reforms that would allow only one person to rule the
        Republic after him, and the Roman Empire was fully formed. The empire,
        which ruled around the Mediterranean for many years, was divided into
        two as east and west in 395, after the internal turmoil that started
        with the Migration of Tribes in 375, and remained a superpower from its
        foundation until its disintegration. The Western Roman Empire, the
        western part of the empire, was destroyed in 476 as a result of the
        attacks of the Germanic tribes that came to Europe with the Migration of
        Tribes, while the eastern part of the empire continued its existence as
        the Eastern Roman Empire or the Byzantine Empire in 1453, when the
        seventh Sultan of the Ottoman Empire II. It continued until Mehmet's
        conquest of Istanbul. "Roman Empire" is Turkish for the famous Latin
        Imperium Romanum. In this saying, the word imperium is used to mean a
        region, a province. It can be said that the Roman Empire was a name used
        for the part of Europe that was under the rule of the Romans. In fact,
        the policy of transcending the Roman city limits and spreading began
        long before the imperial period. At its largest, the Roman Empire was
        about 5,900,000 km². It was the largest empire in European history
        during "classical antiquity". Centuries before the reign of Augustus,
        Rome (the Roman Kingdom and the Roman Republic) had already crossed the
        Italian Peninsula, defeating its important rivals. The reforms of
        Augustus turned the Roman State into an empire, and the system remained
        largely unchanged until Diocletian's reform at the end of the 3rd
        century. Diocletian's reform transformed the empire into a tetrarchy.
        Although the political system that Diocletian presented survived for a
        short time, it led to the division of the empire in two. This allowed
        Roman rule to continue for two more centuries as the Eastern and Western
        Roman Empires. The traditional date of collapse of the Western Roman
        Empire is September 4, 476. About a thousand years later, in 1453, the
        Eastern Roman Empire, more commonly known as the Byzantine Empire, came
        under the rule of the Ottomans. From Augustus until the fall of the
        Western Roman empire, Rome dominated Western Eurasia, housing half the
        population.
      </p>
    </div>
  );
}

export default App;

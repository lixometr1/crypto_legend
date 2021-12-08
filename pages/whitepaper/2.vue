<template>
  <div>
    <WhitepaperContent>
      <div id="intro">
        <h2>Introduction</h2>
        <p>
          Our world is under the auspices of the Greatest of the Lords, no one
          doubts in his value and even necessity for people. He has always been.
          And from time to time he can show his grace to the inhabitants of the
          planets. But on one good day, all planets of the system were attacked
          by unidentified creatures, from which the local self-defence forces
          couldn’t protect. Firstly, people didn’t understand that it was a
          global invasion and those who were not affected just ignored the calls
          to arms and mobilization. However, when it became obvious that a
          problem was global, it was already too late. There were a lot of
          invasion hotbeds and the human army was objectively losing. At this
          unfavorable moment, a savior appeared - God. He arrived along with a
          huge ship - the dam, on which the evacuation of all human beings was
          subsequently organized. Here God enlightened people about what is
          happening in the world and their role in it. The Lord told people that
          there are lots of inhabited worlds in endless space, that people were
          attacked by the creatures of all-consuming chaos etc. But God gave
          people hope for salvation from this attack - technology of other
          worlds. The central technique was the ability to clone warriors from
          other worlds, for which people were given genotypes and incubators.
          Humanity was assigned the role of generals, those who would lead the
          clone warriors into the battle. Since they don’t have time to reach
          life experience and to be an independent combat unit, people were told
          about the heroes of distant stars, introduced to their history and
          past, so people could better understand how and where they can come in
          handy. With the appearance of chaos in the people’ star system,
          elements came to their home planets. How and why? - no one understood.
          Although, perhaps, God knows, but who dares to ask him...However, he
          hinted that humans have a chance to master them and make them their
          main weapon.
        </p>
      </div>
      <div id="adventures">
        <h3>Adventures</h3>
        <p>
          God has set specific tasks for humanity:
        </p>
        <ul class="ul_style">
            <li>
                It’s necessary to strengthen the personal troops of people and bring them to a competitive level of opposition
            </li>
            <li>
                Expand the bridgehead for the invasion of the planets of the native system. Start to develop lands of planets and strengthen your troops
            </li>
            <li>
                To recapture all lands on the planet and build defensive perimeters/structure from further invasions
            </li>
            <li>
                Establish supply and trade between the planets, protect shipping and ensure technological development. Expeditions into space and its possible colonization.
            </li>
        </ul>
      </div>
      
      <div id="classes">
        <h3>Classes</h3>
        <p>
          At the very beginning there will be 6 main Hero Classes, these are:
          Defender, Warrior, Magician, Support, Assassin, Archer. Each of them
          has its own unique set of improvements and roles in battle. The
          well-known classics were specially left as a starting point for
          understanding the battles in the game. Perhaps, due to genetic
          manipulation, you will be able to develop new classes of Heroes and
          understand what their unique features and capabilities are. Be the
          first, who will know the secret and will be able to get rich on it.
        </p>
      </div>
      <div id="elements">
        <h3>Elements</h3>
        <p>
          On your way, you will be able to master the knowledge of 4 elements:
        </p>
        <ul class="ul_style">
          <li class="red_item">Fire (ignitus) - Ront</li>
          <li class="yellow_item">Earth (Terros) - Shelez</li>
          <li class="cyan_item">Air (air) - Arden</li>
          <li class="blue_item">Water (aquatis) - Rivera</li>
        </ul>
        <p>
          The remaining heroes, when traveling to other planets, gained the
          ability to survive in one environment or another. Over time, passing
          each of the planets and difficulties, your clones will begin to master
          these elements and use them strategically on the battlefield.
        </p>
      </div>
      <div id="genome">
        <h3>Genome</h3>
        <p>
          The genome is the embodied legacy of the Heroes, a part of their
          strength and capabilities. Taking two genomes from different Heroes,
          people can breed new and stronger, capable and element- gifted heroes.
          There is still a very long way of selection before getting the
          strongest warriors.
        </p>
        <img :src="require('@/assets/img/whitepaper/genome.jpg')" class="main" alt="" />
      </div>
      <div id="clone">
        <h3>Clone</h3>
        <p>
          Each impulse character is unique in its own way and has its personal
          combat characteristics. Such a system creates a more flexible and fun
          interaction with the world. Through incubation, you can create more
          and more heroes in the game. The more clones, the more likely it is to
          create a unique member. Perhaps it will be you who will be lucky
          enough to create a clone with a predisposition to weapons or other
          characteristics necessary in battle.
        </p>
      </div>
      <div id="weapon">
        <h3>Weapon</h3>
        <p>
          Your clones can own weapons that determine their class, adding the
          necessary parameters and bonuses to themselves during the battle. As
          you progress, you will receive weapons of a rarer segment and improve
          it. The weapon can be sold like any other NFT item in the Game Store.
        </p>
      </div>
      
    </WhitepaperContent>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">

img{
    /* opacity: .5; */
    /* filter: blur(3px); */
    border-radius: 10px;
    /* box-shadow: -.5px -.5px 2px 0px #ffffff22; */
}
p {
  line-height: 28px;
}
a.text-link {
  color:white;
  text-shadow:0 0 8px #ffffff99
}
.main {
  /* position: absolute; */
  top:0;
  left: 0;
  z-index: -10;
  transition: all .5s;
  /* opacity: .4;
  filter:blur(4px); */
  /* position: relative; */
  /* width:100px!important; */
  /* height:100px!important; */
  &:hover{
    opacity: 1;
    filter:blur(0px);
  }

}
h3 {
  margin-top:36px!important;
  font-size:28px;
  font-weight: bold;
}
strong{
  color:white
}

p{
  color:#Dedbdb!important
}
span.white {
  color:white;
}
.ul_style {
    color:#Dedbdb!important;

  margin: 8px 20px;
  ul{
    margin-left:30px;
  }

  li{
    list-style: none;
    padding-bottom: 12px;
    padding-left:8px;
    position: relative;
    

    /* background:blue; */
   
    &::before{
      content: '';

      width: 10px;
      height: 10px;
      border-radius: 10px;
      background: #8B53E7;
      position: absolute;
      margin: auto;
    
      top: 50%;
      transform: translateY(-100%);
      left:-20px;
      /* top:calc(7px+30%); */
      box-shadow: 0 0 18px 1px #8B53E7ff, inset 0 -1px 3px black;
    }
    &.red_item{
        &::before{
            background: #E32F2F;
            box-shadow: 0 0 18px 1px #E32F2F, inset 0 -1px 3px black;
        }
    }
    &.yellow_item{
        &::before{
            background: #F1D22D;
            box-shadow: 0 0 18px 1px #F1D22D, inset 0 -1px 3px black;
        }
    }
    &.cyan_item{
        &::before{
            background: #1EE5C2;
            box-shadow: 0 0 18px 1px #1EE5C2, inset 0 -1px 3px black;
        }
    }
    &.blue_item{
        &::before{
            background: #365CE3;
            box-shadow: 0 0 18px 1px #365CE3, inset 0 -1px 3px black;
        }
    }
    
  }
  /* ДРУГИЕ ЦВЕТА СПИСКА */
  &.blue_ul li::before{
    background: blue;
     box-shadow: 0 0 18px 1px blue, inset 0 -1px 3px black;
  }
  &.orange_ul li::before{
    background: cyan;
     box-shadow: 0 0 18px 1px #00ffff88, inset 0 -1px 3px black;
  }
}



</style>

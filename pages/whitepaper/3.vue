<template>
  <div>
    <WhitepaperContent>

      <div id="lands">
        <h2>Expansion</h2>
        
        <h3>Lands</h3>
        <p>
          After so much destruction, rallying in teams, you need to rebuild your
          empire again!
        </p>
      </div>
      <div id="land-plots">
        <h3>Land plots</h3>
        <p>
          Everyone can own land plots. Rebuild your buildings to increase the power of your clones, advance in trade, increase influence where it seems humane to you.

        </p>
      </div>
      <div id="personal">
        <h3>Personal</h3>
        <p>
          Build reinforcing buildings for your warriors, create farms, produce
          more resources for trading, delve deeper into the knowledge for bigger
          success in your beginnings.
        </p>
      </div>
      <div id="buildings">
        <h3>Buildings</h3>
        <p>
          During the advancement, the players will have to choose between the
          constructions aimed at their result. What exactly to build and what
          structure to create is up to you. Here, the participants are given
          full self-government and the whole flight of fantasies. Construct new
          buildings, increase power, develop your lands and control the further
          course of the game.
        </p>
      </div>
      <div id="clan">
        <h3>Clan</h3>
        <p>
          To increase the stability of its position and good growth, the team
          will need to decide the fate of the development of its community.
          Taking into account the necessary requirements in such solutions, the
          DAO system will be integrated. Thus, all members who are interested in
          the development of their clan will be able to become part of the
          "superpower". Occupying a certain place in society, the player will be
          endowed with the right to vote and will be able to use this privilege
          and decide the fate of the further development of the game.
        </p>
        <p>
          Unlike personal buildings, clan building buffs apply to everyone in
          the community. Clan formations are designed to enhance all parameters
          in battles for all heroes who are in a given battle clan. Each union
          has its own land plot, where different buildings can be erected to
          increase the speed of material extraction and the construction of
          different buildings. Participants need resources to construct each
          building. Also, don't be limited to one world. There are 4 planets in
          the game that are open to your exploration. On any of the planets, you
          can conquer, buy lands, build clan buildings and strive to combine
          everything into one monopoly.
        </p>
      </div>
      <img :src="require('@/assets/img/whitepaper/planet_water.png')" class="main" alt="" />
    </WhitepaperContent>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">

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

<template>
  <div>
    <WhitepaperContent>
      <div id="bsc">
        <h2>Technology</h2>
        <h3>BSC</h3>
        <img :src="require('@/assets/img/Technology/bsc.png')" class="technology" alt="" />
        <p>
          It is a decentralized blockchain of the Binance exchange that extends
          the capabilities of the Binance Chain and is focused on smart
          contracts and decentralized applications.
        </p>
        <p>
          Impulse smart contracts will be deployed on the Binance Smart Chain
          because it is easy to use and easily integrates with Ethereum (and
          other protocols) and has cheap transaction fees. NFT collectibles will
          be hosted on the Binance Smart Chain as well as on the marketplace.
        </p>
        <img src="" alt="" />
      </div>
      <div id="unity">
        <h3>Unity</h3>
        <img :src="require('@/assets/img/Technology/unity.png')" class="technology" alt="" />
        <p>
          Unity is not only the world's best real-time development platform, but
          also a reliable ecosystem. In Unity, scripts can be used to develop
          almost any game element or interactive content with real-time
          graphics. Unity supports C # scripts that follow one of two main
          approaches: the traditional and widely used object-oriented approach
          and the data-oriented approach, which is also supported in some cases
          by Unity through its high-performance multithreaded data-oriented
          technology stack (DOTS).
        </p>
        <img src="" alt="" />
      </div>
      <div id="moralis">
        <h3>Moralis</h3>
        <img :src="require('@/assets/img/Technology/moralis.png')" class="technology" alt="" />
        <p>
          Moralis is the fastest way to create and distribute decentralized
          applications on Ethereum, BSC, Polygon, Solana. All Moralis
          decentralized apps are cross-chain by default. The use of Moralis
          ensures that our game will keep up with the times. Even if new
          blockchains are invented, our game will instantly work on any chain.
        </p>
        <img src="" alt="" />
      </div>
    </WhitepaperContent>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">

img.technology{

  max-width: 500px;
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

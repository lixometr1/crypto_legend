<template>
  <div>
    <WhitepaperContent>
     <div id="imp-token">
        <h2>IMP Token</h2>
        <img :src="require('@/assets/img/whitepaper/Tokenomics_neon.png')" class="main whitepaper md:hidden" alt="" />
        <!-- <img :src="require('@/assets/img/whitepaper/Tokenomics_neon_2.png')" class="main whitepaper" alt="" /> -->
         <p>
          IMP is a non-fungible ERC-20 / BEP-20 functional utility token. This
          token is a tradable asset and grants the owner the right to use it for
          trading or economic purposes. The purpose of introducing a native IMP
          token is to provide its own currency. This will enable users to play
          and participate in the gaming ecosystem. The IMP token can only be
          used in Impulse.
        </p>
        <img :src="require('@/assets/img/whitepaper/unlocked.png')" class="main whitepaper" alt="" />
        
        
        
       
        <p>
          With the help of the IMP, players will be able to create, buy and sell
          “non-fungible” in-game unique items. In addition, the IMP grants the
          right to use certain features. This creates economic motivation in the
          gaming ecosystem. As a result, each player will be rewarded for their
          efforts in a fair and transparent manner. Without creating personal
          token, participants will have no motivation to act for the benefit of
          the Impulse ecosystem and spend resources on participation. This
          creates a mutually beneficial environment between players, creators
          and investors, where everyone gets their own advantages. IMP tokens
          play an essential role in Impulse, allowing users to participate in a
          play-to-earn model, character upgrade, squad selection, and more.
          These tokens can be stored in exchange for value, traded, and bet for
          interest.
        </p>
        <img :src="require('@/assets/img/whitepaper/tokenInfo.png')" class="tokenInfo whitepaper" alt="" />
      </div>
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
img.whitepaper{
  opacity: .8;
  transition: opacity .3s;
  &:hover{
    opacity: 1;
  }
}
img.tokenInfo{
  width: 50%;
  @apply md:w-full;
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

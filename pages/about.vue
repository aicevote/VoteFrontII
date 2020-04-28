<template>
  <div>
    <h1>What's AICEVOTE?</h1>

    <h2>普通の投票とAICEVOTE（アイスボート）の違い</h2>
    <h3>普通の投票</h3>
    <img src="/about-1.png" alt="Previous voting style" class="pure-img pure-u-1 pure-u-md-1-2" />
    <p class="pure-u-1 pure-u-md-1-3">普通の投票では、投票箱A/Bに最終的に投票された票の数の比で結果が決まります。</p>

    <h3>AICEVOTE</h3>
    <img src="/about-2.jpg" alt="Ice block" class="pure-img pure-u-1 pure-u-md-1-2" />
    <p class="pure-u-1 pure-u-md-1-3">AICEVOTEでは投票用紙の代わりに氷を投票します。</p>
    <img src="/about-3.png" alt="New ballot box" class="pure-img pure-u-1 pure-u-md-1-2" />
    <p class="pure-u-1 pure-u-md-1-3">それぞれの投票箱の底は網目になっています。</p>
    <img src="/about-4.png" alt="The ice is melting" class="pure-img pure-u-1 pure-u-md-1-2" />
    <p class="pure-u-1 pure-u-md-1-3">時間が経てばあなたが投票した氷は少しずつ溶けて、水となって網目から落ちていきます。</p>
    <img src="/about-5.png" alt="The ice is melting" class="pure-img pure-u-1 pure-u-md-1-2" />
    <p class="pure-u-1 pure-u-md-1-3">つまり、最近に投票された票の価値を高く、時間が経つほど次第に価値を低いものと捉えるのです。</p>
    <img src="/about-6.png" alt="The ice is melting" class="pure-img pure-u-1 pure-u-md-1-2" />
    <p class="pure-u-1 pure-u-md-1-3">
      その瞬間に投票箱に入っている氷の量をポイント化した合計をリアルタイムに表示しています。
      投票箱はいつでも開かれており再投票できます。
    </p>
    <p>要は、こうしていつでも、もしも今「一般的な投票」を行ったらどうなるか？の結果を教えてくれるんです。</p>

    <h2>AICEVOTEのメリット</h2>
    <h3>AI</h3>
    <p>リアルタイムに何％の人があなたと同じように思っているか計算（機械学習）し、結果をすぐに知ることができます。</p>
    <h3>ICE</h3>
    <p>過去の投票結果の履歴を、時系列にグラフ化しており、自由に知り分析することができます。</p>
    <h3>VOTE</h3>
    <p>いつでも投票、再投票が可能で、あなたがフォローする人や、インフルエンサーの投票結果を知ることができます。</p>
    <nuxt-link to="/signin" class="pure-button pure-button-primary">さあ今すぐ始めよう</nuxt-link>
  </div>
</template>